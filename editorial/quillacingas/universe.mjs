export const inheritedQuillacingaSlugs = [
  "cualanquizan",
  "el-llamado-de-inti",
];

export const addedQuillacingaSlugs = [
  "origen-de-la-isla-la-corota",
  "el-rabo-de-casapamba",
  "creacion-de-los-colibries",
  "sirena-de-la-laguna-de-la-cocha",
];

export const canonicalQuillacingaSlugs = [
  ...inheritedQuillacingaSlugs,
  ...addedQuillacingaSlugs,
];

export const externallyReviewedQuillacingaSlugs = [
  "guagua-rayo",
  "la-totuma-de-la-cocha",
  "taita-galeras",
];

export const expandedQuillacingaSlugs = [
  ...canonicalQuillacingaSlugs,
  ...externallyReviewedQuillacingaSlugs,
];

export const quillacingaCategoryBySlug = Object.fromEntries(
  canonicalQuillacingaSlugs.map((slug) => [
    slug,
    "Pacífico > Nariño > Quillacingas",
  ]),
);
