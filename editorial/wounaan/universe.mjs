export const sourceWounaanSlugs = [
  "el-baston-de-sueno",
  "la-barca-de-dos-tintas",
  "la-sal-del-weguer",
  "las-manos-de-barro",
].sort();

export const addedWounaanSlugs = ["madre-name"];

export const canonicalWounaanSlugs = [
  ...sourceWounaanSlugs,
  ...addedWounaanSlugs,
].sort();

export const wounaanReviewedSlugs = [...canonicalWounaanSlugs];

export const wounaanRelatedCycle = {
  primary: "la-barca-de-dos-tintas",
  companion: "el-baston-de-sueno",
  reason:
    "Las dos URL conservadas documentan aspectos relacionados de la rogativa: la barca ritual y los sueños que comunican sus motivos.",
};

export const wounaanCategoryBySlug = Object.fromEntries(
  wounaanReviewedSlugs.map((slug) => [
    slug,
    "Pacífico > Chocó > Wounaan",
  ]),
);

export function assertWounaanUniverse() {
  if (sourceWounaanSlugs.length !== 4) {
    throw new Error(
      `El universo Wounaan de origen cambió: se esperaban 4 registros y hay ${sourceWounaanSlugs.length}.`,
    );
  }
  if (canonicalWounaanSlugs.length !== 5) {
    throw new Error(
      `El universo Wounaan canónico debe contener 5 páginas y contiene ${canonicalWounaanSlugs.length}.`,
    );
  }
  if (new Set(canonicalWounaanSlugs).size !== canonicalWounaanSlugs.length) {
    throw new Error("El universo Wounaan contiene slugs duplicados.");
  }
  return {
    source: sourceWounaanSlugs.length,
    canonical: canonicalWounaanSlugs.length,
    added: addedWounaanSlugs.length,
    relatedCyclePages: 2,
  };
}
