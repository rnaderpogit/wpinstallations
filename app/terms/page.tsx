import type { Metadata } from 'next';
import { contact, site } from '@/config/site';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms for using the ${site.name} website.`,
  alternates: { canonical: '/terms' },
};

/* DRAFT — placeholder terms. Replace with reviewed copy before launch. */
export default function TermsPage() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-section-lg">
      <Eyebrow>Terms</Eyebrow>
      <h1 className="mt-3.5 font-display text-display-sm font-extrabold text-balance">
        Terms of use.
      </h1>

      <div className="mt-6 rounded-card border border-dashed border-line-strong bg-surface p-5 text-[15px] leading-[1.6] text-ink-soft">
        <strong className="text-ink">Draft.</strong> Placeholder terms. Replace with copy reviewed
        for your jurisdiction before launch.
      </div>

      <div className="mt-8 grid gap-7 text-body-lg text-ink-muted">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">This site</h2>
          <p className="mt-2.5">
            The content here describes services offered by {site.name}. Figures shown on the site
            and marked as samples are illustrative and are not a promise of any particular result.
          </p>
        </div>
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">Engagements</h2>
          <p className="mt-2.5">
            Any work we do for you is governed by the written proposal and agreement we send you,
            not by this page. Where the two disagree, the signed agreement wins.
          </p>
        </div>
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">Contact</h2>
          <p className="mt-2.5">
            Questions about these terms:{' '}
            <a href={`mailto:${contact.email}`} className="font-bold">
              {contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
