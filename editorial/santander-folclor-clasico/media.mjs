import { reviewedSantanderClassicFolkloreSlugs } from "./universe.mjs";

const coordinatesBySlug = {
  "el-cacique-salomon": { latitude: 5.5, longitude: -73.5 },
  "el-trapiche-ardiendo": { latitude: 6.5, longitude: -73.5 },
  "la-piedra-del-muerto": { latitude: 6.4833, longitude: -72.9667 },
  "lagunas-encantadas": { latitude: 6, longitude: -73 },
  "lo-que-ensenan-las-cuevas": { latitude: 6, longitude: -73 },
  "tal-para-cual": { latitude: 7.070833, longitude: -73.173056 },
};

function pendingMedia(slug) {
  const coordinates = coordinatesBySlug[slug];
  if (!coordinates) throw new Error(`${slug}: faltan coordenadas.`);
  return {
    ...coordinates,
    horizontal: `pending://santander-folclor-clasico/${slug}/horizontal`,
    vertical: `pending://santander-folclor-clasico/${slug}/vertical`,
    provenanceStatus: "pending",
  };
}

export const santanderClassicFolkloreMedia = Object.fromEntries(
  reviewedSantanderClassicFolkloreSlugs.map((slug) => [
    slug,
    pendingMedia(slug),
  ]),
);
