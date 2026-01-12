import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const EDITORIAL_MODEL =
  process.env.OPENAI_EDITORIAL_MODEL || "gpt-5.2-2025-12-11";
const CHECK_MODEL = process.env.OPENAI_EDITORIAL_CHECK_MODEL || EDITORIAL_MODEL;
const MODEL_FALLBACKS = (process.env.OPENAI_EDITORIAL_MODEL_FALLBACKS || "")
  .split(",")
  .map((model) => model.trim())
  .filter(Boolean);
const DEFAULT_MODEL_FALLBACKS = ["gpt-5.2-2025-12-11", "gpt-5.2", "gpt-4o-mini"];
const MAX_RAW_JSON_CHARS = 200000;

const MIN_SOURCES = 20;
const DUPLICATE_THRESHOLD = 65;
const MAX_CHECK_CHUNK_CHARS = 18000;
const MAX_MYTH_CONTENT_CHARS = 8000;
const MAX_EXCERPT_CHARS = 320;

const COLOMBIA_CENTER = {
  latitude: 4.570868,
  longitude: -74.297333,
  label: "Centro de Colombia",
};

const REGION_CENTERS = {
  amazonas: { latitude: -1.2, longitude: -71.8, label: "Amazonas, Colombia" },
  andina: { latitude: 4.8, longitude: -74.1, label: "Región Andina, Colombia" },
  caribe: { latitude: 10.6, longitude: -75.3, label: "Región Caribe, Colombia" },
  orinoquia: { latitude: 4.2, longitude: -71.4, label: "Orinoquía, Colombia" },
  pacifico: { latitude: 4.0, longitude: -77.2, label: "Región Pacífica, Colombia" },
  varios: { ...COLOMBIA_CENTER, label: "Colombia" },
};

const COLOMBIA_BOUNDS = {
  minLat: -4.5,
  maxLat: 13.5,
  minLng: -79.2,
  maxLng: -66.6,
};

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "admin";

  return username === validUsername && password === validPassword;
}

function buildModelQueue(primaryModel) {
  const models = [primaryModel, ...MODEL_FALLBACKS, ...DEFAULT_MODEL_FALLBACKS]
    .map((model) => model.trim())
    .filter(Boolean);
  return Array.from(new Set(models));
}

function normalizeJsonString(input) {
  let result = "";
  let inString = false;
  let escaped = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (escaped) {
      result += char;
      escaped = false;
      continue;
    }

    if (char === "\\\\") {
      result += char;
      escaped = true;
      continue;
    }

    if (char === "\"") {
      inString = !inString;
      result += char;
      continue;
    }

    if (inString) {
      if (char === "\n") {
        result += "\\n";
        continue;
      }
      if (char === "\r") {
        result += "\\r";
        continue;
      }
      if (char === "\t") {
        result += "\\t";
        continue;
      }
    }

    result += char;
  }

  return result;
}

function repairJsonStructure(input) {
  let result = "";
  let inString = false;
  let escaped = false;
  const stack = [];

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (escaped) {
      result += char;
      escaped = false;
      continue;
    }

    if (char === "\\") {
      result += char;
      escaped = true;
      continue;
    }

    if (char === "\"") {
      inString = !inString;
      result += char;
      continue;
    }

    if (!inString) {
      if (char === "," ) {
        let j = i + 1;
        while (j < input.length && /\s/.test(input[j])) {
          j += 1;
        }
        const next = input[j];
        if (next === "]" || next === "}") {
          continue;
        }
      }

      if (char === "}" && stack.length >= 2 && stack[stack.length - 2] === "[") {
        let j = i + 1;
        while (j < input.length && /\s/.test(input[j])) {
          j += 1;
        }
        const next = input[j];
        if (next === "{") {
          result += "},";
          continue;
        }
      }

      if (char === "[" || char === "{") {
        stack.push(char);
      }
      if (char === "]" || char === "}") {
        stack.pop();
      }
    }

    result += char;
  }

  return result;
}

function extractBalancedJson(input) {
  let inString = false;
  let escaped = false;
  let braceDepth = 0;
  let bracketDepth = 0;
  let lastBalancedIndex = -1;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === "\"") {
      inString = !inString;
      continue;
    }

    if (!inString) {
      if (char === "{") braceDepth += 1;
      if (char === "}") braceDepth = Math.max(0, braceDepth - 1);
      if (char === "[") bracketDepth += 1;
      if (char === "]") bracketDepth = Math.max(0, bracketDepth - 1);

      if (braceDepth === 0 && bracketDepth === 0) {
        lastBalancedIndex = i;
      }
    }
  }

  if (lastBalancedIndex === -1) {
    return input;
  }

  return input.slice(0, lastBalancedIndex + 1);
}

function safeParseJson(rawText) {
  if (!rawText) {
    throw new Error("Respuesta vacia de OpenAI");
  }

  const trimmed = rawText.trim().slice(0, MAX_RAW_JSON_CHARS);

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) {
      throw error;
    }
    const sliced = trimmed.slice(start, end + 1);
    const balanced = extractBalancedJson(sliced);
    const normalized = normalizeJsonString(balanced);
    try {
      return JSON.parse(normalized);
    } catch (parseError) {
      const repaired = repairJsonStructure(normalized);
      return JSON.parse(repaired);
    }
  }
}

function isModelAccessError(error) {
  const status = error?.status || error?.response?.status;
  const code = error?.code || error?.error?.code;
  const message = String(error?.message || "");
  return (
    status === 403 ||
    status === 404 ||
    code === "model_not_found" ||
    message.includes("does not have access") ||
    message.includes("model_not_found")
  );
}

async function createResponseWithFallback(options) {
  const { model, ...request } = options;
  const models = buildModelQueue(model);
  let lastError;

  for (const candidate of models) {
    try {
      const response = await openai.responses.create({
        ...request,
        model: candidate,
      });
      return { response, model: candidate };
    } catch (error) {
      lastError = error;
      if (!isModelAccessError(error) || candidate === models[models.length - 1]) {
        throw error;
      }
    }
  }

  throw lastError;
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .trim();
}

function truncateText(value, maxChars) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxChars) {
    return text;
  }
  return `${text.slice(0, maxChars).trim()}...`;
}

function buildContent({ mito, historia, versiones, leccion, similitudes }) {
  const sections = [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ];

  return sections
    .map(([title, value]) => {
      const text = String(value || "").trim();
      return text ? `${title}\n${text}` : null;
    })
    .filter(Boolean)
    .join("\n\n");
}

function parseContentSections(content) {
  const sections = {
    mito: "",
    historia: "",
    versiones: "",
    leccion: "",
    similitudes: "",
  };

  const normalized = String(content || "").trim();
  if (!normalized) {
    return sections;
  }

  const blocks = normalized.split(/\n\n+/g);
  blocks.forEach((block) => {
    const [titleLine, ...rest] = block.split("\n");
    const title = normalizeText(titleLine).replace(/:/g, "");
    const body = rest.join("\n").trim();

    if (title.includes("mito")) sections.mito = body;
    else if (title.includes("historia")) sections.historia = body;
    else if (title.includes("version")) sections.versiones = body;
    else if (title.includes("leccion")) sections.leccion = body;
    else if (title.includes("similitud")) sections.similitudes = body;
  });

  return sections;
}

