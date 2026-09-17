import { defineBariMyth } from "./define-editorial-myth.mjs";
import bariDefinitions from "./definitions.mjs";

const records = bariDefinitions.map((definition) =>
  defineBariMyth(definition),
);

export const bariMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(bariMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Barí duplicados.");
}

export default records;
