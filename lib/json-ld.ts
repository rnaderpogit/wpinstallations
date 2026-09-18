/**
 * Serializes a value for embedding in a <script type="application/ld+json">.
 *
 * Escapes the characters that could break out of the script element or the
 * surrounding JS context. Without this, a "</script>" sequence anywhere in the
 * data — including copy pulled from config — would terminate the tag early.
 */
export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, '\u003c')
    .replace(/>/g, '\u003e')
    .replace(/&/g, '\u0026')
    .replace(/\u2028/g, '\u2028')
    .replace(/\u2029/g, '\u2029');
}
