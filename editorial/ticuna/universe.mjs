export const inheritedTicunaSlugs = [
  "creacion",
  "el-combate-del-sueno-y-la-palabra",
];

export const addedTicunaSlugs = [
  "origen-del-sol-tikuna",
  "origen-de-la-luna-tikuna",
  "origen-del-friaje-tikuna",
  "la-canoa-de-moe",
];

export const canonicalTicunaSlugs = [
  ...inheritedTicunaSlugs,
  ...addedTicunaSlugs,
].sort();

export const ticunaCategoryBySlug = Object.fromEntries(
  canonicalTicunaSlugs.map((slug) => [
    slug,
    "Amazonía > Amazonas > Ticuna",
  ]),
);

export const ticunaEditorialDecisions = {
  inheritedCreation: {
    action: "retain-slug-replace-yuche-with-ngutapa-cycle",
    reason:
      "La ficha heredada atribuía al pueblo Ticuna un relato de Yuche sin fuente Tikuna identificable. Se conserva la URL y se reemplaza por el nacimiento documentado de Yoí e Ípi desde las rodillas de Ngutapa.",
  },
  inheritedDream: {
    action: "retain-slug-replace-literary-synthetic-page",
    reason:
      "El título heredado remite a una reelaboración literaria y el texto mezclaba un personaje llamado María con la pelazón sin una fuente narrativa verificable. Se conserva la URL y se publica el ciclo documentado de Wone y Eware.",
  },
  additions: {
    action: "add-four-attributed-moruapu-stories",
    reason:
      "La compilación educativa Tikuna atribuye relatos autónomos del Sol, la Luna, el friaje y la canoa de Moe que no estaban en el sitio.",
  },
  sensitiveMaterial: {
    action: "summarize-without-ritual-or-harmful-operational-detail",
    reason:
      "Se nombran violencia, parentesco y transformaciones cuando son indispensables para comprender el argumento, sin recrear escenas gráficas ni convertir prácticas en instrucciones.",
  },
  media: {
    action: "generate-twelve-new-openai-images-with-provenance",
    reason:
      "Las cuatro imágenes heredadas parecían dioramas físicos y no representaban los relatos corregidos. Cada uno de los seis mitos recibe escenas horizontal y vertical propias con gpt-image-2.",
  },
};

export function assertTicunaUniverse() {
  if (inheritedTicunaSlugs.length !== 2) {
    throw new Error("El universo heredado Ticuna debe contener dos fichas.");
  }
  if (canonicalTicunaSlugs.length !== 6) {
    throw new Error("El universo canónico Ticuna debe contener seis fichas.");
  }
  if (new Set(canonicalTicunaSlugs).size !== canonicalTicunaSlugs.length) {
    throw new Error("El universo Ticuna contiene slugs duplicados.");
  }
  return {
    inherited: 2,
    canonical: 6,
    corrected: 2,
    added: 4,
    unified: 0,
  };
}
