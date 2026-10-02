import Database from "better-sqlite3";
import fs from "node:fs/promises";
import pg from "pg";

function parseJson(value, fallback = []) {
  if (!value) return fallback;
  if (Array.isArray(value) || typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function connectionString(env) {
  return (
    env.POSTGRES_URL_NON_POOLING ||
    env.POSTGRES_URL ||
    env.DATABASE_URL ||
    ""
  );
}

async function loadFromPostgres(slug, env) {
  const url = connectionString(env);
  const client = new pg.Client({
    connectionString: url,
    ssl: /localhost|127\.0\.0\.1/.test(url)
      ? undefined
      : { rejectUnauthorized: false },
  });
  try {
    await client.connect();
    const mythResult = await client.query(
      `
        SELECT
          m.id,
          m.title,
          m.slug,
          m.excerpt,
          m.content,
          m.image_prompt,
          m.image_url,
          m.latitude,
          m.longitude,
          m.updated_at,
          r.name AS region,
          c.name AS community,
          em.image_url AS editorial_image_url,
          em.sources_json,
          em.key_sources_json
        FROM myths m
        JOIN regions r ON r.id = m.region_id
        LEFT JOIN communities c ON c.id = m.community_id
        LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
        WHERE m.slug = $1
        LIMIT 1
      `,
      [slug]
    );
    const myth = mythResult.rows[0];
    if (!myth) return null;
    const verticalResult = await client.query(
      `
        SELECT image_url, created_at, updated_at
        FROM vertical_images
        WHERE entity_type = 'myth'
          AND entity_id = $1
          AND NULLIF(TRIM(image_url), '') IS NOT NULL
        ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
        LIMIT 1
      `,
      [myth.id]
    );
    return normalizeMyth(myth, verticalResult.rows[0]?.image_url || null);
  } finally {
    await client.end().catch(() => {});
  }
}

export async function loadCommunityMythsForInstagram(
  community,
  { env = process.env } = {}
) {
  const url = connectionString(env);
  if (!url) {
    throw new Error(
      "La instantánea comunitaria requiere una conexión PostgreSQL configurada."
    );
  }
  const client = new pg.Client({
    connectionString: url,
    ssl: /localhost|127\.0\.0\.1/.test(url)
      ? undefined
      : { rejectUnauthorized: false },
    connectionTimeoutMillis: 20_000,
  });
  try {
    await client.connect();
    const result = await client.query(
      `
        SELECT
          m.id,
          m.title,
          m.slug,
          m.excerpt,
          m.content,
          m.image_prompt,
          m.image_url,
          m.latitude,
          m.longitude,
          m.updated_at,
          r.name AS region,
          c.name AS community,
          em.image_url AS editorial_image_url,
          em.sources_json,
          em.key_sources_json,
          vertical.image_url AS portrait_image_url
        FROM myths m
        JOIN regions r ON r.id = m.region_id
        JOIN communities c ON c.id = m.community_id
        LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
        LEFT JOIN LATERAL (
          SELECT vi.image_url
          FROM vertical_images vi
          WHERE vi.entity_type = 'myth'
            AND vi.entity_id = m.id
            AND NULLIF(TRIM(vi.image_url), '') IS NOT NULL
          ORDER BY vi.updated_at DESC NULLS LAST, vi.created_at DESC NULLS LAST
          LIMIT 1
        ) vertical ON true
        WHERE lower(c.name) = lower($1)
        ORDER BY m.slug
      `,
      [community]
    );
    return result.rows.map((myth) =>
      normalizeMyth(myth, myth.portrait_image_url || null)
    );
  } finally {
    await client.end().catch(() => {});
  }
}

function loadFromSqlite(slug, sqlitePath) {
  const db = new Database(sqlitePath, { readonly: true, fileMustExist: true });
  try {
    const myth = db
      .prepare(
        `
          SELECT
            m.id,
            m.title,
            m.slug,
            m.excerpt,
            m.content,
            m.image_prompt,
            m.image_url,
            m.latitude,
            m.longitude,
            m.updated_at,
            r.name AS region,
            c.name AS community
          FROM myths m
          JOIN regions r ON r.id = m.region_id
          LEFT JOIN communities c ON c.id = m.community_id
          WHERE m.slug = ?
          LIMIT 1
        `
      )
      .get(slug);
    if (!myth) return null;
    const vertical = db
      .prepare(
        `
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth'
            AND entity_id = ?
            AND image_url IS NOT NULL
            AND TRIM(image_url) != ''
          ORDER BY updated_at DESC, created_at DESC
          LIMIT 1
        `
      )
      .get(myth.id);
    return normalizeMyth(myth, vertical?.image_url || null);
  } finally {
    db.close();
  }
}

function normalizeMyth(myth, portraitImageUrl) {
  return {
    id: Number(myth.id),
    title: myth.title,
    slug: myth.slug,
    excerpt: myth.excerpt || "",
    content: myth.content || "",
    imagePrompt: myth.image_prompt || "",
    region: myth.region || "",
    community: myth.community || "",
    latitude: Number.isFinite(Number(myth.latitude))
      ? Number(myth.latitude)
      : null,
    longitude: Number.isFinite(Number(myth.longitude))
      ? Number(myth.longitude)
      : null,
    updatedAt: myth.updated_at || null,
    sources: parseJson(myth.sources_json),
    keySources: parseJson(myth.key_sources_json),
    images: {
      landscape:
        myth.image_url || myth.editorial_image_url || null,
      portrait: portraitImageUrl || null,
    },
  };
}

export async function loadMythForInstagram(
  slug,
  { env = process.env, sqlitePath = "data/mitos.sqlite" } = {}
) {
  const myth = connectionString(env)
    ? await loadFromPostgres(slug, env)
    : loadFromSqlite(slug, sqlitePath);
  if (!myth) throw new Error(`No se encontró el mito "${slug}".`);
  if (!myth.images.landscape || !myth.images.portrait) {
    throw new Error(
      `El mito "${slug}" no tiene todavía las dos imágenes canónicas requeridas.`
    );
  }
  return myth;
}

export async function loadMythSnapshot(snapshotPath, expectedSlug) {
  const document = JSON.parse(await fs.readFile(snapshotPath, "utf8"));
  const myths = Array.isArray(document) ? document : document.myths;
  if (!Array.isArray(myths)) {
    throw new Error(`La instantánea ${snapshotPath} no contiene una lista de mitos.`);
  }
  const myth = myths.find((item) => item.slug === expectedSlug);
  if (!myth) {
    throw new Error(
      `La instantánea ${snapshotPath} no contiene el mito "${expectedSlug}".`
    );
  }
  if (!myth.images?.landscape || !myth.images?.portrait) {
    throw new Error(
      `El mito "${expectedSlug}" no tiene las dos imágenes canónicas en la instantánea.`
    );
  }
  return myth;
}

export async function fetchVisualAsset({
  id,
  role,
  description,
  url,
  fetchImpl = fetch,
}) {
  const response = await fetchImpl(url, {
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) {
    throw new Error(`No se pudo descargar ${id}: HTTP ${response.status}.`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length > 8_000_000) {
    throw new Error(`${id} supera el límite responsable de 8 MB.`);
  }
  const contentType = response.headers.get("content-type") || "";
  return {
    id,
    role,
    description,
    url,
    bytes,
    format: contentType.includes("png") ? "png" : "jpeg",
  };
}
