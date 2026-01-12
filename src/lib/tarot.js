import { unstable_cache } from "next/cache";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "./db";
import { TAROT_CARDS } from "./tarot-data";

const ONE_DAY = 60 * 60 * 24;

function slugify(value) {
  if (!value) return "";
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function normalizeTitle(value) {
  if (!value) return "";
  return value.trim().toLowerCase();
}

function buildBasePrompt(card) {
  const isMajor = card.arcana === "major";
  const arcanaLabel = isMajor ? "Arcano mayor" : `Arcano menor de ${card.suit}`;

  const lines = [
    `Carta de tarot: ${card.card_name}.`,
    `Tipo de arcano: ${arcanaLabel}.`,
    `Mito asociado (exacto BD): ${card.myth_title}.`,
  ];

  if (card.meaning) {
    lines.push(`Arquetipo emocional: ${card.meaning}`);
  }

  if (card.selection_reason) {
    lines.push(`Justificación editorial: ${card.selection_reason}`);
  }

  lines.push(
    "Prioridad iconográfica: símbolos, personajes, objetos rituales y paisajes propios del mito, su comunidad y su región; la simbología del tarot debe reinterpretarse desde ese universo."
  );
  lines.push(
    "Si hay conflicto visual, prevalece el mito y el territorio; el tarot aporta estructura narrativa y orden compositivo."
  );
  lines.push(
    "Composición: figura central del mito, elementos secundarios del territorio/comunidad, fondo con paisaje regional reconocible."
  );
  lines.push(
    "Estética: carta Rider-Waite reinterpretada en paper quilling + paper cut, capas de papel visibles, relieve sutil, textura artesanal."
  );
  lines.push(
    "Tipografía: solo el nombre de la carta en la franja inferior; en arcanos mayores incluir numeral romano arriba."
  );
  lines.push("No incluir texto adicional ni el nombre del mito.");

  return lines.join("\n");
}

async function ensureTarotTable() {
  if (isPostgres()) {
    const sql = getSqlClient();
    await sql.query(`
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
        base_prompt TEXT,
        custom_prompt TEXT,
        image_url TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
    await sql.query(
      "CREATE INDEX IF NOT EXISTS idx_tarot_cards_order ON tarot_cards(order_index)"
    );
    await sql.query(
      "CREATE INDEX IF NOT EXISTS idx_tarot_cards_arcana ON tarot_cards(arcana)"
    );
    await sql.query(
      "CREATE INDEX IF NOT EXISTS idx_tarot_cards_suit ON tarot_cards(suit)"
    );
    return;
  }

  const db = getSqliteDbWritable();
  db.exec(`
    CREATE TABLE IF NOT EXISTS tarot_cards (
      id INTEGER PRIMARY KEY,
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
      base_prompt TEXT,
      custom_prompt TEXT,
      image_url TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_tarot_cards_order ON tarot_cards(order_index);
    CREATE INDEX IF NOT EXISTS idx_tarot_cards_arcana ON tarot_cards(arcana);
    CREATE INDEX IF NOT EXISTS idx_tarot_cards_suit ON tarot_cards(suit);
  `);
}

async function loadMythMap() {
  const map = new Map();

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `SELECT id, title, slug, image_prompt, excerpt FROM myths`
    );
    (result.rows || result).forEach((row) => {
      const key = normalizeTitle(row.title);
      if (!map.has(key)) {
        map.set(key, row);
      }
    });
    return map;
  }

  const db = getSqliteDb();
  const rows = db
    .prepare("SELECT id, title, slug, image_prompt, excerpt FROM myths")
    .all();
  rows.forEach((row) => {
    const key = normalizeTitle(row.title);
    if (!map.has(key)) {
      map.set(key, row);
    }
  });
  return map;
}

async function seedTarotCards() {
  const cards = TAROT_CARDS;
  if (!cards.length) return;

  const mythMap = await loadMythMap();

  const rows = cards.map((card) => {
    const slug = slugify(card.card_name);
    const mythMatch = mythMap.get(normalizeTitle(card.myth_title));

    return {
      slug,
      card_name: card.card_name,
      arcana: card.arcana,
      suit: card.suit,
      rank_label: card.rank_label,
      order_index: card.order_index,
      myth_title: card.myth_title,
      myth_id: mythMatch?.id || null,
      myth_slug: mythMatch?.slug || null,
      meaning: card.meaning || "",
      selection_reason: card.selection_reason || "",
      base_prompt: buildBasePrompt(card),
    };
  });

  if (isPostgres()) {
    const sql = getSqlClient();
    const values = [];
    const placeholders = rows.map((row, index) => {
      const offset = index * 12;
      values.push(
        row.slug,
        row.card_name,
        row.arcana,
        row.suit,
        row.rank_label,
        row.order_index,
        row.myth_title,
        row.myth_id,
        row.myth_slug,
        row.meaning,
        row.selection_reason,
        row.base_prompt
      );
      return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, $${offset + 6}, $${offset + 7}, $${offset + 8}, $${offset + 9}, $${offset + 10}, $${offset + 11}, $${offset + 12})`;
    });

    await sql.query(
      `INSERT INTO tarot_cards (
        slug,
        card_name,
        arcana,
        suit,
        rank_label,
        order_index,
        myth_title,
        myth_id,
        myth_slug,
        meaning,
        selection_reason,
        base_prompt
      ) VALUES ${placeholders.join(", ")}
      ON CONFLICT (slug) DO UPDATE SET
        card_name = EXCLUDED.card_name,
        arcana = EXCLUDED.arcana,
        suit = EXCLUDED.suit,
        rank_label = EXCLUDED.rank_label,
        order_index = EXCLUDED.order_index,
        myth_title = EXCLUDED.myth_title,
        myth_id = EXCLUDED.myth_id,
        myth_slug = EXCLUDED.myth_slug,
        meaning = EXCLUDED.meaning,
        selection_reason = EXCLUDED.selection_reason,
        base_prompt = EXCLUDED.base_prompt,
        updated_at = NOW()`,
      values
    );
    return;
  }

  const db = getSqliteDbWritable();
  const insert = db.prepare(
    `INSERT INTO tarot_cards (
      slug,
      card_name,
      arcana,
      suit,
      rank_label,
      order_index,
      myth_title,
      myth_id,
      myth_slug,
      meaning,
      selection_reason,
      base_prompt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      card_name = excluded.card_name,
      arcana = excluded.arcana,
      suit = excluded.suit,
      rank_label = excluded.rank_label,
      order_index = excluded.order_index,
      myth_title = excluded.myth_title,
      myth_id = excluded.myth_id,
      myth_slug = excluded.myth_slug,
      meaning = excluded.meaning,
      selection_reason = excluded.selection_reason,
      base_prompt = excluded.base_prompt,
      updated_at = datetime('now')`
  );

  const transaction = db.transaction((items) => {
    items.forEach((row) => {
      insert.run(
        row.slug,
        row.card_name,
        row.arcana,
        row.suit,
        row.rank_label,
        row.order_index,
        row.myth_title,
        row.myth_id,
        row.myth_slug,
        row.meaning,
        row.selection_reason,
        row.base_prompt
      );
    });
  });

  transaction(rows);
}

async function ensureTarotSeeded() {
  await ensureTarotTable();
  await seedTarotCards();
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

export async function listTarotCards({
  page = 1,
  limit = 24,
  arcana,
  suit,
  status,
} = {}) {
  await ensureTarotSeeded();

  const limitValue = clampNumber(limit, 1, 120, 24);
  const offsetValue = Math.max(0, (page - 1) * limitValue);

  const filters = [];
  const filterValues = [];

  if (arcana) {
    filterValues.push(arcana);
    filters.push(`t.arcana = $${filterValues.length}`);
  }

  if (suit) {
    filterValues.push(suit);
    filters.push(`t.suit = $${filterValues.length}`);
  }

  if (status === "missing") {
    filters.push("t.image_url IS NULL");
  }

  if (status === "ready") {
    filters.push("t.image_url IS NOT NULL");
  }

  if (isPostgres()) {
    const sql = getSqlClient();
    const whereClause = filters.length
      ? `WHERE ${filters.join(" AND ")}`
      : "";

    const countResult = await sql.query(
      `SELECT COUNT(*)::int AS total FROM tarot_cards t ${whereClause}`,
      filterValues
    );
    const total = Number(countResult.rows?.[0]?.total || 0);

    const limitIndex = filterValues.length + 1;
    const offsetIndex = filterValues.length + 2;
    const listSql = `
      SELECT
        t.*,
        m.slug as myth_slug
      FROM tarot_cards t
      LEFT JOIN myths m ON TRIM(m.title) = TRIM(t.myth_title)
      ${whereClause}
      ORDER BY t.order_index ASC, t.id ASC
      LIMIT $${limitIndex} OFFSET $${offsetIndex}
    `;

    const listValues = [...filterValues, limitValue, offsetValue];
    const items = (await sql.query(listSql, listValues)).rows;

    const statsResult = await sql.query(
      `SELECT
        COUNT(*)::int AS total,
        SUM(CASE WHEN image_url IS NULL THEN 1 ELSE 0 END)::int AS missing
       FROM tarot_cards`
    );

    const statsRow = statsResult.rows?.[0] || {};
    const stats = {
      total: Number(statsRow.total || 0),
      missing: Number(statsRow.missing || 0),
      ready: Number(statsRow.total || 0) - Number(statsRow.missing || 0),
    };

    return {
      items,
      total,
      page,
      limit: limitValue,
      totalPages: Math.max(1, Math.ceil(total / limitValue)),
      stats,
    };
  }

  const db = getSqliteDb();
  const where = [];
  const params = [];

  if (arcana) {
    where.push("t.arcana = ?");
    params.push(arcana);
  }

  if (suit) {
    where.push("t.suit = ?");
    params.push(suit);
  }

  if (status === "missing") {
    where.push("t.image_url IS NULL");
  }

  if (status === "ready") {
    where.push("t.image_url IS NOT NULL");
  }

  const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const countSql = `SELECT COUNT(*) as total FROM tarot_cards t ${whereClause}`;
  const countResult = db.prepare(countSql).get(...params);
  const total = countResult.total || 0;

  const listSql = `
    SELECT
      t.*,
      m.slug as myth_slug
    FROM tarot_cards t
    LEFT JOIN myths m ON trim(m.title) = trim(t.myth_title)
    ${whereClause}
    ORDER BY t.order_index ASC, t.id ASC
    LIMIT ? OFFSET ?
  `;
  const items = db
    .prepare(listSql)
    .all(...params, limitValue, offsetValue);

  const statsRow = db
    .prepare(
      `SELECT
        COUNT(*) AS total,
        SUM(CASE WHEN image_url IS NULL THEN 1 ELSE 0 END) AS missing
       FROM tarot_cards`
    )
    .get();

  const stats = {
    total: statsRow.total || 0,
    missing: statsRow.missing || 0,
    ready: (statsRow.total || 0) - (statsRow.missing || 0),
  };

  return {
    items,
    total,
    page,
    limit: limitValue,
    totalPages: Math.max(1, Math.ceil(total / limitValue)),
    stats,
  };
}

async function listAllTarotCards() {
  await ensureTarotSeeded();

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `SELECT
        t.*,
        m.slug as myth_slug
      FROM tarot_cards t
      LEFT JOIN myths m ON TRIM(m.title) = TRIM(t.myth_title)
      ORDER BY t.order_index ASC, t.id ASC`
    );
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `SELECT
        t.*,
        m.slug as myth_slug
      FROM tarot_cards t
      LEFT JOIN myths m ON trim(m.title) = trim(t.myth_title)
      ORDER BY t.order_index ASC, t.id ASC`
    )
    .all();
}

