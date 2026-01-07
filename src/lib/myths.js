import { getDb } from "./db";

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

function buildFilters({ region, community, tag, q }) {
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

export function listMyths({
  region,
  community,
  tag,
  q,
  limit = 20,
  offset = 0,
} = {}) {
  const db = getDb();
  const { where, params } = buildFilters({ region, community, tag, q });
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

export function getMythBySlug(slug) {
  const db = getDb();
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

export function getTaxonomy() {
  const db = getDb();

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
