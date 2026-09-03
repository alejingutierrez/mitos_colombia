/**
 * Quién entra al índice de comunidades, y por qué puerta.
 *
 * Este archivo hacía una sola cosa —descartar— y descartaba de más. Tenía dos
 * compuertas:
 *
 *   1. `myth_count < 6`  →  escondía 21 comunidades con 38 relatos. Se avisaba
 *      en la página, pero un pueblo con tres relatos sigue siendo un pueblo y
 *      su página sigue siendo la única puerta a esos tres relatos.
 *   2. un token `mestizo`/`mixto` en el nombre o el slug  →  escondía 10 bolsas
 *      del importador con **253 relatos, el 42,5 % del archivo**, y esto no se
 *      avisaba en ninguna parte.
 *
 * Lo segundo fue un accidente: la lista de tokens se escribió para que las
 * bolsas no se leyeran como si fueran un pueblo, y acabó borrando los relatos
 * junto con la etiqueta. Ahora la distinción se mantiene —una bolsa NO es un
 * pueblo y nunca se pinta entre ellos— pero deja de significar «no existe»:
 * los relatos sin procedencia atribuida tienen su propia superficie, ordenada
 * por territorio, que es lo único que el archivo sí sabe de ellos.
 *
 * Lo primero baja a un relato. El listón deja de ser una opinión sobre cuánto
 * material «merece» una página y pasa a ser lo único que la hace posible:
 * hace falta al menos un relato que leer. Con cero, la ficha sería una página
 * vacía —un soft 404 para el buscador y una decepción para quien la abra—.
 *
 * `communities.slug` NO es único en la base: la restricción es
 * `UNIQUE(region_id, slug)`, así que el mismo pueblo puede aparecer en dos
 * territorios (`embera`, `nasa-paeces`) y las bolsas aparecen en cinco cada
 * una. Como `/comunidades/<slug>` no puede distinguirlos, aquí se pliegan por
 * slug ANTES de aplicar el listón: una entrada por slug, con la suma de sus
 * relatos. Así la cifra que se muestra es exactamente la que devuelve la
 * consulta de relatos —que empareja por slug o por nombre, es decir, la unión
 * de las filas homónimas—, y deja de haber dos números para una misma página.
 */

/** Un relato. Con cero no hay nada que leer y la ficha sería una página vacía. */
export const MIN_COMMUNITY_MYTHS = 1;

/** La superficie de los relatos sin procedencia atribuida. */
export const UNATTRIBUTED_SLUG = "sin-pueblo-identificado";
export const UNATTRIBUTED_LABEL = "Sin pueblo identificado";
export const UNATTRIBUTED_PATH = `/comunidades/${UNATTRIBUTED_SLUG}`;

/**
 * Etiquetas genéricas del importador. No nombran a un pueblo: se pusieron
 * cuando la fuente no registró de quién venía el relato.
 */
const BUCKET_TOKENS = new Set([
  "mestizo",
  "mestiza",
  "mestizos",
  "mestizas",
  "mestizaje",
  "mixto",
  "mixta",
  "mixtos",
  "mixtas",
  "mixed",
  "mix",
]);

function normalizeValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasBucketToken(value) {
  const normalized = normalizeValue(value);
  if (!normalized) {
    return false;
  }
  return normalized
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .some((token) => BUCKET_TOKENS.has(token));
}

/** ¿Es una bolsa del importador y no un pueblo? */
export function isUnattributedBucket(community) {
  return (
    hasBucketToken(community?.slug) || hasBucketToken(community?.name)
  );
}

function mythCountOf(community) {
  return Number(community?.myth_count || 0) || 0;
}

/**
 * Pliega las filas homónimas en una sola entrada por slug.
 *
 * Manda la fila con más relatos: de ella salen el nombre, el territorio y el
 * id. La portada se hereda de cualquiera de las filas que tenga una —si la
 * copia de un territorio tiene obra y la del otro no, la página la aprovecha—.
 * `territories` conserva los territorios donde el pueblo sí tiene relatos, para
 * que la ficha pueda decirlo en vez de fingir que sólo vive en uno.
 */
