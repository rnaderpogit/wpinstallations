import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { PackageGrid } from '@/components/sections/PackageGrid';
import { ServiceOutcomes } from '@/components/sections/ServiceOutcomes';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  getOtherServices,
  getServiceBySlug,
  primaryCta,
  serviceSlugs,
  servicePage,
} from '@/config/site';

interface PageProps {
  params: { slug: string };
}

/** Every service in config gets a prerendered page. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.headline, description: service.summary },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const others = getOtherServices(service.slug);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-shell px-6 py-[clamp(48px,7vw,96px)]">
          <Link href="/services" className="text-sm font-bold no-underline">
            ← {servicePage.backLink}
          </Link>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-end gap-10">
            <div>
              <div className="inline-flex rounded-full bg-surface-tint px-3 py-1.5 text-[13px] font-bold text-brand">
                {service.name}
              </div>
              <h1 className="mt-[18px] font-display text-display-md font-extrabold text-balance">
                {service.headline}
              </h1>
              <p className="mt-5 max-w-[600px] text-lead-md text-pretty text-ink-muted">
                {service.sub}
              </p>
              <div className="mt-[30px] flex flex-wrap gap-3">
                <ButtonLink href={primaryCta.href} arrow>
                  {primaryCta.label}
                </ButtonLink>
                <ButtonLink href="#packages" variant="secondary">
                  {servicePage.packagesAnchorCta}
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-card-lg border border-line bg-white p-7">
              <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                {servicePage.problemsTitle}
              </h2>
              <div className="mt-4 grid gap-3.5">
                {service.problems.map((problem) => (
                  <div key={problem} className="flex gap-3 text-base leading-[1.5]">
                    <span
                      aria-hidden="true"
                      className="grid h-6 w-6 flex-none place-items-center rounded-full bg-negative-bg text-[13px] font-extrabold text-negative"
                    >
                      !
                    </span>
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-line pt-4 text-[15px] font-bold text-brand">
                {servicePage.problemsFooter}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-shell px-6 py-section">
        <SectionHeading
          eyebrow={servicePage.work.eyebrow}
          heading={servicePage.work.heading}
          className="max-w-[640px]"
        />
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-5">
          {service.steps.map((step, index) => (
            <div key={step.t} className="rounded-card border border-line p-[26px]">
              <div className="font-display text-[15px] font-extrabold text-brand">
                Step {index + 1}
              </div>
              <h3 className="mt-2.5 font-display text-[21px] font-bold tracking-[-0.01em]">
                {step.t}
              </h3>
              <p className="mt-2.5 text-[15.5px] leading-[1.6] text-pretty text-ink-muted">
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServiceOutcomes outcomes={service.outcomes} />

      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-shell px-6 py-section">
        <SectionHeading
          eyebrow={servicePage.packages.eyebrow}
          heading={servicePage.packages.heading}
          className="max-w-[640px]"
        >
          <p className="mt-3.5 text-base leading-[1.6] text-ink-muted">
            {servicePage.packages.body}
          </p>
        </SectionHeading>
        <PackageGrid packages={service.packages} />
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-10 px-6 py-section">
          <h2 className="m-0 font-display text-heading-lg font-extrabold text-balance">
            {servicePage.faqHeadingPrefix}
            {service.name}
            {servicePage.faqHeadingSuffix}
          </h2>
          <FaqAccordion items={service.faq} />
        </div>
      </section>

      {/* CTA + other services */}
      <section className="mx-auto max-w-shell px-6 py-section">
        <CtaBand heading={servicePage.cta.heading} body={servicePage.cta.body} />
        <div className="mt-10">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-soft">
            {servicePage.otherServicesLabel}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[15px] font-bold text-ink no-underline hover:bg-surface"
              >
                {other.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
