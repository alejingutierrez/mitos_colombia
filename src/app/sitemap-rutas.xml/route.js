import { ROUTES } from "../../lib/routes";
import {
  buildSitemapXml,
  getBaseUrl,
  ONE_HOUR,
} from "../../lib/sitemap";
import { createRouteSitemapEntries } from "../../lib/sitemap-entries";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const entries = createRouteSitemapEntries(baseUrl, ROUTES);

  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
