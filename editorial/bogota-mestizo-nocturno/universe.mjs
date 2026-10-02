export const inheritedBogotaMestizoNightSlugs = [
  "el-hombre-del-farol",
  "el-toro-en-el-ascensor",
  "el-venado-de-oro",
  "la-bruja-del-tranvia",
  "la-monja-de-las-rosas",
  "la-monja-vidente-y-el-taxista",
  "la-mula-herrada",
  "los-esqueletos-caminantes",
].sort();

export const canonicalBogotaMestizoNightSlugs = [
  ...inheritedBogotaMestizoNightSlugs,
];

export const reviewedBogotaMestizoNightSlugs = [
  ...canonicalBogotaMestizoNightSlugs,
];

export const bogotaMestizoNightCategoryBySlug = Object.fromEntries(
  reviewedBogotaMestizoNightSlugs.map((slug) => [
    slug,
    "Andina > Bogotá > Mestizo",
  ]),
);

export const bogotaMestizoNightTargetTaxonomyBySlug = Object.fromEntries(
  reviewedBogotaMestizoNightSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mestizo" },
  ]),
);

export const bogotaMestizoNightEditorialDecisions = {
  "el-hombre-del-farol": {
    action: "separate-1828-record-from-literary-manuelito",
    reason:
      "Se conserva el decreto que libera a Llanos tras la declaración de Juan Miguel Acevedo, pero patrón, romance y diálogos quedan como elaboración literaria no triangulada.",
  },
  "el-toro-en-el-ascensor": {
    action: "restore-documented-rumor-with-unstable-place-and-date",
    reason:
      "Se conserva el núcleo del animal que entra a un edificio y embiste a un hombre, sin fijar como certeza el Bachué, la década, la casta ni un recorrido.",
  },
  "el-venado-de-oro": {
    action: "restore-guadalupe-treasure-legend",
    reason:
      "Se conserva a Diego Barreto y el tesoro de Guadalupe; se retiran la transformación ordenada por el Zipa, el venado viviente y la cosmogonía muisca inventada.",
  },
  "la-bruja-del-tranvia": {
    action: "attribute-2004-fiction-and-remove-cortijo-fusion",
    reason:
      "Se restaura la carta ficticia de Ezequiel y el tranvía blanco del libro de 2004; la Bruja del Cortijo permanece como relato distinto.",
  },
  "la-monja-de-las-rosas": {
    action: "restore-fictional-screenplay-at-quinta",
    reason:
      "Se conserva el guion de la niña, la mujer de negro y las rosas amarillas, sin presentarlo como testimonio recurrente ni alternar hábito blanco y negro.",
  },
  "la-monja-vidente-y-el-taxista": {
    action: "restore-traveling-funeral-home-legend",
    reason:
      "Se conserva el viaje a la funeraria y el hallazgo en el ataúd; se separan lotería, escándalos, placas y el segundo fantasma del taxista.",
  },
  "la-mula-herrada": {
    action: "restore-las-nieves-gambler-and-mule",
    reason:
      "Se conserva la mula de don Álvaro Sánchez en Las Nieves y se retiran la hija hondureña, el fraile mexicano y el testimonio ficticio moderno de la trama central.",
  },
  "los-esqueletos-caminantes": {
    action: "attribute-2008-literary-retelling-with-dignity",
    reason:
      "Se conserva la alegoría nocturna atribuida a Asdrúbal López Orozco y se evita presentar a cuerpos no identificados reales como culpables o abandonados.",
  },
  media: {
    action: "prepare-sixteen-openai-images-with-provenance",
    reason:
      "Las ocho rutas requieren portada horizontal y escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertBogotaMestizoNightUniverse() {
  if (inheritedBogotaMestizoNightSlugs.length !== 8) {
    throw new Error("El universo heredado debe tener ocho rutas.");
  }
  if (
    new Set(reviewedBogotaMestizoNightSlugs).size !==
    reviewedBogotaMestizoNightSlugs.length
  ) {
    throw new Error("El frente Bogotá mestizo nocturno contiene duplicados.");
  }
  return {
    inherited: 8,
    canonical: 8,
    bogota: 8,
    reviewedRoutes: 8,
    unpublished: 0,
  };
}
