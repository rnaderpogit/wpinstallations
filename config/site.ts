/**
 * Single source of truth for the WPInstallations site.
 *
 * Everything the site renders comes from this file: navigation, footer, the
 * services overview, every service detail page, form options and page copy.
 *
 * ADDING A SERVICE IS A ONE-OBJECT EDIT. Append an object to the services
 * array below and it appears automatically in the header dropdown, the mobile
 * menu, the footer, the home grid, /services, its own /services/<slug> page,
 * the "other services" chips and the sitemap. Nothing else needs touching.
 *
 * Copy in services, steps, faq and formOptions is ported verbatim from the
 * approved design bundle (design-reference/.../services.js and content.js).
 */

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface ServiceStep {
  /** Step title. */
  t: string;
  /** Step description. */
  d: string;
}

export interface ServiceOutcome {
  /** Headline figure, e.g. "3 -> 27". */
  n: string;
  /** What the figure measures. */
  l: string;
  /** Provenance tag; "sample" renders the placeholder treatment. */
  note?: string;
}

export interface ServicePackage {
  name: string;
  /** Who the package suits. */
  who: string;
  includes: string[];
  /** Renders the "Most popular" highlight treatment. */
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Service {
  /** URL segment: /services/<slug>. Must be unique. */
  slug: string;
  name: string;
  /** One-line benefit, shown under the name in nav and cards. */
  short: string;
  /** Reserved for future icon rendering; cards currently show a numeral. */
  icon: string;
  /** Card paragraph on the home and services pages. */
  summary: string;
  /** H1 on the service detail page. */
  headline: string;
  /** Supporting paragraph under the detail-page H1. */
  sub: string;
  problems: string[];
  steps: ServiceStep[];
  outcomes: ServiceOutcome[];
  packages: ServicePackage[];
  faq: FaqItem[];
}

export interface ProcessStep {
  /** Display numeral, e.g. "01". */
  n: string;
  t: string;
  d: string;
}

export interface NavLink {
  href: string;
  label: string;
}

/* -------------------------------------------------------------------------- */
/*  Site + contact                                                             */
/* -------------------------------------------------------------------------- */

export const site = {
  name: 'WPInstallations',
  /** Single-letter mark used in the header and footer logo. */
  logoMark: 'W',
  tagline: 'WordPress SEO · AI Search (GEO) · Speed',
  description:
    'WordPress SEO, AI search (GEO) and speed optimization for small businesses across the United States and Canada. Based in Dallas–Fort Worth.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wpinstallations.com',
  locale: 'en-US',
} as const;

export const contact = {
  /** Display form. */
  phone: '(214) 555-0148',
  /** tel: href form. */
  phoneHref: '+12145550148',
  email: 'hello@wpinstallations.com',
  hours: 'Mon–Fri, 9am–6pm Central',
  location: 'Dallas–Fort Worth, TX',
  serviceArea: 'Serving the US & Canada',
  city: 'Dallas–Fort Worth',
  region: 'TX',
  country: 'US',
} as const;

/** Primary navigation. Services renders as a dropdown built from `services`. */
export const nav: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/** The single CTA repeated across the site. */
export const primaryCta = {
  label: 'Get a free site audit',
  href: '/contact',
} as const;

export const footerCompanyLinks: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/contact', label: 'Free site audit' },
];

export const legalLinks: NavLink[] = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

/* -------------------------------------------------------------------------- */
/*  Services — append one object here to add a service site-wide               */
/* -------------------------------------------------------------------------- */

