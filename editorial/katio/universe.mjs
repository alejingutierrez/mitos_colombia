export const sourceKatioSlugs = [
  "a-transformacion-del-hombre-que-no-podia-cazar",
  "ancastor",
  "antomia",
  "aribamias",
  "cobaima",
  "coste",
  "creacion-katios",
  "dabeiba",
  "dobaida",
  "el-gusano-gigante",
  "el-origen-del-sol-y-la-luna",
  "el-tesoro-de-dabeiba",
  "fragmentos-de-otras-tradiciones",
  "herupotoarra",
  "icades-name",
  "la-escalera-del-cielo",
  "los-bibidigomias",
  "los-domicoes",
  "sever",
  "tradicion-del-cerro",
  "tradiciones-relativas-a-la-conquista",
].sort();

export const katioBoundaryTransfers = {
  "el-gusano-gigante": {
    region: "Andina",
    community: "Chamí",
    categoryPath: "Andina > Caldas > Chamí",
    reason:
      "La fuente identifica expresamente el relato de Surranabe como Chamí del occidente de Caldas.",
  },
  dobaida: {
    region: "Andina",
    community: "Mixto",
    categoryPath: "Andina > Antioquia > Mixto",
    reason:
      "Dobaida o Dobaiba pertenece a la tradición histórica Cueva del bajo Atrato, no al corpus Katío.",
  },
  "el-tesoro-de-dabeiba": {
    region: "Andina",
    community: "Mixto",
    categoryPath: "Andina > Antioquia > Mixto",
    reason:
      "La búsqueda colonial del tesoro de Dobaida es una tradición histórica regional, no un relato Katío localizado.",
  },
};

export const addedKatioSlugs = ["baha"];

export const canonicalKatioSlugs = [
  ...sourceKatioSlugs.filter(
    (slug) => !Object.prototype.hasOwnProperty.call(katioBoundaryTransfers, slug),
  ),
  ...addedKatioSlugs,
].sort();

export const katioReviewedSlugs = [
  ...canonicalKatioSlugs,
  "dobaida",
  "el-tesoro-de-dabeiba",
].sort();

export const katioCategoryBySlug = Object.fromEntries(
  katioReviewedSlugs.map((slug) => {
    if (["dobaida", "el-tesoro-de-dabeiba"].includes(slug)) {
      return [slug, "Andina > Antioquia > Mixto"];
    }
    if (["cobaima", "el-origen-del-sol-y-la-luna"].includes(slug)) {
      return [slug, "Andina > Chocó > Katíos"];
    }
    return [slug, "Andina > Varios > Katíos"];
  }),
);

export function assertKatioUniverse() {
  if (sourceKatioSlugs.length !== 21) {
    throw new Error(
      `El universo Katío de origen cambió: se esperaban 21 registros y hay ${sourceKatioSlugs.length}.`,
    );
  }
  if (canonicalKatioSlugs.length !== 19) {
    throw new Error(
      `El universo Katío canónico debe contener 19 páginas y contiene ${canonicalKatioSlugs.length}.`,
    );
  }
  if (katioReviewedSlugs.length !== 21) {
    throw new Error(
      `La revisión debe aplicar 21 expedientes y contiene ${katioReviewedSlugs.length}.`,
    );
  }
  const all = [...sourceKatioSlugs, ...addedKatioSlugs];
  if (new Set(all).size !== all.length) {
    throw new Error("El universo Katío contiene slugs duplicados.");
  }
  return {
    source: sourceKatioSlugs.length,
    canonical: canonicalKatioSlugs.length,
    boundaryTransfers: Object.keys(katioBoundaryTransfers).length,
    added: addedKatioSlugs.length,
    reviewed: katioReviewedSlugs.length,
  };
}
