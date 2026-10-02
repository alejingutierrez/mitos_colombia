import { andoqueMedia } from "./media.mjs";

export const andoqueCommunityImageUrl =
  andoqueMedia["la-guerra-del-palo-hablador"].horizontal;

export const andoqueCommunityPage = {
  title: "Andoque (Gente del Hacha)",
  description:
    "Catorce relatos Andoque documentados sobre el origen, el diluvio, el territorio, los seres del agua y la memoria de la Casa Arana.",
  longDescription:
    "Esta revisión conserva y corrige las once URLs heredadas de la comunidad Andoque. Sus títulos aparecen en Tradiciones de la gente del hacha, de Jon Landaburu y Roberto Pineda Camacho: Sol y Luna, gigantes, seres del agua, fantasmas, Canoa-de-Piedra, brujos, linajes, el testimonio sobre la Casa Arana y dos relatos de reagrupamiento. Las páginas ya no rellenan vacíos con epopeyas, analogías griegas ni espiritualidad genérica. Se incorporan además tres ciclos fundamentales transcritos íntegramente en Cuentos del diluvio de fuego: la guerra del Palo Hablador; Huevo-de-chupaflor, los huérfanos, el diluvio y el robo del fuego; y el Águila Caníbal con Doña Cucarrón-de-vida, madre que restaura el mundo. La publicación atribuye estos relatos al capitán Yiñeko y a Yiñefoque, registrados en Aduche. La colección distingue mito, memoria territorial y testimonio histórico, y conserva los dos retornos como piezas separadas porque la fuente los indexa por separado. Ninguna ficha se despublicó por falta de referencias. Las veintidós imágenes heredadas y el héroe comunitario se reemplazan con ilustraciones 2D full paper cut reutilizadas, cada mito con formato horizontal y vertical.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas: selva amazónica de Aduche, un río ancho, un gran tronco cubierto por formas de gusanos, aves y una espada de relámpago; identidad Andoque sobria sin tocados panindígenas, rasgos ni vestuario inventados; sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: andoqueCommunityImageUrl,
};

export const andoqueCommunitySeo = {
  meta_title: "Mitos Andoque: origen, diluvio y territorio",
  meta_description:
    "Explora catorce relatos Andoque documentados: Palo Hablador, Huevo-de-chupaflor, el diluvio, el fuego y la memoria de Aduche.",
  meta_keywords:
    "mitos Andoque, pueblo Andoke, Gente del Hacha, Palo Hablador, Huevo-de-chupaflor, Aduche, Araracuara",
  og_title: "Andoque: catorce relatos documentados",
  og_description:
    "Tradición oral y memoria histórica de Aduche revisadas con atribuciones, límites documentales y fuentes consultables.",
  twitter_title: "Relatos Andoque de Aduche",
  twitter_description:
    "Palo Hablador, Huevo-de-chupaflor, diluvio, territorio y memoria histórica.",
  canonical_path: "/comunidades/andoque",
  summary:
    "La revisión corrige once fichas, añade tres ciclos fundacionales y reemplaza veintiocho imágenes de mitos más el héroe con arte 2D full paper cut reutilizado.",
  focus_topics: [
    "pueblo Andoque",
    "Gente del Hacha",
    "Palo Hablador",
    "Huevo-de-chupaflor",
    "Cuentos del diluvio de fuego",
    "Aduche y Araracuara",
    "Jon Landaburu y Roberto Pineda",
  ],
};

export function andoqueCommunitySeoPayload() {
  return {
    ...andoqueCommunitySeo,
    keywords: andoqueCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...andoqueCommunitySeo.focus_topics],
  };
}
