import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { contact, contactPage } from '@/config/site';

export const metadata: Metadata = {
  title: 'Free site audit',
  description: contactPage.lead,
  alternates: { canonical: '/contact' },
};

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="text-ink-soft">{label}</span> · {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-start gap-12 px-6 py-section">
      <div>
        <Eyebrow>{contactPage.eyebrow}</Eyebrow>
        <h1 className="mt-3.5 font-display text-display-sm font-extrabold text-balance">
          {contactPage.headline}
        </h1>
        <p className="mt-5 text-[17px] leading-[1.6] text-pretty text-ink-muted">
          {contactPage.lead}
        </p>

        <ol className="mt-8 grid list-none gap-3.5 p-0">
          {contactPage.whatHappens.map((item, index) => (
            <li key={item} className="flex gap-3 text-[15.5px] leading-[1.5]">
              <span
                aria-hidden="true"
                className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full bg-surface-tint text-[13px] font-extrabold text-brand"
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-2.5 border-t border-line pt-7 text-[15.5px]">
          <DetailRow label={contactPage.detailLabels.phone}>
            <a href={`tel:${contact.phoneHref}`} className="font-bold no-underline">
              {contact.phone}
            </a>
          </DetailRow>
          <DetailRow label={contactPage.detailLabels.email}>
            <a href={`mailto:${contact.email}`} className="font-bold no-underline">
              {contact.email}
            </a>
          </DetailRow>
          <DetailRow label={contactPage.detailLabels.hours}>{contact.hours}</DetailRow>
          <DetailRow label={contactPage.detailLabels.location}>
            {contact.location} · {contact.serviceArea}
          </DetailRow>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
