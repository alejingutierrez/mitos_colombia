const coordinates = {
  "el-hombre-del-farol": { latitude: 4.5981, longitude: -74.0758 },
  "el-toro-en-el-ascensor": { latitude: 4.6111, longitude: -74.0703 },
  "el-venado-de-oro": { latitude: 4.5914, longitude: -74.0547 },
  "la-bruja-del-tranvia": { latitude: 4.596, longitude: -74.071 },
  "la-monja-de-las-rosas": { latitude: 4.6058, longitude: -74.066 },
  "la-monja-vidente-y-el-taxista": {
    latitude: 4.6097,
    longitude: -74.0817,
  },
  "la-mula-herrada": { latitude: 4.611, longitude: -74.0708 },
  "los-esqueletos-caminantes": {
    latitude: 4.5981,
    longitude: -74.0758,
  },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://bogota-mestizo-nocturno/${slug}/horizontal`,
    vertical: `pending://bogota-mestizo-nocturno/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const bogotaMestizoNightMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
