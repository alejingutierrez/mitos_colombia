export const inheritedAntioquiaMixtoResidualSlugs = [
  "el-mareco",
  "el-patetarro",
].sort();

export const canonicalAntioquiaMixtoResidualSlugs = [
  ...inheritedAntioquiaMixtoResidualSlugs,
];

export const reviewedAntioquiaMixtoResidualSlugs = [
  ...canonicalAntioquiaMixtoResidualSlugs,
];

export const antioquiaMixtoResidualCategoryBySlug = Object.fromEntries(
  reviewedAntioquiaMixtoResidualSlugs.map((slug) => [
    slug,
    "Andina > Antioquia > Mixto",
  ]),
);

export const antioquiaMixtoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedAntioquiaMixtoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mixto" },
  ]),
);

export const antioquiaMixtoResidualEditorialDecisions = {
  "el-patetarro": {
    action: "restore-early-literary-core-and-separate-regional-variants",
    reason:
      "Se restituye el gigantón de una pierna y tarro de guadua documentado por Carrasquilla, y se separan el ladrón de gallinas, la figura vengadora y la recreación de horror de 2004.",
  },
  "el-mareco": {
    action: "restore-ocampo-childhood-motif-and-label-modern-adaptation",
    reason:
      "El núcleo infantil de Ocampo se distingue del relato de Manuel publicado en 2004; se eliminan una profesora nombrada, una escuela presentada como real y protecciones sin respaldo consultable.",
  },
  media: {
    action: "prepare-four-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertAntioquiaMixtoResidualUniverse() {
  if (inheritedAntioquiaMixtoResidualSlugs.length !== 2) {
    throw new Error("El residual Antioquia Mixto debe contener dos rutas.");
  }
  if (
    new Set(canonicalAntioquiaMixtoResidualSlugs).size !==
    canonicalAntioquiaMixtoResidualSlugs.length
  ) {
    throw new Error("El residual Antioquia Mixto contiene slugs duplicados.");
  }
  return {
    inherited: 2,
    canonical: 2,
    reviewedRoutes: 2,
    added: 0,
    unpublished: 0,
  };
}
