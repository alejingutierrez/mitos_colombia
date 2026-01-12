import { getSqlClient, getSqliteDb, isPostgres } from "../../lib/db";
import { buildSitemapIndexXml, buildUrl, getBaseUrl, ONE_HOUR } from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MYTHS_PER_SITEMAP = 500;
const SITEMAP_STATIC = "/sitemap-static.xml";
const SITEMAP_ROUTES = "/sitemap-rutas.xml";
const SITEMAP_TAXONOMY = "/sitemap-taxonomia.xml";
const SITEMAP_MYTHS = "/sitemap-mitos.xml";

async function getMythCount() {
  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      "SELECT COUNT(*)::int AS total FROM myths WHERE slug IS NOT NULL AND slug != ''"
    );
    return Number(result.rows?.[0]?.total || 0);
  }

  const db = getSqliteDb();
  return db
    .prepare(
      "SELECT COUNT(*) AS total FROM myths WHERE slug IS NOT NULL AND slug != ''"
    )
    .get().total;
}

function buildMythSitemapUrls(baseUrl, totalMyths, now) {
  const totalPages = Math.max(1, Math.ceil(totalMyths / MYTHS_PER_SITEMAP));
  const urls = [];
  for (let page = 1; page <= totalPages; page += 1) {
    urls.push({
      url: buildUrl(baseUrl, `${SITEMAP_MYTHS}?page=${page}`),
      lastModified: now,
    });
  }
  return urls;
}

export async function GET(request) {
  try {
    const baseUrl = getBaseUrl(request);
    const now = new Date();
    let totalMyths = 0;

    try {
      totalMyths = await getMythCount();
    } catch (error) {
      console.error("[SITEMAP] Myth count failed:", error);
    }

    const entries = [
      { url: buildUrl(baseUrl, SITEMAP_STATIC), lastModified: now },
      { url: buildUrl(baseUrl, SITEMAP_ROUTES), lastModified: now },
      { url: buildUrl(baseUrl, SITEMAP_TAXONOMY), lastModified: now },
      ...buildMythSitemapUrls(baseUrl, totalMyths, now),
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
    const now = new Date();
    const fallbackXml = buildSitemapIndexXml([
      { url: buildUrl(baseUrl, SITEMAP_STATIC), lastModified: now },
      { url: buildUrl(baseUrl, SITEMAP_ROUTES), lastModified: now },
      { url: buildUrl(baseUrl, SITEMAP_TAXONOMY), lastModified: now },
      { url: buildUrl(baseUrl, `${SITEMAP_MYTHS}?page=1`), lastModified: now },
    ]);
    return new Response(fallbackXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
      },
    });
  }
}