export const services: Service[] = [
  {
    slug: 'wordpress-seo',
    name: 'WordPress SEO',
    short: 'Get found on Google',
    icon: 'search',
    summary:
      'Show up when local customers search for what you sell. We fix the technical problems, tune your pages, and build the content Google wants to rank.',
    headline: 'Get found on Google by people ready to buy.',
    sub: "Most WordPress sites are invisible for the searches that matter. We find out why, fix it, and report progress in numbers you can actually read.",
    problems: [
      "You're on page 3 (or nowhere) for the services you sell.",
      'Competitors with worse work show up above you.',
      "Your last SEO agency sent reports you couldn't understand.",
    ],
    steps: [
      {
        t: 'Technical clean-up',
        d: 'Broken links, duplicate pages, slow pages, missing sitemaps — the plumbing Google checks before it trusts a site.',
      },
      {
        t: 'Page-by-page optimization',
        d: 'Every service page gets a clear title, headline, and description written for your customers, not for robots.',
      },
      {
        t: 'Content that ranks',
        d: 'We map what your customers search for and fill the gaps with pages and articles that answer those questions.',
      },
      {
        t: 'Monthly plain-English report',
        d: "Rankings, traffic, and leads — one page, no jargon, with what we did and what's next.",
      },
    ],
    outcomes: [
      { n: '3 → 27', l: 'keywords on page 1', note: 'sample' },
      { n: '+180%', l: 'organic visitors in 6 months', note: 'sample' },
      { n: '2.4×', l: 'more contact-form leads', note: 'sample' },
    ],
    packages: [
      {
        name: 'SEO Foundation',
        who: 'For sites that have never been optimized',
        includes: [
          'Full technical audit and fixes',
          'On-page optimization for up to 10 pages',
          'Google Business Profile check',
          'Analytics and Search Console setup',
          'One-time project',
        ],
      },
      {
        name: 'SEO Growth',
        who: 'For businesses that want to keep climbing',
        includes: [
          'Everything in Foundation',
          '2 new ranking articles per month',
          'Monthly link and citation building',
          'Competitor tracking',
          'Monthly report and call',
        ],
        featured: true,
      },
    ],
    faq: [
      {
        q: 'How long until I see results?',
        a: "Technical fixes show up in 2–4 weeks. Meaningful ranking gains usually take 3–6 months. We'll show you progress every month, not just at the end.",
      },
      {
        q: 'Do I have to sign a long contract?',
        a: "No. Foundation is a one-time project. Growth is month-to-month — cancel any time with 30 days' notice.",
      },
      {
        q: 'Will you need access to my site?',
        a: 'Yes, an administrator login. We create our own account so you can see and remove it any time.',
      },
    ],
  },
  {
    slug: 'geo',
    name: 'GEO — AI Search',
    short: 'Get cited by ChatGPT & Google AI',
    icon: 'spark',
    summary:
      "When someone asks ChatGPT or Google's AI 'who's the best plumber near me?', the answer comes from a short list of trusted sites. We get you on that list.",
    headline: 'Get your business recommended by ChatGPT and Google AI.',
    sub: "Generative Engine Optimization (GEO) makes your site the source AI tools quote when customers ask for a recommendation. It's the new front page.",
    problems: [
      "You ask ChatGPT about your industry in your city and you're not mentioned.",
      "Google's AI answer appears above your listing and takes the click.",
      "You've heard 'AI search' matters but nobody has explained what to actually do.",
    ],
    steps: [
      {
        t: 'AI visibility check',
        d: 'We ask the major AI tools the questions your customers ask and record who gets recommended today.',
      },
      {
        t: 'Make your site quotable',
        d: 'Clear answers, structured data, and consistent facts about your business so AI systems can understand and trust it.',
      },
      {
        t: 'Build the signals AI trusts',
        d: 'Reviews, directory listings, and mentions on the sources AI tools already rely on.',
      },
      {
        t: 'Track citations monthly',
        d: "A simple report showing which questions now return your business — and which we're going after next.",
      },
    ],
    outcomes: [
      { n: '0 → 12', l: 'AI answers that cite you', note: 'sample' },
      { n: 'Top 3', l: 'in Google AI Overview for your main service', note: 'sample' },
      { n: '+34%', l: "direct 'found you on ChatGPT' inquiries", note: 'sample' },
    ],
    packages: [
      {
        name: 'GEO Starter',
        who: 'For businesses new to AI search',
        includes: [
          'AI visibility audit across ChatGPT, Gemini, Perplexity and Google AI',
          'Structured data and business-fact clean-up',
          '10 question-answer pages',
          'One-time project',
        ],
      },
      {
        name: 'GEO Ongoing',
        who: 'For businesses that want to own their category',
        includes: [
          'Everything in Starter',
          'Monthly citation tracking',
          'New answer content every month',
          'Review and listing management',
          'Monthly report and call',
        ],
        featured: true,
      },
    ],
    faq: [
      {
        q: 'Is GEO different from SEO?',
        a: 'They overlap — a healthy, fast, clear site helps both. GEO adds the extra work that makes AI systems quote you: structured facts, direct answers, and trusted mentions.',
      },
      {
        q: 'Can you guarantee ChatGPT will recommend me?',
        a: "No one can control an AI's answers. What we can do is make you the most quotable, trusted option — and show you the citations as they happen.",
      },
      {
        q: 'Do I need SEO first?',
        a: "Usually it's best to do both. If your site has serious technical issues, we'll fix those first so the GEO work has something solid to stand on.",
      },
    ],
  },
  {
    slug: 'speed-optimization',
    name: 'Speed Optimization',
    short: 'Load in under 2 seconds',
    icon: 'bolt',
    summary:
      'Slow sites lose visitors before the page even appears. We make your WordPress site fast — and keep it that way — without rebuilding it.',
    headline: 'Make your WordPress site load in under 2 seconds.',
    sub: 'Half of visitors leave a page that takes more than 3 seconds. Google notices too. We fix the real causes of slowness, not just the symptoms.',
    problems: [
      'Your site takes 5+ seconds to load on a phone.',
      "Your Google speed score is in the red and you don't know why.",
      "Every plugin you've installed to 'fix speed' made it worse.",
    ],
    steps: [
      {
        t: 'Speed diagnosis',
        d: 'We measure real load times on real phones and find exactly which images, plugins, and scripts are slowing you down.',
      },
      {
        t: 'Image and code optimization',
        d: 'Oversized images compressed, unused code removed, fonts and scripts loaded in the right order.',
      },
      {
        t: 'Caching and hosting tune-up',
        d: 'Server-level caching and a content delivery network so pages are ready before visitors ask for them.',
      },
      {
        t: 'Before/after proof',
        d: 'You get a side-by-side report: load time, Google speed score, and Core Web Vitals — before and after.',
      },
    ],
    outcomes: [
      { n: '6.8s → 1.4s', l: 'mobile load time', note: 'sample' },
      { n: '41 → 96', l: 'Google PageSpeed score', note: 'sample' },
      { n: '−38%', l: 'visitors leaving before the page loads', note: 'sample' },
    ],
    packages: [
      {
        name: 'Speed Fix',
        who: 'For a one-time tune-up',
        includes: [
          'Full speed diagnosis',
          'Image, code and font optimization',
          'Caching and CDN setup',
          'Before/after report',
          '30 days of follow-up support',
        ],
      },
      {
        name: 'Speed Care',
        who: 'For sites that need to stay fast',
        includes: [
          'Everything in Speed Fix',
          'Monthly speed monitoring',
          'Plugin and WordPress updates tested for speed',
          'Priority fixes when something slows down',
          'Monthly report',
        ],
        featured: true,
      },
    ],
    faq: [
      {
        q: 'Will you break my site?',
        a: 'We work on a staging copy first, test everything, then move changes live. If anything looks off, we roll back in minutes.',
      },
      {
        q: 'Do I need new hosting?',
        a: "Sometimes. If your hosting is the bottleneck we'll tell you plainly and recommend options — we don't sell hosting.",
      },
      {
        q: 'How fast is fast enough?',
        a: 'Under 2 seconds on mobile and a Google PageSpeed score of 90+ is our target for most business sites.',
      },
    ],
  },
];

