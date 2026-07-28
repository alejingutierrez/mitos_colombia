export const inheritedCuycuyesSlugs = [
  "el-diablo",
  "el-tesoro-del-pipinta",
].sort();

export const canonicalCuycuyesSlugs = [...inheritedCuycuyesSlugs];

export const cuycuyesCategoryBySlug = Object.fromEntries(
  canonicalCuycuyesSlugs.map((slug) => [
    slug,
    "Andina > Caldas > Cuycuyes",
  ]),
);

export const cuycuyesEditorialDecisions = {
  "el-diablo": {
    action: "correct-colonial-mistranslation",
    becomes: "El ser de los ojos resplandecientes",
    reason:
      "La página heredada fundía dos datos distintos: Cieza no nombra a la figura del oratorio y el vocabulario de Uribe Ángel traduce Calgari o Calgavi como Dios, mientras reserva Antomiá para Diablo.",
  },
  "el-tesoro-del-pipinta": {
    action: "replace-synthetic-story",
    remains: "El tesoro de Pipintá",
    reason:
      "Se conserva la URL, pero se elimina la Señora vegetal, el círculo de sal y las plagas inventadas para reconstruir las dos variantes publicadas: el itinerario de la cueva y el espejismo de los arrieros.",
  },
};

export const cuycuyesContextOnlyNarratives = [
  {
    title: "Maitamá y Cirigua en la resistencia a la conquista",
    destination: "community-history",
    reason:
      "Las fuentes conservan acontecimientos y personajes históricos, pero no una narración mítica autónoma que justifique otra página.",
  },
  {
    title: "Acusaciones coloniales de sacrificio y canibalismo",
    destination: "el-diablo",
    reason:
      "Son afirmaciones de cronistas en disputa y deben contextualizarse como archivo colonial, no convertirse en escenas legendarias nuevas.",
  },
];

export function assertCuycuyesUniverse() {
  if (canonicalCuycuyesSlugs.length !== 2) {
    throw new Error(
      `El universo Cuycuy debe conservar dos URL y contiene ${canonicalCuycuyesSlugs.length}.`,
    );
  }
  if (
    new Set(canonicalCuycuyesSlugs).size !== canonicalCuycuyesSlugs.length
  ) {
    throw new Error("El universo Cuycuy contiene slugs duplicados.");
  }
  return {
    inherited: inheritedCuycuyesSlugs.length,
    canonical: canonicalCuycuyesSlugs.length,
    correctedColonialMistranslations: 1,
    replacedSyntheticStories: 1,
    added: 0,
    contextualized: cuycuyesContextOnlyNarratives.length,
  };
}
