import { home } from '@/config/site';

const { sampleReport } = home;

/** The illustrative audit report beside the home hero. Figures come from config. */
export function SampleReportCard() {
  return (
    <div className="relative rounded-card-lg border border-line bg-surface p-6">
      <span className="absolute right-4 top-3.5 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
        {sampleReport.tag}
      </span>
      <div className="text-[13px] font-bold text-ink-soft">{sampleReport.label}</div>
      <div className="mt-0.5 font-display text-[22px] font-bold">{sampleReport.domain}</div>

      <div className="mt-5 grid gap-3">
        {/* Speed */}
        <div className="rounded-[14px] border border-line bg-white px-[18px] py-4">
          <div className="flex justify-between text-sm font-bold">
            <span>{sampleReport.speed.title}</span>
            <span className="text-positive">{sampleReport.speed.value}</span>
          </div>
          <div className="mt-2.5 flex h-2 gap-1.5" aria-hidden="true">
            <div
              className="rounded bg-negative"
              style={{ width: `${sampleReport.speed.beforePct}%` }}
            />
            <div className="relative flex-1 overflow-hidden rounded bg-line">
              <div
                className="absolute inset-0 rounded bg-positive"
                style={{ width: `${sampleReport.speed.afterPct}%` }}
              />
            </div>
          </div>
          <div className="mt-2 text-[13px] text-ink-soft">{sampleReport.speed.caption}</div>
        </div>

        {/* Keywords */}
        <div className="rounded-[14px] border border-line bg-white px-[18px] py-4">
          <div className="flex justify-between text-sm font-bold">
            <span>{sampleReport.keywords.title}</span>
            <span className="text-positive">{sampleReport.keywords.value}</span>
          </div>
          <div className="mt-2.5 flex h-9 items-end gap-1" aria-hidden="true">
            {sampleReport.keywords.bars.map((height, index) => (
              <div
                key={index}
                className={
                  index < sampleReport.keywords.mutedBars
                    ? 'flex-1 rounded-[3px] bg-line-strong'
                    : 'flex-1 rounded-[3px] bg-brand'
                }
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* AI citations */}
        <div className="rounded-[14px] border border-line bg-white px-[18px] py-4">
          <div className="flex justify-between text-sm font-bold">
            <span>{sampleReport.ai.title}</span>
            <span className="text-positive">{sampleReport.ai.value}</span>
          </div>
          <p className="mt-1.5 text-[13px] leading-[1.5] text-ink-soft">
            {sampleReport.ai.quoteBefore}
            <strong className="text-ink">{sampleReport.ai.quoteStrong}</strong>
            {sampleReport.ai.quoteAfter}
          </p>
        </div>
      </div>
    </div>
  );
}
