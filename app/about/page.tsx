import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { about, primaryCta } from '@/config/site';

export const metadata: Metadata = {
  title: 'About',
  description: about.lead,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-shell px-6 py-section-lg">
        <div className="max-w-[760px]">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h1 className="mt-3.5 font-display text-display-lg font-extrabold text-balance">
            {about.headline}
          </h1>
          <p className="mt-5 text-lead-lg text-pretty text-ink-muted">{about.lead}</p>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5 px-6 py-section">
          {about.values.map((value) => (
            <div key={value.title} className="rounded-card border border-line bg-white p-7">
              <h2 className="m-0 font-display text-[22px] font-bold tracking-[-0.01em]">
                {value.title}
              </h2>
              <p className="mt-2.5 text-[15.5px] leading-[1.6] text-ink-muted">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-12 px-6 py-section">
        <div>
          <SectionHeading eyebrow={about.where.eyebrow} heading={about.where.heading}>
            <p className="mt-4 text-base leading-[1.6] text-pretty text-ink-muted">
              {about.where.body}
            </p>
          </SectionHeading>
          <ButtonLink href={primaryCta.href} size="md" arrow className="mt-7">
            {primaryCta.label}
          </ButtonLink>
        </div>
        <div className="grid aspect-[4/3] place-items-center rounded-card-lg border border-dashed border-line-strong bg-surface p-6 text-center text-sm font-bold text-ink-soft">
          {about.where.imagePlaceholder}
        </div>
      </section>
    </>
  );
}
