export const MIN_COMMUNITY_MYTHS = 6;
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

function normalizeValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasExcludedToken(value) {
  const normalized = normalizeValue(value);
  if (!normalized) {
    return false;
  }
  return normalized
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .some((token) => COMMUNITY_EXCLUDED_TOKENS.has(token));
}

export function filterAllowedCommunities(communities = [], minMyths = MIN_COMMUNITY_MYTHS) {
  return communities.filter((community) => {
    const mythCount = Number(community?.myth_count || 0);
    if (mythCount < minMyths) {
      return false;
    }
    return !hasExcludedToken(community?.slug) && !hasExcludedToken(community?.name);
  });
}
