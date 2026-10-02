import { yucunaMedia } from "./media.mjs";

export const yucunaCommunityImageUrl =
  yucunaMedia["karipu-lakena-y-la-primera-noche"].horizontal;

export const yucunaCommunityPage = {
  title: "Yucuna / Yukuna y Matapí",
  description:
    "Tres ciclos documentados sobre los Karipú Lakena, Kanumá y el nacimiento Upichiya / Matapí.",
  longDescription:
    "La revisión conserva Kanumá y El nacimiento de los Matapí, añade una ficha central sobre los Karipú Lakena y la primera noche, y corrige una atribución histórica sin despublicar. El origen de las frutas deja de contarse como Yucuna: los nombres y una versión atribuida lo sitúan en el ciclo Huitoto-Muinane de Moniya Amena, por lo que la misma URL pasa a esa comunidad. Las tres fichas Yucuna distinguen Kamejeya, Jupichiya o Matapí cuando las fuentes lo permiten; una comunidad de lengua compartida no se presenta como una sola voz. Kanumá permanece como ciclo largo e inconcluso, el nacimiento Upichiya como historia ancestral en dos partes y diecisiete secciones, y la primera noche como ventana de dos versiones comparadas. Los ciclos catalogados sin una narración pública suficiente quedan como contexto. Ninguna página reproduce conjuros, procedimientos ni objetos rituales restringidos. Cada ruta recibe una pareja propia de imágenes OpenAI como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: cuatro Karipú Lakena adultos observan cómo una pequeña nuez libera la noche sobre el río Mirití; capas digitales mate sin volumen físico, sin objetos ceremoniales, símbolos panindígenas, tocados, pintura corporal, texto ni letras, sin fotografía, fibras reales, maqueta, diorama, CGI ni render 3D.",
  imageUrl: yucunaCommunityImageUrl,
};

export const yucunaCommunitySeo = {
  meta_title: "Mitos Yucuna y Matapí: tres ciclos revisados",
  meta_description:
    "Tres ciclos Yucuna y Matapí documentados: Karipú Lakena y la noche, Kanumá y los alimentos, y el nacimiento de los Upichiya.",
  meta_keywords:
    "mitos Yucuna, mitología Yukuna, Karipú Lakena, Kanumá, Matapí, Upichiya, río Mirití",
  og_title: "Tres ciclos documentados Yucuna y Matapí",
  og_description:
    "Versiones atribuidas, diferencias visibles, una transferencia corregida y dos escenas propias por página.",
  twitter_title: "Mitos Yucuna / Yukuna y Matapí",
  twitter_description:
    "Karipú Lakena, Kanumá y el nacimiento Upichiya revisados con fuentes.",
  canonical_path: "/comunidades/yucuna",
  summary:
    "Tres fichas Yucuna, una nueva y una ruta transferida a Huitoto sin despublicar.",
  focus_topics: [
    "pueblo Yucuna o Yukuna",
    "Karipú Lakena",
    "Kanumá",
    "Matapí o Upichiya",
    "primera noche",
    "río Mirití",
  ],
};

export function yucunaCommunitySeoPayload() {
  return {
    ...yucunaCommunitySeo,
    keywords: yucunaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...yucunaCommunitySeo.focus_topics],
  };
}
