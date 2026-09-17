export const inheritedPiedecuestaSecondCycleSlugs = [
  "cuento-fantastico",
  "el-diablo-de-umpala",
  "el-griton",
  "la-campana-del-diablo",
  "la-cueva-del-diablo",
  "la-mancarita",
  "nueva-version-de-la-luz-del-limonal",
].sort();

export const addedPiedecuestaSecondCycleSlugs = ["la-bruja-silbona"];

export const canonicalPiedecuestaSecondCycleSlugs = [
  ...inheritedPiedecuestaSecondCycleSlugs,
  ...addedPiedecuestaSecondCycleSlugs,
].sort();

export const reviewedPiedecuestaSecondCycleSlugs = [
  ...canonicalPiedecuestaSecondCycleSlugs,
];

export const piedecuestaSecondCycleCategoryBySlug = Object.fromEntries(
  reviewedPiedecuestaSecondCycleSlugs.map((slug) => [
    slug,
    "Andina > Santander > Mestizo",
  ]),
);

export const piedecuestaSecondCycleTargetTaxonomyBySlug =
  Object.fromEntries(
    reviewedPiedecuestaSecondCycleSlugs.map((slug) => [
      slug,
      { regionSlug: "andina", communitySlug: "mestizo" },
    ]),
  );

export const piedecuestaSecondCycleEditorialDecisions = {
  "la-bruja-silbona": {
    action: "add-documented-urban-vulture-cycle",
    reason:
      "Se incorpora el capítulo faltante como leyenda urbana sobre un gran chulo negro y el testimonio atribuido de Tadeo; no se fusiona con El Silbón ni se transforma el ave en mujer.",
  },
  "la-mancarita": {
    action: "restore-mancara-de-san-francisco-under-legacy-slug",
    reason:
      "La URL heredada se conserva, pero el título y el relato vuelven a La Máncara de San Francisco; se retiran fusión con Oliva y afirmaciones históricas no corroboradas.",
  },
  "cuento-fantastico": {
    action: "classify-as-modern-literary-tale",
    reason:
      "Se conserva el cuento de persecución y dominio fantástico del río como pieza literaria del corpus, no como testimonio oral ni episodio histórico.",
  },
  "la-campana-del-diablo": {
    action: "separate-bell-rumor-from-road-accident",
    reason:
      "Se conservan caracolí, campana, Remigio y accidente, pero no se presenta el atropello como castigo sobrenatural ni se decide entre robo y desaparición fantástica.",
  },
  "el-diablo-de-umpala": {
    action: "restore-felix-rueda-human-explanation",
    reason:
      "El propio Félix explica que las chispas provenían de las herraduras de su caballo; la ficha conserva el apodo y elimina al demonio literal.",
  },
  "la-cueva-del-diablo": {
    action: "restore-mateo-route-and-intact-landscape",
    reason:
      "Se conserva la experiencia atribuida de Mateo entre Alto de Arenas y Pescadero; no se inventa una cueva física ni daños persistentes en el bosque.",
  },
  "nueva-version-de-la-luz-del-limonal": {
    action: "preserve-distinct-valenzuela-variant",
    reason:
      "Se conserva como variante atribuida distinta de La Luz del Limonal de Vicente Arenas, sin probar fechas, biografías, muerte infantil ni eficacia histórica del exorcismo.",
  },
  "el-griton": {
    action: "relocate-from-varios-to-santander",
    reason:
      "La compilación y el estudio lo sitúan entre Pescadero, La Urgua y Umpalá; se corrige su categoría sin fusionarlo con El Silbón.",
  },
  media: {
    action: "prepare-sixteen-openai-images-with-provenance",
    reason:
      "Las ocho rutas requieren portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertPiedecuestaSecondCycleUniverse() {
  if (inheritedPiedecuestaSecondCycleSlugs.length !== 7) {
    throw new Error("El universo heredado debe tener siete rutas.");
  }
  if (addedPiedecuestaSecondCycleSlugs.length !== 1) {
    throw new Error("El frente debe incorporar una sola ruta.");
  }
  if (
    new Set(reviewedPiedecuestaSecondCycleSlugs).size !==
    reviewedPiedecuestaSecondCycleSlugs.length
  ) {
    throw new Error("El segundo ciclo de Piedecuesta contiene duplicados.");
  }
  return {
    inherited: 7,
    added: 1,
    canonical: 8,
    santander: 8,
    relocatedFromVarios: ["el-griton"],
    unpublished: 0,
  };
}
