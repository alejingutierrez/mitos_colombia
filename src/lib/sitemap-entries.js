export const STATIC_CONTENT_LASTMOD = "2026-01-20T01:11:52.046Z";
export const ROUTE_CONTENT_LASTMOD = "2026-01-20T01:11:52.046Z";

export const STATIC_PATHS = [
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

function buildUrl(baseUrl, path) {
  return `${String(baseUrl || "").replace(/\/$/, "")}${path}`;
}

function encodeSegment(value) {
  return encodeURIComponent(String(value || "").trim());
}

export function createStaticSitemapEntries(
  baseUrl,
  { lastModified = STATIC_CONTENT_LASTMOD } = {}
) {
  return STATIC_PATHS.map((path) => ({
    url: buildUrl(baseUrl, path),
    lastModified,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

export function createRouteSitemapEntries(
  baseUrl,
  routes,
  { lastModified = ROUTE_CONTENT_LASTMOD } = {}
) {
  return (routes || []).map((route) => ({
    url: buildUrl(baseUrl, `/rutas/${encodeSegment(route.slug)}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
}