function normalizeRegionKey(value) {
  if (!value) return "";
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

function resolveRegionCenter(regionSlug, regionName) {
  const slugKey = normalizeRegionKey(regionSlug);
  if (slugKey && REGION_CENTERS[slugKey]) {
    return REGION_CENTERS[slugKey];
  }
  const nameKey = normalizeRegionKey(regionName);
  if (nameKey && REGION_CENTERS[nameKey]) {
    return REGION_CENTERS[nameKey];
  }
  return COLOMBIA_CENTER;
}

function isValidCoordinate(value) {
  return Number.isFinite(value);
}

function isWithinColombia(latitude, longitude) {
  return (
    latitude >= COLOMBIA_BOUNDS.minLat &&
    latitude <= COLOMBIA_BOUNDS.maxLat &&
    longitude >= COLOMBIA_BOUNDS.minLng &&
    longitude <= COLOMBIA_BOUNDS.maxLng
  );
}

function normalizeCoordinates(value, regionInfo) {
  const latitude = Number(value?.latitude);
  const longitude = Number(value?.longitude);
  if (!isValidCoordinate(latitude) || !isValidCoordinate(longitude)) {
    const fallback = resolveRegionCenter(regionInfo?.slug, regionInfo?.name);
    return {
      latitude: fallback.latitude,
      longitude: fallback.longitude,
      location_name: fallback.label,
      used_fallback: true,
    };
  }
  if (!isWithinColombia(latitude, longitude)) {
    const fallback = resolveRegionCenter(regionInfo?.slug, regionInfo?.name);
    return {
      latitude: fallback.latitude,
      longitude: fallback.longitude,
      location_name: fallback.label,
      used_fallback: true,
    };
  }
  return {
    latitude,
    longitude,
    location_name: value.location_name || "",
    used_fallback: Boolean(value.used_fallback),
  };
}

async function ensureEditorialTables() {
  if (isPostgres()) {
    const db = getSqlClient();
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS mito TEXT`;
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS historia TEXT`;
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS versiones TEXT`;
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS leccion TEXT`;
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS similitudes TEXT`;
    await db`
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
      )
    `;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS mito TEXT`;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS historia TEXT`;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS versiones TEXT`;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS leccion TEXT`;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS similitudes TEXT`;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS image_prompt_horizontal TEXT`;
    await db`ALTER TABLE editorial_myths ADD COLUMN IF NOT EXISTS image_prompt_vertical TEXT`;
    await db`CREATE INDEX IF NOT EXISTS idx_editorial_myths_region ON editorial_myths(region_id)`;
    await db`CREATE INDEX IF NOT EXISTS idx_editorial_myths_community ON editorial_myths(community_id)`;
    await db`
      CREATE TABLE IF NOT EXISTS editorial_myth_tags (
        editorial_myth_id INTEGER NOT NULL REFERENCES editorial_myths(id) ON DELETE CASCADE,
        tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
        PRIMARY KEY (editorial_myth_id, tag_id)
      )
    `;
    await db`
      CREATE TABLE IF NOT EXISTS editorial_myth_keywords (
        editorial_myth_id INTEGER NOT NULL REFERENCES editorial_myths(id) ON DELETE CASCADE,
        keyword TEXT NOT NULL,
        PRIMARY KEY (editorial_myth_id, keyword)
      )
    `;
    return;
  }

  const db = getSqliteDbWritable();
  const mythColumns = db.prepare("PRAGMA table_info(myths)").all();
  const mythExisting = new Set(mythColumns.map((column) => column.name));
  if (!mythExisting.has("mito")) {
    db.prepare("ALTER TABLE myths ADD COLUMN mito TEXT").run();
  }
  if (!mythExisting.has("historia")) {
    db.prepare("ALTER TABLE myths ADD COLUMN historia TEXT").run();
  }
  if (!mythExisting.has("versiones")) {
    db.prepare("ALTER TABLE myths ADD COLUMN versiones TEXT").run();
  }
  if (!mythExisting.has("leccion")) {
    db.prepare("ALTER TABLE myths ADD COLUMN leccion TEXT").run();
  }
  if (!mythExisting.has("similitudes")) {
    db.prepare("ALTER TABLE myths ADD COLUMN similitudes TEXT").run();
  }
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS editorial_myths (
      id INTEGER PRIMARY KEY,
      source_myth_id INTEGER UNIQUE,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      region_id INTEGER NOT NULL,
      community_id INTEGER,
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
      latitude REAL,
      longitude REAL,
      content_formatted INTEGER DEFAULT 0,
      source_row INTEGER,
      sources_json TEXT,
      key_sources_json TEXT,
      research_notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY(region_id) REFERENCES regions(id),
      FOREIGN KEY(community_id) REFERENCES communities(id),
      FOREIGN KEY(source_myth_id) REFERENCES myths(id)
    )
  `
  ).run();
  const editorialColumns = db
    .prepare("PRAGMA table_info(editorial_myths)")
    .all()
    .map((column) => column.name);
  const editorialExisting = new Set(editorialColumns);
  if (!editorialExisting.has("mito")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN mito TEXT").run();
  }
  if (!editorialExisting.has("historia")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN historia TEXT").run();
  }
  if (!editorialExisting.has("versiones")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN versiones TEXT").run();
  }
  if (!editorialExisting.has("leccion")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN leccion TEXT").run();
  }
  if (!editorialExisting.has("similitudes")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN similitudes TEXT").run();
  }
  if (!editorialExisting.has("image_prompt_horizontal")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN image_prompt_horizontal TEXT").run();
  }
  if (!editorialExisting.has("image_prompt_vertical")) {
    db.prepare("ALTER TABLE editorial_myths ADD COLUMN image_prompt_vertical TEXT").run();
  }

  db.prepare(
    "CREATE INDEX IF NOT EXISTS idx_editorial_myths_region ON editorial_myths(region_id)"
  ).run();
  db.prepare(
    "CREATE INDEX IF NOT EXISTS idx_editorial_myths_community ON editorial_myths(community_id)"
  ).run();

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS editorial_myth_tags (
      editorial_myth_id INTEGER NOT NULL,
      tag_id INTEGER NOT NULL,
      PRIMARY KEY (editorial_myth_id, tag_id),
      FOREIGN KEY (editorial_myth_id) REFERENCES editorial_myths(id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
    )
  `
  ).run();

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS editorial_myth_keywords (
      editorial_myth_id INTEGER NOT NULL,
      keyword TEXT NOT NULL,
      PRIMARY KEY (editorial_myth_id, keyword),
      FOREIGN KEY (editorial_myth_id) REFERENCES editorial_myths(id) ON DELETE CASCADE
    )
  `
  ).run();
}

async function listPendingMyths(limit = 10, offset = 0) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      SELECT
        myths.*, 
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      LEFT JOIN editorial_myths em ON em.source_myth_id = myths.id
      WHERE em.id IS NULL
      ORDER BY myths.id
      LIMIT $1 OFFSET $2
    `,
      [limit, offset]
    );
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        myths.*, 
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      LEFT JOIN editorial_myths em ON em.source_myth_id = myths.id
      WHERE em.id IS NULL
      ORDER BY myths.id
      LIMIT ? OFFSET ?
    `
    )
    .all(limit, offset);
}

