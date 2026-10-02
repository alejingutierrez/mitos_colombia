import definitions from "./definitions.mjs";

export const caldasMestizoMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(caldasMestizoMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Caldas mestizo duplicados.");
}

export default definitions;
