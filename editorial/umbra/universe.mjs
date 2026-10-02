export const inheritedUmbraSlugs = ["tasime-el-incesto"];

export const addedUmbraSlugs = [
  "los-jeques-que-desaparecieron-en-batero",
];

export const canonicalUmbraSlugs = [
  ...inheritedUmbraSlugs,
  ...addedUmbraSlugs,
].sort();

export const umbraCategoryBySlug = Object.fromEntries(
  canonicalUmbraSlugs.map((slug) => [slug, "Andina > Caldas > Umbra"]),
);

export const umbraEditorialDecisions = {
  "tasime-el-incesto": {
    action: "correct-name-and-remove-unsupported-amplification",
    becomes: "Tasime: el tigre y el incesto",
    reason:
      "Tasime o tassime significa tigre en el corpus publicado; no está demostrado como nombre propio del hermano ni como relato grabado en el petroglifo.",
  },
  "los-jeques-que-desaparecieron-en-batero": {
    action: "add-community-attributed-contemporary-account",
    reason:
      "Merardo Largo relata explícitamente la desaparición de Batero como una historia estratégica: el rumor ocultó un desplazamiento secreto y la continuidad de la lengua.",
  },
};

export const umbraContextOnlyNarratives = [
  {
    title: "La pezuña del diablo de Sausagua",
    destination: "community-history",
    reason:
      "El testimonio disponible dice que la historia se perdió, está siendo reconstruida y todavía no se conoce su origen; una ficha autónoma completaría vacíos.",
  },
  {
    title: "Taramakunga y la protección de la lengua",
    destination: "historical-context",
    reason:
      "Es una memoria de resistencia histórica que contextualiza Batero y ya se relaciona con el expediente Pirsa; no se duplica como mito independiente.",
  },
  {
    title: "Michua y panteones panregionales",
    destination: "excluded",
    reason:
      "Las síntesis disponibles mezclan pueblos, épocas y equivalencias religiosas sin una cadena suficiente para atribuir nuevos mitos específicamente Umbra.",
  },
];

export function assertUmbraUniverse() {
  if (canonicalUmbraSlugs.length !== 2) {
    throw new Error(
      `El universo Umbra debe contener dos fichas y contiene ${canonicalUmbraSlugs.length}.`,
    );
  }
  if (new Set(canonicalUmbraSlugs).size !== canonicalUmbraSlugs.length) {
    throw new Error("El universo Umbra contiene slugs duplicados.");
  }
  return {
    inherited: inheritedUmbraSlugs.length,
    canonical: canonicalUmbraSlugs.length,
    corrected: 1,
    added: addedUmbraSlugs.length,
    contextualized: umbraContextOnlyNarratives.length,
  };
}
