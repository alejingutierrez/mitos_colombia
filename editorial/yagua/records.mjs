import definitions from "./definitions.mjs";

export const yaguaMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(yaguaMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Yagua duplicados.");
}

export default definitions;
