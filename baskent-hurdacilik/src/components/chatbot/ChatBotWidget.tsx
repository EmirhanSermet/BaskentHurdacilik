'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { priceLabel } from '@/lib/format';

const quickPrompts = [
  { label: 'Fiyat sor', value: 'Fiyat bilgisi' },
  { label: 'İlçeler', value: 'Hangi ilçelere geliyorsunuz?' },
  { label: 'Çalışma saatleri', value: 'Çalışma saatleriniz nedir?' },
  { label: 'WhatsApp’a yaz', value: 'WhatsApp linki' }
];

type Message = { from: 'bot' | 'user'; text: string };

const greet: Message = {
  from: 'bot',
  text: 'Merhaba! Fiyat, hizmet bölgeleri veya çalışma saatleri hakkında sorabilirsiniz. Hazır WhatsApp mesajı da oluşturabilirim.'
};

function composeBotReply(userText: string): string {
  const lower = userText.toLowerCase();
  if (lower.includes('whatsapp')) return 'Hemen yönlendirebilirim: Aşağıdaki WhatsApp butonuna tıklayın, mesajı hazır gönderebilirsiniz.';
  if (lower.includes('ilçe') || lower.includes('nerede')) return `Ankara genelindeyiz. Hizmet verdiğimiz ilçeler: ${siteData.serviceAreas.join(', ')}.`;
  if (lower.includes('saat')) return `Çalışma saatleri: ${siteData.workingHours}.`;
  if (lower.includes('fiyat')) {
    const popular = siteData.scrapTypes.slice(0, 4).map((t) => `${t.name}: ${priceLabel(t.pricePerUnit, t.unit)}`).join(' | ');
    return `Bazı hızlı fiyatlar: ${popular}. Kesin fiyat yerinde incelemeyle netleşir (${siteData.priceDisclaimer}).`;
  }
  const match = siteData.scrapTypes.find((t) => lower.includes(t.slug.split('-')[0]) || lower.includes(t.name.toLowerCase()));
  if (match) return `${match.name} için güncel liste fiyatı: ${priceLabel(match.pricePerUnit, match.unit)}. ${siteData.priceDisclaimer}`;
  return 'Bunu en hızlı WhatsApp üzerinden netleştirelim. Tür, miktar ve ilçe bilgisi ile yazarsanız anında dönüş yaparız.';
}

export function ChatBotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([greet]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const whatsappLink = useMemo(() => buildWhatsAppLink({ note: 'Chatbot üzerinden ulaştım' }), []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = (text?: string) => {
    const payload = (text ?? input).trim();
    if (!payload) return;
    const userMsg: Message = { from: 'user', text: payload };
    const botMsg: Message = { from: 'bot', text: composeBotReply(payload) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
    setOpen(true);
  };

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="mb-3 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
              Yardım Asistanı
              <button onClick={() => setOpen(false)} aria-label="Kapat">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-3 px-4 py-3 text-sm text-slate-800">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => send(p.value)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold hover:border-accent hover:text-accent"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="max-h-60 space-y-2 overflow-y-auto pr-1" ref={scrollRef}>
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl px-3 py-2 ${m.from === 'user' ? 'bg-accent/10 text-slate-900' : 'bg-slate-100 text-slate-700'}`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Sorunuzu yazın"
                  className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => send()}
                  className="rounded-xl bg-accent p-2 text-white shadow-glow hover:bg-accent/90"
                  aria-label="Gönder"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={whatsappLink}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp’a yaz
                </a>
                <a
                  href={`tel:${siteData.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-800"
                >
                  <Phone className="h-4 w-4" /> Ara
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((s) => !s)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-800/25"
        aria-label="Yardım asistanını aç"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  );
}
