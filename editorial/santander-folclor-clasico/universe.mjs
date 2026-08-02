export const inheritedSantanderClassicFolkloreSlugs = [
  "el-cacique-salomon",
  "el-trapiche-ardiendo",
  "la-piedra-del-muerto",
  "lagunas-encantadas",
  "lo-que-ensenan-las-cuevas",
  "tal-para-cual",
].sort();

export const canonicalSantanderClassicFolkloreSlugs = [
  ...inheritedSantanderClassicFolkloreSlugs,
];

export const reviewedSantanderClassicFolkloreSlugs = [
  ...canonicalSantanderClassicFolkloreSlugs,
];

export const santanderClassicFolkloreCategoryBySlug = Object.fromEntries(
  reviewedSantanderClassicFolkloreSlugs.map((slug) => [
    slug,
    "Andina > Santander > Mestizo",
  ]),
);

export const santanderClassicFolkloreTargetTaxonomyBySlug = Object.fromEntries(
  reviewedSantanderClassicFolkloreSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mestizo" },
  ]),
);

export const santanderClassicFolkloreEditorialDecisions = {
  "el-cacique-salomon": {
    action: "restore-two-attributed-satires-and-explain-title",
    reason:
      "Se conserva el título editorial de Otero D’Costa y se separan la viñeta de Sugamuxi y la de Andrés Guatesique; Salomón es una comparación de sabiduría, no el nombre de un tercer cacique.",
  },
  "el-trapiche-ardiendo": {
    action: "defuse-barbacoa-and-mancarita-from-nazario-account",
    reason:
      "La ruta queda dedicada a la luz anual del trapiche de Nazario dentro de la memoria infantil de Arias; La Barbacoa y La Mancarita dejan de presentarse como partes del mismo mito.",
  },
  "la-piedra-del-muerto": {
    action: "preserve-mogotes-hospitality-legend-without-graphic-harm",
    reason:
      "Se conserva la roca del Mogoticos, el viajero rechazado y la tormenta, sin presentar el castigo celeste, la crueldad del propietario o una virtud colectiva como hechos comprobados.",
  },
  "lagunas-encantadas": {
    action: "restore-regional-cycle-with-attributed-local-variants",
    reason:
      "La página vuelve a ser un ciclo de relatos de Bucaramanga, Galán, Socorro, Girón, Bolívar, Mogotes, San Andrés y Los Santos, sin fusionarlos ni atribuir una cosmología indígena única.",
  },
  "lo-que-ensenan-las-cuevas": {
    action: "restore-cave-cycle-and-protect-archaeological-context",
    reason:
      "El Colmenero, Cenicero, Calentana, Biato, Cueva del Indio y Cachalú se mantienen como relatos distintos; la ficha no da instrucciones de exploración ni convierte restos humanos en tesoro.",
  },
  "tal-para-cual": {
    action: "preserve-contract-satire-without-ableist-equation",
    reason:
      "Se conserva el pacto entre Anselmo y Cirilo y la escritura sobre pecados, pero se retira la ecuación histórica entre bocio, apariencia corporal y falta de inteligencia.",
  },
  media: {
    action: "prepare-twelve-openai-images-with-provenance",
    reason:
      "Las seis rutas requieren portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertSantanderClassicFolkloreUniverse() {
  if (inheritedSantanderClassicFolkloreSlugs.length !== 6) {
    throw new Error("El frente debe conservar seis rutas heredadas.");
  }
  if (
    new Set(reviewedSantanderClassicFolkloreSlugs).size !==
    reviewedSantanderClassicFolkloreSlugs.length
  ) {
    throw new Error("El frente contiene slugs duplicados.");
  }
  return {
    inherited: 6,
    added: 0,
    transferred: 0,
    canonical: 6,
    santander: 6,
    unpublished: 0,
  };
}
