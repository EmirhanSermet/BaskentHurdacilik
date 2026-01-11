import type { MetadataRoute } from 'next';
import { siteData } from '@/data/siteData';
import { buildAbsoluteUrl } from '@/lib/format';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/katalog', '/fiyatlar', '/hizmet-bolgeleri', '/hakkimizda', '/sss', '/iletisim', '/guvenlik'];

  const items: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: buildAbsoluteUrl(path),
      lastModified: siteData.lastUpdated
    })),
    ...siteData.scrapTypes.map((scrap) => ({
      url: buildAbsoluteUrl(`/tur/${scrap.slug}`),
      lastModified: scrap.lastUpdated || siteData.lastUpdated
    }))
  ];

  return items;
}
