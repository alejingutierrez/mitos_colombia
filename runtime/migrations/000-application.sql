-- Existing application schema, now executed by the migration role.
CREATE TABLE IF NOT EXISTS tarot_users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      full_name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      email_verified_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

CREATE TABLE IF NOT EXISTS tarot_user_sessions (
      token_hash TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES tarot_users(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

CREATE INDEX IF NOT EXISTS idx_tarot_sessions_user ON tarot_user_sessions(user_id);

CREATE INDEX IF NOT EXISTS idx_tarot_sessions_expiry ON tarot_user_sessions(expires_at);

CREATE TABLE IF NOT EXISTS tarot_orders (
      reference TEXT PRIMARY KEY,
      status_token TEXT UNIQUE NOT NULL,
      status TEXT NOT NULL DEFAULT 'CREATED',
      sku TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price_cop INTEGER NOT NULL,
      amount_in_cents BIGINT NOT NULL,
      currency VARCHAR(3) NOT NULL,
      email TEXT NOT NULL,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      region TEXT NOT NULL,
      city TEXT NOT NULL,
      address_line_1 TEXT NOT NULL,
      address_line_2 TEXT,
      user_id TEXT,
      fulfillment_status TEXT NOT NULL DEFAULT 'PENDING',
      tracking_carrier TEXT,
      tracking_code TEXT,
      tracking_url TEXT,
      shipped_at TIMESTAMPTZ,
      delivered_at TIMESTAMPTZ,
      campaign_json TEXT NOT NULL DEFAULT '{}',
      analytics_json TEXT NOT NULL DEFAULT '{}',
      payment_provider TEXT NOT NULL DEFAULT 'BOLD',
      payment_transaction_id TEXT UNIQUE,
      payment_method_type TEXT,
      analytics_purchase_claimed_at TIMESTAMPTZ,
      analytics_purchase_sent_at TIMESTAMPTZ,
      analytics_purchase_last_error TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      approved_at TIMESTAMPTZ
    );

ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_json TEXT NOT NULL DEFAULT '{}';

ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_purchase_claimed_at TIMESTAMPTZ;

ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_purchase_sent_at TIMESTAMPTZ;

ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS analytics_purchase_last_error TEXT;

ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS payment_provider TEXT NOT NULL DEFAULT 'BOLD';

ALTER TABLE tarot_orders
    ADD COLUMN IF NOT EXISTS payment_transaction_id TEXT UNIQUE;

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS user_id TEXT;

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS fulfillment_status TEXT NOT NULL DEFAULT 'PENDING';

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS tracking_carrier TEXT;

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS tracking_code TEXT;

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS tracking_url TEXT;

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS shipped_at TIMESTAMPTZ;

ALTER TABLE tarot_orders ADD COLUMN IF NOT EXISTS delivered_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_tarot_orders_user ON tarot_orders(user_id, created_at DESC);

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

CREATE TABLE IF NOT EXISTS tarot_cards (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        card_name TEXT NOT NULL,
        arcana TEXT NOT NULL,
        suit TEXT,
        rank_label TEXT,
        order_index INTEGER NOT NULL,
        myth_title TEXT NOT NULL,
        myth_id INTEGER,
        myth_slug TEXT,
        meaning TEXT,
        selection_reason TEXT,
        reading_summary TEXT,
        base_prompt TEXT,
        custom_prompt TEXT,
        image_url TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

CREATE INDEX IF NOT EXISTS idx_tarot_cards_order ON tarot_cards(order_index);

CREATE INDEX IF NOT EXISTS idx_tarot_cards_arcana ON tarot_cards(arcana);

CREATE INDEX IF NOT EXISTS idx_tarot_cards_suit ON tarot_cards(suit);

ALTER TABLE tarot_cards ADD COLUMN IF NOT EXISTS reading_summary TEXT;

ALTER TABLE myths ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION;

ALTER TABLE myths ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;

ALTER TABLE tags ADD COLUMN IF NOT EXISTS description TEXT;

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

ALTER TABLE myths ADD COLUMN IF NOT EXISTS mito TEXT;

ALTER TABLE myths ADD COLUMN IF NOT EXISTS historia TEXT;

ALTER TABLE myths ADD COLUMN IF NOT EXISTS versiones TEXT;

ALTER TABLE myths ADD COLUMN IF NOT EXISTS leccion TEXT;

ALTER TABLE myths ADD COLUMN IF NOT EXISTS similitudes TEXT;

CREATE TABLE IF NOT EXISTS editorial_myths (
        id SERIAL PRIMARY KEY,
        source_myth_id INTEGER UNIQUE REFERENCES myths(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        region_id INTEGER NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
        community_id INTEGER REFERENCES communities(id) ON DELETE SET NULL,
        category_path TEXT NOT NULL,
        tags_raw TEXT NOT NULL,
        mito TEXT,
        historia TEXT,
        versiones TEXT,
        leccion TEXT,
        similitudes TEXT,
        content TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        seo_title TEXT NOT NULL,
        seo_description TEXT NOT NULL,
        focus_keyword TEXT NOT NULL,
        focus_keywords_raw TEXT NOT NULL,
        image_prompt TEXT NOT NULL,
        image_prompt_horizontal TEXT,
        image_prompt_vertical TEXT,
        image_url TEXT,
        latitude DOUBLE PRECISION,
        longitude DOUBLE PRECISION,
        content_formatted BOOLEAN DEFAULT FALSE,
        source_row INTEGER,
        sources_json TEXT,
        key_sources_json TEXT,
        research_notes TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS mito TEXT;

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS historia TEXT;

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS versiones TEXT;

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS leccion TEXT;

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS similitudes TEXT;

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS image_prompt_horizontal TEXT;

ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS image_prompt_vertical TEXT;

CREATE INDEX IF NOT EXISTS idx_editorial_myths_region ON editorial_myths(region_id);

CREATE INDEX IF NOT EXISTS idx_editorial_myths_community ON editorial_myths(community_id);

CREATE TABLE IF NOT EXISTS editorial_myth_research (
        myth_id INTEGER PRIMARY KEY REFERENCES myths(id) ON DELETE CASCADE,
        sources_json TEXT,
        key_sources_json TEXT,
        search_queries_json TEXT,
        scraped_sources_json TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

CREATE TABLE IF NOT EXISTS editorial_myth_tags (
        editorial_myth_id INTEGER NOT NULL REFERENCES editorial_myths(id) ON DELETE CASCADE,
        tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
        PRIMARY KEY (editorial_myth_id, tag_id)
      );

CREATE TABLE IF NOT EXISTS editorial_myth_keywords (
        editorial_myth_id INTEGER NOT NULL REFERENCES editorial_myths(id) ON DELETE CASCADE,
        keyword TEXT NOT NULL,
        PRIMARY KEY (editorial_myth_id, keyword)
      );
