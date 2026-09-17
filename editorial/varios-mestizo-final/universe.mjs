export const inheritedVariosMestizoFinalSlugs = [
  "el-bus-fantasma",
  "el-judio-errante",
  "la-viudita",
].sort();

export const reviewedVariosMestizoFinalSlugs = [
  ...inheritedVariosMestizoFinalSlugs,
];

export const transferredToAndinaMestizoSlugs = [
  "el-judio-errante",
  "la-viudita",
].sort();

export const canonicalVariosMestizoFinalSlugs =
  inheritedVariosMestizoFinalSlugs.filter(
    (slug) => !transferredToAndinaMestizoSlugs.includes(slug),
  );

export const variosMestizoFinalCategoryBySlug = {
  "la-viudita": "Andina > Nariño > Mestizo",
  "el-judio-errante": "Andina > Boyacá > Mestizo",
  "el-bus-fantasma": "Varios > Varios > Mestizo",
};

export const variosMestizoFinalTargetTaxonomyBySlug = {
  "la-viudita": { regionSlug: "andina", communitySlug: "mestizo" },
  "el-judio-errante": { regionSlug: "andina", communitySlug: "mestizo" },
  "el-bus-fantasma": { regionSlug: "varios", communitySlug: "mestizo" },
};

export const variosMestizoFinalEditorialDecisions = {
  "la-viudita": {
    action: "restore-narino-core-and-separate-widow-variants",
    reason:
      "La base y las fuentes coinciden en Nariño y Pasto; se retiran nombres y biografías inventados y no se fusionan Viudita, Viuda Alegre, Dama Verde ni la variante de Nuquí.",
  },
  "el-judio-errante": {
    action: "reframe-antisemitic-christian-motif-and-localize-tunja-reception",
    reason:
      "La ficha identifica el origen cristiano antijudío, elimina identidades históricas ficticias y centra la recepción colombiana documentada alrededor de Santo Domingo en Tunja.",
  },
  "el-bus-fantasma": {
    action: "replace-fabricated-manuscript-with-two-documented-circulation-cycles",
    reason:
      "Se elimina a Marcel Laforet y su manuscrito sin fuente; se conservan por separado el bus montañoso publicado y la creepypasta bogotana G66.",
  },
  taxonomy: {
    action: "transfer-two-routes-from-varios-to-documented-andean-departments",
    reason:
      "La Viudita pasa a Nariño y el Judío Errante a Boyacá; el Bus Fantasma permanece nacional en Varios porque reúne ciclos geográficos distintos.",
  },
  media: {
    action: "prepare-six-openai-flat-paper-cut-images-with-provenance",
    reason:
      "Cada URL conserva portada horizontal y segunda escena vertical propias, pendientes de gpt-image-2 en calidad alta y full illustration digital paper cut.",
  },
};

export function assertVariosMestizoFinalUniverse() {
  if (
    inheritedVariosMestizoFinalSlugs.length !== 3 ||
    canonicalVariosMestizoFinalSlugs.length !== 1 ||
    reviewedVariosMestizoFinalSlugs.length !== 3
  ) {
    throw new Error(
      "El cierre Varios Mestizo debe revisar tres rutas, transferir dos y conservar una.",
    );
  }
  return {
    inherited: 3,
    canonicalVariosMestizo: 1,
    reviewedRoutes: 3,
    transferredToAndina: 2,
    created: 0,
    unpublished: 0,
    fabricatedCoresRemoved: 2,
    distinctBusCyclesPreserved: 2,
  };
}
