import { z } from 'zod';

/**
 * Server-boundary schema for both forms. Every field has an explicit maximum;
 * unexpected shapes are rejected, never coerced.
 */

export const MAX = {
  name: 120,
  email: 200,
  url: 300,
  phone: 40,
  problem: 120,
  budget: 60,
  message: 4000,
} as const;

/** Largest body we will parse, before validation. */
export const MAX_BODY_BYTES = 16 * 1024;

const trimmed = (max: number) => z.string().trim().max(max);

export const contactSubmissionSchema = z.object({
  formType: z.enum(['audit', 'contact']),
  name: trimmed(MAX.name).min(1),
  email: trimmed(MAX.email).min(3).email(),
  url: trimmed(MAX.url).min(1),
  phone: trimmed(MAX.phone).optional().default(''),
  problem: trimmed(MAX.problem).optional().default(''),
  budget: trimmed(MAX.budget).optional().default(''),
  message: trimmed(MAX.message).optional().default(''),
  /** Honeypot. Bots fill it; humans never see it. Must be empty. */
  company: z.string().max(200).optional().default(''),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
