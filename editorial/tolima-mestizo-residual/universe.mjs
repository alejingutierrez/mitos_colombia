export const inheritedTolimaMestizoResidualSlugs = [
  "el-poira",
  "el-sombreron",
  "la-patasola",
].sort();

export const canonicalTolimaMestizoResidualSlugs = [
  ...inheritedTolimaMestizoResidualSlugs,
];

export const reviewedTolimaMestizoResidualSlugs = [
  ...canonicalTolimaMestizoResidualSlugs,
  "la-patasola-mixto",
].sort();

export const tolimaMestizoResidualCategoryBySlug = Object.fromEntries(
  reviewedTolimaMestizoResidualSlugs.map((slug) => [
    slug,
    slug === "la-patasola-mixto"
      ? "Andina > Tolima > Mixto"
      : "Andina > Tolima > Mestizo",
  ]),
);

export const tolimaMestizoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedTolimaMestizoResidualSlugs.map((slug) => [
    slug,
    {
      regionSlug: "andina",
      communitySlug: slug === "la-patasola-mixto" ? "mixto" : "mestizo",
    },
  ]),
);

export const tolimaMestizoResidualEditorialDecisions = {
  "la-patasola": {
    action: "restore-devia-mountain-predator-corpus",
    reason:
      "La ruta principal conserva la Patasola metamórfica descrita por Misael Devia en 1962, atribuye la amputación punitiva a esa versión y retira añadidos sin soporte.",
  },
  "la-patasola-mixto": {
    action: "preserve-nor-mica-source-narrative-with-distinct-scope",
    reason:
      "Las cinco filas del Excel sobre Ñor Mica proceden de un solo relato atribuido a Ricardo Rocha G.; se integran en esta ruta como episodio completo y no como cinco mitos nuevos ni como copia de la ficha general.",
  },
  "el-poira": {
    action: "frame-poira-as-a-tolimense-mohan-configuration",
    reason:
      "Poira queda como nombre o faceta seductora del Mohán ribereño, sin romantizar el rapto ni convertir una atribución folclórica sobre los Pijao en historia prehispánica comprobada.",
  },
  "el-sombreron": {
    action: "restore-gran-tolima-walker-and-separate-foreign-variants",
    reason:
      "El gran sombrero, los caminos y la persecución moral forman el núcleo tolimense; la serenata a una joven recluida en un convento pertenece al Sombrerón guatemalteco y se retira del relato central.",
  },
  taxonomy: {
    action: "preserve-four-existing-routes-with-differentiated-patasola-corpora",
    reason:
      "Tres rutas permanecen en Tolima Mestizo y la Patasola de Ñor Mica conserva su URL en Tolima Mixto; las dos Patasolas dejan de duplicarse porque una documenta el perfil de Devia y la otra un relato fuente completo de Rocha Castilla.",
  },
  media: {
    action: "prepare-eight-openai-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y segunda escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertTolimaMestizoResidualUniverse() {
  if (
    inheritedTolimaMestizoResidualSlugs.length !== 3 ||
    reviewedTolimaMestizoResidualSlugs.length !== 4
  ) {
    throw new Error(
      "El residual Tolima Mestizo debe cubrir tres rutas del grupo y la Patasola cruzada de Tolima Mixto.",
    );
  }
  return {
    inherited: 3,
    canonical: 3,
    reviewedRoutes: 4,
    crossCategoryRoutes: 1,
    added: 0,
    unpublished: 0,
    spreadsheetFragmentsIntegrated: 8,
    distinctPatasolaCorpora: 2,
  };
}
