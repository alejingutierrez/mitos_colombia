export const misakCommunityPage = {
  title: "Misak",
  description:
    "Siete relatos sobre los hijos del agua, Mama Manuela, Tumpe, el rayo, la laguna, Kcrey y Pedro de Urdimales.",
  longDescription:
    "La colección Misak reúne siete núcleos documentados en Guambía. La creación conserva la voz colaborativa de mayores y docentes sobre Pishimisak y los Pishau. El viento Tumpe, sus hijos y los dos rayos se restituyen desde versiones con narradores identificados. Mama Manuela se presenta con la genealogía de transmisión recuperada por la investigación reciente. El niño serpiente, Kcrey y Pedro de Urdimales permanecen como relatos de transmisión compleja: se distinguen las memorias tempranas de las reelaboraciones didácticas difundidas por Fernando Solarte. La ruta histórica conserva el término «Guambianos» para no romper enlaces, pero la comunidad se nombra públicamente Misak.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio Misak de Guambía: páramo, lagunas de Piendamó y Ñimbe, agua que desciende entre montañas, aroiris circular, tejidos azules y una comunidad reunida junto al fogón, composición en capas planas; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const misakCommunitySeo = {
  meta_title: "Mitos Misak: hijos del agua y relatos de Guambía",
  meta_description:
    "Explora siete relatos Misak documentados sobre Pishimisak, Mama Manuela, Tumpe, el rayo, la laguna, Kcrey y Pedro de Urdimales.",
  meta_keywords:
    "mitos Misak, Guambía, hijos del agua, Pishimisak, Mama Manuela, Tumpe, Palayg, Pedro de Urdimales",
  og_title: "Mitos Misak de Guambía",
  og_description:
    "Siete relatos revisados con voces comunitarias, variantes históricas y fuentes consultables.",
  twitter_title: "Mitos Misak",
  twitter_description:
    "Pishimisak, los hijos del agua, Mama Manuela, Tumpe, el rayo, Kcrey y Pedro de Urdimales.",
  canonical_path: "/comunidades/misak-guambianos",
  summary:
    "La revisión normaliza el nombre público Misak, mantiene las siete URLs y separa las fuentes comunitarias de las reelaboraciones literarias tardías.",
  focus_topics: [
    "mitología Misak",
    "Guambía",
    "Pishimisak",
    "hijos del agua",
    "Mama Manuela",
    "Tumpe",
    "Pedro de Urdimales",
  ],
};

export function misakCommunitySeoPayload() {
  return {
    ...misakCommunitySeo,
    keywords: misakCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...misakCommunitySeo.focus_topics],
  };
}
