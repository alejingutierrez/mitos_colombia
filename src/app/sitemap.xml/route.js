import { ROUTES } from "../../lib/routes";
import { filterAllowedCommunities } from "../../lib/communityFilters";
import { getSqlClient, getSqliteDb, isPostgres } from "../../lib/db";
import { getTaxonomy } from "../../lib/myths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_CATEGORY_MYTHS = 6;
const ONE_HOUR = 60 * 60;
const STATIC_PATHS = [
  "/",
  "/mitos",
  "/categorias",
  "/comunidades",
  "/regiones",
  "/rutas",
  "/mapa",
  "/tarot",
  "/metodologia",
  "/sobre-el-proyecto",
  "/contacto",
  "/privacidad",
  "/terminos",
];

function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    return siteUrl.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

function buildUrl(baseUrl, path) {
  return `${baseUrl}${path}`;
}

function normalizeTimestamp(value) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapXml(entries) {
  const urls = entries
    .map((entry) => {
      const loc = escapeXml(entry.url);
      const lastmod = entry.lastModified
        ? `<lastmod>${normalizeTimestamp(entry.lastModified)}</lastmod>`
        : "";
      const changefreq = entry.changeFrequency
        ? `<changefreq>${entry.changeFrequency}</changefreq>`
        : "";
      const priority =
        typeof entry.priority === "number"
          ? `<priority>${entry.priority.toFixed(1)}</priority>`
          : "";
      return `<url><loc>${loc}</loc>${lastmod}${changefreq}${priority}</url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

async function getAllMyths() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT slug
      FROM myths
      WHERE slug IS NOT NULL AND slug != ''
      ORDER BY id ASC
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT slug
      FROM myths
      WHERE slug IS NOT NULL AND slug != ''
      ORDER BY id ASC
    `
    )
    .all();
}

function buildStaticEntries(baseUrl, now) {
  return STATIC_PATHS.map((path) => ({
    url: buildUrl(baseUrl, path),
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

export async function GET() {
  try {
    const baseUrl = getBaseUrl();
    const now = new Date();

    let categories = [];
    let communities = [];
    let regions = [];
    let myths = [];

    try {
      const taxonomy = await getTaxonomy();
      const regionNames = new Set(
        (taxonomy.regions || []).map((region) =>
          String(region.name || "").toLowerCase()
        )
      );

      categories = (taxonomy.tags || []).filter((tag) => {
        const mythCount = Number(tag.myth_count || 0);
        const lowerName = String(tag.name || "").toLowerCase();
        if (mythCount < MIN_CATEGORY_MYTHS) {
          return false;
        }
        if (lowerName === "ninguno") {
          return false;
        }
        return !regionNames.has(lowerName);
      });

      communities = filterAllowedCommunities(taxonomy.communities || []);
      regions = taxonomy.regions || [];
      myths = await getAllMyths();
    } catch (error) {
      console.error("[SITEMAP] Data load failed, using static paths only:", error);
    }

    const entries = [
      ...buildStaticEntries(baseUrl, now),
      ...ROUTES.map((route) => ({
        url: buildUrl(baseUrl, `/rutas/${route.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })),
      ...categories.map((category) => ({
        url: buildUrl(baseUrl, `/categorias/${category.slug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      })),
      ...communities.map((community) => ({
        url: buildUrl(baseUrl, `/comunidades/${community.slug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      })),
      ...regions.map((region) => ({
        url: buildUrl(baseUrl, `/regiones/${region.slug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      })),
      ...myths.map((myth) => ({
        url: buildUrl(baseUrl, `/mitos/${myth.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      })),
    ];

    const xml = buildSitemapXml(entries);

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    const baseUrl = getBaseUrl();
    const now = new Date();
    const fallbackXml = buildSitemapXml(buildStaticEntries(baseUrl, now));
    return new Response(fallbackXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
      },
    });
  }
}
