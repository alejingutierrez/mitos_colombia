import { getSqlClient, getSqliteDb, isPostgres } from "./db";

function normalizeInput(value) {
  if (!value) {
    return null;
  }
  const trimmed = String(value).trim();
  return trimmed.length ? trimmed : null;
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

function buildFiltersSqlite({ region, community, tag, q }) {
  const where = [];
  const params = {};

  const regionValue = normalizeInput(region);
  if (regionValue) {
    where.push("(regions.slug = :region OR regions.name = :region)");
    params.region = regionValue;
  }

  const communityValue = normalizeInput(community);
  if (communityValue) {
    where.push("(communities.slug = :community OR communities.name = :community)");
    params.community = communityValue;
  }

  const tagValue = normalizeInput(tag);
  if (tagValue) {
    where.push("(tags.slug = :tag OR tags.name = :tag)");
    params.tag = tagValue;
  }

  const queryValue = normalizeInput(q);
  if (queryValue) {
    where.push(
      "(myths.title LIKE :q OR myths.excerpt LIKE :q OR myths.content LIKE :q)"
    );
    params.q = `%${queryValue}%`;
  }

  return { where, params };
}

function buildFiltersPostgres({ region, community, tag, q }) {
  const where = [];
  const values = [];

  const regionValue = normalizeInput(region);
  if (regionValue) {
    values.push(regionValue);
    const idx = values.length;
    where.push(`(regions.slug = $${idx} OR regions.name = $${idx})`);
  }

  const communityValue = normalizeInput(community);
  if (communityValue) {
    values.push(communityValue);
    const idx = values.length;
    where.push(`(communities.slug = $${idx} OR communities.name = $${idx})`);
  }

  const tagValue = normalizeInput(tag);
  if (tagValue) {
    values.push(tagValue);
    const idx = values.length;
    where.push(`(tags.slug = $${idx} OR tags.name = $${idx})`);
  }

  const queryValue = normalizeInput(q);
  if (queryValue) {
    values.push(`%${queryValue}%`);
    const idx = values.length;
    where.push(
      `(myths.title ILIKE $${idx} OR myths.excerpt ILIKE $${idx} OR myths.content ILIKE $${idx})`
    );
  }

  return { where, values, tagValue };
}

function listMythsSqlite({
  region,
  community,
  tag,
  q,
  limit = 20,
  offset = 0,
} = {}) {
  const db = getSqliteDb();
  const { where, params } = buildFiltersSqlite({ region, community, tag, q });
  const tagJoin = normalizeInput(tag)
    ? "JOIN myth_tags ON myth_tags.myth_id = myths.id JOIN tags ON tags.id = myth_tags.tag_id"
    : "";

  const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const limitValue = clampNumber(limit, 1, 100, 20);
  const offsetValue = clampNumber(offset, 0, 5000, 0);

  const countSql = `
    SELECT COUNT(DISTINCT myths.id) AS count
    FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id
    ${tagJoin}
    ${whereClause}
  `;

  const listSql = `
    SELECT DISTINCT
      myths.id,
      myths.title,
      myths.slug,
      myths.excerpt,
      myths.tags_raw,
      myths.seo_title,
      myths.seo_description,
      myths.focus_keyword,
      myths.focus_keywords_raw,
      myths.image_prompt,
      myths.category_path,
      regions.name AS region,
      regions.slug AS region_slug,
      communities.name AS community,
      communities.slug AS community_slug
    FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id
    ${tagJoin}
    ${whereClause}
    ORDER BY myths.title COLLATE NOCASE ASC
    LIMIT :limit OFFSET :offset
  `;

  const total = db.prepare(countSql).get({ ...params }).count;
  const items = db
    .prepare(listSql)
    .all({ ...params, limit: limitValue, offset: offsetValue });

  return {
    total,
    limit: limitValue,
    offset: offsetValue,
    items,
  };
}

async function listMythsPostgres({
  region,
  community,
  tag,
  q,
  limit = 20,
  offset = 0,
} = {}) {
  const sql = getSqlClient();
  const { where, values, tagValue } = buildFiltersPostgres({
    region,
    community,
    tag,
    q,
  });

  const tagJoin = tagValue
    ? "JOIN myth_tags ON myth_tags.myth_id = myths.id JOIN tags ON tags.id = myth_tags.tag_id"
    : "";
  const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const limitValue = clampNumber(limit, 1, 100, 20);
  const offsetValue = clampNumber(offset, 0, 5000, 0);

  const countSql = `
    SELECT COUNT(DISTINCT myths.id) AS count
    FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id
    ${tagJoin}
    ${whereClause}
  `;

  const countResult = await sql.query(countSql, values);
  const total = Number(countResult.rows[0]?.count || 0);

  const limitIndex = values.length + 1;
  const offsetIndex = values.length + 2;
  const listSql = `
    SELECT DISTINCT
      myths.id,
      myths.title,
      myths.slug,
      myths.excerpt,
      myths.tags_raw,
      myths.seo_title,
      myths.seo_description,
      myths.focus_keyword,
      myths.focus_keywords_raw,
      myths.image_prompt,
      myths.category_path,
      regions.name AS region,
      regions.slug AS region_slug,
      communities.name AS community,
      communities.slug AS community_slug
    FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id
    ${tagJoin}
    ${whereClause}
    ORDER BY LOWER(myths.title) ASC
    LIMIT $${limitIndex} OFFSET $${offsetIndex}
  `;

  const listValues = [...values, limitValue, offsetValue];
  const items = (await sql.query(listSql, listValues)).rows;

  return {
    total,
    limit: limitValue,
    offset: offsetValue,
    items,
  };
}

export async function listMyths(params = {}) {
  if (isPostgres()) {
    return listMythsPostgres(params);
  }
  return listMythsSqlite(params);
}

function getMythBySlugSqlite(slug) {
  const db = getSqliteDb();
  const slugValue = normalizeInput(slug);
  if (!slugValue) {
    return null;
  }

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
      WHERE myths.slug = ?
      LIMIT 1
    `
    )
    .get(slugValue);

  if (!myth) {
    return null;
  }

  const tags = db
    .prepare(
      `
      SELECT tags.name, tags.slug
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      WHERE myth_tags.myth_id = ?
      ORDER BY tags.name COLLATE NOCASE ASC
    `
    )
    .all(myth.id);

  const keywords = db
    .prepare(
      `
      SELECT keyword
      FROM myth_keywords
      WHERE myth_id = ?
      ORDER BY keyword COLLATE NOCASE ASC
    `
    )
    .all(myth.id)
    .map((row) => row.keyword);

  return {
    ...myth,
    tags,
    keywords,
  };
}

async function getMythBySlugPostgres(slug) {
  const sql = getSqlClient();
  const slugValue = normalizeInput(slug);
  if (!slugValue) {
    return null;
  }

  const mythResult = await sql.query(
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
      WHERE myths.slug = $1
      LIMIT 1
    `,
    [slugValue]
  );

  const myth = mythResult.rows[0];
  if (!myth) {
    return null;
  }

  const tagsResult = await sql.query(
    `
      SELECT tags.name, tags.slug
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      WHERE myth_tags.myth_id = $1
      ORDER BY tags.name ASC
    `,
    [myth.id]
  );

  const keywordsResult = await sql.query(
    `
      SELECT keyword
      FROM myth_keywords
      WHERE myth_id = $1
      ORDER BY keyword ASC
    `,
    [myth.id]
  );

  return {
    ...myth,
    tags: tagsResult.rows,
    keywords: keywordsResult.rows.map((row) => row.keyword),
  };
}