async function countPendingMyths() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      SELECT COUNT(*)::int AS total
      FROM myths
      LEFT JOIN editorial_myths em ON em.source_myth_id = myths.id
      WHERE em.id IS NULL
    `
    );
    return Number(result.rows?.[0]?.total || 0);
  }

  const db = getSqliteDb();
  const row = db
    .prepare(
      `
      SELECT COUNT(*) as total
      FROM myths
      LEFT JOIN editorial_myths em ON em.source_myth_id = myths.id
      WHERE em.id IS NULL
    `
    )
    .get();
  return Number(row?.total || 0);
}

async function countEditorialMyths() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT COUNT(*)::int AS total FROM editorial_myths");
    return Number(result.rows?.[0]?.total || 0);
  }
  const db = getSqliteDb();
  const row = db.prepare("SELECT COUNT(*) as total FROM editorial_myths").get();
  return Number(row?.total || 0);
}

async function getMythById(id) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      SELECT
        myths.*,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.id = $1
    `,
      [id]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDb();
  return (
    db
      .prepare(
        `
        SELECT
          myths.*,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE myths.id = ?
      `
      )
      .get(id) || null
  );
}

async function listMythsForCheck() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ORDER BY myths.id
    `
    );
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ORDER BY myths.id
    `
    )
    .all();
}

async function listRegions() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT id, name, slug FROM regions ORDER BY name ASC");
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare("SELECT id, name, slug FROM regions ORDER BY name COLLATE NOCASE ASC")
    .all();
}

async function listTags() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT id, name, slug FROM tags ORDER BY name ASC");
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare("SELECT id, name, slug FROM tags ORDER BY name COLLATE NOCASE ASC")
    .all();
}

async function findRegionByName(name) {
  const normalized = normalizeText(name);
  if (!normalized) return null;

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT id, name, slug FROM regions");
    const rows = result.rows || result;
    return (
      rows.find(
        (row) =>
          normalizeText(row.name) === normalized ||
          normalizeText(row.slug) === normalized
      ) || null
    );
  }

  const db = getSqliteDb();
  const rows = db.prepare("SELECT id, name, slug FROM regions").all();
  return (
    rows.find(
      (row) =>
        normalizeText(row.name) === normalized ||
        normalizeText(row.slug) === normalized
    ) || null
  );
}

async function findRegionFallback() {
  const regions = await listRegions();
  const preferred = regions.find((region) => normalizeText(region.name) === "varios");
  return preferred || regions[0] || null;
}

