import { ScrapType, siteData } from '@/data/siteData';
import { formatCurrency } from './format';

type WhatsAppPayload = {
  scrap?: ScrapType;
  amount?: number;
  unit?: string;
  district?: string;
  note?: string;
};

const normalizePhone = (raw: string) => raw.replace(/[^0-9]/g, '');

export const buildWhatsAppLink = ({ scrap, amount, unit, district, note }: WhatsAppPayload) => {
  const phone = normalizePhone(siteData.whatsapp || siteData.phone);
  const parts = [
    'Merhaba, Başkent Hurdacılık ile iletişime geçmek istiyorum.',
    scrap ? `Tür: ${scrap.name}` : undefined,
    amount && unit ? `Miktar: ${amount} ${unit}` : undefined,
    scrap && amount ? `Tahmini fiyat: ${formatCurrency(scrap.pricePerUnit * amount)} (${scrap.unit} bazlı)` : undefined,
    district ? `İlçe: ${district}` : undefined,
    note ? `Not: ${note}` : undefined,
    'Kesin fiyat için yerinde inceleme yapılabilir mi?'
  ].filter(Boolean);

  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${phone}?text=${text}`;
};
