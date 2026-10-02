export const inheritedTucanoSlugs = [
  "cuando-la-danta-perdio-su-hegemonia",
  "el-descubrimiento-del-agua-y-los-peces",
  "el-hijo-de-tuhixana",
  "el-origen-del-hombre",
  "la-aparicion-del-sol-del-viento-y-los-mares",
  "los-blancos-dominan-a-los-indios",
  "yepa-abandona-la-tierra",
  "yepa-castiaga-a-los-animales",
].sort();

export const transferredFromTucanoSlugs = [
  "el-descubrimiento-del-agua-y-los-peces",
  "el-hijo-de-tuhixana",
].sort();

export const retainedTucanoSlugs = inheritedTucanoSlugs.filter(
  (slug) => !transferredFromTucanoSlugs.includes(slug),
);

export const addedTucanoSlugs = ["la-semilla-de-la-yuca-tucano"];

export const canonicalTucanoSlugs = [
  ...retainedTucanoSlugs,
  ...addedTucanoSlugs,
].sort();

export const tucanoCategoryBySlug = Object.fromEntries(
  canonicalTucanoSlugs.map((slug) => [
    slug,
    "Amazonía > Vaupés > Tucano",
  ]),
);

export const tucanoEditorialDecisions = {
  waterAndFish: {
    action: "transfer-to-amazonas-mixto-pending-tanimuka-review",
    reason:
      "La trama de La Tía que oculta agua y peces aparece atribuida a los Tanimuka/Tainimuka en el inventario crítico de la obra de Fernando Solarte, no al pueblo Tucano.",
  },
  tuhixana: {
    action: "transfer-to-amazonas-mixto-pending-community-identification",
    reason:
      "La fuente literaria consultada solo identifica el relato como procedente del Vaupés; no permite adjudicarlo específicamente a los Tucano.",
  },
  dantaDuplicate: {
    action: "retain-slug-replace-duplicate-with-boraro",
    reason:
      "La ficha repetía con invenciones la transformación de los animales. Se conserva la URL y se dedica al relato autónomo de Boraró y Boraró Numió publicado por Marcos Fulop en 1956.",
  },
  longCosmogony: {
    action: "split-with-explicit-shared-cycle",
    reason:
      "Cinco fichas conservadas son episodios del ciclo de Yepá Huáke y Yúpuri Baúro registrado por Fulop en 1954. Cada página declara esa dependencia y evita fingir siete tradiciones independientes.",
  },
  addition: {
    action: "add-one-documented-fulop-1956-story",
    reason:
      "La semilla de la yuca es una narración autónoma publicada con informante e intérprete identificados y no estaba en el catálogo.",
  },
  restrictedMaterial: {
    action: "omit-operational-sacred-flute-and-graphic-sexual-detail",
    reason:
      "Los pasajes sobre instrumentos sagrados, fórmulas y sexualidad ritual se mantienen como contexto bibliográfico y no se reproducen como instrucciones ni escenas.",
  },
  media: {
    action: "generate-fourteen-new-openai-images-with-provenance",
    reason:
      "Las imágenes heredadas no acreditan OpenAI ni proceden de los expedientes corregidos. Cada uno de los siete mitos recibe una pareja propia con gpt-image-2.",
  },
};

export const tucanoContextOnlyNarratives = [
  {
    title: "Relatos de flautas y ceremonias sagradas",
    reason:
      "Las fuentes publicadas incluyen conocimiento ritual que no es necesario reproducir para ofrecer una lectura pública responsable.",
  },
  {
    title: "Episodios sexuales del ciclo de Miriápura Turíkaro",
    reason:
      "Se registran en la historia documental, pero no se convierten en página autónoma ni en material visual por su carácter sensible y explícito.",
  },
];

export function assertTucanoUniverse() {
  if (inheritedTucanoSlugs.length !== 8) {
    throw new Error("El universo heredado Tucano debe contener ocho fichas.");
  }
  if (canonicalTucanoSlugs.length !== 7) {
    throw new Error("El universo canónico Tucano debe contener siete fichas.");
  }
  if (new Set(canonicalTucanoSlugs).size !== canonicalTucanoSlugs.length) {
    throw new Error("El universo Tucano contiene slugs duplicados.");
  }
  return {
    inherited: 8,
    transferred: 2,
    retained: 6,
    added: 1,
    canonical: 7,
    reassignedDuplicate: 1,
    contextualized: tucanoContextOnlyNarratives.length,
  };
}
