'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteData } from '@/data/siteData';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/katalog', label: 'Geri Dönüşüm Türleri' },
  { href: '/fiyatlar', label: 'Güncel Fiyatlar' },
  { href: '/hizmet-bolgeleri', label: 'Hizmet Bölgeleri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/sss', label: 'SSS' }
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <Image
              src="/logo.png"
              alt={siteData.brandName}
              width={38}
              height={38}
              className="rounded-md"
            />
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-[0.12em] text-slate-500">{siteData.ownerName}</div>
              <div>{siteData.brandName}</div>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            id="cta-phone"
            href={`tel:${siteData.phone}`}
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-accent hover:text-accent lg:inline-flex"
          >
            <Phone className="mr-2 h-4 w-4" /> Ara
          </Link>
          <Link
            id="cta-whatsapp"
            href={buildWhatsAppLink({})}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((s) => !s)}
            className="inline-flex items-center rounded-full border border-slate-200 p-2 text-slate-800 hover:border-accent hover:text-accent lg:hidden"
            aria-label="Menüyü aç"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute left-0 right-0 top-16 z-30 ${mobileOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'} transition duration-200`}
      >
        <div className="section-shell">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <nav className="grid gap-2 text-sm font-semibold text-slate-800">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={buildWhatsAppLink({})}
                onClick={closeMobile}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`tel:${siteData.phone}`}
                onClick={closeMobile}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" /> Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
