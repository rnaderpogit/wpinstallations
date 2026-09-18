import { cn } from '@/lib/cn';

/** Small uppercase label above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'text-[13px] font-bold uppercase tracking-[0.08em] text-brand',
        className,
      )}
    >
      {children}
    </div>
  );
}
