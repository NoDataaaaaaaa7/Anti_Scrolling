import { useEffect, useState } from 'react';
import topicsData from '@/data/topics.json';
import type { Topic, Category } from '@/types';
import { CATEGORIES } from '@/constants';

const topics = topicsData as Topic[];

function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function useTopicByCategory(category: Category) {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const today = getLocalDateKey();
    const todaysTopic = topics.find(
      (item) => item.category === category && item.publish_date === today
    );

    if (!todaysTopic) {
      setTopic(null);
      setError(`Статья в разделе «${CATEGORIES[category].label}» на ${today} ещё не опубликована.`);
      setLoading(false);
      return;
    }

    setTopic(todaysTopic);
    setLoading(false);
  }, [category]);

  return { topic, loading, error };
}
