const coordinates = {
  "el-anima-coy": { latitude: 6.989, longitude: -73.049 },
  "la-luz-del-limonal": { latitude: 6.997, longitude: -73.067 },
  "el-silbon": { latitude: 7.01, longitude: -73.07 },
  "los-tunjos-de-la-cantera": {
    latitude: 6.993,
    longitude: -73.055,
  },
  "duende-del-salto": { latitude: 6.891, longitude: -73.072 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://piedecuesta-clasicos-final/${slug}/horizontal`,
    vertical: `pending://piedecuesta-clasicos-final/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const piedecuestaClasicosFinalMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
