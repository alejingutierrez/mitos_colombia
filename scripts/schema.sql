PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS regions (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS communities (
  id INTEGER PRIMARY KEY,
  region_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  UNIQUE(region_id, name),
  UNIQUE(region_id, slug),
  FOREIGN KEY(region_id) REFERENCES regions(id)
);

CREATE TABLE IF NOT EXISTS myths (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region_id INTEGER NOT NULL,
  community_id INTEGER,
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
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY(region_id) REFERENCES regions(id),
  FOREIGN KEY(community_id) REFERENCES communities(id)
);

CREATE INDEX IF NOT EXISTS idx_myths_region ON myths(region_id);
CREATE INDEX IF NOT EXISTS idx_myths_community ON myths(community_id);

CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS myth_tags (
  myth_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  PRIMARY KEY (myth_id, tag_id),
  FOREIGN KEY (myth_id) REFERENCES myths(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS myth_keywords (
  myth_id INTEGER NOT NULL,
  keyword TEXT NOT NULL,
  PRIMARY KEY (myth_id, keyword),
  FOREIGN KEY (myth_id) REFERENCES myths(id) ON DELETE CASCADE
);
