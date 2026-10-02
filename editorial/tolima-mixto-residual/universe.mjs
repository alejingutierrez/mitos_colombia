export const inheritedTolimaMixtoResidualSlugs = [
  "brujas-y-duendes",
  "dioses-lares",
  "el-cazador",
  "el-chenche",
  "el-guango",
  "el-silbador",
  "el-tunjo",
  "la-candileja",
  "la-madre-agua",
  "la-muelona",
  "la-tarasca",
].sort();

export const canonicalTolimaMixtoResidualSlugs = [
  ...inheritedTolimaMixtoResidualSlugs,
];

export const reviewedTolimaMixtoResidualSlugs = [
  ...canonicalTolimaMixtoResidualSlugs,
];

export const tolimaMixtoResidualCategoryBySlug = Object.fromEntries(
  reviewedTolimaMixtoResidualSlugs.map((slug) => [
    slug,
    "Andina > Tolima > Mixto",
  ]),
);

export const tolimaMixtoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedTolimaMixtoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mixto" },
  ]),
);

export const tolimaMixtoResidualEditorialDecisions = {
  "la-madre-agua": {
    action: "restore-devia-water-presence-and-separate-later-tragedy",
    reason:
      "La ruta vuelve a la joven de pies invertidos y atracción acuática de Devia; la madre en duelo de fuentes posteriores queda atribuida como otra versión.",
  },
  "la-candileja": {
    action: "restore-three-flames-and-attribute-regional-circulation",
    reason:
      "Se conserva la abuela indulgente y las tres llamas, distinguiendo la versión tolimense de sus recepciones llaneras y de la luz culpable de Rocha.",
  },
  "la-muelona": {
    action: "separate-devia-core-from-later-maga-biography",
    reason:
      "La dentadura y el engaño de los caminos forman el núcleo de 1962; La Maga se conserva como biografía posterior y no como historia colonial probada.",
  },
  "el-cazador": {
    action: "restore-invisible-hunter-and-frame-2004-letter-as-fiction",
    reason:
      "El Cazador de Devia es grito, perro y viento sin cuerpo visible; la carta de Roncesvalles de 2004 es un montaje literario.",
  },
  "el-tunjo": {
    action: "separate-folkloric-child-from-archaeological-tunjos",
    reason:
      "El niño lloroso que ofrece riqueza queda separado de las figuras votivas muiscas y de cualquier atribución arqueológica pijao no demostrada.",
  },
  "el-guango": {
    action: "restore-devia-funeral-carrying-corpus",
    reason:
      "Se restaura Guango o Guando como camilla y cortejo rural de Devia, relacionado pero no duplicado con la Barbacoa del Muerto.",
  },
  "el-silbador": {
    action: "restore-southern-tolima-bird-omen",
    reason:
      "Tres silbidos de un pájaro invisible anuncian una desgracia; no se funden con el parricida Silbón ni con la masacre ficticia de 2004.",
  },
  "brujas-y-duendes": {
    action: "preserve-devia-combined-route-with-two-distinct-repertoires",
    reason:
      "La ruta combinada se conserva porque Devia agrupa ambas figuras, pero la redacción distingue transformación de brujas y perturbación doméstica de duendes.",
  },
  "la-tarasca": {
    action: "preserve-colombian-literary-beast-with-source-limits",
    reason:
      "La carta mineralógica y el esqueleto de 1825 pertenecen al libro fantástico de 2004; la circulación colombiana y la Tarasque provenzal se comparan sin afirmar filiación.",
  },
  "el-chenche": {
    action: "preserve-2004-literary-espanto-and-disambiguate-mohan",
    reason:
      "La película encontrada y Servio Cruz son recursos literarios; Chenche se mantiene como nombre editorial del cuento, no como entidad histórica comprobada.",
  },
  "dioses-lares": {
    action: "reframe-1956-roman-analogy-not-indigenous-name",
    reason:
      "La URL se conserva, pero el expediente explica que 'dioses lares' es una comparación católica externa que mezcla Pijao, Coyaima, Natagaima y Lache.",
  },
  taxonomy: {
    action: "preserve-eleven-routes-without-unpublishing-or-new-taxonomy",
    reason:
      "Las once URL permanecen en Andina > Tolima > Mixto; las correcciones ocurren mediante alcance, atribución y límites, no con categorías nuevas.",
  },
  media: {
    action: "prepare-twenty-two-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertTolimaMixtoResidualUniverse() {
  if (
    inheritedTolimaMixtoResidualSlugs.length !== 11 ||
    reviewedTolimaMixtoResidualSlugs.length !== 11
  ) {
    throw new Error("El residual Tolima Mixto debe cubrir once rutas existentes.");
  }
  return {
    inherited: 11,
    canonical: 11,
    reviewedRoutes: 11,
    added: 0,
    unpublished: 0,
    literaryFramesReclassified: 5,
    sourceConflationsCorrected: 6,
  };
}
