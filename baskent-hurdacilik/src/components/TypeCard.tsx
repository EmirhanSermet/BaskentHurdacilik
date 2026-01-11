import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { ScrapType, siteData } from '@/data/siteData';
import { priceLabel } from '@/lib/format';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const fallback = 'https://images.unsplash.com/photo-1582719478248-54e9f2afce1d?auto=format&fit=crop&w=800&q=80';

const imageUrlFor = (scrap: ScrapType) => {
  if (scrap.imageUrl) return scrap.imageUrl;
  if (scrap.imageQuery) return `https://source.unsplash.com/600x400/?${encodeURIComponent(scrap.imageQuery)}`;
  return fallback;
};

type Props = { scrap: ScrapType };

export function TypeCard({ scrap }: Props) {
  return (
    <div className="card flex flex-col overflow-hidden">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageUrlFor(scrap)}
          alt={scrap.name}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">
          {scrap.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">{scrap.lastUpdated}</div>
            <h3 className="text-lg font-bold text-slate-900">{scrap.name}</h3>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{priceLabel(scrap.pricePerUnit, scrap.unit)}</div>
        </div>
        <p className="text-sm text-slate-600 line-clamp-3">{scrap.description}</p>
        {scrap.note && <p className="text-xs font-semibold text-slate-500">{scrap.note}</p>}
        <div className="mt-auto grid gap-2">
          <Link
            href={`/tur/${scrap.slug}`}
            className="inline-flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-accent hover:text-accent"
          >
            Detay ve hesapla <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={buildWhatsAppLink({ scrap })}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp’tan sor
          </a>
        </div>
        <div className="text-[11px] font-semibold text-slate-500">{siteData.priceDisclaimer}</div>
      </div>
    </div>
  );
}
