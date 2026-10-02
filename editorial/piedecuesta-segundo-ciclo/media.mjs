const coordinates = {
  "la-bruja-silbona": { latitude: 6.9875, longitude: -73.0503 },
  "la-mancarita": { latitude: 6.936, longitude: -72.984 },
  "cuento-fantastico": { latitude: 6.989, longitude: -73.052 },
  "la-campana-del-diablo": { latitude: 6.968, longitude: -73.03 },
  "el-diablo-de-umpala": { latitude: 6.841, longitude: -72.945 },
  "la-cueva-del-diablo": { latitude: 6.782, longitude: -72.995 },
  "nueva-version-de-la-luz-del-limonal": {
    latitude: 6.997,
    longitude: -73.067,
  },
  "el-griton": { latitude: 6.875, longitude: -72.934 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://piedecuesta-segundo-ciclo/${slug}/horizontal`,
    vertical: `pending://piedecuesta-segundo-ciclo/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const piedecuestaSecondCycleMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
