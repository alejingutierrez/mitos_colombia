import { normalizeLegacySlug } from "./legacy-seo.js";
import { TAROT_LANDING_VARIANTS } from "./tarot-commerce.js";

/**
 * Rutas de las landings comerciales del tarot.
 *
 * Una URL de anuncio rota no puede terminar en un 308 silencioso hacia /tarot:
 * la campaña seguiría pagando clics que llegan a una página distinta de la que
 * se anunció y el reporte se vería sano. Por eso sólo redirigimos los slugs que
 * decidimos jubilar de forma explícita; cualquier otro responde 404.
 */

export const TAROT_LANDING_SLUGS = Object.keys(TAROT_LANDING_VARIANTS);

/**
 * Slugs jubilados o abreviados que SÍ queremos honrar con un 308 deliberado.
 * Cada entrada es una decisión: se agrega cuando una campaña usó esa URL y se
 * retira cuando esa campaña ya no existe. Nunca es un comodín.
 */
export const TAROT_RETIRED_LANDINGS = Object.freeze({
  regalo: "/tarot/regalo-colombiano",
  souvenir: "/tarot/souvenir-colombiano",
  arte: "/tarot/arte-y-coleccion",
  coleccion: "/tarot/arte-y-coleccion",
  "mitos-y-leyendas-de-colombia": "/tarot/mitos-y-leyendas",
  "comprar-tarot": "/tarot/comprar",
  "tarot-colombiano": "/tarot/comprar",
});

/**
 * Resuelve un slug desconocido bajo /tarot.
 * Devuelve la ruta destino cuando la redirección es una decisión declarada,
 * y null cuando la URL debe fallar de forma visible con un 404.
 */
export function resolveRetiredTarotLanding(slug) {
  const normalized = normalizeLegacySlug(slug);
  if (!normalized) return null;
  if (TAROT_LANDING_SLUGS.includes(normalized)) return `/tarot/${normalized}`;

  const target = TAROT_RETIRED_LANDINGS[normalized];
  return target && target !== `/tarot/${normalized}` ? target : null;
}
