import definitions from "./definitions.mjs";

export const pacificoRestanteMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(pacificoRestanteMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs Pacífico restante duplicados.");
}

export default definitions;
