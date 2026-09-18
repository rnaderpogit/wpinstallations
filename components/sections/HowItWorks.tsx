import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { home, primaryCta, steps } from '@/config/site';

/** Three-step process band on the home page. Steps come from config. */
export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-shell px-6 py-section">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-10">
        <div>
          <SectionHeading eyebrow={home.how.eyebrow} heading={home.how.heading} />
          <ButtonLink href={primaryCta.href} size="md" arrow className="mt-7">
            {home.how.cta}
          </ButtonLink>
        </div>
        <ol className="grid list-none gap-2 p-0">
          {steps.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-[56px_1fr] gap-4 border-t border-line py-[22px]"
            >
              <div className="font-display text-[28px] font-extrabold leading-none text-brand">
                {step.n}
              </div>
              <div>
                <h3 className="m-0 font-display text-[21px] font-bold tracking-[-0.01em]">
                  {step.t}
                </h3>
                <p className="mb-0 mt-2 text-[15.5px] leading-[1.6] text-pretty text-ink-muted">
                  {step.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
