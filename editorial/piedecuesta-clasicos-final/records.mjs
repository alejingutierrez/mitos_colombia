import definitions from "./definitions.mjs";

export const piedecuestaClasicosFinalMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(piedecuestaClasicosFinalMythsBySlug).length !==
  definitions.length
) {
  throw new Error("Hay slugs duplicados en el ciclo clásico final.");
}

export default definitions;
