import fs from "node:fs/promises";
import { cachedStoryCatalog, isLocalStoryRequest } from "../../../../../../../lib/instagram-story-server";
import { resolveCatalogAsset } from "../../../../../../../../scripts/instagram/lib/story-catalog.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  if (!isLocalStoryRequest(request)) return new Response("Not found", { status: 404 });
  const { community, slug, asset: id } = await params;
  try {
    const catalog = await cachedStoryCatalog(community, slug);
    const asset = catalog.assets.find((a) => a.id === id);
    if (!asset) return new Response("Not found", { status: 404 });
    const bytes = await fs.readFile(await resolveCatalogAsset(asset));
    return new Response(bytes, { headers: { "Content-Type": asset.file.endsWith(".png") ? "image/png" : "image/jpeg", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
  } catch { return new Response("Not found", { status: 404 }); }
}
