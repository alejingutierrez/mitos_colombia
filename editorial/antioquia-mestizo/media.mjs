const coordinates = {
  "el-paton": { latitude: 6.5, longitude: -75.5 },
  "el-perro-negro": { latitude: 5.7, longitude: -75.78 },
  "la-cabellona": { latitude: 6.68, longitude: -75.81 },
  "la-dama-verde": { latitude: 5.656, longitude: -75.879 },
  "la-rodillona": { latitude: 6.25, longitude: -75.57 },
  "las-ilusiones": { latitude: 6.25, longitude: -75.57 },
  "los-rescoldos": { latitude: 6.0, longitude: -75.6 },
  "maria-centeno": { latitude: 6.63, longitude: -76.06 },
  "maria-la-larga": { latitude: 5.656, longitude: -75.879 },
  "no-hay-deuda-que-no-se-pague": {
    latitude: 5.6,
    longitude: -75.45,
  },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://antioquia-mestizo/${slug}/horizontal`,
    vertical: `pending://antioquia-mestizo/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const antioquiaMestizoMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
