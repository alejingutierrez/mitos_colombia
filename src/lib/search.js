import { getSqlClient, getSqliteDb, isPostgres } from "./db";
import { filterAllowedCommunities } from "./communityFilters";
import { getTaxonomy } from "./myths";

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

const SYNONYMS = {
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

function normalizeText(value) {
  if (!value) return "";
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  if (!value) return [];
  return value.split(" ").filter(Boolean);
}

function expandTokens(tokens) {
  const expanded = new Set(tokens);
  tokens.forEach((token) => {
    const synonyms = SYNONYMS[token] || [];
    synonyms.forEach((item) => expanded.add(item));
  });
  return Array.from(expanded);
}

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

async function loadMythIndex() {
  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `
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
      `
    );
    return result.rows;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
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
      `
    )
    .all();
}

async function getSearchCandidates() {
  const now = Date.now();
  if (cachedCandidates && now - cachedAt < CACHE_TTL_MS) {
    return cachedCandidates;
  }

  const [taxonomy, myths] = await Promise.all([
    getTaxonomy(),
    loadMythIndex(),
  ]);

  const candidates = [];

  myths.forEach((myth) => {
    const subtitleParts = [myth.region, myth.community].filter(Boolean);
    const searchText = normalizeText(
      [
        myth.title,
        myth.excerpt,
        myth.tags_raw,
        myth.focus_keywords_raw,
        myth.region,
        myth.community,
      ]
        .filter(Boolean)
        .join(" ")
    );

    candidates.push({
      id: `myth-${myth.slug}`,
      type: "myth",
      label: TYPE_LABELS.myth,
      title: myth.title,
      subtitle: subtitleParts.join(" · "),
      href: `/mitos/${myth.slug}`,
      searchText,
      titleText: normalizeText(myth.title),
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
      searchText: normalizeText(`${region.name} ${region.slug}`),
      titleText: normalizeText(region.name),
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
      searchText: normalizeText(
        `${community.name} ${community.slug} ${community.region || ""}`
      ),
      titleText: normalizeText(community.name),
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
      searchText: normalizeText(`${tag.name} ${tag.slug}`),
      titleText: normalizeText(tag.name),
    });
  });

  cachedCandidates = candidates;
  cachedAt = now;
  return candidates;
}

function scoreCandidate(candidate, query, tokens, expandedTokens) {
  if (!candidate.searchText) return 0;
  const text = candidate.searchText;
  const title = candidate.titleText || "";
  let score = 0;

  if (title === query) score += 140;
  if (text === query) score += 120;

  if (title.startsWith(query)) score += 110;
  if (text.startsWith(query)) score += 90;

  if (title.includes(query)) score += 80;
  if (text.includes(query)) score += 55;

  const tokenMatches = expandedTokens.filter((token) => text.includes(token)).length;
  const titleMatches = expandedTokens.filter((token) => title.includes(token)).length;

  score += tokenMatches * 12;
  score += titleMatches * 18;

  if (tokens.length > 1 && tokens.every((token) => title.includes(token))) {
    score += 60;
  }

  if (query.length >= 4 && title.length >= 4) {
    const similarity = similarityScore(title, query);
    if (similarity >= 0.72) {
      score += Math.round(similarity * 50);
    }
  }

  const boost = TYPE_BOOST[candidate.type] || 1;
  return Math.round(score * boost);
}

export async function getSearchSuggestions(query, limit = 8) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery || normalizedQuery.length < 2) {
    return [];
  }

  const tokens = tokenize(normalizedQuery);
  const expandedTokens = expandTokens(tokens);
  const candidates = await getSearchCandidates();

  const scored = candidates
    .map((candidate) => {
      const score = scoreCandidate(candidate, normalizedQuery, tokens, expandedTokens);
      return { ...candidate, score };
    })
    .filter((item) => item.score >= 40)
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(1, Math.min(limit, 12)));

  return scored.map(({ score, searchText, titleText, ...item }) => item);
}
