export const ansermasCommunityPage = {
  title: "Ansermas",
  description:
    "Memorias de Guacuma y del antiguo territorio Anserma sobre Xixaraca, Michua, Karambá, Opiramá y las huellas de Mápura.",
  longDescription:
    "La colección Anserma reúne dos páginas revisadas sobre un mismo territorio narrativo del alto Cauca. La primera unifica los dos registros duplicados que ya existían en el sitio: la partida de Xixaraca y Michua, las huellas conservadas en las rocas y las cascadas llamadas Lágrimas de Michua. La segunda recupera la leyenda de los Tamaracas tal como Alfredo Cardona Tobón recuerda haberla escuchado a Cándido Aricapa en 1947 y la contrasta con fuentes históricas y académicas. «Anserma» fue un nombre colonial amplio para poblaciones diversas, relacionado en las fuentes con Umbra o Umbrá, Guacuma, Pirsas, Tapascos y otros grupos. Esta página conserva la ruta heredada sin afirmar que todos formaran una comunidad homogénea ni que una versión regional represente a cada descendiente actual.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio histórico Anserma en Guacuma: cerros Karambá y Opiramá, río Mápura, rocas con huellas, maíz, chontaduro, niebla y cascadas en capas planas; sin tocados panindígenas, símbolos aztecas, mayas o muiscas, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const ansermasCommunitySeo = {
  meta_title: "Mitos Ansermas: Xixaraca, Michua y los Tamaracas",
  meta_description:
    "Explora dos relatos Ansermas documentados en Guacuma: las huellas de Xixaraca y Michua y la lucha contra los Tamaracas.",
  meta_keywords:
    "mitos Ansermas, Xixaraca, Michua, Tamaracas, Guacuma, Karambá, Opiramá, Mápura, Umbrá",
  og_title: "Xixaraca, Michua y la memoria Anserma",
  og_description:
    "Dos relatos revisados desde crónicas, memoria oral regional, testimonio indígena y estudios académicos.",
  twitter_title: "Mitos Ansermas con fuentes y variantes",
  twitter_description:
    "Conoce las huellas de Mápura y la leyenda de los Tamaracas sin repetir páginas duplicadas.",
  canonical_path: "/comunidades/ansermas",
  summary:
    "La revisión unifica dos fichas repetidas, recupera en la URL liberada la leyenda de los Tamaracas y reemplaza cuatro imágenes de maqueta por ilustraciones 2D full paper cut.",
  focus_topics: [
    "Xixaraca",
    "Michua",
    "Tamaracas",
    "Karambá y Opiramá",
    "huellas de Mápura",
    "memoria Anserma y Umbrá",
  ],
};

export function ansermasCommunitySeoPayload() {
  return {
    ...ansermasCommunitySeo,
    keywords: ansermasCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...ansermasCommunitySeo.focus_topics],
  };
}
