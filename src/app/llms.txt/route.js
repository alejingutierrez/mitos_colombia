import { getBaseUrl, ONE_HOUR } from "../../lib/sitemap";
import { listMyths, getTaxonomy } from "../../lib/myths";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET(request) {
  const baseUrl = getBaseUrl(request).trim().replace(/\/+$/, "");

  let myths = [];
  let taxonomy = { regions: [], communities: [], tags: [] };

  try {
    const [mythsResult, tax] = await Promise.all([
      listMyths({ limit: 1000, offset: 0 }),
      getTaxonomy(),
    ]);
    myths = mythsResult?.items || [];
    taxonomy = tax || taxonomy;
  } catch (error) {
    console.error("[LLMS_TXT] Load failed:", error);
  }

  const lines = [
    "# Mitos de Colombia",
    "",
    "> Archivo editorial de mitos colombianos organizados por región, comunidad y tema. Cada mito incluye texto curado, ubicación geográfica e ilustración original.",
    "",
    "## Páginas principales",
    `- [Inicio](${baseUrl}/): Home del archivo con mitos destacados.`,
    `- [Todos los mitos](${baseUrl}/mitos): Catálogo completo navegable.`,
    `- [Regiones](${baseUrl}/regiones): Mitos por región natural.`,
    `- [Categorías](${baseUrl}/categorias): Temas y arquetipos.`,
    `- [Comunidades](${baseUrl}/comunidades): Origen étnico y cultural.`,
    `- [Rutas](${baseUrl}/rutas): Recorridos editoriales curados.`,
    `- [Mapa](${baseUrl}/mapa): Geolocalización de los mitos.`,
    `- [Tarot mitológico](${baseUrl}/tarot): Baraja con arcanos y mitos.`,
    `- [Metodología](${baseUrl}/metodologia): Cómo se construye el archivo.`,
    `- [Sobre el proyecto](${baseUrl}/sobre-el-proyecto): Equipo y misión.`,
    "",
    "## Regiones",
    ...(taxonomy.regions || []).map(
      (r) =>
        `- [${r.name}](${baseUrl}/regiones/${r.slug}): ${r.myth_count || 0} mitos.`
    ),
    "",
    "## Mitos",
    ...myths.slice(0, 500).map((m) => {
      const excerpt = m.excerpt
        ? `: ${String(m.excerpt).slice(0, 200).replace(/\s+/g, " ").trim()}`
        : "";
      return `- [${m.title}](${baseUrl}/mitos/${m.slug})${excerpt}`;
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR * 24}`,
    },
  });
}
