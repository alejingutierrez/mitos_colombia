import { defineQuimbayaMyth } from "./define-editorial-myth.mjs";
import quimbayaDefinitions from "./definitions.mjs";

const records = quimbayaDefinitions.map((definition) =>
  defineQuimbayaMyth(definition),
);

export const quimbayaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(quimbayaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Quimbaya duplicados.");
}

export default records;
