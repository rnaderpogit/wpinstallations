import { ButtonLink } from '@/components/ui/Button';
import { primaryCta } from '@/config/site';

interface CtaBandProps {
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** The blue rounded panel used to close the services, service and about pages. */
export function CtaBand({
  heading,
  body,
  ctaLabel = primaryCta.label,
  ctaHref = primaryCta.href,
}: CtaBandProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-panel bg-brand p-panel text-white">
      <div className="max-w-[560px]">
        <h2 className="m-0 font-display text-heading-md font-extrabold text-balance">{heading}</h2>
        <p className="mb-0 mt-3 text-body-lg text-on-brand">{body}</p>
      </div>
      <ButtonLink href={ctaHref} variant="on-brand" arrow>
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}
