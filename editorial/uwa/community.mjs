export const uwaCommunityPage = {
  title: "U’wa",
  description:
    "Relatos U’wa sobre Sira, los cuatro mundos, animales consejeros, madres del agua y caminos entre dimensiones.",
  longDescription:
    "La colección U’wa reúne once páginas revisadas. Reescribe la cosmogonía heredada desde las fuentes de Ann Osborn y la ley de origen, sin comparaciones universales añadidas. Incorpora nueve historias que la Institución Etnoeducativa U’wa Izketa Segovia publicó en u’wajka y castellano con participación de niños, dinamizadores y autoridades tradicionales: animales mensajeros, el oso, los tigres, Monoa, el pájaro carpintero, Kubashoa, Lisha, Yanoa con Sirbetuna y el recorrido de Uktara. Añade el ciclo documentado de las abejas, hijas del Sol. Los complejos cantados Reowa y Aya se explican como marco estacional y ceremonial, sin reducir cada canto a un cuento aislado.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio U’wa: Sierra Nevada del Cocuy, lagunas, bosque nublado, piedemonte, ríos, caminos y casa ceremonial en capas planas recortadas; cuatro franjas cromáticas sobrias y animales del territorio, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const uwaCommunitySeo = {
  meta_title: "Mitos U’wa: Sira, Lisha, Kubashoa y mundos de color",
  meta_description:
    "Explora 11 relatos U’wa sobre creación, animales, agua, curación y tránsito entre dimensiones, con fuentes comunitarias y contexto.",
  meta_keywords:
    "mitos U’wa, historias U’wa, Sira, Rurcocá, Lisha, Kubashoa, Uktara, Sierra Nevada del Cocuy",
  og_title: "Mitos U’wa documentados desde su memoria comunitaria",
  og_description:
    "Once relatos revisados sobre la ley de origen, el territorio, los animales y los mundos U’wa.",
  twitter_title: "Mitos U’wa con fuentes y contexto",
  twitter_description:
    "Conoce once relatos U’wa con procedencia, mediaciones e imágenes 2D full paper cut.",
  canonical_path: "/comunidades/u-wa",
  summary:
    "La revisión conserva la URL heredada, reescribe su cosmogonía, añade diez relatos documentados y exige una pareja visual 2D full paper cut por página.",
  focus_topics: [
    "mitología U’wa",
    "Sira",
    "Rurcocá",
    "Historias ancestrales U’wa",
    "Ley de Origen",
    "Lisha",
    "Kubashoa",
    "Uktara",
  ],
};

export function uwaCommunitySeoPayload() {
  return {
    ...uwaCommunitySeo,
    keywords: uwaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...uwaCommunitySeo.focus_topics],
  };
}
