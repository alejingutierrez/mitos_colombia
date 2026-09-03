import { unstable_cache } from "next/cache";
import { RUTAS } from "../../content/rutas/index.mjs";
import { buildLabelIndex, normalizeRutas } from "../../content/rutas/model.mjs";
import { getSqlClient, getSqliteDb, isPostgres } from "./db";

const ONE_DAY = 60 * 60 * 24;

/**
 * Rutas editoriales.
 *
 * Las rutas se escriben a mano en `content/rutas/<slug>.mjs` y se declaran en
 * `content/rutas/index.mjs`; el contrato del objeto está documentado en
 * `content/rutas/model.mjs`. Aquí sólo se normalizan y se resuelven contra la
 * base de datos.
 *
 * La pertenencia de un mito a una ruta se declara por SLUG. Antes se declaraba
 * por título en español y se resolvía con coincidencia difusa: corregir el
 * título de un mito bastaba para que su ruta lo perdiera sin avisar.
 *
 * Todo lo que exportaba la versión anterior sigue exportado y funcionando; lo
 * marcado como «heredado» existe sólo para no romper las páginas actuales.
 */
export const ROUTES = normalizeRutas(RUTAS);

const ROUTES_BY_SLUG = new Map(ROUTES.map((route) => [route.slug, route]));

const { index: LABEL_TO_SLUG, normalizeLabel } = buildLabelIndex(ROUTES);

const ALL_ROUTE_MYTH_SLUGS = new Set(
  ROUTES.flatMap((route) => route.mythSlugs)
);

const ACCENT_STYLES = {
  river: {
    badge: "border-river-500/30 bg-river-500/10 text-river-600",
    text: "text-river-600",
    glow: "bg-river-500/25",
  },
  jungle: {
    badge: "border-jungle-500/30 bg-jungle-500/10 text-jungle-600",
    text: "text-jungle-600",
    glow: "bg-jungle-500/25",
  },
  ember: {
    badge: "border-ember-400/30 bg-ember-400/10 text-ember-600",
    text: "text-ember-600",
    glow: "bg-ember-400/30",
  },
  ink: {
    badge: "border-ink-500/30 bg-ink-500/10 text-ink-700",
    text: "text-ink-700",
    glow: "bg-ink-500/25",
  },
};

export function getAccentStyles(accent) {
  return ACCENT_STYLES[accent] || ACCENT_STYLES.river;
}

export function getRouteBySlug(slug) {
  return ROUTES_BY_SLUG.get(String(slug || "").trim()) || undefined;
}

export function getRouteSlugs() {
  return ROUTES.map((route) => route.slug);
}

export function isRouteSlug(slug) {
  return ROUTES_BY_SLUG.has(String(slug || "").trim());
}

/** Slugs de los mitos de una ruta, en orden de lectura. */
export function getRouteMythSlugs(routeOrSlug) {
  const route =
    typeof routeOrSlug === "string" ? getRouteBySlug(routeOrSlug) : routeOrSlug;
  return route?.mythSlugs ? [...route.mythSlugs] : [];
}

/**
 * Traduce una etiqueta de curaduría (o un slug) al slug real del mito.
 * Devuelve null si la ruta no lo declara: no adivina.
 */
export function resolveRouteMythSlug(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  if (ALL_ROUTE_MYTH_SLUGS.has(raw)) return raw;
  return LABEL_TO_SLUG.get(normalizeLabel(raw)) || null;
}

/* ------------------------------------------------------------------------ *
 * Consultas
 * ------------------------------------------------------------------------ */

const MYTH_COLUMNS = `
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          myths.image_url,
          myths.square_image_url`;

const MYTH_JOINS = `
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id`;

const MYTH_TAXONOMY = `
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug`;

