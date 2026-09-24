import { isLocalStoryRequest } from "../../../../lib/instagram-story-server";
import { loadStoryCatalog } from "../../../../../scripts/instagram/lib/story-catalog.mjs";
import { planStoryWithBedrock } from "../../../../../scripts/instagram/lib/story-planner.mjs";

export const runtime = "nodejs";
let running = false;
export async function POST(request) {
  if (!isLocalStoryRequest(request)) return new Response("Not found", { status: 404 });
  if (running) return Response.json({ error: "Ya hay un relato en preparación. Espera a que termine." }, { status: 409 });
  if (!request.headers.get("content-type")?.includes("application/json")) return new Response("Unsupported media type", { status: 415 });
  const text = await request.text();
  if (text.length > 2000) return new Response("Request too large", { status: 413 });
  try {
    const { community, slug } = JSON.parse(text);
    running = true;
    const result = await planStoryWithBedrock(await loadStoryCatalog({ community, slug }));
    return Response.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "No se pudo preparar el relato. Revisa la conexión y la configuración local de Bedrock; el original sigue disponible." }, { status: 422 });
  } finally { running = false; }
}
