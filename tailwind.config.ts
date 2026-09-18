import type { Config } from 'tailwindcss';

/**
 * Tokens extracted from the Claude Design bundle in design-reference/.
 * Every colour below appears verbatim in the prototype's inline styles —
 * change a value here, not in a component.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B3D91',
          dark: '#072B68',
        },
        ink: {
          DEFAULT: '#0F1B33',
          muted: '#4B5565',
          soft: '#5B6475',
          faint: '#8A94A6',
        },
        surface: {
          DEFAULT: '#F6F8FB',
          tint: '#EEF3FB',
        },
        line: {
          DEFAULT: '#E3E8F0',
          strong: '#C7D0E0',
        },
        'on-dark': {
          DEFAULT: '#C7D0E0',
          soft: '#8FB3F5',
          faint: '#A7B1C4',
        },
        'on-brand': '#C7D9F7',
        positive: {
          DEFAULT: '#15803D',
          bright: '#4ADE80',
          bg: '#DCFCE7',
        },
        negative: {
          DEFAULT: '#B91C1C',
          bright: '#F87171',
          bg: '#FEE2E2',
        },
      },
      fontFamily: {
        // Bricolage Grotesque: every heading and display numeral.
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        // Manrope: body copy, labels, buttons.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid scale lifted from the prototype's clamp() values.
        'display-xl': ['clamp(38px, 5vw, 62px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(38px, 5vw, 60px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(36px, 4.6vw, 58px)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(36px, 4.6vw, 56px)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        'heading-xl': ['clamp(30px, 3.8vw, 46px)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'heading-lg': ['clamp(30px, 3.6vw, 44px)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'heading-md': ['clamp(28px, 3.4vw, 40px)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'heading-sm': ['clamp(28px, 3.2vw, 38px)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'metric-lg': ['clamp(36px, 4vw, 52px)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'metric-md': ['clamp(34px, 3.6vw, 46px)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'lead-lg': ['clamp(17px, 1.4vw, 20px)', { lineHeight: '1.55' }],
        'lead-md': ['clamp(17px, 1.3vw, 19px)', { lineHeight: '1.55' }],
        // The prototype's half-pixel body sizes, kept exact.
        'body-lg': ['16px', { lineHeight: '1.6' }],
        body: ['15.5px', { lineHeight: '1.6' }],
        'body-sm': ['14.5px', { lineHeight: '1.5' }],
        'faq-q': ['16.5px', { lineHeight: '1.4' }],
      },
      spacing: {
        // Fluid section padding from the prototype.
        section: 'clamp(56px, 7vw, 96px)',
        'section-lg': 'clamp(56px, 8vw, 104px)',
        'section-sm': 'clamp(48px, 6vw, 80px)',
        'panel-lg': 'clamp(32px, 5vw, 64px)',
        panel: 'clamp(32px, 5vw, 56px)',
        'panel-sm': 'clamp(20px, 3vw, 32px)',
        // Clearance for the mobile sticky CTA bar.
        'mobile-bar': '72px',
      },
      maxWidth: {
        shell: '1160px',
      },
      borderRadius: {
        card: '18px',
        'card-lg': '20px',
        panel: '24px',
      },
      boxShadow: {
        dropdown: '0 16px 40px rgba(15, 27, 51, 0.12)',
        lift: '0 16px 40px rgba(15, 27, 51, 0.08)',
        popover: '0 20px 50px rgba(15, 27, 51, 0.18)',
        fab: '0 10px 30px rgba(11, 61, 145, 0.35)',
      },
      screens: {
        // The prototype switches desktop/mobile chrome at 900px.
        lg: '900px',
      },
    },
  },
  plugins: [],
};

export default config;
