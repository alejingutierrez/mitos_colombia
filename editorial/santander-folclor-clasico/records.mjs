import definitions from "./definitions.mjs";

export const santanderClassicFolkloreMythsBySlug = Object.fromEntries(
  definitions.map((record) => [record.slug, record]),
);

if (Object.keys(santanderClassicFolkloreMythsBySlug).length !== definitions.length) {
  throw new Error("Hay slugs duplicados en el folclor clásico de Santander.");
}

export default definitions;
