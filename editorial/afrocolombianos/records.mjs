import definitions from "./definitions.mjs";

export const afrocolombianMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(afrocolombianMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Afrocolombianos duplicados.");
}

export default definitions;
