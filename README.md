# WPInstallations

Marketing site for WPInstallations — WordPress SEO, AI search (GEO) and speed
optimization. Next.js 14 (App Router) + TypeScript + Tailwind, deployed on Vercel.

Ported from the Claude Design bundle in [`design-reference/`](design-reference/),
which is kept in the repo as the visual source of truth.

## Adding a service

`config/site.ts` is the single source of truth. **Adding a service is a one-object
edit** — append an object to the `services` array and it appears automatically in:

- the header dropdown and the mobile menu
- the footer Services column
- the home page service grid (numbered `01`, `02`, … from array position)
- `/services`
- its own prerendered `/services/<slug>` page
- the "Other services" chips on every sibling service page
- `sitemap.xml`

No other file needs touching. The same file also holds nav, contact details,
process steps, the site-wide FAQ, contact-form options and all page copy.

## Commands

```bash
npm run dev        # local dev server
npm run verify     # tsc --noEmit && next lint && next build
npm run build      # production build
```

## Environment

Copy `.env.example` to `.env.local` and fill it in. Everything except
`NEXT_PUBLIC_SITE_URL` is server-side only and must never be exposed to the browser.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and origin checks |
| `RESEND_API_KEY` | Transactional email for form submissions |
| `RESEND_FROM` | Verified sender address |
| `LEAD_NOTIFICATION_EMAIL` | Inbox that receives new leads |
| `UPSTASH_REDIS_REST_URL` / `_TOKEN` | Shared-store rate limiting for the form |

**Until Resend and Upstash are configured, `/api/contact` validates and logs
submissions but sends no email and applies no rate limit.** It returns success so
the form works in preview; set the variables before launch or leads go nowhere.

## Form security

`POST /api/contact` (the only non-static route) enforces, in order: POST-only,
same-origin check against the request Host, a 16 KB body cap, Zod validation with
per-field length limits, a honeypot that silently accepts bot submissions, and an
Upstash sliding-window rate limit (5 per 10 minutes per IP). Errors return a
generic body with a correlation ID; details are logged server-side without PII.

## Deviations from the prototype

- **Responsive chrome** uses CSS breakpoints (`lg` = 900px) instead of the
  prototype's JS `window.innerWidth` listener — no hydration mismatch or flash.
- **Fonts** are self-hosted via `next/font` rather than a Google Fonts `<link>`,
  which lets the CSP forbid external font and style origins.
- **Muted meta labels** ("SAMPLE REPORT", "PLACEHOLDER", "Client logo") use
  `#5B6475` on light backgrounds instead of the prototype's `#8A94A6`, which fails
  WCAG AA contrast there (2.87:1). The dark results band keeps `#8A94A6` (5.61:1).
- **`/privacy` and `/terms`** are draft pages written to match what the code
  actually collects. Have them reviewed before launch.
- The dead `#blog` nav link was dropped; `nav` in config restores it in one line.
