export const inheritedPiedecuestaLegendaryAccountsSlugs = [
  "el-cerro-encantado",
  "el-quijote-piedecuestano",
  "la-vista-del-libertador",
  "un-libertador-piedecuestano",
].sort();

export const canonicalPiedecuestaLegendaryAccountsSlugs = [
  ...inheritedPiedecuestaLegendaryAccountsSlugs,
];

export const reviewedPiedecuestaLegendaryAccountsSlugs = [
  ...canonicalPiedecuestaLegendaryAccountsSlugs,
];

export const piedecuestaLegendaryAccountsCategoryBySlug =
  Object.fromEntries(
    reviewedPiedecuestaLegendaryAccountsSlugs.map((slug) => [
      slug,
      "Andina > Santander > Mestizo",
    ]),
  );

export const piedecuestaLegendaryAccountsTargetTaxonomyBySlug =
  Object.fromEntries(
    reviewedPiedecuestaLegendaryAccountsSlugs.map((slug) => [
      slug,
      { regionSlug: "andina", communitySlug: "mestizo" },
    ]),
  );

export const piedecuestaLegendaryAccountsEditorialDecisions = {
  "el-cerro-encantado": {
    action: "restore-attributed-romance-and-remove-racialized-history",
    reason:
      "Se conserva el romance de Cantera, Bernardino y Arnefo como obra de Vicente Arenas, sin convertir sus estereotipos raciales, su catástrofe o su explicación toponímica en historia local comprobada.",
  },
  "el-quijote-piedecuestano": {
    action: "reframe-colonial-satire-without-inventing-guane-tradition",
    reason:
      "Se restaura la secuencia literaria de Guarguatí y Celedonio, se retira la voz colonial deshumanizante y se distingue el Macaregua histórico de la trama no corroborada.",
  },
  "la-vista-del-libertador": {
    action: "correct-display-title-and-separate-romance-from-itinerary",
    reason:
      "La URL heredada se conserva, el título visible se corrige a La visita del Libertador y las escenas del romance se presentan como memoria literaria, no como itinerario probado de 1819.",
  },
  "un-libertador-piedecuestano": {
    action: "reclassify-as-documented-biographical-memory",
    reason:
      "La página deja de fingir un mito sobrenatural y presenta la semblanza de José María Mantilla como biografía histórica de 1874, con sus elogios y omisiones atribuidos.",
  },
  media: {
    action: "prepare-eight-openai-images-with-provenance",
    reason:
      "Las cuatro rutas requieren portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertPiedecuestaLegendaryAccountsUniverse() {
  if (inheritedPiedecuestaLegendaryAccountsSlugs.length !== 4) {
    throw new Error("El frente debe conservar cuatro rutas heredadas.");
  }
  if (
    new Set(reviewedPiedecuestaLegendaryAccountsSlugs).size !==
    reviewedPiedecuestaLegendaryAccountsSlugs.length
  ) {
    throw new Error("El frente contiene slugs duplicados.");
  }
  return {
    inherited: 4,
    added: 0,
    transferred: 0,
    canonical: 4,
    santander: 4,
    unpublished: 0,
  };
}
