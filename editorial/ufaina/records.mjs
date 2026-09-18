import definitions from "./definitions.mjs";

export const ufainaMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(ufainaMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Ufaina duplicados.");
}

export default definitions;
