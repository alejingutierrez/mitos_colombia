import definitions from "./definitions.mjs";

export const andinaVariosMixtoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(andinaVariosMixtoResidualMythsBySlug).length !==
  definitions.length
) {
  throw new Error("Hay slugs residuales Andina Varios Mixto duplicados.");
}

export default definitions;
