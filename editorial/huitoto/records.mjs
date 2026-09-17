import { defineHuitotoMyth } from "./define-editorial-myth.mjs";
import huitotoDefinitions from "./definitions.mjs";

const records = huitotoDefinitions.map((definition) =>
  defineHuitotoMyth(definition),
);

export const huitotoMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(huitotoMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Huitoto duplicados.");
}

export default records;
