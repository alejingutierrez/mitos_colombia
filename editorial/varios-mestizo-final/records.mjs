import definitions from "./definitions.mjs";

export const variosMestizoFinalMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(variosMestizoFinalMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el cierre Varios Mestizo.");
}

export default definitions;
