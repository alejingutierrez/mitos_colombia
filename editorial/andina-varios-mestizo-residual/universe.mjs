export const inheritedAndinaVariosMestizoResidualSlugs = [
  "el-anima-sola",
  "la-barbacoa-del-muerto",
  "la-nina-de-la-carta",
  "la-vieja-colmillona",
  "los-meneses",
].sort();

export const canonicalAndinaVariosMestizoResidualSlugs = [
  ...inheritedAndinaVariosMestizoResidualSlugs,
];

export const reviewedAndinaVariosMestizoResidualSlugs = [
  ...canonicalAndinaVariosMestizoResidualSlugs,
];

export const andinaVariosMestizoResidualCategoryBySlug = Object.fromEntries(
  reviewedAndinaVariosMestizoResidualSlugs.map((slug) => [
    slug,
    "Andina > Varios > Mestizo",
  ]),
);

export const andinaVariosMestizoResidualTargetTaxonomyBySlug =
  Object.fromEntries(
    reviewedAndinaVariosMestizoResidualSlugs.map((slug) => [
      slug,
      { regionSlug: "andina", communitySlug: "mestizo" },
    ]),
  );

export const andinaVariosMestizoResidualEditorialDecisions = {
  "el-anima-sola": {
    action: "separate-popular-devotion-from-2004-literary-note",
    reason:
      "La nota atribuida con reservas a un animero de Marquetalia se presenta como dispositivo del bestiario de 2004; la devoción colombiana a las almas olvidadas se documenta aparte.",
  },
  "la-vieja-colmillona": {
    action: "separate-colmillona-from-muelona-and-fictional-diary-frame",
    reason:
      "La vieja que toma comida del fogón sin quemarse no es la Muelona; el diario de Agustín Moreno pertenece al marco editorial y no queda declarado como archivo auténtico.",
  },
  "la-nina-de-la-carta": {
    action: "reframe-1963-report-as-literary-device-and-preserve-variants",
    reason:
      "El supuesto informe mediúmnico de Itagüí fechado en 1963 carece de corroboración independiente; otras versiones de la carta se registran sin fundirlas en una biografía única.",
  },
  "la-barbacoa-del-muerto": {
    action: "preserve-three-attributed-guando-barbacoa-variants",
    reason:
      "Anselmo Santamaría, la promesa incumplida a Chiquinquirá y el Guando del avaro son explicaciones distintas de la procesión funeraria y quedan atribuidas a sus soportes.",
  },
  "los-meneses": {
    action: "restore-child-spirit-group-as-subject",
    reason:
      "Los Meneses son los muchachos-espíritu que piden monedas y alivian el cansancio; el vagabundo de Anserma es narrador de una nota literaria, no el ser mítico.",
  },
  taxonomy: {
    action: "preserve-five-existing-mestizo-routes",
    reason:
      "Los cinco motivos son diferentes y conservan sus URLs en Andina > Varios > Mestizo; no se despublica ni se fuerza una unificación nominal.",
  },
  media: {
    action: "prepare-ten-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertAndinaVariosMestizoResidualUniverse() {
  if (inheritedAndinaVariosMestizoResidualSlugs.length !== 5) {
    throw new Error("El residual Andina Varios Mestizo debe contener cinco rutas.");
  }
  return {
    inherited: 5,
    canonical: 5,
    reviewedRoutes: 5,
    added: 0,
    unpublished: 0,
    distinctMotifsPreserved: 5,
    spreadsheetVariantsIntegrated: 3,
  };
}
