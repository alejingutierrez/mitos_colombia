export const inheritedUwaSlugs = ["creacion-u-wa"];

export const addedUwaSlugs = [
  "el-oso-y-el-hombre-uwa",
  "el-pajaro-carpintero-y-el-poder-de-curar",
  "el-recorrido-de-uktara",
  "kubashoa-el-hijo-del-tabaco",
  "la-competencia-de-los-tigres-uwa",
  "las-hijas-del-sol-y-la-miel",
  "lisha-la-madre-del-agua",
  "mensajes-de-los-animales-uwa",
  "monoa-el-hijo-de-la-montana",
  "yanoa-y-sirbetuna",
].sort();

export const canonicalUwaSlugs = [
  ...inheritedUwaSlugs,
  ...addedUwaSlugs,
].sort();

export const uwaCategoryBySlug = Object.fromEntries(
  canonicalUwaSlugs.map((slug) => [slug, "Andina > Boyacá > U'wa"]),
);

export const uwaContextOnlyNarratives = [
  {
    title: "Reowa y Aya",
    destination: "creacion-u-wa",
    reason:
      "Son familias de mitos cantados y ceremonias estacionales, no dos cuentos aislados; el perfil comunitario conserva su función sin reducirlas a páginas narrativas delgadas.",
  },
  {
    title: "El zorro y la zarigüeya y la soplada de los animales",
    destination: "las-hijas-del-sol-y-la-miel",
    reason:
      "Ann Osborn advierte que los cantos y sus partes se interpretan dentro del ciclo ceremonial completo; aquí se documentan como contexto comparativo y no como relato autónomo.",
  },
  {
    title: "Las siete parejas sembradas en las lagunas",
    destination: "creacion-u-wa",
    reason:
      "La salida de las parejas y el origen de los clanes se integran en la cosmogonía para no fragmentar el mismo ciclo de creación.",
  },
];

export function assertUwaUniverse() {
  if (inheritedUwaSlugs.length !== 1) {
    throw new Error(
      `El universo U’wa heredado cambió: se esperaba 1 URL y hay ${inheritedUwaSlugs.length}.`,
    );
  }
  if (canonicalUwaSlugs.length !== 11) {
    throw new Error(
      `El universo U’wa canónico debe contener 11 páginas y contiene ${canonicalUwaSlugs.length}.`,
    );
  }
  if (new Set(canonicalUwaSlugs).size !== canonicalUwaSlugs.length) {
    throw new Error("El universo U’wa contiene slugs duplicados.");
  }
  return {
    inherited: inheritedUwaSlugs.length,
    added: addedUwaSlugs.length,
    canonical: canonicalUwaSlugs.length,
    contextualized: uwaContextOnlyNarratives.length,
  };
}
