import { barasanaMedia } from "./media.mjs";

export const barasanaCommunityImageUrl =
  barasanaMedia["la-luna"].horizontal;

export const barasanaCommunityPage = {
  title: "Barasana",
  description:
    "Seis relatos documentados del pueblo Barasana sobre Luna y Warimi, las anacondas ancestrales, el territorio y los frutales.",
  longDescription:
    "Esta revisión conserva la URL heredada de «La luna» y la corrige como el ciclo archivado de Muyhu, Méneri-Ya y Warimi. También incorpora «Sol y Luna: día y noche», un relato distinto registrado por Stephen Hugh-Jones, y cuatro narraciones publicadas por la propia investigación colectiva de ACAIPI: Kahe Sawari y Kata Yai en el surgimiento de los Barasano; la Cuerda de Leche y la Anaconda Yeba; los Cerros-Estantillos y la Cera de Abejas; y el origen de la Gente de los Frutales Silvestres. La colección distingue las fuentes etnográficas de 1969-1979 de la voz comunitaria contemporánea, identifica narradores y traductores cuando la publicación lo permite y evita presentar conocimientos ceremoniales como instrucciones. No se despublicó la ficha heredada. Cada relato cuenta con una ilustración horizontal y otra vertical en estilo digital 2D full paper cut y paper quilling; el par de Luna se conserva y las adiciones reutilizan parejas ya aprobadas.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas a página completa: el río Pirá Paraná como una cinta azul, una luna marcada sobre el agua, una anaconda ancestral y palmas con frutos que conectan territorio y cielo; identidad Barasana sobria, sin copiar objetos ceremoniales restringidos, sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: barasanaCommunityImageUrl,
};

export const barasanaCommunitySeo = {
  meta_title: "Mitos Barasana: Luna, origen y territorio",
  meta_description:
    "Explora seis relatos Barasana documentados sobre Warimi, Sol y Luna, la Anaconda Yeba, el territorio y los frutales del Pirá Paraná.",
  meta_keywords:
    "mitos Barasana, pueblo Barasano, Warimi, Muyhu, Pirá Paraná, Anaconda Yeba, Hee Yaia Keti Oka",
  og_title: "Barasana: seis relatos documentados",
  og_description:
    "Voces comunitarias y fuentes etnográficas revisadas con atribuciones, límites culturales y dos imágenes por relato.",
  twitter_title: "Relatos Barasana del Pirá Paraná",
  twitter_description:
    "Luna y Warimi, anacondas ancestrales, territorio, cera de abejas y frutales silvestres.",
  canonical_path: "/comunidades/barasana",
  summary:
    "La revisión corrige una ficha y añade cinco relatos; prioriza cuatro narraciones de ACAIPI y mantiene límites sobre conocimiento ceremonial.",
  focus_topics: [
    "pueblo Barasana",
    "Pirá Paraná",
    "Muyhu y Warimi",
    "Anaconda Yeba",
    "Kahe Sawari y Kata Yai",
    "frutales silvestres",
    "ACAIPI",
  ],
};

export function barasanaCommunitySeoPayload() {
  return {
    ...barasanaCommunitySeo,
    keywords: barasanaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...barasanaCommunitySeo.focus_topics],
  };
}
