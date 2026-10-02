export const inheritedZenuSlugs = [
  "mexion-y-manexca",
  "la-noche-mas-larga",
  "el-caiman-de-oro",
  "trono-corcovao",
  "el-ojo-de-la-canoa",
  "el-totumo-de-oro",
  "juan-lara-y-la-trenza-del-aire",
].sort();

export const transferredZenuSlugs = [
  "juan-lara-y-la-trenza-del-aire",
];

export const canonicalZenuSlugs = [
  "mexion-y-manexca",
  "la-noche-mas-larga",
  "el-caiman-de-oro",
  "trono-corcovao",
  "el-ojo-de-la-canoa",
  "el-totumo-de-oro",
].sort();

export const reviewedZenuWorklistSlugs = [
  ...canonicalZenuSlugs,
  ...transferredZenuSlugs,
].sort();

export const zenuCategoryBySlug = {
  "mexion-y-manexca": "Caribe > Córdoba > Zenú",
  "la-noche-mas-larga": "Caribe > Córdoba > Zenú",
  "el-caiman-de-oro": "Caribe > Córdoba > Zenú",
  "trono-corcovao": "Caribe > Córdoba > Zenú",
  "el-ojo-de-la-canoa": "Caribe > Sucre > Zenú",
  "el-totumo-de-oro": "Caribe > Córdoba > Zenú",
  "juan-lara-y-la-trenza-del-aire":
    "Caribe > Córdoba > Mestizo",
};

export const zenuEditorialDecisions = {
  creation: {
    action: "retain-one-creation-cycle",
    reason:
      "Mexión, Manexca, Ninha y Thi pertenecen a un mismo ciclo documentado sobre creación, poblamiento, primera luz y primera noche. Se conserva una sola página y se atribuyen las diferencias entre versiones.",
  },
  hatCosmos: {
    action: "repurpose-synthetic-night-route",
    reason:
      "La URL de La noche más larga se conserva, pero la ficción de la babilla y la ceiba se reemplaza por el relato publicado por SMT-ONIC sobre Tarra, Mexión y el sombrero que ordena el universo.",
  },
  goldenCaiman: {
    action: "restore-territorial-guardian",
    reason:
      "La cartografía inventada entre Momil y Lorica se reemplaza por las versiones documentadas del caimán de oro bajo el resguardo, con sus puntos territoriales y variantes visibles.",
  },
  tofeme: {
    action: "restore-corcovao-cycle",
    reason:
      "Corcovao vuelve a ser Tofeme o Mocán, guardián del cerro, del totumo de oro y de señales de tormenta, sin añadir canales, calendarios o diálogos no registrados.",
  },
  torcora: {
    action: "restore-la-sierpe-narrative",
    reason:
      "La ruta conserva su slug, pero el título y la narración identifican a Torcorá, la canoa encantada de La Sierpe y el ojo sellado por un limón de acero.",
  },
  goldenTotumo: {
    action: "separate-totumo-window-from-tofeme",
    reason:
      "La ficha se limita al motivo del objeto tomado que extravía al visitante hasta ser devuelto. Corcovao conserva el ciclo territorial más amplio.",
  },
  juanLara: {
    action: "preserve-url-and-transfer-to-caribbean-mestizo",
    reason:
      "Las compilaciones lo presentan como figura del folclor cordobés, pero no sostienen la trenza del aire, el amuleto de caña flecha ni una atribución específicamente Zenú.",
  },
  media: {
    action: "generate-fourteen-new-openai-images-with-provenance",
    reason:
      "Las siete parejas heredadas ilustran expansiones sintéticas y no prueban la procedencia exigida. Cada ruta revisada recibirá escenas horizontal y vertical propias con gpt-image-2.",
  },
};

export const zenuContextOnlyNarratives = [
  {
    title: "Onomá y el origen del río Cenú",
    reason:
      "Circula en resúmenes secundarios, pero no se encontró una narración pública completa y atribuida suficiente para abrir una ficha.",
  },
  {
    title: "Ixitoco como página independiente",
    reason:
      "SMT-ONIC lo nombra como creador de Mexión y Manexca. El fragmento se conserva como variante del ciclo creador y no se expande por separado.",
  },
  {
    title: "Ninha y Thi como páginas separadas",
    reason:
      "Sol, Luna, primera luz y primera noche forman parte de la secuencia de Mexión y Manexca; fragmentarlos duplicaría un mismo ciclo.",
  },
  {
    title: "Zenufana y los tres señoríos",
    reason:
      "Las crónicas y el Museo del Oro lo presentan como organizador ancestral del Gran Zenú. Se conserva como contexto histórico-mítico hasta hallar una narración atribuida más completa.",
  },
  {
    title: "Mohana, agua viva y prácticas de curación",
    reason:
      "La etnografía confirma su importancia, pero contiene conocimientos sensibles y procedimientos que no son necesarios para una adaptación narrativa pública.",
  },
  {
    title: "Encantos del Pajaral y otros sitios",
    reason:
      "Se registran como horizonte territorial; no se rellenan los episodios fragmentarios con motivos de otras leyendas.",
  },
];

export function assertZenuUniverse() {
  if (inheritedZenuSlugs.length !== 7) {
    throw new Error("El universo heredado Zenú debe contener siete fichas.");
  }
  if (canonicalZenuSlugs.length !== 6) {
    throw new Error("El universo canónico Zenú debe contener seis fichas.");
  }
  if (reviewedZenuWorklistSlugs.length !== 7) {
    throw new Error("El frente Zenú debe revisar siete rutas.");
  }
  if (
    new Set(reviewedZenuWorklistSlugs).size !==
    reviewedZenuWorklistSlugs.length
  ) {
    throw new Error("El frente Zenú contiene slugs duplicados.");
  }
  return {
    inherited: 7,
    canonicalZenu: 6,
    correctedZenu: 6,
    transferredToCaribbeanMestizo: 1,
    added: 0,
    unpublished: 0,
    contextualized: zenuContextOnlyNarratives.length,
    reviewedRoutes: 7,
  };
}
