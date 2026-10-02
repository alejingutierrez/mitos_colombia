import definitions from "./definitions.mjs";

export const huitotoResidualMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(huitotoResidualMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el frente Huitoto residual.");
}

export default definitions;