async function findOrCreateCommunity(regionId, name) {
  if (!name) return null;
  if (isPostgres()) {
    const db = getSqlClient();
    const slug = slugify(name);
    const normalized = normalizeText(name);
    const existing = await db.query(
      `
      SELECT id, name, slug
      FROM communities
      WHERE region_id = $1
    `,
      [regionId]
    );
    const rows = existing.rows || existing;
    const match = rows.find(
      (row) =>
        normalizeText(row.name) === normalized ||
        normalizeText(row.slug) === normalized
    );
    if (match) return match;

    const inserted = await db.query(
      `
      INSERT INTO communities (region_id, name, slug)
      VALUES ($1, $2, $3)
      RETURNING id, name, slug
    `,
      [regionId, name, slug]
    );
    return inserted.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const normalized = normalizeText(name);
  const existing = db
    .prepare("SELECT id, name, slug FROM communities WHERE region_id = ?")
    .all(regionId)
    .find(
      (row) =>
        normalizeText(row.name) === normalized ||
        normalizeText(row.slug) === normalized
    );
  if (existing) return existing;

  const slug = slugify(name);
  db.prepare("INSERT OR IGNORE INTO communities (region_id, name, slug) VALUES (?, ?, ?)")
    .run(regionId, name, slug);
  return db
    .prepare("SELECT id, name, slug FROM communities WHERE region_id = ? AND slug = ?")
    .get(regionId, slug);
}

async function findOrCreateTag(name) {
  const cleanName = String(name || "").trim();
  if (!cleanName) return null;
  const slug = slugify(cleanName);

  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      INSERT INTO tags (name, slug)
      VALUES ($1, $2)
      ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
      RETURNING id
    `,
      [cleanName, slug]
    );
    return result.rows?.[0]?.id || null;
  }

  const db = getSqliteDbWritable();
  db.prepare("INSERT OR IGNORE INTO tags (name, slug) VALUES (?, ?)").run(
    cleanName,
    slug
  );
  const row = db.prepare("SELECT id FROM tags WHERE slug = ?").get(slug);
  return row?.id || null;
}

async function insertMythTags(mythId, tagIds) {
  if (!tagIds.length) return;

  if (isPostgres()) {
    const db = getSqlClient();
    const values = [];
    const placeholders = tagIds.map((tagId) => {
      values.push(mythId, tagId);
      const idx = values.length;
      return `($${idx - 1}, $${idx})`;
    });
    await db.query(
      `
      INSERT INTO myth_tags (myth_id, tag_id)
      VALUES ${placeholders.join(", ")}
      ON CONFLICT DO NOTHING
    `,
      values
    );
    return;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare("INSERT OR IGNORE INTO myth_tags (myth_id, tag_id) VALUES (?, ?)");
  tagIds.forEach((tagId) => stmt.run(mythId, tagId));
}

async function insertMythKeywords(mythId, keywords) {
  if (!keywords.length) return;

  if (isPostgres()) {
    const db = getSqlClient();
    const values = [];
    const placeholders = keywords.map((keyword) => {
      values.push(mythId, keyword);
      const idx = values.length;
      return `($${idx - 1}, $${idx})`;
    });
    await db.query(
      `
      INSERT INTO myth_keywords (myth_id, keyword)
      VALUES ${placeholders.join(", ")}
      ON CONFLICT DO NOTHING
    `,
      values
    );
    return;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare("INSERT OR IGNORE INTO myth_keywords (myth_id, keyword) VALUES (?, ?)");
  keywords.forEach((keyword) => stmt.run(mythId, keyword));
}

async function upsertEditorialMyth(data) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      INSERT INTO editorial_myths (
        source_myth_id,
        title,
        slug,
        region_id,
        community_id,
        category_path,
        tags_raw,
        mito,
        historia,
        versiones,
        leccion,
        similitudes,
        content,
        excerpt,
        seo_title,
        seo_description,
        focus_keyword,
        focus_keywords_raw,
        image_prompt,
        image_prompt_horizontal,
        image_prompt_vertical,
        image_url,
        latitude,
        longitude,
        content_formatted,
        source_row,
        sources_json,
        key_sources_json,
        research_notes
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29
      )
      ON CONFLICT (source_myth_id)
      DO UPDATE SET
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        region_id = EXCLUDED.region_id,
        community_id = EXCLUDED.community_id,
        category_path = EXCLUDED.category_path,
        tags_raw = EXCLUDED.tags_raw,
        mito = EXCLUDED.mito,
        historia = EXCLUDED.historia,
        versiones = EXCLUDED.versiones,
        leccion = EXCLUDED.leccion,
        similitudes = EXCLUDED.similitudes,
        content = EXCLUDED.content,
        excerpt = EXCLUDED.excerpt,
        seo_title = EXCLUDED.seo_title,
        seo_description = EXCLUDED.seo_description,
        focus_keyword = EXCLUDED.focus_keyword,
        focus_keywords_raw = EXCLUDED.focus_keywords_raw,
        image_prompt = EXCLUDED.image_prompt,
        image_prompt_horizontal = EXCLUDED.image_prompt_horizontal,
        image_prompt_vertical = EXCLUDED.image_prompt_vertical,
        image_url = EXCLUDED.image_url,
        latitude = EXCLUDED.latitude,
        longitude = EXCLUDED.longitude,
        content_formatted = EXCLUDED.content_formatted,
        source_row = EXCLUDED.source_row,
        sources_json = EXCLUDED.sources_json,
        key_sources_json = EXCLUDED.key_sources_json,
        research_notes = EXCLUDED.research_notes,
        updated_at = NOW()
      RETURNING id
    `,
      [
        data.source_myth_id,
        data.title,
        data.slug,
        data.region_id,
        data.community_id,
        data.category_path,
        data.tags_raw,
        data.mito,
        data.historia,
        data.versiones,
        data.leccion,
        data.similitudes,
        data.content,
        data.excerpt,
        data.seo_title,
        data.seo_description,
        data.focus_keyword,
        data.focus_keywords_raw,
        data.image_prompt,
        data.image_prompt_horizontal,
        data.image_prompt_vertical,
        data.image_url,
        data.latitude,
        data.longitude,
        data.content_formatted,
        data.source_row,
        data.sources_json,
        data.key_sources_json,
        data.research_notes,
      ]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `
    INSERT INTO editorial_myths (
      source_myth_id,
      title,
      slug,
      region_id,
      community_id,
      category_path,
      tags_raw,
      mito,
      historia,
      versiones,
      leccion,
      similitudes,
      content,
      excerpt,
      seo_title,
      seo_description,
      focus_keyword,
      focus_keywords_raw,
      image_prompt,
      image_prompt_horizontal,
      image_prompt_vertical,
      image_url,
      latitude,
      longitude,
      content_formatted,
      source_row,
      sources_json,
      key_sources_json,
      research_notes,
      created_at,
      updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    ON CONFLICT(source_myth_id) DO UPDATE SET
      title = excluded.title,
      slug = excluded.slug,
      region_id = excluded.region_id,
      community_id = excluded.community_id,
      category_path = excluded.category_path,
      tags_raw = excluded.tags_raw,
      mito = excluded.mito,
      historia = excluded.historia,
      versiones = excluded.versiones,
      leccion = excluded.leccion,
      similitudes = excluded.similitudes,
      content = excluded.content,
      excerpt = excluded.excerpt,
      seo_title = excluded.seo_title,
      seo_description = excluded.seo_description,
      focus_keyword = excluded.focus_keyword,
      focus_keywords_raw = excluded.focus_keywords_raw,
      image_prompt = excluded.image_prompt,
      image_prompt_horizontal = excluded.image_prompt_horizontal,
      image_prompt_vertical = excluded.image_prompt_vertical,
      image_url = excluded.image_url,
      latitude = excluded.latitude,
      longitude = excluded.longitude,
      content_formatted = excluded.content_formatted,
      source_row = excluded.source_row,
      sources_json = excluded.sources_json,
      key_sources_json = excluded.key_sources_json,
      research_notes = excluded.research_notes,
      updated_at = datetime('now')
  `
  );

  const info = stmt.run(
    data.source_myth_id,
    data.title,
    data.slug,
    data.region_id,
    data.community_id,
    data.category_path,
    data.tags_raw,
    data.mito,
    data.historia,
    data.versiones,
    data.leccion,
    data.similitudes,
    data.content,
    data.excerpt,
    data.seo_title,
    data.seo_description,
    data.focus_keyword,
    data.focus_keywords_raw,
    data.image_prompt,
    data.image_prompt_horizontal,
    data.image_prompt_vertical,
    data.image_url,
    data.latitude,
    data.longitude,
    data.content_formatted,
    data.source_row,
    data.sources_json,
    data.key_sources_json,
    data.research_notes
  );

  const editorialId = info.lastInsertRowid;
  if (editorialId) {
    return { id: editorialId };
  }

  const row = db
    .prepare("SELECT id FROM editorial_myths WHERE source_myth_id = ?")
    .get(data.source_myth_id);
  return row || null;
}

