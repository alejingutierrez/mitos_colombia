/**
 * Vocabulario de búsqueda: normalización, variantes y pesos.
 *
 * Este módulo es PURO a propósito: no importa `server-only`, ni la base, ni
 * nada de Next. Lo comparten los dos caminos de búsqueda del sitio, que hasta
 * ahora no compartían nada:
 *
 *   1. El typeahead (`lib/search.js` → `/api/search`), que puntúa en JavaScript
 *      sobre un índice en memoria.
 *   2. La página de resultados (`lib/myths.js` → `/mitos?q=…`), que puntúa en
 *      SQL sobre la tabla.
 *
 * Al vivir la normalización, los sinónimos y la tabla de pesos en un solo
 * archivo, los dos ordenan igual. Y al no depender de nada, se puede probar
 * desde `node --test` sin levantar la base.
 */

/* ------------------------------------------------------------------ *
 * 1. Tildes, diéresis y la ñ
 * ------------------------------------------------------------------ */

/**
 * El mapa de plegado. Se declara explícito (y no sólo con NFD) porque de aquí
 * salen TAMBIÉN las expresiones SQL: Postgres necesita los dos argumentos de
 * `translate()` y SQLite una cadena de `replace()`. Si el mapa fuera implícito,
 * el JavaScript y el SQL se separarían al primer carácter nuevo.
 *
 * Va en minúscula y mayúscula porque el `lower()` de SQLite es sólo ASCII: sin
 * las mayúsculas acentuadas, "Bachué" en SQLite no plegaría la É.
 */
const ACCENT_PAIRS = [
  ["á", "a"], ["à", "a"], ["ä", "a"], ["â", "a"], ["ã", "a"],
  ["é", "e"], ["è", "e"], ["ë", "e"], ["ê", "e"],
  ["í", "i"], ["ì", "i"], ["ï", "i"], ["î", "i"],
  ["ó", "o"], ["ò", "o"], ["ö", "o"], ["ô", "o"], ["õ", "o"],
  ["ú", "u"], ["ù", "u"], ["ü", "u"], ["û", "u"],
  ["ñ", "n"], ["ç", "c"],
  ["Á", "a"], ["À", "a"], ["Ä", "a"], ["Â", "a"], ["Ã", "a"],
  ["É", "e"], ["È", "e"], ["Ë", "e"], ["Ê", "e"],
  ["Í", "i"], ["Ì", "i"], ["Ï", "i"], ["Î", "i"],
  ["Ó", "o"], ["Ò", "o"], ["Ö", "o"], ["Ô", "o"], ["Õ", "o"],
  ["Ú", "u"], ["Ù", "u"], ["Ü", "u"], ["Û", "u"],
  ["Ñ", "n"], ["Ç", "c"],
];

export const ACCENT_FOLD_FROM = ACCENT_PAIRS.map(([from]) => from).join("");
export const ACCENT_FOLD_TO = ACCENT_PAIRS.map(([, to]) => to).join("");

/**
 * Minúsculas, sin tildes, sin ñ y sin puntuación.
 *
 * El paso NFD cubre cualquier diacrítico que no esté en el mapa (el mapa existe
 * para el SQL, no para el JavaScript). Después se barre todo lo que no sea
 * letra ASCII o dígito: eso deja los comodines de SQL (`%`, `_`) fuera de
 * juego antes de que lleguen a la base.
 */
