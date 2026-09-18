export const inheritedUfainaSlugs = ["creacion-ufaina"];

export const addedUfainaSlugs = [];

export const canonicalUfainaSlugs = ["creacion-ufaina"];

export const ufainaCategoryBySlug = {
  "creacion-ufaina": "Amazonía > Amazonas > Ufaina",
};

export const ufainaEditorialDecisions = {
  cycle: {
    action: "retain-one-continuous-origin-cycle",
    reason:
      "Martín von Hildebrand dividió el registro de 1975 en cuarenta y cuatro capítulos para destacar temas, pero aclaró que los narradores Ufaina lo contaban de manera seguida. La revisión conserva una sola URL y declara su selección editorial.",
  },
  additions: {
    action: "do-not-fragment-forty-four-editorial-chapters",
    reason:
      "Crear una página por capítulo convertiría una división del investigador en cuarenta y cuatro mitos supuestamente autónomos. Los episodios públicos elegidos permanecen dentro del ciclo.",
  },
  restrictedMaterial: {
    action: "exclude-yurupari-and-operational-knowledge",
    reason:
      "La publicación de 1975 dejó fuera el relato del Yuruparí por petición expresa de los interlocutores. Esta edición respeta ese límite y tampoco reproduce fórmulas ni procedimientos chamánicos.",
  },
  media: {
    action: "generate-two-new-openai-images-with-provenance",
    reason:
      "Las imágenes heredadas carecen de trazabilidad al expediente vigente y repiten la misma escena. Se generan una portada y una segunda escena con gpt-image-2.",
  },
};

export const ufainaContextOnlyNarratives = [
  {
    title: "Relato del Yuruparí",
    reason:
      "El investigador no lo publicó porque los interlocutores pidieron que permaneciera en el ámbito masculino y no llegara a oídos de las mujeres.",
  },
  {
    title: "Fórmulas y procedimientos de curación",
    reason:
      "La relación entre relato, pensamiento y curación se explica como contexto, sin convertir conocimientos operativos en contenido público.",
  },
];

export function assertUfainaUniverse() {
  if (inheritedUfainaSlugs.length !== 1) {
    throw new Error("El universo heredado Ufaina debe contener una ficha.");
  }
  if (canonicalUfainaSlugs.length !== 1) {
    throw new Error("El universo canónico Ufaina debe contener una ficha.");
  }
  if (new Set(canonicalUfainaSlugs).size !== canonicalUfainaSlugs.length) {
    throw new Error("El universo Ufaina contiene slugs duplicados.");
  }
  return {
    inherited: 1,
    canonical: 1,
    corrected: 1,
    added: 0,
    editorialChaptersUnified: 44,
    contextualized: ufainaContextOnlyNarratives.length,
  };
}
