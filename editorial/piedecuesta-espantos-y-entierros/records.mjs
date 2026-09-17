import definitions from "./definitions.mjs";

export const piedecuestaEspantosMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(piedecuestaEspantosMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Piedecuesta duplicados.");
}

export default definitions;
