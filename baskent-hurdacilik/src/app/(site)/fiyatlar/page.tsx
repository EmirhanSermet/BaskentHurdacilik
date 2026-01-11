import { siteData } from '@/data/siteData';
import { priceLabel } from '@/lib/format';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function FiyatlarPage() {
  return (
    <div className="section-shell space-y-6 py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Güncel fiyatlar</p>
        <h1 className="text-3xl font-bold text-slate-900">Tür / Birim / Fiyat / Not / Güncelleme</h1>
        <p className="text-sm text-slate-700">Fiyatlar tahmini olup {siteData.priceDisclaimer}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-4 py-3">Tür</th>
              <th className="px-4 py-3">Birim</th>
              <th className="px-4 py-3">Fiyat</th>
              <th className="px-4 py-3">Not</th>
              <th className="px-4 py-3">Güncelleme</th>
              <th className="px-4 py-3 text-right">WhatsApp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {siteData.scrapTypes.map((item) => (
              <tr key={item.slug} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-900">{item.name}</td>
                <td className="px-4 py-3 text-slate-700">{item.unit}</td>
                <td className="px-4 py-3 font-semibold text-slate-900">{priceLabel(item.pricePerUnit, item.unit)}</td>
                <td className="px-4 py-3 text-slate-600">{item.note || '-'}</td>
                <td className="px-4 py-3 text-slate-600">{item.lastUpdated}</td>
                <td className="px-4 py-3 text-right">
                  <a
                    href={buildWhatsAppLink({ scrap: item })}
                    className="inline-flex items-center gap-2 text-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> Yaz
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