export async function getMythBySlug(slug) {
  if (isPostgres()) {
    return getMythBySlugPostgres(slug);
  }
  return getMythBySlugSqlite(slug);
}

function getTaxonomySqlite() {
  const db = getSqliteDb();

  const regions = db
    .prepare(
      `
      SELECT
        regions.id,
        regions.name,
        regions.slug,
        COUNT(myths.id) AS myth_count
      FROM regions
      LEFT JOIN myths ON myths.region_id = regions.id
      GROUP BY regions.id
      ORDER BY regions.name COLLATE NOCASE ASC
    `
    )
    .all();

  const communities = db
    .prepare(
      `
      SELECT
        communities.id,
        communities.name,
        communities.slug,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(myths.id) AS myth_count
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      LEFT JOIN myths ON myths.community_id = communities.id
      GROUP BY communities.id
      ORDER BY regions.name COLLATE NOCASE ASC, communities.name COLLATE NOCASE ASC
    `
    )
    .all();

  const tags = db
    .prepare(
      `
      SELECT
        tags.name,
        tags.slug,
        COUNT(myth_tags.myth_id) AS myth_count
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      GROUP BY tags.id
      ORDER BY myth_count DESC, tags.name COLLATE NOCASE ASC
    `
    )
    .all();

  return { regions, communities, tags };
}

async function getTaxonomyPostgres() {
  const sql = getSqlClient();

  const regionsResult = await sql.query(
    `
      SELECT
        regions.id,
        regions.name,
        regions.slug,
        COUNT(myths.id) AS myth_count
      FROM regions
      LEFT JOIN myths ON myths.region_id = regions.id
      GROUP BY regions.id
      ORDER BY regions.name ASC
    `
  );

  const communitiesResult = await sql.query(
    `
      SELECT
        communities.id,
        communities.name,
        communities.slug,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(myths.id) AS myth_count
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      LEFT JOIN myths ON myths.community_id = communities.id
      GROUP BY communities.id, regions.id
      ORDER BY regions.name ASC, communities.name ASC
    `
  );

  const tagsResult = await sql.query(
    `
      SELECT
        tags.name,
        tags.slug,
        COUNT(myth_tags.myth_id) AS myth_count
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      GROUP BY tags.id
      ORDER BY myth_count DESC, tags.name ASC
    `
  );

  return {
    regions: regionsResult.rows,
    communities: communitiesResult.rows,
    tags: tagsResult.rows,
  };
}

export async function getTaxonomy() {
  if (isPostgres()) {
    return getTaxonomyPostgres();
  }
  return getTaxonomySqlite();
}

export function parseListParams(searchParams) {
  return {
    region: searchParams.get("region"),
    community: searchParams.get("community"),
    tag: searchParams.get("tag"),
    q: searchParams.get("q"),
    limit: searchParams.get("limit"),
    offset: searchParams.get("offset"),
  };
}
