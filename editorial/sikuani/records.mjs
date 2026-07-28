import { defineSikuaniMyth } from "./define-editorial-myth.mjs";
import sikuaniDefinitions from "./definitions.mjs";

const records = sikuaniDefinitions.map((definition) =>
  defineSikuaniMyth(definition),
);

export const sikuaniMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(sikuaniMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Sikuani duplicados.");
}

export default records;
