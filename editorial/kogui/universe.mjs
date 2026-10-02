export const inheritedKoguiSlugs = [
  "creacion-koguis",
  "el-primer-hombre-y-la-primera-mujer",
  "madre-wastora",
  "kimaku",
  "incesto-de-padre-hija",
  "seiskwisbuche-y-yangauki",
  "el-sol-mama",
  "namaku",
  "kasauge-el-padre-arbol",
  "kashindukwe",
  "nunkasha-y-kashindukwe",
  "canibalismo",
  "naowa-entrega-el-gobierno-a-su-hijo",
  "los-primeros-indios",
  "el-algodon-koguis",
  "el-maiz-koguis",
  "el-arco-iris-susabanka",
  "la-enfermedad-hiwiha",
  "la-candela-gotze",
  "guateovan",
];

export const canonicalKoguiSlugs = [...inheritedKoguiSlugs].sort();

export const koguiCategoryBySlug = Object.fromEntries(
  canonicalKoguiSlugs.map((slug) => [
    slug,
    "Caribe > Magdalena > Koguis",
  ]),
);

export const koguiEditorialDecisions = {
  corpus: {
    action: "retain-twenty-and-rewrite-from-declared-sources",
    reason:
      "Diecinueve fichas corresponden a relatos o episodios diferenciados del corpus etnográfico Kogui y Gauteován procede de una compilación secundaria identificable; no hay duplicados literales.",
  },
  cycles: {
    action: "retain-related-episodes-as-independent-pages",
    reason:
      "Creación, antropogénesis, Naowa, Kimaku y el ciclo de Kashindukwe se relacionan, pero cada ficha conserva una secuencia, un relator o una función narrativa propia.",
  },
  additions: {
    action: "no-new-page",
    reason:
      "La Gran Madre, los nueve mundos, Sintana, el Sol, el poporo, los alimentos y el orden territorial ya aparecen en las fichas existentes; separarlos otra vez produciría duplicación.",
  },
  guateovan: {
    action: "retain-with-source-warning-and-correct-spelling",
    reason:
      "La ficha se conserva como historia de recepción de una síntesis antigua, pero deja de presentarse como transcripción oral autónoma y actualiza el título visible a Gauteován.",
  },
};

export function assertKoguiUniverse() {
  if (inheritedKoguiSlugs.length !== 20) {
    throw new Error("El universo heredado Kogui debe contener 20 fichas.");
  }
  if (canonicalKoguiSlugs.length !== 20) {
    throw new Error("El universo canónico Kogui debe contener 20 fichas.");
  }
  if (new Set(canonicalKoguiSlugs).size !== canonicalKoguiSlugs.length) {
    throw new Error("El universo Kogui contiene slugs duplicados.");
  }
  return {
    inherited: inheritedKoguiSlugs.length,
    canonical: canonicalKoguiSlugs.length,
    corrected: inheritedKoguiSlugs.length,
    added: 0,
    unified: 0,
  };
}
