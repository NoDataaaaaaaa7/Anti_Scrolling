import type { Topic } from '@/types';
import { CATEGORIES } from '@/constants';

interface Props {
  topic: Topic;
}

export function TopicHero({ topic }: Props) {
  const cat = CATEGORIES[topic.category];
  return (
    <section className="relative">
      <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={topic.image_url}
          alt=""
          className="h-full w-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-3xl px-5 pb-8">
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full border ${cat.border} ${cat.accent} px-3 py-1`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${cat.text.replace(
                  '/90',
                  ''
                )} bg-current ${cat.text}`}
              />
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.18em] ${cat.text}`}
              >
                {cat.label}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-4xl md:text-[2.75rem]">
              {topic.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-zinc-400 sm:text-lg">
              {topic.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