/** All service slugs, for generateStaticParams and the sitemap. */
export const serviceSlugs: string[] = services.map((s) => s.slug);

/** Look up a service by slug. Returns undefined so pages can call notFound(). */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Every service except the given slug — powers the "Other services" chips. */
export function getOtherServices(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug);
}

/** Zero-padded display numeral derived from position: 01, 02, 03, 04... */
export function serviceNumber(index: number): string {
  return String(index + 1).padStart(2, '0');
}

/* -------------------------------------------------------------------------- */
/*  Process steps + site-wide FAQ (ported from content.js)                     */
/* -------------------------------------------------------------------------- */

export const steps: ProcessStep[] = [
  {
    n: '01',
    t: 'Free site audit',
    d: "Send us your web address. Within 2 business days you get a plain-English report of what's holding your site back — and what it's costing you.",
  },
  {
    n: '02',
    t: 'A clear fix plan',
    d: "We tell you exactly what we'll do, what it costs, and what to expect. No jargon, no surprises, no long contracts.",
  },
  {
    n: '03',
    t: 'We do the work, you see results',
    d: 'We fix, optimize, and report back with numbers you understand: load time, rankings, AI mentions, and leads.',
  },
];

export const faq: FaqItem[] = [
  {
    q: 'What is GEO and why should I care?',
    a: "GEO (Generative Engine Optimization) makes your business the one AI tools like ChatGPT and Google's AI answers recommend. More customers now ask an AI for a recommendation instead of scrolling search results — if you're not cited, you're not in the conversation.",
  },
  {
    q: 'Do you only work with WordPress sites?',
    a: "Yes. Focusing on one platform means we know every common problem and its fix. If your site isn't on WordPress, we'll point you to someone good.",
  },
  {
    q: "What's in the free site audit?",
    a: "Speed measurements on mobile and desktop, a check of how Google and AI tools currently see you, the top issues we found, and what we'd recommend — in plain English.",
  },
  {
    q: 'How long before I see results?',
    a: 'Speed improvements are immediate. SEO and GEO gains typically start showing in 4–8 weeks and build over 3–6 months. You get a progress report every month.',
  },
  {
    q: 'Do I have to sign a long contract?',
    a: "No. One-time projects are one-time. Monthly plans are month-to-month with 30 days' notice.",
  },
  {
    q: 'Will I understand what you did?',
    a: "That's the point. Every report is written for a business owner, not a developer. If something isn't clear, we get on a call and walk you through it.",
  },
  {
    q: 'Where are you located and who do you serve?',
    a: "We're based in the Dallas–Fort Worth area and work with businesses across the United States and Canada. Everything happens online — calls, reports, and updates.",
  },
  {
    q: 'Will you need access to my website?',
    a: 'Yes, an administrator login. We create our own account so you can see exactly what we do and remove access whenever you like.',
  },
  {
    q: 'Can you fix my site without redesigning it?',
    a: "In most cases, yes. Speed, SEO and GEO work happens under the hood. If a redesign would genuinely help, we'll tell you — but we won't push one.",
  },
  {
    q: 'What happens after the audit?',
    a: "You get the report and a short call if you want one. If we're a fit, you'll get a written plan. If not, you keep the report — no strings.",
  },
];

