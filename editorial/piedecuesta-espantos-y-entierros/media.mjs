const coordinates = {
  "la-hilandera": { latitude: 6.9878, longitude: -73.0495 },
  "el-doctor-galeacer": { latitude: 6.956, longitude: -73.017 },
  "el-carriazo-de-vereda-san-isidro": {
    latitude: 6.928,
    longitude: -72.997,
  },
  "el-reventon-de-jacobo": { latitude: 6.995, longitude: -73.044 },
  "la-cueva-de-la-pisca": { latitude: 6.934, longitude: -73.031 },
  "la-monedita-en-la-alcancia": {
    latitude: 6.987,
    longitude: -73.049,
  },
  "la-diabla-castigadora": { latitude: 6.981, longitude: -73.045 },
  "la-lampara-de-petroleo": { latitude: 6.878, longitude: -72.93 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://piedecuesta-espantos-y-entierros/${slug}/horizontal`,
    vertical: `pending://piedecuesta-espantos-y-entierros/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const piedecuestaEspantosMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
