import definitions from "./definitions.mjs";

export const cesarMestizoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(cesarMestizoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs residuales Cesar Mestizo duplicados.");
}

export default definitions;
