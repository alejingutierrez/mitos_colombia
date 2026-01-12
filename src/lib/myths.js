import { unstable_cache } from "next/cache";
import { getSqlClient, getSqliteDb, isPostgres, isQuotaError } from "./db";

const ONE_HOUR = 60 * 60;
const ONE_DAY = 60 * 60 * 24;

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
      `(\n        myths.title LIKE :q OR\n        myths.excerpt LIKE :q OR\n        myths.content LIKE :q OR\n        myths.tags_raw LIKE :q OR\n        myths.focus_keywords_raw LIKE :q OR\n        regions.name LIKE :q OR\n        regions.slug LIKE :q OR\n        communities.name LIKE :q OR\n        communities.slug LIKE :q\n      )`
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
      `(\n        myths.title ILIKE $${idx} OR\n        myths.excerpt ILIKE $${idx} OR\n        myths.content ILIKE $${idx} OR\n        myths.tags_raw ILIKE $${idx} OR\n        myths.focus_keywords_raw ILIKE $${idx} OR\n        regions.name ILIKE $${idx} OR\n        regions.slug ILIKE $${idx} OR\n        communities.name ILIKE $${idx} OR\n        communities.slug ILIKE $${idx}\n      )`
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
      myths.image_url,
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
      myths.image_url,
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
    ORDER BY myths.title ASC
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
  try {
    if (isPostgres()) {
      return await listMythsPostgres(params);
    }
    return listMythsSqlite(params);
  } catch (error) {
    if (isQuotaError(error)) {
      console.error("[MYTHS] listMyths quota exceeded:", error);
    } else {
      console.error("[MYTHS] listMyths failed:", error);
    }
    const limitValue = clampNumber(params.limit, 1, 100, 20);
    const offsetValue = clampNumber(params.offset, 0, 5000, 0);
    return {
      total: 0,
      limit: limitValue,
      offset: offsetValue,
      items: [],
      error: isQuotaError(error) ? "db_quota_exceeded" : undefined,
    };
  }
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

const getMythBySlugCached = unstable_cache(
  async (slug) => {
    try {
      if (isPostgres()) {
        return await getMythBySlugPostgres(slug);
      }
      return getMythBySlugSqlite(slug);
    } catch (error) {
      console.error("[MYTHS] getMythBySlug failed:", error);
      return null;
    }
  },
  ["myth-by-slug"],
  { revalidate: ONE_HOUR }
);

