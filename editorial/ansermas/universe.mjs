export const inheritedAnsermasSlugs = [
  "los-pasos-de-xixaraca",
  "las-huellas-de-mapura",
].sort();

export const canonicalAnsermasSlugs = [...inheritedAnsermasSlugs];

export const ansermasCategoryBySlug = Object.fromEntries(
  canonicalAnsermasSlugs.map((slug) => [
    slug,
    "Andina > Risaralda > Ansermas",
  ]),
);

export const ansermasEditorialDecisions = {
  "los-pasos-de-xixaraca": {
    action: "unify",
    incorporates: "las-huellas-de-mapura",
    reason:
      "Los dos registros heredados repetían la misma despedida de Xixaraca y Michua, las huellas en roca y las cascadas; ese núcleo queda reunido en una sola narración.",
  },
  "las-huellas-de-mapura": {
    action: "reassign-duplicate-url",
    becomes: "Xixaraca, Michua y los Tamaracas",
    reason:
      "La URL duplicada se conserva para no romper enlaces y pasa a documentar el segundo relato autónomo hallado en las fuentes: la lucha periódica contra los Tamaracas.",
  },
};

export const ansermasContextOnlyNarratives = [
  {
    title: "Xixarama como progenitor del Sol y la Luna",
    destination: "los-pasos-de-xixaraca",
    reason:
      "El dato histórico está bien atestiguado, pero las fuentes públicas no conservan una secuencia narrativa suficiente para abrir una página independiente.",
  },
  {
    title: "Santuarios, jeques y peticiones de lluvia",
    destination: "los-pasos-de-xixaraca",
    reason:
      "Son rasgos de contexto ritual procedentes de cronistas y síntesis posteriores, no un cuento autónomo con trama verificable.",
  },
];

export function assertAnsermasUniverse() {
  if (canonicalAnsermasSlugs.length !== 2) {
    throw new Error(
      `El universo Anserma debe conservar dos URL y contiene ${canonicalAnsermasSlugs.length}.`,
    );
  }
  if (
    new Set(canonicalAnsermasSlugs).size !== canonicalAnsermasSlugs.length
  ) {
    throw new Error("El universo Anserma contiene slugs duplicados.");
  }
  return {
    inherited: inheritedAnsermasSlugs.length,
    canonical: canonicalAnsermasSlugs.length,
    unifiedDuplicates: 1,
    recoveredNarratives: 1,
    contextualized: ansermasContextOnlyNarratives.length,
  };
}
