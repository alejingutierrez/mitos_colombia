const coordinates = {
  "la-mula-del-diablo": { latitude: 6.987, longitude: -73.052 },
  "la-mula-maneada": { latitude: 6.989, longitude: -73.049 },
  "la-llorona-del-molino": { latitude: 6.99, longitude: -73.052 },
  "la-mechuda": { latitude: 6.981, longitude: -73.045 },
  "el-fantasma-de-el-horizonte": {
    latitude: 6.993,
    longitude: -73.047,
  },
  "la-puerta-del-perdon": { latitude: 6.988, longitude: -73.05 },
  "la-sayona-del-cementerio": { latitude: 6.984, longitude: -73.056 },
  "el-pollo-de-las-animas": { latitude: 6.97, longitude: -73.04 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://piedecuesta-vicente-arenas-i/${slug}/horizontal`,
    vertical: `pending://piedecuesta-vicente-arenas-i/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const piedecuestaVicenteArenasIMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
