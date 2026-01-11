import { NextResponse } from 'next/server';
import { siteData } from '@/data/siteData';

export function GET() {
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteData.meta.siteUrl.replace(/\/$/, '')}/sitemap.xml`,
    `Host: ${siteData.meta.siteUrl.replace('https://', '').replace('http://', '')}`
  ];

  return new NextResponse(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
