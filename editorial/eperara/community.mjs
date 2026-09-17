export const eperaraCommunityPage = {
  title: "Eperara Siapidara",
  description:
    "Relatos Eperara Siapidara sobre Tachi Nawe, Tachi Akhore, el origen de la gente y el nacimiento del agua.",
  longDescription:
    "La colección Eperara Siapidara reúne dos núcleos documentados. Pania Pak’uru cuenta cómo una minga derribó el árbol que guardaba toda el agua; el relato de origen sitúa a Tachi Nawe y Tachi Akhore en Playa Pizarro, donde la gente nace de la palma. La antigua página de la «Palabra de Mangle», cuya trama había sido construida editorialmente, conserva su URL pero ahora publica el Árbol del Agua atribuido a Fabriciano Obispo. Se añade una sola página nueva para la creación de la gente, con escenas propias horizontal y vertical.",
  imagePrompt:
    "Ilustración editorial full paper cut y paper quilling del territorio Eperara Siapidara: playa del Baudó, ríos del Pacífico, árbol del agua, chontaduro, Tachi Nawe y Tachi Akhore en capas planas de papel; sin fotografía, maqueta física, diorama, CGI ni render 3D.",
};

export const eperaraCommunitySeo = {
  meta_title: "Mitos Eperara Siapidara: origen y agua",
  meta_description:
    "Explora dos relatos Eperara Siapidara documentados: Pania Pak’uru, el Árbol del Agua, y la Ley de Origen de Tachi Nawe y Tachi Akhore.",
  meta_keywords:
    "mitos Eperara Siapidara, Pania Pak’uru, árbol del agua, Tachi Nawe, Tachi Akhore, origen Eperara",
  og_title: "Mitos Eperara Siapidara documentados",
  og_description:
    "El Árbol del Agua y la Ley de Origen Eperara, con voces identificadas, variantes y fuentes consultables.",
  twitter_title: "Mitos Eperara Siapidara",
  twitter_description:
    "Conoce Pania Pak’uru y el origen de la gente en Playa Pizarro.",
  canonical_path: "/comunidades/eperara-siapidara",
  summary:
    "La revisión reemplaza una trama editorial inventada por Pania Pak’uru, conserva su URL, y añade la Ley de Origen atribuida a Fabriciano Obispo con imágenes horizontal y vertical propias.",
  focus_topics: [
    "mitología Eperara Siapidara",
    "Pania Pak’uru",
    "Tachi Nawe",
    "Tachi Akhore",
    "Playa Pizarro",
    "Árbol del Agua",
  ],
};

export function eperaraCommunitySeoPayload() {
  return {
    ...eperaraCommunitySeo,
    keywords: eperaraCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...eperaraCommunitySeo.focus_topics],
  };
}
