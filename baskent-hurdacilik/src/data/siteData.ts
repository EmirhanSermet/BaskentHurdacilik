export type ScrapCategory = 'Metal' | 'Plastik' | 'Kağıt' | 'E-atık' | 'Diğer';

export type ScrapType = {
  slug: string;
  name: string;
  category: ScrapCategory;
  unit: 'kg' | 'ton' | 'adet';
  pricePerUnit: number;
  note?: string;
  description: string;
  imageQuery?: string;
  imageUrl?: string;
  lastUpdated: string;
  tags?: string[];
};

export type FAQItem = { question: string; answer: string };

export type SiteData = {
  brandName: string;
  ownerName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  workingHours: string;
  serviceAreas: string[];
  socials: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
  categories: ScrapCategory[];
  scrapTypes: ScrapType[];
  priceDisclaimer: string;
  hero: {
    headline: string;
    subheadline: string;
    ctas: { label: string; href: string; type: 'primary' | 'secondary' | 'ghost' }[];
  };
  faq: FAQItem[];
  meta: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
  lastUpdated: string;
};

export const siteData: SiteData = {
  brandName: 'Başkent Hurdacılık',
  ownerName: 'Nuri Dalar',
  phone: '+90 501 548 68 74',
  whatsapp: '+90 501 548 68 74',
  email: 'hurdacilikbaskent@gmail.com',
  address: 'Ankara genelinde adresten alım – Merkez ofis: Yenimahalle / Ankara',
  googleMapsUrl: 'https://maps.app.goo.gl/DuRA3ufa3HMqG8XH7?g_st=aw',
  workingHours: 'Hafta içi 08:00-22:00, Cumartesi 09:00-20:00, Pazar randevulu',
  serviceAreas: [
    'Çankaya', 'Keçiören', 'Yenimahalle', 'Etimesgut', 'Sincan', 'Mamak', 'Altındağ', 'Pursaklar', 'Gölbaşı', 'Polatlı',
    'Kahramankazan', 'Akyurt', 'Elmadağ', 'Bala', 'Şereflikoçhisar', 'Evren', 'Haymana', 'Kalecik', 'Kızılcahamam', 'Nallıhan',
    'Beypazarı', 'Çubuk', 'Ayaş', 'Güdül'
  ],
  socials: {
    instagram: 'https://instagram.com/placeholder',
    facebook: 'https://facebook.com/placeholder',
    tiktok: 'https://tiktok.com/@placeholder',
    youtube: 'https://youtube.com/@placeholder'
  },
  categories: ['Metal', 'Plastik', 'Kağıt', 'E-atık', 'Diğer'],
  priceDisclaimer: 'Kesin fiyat sahada yerinde incelemeye göre netleşir. Liste fiyatları tahmini ve bilgilendirme amaçlıdır.',
  hero: {
    headline: 'Ankara’da Hurda & Geri Dönüşüm – Aynı Gün İletişim',
    subheadline: 'Şeffaf fiyat, hızlı dönüş, Ankara geneli adresten alım. Metal, plastik, kağıt, e-atık, akü ve daha fazlası.',
    ctas: [
      { label: 'WhatsApp ile Yaz', href: '#cta-whatsapp', type: 'primary' },
      { label: 'Hemen Ara', href: '#cta-phone', type: 'secondary' },
      { label: 'Fiyatları Gör', href: '/fiyatlar', type: 'ghost' }
    ]
  },
  scrapTypes: [
    {
      slug: 'bakir-hurda',
      name: 'Bakır Hurda',
      category: 'Metal',
      unit: 'kg',
      pricePerUnit: 410,
      note: 'Temiz, yanmamış bakır için ortalama fiyat.',
      description: 'Bakır kablo, boru ve talaş alımı. Çıkma ve söküm işleri için yerinde keşif yapılır.',
      imageUrl: '/scrap-types/bakir-hurda.jpeg',
      lastUpdated: '2026-01-11',
      tags: ['kablo', 'boru', 'iletken']
    },
    {
      slug: 'aluminyum-profil',
      name: 'Alüminyum Profil',
      category: 'Metal',
      unit: 'kg',
      pricePerUnit: 75,
      note: 'Profil ve döküm ayrımı yerinde yapılır.',
      description: 'Alüminyum profil, levha ve döküm hurdaları için hızlı fiyat.',
      imageUrl: '/scrap-types/aluminyum-profil.jpg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'demir-hurda',
      name: 'Demir Hurda',
      category: 'Metal',
      unit: 'kg',
      pricePerUnit: 10,
      note: 'Karışık demir için ortalama fiyat; yüklü tonajlarda yerinde teklif.',
      description: 'İnşaat hurdası, profil, DKP ve karışık demir alımı.',
      imageUrl: '/scrap-types/demir-hurda.jpg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'sari-pirinc',
      name: 'Sarı (Pirinç)',
      category: 'Metal',
      unit: 'kg',
      pricePerUnit: 210,
      note: 'Musluk, vana ve pirinç talaşı için ayrı fiyatlandırma.',
      description: 'Sarı pirinç hurdası; talaş ve parça için temizleme sonrası ödeme.',
      imageUrl: '/scrap-types/sari-pirinc.jpg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'kablo-karisik',
      name: 'Kablo (Karışık)',
      category: 'Metal',
      unit: 'kg',
      pricePerUnit: 120,
      note: 'Bakır oranı ve yanık durumuna göre değişir.',
      description: 'Enerji, data ve yer altı kabloları için yerinde ayrıştırma.',
      imageUrl: '/scrap-types/kablo-karisik.jpg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'pet-sise',
      name: 'PET Şişe',
      category: 'Plastik',
      unit: 'kg',
      pricePerUnit: 7,
      note: 'Renk ayrımı fiyatı değiştirir.',
      description: 'PET şişe ve plastik ambalaj geri dönüşümü için düzenli alım.',
      imageUrl: '/scrap-types/pet-sise.jpeg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'plastik-granul',
      name: 'Plastik Granül/Kırpıntı',
      category: 'Plastik',
      unit: 'kg',
      pricePerUnit: 23,
      note: 'PP, PE, ABS türlerine göre fiyat değişir.',
      description: 'Üretim artığı, fire ve kırpıntı plastiklerin alımı.',
      imageUrl: '/scrap-types/plastik-granul.png',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'kagit-karton',
      name: 'Kağıt & Karton',
      category: 'Kağıt',
      unit: 'kg',
      pricePerUnit: 4,
      note: 'Nem ve karışım oranı fiyatı etkiler.',
      description: 'Ofis kağıdı, kitap, karton ve koli hurdaları düzenli alım.',
      imageUrl: '/scrap-types/kagit-karton.jpeg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'e-atik-karti',
      name: 'E-Atık Kartı',
      category: 'E-atık',
      unit: 'kg',
      pricePerUnit: 180,
      note: 'Kart tipi ve altın oranına göre değişir.',
      description: 'Bilgisayar kartları, sunucu kartları ve komponent alımı.',
      imageUrl: '/scrap-types/e-atik-karti.jpg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'anakart-server',
      name: 'Sunucu/Anakart',
      category: 'E-atık',
      unit: 'kg',
      pricePerUnit: 320,
      note: 'CPU/RAM içeriği fiyata eklenir.',
      description: 'Data center ve kurumsal e-atıklar için kapıda teklif.',
      imageUrl: '/scrap-types/anakart-server.webp',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'cam-sise',
      name: 'Cam Şişe',
      category: 'Diğer',
      unit: 'kg',
      pricePerUnit: 3.5,
      note: 'Renk ayrımı yapılmış ürünler için.',
      description: 'Cam şişe ve kavanoz geri dönüşümü, toplu alım.',
      imageUrl: '/scrap-types/cam-sise.jpg',
      lastUpdated: '2026-01-11'
    },
    {
      slug: 'aku-hurda',
      name: 'Hurda Akü',
      category: 'Diğer',
      unit: 'kg',
      pricePerUnit: 55,
      note: 'Islak/kuru durumu ve ebatına göre fiyat.',
      description: 'Otomotiv ve endüstriyel aküler için yerinde alım.',
      imageUrl: '/scrap-types/aku-hurda.jpg',
      lastUpdated: '2026-01-11'
    }
  ],
  faq: [
    {
      question: 'Aynı gün alım yapıyor musunuz?',
      answer: 'Ankara merkez ve yakın ilçelerde aynı gün; uzak ilçelerde randevulu çalışıyoruz.'
    },
    {
      question: 'Minimum alım miktarı nedir?',
      answer: 'İlçe ve tür bazında değişir; metalde genellikle 200 kg+, diğer türlerde 50-100 kg arasıdır.'
    },
    {
      question: 'Ödemeyi nasıl yapıyorsunuz?',
      answer: 'Yerinde nakit veya havale/EFT ile, fatura/irsaliye opsiyonlu.'
    },
    {
      question: 'Fiyatlar ne sıklıkla güncelleniyor?',
      answer: 'Piyasa hareketine göre günlük/haftalık güncelleriz. Kesin fiyat yerinde tespitle netleşir.'
    },
    {
      question: 'Söküm ve yükleme hizmetiniz var mı?',
      answer: 'Evet, söküm, ayrıştırma ve nakliye ekibimizle adresten teslim alıyoruz.'
    },
    {
      question: 'E-atık toplama lisansınız var mı?',
      answer: 'Yetkili bertaraf/geri dönüşüm iş ortaklarımızla lisanslı süreç yürütüyoruz.'
    },
    {
      question: 'İlçemize geliyorsunuz?',
      answer: 'Ankara’nın tüm ilçelerine hizmet veriyoruz; tonaj ve tür bilgisiyle ulaşmanız yeterli.'
    },
    {
      question: 'Çalışma saatleriniz nedir?',
      answer: 'Hafta içi 08:00-22:00, Cumartesi 09:00-20:00, Pazar randevulu.'
    },
    {
      question: 'Fiyat hesaplayıcı ne kadar kesin?',
      answer: 'Gösterilen fiyat tahmini olup, yerinde kalite kontrol sonrası kesinleşir.'
    },
    {
      question: 'Düzenli toplama planı yapabilir miyiz?',
      answer: 'Evet, işletmeler için haftalık/aylık düzenli alım planları yapıyoruz.'
    },
    {
      question: 'Uzak ilçeler için yol ücreti alıyor musunuz?',
      answer: 'Yüksek tonajlarda yol ücreti almıyoruz, düşük tonajlarda sembolik lojistik eklenebilir.'
    },
    {
      question: 'WhatsApp üzerinden fotoğraf gönderebilir miyim?',
      answer: 'Evet, tür, miktar ve konumla birlikte fotoğraf paylaşırsanız hızlı teklif sunarız.'
    }
  ],
  meta: {
    siteUrl: 'https://baskenthurdacilik.com',
    defaultTitle: 'Başkent Hurdacılık – Ankara Hurda & Geri Dönüşüm',
    defaultDescription: 'Ankara’da hurda bakır, alüminyum, demir, plastik, kağıt ve e-atık için şeffaf fiyat ve aynı gün iletişim.',
    keywords: [
      'Ankara hurda',
      'geri dönüşüm',
      'bakır hurda fiyatı',
      'hurda alım satım',
      'hurda kablo',
      'Başkent Hurdacılık',
      'Nuri Dalar'
    ]
  },
  lastUpdated: '2026-01-11'
};
