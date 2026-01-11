'use client';

import { useMemo, useState } from 'react';
import { siteData } from '@/data/siteData';
import { TypeCard } from '@/components/TypeCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Search, Filter } from 'lucide-react';

export default function CatalogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('Hepsi');

  const filtered = useMemo(() => {
    return siteData.scrapTypes.filter((item) => {
      const matchesCategory = category === 'Hepsi' || item.category === category;
      const matchesQuery = query
        ? `${item.name} ${item.description} ${item.tags || ''}`.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="section-shell space-y-6 py-10">
      <SectionHeading
        eyebrow="Geri dönüşüm türleri"
        title="Tür kataloğu"
        description="Metal, plastik, kağıt, e-atık ve diğer kategorilerde fiyatlı kartlar. Her karttan WhatsApp’a geçin."
      />

      <div className="card grid gap-3 p-4 md:grid-cols-[2fr,1fr] lg:grid-cols-[3fr,1fr]">
        <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus-within:border-accent">
          <Search className="h-4 w-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tür veya anahtar kelime ara"
            className="w-full bg-transparent outline-none"
          />
        </label>
        <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus-within:border-accent">
          <Filter className="h-4 w-4" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent outline-none"
          >
            <option value="Hepsi">Tüm kategoriler</option>
            {siteData.categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((scrap) => (
          <TypeCard key={scrap.slug} scrap={scrap} />
        ))}
      </div>
    </div>
  );
}