/** Contact-form select options (ported from content.js). */
export const formOptions = {
  problems: [
    "Can't find my site on Google",
    "AI tools don't mention my business",
    'Site loads too slowly',
    'Not getting enough leads',
    'Not sure — I want an audit',
  ],
  budgets: ['Under $1,000', '$1,000 – $3,000', '$3,000 – $7,500', '$7,500+', 'Not sure yet'],
} as const;

/* -------------------------------------------------------------------------- */
/*  Page copy — lifted from the design bundle so no component hardcodes text   */
/* -------------------------------------------------------------------------- */

export const home = {
  hero: {
    badge: site.tagline,
    headline: "Your WordPress site should be bringing you customers. Let's fix that.",
    sub: 'We help small businesses get found on Google, get recommended by AI tools like ChatGPT, and load fast — explained in plain English, no jargon.',
    secondaryCta: { label: 'See how it works', href: '#how' },
    ticks: ['Free, no obligation', 'Report in 2 business days', 'WordPress only'],
  },
  sampleReport: {
    tag: 'Sample report',
    label: 'Free site audit',
    domain: 'yourbusiness.com',
    speed: {
      title: 'Mobile speed score',
      value: '41 → 96',
      caption: 'Load time 6.8s → 1.4s',
      /** Red segment width, then green fill of the remaining track. */
      beforePct: 41,
      afterPct: 93,
    },
    keywords: {
      title: 'Keywords on Google page 1',
      value: '3 → 27',
      /** Bar heights as percentages; the first three render muted. */
      bars: [20, 26, 30, 48, 64, 82, 100],
      mutedBars: 3,
    },
    ai: {
      title: 'AI answers that recommend you',
      value: '0 → 12',
      quoteBefore: '“…for WordPress speed and SEO help, ',
      quoteStrong: 'yourbusiness.com',
      quoteAfter: ' is a solid choice for small businesses.” — AI answer',
    },
  },
  services: {
    eyebrow: 'What we do',
    heading: 'Three fixes that turn a quiet website into a busy one.',
  },
  how: {
    eyebrow: 'How it works',
    heading: 'Three steps. No jargon. No long contracts.',
    cta: 'Start with the free audit',
  },
  results: {
    eyebrow: 'Before & after',
    heading: 'Results you can read without a translator.',
    sampleTag: 'Sample data — replace with client results',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cards: [
      {
        label: 'Speed — local service business',
        before: '6.8s',
        after: '1.4s',
        note: 'Mobile load time. Google PageSpeed score went from 41 to 96. Fewer visitors leaving before the page appeared.',
      },
      {
        label: 'Rankings — regional retailer',
        before: '3',
        after: '27',
        note: 'Keywords on Google page 1 after six months. Organic visitors up 180%; contact-form leads 2.4×.',
      },
      {
        label: 'AI search — professional services',
        before: '0',
        after: '12',
        note: 'AI answers (ChatGPT, Google AI, Perplexity) that now recommend the business for its main service in its city.',
      },
    ],
  },
  trust: {
    eyebrow: 'Why business owners choose us',
    heading: 'Built for owners, not for developers.',
    points: [
      {
        strong: 'WordPress only.',
        text: " One platform, done properly — we've seen every common problem and know the fix.",
      },
      {
        strong: 'Plain-English reporting.',
        text: " One page a month: what we did, what changed, what's next.",
      },
      {
        strong: 'No long contracts.',
        text: ' Projects are one-time; monthly plans are month-to-month.',
      },
      {
        strong: 'US & Canada, remote-first.',
        text: ' Based in Dallas–Fort Worth; calls, reports and updates all happen online.',
      },
    ],
    placeholderTag: 'Placeholder',
    testimonials: [
      {
        quote:
          '“Our site went from ‘nobody can find us’ to three new calls a week. And I actually understood every report.”',
        name: 'Client name',
        meta: 'Owner, business type · City',
      },
      {
        quote:
          '“Page went from 7 seconds to under 2. Sales on mobile picked up the same month.”',
        name: 'Client name',
        meta: 'Owner, business type · City',
      },
    ],
    logoPlaceholder: 'Client logo',
    logoCount: 4,
  },
  faq: {
    eyebrow: 'Questions',
    heading: 'Straight answers to the questions owners ask us.',
    noteBefore: 'Something else on your mind? ',
    noteLink: 'Ask us directly',
    noteAfter: ' — we reply within one business day.',
  },
  closing: {
    heading: "Find out what's holding your site back — free.",
    body: "Enter your web address. In 2 business days you'll have a plain-English report on speed, Google visibility, and AI mentions. No obligation.",
    link: 'Prefer to talk first? Contact us',
  },
} as const;

