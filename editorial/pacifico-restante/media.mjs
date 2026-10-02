const coordinates = {
  buziraco: { latitude: 3.466, longitude: -76.533 },
  "el-barco-fantasma": { latitude: 3.05, longitude: -78.1 },
  "el-caballo-del-morro": { latitude: 2.444, longitude: -76.606 },
  "el-duende-peluquero": { latitude: 3.656, longitude: -76.688 },
  "el-roble-del-caballero": { latitude: 2.44, longitude: -76.607 },
  "la-casa-de-la-tradicion": {
    latitude: 3.446,
    longitude: -76.541,
  },
  "la-piramide-del-chontaduro": {
    latitude: 3.48,
    longitude: -76.2,
  },
  "la-yesca": { latitude: 5.6947, longitude: -76.6611 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://pacifico-restante/${slug}/horizontal`,
    vertical: `pending://pacifico-restante/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const pacificoRestanteMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
