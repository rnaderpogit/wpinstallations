'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { contact, nav, primaryCta, services, site } from '@/config/site';
import { cn } from '@/lib/cn';

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-none items-center gap-2.5 text-ink no-underline"
    >
      <span
        aria-hidden="true"
        className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-brand font-display text-[18px] font-extrabold tracking-[-0.5px] text-white"
      >
        {site.logoMark}
      </span>
      <span className="font-display text-[19px] font-bold tracking-[-0.3px]">{site.name}</span>
    </Link>
  );
}

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hoverCapable, setHoverCapable] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hover-open only where hovering is real. On a touchscreen, mouseenter
  // fires just before click, which would open then immediately re-close.
  useEffect(() => {
    setHoverCapable(window.matchMedia('(hover: hover)').matches);
  }, []);

  // Close both menus on navigation.
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes whichever menu is open.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Click outside closes the desktop dropdown.
  useEffect(() => {
    if (!servicesOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[72px] max-w-shell items-center gap-7 px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-[26px] lg:flex" aria-label="Main">
          <div
            ref={dropdownRef}
            className="relative py-[22px]"
            onMouseEnter={hoverCapable ? () => setServicesOpen(true) : undefined}
            onMouseLeave={hoverCapable ? () => setServicesOpen(false) : undefined}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              className="flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[15px] font-semibold text-ink"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {servicesOpen ? (
              <div className="absolute -left-4 top-16 w-[320px] rounded-[14px] border border-line bg-white p-2 shadow-dropdown">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded-[10px] px-3.5 py-3 text-ink no-underline hover:bg-surface-tint"
                  >
                    <span className="block text-[15px] font-bold">{service.name}</span>
                    <span className="mt-0.5 block text-[13px] text-ink-soft">{service.short}</span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="mx-2 mb-1 mt-1.5 block border-t border-line px-3.5 py-2.5 text-sm font-bold text-brand no-underline"
                >
                  All services →
                </Link>
              </div>
            ) : null}
          </div>

          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-ink no-underline hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${contact.phoneHref}`}
          className="hidden whitespace-nowrap text-[15px] font-bold text-ink no-underline lg:inline"
        >
          {contact.phone}
        </a>
        <Link
          href={primaryCta.href}
          className="hidden whitespace-nowrap rounded-[10px] bg-brand px-[18px] py-[11px] text-[15px] font-bold text-white no-underline hover:bg-brand-dark lg:inline-flex lg:items-center"
        >
          {primaryCta.label}
        </Link>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="ml-auto grid h-11 w-11 cursor-pointer place-items-center rounded-[10px] border border-line bg-white text-ink lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d={menuOpen ? 'M5 5l10 10M15 5L5 15' : 'M3 5h14M3 10h14M3 15h14'}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-line bg-white px-6 pb-6 pt-3 lg:hidden',
          menuOpen ? 'flex flex-col gap-1' : 'hidden',
        )}
      >
        <span className="px-0 pb-1.5 pt-3 text-xs font-bold uppercase tracking-[0.08em] text-ink-soft">
          Services
        </span>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="block border-b border-[#F1F4F9] py-3 text-[17px] font-bold text-ink no-underline"
          >
            {service.name}
          </Link>
        ))}
        <Link
          href="/services"
          className="block border-b border-[#F1F4F9] py-3 text-[17px] font-bold text-brand no-underline"
        >
          All services
        </Link>
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block border-b border-[#F1F4F9] py-3 text-[17px] font-bold text-ink no-underline"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`tel:${contact.phoneHref}`}
          className="block py-2 pb-4 text-[15px] font-semibold text-ink-soft no-underline"
        >
          {contact.phone}
        </a>
        <Link
          href={primaryCta.href}
          className="flex justify-center rounded-[10px] bg-brand px-[18px] py-3.5 text-base font-bold text-white no-underline"
        >
          {primaryCta.label}
        </Link>
      </div>
    </header>
  );
}
