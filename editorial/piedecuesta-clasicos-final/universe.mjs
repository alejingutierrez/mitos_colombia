export const inheritedPiedecuestaClasicosFinalSlugs = [
  "duende-del-salto",
  "el-anima-coy",
  "los-tunjos-de-la-cantera",
].sort();

export const transferredPiedecuestaClasicosFinalSlugs = ["el-silbon"];

export const addedPiedecuestaClasicosFinalSlugs = [
  "la-luz-del-limonal",
];

export const canonicalPiedecuestaClasicosFinalSlugs = [
  ...inheritedPiedecuestaClasicosFinalSlugs,
  ...transferredPiedecuestaClasicosFinalSlugs,
  ...addedPiedecuestaClasicosFinalSlugs,
].sort();

export const reviewedPiedecuestaClasicosFinalSlugs = [
  ...canonicalPiedecuestaClasicosFinalSlugs,
];

export const piedecuestaClasicosFinalCategoryBySlug = Object.fromEntries(
  reviewedPiedecuestaClasicosFinalSlugs.map((slug) => [
    slug,
    "Andina > Santander > Mestizo",
  ]),
);

export const piedecuestaClasicosFinalTargetTaxonomyBySlug =
  Object.fromEntries(
    reviewedPiedecuestaClasicosFinalSlugs.map((slug) => [
      slug,
      { regionSlug: "andina", communitySlug: "mestizo" },
    ]),
  );

export const piedecuestaClasicosFinalEditorialDecisions = {
  "el-anima-coy": {
    action: "restore-attributed-romance-without-convicting-benedicta",
    reason:
      "Se recupera el romance de 1960 y se atribuyen a su voz las acusaciones contra Benedicta Rovira; no se prueba una muerte ni una transformación.",
  },
  "la-luz-del-limonal": {
    action: "add-original-arenas-variant",
    reason:
      "Se incorpora la adaptación de Estampas de mi tierra como variante propia, separada de la nueva versión de Valenzuela y tratada sin violencia gráfica ni condena de género.",
  },
  "el-silbon": {
    action: "restore-rivera-trapiche-cycle-and-relocate",
    reason:
      "Se devuelve la página al Valle de Guatiguará y al relato de José del Carmen Rivera, sin importar el parricidio, el látigo, el perro o el castigo a mujeriegos de otras tradiciones.",
  },
  "los-tunjos-de-la-cantera": {
    action: "separate-literary-creature-from-archaeological-tunjo",
    reason:
      "Se conserva la historia compensatoria de Silvestre como literatura, pero se distingue de los objetos arqueológicos y se descartan instrucciones de captura, excavación o guaquería.",
  },
  "duende-del-salto": {
    action: "reclassify-as-modern-hybrid-and-prune-fabricated-history",
    reason:
      "La versión de Muki se presenta como composición híbrida de 2016; se retiran atribuciones Guane no demostradas, suicidios, violencia sexual y sucesos coloniales inventados.",
  },
  media: {
    action: "prepare-ten-openai-images-with-provenance",
    reason:
      "Las cinco rutas requieren portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertPiedecuestaClasicosFinalUniverse() {
  if (inheritedPiedecuestaClasicosFinalSlugs.length !== 3) {
    throw new Error("El universo heredado en Santander debe tener tres rutas.");
  }
  if (transferredPiedecuestaClasicosFinalSlugs.length !== 1) {
    throw new Error("El frente debe transferir una sola ruta.");
  }
  if (addedPiedecuestaClasicosFinalSlugs.length !== 1) {
    throw new Error("El frente debe incorporar una sola ruta.");
  }
  if (
    new Set(reviewedPiedecuestaClasicosFinalSlugs).size !==
    reviewedPiedecuestaClasicosFinalSlugs.length
  ) {
    throw new Error("El ciclo clásico final contiene duplicados.");
  }
  return {
    inherited: 3,
    transferred: 1,
    added: 1,
    canonical: 5,
    santander: 5,
    relocatedFromVarios: ["el-silbon"],
    unpublished: 0,
  };
}
