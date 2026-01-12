import { ROUTES } from "../lib/routes";
import { filterAllowedCommunities } from "../lib/communityFilters";
import { getTaxonomy, listMyths } from "../lib/myths";

export const runtime = "nodejs";

const MIN_CATEGORY_MYTHS = 6;

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

export default async function sitemap() {
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

  return entries;
}
