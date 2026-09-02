import { unstable_cache } from "next/cache";
import { getSqlClient, getSqliteDb, isPostgres, isQuotaError } from "./db";
import { isStaticDataBuild, withRetry } from "./db-resilience";
import { isImporterBucket } from "./home-rotation";
import {
  SEARCH_WEIGHTS,
  buildSearchTerms,
  escapeLikePattern,
  foldedSql,
  likeContains,
} from "./search-terms";

const ONE_HOUR = 60 * 60;
const ONE_DAY = 60 * 60 * 24;

/* ------------------------------------------------------------------ *
 * Orden pseudoaleatorio y determinista, sembrado por día
 * ------------------------------------------------------------------ */

/* El módulo de la mezcla. Primo, y con el techo de ids del archivo (600) el
   producto de abajo no pasa de ~4e14: muy por debajo del techo de un bigint. */
const SEED_MODULUS = 1000003;

/**
 * Recorta la semilla del día al rango que aguanta `seededOrderSql`.
 *
 * `dailySeed()` devuelve 32 bits; en SQL se multiplican dos factores, así que
 * hay que acotarla o el producto se sale del bigint.
 */
export function toSqlSeed(seed) {
  const value = Number(seed);
  if (!Number.isFinite(value)) return 0;
  return Math.abs(Math.trunc(value)) % SEED_MODULUS;
}

/**
 * Expresión de orden sembrado.
 *
 * NO usar `(id + semilla) % N`, que es lo que había: sumar la semilla ANTES de un
 * módulo pequeño no reordena la lista, sólo la ROTA. Por eso `% 23` daba
 * exactamente 23 portadas distintas y sólo 115 de los 596 mitos llegaban a
 * portada (medido contra producción). Aquí la semilla entra en los DOS factores
 * de un producto, así que el término lineal en `id` cambia con ella y la
 * permutación es de verdad distinta: 400 semillas dan 400 portadas distintas y
 * alcanzan 582 de los 596 mitos.
 *
 * `cast` es "::bigint" en Postgres y "" en SQLite (que ya usa enteros de 64 bits).
 */
function seededOrderSql(alias, param, cast = "::bigint") {
  const id = `${alias}.id${cast}`;
  const seed = `${param}${cast}`;
  return `(((${id} * 7919 + ${seed}) * (${id} * 104729 + ${seed} + 1)) % ${SEED_MODULUS})`;
}

function normalizeInput(value) {
  if (!value) {
    return null;
  }
  const trimmed = String(value).trim();
  return trimmed.length ? trimmed : null;
}

