import { filterAllowedCommunities } from "../../lib/communityFilters";
import { getSqlClient, getSqliteDb, isPostgres } from "../../lib/db";
import {
  buildSitemapXml,
  buildUrl,
  encodeSegment,
  getBaseUrl,
  ONE_HOUR,
} from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_CATEGORY_MYTHS = 6;

async function loadTaxonomy() {
  if (isPostgres()) {
    const sql = getSqlClient();
    const regionsResult = await sql.query(
      "SELECT name, slug FROM regions WHERE slug IS NOT NULL AND slug != '' ORDER BY name ASC"
    );
    const communitiesResult = await sql.query(
      `
        SELECT c.slug, c.name, COUNT(m.id)::int AS myth_count
        FROM communities c
        LEFT JOIN myths m ON m.community_id = c.id
        WHERE c.slug IS NOT NULL AND c.slug != ''
        GROUP BY c.id, c.slug, c.name
        ORDER BY c.name ASC
      `
    );
    const tagsResult = await sql.query(
      `
        SELECT t.slug, t.name, COUNT(mt.myth_id)::int AS myth_count
        FROM tags t
        JOIN myth_tags mt ON mt.tag_id = t.id
        WHERE t.slug IS NOT NULL AND t.slug != ''
        GROUP BY t.id, t.slug, t.name
        ORDER BY t.name ASC
      `
    );

    return {
      regions: regionsResult.rows || [],
      communities: communitiesResult.rows || [],
      tags: tagsResult.rows || [],
    };
  }

  const db = getSqliteDb();
  const regions = db
    .prepare(
      "SELECT name, slug FROM regions WHERE slug IS NOT NULL AND slug != '' ORDER BY name COLLATE NOCASE ASC"
    )
    .all();
  const communities = db
    .prepare(
      `
        SELECT c.slug, c.name, COUNT(m.id) AS myth_count
        FROM communities c
        LEFT JOIN myths m ON m.community_id = c.id
        WHERE c.slug IS NOT NULL AND c.slug != ''
        GROUP BY c.id
        ORDER BY c.name COLLATE NOCASE ASC
      `
    )
    .all();
  const tags = db
    .prepare(
      `
        SELECT t.slug, t.name, COUNT(mt.myth_id) AS myth_count
        FROM tags t
        JOIN myth_tags mt ON mt.tag_id = t.id
        WHERE t.slug IS NOT NULL AND t.slug != ''
        GROUP BY t.id
        ORDER BY t.name COLLATE NOCASE ASC
      `
    )
    .all();

  return { regions, communities, tags };
}

export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const now = new Date();

  let regions = [];
  let communities = [];
  let categories = [];

  try {
    const taxonomy = await loadTaxonomy();
    const regionNames = new Set(
      (taxonomy.regions || []).map((region) =>
        String(region.name || "").toLowerCase()
      )
    );

    categories = (taxonomy.tags || []).filter((tag) => {
      const mythCount = Number(tag.myth_count || 0);
      const lowerName = String(tag.name || "").toLowerCase();
      if (mythCount < MIN_CATEGORY_MYTHS) return false;
      if (lowerName === "ninguno") return false;
      return !regionNames.has(lowerName);
    });

    regions = taxonomy.regions || [];
    communities = filterAllowedCommunities(taxonomy.communities || []);
  } catch (error) {
    console.error("[SITEMAP] Taxonomy load failed:", error);
  }

  const entries = [
    ...categories.map((category) => ({
      url: buildUrl(baseUrl, `/categorias/${encodeSegment(category.slug)}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...communities.map((community) => ({
      url: buildUrl(baseUrl, `/comunidades/${encodeSegment(community.slug)}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    ...regions.map((region) => ({
      url: buildUrl(baseUrl, `/regiones/${encodeSegment(region.slug)}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    })),
  ];

  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