async function getMythsBySlugsPostgres(slugs = []) {
  if (!slugs.length) {
    return [];
  }
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
        SELECT
${MYTH_COLUMNS},
          vi.image_url AS vertical_image_url,
${MYTH_TAXONOMY}
${MYTH_JOINS}
        LEFT JOIN LATERAL (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
            AND COALESCE(updated_at, created_at) >=
              COALESCE(myths.updated_at, updated_at, created_at)
          ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
          LIMIT 1
        ) vi ON true
        WHERE myths.slug = ANY($1)
        ORDER BY array_position($1, myths.slug)
      `,
      [slugs]
    );
    return result.rows;
  } catch (error) {
    console.error("[routes] fallback: myths by slugs without vertical_images", error);
    const result = await sql.query(
      `
        SELECT
${MYTH_COLUMNS},
${MYTH_TAXONOMY}
${MYTH_JOINS}
        WHERE myths.slug = ANY($1)
        ORDER BY array_position($1, myths.slug)
      `,
      [slugs]
    );
    return result.rows;
  }
}

function getMythsBySlugsSqlite(slugs = []) {
  if (!slugs.length) {
    return [];
  }
  const db = getSqliteDb();
  const placeholders = slugs.map(() => "?").join(", ");
  const orderCases = slugs.map(() => "WHEN ? THEN ?").join(" ");
  const orderParams = slugs.flatMap((slug, index) => [slug, index]);

  try {
    const sql = `
      SELECT
${MYTH_COLUMNS},
        (
          SELECT image_url
          FROM vertical_images vi
          WHERE vi.entity_type = 'myth' AND vi.entity_id = myths.id
            AND datetime(COALESCE(vi.updated_at, vi.created_at)) >=
              datetime(COALESCE(myths.updated_at, vi.updated_at, vi.created_at))
          ORDER BY vi.updated_at DESC, vi.created_at DESC
          LIMIT 1
        ) AS vertical_image_url,
${MYTH_TAXONOMY}
${MYTH_JOINS}
      WHERE myths.slug IN (${placeholders})
      ORDER BY CASE myths.slug ${orderCases} ELSE ${slugs.length} END
    `;

    return db.prepare(sql).all(...slugs, ...orderParams);
  } catch (error) {
    console.error("[routes] fallback: myths by slugs without vertical_images", error);
    const sql = `
      SELECT
${MYTH_COLUMNS},
${MYTH_TAXONOMY}
${MYTH_JOINS}
      WHERE myths.slug IN (${placeholders})
      ORDER BY CASE myths.slug ${orderCases} ELSE ${slugs.length} END
    `;
    return db.prepare(sql).all(...slugs, ...orderParams);
  }
}

/** Filas crudas de mitos, en el orden en que se pidieron los slugs. */
export async function getMythsBySlugs(slugs = []) {
  const unique = Array.from(
    new Set((slugs || []).map((slug) => String(slug || "").trim()).filter(Boolean))
  );
  if (!unique.length) return [];
  if (isPostgres()) {
    return getMythsBySlugsPostgres(unique);
  }
  return getMythsBySlugsSqlite(unique);
}

/**
 * Forma con la que las páginas consumen un mito de una ruta. Lleva las dos
 * convenciones a propósito: `image_url` y compañía para los componentes que ya
 * existen (y para `withMythImageVariants`), y camelCase para lo nuevo.
 */
function shapeMyth(row, entry) {
  if (!row) return null;
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    region: row.region,
    regionSlug: row.region_slug,
    community: row.community,
    communitySlug: row.community_slug,
    categoryPath: row.category_path,
    imageUrl: row.image_url || null,
    verticalImageUrl: row.vertical_image_url || null,
    squareImageUrl: row.square_image_url || null,
    href: `/mitos/${row.slug}`,
    label: entry?.label || row.title,
    featured: Boolean(entry?.featured),
    note: entry?.note || null,
    /* compatibilidad con los componentes actuales */
    image_url: row.image_url || null,
    vertical_image_url: row.vertical_image_url || null,
    square_image_url: row.square_image_url || null,
    region_slug: row.region_slug,
    community_slug: row.community_slug,
    category_path: row.category_path,
  };
}

/**
 * Resuelve varias rutas con sus mitos en UNA sola consulta.
 *
 * @param {string[]|undefined} slugs rutas a resolver; sin argumento, todas.
 * @returns {Promise<Array>} rutas normalizadas con `myths`, `momentos[].myths`,
 *   `cover` y `looseMyths` ya resueltos a objetos de mito.
 */
export async function getRoutesWithMyths(slugs) {
  const routes = Array.isArray(slugs)
    ? slugs.map((slug) => getRouteBySlug(slug)).filter(Boolean)
    : ROUTES;

  if (!routes.length) return [];

  const wanted = Array.from(new Set(routes.flatMap((route) => route.mythSlugs)));
  const rows = await getMythsBySlugs(wanted);
  const bySlug = new Map(rows.map((row) => [row.slug, row]));

  return routes.map((route) => {
    const resolved = new Map();
    route.myths.forEach((entry) => {
      const myth = shapeMyth(bySlug.get(entry.slug), entry);
      if (myth) resolved.set(entry.slug, myth);
    });

    const myths = route.mythSlugs
      .map((slug) => resolved.get(slug))
      .filter(Boolean);
    const missingMythSlugs = route.mythSlugs.filter(
      (slug) => !resolved.has(slug)
    );

    return {
      ...route,
      myths,
      missingMythSlugs,
      cover: resolved.get(route.cover) || myths[0] || null,
      coverSlug: route.cover,
      featuredMyths: myths.filter((myth) => myth.featured),
      looseMyths: route.looseMythSlugs
        .map((slug) => resolved.get(slug))
        .filter(Boolean),
      momentos: route.momentos.map((momento) => ({
        ...momento,
        myths: momento.myths.map((slug) => resolved.get(slug)).filter(Boolean),
      })),
    };
  });
}

/** Una ruta con sus mitos resueltos, en una sola consulta. `null` si no existe. */
export async function getRouteWithMyths(routeOrSlug) {
  const slug =
    typeof routeOrSlug === "string" ? routeOrSlug : routeOrSlug?.slug;
  if (!slug || !isRouteSlug(slug)) return null;
  const [resolved] = await getRoutesWithMyths([slug]);
  return resolved || null;
}

/* ------------------------------------------------------------------------ *
 * Portadas de /rutas y de la home
 * ------------------------------------------------------------------------ */

function pickPreview(route) {
  const withArt = route.myths.filter((myth) => myth.image_url);
  return (
    (route.cover?.image_url ? route.cover : null) ||
    route.featuredMyths.find((myth) => myth.image_url) ||
    withArt[0] ||
    route.cover ||
    route.myths[0] ||
    null
  );
}

const getRoutePreviewsCached = unstable_cache(
  async () => {
    const resolved = await getRoutesWithMyths();
    return resolved.map((route) => ({
      ...route,
      preview: pickPreview(route),
    }));
  },
  // v2: la clave cambió al pasar de títulos difusos a slugs. Sin bump, Next
  // seguiría sirviendo durante un día el objeto viejo, sin `myths`.
  ["route-previews-v2"],
  { revalidate: ONE_DAY }
);

/**
 * Rutas con su obra de portada resuelta. `seed` se conserva por compatibilidad
 * de firma: el binding ya no es aleatorio, así que no altera el resultado.
 */
export async function getRoutePreviews() {
  return getRoutePreviewsCached();
}

/** Imagen para Open Graph: la portada de la ruta, o el primer mito con arte. */
export async function getRouteOgImage(input) {
  const slugs = [];

  if (typeof input === "string") {
    const route = getRouteBySlug(input);
    if (route) {
      slugs.push(route.cover, ...route.mythSlugs);
    }
  } else if (Array.isArray(input)) {
    input.forEach((item) => {
      const slug = resolveRouteMythSlug(item);
      if (slug) slugs.push(slug);
    });
  }

  const ordered = Array.from(new Set(slugs.filter(Boolean)));
  if (!ordered.length) return null;

  const rows = await getMythsBySlugs(ordered);
  const withArt = rows.find((row) => row.image_url && row.image_url.trim());
  return withArt?.image_url || null;
}

/* ------------------------------------------------------------------------ *
 * Heredado
 *
 * Lo que sigue existe para que las páginas que todavía piden mitos «por
 * título» no se rompan. Ya no adivinan: primero traducen la etiqueta a slug
 * con el censo de las rutas, y sólo caen a la búsqueda difusa cuando la
 * etiqueta no pertenece a ninguna ruta. Código nuevo: usa
 * `getRouteWithMyths()`.
 * ------------------------------------------------------------------------ */

function normalizeInput(value) {
  if (!value) {
    return null;
  }
  const trimmed = String(value).trim().toLowerCase();
  return trimmed.length ? trimmed : null;
}

function stripDiacritics(value) {
  if (!value) {
    return "";
  }
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeTitle(value) {
  if (!value) {
    return "";
  }
  const cleaned = stripDiacritics(String(value).toLowerCase());
  return cleaned.replace(/[^a-z0-9]+/g, " ").trim();
}

function scoreTitleMatch(requestedTitle, candidateTitle) {
  const requested = normalizeTitle(requestedTitle);
  const candidate = normalizeTitle(candidateTitle);

  if (!requested || !candidate) {
    return 0;
  }
  if (requested === candidate) {
    return 100;
  }

  let score = 0;
  if (candidate.includes(requested) || requested.includes(candidate)) {
    score += 50;
  }

  const requestedTokens = requested.split(" ").filter(Boolean);
  const candidateTokens = new Set(candidate.split(" ").filter(Boolean));
  let overlap = 0;
  requestedTokens.forEach((token) => {
    if (candidateTokens.has(token)) {
      overlap += 1;
    }
  });
  score += overlap * 10;

  if (requestedTokens.length) {
    const longest = requestedTokens.reduce(
      (acc, item) => (item.length > acc.length ? item : acc),
      ""
    );
    if (longest && candidate.includes(longest)) {
      score += 5;
    }
  }

  return score;
}

/**
 * Heredado. Empareja títulos con candidatos. Las etiquetas que pertenecen a
 * una ruta se resuelven por slug (exactas); el resto conserva el emparejamiento
 * difuso de siempre.
 */
export function resolveMythsByTitles(titles, candidates = []) {
  const resolved = new Map();
  const used = new Set();
  const bySlug = new Map(
    candidates.filter(Boolean).map((candidate) => [candidate.slug, candidate])
  );
  const pending = [];

  (titles || []).forEach((title) => {
    const slug = resolveRouteMythSlug(title);
    const candidate = slug ? bySlug.get(slug) : null;
    if (candidate) {
      used.add(candidate.slug);
      resolved.set(title, candidate);
      return;
    }
    pending.push(title);
    resolved.set(title, null);
  });

  pending.forEach((title) => {
    let best = null;
    let bestScore = 0;
    candidates.forEach((candidate) => {
      if (!candidate || used.has(candidate.slug)) {
        return;
      }
      const score = scoreTitleMatch(title, candidate.title);
      if (score > bestScore) {
        bestScore = score;
        best = candidate;
      }
    });
    if (best && bestScore > 0) {
      used.add(best.slug);
      resolved.set(title, best);
    }
  });

  return resolved;
}

const TITLE_STOPWORDS = new Set([
  "el",
  "la",
  "los",
  "las",
  "del",
  "de",
  "y",
  "en",
  "al",
  "un",
  "una",
  "unos",
  "unas",
  "por",
  "para",
  "con",
]);

function getTitleTokens(value) {
  return normalizeTitle(value)
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !TITLE_STOPWORDS.has(token));
}

function buildTitlePatterns(titles = []) {
  const patterns = new Set();

  titles
    .map((item) => (item ? String(item).trim() : ""))
    .filter(Boolean)
    .forEach((title) => {
      const noParens = title.replace(/\([^)]*\)/g, " ").trim();
      const noPunct = title.replace(/[^A-Za-z0-9\u00C0-\u017F]+/g, " ").trim();
      const normalized = normalizeTitle(title);
      const tokens = getTitleTokens(title);
      const compact = tokens.join(" ").trim();

      [title, noParens, noPunct, normalized, compact]
        .filter(Boolean)
        .forEach((candidate) => {
          const trimmed = candidate.trim();
          if (trimmed.length >= 4 && !TITLE_STOPWORDS.has(trimmed)) {
            patterns.add(trimmed);
          }
        });

      if (tokens.length) {
        const longest = tokens.reduce(
          (acc, item) => (item.length > acc.length ? item : acc),
          ""
        );
        if (longest.length >= 4) {
          patterns.add(longest);
        }
        if (tokens.length >= 2) {
          patterns.add(tokens.slice(0, 2).join(" "));
        }
        if (tokens.length >= 3) {
          patterns.add(tokens.slice(0, 3).join(" "));
        }
      }
    });

  return Array.from(patterns);
}

function buildTitleWhereSqlite(patterns = []) {
  const clauses = [];
  const params = {};

  patterns
    .map((item) => (item ? String(item).trim().toLowerCase() : ""))
    .filter(Boolean)
    .forEach((pattern, index) => {
      const key = `t${index}`;
      params[key] = `%${pattern}%`;
      clauses.push(
        `(
          lower(myths.title) LIKE :${key} OR
          lower(myths.tags_raw) LIKE :${key} OR
          lower(myths.focus_keywords_raw) LIKE :${key} OR
          lower(myths.category_path) LIKE :${key}
        )`
      );
    });

  return {
    whereClause: clauses.length ? `WHERE ${clauses.join(" OR ")}` : "",
    params,
  };
}

async function getMythsByFuzzyTitlesPostgres(titles = []) {
  const patterns = buildTitlePatterns(titles).map((pattern) => `%${pattern}%`);
  if (!patterns.length) {
    return [];
  }
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
        SELECT
${MYTH_COLUMNS},
          vi.image_url AS vertical_image_url,
${MYTH_TAXONOMY}
${MYTH_JOINS}
        LEFT JOIN LATERAL (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
            AND COALESCE(updated_at, created_at) >=
              COALESCE(myths.updated_at, updated_at, created_at)
          ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
          LIMIT 1
        ) vi ON true
        WHERE
          myths.title ILIKE ANY($1) OR
          myths.tags_raw ILIKE ANY($1) OR
          myths.focus_keywords_raw ILIKE ANY($1) OR
          myths.category_path ILIKE ANY($1)
      `,
      [patterns]
    );
    return result.rows;
  } catch (error) {
    console.error("[routes] fallback: myths by titles without vertical_images", error);
    const result = await sql.query(
      `
        SELECT
${MYTH_COLUMNS},
${MYTH_TAXONOMY}
${MYTH_JOINS}
        WHERE
          myths.title ILIKE ANY($1) OR
          myths.tags_raw ILIKE ANY($1) OR
          myths.focus_keywords_raw ILIKE ANY($1) OR
          myths.category_path ILIKE ANY($1)
      `,
      [patterns]
    );
    return result.rows;
  }
}

