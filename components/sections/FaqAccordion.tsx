'use client';

import { useId, useState } from 'react';
import type { FaqItem } from '@/config/site';

interface FaqAccordionProps {
  items: readonly FaqItem[];
  /** Index open on first render; -1 opens none. */
  defaultOpen?: number;
}

/** One-open-at-a-time accordion. Matches the prototype's rotating "+" marker. */
export function FaqAccordion({ items, defaultOpen = 0 }: FaqAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="grid gap-2">
      {items.map((item, index) => {
        const isOpen = index === open;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.q} className="overflow-hidden rounded-[14px] border border-line bg-white">
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-5 py-[18px] text-left text-faq-q font-bold text-ink"
            >
              {item.q}
              <span
                aria-hidden="true"
                className="grid h-7 w-7 flex-none place-items-center rounded-full bg-surface-tint text-[18px] leading-none text-brand transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="m-0 px-5 pb-5 text-body text-pretty text-ink-muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
