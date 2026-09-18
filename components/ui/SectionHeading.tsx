import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  /** Visual size; the element is always an h2. */
  size?: 'lg' | 'sm';
  className?: string;
  eyebrowClassName?: string;
  headingClassName?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  heading,
  size = 'lg',
  className,
  eyebrowClassName,
  headingClassName,
  children,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'mt-3 font-display font-extrabold text-balance',
          size === 'lg' ? 'text-heading-lg' : 'text-heading-sm',
          headingClassName,
        )}
      >
        {heading}
      </h2>
      {children}
    </div>
  );
}
