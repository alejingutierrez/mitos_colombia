import { defineMakaguanMyth } from "./define-editorial-myth.mjs";
import makaguanDefinitions from "./definitions.mjs";

const records = makaguanDefinitions.map((definition) =>
  defineMakaguanMyth(definition),
);

export const makaguanMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(makaguanMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Makaguán duplicados.");
}

export default records;
