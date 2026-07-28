import { defineUmbraMyth } from "./define-editorial-myth.mjs";
import umbraDefinitions from "./definitions.mjs";

const records = umbraDefinitions.map((definition) =>
  defineUmbraMyth(definition),
);

export const umbraMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(umbraMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Umbra duplicados.");
}

export default records;
