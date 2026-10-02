import definitions from "./definitions.mjs";

export const yukpaReviewedMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(yukpaReviewedMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el frente Yukpa.");
}

export default definitions;
