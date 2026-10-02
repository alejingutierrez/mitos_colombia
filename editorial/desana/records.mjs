import { defineDesanaMyth } from "./define-editorial-myth.mjs";
import desanaDefinitions from "./definitions.mjs";

const records = desanaDefinitions.map((definition) =>
  defineDesanaMyth(definition),
);

export const desanaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(desanaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Desana duplicados.");
}

export default records;
