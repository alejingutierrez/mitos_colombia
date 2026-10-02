import definitions from "./definitions.mjs";

export const caribeMixtoFinalMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(caribeMixtoFinalMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el cierre Caribe Mixto.");
}

export default definitions;
