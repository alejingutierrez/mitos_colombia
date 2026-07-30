import { yukpaMedia } from "./media.mjs";

export const yukpaCommunityImageUrl =
  yukpaMedia["aponto-y-el-arbol-manurhacha"].horizontal;

export const yukpaCommunityPage = {
  title: "Yukpa",
  description:
    "Cinco relatos documentados sobre Aponto, los astros, el diluvio, los gemelos Yirhwach y Mé, dueño del maíz.",
  longDescription:
    "La revisión Yukpa conserva dos URLs heredadas, corrige sus expansiones inventadas y añade tres ciclos centrales con evidencia suficiente. Los dos caminos del cielo vuelve a ser la historia de los dos Soles, Kopeco y el nacimiento de la noche. La piedra que flota conserva su enlace, pero retira la piedra, la pareja encerrada y el venado sin fuente para publicar el diluvio, las montañas del Perijá y los armadillos. Las nuevas fichas presentan a Aponto y Manurhacha, los gemelos Yirhwach y las constelaciones, y Mé, dueño del maíz, a partir de una exposición etnográfica, estudios comparativos y un libro bilingüe producido con comunidades y autorización de mayores. Las diferencias Irapa, Iroka y Sokorpa permanecen visibles. Los fragmentos sobre blancos, tecnología, algodón y prácticas mortuorias quedan como contexto porque no ofrecen una secuencia pública suficiente o contienen material sensible. Ningún mito se despublica. Cada ficha recibe dos escenas propias generadas con OpenAI como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: Aponto se acerca a Manurhacha mientras un pájaro carpintero revela tres siluetas humanas dentro del árbol; serranía del Perijá en capas digitales mate sin volumen físico, sin rasgos étnicos, símbolos panindígenas, tocados, pintura corporal, texto ni letras, sin fotografía, fibras reales, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: yukpaCommunityImageUrl,
};

export const yukpaCommunitySeo = {
  meta_title: "Mitos Yukpa: cinco relatos revisados",
  meta_description:
    "Cinco mitos Yukpa documentados: Aponto y Manurhacha, Sol y Luna, el diluvio del Perijá, los gemelos Yirhwach y Mé, dueño del maíz.",
  meta_keywords:
    "mitos Yukpa, Aponto, Manurhacha, diluvio Yukpa, gemelos Yirhwach, Mé dueño del maíz, serranía del Perijá",
  og_title: "Cinco ciclos documentados de la mitología Yukpa",
  og_description:
    "Dos fichas corregidas, tres relatos añadidos, versiones atribuidas y escenas paper cut propias.",
  twitter_title: "Mitos Yukpa revisados",
  twitter_description:
    "Aponto, los astros, el diluvio, los gemelos y el maíz con fuentes y límites visibles.",
  canonical_path: "/comunidades/yukpa",
  summary:
    "Cinco fichas canónicas Yukpa, dos corregidas y tres nuevas, sin despublicar rutas.",
  focus_topics: [
    "pueblo Yukpa",
    "Aponto y Manurhacha",
    "dos Soles y Luna",
    "diluvio del Perijá",
    "gemelos Yirhwach",
    "Mé dueño del maíz",
  ],
};

export function yukpaCommunitySeoPayload() {
  return {
    ...yukpaCommunitySeo,
    keywords: yukpaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...yukpaCommunitySeo.focus_topics],
  };
}
