import definitions from "./definitions.mjs";

export const zenuReviewedMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(zenuReviewedMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el frente Zenú.");
}

export default definitions;
