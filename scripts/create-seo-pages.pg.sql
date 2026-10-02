CREATE TABLE IF NOT EXISTS seo_pages (
  id SERIAL PRIMARY KEY,
  page_type TEXT NOT NULL,
  slug TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  og_title TEXT,
  og_description TEXT,
  twitter_title TEXT,
  twitter_description TEXT,
  canonical_path TEXT,
  summary TEXT,
  payload TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(page_type, slug)
);

CREATE INDEX IF NOT EXISTS idx_seo_pages_type ON seo_pages(page_type);
