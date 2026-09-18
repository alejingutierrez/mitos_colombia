import definitions from "./definitions.mjs";

export const bogotaMestizoNightMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(bogotaMestizoNightMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Bogotá mestizo nocturno duplicados.");
}

export default definitions;
