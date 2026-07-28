export function LoadingState() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 animate-ping rounded-full border border-zinc-700" />
        <div className="absolute inset-2 rounded-full border border-zinc-600" />
        <div className="absolute inset-4 rounded-full bg-zinc-500" />
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
        Готовим сегодняшнюю идею
      </p>
    </div>
  );
}
