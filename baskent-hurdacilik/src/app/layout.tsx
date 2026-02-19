import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { siteData } from '@/data/siteData';
import { buildAbsoluteUrl } from '@/lib/format';
import { SiteShell } from '@/components/SiteShell';
import Script from 'next/script'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  metadataBase: new URL(siteData.meta.siteUrl),
  title: {
    default: siteData.meta.defaultTitle,
    template: `%s | ${siteData.brandName}`
  },
  description: siteData.meta.defaultDescription,
  keywords: siteData.meta.keywords,
  alternates: {
    canonical: siteData.meta.siteUrl
  },
  openGraph: {
    title: siteData.meta.defaultTitle,
    description: siteData.meta.defaultDescription,
    url: siteData.meta.siteUrl,
    siteName: siteData.brandName,
   images: [{ url: buildAbsoluteUrl('/logo.png'), width: 800, height: 600, alt: siteData.brandName }],
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.meta.defaultTitle,
    description: siteData.meta.defaultDescription,
    images: [buildAbsoluteUrl('/logo.png')]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'RecyclingCenter',
    name: siteData.brandName,
    url: siteData.meta.siteUrl,
    image: buildAbsoluteUrl('/logo.png'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ankara',
      addressCountry: 'TR'
    },
    areaServed: siteData.serviceAreas,
    telephone: siteData.phone,
    email: siteData.email,
    openingHours: siteData.workingHours,
    priceRange: '₺₺',
    founder: siteData.ownerName
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteData.faq.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: { '@type': 'Answer', text: qa.answer }
    }))
  };

  return (
    <html lang="tr" className={manrope.variable}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8449280071315340"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
  
      <body className="min-h-screen bg-sand text-slate-900 relative">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, faqSchema]) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
