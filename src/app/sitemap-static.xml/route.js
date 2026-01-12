import {
  buildSitemapXml,
  buildUrl,
  getBaseUrl,
  ONE_HOUR,
} from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const now = new Date();

  const entries = STATIC_PATHS.map((path) => ({
    url: buildUrl(baseUrl, path),
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
