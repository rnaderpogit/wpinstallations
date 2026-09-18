'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { chatPrompt, contact, primaryCta } from '@/config/site';

/**
 * The floating chat bubble and the mobile sticky call/CTA bar.
 *
 * Split out of SiteFooter so the footer can stay a server component.
 */
export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setChatOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      {chatOpen ? (
        <div
          id="chat-prompt"
          className="fixed bottom-[88px] right-5 z-[60] w-[300px] rounded-2xl border border-line bg-white p-5 shadow-popover"
        >
          <div className="text-base font-bold text-ink">{chatPrompt.heading}</div>
          <p className="mb-3.5 mt-1.5 text-sm leading-[1.5] text-ink-soft">{chatPrompt.body}</p>
          <Link
            href="/contact"
            className="flex justify-center rounded-[10px] bg-brand p-[11px] text-sm font-bold text-white no-underline hover:bg-brand-dark"
          >
            {chatPrompt.cta}
          </Link>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setChatOpen((open) => !open)}
        aria-expanded={chatOpen}
        aria-controls="chat-prompt"
        aria-label={chatOpen ? 'Close contact prompt' : 'Open contact prompt'}
        className="fixed bottom-[84px] right-5 z-[60] grid h-14 w-14 cursor-pointer place-items-center rounded-full border-0 bg-brand text-white shadow-fab lg:bottom-5"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H10l-5 4v-4a3 3 0 01-1-2.2V6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-[55] flex gap-2.5 border-t border-line bg-white/95 px-4 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-[10px] lg:hidden">
        <a
          href={`tel:${contact.phoneHref}`}
          aria-label={`Call ${contact.phone}`}
          className="grid h-[50px] w-[52px] flex-none place-items-center rounded-xl border border-line text-ink no-underline"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <Link
          href={primaryCta.href}
          className="mr-[66px] flex h-[50px] flex-1 items-center justify-center rounded-xl bg-brand text-base font-bold text-white no-underline"
        >
          {primaryCta.label}
        </Link>
      </div>
    </>
  );
}
