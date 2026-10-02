export const kuivaCommunityPage = {
  title: "Kuiva (Wamonae)",
  description:
    "Dos relatos documentados de la Orinoquía sobre la sangre del cielo, Boupé, Namon y una inundación que transforma la vida.",
  longDescription:
    "La ruta histórica «kuibas» reúne dos relatos del pueblo Kuiva o Wamonae. La revisión conserva la única URL heredada y reemplaza su expansión literaria por la secuencia publicada en la antología Mitos de creación: una herida en el cielo, fragmentos de sangre que se convierten en personas, el aprendizaje de los frutos, Boupé como primer jefe y Daimú como figura vinculada con el sueño. Añade «Namon y la inundación» porque su versión completa puede consultarse y rastrearse hasta el corpus Folk Literature of the Cuiva Indians, editado por Johannes Wilbert y Karin Simoneau. El índice del mismo volumen registra otras versiones de creación, inundación y emergencia desde debajo de la tierra, pero esta colección no inventa sus argumentos a partir de títulos. Kuiva, Cuiva, Wamonae y Wamone aparecen en fuentes distintas y pueden señalar historias locales de denominación; aquí se muestran Kuiva y Wamonae para conectar la ruta heredada con una autodenominación vigente. Las fuentes institucionales también advierten que algunos registros fueron transformados por misiones: por eso la ficha de creación atribuye sus detalles a la edición consultada y no los presenta como una cosmogonía única, antigua o válida para todas las comunidades.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, composición de capas planas: sabana inundable y bosque de galería de la Orinoquía, una abertura luminosa en el cielo de la que caen fragmentos rojos simbólicos, personas reunidas cerca de una cueva y una balsa ante aguas extensas; identidad Kuiva/Wamonae sobria sin rasgos ni vestuario inventados; sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const kuivaCommunitySeo = {
  meta_title: "Mitos Kuiva (Wamonae): Boupé y Namon",
  meta_description:
    "Explora dos relatos Kuiva/Wamonae documentados: la sangre del cielo y Boupé, y Namon ante la gran inundación.",
  meta_keywords:
    "mitos Kuiva, relatos Wamonae, Boupé, Namon, inundación Cuiva, Caño Mochuelo, Orinoquía",
  og_title: "Kuiva (Wamonae): dos relatos documentados",
  og_description:
    "La sangre del cielo y Namon ante la inundación, revisados con variantes, límites documentales y fuentes consultables.",
  twitter_title: "Relatos Kuiva (Wamonae)",
  twitter_description:
    "Dos narraciones de creación e inundación, sin reconstruir relatos cuyo texto no está disponible.",
  canonical_path: "/comunidades/kuibas",
  summary:
    "La revisión corrige la ficha heredada, añade una inundación documentada y reemplaza cuatro imágenes fuera del estilo por dos pares 2D full paper cut.",
  focus_topics: [
    "pueblo Kuiva y Wamonae",
    "sangre del cielo",
    "Boupé",
    "Namon",
    "gran inundación",
    "Caño Mochuelo",
    "variantes de literatura oral",
  ],
};

export function kuivaCommunitySeoPayload() {
  return {
    ...kuivaCommunitySeo,
    keywords: kuivaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...kuivaCommunitySeo.focus_topics],
  };
}
