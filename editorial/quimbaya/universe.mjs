export const inheritedQuimbayaSlugs = ["batatabati", "ipiare-ebachi"].sort();

export const addedQuimbayaSlugs = ["nabsacadas-la-estrella-caida"];

export const canonicalQuimbayaSlugs = [
  ...inheritedQuimbayaSlugs,
  ...addedQuimbayaSlugs,
].sort();

export const quimbayaCategoryBySlug = Object.fromEntries(
  canonicalQuimbayaSlugs.map((slug) => [
    slug,
    "Andina > Caldas > Quimbaya",
  ]),
);

export const quimbayaEditorialDecisions = {
  batatabati: {
    action: "replace-synthetic-princess",
    becomes: "Batatabatí: «ea, juguemos»",
    reason:
      "La fuente temprana no presenta una princesa ni una diosa: Batatabatí es el canto de un juego festivo seguido por música, danza y memoria colectiva.",
  },
  "ipiare-ebachi": {
    action: "identify-modern-literary-legend",
    becomes: "Ipiaré Ebachí y la sandalia del Cumanday",
    reason:
      "La trama puede rastrearse a una pieza periodística indigenista de Gonzalo Uribe Mejía publicada en 1932, no a un testimonio oral prehispánico independiente.",
  },
  "nabsacadas-la-estrella-caida": {
    action: "add-documented-colonial-narrative",
    reason:
      "El relato de 1603 tiene identidad, trama y recepción propias; se incorpora sin repetir la demonización colonial ni convertir a Nabsacadas en una deidad panquimbaya.",
  },
};

export const quimbayaContextOnlyNarratives = [
  {
    title: "La aparición junto al salado de Consota durante la epidemia",
    destination: "community-history",
    reason:
      "Cieza conserva un episodio autónomo, pero el testimonio es muy breve y está atravesado por una epidemia real; requiere otra investigación antes de convertirse en ficha.",
  },
  {
    title: "Tacurumbí",
    destination: "community-history",
    reason:
      "Es un cacique y un río nombrados por Cieza, no el maestro orfebre ficticio de la antigua página de Batatabatí.",
  },
  {
    title: "Bochica, Yuruparí y deidades panindígenas",
    destination: "excluded",
    reason:
      "Las páginas que los presentan como mitos quimbayas trasladan repertorios de otros pueblos sin evidencia de procedencia local.",
  },
];

export function assertQuimbayaUniverse() {
  if (canonicalQuimbayaSlugs.length !== 3) {
    throw new Error(
      `El universo Quimbaya debe contener tres fichas y contiene ${canonicalQuimbayaSlugs.length}.`,
    );
  }
  if (
    new Set(canonicalQuimbayaSlugs).size !== canonicalQuimbayaSlugs.length
  ) {
    throw new Error("El universo Quimbaya contiene slugs duplicados.");
  }
  return {
    inherited: inheritedQuimbayaSlugs.length,
    canonical: canonicalQuimbayaSlugs.length,
    replacedSyntheticStories: 1,
    identifiedModernLiteraryLegends: 1,
    added: addedQuimbayaSlugs.length,
    contextualized: quimbayaContextOnlyNarratives.length,
  };
}
