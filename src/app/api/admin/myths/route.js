import { NextResponse } from "next/server";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db";

export const runtime = "nodejs";

const MAX_EXCERPT_CHARS = 320;
const MAX_LIST_LIMIT = 50;

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

function parseTagsRaw(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseKeywordsRaw(value) {
  return String(value || "")
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildCategoryPath(regionName, department, communityName) {
  return [regionName, department, communityName].filter(Boolean).join(" > ");
}

function extractDepartment(categoryPath, regionName, communityName) {
  const parts = String(categoryPath || "")
    .split(">")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2) return "";

  const candidate = parts[1];
  const normalized = normalizeText(candidate);
  if (!normalized) return "";
  if (regionName && normalizeText(regionName) === normalized) return "";
  if (communityName && normalizeText(communityName) === normalized) return "";
  return candidate;
}

function parseOptionalNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

async function getRegionById(regionId) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      "SELECT id, name, slug FROM regions WHERE id = $1",
      [regionId]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDb();
  return db.prepare("SELECT id, name, slug FROM regions WHERE id = ?").get(regionId);
}

async function getCommunityById(communityId) {
  if (!communityId) return null;
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      "SELECT id, name, slug, region_id FROM communities WHERE id = $1",
      [communityId]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDb();
  return db
    .prepare("SELECT id, name, slug, region_id FROM communities WHERE id = ?")
    .get(communityId);
}

async function getNextSourceRow() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT MAX(source_row) AS max FROM myths");
    const max = Number(result.rows?.[0]?.max || 0);
    return max + 1;
  }

  const db = getSqliteDb();
  const row = db.prepare("SELECT MAX(source_row) AS max FROM myths").get();
  const max = Number(row?.max || 0);
  return max + 1;
}

async function generateUniqueSlug(baseSlug) {
  const slugBase = slugify(baseSlug);
  if (!slugBase) return null;

  if (isPostgres()) {
    const db = getSqlClient();
    const existing = await db.query("SELECT slug FROM myths WHERE slug = $1", [slugBase]);
    if (!existing.rows?.length) {
      return slugBase;
    }
    let counter = 2;
    while (true) {
      const candidate = `${slugBase}-${counter}`;
      const check = await db.query("SELECT slug FROM myths WHERE slug = $1", [candidate]);
      if (!check.rows?.length) {
        return candidate;
      }
      counter += 1;
    }
  }

  const db = getSqliteDb();
  const exists = db.prepare("SELECT 1 FROM myths WHERE slug = ?").get(slugBase);
  if (!exists) return slugBase;
  let counter = 2;
  while (db.prepare("SELECT 1 FROM myths WHERE slug = ?").get(`${slugBase}-${counter}`)) {
    counter += 1;
  }
  return `${slugBase}-${counter}`;
}

