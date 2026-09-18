export const inheritedAfrocolombianSlugs = [
  "kijimba-de-las-animas",
  "la-sierpe-de-bete",
].sort();

export const absorbedFromAfricanoSlugs = [
  "anansi",
  "tulavieja-tunda",
].sort();

export const transferredFromMixtoSlugs = [
  "el-riviel-del-rosario",
].sort();

export const addedAfrocolombianSlugs = [
  "como-aparecio-la-muerte-en-el-choco",
].sort();

export const canonicalAfrocolombianSlugs = [
  ...inheritedAfrocolombianSlugs,
  ...absorbedFromAfricanoSlugs,
  ...transferredFromMixtoSlugs,
  ...addedAfrocolombianSlugs,
].sort();

export const reviewedAfrocolombianWorklistSlugs = [
  ...canonicalAfrocolombianSlugs,
].sort();

export const afrocolombianCategoryBySlug = {
  anansi: "Pacífico > Chocó > Afrocolombianos",
  "tulavieja-tunda": "Pacífico > Nariño > Afrocolombianos",
  "kijimba-de-las-animas": "Pacífico > Chocó > Afrocolombianos",
  "la-sierpe-de-bete": "Pacífico > Chocó > Afrocolombianos",
  "el-riviel-del-rosario":
    "Pacífico > Valle del Cauca > Afrocolombianos",
  "como-aparecio-la-muerte-en-el-choco":
    "Pacífico > Chocó > Afrocolombianos",
};

export const afrocolombianEditorialDecisions = {
  taxonomy: {
    action: "unify-africano-into-afrocolombianos",
    reason:
      "La categoría Africano confunde procedencia diaspórica con una comunidad colombiana actual. Anansi y Tunda pasan a Afrocolombianos; la fila vacía solo se retira después de transferir Chimbilaco a Yagua.",
  },
  anansi: {
    action: "restore-ananse-bell-tower-cycle",
    reason:
      "La ficha conserva la URL y presenta el episodio chocoano del sacristán que come hostias, sube al campanario y convierte su voz en una salida astuta.",
  },
  tunda: {
    action: "replace-unverified-tulavieja-expansion",
    reason:
      "La historia de Adriano Lemos no aparece en el expediente consultado. La URL se reutiliza para una versión atribuida de Tumaco donde la Tunda toma el rostro de una madre.",
  },
  kijimba: {
    action: "restore-rosalba-cossio-narration",
    reason:
      "La llave, el amuleto, el Atrato y San Pacho fueron añadidos. Se restituye la narración de Rosalba Cossio García sobre el baile de las ánimas.",
  },
  sierpe: {
    action: "retain-restrained-documented-core",
    reason:
      "Se conserva únicamente la sierpe de tres cabezas que aparece durante fiestas patronales y atemoriza a pescadores, sin poderes ni moralejas inventadas.",
  },
  riviel: {
    action: "transfer-from-mixto-and-restore-mochita",
    reason:
      "La memoria comunitaria de Buenaventura sostiene al Riviel y la mochita que se introduce en canoas y desorienta. No sostiene rosario, castigo religioso ni un pescador individual.",
  },
  death: {
    action: "add-one-page-with-two-attributed-versions",
    reason:
      "Rogerio Velásquez registró una versión tutunendeña y otra munguidoseña sobre la mortalidad. Comparten pregunta, pero se narran por separado sin producir una falsa síntesis.",
  },
  chimbilaco: {
    action: "transfer-to-yagua-as-contemporary-regional-rumor",
    reason:
      "La investigación amazónica lo documenta como rumor contemporáneo interétnico y registra una asociación Yagua específica; no como tradición afrochocoana ni ciclo ancestral exclusivo.",
  },
  media: {
    action: "generate-twelve-new-openai-images-with-provenance",
    reason:
      "Las seis fichas canónicas requieren portada horizontal y segunda escena vertical propias con gpt-image-2, investigación trazable y lenguaje visual digital plano.",
  },
};

export const afrocolombianContextOnlyNarratives = [
  {
    title: "Variantes extensas y sexualizadas de la Tunda",
    reason:
      "Se registran como circulación regional, pero no se convierten en una definición total de la entidad ni se reproducen detalles estigmatizantes.",
  },
  {
    title: "El Riviel como alma de un extranjero o pirata",
    reason:
      "Algunas publicaciones proponen genealogías distintas; la ficha prioriza la memoria comunitaria de Buenaventura y las conserva como variantes.",
  },
  {
    title: "Chimbilaco dentro del Pacífico negro",
    reason:
      "La atribución heredada no está respaldada. Su URL se conserva y pasa al frente Yagua con cautela contemporánea.",
  },
];

export function assertAfrocolombianUniverse() {
  if (inheritedAfrocolombianSlugs.length !== 2) {
    throw new Error("El universo Afrocolombiano heredado debe tener dos fichas.");
  }
  if (canonicalAfrocolombianSlugs.length !== 6) {
    throw new Error("El universo Afrocolombiano canónico debe tener seis fichas.");
  }
  if (
    new Set(reviewedAfrocolombianWorklistSlugs).size !==
    reviewedAfrocolombianWorklistSlugs.length
  ) {
    throw new Error("El frente Afrocolombiano contiene slugs duplicados.");
  }
  return {
    inheritedAfrocolombianos: 2,
    absorbedFromAfricano: 2,
    transferredFromMixto: 1,
    added: 1,
    canonical: 6,
    reviewedRoutes: 6,
    unpublished: 0,
    transferredChimbilacoToYagua: 1,
    contextualized: afrocolombianContextOnlyNarratives.length,
  };
}
