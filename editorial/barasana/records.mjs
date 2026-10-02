import { defineBarasanaMyth } from "./define-editorial-myth.mjs";
import barasanaDefinitions from "./definitions.mjs";

const records = barasanaDefinitions.map((definition) =>
  defineBarasanaMyth(definition),
);

export const barasanaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(barasanaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Barasana duplicados.");
}

export default records;
