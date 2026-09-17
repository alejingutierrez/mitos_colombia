export const inheritedVariosMixtoFinalSlugs = [
  "el-cura-sin-cabeza",
  "el-jinete-negro",
  "el-mandingas",
  "el-mohan",
  "el-silbon",
  "la-llorona",
  "la-madremonte",
  "los-duendes",
].sort();

export const alreadyReviewedVariosMixtoFinalSlugs = ["el-silbon"];

export const reviewedVariosMixtoFinalSlugs = inheritedVariosMixtoFinalSlugs.filter(
  (slug) => !alreadyReviewedVariosMixtoFinalSlugs.includes(slug),
);

export const canonicalVariosMixtoFinalSlugs = [
  ...alreadyReviewedVariosMixtoFinalSlugs,
];

export const transferredFromVariosMixtoFinalSlugs = [
  ...reviewedVariosMixtoFinalSlugs,
];

export const variosMixtoFinalCategoryBySlug = {
  "el-cura-sin-cabeza": "Andina > Nariño > Mestizo",
  "el-jinete-negro": "Andina > Cundinamarca y Boyacá > Mestizo",
  "el-mandingas": "Caribe > Bolívar y Atlántico > Mestizo",
  "el-mohan": "Andina > Tolima > Mestizo",
  "la-llorona": "Andina > Tolima > Mestizo",
  "la-madremonte": "Andina > Tolima > Mestizo",
  "los-duendes": "Andina > Tolima > Mestizo",
};

export const variosMixtoFinalTargetTaxonomyBySlug = Object.fromEntries(
  reviewedVariosMixtoFinalSlugs.map((slug) => [
    slug,
    {
      regionSlug: slug === "el-mandingas" ? "caribe" : "andina",
      communitySlug: "mestizo",
    },
  ]),
);

export const variosMixtoFinalEditorialDecisions = {
  universe: {
    action: "review-seven-uncovered-routes-and-preserve-silbon-dossier",
    reason:
      "El grupo físico contiene ocho URL, pero El Silbón ya tiene expediente y transferencia documentados en Piedecuesta clásicos; este frente cubre únicamente las siete rutas faltantes.",
  },
  taxonomy: {
    action: "transfer-seven-folklore-routes-from-mixto-to-mestizo",
    reason:
      "Las fuentes sostienen leyendas regionales campesinas, urbanas y afrocolombianas; Mixto era un contenedor técnico sin procedencia cultural suficiente.",
  },
  boundaries: {
    action: "remove-unverifiable-proper-names-and-fused-biographies",
    reason:
      "Se retiran Mariano Narváez, Don Roque, Pamba Ahumé, Lina, Santiago y Claudia Patricia porque el expediente no localizó sus relatos fuera de la expansión heredada.",
  },
  relationships: {
    action: "identify-jinete-as-sombreron-variant-and-mandingas-as-lexical-complex",
    reason:
      "El jinete negro comparte el núcleo ecuestre del Sombrerón colombiano; Mandingas documenta un nombre popular del diablo y una historia semántica, no un duelo fijo de tamboras.",
  },
  media: {
    action: "prepare-fourteen-openai-flat-paper-cut-images-with-provenance",
    reason:
      "Cada ruta revisada requiere portada horizontal y segunda escena vertical propias con gpt-image-2 en calidad alta.",
  },
};

export function assertVariosMixtoFinalUniverse() {
  if (
    inheritedVariosMixtoFinalSlugs.length !== 8 ||
    reviewedVariosMixtoFinalSlugs.length !== 7 ||
    canonicalVariosMixtoFinalSlugs.length !== 1
  ) {
    throw new Error("Varios Mixto debe heredar ocho, revisar siete y dejar un expediente previo.");
  }
  if (
    reviewedVariosMixtoFinalSlugs.some(
      (slug) => !variosMixtoFinalCategoryBySlug[slug],
    )
  ) {
    throw new Error("Falta taxonomía para una ruta de Varios Mixto.");
  }
  return {
    inherited: 8,
    alreadyReviewed: 1,
    reviewedRoutes: 7,
    canonicalPendingSilbon: 1,
    transferredToMestizo: 7,
    created: 0,
    unpublished: 0,
    imagePairsPending: 7,
  };
}
