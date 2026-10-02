export const inheritedAndoqueSlugs = [
  "el-sol-que-nace-en-araracuara",
  "los-gigantes",
  "las-sirenas",
  "los-fantasmas",
  "el-mundo-de-ultratumba",
  "la-venganza-de-los-brujos",
  "la-brujeria-de-la-danta",
  "los-grupos-de-mi-juventud",
  "los-caucheros-de-la-casa-arana",
  "el-retorno-de-plumon-amarillo",
  "el-retorno-de-plumon-de-fiebre",
];

export const addedAndoqueSlugs = [
  "la-guerra-del-palo-hablador",
  "huevo-de-chupaflor-el-diluvio-y-el-fuego",
  "el-aguila-canibal-y-la-madre-de-los-andoques",
];

export const canonicalAndoqueSlugs = [
  ...inheritedAndoqueSlugs,
  ...addedAndoqueSlugs,
].sort();

export const andoqueCategoryBySlug = Object.fromEntries(
  canonicalAndoqueSlugs.map((slug) => [
    slug,
    "Amazonía > Amazonas > Andoque",
  ]),
);

export const andoqueEditorialDecisions = {
  inherited: {
    action: "retain-and-rewrite-eleven-historical-pages",
    reason:
      "Las once fichas coinciden con títulos o núcleos de Tradiciones de la gente del hacha. Se retiran expansiones noveladas y comparaciones no documentadas sin despublicar ninguna URL.",
  },
  additions: {
    action: "add-three-primary-source-cycles",
    reason:
      "Cuentos del diluvio de fuego transcribe tres ciclos fundacionales completos narrados por Yiñeko y Yiñefoque que faltaban en el sitio.",
  },
  historicalTestimonies: {
    action: "retain-with-explicit-genre-label",
    reason:
      "Casa Arana y los dos retornos son testimonios históricos dentro del corpus, no cosmogonías. Se conservan y se rotulan con precisión.",
  },
  plumonStories: {
    action: "keep-distinct",
    reason:
      "El índice de la fuente reserva páginas diferentes para Plumón-amarillo y Plumón-de-fiebre; la revisión no los fusiona sin acceso suficiente para demostrar equivalencia.",
  },
  media: {
    action: "replace-all-inherited-pairs-with-approved-flat-2d-reuse",
    reason:
      "Las veintidós imágenes heredadas y el héroe comunitario parecen maquetas u objetos físicos. Se reutilizan catorce parejas distintas ya aprobadas como ilustración digital 2D full paper cut.",
  },
};

export function assertAndoqueUniverse() {
  if (inheritedAndoqueSlugs.length !== 11) {
    throw new Error("El universo heredado Andoque debe contener once fichas.");
  }
  if (canonicalAndoqueSlugs.length !== 14) {
    throw new Error("El universo canónico Andoque debe contener catorce fichas.");
  }
  if (new Set(canonicalAndoqueSlugs).size !== canonicalAndoqueSlugs.length) {
    throw new Error("El universo Andoque contiene slugs duplicados.");
  }
  return {
    inherited: 11,
    canonical: 14,
    corrected: 11,
    added: 3,
    unified: 0,
  };
}
