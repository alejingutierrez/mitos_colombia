export const koguiCommunityPage = {
  title: "Kogui (Kággaba)",
  description:
    "Archivo crítico de veinte relatos Kogui sobre la Gran Madre, Sintana, el Sol, los alimentos, los jaguares y la Ley de Origen.",
  longDescription:
    "Kogui y Kággaba son denominaciones vigentes del pueblo que habita distintas cuencas de la Sierra Nevada de Santa Marta. Esta revisión conserva veinte URLs: diecinueve corresponden a episodios diferenciados publicados en la etnografía de Gerardo Reichel-Dolmatoff y una, Gauteován, a una síntesis secundaria basada en fuentes anteriores. El trabajo retira expansiones literarias genéricas, comparaciones automáticas con Grecia y lecturas de Campbell; restituye relatores cuando la fuente los nombra; y separa narración, historia documental, variantes, enseñanza y resonancias. Los ciclos de creación, Naowa, Kimaku y Kashindukwe se mantienen en fichas distintas porque cada una narra una secuencia propia. El archivo también incorpora voces Kággaba contemporáneas sobre territorio, espacios sagrados, gobierno y cuidado del pensamiento, sin hacerlas pasar por nuevas versiones de relatos antiguos.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, acabado gráfico en capas planas: la Sierra Nevada de Santa Marta como corazón de una composición de nueve niveles, ríos que descienden al Caribe, una casa ceremonial, la Gran Madre sugerida en el paisaje y figuras Kogui con prendas blancas sobrias; sin cactus, desierto, pirámides, ruinas genéricas, máscaras inventadas, tocados panindígenas, símbolos aztecas, mayas o muiscas, texto ni letras; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const koguiCommunitySeo = {
  meta_title: "Mitos Kogui (Kággaba): archivo revisado",
  meta_description:
    "Explora 20 relatos Kogui revisados sobre la Gran Madre, Sintana, Naowa, el Sol, el maíz, el fuego, los jaguares y la Sierra Nevada.",
  meta_keywords:
    "mitos Kogui, mitos Kággaba, Gran Madre Kogui, Sintana, Naowa, Sierra Nevada de Santa Marta, Ley de Origen",
  og_title: "Kogui (Kággaba): veinte relatos con fuentes y contexto",
  og_description:
    "Un archivo crítico que conserva los ciclos narrativos, corrige añadidos y diferencia fuentes antiguas de voces Kággaba contemporáneas.",
  twitter_title: "Archivo Kogui (Kággaba) revisado",
  twitter_description:
    "Veinte relatos sobre creación, territorio, alimentos, astros y jaguares, con procedencia, cautelas e imágenes full paper cut.",
  canonical_path: "/comunidades/koguis",
  summary:
    "La revisión conserva 20 URLs, reescribe todas las fichas desde fuentes declaradas, corrige Gauteován y actualiza el nombre visible a Kogui (Kággaba).",
  focus_topics: [
    "Gran Madre y nueve mundos",
    "Sintana, Naowa y Kimaku",
    "Sol, Luna y casas ceremoniales",
    "alimentos, algodón y fuego",
    "jaguares y transformaciones",
    "Sierra Nevada, Línea Negra y Ley de Origen",
  ],
};

export function koguiCommunitySeoPayload() {
  return {
    ...koguiCommunitySeo,
    keywords: koguiCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...koguiCommunitySeo.focus_topics],
  };
}
