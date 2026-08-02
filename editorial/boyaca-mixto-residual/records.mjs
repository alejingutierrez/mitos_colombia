import definitions from "./definitions.mjs";

export const boyacaMixtoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(boyacaMixtoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs residuales Boyacá Mixto duplicados.");
}

export default definitions;