const getTarotCardsCached = unstable_cache(
  async () => {
    return listAllTarotCards();
  },
  ["tarot-cards"],
  { revalidate: ONE_DAY }
);

export async function getTarotCards() {
  return getTarotCardsCached();
}

export function getDailyTarotSelection(cards, count, seed) {
  if (!cards?.length || count <= 0) return [];
  const startIndex = seed % cards.length;
  const selection = [];
  for (let i = 0; i < count; i += 1) {
    selection.push(cards[(startIndex + i) % cards.length]);
  }
  return selection;
}

export async function getTarotCardById(cardId) {
  await ensureTarotSeeded();

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `SELECT
        t.*,
        m.slug as myth_slug,
        m.image_prompt as myth_image_prompt,
        m.image_url as myth_image_url,
        m.excerpt as myth_excerpt,
        m.content as myth_content,
        m.tags_raw as myth_tags_raw,
        m.category_path as myth_category_path,
        m.focus_keyword as myth_focus_keyword,
        m.focus_keywords_raw as myth_focus_keywords_raw,
        m.seo_title as myth_seo_title,
        m.seo_description as myth_seo_description,
        m.latitude as myth_latitude,
        m.longitude as myth_longitude,
        m.content_formatted as myth_content_formatted,
        m.source_row as myth_source_row,
        m.created_at as myth_created_at,
        m.updated_at as myth_updated_at,
        m.region_id as myth_region_id,
        m.community_id as myth_community_id,
        regions.name as myth_region,
        regions.slug as myth_region_slug,
        communities.name as myth_community,
        communities.slug as myth_community_slug,
        (
          SELECT string_agg(DISTINCT tags.name, ', ')
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = m.id
        ) as myth_tags_list,
        (
          SELECT string_agg(DISTINCT myth_keywords.keyword, ', ')
          FROM myth_keywords
          WHERE myth_keywords.myth_id = m.id
        ) as myth_keywords_list
      FROM tarot_cards t
      LEFT JOIN myths m ON TRIM(m.title) = TRIM(t.myth_title)
      LEFT JOIN regions ON regions.id = m.region_id
      LEFT JOIN communities ON communities.id = m.community_id
      WHERE t.id = $1`,
      [cardId]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `SELECT
        t.*,
        m.slug as myth_slug,
        m.image_prompt as myth_image_prompt,
        m.image_url as myth_image_url,
        m.excerpt as myth_excerpt,
        m.content as myth_content,
        m.tags_raw as myth_tags_raw,
        m.category_path as myth_category_path,
        m.focus_keyword as myth_focus_keyword,
        m.focus_keywords_raw as myth_focus_keywords_raw,
        m.seo_title as myth_seo_title,
        m.seo_description as myth_seo_description,
        m.latitude as myth_latitude,
        m.longitude as myth_longitude,
        m.content_formatted as myth_content_formatted,
        m.source_row as myth_source_row,
        m.created_at as myth_created_at,
        m.updated_at as myth_updated_at,
        m.region_id as myth_region_id,
        m.community_id as myth_community_id,
        regions.name as myth_region,
        regions.slug as myth_region_slug,
        communities.name as myth_community,
        communities.slug as myth_community_slug,
        (
          SELECT group_concat(DISTINCT tags.name)
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = m.id
        ) as myth_tags_list,
        (
          SELECT group_concat(DISTINCT myth_keywords.keyword)
          FROM myth_keywords
          WHERE myth_keywords.myth_id = m.id
        ) as myth_keywords_list
      FROM tarot_cards t
      LEFT JOIN myths m ON trim(m.title) = trim(t.myth_title)
      LEFT JOIN regions ON regions.id = m.region_id
      LEFT JOIN communities ON communities.id = m.community_id
      WHERE t.id = ?`
    )
    .get(cardId);
}

