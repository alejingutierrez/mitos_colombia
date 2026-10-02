export const inheritedAndinaLegacyEditorialResidualSlugs = [
  "catalina-la-napanga",
  "el-silbo-de-quinunchu",
].sort();

export const reviewedAndinaLegacyEditorialResidualSlugs = [
  ...inheritedAndinaLegacyEditorialResidualSlugs,
  "el-hada-de-los-canaverales",
].sort();

export const canonicalAndinaLegacyEditorialResidualSlugs = [
  ...reviewedAndinaLegacyEditorialResidualSlugs,
];

export const andinaLegacyEditorialResidualCategoryBySlug = {
  "catalina-la-napanga": "Andina > Cauca > Mestizo",
  "el-hada-de-los-canaverales": "Andina > Valle del Cauca > Mestizo",
  "el-silbo-de-quinunchu": "Andina > Antioquia > Mestizo",
};

export const andinaLegacyEditorialResidualTargetTaxonomyBySlug =
  Object.fromEntries(
    reviewedAndinaLegacyEditorialResidualSlugs.map((slug) => [
      slug,
      { regionSlug: "andina", communitySlug: "mestizo" },
    ]),
  );

export const andinaLegacyEditorialResidualEditorialDecisions = {
  "catalina-la-napanga": {
    action: "separate-1591-archive-from-contemporary-literary-legend",
    reason:
      "La ruta conserva la recreación de Valencia Calle como leyenda literaria, pero la contrasta con el expediente de 1591 y no presenta adulterio, disfraz de ñapanga ni romance como hechos comprobados.",
  },
  "el-hada-de-los-canaverales": {
    action: "retain-route-as-disclosed-contemporary-editorial-fable",
    reason:
      "No apareció una tradición independiente con ese nombre; la URL se conserva, sin despublicar, como fábula contemporánea del sitio sostenida por contexto histórico, laboral y ambiental verificable.",
  },
  "el-silbo-de-quinunchu": {
    action: "replace-invented-whistle-with-documented-guaca-resistance",
    reason:
      "Cieza, Simón y estudios posteriores documentan a Quinunchú como hermano y lugarteniente de Nutibara en Guacá y Abibe, pero no el silbo, la Dueña del Monte ni la ruta mágica heredada.",
  },
  taxonomy: {
    action: "normalize-three-routes-under-andina-mestizo-with-departments",
    reason:
      "Catalina conserva Cauca, Quinunchú gana Antioquia y el Hada pasa de comunidad nula a Mestizo bajo Valle del Cauca; no se crean taxonomías nuevas ni se elimina una URL.",
  },
  media: {
    action: "prepare-six-openai-flat-paper-cut-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y escena vertical distintas con OpenAI gpt-image-2, calidad alta e ilustración digital plana full paper cut y paper quilling.",
  },
};

export function assertAndinaLegacyEditorialResidualUniverse() {
  if (
    inheritedAndinaLegacyEditorialResidualSlugs.length !== 2 ||
    reviewedAndinaLegacyEditorialResidualSlugs.length !== 3
  ) {
    throw new Error(
      "El residual legacy andino debe partir de dos rutas Mestizo y revisar tres URL.",
    );
  }
  return {
    inheritedMestizo: 2,
    canonicalMestizo: 3,
    reviewedRoutes: 3,
    transferredFromNullCommunity: 1,
    created: 0,
    unpublished: 0,
    inventedSupernaturalCoresRemoved: 2,
    disclosedContemporaryFables: 1,
  };
}
