import { defineAnsermasMyth } from "./define-editorial-myth.mjs";
import ansermasDefinitions from "./definitions.mjs";

const records = ansermasDefinitions.map((definition) =>
  defineAnsermasMyth(definition),
);

export const ansermasMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(ansermasMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Ansermas duplicados.");
}

export default records;
