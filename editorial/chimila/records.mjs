import { defineChimilaMyth } from "./define-editorial-myth.mjs";
import chimilaDefinitions from "./definitions.mjs";

const records = chimilaDefinitions.map((definition) =>
  defineChimilaMyth(definition),
);

export const chimilaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(chimilaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Ette Ennaka duplicados.");
}

export default records;

