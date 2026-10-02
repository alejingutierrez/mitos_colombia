export const wounaanCommunityPage = {
  title: "Wounaan",
  description:
    "Relatos Wounaan del Baudó, el San Juan, Curiche y Puerto Pizario, con voces y variantes situadas.",
  longDescription:
    "La colección Wounaan reúne cinco páginas revisadas. Recupera el nacimiento de la gente como figuras de barro, la competencia de Ewandam y Dosat en la creación del wérregue y la historia de Madre Ñame, narrada en Puerto Pizario. Dos URL heredadas dejan de presentarse como mitos inventados e independientes: ahora documentan aspectos relacionados de la rogativa, una sobre la barca de los espíritus y otra sobre los sueños que comunican sus motivos. Las variantes del Bajo San Juan, Santa Marta de Curiche y Puerto Pizario conservan su procedencia; no se funden para construir una sola tradición Wounaan.",
  imagePrompt:
    "Ilustración full paper cut y paper quilling del territorio Wounaan: ríos del Pacífico, selva húmeda, canoa, palma de wérregue y capas de papel recortado, sin fotografía, maqueta física, diorama, CGI ni render 3D.",
};

export const wounaanCommunitySeo = {
  meta_title: "Mitos Wounaan: relatos, territorio y fuentes",
  meta_description:
    "Explora 5 relatos Wounaan sobre creación, wérregue, rogativa y Madre Ñame, con fuentes y variantes del Chocó y Valle del Cauca.",
  meta_keywords:
    "mitos Wounaan, mitología Wounaan, Ewandam, wérregue, Madre Ñame, barca de los espíritus, rogativa",
  og_title: "Mitos Wounaan con voces y territorios situados",
  og_description:
    "Cinco páginas revisadas desde el Baudó, el San Juan, Curiche y Puerto Pizario.",
  twitter_title: "Mitos Wounaan documentados",
  twitter_description:
    "Conoce cinco relatos Wounaan con procedencia, versiones y fuentes consultables.",
  canonical_path: "/comunidades/wounaan",
  summary:
    "La revisión conserva las cuatro URL del archivo, retira sus tramas inventadas, relaciona las dos páginas sobre rogativa y añade Madre Ñame con dos imágenes propias. Las fuentes comunitarias, narraciones identificadas y estudios territoriales se mantienen separados por localidad y mediación.",
  focus_topics: [
    "mitología Wounaan",
    "Ewandam",
    "wérregue",
    "Madre Ñame",
    "rogativa Wounaan",
    "barca de los espíritus",
  ],
};

export function wounaanCommunitySeoPayload() {
  return {
    ...wounaanCommunitySeo,
    keywords: wounaanCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...wounaanCommunitySeo.focus_topics],
  };
}