async function assertSlugAvailable(slug, currentId) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query("SELECT id FROM myths WHERE slug = $1", [slug]);
    const row = result.rows?.[0];
    if (row && Number(row.id) !== Number(currentId)) {
      throw new Error("El slug ya existe en otro mito");
    }
    return;
  }

  const db = getSqliteDb();
  const row = db.prepare("SELECT id FROM myths WHERE slug = ?").get(slug);
  if (row && Number(row.id) !== Number(currentId)) {
    throw new Error("El slug ya existe en otro mito");
  }
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
      RETURNING id, name
    `,
      [cleanName, slug]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  db.prepare("INSERT OR IGNORE INTO tags (name, slug) VALUES (?, ?)").run(
    cleanName,
    slug
  );
  return db.prepare("SELECT id, name FROM tags WHERE slug = ?").get(slug) || null;
}

async function resolveTagIds(tagNames) {
  const tagIds = [];
  const tagLabels = [];
  for (const tagName of tagNames) {
    const tag = await findOrCreateTag(tagName);
    if (tag?.id) {
      tagIds.push(tag.id);
      tagLabels.push(tag.name || tagName);
    }
  }
  return { tagIds, tagLabels };
}

async function replaceMythTags(mythId, tagNames) {
  const { tagIds, tagLabels } = await resolveTagIds(tagNames);

  if (isPostgres()) {
    const db = getSqlClient();
    await db.query("DELETE FROM myth_tags WHERE myth_id = $1", [mythId]);
    if (tagIds.length) {
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
    }
    return tagLabels;
  }

  const db = getSqliteDbWritable();
  db.prepare("DELETE FROM myth_tags WHERE myth_id = ?").run(mythId);
  if (tagIds.length) {
    const stmt = db.prepare(
      "INSERT OR IGNORE INTO myth_tags (myth_id, tag_id) VALUES (?, ?)"
    );
    tagIds.forEach((tagId) => stmt.run(mythId, tagId));
  }
  return tagLabels;
}

async function replaceMythKeywords(mythId, keywords) {
  if (isPostgres()) {
    const db = getSqlClient();
    await db.query("DELETE FROM myth_keywords WHERE myth_id = $1", [mythId]);
    if (keywords.length) {
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
    }
    return;
  }

  const db = getSqliteDbWritable();
  db.prepare("DELETE FROM myth_keywords WHERE myth_id = ?").run(mythId);
  if (keywords.length) {
    const stmt = db.prepare(
      "INSERT OR IGNORE INTO myth_keywords (myth_id, keyword) VALUES (?, ?)"
    );
    keywords.forEach((keyword) => stmt.run(mythId, keyword));
  }
}

async function listMyths({ q, limit = 20, offset = 0 }) {
  const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), MAX_LIST_LIMIT);
  const safeOffset = Math.max(Number(offset) || 0, 0);
  const query = String(q || "").trim();

  if (isPostgres()) {
    const db = getSqlClient();
    const values = [];
    let whereClause = "";
    if (query) {
      values.push(`%${query}%`);
      const idx = values.length;
      whereClause = `WHERE (myths.title ILIKE $${idx} OR myths.slug ILIKE $${idx} OR myths.excerpt ILIKE $${idx})`;
    }

    const countResult = await db.query(
      `
      SELECT COUNT(*) AS count
      FROM myths
      ${whereClause}
    `,
      values
    );
    const total = Number(countResult.rows?.[0]?.count || 0);

    values.push(safeLimit, safeOffset);
    const limitIndex = values.length - 1;
    const offsetIndex = values.length;
    const listResult = await db.query(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.tags_raw,
        myths.image_url,
        myths.image_prompt,
        myths.updated_at,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${whereClause}
      ORDER BY myths.id DESC
      LIMIT $${limitIndex} OFFSET $${offsetIndex}
    `,
      values
    );

    return {
      total,
      items: listResult.rows || [],
      limit: safeLimit,
      offset: safeOffset,
    };
  }

  const db = getSqliteDb();
  const params = { limit: safeLimit, offset: safeOffset };
  let whereClause = "";
  if (query) {
    whereClause =
      "WHERE (myths.title LIKE :q OR myths.slug LIKE :q OR myths.excerpt LIKE :q)";
    params.q = `%${query}%`;
  }

  const countRow = db
    .prepare(
      `
      SELECT COUNT(*) AS count
      FROM myths
      ${whereClause}
    `
    )
    .get(params);
  const total = Number(countRow?.count || 0);

  const items = db
    .prepare(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.tags_raw,
        myths.image_url,
        myths.image_prompt,
        myths.updated_at,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${whereClause}
      ORDER BY myths.id DESC
      LIMIT :limit OFFSET :offset
    `
    )
    .all(params);

  return { total, items, limit: safeLimit, offset: safeOffset };
}

async function getMythTags(mythId) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      SELECT tags.id, tags.name, tags.slug
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      WHERE myth_tags.myth_id = $1
      ORDER BY tags.name ASC
    `,
      [mythId]
    );
    return result.rows || [];
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT tags.id, tags.name, tags.slug
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      WHERE myth_tags.myth_id = ?
      ORDER BY tags.name COLLATE NOCASE ASC
    `
    )
    .all(mythId);
}

async function getMythKeywords(mythId) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      SELECT keyword
      FROM myth_keywords
      WHERE myth_id = $1
      ORDER BY keyword ASC
    `,
      [mythId]
    );
    return (result.rows || []).map((row) => row.keyword);
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT keyword
      FROM myth_keywords
      WHERE myth_id = ?
      ORDER BY keyword COLLATE NOCASE ASC
    `
    )
    .all(mythId)
    .map((row) => row.keyword);
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
    const myth = result.rows?.[0];
    if (!myth) return null;
    const [tags, keywords] = await Promise.all([
      getMythTags(id),
      getMythKeywords(id),
    ]);
    return {
      ...myth,
      tags,
      keywords,
      department: extractDepartment(myth.category_path, myth.region, myth.community),
    };
  }

  const db = getSqliteDb();
  const myth = db
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
    .get(id);
  if (!myth) return null;

  const [tags, keywords] = await Promise.all([
    getMythTags(id),
    getMythKeywords(id),
  ]);

  return {
    ...myth,
    tags,
    keywords,
    department: extractDepartment(myth.category_path, myth.region, myth.community),
  };
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
        content_formatted,
        source_row,
        created_at,
        updated_at
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, NOW(), NOW()
      )
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
        data.content_formatted,
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
      content_formatted,
      source_row,
      created_at,
      updated_at
    ) VALUES (
      ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,datetime('now'),datetime('now')
    )
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
    data.content_formatted,
    data.source_row
  );
  return { id: info.lastInsertRowid };
}

async function updateMyth(id, data) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      UPDATE myths
      SET
        title = $1,
        slug = $2,
        region_id = $3,
        community_id = $4,
        category_path = $5,
        tags_raw = $6,
        mito = $7,
        historia = $8,
        versiones = $9,
        leccion = $10,
        similitudes = $11,
        content = $12,
        excerpt = $13,
        seo_title = $14,
        seo_description = $15,
        focus_keyword = $16,
        focus_keywords_raw = $17,
        image_prompt = $18,
        image_url = $19,
        latitude = $20,
        longitude = $21,
        content_formatted = $22,
        updated_at = NOW()
      WHERE id = $23
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
        data.content_formatted,
        id,
      ]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `
    UPDATE myths
    SET
      title = ?,
      slug = ?,
      region_id = ?,
      community_id = ?,
      category_path = ?,
      tags_raw = ?,
      mito = ?,
      historia = ?,
      versiones = ?,
      leccion = ?,
      similitudes = ?,
      content = ?,
      excerpt = ?,
      seo_title = ?,
      seo_description = ?,
      focus_keyword = ?,
      focus_keywords_raw = ?,
      image_prompt = ?,
      image_url = ?,
      latitude = ?,
      longitude = ?,
      content_formatted = ?,
      updated_at = datetime('now')
    WHERE id = ?
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
    data.content_formatted,
    id
  );
  return info.changes ? { id } : null;
}

