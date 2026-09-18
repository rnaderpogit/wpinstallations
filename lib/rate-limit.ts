import 'server-only';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

/**
 * Shared-store rate limiting. In-memory counters do not survive across Vercel
 * serverless instances, so a limit that must actually hold needs Redis.
 *
 * When the Upstash vars are absent (local dev), this returns null and the
 * caller skips limiting rather than failing the request.
 */
const hasUpstash =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

export const rateLimiter = hasUpstash
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '10 m'),
      prefix: 'wpi:contact',
      analytics: false,
    })
  : null;

/** Best-effort client IP from the proxy headers Vercel sets. */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0];
    if (first) return first.trim();
  }
  return headers.get('x-real-ip') ?? 'unknown';
}