function collapseBySlug(communities) {
  const grupos = new Map();

  communities.forEach((community) => {
    const slug = String(community?.slug || "").trim();
    if (!slug) return;
    const previas = grupos.get(slug);
    if (previas) {
      previas.push(community);
    } else {
      grupos.set(slug, [community]);
    }
  });

  return [...grupos.values()].map((filas) => {
    const ordenadas = [...filas].sort((a, b) => mythCountOf(b) - mythCountOf(a));
    const principal = ordenadas[0];
    const total = ordenadas.reduce((suma, fila) => suma + mythCountOf(fila), 0);
    const conObra = ordenadas.find((fila) => String(fila?.image_url || "").trim());

    return {
      ...principal,
      myth_count: total,
      image_url: conObra?.image_url || null,
      territories: ordenadas
        .filter((fila) => mythCountOf(fila) > 0)
        .map((fila) => ({
          slug: fila.region_slug,
          name: fila.region,
          count: mythCountOf(fila),
        })),
    };
  });
}

/**
 * Los pueblos y comunidades con página propia: todo lo que no es una bolsa del
 * importador y tiene al menos `minMyths` relatos, plegado por slug.
 */
export function filterAllowedCommunities(communities = [], minMyths = MIN_COMMUNITY_MYTHS) {
  const piso = Number.isFinite(Number(minMyths)) ? Number(minMyths) : MIN_COMMUNITY_MYTHS;
  const pueblos = (communities || []).filter(
    (community) => community && !isUnattributedBucket(community)
  );
  return collapseBySlug(pueblos).filter(
    (community) => mythCountOf(community) >= piso
  );
}

/**
 * Comunidades registradas en el archivo que todavía no tienen ningún relato
 * asociado. No se enlazan —su ficha estaría vacía— pero se nombran: que una
 * lista diga cuánto deja fuera es parte de ser un archivo y no un escaparate.
 */
export function listEmptyCommunities(communities = []) {
  return collapseBySlug(
    (communities || []).filter(
      (community) => community && !isUnattributedBucket(community)
    )
  )
    .filter((community) => mythCountOf(community) === 0)
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "es"));
}

/**
 * Los relatos sin pueblo atribuido, repartidos por territorio.
 *
 * Devuelve `null` cuando no hay ninguno, para que la página no dibuje una
 * banda vacía. El orden es por número de relatos: es el mismo criterio con el
 * que se ordenan los pueblos, y evita tener que justificar un orden distinto.
 */
export function collectUnattributed(communities = []) {
  const bolsas = (communities || []).filter(
    (community) => community && isUnattributedBucket(community)
  );
  if (!bolsas.length) return null;

  const porTerritorio = new Map();
  bolsas.forEach((bolsa) => {
    const slug = String(bolsa.region_slug || "").trim();
    if (!slug) return;
    const actual = porTerritorio.get(slug);
    if (actual) {
      actual.count += mythCountOf(bolsa);
    } else {
      porTerritorio.set(slug, {
        slug,
        name: bolsa.region || slug,
        count: mythCountOf(bolsa),
      });
    }
  });

  const territories = [...porTerritorio.values()]
    .filter((territorio) => territorio.count > 0)
    .sort((a, b) => b.count - a.count);

  const total = territories.reduce((suma, territorio) => suma + territorio.count, 0);
  if (!total) return null;

  return {
    slug: UNATTRIBUTED_SLUG,
    label: UNATTRIBUTED_LABEL,
    href: UNATTRIBUTED_PATH,
    total,
    territories,
    /** Las etiquetas crudas del importador, para poder nombrarlas sin inventar. */
    buckets: [...new Set(bolsas.map((bolsa) => bolsa.name).filter(Boolean))].sort(),
    /**
     * Los slugs distintos de esas bolsas. La consulta de relatos empareja por
     * slug o por nombre, así que pedir `mestizo` devuelve la unión de las cinco
     * filas homónimas: con estos dos slugs se recogen los 253 relatos.
     */
    bucketSlugs: [...new Set(bolsas.map((bolsa) => bolsa.slug).filter(Boolean))].sort(),
  };
}
