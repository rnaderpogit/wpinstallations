import type { Metadata } from 'next';
import { contact, site } from '@/config/site';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `How ${site.name} collects and uses the information you send us.`,
  alternates: { canonical: '/privacy' },
};

/*
 * DRAFT — describes what the code actually does today. Have this reviewed
 * before launch, and update it whenever the form fields or processors change.
 */
export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-section-lg">
      <Eyebrow>Privacy</Eyebrow>
      <h1 className="mt-3.5 font-display text-display-sm font-extrabold text-balance">
        What we collect, and what we do with it.
      </h1>

      <div className="mt-6 rounded-card border border-dashed border-line-strong bg-surface p-5 text-[15px] leading-[1.6] text-ink-soft">
        <strong className="text-ink">Draft.</strong> This page describes what the site does today.
        Have it reviewed before launch and keep it in step with any change to the form or the
        services that process submissions.
      </div>

      <div className="mt-8 grid gap-7 text-body-lg text-ink-muted">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">What we collect</h2>
          <p className="mt-2.5">
            Only what you type into the audit form: your name, email address, website address and
            — optionally — your phone number, the problem you picked, a budget range and your
            message. We do not collect anything &ldquo;just in case&rdquo;, and we do not run
            advertising or cross-site tracking on this site.
          </p>
        </div>
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">How we use it</h2>
          <p className="mt-2.5">
            To prepare your site audit and reply to you. Submissions are delivered to us by email
            through Resend, our email provider, and are not sold, rented or shared with anyone
            else. We keep a server log of when a submission happened so we can spot abuse; that
            log does not contain the contents of your message.
          </p>
        </div>
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">Your choices</h2>
          <p className="mt-2.5">
            Email {' '}
            <a href={`mailto:${contact.email}`} className="font-bold">
              {contact.email}
            </a>{' '}
            to ask what we hold about you, to correct it, or to have it deleted. We will action the
            request and confirm when it is done.
          </p>
        </div>
      </div>
    </section>
  );
}
