import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'on-brand';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'bg-white text-ink border border-line hover:bg-surface',
  'on-brand': 'bg-white text-brand hover:bg-surface-tint',
};

const sizes: Record<Size, string> = {
  md: 'text-base px-[22px] py-[14px]',
  lg: 'text-[17px] px-6 py-4',
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Appends the design's trailing arrow. */
  arrow?: boolean;
  className?: string;
}

/** The CTA used across the site. Renders as a link — every CTA navigates. */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  arrow = false,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-bold no-underline transition-colors',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
      {arrow ? <span aria-hidden="true">→</span> : null}
    </Link>
  );
}
