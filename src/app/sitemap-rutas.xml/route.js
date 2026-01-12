import { ROUTES } from "../../lib/routes";
import {
  buildSitemapXml,
  buildUrl,
  encodeSegment,
  getBaseUrl,
  ONE_HOUR,
} from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const now = new Date();

  const entries = ROUTES.map((route) => ({
    url: buildUrl(baseUrl, `/rutas/${encodeSegment(route.slug)}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
