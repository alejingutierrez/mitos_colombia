export const inheritedPiedecuestaVicenteArenasISlugs = [
  "el-fantasma-de-el-horizonte",
  "el-pollo-de-las-animas",
  "la-mechuda",
  "la-mula-del-diablo",
  "la-mula-maneada",
  "la-puerta-del-perdon",
  "la-sayona-del-cementerio",
].sort();

export const addedPiedecuestaVicenteArenasISlugs = [
  "la-llorona-del-molino",
];

export const canonicalPiedecuestaVicenteArenasISlugs = [
  ...inheritedPiedecuestaVicenteArenasISlugs,
  ...addedPiedecuestaVicenteArenasISlugs,
].sort();

export const reviewedPiedecuestaVicenteArenasISlugs = [
  ...canonicalPiedecuestaVicenteArenasISlugs,
];

export const piedecuestaVicenteArenasICategoryBySlug = Object.fromEntries(
  reviewedPiedecuestaVicenteArenasISlugs.map((slug) => [
    slug,
    "Andina > Santander > Mestizo",
  ]),
);

export const piedecuestaVicenteArenasITargetTaxonomyBySlug =
  Object.fromEntries(
    reviewedPiedecuestaVicenteArenasISlugs.map((slug) => [
      slug,
      { regionSlug: "andina", communitySlug: "mestizo" },
    ]),
  );

export const piedecuestaVicenteArenasIEditorialDecisions = {
  "la-mula-del-diablo": {
    action: "restore-attributed-literary-tragedy",
    reason:
      "Se recupera la adaptación atribuida a Vicente Arenas sin presentar la muerte de Eumelia como expediente histórico, castigo comprobado o escena gráfica.",
  },
  "la-mula-maneada": {
    action: "preserve-romance-without-convicting-petra",
    reason:
      "El romance identifica el rumor con Petra Agudelo, pero no demuestra que fuera bruja ni narra de forma inequívoca una transformación física en mula.",
  },
  "la-llorona-del-molino": {
    action: "add-documented-mill-variant",
    reason:
      "Se incorpora la adaptación faltante de Estampas de mi tierra como variante específica del molino, con atribución literaria y tratamiento no gráfico del daño infantil.",
  },
  "la-mechuda": {
    action: "restore-ambiguous-stream-apparition",
    reason:
      "El romance solo muestra un bulto junto al arroyo y dos alaridos; se retira la criatura de cabellera y anatomía monumental inventada.",
  },
  "el-fantasma-de-el-horizonte": {
    action: "restore-donkey-and-prank-explanations",
    reason:
      "La fuente descubre un burro cojo bajo una manta y conserva una variante de broma humana; no se mantiene un penitente sobrenatural como desenlace único.",
  },
  "la-puerta-del-perdon": {
    action: "separate-material-heritage-from-miracles",
    reason:
      "Se distingue la puerta real de la parroquia de sus curaciones y castigos legendarios, sin recomendar raspar la piedra, comer madera ni romantizar coerción.",
  },
  "la-sayona-del-cementerio": {
    action: "restore-elvira-and-carlos-romantic-cycle",
    reason:
      "Se conserva la leyenda local atribuida a Carlos Vicente Gómez y Elvira, sin convertirla en la Sayona genérica que castiga infidelidades.",
  },
  "el-pollo-de-las-animas": {
    action: "frame-deception-and-exploitation-with-dignity",
    reason:
      "Se retiran insultos capacitistas y se presenta a Ritornelio como una persona explotada mediante engaño, sin inventar diagnóstico ni aparición sobrenatural.",
  },
  media: {
    action: "prepare-sixteen-openai-images-with-provenance",
    reason:
      "Las ocho rutas requieren portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertPiedecuestaVicenteArenasIUniverse() {
  if (inheritedPiedecuestaVicenteArenasISlugs.length !== 7) {
    throw new Error("El universo heredado debe tener siete rutas.");
  }
  if (addedPiedecuestaVicenteArenasISlugs.length !== 1) {
    throw new Error("El frente debe incorporar una sola ruta.");
  }
  if (
    new Set(reviewedPiedecuestaVicenteArenasISlugs).size !==
    reviewedPiedecuestaVicenteArenasISlugs.length
  ) {
    throw new Error("El primer ciclo de Vicente Arenas contiene duplicados.");
  }
  return {
    inherited: 7,
    added: 1,
    canonical: 8,
    santander: 8,
    unpublished: 0,
  };
}
