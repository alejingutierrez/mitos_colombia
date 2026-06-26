import { getBaseUrl } from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Legacy query-parameter sitemap (sitemap-mitos.xml?page=N). The myth sitemaps
// now live at clean path-based URLs (/sitemap-mitos/N), which are the
// convention Google supports most robustly. Permanently redirect any cached or
// previously-submitted references so the migration is seamless.
export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const url = new URL(request.url);
  const parsed = Number.parseInt(url.searchParams.get("page"), 10);
  const page = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;

  return Response.redirect(`${baseUrl}/sitemap-mitos/${page}`, 301);
}