export async function getMythBySlug(slug) {
  return getMythBySlugCached(slug);
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
        regions.image_url,
        regions.image_prompt,
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
        communities.image_url,
        communities.image_prompt,
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
        tags.image_url,
        tags.image_prompt,
        tags.description,
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
        regions.image_url,
        regions.image_prompt,
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
        communities.image_url,
        communities.image_prompt,
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
        tags.image_url,
        tags.image_prompt,
        tags.description,
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

const getTaxonomyCached = unstable_cache(
  async () => {
    try {
      if (isPostgres()) {
        return await getTaxonomyPostgres();
      }
      return getTaxonomySqlite();
    } catch (error) {
      console.error("[MYTHS] getTaxonomy failed:", error);
      return { regions: [], communities: [], tags: [] };
    }
  },
  ["taxonomy"],
  { revalidate: ONE_HOUR }
);

export async function getTaxonomy() {
  return getTaxonomyCached();
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

// Get recommended myths based on region, community, and tags
function getRecommendedMythsSqlite(mythId, { region_id, community_id, tags }, limit = 8) {
  const db = getSqliteDb();

  try {
    // Get myths from same region or community, or with shared tags
    const sql = `
      SELECT DISTINCT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug,
        (CASE WHEN myths.region_id = ? THEN 2 ELSE 0 END +
         CASE WHEN myths.community_id = ? THEN 3 ELSE 0 END) AS score
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.id != ?
        AND (myths.region_id = ? OR myths.community_id = ?)
      ORDER BY score DESC, RANDOM()
      LIMIT ?
    `;

    return db.prepare(sql).all(
      region_id,
      community_id,
      mythId,
      region_id,
      community_id,
      limit
    );
  } catch (error) {
    console.error("Error getting recommended myths (SQLite):", error);
    return [];
  }
}

async function getRecommendedMythsPostgres(mythId, { region_id, community_id, tags }, limit = 8) {
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
      SELECT DISTINCT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug,
        (CASE WHEN myths.region_id = $1 THEN 2 ELSE 0 END +
         CASE WHEN myths.community_id = $2 THEN 3 ELSE 0 END) AS score
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.id != $3
        AND (myths.region_id = $1 OR myths.community_id = $2)
      ORDER BY score DESC, myths.id ASC
      LIMIT $4
      `,
      [region_id, community_id, mythId, limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting recommended myths:", error);
    return [];
  }
}

const getRecommendedMythsCached = unstable_cache(
  async (mythId, regionId, communityId, limit = 8) => {
    if (!mythId || !regionId) {
      return [];
    }
    const payload = { region_id: regionId, community_id: communityId };
    if (isPostgres()) {
      return await getRecommendedMythsPostgres(mythId, payload, limit);
    }
    return getRecommendedMythsSqlite(mythId, payload, limit);
  },
  ["recommended-myths"],
  { revalidate: ONE_HOUR }
);

export async function getRecommendedMyths(myth, limit = 8) {
  if (!myth || !myth.id || !myth.region_id) {
    return [];
  }

  try {
    return await getRecommendedMythsCached(
      myth.id,
      myth.region_id,
      myth.community_id,
      limit
    );
  } catch (error) {
    console.error("Error in getRecommendedMyths:", error);
    return [];
  }
}

// Get featured myths with images for home page
async function getFeaturedMythsWithImagesPostgres(limit = 12, seed = 0) {
  const sql = getSqlClient();

  try {
    // Use date-based rotation: get myths with images, rotate by seed
    const result = await sql.query(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.image_url IS NOT NULL
      ORDER BY (myths.id + $1) % 23, myths.id
      LIMIT $2
      `,
      [seed, limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting featured myths with images:", error);
    return [];
  }
}

function getFeaturedMythsWithImagesSqlite(limit = 12, seed = 0) {
  const db = getSqliteDb();

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.image_url IS NOT NULL
      ORDER BY (myths.id + ?) % 23, myths.id
      LIMIT ?
    `;

    return db.prepare(sql).all(seed, limit);
  } catch (error) {
    console.error("Error getting featured myths with images (SQLite):", error);
    return [];
  }
}

const getFeaturedMythsWithImagesCached = unstable_cache(
  async (limit = 12, seed = 0) => {
    if (isPostgres()) {
      return await getFeaturedMythsWithImagesPostgres(limit, seed);
    }
    return getFeaturedMythsWithImagesSqlite(limit, seed);
  },
  ["featured-myths"],
  { revalidate: ONE_DAY }
);

export async function getFeaturedMythsWithImages(limit = 12, seed = 0) {
  try {
    return await getFeaturedMythsWithImagesCached(limit, seed);
  } catch (error) {
    console.error("Error in getFeaturedMythsWithImages:", error);
    return [];
  }
}

// Get myths by region for home page
async function getMythsByRegionPostgres(regionSlug, limit = 6, seed = 0) {
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      WHERE regions.slug = $1
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + $2) % 100,
        myths.id
      LIMIT $3
      `,
      [regionSlug, seed, limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting myths by region:", error);
    return [];
  }
}

function getMythsByRegionSqlite(regionSlug, limit = 6, seed = 0) {
  const db = getSqliteDb();

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      WHERE regions.slug = ?
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + ?) % 100,
        myths.id
      LIMIT ?
    `;

    return db.prepare(sql).all(regionSlug, seed, limit);
  } catch (error) {
    console.error("Error getting myths by region (SQLite):", error);
    return [];
  }
}

export async function getMythsByRegion(regionSlug, limit = 6, seed = 0) {
  try {
    if (isPostgres()) {
      return await getMythsByRegionPostgres(regionSlug, limit, seed);
    }
    return getMythsByRegionSqlite(regionSlug, limit, seed);
  } catch (error) {
    console.error("Error in getMythsByRegion:", error);
    return [];
  }
}

// Get diverse myths from different regions for home page
async function getDiverseMythsPostgres(limit = 9, seed = 0) {
  const sql = getSqlClient();

  try {
    // Get myths distributed across regions, prioritize those with images
    const result = await sql.query(
      `
      WITH ranked_myths AS (
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.image_url,
          myths.category_path,
          regions.name AS region,
          regions.slug AS region_slug,
          ROW_NUMBER() OVER (
            PARTITION BY regions.id
            ORDER BY
              CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
              (myths.id + $1) % 100
          ) as rn
        FROM myths
        JOIN regions ON regions.id = myths.region_id
      )
      SELECT id, title, slug, excerpt, image_url, category_path, region, region_slug
      FROM ranked_myths
      WHERE rn <= 2
      ORDER BY
        CASE WHEN image_url IS NOT NULL THEN 0 ELSE 1 END,
        (id + $1) % 100
      LIMIT $2
      `,
      [seed, limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting diverse myths:", error);
    return [];
  }
}

function getDiverseMythsSqlite(limit = 9, seed = 0) {
  const db = getSqliteDb();

  try {
    // Simplified version for SQLite - get diverse myths across regions
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + ?) % 100
      LIMIT ?
    `;

    return db.prepare(sql).all(seed, limit);
  } catch (error) {
    console.error("Error getting diverse myths (SQLite):", error);
    return [];
  }
}

