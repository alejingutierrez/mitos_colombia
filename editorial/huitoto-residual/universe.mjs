import { canonicalHuitotoSlugs } from "../huitoto/universe.mjs";

export const inheritedHuitotoResidualUniverseSlugs = [
  ...canonicalHuitotoSlugs,
].sort();

export const reviewedHuitotoResidualSlugs = [
  "el-diluvio-guinadoma",
  "nonuetoma",
  "taife",
  "taik",
].sort();

export const canonicalHuitotoAfterResidualSlugs = [
  ...new Set([
    ...inheritedHuitotoResidualUniverseSlugs,
    ...reviewedHuitotoResidualSlugs,
  ]),
].sort();

export const huitotoResidualCategoryBySlug = Object.fromEntries(
  reviewedHuitotoResidualSlugs.map((slug) => [
    slug,
    "Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina",
  ]),
);

export const huitotoResidualTargetTaxonomyBySlug = Object.fromEntries(
  reviewedHuitotoResidualSlugs.map((slug) => [
    slug,
    { regionSlug: "amazonas", communitySlug: "huitotos" },
  ]),
);

export const huitotoResidualEditorialDecisions = {
  universe: {
    action: "transfer-four-hidden-routes-from-mixto-to-huitotos",
    reason:
      "La categoría heredada Mixto ocultó cuatro relatos con transmisión Huitoto identificable; el universo canónico pasa de 22 a 26 rutas sin crear ni despublicar páginas.",
  },
  taife: {
    action: "restore-preuss-old-woman-cycle-and-separate-origin-variant",
    reason:
      "La ruta sigue La vieja de la luna de Preuss; el Taife que no logra salir del hueco en Tagliani permanece como variante distinta y no se fusiona con la Madremonte.",
  },
  taik: {
    action: "retain-url-as-declared-window-into-kugi-nokuerai-cycle",
    reason:
      "Taik no es un mito autónomo ni Tikuna: la página heredada cubre el episodio de Joyareño y Rikoño dentro del ciclo narrado por Pablo Bigïdïma.",
  },
  nonuetoma: {
    action: "restore-documented-trials-death-and-sons-transformation",
    reason:
      "La revisión elimina el sabio invencible inventado y conserva las pruebas, la muerte de Nonuetoma y la transformación vengadora de sus hijos con violencia resumida.",
  },
  "el-diluvio-guinadoma": {
    action: "restore-soto-flores-transcript-and-remove-faith-moral",
    reason:
      "La transcripción de los hermanos Soto Flórez reúne Anequi, Fusiñamuy, el descenso del agua y el tambor subterráneo; la incredulidad no se convierte en doctrina editorial.",
  },
  media: {
    action: "prepare-eight-openai-images-with-provenance",
    reason:
      "Las cuatro rutas requieren portada horizontal y segunda escena vertical propias, distintas y generadas con gpt-image-2 en ilustración digital plana full paper cut.",
  },
};

export function assertHuitotoResidualUniverse() {
  if (inheritedHuitotoResidualUniverseSlugs.length !== 22) {
    throw new Error("El universo Huitoto previo debe conservar 22 rutas.");
  }
  if (reviewedHuitotoResidualSlugs.length !== 4) {
    throw new Error("El frente residual debe revisar cuatro rutas.");
  }
  if (canonicalHuitotoAfterResidualSlugs.length !== 26) {
    throw new Error("El universo Huitoto ampliado debe contener 26 rutas.");
  }
  if (
    new Set(canonicalHuitotoAfterResidualSlugs).size !==
    canonicalHuitotoAfterResidualSlugs.length
  ) {
    throw new Error("El universo Huitoto residual contiene slugs duplicados.");
  }
  return {
    inherited: 22,
    transferred: 4,
    canonical: 26,
    added: 0,
    unpublished: 0,
    declaredCycleWindows: 1,
  };
}
