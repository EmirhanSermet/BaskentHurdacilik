'use client';

import { useMemo, useState } from 'react';
import { siteData, ScrapType } from '@/data/siteData';
import { formatCurrency, formatUnit } from '@/lib/format';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

export function PriceCalculator({ compact = false }: { compact?: boolean }) {
  const [selectedSlug, setSelectedSlug] = useState(siteData.scrapTypes[0]?.slug || '');
  const [amountInput, setAmountInput] = useState<string>('100');
  const [district, setDistrict] = useState<string>('');

  const selected: ScrapType | undefined = useMemo(
    () => siteData.scrapTypes.find((s) => s.slug === selectedSlug),
    [selectedSlug]
  );

  const amount = parseFloat(amountInput || '0');
  const total = selected ? selected.pricePerUnit * (Number.isFinite(amount) ? amount : 0) : 0;

  const whatsappLink = buildWhatsAppLink({ scrap: selected, amount, unit: selected?.unit, district });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className={`card ${compact ? 'p-4' : 'p-6'} space-y-4`}
    >
      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Fiyat Hesapla</div>
        <div className="text-lg font-bold text-slate-900">Tahmini geri dönüşüm tutarını görün</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Tür
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          >
            {siteData.scrapTypes.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} ({formatUnit(s.unit)})
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Miktar ({selected?.unit})
          <input
            type="number"
            min={0}
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          İlçe (opsiyonel)
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Örn: Çankaya"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
      </div>
      <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm">
        <div className="flex items-center justify-between text-slate-700">
          <span>Tahmini Tutar</span>
          <span className="text-lg font-bold text-slate-900">{formatCurrency(total || 0)}</span>
        </div>
        {selected && (
          <div className="mt-1 text-xs text-slate-600">
            Liste fiyatı: {formatCurrency(selected.pricePerUnit)} / {formatUnit(selected.unit)} · {selected.note || siteData.priceDisclaimer}
          </div>
        )}
        <div className="mt-2 text-xs font-semibold text-slate-500">{siteData.priceDisclaimer}</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappLink}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
        >
          WhatsApp’tan paylaş
        </a>
        <a
          href={`tel:${siteData.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-accent hover:text-accent"
        >
          Hemen ara
        </a>
      </div>
    </motion.div>
  );
}