async function insertEditorialMyth(data) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      INSERT INTO editorial_myths (
        source_myth_id,
        title,
        slug,
        region_id,
        community_id,
        category_path,
        tags_raw,
        mito,
        historia,
        versiones,
        leccion,
        similitudes,
        content,
        excerpt,
        seo_title,
        seo_description,
        focus_keyword,
        focus_keywords_raw,
        image_prompt,
        image_prompt_horizontal,
        image_prompt_vertical,
        image_url,
        latitude,
        longitude,
        content_formatted,
        source_row,
        sources_json,
        key_sources_json,
        research_notes
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29
      )
      RETURNING id
    `,
      [
        data.source_myth_id,
        data.title,
        data.slug,
        data.region_id,
        data.community_id,
        data.category_path,
        data.tags_raw,
        data.mito,
        data.historia,
        data.versiones,
        data.leccion,
        data.similitudes,
        data.content,
        data.excerpt,
        data.seo_title,
        data.seo_description,
        data.focus_keyword,
        data.focus_keywords_raw,
        data.image_prompt,
        data.image_prompt_horizontal,
        data.image_prompt_vertical,
        data.image_url,
        data.latitude,
        data.longitude,
        data.content_formatted,
        data.source_row,
        data.sources_json,
        data.key_sources_json,
        data.research_notes,
      ]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `
    INSERT INTO editorial_myths (
      source_myth_id,
      title,
      slug,
      region_id,
      community_id,
      category_path,
      tags_raw,
      mito,
      historia,
      versiones,
      leccion,
      similitudes,
      content,
      excerpt,
      seo_title,
      seo_description,
      focus_keyword,
      focus_keywords_raw,
      image_prompt,
      image_prompt_horizontal,
      image_prompt_vertical,
      image_url,
      latitude,
      longitude,
      content_formatted,
      source_row,
      sources_json,
      key_sources_json,
      research_notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `
  );
  const info = stmt.run(
    data.source_myth_id,
    data.title,
    data.slug,
    data.region_id,
    data.community_id,
    data.category_path,
    data.tags_raw,
    data.mito,
    data.historia,
    data.versiones,
    data.leccion,
    data.similitudes,
    data.content,
    data.excerpt,
    data.seo_title,
    data.seo_description,
    data.focus_keyword,
    data.focus_keywords_raw,
    data.image_prompt,
    data.image_prompt_horizontal,
    data.image_prompt_vertical,
    data.image_url,
    data.latitude,
    data.longitude,
    data.content_formatted,
    data.source_row,
    data.sources_json,
    data.key_sources_json,
    data.research_notes
  );
  return { id: info.lastInsertRowid };
}

async function clearEditorialRelations(editorialId) {
  if (isPostgres()) {
    const db = getSqlClient();
    await db.query("DELETE FROM editorial_myth_tags WHERE editorial_myth_id = $1", [editorialId]);
    await db.query("DELETE FROM editorial_myth_keywords WHERE editorial_myth_id = $1", [editorialId]);
    return;
  }

  const db = getSqliteDbWritable();
  db.prepare("DELETE FROM editorial_myth_tags WHERE editorial_myth_id = ?").run(editorialId);
  db.prepare("DELETE FROM editorial_myth_keywords WHERE editorial_myth_id = ?").run(editorialId);
}

async function copyMythTagsToEditorial(mythId, editorialId) {
  if (isPostgres()) {
    const db = getSqlClient();
    await db.query(
      `
      INSERT INTO editorial_myth_tags (editorial_myth_id, tag_id)
      SELECT $1, tag_id FROM myth_tags WHERE myth_id = $2
      ON CONFLICT DO NOTHING
    `,
      [editorialId, mythId]
    );
    return;
  }

  const db = getSqliteDbWritable();
  const tags = db.prepare("SELECT tag_id FROM myth_tags WHERE myth_id = ?").all(mythId);
  const stmt = db.prepare("INSERT OR IGNORE INTO editorial_myth_tags (editorial_myth_id, tag_id) VALUES (?, ?)");
  tags.forEach((row) => stmt.run(editorialId, row.tag_id));
}

async function copyMythKeywordsToEditorial(mythId, editorialId) {
  if (isPostgres()) {
    const db = getSqlClient();
    await db.query(
      `
      INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
      SELECT $1, keyword FROM myth_keywords WHERE myth_id = $2
      ON CONFLICT DO NOTHING
    `,
      [editorialId, mythId]
    );
    return;
  }

  const db = getSqliteDbWritable();
  const keywords = db.prepare("SELECT keyword FROM myth_keywords WHERE myth_id = ?").all(mythId);
  const stmt = db.prepare("INSERT OR IGNORE INTO editorial_myth_keywords (editorial_myth_id, keyword) VALUES (?, ?)");
  keywords.forEach((row) => stmt.run(editorialId, row.keyword));
}

async function insertEditorialTags(editorialId, tagIds) {
  if (!tagIds.length) return;

  if (isPostgres()) {
    const db = getSqlClient();
    const values = [];
    const placeholders = tagIds.map((tagId) => {
      values.push(editorialId, tagId);
      const idx = values.length;
      return `($${idx - 1}, $${idx})`;
    });
    await db.query(
      `
      INSERT INTO editorial_myth_tags (editorial_myth_id, tag_id)
      VALUES ${placeholders.join(", ")}
      ON CONFLICT DO NOTHING
    `,
      values
    );
    return;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    "INSERT OR IGNORE INTO editorial_myth_tags (editorial_myth_id, tag_id) VALUES (?, ?)"
  );
  tagIds.forEach((tagId) => stmt.run(editorialId, tagId));
}

async function insertEditorialKeywords(editorialId, keywords) {
  if (!keywords.length) return;

  if (isPostgres()) {
    const db = getSqlClient();
    const values = [];
    const placeholders = keywords.map((keyword) => {
      values.push(editorialId, keyword);
      const idx = values.length;
      return `($${idx - 1}, $${idx})`;
    });
    await db.query(
      `
      INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
      VALUES ${placeholders.join(", ")}
      ON CONFLICT DO NOTHING
    `,
      values
    );
    return;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    "INSERT OR IGNORE INTO editorial_myth_keywords (editorial_myth_id, keyword) VALUES (?, ?)"
  );
  keywords.forEach((keyword) => stmt.run(editorialId, keyword));
}

async function getNextSourceRow() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT COALESCE(MAX(source_row), 0) + 1 AS next FROM myths");
    return Number(result.rows?.[0]?.next || 1);
  }

  const db = getSqliteDb();
  const row = db.prepare("SELECT COALESCE(MAX(source_row), 0) + 1 AS next FROM myths").get();
  return Number(row?.next || 1);
}

async function insertMyth(data) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      INSERT INTO myths (
        title,
        slug,
        region_id,
        community_id,
        category_path,
        tags_raw,
        mito,
        historia,
        versiones,
        leccion,
        similitudes,
        content,
        excerpt,
        seo_title,
        seo_description,
        focus_keyword,
        focus_keywords_raw,
        image_prompt,
        image_url,
        latitude,
        longitude,
        source_row
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)
      RETURNING id
    `,
      [
        data.title,
        data.slug,
        data.region_id,
        data.community_id,
        data.category_path,
        data.tags_raw,
        data.mito,
        data.historia,
        data.versiones,
        data.leccion,
        data.similitudes,
        data.content,
        data.excerpt,
        data.seo_title,
        data.seo_description,
        data.focus_keyword,
        data.focus_keywords_raw,
        data.image_prompt,
        data.image_url,
        data.latitude,
        data.longitude,
        data.source_row,
      ]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `
    INSERT INTO myths (
      title,
      slug,
      region_id,
      community_id,
      category_path,
      tags_raw,
      mito,
      historia,
      versiones,
      leccion,
      similitudes,
      content,
      excerpt,
      seo_title,
      seo_description,
      focus_keyword,
      focus_keywords_raw,
      image_prompt,
      image_url,
      latitude,
      longitude,
      source_row
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `
  );
  const info = stmt.run(
    data.title,
    data.slug,
    data.region_id,
    data.community_id,
    data.category_path,
    data.tags_raw,
    data.mito,
    data.historia,
    data.versiones,
    data.leccion,
    data.similitudes,
    data.content,
    data.excerpt,
    data.seo_title,
    data.seo_description,
    data.focus_keyword,
    data.focus_keywords_raw,
    data.image_prompt,
    data.image_url,
    data.latitude,
    data.longitude,
    data.source_row
  );
  return { id: info.lastInsertRowid };
}

