import definitions from "./definitions.mjs";

export const andinaLegacyEditorialResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(andinaLegacyEditorialResidualMythsBySlug).length !==
  definitions.length
) {
  throw new Error("Hay slugs residuales legacy andinos duplicados.");
}

export default definitions;