export const servicesPage = {
  eyebrow: 'Services',
  headline: "Everything a WordPress site needs to get found — and nothing it doesn't.",
  sub: 'Pick the problem you have. Not sure? The free audit tells you which one is costing you the most customers.',
  cardCta: 'See how we fix it',
  comingSoon: {
    eyebrow: 'Coming soon',
    heading: 'Website design · Site audits · Google Business Profile · Google Ads',
    body: 'New services drop into this grid automatically — no layout changes needed.',
  },
  cta: {
    heading: "Don't know which one you need? That's what the audit is for.",
    body: 'Free, no obligation, in plain English — within 2 business days.',
  },
} as const;

/** Shared labels for every /services/<slug> page. */
export const servicePage = {
  backLink: 'All services',
  problemsTitle: 'Sound familiar?',
  problemsFooter: "We fix all three. Here's how ↓",
  packagesAnchorCta: 'See packages',
  work: {
    eyebrow: 'What we do',
    heading: 'The work, in plain English.',
  },
  outcomes: {
    heading: 'What clients typically see',
    sampleTag: 'Sample data — replace with real results',
  },
  packages: {
    eyebrow: 'Packages',
    heading: 'Two ways to work with us.',
    body: "Every engagement starts with the free audit. We'll recommend the package that fits — and tell you if you don't need one.",
    featuredBadge: 'Most popular',
    cta: 'Start with a free audit',
  },
  /** Rendered as `Common questions about <service name>.` */
  faqHeadingPrefix: 'Common questions about ',
  faqHeadingSuffix: '.',
  cta: {
    heading: 'Not sure this is the right fix? Start with the free audit.',
    body: "We'll tell you plainly what's wrong and what we'd do about it — no obligation.",
  },
  otherServicesLabel: 'Other services',
} as const;

