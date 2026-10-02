export const chimilaCommunityPage = {
  title: "Ette Ennaka (Chimila)",
  description:
    "Archivo crítico de veintitrés relatos Ette Ennaka: el corpus narrado por Tangrutaya Mutsu y dos cosmogonías vivas sobre Yunari, Yaau y Numirinta.",
  longDescription:
    "Ette Ennaka, «gente propia», es el nombre con el que hoy se reconoce el pueblo también llamado Chimila. Esta colección conserva las veintiuna URLs del archivo histórico, pero reemplaza sus expansiones literarias genéricas por versiones fieles al corpus que Gerardo Reichel-Dolmatoff publicó en 1945 y atribuyó al cacique Tangrutaya Mutsu. La revisión no borra esa fuente: explica que fue registrada en castellano, mediada por un investigador y producida en un contexto que no representa toda la diversidad Ette. También incorpora dos relatos contemporáneos ausentes: Yunari, la Tierra Madre relacionada con el ciclo de cinco tierras, y la creación de los Ette Ennaka por Yaau y Numirinta mediante dos mazorcas de maíz cariaco. El conjunto distingue memoria histórica, narración viva e interpretación académica; evita llamar mito universal a la voz de un solo narrador y retira añadidos sin fuente, como la segunda historia moderna que se había mezclado con El Morrocoyo.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, de acabado gráfico plano y capas planas: sabanas y bosques secos del Magdalena conectados con ríos, lagunas y la Sierra Nevada distante; Yunari sugerida como gran contorno terrestre, Yaau y Numirinta junto a dos mazorcas de maíz cariaco, y pequeños motivos de luna, sol, arco iris y animales; identidad Ette Ennaka sobria, sin ranchería wayuu, pirámides, cactus desérticos, regalia inventada, tocados panindígenas, símbolos aztecas, mayas o muiscas, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const chimilaCommunitySeo = {
  meta_title: "Mitos Ette Ennaka (Chimila): archivo revisado",
  meta_description:
    "Explora 23 relatos Ette Ennaka revisados: el corpus de Tangrutaya Mutsu, Yunari, las cinco tierras, Yaau, Numirinta y la memoria del territorio.",
  meta_keywords:
    "mitos Ette Ennaka, mitos Chimila, Tangrutaya Mutsu, Yunari Kraari, Yaau, Numirinta, Sabanas de San Ángel",
  og_title: "Ette Ennaka: veintitrés relatos con fuentes y contexto",
  og_description:
    "El corpus histórico se reconstruye sin prosa inventada y dialoga con dos cosmogonías Ette contemporáneas.",
  twitter_title: "Archivo Ette Ennaka revisado",
  twitter_description:
    "Veintiún relatos históricos y dos cosmogonías vivas, con procedencia, cautelas e imágenes paper cut.",
  canonical_path: "/comunidades/chimila",
  summary:
    "La revisión conserva 21 URLs, incorpora 2 relatos vivos, corrige las expansiones y actualiza el nombre visible a Ette Ennaka (Chimila).",
  focus_topics: [
    "Tangrutaya Mutsu y el corpus de 1945",
    "Papá Grande, Yaau y Numirinta",
    "Yunari Kraari y las cinco tierras",
    "sueños, animales y transformaciones",
    "agua, fuego, maíz y territorio",
    "nombre Ette Ennaka y memoria Chimila",
  ],
};

export function chimilaCommunitySeoPayload() {
  return {
    ...chimilaCommunitySeo,
    keywords: chimilaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...chimilaCommunitySeo.focus_topics],
  };
}

