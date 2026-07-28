import { useState } from 'react';
import { useTopicByCategory } from '@/hooks/useTodayTopic';
import { Header } from '@/components/Header';
import { ReadingProgress } from '@/components/ReadingProgress';
import { TopicHero } from '@/components/TopicHero';
import { TopicBody } from '@/components/TopicBody';
import { LoadingState } from '@/components/LoadingState';
import { ErrorState } from '@/components/ErrorState';
import type { Category } from '@/types';

export default function App() {
  const [category, setCategory] = useState<Category>('philosophy');
  const { topic, loading, error } = useTopicByCategory(category);

  return (
    <div className="min-h-screen bg-black text-zinc-200 antialiased">
      <ReadingProgress />
      <Header active={category} onChange={setCategory} />
      <main key={category}>
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} />
        ) : topic ? (
          <>
            <TopicHero topic={topic} />
            <TopicBody topic={topic} />
          </>
        ) : (
          <ErrorState message="Не удалось загрузить тему." />
        )}
      </main>
    </div>
  );
}