export const about = {
  eyebrow: 'About WPInstallations',
  headline: 'We fix the WordPress sites that business owners gave up on.',
  lead:
    "Most small-business websites were built once, then left alone. They got slower, Google stopped paying attention, and now AI tools recommend someone else. We exist to reverse that — and to explain every step in language you'd use with a customer.",
  values: [
    {
      title: 'WordPress. Only WordPress.',
      body: "Over 40% of the web runs on it. Specializing means we've seen your problem before and already know the fix.",
    },
    {
      title: 'Plain English, always.',
      body: 'If a report needs a glossary, we rewrite it. You should know exactly what you paid for and what it did.',
    },
    {
      title: 'Results, not activity.',
      body: 'We measure load time, rankings, AI mentions and leads — not hours logged or tasks completed.',
    },
    {
      title: 'No lock-in.',
      body: 'One-time projects stay one-time. Monthly plans are month-to-month. You keep everything we build.',
    },
  ],
  where: {
    eyebrow: 'Where we work',
    heading: 'Based in Dallas–Fort Worth. Working across the US and Canada.',
    body: "Everything happens online — the audit, the calls, the reports. Whether you're in Fort Worth or Vancouver, the process is the same and the response time is one business day.",
    imagePlaceholder: 'Image placeholder — workspace, city, or map of service area',
  },
} as const;

export const contactPage = {
  eyebrow: 'Free site audit',
  headline: "Tell us about your site. We'll tell you what's wrong — free.",
  lead: "Fill in the form and within 2 business days you'll get a plain-English report covering speed, Google visibility and AI mentions — plus what we'd do about it.",
  whatHappens: [
    'We review your site by hand — no automated PDF dump.',
    'You get the report by email, with a short call if you want one.',
    "If we're a fit, you get a written plan. If not, keep the report.",
  ],
  detailLabels: {
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    location: 'Location',
  },
} as const;

/** Labels and placeholders shared by the audit and contact forms. */
export const forms = {
  fields: {
    name: { label: 'Name', placeholder: 'Jane Smith' },
    email: { label: 'Email', placeholder: 'jane@yourbusiness.com' },
    url: { label: 'Website address', placeholder: 'yourbusiness.com' },
    phone: { label: 'Phone', placeholder: '(214) 555-0000' },
    problem: { label: 'Biggest problem', placeholder: 'Choose one…' },
    budget: { label: 'Budget range', placeholder: 'Not sure yet' },
    message: {
      label: 'Anything else we should know?',
      placeholder: "What's the site for, what have you tried, what would 'success' look like?",
    },
  },
  /** Short three-field form in the home page closing CTA. */
  audit: {
    nameLabel: 'Your name',
    submit: 'Get my free site audit',
    disclaimer: "We'll never share your details. No spam, ever.",
    successHeading: 'Thanks, ',
    successBodyBefore: "We're looking at ",
    successBodyAfter: ' now. Your report will land in your inbox within 2 business days.',
  },
  /** Full form on /contact. */
  contact: {
    submit: 'Request my free site audit',
    disclaimer: 'No obligation. We never share your details.',
    successHeading: 'Got it, ',
    successBodyBefore: "We're reviewing ",
    successBodyMiddle: '. Expect your plain-English report at ',
    successBodyAfter: ' within 2 business days.',
    backLink: 'Back to home',
  },
  /** Shown when the endpoint rejects a submission. */
  errors: {
    generic: "Something went wrong sending that. Please try again, or email us directly at " + contact.email + ".",
    invalid: 'Please check the highlighted fields and try again.',
    rateLimited: "That's a few too many submissions. Please wait a minute and try again.",
  },
} as const;

/** Floating chat prompt in the footer. */
export const chatPrompt = {
  heading: 'Have a quick question?',
  body: 'We reply within one business day. Or skip the wait and request your free audit.',
  cta: 'Send a message',
} as const;
