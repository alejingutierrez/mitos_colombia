export const inheritedAmazonasMixtoResidualSlugs = [
  "chuya-chaqui",
  "el-bufeo",
  "el-cotomachaco",
  "el-chuy-achaque",
  "el-descubrimiento-del-agua-y-los-peces",
  "el-hijo-de-tuhixana",
  "la-cobra-grande",
  "la-curupira",
  "madre-de-playa",
  "ngutapa-y-chimuiyae",
  "petapeta",
  "yacuruna",
].sort();

export const reviewedAmazonasMixtoResidualSlugs = [
  ...inheritedAmazonasMixtoResidualSlugs,
];

export const transferredToTicunaSlugs = [
  "ngutapa-y-chimuiyae",
  "petapeta",
].sort();

export const transferredToUfainaSlugs = [
  "el-descubrimiento-del-agua-y-los-peces",
];

export const canonicalAmazonasMixtoResidualSlugs =
  inheritedAmazonasMixtoResidualSlugs.filter(
    (slug) =>
      !transferredToTicunaSlugs.includes(slug) &&
      !transferredToUfainaSlugs.includes(slug),
  );

const ticunaCategory = "Amazonía > Amazonas > Ticuna";
const ufainaCategory = "Amazonía > Amazonas > Ufaina";
const mixedCategory = "Amazonía > Amazonas > Mixto";

export const amazonasMixtoResidualCategoryBySlug = Object.fromEntries(
  reviewedAmazonasMixtoResidualSlugs.map((slug) => [
    slug,
    transferredToTicunaSlugs.includes(slug)
      ? ticunaCategory
      : transferredToUfainaSlugs.includes(slug)
        ? ufainaCategory
        : mixedCategory,
  ]),
);

export const amazonasMixtoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedAmazonasMixtoResidualSlugs.map((slug) => [
    slug,
    {
      regionSlug: "amazonas",
      communitySlug: transferredToTicunaSlugs.includes(slug)
        ? "ticuna"
        : transferredToUfainaSlugs.includes(slug)
          ? "ufaina"
          : "mixto",
    },
  ]),
);

export const amazonasMixtoResidualEditorialDecisions = {
  universe: {
    action: "review-twelve-residual-routes-with-three-transfers",
    reason:
      "El frente conserva las doce URL: nueve quedan en el repertorio mixto amazónico, dos pasan a Ticuna y una a Ufaina/Tanimuka; no crea ni despublica páginas.",
  },
  "ngutapa-y-chimuiyae": {
    action: "unfuse-ngutapa-and-recenter-chimuyae",
    reason:
      "La ruta mezcló el ciclo de Ngutapa con la odisea de Chimuya-e; se conserva el slug, se retira Ngutapa y se reconstruye únicamente el relato Ticuna documentado por Nimuendajú.",
  },
  petapeta: {
    action: "transfer-attributed-food-seed-story-to-ticuna",
    reason:
      "Milton Jesús Pinto Linares atribuye a Petapeta la canasta de semillas enviada por Yoí y robada por Jau; la ficha deja de ser un cuento genérico de obreros mágicos.",
  },
  "el-descubrimiento-del-agua-y-los-peces": {
    action: "transfer-solarte-tainimuka-literary-version-to-ufaina",
    reason:
      "El catálogo académico identifica como Tainimuka el relato de La Tía reescrito por Fernando Solarte; se transfiere a la comunidad Ufaina/Tanimuka con mediación literaria visible.",
  },
  chullachaquiPair: {
    action: "retain-two-related-but-nonduplicate-routes",
    reason:
      "El Chuyachaque breve y el Chuya-Chaqui de Ahuanari comparten figura, pero el segundo es un episodio literario autónomo de Hugo Niño; se relacionan sin fusionarlos.",
  },
  crossBorder: {
    action: "retain-declared-leticia-and-pan-amazonian-receptions",
    reason:
      "Bufeo, Cotomachaco, Madre de Playa, Cobra Grande, Curupira y Yacuruna permanecen como repertorios mixtos o transfronterizos, con límites de atribución explícitos.",
  },
  media: {
    action: "prepare-twenty-four-openai-images-with-provenance",
    reason:
      "Las doce rutas requieren portada horizontal y escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut y paper quilling.",
  },
};

export function assertAmazonasMixtoResidualUniverse() {
  if (inheritedAmazonasMixtoResidualSlugs.length !== 12) {
    throw new Error("El universo residual heredado debe contener doce rutas.");
  }
  if (canonicalAmazonasMixtoResidualSlugs.length !== 9) {
    throw new Error("Deben permanecer nueve rutas en Amazonas Mixto.");
  }
  if (
    new Set(reviewedAmazonasMixtoResidualSlugs).size !==
    reviewedAmazonasMixtoResidualSlugs.length
  ) {
    throw new Error("El frente residual contiene slugs duplicados.");
  }
  return {
    inherited: 12,
    canonicalMixed: 9,
    transferredToTicuna: 2,
    transferredToUfaina: 1,
    reviewedRoutes: 12,
    created: 0,
    unpublished: 0,
  };
}
