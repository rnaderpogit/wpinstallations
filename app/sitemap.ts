import type { MetadataRoute } from 'next';
import { serviceSlugs, site } from '@/config/site';

/** Static routes plus one entry per service, generated from config. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/services', '/about', '/contact', '/privacy', '/terms'];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${site.url}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
