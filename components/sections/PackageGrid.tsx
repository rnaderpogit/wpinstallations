import Link from 'next/link';
import type { ServicePackage } from '@/config/site';
import { primaryCta, servicePage } from '@/config/site';
import { cn } from '@/lib/cn';

/** Package cards. The `featured` flag drives the highlighted treatment. */
export function PackageGrid({ packages }: { packages: ServicePackage[] }) {
  return (
    <div className="mt-10 grid max-w-[860px] grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={cn(
            'flex flex-col rounded-card-lg p-[30px]',
            pkg.featured ? 'border-2 border-brand bg-surface' : 'border border-line bg-white',
          )}
        >
          {pkg.featured ? (
            <span className="mb-3.5 inline-flex self-start rounded-full bg-brand px-2.5 py-[5px] text-xs font-bold uppercase tracking-[0.06em] text-white">
              {servicePage.packages.featuredBadge}
            </span>
          ) : null}
          <h3 className="m-0 font-display text-[26px] font-extrabold tracking-[-0.02em]">
            {pkg.name}
          </h3>
          <div className="mt-1.5 text-[15px] text-ink-soft">{pkg.who}</div>
          <ul className="mb-0 mt-[22px] grid flex-1 list-none gap-2.5 p-0">
            {pkg.includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15.5px] leading-[1.5]">
                <span aria-hidden="true" className="flex-none font-extrabold text-positive">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={primaryCta.href}
            className={cn(
              'mt-[26px] flex justify-center rounded-xl border border-brand p-3.5 text-base font-bold no-underline',
              pkg.featured
                ? 'bg-brand text-white hover:bg-brand-dark'
                : 'bg-white text-brand hover:bg-surface-tint',
            )}
          >
            {servicePage.packages.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
