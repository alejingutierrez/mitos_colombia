import definitions from "./definitions.mjs";

export const orinoquiaMestizoFinalMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(orinoquiaMestizoFinalMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el cierre Orinoquía Mestizo.");
}

export default definitions;
