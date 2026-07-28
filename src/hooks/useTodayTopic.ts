import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { Topic, Category } from '@/types';

export function useTopicByCategory(category: Category) {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);

      if (!isSupabaseConfigured) {
        setError(
          'Подключение к базе данных не настроено. Добавьте VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY в переменные окружения хостинга.'
        );
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('topics')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: true });
      if (cancelled) return;
      if (error) {
        setError('Не удалось загрузить тему. Проверьте подключение.');
        setLoading(false);
        return;
      }
      if (!data || data.length === 0) {
        setError('В этой сфере тем пока нет.');
        setLoading(false);
        return;
      }
      const dayIndex = Math.floor(Date.now() / 86400000) % data.length;
      setTopic(data[dayIndex] as Topic);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [category]);

  return { topic, loading, error };
}
