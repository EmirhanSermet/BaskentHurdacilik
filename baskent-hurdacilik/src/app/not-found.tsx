import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="rounded-2xl bg-white px-6 py-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-3 text-slate-600">Lütfen menüden bir sayfa seçin veya ana sayfaya dönün.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow">
            Ana sayfa
          </Link>
          <Link href="/katalog" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
            Tür kataloğu
          </Link>
        </div>
      </div>
    </div>
  );
}
