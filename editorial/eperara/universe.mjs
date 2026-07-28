export const canonicalEperaraSlugs = [
  "tachi-akhore-y-la-palabra-de-mangle",
  "origen-del-pueblo-eperara",
];

export const addedEperaraSlugs = ["origen-del-pueblo-eperara"];

export const replacedSyntheticEperaraSlugs = [
  "tachi-akhore-y-la-palabra-de-mangle",
];

export const eperaraCategoryPath =
  "Pacífico > Nariño > Eperara Siapidara";

export const eperaraCategoryBySlug = Object.fromEntries(
  canonicalEperaraSlugs.map((slug) => [slug, eperaraCategoryPath]),
);

if (new Set(canonicalEperaraSlugs).size !== canonicalEperaraSlugs.length) {
  throw new Error("El universo Eperara Siapidara contiene slugs duplicados.");
}
