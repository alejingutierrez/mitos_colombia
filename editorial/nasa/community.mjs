export const nasaCommunityPage = {
  title: "Nasa",
  description:
    "Pueblo indígena del Cauca y Huila cuya memoria oral enlaza agua, territorio, autoridad, transformación y vida comunitaria.",
  longDescription:
    "El pueblo Nasa habita principalmente el Cauca y el sur del Huila. Esta colección reúne relatos de Calderas y Tierradentro: historias de lagunas, trueno, transformaciones, recorridos territoriales, autoridades y encuentros que no forman un panteón único ni describen por sí solos a todas las comunidades Nasa. Buena parte del corpus fue recogida por Segundo Bernal Villa en 1953 con informantes identificados y mediación entre nasa yuwe y castellano; por eso cada página conserva las variantes, los límites de la fuente y su contexto histórico. Juan Tama, Llíban y Juan Chiracol muestran relaciones entre agua, memoria y defensa territorial sin convertirse en una sola figura. Las voces y procesos actuales del pueblo Nasa permiten situar el archivo, pero no se usan para completar con invenciones los silencios de las narraciones.",
  imagePrompt:
    "Nasa community in the mountains of Cauca, living territory, lagoons, water, sober authority staffs and woven fibers, no pan-indigenous stereotypes",
};

export const nasaCommunitySeo = {
  meta_title: "Mitos Nasa: Juan Tama, Trueno y memoria territorial",
  meta_description:
    "Explora 26 mitos Nasa de Calderas y Tierradentro sobre Juan Tama, el Trueno, lagunas, transformaciones, territorio y memoria oral.",
  meta_keywords:
    "mitos Nasa, pueblo Nasa, Juan Tama, Trueno Nasa, Tierradentro, Calderas Cauca, tradición oral Nasa, nasa yuwe, territorio Nasa",
  og_title: "Mitos Nasa de Calderas y Tierradentro",
  og_description:
    "Conoce 26 relatos Nasa documentados con variantes, fuentes y contexto: Juan Tama, el Trueno, lagunas, transformaciones y memoria territorial.",
  twitter_title: "Mitos Nasa de Calderas y Tierradentro",
  twitter_description:
    "Explora 26 relatos Nasa con fuentes, variantes y contexto territorial.",
  canonical_path: "/comunidades/nasa-paeces",
  summary:
    "Esta colección reúne 26 relatos Nasa vinculados con Calderas y Tierradentro. Presenta a Juan Tama, el Trueno, Llíban, Juan Chiracol y otros ciclos narrativos relacionados con el agua, las lagunas, la transformación, la autoridad y la defensa del territorio. La revisión distingue las voces documentadas, las mediaciones editoriales y las variantes locales; no convierte el corpus de una parcialidad en una descripción total del pueblo Nasa contemporáneo. Cada mito conserva referencias publicables, contexto histórico y una pareja visual horizontal y vertical.",
  focus_topics: [
    "mitología Nasa",
    "Juan Tama",
    "Tierradentro",
    "territorio",
    "tradición oral",
    "nasa yuwe",
  ],
};

export function nasaCommunitySeoPayload() {
  return {
    ...nasaCommunitySeo,
    keywords: nasaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...nasaCommunitySeo.focus_topics],
  };
}
