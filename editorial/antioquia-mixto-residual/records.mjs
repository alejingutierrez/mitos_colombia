import definitions from "./definitions.mjs";

export const antioquiaMixtoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(antioquiaMixtoResidualMythsBySlug).length !== definitions.length
) {
  throw new Error("Hay slugs residuales Antioquia Mixto duplicados.");
}

export default definitions;
