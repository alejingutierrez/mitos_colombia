import { getSqlClient, getSqliteDb, isPostgres } from "../../lib/db";
import { getContentLastModified } from "../../lib/myths";
import { buildSitemapIndexXml, buildUrl, getBaseUrl, ONE_HOUR } from "../../lib/sitemap";
import {
  LEGACY_CONTENT_LASTMOD,
  ROUTE_CONTENT_LASTMOD,
  STATIC_CONTENT_LASTMOD,
} from "../../lib/sitemap-entries";

export const runtime = "nodejs";
export const revalidate = 3600;

const MYTHS_PER_SITEMAP = 500;
const SITEMAP_STATIC = "/sitemap-static.xml";
const SITEMAP_ROUTES = "/sitemap-rutas.xml";
const SITEMAP_TAXONOMY = "/sitemap-taxonomia.xml";
const SITEMAP_MYTHS = "/sitemap-mitos";

async function getMythSitemapStats() {
  let rows = [];
  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `
        SELECT GREATEST(m.updated_at, em.updated_at) AS updated_at
        FROM myths m
        LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
        WHERE m.slug IS NOT NULL AND m.slug != ''
        ORDER BY m.id ASC
      `
    );
    rows = result.rows || [];
  } else {
    const db = getSqliteDb();
    rows = db
      .prepare(
        `
          SELECT CASE
            WHEN em.updated_at IS NOT NULL
              AND (m.updated_at IS NULL OR em.updated_at > m.updated_at)
              THEN em.updated_at
            ELSE m.updated_at
          END AS updated_at
          FROM myths m
          LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
          WHERE m.slug IS NOT NULL AND m.slug != ''
          ORDER BY m.id ASC
        `
      )
      .all();
  }

  const stats = [];
  for (let offset = 0; offset < rows.length; offset += MYTHS_PER_SITEMAP) {
    const pageRows = rows.slice(offset, offset + MYTHS_PER_SITEMAP);
    const lastModified = pageRows.reduce((latest, row) => {
      const candidate = row.updated_at;
      if (!candidate) return latest;
      if (!latest || new Date(candidate) > new Date(latest)) return candidate;
      return latest;
    }, null);
    stats.push({ page: stats.length + 1, lastModified });
  }

  return stats.length ? stats : [{ page: 1, lastModified: null }];
}

function buildMythSitemapUrls(baseUrl, stats, fallbackStamp) {
  return stats.map(({ page, lastModified }) => ({
    url: buildUrl(baseUrl, `${SITEMAP_MYTHS}/${page}`),
    lastModified: lastModified || fallbackStamp,
  }));
}

export async function GET(request) {
  try {
    const baseUrl = getBaseUrl(request);
    let mythStats = [{ page: 1, lastModified: null }];

    try {
      mythStats = await getMythSitemapStats();
    } catch (error) {
      console.error("[SITEMAP] Myth stats failed:", error);
    }

    const mythStamp = (await getContentLastModified()) || LEGACY_CONTENT_LASTMOD;

    const entries = [
      { url: buildUrl(baseUrl, SITEMAP_STATIC), lastModified: STATIC_CONTENT_LASTMOD },
      { url: buildUrl(baseUrl, SITEMAP_ROUTES), lastModified: ROUTE_CONTENT_LASTMOD },
      { url: buildUrl(baseUrl, SITEMAP_TAXONOMY), lastModified: mythStamp },
      ...buildMythSitemapUrls(baseUrl, mythStats, mythStamp),
    ];

    const xml = buildSitemapIndexXml(entries);

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
      },
    });
  } catch (error) {
    console.error("Error generating sitemap index:", error);
    const baseUrl = getBaseUrl(request);
    const fallbackXml = buildSitemapIndexXml([
      { url: buildUrl(baseUrl, SITEMAP_STATIC), lastModified: STATIC_CONTENT_LASTMOD },
      { url: buildUrl(baseUrl, SITEMAP_ROUTES), lastModified: ROUTE_CONTENT_LASTMOD },
      { url: buildUrl(baseUrl, SITEMAP_TAXONOMY), lastModified: LEGACY_CONTENT_LASTMOD },
      { url: buildUrl(baseUrl, `${SITEMAP_MYTHS}/1`), lastModified: LEGACY_CONTENT_LASTMOD },
    ]);
    return new Response(fallbackXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
      },
    });
  }
}
