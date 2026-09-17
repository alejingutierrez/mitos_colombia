const coordinates = {
  "el-cerro-encantado": { latitude: 6.994, longitude: -73.055 },
  "el-quijote-piedecuestano": {
    latitude: 6.99,
    longitude: -73.071,
  },
  "la-vista-del-libertador": {
    latitude: 6.987,
    longitude: -73.05,
  },
  "un-libertador-piedecuestano": {
    latitude: 6.987,
    longitude: -73.05,
  },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://piedecuesta-relatos-legendarios/${slug}/horizontal`,
    vertical: `pending://piedecuesta-relatos-legendarios/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const piedecuestaLegendaryAccountsMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
