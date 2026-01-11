type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</div>}
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {description && <p className="text-base text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
