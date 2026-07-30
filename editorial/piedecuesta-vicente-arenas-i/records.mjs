import definitions from "./definitions.mjs";

export const piedecuestaVicenteArenasIMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(piedecuestaVicenteArenasIMythsBySlug).length !==
  definitions.length
) {
  throw new Error(
    "Hay slugs duplicados en el primer ciclo de Vicente Arenas.",
  );
}

export default definitions;
