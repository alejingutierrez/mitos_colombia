export const inheritedYukpaSlugs = [
  "la-piedra-que-flota",
  "los-dos-caminos-del-cielo",
].sort();

export const addedYukpaSlugs = [
  "aponto-y-el-arbol-manurhacha",
  "los-gemelos-yirhwach-y-las-constelaciones",
  "me-el-dueno-del-maiz",
].sort();

export const canonicalYukpaSlugs = [
  ...inheritedYukpaSlugs,
  ...addedYukpaSlugs,
].sort();

export const yukpaCategoryBySlug = Object.fromEntries(
  canonicalYukpaSlugs.map((slug) => [
    slug,
    "Caribe > Cesar > Yukpa",
  ]),
);

export const yukpaEditorialDecisions = {
  dayNight: {
    action: "retain-url-and-rewrite-from-documented-core",
    reason:
      "La URL heredada conserva el núcleo de los dos Soles y Kopeco, pero elimina la expansión ficticia del abuelo narrador y restituye las variantes documentadas de la transformación en Luna.",
  },
  flood: {
    action: "retain-url-retitle-and-replace-invented-floating-stone",
    reason:
      "La piedra flotante, la pareja encerrada y los animales que la empujan no aparecen en las fuentes. La misma URL presenta ahora el diluvio Yukpa, las montañas del Perijá y los armadillos.",
  },
  aponto: {
    action: "add-central-human-origin-cycle",
    reason:
      "Aponto, Manurhacha y el pájaro carpintero forman un núcleo documentado sobre el surgimiento, articulación y habla de las primeras personas.",
  },
  twins: {
    action: "add-one-bounded-twins-and-sky-cycle",
    reason:
      "La exposición etnográfica permite una ventana pública continua desde los huevos encontrados por Note hasta la ascensión de los gemelos y sus acompañantes como constelaciones.",
  },
  maize: {
    action: "add-community-authored-maize-narrative",
    reason:
      "El libro bilingüe de Territorios Narrados fue producido con comunidades Yukpa y autorización de mayores; documenta a Mé, Mésh, Atántocha y la llegada del maíz cariaco.",
  },
  media: {
    action: "generate-ten-new-openai-images-with-provenance",
    reason:
      "Las dos parejas heredadas no prueban la metodología visual actual y una ilustra una narración inventada. Cada una de las cinco fichas recibe escenas horizontal y vertical distintas con gpt-image-2.",
  },
};

export const yukpaContextOnlyNarratives = [
  {
    title: "Origen de los blancos y de la tecnología",
    reason:
      "La bibliografía confirma el complejo narrativo, pero el material público consultado no ofrece una secuencia suficientemente completa y atribuida para una adaptación responsable.",
  },
  {
    title: "Pu, el algodón y otros dones culturales",
    reason:
      "Los estudios contienen fragmentos comparativos, no una narración pública continua que pueda completarse sin inventar enlaces.",
  },
  {
    title: "Prácticas mortuorias y caminos después de la muerte",
    reason:
      "Se conservan como contexto etnográfico; la edición no convierte prácticas vivas, instrucciones ni materiales sensibles en una ficha espectacular.",
  },
];

export function assertYukpaUniverse() {
  if (inheritedYukpaSlugs.length !== 2) {
    throw new Error("El universo heredado Yukpa debe contener dos fichas.");
  }
  if (addedYukpaSlugs.length !== 3) {
    throw new Error("El frente Yukpa debe añadir tres fichas.");
  }
  if (canonicalYukpaSlugs.length !== 5) {
    throw new Error("El universo canónico Yukpa debe contener cinco fichas.");
  }
  if (new Set(canonicalYukpaSlugs).size !== canonicalYukpaSlugs.length) {
    throw new Error("El frente Yukpa contiene slugs duplicados.");
  }
  return {
    inherited: 2,
    canonical: 5,
    corrected: 2,
    added: 3,
    unpublished: 0,
    contextualized: yukpaContextOnlyNarratives.length,
  };
}
