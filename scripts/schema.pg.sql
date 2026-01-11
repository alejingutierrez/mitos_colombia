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
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  source_row INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE myths ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE myths ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION;
ALTER TABLE myths ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;
ALTER TABLE myths ADD COLUMN IF NOT EXISTS content_formatted BOOLEAN DEFAULT FALSE;

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

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  myth_id INTEGER NOT NULL REFERENCES myths(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_comments_myth ON comments(myth_id);
CREATE INDEX IF NOT EXISTS idx_comments_status ON comments(status);

CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at);

CREATE TABLE IF NOT EXISTS home_banners (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  cta_label TEXT NOT NULL,
  cta_href TEXT NOT NULL,
  image_prompt TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_home_banners_active_order ON home_banners(is_active, order_index);
