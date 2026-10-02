export const inheritedBariSlugs = [
  "el-dia-en-que-la-luna-y-la-tierra-se-separaron",
];

export const addedBariSlugs = [
  "caminar-liviano-hacia-el-mas-alla",
  "el-gran-arbol-que-hizo-los-rios",
  "nandou-chibaig-y-las-luces-del-cielo",
  "sabaseba-y-los-hijos-de-la-pina",
  "sibabio-y-las-cenizas-del-mundo",
].sort();

export const canonicalBariSlugs = [
  ...inheritedBariSlugs,
  ...addedBariSlugs,
].sort();

export const bariCategoryBySlug = Object.fromEntries(
  canonicalBariSlugs.map((slug) => [
    slug,
    "Andina > Santander > Motilón-Barí",
  ]),
);

export const bariUnifications = {
  "el-dia-en-que-la-luna-y-la-tierra-se-separaron": {
    incorporated: "los-bari-que-bajaron-del-cielo",
    reason:
      "Las dos narraciones explican mediante un bejuco cortado la separación entre el cielo o la Luna y la Tierra; se conservan como variantes identificadas en una sola página.",
  },
  "el-gran-arbol-que-hizo-los-rios": {
    incorporated: "antiguamente-no-existia-agua",
    reason:
      "Los fragmentos del árbol que hunde la tierra y del tronco que contiene el agua son variantes complementarias del mismo núcleo etiológico.",
  },
};

export const bariContextOnlyNarratives = [
  {
    title: "La creación de los animales",
    destination: "sabaseba-y-los-hijos-de-la-pina",
    reason:
      "El mandato comunitario integra las transformaciones de los primeros Barí dentro del ordenamiento de Sabaseba.",
  },
  {
    title: "Antiguamente en la Tierra no había sino montañas",
    destination: "sabaseba-y-los-hijos-de-la-pina",
    reason:
      "Las versiones de Muchú o Mucshura se documentan como episodio del ordenamiento del territorio, sin abrir una página delgada.",
  },
  {
    title: "La historia del monito Pwácari",
    destination: null,
    reason:
      "La propia antología advierte paralelos muy estrechos con ciclos caribes; no se incorpora sin una atribución Barí más firme.",
  },
];

export function assertBariUniverse() {
  if (inheritedBariSlugs.length !== 1) {
    throw new Error(
      `El universo Barí heredado cambió: se esperaba 1 URL y hay ${inheritedBariSlugs.length}.`,
    );
  }
  if (canonicalBariSlugs.length !== 6) {
    throw new Error(
      `El universo Barí canónico debe contener 6 páginas y contiene ${canonicalBariSlugs.length}.`,
    );
  }
  if (new Set(canonicalBariSlugs).size !== canonicalBariSlugs.length) {
    throw new Error("El universo Barí contiene slugs duplicados.");
  }
  return {
    inherited: inheritedBariSlugs.length,
    added: addedBariSlugs.length,
    canonical: canonicalBariSlugs.length,
    unifications: Object.keys(bariUnifications).length,
    contextualized: bariContextOnlyNarratives.length,
  };
}
