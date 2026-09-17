export const inheritedCaldasMestizoSlugs = [
  "cuento-de-animas",
  "de-frente-al-sol",
  "el-aserrador",
  "el-cacique-cumanday",
  "el-coco",
  "el-cole-cabuya",
  "el-viejo-del-costal",
  "in-illo-tempore",
  "las-brujas",
].sort();

export const canonicalCaldasMestizoSlugs = [
  ...inheritedCaldasMestizoSlugs,
];

export const reviewedCaldasMestizoSlugs = [
  ...canonicalCaldasMestizoSlugs,
];

export const caldasMestizoCategorySlugs = [
  "de-frente-al-sol",
  "el-aserrador",
  "el-cacique-cumanday",
  "el-coco",
  "el-cole-cabuya",
  "el-viejo-del-costal",
  "in-illo-tempore",
  "las-brujas",
].sort();

export const relocatedSantanderSlugs = ["cuento-de-animas"];

export const caldasMestizoCategoryBySlug = {
  "cuento-de-animas": "Andina > Santander > Mestizo",
  "de-frente-al-sol": "Andina > Caldas > Mestizo",
  "el-aserrador": "Andina > Caldas > Mestizo",
  "el-cacique-cumanday": "Andina > Caldas > Mestizo",
  "el-coco": "Andina > Caldas > Mestizo",
  "el-cole-cabuya": "Andina > Caldas > Mestizo",
  "el-viejo-del-costal": "Andina > Caldas > Mestizo",
  "in-illo-tempore": "Andina > Caldas > Mestizo",
  "las-brujas": "Andina > Caldas > Mestizo",
};

export const caldasMestizoTargetTaxonomyBySlug = Object.fromEntries(
  reviewedCaldasMestizoSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mestizo" },
  ]),
);

export const caldasMestizoEditorialDecisions = {
  "cuento-de-animas": {
    action: "relocate-authored-santander-tales",
    reason:
      "Los episodios de Laurián y Ñuá Ulogia son recreaciones literarias de Enrique Otero D’Costa situadas en Rionegro y Girón, Santander; la URL se conserva sin atribuirlas a Caldas.",
  },
  "de-frente-al-sol": {
    action: "identify-authored-colonial-fiction",
    reason:
      "Se conserva el cuento firmado de Otero D’Costa y se separa su perspectiva heroica de la historia verificable de conquista, encomienda y resistencia.",
  },
  "in-illo-tempore": {
    action: "identify-authored-conquest-fiction",
    reason:
      "La lealtad de Jerónimo de Vezga es una ficción histórica firmada, no una tradición oral anónima ni una crónica literal.",
  },
  "el-aserrador": {
    action: "restore-rafael-toro-and-el-unon",
    reason:
      "El aserrador es Rafael Toro; la figura que lo persigue es el Uñón. Se restaura el episodio de Supía la Alta y la incertidumbre expresada por el propio relato.",
  },
  "el-cacique-cumanday": {
    action: "preserve-literary-legend-with-attribution-boundary",
    reason:
      "La leyenda de Fabio Vélez Correa se conserva como obra firmada. Su propuesta de que Cumanday fuera páez se declara conjetural y no se presenta como memoria nasa.",
  },
  "el-coco": {
    action: "separate-abstract-coco-from-riosucio-calabash-stagings",
    reason:
      "La figura incorpórea usada para asustar niños se distingue de dos escenificaciones con calabazos documentadas en Riosucio.",
  },
  "el-cole-cabuya": {
    action: "preserve-san-lorenzo-core-with-critical-boundary",
    reason:
      "Se conserva el animal nocturno de cola de cabuya y los lugares registrados, sin convertir la censura de uniones incestuosas en juicio sobre una comunidad.",
  },
  "el-viejo-del-costal": {
    action: "restore-sparse-childhood-threat",
    reason:
      "Se conserva al viejo limosnero, la Mano Peluda y el costal. Se retiran la redención, la peregrinación y otras biografías no documentadas.",
  },
  "las-brujas": {
    action: "focus-on-clementina-and-separate-aspasia",
    reason:
      "La ficha se centra en Clementina, personaje del relato firmado de Rodrigo Jiménez Mejía; Aspasia pertenece a la novela La bruja de las minas y no se fusiona con ella.",
  },
  media: {
    action: "prepare-eighteen-openai-images-with-provenance",
    reason:
      "Las nueve rutas requieren portada horizontal y escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertCaldasMestizoUniverse() {
  if (inheritedCaldasMestizoSlugs.length !== 9) {
    throw new Error("El universo heredado debe tener nueve rutas.");
  }
  if (caldasMestizoCategorySlugs.length !== 8) {
    throw new Error("Deben permanecer ocho rutas en Caldas.");
  }
  if (
    new Set(reviewedCaldasMestizoSlugs).size !==
    reviewedCaldasMestizoSlugs.length
  ) {
    throw new Error("El frente Caldas mestizo contiene slugs duplicados.");
  }
  return {
    inherited: 9,
    canonical: 9,
    caldas: 8,
    relocatedToSantander: 1,
    reviewedRoutes: 9,
    unpublished: 0,
  };
}
