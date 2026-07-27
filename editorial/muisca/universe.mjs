export const MUISCA_CATEGORY_PATH = "Andina > Varios > Muiscas";

export const classifiedMuiscaSlugs = [
  "bachue",
  "bochica",
  "campos-eliseos",
  "chaquon",
  "chia",
  "chibchacum",
  "chiminigagua",
  "creacion-muiscas",
  "cualanquizan",
  "cuchavira",
  "dioses-lares",
  "dobaida",
  "el-bermejo-aspira-a-ser-rey",
  "el-dorado",
  "el-hijo-del-sol-goranchacha",
  "el-pozo-de-hunzahua",
  "el-primero-de-los-reyes",
  "el-sol-y-la-luna",
  "el-tequendama",
  "en-el-principio-fue-el-maiz",
  "esperanza-en-el-oriente",
  "fu-el-dios-de-la-torpeza",
  "furatena",
  "guateovan",
  "huitaca",
  "hunzahua",
  "idacanzas",
  "la-aparicion-del-hombre",
  "la-cacica-de-guatavita",
  "la-competencia",
  "la-herencia",
  "la-historia-del-bermejo",
  "la-madre-de-los-hombres",
  "la-sombra-creadora",
  "los-cojines-del-zaque",
  "los-dioses-civilizadores",
  "los-mojas",
  "meicuchuca",
  "nemequene",
  "nencatacoa",
  "nompanem",
  "pacanchique",
  "popon",
  "tomagata",
  "veneracion-a-los-soberanos",
];

export const boundaryExclusions = [
  {
    slug: "la-sombra-creadora",
    targetCategoryPath: "Andina > Boyacá > Mixto",
    reason:
      "El relato de Are corresponde al ámbito muzo y al valle del Magdalena, no al corpus muisca.",
  },
  {
    slug: "guateovan",
    targetCategoryPath: "Caribe > Magdalena > Koguis",
    reason:
      "Guateován pertenece al ámbito kogui de la Sierra Nevada de Santa Marta.",
  },
  {
    slug: "dobaida",
    targetCategoryPath: "Andina > Varios > Katíos",
    reason:
      "Dobaida pertenece a tradiciones del ámbito katío, no al pueblo muisca.",
  },
  {
    slug: "esperanza-en-el-oriente",
    targetCategoryPath: "Andina > Varios > Mixto",
    reason:
      "La página es una reelaboración moderna compuesta y no un relato muisca documentado.",
  },
  {
    slug: "dioses-lares",
    targetCategoryPath: "Andina > Tolima > Mixto",
    reason:
      "La página mezcla una categoría romana con materiales del Tolima y no documenta un mito muisca.",
  },
  {
    slug: "cualanquizan",
    targetCategoryPath: "Pacífico > Nariño > Quillacingas",
    reason:
      "Cualanquizan pertenece al ámbito quillacinga de Nariño.",
  },
  {
    slug: "furatena",
    targetCategoryPath: "Andina > Boyacá > Mixto",
    reason:
      "Furatena, Fura y Tena pertenecen al ámbito muzo de Boyacá.",
  },
];

export const boundaryInclusions = [
  {
    slug: "el-origen-del-lago-tota",
    sourceCategoryPath: "Andina > Boyacá > Mixto",
    targetCategoryPath: MUISCA_CATEGORY_PATH,
    reason:
      "El relato está anclado en el lago de Tota y en materiales muiscas de Boyacá.",
  },
  {
    slug: "el-castigo-de-chaquen",
    sourceCategoryPath: "Andina > Boyacá > Mixto",
    targetCategoryPath: MUISCA_CATEGORY_PATH,
    reason:
      "El relato desarrolla a Chaquén y normas rituales expresamente asociadas al mundo muisca.",
  },
  {
    slug: "toquecha-y-toquilla",
    sourceCategoryPath: "Andina > Boyacá > Mixto",
    targetCategoryPath: MUISCA_CATEGORY_PATH,
    reason:
      "Toquechá y Toquilla se sitúa en el territorio y la tradición narrativa muisca de Boyacá.",
  },
];

const excluded = new Set(boundaryExclusions.map(({ slug }) => slug));

export const canonicalMuiscaSlugs = [
  ...classifiedMuiscaSlugs.filter((slug) => !excluded.has(slug)),
  ...boundaryInclusions.map(({ slug }) => slug),
].sort();

export const textualOnlyExclusions = ["el-venado-de-oro", "monserrate"];
