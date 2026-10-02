import definitions from "./definitions.mjs";

export const tolimaMestizoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(tolimaMestizoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs residuales Tolima Mestizo duplicados.");
}

export default definitions;
