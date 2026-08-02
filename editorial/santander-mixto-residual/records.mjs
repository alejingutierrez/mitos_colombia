import definitions from "./definitions.mjs";

export const santanderMixtoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(santanderMixtoResidualMythsBySlug).length !== definitions.length
) {
  throw new Error("Hay slugs residuales Santander Mixto duplicados.");
}

export default definitions;
