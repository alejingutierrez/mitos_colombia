import records from "./definitions.mjs";

export const ticunaMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(ticunaMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Ticuna duplicados.");
}

export default records;
