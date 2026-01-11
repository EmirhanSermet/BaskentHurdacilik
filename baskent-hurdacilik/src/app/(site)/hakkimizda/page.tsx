import { ShieldCheck, Leaf, Recycle, Users } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function HakkimizdaPage() {
  return (
    <div className="section-shell space-y-8 py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Hakkımızda</p>
        <h1 className="text-3xl font-bold text-slate-900">Başkent Hurdacılık – {siteData.ownerName}</h1>
        <p className="text-sm text-slate-700">Çevre ve sürdürülebilirlik vurgusuyla, kurumsal güven diliyle çalışıyoruz.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card space-y-3 p-6 text-sm text-slate-700">
          <p>
            Başkent Hurdacılık, Ankara ve tüm ilçelerinde metal, plastik, kağıt, e-atık ve akü başta olmak üzere her türlü geri dönüşüm
            materyalini şeffaf fiyatla ve hızlı süreçle toplar. Yetkili: {siteData.ownerName}. Tüm operasyonlarda çevre mevzuatına uyum ve kayıtlı süreç önceliğimizdir.
          </p>
          <p>
            Söküm, ayrıştırma ve lojistik desteği sunar; kurumsal işletmeler için düzenli alım planları yaparız. Fiyatlar günlük/haftalık güncellenir, kesin fiyat yerinde incelemeyle netleşir.
          </p>
          <p className="text-xs font-semibold text-slate-500">Çevre & sürdürülebilirlik odaklı: atıkların döngüsel ekonomiye kazandırılması.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: ShieldCheck, title: 'Şeffaf ve kayıtlı', desc: 'Fiyat ve süreçleri yazılı paylaşırız.' },
            { icon: Leaf, title: 'Sürdürülebilir', desc: 'Atıkları döngüsel ekonomiye kazandırır.' },
            { icon: Recycle, title: 'Geniş kapsam', desc: 'Metal, plastik, kağıt, e-atık, akü ve daha fazlası.' },
            { icon: Users, title: 'Kurumsal dil', desc: 'Yetkili: ' + siteData.ownerName }
          ].map((item) => (
            <div key={item.title} className="card space-y-2 p-4">
              <item.icon className="h-5 w-5 text-accent" />
              <div className="text-lg font-bold text-slate-900">{item.title}</div>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