function parseJsonArray(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function normalizeEditorialProvenance(row) {
  if (!row) {
    return {
      sources: [],
      keySources: [],
      researchNotes: "",
      editorialUpdatedAt: null,
    };
  }
  return {
    sources: parseJsonArray(row.sources_json),
    keySources: parseJsonArray(row.key_sources_json),
    researchNotes: String(row.research_notes || "").trim(),
    editorialUpdatedAt: row.editorial_updated_at || row.updated_at || null,
  };
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

/* ------------------------------------------------------------------ *
 * Búsqueda con relevancia (la página de resultados, `/mitos?q=…`)
 * ------------------------------------------------------------------ *
 *
 * Antes: un `ILIKE '%q%'` encadenado sobre nueve columnas y
 * `ORDER BY myths.title ASC`. No había relevancia ninguna: "llorona" devolvía
 * siete relatos con "El Hada de los Cañaverales" primero y "La llorona"
 * QUINTO, por orden alfabético. Y "bachue" sin tilde devolvía CERO.
 *
 * Ahora hay dos ramas para encontrar y una tabla de pesos para ordenar.
 *
 * ENCONTRAR — nunca encoge lo que ya era encontrable:
 *   (a) el mismo ILIKE crudo de hoy sobre las nueve columnas, el cuerpo
 *       incluido, con los comodines de la persona ya escapados;
 *   (b) además, plegando tildes y ñ y probando variantes de plural, exigiendo
 *       TODOS los tokens (Y) y bastando una variante dentro de cada uno (O).
 *
 * ORDENAR — `SEARCH_WEIGHTS` traducida a `CASE WHEN`, sobre los campos
 * angostos. Es la MISMA tabla que suma en JavaScript el typeahead de
 * `lib/search.js`, así que un cambio de peso mueve los dos órdenes a la vez.
 *
 * COSTO. Tres decisiones, las tres medidas contra la base de producción
 * (596 relatos, medianas de cinco repeticiones, consulta "agua"):
 *
 *   1. El cuerpo NO se pliega. `myths.content` suma 3,92 MB en toda la tabla;
 *      título + resumen + temas + palabras clave + territorio + pueblo suman
 *      189 KB: veinte veces menos. Plegar también el cuerpo pasaba la consulta
 *      de ~113 ms a ~765 ms (6,8x) para comprar diez aciertos más en "bachue".
 *      El cuerpo sigue entrando por el ILIKE crudo, así que un relato que sólo
 *      menciona la palabra ahí SE ENCUENTRA; pesa 4 puntos contra los 80 de un
 *      acierto de título y queda al final. Eso es "el título gana al cuerpo".
 *
 *   2. Los plegados se calculan UNA VEZ por fila, en un CTE MATERIALIZED.
 *      Repartidos por los ~22 `CASE WHEN` del orden, Postgres los recalculaba
 *      en cada uno: 367 ms. Calculados una vez y referenciados por alias:
 *      200 ms.
 *
 *   3. La búsqueda hace UNA consulta, no dos. El total sale de
 *      `COUNT(*) OVER ()`, que se evalúa después del WHERE y antes del LIMIT.
 *      Con eso la ruta de búsqueda completa mide ~202 ms, contra los ~203 ms
 *      que costaban las dos consultas del ILIKE alfabético: la búsqueda nueva
 *      hace mucho más y NO cuesta más.
 *
 * El archivo sin `q` conserva su forma de siempre (conteo + listado,
 * alfabético) y no paga nada de esto.
 */

/** `a || ' ' || b || …` tolerando NULL, que es lo que hacen los dos motores. */
function concatSql(columns) {
  return columns.map((column) => `COALESCE(${column}, '')`).join(" || ' ' || ");
}

const TITLE_COLUMN = "myths.title";
const META_COLUMNS = ["myths.excerpt", "myths.tags_raw", "myths.focus_keywords_raw"];
const PLACE_COLUMNS = [
  "regions.name",
  "regions.slug",
  "communities.name",
  "communities.slug",
];
/** Las nueve columnas del ILIKE de hoy. Se conservan tal cual por recall. */
const RAW_MATCH_COLUMNS = [
  "myths.title",
  "myths.excerpt",
  "myths.content",
  "myths.tags_raw",
  "myths.focus_keywords_raw",
  "regions.name",
  "regions.slug",
  "communities.name",
  "communities.slug",
];

const MYTH_JOINS = `FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id`;

const LIST_COLUMNS = `
      myths.id,
      myths.title,
      myths.slug,
      myths.excerpt,
      myths.tags_raw,
      myths.seo_title,
      myths.seo_description,
      myths.focus_keyword,
      myths.focus_keywords_raw,
      myths.image_prompt,
      myths.image_url,
      myths.category_path,
      regions.name AS region,
      regions.slug AS region_slug,
      communities.name AS community,
      communities.slug AS community_slug`;

/**
 * Bolsa de parámetros que reusa el mismo valor.
 *
 * El WHERE y el ORDER BY comparten patrones (`%muisca%` aparece en los dos), y
 * cada variante de plural entra varias veces. Sin esto, una consulta de tres
 * palabras mandaría medio centenar de parámetros repetidos.
 *
 * Van en DOS bolsas encadenadas por una razón que costó un
 * `bind message supplies 11 parameters, but prepared statement requires 8`: la
 * consulta de conteo del archivo lleva el WHERE pero NO el ORDER BY, así que si
 * los parámetros de la puntuación entraran en la misma lista, mandaría
 * parámetros que su SQL no nombra y Postgres lo rechaza (better-sqlite3
 * también). La segunda bolsa numera A CONTINUACIÓN de la primera y, si el valor
 * ya está en ella, reusa su marcador en vez de duplicarlo.
 */
function createParamBag(dialect, base = null) {
  const values = [];
  const index = new Map();
  const offset = base ? base.values.length : 0;
  return {
    values,
    peek: (value) => index.get(value) || null,
    ref(value) {
      const reused = base ? base.peek(value) : null;
      if (reused) return reused;
      if (index.has(value)) return index.get(value);
      values.push(value);
      const position = offset + values.length;
      const placeholder = dialect === "sqlite" ? `:p${position}` : `$${position}`;
      index.set(value, placeholder);
      return placeholder;
    },
  };
}

/**
 * Las piezas SQL de una consulta de texto.
 *
 * `whereBag` recibe los parámetros que necesitan el CTE y el filtro (y por
 * tanto también el conteo del archivo); la bolsa de la puntuación se abre
 * DESPUÉS, con el WHERE ya cerrado, para que numere a continuación.
 *
 * Devuelve `scoreSql` en null cuando la consulta no deja nada normalizable
 * (por ejemplo "%%%" o "···"): entonces el orden vuelve a ser alfabético.
 */
function buildSearchClauses(rawQuery, whereBag, dialect) {
  const terms = buildSearchTerms(rawQuery);
  const likeWith = (bag) => (pattern) => `LIKE ${bag.ref(pattern)} ESCAPE '\\'`;
  const ilikeWith = (bag) => (pattern) =>
    dialect === "sqlite"
      ? `LIKE ${bag.ref(pattern)} ESCAPE '\\'`
      : `ILIKE ${bag.ref(pattern)} ESCAPE '\\'`;

  const whereLike = likeWith(whereBag);
  const whereIlike = ilikeWith(whereBag);

  /* Los plegados viven en el CTE y se referencian por alias. Aquí se declaran
     las expresiones que lo construyen. */
  const foldedColumns = [
    `${foldedSql(TITLE_COLUMN, dialect)} AS f_title`,
    `${foldedSql(concatSql(META_COLUMNS), dialect)} AS f_meta`,
    `${foldedSql(concatSql(PLACE_COLUMNS), dialect)} AS f_place`,
    `${foldedSql(
      concatSql([TITLE_COLUMN, ...META_COLUMNS, ...PLACE_COLUMNS]),
      dialect
    )} AS f_all`,
  ];

  /* (a) Paridad con el ILIKE de hoy: la consulta cruda sobre las nueve
     columnas. Se escapan `%` y `_` para que un comodín escrito por la persona
     deje de barrer el archivo entero. */
  const rawPattern = likeContains(terms.raw);
  foldedColumns.push(
    `(myths.content ${whereIlike(rawPattern)}) AS body_hit`,
    `(${RAW_MATCH_COLUMNS.map(
      (column) => `${column} ${whereIlike(rawPattern)}`
    ).join(" OR ")}) AS raw_hit`
  );

  /* (b) Sin tildes y con plurales. Se exigen TODOS los tokens (Y) y dentro de
     cada uno basta una variante (O): "muiscas" encuentra "muisca" y al revés,
     y "la llorona" no se convierte en "todo lo que diga la". */
  const branches = ["folded.raw_hit"];
  if (terms.groups.length) {
    const grouped = terms.groups
      .map(
        (group) =>
          `(${group.variants
            .map((variant) => `folded.f_all ${whereLike(likeContains(variant))}`)
            .join(" OR ")})`
      )
      .join(" AND ");
    branches.push(`(${grouped})`);
  }
  const predicate = `(${branches.join(" OR ")})`;

  if (!terms.phrase) {
    return { foldedColumns, predicate, scoreSql: null, scoreValues: [] };
  }

  const scoreBag = createParamBag(dialect, whereBag);
  const like = likeWith(scoreBag);
  const w = SEARCH_WEIGHTS;
  const phraseAny = likeContains(terms.phrase);
  const phrasePrefix = `${escapeLikePattern(terms.phrase)}%`;
  const phraseWord = `% ${escapeLikePattern(terms.phrase)}%`;
  const pieces = [
    `CASE WHEN folded.f_title = ${scoreBag.ref(terms.phrase)} THEN ${w.titleExact} ELSE 0 END`,
    `CASE WHEN folded.f_title ${like(phrasePrefix)} THEN ${w.titlePrefix} ELSE 0 END`,
    // Principio de palabra: "agua" premia "La madre agua", no "Yagua".
    `CASE WHEN folded.f_title ${like(phraseWord)} THEN ${w.titleWordStart} ELSE 0 END`,
    `CASE WHEN folded.f_title ${like(phraseAny)} THEN ${w.titlePhrase} ELSE 0 END`,
    `CASE WHEN folded.f_meta ${like(phraseAny)} THEN ${w.metaPhrase} ELSE 0 END`,
    `CASE WHEN folded.f_place ${like(phraseAny)} THEN ${w.placePhrase} ELSE 0 END`,
    // El cuerpo se comprueba en el CTE, no se pliega ni se ordena: 4 puntos.
    `CASE WHEN folded.body_hit THEN ${w.bodyPhrase} ELSE 0 END`,
  ];

  terms.scoreTerms.forEach(({ term, weight }) => {
    const pattern = like(likeContains(term));
    pieces.push(
      `CASE WHEN folded.f_title ${pattern} THEN ${Math.round(w.titleTerm * weight)} ELSE 0 END`,
      `CASE WHEN folded.f_meta ${pattern} THEN ${Math.round(w.metaTerm * weight)} ELSE 0 END`,
      `CASE WHEN folded.f_place ${pattern} THEN ${Math.round(w.placeTerm * weight)} ELSE 0 END`
    );
  });

  if (terms.tokens.length > 1) {
    const everyToken = terms.tokens
      .map((token) => `folded.f_title ${like(likeContains(token))}`)
      .join(" AND ");
    pieces.push(`CASE WHEN (${everyToken}) THEN ${w.allTokensInTitle} ELSE 0 END`);
  }

  return {
    foldedColumns,
    predicate,
    scoreSql: `(${pieces.join("\n        + ")})`,
    scoreValues: scoreBag.values,
  };
}

/**
 * WHERE, CTE y orden para el archivo, en los dos dialectos.
 *
 * Los filtros de territorio, pueblo y categoría se construyen igual que antes,
 * con una diferencia: la categoría pasó de `JOIN myth_tags … + SELECT DISTINCT`
 * a un `EXISTS` correlacionado. Devuelve exactamente los mismos relatos (un
 * mito con esa etiqueta, una vez) sin multiplicar filas, y por eso el listado
 * ya no necesita `DISTINCT` — que sobre 416 resultados con `image_prompt` a
 * cuestas costaba ~70 ms de ordenación pura.
 *
 * Y lo esencial: la consulta de texto es UNA CLÁUSULA MÁS unida con AND.
 * Buscar y filtrar se componen; nunca se reemplazan.
 */
function buildFilters({ region, community, tag, q }, dialect) {
  const whereBag = createParamBag(dialect);
  const where = [];

  const regionValue = normalizeInput(region);
  if (regionValue) {
    const ref = whereBag.ref(regionValue);
    where.push(`(regions.slug = ${ref} OR regions.name = ${ref})`);
  }

  const communityValue = normalizeInput(community);
  if (communityValue) {
    const ref = whereBag.ref(communityValue);
    where.push(`(communities.slug = ${ref} OR communities.name = ${ref})`);
  }

  const tagValue = normalizeInput(tag);
  if (tagValue) {
    const ref = whereBag.ref(tagValue);
    where.push(`EXISTS (
        SELECT 1 FROM myth_tags
        JOIN tags ON tags.id = myth_tags.tag_id
        WHERE myth_tags.myth_id = myths.id
          AND (tags.slug = ${ref} OR tags.name = ${ref})
      )`);
  }

  const queryValue = normalizeInput(q);
  if (!queryValue) {
    return {
      where,
      values: whereBag.values,
      scoreValues: [],
      scoreSql: null,
      searchPredicate: null,
      foldedColumns: null,
    };
  }

  const clauses = buildSearchClauses(queryValue, whereBag, dialect);
  return {
    where,
    values: whereBag.values,
    scoreValues: clauses.scoreValues,
    scoreSql: clauses.scoreSql,
    searchPredicate: clauses.predicate,
    foldedColumns: clauses.foldedColumns,
  };
}

/**
 * El SQL del archivo, en el dialecto que toque.
 *
 * Dos formas, no tres:
 *   · sin `q`  → conteo + listado alfabético (la de siempre);
 *   · con `q`  → una sola consulta: CTE de plegados + puntuación +
 *                `COUNT(*) OVER ()` para el total.
 */
function buildListSql(params, dialect, makeRefs) {
  const { where, values, scoreValues, searchPredicate, scoreSql, foldedColumns } =
    buildFilters(params, dialect);
  const { limitRef, offsetRef } = makeRefs(values.length + scoreValues.length);

  if (!searchPredicate) {
    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";
    const collate = dialect === "sqlite" ? " COLLATE NOCASE" : "";
    return {
      values,
      scoreValues,
      totalFromRows: false,
      countSql: `
    SELECT COUNT(*) AS count
    ${MYTH_JOINS}
    ${whereClause}
  `,
      listSql: `
    SELECT${LIST_COLUMNS}
    ${MYTH_JOINS}
    ${whereClause}
    ORDER BY myths.title${collate} ASC
    LIMIT ${limitRef} OFFSET ${offsetRef}
  `,
    };
  }

  /* El CTE lleva los filtros: si además de buscar se filtró por territorio,
     sólo se pliega ese subconjunto. Se materializa a propósito — sin
     `MATERIALIZED`, Postgres lo aplana y vuelve a recalcular cada plegado en
     cada `CASE WHEN`. */
  const cteWhere = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const collate = dialect === "sqlite" ? " COLLATE NOCASE" : "";
  const foldedCte = `WITH folded AS MATERIALIZED (
      SELECT
        myths.id AS mid,
        ${foldedColumns.join(",\n        ")}
      ${MYTH_JOINS}
      ${cteWhere}
    )`;

  const listSql = `
    ${foldedCte}
    SELECT${LIST_COLUMNS},
      ${scoreSql} AS search_score,
      COUNT(*) OVER () AS total_count
    ${MYTH_JOINS}
    JOIN folded ON folded.mid = myths.id
    WHERE ${searchPredicate}
    ORDER BY search_score DESC, myths.title${collate} ASC
    LIMIT ${limitRef} OFFSET ${offsetRef}
  `;
  /* El total normal viaja en la fila (`COUNT(*) OVER ()`). Este conteo es el
     respaldo para una página FUERA DE RANGO (`/mitos/pagina/99?q=agua`): sin
     filas no hay ventana que lo lleve, y sin él la página diría "0 relatos" en
     vez de "416". Sólo se ejecuta en ese caso, no en el camino normal. */
  const countSql = `
    ${foldedCte}
    SELECT COUNT(*) AS count
    ${MYTH_JOINS}
    JOIN folded ON folded.mid = myths.id
    WHERE ${searchPredicate}
  `;

  return { values, scoreValues, totalFromRows: true, countSql, listSql };
}

/**
 * `total_count` es el andamio de `COUNT(*) OVER ()`, no un campo del mito: se
 * quita antes de devolver (lo consume `/api/myths` y `llms.txt`). `search_score`
 * sí se conserva: es información útil y sólo aparece cuando hubo búsqueda.
 */
function stripQueryArtifacts(rows) {
  return rows.map(({ total_count, ...rest }) => rest);
}

/**
 * De dónde sale el total.
 *
 * Sin `q`, de su propia consulta de conteo. Con `q`, de `COUNT(*) OVER ()`, que
 * viaja en cada fila y no cuesta un viaje más. El único caso en que hay que ir
 * a preguntar es una página fuera de rango: sin filas no hay ventana, y
 * devolver 0 haría que la página dijera "0 relatos" teniendo 416.
 */
function resolveTotal({ totalFromRows, rows, offset, count }) {
  if (!totalFromRows) return count();
  if (rows.length) return Number(rows[0].total_count || 0);
  if (offset > 0) return count();
  return 0;
}

/** Los mismos parámetros posicionales, con los nombres que quiere better-sqlite3. */
function toSqliteParams(values, extra = {}) {
  const params = { ...extra };
  values.forEach((value, i) => {
    params[`p${i + 1}`] = value;
  });
  return params;
}

function listMythsSqlite({
  region,
  community,
  tag,
  q,
  limit = 20,
  offset = 0,
} = {}) {
  const db = getSqliteDb();
  const { values, scoreValues, totalFromRows, countSql, listSql } = buildListSql(
    { region, community, tag, q },
    "sqlite",
    () => ({ limitRef: ":limit", offsetRef: ":offset" })
  );

  const limitValue = clampNumber(limit, 1, 100, 20);
  const offsetValue = clampNumber(offset, 0, 5000, 0);
  const listParams = toSqliteParams([...values, ...scoreValues], {
    limit: limitValue,
    offset: offsetValue,
  });

  const rows = db.prepare(listSql).all(listParams);

  const total = resolveTotal({
    totalFromRows,
    rows,
    offset: offsetValue,
    count: () => Number(db.prepare(countSql).get(toSqliteParams(values)).count || 0),
  });

  return {
    total,
    limit: limitValue,
    offset: offsetValue,
    items: stripQueryArtifacts(rows),
  };
}

async function listMythsPostgres({
  region,
  community,
  tag,
  q,
  limit = 20,
  offset = 0,
} = {}) {
  const sql = getSqlClient();
  const { values, scoreValues, totalFromRows, countSql, listSql } = buildListSql(
    { region, community, tag, q },
    "postgres",
    (paramCount) => ({
      limitRef: `$${paramCount + 1}`,
      offsetRef: `$${paramCount + 2}`,
    })
  );

  const limitValue = clampNumber(limit, 1, 100, 20);
  const offsetValue = clampNumber(offset, 0, 5000, 0);

  const listValues = [...values, ...scoreValues, limitValue, offsetValue];
  const rows = (await sql.query(listSql, listValues)).rows;

  const total = await resolveTotal({
    totalFromRows,
    rows,
    offset: offsetValue,
    count: async () =>
      Number((await sql.query(countSql, values)).rows[0]?.count || 0),
  });

  return {
    total,
    limit: limitValue,
    offset: offsetValue,
    items: stripQueryArtifacts(rows),
  };
}

export async function listMyths(params = {}) {
  try {
    if (isPostgres()) {
      return await withRetry(() => listMythsPostgres(params));
    }
    return listMythsSqlite(params);
  } catch (error) {
    if (isQuotaError(error)) {
      console.error("[MYTHS] listMyths quota exceeded:", error);
    } else {
      console.error("[MYTHS] listMyths failed:", error);
    }
    if (isStaticDataBuild()) {
      throw error;
    }
    const limitValue = clampNumber(params.limit, 1, 100, 20);
    const offsetValue = clampNumber(params.offset, 0, 5000, 0);
    return {
      total: 0,
      limit: limitValue,
      offset: offsetValue,
      items: [],
      error: isQuotaError(error) ? "db_quota_exceeded" : undefined,
    };
  }
}

// Lightweight: every myth (slug + title) belonging to a taxon, with NO cap.
// Used to render a crawlable, server-side complete index of links on each
// taxonomy detail page so the long tail isn't reachable only via deep
// JS-paginated lists (which Googlebot does not follow).
function listMythLinksByTaxonSqlite(kind, value) {
  const db = getSqliteDb();
  const v = normalizeInput(value);
  if (!v) return [];

  let join = "";
  let where = "";
  if (kind === "region") {
    where = "(regions.slug = :v OR regions.name = :v)";
  } else if (kind === "community") {
    where = "(communities.slug = :v OR communities.name = :v)";
  } else if (kind === "tag") {
    join =
      "JOIN myth_tags ON myth_tags.myth_id = myths.id JOIN tags ON tags.id = myth_tags.tag_id";
    where = "(tags.slug = :v OR tags.name = :v)";
  } else {
    return [];
  }

  const sql = `
    SELECT DISTINCT myths.slug AS slug, myths.title AS title
    FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id
    ${join}
    WHERE ${where} AND myths.slug IS NOT NULL AND myths.slug != ''
    ORDER BY myths.title COLLATE NOCASE ASC
  `;

  return db.prepare(sql).all({ v });
}

async function listMythLinksByTaxonPostgres(kind, value) {
  const sql = getSqlClient();
  const v = normalizeInput(value);
  if (!v) return [];

  let join = "";
  let where = "";
  if (kind === "region") {
    where = "(regions.slug = $1 OR regions.name = $1)";
  } else if (kind === "community") {
    where = "(communities.slug = $1 OR communities.name = $1)";
  } else if (kind === "tag") {
    join =
      "JOIN myth_tags ON myth_tags.myth_id = myths.id JOIN tags ON tags.id = myth_tags.tag_id";
    where = "(tags.slug = $1 OR tags.name = $1)";
  } else {
    return [];
  }

  const result = await sql.query(
    `
      SELECT DISTINCT myths.slug AS slug, myths.title AS title
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${join}
      WHERE ${where} AND myths.slug IS NOT NULL AND myths.slug != ''
      ORDER BY myths.title ASC
    `,
    [v]
  );

  return result.rows || [];
}

// Deliberately NOT wrapped in unstable_cache: this is called many times
// concurrently (Promise.all over every taxon on the index pages), and
// unstable_cache returned intermittently-empty results under that concurrency
// at build time, silently dropping the myth links. The query is tiny
// (slug + title only) and the rendered pages are already cached via the route
// `revalidate`, so a direct read is both safe and deterministic.
export async function listMythLinksByTaxon(kind, value) {
  if (!kind || !value) return [];
  try {
    if (isPostgres()) {
      return await withRetry(() => listMythLinksByTaxonPostgres(kind, value));
    }
    return listMythLinksByTaxonSqlite(kind, value);
  } catch (error) {
    console.error("[MYTHS] listMythLinksByTaxon error:", error);
    if (isStaticDataBuild()) {
      throw error;
    }
    return [];
  }
}

/* Como `listMythLinksByTaxon`, pero con la obra de cada mito: es lo que
   necesita el muro de la ficha de pueblo, donde los relatos no son renglones
   sino piezas ilustradas. Se mantiene aparte porque la versión ligera se pide
   en paralelo para TODOS los taxones de las páginas índice y ahí el LATERAL de
   la vertical no se paga por nada: allí nunca se dibuja una imagen.

   La vertical no vive en `myths` sino en `vertical_images` (entity_type +
   entity_id), y es la obra buena para una pieza 4:5: la apaisada recortada a
   vertical pierde al personaje. */
function listMythPlatesByTaxonSqlite(kind, value) {
  const db = getSqliteDb();
  const v = normalizeInput(value);
  if (!v) return [];

  let join = "";
  let where = "";
  if (kind === "region") {
    where = "(regions.slug = :v OR regions.name = :v)";
  } else if (kind === "community") {
    where = "(communities.slug = :v OR communities.name = :v)";
  } else if (kind === "tag") {
    join =
      "JOIN myth_tags ON myth_tags.myth_id = myths.id JOIN tags ON tags.id = myth_tags.tag_id";
    where = "(tags.slug = :v OR tags.name = :v)";
  } else {
    return [];
  }

  const sql = `
    SELECT DISTINCT
      myths.slug AS slug,
      myths.title AS title,
      myths.image_url AS image_url,
      (
        SELECT image_url
        FROM vertical_images
        WHERE entity_type = 'myth' AND entity_id = myths.id
        ORDER BY updated_at DESC, id DESC
        LIMIT 1
      ) AS vertical_image_url
    FROM myths
    JOIN regions ON regions.id = myths.region_id
    LEFT JOIN communities ON communities.id = myths.community_id
    ${join}
    WHERE ${where} AND myths.slug IS NOT NULL AND myths.slug != ''
    ORDER BY myths.title COLLATE NOCASE ASC
  `;

  return db.prepare(sql).all({ v });
}

async function listMythPlatesByTaxonPostgres(kind, value) {
  const sql = getSqlClient();
  const v = normalizeInput(value);
  if (!v) return [];

  let join = "";
  let where = "";
  if (kind === "region") {
    where = "(regions.slug = $1 OR regions.name = $1)";
  } else if (kind === "community") {
    where = "(communities.slug = $1 OR communities.name = $1)";
  } else if (kind === "tag") {
    join =
      "JOIN myth_tags ON myth_tags.myth_id = myths.id JOIN tags ON tags.id = myth_tags.tag_id";
    where = "(tags.slug = $1 OR tags.name = $1)";
  } else {
    return [];
  }

  const result = await sql.query(
    `
      SELECT DISTINCT
        myths.slug AS slug,
        myths.title AS title,
        myths.image_url AS image_url,
          vertical.image_url AS vertical_image_url
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      LEFT JOIN LATERAL (
        SELECT image_url
        FROM vertical_images
        WHERE entity_type = 'myth' AND entity_id = myths.id
        ORDER BY updated_at DESC, id DESC
        LIMIT 1
      ) AS vertical ON TRUE
      ${join}
      WHERE ${where} AND myths.slug IS NOT NULL AND myths.slug != ''
      ORDER BY myths.title ASC
    `,
    [v]
  );

  return result.rows || [];
}

// Sin `unstable_cache`, por lo mismo que `listMythLinksByTaxon`.
export async function listMythPlatesByTaxon(kind, value) {
  if (!kind || !value) return [];
  try {
    if (isPostgres()) {
      return await withRetry(() => listMythPlatesByTaxonPostgres(kind, value));
    }
    return listMythPlatesByTaxonSqlite(kind, value);
  } catch (error) {
    console.error("[MYTHS] listMythPlatesByTaxon error:", error);
    if (isStaticDataBuild()) {
      throw error;
    }
    return [];
  }
}

function getMythBySlugSqlite(slug) {
  const db = getSqliteDb();
  const slugValue = normalizeInput(slug);
  if (!slugValue) {
    return null;
  }

  const myth = db
    .prepare(
      `
      SELECT
        myths.*, 
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.slug = ?
      LIMIT 1
    `
    )
    .get(slugValue);

  if (!myth) {
    return null;
  }

  const tags = db
    .prepare(
      `
      SELECT tags.name, tags.slug
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      WHERE myth_tags.myth_id = ?
      ORDER BY tags.name COLLATE NOCASE ASC
    `
    )
    .all(myth.id);

  const keywords = db
    .prepare(
      `
      SELECT keyword
      FROM myth_keywords
      WHERE myth_id = ?
      ORDER BY keyword COLLATE NOCASE ASC
    `
    )
    .all(myth.id)
    .map((row) => row.keyword);

  let provenance = normalizeEditorialProvenance(null);
  let verticalImageUrl = null;
  try {
    const editorial = db
      .prepare(
        `
        SELECT sources_json, key_sources_json, research_notes,
               updated_at AS editorial_updated_at
        FROM editorial_myths
        WHERE source_myth_id = ?
        LIMIT 1
      `
      )
      .get(myth.id);
    provenance = normalizeEditorialProvenance(editorial);
  } catch (error) {
    console.error("[MYTHS] Editorial provenance unavailable (SQLite):", error);
  }
  try {
    verticalImageUrl =
      db
        .prepare(
          `
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = ?
          ORDER BY updated_at DESC, id DESC
          LIMIT 1
        `
        )
        .get(myth.id)?.image_url || null;
  } catch (error) {
    console.error("[MYTHS] Vertical image unavailable (SQLite):", error);
  }

  return {
    ...myth,
    vertical_image_url: verticalImageUrl,
    tags,
    keywords,
    ...provenance,
  };
}

async function getMythBySlugPostgres(slug) {
  const sql = getSqlClient();
  const slugValue = normalizeInput(slug);
  if (!slugValue) {
    return null;
  }

  const mythResult = await sql.query(
    `
      SELECT
        myths.*,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug,
        editorial_myths.sources_json,
        editorial_myths.key_sources_json,
        editorial_myths.research_notes,
        editorial_myths.updated_at AS editorial_updated_at
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      LEFT JOIN editorial_myths ON editorial_myths.source_myth_id = myths.id
      WHERE myths.slug = $1
      LIMIT 1
    `,
    [slugValue]
  );

  const myth = mythResult.rows[0];
  if (!myth) {
    return null;
  }

  const [tagsResult, keywordsResult, verticalImageResult] = await Promise.all([
    sql.query(
      `
        SELECT tags.name, tags.slug
        FROM tags
        JOIN myth_tags ON myth_tags.tag_id = tags.id
        WHERE myth_tags.myth_id = $1
        ORDER BY tags.name ASC
      `,
      [myth.id]
    ),
    sql.query(
      `
        SELECT keyword
        FROM myth_keywords
        WHERE myth_id = $1
        ORDER BY keyword ASC
      `,
      [myth.id]
    ),
    sql.query(
      `
        SELECT image_url
        FROM vertical_images
        WHERE entity_type = 'myth' AND entity_id = $1
        ORDER BY updated_at DESC, id DESC
        LIMIT 1
      `,
      [myth.id]
    ),
  ]);

  const provenance = normalizeEditorialProvenance(myth);

  return {
    ...myth,
    vertical_image_url: verticalImageResult.rows[0]?.image_url || null,
    tags: tagsResult.rows,
    keywords: keywordsResult.rows.map((row) => row.keyword),
    ...provenance,
  };
}

const getMythBySlugCached = unstable_cache(
  async (slug) => {
    try {
      if (isPostgres()) {
        return await withRetry(() => getMythBySlugPostgres(slug));
      }
      return getMythBySlugSqlite(slug);
    } catch (error) {
      console.error("[MYTHS] getMythBySlug failed:", error);
      if (isStaticDataBuild()) {
        throw error;
      }
      return null;
    }
  },
  ["myth-by-slug"],
  { revalidate: ONE_HOUR, tags: ["myth"] }
);

export async function getMythBySlug(slug) {
  return getMythBySlugCached(slug);
}

function getTaxonomySqlite() {
  const db = getSqliteDb();

  const regions = db
    .prepare(
      `
      SELECT
        regions.id,
        regions.name,
        regions.slug,
        regions.image_url,
        regions.image_prompt,
        COUNT(myths.id) AS myth_count
      FROM regions
      LEFT JOIN myths ON myths.region_id = regions.id
      GROUP BY regions.id
      ORDER BY regions.name COLLATE NOCASE ASC
    `
    )
    .all();

  const communities = db
    .prepare(
      `
      SELECT
        communities.id,
        communities.name,
        communities.slug,
        communities.region_id,
        communities.image_url,
        communities.image_prompt,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(myths.id) AS myth_count
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      LEFT JOIN myths ON myths.community_id = communities.id
      GROUP BY communities.id
      ORDER BY regions.name COLLATE NOCASE ASC, communities.name COLLATE NOCASE ASC
    `
    )
    .all();

  const tags = db
    .prepare(
      `
      SELECT
        tags.name,
        tags.slug,
        tags.image_url,
        tags.image_prompt,
        tags.description,
        COUNT(myth_tags.myth_id) AS myth_count
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      GROUP BY tags.id
      ORDER BY myth_count DESC, tags.name COLLATE NOCASE ASC
    `
    )
    .all();

  return { regions, communities, tags };
}

async function getTaxonomyPostgres() {
  const sql = getSqlClient();

  const regionsResult = await sql.query(
    `
      SELECT
        regions.id,
        regions.name,
        regions.slug,
        regions.image_url,
        regions.image_prompt,
        COUNT(myths.id) AS myth_count
      FROM regions
      LEFT JOIN myths ON myths.region_id = regions.id
      GROUP BY regions.id
      ORDER BY regions.name ASC
    `
  );

  const communitiesResult = await sql.query(
    `
      SELECT
        communities.id,
        communities.name,
        communities.slug,
        communities.region_id,
        communities.image_url,
        communities.image_prompt,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(myths.id) AS myth_count
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      LEFT JOIN myths ON myths.community_id = communities.id
      GROUP BY communities.id, regions.id
      ORDER BY regions.name ASC, communities.name ASC
    `
  );

  const tagsResult = await sql.query(
    `
      SELECT
        tags.name,
        tags.slug,
        tags.image_url,
        tags.image_prompt,
        tags.description,
        COUNT(myth_tags.myth_id) AS myth_count
      FROM tags
      JOIN myth_tags ON myth_tags.tag_id = tags.id
      GROUP BY tags.id
      ORDER BY myth_count DESC, tags.name ASC
    `
  );

  // Postgres devuelve COUNT() como bigint, y el driver lo entrega como STRING.
  // Sqlite lo entrega como número. Sin normalizar aquí, cualquier `reduce` que
  // sume `myth_count` concatena en producción y no en local — que es
  // exactamente como se rompió el reparto de área de /regiones.
  const conCifra = (rows) =>
    (rows || []).map((row) => ({ ...row, myth_count: Number(row.myth_count) || 0 }));

  return {
    regions: conCifra(regionsResult.rows),
    communities: conCifra(communitiesResult.rows),
    tags: conCifra(tagsResult.rows),
  };
}

const getTaxonomyCached = unstable_cache(
  async () => {
    try {
      if (isPostgres()) {
        return await withRetry(() => getTaxonomyPostgres());
      }
      return getTaxonomySqlite();
    } catch (error) {
      console.error("[MYTHS] getTaxonomy failed:", error);
      if (isStaticDataBuild()) {
        throw error;
      }
      return { regions: [], communities: [], tags: [] };
    }
  },
  ["taxonomy"],
  { revalidate: ONE_HOUR, tags: ["taxonomy"] }
);

export async function getTaxonomy() {
  return getTaxonomyCached();
}

export function parseListParams(searchParams) {
  return {
    region: searchParams.get("region"),
    community: searchParams.get("community"),
    tag: searchParams.get("tag"),
    q: searchParams.get("q"),
    limit: searchParams.get("limit"),
    offset: searchParams.get("offset"),
  };
}

// Get recommended myths based on region, community, and tags
function getRecommendedMythsSqlite(mythId, { region_id, community_id, tags }, limit = 8) {
  const db = getSqliteDb();

  try {
    // Get myths from same region or community, or with shared tags
    const sql = `
      SELECT DISTINCT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug,
        (CASE WHEN myths.region_id = ? THEN 2 ELSE 0 END +
         CASE WHEN myths.community_id = ? THEN 3 ELSE 0 END) AS score
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.id != ?
        AND (myths.region_id = ? OR myths.community_id = ?)
      ORDER BY score DESC, RANDOM()
      LIMIT ?
    `;

    return db.prepare(sql).all(
      region_id,
      community_id,
      mythId,
      region_id,
      community_id,
      limit
    );
  } catch (error) {
    console.error("Error getting recommended myths (SQLite):", error);
    return [];
  }
}

async function getRecommendedMythsPostgres(mythId, { region_id, community_id, tags }, limit = 8) {
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
      SELECT DISTINCT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug,
        (CASE WHEN myths.region_id = $1 THEN 2 ELSE 0 END +
         CASE WHEN myths.community_id = $2 THEN 3 ELSE 0 END) AS score
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.id != $3
        AND (myths.region_id = $1 OR myths.community_id = $2)
      ORDER BY score DESC, myths.id ASC
      LIMIT $4
      `,
      [region_id, community_id, mythId, limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting recommended myths:", error);
    return [];
  }
}

const getRecommendedMythsCached = unstable_cache(
  async (mythId, regionId, communityId, limit = 8) => {
    if (!mythId || !regionId) {
      return [];
    }
    const payload = { region_id: regionId, community_id: communityId };
    if (isPostgres()) {
      return await getRecommendedMythsPostgres(mythId, payload, limit);
    }
    return getRecommendedMythsSqlite(mythId, payload, limit);
  },
  ["recommended-myths"],
  { revalidate: ONE_HOUR }
);

export async function getRecommendedMyths(myth, limit = 8) {
  if (!myth || !myth.id || !myth.region_id) {
    return [];
  }

  try {
    return await getRecommendedMythsCached(
      myth.id,
      myth.region_id,
      myth.community_id,
      limit
    );
  } catch (error) {
    console.error("Error in getRecommendedMyths:", error);
    return [];
  }
}

// Get featured myths with images for home page
async function getFeaturedMythsWithImagesPostgres(limit = 12, seed = 0) {
  const sql = getSqlClient();

  try {
    // Use date-based rotation: get myths with images, rotate by seed
    const result = await sql.query(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.image_url IS NOT NULL
      ORDER BY ${seededOrderSql("myths", "$1")}, myths.id
      LIMIT $2
      `,
      [toSqlSeed(seed), limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting featured myths with images:", error);
    return [];
  }
}

function getFeaturedMythsWithImagesSqlite(limit = 12, seed = 0) {
  const db = getSqliteDb();

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.image_url IS NOT NULL
      ORDER BY ${seededOrderSql("myths", ":seed", "")}, myths.id
      LIMIT :limit
    `;

    // Parámetros CON NOMBRE: la expresión sembrada repite la semilla dos veces y
    // con `?` habría que contar posiciones a mano (y better-sqlite3 no deja
    // mezclar posicionales con nombrados).
    return db.prepare(sql).all({ seed: toSqlSeed(seed), limit });
  } catch (error) {
    console.error("Error getting featured myths with images (SQLite):", error);
    return [];
  }
}

const getFeaturedMythsWithImagesCached = unstable_cache(
  async (limit = 12, seed = 0) => {
    if (isPostgres()) {
      return await getFeaturedMythsWithImagesPostgres(limit, seed);
    }
    return getFeaturedMythsWithImagesSqlite(limit, seed);
  },
  ["featured-myths"],
  { revalidate: ONE_DAY }
);

export async function getFeaturedMythsWithImages(limit = 12, seed = 0) {
  try {
    return await getFeaturedMythsWithImagesCached(limit, seed);
  } catch (error) {
    console.error("Error in getFeaturedMythsWithImages:", error);
    return [];
  }
}

// Get myths by region for home page
async function getMythsByRegionPostgres(regionSlug, limit = 6, seed = 0) {
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      WHERE regions.slug = $1
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + $2) % 100,
        myths.id
      LIMIT $3
      `,
      [regionSlug, seed, limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting myths by region:", error);
    return [];
  }
}

function getMythsByRegionSqlite(regionSlug, limit = 6, seed = 0) {
  const db = getSqliteDb();

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        regions.name AS region,
        regions.slug AS region_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      WHERE regions.slug = ?
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + ?) % 100,
        myths.id
      LIMIT ?
    `;

    return db.prepare(sql).all(regionSlug, seed, limit);
  } catch (error) {
    console.error("Error getting myths by region (SQLite):", error);
    return [];
  }
}

export async function getMythsByRegion(regionSlug, limit = 6, seed = 0) {
  try {
    if (isPostgres()) {
      return await getMythsByRegionPostgres(regionSlug, limit, seed);
    }
    return getMythsByRegionSqlite(regionSlug, limit, seed);
  } catch (error) {
    console.error("Error in getMythsByRegion:", error);
    return [];
  }
}

/* Extras de un puñado de mitos ya elegidos: sus etiquetas y su obra vertical.
   Las consultas de listado no traen ninguna de las dos —serían un join por fila
   en todo el catálogo— pero el home sólo necesita las de la quincena de mitos
   que va a pintar, así que se piden aparte y en un solo viaje.
   Las etiquetas alimentan los filtros de la mesa y la línea de «por qué está
   aquí»; la vertical permite servir otra obra en móvil en vez de recortar la
   apaisada, que es donde se pierde el sujeto. */
async function getMythExtrasBySlugsPostgres(slugs) {
  const sql = getSqlClient();

  const result = await sql.query(
    `
    SELECT
      myths.slug,
      vertical.image_url AS vertical_image_url,
      COALESCE(
        (
          SELECT json_agg(json_build_object('name', tags.name, 'slug', tags.slug))
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = myths.id
        ),
        '[]'::json
      ) AS tags
    FROM myths
    LEFT JOIN LATERAL (
      SELECT image_url
      FROM vertical_images
      WHERE entity_type = 'myth' AND entity_id = myths.id
      ORDER BY updated_at DESC, id DESC
      LIMIT 1
    ) AS vertical ON TRUE
    WHERE myths.slug = ANY($1)
    `,
    [slugs]
  );

  return result.rows.map((row) => ({
    slug: row.slug,
    verticalImageUrl: row.vertical_image_url || null,
    tags: Array.isArray(row.tags) ? row.tags : parseJsonArray(row.tags),
  }));
}

function getMythExtrasBySlugsSqlite(slugs) {
  const db = getSqliteDb();
  const placeholders = slugs.map(() => "?").join(", ");

  const rows = db
    .prepare(
      `
      SELECT
        myths.slug,
        (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
          ORDER BY updated_at DESC, id DESC
          LIMIT 1
        ) AS vertical_image_url,
        (
          SELECT group_concat(tags.name || '|' || tags.slug, '::')
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = myths.id
        ) AS tags_joined
      FROM myths
      WHERE myths.slug IN (${placeholders})
    `
    )
    .all(...slugs);

  return rows.map((row) => ({
    slug: row.slug,
    verticalImageUrl: row.vertical_image_url || null,
    tags: String(row.tags_joined || "")
      .split("::")
      .filter(Boolean)
      .map((entry) => {
        const [name, slug] = entry.split("|");
        return { name, slug };
      }),
  }));
}

const getMythExtrasBySlugsCached = unstable_cache(
  async (slugs) => {
    if (isPostgres()) {
      return await withRetry(() => getMythExtrasBySlugsPostgres(slugs));
    }
    return getMythExtrasBySlugsSqlite(slugs);
  },
  ["myth-extras"],
  { revalidate: ONE_DAY }
);

export async function getMythExtrasBySlugs(slugs = []) {
  const clean = [...new Set(slugs.filter(Boolean))];
  if (!clean.length) return new Map();
  try {
    const rows = await getMythExtrasBySlugsCached(clean);
    return new Map(rows.map((row) => [row.slug, row]));
  } catch (error) {
    console.error("Error in getMythExtrasBySlugs:", error);
    return new Map();
  }
}

/* Comunidades para las pestañas del home.
   Devuelve VARIOS relatos ilustrados por comunidad, no uno.

   Antes había un `LIMIT 1` dentro de un LATERAL: por construcción era imposible
   que una comunidad mostrara más de un mito, por muchos que tenga (los Muiscas
   tienen 41). Ahora la ventana `ROW_NUMBER() OVER (PARTITION BY comunidad)`
   corta a `perCommunity` en UNA sola consulta — nada de N+1: 48 comunidades ×
   4 mitos = 156 filas, 231 ms medidos contra producción.

   Las bolsas del importador ("Mestizo", "Mixto", "Varios") NO son pueblos, pero
   tampoco son basura: son 253 relatos, el 42,5 % del archivo. Aquí se conservan
   y se marcan con `generic: true` para que la página las presente con su propia
   etiqueta («sin pueblo identificado») en vez de descartarlas. */
async function getCommunitySpotlightsPostgres({ seed = 0, perCommunity = 4 } = {}) {
  const sql = getSqlClient();

  const result = await sql.query(
    `
    WITH ranked AS (
      SELECT
        communities.id AS community_id,
        communities.name,
        communities.slug,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(*) OVER (PARTITION BY communities.id) AS illustrated,
        myths.id AS myth_id,
        myths.title AS myth_title,
        myths.slug AS myth_slug,
        myths.excerpt AS myth_excerpt,
        myths.image_url AS myth_image_url,
        ROW_NUMBER() OVER (
          PARTITION BY communities.id
          ORDER BY ${seededOrderSql("myths", "$1")}, myths.id
        ) AS rn
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      JOIN myths
        ON myths.community_id = communities.id
       AND myths.image_url IS NOT NULL
    )
    SELECT *
    FROM ranked
    WHERE rn <= $2
    ORDER BY illustrated DESC, name ASC, rn ASC
    `,
    [toSqlSeed(seed), clampNumber(perCommunity, 1, 12, 4)]
  );

  return result.rows;
}

function getCommunitySpotlightsSqlite({ seed = 0, perCommunity = 4 } = {}) {
  const db = getSqliteDb();

  return db
    .prepare(
      `
      WITH ranked AS (
        SELECT
          communities.id AS community_id,
          communities.name,
          communities.slug,
          regions.name AS region,
          regions.slug AS region_slug,
          COUNT(*) OVER (PARTITION BY communities.id) AS illustrated,
          myths.id AS myth_id,
          myths.title AS myth_title,
          myths.slug AS myth_slug,
          myths.excerpt AS myth_excerpt,
          myths.image_url AS myth_image_url,
          ROW_NUMBER() OVER (
            PARTITION BY communities.id
            ORDER BY ${seededOrderSql("myths", ":seed", "")}, myths.id
          ) AS rn
        FROM communities
        JOIN regions ON regions.id = communities.region_id
        JOIN myths
          ON myths.community_id = communities.id
         AND myths.image_url IS NOT NULL
      )
      SELECT *
      FROM ranked
      WHERE rn <= :perCommunity
      ORDER BY illustrated DESC, name COLLATE NOCASE ASC, rn ASC
    `
    )
    .all({
      seed: toSqlSeed(seed),
      perCommunity: clampNumber(perCommunity, 1, 12, 4),
    });
}

/* De filas planas a una comunidad por objeto. La clave es el `id`, NO el slug:
   `mestizo`, `mixto`, `nasa-paeces` y `embera` se repiten en varias regiones y
   agrupar por slug fundiría pueblos distintos. */
function groupCommunitySpotlights(rows = []) {
  const byId = new Map();

  for (const row of rows) {
    const id = row.community_id;
    if (!byId.has(id)) {
      byId.set(id, {
        id,
        name: row.name,
        slug: row.slug,
        region: row.region,
        regionSlug: row.region_slug,
        mythCount: Number(row.illustrated) || 0,
        generic: isImporterBucket(row.name),
        myths: [],
      });
    }
    byId.get(id).myths.push({
      id: row.myth_id,
      slug: row.myth_slug,
      title: row.myth_title,
      excerpt: row.myth_excerpt,
      imageUrl: row.myth_image_url,
      region: row.region,
      regionSlug: row.region_slug,
      community: row.name,
      communitySlug: row.slug,
    });
  }

  return [...byId.values()];
}

const getCommunitySpotlightsCached = unstable_cache(
  async (seed, perCommunity) => {
    const rows = isPostgres()
      ? await withRetry(() => getCommunitySpotlightsPostgres({ seed, perCommunity }))
      : getCommunitySpotlightsSqlite({ seed, perCommunity });
    return groupCommunitySpotlights(rows);
  },
  ["community-spotlights-v2"],
  { revalidate: ONE_DAY }
);

/**
 * Comunidades con obra propia, agrupadas.
 *
 * Devuelve TODAS las comunidades ilustradas (48 hoy), cada una con hasta
 * `perCommunity` mitos, ordenadas por cuántos relatos ilustrados tienen. Quién
 * llega a la portada lo decide la página con el motor de rotación — aquí no se
 * recorta, para que haya de dónde rotar.
 *
 * Acepta la forma vieja `(limit, seed)` por compatibilidad; `limit` recorta
 * cuántas comunidades vuelven.
 */
export async function getCommunitySpotlights(options = {}, legacySeed = 0) {
  const config =
    typeof options === "number"
      ? { limit: options, seed: legacySeed }
      : options || {};
  const { seed = 0, perCommunity = 4, limit = 0 } = config;

  try {
    const grouped = await getCommunitySpotlightsCached(
      toSqlSeed(seed),
      clampNumber(perCommunity, 1, 12, 4)
    );
    return limit > 0 ? grouped.slice(0, limit) : grouped;
  } catch (error) {
    console.error("Error in getCommunitySpotlights:", error);
    return [];
  }
}
/* ------------------------------------------------------------------ *
 * El pozo del home y los candidatos de «Barajar»
 * ------------------------------------------------------------------ */

/* Columnas mínimas de una tarjeta. Nada de `content`: son 596 relatos largos y
   el home sólo pinta título, bajada y obra. */
const CARD_COLUMNS_PG = `
  myths.id,
  myths.title,
  myths.slug,
  myths.excerpt,
  myths.image_url,
  regions.name AS region,
  regions.slug AS region_slug,
  communities.name AS community,
  communities.slug AS community_slug
`;

/**
 * El pozo del que salen portada, mesa y mapa.
 *
 * UNA consulta. Reparte por región con `ROW_NUMBER() OVER (PARTITION BY region)`
 * y se queda con `perRegion` de cada una, así que las seis regiones entran al
 * pozo con el mismo peso y el reparto fino lo hace `partitionSections` en JS.
 * Con `perRegion = 20` son ~111 filas (Orinoquía tiene 34 y Varios 11).
 *
 * Sustituye al par `getFeaturedMythsWithImages(28) + getDiverseMyths(24)` que la
 * home concatenaba en un pozo único con un cursor `take(n)`: el cursor sólo
 * llegaba al elemento 16, así que las 24 filas de `getDiverseMyths` —la única
 * consulta equilibrada— se traían en cada render y NO podían llegar a la página.
 */
async function getRotatingMythPoolPostgres({ seed = 0, perRegion = 20 } = {}) {
  const sql = getSqlClient();

  const result = await sql.query(
    `
    WITH pool AS (
      SELECT
        ${CARD_COLUMNS_PG},
        ROW_NUMBER() OVER (
          PARTITION BY myths.region_id
          ORDER BY ${seededOrderSql("myths", "$1")}, myths.id
        ) AS rn
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.image_url IS NOT NULL
    )
    SELECT id, title, slug, excerpt, image_url, region, region_slug, community, community_slug
    FROM pool
    WHERE rn <= $2
    `,
    [toSqlSeed(seed), clampNumber(perRegion, 1, 60, 20)]
  );

  return result.rows;
}

function getRotatingMythPoolSqlite({ seed = 0, perRegion = 20 } = {}) {
  const db = getSqliteDb();

  return db
    .prepare(
      `
      WITH pool AS (
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug,
          ROW_NUMBER() OVER (
            PARTITION BY myths.region_id
            ORDER BY ${seededOrderSql("myths", ":seed", "")}, myths.id
          ) AS rn
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE myths.image_url IS NOT NULL
      )
      SELECT id, title, slug, excerpt, image_url, region, region_slug, community, community_slug
      FROM pool
      WHERE rn <= :perRegion
    `
    )
    .all({ seed: toSqlSeed(seed), perRegion: clampNumber(perRegion, 1, 60, 20) });
}

const getRotatingMythPoolCached = unstable_cache(
  async (seed, perRegion) => {
    if (isPostgres()) {
      return await withRetry(() => getRotatingMythPoolPostgres({ seed, perRegion }));
    }
    return getRotatingMythPoolSqlite({ seed, perRegion });
  },
  ["home-rotation-pool"],
  { revalidate: ONE_DAY }
);

export async function getRotatingMythPool({ seed = 0, perRegion = 20 } = {}) {
  try {
    return await getRotatingMythPoolCached(
      toSqlSeed(seed),
      clampNumber(perRegion, 1, 60, 20)
    );
  } catch (error) {
    console.error("Error in getRotatingMythPool:", error);
    return [];
  }
}

/**
 * Candidatos para «Barajar la mesa» (`/api/mesa`).
 *
 * UNA consulta que ya trae las etiquetas de cada mito, para que el endpoint no
 * tenga que ir dos veces a Neon. Filtra por tema (slug de etiqueta) y descarta
 * los mitos que el cliente ya tiene en pantalla.
 *
 * A propósito NO pasa por `unstable_cache`: la lista de exclusiones viene del
 * cliente y sería una clave de caché sin techo. La consulta cuesta ~80 ms sobre
 * 596 filas y la respuesta la cachea el CDN por URL (`s-maxage`).
 */
async function getMesaCandidatesPostgres({ seed = 0, perRegion = 8, exclude = [], tag = null } = {}) {
  const sql = getSqlClient();

  const result = await sql.query(
    `
    WITH pool AS (
      SELECT
        ${CARD_COLUMNS_PG},
        ROW_NUMBER() OVER (
          PARTITION BY myths.region_id
          ORDER BY ${seededOrderSql("myths", "$1")}, myths.id
        ) AS rn
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.image_url IS NOT NULL
        AND ($3::text[] IS NULL OR NOT (myths.slug = ANY($3)))
        AND ($4::text IS NULL OR EXISTS (
          SELECT 1
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = myths.id AND tags.slug = $4
        ))
    )
    SELECT
      pool.id, pool.title, pool.slug, pool.excerpt, pool.image_url,
      pool.region, pool.region_slug, pool.community, pool.community_slug,
      COALESCE((
        SELECT json_agg(json_build_object('name', tags.name, 'slug', tags.slug))
        FROM myth_tags
        JOIN tags ON tags.id = myth_tags.tag_id
        WHERE myth_tags.myth_id = pool.id
      ), '[]'::json) AS tags
    FROM pool
    WHERE pool.rn <= $2
    `,
    [
      toSqlSeed(seed),
      clampNumber(perRegion, 1, 40, 8),
      exclude.length ? exclude : null,
      tag || null,
    ]
  );

  return result.rows.map((row) => ({
    ...row,
    tags: Array.isArray(row.tags) ? row.tags : parseJsonArray(row.tags),
  }));
}

function getMesaCandidatesSqlite({ seed = 0, perRegion = 8, exclude = [], tag = null } = {}) {
  const db = getSqliteDb();
  const params = {
    seed: toSqlSeed(seed),
    perRegion: clampNumber(perRegion, 1, 40, 8),
    tag: tag || null,
  };
  const excludeList = exclude.map((slug, index) => {
    params[`ex${index}`] = slug;
    return `:ex${index}`;
  });
  const excludeClause = excludeList.length
    ? `AND myths.slug NOT IN (${excludeList.join(", ")})`
    : "";

  const rows = db
    .prepare(
      `
      WITH pool AS (
        SELECT
          myths.id, myths.title, myths.slug, myths.excerpt, myths.image_url,
          regions.name AS region, regions.slug AS region_slug,
          communities.name AS community, communities.slug AS community_slug,
          ROW_NUMBER() OVER (
            PARTITION BY myths.region_id
            ORDER BY ${seededOrderSql("myths", ":seed", "")}, myths.id
          ) AS rn
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE myths.image_url IS NOT NULL
          ${excludeClause}
          AND (:tag IS NULL OR EXISTS (
            SELECT 1
            FROM myth_tags
            JOIN tags ON tags.id = myth_tags.tag_id
            WHERE myth_tags.myth_id = myths.id AND tags.slug = :tag
          ))
      )
      SELECT
        pool.id, pool.title, pool.slug, pool.excerpt, pool.image_url,
        pool.region, pool.region_slug, pool.community, pool.community_slug,
        (
          SELECT group_concat(tags.name || '|' || tags.slug, '::')
          FROM myth_tags
          JOIN tags ON tags.id = myth_tags.tag_id
          WHERE myth_tags.myth_id = pool.id
        ) AS tags_joined
      FROM pool
      WHERE pool.rn <= :perRegion
    `
    )
    .all(params);

  return rows.map((row) => ({
    ...row,
    tags: String(row.tags_joined || "")
      .split("::")
      .filter(Boolean)
      .map((entry) => {
        const [name, slug] = entry.split("|");
        return { name, slug };
      }),
  }));
}

export async function getMesaCandidates({
  seed = 0,
  perRegion = 8,
  exclude = [],
  tag = null,
} = {}) {
  const clean = [...new Set((exclude || []).filter(Boolean))].slice(0, 40);
  try {
    if (isPostgres()) {
      return await withRetry(() =>
        getMesaCandidatesPostgres({ seed, perRegion, exclude: clean, tag })
      );
    }
    return getMesaCandidatesSqlite({ seed, perRegion, exclude: clean, tag });
  } catch (error) {
    console.error("Error in getMesaCandidates:", error);
    return [];
  }
}
// Get diverse myths from different regions for home page
async function getDiverseMythsPostgres(limit = 9, seed = 0) {
  const sql = getSqlClient();

  try {
    // Get myths distributed across regions, prioritize those with images
    const result = await sql.query(
      `
      WITH ranked_myths AS (
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.image_url,
          myths.category_path,
          communities.name AS community,
          communities.slug AS community_slug,
          regions.name AS region,
          regions.slug AS region_slug,
          ROW_NUMBER() OVER (
            PARTITION BY regions.id
            ORDER BY
              CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
              ${seededOrderSql("myths", "$1")}
          ) as rn
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
      )
      SELECT
        id, title, slug, excerpt, image_url, category_path,
        community, community_slug, region, region_slug
      FROM ranked_myths
      WHERE rn <= 2
      ORDER BY
        CASE WHEN image_url IS NOT NULL THEN 0 ELSE 1 END,
        ${seededOrderSql("ranked_myths", "$1")}
      LIMIT $2
      `,
      [toSqlSeed(seed), limit]
    );

    return result.rows;
  } catch (error) {
    console.error("Error getting diverse myths:", error);
    return [];
  }
}

function getDiverseMythsSqlite(limit = 9, seed = 0) {
  const db = getSqliteDb();

  try {
    // Simplified version for SQLite - get diverse myths across regions
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.image_url,
        myths.category_path,
        communities.name AS community,
        communities.slug AS community_slug,
        regions.name AS region,
        regions.slug AS region_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        ${seededOrderSql("myths", ":seed", "")}
      LIMIT :limit
    `;

    return db.prepare(sql).all({ seed: toSqlSeed(seed), limit });
  } catch (error) {
    console.error("Error getting diverse myths (SQLite):", error);
    return [];
  }
}

