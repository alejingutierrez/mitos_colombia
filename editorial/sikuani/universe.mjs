export const inheritedSikuaniSlugs = [
  "historia-de-un-brujo",
  "historia-de-un-tigre",
  "kawiri-monae",
  "la-mujer-sarnosa",
  "el-tigre",
  "la-danta-y-el-terecay",
  "historia-de-un-viejo",
  "el-creador-del-cosmos",
  "la-comida-para-los-muertos",
];

export const addedSikuaniSlugs = [
  "kaliwirnae-el-arbol-de-los-alimentos",
];

export const canonicalSikuaniSlugs = [
  ...inheritedSikuaniSlugs,
  ...addedSikuaniSlugs,
].sort();

export const sikuaniCategoryBySlug = Object.fromEntries(
  canonicalSikuaniSlugs.map((slug) => [
    slug,
    "Orinoquía > Llanos Orientales > Sikuani",
  ]),
);

export const sikuaniEditorialDecisions = {
  oralCorpus: {
    action: "retain-and-rewrite-seven-exact-transcriptions",
    reason:
      "Los siete cuentos heredados coinciden con relatos atribuidos a Pedro Martínez y Rita Gaitán en el corpus de Francisco Ortiz; se eliminan las expansiones no documentadas.",
  },
  creator: {
    action: "repurpose-historical-slug-with-documented-cosmogony",
    reason:
      "La página heredada mezclaba nombres Sikuani con un diluvio y un arca de apariencia bíblica; se conserva la URL y se sustituye por la secuencia documentada de Kuwei y Kuemi.",
  },
  tsamani: {
    action: "repurpose-historical-slug-with-community-recording",
    reason:
      "La supuesta comida para muertos no tenía respaldo; el slug se conserva para estabilidad y presenta el canto de la familia Tsamani, relacionado con ascenso celeste, danza y memoria funeraria.",
  },
  kaliwirnae: {
    action: "add-missing-foundational-narrative",
    reason:
      "La Audioteca Digital ICBF ofrece una narración identificada, traducida y localizada sobre el árbol de los alimentos.",
  },
  tigerStories: {
    action: "keep-distinct",
    reason:
      "Historia de un tigre y Cuento del tigre comparten al felino, pero tienen protagonistas, conflictos y desenlaces diferentes.",
  },
  media: {
    action: "replace-all-inherited-pairs-with-approved-flat-2d-reuse",
    reason:
      "Las dieciocho imágenes heredadas parecían objetos físicos o maquetas; se reutilizan diez parejas distintas ya aprobadas como ilustración digital plana full paper cut.",
  },
};

export function assertSikuaniUniverse() {
  if (inheritedSikuaniSlugs.length !== 9) {
    throw new Error("El universo heredado Sikuani debe contener nueve fichas.");
  }
  if (canonicalSikuaniSlugs.length !== 10) {
    throw new Error("El universo canónico Sikuani debe contener diez fichas.");
  }
  if (new Set(canonicalSikuaniSlugs).size !== canonicalSikuaniSlugs.length) {
    throw new Error("El universo Sikuani contiene slugs duplicados.");
  }
  return {
    inherited: 9,
    canonical: 10,
    corrected: 9,
    added: 1,
    unified: 0,
  };
}
