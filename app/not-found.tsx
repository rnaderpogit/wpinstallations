import { ButtonLink } from '@/components/ui/Button';
import { primaryCta, services } from '@/config/site';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-shell px-6 py-section-lg">
      <div className="max-w-[640px]">
        <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand">404</div>
        <h1 className="mt-3.5 font-display text-display-md font-extrabold text-balance">
          That page has moved or never existed.
        </h1>
        <p className="mt-5 text-lead-lg text-pretty text-ink-muted">
          Try one of our services, or tell us about your site and we&rsquo;ll send a free audit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={primaryCta.href} arrow>
            {primaryCta.label}
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            All services
          </ButtonLink>
        </div>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[15px] font-bold text-ink no-underline hover:bg-surface"
            >
              {service.name} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
