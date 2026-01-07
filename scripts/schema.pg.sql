CREATE TABLE IF NOT EXISTS regions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS communities (
  id SERIAL PRIMARY KEY,
  region_id INTEGER NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  UNIQUE(region_id, name),
  UNIQUE(region_id, slug)
);

CREATE TABLE IF NOT EXISTS myths (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region_id INTEGER NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
  community_id INTEGER REFERENCES communities(id) ON DELETE SET NULL,
  category_path TEXT NOT NULL,
  tags_raw TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  seo_title TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  focus_keyword TEXT NOT NULL,
  focus_keywords_raw TEXT NOT NULL,
  image_prompt TEXT NOT NULL,
  image_url TEXT,
  source_row INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE myths ADD COLUMN IF NOT EXISTS image_url TEXT;

CREATE INDEX IF NOT EXISTS idx_myths_region ON myths(region_id);
CREATE INDEX IF NOT EXISTS idx_myths_community ON myths(community_id);

CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS myth_tags (
  myth_id INTEGER NOT NULL REFERENCES myths(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (myth_id, tag_id)
);

CREATE TABLE IF NOT EXISTS myth_keywords (
  myth_id INTEGER NOT NULL REFERENCES myths(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  PRIMARY KEY (myth_id, keyword)
);
