export const bariCommunityPage = {
  title: "Barí",
  description:
    "Relatos Barí de Ishtana sobre Sabaseba, el bejuco celeste, los ríos, las luces del cielo y el tránsito al más allá.",
  longDescription:
    "La colección Barí reúne seis páginas revisadas desde fuentes comunitarias, antologías críticas y estudios del territorio transfronterizo del Catatumbo. Conserva la URL heredada y reúne allí dos versiones relacionadas del bejuco cortado entre el cielo o la Luna e Ishtana. Añade cinco núcleos documentados: Sabaseba y la gente salida de las piñas; el gran árbol que formó las cuencas; Sibabió y las cenizas; Ñandóu y Chibáig como luces del cielo; y el viaje llamado Caminar liviano. «Motilón» se mantiene únicamente en la ruta y taxonomía histórica para no romper enlaces; el nombre público es Barí, tal como lo emplean las autoridades de la comunidad.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio Barí o Ishtana: selva del Catatumbo, bohío, ríos, piñas, sol y luna en capas planas de papel recortado y quilling gráfico; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const bariCommunitySeo = {
  meta_title: "Mitos Barí: Sabaseba, Ishtana y relatos del Catatumbo",
  meta_description:
    "Explora 6 relatos Barí sobre Sabaseba, el bejuco celeste, los ríos, Sol, Luna, Sibabió y el más allá, con fuentes y variantes.",
  meta_keywords:
    "mitos Barí, mitología Barí, Sabaseba, Ishtana, Catatumbo, Ñandóu, Chibáig, Sibabió",
  og_title: "Mitos Barí documentados desde Ishtana",
  og_description:
    "Seis relatos revisados sobre origen, territorio, cielo, ríos y tránsito al más allá.",
  twitter_title: "Mitos Barí con fuentes y variantes",
  twitter_description:
    "Conoce seis relatos Barí del Catatumbo con procedencia y mediaciones visibles.",
  canonical_path: "/comunidades/motilon-bari",
  summary:
    "La revisión conserva la URL heredada, corrige el exónimo como nombre público, unifica dos variantes del bejuco celeste, añade cinco relatos documentados y exige una pareja visual 2D full paper cut por página.",
  focus_topics: [
    "mitología Barí",
    "Sabaseba",
    "Ishtana",
    "bejuco celeste",
    "ríos del Catatumbo",
    "Ñandóu y Chibáig",
    "Sibabió",
  ],
};

export function bariCommunitySeoPayload() {
  return {
    ...bariCommunitySeo,
    keywords: bariCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...bariCommunitySeo.focus_topics],
  };
}
