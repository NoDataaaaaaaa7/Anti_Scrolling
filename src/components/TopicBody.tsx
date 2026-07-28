import type { Topic } from '@/types';
import { CATEGORIES } from '@/constants';
import {
  BookOpen,
  Clock,
  Lightbulb,
  Quote,
  Sparkles,
  Type,
} from 'lucide-react';

interface Props {
  topic: Topic;
}

export function TopicBody({ topic }: Props) {
  const cat = CATEGORIES[topic.category];
  const content = topic.content;

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-10">
      <p className="text-lg leading-relaxed text-zinc-300 first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-zinc-200">
        {topic.intro}
      </p>

      <SectionDivider />

      <div className="space-y-10">
        {content.sections.map((section, i) => (
          <section key={i} className="scroll-mt-20">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="text-[11px] font-medium text-zinc-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
                {section.heading}
              </h2>
            </div>
            <p className="text-[15px] leading-[1.75] text-zinc-400">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <SectionDivider icon={<Clock className="h-3.5 w-3.5" />} label="Хронология" />

      <ol className="relative space-y-6 border-l border-zinc-800 pl-6">
        {content.timeline.map((entry, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-zinc-600 bg-black">
              <span className={`h-1 w-1 rounded-full ${cat.text} bg-current`} />
            </span>
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {entry.date}
            </div>
            <p className="mt-1 text-[15px] leading-relaxed text-zinc-300">
              {entry.event}
            </p>
          </li>
        ))}
      </ol>

      <SectionDivider icon={<Lightbulb className="h-3.5 w-3.5" />} label="То, что вы могли не знать" />

      <ul className="space-y-3">
        {content.facts.map((fact, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-lg border border-zinc-800/70 bg-zinc-900/40 px-4 py-3.5"
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" strokeWidth={1.5} />
            <span className="text-[15px] leading-relaxed text-zinc-300">
              {fact}
            </span>
          </li>
        ))}
      </ul>

      <SectionDivider icon={<Type className="h-3.5 w-3.5" />} label="Ключевые термины" />

      <dl className="grid gap-3 sm:grid-cols-2">
        {content.definitions.map((def, i) => (
          <div
            key={i}
            className="rounded-lg border border-zinc-800/70 bg-zinc-900/40 p-4"
          >
            <dt className="text-sm font-semibold text-zinc-100">{def.term}</dt>
            <dd className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">
              {def.def}
            </dd>
          </div>
        ))}
      </dl>

      <SectionDivider icon={<Quote className="h-3.5 w-3.5" />} label="К размышлению" />

      <figure className="relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black p-7">
        <Quote className="absolute -right-2 -top-2 h-20 w-20 text-zinc-800/50" strokeWidth={1} />
        <blockquote className="relative">
          <p className="text-lg font-medium leading-relaxed text-zinc-200">
            &laquo;{content.quote.text}&raquo;
          </p>
          <figcaption className="mt-4 text-sm text-zinc-500">
            &mdash; {content.quote.author}
          </figcaption>
        </blockquote>
      </figure>

      <div className="mt-16 flex flex-col items-center gap-3 border-t border-zinc-800/60 pt-10 text-center">
        <BookOpen className="h-5 w-5 text-zinc-600" strokeWidth={1.5} />
        <p className="text-sm text-zinc-500">
          Это была сегодняшняя идея. Возвращайтесь завтра за новой.
        </p>
      </div>
    </article>
  );
}

function SectionDivider({
  icon,
  label,
}: {
  icon?: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="my-10 flex items-center gap-3">
      <div className="h-px flex-1 bg-zinc-800/70" />
      {icon && label && (
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
          {icon}
          {label}
        </div>
      )}
      <div className="h-px flex-1 bg-zinc-800/70" />
    </div>
  );
}
