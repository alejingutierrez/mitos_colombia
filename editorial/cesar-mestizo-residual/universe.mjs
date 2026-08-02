export const inheritedCesarMestizoResidualSlugs = [
  "la-bruja-del-trinche",
  "la-sirena-de-hurtado",
].sort();

export const canonicalCesarMestizoResidualSlugs = [
  ...inheritedCesarMestizoResidualSlugs,
];

export const reviewedCesarMestizoResidualSlugs = [
  ...canonicalCesarMestizoResidualSlugs,
];

export const cesarMestizoResidualCategoryBySlug = Object.fromEntries(
  reviewedCesarMestizoResidualSlugs.map((slug) => [
    slug,
    "Caribe > Cesar > Mestizo",
  ]),
);

export const cesarMestizoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedCesarMestizoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "caribe", communitySlug: "mestizo" },
  ]),
);

export const cesarMestizoResidualEditorialDecisions = {
  "la-bruja-del-trinche": {
    action: "restore-montufar-escalona-legend-and-separate-quin-vasquez",
    reason:
      "La URL conserva la leyenda de Andrés Montúfar y Dolores Escalona; el trinche y la cruz de la guacharaca pertenecen al relato paralelo de Quín Vásquez y no se atribuyen a Dolores.",
  },
  "la-sirena-de-hurtado": {
    action: "restore-rosario-holy-week-core-and-separate-monument-reception",
    reason:
      "Se conserva la transformación de Rosario Arciniegas en Jueves Santo y su despedida del Viernes; la recepción monumental y turística queda fuera del núcleo narrativo.",
  },
  taxonomy: {
    action: "preserve-two-cesar-mestizo-routes",
    reason:
      "Las dos URL permanecen en Caribe > Cesar > Mestizo sin crear taxonomías ni despublicar por límites documentales.",
  },
  media: {
    action: "replace-four-physical-paper-images-with-openai-flat-illustrations",
    reason:
      "Los prompts heredados pedían fotografías de piezas físicas; cada ruta requiere ahora portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertCesarMestizoResidualUniverse() {
  if (
    inheritedCesarMestizoResidualSlugs.length !== 2 ||
    reviewedCesarMestizoResidualSlugs.length !== 2
  ) {
    throw new Error("El residual Cesar Mestizo debe cubrir dos rutas existentes.");
  }
  return {
    inherited: 2,
    canonical: 2,
    reviewedRoutes: 2,
    added: 0,
    unpublished: 0,
    inheritedEditorialRowsRevised: 2,
    conflationsCorrected: 1,
  };
}
