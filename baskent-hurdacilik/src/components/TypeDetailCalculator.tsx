'use client';

import { useState } from 'react';
import { ScrapType, siteData } from '@/data/siteData';
import { formatCurrency, formatUnit } from '@/lib/format';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export function TypeDetailCalculator({ scrap }: { scrap: ScrapType }) {
  const [amountInput, setAmountInput] = useState<string>(scrap.unit === 'adet' ? '10' : '100');
  const [district, setDistrict] = useState('');
  const [note, setNote] = useState('');

  const amount = parseFloat(amountInput || '0');
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  const total = scrap.pricePerUnit * safeAmount;
  const whatsapp = buildWhatsAppLink({ scrap, amount: safeAmount, unit: scrap.unit, district, note });

  return (
    <div className="card space-y-3 p-4">
      <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Hesaplayıcı</div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          Miktar ({formatUnit(scrap.unit)})
          <input
            type="number"
            min={0}
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          İlçe (opsiyonel)
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Örn: Çankaya"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-slate-700 sm:col-span-2">
          Not (opsiyonel)
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Fotoğraf göndereceğim, tonaj tahmini vb."
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
      </div>
      <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm">
        <div className="flex items-center justify-between text-slate-700">
          <span>Tahmini tutar</span>
          <span className="text-lg font-bold text-slate-900">{formatCurrency(total || 0)}</span>
        </div>
        <div className="text-xs font-semibold text-slate-500">{siteData.priceDisclaimer}</div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <a
          href={whatsapp}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
        >
          WhatsApp’ta paylaş
        </a>
        <a
          href={`tel:${siteData.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-accent hover:text-accent"
        >
          Hemen ara
        </a>
      </div>
    </div>
  );
}
