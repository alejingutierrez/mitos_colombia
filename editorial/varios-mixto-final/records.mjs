import definitions from "./definitions.mjs";

export const variosMixtoFinalMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(variosMixtoFinalMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el cierre Varios Mixto.");
}

export default definitions;
