import definitions from "./definitions.mjs";

export const ticunaResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(ticunaResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el frente Ticuna residual.");
}

export default definitions;
