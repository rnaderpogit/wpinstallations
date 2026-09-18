'use client';

import { useState } from 'react';
import { forms } from '@/config/site';
import { HoneypotField } from './HoneypotField';
import { useContactSubmit } from './useContactSubmit';

const inputClass =
  'h-12 rounded-[10px] border border-line-strong px-3.5 text-base font-medium text-ink';
const labelClass = 'grid gap-1.5 text-[13px] font-bold';

/** Three-field audit request in the home page closing CTA. */
export function AuditForm() {
  const { state, error, submit } = useContactSubmit('audit');
  const [values, setValues] = useState({ name: '', email: '', url: '' });

  if (state === 'sent') {
    return (
      <div className="rounded-card bg-white p-8 text-center text-ink">
        <div
          aria-hidden="true"
          className="mx-auto grid h-[52px] w-[52px] place-items-center rounded-full bg-positive-bg text-2xl font-extrabold text-positive"
        >
          ✓
        </div>
        <h3 className="mb-0 mt-4 font-display text-2xl font-extrabold">
          {forms.audit.successHeading}
          {values.name}.
        </h3>
        <p className="mb-0 mt-2 text-[15.5px] leading-[1.6] text-ink-muted">
          {forms.audit.successBodyBefore}
          <strong>{values.url}</strong>
          {forms.audit.successBodyAfter}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-card bg-white p-6 text-ink">
      <HoneypotField />

      <label className={labelClass}>
        <span>{forms.audit.nameLabel}</span>
        <input
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          placeholder={forms.fields.name.placeholder}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass}
        />
      </label>

      <label className={labelClass}>
        <span>{forms.fields.email.label}</span>
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder={forms.fields.email.placeholder}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={inputClass}
        />
      </label>

      <label className={labelClass}>
        <span>{forms.fields.url.label}</span>
        <input
          name="url"
          required
          maxLength={300}
          autoComplete="url"
          placeholder={forms.fields.url.placeholder}
          value={values.url}
          onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
          className={inputClass}
        />
      </label>

      {error ? (
        <p role="alert" className="m-0 text-[13px] font-semibold text-negative">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-1 h-[52px] cursor-pointer rounded-xl border-0 bg-brand text-base font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === 'submitting' ? 'Sending…' : forms.audit.submit}
      </button>
      <span className="text-center text-[12.5px] text-ink-soft">{forms.audit.disclaimer}</span>
    </form>
  );
}