function getMythsByFuzzyTitlesSqlite(titles = []) {
  const patterns = buildTitlePatterns(titles);
  if (!patterns.length) {
    return [];
  }
  const db = getSqliteDb();
  const { whereClause, params } = buildTitleWhereSqlite(patterns);

  try {
    const sql = `
      SELECT
${MYTH_COLUMNS},
        (
          SELECT image_url
          FROM vertical_images vi
          WHERE vi.entity_type = 'myth' AND vi.entity_id = myths.id
            AND datetime(COALESCE(vi.updated_at, vi.created_at)) >=
              datetime(COALESCE(myths.updated_at, vi.updated_at, vi.created_at))
          ORDER BY vi.updated_at DESC, vi.created_at DESC
          LIMIT 1
        ) AS vertical_image_url,
${MYTH_TAXONOMY}
${MYTH_JOINS}
      ${whereClause}
    `;
    return db.prepare(sql).all(params);
  } catch (error) {
    console.error("[routes] fallback: myths by titles without vertical_images", error);
    const sql = `
      SELECT
${MYTH_COLUMNS},
${MYTH_TAXONOMY}
${MYTH_JOINS}
      ${whereClause}
    `;
    return db.prepare(sql).all(params);
  }
}

/**
 * Heredado. Devuelve los mitos correspondientes a una lista de etiquetas.
 * Las que pertenecen a una ruta se piden por slug; las demás caen a la
 * búsqueda difusa de siempre.
 */
