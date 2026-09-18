import { nukakMedia } from "./media.mjs";

export const nukakCommunityImageUrl =
  nukakMedia["creacion-nukak-maku"].horizontal;

export const nukakCommunityPage = {
  title: "Nɨkak",
  description:
    "Relato documentado sobre Machoroko, Aukurɨbo y el nacimiento Nɨkak desde bak hacia los ríos Guaviare e Inírida.",
  longDescription:
    "La revisión conserva la única URL heredada, pero corrige una confusión de pueblo: Idn Kamni y el Río de Leche pertenecen al origen Kakua, mientras la tradición Nɨkak documentada sitúa a Machoroko abriendo el paso desde bak, el mundo de abajo. Aukurɨbo sale primero, se transforma y retorna; después los grupos avanzan, se separan junto a los ríos Guaviare e Inírida, eligen territorios y siembran las semillas que cargaron desde abajo. La página distingue la versión de Embe de la narrada por Kerayi, reconoce a Mauro como héroe cultural Nɨkak sin inventarle un relato autónomo y mantiene fuera cantos, fórmulas y procedimientos ceremoniales. No se despublicó la ficha ni se añadieron páginas débiles. Sus imágenes horizontal y vertical fueron sustituidas por una pareja reutilizada de ilustración digital 2D full paper cut y paper quilling a página completa.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas a página completa: Machoroko abre un paso entre bak y yê, familias Nɨkak avanzan hacia la confluencia de dos ríos y una mariposa recuerda a Aukurɨbo; selva sobria sin inventar objetos ceremoniales, pintura corporal ni vestuario, sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: nukakCommunityImageUrl,
};

export const nukakCommunitySeo = {
  meta_title: "Mito Nɨkak: Machoroko y el nacimiento",
  meta_description:
    "Conoce el relato Nɨkak documentado sobre Machoroko, Aukurɨbo, bak y los caminos ancestrales del Guaviare y el Inírida.",
  meta_keywords:
    "mito Nɨkak, pueblo Nukak, Machoroko, Aukurɨbo, bak, Guaviare, Inírida",
  og_title: "Machoroko y el nacimiento Nɨkak",
  og_description:
    "Una revisión documentada que corrige la antigua confusión con el origen Kakua.",
  twitter_title: "Machoroko y el nacimiento Nɨkak",
  twitter_description:
    "Salida desde bak, separación de los grupos y formación del territorio.",
  canonical_path: "/comunidades/nukak-maku",
  summary:
    "Se corrige una ficha conflada con tradición Kakua y se conserva el ciclo Nɨkak de Machoroko, Aukurɨbo y la dispersión territorial.",
  focus_topics: [
    "pueblo Nɨkak",
    "Machoroko",
    "Aukurɨbo",
    "bak y yê",
    "ríos Guaviare e Inírida",
    "Dany Mahecha",
    "Carlos Franky",
  ],
};

export function nukakCommunitySeoPayload() {
  return {
    ...nukakCommunitySeo,
    keywords: nukakCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...nukakCommunitySeo.focus_topics],
  };
}
