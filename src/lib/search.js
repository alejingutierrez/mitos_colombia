import { getSqlClient, getSqliteDb, isPostgres } from "./db";
import { filterAllowedCommunities } from "./communityFilters";
import { getTaxonomy } from "./myths";
import {
  SEARCH_WEIGHTS,
  buildSearchTerms,
  normalizeSearchText,
  scoreSearchRow,
} from "./search-terms";

/**
 * El typeahead (`/api/search`).
 *
 * Puntúa en JavaScript sobre un índice en memoria de mitos, territorios,
 * pueblos y temas. Es el HERMANO de la página de resultados (`listMyths` en
 * `lib/myths.js`), que puntúa lo mismo pero en SQL: los dos normalizan con
 * `normalizeSearchText`, expanden con `buildSearchTerms` y suman con
 * `SEARCH_WEIGHTS`, todo desde `lib/search-terms.js`. Antes cada uno tenía su
 * propia idea de qué es relevante —y la página de resultados, de hecho, no
 * tenía ninguna: ordenaba alfabéticamente.
 *
 * Lo único que este camino hace y el otro no es la tolerancia a erratas por
 * distancia de edición: aquí hay ~800 candidatos en memoria y sale barato;
 * en SQL sería una pasada por fila sobre la tabla entera.
 */

const CACHE_TTL_MS = 5 * 60 * 1000;
let cachedCandidates = null;
let cachedAt = 0;

const TYPE_LABELS = {
  myth: "Mito",
  region: "Region",
  community: "Comunidad",
  tag: "Tema",
};

const TYPE_BOOST = {
  myth: 1.2,
  region: 1.1,
  community: 1.05,
  tag: 1.0,
};

/** Por debajo de esto una sugerencia es ruido y no se ofrece. */
const MIN_SUGGESTION_SCORE = 25;
/** A partir de esta longitud vale la pena pagar la distancia de edición. */
const FUZZY_MIN_LENGTH = 4;
const FUZZY_MIN_SIMILARITY = 0.72;

function levenshteinDistance(a, b) {
  if (a === b) return 0;
  const aLen = a.length;
  const bLen = b.length;
  if (!aLen) return bLen;
  if (!bLen) return aLen;

  const row = new Array(bLen + 1).fill(0);
  for (let j = 0; j <= bLen; j += 1) {
    row[j] = j;
  }

  for (let i = 1; i <= aLen; i += 1) {
    let prev = i - 1;
    row[0] = i;
    for (let j = 1; j <= bLen; j += 1) {
      const temp = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
      prev = temp;
    }
  }

  return row[bLen];
}

function similarityScore(a, b) {
  const length = Math.max(a.length, b.length);
  if (!length) return 0;
  const distance = levenshteinDistance(a, b);
  return 1 - distance / length;
}

const MYTH_INDEX_SQL = `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.tags_raw,
          myths.focus_keywords_raw,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
      `;

async function loadMythIndex() {
  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(MYTH_INDEX_SQL);
    return result.rows;
  }

  return getSqliteDb().prepare(MYTH_INDEX_SQL).all();
}

/**
 * Los tres campos que puntúa `scoreSearchRow`, ya normalizados.
 *
 * Son los MISMOS tres que aísla el SQL de la página de resultados (título,
 * metadatos, territorio y pueblo). El cuerpo del relato no está aquí ni allá:
 * ni el índice lo carga ni el orden lo pesa.
 */
function toScorable(title, metaParts, placeParts) {
  return {
    title: normalizeSearchText(title),
    meta: normalizeSearchText(metaParts.filter(Boolean).join(" ")),
    place: normalizeSearchText(placeParts.filter(Boolean).join(" ")),
  };
}

async function getSearchCandidates() {
  const now = Date.now();
  if (cachedCandidates && now - cachedAt < CACHE_TTL_MS) {
    return cachedCandidates;
  }

  const [taxonomy, myths] = await Promise.all([getTaxonomy(), loadMythIndex()]);

  const candidates = [];

  myths.forEach((myth) => {
    const subtitleParts = [myth.region, myth.community].filter(Boolean);
    candidates.push({
      id: `myth-${myth.slug}`,
      type: "myth",
      label: TYPE_LABELS.myth,
      title: myth.title,
      subtitle: subtitleParts.join(" · "),
      href: `/mitos/${myth.slug}`,
      scorable: toScorable(
        myth.title,
        [myth.excerpt, myth.tags_raw, myth.focus_keywords_raw],
        [myth.region, myth.region_slug, myth.community, myth.community_slug]
      ),
    });
  });

  taxonomy.regions.forEach((region) => {
    candidates.push({
      id: `region-${region.slug}`,
      type: "region",
      label: TYPE_LABELS.region,
      title: region.name,
      subtitle: `${region.myth_count || 0} mitos`,
      href: `/regiones/${region.slug}`,
      scorable: toScorable(region.name, [], [region.name, region.slug]),
    });
  });

  const allowedCommunities = filterAllowedCommunities(taxonomy.communities);
  allowedCommunities.forEach((community) => {
    candidates.push({
      id: `community-${community.slug}`,
      type: "community",
      label: TYPE_LABELS.community,
      title: community.name,
      subtitle: community.region ? `Region ${community.region}` : "Comunidad",
      href: `/comunidades/${community.slug}`,
      scorable: toScorable(
        community.name,
        [],
        [community.name, community.slug, community.region]
      ),
    });
  });

  taxonomy.tags.forEach((tag) => {
    candidates.push({
      id: `tag-${tag.slug}`,
      type: "tag",
      label: TYPE_LABELS.tag,
      title: tag.name,
      subtitle: `${tag.myth_count || 0} mitos`,
      href: `/categorias/${tag.slug}`,
      scorable: toScorable(tag.name, [tag.slug], []),
    });
  });

  cachedCandidates = candidates;
  cachedAt = now;
  return candidates;
}

function scoreCandidate(candidate, terms) {
  /* La distancia de edición se suma SIEMPRE, también cuando la puntuación base
     es cero: es la única vía por la que una errata puede llegar a su mito. */
  let score = scoreSearchRow(candidate.scorable, terms);

  const title = candidate.scorable.title;
  if (terms.phrase.length >= FUZZY_MIN_LENGTH && title.length >= FUZZY_MIN_LENGTH) {
    const similarity = similarityScore(title, terms.phrase);
    if (similarity >= FUZZY_MIN_SIMILARITY) {
      score += Math.round(similarity * SEARCH_WEIGHTS.titlePrefix);
    }
  }

  return Math.round(score * (TYPE_BOOST[candidate.type] || 1));
}

/**
 * Sugerencias para el typeahead.
 *
 * @param {string} query lo que lleva escrito la persona
 * @param {number} limit tope de sugerencias (1-12)
 * @returns {Promise<Array<{id,type,label,title,subtitle,href}>>}
 */
export async function getSearchSuggestions(query, limit = 8) {
  const terms = buildSearchTerms(query);
  if (!terms.phrase || terms.phrase.length < 2) {
    return [];
  }

  const candidates = await getSearchCandidates();

  return candidates
    .map((candidate) => ({ candidate, score: scoreCandidate(candidate, terms) }))
    .filter((item) => item.score >= MIN_SUGGESTION_SCORE)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title, "es"))
    .slice(0, Math.max(1, Math.min(limit, 12)))
    .map(({ candidate: { scorable, ...item } }) => item);
}
