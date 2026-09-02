import { NextResponse } from "next/server";
import { mythMotif } from "../../../components/templates/MythSections";
import { getMesaCandidates } from "../../../lib/myths";
import {
  assignThemeChips,
  balancedPick,
  bogotaDayKey,
  buildMesaFilters,
  dailySeed,
  isImporterBucket,
  sectionSeed,
  toMesaCard,
} from "../../../lib/home-rotation";

/**
 * `GET /api/mesa` — la baraja de verdad de «la mesa de hoy».
 *
 * Hasta ahora «Barajar» sólo permutaba en memoria las diez tarjetas ya pintadas:
 * no pedía nada, así que el archivo entero quedaba fuera del alcance del botón.
 * Este endpoint devuelve un juego NUEVO, sacado del corpus completo, sin repetir
 * lo que el cliente ya tiene.
 *
 * ¿Por qué GET y no POST?
 *  · Es una lectura pura: no muta nada, y con POST no habría forma de cachearla.
 *  · La carga útil de entrada es chica y acotada (40 slugs como mucho), así que
 *    cabe de sobra en una URL.
 *  · Al llevar `turno` en la URL, cada barajada es una URL distinta: el CDN
 *    puede cachear cada una y la segunda persona que baraje igual no toca Neon.
 *
 * Parámetros (todos opcionales):
 *  · `n`       — cuántas tarjetas, 1..12 (por defecto 10).
 *  · `tema`    — slug de etiqueta; sólo mitos con esa etiqueta.
 *  · `excluir` — slugs separados por coma que el cliente ya tiene (máx. 40).
 *  · `turno`   — 0..99, el número de barajada. Cambia la semilla y la URL.
 *
 * La respuesta pesa ~5 KB: sólo los campos que pinta una tarjeta. Nada que ver
 * con `/api/mapa`, que es `force-dynamic` y devuelve los 596 mitos completos.
 */

export const runtime = "nodejs";

const MAX_CARDS = 12;
const DEFAULT_CARDS = 10;
const MAX_EXCLUDE = 40;
const MAX_TURN = 99;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function readSlug(value) {
  const clean = String(value || "").trim().toLowerCase();
  if (!clean || clean.length > 120 || !SLUG_PATTERN.test(clean)) return null;
  return clean;
}

function readInt(value, { min, max, fallback }) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const count = readInt(searchParams.get("n"), {
      min: 1,
      max: MAX_CARDS,
      fallback: DEFAULT_CARDS,
    });
    const turn = readInt(searchParams.get("turno"), { min: 0, max: MAX_TURN, fallback: 0 });
    const theme = readSlug(searchParams.get("tema"));
    const exclude = [
      ...new Set(
        String(searchParams.get("excluir") || "")
          .split(",")
          .map(readSlug)
          .filter(Boolean)
      ),
    ].slice(0, MAX_EXCLUDE);

    /* El día manda igual que en el home (reloj de Bogotá), pero cada barajada
       abre su propio flujo: mismo archivo, otra mano. */
    const day = bogotaDayKey();
    const seed = sectionSeed(dailySeed(), `mesa:${turn}:${theme || "todo"}`);

    /* Se piden más candidatos de los que se van a pintar para que el reparto por
       territorio tenga de dónde elegir; con 8 por región son ~48 filas. */
    const candidates = await getMesaCandidates({
      seed,
      perRegion: 8,
      exclude,
      tag: theme,
    });

    /* La bolsa del importador («Varios») se descarta aquí igual que en el render
       del servidor (page.js): sin este filtro, barajar reintroduce justo lo que
       la portada excluye a propósito, y esa bolsa pesa como una sexta region
       en el reparto. */
    const picked = balancedPick({
      items: candidates.filter((myth) => !isImporterBucket(myth.region)),
      count,
      seed,
      groupBy: (myth) => myth.region_slug || "sin-region",
      keyOf: (myth) => myth.slug,
    });

    const { chips, themeOf } = assignThemeChips({
      items: picked,
      tagsOf: (myth) => myth.tags || [],
    });

    const myths = picked.map((myth) =>
      toMesaCard(myth, {
        tags: myth.tags || [],
        theme: themeOf.get(myth.slug) || null,
        motif: mythMotif(myth),
      })
    );

    const response = NextResponse.json({
      dia: day,
      turno: turn,
      tema: theme,
      total: myths.length,
      // El archivo ya no da para más con este filtro y estas exclusiones: el
      // cliente debería ofrecer «volver a empezar» en vez de seguir barajando.
      agotado: myths.length < count,
      myths,
      filtros: buildMesaFilters(myths, chips),
    });

    response.headers.set(
      "Cache-Control",
      "public, s-maxage=600, stale-while-revalidate=3600"
    );
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "No se pudo rehacer la mesa." },
      { status: 500 }
    );
  }
}
