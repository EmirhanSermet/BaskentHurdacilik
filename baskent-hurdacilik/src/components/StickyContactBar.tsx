import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 block border-t border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <Link
          href={buildWhatsAppLink({})}
          className="flex-1 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-glow"
        >
          <span className="inline-flex items-center justify-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</span>
        </Link>
        <Link
          href={`tel:${siteData.phone}`}
          className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-800"
        >
          <span className="inline-flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> Ara</span>
        </Link>
      </div>
    </div>
  );
}
