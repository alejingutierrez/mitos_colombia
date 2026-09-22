import fs from "node:fs/promises";
import { isLocalStoryRequest } from "../../../../lib/instagram-story-server";
import { loadStoryCatalog } from "../../../../../scripts/instagram/lib/story-catalog.mjs";
import { prepareStoryEdition, renderPreparedStory } from "../../../../../scripts/instagram/lib/story-renderer.mjs";

export const runtime = "nodejs";
let running = false;
export async function POST(request) {
  if (!isLocalStoryRequest(request)) return new Response("Not found", { status: 404 });
  if (running) return Response.json({ error: "Ya hay una exportación en curso." }, { status: 409 });
  if (!request.headers.get("content-type")?.includes("application/json")) return new Response("Unsupported media type", { status: 415 });
  const text = await request.text();
  if (text.length > 100_000) return Response.json({ error: "El guion es demasiado grande." }, { status: 413 });
  try {
    running = true;
    const story = JSON.parse(text);
    const catalog = await loadStoryCatalog({ community: story.community, slug: story.slug });
    const prepared = await prepareStoryEdition(story, catalog);
    const requestUrl = new URL(request.url);
    const result = await renderPreparedStory(prepared, { baseUrl: `${requestUrl.protocol}//${request.headers.get("host") || requestUrl.host}` });
    return new Response(await fs.readFile(result.zip), { headers: { "Content-Type": "application/zip", "Content-Disposition": `attachment; filename="${story.slug}-carrusel.zip"`, "Cache-Control": "no-store" } });
  } catch (error) {
    // Validation details are useful; never expose provider credentials or stacks.
    const message = /Lámina|Nudo|acta|relato|imagen|Contraste|Descarte|cubierto|clímax|Entrada|pausas/i.test(error.message)
      ? error.message : "No se pudo exportar. Comprueba que Google Chrome está instalado y que el servidor local sigue activo.";
    return Response.json({ error: message }, { status: 422 });
  } finally { running = false; }
}
