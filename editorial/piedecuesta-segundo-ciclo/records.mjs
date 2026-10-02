import definitions from "./definitions.mjs";

export const piedecuestaSecondCycleMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (
  Object.keys(piedecuestaSecondCycleMythsBySlug).length !== definitions.length
) {
  throw new Error("Hay slugs duplicados en el segundo ciclo de Piedecuesta.");
}

export default definitions;
