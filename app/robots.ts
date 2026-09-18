import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

/**
 * Preview deployments must not be indexed — only the production domain
 * advertises a crawlable site.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production' || !process.env.VERCEL_ENV;

  if (!isProduction) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
