export const inheritedBoyacaMixtoResidualSlugs = [
  "el-cucacuy",
  "furatena",
  "la-sombra-creadora",
  "los-mensajeros-de-los-dioses",
].sort();

export const canonicalBoyacaMixtoResidualSlugs = [
  ...inheritedBoyacaMixtoResidualSlugs,
];

export const reviewedBoyacaMixtoResidualSlugs = [
  ...canonicalBoyacaMixtoResidualSlugs,
];

export const boyacaMixtoResidualCategoryBySlug = Object.fromEntries(
  reviewedBoyacaMixtoResidualSlugs.map((slug) => [
    slug,
    "Andina > Boyacá > Mixto",
  ]),
);

export const boyacaMixtoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedBoyacaMixtoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mixto" },
  ]),
);

export const boyacaMixtoResidualEditorialDecisions = {
  "los-mensajeros-de-los-dioses": {
    action: "unify-nine-spreadsheet-fragments-and-restore-attribution",
    reason:
      "Las filas 478–486 del Excel segmentan la historia de Mongatá y Mayavita; se conserva una sola URL y se atribuye la versión consultable a Lilia Montaña de Silva Celis.",
  },
  "el-cucacuy": {
    action: "preserve-incompatible-regional-variants-and-remove-invention",
    reason:
      "El hombre desnudo del Valle de Tenza y el cerdo con duende de Lengupá no son una biografía única; se elimina el Antonio Bustamante no corroborado.",
  },
  "la-sombra-creadora": {
    action: "restore-muzo-creation-episode-and-remove-classical-digressions",
    reason:
      "Are, la sombra y las figuras de madera pertenecen al ciclo muzo; las comparaciones clásicas de compiladores posteriores no forman parte del relato.",
  },
  furatena: {
    action: "separate-muzo-landscape-cycle-from-historical-cacica",
    reason:
      "El ciclo de Fura, Tena, Zarbi y las esmeraldas se distingue de la cacica Furatena y de las noticias coloniales sobre los cerros como adoratorio.",
  },
  taxonomy: {
    action: "preserve-existing-mixto-bucket-and-state-muzo-attribution",
    reason:
      "El catálogo no dispone de comunidad Muzo; conservar Mixto evita inventar taxonomía, pero el texto no llama muiscas a Are, Fura ni Tena.",
  },
  media: {
    action: "prepare-eight-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertBoyacaMixtoResidualUniverse() {
  if (inheritedBoyacaMixtoResidualSlugs.length !== 4) {
    throw new Error("El residual Boyacá Mixto debe contener cuatro rutas.");
  }
  if (
    new Set(canonicalBoyacaMixtoResidualSlugs).size !==
    canonicalBoyacaMixtoResidualSlugs.length
  ) {
    throw new Error("El residual Boyacá Mixto contiene slugs duplicados.");
  }
  return {
    inherited: 4,
    canonical: 4,
    reviewedRoutes: 4,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 9,
  };
}
