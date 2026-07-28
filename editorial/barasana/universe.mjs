export const inheritedBarasanaSlugs = ["la-luna"];

export const addedBarasanaSlugs = [
  "sol-luna-dia-y-noche",
  "kahe-sawari-kata-yai-y-el-surgimiento-barasano",
  "la-cuerda-de-leche-y-la-anaconda-yeba",
  "los-cerros-estantillos-y-la-cera-de-abejas",
  "el-origen-de-la-gente-de-los-frutales-silvestres",
];

export const canonicalBarasanaSlugs = [
  ...inheritedBarasanaSlugs,
  ...addedBarasanaSlugs,
].sort();

export const barasanaCategoryBySlug = Object.fromEntries(
  canonicalBarasanaSlugs.map((slug) => [
    slug,
    "Amazonía > Vaupés > Barasana",
  ]),
);

export const barasanaEditorialDecisions = {
  inherited: {
    action: "retain-slug-and-rewrite-as-warimi-cycle",
    reason:
      "La URL heredada contiene el núcleo documentado de Muyhu, Méneri-Ya y Warimi, pero mezcla nombres, prosa inventada y una comparación con Orfeo. Se conserva y se corrige.",
  },
  additions: {
    action: "add-five-documented-public-cycles",
    reason:
      "Se incorpora un ciclo etnográfico distinto de Sol y Luna y cuatro narraciones publicadas colectivamente por ACAIPI con autoría o participación Barasano identificada.",
  },
  sacredKnowledge: {
    action: "do-not-exhaust-or-operationalize-sacred-ritual-material",
    reason:
      "La monografía de 1979 enumera ocho conjuntos míticos, pero la revisión no convierte capítulos ceremoniales sensibles en tutoriales ni presenta la selección pública como un canon cerrado.",
  },
  media: {
    action: "retain-approved-moon-pair-and-reuse-five-flat-2d-pairs",
    reason:
      "El par heredado de Luna ya es una ilustración digital de recorte de papel a página completa. Las cinco adiciones reciben parejas horizontales y verticales distintas ya aprobadas.",
  },
};

export function assertBarasanaUniverse() {
  if (inheritedBarasanaSlugs.length !== 1) {
    throw new Error("El universo heredado Barasana debe contener una ficha.");
  }
  if (canonicalBarasanaSlugs.length !== 6) {
    throw new Error("El universo canónico Barasana debe contener seis fichas.");
  }
  if (new Set(canonicalBarasanaSlugs).size !== canonicalBarasanaSlugs.length) {
    throw new Error("El universo Barasana contiene slugs duplicados.");
  }
  return {
    inherited: 1,
    canonical: 6,
    corrected: 1,
    added: 5,
    unified: 0,
  };
}
