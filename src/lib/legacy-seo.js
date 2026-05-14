const MIN_INDEXABLE_TAXONOMY_MYTHS = 6;

const COMMUNITY_EXCLUDED_TOKENS = new Set([
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

const TAXONOMY_ALIASES = new Map([
  ["varia", "varios"],
  ["varias", "varios"],
  ["origen-de-enfermedades", "enfermedad"],
]);

const STOP_WORDS = new Set([
  "a",
  "al",
  "como",
  "con",
  "de",
  "del",
  "el",
  "en",
  "la",
  "las",
  "lo",
  "los",
  "por",
  "para",
  "que",
  "se",
  "su",
  "sus",
  "un",
  "una",
  "y",
]);

function decodeValue(value) {
  try {
    return decodeURIComponent(String(value || ""));
  } catch {
    return String(value || "");
  }
}

export function normalizeLegacySlug(value) {
  return decodeValue(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeText(value) {
  return normalizeLegacySlug(value).replace(/-/g, " ").trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(/\s+/)
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function legacySlugCandidates(value) {
  const normalized = normalizeLegacySlug(value);
  const candidates = [normalized, TAXONOMY_ALIASES.get(normalized)];

  if (normalized.endsWith("as")) {
    candidates.push(`${normalized.slice(0, -2)}os`);
  }
  if (normalized.endsWith("es")) {
    candidates.push(normalized.slice(0, -2));
  }
  if (normalized.endsWith("s")) {
    candidates.push(normalized.slice(0, -1));
  }

  return unique(candidates);
}

function matchesSlugOrName(row, slug) {
  return (
    normalizeLegacySlug(row?.slug) === slug ||
    normalizeLegacySlug(row?.name) === slug
  );
}

function hasEnoughMyths(row, minMyths = MIN_INDEXABLE_TAXONOMY_MYTHS) {
  return Number(row?.myth_count || 0) >= minMyths;
}

function hasExcludedCommunityToken(row) {
  const value = normalizeText(`${row?.slug || ""} ${row?.name || ""}`);
  if (!value) return false;
  return value
    .split(/\s+/)
    .some((token) => COMMUNITY_EXCLUDED_TOKENS.has(token));
}

function isIndexableCategory(tag, regionNames, minMyths) {
  if (!hasEnoughMyths(tag, minMyths)) return false;
  const normalizedName = normalizeLegacySlug(tag?.name);
  if (!normalizedName || normalizedName === "ninguno") return false;
  return !regionNames.has(normalizedName);
}

function isIndexableCommunity(community, minMyths) {
  return hasEnoughMyths(community, minMyths) && !hasExcludedCommunityToken(community);
}

export function resolveLegacyTaxonomyTarget(value, taxonomy = {}, options = {}) {
  const minCategoryMyths =
    options.minCategoryMyths || MIN_INDEXABLE_TAXONOMY_MYTHS;
  const minCommunityMyths =
    options.minCommunityMyths || MIN_INDEXABLE_TAXONOMY_MYTHS;
  const candidates = legacySlugCandidates(value);
  const regions = taxonomy.regions || [];
  const communities = taxonomy.communities || [];
  const tags = taxonomy.tags || [];
  const regionNames = new Set(regions.map((region) => normalizeLegacySlug(region.name)));

  for (const slug of candidates) {
    const community = communities.find(
      (item) => matchesSlugOrName(item, slug) && isIndexableCommunity(item, minCommunityMyths)
    );
    if (community?.slug) return `/comunidades/${community.slug}`;
  }

  for (const slug of candidates) {
    const tag = tags.find(
      (item) => matchesSlugOrName(item, slug) && isIndexableCategory(item, regionNames, minCategoryMyths)
    );
    if (tag?.slug) return `/categorias/${tag.slug}`;
  }

  for (const slug of candidates) {
    const region = regions.find((item) => matchesSlugOrName(item, slug));
    if (region?.slug) return `/regiones/${region.slug}`;
  }

  return null;
}

function getSuggestionHref(suggestion) {
  const href = String(suggestion?.href || "").trim();
  return href.startsWith("/mitos/") ? href : "";
}

function confidenceForLegacyPost(rawSlug, suggestion) {
  const queryTokens = new Set(tokenize(rawSlug));
  const titleTokens = tokenize(suggestion?.title);
  if (!queryTokens.size || !titleTokens.length) return 0;

  const titleMatches = titleTokens.filter((token) => queryTokens.has(token)).length;
  const queryMatches = [...queryTokens].filter((token) =>
    titleTokens.includes(token)
  ).length;
  const titleCoverage = titleMatches / titleTokens.length;
  const queryCoverage = queryMatches / queryTokens.size;

  if (titleCoverage >= 0.5) return titleCoverage;
  if (titleCoverage >= 0.34 && queryCoverage >= 0.34) return titleCoverage;
  return 0;
}

export function resolveLegacyPostTarget(value, suggestions = []) {
  const [first] = suggestions || [];
  const href = getSuggestionHref(first);
  if (!href || first?.type !== "myth") return null;

  return confidenceForLegacyPost(value, first) > 0 ? href : null;
}
