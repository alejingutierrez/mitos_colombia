export const inheritedPacificoMestizoSlugs = [
  "buziraco",
  "el-barco-fantasma",
  "el-caballo-del-morro",
  "el-duende-peluquero",
  "el-padre-mera",
  "el-roble-del-caballero",
  "la-casa-de-la-tradicion",
  "la-piramide-del-chontaduro",
  "la-yesca",
].sort();

export const preservedExternalTransferSlugs = ["el-padre-mera"];

export const canonicalPacificoMestizoSlugs = [
  "buziraco",
  "el-barco-fantasma",
  "el-caballo-del-morro",
  "el-duende-peluquero",
  "el-roble-del-caballero",
  "la-casa-de-la-tradicion",
  "la-piramide-del-chontaduro",
  "la-yesca",
].sort();

export const reviewedPacificoRestanteSlugs = [
  ...canonicalPacificoMestizoSlugs,
];

export const pacificoRestanteCategoryBySlug = {
  buziraco: "Pacífico > Valle del Cauca > Mestizo",
  "el-barco-fantasma": "Pacífico > Varios > Mestizo",
  "el-caballo-del-morro": "Pacífico > Cauca > Mestizo",
  "el-duende-peluquero": "Pacífico > Valle del Cauca > Mestizo",
  "el-roble-del-caballero": "Pacífico > Cauca > Mestizo",
  "la-casa-de-la-tradicion":
    "Pacífico > Valle del Cauca > Mestizo",
  "la-piramide-del-chontaduro":
    "Pacífico > Valle del Cauca > Mestizo",
  "la-yesca": "Pacífico > Chocó > Mestizo",
};

export const pacificoRestanteTargetTaxonomyBySlug = Object.fromEntries(
  reviewedPacificoRestanteSlugs.map((slug) => [
    slug,
    { regionSlug: "pacifico", communitySlug: "mestizo" },
  ]),
);

export const pacificoRestanteEditorialDecisions = {
  buziraco: {
    action: "restore-documented-cali-civic-legend",
    reason:
      "Se restituye la secuencia de calamidades, las cruces de guadua, el sismo y el monumento; la demonización racial de versiones antiguas se identifica críticamente y no se reproduce como verdad.",
  },
  "el-caballo-del-morro": {
    action: "identify-contemporary-literary-story",
    reason:
      "El caballo de Babieca bajo la estatua proviene de un cuento de Marco Antonio Valencia Calle, no de una tradición oral ancestral del Morro de Tulcán.",
  },
  "el-roble-del-caballero": {
    action: "replace-invented-oak-with-authored-quixote-story",
    reason:
      "La URL conserva la ficción contemporánea Muerte y entierro del Quijote en Popayán y elimina el roble custodio que no aparece en el texto del autor.",
  },
  "la-yesca": {
    action: "preserve-sparse-choco-core-without-expansion",
    reason:
      "La documentación solo permite afirmar un daño asociado con brujo o chinango y una imagen de bejucos o ramas que abrazan y ahogan.",
  },
  "el-duende-peluquero": {
    action: "restore-dagua-report-and-generic-braiding-motif",
    reason:
      "Se elimina la biografía ficticia de Buga y Yotoco; la ficha distingue el caso reportado en Dagua de motivos colombianos más amplios sobre niños y crines trenzadas.",
  },
  "la-casa-de-la-tradicion": {
    action: "preserve-minimal-san-antonio-urban-legend",
    reason:
      "La única fuente narrativa directa menciona pasos y voces de antiguos moradores; no identifica dirección, protagonistas, promesas ni rituales.",
  },
  "la-piramide-del-chontaduro": {
    action: "identify-contemporary-origin-rumors",
    reason:
      "La estructura es contemporánea y las fuentes discrepan entre un sueño religioso y un premio de lotería; las energías, extraterrestres y ritos quedan como rumores sin validar.",
  },
  "el-barco-fantasma": {
    action: "complete-blank-route-with-maraveli-cycle",
    reason:
      "La ficha vacía se completa con el Maravelí, barco fantasma que desorienta navegantes del Pacífico, sin fusionarlo con el Riviel.",
  },
  media: {
    action: "generate-sixteen-new-openai-images-with-provenance",
    reason:
      "Las ocho rutas necesitan portada horizontal y escena vertical propias con gpt-image-2, alta calidad y estilo digital plano full paper cut.",
  },
};

export function assertPacificoRestanteUniverse() {
  if (inheritedPacificoMestizoSlugs.length !== 9) {
    throw new Error("El universo heredado debe tener nueve rutas.");
  }
  if (canonicalPacificoMestizoSlugs.length !== 8) {
    throw new Error("El universo canónico debe tener ocho rutas.");
  }
  if (
    new Set(reviewedPacificoRestanteSlugs).size !==
    reviewedPacificoRestanteSlugs.length
  ) {
    throw new Error("El frente Pacífico restante contiene slugs duplicados.");
  }
  return {
    inheritedMestizo: 9,
    transferredExternally: 1,
    canonicalMestizo: 8,
    reviewedRoutes: 8,
    unpublished: 0,
  };
}