export async function getMythsByTitles(titles = []) {
  const list = (titles || []).filter(Boolean);
  if (!list.length) return [];

  const slugs = [];
  const leftovers = [];
  list.forEach((title) => {
    const slug = resolveRouteMythSlug(title);
    if (slug) slugs.push(slug);
    else leftovers.push(title);
  });

  const [bySlug, byFuzzy] = await Promise.all([
    slugs.length ? getMythsBySlugs(slugs) : Promise.resolve([]),
    leftovers.length
      ? isPostgres()
        ? getMythsByFuzzyTitlesPostgres(leftovers)
        : Promise.resolve(getMythsByFuzzyTitlesSqlite(leftovers))
      : Promise.resolve([]),
  ]);

  const merged = new Map();
  [...bySlug, ...byFuzzy].forEach((row) => {
    if (row?.slug && !merged.has(row.slug)) merged.set(row.slug, row);
  });
  return Array.from(merged.values());
}

/* ------------------------------------------------------------------------ *
 * Búsqueda por palabra clave
 *
 * Ya no la usa ninguna ruta —todas declaran sus mitos— pero se conserva como
 * herramienta para explorar el archivo al componer una ruta nueva.
 * ------------------------------------------------------------------------ */

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

function buildKeywordWhereSqlite(keywords = []) {
  const clauses = [];
  const params = {};

  keywords
    .map((item) => normalizeInput(item))
    .filter(Boolean)
    .forEach((term, index) => {
      const key = `q${index}`;
      params[key] = `%${term}%`;
      clauses.push(
        `(
          myths.title LIKE :${key} OR
          myths.excerpt LIKE :${key} OR
          myths.content LIKE :${key} OR
          myths.tags_raw LIKE :${key} OR
          myths.focus_keywords_raw LIKE :${key} OR
          regions.name LIKE :${key} OR
          regions.slug LIKE :${key} OR
          communities.name LIKE :${key} OR
          communities.slug LIKE :${key}
        )`
      );
    });

  return {
    whereClause: clauses.length ? `WHERE ${clauses.join(" OR ")}` : "",
    params,
  };
}

