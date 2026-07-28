import { Brain } from 'lucide-react';
import type { Category } from '@/types';
import { CATEGORIES } from '@/constants';

interface Props {
  active: Category;
  onChange: (cat: Category) => void;
}

const ORDER: Category[] = [
  'philosophy',
  'psychology',
  'economics',
  'mathematics',
  'literature',
];

export function Header({ active, onChange }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-3xl px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900">
              <Brain className="h-4 w-4 text-zinc-300" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-medium tracking-tight text-zinc-100">
                Ежедневная глубина
              </span>
              <span className="text-[11px] text-zinc-500">
                Одна идея. Полностью раскрытая.
              </span>
            </div>
          </div>
          <div className="hidden text-[11px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            {new Date().toLocaleDateString('ru-RU', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>

        <nav className="mt-4 flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ORDER.map((cat) => {
            const meta = CATEGORIES[cat];
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => onChange(cat)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                  isActive
                    ? `${meta.border} ${meta.accent} ${meta.text}`
                    : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                }`}
              >
                {meta.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
