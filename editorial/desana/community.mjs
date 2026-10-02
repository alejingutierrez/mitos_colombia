import { desanaMedia } from "./media.mjs";

export const desanaCommunityImageUrl =
  desanaMedia["creacion-desana"].horizontal;

export const desanaCommunityPage = {
  title: "Desana",
  description:
    "Ocho relatos Desana-Kêhíripõrã sobre creación, noche, cataclismos, flautas, alimentos y tiempo estacional.",
  longDescription:
    "Esta revisión reconstruye la colección Desana desde Antes o mundo não existia, obra escrita e ilustrada por Umusĩ Pãrõkumu y Tõrãmũ Kẽhíri, narradores del clan Kêhíripõrã. Conserva las tres URLs heredadas, pero corrige sus títulos y contenidos: la creación se centra en Yebá Buró y la Canoa de Transformación; «Guelamún Yé» recupera la grafía Guramüye y su lugar en el primer cataclismo; «Yuruparí» pasa a nombrar el robo de las flautas sagradas. Se añaden el origen de la noche, Nügüye y Sëpïrõ, la mandioca, el chontaduro y Ãgãmahsãpu. Los episodios explícitos de Buhtari Gõãmü y el detalle operativo de prácticas ceremoniales no se adaptan para evitar una versión sanitizada o instructiva. La selección no se presenta como canon de todos los clanes Desana. Las seis imágenes heredadas se reemplazan porque parecían maquetas físicas; los ocho relatos reciben pares horizontales y verticales distintos, ya aprobados como ilustración digital plana full paper cut y paper quilling.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas a página completa: Yebá Buró junto al banco de cuarzo, una canoa-anaconda navega por ríos del Alto Río Negro bajo Sol y noche, cultivos y aves estacionales; identidad Desana sobria, sin copiar objetos ceremoniales restringidos, sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: desanaCommunityImageUrl,
};

export const desanaCommunitySeo = {
  meta_title: "Mitos Desana: creación, noche y cataclismos",
  meta_description:
    "Explora ocho relatos Desana-Kêhíripõrã sobre Yebá Buró, la Canoa de Transformación, Guramüye, la noche, alimentos y aves estacionales.",
  meta_keywords:
    "mitos Desana, pueblo Desana, Yebá Buró, Canoa de Transformación, Guramüye, Kêhíripõrã, Alto Río Negro",
  og_title: "Desana: ocho relatos Kêhíripõrã documentados",
  og_description:
    "Una revisión desde la obra de autoría indígena Antes o mundo não existia, con límites culturales y dos imágenes por relato.",
  twitter_title: "Relatos Desana del Alto Río Negro",
  twitter_description:
    "Creación, noche, cataclismos, flautas, mandioca, chontaduro y tiempo del umarí.",
  canonical_path: "/comunidades/desana",
  summary:
    "La revisión corrige tres fichas y añade cinco; sigue una publicación Desana-Kêhíripõrã y distingue clan, edición y límites ceremoniales.",
  focus_topics: [
    "pueblo Desana",
    "clan Kêhíripõrã",
    "Yebá Buró",
    "Canoa de Transformación",
    "Guramüye",
    "Alto Río Negro",
    "autoría indígena",
  ],
};

export function desanaCommunitySeoPayload() {
  return {
    ...desanaCommunitySeo,
    keywords: desanaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...desanaCommunitySeo.focus_topics],
  };
}
