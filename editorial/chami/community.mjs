export const chamiCommunityPage = {
  title: "Emberá Chamí",
  description:
    "Relatos Chamí de Río Frío, Risaralda y Caldas con versiones, procedencias y fronteras culturales explícitas.",
  longDescription:
    "La colección Emberá Chamí reúne veintidós páginas y diferencia tres capas documentales. Catorce relatos proceden de un grupo Chamí asentado en Corozal, municipio de Río Frío, y fueron transcritos en 1945 por Gerardo Reichel-Dolmatoff. Otros expedientes conservan memorias de Risaralda y del occidente de Caldas: la Jepá de Jeguada, los mundos creados por Dachicore, la culebra de siete cabezas de La Montaña, los espíritus de las gotas de Lomaprieta y Surranabe, atribuido expresamente a narradores Chamí por Milcíades Chaves. Finalmente, Jinu Potó, el origen de los animales y las transformaciones se presentan como ciclos con variantes, no como una única narración homogénea. La revisión retira fusiones con relatos Katío y Dóbida, conserva todas las URL publicadas, documenta los límites de las fuentes históricas y devuelve a cada página un foco narrativo reconocible.",
  imagePrompt:
    "Ilustración full paper cut y paper quilling del territorio Emberá Chamí andino: cordillera, río, bosque húmedo, tambo y senderos en capas de papel recortado, sin fotografía, maqueta física ni estereotipos panindígenas",
};

export const chamiCommunitySeo = {
  meta_title: "Mitos Emberá Chamí: relatos y fuentes",
  meta_description:
    "Explora 22 mitos Emberá Chamí de Río Frío, Risaralda y Caldas con fuentes, variantes regionales y contexto editorial verificable.",
  meta_keywords:
    "mitos Emberá Chamí, mitología Chamí, Río Frío, Jinu Potó, Karagabí, Jepá, Risaralda, Caldas, tradición oral",
  og_title: "Mitos Emberá Chamí con fuentes y territorio",
  og_description:
    "Relatos de Río Frío, Risaralda y Caldas revisados sin confundir variantes Chamí, Katío y Dóbida.",
  twitter_title: "Mitos Emberá Chamí documentados",
  twitter_description:
    "Conoce 22 relatos Chamí con procedencia, versiones y fuentes publicables.",
  canonical_path: "/comunidades/chami",
  summary:
    "La revisión conserva las veintidós URL Chamí y reconstruye cada página desde fuentes con funciones distintas. El corpus de Río Frío queda acreditado como una transcripción histórica localizada; los relatos de Risaralda y Caldas recuperan narradores, lugares y bibliografía cuando están disponibles. Surranabe vuelve a Chamí desde la clasificación Katío errónea y conserva su par visual. Las páginas sintéticas declaran su condición de ciclos editoriales y dejan de mezclar episodios de otros pueblos Emberá. La colección también corrige geografía, etiquetas, SEO y pares visuales, con una dirección full paper cut y paper quilling.",
  focus_topics: [
    "mitología Emberá Chamí",
    "Río Frío",
    "Jinu Potó",
    "Karagabí",
    "Jepá",
    "tradición oral",
  ],
};

export function chamiCommunitySeoPayload() {
  return {
    ...chamiCommunitySeo,
    keywords: chamiCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...chamiCommunitySeo.focus_topics],
  };
}
