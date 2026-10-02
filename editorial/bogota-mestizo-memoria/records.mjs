import definitions from "./definitions.mjs";

export const bogotaMestizoMemoryMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(bogotaMestizoMemoryMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Bogotá mestizo memoria duplicados.");
}

export default definitions;
