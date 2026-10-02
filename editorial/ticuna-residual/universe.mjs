import { canonicalTicunaSlugs } from "../ticuna/universe.mjs";

export const inheritedTicunaResidualUniverseSlugs = [
  ...canonicalTicunaSlugs,
].sort();

export const reviewedTicunaResidualSlugs = [
  "moe-e-ipi",
  "origen-de-la-luna",
  "origen-de-los-micos-boquiblancos",
  "origen-de-los-vegetales-cultivaldos",
  "origen-del-agua",
  "origen-del-gavilan",
  "origen-del-sol",
].sort();

export const canonicalTicunaAfterResidualSlugs = [
  ...new Set([
    ...inheritedTicunaResidualUniverseSlugs,
    ...reviewedTicunaResidualSlugs,
  ]),
].sort();

export const ticunaResidualCategoryBySlug = Object.fromEntries(
  reviewedTicunaResidualSlugs.map((slug) => [
    slug,
    "Amazonía > Amazonas > Ticuna",
  ]),
);

export const ticunaResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedTicunaResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "amazonas", communitySlug: "ticuna" },
  ]),
);

export const ticunaResidualEditorialDecisions = {
  universe: {
    action: "transfer-seven-hidden-routes-from-mixto-to-ticuna",
    reason:
      "Siete rutas heredadas bajo Mixto aparecen inventariadas como leyendas Ticuna y conservan núcleos contrastables; el universo pasa de seis a trece sin crear ni despublicar páginas.",
  },
  solarAndLunarVariants: {
    action: "retain-two-declared-leticia-variants",
    reason:
      "Sol y Luna repiten motivos ya publicados, pero la secuencia de la recopilación de Leticia difiere de los testimonios de Moruapü; se conservan como variantes atribuidas, no como mitos independientes equivalentes.",
  },
  water: {
    action: "retain-complementary-window-into-wone-water-cycle",
    reason:
      "La ruta del agua amplía el episodio de las ardillas, el perezoso y el ají dentro del ciclo de Wone; declara su relación con la ficha canónica de Wone y Eware.",
  },
  plants: {
    action: "retain-leticia-basket-and-cultivation-story",
    reason:
      "La mujer y su canasta de alimentos forman un relato distinto del venado y los alimentos publicado en Moruapü; el término heredado santa se presenta como palabra de la transmisión castellana, no como identidad divina comprobada.",
  },
  hawk: {
    action: "rejoin-two-fragments-as-one-story",
    reason:
      "La base separó preparación de pelazón, pierna herida, árbol reparador y transformación final; la revisión recompone una sola continuidad sin inventar el tramo faltante.",
  },
  monkeys: {
    action: "retain-neglected-orphans-transformation-story",
    reason:
      "La síntesis institucional y el análisis que cita la edición de 1981 sostienen el abandono, el engaño con harina y la transformación de los niños en micos boquiblancos.",
  },
  yoiIpi: {
    action: "correct-moe-name-and-retain-declared-yoi-ipi-cycle-window",
    reason:
      "La ruta mezcló cinco fragmentos y llamó Moé al héroe del ciclo; se corrige a Yoí e Ípi, se distingue del Moe de la canoa y se concentra en Techi, el huito y la separación de los hermanos.",
  },
  media: {
    action: "prepare-fourteen-openai-images-with-provenance",
    reason:
      "Las siete rutas requieren portada horizontal y segunda escena vertical propias con gpt-image-2 y dirección digital plana full paper cut.",
  },
};

export function assertTicunaResidualUniverse() {
  if (inheritedTicunaResidualUniverseSlugs.length !== 6) {
    throw new Error("El universo Ticuna previo debe conservar seis rutas.");
  }
  if (reviewedTicunaResidualSlugs.length !== 7) {
    throw new Error("El frente residual Ticuna debe revisar siete rutas.");
  }
  if (canonicalTicunaAfterResidualSlugs.length !== 13) {
    throw new Error("El universo Ticuna ampliado debe contener trece rutas.");
  }
  if (
    new Set(canonicalTicunaAfterResidualSlugs).size !==
    canonicalTicunaAfterResidualSlugs.length
  ) {
    throw new Error("El universo Ticuna residual contiene slugs duplicados.");
  }
  return {
    inherited: 6,
    transferred: 7,
    canonical: 13,
    added: 0,
    unpublished: 0,
    declaredVariantsOrCycleWindows: 4,
    rejoinedFragments: 2,
  };
}
