export const COMMUNITY_ALLOWLIST = new Set([
  "muiscas",
  "nasa-paeces",
  "wayuu",
  "huitotos",
  "chimila",
  "embera",
  "koguis",
  "katios",
  "pananes",
  "andoque",
  "guahibo-sikuani",
  "tucano",
  "misak-guambianos",
]);

export function filterAllowedCommunities(communities = []) {
  return communities.filter((community) => {
    const slug = String(community?.slug || "").trim().toLowerCase();
    return COMMUNITY_ALLOWLIST.has(slug);
  });
}
