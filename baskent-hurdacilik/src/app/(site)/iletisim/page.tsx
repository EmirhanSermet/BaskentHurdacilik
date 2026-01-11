'use client';

import { useState } from 'react';
import { siteData } from '@/data/siteData';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { Mail, MessageCircle, Phone, MapPin, Shield } from 'lucide-react';

export default function IletisimPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return; // honeypot
    const body = encodeURIComponent(`${message}\n\nAd: ${name}`);
    window.location.href = `mailto:${siteData.email}?subject=İletişim Talebi&body=${body}`;
  };

  return (
    <div className="section-shell space-y-8 py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">İletişim</p>
        <h1 className="text-3xl font-bold text-slate-900">Telefon, WhatsApp, e-posta, adres</h1>
        <p className="text-sm text-slate-700">Sabit WhatsApp butonu ve mobil alt bar her sayfada aktif.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <div className="card flex items-center gap-3 p-4 text-sm text-slate-700">
            <MessageCircle className="h-5 w-5 text-accent" />
            <div>
              <div className="font-semibold text-slate-900">WhatsApp</div>
              <a href={buildWhatsAppLink({})} className="text-accent">Hemen mesaj gönder</a>
            </div>
          </div>
          <div className="card flex items-center gap-3 p-4 text-sm text-slate-700">
            <Phone className="h-5 w-5 text-accent" />
            <div>
              <div className="font-semibold text-slate-900">Telefon</div>
              <a href={`tel:${siteData.phone}`} className="text-accent">{siteData.phone}</a>
            </div>
          </div>
          <div className="card flex items-center gap-3 p-4 text-sm text-slate-700">
            <Mail className="h-5 w-5 text-accent" />
            <div>
              <div className="font-semibold text-slate-900">E-posta</div>
              <a href={`mailto:${siteData.email}`} className="text-accent">{siteData.email}</a>
            </div>
          </div>
          <div className="card flex items-center gap-3 p-4 text-sm text-slate-700">
            <MapPin className="h-5 w-5 text-accent" />
            <div>
              <div className="font-semibold text-slate-900">Adres</div>
              <a href={siteData.googleMapsUrl} target="_blank" className="text-accent">{siteData.address}</a>
            </div>
          </div>
          <div className="card flex items-center gap-3 p-4 text-xs font-semibold text-slate-600">
            <Shield className="h-4 w-4 text-accent" />
            Basit honeypot ile spam koruması, backend yok.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-3 p-6">
          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Basit iletişim formu</div>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Adınız (opsiyonel)
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Adınız"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Mesaj
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-28 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Tür, miktar, ilçe bilgisi"
              required
            />
          </label>
          <label className="hidden">
            Website
            <input value={honey} onChange={(e) => setHoney(e.target.value)} tabIndex={-1} autoComplete="off" />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
          >
            E-posta ile gönder (mailto)
          </button>
          <p className="text-xs font-semibold text-slate-500">Mesajınız e-posta istemciniz üzerinden açılır; backend maliyeti yok.</p>
        </form>
      </div>
    </div>
  );
}
