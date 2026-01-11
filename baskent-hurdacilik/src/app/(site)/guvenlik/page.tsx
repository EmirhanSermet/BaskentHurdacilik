import { Shield, Lock, Activity, FileShield2 } from 'lucide-react';

export default function GuvenlikPage() {
  return (
    <div className="section-shell space-y-6 py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Güvenlik</p>
        <h1 className="text-3xl font-bold text-slate-900">Güvenli bağlantı ve gizlilik odaklı</h1>
        <p className="text-sm text-slate-700">Backend yok; saldırı yüzeyi düşük. Güvenlik başlıkları Next.js config ile eklendi.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[{ icon: Shield, title: 'Security headers', desc: 'CSP, HSTS, X-Frame-Options, Referrer-Policy uygulanır.' },
          { icon: Lock, title: 'Form koruması', desc: 'Basit honeypot ile spam engeli; backend maliyeti yok.' },
          { icon: Activity, title: 'Harici script minimizasyonu', desc: 'Sadece Google Maps iframe ve Unsplash görselleri.' },
          { icon: FileShield2, title: 'Statik çıktı', desc: 'output: export ile statik odaklı yayın; API yüzeyi yok.' }].map((item) => (
          <div key={item.title} className="card space-y-2 p-4">
            <item.icon className="h-5 w-5 text-accent" />
            <div className="text-lg font-bold text-slate-900">{item.title}</div>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
