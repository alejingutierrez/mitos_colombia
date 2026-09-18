const coordinates = {
  "amanecer-llanero": { latitude: 5.3378, longitude: -72.3959 },
  "el-toro-negro-patorreal": { latitude: 5.349, longitude: -72.409 },
  "los-delfines-dorados": { latitude: 5.8297, longitude: -71.9947 },
  "la-culebra-cascabel": { latitude: 5.3378, longitude: -72.3959 },
  "el-llano-ayer-hoy": { latitude: 4.142, longitude: -73.6266 },
  "los-tres-luceros": { latitude: 5.3378, longitude: -72.3959 },
  "el-llano-cobra-sus-deudas": { latitude: 5.8297, longitude: -71.9947 },
  "las-chanzas-de-don-felipe": { latitude: 5.3378, longitude: -72.3959 },
  "el-brujo-de-la-costa-del-pauto": { latitude: 5.678, longitude: -71.994 },
  "leal-hasta-la-muerte": { latitude: 5.3378, longitude: -72.3959 },
  "la-tertulia-de-la-italiana": { latitude: 5.3378, longitude: -72.3959 },
  "el-tesoro-de-caribare": { latitude: 5.8811, longitude: -71.8929 },
  "la-bola-de-fuego": { latitude: 6.4604, longitude: -71.7362 },
  "el-tirapiedra": { latitude: 4.1511, longitude: -73.6377 },
  "los-monstruos-de-paratebueno": { latitude: 4.3758, longitude: -73.2121 },
  "el-dominguez": { latitude: 4.1511, longitude: -73.6377 },
  "madre-rio-o-mohana": { latitude: 4.1511, longitude: -73.6377 },
  "la-bruja-de-los-ojos-miel": { latitude: 4.1511, longitude: -73.6377 },
  "el-domador-de-brujas": { latitude: 4.1511, longitude: -73.6377 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://orinoquia-mestizo-final/${slug}/horizontal`,
    vertical: `pending://orinoquia-mestizo-final/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const orinoquiaMestizoFinalMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
