export const inheritedDesanaSlugs = [
  "creacion-desana",
  "guelamun-ye-el-nieto-del-trueno",
  "yurupari",
];

export const addedDesanaSlugs = [
  "el-origen-de-la-noche-desana",
  "nuguye-y-sepiro-fuego-y-creciente",
  "el-origen-de-la-mandioca-desana",
  "gainpaya-y-el-origen-del-chontaduro",
  "agamahsapu-y-el-tiempo-del-umari",
];

export const canonicalDesanaSlugs = [
  ...inheritedDesanaSlugs,
  ...addedDesanaSlugs,
].sort();

export const desanaCategoryBySlug = Object.fromEntries(
  canonicalDesanaSlugs.map((slug) => [
    slug,
    "Amazonía > Vaupés y Alto Río Negro > Desana",
  ]),
);

export const desanaEditorialDecisions = {
  inherited: {
    action: "retain-three-slugs-and-rewrite-from-community-authored-book",
    reason:
      "Las tres URLs heredadas conservan temas reconocibles, pero mezclan grafías, episodios y prosa generada. Se corrigen desde la publicación Desana-Kêhíripõrã.",
  },
  additions: {
    action: "add-five-documented-public-cycles",
    reason:
      "La fuente primaria permite separar la noche, los otros cataclismos, la mandioca, el chontaduro y Ãgãmahsãpu sin inventar relatos nuevos.",
  },
  unification: {
    action: "unify-nuguye-and-sepiro-as-one-cataclysm-card",
    reason:
      "Ambos capítulos completan con Guramüye la secuencia publicada de tres cataclismos; una sola ficha evita fragmentar excesivamente el ciclo.",
  },
  sensitiveMaterial: {
    action: "do-not-adapt-explicit-buhtari-or-operational-ritual-detail",
    reason:
      "Los episodios explícitos de Buhtari Gõãmü y los procedimientos ceremoniales perderían su sentido si se sanitizan o convierten en instrucciones públicas.",
  },
  media: {
    action: "replace-all-six-inherited-pairs-with-eight-approved-flat-2d-pairs",
    reason:
      "Las imágenes heredadas parecen collages o maquetas físicas fotografiadas. Los ocho expedientes reutilizan pares amazónicos ya aprobados como ilustración digital plana.",
  },
};

export function assertDesanaUniverse() {
  if (inheritedDesanaSlugs.length !== 3) {
    throw new Error("El universo heredado Desana debe contener tres fichas.");
  }
  if (canonicalDesanaSlugs.length !== 8) {
    throw new Error("El universo canónico Desana debe contener ocho fichas.");
  }
  if (new Set(canonicalDesanaSlugs).size !== canonicalDesanaSlugs.length) {
    throw new Error("El universo Desana contiene slugs duplicados.");
  }
  return {
    inherited: 3,
    canonical: 8,
    corrected: 3,
    added: 5,
    unified: 1,
  };
}
