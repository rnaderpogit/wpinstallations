import type { Metadata } from 'next';
import { CtaBand } from '@/components/sections/CtaBand';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { services, servicesPage } from '@/config/site';

export const metadata: Metadata = {
  title: 'Services',
  description: servicesPage.sub,
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-shell px-6 pt-section-lg">
        <div className="max-w-[720px]">
          <Eyebrow>{servicesPage.eyebrow}</Eyebrow>
          <h1 className="mt-3.5 font-display text-display-lg font-extrabold text-balance">
            {servicesPage.headline}
          </h1>
          <p className="mt-5 text-lead-lg text-pretty text-ink-muted">{servicesPage.sub}</p>
        </div>
      </section>

      <section className="mx-auto max-w-shell px-6 py-[clamp(40px,5vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              variant="full"
              ctaLabel={servicesPage.cardCta}
            />
          ))}

          <div className="flex flex-col justify-center rounded-card-lg border border-dashed border-line-strong p-8 text-ink-soft">
            <div className="text-[13px] font-bold uppercase tracking-[0.08em]">
              {servicesPage.comingSoon.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-[22px] font-bold tracking-[-0.01em] text-ink">
              {servicesPage.comingSoon.heading}
            </h2>
            <p className="mt-2.5 text-[15px] leading-[1.6]">{servicesPage.comingSoon.body}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-shell px-6 pb-section">
        <CtaBand heading={servicesPage.cta.heading} body={servicesPage.cta.body} />
      </section>
    </>
  );
}
