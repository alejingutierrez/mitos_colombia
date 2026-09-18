export const pananCommunityPage = {
  title: "Panán",
  description:
    "Relatos y lugares de la comunidad de Panán del pueblo Pastos: agua, páramo, chagra, espíritus y memoria territorial.",
  longDescription:
    "La colección reúne dieciséis núcleos documentados en la comunidad de Panán del pueblo Pastos. Conserva las quince direcciones existentes y añade Guamurran, Madre de Agua, el único apartado del corpus principal que faltaba. Huacas y Waka permanecen separadas porque la fuente distingue las experiencias sobre entierros y apariciones del lenguaje espiritual que relaciona riqueza, territorio y mayores. Los relatos se presentan como memoria viva, con variantes atribuidas y sin inventar episodios para convertir lugares breves en cuentos.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio altoandino de Panán, pueblo Pastos: páramo, nacimientos de agua, La Tuta, chagras, frailejones, acequias y arco del Cueche en capas planas; sin fotografía de papel, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const pananCommunitySeo = {
  meta_title: "Mitos de Panán: memoria del pueblo Pastos",
  meta_description:
    "Explora dieciséis relatos documentados de Panán sobre La Tuta, agua, páramo, chagra, huacas y espíritus del territorio.",
  meta_keywords:
    "mitos de Panán, pueblo Pastos, Resguardo de Panán, La Tuta, Guamurran, María Panana, Cueche",
  og_title: "Mitos y memoria territorial de Panán",
  og_description:
    "Dieciséis relatos de la comunidad de Panán con contexto, variantes y fuentes consultables.",
  twitter_title: "Mitos de Panán",
  twitter_description:
    "La Tuta, Guamurran, María Panana, chagras y espíritus del territorio.",
  canonical_path: "/comunidades/pananes",
  summary:
    "La revisión sustituye expansiones sin respaldo por el corpus comunitario, conserva quince páginas, distingue huacas de Waka y añade Guamurran con dos imágenes.",
  focus_topics: [
    "mitos de Panán",
    "pueblo Pastos",
    "memoria territorial",
    "La Tuta",
    "Guamurran",
    "María Panana",
  ],
};

export function pananCommunitySeoPayload() {
  return {
    ...pananCommunitySeo,
    keywords: pananCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...pananCommunitySeo.focus_topics],
  };
}
