import definitions from "./definitions.mjs";

export const tolimaMixtoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(tolimaMixtoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs residuales Tolima Mixto duplicados.");
}

export default definitions;