export function normalizeSearchText(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenizeSearchText(value) {
  const normalized = normalizeSearchText(value);
  return normalized ? normalized.split(" ").filter(Boolean) : [];
}

/* ------------------------------------------------------------------ *
 * 2. Plurales del español
 * ------------------------------------------------------------------ */

/**
 * Variantes de número de una palabra ya normalizada.
 *
 * No es un lematizador: es el mínimo que hace falta para que "muisca" y
 * "muiscas" sean la misma consulta. Como la coincidencia en la base es por
 * subcadena, la variante corta ya cubre a la larga en un sentido; estas
 * variantes cubren el otro.
 *
 *   muiscas → muisca        (quita la -s)
 *   muisca  → muiscas       (la pone)
 *   voces   → voz, voc      (-ces → -z, el caso frecuente en español)
 *   mujer   → mujeres
 *
 * Se protegen las palabras de tres letras o menos: quitarle la -s a "los" o
 * "mas" produce ruido, no recall.
 */
export function pluralVariants(token) {
  const variants = new Set();
  if (!token) return [];
  variants.add(token);

  if (token.length > 4 && token.endsWith("ces")) {
    // luces → luz, raices → raiz. El tronco "luc" también sirve por subcadena.
    variants.add(`${token.slice(0, -3)}z`);
    variants.add(token.slice(0, -2));
  } else if (token.length > 4 && token.endsWith("es")) {
    variants.add(token.slice(0, -2));
  }

  if (token.length > 3 && token.endsWith("s")) {
    variants.add(token.slice(0, -1));
  } else if (token.length > 2 && !token.endsWith("s")) {
    variants.add(`${token}s`);
    if (/[bcdflmnprstvyz]$/.test(token)) {
      // Consonante final: el plural español es -es (mujer → mujeres).
      variants.add(`${token}es`);
    }
  }

  return Array.from(variants);
}

/* ------------------------------------------------------------------ *
 * 3. Sinónimos
 * ------------------------------------------------------------------ */

/**
 * Los sinónimos NO amplían lo que se encuentra, sólo reordenan lo encontrado.
 *
 * Si entraran al filtro, "agua" —que ya devuelve 416 de 596 relatos— arrastraría
 * además todo lo que diga "río" o "laguna" y la página de resultados sería el
 * archivo completo. Entrando sólo a la puntuación, un relato que hable de agua
 * Y de laguna sube frente a uno que menciona el agua una vez.
 */
export const SEARCH_SYNONYMS = {
  selva: ["jungla", "bosque"],
  jungla: ["selva", "bosque"],
  bosque: ["selva", "jungla"],
  rio: ["agua", "corriente", "laguna"],
  agua: ["rio", "laguna", "mar"],
  mar: ["agua", "oceano"],
  costa: ["caribe", "pacifico"],
  criatura: ["bestia", "monstruo"],
  bestia: ["criatura", "monstruo"],
  monstruo: ["criatura", "bestia"],
  espiritu: ["fantasma", "alma"],
  fantasma: ["espiritu", "aparicion"],
};

/** Peso relativo de una variante frente al término que escribió la persona. */
export const VARIANT_WEIGHT = {
  exact: 1,
  plural: 0.85,
  synonym: 0.5,
};

/* ------------------------------------------------------------------ *
 * 4. Los términos de una consulta
 * ------------------------------------------------------------------ */

/** Tope de variantes por consulta: cada una es un `LIKE` más en el WHERE. */
export const MAX_QUERY_TOKENS = 8;
export const MAX_VARIANTS_PER_TOKEN = 6;
/** Tope de términos de puntuación: cada uno son tres `CASE WHEN` en el ORDER BY. */
export const MAX_SCORE_TERMS = 12;

/**
 * Convierte lo que escribió la persona en el material que necesitan los dos
 * caminos de búsqueda.
 *
 * Devuelve:
 *   raw          la cadena tal cual (recortada), para conservar el ILIKE de hoy
 *   phrase       la consulta normalizada completa ("la llorona")
 *   tokens       ["la", "llorona"]
 *   groups       un grupo por token: sus variantes de número, para el filtro.
 *                El filtro exige TODOS los grupos (Y) y dentro de cada uno
 *                basta una variante (O).
 *   scoreTerms   [{ term, weight }] con plurales y sinónimos, para puntuar
 *   isEmpty      true si no queda nada que buscar
 */
export function buildSearchTerms(query) {
  const raw = query === null || query === undefined ? "" : String(query).trim();
  const phrase = normalizeSearchText(raw);
  const tokens = phrase ? phrase.split(" ").slice(0, MAX_QUERY_TOKENS) : [];

  const groups = tokens.map((token) => ({
    token,
    variants: pluralVariants(token).slice(0, MAX_VARIANTS_PER_TOKEN),
  }));

  const scoreTerms = [];
  const seen = new Set();
  const push = (term, weight) => {
    if (!term || seen.has(term)) return;
    seen.add(term);
    scoreTerms.push({ term, weight });
  };

  tokens.forEach((token) => {
    push(token, VARIANT_WEIGHT.exact);
    pluralVariants(token).forEach((variant) => push(variant, VARIANT_WEIGHT.plural));
  });
  tokens.forEach((token) => {
    (SEARCH_SYNONYMS[token] || []).forEach((synonym) =>
      push(synonym, VARIANT_WEIGHT.synonym)
    );
  });

  return {
    raw,
    phrase,
    tokens,
    groups,
    scoreTerms: scoreTerms.slice(0, MAX_SCORE_TERMS),
    isEmpty: !phrase && !raw,
  };
}

/* ------------------------------------------------------------------ *
 * 5. La tabla de pesos
 * ------------------------------------------------------------------ */

/**
 * Una sola tabla para los dos caminos. La página de resultados la traduce a
 * `CASE WHEN … THEN <peso>` y el typeahead la suma en JavaScript, así que un
 * cambio aquí mueve los dos órdenes a la vez.
 *
 * La jerarquía que fija: título > metadatos (resumen, temas, palabras clave) >
 * territorio y pueblo > cuerpo del relato. El cuerpo pesa 4 sobre un acierto de
 * título de 80: aparecer en el cuerpo hace que un relato SEA encontrable, no
 * que compita con el que se llama así.
 *
 * Los escalones tienen que quedar SEPARADOS de verdad, no sólo declarados: con
 * `placePhrase: 26` + `placeTerm: 12` un acierto de pueblo (38) le ganaba a uno
 * de metadatos (37) y la jerarquía de arriba era mentira. Lo cazó la prueba
 * "el orden completo es título > metadatos > territorio y pueblo > cuerpo".
 *
 * `titleWordStart` existe por un caso real: buscando "agua", el relato "Yagua"
 * salía por encima de "La madre agua", porque una subcadena no sabe dónde
 * empieza una palabra. Este peso premia el acierto que cae al principio de una
 * palabra del título.
 */
export const SEARCH_WEIGHTS = {
  titleExact: 140,
  titlePrefix: 70,
  titleWordStart: 60,
  titlePhrase: 80,
  metaPhrase: 30,
  placePhrase: 24,
  titleTerm: 18,
  metaTerm: 7,
  placeTerm: 10,
  allTokensInTitle: 40,
  bodyPhrase: 4,
};

/**
 * Puntúa una fila ya plegada. Función pura: recibe texto, devuelve un número.
 *
 * `row` es `{ title, meta, place, body }`, todo pasado por
 * `normalizeSearchText` (o `hasBody: true` si el cuerpo se comprobó en SQL y
 * no se trajo, que es lo que hace la página de resultados).
 */
export function scoreSearchRow(row, terms) {
  if (!terms || terms.isEmpty || !terms.phrase) return 0;

  const title = row?.title || "";
  const meta = row?.meta || "";
  const place = row?.place || "";
  const hasBody =
    row?.hasBody === true ||
    (typeof row?.body === "string" && row.body.includes(terms.phrase));

  const w = SEARCH_WEIGHTS;
  let score = 0;

  if (title === terms.phrase) score += w.titleExact;
  if (title.startsWith(terms.phrase)) score += w.titlePrefix;
  if (title.includes(` ${terms.phrase}`)) score += w.titleWordStart;
  if (title.includes(terms.phrase)) score += w.titlePhrase;
  if (meta.includes(terms.phrase)) score += w.metaPhrase;
  if (place.includes(terms.phrase)) score += w.placePhrase;
  if (hasBody) score += w.bodyPhrase;

  terms.scoreTerms.forEach(({ term, weight }) => {
    if (title.includes(term)) score += Math.round(w.titleTerm * weight);
    if (meta.includes(term)) score += Math.round(w.metaTerm * weight);
    if (place.includes(term)) score += Math.round(w.placeTerm * weight);
  });

  if (
    terms.tokens.length > 1 &&
    terms.tokens.every((token) => title.includes(token))
  ) {
    score += w.allTokensInTitle;
  }

  return score;
}

/* ------------------------------------------------------------------ *
 * 6. Puentes a SQL
 * ------------------------------------------------------------------ */

/**
 * Escapa los comodines de LIKE.
 *
 * Hoy la página de resultados mete la consulta cruda en `%…%` sin escapar: un
 * `%` escrito por la persona (o pegado desde una URL) es un comodín, y una
 * consulta de un solo `%` devuelve el archivo entero. Con esto, `100%` busca
 * "100%".
 */
export function escapeLikePattern(value) {
  return String(value === null || value === undefined ? "" : value).replace(
    /[\\%_]/g,
    (char) => `\\${char}`
  );
}

/** `%término%`, con los comodines de la persona ya neutralizados. */
export function likeContains(value) {
  return `%${escapeLikePattern(value)}%`;
}

/**
 * La expresión SQL que pliega tildes y ñ, en el dialecto que toque.
 *
 * Postgres: `translate(lower(x), 'áàä…', 'aaa…')` — una sola pasada.
 * SQLite:   `replace(replace(lower(x), 'á','a'), …)` — no tiene `translate()`,
 *           y su `lower()` es sólo ASCII, por eso el mapa lleva mayúsculas.
 *
 * Ninguno de los dos necesita extensiones (`unaccent` no está instalada y no
 * podemos escribir en la base), ni índices nuevos.
 */
export function foldedSql(expression, dialect = "postgres") {
  if (dialect === "sqlite") {
    return ACCENT_PAIRS.reduce(
      (acc, [from, to]) => `replace(${acc}, '${from}', '${to}')`,
      `lower(${expression})`
    );
  }
  return `translate(lower(${expression}), '${ACCENT_FOLD_FROM}', '${ACCENT_FOLD_TO}')`;
}
