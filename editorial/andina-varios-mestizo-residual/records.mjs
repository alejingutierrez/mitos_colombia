import definitions from "./definitions.mjs";

export const andinaVariosMestizoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(andinaVariosMestizoResidualMythsBySlug).length !==
  definitions.length
) {
  throw new Error("Hay slugs residuales Andina Varios Mestizo duplicados.");
}

export default definitions;
