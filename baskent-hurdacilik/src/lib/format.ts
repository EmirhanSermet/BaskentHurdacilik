import { siteData } from '@/data/siteData';

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 2
  }).format(value);

export const formatUnit = (unit: string) => (unit === 'kg' ? 'kg' : unit === 'ton' ? 'ton' : 'adet');

export const priceLabel = (price: number, unit: string) => `${formatCurrency(price)} / ${formatUnit(unit)}`;

export const buildAbsoluteUrl = (path: string) => {
  const base = siteData.meta.siteUrl.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};
