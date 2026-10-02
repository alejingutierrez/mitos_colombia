export const inheritedYucunaSlugs = [
  "kanuma",
  "el-origen-de-las-frutas",
  "el-nacimiento-de-los-matapi",
].sort();

export const transferredYucunaSlugs = ["el-origen-de-las-frutas"];

export const addedYucunaSlugs = [
  "karipu-lakena-y-la-primera-noche",
];

export const canonicalYucunaSlugs = [
  "kanuma",
  "el-nacimiento-de-los-matapi",
  ...addedYucunaSlugs,
].sort();

export const reviewedYucunaWorklistSlugs = [
  ...canonicalYucunaSlugs,
  ...transferredYucunaSlugs,
].sort();

export const yucunaCategoryBySlug = {
  kanuma: "Amazonía > Amazonas > Yucuna",
  "el-nacimiento-de-los-matapi": "Amazonía > Amazonas > Yucuna",
  "karipu-lakena-y-la-primera-noche":
    "Amazonía > Amazonas > Yucuna",
  "el-origen-de-las-frutas":
    "Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina",
};

export const yucunaEditorialDecisions = {
  kanuma: {
    action: "retain-one-long-cycle",
    reason:
      "La publicación de Herrera enlaza el robo del Yuruparí, la salida de las primeras mujeres y el regreso de cultivos, frutas y coca. Se conserva una sola URL y se declara que el relato publicado quedó inconcluso.",
  },
  matapi: {
    action: "retain-upichiya-history-within-yucuna-language-context",
    reason:
      "La fuente se identifica como Yukuna-Matapí, nombra Upichiya como autodenominación y explica una historia ancestral en dos partes. La ficha mantiene esa especificidad sin borrar la adopción histórica de la lengua yucuna.",
  },
  karipuLakena: {
    action: "add-one-central-creation-cycle-window",
    reason:
      "Dos versiones atribuidas documentan a los cuatro Karipú Lakena y la obtención de la primera noche. Se añade una sola página centrada en ese episodio y no una ficha por cada elemento creado.",
  },
  fruitTransfer: {
    action: "preserve-url-and-transfer-to-huitoto-murui-muina",
    reason:
      "Monalla Tirisa, Cullo o Yiida Buinama y Monilla/Moniya Amena pertenecen a versiones del Árbol de la Abundancia del Putumayo Huitoto-Muinane. Ninguna fuente consultada sostiene su clasificación Yucuna.",
  },
  restrictedMaterial: {
    action: "contextualize-yurupari-without-operational-detail",
    reason:
      "El Yuruparí forma parte de los argumentos publicados, pero la edición no reproduce instrumentos, fórmulas, dietas, preparación ni instrucciones rituales.",
  },
  media: {
    action: "generate-eight-new-openai-images-with-provenance",
    reason:
      "Las tres parejas heredadas no prueban procedencia con el expediente actual y una fue generada para la comunidad equivocada. Las tres fichas Yucuna y la transferencia Huitoto reciben pares distintos con gpt-image-2.",
  },
};

export const yucunaContextOnlyNarratives = [
  {
    title: "Kawarimi, Kari, Yanama y otros ciclos",
    reason:
      "La etnografía confirma su existencia y numerosos episodios, pero las fuentes abiertas consultadas no ofrecen para todos una narración pública completa y atribuida que pueda adaptarse sin rellenar vacíos.",
  },
  {
    title: "Yuruparí y las mujeres",
    reason:
      "Se mantiene como fuente crítica y variante del ciclo Kanumá, no como página duplicada ni como explicación operativa de un ritual vivo.",
  },
  {
    title: "Conjuros de la noche, agua, pesca y curación",
    reason:
      "Los estudios explican su relación con los mitos, pero las fórmulas y procedimientos no son necesarios para una edición narrativa pública.",
  },
  {
    title: "Otros relatos catalogados por Laurent Fontaine",
    reason:
      "El archivo enumera narraciones sobre Kalapejé, Kapiyú, jaguares, águila harpía, Majnori y otros seres. Se registran como horizonte de investigación, no como fichas nuevas sin revisión individual completa.",
  },
];

export function assertYucunaUniverse() {
  if (inheritedYucunaSlugs.length !== 3) {
    throw new Error("El universo heredado Yucuna debe contener tres fichas.");
  }
  if (canonicalYucunaSlugs.length !== 3) {
    throw new Error("El universo canónico Yucuna debe contener tres fichas.");
  }
  if (reviewedYucunaWorklistSlugs.length !== 4) {
    throw new Error("El frente Yucuna debe revisar cuatro rutas.");
  }
  if (
    new Set(reviewedYucunaWorklistSlugs).size !==
    reviewedYucunaWorklistSlugs.length
  ) {
    throw new Error("El frente Yucuna contiene slugs duplicados.");
  }
  return {
    inherited: 3,
    canonicalYucuna: 3,
    correctedYucuna: 2,
    addedYucuna: 1,
    transferredToHuitoto: 1,
    unpublished: 0,
    contextualized: yucunaContextOnlyNarratives.length,
    reviewedRoutes: 4,
  };
}
