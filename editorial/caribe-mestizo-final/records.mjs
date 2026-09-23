import { caribeMestizoFinalCatalog } from "./catalog.mjs";
import { defineCaribeMestizoFinalMyth } from "./define-editorial-myth.mjs";
import { caribeMestizoFinalReescrituras } from "./reescrituras.mjs";

// El catálogo es el inventario heredado; `reescrituras.mjs` es lo que ya se
// rehizo mito a mito. Lo propio pisa al marco de grupo, campo a campo.
const records = caribeMestizoFinalCatalog.map((entry) =>
  defineCaribeMestizoFinalMyth({ ...entry, ...(caribeMestizoFinalReescrituras[entry.slug] || {}) }),
);

const sinFicha = Object.keys(caribeMestizoFinalReescrituras).filter(
  (slug) => !caribeMestizoFinalCatalog.some((entry) => entry.slug === slug),
);
if (sinFicha.length) {
  throw new Error(`Hay reescrituras para slugs que no existen en el catálogo: ${sinFicha.join(", ")}.`);
}

export const caribeMestizoFinalMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(caribeMestizoFinalMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs duplicados en el cierre Caribe Mestizo.");
}

export default records;
