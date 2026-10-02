export const inheritedKuivaSlugs = ["creacion-kuibas"];

export const canonicalKuivaSlugs = [
  ...inheritedKuivaSlugs,
  "namon-y-la-inundacion",
].sort();

export const kuivaCategoryBySlug = Object.fromEntries(
  canonicalKuivaSlugs.map((slug) => [
    slug,
    "Orinoquía > Casanare > Kuiva (Wamonae)",
  ]),
);

export const kuivaEditorialDecisions = {
  creation: {
    action: "retain-and-rewrite-from-idartes-fragment",
    reason:
      "La secuencia heredada coincide con la antología Mitos de creación, pero su expansión añadió escenas y certezas ausentes; se conserva el núcleo documentado y se explicita que la edición no identifica narrador.",
  },
  flood: {
    action: "add-one-complete-version-and-unify-cycle-at-index-level",
    reason:
      "Namon and the Flood dispone de texto narrativo completo y forma parte de un ciclo de por lo menos ocho entradas de inundación registradas en el índice de Wilbert y Simoneau.",
  },
  withheld: {
    action: "do-not-create-from-titles-only",
    reason:
      "El índice anuncia otros relatos de origen, emergencia subterránea y transformación, pero sin texto narrativo consultable no es responsable reconstruirlos.",
  },
  naming: {
    action: "show-kuiva-and-wamonae",
    reason:
      "Kuiva es la forma de la ruta heredada y Wamonae una autodenominación vigente; ambas se hacen visibles sin afirmar que todos los grupos locales usan un único nombre.",
  },
};

export function assertKuivaUniverse() {
  if (inheritedKuivaSlugs.length !== 1) {
    throw new Error("El universo heredado Kuiva debe contener una ficha.");
  }
  if (canonicalKuivaSlugs.length !== 2) {
    throw new Error("El universo canónico Kuiva debe contener dos fichas.");
  }
  if (new Set(canonicalKuivaSlugs).size !== canonicalKuivaSlugs.length) {
    throw new Error("El universo Kuiva contiene slugs duplicados.");
  }
  return {
    inherited: inheritedKuivaSlugs.length,
    canonical: canonicalKuivaSlugs.length,
    corrected: 1,
    added: 1,
    unified: 1,
  };
}
