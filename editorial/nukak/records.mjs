import records from "./definitions.mjs";

export const nukakMythsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record]),
);

if (Object.keys(nukakMythsBySlug).length !== records.length) {
  throw new Error("Hay slugs Nukak duplicados.");
}

export default records;
