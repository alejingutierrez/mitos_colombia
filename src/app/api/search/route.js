import { NextResponse } from "next/server";
import { getSearchSuggestions } from "../../../lib/search";

export const runtime = "nodejs";

/** Tope de caracteres que se aceptan. Más allá es ruido, no una búsqueda. */
const MAX_QUERY_LENGTH = 120;

/**
 * Sugerencias para el typeahead del buscador.
 *
 * GET /api/search?q=bachue&limit=8
 *   → { query, suggestions: [{ id, type, label, title, subtitle, href }] }
 *
 * `type` es "myth" | "region" | "community" | "tag", y `href` ya viene resuelto
 * a la ruta del sitio. Ordena con la MISMA relevancia que la página de
 * resultados (`lib/search-terms.js`): tildes plegadas, plurales y la jerarquía
 * título > metadatos > territorio y pueblo.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").slice(0, MAX_QUERY_LENGTH);
  const limit = Number.parseInt(searchParams.get("limit") || "8", 10);
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(limit, 12)) : 8;

  try {
    const suggestions = await getSearchSuggestions(q, safeLimit);

    return NextResponse.json(
      { query: q, suggestions },
      {
        /* Las sugerencias salen de un índice que se refresca cada cinco
           minutos: cachearlas un minuto en el borde le quita al origen la
           ráfaga de un typeahead sin costar frescura real. */
        headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
      }
    );
  } catch (error) {
    /* Un typeahead que devuelve 500 rompe el campo de búsqueda entero. Si el
       índice no está disponible, se responde sin sugerencias: la persona
       siempre puede darle Enter y caer en `/mitos?q=…`, que consulta aparte. */
    console.error("[SEARCH] suggestions failed:", error);
    return NextResponse.json(
      { query: q, suggestions: [], error: "suggestions_unavailable" },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }
}
