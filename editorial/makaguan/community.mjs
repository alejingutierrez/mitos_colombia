export const makaguanCommunityPage = {
  title: "Makaguán",
  description:
    "Dos mitos y una leyenda de El Vigía sobre los hijos del venado, la gran inundación y Wuachirajua.",
  longDescription:
    "La ruta histórica «makawanes» reúne tres relatos del pueblo Makaguán de Arauca. La revisión restituye los títulos que sabedores y comunidad educativa de El Vigía consolidaron en una investigación de la Universidad Nacional: «Los hijos del venado», «La gran inundación» y la leyenda «El alma (Wuachirajua)». Conserva las tres URLs y no añade páginas porque la fuente explica que estos fueron los relatos autorizados y trabajados durante un proceso de trece años. También distingue al pueblo Makaguán del Hitnü, aunque documentos anteriores los hayan confundido; nombra a Gregorio Flórez, David González, Manuel Sánchez y otros participantes; corrige la paloma de la inundación por el samuro señalado en la revisión comunitaria de 2023; y elimina el lenguaje que oponía una supuesta población primitiva a blancos superiores. Makaguán es el nombre oficial contemporáneo, mientras Makawanes, Makaguanes y Macahuán permanecen como grafías históricas de las fuentes y de la ruta.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición en capas planas: bosque de galería y esteros de Arauca, ríos Ele y Lipa, un venado como abuelo del pueblo, un samuro sobre la lluvia y una sombra Wuachirajua sugerida entre árboles; figuras Makaguán sobrias sin rasgos ni vestuario inventados; sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const makaguanCommunitySeo = {
  meta_title: "Relatos Makaguán: hijos del venado y El Vigía",
  meta_description:
    "Explora tres relatos Makaguán de Arauca revisados con sabedores: Los hijos del venado, La gran inundación y Wuachirajua.",
  meta_keywords:
    "mitos Makaguán, Makaguanes, hijos del venado, Tacu, Wiri, Wuachirajua, El Vigía, Arauca",
  og_title: "Makaguán: dos mitos y una leyenda de El Vigía",
  og_description:
    "Tres relatos preservados por sabedores y comunidad educativa, con variantes, contexto y fuentes consultables.",
  twitter_title: "Relatos Makaguán de Arauca",
  twitter_description:
    "Los hijos del venado, la gran inundación y Wuachirajua, revisados desde el corpus comunitario de El Vigía.",
  canonical_path: "/comunidades/makawanes",
  summary:
    "La revisión conserva tres URLs, corrige títulos y variantes, actualiza el nombre visible a Makaguán y reemplaza seis imágenes fuera del estilo.",
  focus_topics: [
    "pueblo Makaguán",
    "Los hijos del venado",
    "Tacu y Wiri",
    "gran inundación",
    "Wuachirajua",
    "resguardo El Vigía",
    "tradición oral y etnoeducación",
  ],
};

export function makaguanCommunitySeoPayload() {
  return {
    ...makaguanCommunitySeo,
    keywords: makaguanCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...makaguanCommunitySeo.focus_topics],
  };
}
