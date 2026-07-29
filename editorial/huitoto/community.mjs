import { huitotoMedia } from "./media.mjs";

export const huitotoCommunityImageUrl =
  huitotoMedia["nofideno-la-madre"].horizontal;

export const huitotoCommunityPage = {
  title: "Huitoto / Murui-Muina",
  description:
    "Veintidós relatos sobre palabra, creación, Sol, Luna, plantas, animales, transformaciones y memoria territorial.",
  longDescription:
    "Esta revisión conserva las veintidós rutas heredadas y reemplaza su prosa generada por expedientes trazables. Dieciséis siguen capítulos de Las palabras del origen de Fernando Urbina Rangel y mantienen visibles los nombres de sus relatores y traductores. Jirayauma recupera el ciclo de la Mujer-Jaguar y el Cerbatanero; Creación, Unámarai y los Yoria se delimitan como reelaboraciones publicadas por Hugo Niño. Las dos fichas de Yarokamena se presentan como partes complementarias del mismo ciclo, no como mitos separados. El cuento del sobrino Conejo y el tío Tigre continúa publicado, pero su atribución específica al pueblo Huitoto queda marcada como no confirmada. No se añaden relatos: el compendio narrativo principal ya está representado completo. Los veintidós pares visuales heredados se reemplazan porque parecían maquetas u objetos de papel; cada página reutiliza una pareja horizontal y vertical distinta de ilustraciones digitales planas full paper cut y paper quilling.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas a página completa: Nofïdeño sostiene la tierra entre ríos y frutos mientras Jitoma, Luna, anaconda, águila, chagra y maloca forman una red narrativa amazónica; identidad Huitoto / Murui-Muina sobria, sin copiar objetos ceremoniales restringidos, sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: huitotoCommunityImageUrl,
};

export const huitotoCommunitySeo = {
  meta_title: "Mitos Huitoto / Murui-Muina: 22 relatos",
  meta_description:
    "Explora 22 relatos Huitoto / Murui-Muina documentados: Nofïdeño, Uuikï, Jitoma, Dïïjoma, Buinaima, Yarokamena, Juma y más.",
  meta_keywords:
    "mitos Huitoto, relatos Murui-Muina, Nofïdeño, Uuikï, Jitoma, Dïïjoma, Buinaima, Yarokamena, Amazonía colombiana",
  og_title: "Huitoto / Murui-Muina: veintidós relatos revisados",
  og_description:
    "Una colección trazable con relatores identificados, versiones delimitadas, incertidumbres visibles y dos imágenes por página.",
  twitter_title: "Relatos Huitoto / Murui-Muina",
  twitter_description:
    "Creación, palabra, Sol, Luna, plantas, animales y transformaciones en 22 expedientes revisados.",
  canonical_path: "/comunidades/huitotos",
  summary:
    "La revisión conserva 22 rutas, corrige sus relatos desde fuentes publicadas y declara un ciclo duplicado y una atribución no confirmada.",
  focus_topics: [
    "pueblo Huitoto",
    "Murui-Muina",
    "Las palabras del origen",
    "Fernando Urbina Rangel",
    "Nofïdeño",
    "Jitoma",
    "Amazonía colombiana",
  ],
};

export function huitotoCommunitySeoPayload() {
  return {
    ...huitotoCommunitySeo,
    keywords: huitotoCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...huitotoCommunitySeo.focus_topics],
  };
}
