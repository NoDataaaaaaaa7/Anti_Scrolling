import { AlertTriangle } from 'lucide-react';

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <AlertTriangle className="mb-4 h-8 w-8 text-zinc-600" strokeWidth={1.5} />
      <p className="max-w-sm text-sm text-zinc-400">{message}</p>
    </div>
  );
}
