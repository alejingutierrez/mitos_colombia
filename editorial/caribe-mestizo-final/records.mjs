import { caribeMestizoFinalCatalog } from "./catalog.mjs";
import { defineCaribeMestizoFinalMyth } from "./define-editorial-myth.mjs";

const records = caribeMestizoFinalCatalog.map(defineCaribeMestizoFinalMyth);

export const caribeMestizoFinalMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(caribeMestizoFinalMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs duplicados en el cierre Caribe Mestizo.");
}

export default records;
