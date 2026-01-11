export const MIN_COMMUNITY_MYTHS = 6;

export function filterAllowedCommunities(communities = [], minMyths = MIN_COMMUNITY_MYTHS) {
  return communities.filter((community) => {
    const mythCount = Number(community?.myth_count || 0);
    return mythCount >= minMyths;
  });
}
