import { defineKuivaMyth } from "./define-editorial-myth.mjs";
import kuivaDefinitions from "./definitions.mjs";

const records = kuivaDefinitions.map((definition) =>
  defineKuivaMyth(definition),
);

export const kuivaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(kuivaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Kuiva duplicados.");
}

export default records;
