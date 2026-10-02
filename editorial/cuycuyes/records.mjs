import { defineCuycuyesMyth } from "./define-editorial-myth.mjs";
import cuycuyesDefinitions from "./definitions.mjs";

const records = cuycuyesDefinitions.map((definition) =>
  defineCuycuyesMyth(definition),
);

export const cuycuyesMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(cuycuyesMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Cuycuyes duplicados.");
}

export default records;
