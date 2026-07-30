import definitions from "./definitions.mjs";

export const piedecuestaLegendaryAccountsMythsBySlug =
  Object.fromEntries(definitions.map((record) => [record.slug, record]));

if (
  Object.keys(piedecuestaLegendaryAccountsMythsBySlug).length !==
  definitions.length
) {
  throw new Error("Hay slugs duplicados en los relatos legendarios.");
}

export default definitions;
