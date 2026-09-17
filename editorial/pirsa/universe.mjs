export const inheritedPirsaSlugs = ["el-exorcismo-de-tamaracunga"];

export const canonicalPirsaSlugs = [...inheritedPirsaSlugs];

export const pirsaCategoryBySlug = {
  "el-exorcismo-de-tamaracunga": "Andina > Caldas > Pirsa",
};

export const pirsaEditorialDecisions = {
  "el-exorcismo-de-tamaracunga": {
    action: "correct-colonial-conversion-story",
    becomes: "La noche de Tamaracunga",
    reason:
      "La URL se conserva, pero el título deja de presentar como exorcismo inequívoco lo que la fuente temprana organizó como relato ejemplar de bautismo y conversión.",
  },
};

export const pirsaContextOnlyNarratives = [
  {
    title: "El tesoro oculto en el cerro Picará",
    destination: "community-history",
    reason:
      "Las fuentes públicas conservan nombres y un motivo de tesoro, pero no una trama autónoma suficiente para cumplir las cinco funciones documentales de una página.",
  },
  {
    title: "La Piedra Herrada",
    destination: "community-history",
    reason:
      "La breve leyenda del casco del diablo pertenece a un estrato cristiano y mestizo local; el corpus disponible no permite sostener una página Pirsa independiente.",
  },
];

export function assertPirsaUniverse() {
  if (canonicalPirsaSlugs.length !== 1) {
    throw new Error(
      `El universo Pirsa debe conservar una URL y contiene ${canonicalPirsaSlugs.length}.`,
    );
  }
  if (new Set(canonicalPirsaSlugs).size !== canonicalPirsaSlugs.length) {
    throw new Error("El universo Pirsa contiene slugs duplicados.");
  }
  return {
    inherited: inheritedPirsaSlugs.length,
    canonical: canonicalPirsaSlugs.length,
    correctedColonialStories: 1,
    added: 0,
    contextualized: pirsaContextOnlyNarratives.length,
  };
}
