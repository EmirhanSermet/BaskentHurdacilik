import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { siteData } from '@/data/siteData';
import { priceLabel } from '@/lib/format';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { TypeDetailCalculator } from '@/components/TypeDetailCalculator';
import { TypeCard } from '@/components/TypeCard';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Phone, ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return siteData.scrapTypes.map((scrap) => ({ slug: scrap.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const scrap = siteData.scrapTypes.find((s) => s.slug === params.slug);
  if (!scrap) return {};
  const title = `${scrap.name} fiyatı ve geri dönüşüm`;
  const description = `${scrap.name} güncel fiyatı: ${priceLabel(scrap.pricePerUnit, scrap.unit)}. ${siteData.priceDisclaimer}`;
  return {
    title,
    description,
    alternates: { canonical: `/tur/${scrap.slug}` },
    openGraph: { title, description },
    twitter: { title, description }
  };
}

const fallback = 'https://images.unsplash.com/photo-1582719478248-54e9f2afce1d?auto=format&fit=crop&w=1200&q=80';

const imageUrlFor = (query?: string, url?: string) => {
  if (url) return url;
  if (query) return `https://source.unsplash.com/1200x600/?${encodeURIComponent(query)}`;
  return fallback;
};

export default function ScrapDetailPage({ params }: { params: { slug: string } }) {
  const scrap = siteData.scrapTypes.find((s) => s.slug === params.slug);
  if (!scrap) return notFound();

  const related = siteData.scrapTypes.filter((s) => s.category === scrap.category && s.slug !== scrap.slug).slice(0, 3);

  return (
    <div className="section-shell space-y-8 py-10">
      <Link href="/katalog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-accent">
        <ArrowLeft className="h-4 w-4" /> Kataloğa dön
      </Link>

      <div className="card overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src={imageUrlFor(scrap.imageQuery, scrap.imageUrl)} alt={scrap.name} fill className="object-cover" priority />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
            {scrap.category}
          </div>
        </div>
        <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Güncelleme: {scrap.lastUpdated}
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{scrap.name}</h1>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <div className="badge">{priceLabel(scrap.pricePerUnit, scrap.unit)}</div>
              {scrap.note && <div className="badge">{scrap.note}</div>}
            </div>
            <p className="text-base text-slate-700">{scrap.description}</p>
            <div className="text-xs font-semibold text-slate-500">{siteData.priceDisclaimer}</div>
            <div className="flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink({ scrap })}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp mesajı hazırla
              </a>
              <a
                href={`tel:${siteData.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800"
              >
                <Phone className="h-4 w-4" /> Hemen ara
              </a>
            </div>
          </div>
          <TypeDetailCalculator scrap={scrap} />
        </div>
      </div>

      {related.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">İlgili türler</h2>
            <Link href="/katalog" className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
              Tüm türler <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((scrapItem) => (
              <TypeCard key={scrapItem.slug} scrap={scrapItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
