/*
# Create topics table (single-tenant, no auth)

1. New Tables
- `topics`
  - `id` (uuid, primary key)
  - `title` (text, not null) — the topic name, e.g. "Stoicism of Marcus Aurelius"
  - `category` (text, not null) — one of philosophy, psychology, economics, mathematics, literature
  - `tagline` (text, not null) — a one-line hook shown under the title
  - `intro` (text, not null) — opening paragraph framing the topic
  - `content` (jsonb, not null) — structured deep-dive: sections, timeline, facts, definitions, quote
  - `image_url` (text, not null) — hero image URL
  - `created_at` (timestamptz, default now()) — used to order the rotation
2. Security
- Enable RLS on `topics`.
- Allow anon + authenticated SELECT because the content is intentionally public/shared (no sign-in app).
- No insert/update/delete from the client; content is seeded server-side only.
*/

CREATE TABLE IF NOT EXISTS topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL CHECK (category IN ('philosophy','psychology','economics','mathematics','literature')),
  tagline text NOT NULL,
  intro text NOT NULL,
  content jsonb NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_topics" ON topics;
CREATE POLICY "anon_select_topics" ON topics FOR SELECT
  TO anon, authenticated USING (true);
