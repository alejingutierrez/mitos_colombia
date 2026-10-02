import { caribeMestizoFinalCatalog } from "./catalog.mjs";

const coordinatesByGroup = {
  martinez: { latitude: 10.391, longitude: -75.4794 },
  zapata: { latitude: 8.7509, longitude: -75.8788 },
  list: { latitude: 8.7509, longitude: -75.8788 },
  unresolved: { latitude: 8.7509, longitude: -75.8788 },
  buenaventura: { latitude: 9.0392, longitude: -75.7897 },
  otero: { latitude: 11.2408, longitude: -74.199 },
  morgan: { latitude: 12.5847, longitude: -81.7006 },
  francisco: { latitude: 11.5444, longitude: -72.9072 },
};

function pendingMedia({ slug, group }) {
  return {
    horizontal: `pending://caribe-mestizo-final/${slug}/horizontal`,
    vertical: `pending://caribe-mestizo-final/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinatesByGroup[group],
  };
}

export const caribeMestizoFinalMedia = Object.fromEntries(
  caribeMestizoFinalCatalog.map((entry) => [entry.slug, pendingMedia(entry)]),
);
