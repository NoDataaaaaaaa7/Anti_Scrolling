export type Category =
  | 'philosophy'
  | 'psychology'
  | 'economics'
  | 'mathematics'
  | 'literature';

export interface TimelineEntry {
  date: string;
  event: string;
}

export interface Section {
  heading: string;
  body: string;
}

export interface Fact {
  term: string;
  def: string;
}

export interface TopicContent {
  sections: Section[];
  timeline: TimelineEntry[];
  facts: string[];
  definitions: Fact[];
  quote: { text: string; author: string };
}

export interface Topic {
  id: string;
  title: string;
  category: Category;
  tagline: string;
  intro: string;
  content: TopicContent;
  image_url: string;
  created_at: string;
}
