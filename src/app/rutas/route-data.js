import { getMythImage } from "../../lib/myth-images";
import { getRoutePreviews } from "../../lib/routes";
import { getTaxonomy } from "../../lib/myths";
import {
  filterAllowedCommunities,
  isUnattributedBucket,
  UNATTRIBUTED_PATH,
} from "../../lib/communityFilters";

/**
 * Derivaciones compartidas por el índice de rutas y por cada ruta.
 *
 * No es un componente: es la capa que lee el censo ya resuelto contra la base
 * de datos y saca de ahí las tres cosas que las páginas necesitan y que el
 * archivo de curaduría no declara —la obra de portada, la cifra de relatos y
 * los territorios y pueblos de donde vienen—. Vive junto a las páginas que la
 * usan porque nadie más la consume.
 */

/* ---------------------------------------------------------------- *
 * Obra de portada, repartida sin repeticiones
 * ---------------------------------------------------------------- */

/**
 * Reparte una obra distinta a cada ruta.
 *
 * La portada de una ruta la elige la curaduría por slug, y dos rutas pueden
 * elegir el mismo relato: «El diablo del puente del Común» es hoy la portada
 * declarada de `criaturas-nocturnas` y de `fronteras-y-caminos` a la vez. Con
 * la imagen compartida las dos rutas salían con la misma foto en el índice y,
 * peor, con la misma imagen de Open Graph al compartirlas.
 *
 * El reparto recorre las rutas en orden de publicación: cada una toma la
 * primera obra apaisada de su propio censo que ninguna ruta anterior haya
 * tomado —empezando por su portada declarada, después sus destacados y luego
 * el resto—. Es determinista: el mismo censo da siempre el mismo reparto, así
 * que la imagen de una ruta no cambia entre despliegues.
 */
export function assignRouteArt(routes = []) {
  const taken = new Set();
  const art = new Map();

  routes.forEach((route) => {
    const candidates = [];
    const push = (myth) => {
      if (myth?.slug && !candidates.some((item) => item.slug === myth.slug)) {
        candidates.push(myth);
      }
    };
    push(route.cover);
    (route.featuredMyths || []).forEach(push);
    (route.myths || []).forEach(push);

    const withArt = candidates
      .map((myth) => ({ myth, url: getMythImage(myth, "landscape") }))
      .filter((item) => item.url);

    /* Si todas sus obras ya están tomadas se repite la primera: mejor repetida
       que muda. Con 246 relatos y 19 rutas no ocurre, pero el reparto no puede
       depender de eso. */
    const chosen = withArt.find((item) => !taken.has(item.url)) || withArt[0];
    if (chosen) {
      taken.add(chosen.url);
      art.set(route.slug, { url: chosen.url, myth: chosen.myth });
    } else {
      art.set(route.slug, { url: null, myth: null });
    }
  });

  return art;
}

/**
 * Las rutas resueltas contra la base de datos, en orden de publicación, con su
 * obra ya repartida. `getRoutePreviews()` está cacheado un día, así que las
 * diecinueve `generateMetadata` de la compilación comparten una sola consulta.
 *
 * Nunca lanza: sin base de datos devuelve listas vacías y quien llama cae a lo
 * que trae el archivo de curaduría.
 */
export async function getRoutesAtlas() {
  try {
    const routes = await getRoutePreviews();
    return { routes, art: assignRouteArt(routes) };
  } catch (error) {
    console.error("[rutas] no se pudo resolver el atlas de rutas", error);
    return { routes: [], art: new Map() };
  }
}

/* ---------------------------------------------------------------- *
 * Territorios y pueblos
 * ---------------------------------------------------------------- */

function tally(entries) {
  const counts = new Map();
  entries.forEach(({ slug, name }) => {
    if (!slug || !name) return;
    const current = counts.get(slug);
    if (current) {
      current.count += 1;
      return;
    }
    counts.set(slug, { slug, name, count: 1 });
  });
  return [...counts.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name, "es")
  );
}

/**
 * Separa los pueblos de las bolsas del importador.
 *
 * «Mestizo» y «Mixto» no nombran a un pueblo: son la etiqueta que quedó cuando
 * la fuente no registró de quién venía el relato. Se reutiliza
 * `isUnattributedBucket` en vez de repetir aquí esa lista: si mañana cambia,
 * cambia sola.
 */
