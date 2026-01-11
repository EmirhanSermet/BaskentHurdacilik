import { FAQAccordion } from '@/components/FAQAccordion';
import { siteData } from '@/data/siteData';

export default function SSSPage() {
  return (
    <div className="section-shell space-y-6 py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">SSS</p>
        <h1 className="text-3xl font-bold text-slate-900">Sık sorulan sorular</h1>
        <p className="text-sm text-slate-700">Minimum alım, ödeme, aynı gün hizmet, fiyat değişimi, ilçe ve çalışma saatleri dahil en az 12 soru-cevap.</p>
      </div>
      <FAQAccordion items={siteData.faq} />
    </div>
  );
}
