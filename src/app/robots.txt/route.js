import { getBaseUrl, ONE_HOUR } from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
