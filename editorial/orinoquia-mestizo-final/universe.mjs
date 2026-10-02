export const inheritedOrinoquiaMestizoFinalSlugs = [
  "amanecer-llanero",
  "el-toro-negro-patorreal",
  "los-delfines-dorados",
  "la-culebra-cascabel",
  "el-llano-ayer-hoy",
  "los-tres-luceros",
  "el-llano-cobra-sus-deudas",
  "las-chanzas-de-don-felipe",
  "el-brujo-de-la-costa-del-pauto",
  "leal-hasta-la-muerte",
  "la-tertulia-de-la-italiana",
  "el-tesoro-de-caribare",
  "la-bola-de-fuego",
  "el-tirapiedra",
  "los-monstruos-de-paratebueno",
  "el-dominguez",
  "madre-rio-o-mohana",
  "la-bruja-de-los-ojos-miel",
  "el-domador-de-brujas",
].sort();

export const reviewedOrinoquiaMestizoFinalSlugs = [
  ...inheritedOrinoquiaMestizoFinalSlugs,
];

export const canonicalOrinoquiaMestizoFinalSlugs = [
  ...reviewedOrinoquiaMestizoFinalSlugs,
];

const piedemonte = new Set([
  "el-tirapiedra",
  "los-monstruos-de-paratebueno",
  "el-dominguez",
  "madre-rio-o-mohana",
  "la-bruja-de-los-ojos-miel",
  "el-domador-de-brujas",
]);

export const orinoquiaMestizoFinalCategoryBySlug = Object.fromEntries(
  reviewedOrinoquiaMestizoFinalSlugs.map((slug) => [
    slug,
    piedemonte.has(slug)
      ? "Orinoquía > Piedemonte llanero > Mestizo"
      : "Orinoquía > Llanos colombo-venezolanos > Mestizo",
  ]),
);

export const orinoquiaMestizoFinalTargetTaxonomyBySlug = Object.fromEntries(
  reviewedOrinoquiaMestizoFinalSlugs.map((slug) => [
    slug,
    { regionSlug: "orinoquia", communitySlug: "mestizo" },
  ]),
);

export const orinoquiaMestizoFinalEditorialDecisions = {
  universe: {
    action: "review-all-nineteen-inherited-routes-without-unpublishing",
    reason:
      "El cierre conserva las diecinueve URL existentes y no agrega El Centauro: la autorización de incorporar faltantes se dio para Wayuu, no para ampliar automáticamente cada repertorio literario.",
  },
  attribution: {
    action: "classify-seventeen-signed-stories-as-literary-recreations",
    reason:
      "Once textos proceden de Getulio Vargas Barón y seis de Alberto Baquero Nariño; atribuirlos evita presentarlos como testimonios indígenas u oralidad anónima.",
  },
  boundaries: {
    action: "separate-history-from-fiction-and-name-harmful-content",
    reason:
      "La revisión distingue hechos históricos documentados, escenas autorales, falsa etnografía, violencia de género, coerción, pseudomedicina y sátira.",
  },
  relationships: {
    action: "preserve-bola-de-fuego-as-llanero-variant-related-to-candileja",
    reason:
      "Bola de Fuego y Candileja comparten una familia narrativa, pero sus formas llanera y tolimense no deben colapsarse en una sola página nacional.",
  },
  media: {
    action: "prepare-thirty-eight-openai-flat-paper-cut-images-with-provenance",
    reason:
      "Cada ruta requiere portada horizontal y escena vertical propias con gpt-image-2 en calidad alta y trazabilidad por slug.",
  },
};

export function assertOrinoquiaMestizoFinalUniverse() {
  if (
    inheritedOrinoquiaMestizoFinalSlugs.length !== 19 ||
    reviewedOrinoquiaMestizoFinalSlugs.length !== 19 ||
    canonicalOrinoquiaMestizoFinalSlugs.length !== 19
  ) {
    throw new Error("Orinoquía Mestizo debe heredar, revisar y conservar diecinueve rutas.");
  }
  if (
    reviewedOrinoquiaMestizoFinalSlugs.some(
      (slug) => !orinoquiaMestizoFinalCategoryBySlug[slug],
    )
  ) {
    throw new Error("Falta taxonomía para una ruta de Orinoquía Mestizo.");
  }
  return {
    inherited: 19,
    reviewedRoutes: 19,
    canonical: 19,
    created: 0,
    unpublished: 0,
    transferred: 0,
    imagePairsPending: 19,
  };
}
