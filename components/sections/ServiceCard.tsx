import Link from 'next/link';
import type { Service } from '@/config/site';
import { serviceNumber } from '@/config/site';
import { cn } from '@/lib/cn';

interface ServiceCardProps {
  service: Service;
  index: number;
  /** "compact" is the home grid; "full" adds the problem list (services page). */
  variant?: 'compact' | 'full';
  ctaLabel?: string;
}

export function ServiceCard({
  service,
  index,
  variant = 'compact',
  ctaLabel = 'Learn more',
}: ServiceCardProps) {
  const full = variant === 'full';

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'flex flex-col border border-line bg-white text-ink no-underline transition-[transform,box-shadow] duration-150 hover:-translate-y-[3px] hover:shadow-lift motion-reduce:hover:translate-y-0',
        full ? 'rounded-card-lg p-8' : 'rounded-card p-7',
      )}
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface-tint font-display text-[18px] font-extrabold text-brand">
        {serviceNumber(index)}
      </div>

      {full ? (
        <h2 className="mt-[22px] font-display text-[26px] font-extrabold tracking-[-0.02em]">
          {service.name}
        </h2>
      ) : (
        <h3 className="mt-5 font-display text-[23px] font-bold tracking-[-0.01em]">
          {service.name}
        </h3>
      )}

      <div className={cn('mt-1 font-bold text-brand', full ? 'text-[15px]' : 'text-sm')}>
        {service.short}
      </div>

      <p
        className={cn(
          'mt-3 text-pretty text-ink-muted',
          full ? 'text-body-lg' : 'flex-1 text-[15.5px] leading-[1.6]',
        )}
      >
        {service.summary}
      </p>

      {full ? (
        <div className="mt-5 grid flex-1 gap-2">
          {service.problems.map((problem) => (
            <div key={problem} className="flex gap-2.5 text-body-sm text-ink-muted">
              <span aria-hidden="true" className="flex-none font-extrabold text-negative">
                !
              </span>
              <span>{problem}</span>
            </div>
          ))}
        </div>
      ) : null}

      <span
        className={cn('font-bold text-brand', full ? 'mt-6 text-base' : 'mt-5 text-[15px]')}
      >
        {ctaLabel} →
      </span>
    </Link>
  );
}
