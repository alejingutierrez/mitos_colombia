import definitions from "./definitions.mjs";

export const yucunaReviewedMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(yucunaReviewedMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el frente Yucuna.");
}

export const yucunaCanonicalRecords = definitions.filter(
  ({ editorial_scope: scope }) => scope === "yucuna",
);

export const yucunaTransferredRecords = definitions.filter(
  ({ editorial_scope: scope }) => scope === "abundance-transfer",
);

export default definitions;
