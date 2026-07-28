function source({ title, author, year, type, url, summary, limitation }) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const barasanaSources = {
  communityBook: source({
    title: "Hee Yaia Godo ~ Bakari: el territorio de los Jaguares de Yuruparí",
    author:
      "ACAIPI, sabedores tradicionales e investigadores locales del río Pirá Paraná",
    year: 2015,
    type: "investigación y publicación colectiva indígena",
    url: "https://gaiaamazonas.org/wp-content/uploads/2024/04/GaiaAmazonas-Hee_yaia_Godo-bakari.pdf",
    summary:
      "Publicación colectiva de los pueblos del Pirá Paraná. Identifica narradores, traductores, comunidades y versiones Barasano sobre origen, territorio, anacondas, cerros y frutales.",
    limitation:
      "Es un bien colectivo de varios pueblos del Pirá Paraná. Cada ficha distingue las narraciones específicamente acreditadas a personas Barasano de los capítulos compartidos.",
  }),
  palm: source({
    title:
      "The Palm and the Pleiades: Initiation and Cosmology in Northwest Amazonia",
    author: "Stephen Hugh-Jones",
    year: 1979,
    type: "monografía etnográfica con textos míticos",
    url: "https://ehrafworldcultures.yale.edu/cultures/sq19/documents/010",
    summary:
      "Etnografía basada en trabajo de campo de 1968 a 1970 entre los Barasana. Incluye ocho conjuntos de textos míticos, entre ellos Sol y Luna y el ciclo de Warimi.",
    limitation:
      "La transcripción y el análisis pertenecen a su momento etnográfico. No sustituyen la voz comunitaria contemporánea ni autorizan a divulgar conocimiento no publicado por la comunidad.",
  }),
  milkRiver: source({
    title: "From the Milk River: Spatial and Temporal Processes in Northwest Amazonia",
    author: "Christine Hugh-Jones",
    year: 1979,
    type: "monografía etnográfica",
    url: "https://ehrafworldcultures.yale.edu/cultures/sq19/documents/011",
    summary:
      "Aporta contexto Barasana sobre parentesco, espacio, tiempo, trabajo y vida en la maloca a partir del mismo periodo de trabajo de campo.",
    limitation:
      "Es fuente de contexto social y no una segunda versión de todos los episodios narrativos.",
  }),
  torres: source({
    title:
      "Mito y cultura entre los Barasana: un grupo indígena tukano del Vaupés",
    author: "Alfonso Torres Laborde",
    year: 1969,
    type: "monografía antropológica",
    url: "https://books.google.com/books/about/Mito_y_cultura_entre_los_Barasana.html?id=ktoKAQAAIAAJ",
    summary:
      "Estudio en español dedicado al mito y la cultura Barasana; ayuda a rastrear grafías como Muyhu, Méneri-Ya y el ciclo de Warimi.",
    limitation:
      "La vista digital es bibliográfica y fragmentaria; no se usa para completar silencios con escenas inventadas.",
  }),
  pleiades: source({
    title: "As Plêiades e Escorpião na Cosmologia Barasana",
    author: "Stephen Hugh-Jones",
    year: 2017,
    type: "artículo etnoastronómico revisado por el autor",
    url: "https://periodicos.ufpe.br/revistas/revistaanthropologicas/article/download/231438/25548",
    summary:
      "Relaciona constelaciones, estaciones, ríos, lluvias, peces y ritualidad en la cosmología Barasana y revisa el artículo original de 1982.",
    limitation:
      "Interpreta relaciones astronómicas y estacionales; no constituye una transcripción independiente de cada mito.",
  }),
  minCultura: source({
    title:
      "Hee yaia keti oka, conocimiento tradicional de los Jaguares de Yuruparí",
    author: "Ministerio de Cultura de Colombia",
    type: "ficha institucional de patrimonio cultural inmaterial",
    url: "https://patrimonio.mincultura.gov.co/salvaguardiapci/Lista-Representativa/Paginas/el-conocimiento-tradicional-de-los-jaguares-de-Yurupar%C3%AD.aspx",
    summary:
      "Sitúa el sistema de conocimiento vivo de los pueblos del Pirá Paraná, incluido el Barasano, y su relación con territorio, plantas, animales y seres visibles e invisibles.",
    limitation:
      "Resume la manifestación patrimonial; no narra cada episodio ni reemplaza a la publicación comunitaria.",
  }),
  planVida: source({
    title: "Plan de Vida del Territorio Indígena del Río Pirá Paraná",
    author: "Consejo Indígena del Territorio del Pirá Paraná",
    year: 2025,
    type: "documento contemporáneo de gobierno propio",
    url: "https://jaguaresdeyurupari.org/wp-content/uploads/2025/11/PdV-PP-V061125-_-Digital.pdf",
    summary:
      "Expone desde el gobierno propio el sentido vigente de Hee Yaia Keti Oka, el territorio, la transmisión de conocimientos y el cuidado de la vida.",
    limitation:
      "No publica una versión narrativa de cada mito y se usa para delimitar la lectura contemporánea, no para inventar episodios.",
  }),
};

export function pickBarasanaSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = barasanaSources[key];
    if (!selected) throw new Error(`Fuente Barasana desconocida: ${key}`);
    return selected;
  });
}
