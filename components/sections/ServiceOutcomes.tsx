import { SampleTag } from '@/components/ui/SampleTag';
import type { ServiceOutcome } from '@/config/site';
import { servicePage } from '@/config/site';

/** Dark outcomes band on a service page. */
export function ServiceOutcomes({ outcomes }: { outcomes: ServiceOutcome[] }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-shell px-6 py-section-sm">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="m-0 font-display text-heading-sm font-extrabold">
            {servicePage.outcomes.heading}
          </h2>
          <SampleTag>{servicePage.outcomes.sampleTag}</SampleTag>
        </div>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
          {outcomes.map((outcome) => (
            <div
              key={outcome.l}
              className="rounded-card border border-white/[0.12] bg-white/[0.06] p-[26px]"
            >
              <div className="font-display text-metric-md font-extrabold text-positive-bright">
                {outcome.n}
              </div>
              <div className="mt-2.5 text-[15px] leading-[1.5] text-on-dark">{outcome.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
