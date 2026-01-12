import { ROUTES } from "../../lib/routes";
import { filterAllowedCommunities } from "../../lib/communityFilters";
import { getTaxonomy, listMyths } from "../../lib/myths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_CATEGORY_MYTHS = 6;
const ONE_HOUR = 60 * 60;

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

function buildSitemapXml(entries) {
  const urls = entries
    .map((entry) => {
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
      return `<url><loc>${entry.url}</loc>${lastmod}${changefreq}${priority}</url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

async function getAllMyths() {
  const items = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const result = await listMyths({ limit, offset });
    const batch = result?.items || [];
    items.push(...batch);
    if (batch.length < limit) {
      break;
    }
    offset += limit;
  }

  return items;
}

export async function GET() {
  try {
    const baseUrl = getBaseUrl();
    const now = new Date();

    const staticPaths = [
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

    const taxonomy = await getTaxonomy();
    const regionNames = new Set(
      (taxonomy.regions || []).map((region) =>
        String(region.name || "").toLowerCase()
      )
    );

    const categories = (taxonomy.tags || []).filter((tag) => {
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

    const communities = filterAllowedCommunities(taxonomy.communities || []);
    const regions = taxonomy.regions || [];
    const myths = await getAllMyths();

    const entries = [
      ...staticPaths.map((path) => ({
        url: buildUrl(baseUrl, path),
        lastModified: now,
        changeFrequency: path === "/" ? "daily" : "weekly",
        priority: path === "/" ? 1 : 0.7,
      })),
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
    return new Response("Error generating sitemap", { status: 500 });
  }
}
