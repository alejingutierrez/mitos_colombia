export const inheritedBogotaMestizoMemorySlugs = [
  "el-bobo-del-tranvia",
  "el-loco-arias",
  "el-mono-de-la-pila",
  "la-loca-margarita",
  "el-enigmatico-abogado",
  "los-fantasmas-de-la-candelaria",
  "la-leyenda-del-santuario-de-monserrate",
  "el-diablo-del-puente-del-comun",
].sort();

export const canonicalBogotaMestizoMemorySlugs = [
  ...inheritedBogotaMestizoMemorySlugs,
];

export const reviewedBogotaMestizoMemorySlugs = [
  ...canonicalBogotaMestizoMemorySlugs,
];

export const bogotaMestizoMemoryCategorySlugs =
  reviewedBogotaMestizoMemorySlugs.filter(
    (slug) => slug !== "el-diablo-del-puente-del-comun",
  );

export const relocatedCundinamarcaSlugs = [
  "el-diablo-del-puente-del-comun",
];

export const bogotaMestizoMemoryCategoryBySlug = Object.fromEntries(
  reviewedBogotaMestizoMemorySlugs.map((slug) => [
    slug,
    slug === "el-diablo-del-puente-del-comun"
      ? "Andina > Varios > Mestizo"
      : "Andina > Bogotá > Mestizo",
  ]),
);

export const bogotaMestizoMemoryTargetTaxonomyBySlug = Object.fromEntries(
  reviewedBogotaMestizoMemorySlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mestizo" },
  ]),
);

export const bogotaMestizoMemoryEditorialDecisions = {
  "el-bobo-del-tranvia": {
    action: "restore-antonin-urban-memory-with-dignity",
    reason:
      "Se conserva el relato tardío de Antonín y el tranvía, se trata el apodo como vocabulario histórico y se retira el final celestial inventado.",
  },
  "el-loco-arias": {
    action: "restore-street-orator-repertoire",
    reason:
      "Se conserva a Eduardo Arias Jiménez como orador y actor callejero según la leyenda, sin convertir el apodo en diagnóstico ni añadir una doctrina política.",
  },
  "el-mono-de-la-pila": {
    action: "separate-water-history-from-complaint-legend",
    reason:
      "Se corrige la evolución material de la fuente y se presenta el origen de la frase como tradición explicativa, no como espíritu que absorbe quejas.",
  },
  "la-loca-margarita": {
    action: "restore-public-voice-and-question-late-biography",
    reason:
      "Se privilegia la presencia pública y la crónica de 1924, mientras esposo, hijo y desplazamiento quedan como biografía difundida posteriormente y no como certeza.",
  },
  "el-enigmatico-abogado": {
    action: "separate-russi-case-from-ghost-and-verdict",
    reason:
      "Se presenta el proceso de José Raimundo Russi como disputa histórica y memoria política; ni culpabilidad ni inocencia se afirman más allá del veredicto.",
  },
  "los-fantasmas-de-la-candelaria": {
    action: "restore-bounded-urban-ghost-repertoire",
    reason:
      "Se sustituye el catálogo fusionado por un recorrido acotado de relatos distintos y se evita duplicar la ficha individual de Russi.",
  },
  "la-leyenda-del-santuario-de-monserrate": {
    action: "center-lord-fallen-pilgrimage-legends",
    reason:
      "Se conservan peso, cabello, promesas y superstición de novios como creencias atribuidas; se retiran volcán, espíritus muiscas y proezas no corroboradas del relato central.",
  },
  "el-diablo-del-puente-del-comun": {
    action: "relocate-and-separate-florentino-from-esquiaqui",
    reason:
      "El puente está en Chía y pasa a Andina > Varios > Mestizo; Florentino queda en la leyenda y Domingo Esquiaqui en la historia documentada.",
  },
  media: {
    action: "prepare-sixteen-openai-images-with-provenance",
    reason:
      "Las ocho rutas requieren portada horizontal y escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertBogotaMestizoMemoryUniverse() {
  if (inheritedBogotaMestizoMemorySlugs.length !== 8) {
    throw new Error("El universo heredado debe tener ocho rutas.");
  }
  if (bogotaMestizoMemoryCategorySlugs.length !== 7) {
    throw new Error("Deben permanecer siete rutas en Bogotá.");
  }
  if (
    new Set(reviewedBogotaMestizoMemorySlugs).size !==
    reviewedBogotaMestizoMemorySlugs.length
  ) {
    throw new Error("El frente Bogotá mestizo memoria contiene duplicados.");
  }
  return {
    inherited: 8,
    canonical: 8,
    bogota: 7,
    relocatedToAndinaVarios: 1,
    reviewedRoutes: 8,
    unpublished: 0,
  };
}