const getDiverseMythsCached = unstable_cache(
  async (limit = 9, seed = 0) => {
    if (isPostgres()) {
      return await getDiverseMythsPostgres(limit, seed);
    }
    return getDiverseMythsSqlite(limit, seed);
  },
  ["diverse-myths"],
  { revalidate: ONE_DAY }
);

export async function getDiverseMyths(limit = 9, seed = 0) {
  try {
    return await getDiverseMythsCached(limit, seed);
  } catch (error) {
    console.error("Error in getDiverseMyths:", error);
    return [];
  }
}

// Get home page stats
async function getHomeStatsPostgres() {
  const sql = getSqlClient();

  try {
    const result = await sql.query(`
      SELECT
        (SELECT COUNT(*) FROM myths) as total_myths,
        (SELECT COUNT(*) FROM regions) as total_regions,
        (SELECT COUNT(*) FROM myths WHERE image_url IS NOT NULL) as myths_with_images,
        (SELECT COUNT(*) FROM tags) as total_tags
    `);

    return result.rows[0];
  } catch (error) {
    console.error("Error getting home stats:", error);
    return {
      total_myths: 0,
      total_regions: 0,
      myths_with_images: 0,
      total_tags: 0
    };
  }
}

function getHomeStatsSqlite() {
  const db = getSqliteDb();

  try {
    const result = db
      .prepare(
        `
        SELECT
          (SELECT COUNT(*) FROM myths) as total_myths,
          (SELECT COUNT(*) FROM regions) as total_regions,
          (SELECT COUNT(*) FROM myths WHERE image_url IS NOT NULL) as myths_with_images,
          (SELECT COUNT(*) FROM tags) as total_tags
      `
      )
      .get();

    return result;
  } catch (error) {
    console.error("Error getting home stats (SQLite):", error);
    return {
      total_myths: 0,
      total_regions: 0,
      myths_with_images: 0,
      total_tags: 0
    };
  }
}

