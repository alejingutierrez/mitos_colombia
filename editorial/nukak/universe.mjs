export const inheritedNukakSlugs = ["creacion-nukak-maku"];
export const addedNukakSlugs = [];
export const canonicalNukakSlugs = [...inheritedNukakSlugs];

export const nukakCategoryBySlug = Object.fromEntries(
  canonicalNukakSlugs.map((slug) => [
    slug,
    "Amazonas > Guaviare > Nukak Makú",
  ]),
);

export const nukakEditorialDecisions = {
  inherited: {
    action: "retain-slug-and-rewrite-from-nukak-sources",
    reason:
      "La ficha heredada atribuía a los Nɨkak el héroe Idn Kamni y el origen en el Río de Leche, elementos que la investigación reciente identifica como Kakua. Se conserva la URL y se reemplaza por el ciclo Nɨkak documentado.",
  },
  additions: {
    action: "do-not-fragment-or-add-weakly-documented-pages",
    reason:
      "Machoroko, Aukurɨbo y la dispersión territorial forman partes articuladas del mismo nacimiento Nɨkak. Mauro y el material ceremonial consultado no ofrecen otro relato público completo que deba convertirse en una ficha autónoma.",
  },
  sacredKnowledge: {
    action: "keep-public-narrative-without-ritual-instructions",
    reason:
      "Las fuentes describen un sistema vivo de conocimiento. La edición no reproduce cantos, fórmulas, procedimientos chamánicos ni ubicaciones precisas.",
  },
  media: {
    action: "replace-two-conflated-physical-looking-images",
    reason:
      "La pareja heredada representaba la versión Kakua de la saliva y parecía una maqueta material. Se sustituye por dos ilustraciones digitales 2D full paper cut ya aprobadas.",
  },
};

export function assertNukakUniverse() {
  if (inheritedNukakSlugs.length !== 1) {
    throw new Error("El universo heredado Nukak debe contener una ficha.");
  }
  if (canonicalNukakSlugs.length !== 1) {
    throw new Error("El universo canónico Nukak debe contener una ficha.");
  }
  return {
    inherited: 1,
    canonical: 1,
    corrected: 1,
    added: 0,
    unified: 0,
  };
}
