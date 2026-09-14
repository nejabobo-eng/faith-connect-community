import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://faithconnect.community'
  return ['', '/about', '/ministries', '/initiatives', '/leadership', '/contact', '/donate', '/privacy', '/terms'].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : path === '/donate' ? .9 : .7 }))
}