function buildKeywordWherePostgres(keywords = []) {
  const clauses = [];
  const values = [];

  keywords
    .map((item) => normalizeInput(item))
    .filter(Boolean)
    .forEach((term) => {
      values.push(`%${term}%`);
      const idx = values.length;
      clauses.push(
        `(
          myths.title ILIKE $${idx} OR
          myths.excerpt ILIKE $${idx} OR
          myths.content ILIKE $${idx} OR
          myths.tags_raw ILIKE $${idx} OR
          myths.focus_keywords_raw ILIKE $${idx} OR
          regions.name ILIKE $${idx} OR
          regions.slug ILIKE $${idx} OR
          communities.name ILIKE $${idx} OR
          communities.slug ILIKE $${idx}
        )`
      );
    });

  return {
    whereClause: clauses.length ? `WHERE ${clauses.join(" OR ")}` : "",
    values,
  };
}

async function getRouteMythsPostgres({ keywords = [], limit = 12, seed = 0 }) {
  const sql = getSqlClient();
  const { whereClause, values } = buildKeywordWherePostgres(keywords);
  const limitValue = clampNumber(limit, 1, 24, 12);
  const seedValue = Number.isFinite(seed) ? seed : 0;
  const seedIndex = values.length + 1;
  const limitIndex = values.length + 2;

  try {
    const result = await sql.query(
      `
        SELECT
${MYTH_COLUMNS},
          vi.image_url AS vertical_image_url,
${MYTH_TAXONOMY}
${MYTH_JOINS}
        LEFT JOIN LATERAL (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
            AND COALESCE(updated_at, created_at) >=
              COALESCE(myths.updated_at, updated_at, created_at)
          ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
          LIMIT 1
        ) vi ON true
        ${whereClause}
        ORDER BY
          CASE WHEN COALESCE(vi.image_url, myths.image_url) IS NOT NULL THEN 0 ELSE 1 END,
          (myths.id + $${seedIndex}) % 97,
          myths.id
        LIMIT $${limitIndex}
      `,
      [...values, seedValue, limitValue]
    );

    return result.rows;
  } catch (error) {
    console.error("[routes] vertical_images unavailable, fallback to myths.image_url", error);
    const result = await sql.query(
      `
        SELECT
${MYTH_COLUMNS},
${MYTH_TAXONOMY}
${MYTH_JOINS}
        ${whereClause}
        ORDER BY
          CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
          (myths.id + $${seedIndex}) % 97,
          myths.id
        LIMIT $${limitIndex}
      `,
      [...values, seedValue, limitValue]
    );
    return result.rows;
  }
}

