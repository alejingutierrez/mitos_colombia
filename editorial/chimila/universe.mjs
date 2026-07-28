export const inheritedChimilaSlugs = [
  "creacion-chimila",
  "sol-y-luna",
  "el-poblamiento",
  "primeras-guerras",
  "el-diluvio",
  "el-fuego",
  "el-agua",
  "el-maiz",
  "el-gran-verano",
  "el-algodon",
  "el-palo-de-agua",
  "la-mala-mujer",
  "los-muertos-en-el-monte",
  "los-brujos",
  "los-canibales",
  "el-castigo",
  "los-animales-hablan",
  "los-monos",
  "el-hombre-que-sono-con-danta",
  "el-hombre-que-sono-con-caiman",
  "el-morrocoyo",
];

export const addedChimilaSlugs = [
  "yunari-y-las-cinco-tierras",
  "yaau-numirinta-y-las-dos-mazorcas",
];

export const canonicalChimilaSlugs = [
  ...inheritedChimilaSlugs,
  ...addedChimilaSlugs,
].sort();

export const chimilaCategoryBySlug = Object.fromEntries(
  canonicalChimilaSlugs.map((slug) => [
    slug,
    "Caribe > Magdalena > Chimila",
  ]),
);

export const chimilaEditorialDecisions = {
  corpus: {
    action: "retain-twenty-one-and-rewrite-from-primary-corpus",
    reason:
      "Las veintiuna fichas heredadas corresponden una por una al corpus publicado en 1945 y no son duplicados.",
  },
  "el-morrocoyo": {
    action: "remove-synthetic-second-story",
    reason:
      "La historia de Wuacha añadida a la ficha no aparece en el corpus de Tangrutaya Mutsu ni en las fuentes contemporáneas revisadas.",
  },
  "primeras-guerras": {
    action: "retain-as-historical-memory-with-context",
    reason:
      "La frase final sobre la llegada de los blancos pertenece al testimonio de 1945, pero no puede presentarse como reconciliación colonial objetiva.",
  },
  "yunari-y-las-cinco-tierras": {
    action: "add-living-cosmology",
    reason:
      "Fuentes etnográficas y organizativas contemporáneas documentan a Yunari y las cinco tierras como un núcleo Ette ausente del sitio.",
  },
  "yaau-numirinta-y-las-dos-mazorcas": {
    action: "add-community-voiced-creation-account",
    reason:
      "Un reportaje institucional de 2024 y fuentes académicas documentan la creación de los Ette mediante dos mazorcas por Yaau y Numirinta.",
  },
};

export function assertChimilaUniverse() {
  if (inheritedChimilaSlugs.length !== 21) {
    throw new Error("El corpus histórico Ette debe conservar 21 fichas.");
  }
  if (canonicalChimilaSlugs.length !== 23) {
    throw new Error("El universo Ette revisado debe contener 23 fichas.");
  }
  if (new Set(canonicalChimilaSlugs).size !== canonicalChimilaSlugs.length) {
    throw new Error("El universo Ette contiene slugs duplicados.");
  }
  return {
    inherited: inheritedChimilaSlugs.length,
    canonical: canonicalChimilaSlugs.length,
    corrected: inheritedChimilaSlugs.length,
    added: addedChimilaSlugs.length,
    unified: 0,
  };
}

