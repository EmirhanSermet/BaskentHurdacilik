'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/siteData';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { items: FAQItem[] };

export function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div key={item.question} className="card">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800"
            >
              <span>{item.question}</span>
              <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180 text-accent' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4 text-sm text-slate-600"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
