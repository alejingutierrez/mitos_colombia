import { sikuaniMedia } from "./media.mjs";

export const sikuaniCommunityImageUrl =
  sikuaniMedia["kaliwirnae-el-arbol-de-los-alimentos"].horizontal;

export const sikuaniCommunityPage = {
  title: "Sikuani (Guahíbo)",
  description:
    "Diez relatos documentados de los Llanos Orientales sobre Kuwei, Kaliwirnae, Tsamani, animales, seres del monte y pruebas de supervivencia.",
  longDescription:
    "Esta revisión de la ruta histórica «Guahíbo - Sikuani» conserva sus nueve URLs y añade una narración fundacional que faltaba. Siete páginas vuelven a los cuentos registrados por Francisco Ortiz entre 1972 y 1980, con relator y fecha visibles: un brujo que supera una prueba, dos historias distintas de tigre, Kawiri Monae, la mujer auxiliada por un áinawi, la danta y el terecay, y dos hermanos abandonados en el monte. Las otras dos URLs heredadas contenían mezclas sin respaldo: «El creador del cosmos» se corrige con la secuencia documentada de Kuwei o Phurnaminali y Kuemi; «La comida para los muertos» conserva su dirección web, pero presenta el canto comunitario de Tsamani y explica por qué no es responsable mantener el relato inventado. Se incorpora además «Kaliwirnae, el árbol de los alimentos», narrado por Carmen Rojas Amaya para la Audioteca Digital del ICBF. Guahíbo es una denominación histórica amplia; Sikuani es el nombre que la colección privilegia. Cada ficha distingue narración, contexto y comparación, y señala cuándo dos enlaces pertenecen a una misma cadena editorial. Ninguna ausencia de referencias heredadas motivó despublicación: donde había contenido incorrecto, se corrigió o se reasignó la URL con documentación suficiente.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas: sabana inundable y bosque de galería de los Llanos Orientales, un gran árbol de alimentos, un río ancho y estrellas sobre el horizonte; identidad Sikuani sobria sin tocados panindígenas, rasgos ni vestuario inventados; sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: sikuaniCommunityImageUrl,
};

export const sikuaniCommunitySeo = {
  meta_title: "Mitos Sikuani: Kuwei, Kaliwirnae y Tsamani",
  meta_description:
    "Explora diez relatos Sikuani documentados: Kuwei y Kuemi, Kaliwirnae, Tsamani, animales, seres del monte y cuentos orales.",
  meta_keywords:
    "mitos Sikuani, relatos Guahíbo, Kuwei, Kuemi, Kaliwirnae, Tsamani, tradición oral Sikuani, Llanos Orientales",
  og_title: "Sikuani (Guahíbo): diez relatos documentados",
  og_description:
    "Tradición oral de los Llanos revisada con narradores, fechas, límites documentales y fuentes consultables.",
  twitter_title: "Relatos Sikuani documentados",
  twitter_description:
    "Kuwei, Kaliwirnae, Tsamani y siete cuentos registrados entre 1972 y 1980.",
  canonical_path: "/comunidades/guahibo-sikuani",
  summary:
    "La revisión corrige nueve fichas, añade Kaliwirnae y reemplaza veinte imágenes de mitos más el héroe comunitario con arte 2D full paper cut reutilizado.",
  focus_topics: [
    "pueblo Sikuani",
    "Kuwei y Kuemi",
    "Kaliwirnae",
    "familia Tsamani",
    "literatura oral Sikuani",
    "Llanos Orientales",
    "Francisco Ortiz",
  ],
};

export function sikuaniCommunitySeoPayload() {
  return {
    ...sikuaniCommunitySeo,
    keywords: sikuaniCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...sikuaniCommunitySeo.focus_topics],
  };
}
