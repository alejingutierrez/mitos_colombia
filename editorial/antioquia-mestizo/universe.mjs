export const inheritedAntioquiaMestizoSlugs = [
  "el-paton",
  "el-perro-negro",
  "la-cabellona",
  "la-dama-verde",
  "la-rodillona",
  "las-ilusiones",
  "los-rescoldos",
  "maria-centeno",
  "maria-la-larga",
  "no-hay-deuda-que-no-se-pague",
].sort();

export const canonicalAntioquiaMestizoSlugs = [
  ...inheritedAntioquiaMestizoSlugs,
];

export const reviewedAntioquiaMestizoSlugs = [
  ...canonicalAntioquiaMestizoSlugs,
];

export const antioquiaMestizoCategorySlugs = [
  "el-paton",
  "el-perro-negro",
  "la-cabellona",
  "la-dama-verde",
  "la-rodillona",
  "las-ilusiones",
  "los-rescoldos",
  "maria-centeno",
  "maria-la-larga",
].sort();

export const relocatedCaldasSlugs = ["no-hay-deuda-que-no-se-pague"];

export const antioquiaMestizoCategoryBySlug = Object.fromEntries(
  reviewedAntioquiaMestizoSlugs.map((slug) => [
    slug,
    slug === "no-hay-deuda-que-no-se-pague"
      ? "Andina > Caldas > Mestizo"
      : "Andina > Antioquia > Mestizo",
  ]),
);

export const antioquiaMestizoTargetTaxonomyBySlug = Object.fromEntries(
  reviewedAntioquiaMestizoSlugs.map((slug) => [
    slug,
    { regionSlug: "andina", communitySlug: "mestizo" },
  ]),
);

export const antioquiaMestizoEditorialDecisions = {
  "el-paton": {
    action: "restore-pedagogical-anthology-version",
    reason:
      "Se retiran el Sasquatch, los ecologistas asesinados y el profesor Armando Bulla; el núcleo documentado es un hombre de pies enormes que daña la vegetación sin intención.",
  },
  "el-perro-negro": {
    action: "restore-antioquia-road-apparition",
    reason:
      "Se elimina la biografía de Aurora y la mezcla con calaveras, canódromos y bodas; se conserva el perro caminero asociado por los compiladores con el Patas.",
  },
  "la-cabellona": {
    action: "separate-antioquia-cabellona-from-socorro-mechuda",
    reason:
      "La aparición vespertina de caminos antioqueños se distingue de la Mechuda del Socorro; ninguna versión sustenta el castigo angélico por vanidad.",
  },
  "la-dama-verde": {
    action: "restore-urban-green-apparition",
    reason:
      "Se retiran Damián Robledo y el tesoro de Santa Fe; queda la figura urbana de bayetón verde y las explicaciones locales como versiones incompatibles.",
  },
  "la-rodillona": {
    action: "restore-roadside-mocking-apparition",
    reason:
      "Se eliminan Aquileo, Virgelina y el vendaval inventados; se conserva el espanto burlón de barranco, su risa y sus rasgos corporales.",
  },
  "las-ilusiones": {
    action: "restore-plural-fear-created-shadows",
    reason:
      "Se eliminan Matilde, la casona y San Justina; las Ilusiones Malas son sombras y ruidos que la imaginación alimenta en cocinas y caminos rurales.",
  },
  "los-rescoldos": {
    action: "rename-rescoldados-and-restore-sparse-arriero-motif",
    reason:
      "El título editorial pasa a Los Rescoldados y se elimina a Justiniano; las fuentes solo sostienen pequeños diablos que danzan sobre fogones de arrieros.",
  },
  "maria-centeno": {
    action: "separate-legend-adaptation-from-colonial-mining-history",
    reason:
      "La adaptación del becerro y el tesoro se conserva con autoría visible, mientras la historia nombra la esclavización y cuestiona la celebración minera heredada.",
  },
  "maria-la-larga": {
    action: "restore-andes-local-memory",
    reason:
      "Se recupera la variante de Andes con el camino de Santa Rita, los zapatos claveteados y la Poceta de la Virgen, sin biografía ni agresión inventadas.",
  },
  "no-hay-deuda-que-no-se-pague": {
    action: "relocate-authored-arma-legend",
    reason:
      "La obra firmada de Enrique Otero D’Costa ocurre en la Villa de Arma, hoy Caldas; conserva la URL, corrige la categoría y no presenta el pacto como biografía comprobada.",
  },
  media: {
    action: "prepare-twenty-openai-images-with-provenance",
    reason:
      "Las diez rutas requieren portada horizontal y escena vertical propias con gpt-image-2, calidad alta e ilustración digital plana full paper cut.",
  },
};

export function assertAntioquiaMestizoUniverse() {
  if (inheritedAntioquiaMestizoSlugs.length !== 10) {
    throw new Error("El universo heredado debe tener diez rutas.");
  }
  if (antioquiaMestizoCategorySlugs.length !== 9) {
    throw new Error("Deben permanecer nueve rutas en Antioquia.");
  }
  if (
    new Set(reviewedAntioquiaMestizoSlugs).size !==
    reviewedAntioquiaMestizoSlugs.length
  ) {
    throw new Error("El frente Antioquia mestizo contiene slugs duplicados.");
  }
  return {
    inherited: 10,
    canonical: 10,
    antioquia: 9,
    relocatedToCaldas: 1,
    reviewedRoutes: 10,
    unpublished: 0,
  };
}
