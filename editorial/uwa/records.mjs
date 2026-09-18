import { defineUwaMyth } from "./define-editorial-myth.mjs";
import uwaDefinitions from "./definitions.mjs";

const records = uwaDefinitions.map((definition) => defineUwaMyth(definition));

export const uwaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(uwaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs U’wa duplicados.");
}

export default records;
