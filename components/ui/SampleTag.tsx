/** Dashed "Sample data" marker used on the results and outcomes bands. */
export function SampleTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-dashed border-white/30 px-2.5 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-ink-faint">
      {children}
    </span>
  );
}
