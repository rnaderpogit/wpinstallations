// Add a new service = add one object here. Nav, footer, Services overview and Service page all read from this list.
export const services = [
  {
    slug: "wordpress-seo",
    name: "WordPress SEO",
    short: "Get found on Google",
    icon: "search",
    summary: "Show up when local customers search for what you sell. We fix the technical problems, tune your pages, and build the content Google wants to rank.",
    headline: "Get found on Google by people ready to buy.",
    sub: "Most WordPress sites are invisible for the searches that matter. We find out why, fix it, and report progress in numbers you can actually read.",
    problems: [
      "You're on page 3 (or nowhere) for the services you sell.",
      "Competitors with worse work show up above you.",
      "Your last SEO agency sent reports you couldn't understand."
    ],
    steps: [
      { t: "Technical clean-up", d: "Broken links, duplicate pages, slow pages, missing sitemaps — the plumbing Google checks before it trusts a site." },
      { t: "Page-by-page optimization", d: "Every service page gets a clear title, headline, and description written for your customers, not for robots." },
      { t: "Content that ranks", d: "We map what your customers search for and fill the gaps with pages and articles that answer those questions." },
      { t: "Monthly plain-English report", d: "Rankings, traffic, and leads — one page, no jargon, with what we did and what's next." }
    ],
    outcomes: [
      { n: "3 → 27", l: "keywords on page 1", note: "sample" },
      { n: "+180%", l: "organic visitors in 6 months", note: "sample" },
      { n: "2.4×", l: "more contact-form leads", note: "sample" }
    ],
    packages: [
      { name: "SEO Foundation", who: "For sites that have never been optimized", includes: ["Full technical audit and fixes", "On-page optimization for up to 10 pages", "Google Business Profile check", "Analytics and Search Console setup", "One-time project"] },
      { name: "SEO Growth", who: "For businesses that want to keep climbing", includes: ["Everything in Foundation", "2 new ranking articles per month", "Monthly link and citation building", "Competitor tracking", "Monthly report and call"], featured: true }
    ],
    faq: [
      { q: "How long until I see results?", a: "Technical fixes show up in 2–4 weeks. Meaningful ranking gains usually take 3–6 months. We'll show you progress every month, not just at the end." },
      { q: "Do I have to sign a long contract?", a: "No. Foundation is a one-time project. Growth is month-to-month — cancel any time with 30 days' notice." },
      { q: "Will you need access to my site?", a: "Yes, an administrator login. We create our own account so you can see and remove it any time." }
    ]
  },
  {
    slug: "geo",
    name: "GEO — AI Search",
    short: "Get cited by ChatGPT & Google AI",
    icon: "spark",
    summary: "When someone asks ChatGPT or Google's AI 'who's the best plumber near me?', the answer comes from a short list of trusted sites. We get you on that list.",
    headline: "Get your business recommended by ChatGPT and Google AI.",
    sub: "Generative Engine Optimization (GEO) makes your site the source AI tools quote when customers ask for a recommendation. It's the new front page.",
    problems: [
      "You ask ChatGPT about your industry in your city and you're not mentioned.",
      "Google's AI answer appears above your listing and takes the click.",
      "You've heard 'AI search' matters but nobody has explained what to actually do."
    ],
    steps: [
      { t: "AI visibility check", d: "We ask the major AI tools the questions your customers ask and record who gets recommended today." },
      { t: "Make your site quotable", d: "Clear answers, structured data, and consistent facts about your business so AI systems can understand and trust it." },
      { t: "Build the signals AI trusts", d: "Reviews, directory listings, and mentions on the sources AI tools already rely on." },
      { t: "Track citations monthly", d: "A simple report showing which questions now return your business — and which we're going after next." }
    ],
    outcomes: [
      { n: "0 → 12", l: "AI answers that cite you", note: "sample" },
      { n: "Top 3", l: "in Google AI Overview for your main service", note: "sample" },
      { n: "+34%", l: "direct 'found you on ChatGPT' inquiries", note: "sample" }
    ],
    packages: [
      { name: "GEO Starter", who: "For businesses new to AI search", includes: ["AI visibility audit across ChatGPT, Gemini, Perplexity and Google AI", "Structured data and business-fact clean-up", "10 question-answer pages", "One-time project"] },
      { name: "GEO Ongoing", who: "For businesses that want to own their category", includes: ["Everything in Starter", "Monthly citation tracking", "New answer content every month", "Review and listing management", "Monthly report and call"], featured: true }
    ],
    faq: [
      { q: "Is GEO different from SEO?", a: "They overlap — a healthy, fast, clear site helps both. GEO adds the extra work that makes AI systems quote you: structured facts, direct answers, and trusted mentions." },
      { q: "Can you guarantee ChatGPT will recommend me?", a: "No one can control an AI's answers. What we can do is make you the most quotable, trusted option — and show you the citations as they happen." },
      { q: "Do I need SEO first?", a: "Usually it's best to do both. If your site has serious technical issues, we'll fix those first so the GEO work has something solid to stand on." }
    ]
  },
  {
    slug: "speed-optimization",
    name: "Speed Optimization",
    short: "Load in under 2 seconds",
    icon: "bolt",
    summary: "Slow sites lose visitors before the page even appears. We make your WordPress site fast — and keep it that way — without rebuilding it.",
    headline: "Make your WordPress site load in under 2 seconds.",
    sub: "Half of visitors leave a page that takes more than 3 seconds. Google notices too. We fix the real causes of slowness, not just the symptoms.",
    problems: [
      "Your site takes 5+ seconds to load on a phone.",
      "Your Google speed score is in the red and you don't know why.",
      "Every plugin you've installed to 'fix speed' made it worse."
    ],
    steps: [
      { t: "Speed diagnosis", d: "We measure real load times on real phones and find exactly which images, plugins, and scripts are slowing you down." },
      { t: "Image and code optimization", d: "Oversized images compressed, unused code removed, fonts and scripts loaded in the right order." },
      { t: "Caching and hosting tune-up", d: "Server-level caching and a content delivery network so pages are ready before visitors ask for them." },
      { t: "Before/after proof", d: "You get a side-by-side report: load time, Google speed score, and Core Web Vitals — before and after." }
    ],
    outcomes: [
      { n: "6.8s → 1.4s", l: "mobile load time", note: "sample" },
      { n: "41 → 96", l: "Google PageSpeed score", note: "sample" },
      { n: "−38%", l: "visitors leaving before the page loads", note: "sample" }
    ],
    packages: [
      { name: "Speed Fix", who: "For a one-time tune-up", includes: ["Full speed diagnosis", "Image, code and font optimization", "Caching and CDN setup", "Before/after report", "30 days of follow-up support"] },
      { name: "Speed Care", who: "For sites that need to stay fast", includes: ["Everything in Speed Fix", "Monthly speed monitoring", "Plugin and WordPress updates tested for speed", "Priority fixes when something slows down", "Monthly report"], featured: true }
    ],
    faq: [
      { q: "Will you break my site?", a: "We work on a staging copy first, test everything, then move changes live. If anything looks off, we roll back in minutes." },
      { q: "Do I need new hosting?", a: "Sometimes. If your hosting is the bottleneck we'll tell you plainly and recommend options — we don't sell hosting." },
      { q: "How fast is fast enough?", a: "Under 2 seconds on mobile and a Google PageSpeed score of 90+ is our target for most business sites." }
    ]
  }
];

export const bySlug = (slug) => services.find((s) => s.slug === slug) || services[0];
