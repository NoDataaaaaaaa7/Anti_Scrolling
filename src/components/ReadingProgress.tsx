import { useReadingProgress } from '@/hooks/useReadingProgress';

export function ReadingProgress() {
  const progress = useReadingProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
