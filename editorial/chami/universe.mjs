export const sourceChamiSlugs = [
  "jinopotabar",
  "la-culebra-de-las-siete-cabezas",
  "los-guardianes-vengadores-de-la-naturaleza",
  "creacion-embera",
  "el-guatin-astuto",
  "el-hijo-de-karagabi-encerrado-en-el-arbol",
  "el-hijo-de-karagabi-y-la-gente-subterranea",
  "el-hijo-de-la-nutria",
  "el-hombre-que-atrapo-al-sol-y-a-la-luna",
  "el-origen-de-los-animales",
  "el-origen-del-agua",
  "el-gusano-gigante",
  "el-universo",
  "hentsera-y-el-agua",
  "himo-la-iguana-y-la-candela",
  "horchibari",
  "la-historia-de-erubida-y-siebida",
  "la-mujer-de-karagabi",
  "la-mujer-hormiga",
  "la-mujer-y-el-oso",
  "la-oscuridad",
  "las-transformaciones",
].sort();

export const rioFrioPrimarySlugs = [
  "creacion-embera",
  "el-guatin-astuto",
  "el-hijo-de-karagabi-encerrado-en-el-arbol",
  "el-hijo-de-karagabi-y-la-gente-subterranea",
  "el-hijo-de-la-nutria",
  "el-hombre-que-atrapo-al-sol-y-a-la-luna",
  "hentsera-y-el-agua",
  "himo-la-iguana-y-la-candela",
  "horchibari",
  "la-historia-de-erubida-y-siebida",
  "la-mujer-de-karagabi",
  "la-mujer-hormiga",
  "la-mujer-y-el-oso",
  "la-oscuridad",
].sort();

export const chamiEditorialDecisions = {
  jinopotabar: {
    kind: "cycle",
    relation: "el-hijo-de-la-nutria",
    decision:
      "Conservar como expediente del ciclo regional de Jinu Potó; la versión íntegra de Río Frío permanece en El hijo de la nutria.",
  },
  "el-origen-del-agua": {
    kind: "reconstruction",
    relation: "hentsera-y-el-agua",
    decision:
      "Conservar la URL, cambiar el foco a La Jepá de Jeguada y separar este relato del episodio de Héntserá y Jenené.",
  },
  "el-origen-de-los-animales": {
    kind: "regional-cycle",
    relation: "las-transformaciones",
    decision:
      "Reconstruir el ciclo Chamí de los animales desde Zuluaga y D'Abbraccio, sin mezclar episodios Dóbida y Katío como una sola narración.",
  },
  "las-transformaciones": {
    kind: "thematic-cycle",
    relation: "el-origen-de-los-animales",
    decision:
      "Declarar que es un ciclo editorial de transformaciones y no una transcripción oral única.",
  },
  "los-guardianes-vengadores-de-la-naturaleza": {
    kind: "territorial-reconstruction",
    decision:
      "Conservar solo la leyenda cristianizada de Lomaprieta y retirar la fusión indebida con los Yaveranas Katío.",
  },
  "la-culebra-de-las-siete-cabezas": {
    kind: "territorial-reconstruction",
    decision:
      "Reconstruir la versión de La Montaña y El Salado; retirar rituales, guardianía ambiental e hidras añadidas sin fuente.",
  },
};

export const chamiCategoryBySlug = Object.fromEntries(
  sourceChamiSlugs.map((slug) => {
    if (
      [
        "el-gusano-gigante",
        "la-culebra-de-las-siete-cabezas",
        "los-guardianes-vengadores-de-la-naturaleza",
      ].includes(slug)
    ) {
      return [slug, "Andina > Caldas > Chamí"];
    }
    if (
      [
        "el-origen-de-los-animales",
        "el-origen-del-agua",
        "el-universo",
        "las-transformaciones",
      ].includes(slug)
    ) {
      return [slug, "Andina > Risaralda > Chamí"];
    }
    return [slug, "Andina > Valle del Cauca > Chamí"];
  }),
);

export const canonicalChamiSlugs = [...sourceChamiSlugs];

export function assertChamiUniverse() {
  if (sourceChamiSlugs.length !== 22) {
    throw new Error(
      `El universo Chamí cambió: se esperaban 22 registros y hay ${sourceChamiSlugs.length}.`,
    );
  }
  if (new Set(sourceChamiSlugs).size !== sourceChamiSlugs.length) {
    throw new Error("El universo Chamí contiene slugs duplicados.");
  }
  if (rioFrioPrimarySlugs.length !== 14) {
    throw new Error("El corpus primario de Río Frío debe contener 14 relatos.");
  }
  return {
    source: sourceChamiSlugs.length,
    canonical: canonicalChamiSlugs.length,
    rioFrio: rioFrioPrimarySlugs.length,
    regionalOrCycles: canonicalChamiSlugs.length - rioFrioPrimarySlugs.length,
  };
}
