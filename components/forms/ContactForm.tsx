'use client';

import Link from 'next/link';
import { useState } from 'react';
import { formOptions, forms } from '@/config/site';
import { HoneypotField } from './HoneypotField';
import { useContactSubmit } from './useContactSubmit';

const fieldClass =
  'h-12 rounded-[10px] border border-line-strong bg-white px-3.5 text-base font-medium text-ink';
const selectClass =
  'h-12 rounded-[10px] border border-line-strong bg-white px-3 text-base font-medium text-ink';
const labelClass = 'grid gap-1.5 text-[13px] font-bold';
const rowClass = 'grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4';

/** Full audit request form on /contact. Options come from config. */
export function ContactForm() {
  const { state, error, submit } = useContactSubmit('contact');
  const [values, setValues] = useState({ name: '', email: '', url: '' });

  if (state === 'sent') {
    return (
      <div className="rounded-card-lg border border-line bg-surface p-10 text-center">
        <div
          aria-hidden="true"
          className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-positive-bg text-[26px] font-extrabold text-positive"
        >
          ✓
        </div>
        <h2 className="mb-0 mt-[18px] font-display text-[28px] font-extrabold tracking-[-0.02em]">
          {forms.contact.successHeading}
          {values.name}.
        </h2>
        <p className="mb-0 mt-2.5 text-base leading-[1.6] text-pretty text-ink-muted">
          {forms.contact.successBodyBefore}
          <strong>{values.url}</strong>
          {forms.contact.successBodyMiddle}
          <strong>{values.email}</strong>
          {forms.contact.successBodyAfter}
        </p>
        <Link href="/" className="mt-[22px] inline-flex font-bold">
          ← {forms.contact.backLink}
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-card-lg border border-line bg-surface p-panel-sm"
    >
      <HoneypotField />

      <div className={rowClass}>
        <label className={labelClass}>
          <span>{forms.fields.name.label} *</span>
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            placeholder={forms.fields.name.placeholder}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          <span>{forms.fields.email.label} *</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder={forms.fields.email.placeholder}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={fieldClass}
          />
        </label>
      </div>

      <div className={rowClass}>
        <label className={labelClass}>
          <span>{forms.fields.url.label} *</span>
          <input
            name="url"
            required
            maxLength={300}
            autoComplete="url"
            placeholder={forms.fields.url.placeholder}
            value={values.url}
            onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          <span>{forms.fields.phone.label}</span>
          <input
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            placeholder={forms.fields.phone.placeholder}
            className={fieldClass}
          />
        </label>
      </div>

      <div className={rowClass}>
        <label className={labelClass}>
          <span>{forms.fields.problem.label} *</span>
          <select name="problem" required defaultValue="" className={selectClass}>
            <option value="">{forms.fields.problem.placeholder}</option>
            {formOptions.problems.map((problem) => (
              <option key={problem} value={problem}>
                {problem}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          <span>{forms.fields.budget.label}</span>
          <select name="budget" defaultValue="" className={selectClass}>
            <option value="">{forms.fields.budget.placeholder}</option>
            {formOptions.budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        <span>{forms.fields.message.label}</span>
        <textarea
          name="message"
          rows={4}
          maxLength={4000}
          placeholder={forms.fields.message.placeholder}
          className="resize-y rounded-[10px] border border-line-strong bg-white px-3.5 py-3 text-base font-medium text-ink"
        />
      </label>

      {error ? (
        <p role="alert" className="m-0 text-sm font-semibold text-negative">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="h-[54px] cursor-pointer rounded-xl border-0 bg-brand text-[17px] font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === 'submitting' ? 'Sending…' : forms.contact.submit}
      </button>
      <span className="text-center text-[12.5px] text-ink-soft">{forms.contact.disclaimer}</span>
    </form>
  );
}
