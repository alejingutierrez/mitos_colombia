const coordinates = {
  "el-bobo-del-tranvia": { latitude: 4.60971, longitude: -74.08175 },
  "el-loco-arias": { latitude: 4.60971, longitude: -74.08175 },
  "el-mono-de-la-pila": { latitude: 4.5981, longitude: -74.0758 },
  "la-loca-margarita": { latitude: 4.5981, longitude: -74.0758 },
  "el-enigmatico-abogado": { latitude: 4.596, longitude: -74.069 },
  "los-fantasmas-de-la-candelaria": {
    latitude: 4.596,
    longitude: -74.071,
  },
  "la-leyenda-del-santuario-de-monserrate": {
    latitude: 4.605833,
    longitude: -74.056389,
  },
  "el-diablo-del-puente-del-comun": {
    latitude: 4.86323,
    longitude: -74.02948,
  },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://bogota-mestizo-memoria/${slug}/horizontal`,
    vertical: `pending://bogota-mestizo-memoria/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const bogotaMestizoMemoryMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
