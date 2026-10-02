export const inheritedMakaguanSlugs = [
  "creacion-makawanes",
  "la-gran-inundacion",
  "el-alma",
];

export const canonicalMakaguanSlugs = [...inheritedMakaguanSlugs].sort();

export const makaguanCategoryBySlug = Object.fromEntries(
  canonicalMakaguanSlugs.map((slug) => [
    slug,
    "Orinoquía > Arauca > Makaguán",
  ]),
);

export const makaguanEditorialDecisions = {
  corpus: {
    action: "retain-three-and-rewrite-from-community-reviewed-source",
    reason:
      "La investigación de Hermes Javier Mattar identifica exactamente dos mitos y una leyenda transmitidos por sabedores de El Vigía; corresponden a las tres URLs heredadas.",
  },
  titles: {
    action: "restore-source-titles",
    reason:
      "Creación pasa a Los hijos del venado y El alma hace visible el nombre Wuachirajua; los slugs históricos permanecen para no romper enlaces.",
  },
  flood: {
    action: "correct-paloma-to-samuro-as-2023-community-variant",
    reason:
      "Manuel Sánchez corrigió en 2023 la transcripción temprana: el ave enviada para limpiar la tierra era un samuro, no una paloma.",
  },
  additions: {
    action: "no-new-page",
    reason:
      "La fuente primaria explica que estos son los tres relatos que los sabedores autorizaron y lograron consolidar; añadir otro desde fuentes generales excedería la evidencia disponible.",
  },
};

export function assertMakaguanUniverse() {
  if (inheritedMakaguanSlugs.length !== 3) {
    throw new Error("El universo heredado Makaguán debe contener tres fichas.");
  }
  if (canonicalMakaguanSlugs.length !== 3) {
    throw new Error("El universo canónico Makaguán debe contener tres fichas.");
  }
  if (
    new Set(canonicalMakaguanSlugs).size !== canonicalMakaguanSlugs.length
  ) {
    throw new Error("El universo Makaguán contiene slugs duplicados.");
  }
  return {
    inherited: inheritedMakaguanSlugs.length,
    canonical: canonicalMakaguanSlugs.length,
    corrected: inheritedMakaguanSlugs.length,
    added: 0,
    unified: 0,
  };
}
