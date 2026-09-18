'use client';

import { useState } from 'react';
import { forms } from '@/config/site';

export type SubmitState = 'idle' | 'submitting' | 'sent' | 'error';

/** Shared submit handling for the audit and contact forms. */
export function useContactSubmit(formType: 'audit' | 'contact') {
  const [state, setState] = useState<SubmitState>('idle');
  const [error, setError] = useState<string>('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('submitting');
    setError('');

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formType }),
      });

      if (response.ok) {
        setState('sent');
        return;
      }

      setState('error');
      if (response.status === 429) setError(forms.errors.rateLimited);
      else if (response.status === 400) setError(forms.errors.invalid);
      else setError(forms.errors.generic);
    } catch {
      setState('error');
      setError(forms.errors.generic);
    }
  }

  return { state, error, submit };
}
