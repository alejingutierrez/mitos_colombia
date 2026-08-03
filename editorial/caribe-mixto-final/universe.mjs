export const inheritedCaribeMixtoFinalSlugs = [
  "beda-nansi-beda-monkey-y-el-molino",
  "el-hombre-caiman",
  "mico-y-nansi",
  "tiger-y-el-baile-de-perros",
  "tigre-y-nansi",
  "un-perro-una-cabra-y-beda-tiger",
].sort();

export const reviewedCaribeMixtoFinalSlugs = [...inheritedCaribeMixtoFinalSlugs];
export const transferredToCaribeMestizoSlugs = ["el-hombre-caiman"];
export const canonicalCaribeMixtoFinalSlugs = inheritedCaribeMixtoFinalSlugs.filter(
  (slug) => !transferredToCaribeMestizoSlugs.includes(slug),
);

export const caribeMixtoFinalCategoryBySlug = Object.fromEntries(
  inheritedCaribeMixtoFinalSlugs.map((slug) => [
    slug,
    slug === "el-hombre-caiman"
      ? "Caribe > Magdalena > Mestizo"
      : "Caribe > San Andrés > Mixto",
  ]),
);

export const caribeMixtoFinalTargetTaxonomyBySlug = Object.fromEntries(
  inheritedCaribeMixtoFinalSlugs.map((slug) => [
    slug,
    {
      regionSlug: "caribe",
      communitySlug: slug === "el-hombre-caiman" ? "mestizo" : "mixto",
    },
  ]),
);

export const caribeMixtoFinalEditorialDecisions = {
  raizalCycle: {
    action: "preserve-five-distinct-raizal-oral-tales",
    reason:
      "Los registros de 1965 documentan cinco argumentos distintos; comparten repertorio y personajes, pero no son duplicados que deban fusionarse.",
  },
  hombreCaiman: {
    action: "transfer-plato-legend-to-caribe-mestizo",
    reason:
      "La tradición se localiza en Plato, Magdalena, y circula como leyenda ribereña mestiza; no pertenece al ciclo raizal ni a una comunidad Mixto homogénea.",
  },
  boundaries: {
    action: "remove-unsourced-cosmic-and-biographical-expansions",
    reason:
      "Se restituyen acciones de las transcripciones y se retiran profecías, rituales, psicologías, objetos lujosos y equivalencias universales añadidas sin respaldo.",
  },
  media: {
    action: "prepare-twelve-openai-flat-paper-cut-images-with-provenance",
    reason:
      "Cada ruta conserva una portada horizontal y una segunda escena vertical propias, pendientes de gpt-image-2 en calidad alta.",
  },
};

export function assertCaribeMixtoFinalUniverse() {
  if (
    inheritedCaribeMixtoFinalSlugs.length !== 6 ||
    canonicalCaribeMixtoFinalSlugs.length !== 5 ||
    reviewedCaribeMixtoFinalSlugs.length !== 6
  ) {
    throw new Error("Caribe Mixto debe revisar seis rutas y conservar cinco.");
  }
  return {
    inherited: 6,
    canonicalCaribeMixto: 5,
    reviewedRoutes: 6,
    transferredToCaribeMestizo: 1,
    created: 0,
    unpublished: 0,
    distinctRaizalTalesPreserved: 5,
    imagePairsPending: 6,
  };
}