const getDiverseMythsCached = unstable_cache(
  async (limit = 9, seed = 0) => {
    if (isPostgres()) {
      return await getDiverseMythsPostgres(limit, seed);
    }
    return getDiverseMythsSqlite(limit, seed);
  },
  ["diverse-myths"],
  { revalidate: ONE_DAY }
);

export async function getDiverseMyths(limit = 9, seed = 0) {
  try {
    return await getDiverseMythsCached(limit, seed);
  } catch (error) {
    console.error("Error in getDiverseMyths:", error);
    return [];
  }
}

// Get home page stats
async function getHomeStatsPostgres() {
  const sql = getSqlClient();

  try {
    const result = await sql.query(`
      SELECT
        (SELECT COUNT(*) FROM myths) as total_myths,
        (SELECT COUNT(*) FROM regions) as total_regions,
        (SELECT COUNT(*) FROM myths WHERE image_url IS NOT NULL) as myths_with_images,
        (SELECT COUNT(*) FROM tags) as total_tags
    `);

    return result.rows[0];
  } catch (error) {
    console.error("Error getting home stats:", error);
    return {
      total_myths: 0,
      total_regions: 0,
      myths_with_images: 0,
      total_tags: 0
    };
  }
}

function getHomeStatsSqlite() {
  const db = getSqliteDb();

  try {
    const result = db
      .prepare(
        `
        SELECT
          (SELECT COUNT(*) FROM myths) as total_myths,
          (SELECT COUNT(*) FROM regions) as total_regions,
          (SELECT COUNT(*) FROM myths WHERE image_url IS NOT NULL) as myths_with_images,
          (SELECT COUNT(*) FROM tags) as total_tags
      `
      )
      .get();

    return result;
  } catch (error) {
    console.error("Error getting home stats (SQLite):", error);
    return {
      total_myths: 0,
      total_regions: 0,
      myths_with_images: 0,
      total_tags: 0
    };
  }
}

const getHomeStatsCached = unstable_cache(
  async () => {
    if (isPostgres()) {
      return await getHomeStatsPostgres();
    }
    return getHomeStatsSqlite();
  },
  ["home-stats"],
  { revalidate: ONE_HOUR }
);

export async function getHomeStats() {
  try {
    return await getHomeStatsCached();
  } catch (error) {
    console.error("Error in getHomeStats:", error);
    return {
      total_myths: 0,
      total_regions: 0,
      myths_with_images: 0,
      total_tags: 0
    };
  }
}
