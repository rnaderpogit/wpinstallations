import 'server-only';
import { Resend } from 'resend';
import { contact, site } from '@/config/site';
import type { ContactSubmission } from './contact-schema';

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.RESEND_FROM;
const leadInbox = process.env.LEAD_NOTIFICATION_EMAIL ?? contact.email;

export const mailConfigured = Boolean(apiKey && from);

const resend = apiKey ? new Resend(apiKey) : null;

/** Escapes user-supplied values before they reach an HTML email body. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string): string {
  if (!value) return '';
  return `<tr><td style="padding:6px 16px 6px 0;color:#5B6475;font:14px sans-serif">${esc(
    label,
  )}</td><td style="padding:6px 0;color:#0F1B33;font:14px sans-serif">${esc(value)}</td></tr>`;
}

/**
 * Sends the internal lead notification and the submitter's confirmation.
 * Only validated fields are forwarded; nothing else from the request is sent.
 */
export async function sendLeadEmails(data: ContactSubmission): Promise<void> {
  if (!resend || !from) return;

  const label = data.formType === 'audit' ? 'Audit request' : 'Contact form';

  await resend.emails.send({
    from,
    to: leadInbox,
    replyTo: data.email,
    subject: `${label}: ${data.url}`,
    html: `<h2 style="font:600 18px sans-serif;color:#0F1B33">${esc(label)}</h2>
<table>${row('Name', data.name)}${row('Email', data.email)}${row('Website', data.url)}${row(
      'Phone',
      data.phone,
    )}${row('Problem', data.problem)}${row('Budget', data.budget)}${row(
      'Message',
      data.message,
    )}</table>`,
  });

  await resend.emails.send({
    from,
    to: data.email,
    subject: `We received your request — ${site.name}`,
    html: `<p style="font:15px sans-serif;color:#0F1B33">Thanks, ${esc(data.name)}.</p>
<p style="font:15px sans-serif;color:#4B5565">We're reviewing <strong>${esc(
      data.url,
    )}</strong> and will send your plain-English report within 2 business days.</p>
<p style="font:15px sans-serif;color:#4B5565">— ${esc(site.name)} · ${esc(contact.phone)}</p>`,
  });
}
