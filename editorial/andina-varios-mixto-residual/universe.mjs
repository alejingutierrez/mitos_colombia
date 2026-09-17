export const inheritedAndinaVariosMixtoResidualSlugs = [
  "el-hojarasquin-del-monte",
  "esperanza-en-el-oriente",
  "la-mano-peluda",
].sort();

export const canonicalAndinaVariosMixtoResidualSlugs = [
  ...inheritedAndinaVariosMixtoResidualSlugs,
];

export const reviewedAndinaVariosMixtoResidualSlugs = [
  ...canonicalAndinaVariosMixtoResidualSlugs,
];

export const andinaVariosMixtoResidualCategoryBySlug = Object.fromEntries(
  reviewedAndinaVariosMixtoResidualSlugs.map((slug) => [
    slug,
    "Andina > Varios > Mixto",
  ]),
);

export const andinaVariosMixtoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedAndinaVariosMixtoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mixto" },
  ]),
);

export const andinaVariosMixtoResidualEditorialDecisions = {
  "la-mano-peluda": {
    action: "separate-candelaria-hand-from-viejo-del-costal-variant",
    reason:
      "La mano incorpórea de Candelaria y Tunja y la garra del Viejo del Costal son dos núcleos documentados; se conservan como variantes sin pistola de ácido, dimensiones celestes ni atribuciones personales no corroboradas.",
  },
  "el-hojarasquin-del-monte": {
    action: "restore-documented-forest-guardian-variants",
    reason:
      "Se conservan el hombre-árbol, el mico gigante y el ser híbrido que protege el monte, pierde o guía viajeros y confunde cazadores; se elimina el diario botánico de 1928 no documentado.",
  },
  "esperanza-en-el-oriente": {
    action: "reframe-1956-comparative-hypothesis-as-historiography",
    reason:
      "El texto procede de Mariano Izquierdo Gallo y formula con reservas una hipótesis comparativa; no constituye un mito oral colombiano ni demuestra una religión panamericana orientada al este.",
  },
  taxonomy: {
    action: "preserve-existing-mixed-residual-bucket",
    reason:
      "Las tres URLs permanecen en Andina > Varios > Mixto para no inventar taxonomía ni romper enlaces, pero cada expediente declara su geografía y clase documental real.",
  },
  media: {
    action: "prepare-six-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertAndinaVariosMixtoResidualUniverse() {
  if (inheritedAndinaVariosMixtoResidualSlugs.length !== 3) {
    throw new Error("El residual Andina Varios Mixto debe contener tres rutas.");
  }
  return {
    inherited: 3,
    canonical: 3,
    reviewedRoutes: 3,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 2,
  };
}