const getHomeStatsCached = unstable_cache(
  async () => {
    if (isPostgres()) {
      return await getHomeStatsPostgres();
    }
    return getHomeStatsSqlite();
  },
  ["home-stats"],
  { revalidate: ONE_HOUR }
);

export async function getHomeStats() {
  try {
    return await getHomeStatsCached();
  } catch (error) {
    console.error("Error in getHomeStats:", error);
    return {
      total_myths: 0,
      total_regions: 0,
      myths_with_images: 0,
      total_tags: 0
    };
  }
}

async function getSourceCoverageStatsPostgres() {
  const sql = getSqlClient();
  const result = await sql.query(`
    SELECT
      (SELECT COUNT(*)::int FROM myths) AS total_myths,
      COUNT(*) FILTER (
        WHERE NULLIF(TRIM(em.sources_json), '') IS NOT NULL
          AND em.sources_json NOT IN ('[]', 'null')
      )::int AS myths_with_sources,
      COUNT(*) FILTER (
        WHERE NULLIF(TRIM(em.key_sources_json), '') IS NOT NULL
          AND em.key_sources_json NOT IN ('[]', 'null')
      )::int AS myths_with_key_sources
    FROM editorial_myths em
  `);
  return result.rows?.[0] || {};
}

function getSourceCoverageStatsSqlite() {
  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        (SELECT COUNT(*) FROM myths) AS total_myths,
        SUM(
          CASE WHEN NULLIF(TRIM(sources_json), '') IS NOT NULL
            AND sources_json NOT IN ('[]', 'null') THEN 1 ELSE 0 END
        ) AS myths_with_sources,
        SUM(
          CASE WHEN NULLIF(TRIM(key_sources_json), '') IS NOT NULL
            AND key_sources_json NOT IN ('[]', 'null') THEN 1 ELSE 0 END
        ) AS myths_with_key_sources
      FROM editorial_myths
    `
    )
    .get();
}

const getSourceCoverageStatsCached = unstable_cache(
  async () => {
    if (isPostgres()) return getSourceCoverageStatsPostgres();
    return getSourceCoverageStatsSqlite();
  },
  ["source-coverage-stats"],
  { revalidate: ONE_HOUR, tags: ["myth"] }
);

export async function getSourceCoverageStats() {
  try {
    const row = await getSourceCoverageStatsCached();
    return {
      totalMyths: Number(row?.total_myths || 0),
      mythsWithSources: Number(row?.myths_with_sources || 0),
      mythsWithKeySources: Number(row?.myths_with_key_sources || 0),
    };
  } catch (error) {
    console.error("[MYTHS] Source coverage stats unavailable:", error);
    return { totalMyths: 0, mythsWithSources: 0, mythsWithKeySources: 0 };
  }
}

// Most recent myth content change, used as a STABLE <lastmod> for the sitemap
// index and taxonomy sitemap. Using `new Date()` there made lastmod change on
// every (hourly) regeneration even when nothing changed, which trains Google to
// distrust the signal. MAX(updated_at) only moves when a myth is added/edited.
async function getContentLastModifiedPostgres() {
  const sql = getSqlClient();
  const result = await sql.query(
    "SELECT MAX(updated_at) AS max FROM myths WHERE slug IS NOT NULL AND slug != ''"
  );
  return result.rows?.[0]?.max || null;
}

function getContentLastModifiedSqlite() {
  const db = getSqliteDb();
  return (
    db
      .prepare(
        "SELECT MAX(updated_at) AS max FROM myths WHERE slug IS NOT NULL AND slug != ''"
      )
      .get()?.max || null
  );
}

const getContentLastModifiedCached = unstable_cache(
  async () => {
    try {
      if (isPostgres()) {
        return await getContentLastModifiedPostgres();
      }
      return getContentLastModifiedSqlite();
    } catch (error) {
      console.error("[MYTHS] getContentLastModified failed:", error);
      return null;
    }
  },
  ["content-last-modified"],
  { revalidate: ONE_HOUR, tags: ["myth"] }
);

export async function getContentLastModified() {
  try {
    return await getContentLastModifiedCached();
  } catch (error) {
    console.error("[MYTHS] getContentLastModified error:", error);
    return null;
  }
}

export async function listAllMythSlugs() {
  try {
    if (isPostgres()) {
      const sql = getSqlClient();
      const result = await withRetry(() =>
        sql.query(
          "SELECT slug FROM myths WHERE slug IS NOT NULL AND slug != '' ORDER BY id ASC"
        )
      );
      return (result.rows || []).map((row) => row.slug);
    }
    const db = getSqliteDb();
    return db
      .prepare(
        "SELECT slug FROM myths WHERE slug IS NOT NULL AND slug != '' ORDER BY id ASC"
      )
      .all()
      .map((row) => row.slug);
  } catch (error) {
    console.error("Error in listAllMythSlugs:", error);
    if (isStaticDataBuild()) {
      throw error;
    }
    return [];
  }
}
