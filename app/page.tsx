import { AuditForm } from '@/components/forms/AuditForm';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ResultsBand } from '@/components/sections/ResultsBand';
import { SampleReportCard } from '@/components/sections/SampleReportCard';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { TrustSection } from '@/components/sections/TrustSection';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faq, home, primaryCta, services } from '@/config/site';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-12 px-6 pb-section-sm pt-section-lg">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-tint px-3 py-1.5 text-[13px] font-bold tracking-[0.02em] text-brand">
            {home.hero.badge}
          </div>
          <h1 className="mt-5 font-display text-display-xl font-extrabold text-balance">
            {home.hero.headline}
          </h1>
          <p className="mt-[22px] max-w-[540px] text-lead-lg text-pretty text-ink-muted">
            {home.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryCta.href} arrow>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={home.hero.secondaryCta.href} variant="secondary">
              {home.hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <ul className="mt-[22px] flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-sm font-semibold text-ink-soft">
            {home.hero.ticks.map((tick) => (
              <li key={tick}>
                <span aria-hidden="true">✓ </span>
                {tick}
              </li>
            ))}
          </ul>
        </div>
        <SampleReportCard />
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-line bg-surface">
        <div className="mx-auto max-w-shell px-6 py-section">
          <SectionHeading
            eyebrow={home.services.eyebrow}
            heading={home.services.heading}
            className="max-w-[640px]"
          />
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <ResultsBand />
      <TrustSection />

      {/* FAQ */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-10 px-6 py-section">
          <SectionHeading eyebrow={home.faq.eyebrow} heading={home.faq.heading}>
            <p className="mt-4 text-base leading-[1.6] text-ink-muted">
              {home.faq.noteBefore}
              <Link href="/contact" className="font-bold">
                {home.faq.noteLink}
              </Link>
              {home.faq.noteAfter}
            </p>
          </SectionHeading>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-shell px-6 py-section">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-10 rounded-panel bg-brand p-panel-lg text-white">
          <div>
            <h2 className="m-0 font-display text-heading-xl font-extrabold text-balance">
              {home.closing.heading}
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-pretty text-on-brand">
              {home.closing.body}
            </p>
            <Link
              href="/contact"
              className="mt-[22px] inline-flex font-bold text-white underline underline-offset-4"
            >
              {home.closing.link} →
            </Link>
          </div>
          <AuditForm />
        </div>
      </section>
    </>
  );
}