function getRouteMythsSqlite({ keywords = [], limit = 12, seed = 0 }) {
  const db = getSqliteDb();
  const { whereClause, params } = buildKeywordWhereSqlite(keywords);
  const limitValue = clampNumber(limit, 1, 24, 12);
  const seedValue = Number.isFinite(seed) ? seed : 0;

  try {
    const sql = `
      SELECT
${MYTH_COLUMNS},
        (
          SELECT image_url
          FROM vertical_images vi
          WHERE vi.entity_type = 'myth' AND vi.entity_id = myths.id
            AND datetime(COALESCE(vi.updated_at, vi.created_at)) >=
              datetime(COALESCE(myths.updated_at, vi.updated_at, vi.created_at))
          ORDER BY vi.updated_at DESC, vi.created_at DESC
          LIMIT 1
        ) AS vertical_image_url,
${MYTH_TAXONOMY}
${MYTH_JOINS}
      ${whereClause}
      ORDER BY
        CASE WHEN image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + :seed) % 97,
        myths.id
      LIMIT :limit
    `;

    return db.prepare(sql).all({ ...params, seed: seedValue, limit: limitValue });
  } catch (error) {
    console.error("[routes] vertical_images unavailable, fallback to myths.image_url", error);
    const sql = `
      SELECT
${MYTH_COLUMNS},
${MYTH_TAXONOMY}
${MYTH_JOINS}
      ${whereClause}
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + :seed) % 97,
        myths.id
      LIMIT :limit
    `;
    return db.prepare(sql).all({ ...params, seed: seedValue, limit: limitValue });
  }
}

export async function getRouteMyths({ keywords = [], limit = 12, seed = 0 } = {}) {
  if (isPostgres()) {
    return getRouteMythsPostgres({ keywords, limit, seed });
  }
  return getRouteMythsSqlite({ keywords, limit, seed });
}
