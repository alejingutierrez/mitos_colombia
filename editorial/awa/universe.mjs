export const canonicalAwaSlugs = [
  "barbachas-del-arbol-grande",
  "guagaja",
];

export const addedAwaSlugs = [];

export const replacedSyntheticAwaSlugs = [
  "barbachas-del-arbol-grande",
  "guagaja",
];

export const awaCategoryPath = "Pacífico > Nariño > Awa";

export const awaCategoryBySlug = Object.fromEntries(
  canonicalAwaSlugs.map((slug) => [slug, awaCategoryPath]),
);

if (new Set(canonicalAwaSlugs).size !== canonicalAwaSlugs.length) {
  throw new Error("El universo Awá contiene slugs duplicados.");
}
