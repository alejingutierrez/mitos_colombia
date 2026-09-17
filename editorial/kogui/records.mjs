import { defineKoguiMyth } from "./define-editorial-myth.mjs";
import koguiDefinitions from "./definitions.mjs";

const records = koguiDefinitions.map((definition) =>
  defineKoguiMyth(definition),
);

export const koguiMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(koguiMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Kogui duplicados.");
}

export default records;
