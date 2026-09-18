import { SectionHeading } from '@/components/ui/SectionHeading';
import { home } from '@/config/site';

const { trust } = home;

/** "Why business owners choose us" — points plus testimonial placeholders. */
export function TrustSection() {
  return (
    <section className="mx-auto max-w-shell px-6 py-section">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-12">
        <div>
          <SectionHeading eyebrow={trust.eyebrow} heading={trust.heading} />
          <div className="mt-8 grid gap-[18px]">
            {trust.points.map((point) => (
              <div key={point.strong} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 flex-none place-items-center rounded-full bg-surface-tint text-sm font-extrabold text-brand"
                >
                  ✓
                </span>
                <div>
                  <strong className="text-base">{point.strong}</strong>
                  <span className="text-[15.5px] leading-[1.6] text-ink-muted">{point.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {trust.testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="relative m-0 rounded-card border border-line bg-surface p-7"
            >
              <span className="absolute right-3.5 top-3 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                {trust.placeholderTag}
              </span>
              <blockquote className="m-0">
                <p className="m-0 font-display text-xl leading-[1.4] tracking-[-0.01em]">
                  {testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="mt-[18px] flex items-center gap-3">
                <span aria-hidden="true" className="h-10 w-10 rounded-full bg-line-strong" />
                <div>
                  <div className="text-[15px] font-bold">{testimonial.name}</div>
                  <div className="text-[13px] text-ink-soft">{testimonial.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: trust.logoCount }).map((_, index) => (
              <div
                key={index}
                className="grid h-12 place-items-center rounded-[10px] border border-dashed border-line-strong text-[11px] font-bold text-ink-soft"
              >
                {trust.logoPlaceholder}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