async function generateEditorialEnrichment(myth) {
  const contentSections = parseContentSections(myth.content);

  const payload = {
    myth: {
      id: myth.id,
      title: myth.title,
      slug: myth.slug,
      region: myth.region,
      region_slug: myth.region_slug,
      community: myth.community,
      community_slug: myth.community_slug,
      category_path: myth.category_path,
      tags_raw: myth.tags_raw,
      excerpt: myth.excerpt,
      content: truncateText(myth.content, MAX_MYTH_CONTENT_CHARS),
      content_sections: {
        mito: myth.mito || contentSections.mito,
        historia: myth.historia || contentSections.historia,
        versiones: myth.versiones || contentSections.versiones,
        leccion: myth.leccion || contentSections.leccion,
        similitudes: myth.similitudes || contentSections.similitudes,
      },
      focus_keyword: myth.focus_keyword,
      focus_keywords_raw: myth.focus_keywords_raw,
      seo_title: myth.seo_title,
      seo_description: myth.seo_description,
    },
    requirement: {
      min_sources: MIN_SOURCES,
      language: "es-CO",
    },
  };

  const { response, model } = await createResponseWithFallback({
    model: EDITORIAL_MODEL,
    instructions:
      "Eres un editor investigador de mitologia colombiana. Debes enriquecer el relato con una redaccion clara, literaria y cuidada, sin perder la oralidad tradicional. " +
      "Usa busqueda web obligatoria para reunir al menos 20 fuentes. Selecciona las fuentes mas relevantes y resume en notas editoriales. " +
      "No inventes datos sin respaldo. Si hay versiones distintas, comparalas. Mantén el texto en español de Colombia. " +
      "No incluyas razonamiento fuera del JSON. Usa el campo analysis_summary para resumir pasos y decisiones. " +
      "No uses comillas dobles dentro de strings; si necesitas citar, usa comillas simples. " +
      "Limita analysis_summary a 120 palabras y editorial_notes a 200 palabras. " +
      "Limita summaries de fuentes a 40 palabras. Si necesitas saltos de linea dentro de strings, usa \\n.",
    input: JSON.stringify(payload),
    tools: [
      {
        type: "web_search_preview",
        search_context_size: "high",
        user_location: {
          type: "approximate",
          country: "CO",
          city: "Bogotá",
          region: "Cundinamarca",
        },
      },
    ],
    tool_choice: { type: "web_search_preview" },
    text: {
      format: {
        type: "json_schema",
        name: "editorial_myth_enrichment",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            analysis_summary: { type: "string" },
            mito: { type: "string" },
            historia: { type: "string" },
            versiones: { type: "string" },
            leccion: { type: "string" },
            similitudes: { type: "string" },
            excerpt: { type: "string" },
            seo_title: { type: "string" },
            seo_description: { type: "string" },
            focus_keyword: { type: "string" },
            focus_keywords: {
              type: "array",
              items: { type: "string" },
            },
            sources: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                properties: {
                  title: { type: "string" },
                  url: { type: "string" },
                  summary: { type: "string" },
                  relevance_score: { type: "number" },
                },
                required: ["title", "url", "summary", "relevance_score"],
              },
            },
            key_sources: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                properties: {
                  title: { type: "string" },
                  url: { type: "string" },
                  summary: { type: "string" },
                  relevance_score: { type: "number" },
                },
                required: ["title", "url", "summary", "relevance_score"],
              },
            },
            editorial_notes: { type: "string" },
          },
          required: [
            "analysis_summary",
            "mito",
            "historia",
            "versiones",
            "leccion",
            "similitudes",
            "excerpt",
            "seo_title",
            "seo_description",
            "focus_keyword",
            "focus_keywords",
            "sources",
            "key_sources",
            "editorial_notes",
          ],
        },
      },
    },
    temperature: 0.4,
    max_output_tokens: 4000,
    truncation: "auto",
  });

  const outputText = response.output_text?.trim();
  if (!outputText) {
    throw new Error("OpenAI response is empty");
  }

  const parsed = safeParseJson(outputText);
  if (!Array.isArray(parsed.sources) || parsed.sources.length < MIN_SOURCES) {
    throw new Error("No se encontraron suficientes fuentes (minimo 20)");
  }
  return { data: parsed, modelUsed: model };
}

async function generateNewMyth(query, context) {
  const payload = {
    query: query,
    regions: context.regions.map((region) => region.name),
    tags: context.tags.map((tag) => tag.name),
    requirement: {
      min_sources: MIN_SOURCES,
      language: "es-CO",
    },
  };

  const { response, model } = await createResponseWithFallback({
    model: EDITORIAL_MODEL,
    instructions:
      "Eres un editor investigador de mitologia colombiana. Debes crear un mito nuevo a partir del tema solicitado. " +
      "Usa busqueda web obligatoria para reunir al menos 20 fuentes. El mito debe seguir la estructura editorial del proyecto: Mito, Historia, Versiones, Leccion, Similitudes. " +
      "Incluye descripciones SEO y prompts de imagen en formato horizontal (16:9) y vertical (9:16) estilo paper quilling/paper cut. " +
      "Selecciona la region colombiana adecuada (usa solo las regiones entregadas). " +
      "Si no hay una ubicacion precisa, usa el centro de la region o de Colombia. " +
      "No incluyas razonamiento fuera del JSON. Usa el campo analysis_summary para resumir pasos y decisiones. " +
      "No uses comillas dobles dentro de strings; si necesitas citar, usa comillas simples. " +
      "Limita analysis_summary a 120 palabras y editorial_notes a 200 palabras. " +
      "Limita summaries de fuentes a 40 palabras. Si necesitas saltos de linea dentro de strings, usa \\n.",
    input: JSON.stringify(payload),
    tools: [
      {
        type: "web_search_preview",
        search_context_size: "high",
        user_location: {
          type: "approximate",
          country: "CO",
          city: "Bogotá",
          region: "Cundinamarca",
        },
      },
    ],
    tool_choice: { type: "web_search_preview" },
    text: {
      format: {
        type: "json_schema",
        name: "new_editorial_myth",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            analysis_summary: { type: "string" },
            title: { type: "string" },
            mito: { type: "string" },
            historia: { type: "string" },
            versiones: { type: "string" },
            leccion: { type: "string" },
            similitudes: { type: "string" },
            excerpt: { type: "string" },
            seo_title: { type: "string" },
            seo_description: { type: "string" },
            focus_keyword: { type: "string" },
            focus_keywords: {
              type: "array",
              items: { type: "string" },
            },
            tags: {
              type: "array",
              items: { type: "string" },
            },
            region: { type: "string" },
            department: { type: "string" },
            community: { type: "string" },
            category_path: { type: "string" },
            image_prompt_horizontal: { type: "string" },
            image_prompt_vertical: { type: "string" },
            latitude: { type: "number" },
            longitude: { type: "number" },
            location_name: { type: "string" },
            sources: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                properties: {
                  title: { type: "string" },
                  url: { type: "string" },
                  summary: { type: "string" },
                  relevance_score: { type: "number" },
                },
                required: ["title", "url", "summary", "relevance_score"],
              },
            },
            key_sources: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                properties: {
                  title: { type: "string" },
                  url: { type: "string" },
                  summary: { type: "string" },
                  relevance_score: { type: "number" },
                },
                required: ["title", "url", "summary", "relevance_score"],
              },
            },
            editorial_notes: { type: "string" },
          },
          required: [
            "analysis_summary",
            "title",
            "mito",
            "historia",
            "versiones",
            "leccion",
            "similitudes",
            "excerpt",
            "seo_title",
            "seo_description",
            "focus_keyword",
            "focus_keywords",
            "tags",
            "region",
            "department",
            "community",
            "category_path",
            "image_prompt_horizontal",
            "image_prompt_vertical",
            "latitude",
            "longitude",
            "location_name",
            "sources",
            "key_sources",
            "editorial_notes",
          ],
        },
      },
    },
    temperature: 0.5,
    max_output_tokens: 4500,
    truncation: "auto",
  });

  const outputText = response.output_text?.trim();
  if (!outputText) {
    throw new Error("OpenAI response is empty");
  }

  const parsed = safeParseJson(outputText);
  if (!Array.isArray(parsed.sources) || parsed.sources.length < MIN_SOURCES) {
    throw new Error("No se encontraron suficientes fuentes (minimo 20)");
  }
  return { data: parsed, modelUsed: model };
}

