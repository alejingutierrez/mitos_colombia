export const inheritedBoyacaMestizoResidualSlugs = ["el-tesoro-de-buzaga"];
export const canonicalBoyacaMestizoResidualSlugs = [
  ...inheritedBoyacaMestizoResidualSlugs,
];
export const reviewedBoyacaMestizoResidualSlugs = [
  ...canonicalBoyacaMestizoResidualSlugs,
];

export const boyacaMestizoResidualCategoryBySlug = {
  "el-tesoro-de-buzaga": "Andina > Boyacá > Mestizo",
};

export const boyacaMestizoResidualTargetTaxonomyBySlug = {
  "el-tesoro-de-buzaga": {
    regionSlug: "andina",
    communitySlug: "mestizo",
  },
};

export const boyacaMestizoResidualEditorialDecisions = {
  "el-tesoro-de-buzaga": {
    action: "unify-five-spreadsheet-fragments-and-restore-otero-attribution",
    reason:
      "Las filas 288–292 del Excel forman una sola leyenda de Otero D’Costa; se elimina la falsa segunda versión y se preserva la URL heredada.",
  },
  history: {
    action: "separate-literary-characters-from-unverified-historicity",
    reason:
      "Lope Badillo y Benito de Laserna son personajes del texto; una práctica escolar que los llama reales no sustituye corroboración archivística.",
  },
  place: {
    action: "preserve-buzaga-as-literary-sanctuary-with-location-limit",
    reason:
      "Otero conduce la ruta desde Tunja hacia Iza, pero las fuentes no identifican Buzagá como sitio arqueológico o punto visitable.",
  },
  media: {
    action: "prepare-two-openai-images-with-provenance",
    reason:
      "La ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertBoyacaMestizoResidualUniverse() {
  return {
    inherited: 1,
    canonical: 1,
    reviewedRoutes: 1,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 5,
  };
}
