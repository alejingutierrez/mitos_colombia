export const inheritedYaguaSlugs = ["yagua"];

export const transferredYaguaSlugs = ["chimbilaco"];

export const addedYaguaSlugs = [
  "luna-y-sol-yagua",
  "tortuga-y-jaguar-yagua",
  "el-huerfano-yagua",
  "el-calvito-yagua",
  "los-mellizos-de-avispa-yagua",
].sort();

export const canonicalYaguaSlugs = [
  ...inheritedYaguaSlugs,
  ...addedYaguaSlugs,
  ...transferredYaguaSlugs,
].sort();

export const yaguaCategoryBySlug = Object.fromEntries(
  canonicalYaguaSlugs.map((slug) => [
    slug,
    "Amazonía > Amazonas > Yaguas",
  ]),
);

export const yaguaEditorialDecisions = {
  inheritedPage: {
    action: "replace-synthetic-conflation-with-twin-and-water-tree-cycle",
    reason:
      "La ficha heredada mezclaba el origen desde Há, personajes de una recreación literaria, un rito de pubertad, guerras, Luna y Sol y lenguaje de pureza racial. La URL se conserva para el ciclo de Ndanu, Mêna y el árbol del agua, sostenido por múltiples versiones.",
  },
  canonicalUniverse: {
    action: "publish-six-documented-cycles-and-one-contemporary-route",
    reason:
      "Powlison comparó numerosas versiones y delimitó seis conjuntos estables: Luna y Sol, Tortuga y Jaguar, Mellizos, Huérfano, Calvito y Mellizos de Avispa. Chimbilaco se suma como relato contemporáneo regional asociado por habitantes Yagua de La Libertad, claramente separado de los ciclos ancestrales.",
  },
  colombianOriginSummary: {
    action: "contextualize-not-fragment",
    reason:
      "El perfil colombiano resume un origen desde Nawanchi y Há, pero no publica una narración completa atribuida. Se conserva como variante en Historia y Versiones sin rellenar sus vacíos ni crear una séptima ficha artificial.",
  },
  literaryReception: {
    action: "exclude-from-oral-core",
    reason:
      "Petita, Sairango, Yuané y Asento pertenecen a la recepción literaria de Hugo Niño y a notas secundarias posteriores. No se presentan como transcripción oral Yagua.",
  },
  harmfulLanguage: {
    action: "remove-racial-purity-and-demonizing-labels",
    reason:
      "Se eliminan pureza racial, linaje inmortal y rótulos étnicos degradantes de la ficha heredada. Los términos históricos de traducción se explican sin convertirlos en voz editorial.",
  },
  media: {
    action: "generate-fourteen-new-openai-images-with-provenance",
    reason:
      "Las imágenes heredadas carecen de trazabilidad y parten de relatos sintéticos. Los seis ciclos y la ficha contemporánea de Chimbilaco reciben portada y segunda escena propias con gpt-image-2.",
  },
  chimbilacoTransfer: {
    action: "transfer-from-africano-to-yagua-with-contemporary-boundary",
    reason:
      "La versión heredada inventó un guardián afropacífico. Gallego registra el nombre en La Libertad y la asociación Yagua con botes turísticos nocturnos, dentro de un rumor indígena regional contemporáneo.",
  },
};

export const yaguaContextOnlyNarratives = [
  {
    title: "Nawanchi, Há, Turuna y Manunjo",
    reason:
      "El resumen colombiano confirma una tradición diferenciada, pero no ofrece suficiente secuencia pública para una adaptación literaria autónoma sin invención.",
  },
  {
    title: "Petita y Ya-Tuján",
    reason:
      "La evidencia consultable pertenece a una recreación literaria y a una nota secundaria con lenguaje racial impropio; se registra como historia de recepción, no como mito oral canónico.",
  },
  {
    title: "Conocimientos rituales operativos",
    reason:
      "Las fuentes etnográficas contienen detalles de flautas, curare y prácticas chamánicas que no son necesarios para narrar los ciclos públicamente.",
  },
];

export function assertYaguaUniverse() {
  if (inheritedYaguaSlugs.length !== 1) {
    throw new Error("El universo heredado Yagua debe contener una ficha.");
  }
  if (canonicalYaguaSlugs.length !== 7) {
    throw new Error(
      "El universo canónico Yagua debe contener seis ciclos y una ficha contemporánea.",
    );
  }
  if (new Set(canonicalYaguaSlugs).size !== canonicalYaguaSlugs.length) {
    throw new Error("El universo Yagua contiene slugs duplicados.");
  }
  return {
    inherited: 1,
    corrected: 1,
    added: 5,
    transferredFromPacific: 1,
    canonical: 7,
    contextualized: yaguaContextOnlyNarratives.length,
    inheritedConflationsRemoved: 5,
  };
}
