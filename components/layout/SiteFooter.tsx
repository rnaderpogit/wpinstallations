import Link from 'next/link';
import { contact, footerCompanyLinks, legalLinks, services, site } from '@/config/site';

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white">
      {children}
    </h2>
  );
}

const footerLink = 'text-[15px] text-on-dark no-underline hover:text-white';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto max-w-shell px-6 pb-8 pt-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
          <div className="max-w-[320px]">
            <div className="flex items-center gap-2.5 text-white">
              <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-white font-display text-base font-extrabold text-brand">
                {site.logoMark}
              </span>
              <span className="font-display text-[18px] font-bold">{site.name}</span>
            </div>
            <p className="mt-4 text-[15px] leading-[1.6]">{site.description}</p>
          </div>

          <div>
            <ColumnHeading>Services</ColumnHeading>
            <div className="flex flex-col gap-2.5">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className={footerLink}>
                  {service.name}
                </Link>
              ))}
              <Link href="/services" className={footerLink}>
                All services
              </Link>
            </div>
          </div>

          <div>
            <ColumnHeading>Company</ColumnHeading>
            <div className="flex flex-col gap-2.5">
              {footerCompanyLinks.map((link) => (
                <Link key={link.label} href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <div className="flex flex-col gap-2.5 text-[15px]">
              <a href={`tel:${contact.phoneHref}`} className={footerLink}>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className={footerLink}>
                {contact.email}
              </a>
              <span>
                {contact.location}
                <br />
                {contact.serviceArea}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-white/[0.12] pt-6 text-[13px]">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-on-dark no-underline hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
