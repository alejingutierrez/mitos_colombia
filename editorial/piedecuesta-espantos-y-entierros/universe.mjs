export const inheritedPiedecuestaEspantosSlugs = [
  "el-carriazo-de-vereda-san-isidro",
  "el-doctor-galeacer",
  "el-reventon-de-jacobo",
  "la-cueva-de-la-pisca",
  "la-diabla-castigadora",
  "la-hilandera",
  "la-lampara-de-petroleo",
  "la-monedita-en-la-alcancia",
].sort();

export const canonicalPiedecuestaEspantosSlugs = [
  ...inheritedPiedecuestaEspantosSlugs,
];

export const reviewedPiedecuestaEspantosSlugs = [
  ...canonicalPiedecuestaEspantosSlugs,
];

export const piedecuestaEspantosCategoryBySlug = Object.fromEntries(
  reviewedPiedecuestaEspantosSlugs.map((slug) => [
    slug,
    "Andina > Santander > Mestizo",
  ]),
);

export const piedecuestaEspantosTargetTaxonomyBySlug = Object.fromEntries(
  reviewedPiedecuestaEspantosSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mestizo" },
  ]),
);

export const piedecuestaEspantosEditorialDecisions = {
  "la-hilandera": {
    action: "restore-oliva-story-and-remove-mancara-fusion",
    reason:
      "Se conserva el relato atribuido sobre Oliva, el taller de fique y los sonidos posteriores; La Máncara de San Francisco es otra leyenda y sale por completo de esta ficha.",
  },
  "el-doctor-galeacer": {
    action: "restore-horse-fence-oral-version",
    reason:
      "Se conservan pacto, caballo negro, sonidos de animales y cerca intacta; se retiran curaciones, dominio del tiempo, criaturas obedientes y piel estelar inventados.",
  },
  "el-carriazo-de-vereda-san-isidro": {
    action: "restore-three-trials-and-multiple-challengers",
    reason:
      "Se conservan lugar, tesoro, Carriazo, cascabel, toro, Silvio, Reyes y Carmelo; no se reduce el ciclo a un viaje heroico individual.",
  },
  "el-reventon-de-jacobo": {
    action: "restore-window-bones-treasure-chain",
    reason:
      "Se conserva la secuencia publicada de Jacobo, casa, llamado, huesos, entierro y ceguera; se retiran cofre entregado, pacto y causalidades añadidas.",
  },
  "la-cueva-de-la-pisca": {
    action: "restore-turkey-hen-and-poults",
    reason:
      "Pisca significa hembra del pisco o pavo; se conserva la aparición de la pava con polluelos y se elimina la criatura guardiana antropomorfizada.",
  },
  "la-monedita-en-la-alcancia": {
    action: "attribute-family-testimony-with-dignity",
    reason:
      "Se atribuyen huesos, llanto, moneda, luz y rumor de guaca al relato de Alberto Díaz; no se afirma causa de muerte, ocultamiento por honra ni muerte causada por el tesoro.",
  },
  "la-diabla-castigadora": {
    action: "expose-human-disguise-and-reject-violence-as-honor",
    reason:
      "Se conserva el rumor barrial y se explica que Rebeca se disfrazó de Tenorio y agredió a Maribella; no se celebra la paliza como justicia sobrenatural.",
  },
  "la-lampara-de-petroleo": {
    action: "restore-rain-light-witness-chain",
    reason:
      "Se conserva la luz que baja del Cáscaro a La Urgua bajo la lluvia; no se le asigna víctima, identidad, propósito o diagnóstico sobrenatural no documentado.",
  },
  media: {
    action: "prepare-sixteen-openai-images-with-provenance",
    reason:
      "Las ocho rutas requieren portada horizontal y escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertPiedecuestaEspantosUniverse() {
  if (inheritedPiedecuestaEspantosSlugs.length !== 8) {
    throw new Error("El universo heredado debe tener ocho rutas.");
  }
  if (
    new Set(reviewedPiedecuestaEspantosSlugs).size !==
    reviewedPiedecuestaEspantosSlugs.length
  ) {
    throw new Error("El frente Piedecuesta contiene duplicados.");
  }
  return {
    inherited: 8,
    canonical: 8,
    santander: 8,
    reviewedRoutes: 8,
    unpublished: 0,
  };
}