function normalizeMythPayload(payload, existing) {
  const contentSections = parseContentSections(payload.content || "");

  const mito = String(payload.mito || contentSections.mito || "").trim();
  const historia = String(payload.historia || contentSections.historia || "").trim();
  const versiones = String(payload.versiones || contentSections.versiones || "").trim();
  const leccion = String(payload.leccion || contentSections.leccion || "").trim();
  const similitudes = String(payload.similitudes || contentSections.similitudes || "").trim();

  const content = buildContent({ mito, historia, versiones, leccion, similitudes });
  const excerptSource = String(payload.excerpt || "").trim() || mito || content;

  const title = String(payload.title || "").trim();
  const slugInput = String(payload.slug || "").trim();
  const focusKeyword = String(payload.focus_keyword || "").trim() || title;
  const focusKeywordsRaw = String(payload.focus_keywords_raw || "").trim();
  const focusKeywords = parseKeywordsRaw(focusKeywordsRaw).length
    ? parseKeywordsRaw(focusKeywordsRaw)
    : [focusKeyword];

  const tagsList = parseTagsRaw(payload.tags_raw);
  const tagsRaw = tagsList.join(", ");

  return {
    title,
    slugInput,
    mito,
    historia,
    versiones,
    leccion,
    similitudes,
    content,
    excerpt: truncateText(excerptSource, MAX_EXCERPT_CHARS),
    seo_title: String(payload.seo_title || "").trim() || title,
    seo_description:
      String(payload.seo_description || "").trim() ||
      truncateText(excerptSource, MAX_EXCERPT_CHARS),
    focus_keyword: focusKeyword,
    focus_keywords_raw: focusKeywords.join("|"),
    tags_raw: tagsRaw,
    tags_list: tagsList,
    image_prompt: String(payload.image_prompt || "").trim(),
    image_url: String(payload.image_url || "").trim() || null,
    latitude: parseOptionalNumber(payload.latitude),
    longitude: parseOptionalNumber(payload.longitude),
    content_formatted:
      typeof payload.content_formatted === "boolean"
        ? payload.content_formatted
        : Boolean(existing?.content_formatted),
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const myth = await getMythById(Number(id));
      if (!myth) {
        return NextResponse.json({ error: "Mito no encontrado" }, { status: 404 });
      }
      return NextResponse.json({ myth });
    }

    const q = searchParams.get("q") || "";
    const limit = Number(searchParams.get("limit") || 20);
    const offset = Number(searchParams.get("offset") || 0);
    const list = await listMyths({ q, limit, offset });
    return NextResponse.json(list);
  } catch (error) {
    console.error("Error in myths GET:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load myths" },
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

    const body = await request.json();
    const payload = body.myth || body;

    const regionId = Number(payload.region_id);
    if (!regionId) {
      return NextResponse.json({ error: "Region requerida" }, { status: 400 });
    }

    const region = await getRegionById(regionId);
    if (!region) {
      return NextResponse.json({ error: "Region no encontrada" }, { status: 400 });
    }

    const communityId = payload.community_id ? Number(payload.community_id) : null;
    const community = communityId ? await getCommunityById(communityId) : null;
    if (community && community.region_id && Number(community.region_id) !== Number(regionId)) {
      return NextResponse.json(
        { error: "La comunidad no pertenece a la region seleccionada" },
        { status: 400 }
      );
    }

    const department =
      String(payload.department || "").trim() ||
      extractDepartment(payload.category_path, region.name, community?.name);

    const normalized = normalizeMythPayload(payload);

    if (!normalized.title) {
      return NextResponse.json({ error: "Titulo requerido" }, { status: 400 });
    }

    if (!normalized.image_prompt) {
      return NextResponse.json({ error: "Prompt de imagen requerido" }, { status: 400 });
    }

    const slugBase = normalized.slugInput || normalized.title;
    const slug = await generateUniqueSlug(slugBase);
    if (!slug) {
      return NextResponse.json({ error: "Slug invalido" }, { status: 400 });
    }

    const sourceRow = await getNextSourceRow();
    const categoryPath = buildCategoryPath(region.name, department, community?.name);

    const data = {
      title: normalized.title,
      slug,
      region_id: regionId,
      community_id: community?.id || null,
      category_path: categoryPath || region.name,
      tags_raw: normalized.tags_raw || region.name,
      mito: normalized.mito,
      historia: normalized.historia,
      versiones: normalized.versiones,
      leccion: normalized.leccion,
      similitudes: normalized.similitudes,
      content: normalized.content,
      excerpt: normalized.excerpt,
      seo_title: normalized.seo_title,
      seo_description: normalized.seo_description,
      focus_keyword: normalized.focus_keyword,
      focus_keywords_raw: normalized.focus_keywords_raw,
      image_prompt: normalized.image_prompt,
      image_url: normalized.image_url,
      latitude: normalized.latitude,
      longitude: normalized.longitude,
      content_formatted: normalized.content_formatted ? 1 : 0,
      source_row: sourceRow,
    };

    const created = await insertMyth(data);
    if (!created?.id) {
      throw new Error("No se pudo crear el mito");
    }

    const tagNames = normalized.tags_list.length
      ? normalized.tags_list
      : data.tags_raw
      ? parseTagsRaw(data.tags_raw)
      : [];
    const tagLabels = await replaceMythTags(created.id, tagNames);

    const keywords = parseKeywordsRaw(normalized.focus_keywords_raw);
    await replaceMythKeywords(created.id, keywords);

    return NextResponse.json({
      myth: {
        id: created.id,
        title: data.title,
        slug: data.slug,
        region: region.name,
        community: community?.name || null,
        tags_raw: tagLabels.join(", ") || data.tags_raw,
      },
    });
  } catch (error) {
    console.error("Error in myths POST:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create myth" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
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

    const body = await request.json();
    const payload = body.myth || body;
    const id = Number(payload.id);

    if (!id) {
      return NextResponse.json({ error: "ID requerido" }, { status: 400 });
    }

    const existing = await getMythById(id);
    if (!existing) {
      return NextResponse.json({ error: "Mito no encontrado" }, { status: 404 });
    }

    const regionId = Number(payload.region_id || existing.region_id);
    const region = await getRegionById(regionId);
    if (!region) {
      return NextResponse.json({ error: "Region no encontrada" }, { status: 400 });
    }

    const communityId = payload.community_id ? Number(payload.community_id) : null;
    const community = communityId ? await getCommunityById(communityId) : null;
    if (community && community.region_id && Number(community.region_id) !== Number(regionId)) {
      return NextResponse.json(
        { error: "La comunidad no pertenece a la region seleccionada" },
        { status: 400 }
      );
    }

    const department =
      String(payload.department || "").trim() ||
      extractDepartment(payload.category_path || existing.category_path, region.name, community?.name);

    const normalized = normalizeMythPayload(payload, existing);

    if (!normalized.title) {
      return NextResponse.json({ error: "Titulo requerido" }, { status: 400 });
    }

    if (!normalized.image_prompt) {
      return NextResponse.json({ error: "Prompt de imagen requerido" }, { status: 400 });
    }

    const slugBase = normalized.slugInput || existing.slug;
    const slug = slugify(slugBase);
    if (!slug) {
      return NextResponse.json({ error: "Slug invalido" }, { status: 400 });
    }

    await assertSlugAvailable(slug, id);

    const categoryPath = buildCategoryPath(region.name, department, community?.name);

    const data = {
      title: normalized.title,
      slug,
      region_id: regionId,
      community_id: community?.id || null,
      category_path: categoryPath || region.name,
      tags_raw: normalized.tags_raw || existing.tags_raw,
      mito: normalized.mito,
      historia: normalized.historia,
      versiones: normalized.versiones,
      leccion: normalized.leccion,
      similitudes: normalized.similitudes,
      content: normalized.content,
      excerpt: normalized.excerpt,
      seo_title: normalized.seo_title,
      seo_description: normalized.seo_description,
      focus_keyword: normalized.focus_keyword,
      focus_keywords_raw: normalized.focus_keywords_raw,
      image_prompt: normalized.image_prompt,
      image_url: normalized.image_url,
      latitude: normalized.latitude,
      longitude: normalized.longitude,
      content_formatted: normalized.content_formatted ? 1 : 0,
    };

    const updated = await updateMyth(id, data);
    if (!updated?.id) {
      throw new Error("No se pudo actualizar el mito");
    }

    const tagNames = normalized.tags_list.length
      ? normalized.tags_list
      : data.tags_raw
      ? parseTagsRaw(data.tags_raw)
      : [];
    const tagLabels = await replaceMythTags(id, tagNames);

    const keywords = parseKeywordsRaw(normalized.focus_keywords_raw);
    await replaceMythKeywords(id, keywords);

    return NextResponse.json({
      myth: {
        id,
        title: data.title,
        slug: data.slug,
        region: region.name,
        community: community?.name || null,
        tags_raw: tagLabels.join(", ") || data.tags_raw,
      },
    });
  } catch (error) {
    console.error("Error in myths PUT:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update myth" },
      { status: 500 }
    );
  }
}