export async function updateTarotCardPrompt(cardId, customPrompt) {
  await ensureTarotSeeded();

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `UPDATE tarot_cards
       SET custom_prompt = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, slug, custom_prompt`,
      [customPrompt, cardId]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `UPDATE tarot_cards
     SET custom_prompt = ?, updated_at = datetime('now')
     WHERE id = ?`
  );
  const info = stmt.run(customPrompt, cardId);
  if (info.changes === 0) return null;
  return { id: cardId, custom_prompt: customPrompt };
}

export async function updateTarotCardImage(cardId, imageUrl) {
  await ensureTarotSeeded();

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `UPDATE tarot_cards
       SET image_url = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, slug, image_url`,
      [imageUrl, cardId]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `UPDATE tarot_cards
     SET image_url = ?, updated_at = datetime('now')
     WHERE id = ?`
  );
  const info = stmt.run(imageUrl, cardId);
  if (info.changes === 0) return null;
  return { id: cardId, image_url: imageUrl };
}

export async function listTarotCardsMissing(limit = 10) {
  await ensureTarotSeeded();
  const limitValue = clampNumber(limit, 1, 20, 10);

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `SELECT
        t.*,
        m.slug as myth_slug,
        m.image_prompt as myth_image_prompt,
        m.image_url as myth_image_url,
        m.excerpt as myth_excerpt,
        m.content as myth_content,
        m.tags_raw as myth_tags_raw,
        m.category_path as myth_category_path,
        m.focus_keyword as myth_focus_keyword,
        m.focus_keywords_raw as myth_focus_keywords_raw,
        m.seo_title as myth_seo_title,
        m.seo_description as myth_seo_description,
        m.latitude as myth_latitude,
        m.longitude as myth_longitude,
        m.content_formatted as myth_content_formatted,
        m.source_row as myth_source_row,
        m.created_at as myth_created_at,
        m.updated_at as myth_updated_at,
        m.region_id as myth_region_id,
        m.community_id as myth_community_id,
        regions.name as myth_region,
        regions.slug as myth_region_slug,
        communities.name as myth_community,
        communities.slug as myth_community_slug,
        (
          SELECT string_agg(DISTINCT tags.name, ', ')
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = m.id
        ) as myth_tags_list,
        (
          SELECT string_agg(DISTINCT myth_keywords.keyword, ', ')
          FROM myth_keywords
          WHERE myth_keywords.myth_id = m.id
        ) as myth_keywords_list
      FROM tarot_cards t
      LEFT JOIN myths m ON TRIM(m.title) = TRIM(t.myth_title)
      LEFT JOIN regions ON regions.id = m.region_id
      LEFT JOIN communities ON communities.id = m.community_id
      WHERE t.image_url IS NULL
      ORDER BY t.order_index ASC, t.id ASC
      LIMIT $1`,
      [limitValue]
    );
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `SELECT
        t.*,
        m.slug as myth_slug,
        m.image_prompt as myth_image_prompt,
        m.image_url as myth_image_url,
        m.excerpt as myth_excerpt,
        m.content as myth_content,
        m.tags_raw as myth_tags_raw,
        m.category_path as myth_category_path,
        m.focus_keyword as myth_focus_keyword,
        m.focus_keywords_raw as myth_focus_keywords_raw,
        m.seo_title as myth_seo_title,
        m.seo_description as myth_seo_description,
        m.latitude as myth_latitude,
        m.longitude as myth_longitude,
        m.content_formatted as myth_content_formatted,
        m.source_row as myth_source_row,
        m.created_at as myth_created_at,
        m.updated_at as myth_updated_at,
        m.region_id as myth_region_id,
        m.community_id as myth_community_id,
        regions.name as myth_region,
        regions.slug as myth_region_slug,
        communities.name as myth_community,
        communities.slug as myth_community_slug,
        (
          SELECT group_concat(DISTINCT tags.name)
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = m.id
        ) as myth_tags_list,
        (
          SELECT group_concat(DISTINCT myth_keywords.keyword)
          FROM myth_keywords
          WHERE myth_keywords.myth_id = m.id
        ) as myth_keywords_list
      FROM tarot_cards t
      LEFT JOIN myths m ON trim(m.title) = trim(t.myth_title)
      LEFT JOIN regions ON regions.id = m.region_id
      LEFT JOIN communities ON communities.id = m.community_id
      WHERE t.image_url IS NULL
      ORDER BY t.order_index ASC, t.id ASC
      LIMIT ?`
    )
    .all(limitValue);
}

export { slugify, buildBasePrompt };
