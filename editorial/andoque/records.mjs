import { defineAndoqueMyth } from "./define-editorial-myth.mjs";
import andoqueDefinitions from "./definitions.mjs";

const records = andoqueDefinitions.map((definition) =>
  defineAndoqueMyth(definition),
);

export const andoqueMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(andoqueMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Andoque duplicados.");
}

export default records;
