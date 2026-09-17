/**
 * Parámetros del archivo de mitos (`/mitos` y `/mitos/pagina/[page]`).
 *
 * Todo lo que la portada del archivo necesita leer de la URL y volver a
 * escribir en ella vive aquí, en funciones puras y sin dependencias del
 * servidor, por tres razones:
 *
 *  1. La paginación y el listado se calculaban por separado —la ruta con
 *     `DEFAULT_LIMIT` fijo y el contenido con el `?limit=` de la URL—, así que
 *     un `?limit=` distinto de 24 partía el archivo: la ruta creía que había
 *     25 páginas y el contenido 100, y los enlaces de paginación perdían el
 *     parámetro por el camino. Con un solo lugar que interprete el límite, ese
 *     desacuerdo no puede volver a existir.
 *  2. Los filtros y la búsqueda se borraban entre sí porque cada formulario
 *     reconstruía la query con su propio subconjunto de claves.
 *     `buildArchiveQuery` conserva las cuatro siempre.
 *  3. Son puras, así que `scripts/archive-params.test.mjs` las prueba sin
 *     levantar Next ni tocar la base de datos.
 */

export const ARCHIVE_DEFAULT_LIMIT = 24;
export const ARCHIVE_MIN_LIMIT = 6;
export const ARCHIVE_MAX_LIMIT = 48;

/**
 * Tope de página. El archivo tiene 596 relatos; incluso con el límite mínimo
 * (6) son 100 páginas. 500 deja margen de sobra y corta de raíz las URLs
 * absurdas (`/mitos/pagina/999999`) antes de que lleguen a la consulta.
 */
export const ARCHIVE_MAX_PAGE = 500;

/** Claves de filtro que viajan en la URL, en el orden en que se muestran. */
export const ARCHIVE_FILTER_KEYS = ["q", "region", "community", "tag"];

