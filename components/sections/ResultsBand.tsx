import { SampleTag } from '@/components/ui/SampleTag';
import { home } from '@/config/site';

const { results } = home;

/** Dark before/after band on the home page. */
export function ResultsBand() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-shell px-6 py-section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[600px]">
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-on-dark-soft">
              {results.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-heading-lg font-extrabold text-balance">
              {results.heading}
            </h2>
          </div>
          <SampleTag>{results.sampleTag}</SampleTag>
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {results.cards.map((card) => (
            <div
              key={card.label}
              className="rounded-card border border-white/[0.12] bg-white/[0.06] p-7"
            >
              <div className="text-sm font-bold text-on-dark-soft">{card.label}</div>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.06em] text-on-dark-faint">
                    {results.beforeLabel}
                  </div>
                  <div className="mt-1.5 font-display text-metric-lg font-extrabold text-negative-bright">
                    {card.before}
                  </div>
                </div>
                <div aria-hidden="true" className="text-2xl text-on-dark-soft">
                  →
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.06em] text-on-dark-faint">
                    {results.afterLabel}
                  </div>
                  <div className="mt-1.5 font-display text-metric-lg font-extrabold text-positive-bright">
                    {card.after}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm leading-[1.5] text-on-dark">{card.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
