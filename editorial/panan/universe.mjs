export const inheritedPananSlugs = [
  "al-duende",
  "el-chuchun-y-las-tres-quebradas",
  "el-chutun",
  "el-cualchio-y-la-olla-del-granizo",
  "el-cucho-de-cuaichala-y-la-bajada-del-palo-santo",
  "el-cueche",
  "la-basilica-encantada",
  "la-cangagua-o-la-chorrera-del-duende",
  "la-entundada-el-quedado-el-espanto",
  "la-huacas",
  "la-laguna-de-maria-panana",
  "la-lechuza-y-el-cuichi-de-cuchicuelan",
  "la-tuta",
  "la-vieja-la-viuda-y-el-anima",
  "la-waka",
];

export const addedPananSlugs = ["guamurran-madre-de-agua"];

export const canonicalPananSlugs = [
  ...inheritedPananSlugs,
  ...addedPananSlugs,
];

export const pananCategoryBySlug = Object.fromEntries(
  canonicalPananSlugs.map((slug) => [
    slug,
    "Pacífico > Nariño > Pananes",
  ]),
);