/** Un `searchParam` puede llegar como string, como arreglo o ausente. */
export function paramValue(value) {
  if (Array.isArray(value)) return String(value[0] ?? "").trim();
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

/**
 * Límite efectivo de la página. Nunca devuelve `NaN`: con `?limit=abc` el
 * cálculo de `offset` daba `NaN`, el total de páginas daba `NaN` y la
 * paginación se dibujaba con un solo enlace.
 */
export function parseArchiveLimit(raw) {
  const parsed = Number.parseInt(paramValue(raw), 10);
  if (!Number.isFinite(parsed)) return ARCHIVE_DEFAULT_LIMIT;
  return Math.min(ARCHIVE_MAX_LIMIT, Math.max(ARCHIVE_MIN_LIMIT, parsed));
}

/**
 * Segmento `[page]` de la ruta. Devuelve `null` —y quien llama responde 404—
 * cuando no es un entero positivo dentro del rango. Antes cualquier basura
 * (`/mitos/pagina/abc`) se convertía en 1 y redirigía a `/mitos` con un 308:
 * un redirect permanente que le decía a Google que esa URL inventada existe.
 */
export function parseArchivePage(raw) {
  const text = paramValue(raw);
  if (!/^\d+$/.test(text)) return null;
  const parsed = Number.parseInt(text, 10);
  if (!Number.isFinite(parsed) || parsed < 1 || parsed > ARCHIVE_MAX_PAGE) {
    return null;
  }
  return parsed;
}

/**
 * `?offset=` sobrevive en enlaces antiguos (y sigue declarado en
 * `ARCHIVE_QUERY_KEYS`), pero la página nunca lo leía: `/mitos?offset=24`
 * mostraba el principio del archivo. Se traduce a número de página y no se
 * vuelve a emitir, para no tener dos formas de decir lo mismo.
 */
export function pageFromOffset(raw, limit = ARCHIVE_DEFAULT_LIMIT) {
  const size = Number(limit) > 0 ? Number(limit) : ARCHIVE_DEFAULT_LIMIT;
  const parsed = Number.parseInt(paramValue(raw), 10);
  if (!Number.isFinite(parsed) || parsed < size) return 1;
  return Math.min(ARCHIVE_MAX_PAGE, Math.floor(parsed / size) + 1);
}

/**
 * Lee la URL completa del archivo.
 *
 * @param {Object} searchParams  searchParams ya resueltos.
 * @param {number} page          Página que aporta la ruta (1 en `/mitos`).
 */
export function readArchiveParams(searchParams = {}, page = 1) {
  const source = searchParams || {};
  const region = paramValue(source.region);
  const community = paramValue(source.community);
  const tag = paramValue(source.tag);
  const q = paramValue(source.q);
  const limit = parseArchiveLimit(source.limit);
  const routePage = Number.isFinite(page) && page > 1 ? Math.trunc(page) : 1;
  const resolvedPage =
    routePage > 1 ? routePage : pageFromOffset(source.offset, limit);

  return {
    region,
    community,
    tag,
    q,
    limit,
    page: resolvedPage,
    offset: (resolvedPage - 1) * limit,
    hasQuery: Boolean(q),
    hasFilters: Boolean(region || community || tag),
    hasAnyFilter: Boolean(q || region || community || tag),
  };
}

/**
 * Reconstruye la query conservando SIEMPRE las cuatro claves de filtro. Es lo
 * que hace que buscar no borre la región y que filtrar no borre la búsqueda.
 * El límite sólo se escribe cuando no es el de por defecto, para que la URL
 * canónica del archivo siga siendo `/mitos` a secas.
 */
export function buildArchiveQuery(values = {}) {
  const params = new URLSearchParams();
  for (const key of ARCHIVE_FILTER_KEYS) {
    const value = paramValue(values[key]);
    if (value) params.set(key, value);
  }
  const limit = Number(values.limit);
  if (Number.isFinite(limit) && limit !== ARCHIVE_DEFAULT_LIMIT) {
    params.set("limit", String(parseArchiveLimit(limit)));
  }
  const query = params.toString();
  return query ? `?${query}` : "";
}

/** Misma query sin uno de los filtros (las fichas de "quitar"). */
export function archiveQueryWithout(values = {}, key) {
  return buildArchiveQuery({ ...values, [key]: "" });
}

/** Misma query cambiando un filtro (las tiras de región). */
export function archiveQueryWith(values = {}, key, value) {
  return buildArchiveQuery({ ...values, [key]: value });
}

/** La página 1 vive en `/mitos`; el resto en `/mitos/pagina/N`. */
export function archivePageHref(page, query = "") {
  const target = Number(page);
  return !Number.isFinite(target) || target <= 1
    ? `/mitos${query}`
    : `/mitos/pagina/${Math.trunc(target)}${query}`;
}

export function totalArchivePages(total, limit = ARCHIVE_DEFAULT_LIMIT) {
  const count = Number(total);
  const size = Number(limit) > 0 ? Number(limit) : ARCHIVE_DEFAULT_LIMIT;
  if (!Number.isFinite(count) || count <= 0) return 1;
  return Math.max(1, Math.ceil(count / size));
}

/**
 * Folio real de un relato dentro del archivo: posición absoluta, no posición
 * dentro del bloque en que quedó dibujado. La numeración anterior arrancaba en
 * 01 después de tres tarjetas destacadas (por eso "iba corrida por cuatro") y
 * volvía a empezar en cada página.
 */
export function archiveFolio(offset, index) {
  const start = Number(offset);
  const position = Number(index);
  const safeStart = Number.isFinite(start) && start > 0 ? start : 0;
  const safePosition = Number.isFinite(position) && position > 0 ? position : 0;
  return safeStart + safePosition + 1;
}

/** Rango mostrado: "del 25 al 48 de 596". */
export function archiveRange({ offset = 0, count = 0, total = 0 } = {}) {
  const start = Number(offset) > 0 ? Math.trunc(Number(offset)) : 0;
  const shown = Number(count) > 0 ? Math.trunc(Number(count)) : 0;
  const all = Number(total) > 0 ? Math.trunc(Number(total)) : 0;
  if (!shown) return { from: 0, to: 0, total: all };
  return { from: start + 1, to: start + shown, total: all };
}
