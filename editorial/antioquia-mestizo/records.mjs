import definitions from "./definitions.mjs";

export const antioquiaMestizoMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(antioquiaMestizoMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Antioquia mestizo duplicados.");
}

export default definitions;
