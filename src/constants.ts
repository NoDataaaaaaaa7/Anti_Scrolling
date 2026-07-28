import type { Category } from '@/types';

interface CategoryMeta {
  label: string;
  accent: string;
  soft: string;
  text: string;
  border: string;
}

export const CATEGORIES: Record<Category, CategoryMeta> = {
  philosophy: {
    label: 'Философия',
    accent: 'bg-amber-500/15',
    soft: 'bg-amber-500/10',
    text: 'text-amber-200/90',
    border: 'border-amber-500/30',
  },
  psychology: {
    label: 'Психология',
    accent: 'bg-rose-500/15',
    soft: 'bg-rose-500/10',
    text: 'text-rose-200/90',
    border: 'border-rose-500/30',
  },
  economics: {
    label: 'Экономика',
    accent: 'bg-emerald-500/15',
    soft: 'bg-emerald-500/10',
    text: 'text-emerald-200/90',
    border: 'border-emerald-500/30',
  },
  mathematics: {
    label: 'Математика',
    accent: 'bg-sky-500/15',
    soft: 'bg-sky-500/10',
    text: 'text-sky-200/90',
    border: 'border-sky-500/30',
  },
  literature: {
    label: 'Литература',
    accent: 'bg-violet-500/15',
    soft: 'bg-violet-500/10',
    text: 'text-violet-200/90',
    border: 'border-violet-500/30',
  },
};
