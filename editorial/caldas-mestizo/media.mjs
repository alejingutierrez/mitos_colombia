const coordinates = {
  "cuento-de-animas": { latitude: 6.5, longitude: -73.0 },
  "de-frente-al-sol": { latitude: 4.9825, longitude: -75.6036 },
  "el-aserrador": { latitude: 5.5, longitude: -75.5 },
  "el-cacique-cumanday": {
    latitude: 4.890833,
    longitude: -75.3225,
  },
  "el-coco": { latitude: 5.4216, longitude: -75.7032 },
  "el-cole-cabuya": { latitude: 5.46028, longitude: -75.6531 },
  "el-viejo-del-costal": { latitude: 5.4216, longitude: -75.7032 },
  "in-illo-tempore": { latitude: 5.23809, longitude: -75.784 },
  "las-brujas": { latitude: 5.47511, longitude: -75.60265 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://caldas-mestizo/${slug}/horizontal`,
    vertical: `pending://caldas-mestizo/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const caldasMestizoMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