function splitCommunities(entries) {
  const all = tally(entries);
  return {
    peoples: all.filter((item) => !isUnattributedBucket(item)),
    buckets: all.filter((item) => isUnattributedBucket(item)),
  };
}

/**
 * La ficha dura de una ruta a partir de sus mitos ya resueltos: cuántos
 * relatos, cuántos movimientos, de qué territorios y de qué pueblos.
 */
export function summarizeRoute(route) {
  const myths = route?.myths || [];
  const regions = tally(
    myths.map((myth) => ({ slug: myth.regionSlug, name: myth.region }))
  );
  const { peoples, buckets } = splitCommunities(
    myths.map((myth) => ({ slug: myth.communitySlug, name: myth.community }))
  );

  /* Los relatos que el archivo no atribuye a un pueblo concreto: los que
     figuran en una bolsa del importador y los que llegan sin comunidad. */
  const attributed = new Set(peoples.map((item) => item.slug));
  const unattributed = myths.filter(
    (myth) => !myth.communitySlug || !attributed.has(myth.communitySlug)
  ).length;

  return {
    mythCount: myths.length,
    momentCount: route?.momentos?.length || 0,
    regions,
    peoples,
    buckets,
    unattributed,
  };
}

/** La superficie donde viven los relatos sin pueblo atribuido. */
export const UNATTRIBUTED_HREF = UNATTRIBUTED_PATH;

/** Slugs de comunidad que tienen ficha propia; el resto se nombra sin enlazar. */
export async function getCommunityPageSlugs() {
  try {
    const taxonomy = await getTaxonomy();
    return filterAllowedCommunities(taxonomy.communities || []).map(
      (community) => community.slug
    );
  } catch (error) {
    console.error("[rutas] no se pudo leer la taxonomía de comunidades", error);
    return [];
  }
}

/* ---------------------------------------------------------------- *
 * Metadatos
 * ---------------------------------------------------------------- */

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function plural(count, singular, many) {
  return `${count} ${count === 1 ? singular : many}`;
}

/**
 * La frase de datos que cierra la descripción: lo único de la ficha que ningún
 * otro sitio del archivo repite. Los pueblos entran sólo a partir de tres —con
 * uno o dos la cifra dice menos que nada— y las bolsas del importador nunca
 * cuentan como pueblo.
 */
function statsSentence(summary) {
  const parts = [plural(summary.mythCount, "relato", "relatos")];
  if (summary.peoples.length >= 3) {
    parts.push(`de ${plural(summary.peoples.length, "pueblo", "pueblos")}`);
  }
  if (summary.regions.length) {
    parts.push(
      `en ${plural(summary.regions.length, "región", "regiones")} de Colombia`
    );
  }
  return `${parts.join(" ")}.`;
}

/**
 * Respaldo de SEO tomado del archivo de curaduría.
 *
 * Las nueve rutas originales tienen fila en `seo_pages` y esa fila manda; las
 * diez nuevas no la tienen, así que esto es lo que ve Google. Por eso no es un
 * relleno: el título es el de la ruta, la descripción junta su línea de tesis
 * con la ficha real —relatos, pueblos, territorios— y las palabras clave
 * suman los territorios y los pueblos del censo a las que declaró la curaduría.
 */
export function buildRouteFallbackSeo(route, summary) {
  const lead = clean(route?.detail || route?.description);
  const description = clean(`${lead} ${statsSentence(summary)}`);

  const keywords = [
    ...(route?.keywords || []),
    ...summary.regions.map((region) => region.name),
    ...summary.peoples.slice(0, 4).map((people) => people.name),
    "ruta editorial",
    "mitos colombianos",
  ];

  const seen = new Set();
  return {
    title: clean(route?.title),
    description,
    keywords: keywords.filter((word) => {
      const key = clean(word).toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }),
  };
}

/**
 * La medida del archivo completo, para poder decir cuánto de él cubren hoy las
 * rutas sin inventar la cifra. Sin base de datos devuelve ceros y el índice
 * omite el dato en vez de mentirlo.
 */
export async function getArchiveTotals() {
  try {
    const taxonomy = await getTaxonomy();
    const regions = taxonomy.regions || [];
    return {
      myths: regions.reduce((sum, region) => sum + (region.myth_count || 0), 0),
      regions: regions.length,
    };
  } catch (error) {
    console.error("[rutas] no se pudo medir el archivo", error);
    return { myths: 0, regions: 0 };
  }
}
