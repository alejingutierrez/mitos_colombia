export const inheritedMisakSlugs = [
  "creacion-misak-guambianos",
  "el-nino-serpiente",
  "el-pajaro-que-se-come-las-almas",
  "el-viejo-tempestad",
  "el-viento-y-sus-hijos",
  "la-mama-grande",
  "pedro-el-mago-travieso",
];

export const addedMisakSlugs = [];

export const canonicalMisakSlugs = [
  ...inheritedMisakSlugs,
  ...addedMisakSlugs,
];

export const misakCategoryBySlug = Object.fromEntries(
  canonicalMisakSlugs.map((slug) => [
    slug,
    "Andina > Cauca > Misak - Guambianos",
  ]),
);
