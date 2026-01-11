# Başkent Hurdacılık – Statik Next.js Sitesi

Next.js (App Router) + TypeScript + Tailwind + Framer Motion tabanlı, statik export uyumlu kurumsal geri dönüşüm sitesi. Backend yok; tüm içerik `src/data/siteData.ts` dosyasından yönetilir.

## Başlangıç

1) Bağımlılıkları kurun: `npm install`
2) Geliştirme: `npm run dev`
3) Lint: `npm run lint`
4) Statik build + export: `npm run build && npm run export` (çıktı `out/`)

## Dağıtım

- **Vercel**: `npm run build`; Vercel statik olarak yayınlar. `output: export` olduğu için otomatik ayarlar uygundur.
- **Netlify / GitHub Pages**: `npm run export`; `out/` dizinini yayınlayın. Netlify için build komutu: `npm run build && npm run export`, publish klasörü: `out`.

## İçerik ve yapı

- İçerik/config: `src/data/siteData.ts` (marka, kişi, telefon/whatsapp placeholder, e-posta, adres, ilçeler, tür listesi, fiyatlar, açıklamalar, SEO metaları, sosyal linkler, görseller).
- Bileşenler: `src/components/*` (Navbar, Footer, chatbot, hesaplayıcı, kartlar, sticky bar).
- Sayfalar: `src/app/(site)/*` (ana sayfa, katalog, tür detay, fiyatlar, hizmet bölgeleri, hakkımızda, SSS, iletişim, güvenlik).
- SEO: `src/app/sitemap.ts`, `src/app/robots.txt/route.ts`, OpenGraph/Twitter metadata `src/app/layout.tsx`.
- Güvenlik: `next.config.mjs` içinde CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy; `output: 'export'`, `unoptimized` görseller.

## Yerelleştirme ve dil

- Dil: Türkçe. Marka: "Başkent Hurdacılık". Yetkili: "Nuri Dalar".
- Telefon ve WhatsApp numaraları placeholder; `siteData.ts` içinde güncelleyin.

## Chatbot ve CTA

- `ChatBotWidget` kuralsal/FAQ tabanlı, backend yok; fiyat, ilçeler, saatler ve iletişim bilgilerini config’ten okur.
- WhatsApp linkleri `buildWhatsAppLink` ile tür + miktar + ilçe + not bilgisi içeren hazır mesaj üretir.
- Mobilde alt sabit bar (WhatsApp/Ara) ve sayfa boyunca CTA butonları bulunur.

## Görseller

- Kart görselleri için config’te `imageUrl` yoksa Unsplash Source query kullanılır (ör. "plastic bottle recycling").
- Logo placeholder: `public/logo.png` (değiştirin).

## Güvenlik notu

- Form backend’i yok; iletişim formu mailto ile çalışır ve honeypot alanı ile basit spam koruması içerir.
- `output: export` ile statik dağıtımda `next.config.mjs` içindeki security header’ları barındırma katmanında (Vercel, Netlify, CDN) eklemeniz gerekir; Next.js export sırasında otomatik eklemez.

## Yapılandırma

- `tailwind.config.ts` içerik yolları ve tema genişletmeleri.
- `tsconfig.json` alias: `@/*` → `src/*`.

## Notlar

- Tüm fiyat alanlarında "Kesin fiyat sahada yerinde incelemeye göre netleşir" uyarısı gösterilir.
- Statik export odaklıdır; dinamik rota `tur/[slug]` için `generateStaticParams` kullanılır.
