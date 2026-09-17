import definitions from "./definitions.mjs";

export const boyacaMestizoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(boyacaMestizoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs residuales Boyacá Mestizo duplicados.");
}

export default definitions;
