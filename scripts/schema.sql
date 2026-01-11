PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS regions (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  image_prompt TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS communities (
  id INTEGER PRIMARY KEY,
  region_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  image_prompt TEXT,
  image_url TEXT,
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
  latitude REAL,
  longitude REAL,
  content_formatted INTEGER DEFAULT 0,
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
  slug TEXT NOT NULL UNIQUE,
  image_prompt TEXT,
  image_url TEXT
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

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY,
  myth_id INTEGER NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (myth_id) REFERENCES myths(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_comments_myth ON comments(myth_id);
CREATE INDEX IF NOT EXISTS idx_comments_status ON comments(status);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at);

CREATE TABLE IF NOT EXISTS home_banners (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  cta_label TEXT NOT NULL,
  cta_href TEXT NOT NULL,
  image_prompt TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_home_banners_active_order ON home_banners(is_active, order_index);