function buildCheckChunks(items) {
  const chunks = [];
  let current = [];
  let currentSize = 0;

  items.forEach((item) => {
    const entry = {
      id: item.id,
      title: item.title,
      slug: item.slug,
      region: item.region,
      community: item.community,
      excerpt: truncateText(item.excerpt, 280),
      content: truncateText(item.content, 400),
    };
    const serialized = JSON.stringify(entry);

    if (currentSize + serialized.length > MAX_CHECK_CHUNK_CHARS && current.length) {
      chunks.push(current);
      current = [];
      currentSize = 0;
    }

    current.push(entry);
    currentSize += serialized.length;
  });

  if (current.length) {
    chunks.push(current);
  }

  return chunks;
}

async function checkMythSimilarity(query, myths) {
  const chunks = buildCheckChunks(myths);
  let best = { confidence: 0, matches: [], model_used: null };

  for (const chunk of chunks) {
    const { response, model } = await createResponseWithFallback({
      model: CHECK_MODEL,
      instructions:
        "Eres un bibliotecario editorial. Debes detectar si el mito solicitado ya existe en la base de datos. " +
        "Entrega un indice de confianza (0-100) y lista los mitos mas similares con su razon. " +
        "No inventes coincidencias. Devuelve SOLO el JSON solicitado.",
      input: JSON.stringify({ query, myths: chunk }),
      text: {
        format: {
          type: "json_schema",
          name: "myth_similarity_check",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              confidence: { type: "number" },
              matches: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    title: { type: "string" },
                    slug: { type: "string" },
                    confidence: { type: "number" },
                    reason: { type: "string" },
                  },
                  required: ["title", "slug", "confidence", "reason"],
                },
              },
            },
            required: ["confidence", "matches"],
          },
        },
      },
      temperature: 0.2,
      max_output_tokens: 800,
      truncation: "auto",
    });

    const outputText = response.output_text?.trim();
    if (!outputText) {
      continue;
    }
    const parsed = safeParseJson(outputText);
    if (Number(parsed.confidence) > best.confidence) {
      best = {
        confidence: Number(parsed.confidence) || 0,
        matches: parsed.matches || [],
        model_used: model,
      };
    } else if (Array.isArray(parsed.matches)) {
      best.matches = [...best.matches, ...parsed.matches]
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 5);
    }
  }

  return best;
}

function normalizeFocusKeywords(list, focusKeyword) {
  const set = new Set();
  list.forEach((item) => {
    const value = String(item || "").trim();
    if (value) set.add(value);
  });
  if (focusKeyword) {
    set.add(focusKeyword);
  }
  return Array.from(set);
}

async function enrichExistingMyth(myth) {
  const { data: enrichment, modelUsed } = await generateEditorialEnrichment(myth);
  const content = buildContent(enrichment);
  const excerpt = truncateText(enrichment.excerpt || myth.excerpt, MAX_EXCERPT_CHARS);
  const focusKeywords = normalizeFocusKeywords(enrichment.focus_keywords || [], enrichment.focus_keyword);
  const researchNotes = [enrichment.analysis_summary, enrichment.editorial_notes]
    .filter(Boolean)
    .join("\n\n");

  const editorialPayload = {
    source_myth_id: myth.id,
    title: myth.title,
    slug: myth.slug,
    region_id: myth.region_id,
    community_id: myth.community_id,
    category_path: myth.category_path,
    tags_raw: myth.tags_raw,
    mito: enrichment.mito,
    historia: enrichment.historia,
    versiones: enrichment.versiones,
    leccion: enrichment.leccion,
    similitudes: enrichment.similitudes,
    content,
    excerpt,
    seo_title: enrichment.seo_title || myth.seo_title,
    seo_description: enrichment.seo_description || myth.seo_description,
    focus_keyword: enrichment.focus_keyword || myth.focus_keyword,
    focus_keywords_raw: focusKeywords.join("|"),
    image_prompt: myth.image_prompt,
    image_prompt_horizontal: myth.image_prompt,
    image_prompt_vertical: myth.image_prompt,
    image_url: myth.image_url,
    latitude: myth.latitude,
    longitude: myth.longitude,
    content_formatted: Boolean(myth.content_formatted),
    source_row: myth.source_row,
    sources_json: JSON.stringify(enrichment.sources || []),
    key_sources_json: JSON.stringify(enrichment.key_sources || []),
    research_notes: researchNotes,
  };

  const editorial = await upsertEditorialMyth(editorialPayload);
  if (!editorial?.id) {
    throw new Error("No se pudo guardar el mito editorial");
  }

  await clearEditorialRelations(editorial.id);
  await copyMythTagsToEditorial(myth.id, editorial.id);
  await copyMythKeywordsToEditorial(myth.id, editorial.id);

  return {
    id: myth.id,
    title: myth.title,
    slug: myth.slug,
    editorial_id: editorial.id,
    sources_count: enrichment.sources?.length || 0,
    model_used: modelUsed,
  };
}

