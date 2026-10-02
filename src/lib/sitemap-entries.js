export const SEO_RELEASE_LASTMOD = "2026-07-10T02:56:47.000Z";
export const LEGACY_CONTENT_LASTMOD = "2026-01-20T01:11:52.046Z";
export const ROUTE_CONTENT_LASTMOD = SEO_RELEASE_LASTMOD;

export const STATIC_CONTENT_LASTMOD_BY_PATH = {
  "/": "2026-07-30T00:29:07.000Z",
  "/mitos": SEO_RELEASE_LASTMOD,
  "/categorias": "2026-07-08T18:43:54.000Z",
  "/comunidades": "2026-07-23T17:41:55.000Z",
  "/regiones": "2026-07-23T17:41:55.000Z",
  "/rutas": "2026-07-23T17:41:55.000Z",
  "/mapa": "2026-07-23T17:41:55.000Z",
  "/tarot": SEO_RELEASE_LASTMOD,
  "/tarot/comprar": "2026-08-12T12:00:00.000Z",
  "/tarot/regalo-colombiano": "2026-08-12T12:00:00.000Z",
  "/tarot/souvenir-colombiano": "2026-08-12T12:00:00.000Z",
  "/tarot/autoconocimiento": "2026-08-12T12:00:00.000Z",
  "/tarot/arte-y-coleccion": "2026-08-12T12:00:00.000Z",
  "/tarot/mitos-y-leyendas": "2026-08-12T12:00:00.000Z",
  "/metodologia": "2026-07-27T19:07:42.000Z",
  "/sobre-el-proyecto": "2026-07-02T20:51:43.000Z",
  "/contacto": "2026-07-02T20:51:43.000Z",
  "/privacidad": "2026-08-03T15:45:00.000Z",
  "/terminos": "2026-07-02T20:51:43.000Z",
};

export const STATIC_CONTENT_LASTMOD = Object.values(
  STATIC_CONTENT_LASTMOD_BY_PATH
).sort((left, right) => new Date(right) - new Date(left))[0];

export const STATIC_PATHS = [
  "/",
  "/mitos",
  "/categorias",
  "/comunidades",
  "/regiones",
  "/rutas",
  "/mapa",
  "/tarot",
  "/tarot/comprar",
  "/tarot/regalo-colombiano",
  "/tarot/souvenir-colombiano",
  "/tarot/autoconocimiento",
  "/tarot/arte-y-coleccion",
  "/tarot/mitos-y-leyendas",
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
  { lastModified, lastModifiedByPath = STATIC_CONTENT_LASTMOD_BY_PATH } = {}
) {
  return STATIC_PATHS.map((path) => ({
    url: buildUrl(baseUrl, path),
    lastModified:
      lastModified || lastModifiedByPath[path] || LEGACY_CONTENT_LASTMOD,
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
