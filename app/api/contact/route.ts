import { NextResponse } from 'next/server';
import { contactSubmissionSchema, MAX_BODY_BYTES } from '@/lib/contact-schema';
import { mailConfigured, sendLeadEmails } from '@/lib/mail';
import { clientIp, rateLimiter } from '@/lib/rate-limit';
import { site } from '@/config/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Generic body — details stay in the server log, never in the response. */
function fail(status: number, correlationId: string) {
  return NextResponse.json({ ok: false, correlationId }, { status });
}

/**
 * Same-origin check (OWASP's recommended CSRF defence): the Origin header must
 * match the host this request actually arrived on, or one of the explicitly
 * configured production origins. Comparing against Host rather than a
 * hardcoded list means this holds on any port, preview URL or custom domain
 * without configuration.
 */
function isAllowedOrigin(origin: string | null, host: string | null): boolean {
  if (!origin) return false;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  if (host && originHost === host) return true;

  const configured = [site.url, process.env.NEXT_PUBLIC_SITE_URL]
    .filter((value): value is string => Boolean(value))
    .map((value) => {
      try {
        return new URL(value).host;
      } catch {
        return '';
      }
    })
    .filter(Boolean);

  return configured.includes(originHost);
}

export async function POST(request: Request): Promise<NextResponse> {
  const correlationId = crypto.randomUUID();

  // --- Origin check: reject cross-site and origin-less submissions ---------
  const origin = request.headers.get('origin');
  if (!isAllowedOrigin(origin, request.headers.get('host'))) {
    console.warn('[contact] origin rejected', { correlationId, origin });
    return fail(403, correlationId);
  }

  // --- Size cap before parsing -------------------------------------------
  const declared = Number(request.headers.get('content-length') ?? '0');
  if (declared > MAX_BODY_BYTES) {
    console.warn('[contact] body too large', { correlationId, declared });
    return fail(413, correlationId);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    console.warn('[contact] body too large', { correlationId });
    return fail(413, correlationId);
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(raw);
  } catch {
    return fail(400, correlationId);
  }

  // --- Schema validation --------------------------------------------------
  const result = contactSubmissionSchema.safeParse(parsedJson);
  if (!result.success) {
    // Field names only — never the submitted values.
    console.warn('[contact] validation failed', {
      correlationId,
      fields: result.error.issues.map((issue) => issue.path.join('.')),
    });
    return fail(400, correlationId);
  }
  const data = result.data;

  // --- Honeypot: accept silently so bots learn nothing ---------------------
  if (data.company.trim() !== '') {
    console.info('[contact] honeypot triggered', { correlationId });
    return NextResponse.json({ ok: true });
  }

  // --- Rate limit ---------------------------------------------------------
  if (rateLimiter) {
    const { success } = await rateLimiter.limit(clientIp(request.headers));
    if (!success) {
      console.warn('[contact] rate limited', { correlationId });
      return fail(429, correlationId);
    }
  }

  // --- Deliver ------------------------------------------------------------
  if (!mailConfigured) {
    // Local/preview without Resend keys: accept and record that it happened,
    // without PII, rather than 500ing on a missing integration.
    console.info('[contact] accepted (mail not configured)', {
      correlationId,
      formType: data.formType,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    await sendLeadEmails(data);
  } catch (error) {
    console.error('[contact] send failed', {
      correlationId,
      message: error instanceof Error ? error.message : 'unknown',
    });
    return fail(502, correlationId);
  }

  console.info('[contact] delivered', { correlationId, formType: data.formType });
  return NextResponse.json({ ok: true });
}

/** Everything other than POST is rejected. */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ ok: false }, { status: 405, headers: { Allow: 'POST' } });
}