async function createNewMyth(query) {
  const [regions, tags] = await Promise.all([listRegions(), listTags()]);
  const context = { regions, tags };

  const { data: creation, modelUsed } = await generateNewMyth(query, context);

  const regionMatch = (await findRegionByName(creation.region)) || (await findRegionFallback());
  if (!regionMatch) {
    throw new Error("No hay regiones disponibles en la base de datos");
  }

  const community = await findOrCreateCommunity(regionMatch.id, creation.community);
  const coordinates = normalizeCoordinates(
    {
      latitude: creation.latitude,
      longitude: creation.longitude,
      location_name: creation.location_name,
    },
    { name: regionMatch.name, slug: regionMatch.slug }
  );

  const sourceRow = await getNextSourceRow();
  const title = creation.title.trim();

  let focusKeywords = normalizeFocusKeywords(
    creation.focus_keywords || [],
    creation.focus_keyword
  );
  if (!focusKeywords.length) {
    focusKeywords = [creation.focus_keyword || title].filter(Boolean);
  }

  const tagsList = (creation.tags || [])
    .map((tag) => String(tag || "").trim())
    .filter(Boolean);
  const tagsRaw = tagsList.length
    ? tagsList.join("|")
    : focusKeywords.join("|") || regionMatch.name;

  const categoryPath = creation.category_path || [regionMatch.name, creation.department, community?.name]
    .filter(Boolean)
    .join(" > ");

  const imagePromptHorizontal =
    creation.image_prompt_horizontal ||
    creation.image_prompt ||
    creation.image_prompt_vertical ||
    "";
  const imagePromptVertical =
    creation.image_prompt_vertical ||
    creation.image_prompt ||
    creation.image_prompt_horizontal ||
    "";
  const baseImagePrompt = imagePromptHorizontal || imagePromptVertical || "";
  if (!baseImagePrompt) {
    throw new Error("Prompt de imagen faltante para el mito nuevo");
  }

  const baseSlug = slugify(title) || `mito-${sourceRow}`;
  let finalSlug = baseSlug;
  if (isPostgres()) {
    const db = getSqlClient();
    const existing = await db.query("SELECT 1 FROM myths WHERE slug = $1", [finalSlug]);
    if (existing.rows?.length) {
      let counter = 2;
      while (true) {
        const candidate = `${baseSlug}-${counter}`;
        const check = await db.query("SELECT 1 FROM myths WHERE slug = $1", [candidate]);
        if (!check.rows?.length) {
          finalSlug = candidate;
          break;
        }
        counter += 1;
      }
    }
  } else {
    const db = getSqliteDb();
    const existing = db.prepare("SELECT 1 FROM myths WHERE slug = ?").get(finalSlug);
    if (existing) {
      let counter = 2;
      while (db.prepare("SELECT 1 FROM myths WHERE slug = ?").get(`${baseSlug}-${counter}`)) {
        counter += 1;
      }
      finalSlug = `${baseSlug}-${counter}`;
    }
  }

  const mythPayload = {
    title,
    slug: finalSlug,
    region_id: regionMatch.id,
    community_id: community?.id || null,
    category_path: categoryPath || regionMatch.name,
    tags_raw: tagsRaw,
    mito: creation.mito,
    historia: creation.historia,
    versiones: creation.versiones,
    leccion: creation.leccion,
    similitudes: creation.similitudes,
    content: buildContent(creation),
    excerpt: truncateText(creation.excerpt, MAX_EXCERPT_CHARS),
    seo_title: creation.seo_title || title,
    seo_description: creation.seo_description || creation.excerpt || "",
    focus_keyword: creation.focus_keyword || title,
    focus_keywords_raw: focusKeywords.join("|"),
    image_prompt: baseImagePrompt,
    image_url: null,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    source_row: sourceRow,
  };

  const newMyth = await insertMyth(mythPayload);
  if (!newMyth?.id) {
    throw new Error("No se pudo crear el mito nuevo");
  }

  const tagIds = [];
  for (const tag of tagsList) {
    const tagId = await findOrCreateTag(tag);
    if (tagId) tagIds.push(tagId);
  }

  await insertMythTags(newMyth.id, tagIds);
  await insertMythKeywords(newMyth.id, focusKeywords);

  const editorialPayload = {
    source_myth_id: newMyth.id,
    title: mythPayload.title,
    slug: mythPayload.slug,
    region_id: mythPayload.region_id,
    community_id: mythPayload.community_id,
    category_path: mythPayload.category_path,
    tags_raw: mythPayload.tags_raw,
    mito: mythPayload.mito,
    historia: mythPayload.historia,
    versiones: mythPayload.versiones,
    leccion: mythPayload.leccion,
    similitudes: mythPayload.similitudes,
    content: mythPayload.content,
    excerpt: mythPayload.excerpt,
    seo_title: mythPayload.seo_title,
    seo_description: mythPayload.seo_description,
    focus_keyword: mythPayload.focus_keyword,
    focus_keywords_raw: mythPayload.focus_keywords_raw,
    image_prompt: mythPayload.image_prompt,
    image_prompt_horizontal: imagePromptHorizontal,
    image_prompt_vertical: imagePromptVertical,
    image_url: mythPayload.image_url,
    latitude: mythPayload.latitude,
    longitude: mythPayload.longitude,
    content_formatted: 0,
    source_row: mythPayload.source_row,
    sources_json: JSON.stringify(creation.sources || []),
    key_sources_json: JSON.stringify(creation.key_sources || []),
    research_notes: [creation.analysis_summary, creation.editorial_notes]
      .filter(Boolean)
      .join("\n\n"),
  };

  const editorial = await insertEditorialMyth(editorialPayload);
  if (!editorial?.id) {
    throw new Error("No se pudo guardar el mito editorial");
  }

  await clearEditorialRelations(editorial.id);
  await insertEditorialTags(editorial.id, tagIds);
  await insertEditorialKeywords(editorial.id, focusKeywords);

  return {
    id: newMyth.id,
    title: mythPayload.title,
    slug: mythPayload.slug,
    editorial_id: editorial.id,
    sources_count: creation.sources?.length || 0,
    region: regionMatch.name,
    community: community?.name || null,
    latitude: mythPayload.latitude,
    longitude: mythPayload.longitude,
    model_used: modelUsed,
  };
}

export async function GET(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="Admin Area"',
          },
        }
      );
    }

    await ensureEditorialTables();

    const { searchParams } = new URL(request.url);
    const limit = Math.min(Math.max(Number(searchParams.get("limit") || 10), 1), 50);
    const offset = Math.max(Number(searchParams.get("offset") || 0), 0);
    const mythId = searchParams.get("id");

    if (mythId) {
      const myth = await getMythById(Number(mythId));
      if (!myth) {
        return NextResponse.json({ error: "Mito no encontrado" }, { status: 404 });
      }
      return NextResponse.json({ myth });
    }

    const [pendingTotal, processedTotal, pending] = await Promise.all([
      countPendingMyths(),
      countEditorialMyths(),
      listPendingMyths(limit, offset),
    ]);

    return NextResponse.json({
      pending_total: pendingTotal,
      processed_total: processedTotal,
      pending,
      limit,
      offset,
    });
  } catch (error) {
    console.error("Error in editorial myths GET:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to load editorial myths",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="Admin Area"',
          },
        }
      );
    }

    await ensureEditorialTables();

    const body = await request.json();
    const mode = body.mode || "enrich";

    if (mode === "check") {
      const query = String(body.query || "").trim();
      if (!query) {
        return NextResponse.json({ error: "Consulta vacia" }, { status: 400 });
      }
      const myths = await listMythsForCheck();
      const similarity = await checkMythSimilarity(query, myths);
      return NextResponse.json({
        query,
        confidence: similarity.confidence,
        matches: similarity.matches,
        should_create: similarity.confidence < DUPLICATE_THRESHOLD,
        model_used: similarity.model_used,
      });
    }

    if (mode === "create") {
      const query = String(body.query || "").trim();
      if (!query) {
        return NextResponse.json({ error: "Consulta vacia" }, { status: 400 });
      }

      const created = await createNewMyth(query);
      return NextResponse.json({
        success: true,
        created,
      });
    }

    const count = Math.min(Math.max(Number(body.count || 1), 1), 10);
    const mythId = body.mythId ? Number(body.mythId) : null;

    const myths = mythId
      ? [await getMythById(mythId)].filter(Boolean)
      : await listPendingMyths(count, 0);

    if (!myths.length) {
      return NextResponse.json({
        success: true,
        message: "No hay mitos pendientes",
        updated: [],
      });
    }

    const results = [];

    for (const myth of myths) {
      try {
        const enriched = await enrichExistingMyth(myth);
        results.push({
          ...enriched,
          success: true,
        });
      } catch (error) {
        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          error: error.message || "Error desconocido",
          success: false,
        });
      }
    }

    return NextResponse.json({
      success: true,
      updated: results,
    });
  } catch (error) {
    console.error("Error in editorial myths POST:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to process editorial myths",
      },
      { status: 500 }
    );
  }
}
