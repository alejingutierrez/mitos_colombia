export const katioCommunityPage = {
  title: "Emberá Katío",
  description:
    "Relatos Katío con procedencia, variantes y mediaciones históricas explícitas.",
  longDescription:
    "La colección Emberá Katío reúne diecinueve páginas canónicas. Distingue las voces comunitarias contemporáneas del Alto Andágueda de un corpus histórico recogido en Urabá y el occidente de Antioquia bajo condiciones misioneras. La revisión conserva las URL, separa a Dabeiba Katío de Dobaida Cueva, traslada el relato Chamí de Surranabe a su comunidad documentada, recupera el árbol Genené y los yaedé detrás de títulos heredados, y añade a Baha con su pareja visual completa. Cada expediente explica qué procede de una narración, qué pertenece al editor histórico y qué sigue siendo una frontera incierta.",
  imagePrompt:
    "Ilustración full paper cut y paper quilling del territorio Emberá Katío: selva húmeda, montañas del noroccidente, río, tambo y senderos en capas de papel recortado, sin fotografía, maqueta física, diorama, 3D ni estereotipos panindígenas.",
};

export const katioCommunitySeo = {
  meta_title: "Mitos Emberá Katío: relatos y fuentes",
  meta_description:
    "Explora 19 mitos Emberá Katío con fuentes, variantes del Alto Andágueda, Urabá y el occidente antioqueño, y límites editoriales claros.",
  meta_keywords:
    "mitos Emberá Katío, mitología Katío, Karagabí, Genené, Dabeiba, Baha, Alto Andágueda, Urabá, tradición oral",
  og_title: "Mitos Emberá Katío con fuentes y territorio",
  og_description:
    "Relatos Katío revisados sin confundir las variantes Chamí, Dóbida, Cueva ni la interpretación misionera.",
  twitter_title: "Mitos Emberá Katío documentados",
  twitter_description:
    "Conoce 19 relatos Katío con procedencia, versiones y fuentes verificables.",
  canonical_path: "/comunidades/katios",
  summary:
    "La revisión reconstruye el universo Katío desde fuentes con funciones distintas. Las memorias comunitarias del Alto Andágueda conservan su procedencia y sus voces; el archivo de 1924 y las notas de 1929 se presentan con su mediación misionera y sus contradicciones. Tres páginas cambian de frontera cultural, Baha se incorpora con dos imágenes, y las ilustraciones corregidas siguen una dirección full paper cut y paper quilling.",
  focus_topics: [
    "mitología Emberá Katío",
    "Karagabí",
    "Genené",
    "Dabeiba",
    "Baha",
    "Alto Andágueda",
  ],
};

export function katioCommunitySeoPayload() {
  return {
    ...katioCommunitySeo,
    keywords: katioCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...katioCommunitySeo.focus_topics],
  };
}
