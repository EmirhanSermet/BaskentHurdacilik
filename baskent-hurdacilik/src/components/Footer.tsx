import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { MapPin, Phone, Mail, Clock, Shield, ExternalLink } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const socials = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'youtube', label: 'YouTube' }
] as const;

export function Footer() {
  const topDistricts = siteData.serviceAreas.slice(0, 8);
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-xl font-semibold">{siteData.brandName}</div>
          <p className="text-sm text-slate-600">Ankara genelinde şeffaf fiyat ve hızlı geri dönüş. Yetkili: {siteData.ownerName}</p>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Güncelleme: {siteData.lastUpdated}
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div className="font-semibold text-slate-900">İletişim</div>
          <div className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /><Link href={`tel:${siteData.phone}`}>{siteData.phone}</Link></div>
          <div className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /><Link href={buildWhatsAppLink({})}>WhatsApp</Link></div>
          <div className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /><Link href={`mailto:${siteData.email}`}>{siteData.email}</Link></div>
          <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /><Link href={siteData.googleMapsUrl} target="_blank">{siteData.address}</Link></div>
          <div className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-accent" /><span>{siteData.workingHours}</span></div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div className="font-semibold text-slate-900">Hizmet Bölgeleri</div>
          <div className="flex flex-wrap gap-2">
            {topDistricts.map((d) => (
              <span key={d} className="badge">{d}</span>
            ))}
          </div>
          <Link href="/hizmet-bolgeleri" className="inline-flex items-center gap-1 text-accent">
            Tüm ilçeler <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div className="font-semibold text-slate-900">Sosyal</div>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => {
              const href = siteData.socials[s.key];
              if (!href) return null;
              return (
                <Link key={s.key} href={href} target="_blank" className="rounded-full border border-slate-200 px-3 py-1 hover:border-accent hover:text-accent">
                  {s.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Shield className="h-4 w-4" /> Güvenli bağlantı ve gizlilik odaklı.
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-4 text-center text-xs font-semibold text-slate-600">
        © {siteData.brandName} – {siteData.ownerName}
      </div>
    </footer>
  );
}
