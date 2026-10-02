import { tucanoMedia } from "./media.mjs";

export const tucanoCommunityImageUrl =
  tucanoMedia["el-origen-del-hombre"].horizontal;

export const tucanoCommunityPage = {
  title: "Tucano",
  description:
    "Siete relatos documentados sobre la transformación, Yepá Huáke, los animales, Boraró y la semilla de la yuca.",
  longDescription:
    "La revisión distingue al pueblo Yepá-mahsã o Tucano del conjunto regional tukano oriental. Dos fichas heredadas se trasladan a Amazonas Mixto porque las fuentes no sostienen su atribución Tucano. Seis URL se conservan: cinco explican episodios conectados del ciclo de Yepá Huáke registrado por Marcos Fulop en 1954 y una se reutiliza para Boraró y Boraró Numió, relato autónomo de 1956. Se añade La semilla de la yuca desde esa misma colección. Las páginas nombran la brevedad del trabajo de campo histórico, incorporan autoría y contexto contemporáneos, y dejan fuera fórmulas, instrumentos y detalles rituales restringidos. Cada mito tiene una pareja horizontal y vertical propia generada con OpenAI como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano a página completa: una gran canoa ancestral recorre un río de capas recortadas y conecta casas de surgimiento, semillas, animales y el resplandor del Sol; escena simbólica del territorio Tucano sin instrumentos rituales, texto, tocados panindígenas ni pintura corporal genérica, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: tucanoCommunityImageUrl,
};

export const tucanoCommunitySeo = {
  meta_title: "Mitos Tucano: Yepá Huáke, Boraró y la yuca",
  meta_description:
    "Siete relatos Tucano revisados con fuentes, versiones, límites culturales y pares visuales propios creados con OpenAI.",
  meta_keywords:
    "mitos Tucano, Yepá Huáke, Yepá-mahsã, Boraró, Canoa de Transformación, semilla de la yuca",
  og_title: "Relatos Tucano documentados",
  og_description:
    "Siete expedientes con atribución crítica, fuentes trazables e imágenes propias.",
  twitter_title: "Relatos Tucano documentados",
  twitter_description:
    "Yepá Huáke, la transformación, Boraró, los animales y la semilla de la yuca.",
  canonical_path: "/comunidades/tucano",
  summary:
    "Seis URL corregidas, dos atribuciones trasladadas y un relato autónomo añadido.",
  focus_topics: [
    "pueblo Yepá-mahsã",
    "mitología Tucano",
    "Yepá Huáke",
    "Canoa de Transformación",
    "Boraró",
    "semilla de la yuca",
  ],
};

export function tucanoCommunitySeoPayload() {
  return {
    ...tucanoCommunitySeo,
    keywords: tucanoCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...tucanoCommunitySeo.focus_topics],
  };
}
