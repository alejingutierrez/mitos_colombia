export const inheritedSantanderMixtoResidualSlugs = [
  "el-ermitano-iracundo",
  "talabad",
].sort();

export const canonicalSantanderMixtoResidualSlugs = [
  ...inheritedSantanderMixtoResidualSlugs,
];

export const reviewedSantanderMixtoResidualSlugs = [
  ...canonicalSantanderMixtoResidualSlugs,
];

export const santanderMixtoResidualCategoryBySlug = Object.fromEntries(
  reviewedSantanderMixtoResidualSlugs.map((slug) => [
    slug,
    "Andina > Santander > Mixto",
  ]),
);

export const santanderMixtoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedSantanderMixtoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mixto" },
  ]),
);

export const santanderMixtoResidualEditorialDecisions = {
  talabad: {
    action: "unify-four-spreadsheet-fragments-and-restore-talabali-title",
    reason:
      "Las cuatro filas del Excel forman una sola narración de Otero; la URL heredada se conserva y el título visible se corrige a Talabalí, separando escenario histórico y trama literaria.",
  },
  "el-ermitano-iracundo": {
    action: "restore-2004-literary-layers-and-remove-cuevas-de-oz",
    reason:
      "Se distinguen la historia moral de Nicolás y los correos ficticios de Ana; Mago de Oz es la banda mencionada en el texto, no el nombre de las cuevas.",
  },
  geography: {
    action: "preserve-existing-taxonomy-and-state-norte-de-santander-limit",
    reason:
      "Ocaña pertenece a Norte de Santander, pero el sitio no tiene una taxonomía departamental de ese nombre; se conserva el bucket heredado sin ocultar el límite.",
  },
  media: {
    action: "prepare-four-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertSantanderMixtoResidualUniverse() {
  if (inheritedSantanderMixtoResidualSlugs.length !== 2) {
    throw new Error("El residual Santander Mixto debe contener dos rutas.");
  }
  if (
    new Set(canonicalSantanderMixtoResidualSlugs).size !==
    canonicalSantanderMixtoResidualSlugs.length
  ) {
    throw new Error("El residual Santander Mixto contiene slugs duplicados.");
  }
  return {
    inherited: 2,
    canonical: 2,
    reviewedRoutes: 2,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 4,
  };
}
