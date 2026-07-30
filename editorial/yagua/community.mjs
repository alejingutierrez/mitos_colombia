import { yaguaMedia } from "./media.mjs";

export const yaguaCommunityImageUrl = yaguaMedia.yagua.horizontal;

export const yaguaCommunityPage = {
  title: "Yagua / Ñihamwo",
  description:
    "Seis ciclos documentados sobre Luna y Sol, Tortuga y Jaguar, los mellizos, el Huérfano, Calvito y los Mellizos de Avispa.",
  longDescription:
    "La revisión reemplaza una ficha sintética por seis ciclos delimitados a partir de numerosas versiones Yagua registradas entre 1955 y 1976. Conserva una página por ciclo, no por episodio, y distingue los resúmenes comparativos de las narraciones atribuidas. La página central sigue a Ndanu y Mêna desde su nacimiento extraordinario hasta la caída del árbol del agua; las otras cinco recuperan Luna y Sol, Tortuga y Jaguar, el Huérfano, Calvito y los Mellizos de Avispa. La edición reconoce el territorio transfronterizo y la continuidad de comunidades y hablantes en el Trapecio Amazónico colombiano. El origen resumido desde Nawanchi y Há queda contextualizado hasta encontrar una versión pública completa; Petita y Ya-Tuján se separan de la tradición oral por pertenecer a recepción literaria y secundaria. Cada ciclo tiene dos escenas propias generadas con OpenAI como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: dos mellizos adultos observan la caída de un árbol gigantesco cuyo tronco se vuelve río Amazonas y cuyas astillas se transforman en peces; paisaje amazónico en capas digitales, sin símbolos panindígenas, tocados, pintura corporal, vestuario ceremonial, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: yaguaCommunityImageUrl,
};

export const yaguaCommunitySeo = {
  meta_title: "Mitos Yagua: seis ciclos de la tradición Ñihamwo",
  meta_description:
    "Seis ciclos Yagua revisados con fuentes: Ndanu y Mêna, Luna y Sol, Tortuga y Jaguar, el Huérfano, Calvito y Mellizos de Avispa.",
  meta_keywords:
    "mitos Yagua, mitología Ñihamwo, Ndanu y Mêna, árbol del agua, Luna y Sol Yagua, Tortuga y Jaguar",
  og_title: "Seis ciclos de la mitología Yagua",
  og_description:
    "Relatos documentados, variantes atribuidas y continuidad Yagua en Colombia y Perú.",
  twitter_title: "Mitos Yagua / Ñihamwo",
  twitter_description:
    "Seis ciclos narrativos revisados con fuentes y escenas propias.",
  canonical_path: "/comunidades/yaguas",
  summary:
    "Una ficha heredada corregida, cinco ciclos añadidos y nueve fuentes por expediente.",
  focus_topics: [
    "pueblo Yagua o Ñihamwo",
    "Ndanu y Mêna",
    "árbol del agua",
    "Luna y Sol",
    "Tortuga y Jaguar",
    "lengua Peba-Yagua",
  ],
};

export function yaguaCommunitySeoPayload() {
  return {
    ...yaguaCommunitySeo,
    keywords: yaguaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...yaguaCommunitySeo.focus_topics],
  };
}
