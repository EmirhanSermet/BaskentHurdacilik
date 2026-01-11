import { siteData } from '@/data/siteData';
import Link from 'next/link';
import { MapPin, ExternalLink } from 'lucide-react';

export default function HizmetBolgeleriPage() {
  return (
    <div className="section-shell space-y-8 py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Hizmet bölgeleri</p>
        <h1 className="text-3xl font-bold text-slate-900">Ankara ve tüm ilçeleri</h1>
        <p className="text-sm text-slate-700">Çankaya’dan Şereflikoçhisar’a kadar tamamında adresten alım.</p>
      </div>

      <div className="card grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {siteData.serviceAreas.map((d) => (
              <div key={d} className="badge">{d}</div>
            ))}
          </div>
          <p className="text-sm font-semibold text-slate-600">İlçe listeniz farklıysa bize bildirin, çözüm üretelim.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={siteData.googleMapsUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow"
            >
              <ExternalLink className="h-4 w-4" /> Yol tarifi al
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800"
            >
              <MapPin className="h-4 w-4" /> İletişime geç
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            title="Ankara harita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122877.59024546964!2d32.70748255!3d39.9035557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f9f5d9e7c01%3A0x4766c6d0e1651aca!2sAnkara!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
