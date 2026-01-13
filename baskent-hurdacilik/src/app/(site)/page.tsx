'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Sparkles, ArrowRight, MapPin, Phone, MessageCircle, Calculator, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { TypeCard } from '@/components/TypeCard';
import { PriceCalculator } from '@/components/PriceCalculator';
import { SectionHeading } from '@/components/SectionHeading';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function HomePage() {
  const popular = siteData.scrapTypes.slice(0, 12);

  return (
    <div className="space-y-16 pb-16">
      <section className="section-shell relative grid items-center gap-10 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <Image src="/logo.png" alt="" width={600} height={600} className="object-contain" priority />
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
            Ankara geneli · Aynı gün iletişim
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl">
            {siteData.hero.headline}
          </h1>
          <p className="text-lg text-slate-700 sm:text-xl">{siteData.hero.subheadline}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={buildWhatsAppLink({})}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp ile yaz
            </Link>
            <Link
              href={`tel:${siteData.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-accent hover:text-accent"
            >
              <Phone className="h-5 w-5" /> Hemen ara
            </Link>
            <Link
              href="/fiyatlar"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              <Calculator className="h-5 w-5" /> Fiyatları gör
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Şeffaf fiyat', icon: ShieldCheck },
              { label: 'Hızlı dönüş', icon: Sparkles },
              { label: 'Ankara geneli', icon: MapPin }
            ].map((item) => (
              <div key={item.label} className="card flex items-center gap-3 px-4 py-3">
                <item.icon className="h-5 w-5 text-accent" />
                <div className="text-sm font-semibold text-slate-800">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }} className="relative z-10">
          <PriceCalculator />
        </motion.div>
      </section>

      <section className="section-shell space-y-6">
        <SectionHeading
          eyebrow="Tür Kataloğu"
          title="Popüler geri dönüşüm türleri"
          description="Metal, plastik, kağıt, e-atık ve diğer kategorilerde en az 12 çeşit."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popular.map((scrap) => (
            <TypeCard key={scrap.slug} scrap={scrap} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/katalog" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Tüm türleri gör <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/fiyatlar" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
            Güncel fiyat listesi
          </Link>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <SectionHeading
          eyebrow="Nasıl çalışır?"
          title="4 adımda hızlı alım"
          description="Talep → Bilgi → Adresten alım → Ödeme. Her adımda şeffaf fiyat ve net bilgilendirme."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { title: 'Talep', body: 'WhatsApp veya telefonla tür, miktar, ilçe bilgisini paylaşın.' },
            { title: 'Bilgi', body: 'Fotoğraf varsa ekleyin; ön fiyat aralığını hemen iletelim.' },
            { title: 'Adresten alım', body: 'Yerinde inceleme, söküm/ayrıştırma ve yükleme desteği.' },
            { title: 'Ödeme', body: 'Nakit veya EFT; fatura/irsaliye opsiyonlu.' }
          ].map((step, idx) => (
            <div key={step.title} className="card space-y-2 p-4">
              <div className="badge">Adım {idx + 1}</div>
              <div className="text-lg font-bold text-slate-900">{step.title}</div>
              <p className="text-sm text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid items-center gap-8 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-lg lg:grid-cols-2">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Güven ve hız"
            title="Şeffaf fiyat, hızlı dönüş, Ankara geneli"
            description="Tüm ilçelerde aynı gün içinde dönüş, net fiyatlandırma ve kayıtlı süreç."
          />
          <ul className="space-y-2 text-sm text-slate-700">
            {[siteData.priceDisclaimer, 'Fotoğraf ve miktar bilgisiyle ön teklif veriyoruz.', 'Tonaj ve kaliteye göre yerinde kesin fiyat.'].map(
              (item) => (
                <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" /> {item}</li>
              )
            )}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href={buildWhatsAppLink({})} className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow">
              WhatsApp’tan yaz
            </Link>
            <Link href="/hizmet-bolgeleri" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
              İlçeleri gör
            </Link>
          </div>
        </div>
        <div className="grid gap-3 rounded-2xl bg-slate-900 p-6 text-white shadow-glow">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Ankara ve ilçeler</div>
          <div className="text-2xl font-bold">{siteData.serviceAreas.length}+ ilçe · aynı gün iletişim</div>
          <p className="text-sm text-slate-200">Çankaya, Keçiören, Yenimahalle, Etimesgut, Sincan, Mamak, Altındağ, Pursaklar, Gölbaşı, Polatlı, Kahramankazan ve tüm Ankara.</p>
          <div className="rounded-xl bg-white/10 p-3 text-sm font-semibold">
            Çalışma saatleri: {siteData.workingHours}
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <SectionHeading eyebrow="SSS" title="Sık sorulan sorular" description="Ödeme, alım süreci ve fiyat değişimleri hakkında öne çıkan sorular." />
        <div className="grid gap-3 md:grid-cols-3">
          {siteData.faq.slice(0, 3).map((item) => (
            <div key={item.question} className="card space-y-2 p-4">
              <div className="text-sm font-semibold text-slate-900">{item.question}</div>
              <p className="text-sm text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
        <Link href="/sss" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Tüm SSS <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
