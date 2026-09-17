import { ticunaMedia } from "./media.mjs";

export const ticunaCommunityImageUrl = ticunaMedia.creacion.horizontal;

export const ticunaCommunityPage = {
  title: "Ticuna",
  description:
    "Seis relatos atribuidos sobre Ngutapa, Yoí, Ípi, Wone, Eware, el Sol, la Luna, el friaje y la canoa de Moe.",
  longDescription:
    "La revisión conserva dos URL heredadas, pero corrige sus atribuciones: el relato de Yuche se reemplaza por el nacimiento de Yoí e Ípi desde las rodillas de Ngutapa, y la historia sintética de María y la pelazón se sustituye por el ciclo documentado de Wone, Eware y la pesca de los humanos. Se añaden cuatro relatos autónomos publicados con narrador, lugar y fecha en Historias de los abuelos de Moruapü: el Sol contado por Dolores Noé; la Luna y el friaje por Augusto Coello; y la canoa de Moe por Remigio Santos. La página distingue versiones, nombra el contenido sensible sin recrearlo y mantiene fuera cantos, fórmulas e instrucciones. Cada mito tiene una pareja horizontal y vertical propia, investigada desde su expediente y creada como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano a página completa: Ngutapa, Yoí e Ípi articulados con Wone convertido en red de ríos y Eware llena de peces que cruzan la orilla como personas; capas digitales de selva y agua sin tocados panindígenas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: ticunaCommunityImageUrl,
};

export const ticunaCommunitySeo = {
  meta_title: "Mitos Ticuna: Yoí, Ípi, Wone, Sol, Luna y Moe",
  meta_description:
    "Seis relatos Ticuna documentados sobre Ngutapa, Yoí e Ípi, Wone y Eware, el Sol, la Luna, el friaje y la canoa de Moe.",
  meta_keywords:
    "mitos Ticuna, Yoí e Ípi, Ngutapa, Wone, Eware, Sol Tikuna, Luna Tikuna, canoa de Moe",
  og_title: "Relatos Ticuna documentados",
  og_description:
    "Seis expedientes con narradores identificados, fuentes trazables e imágenes propias.",
  twitter_title: "Relatos Ticuna documentados",
  twitter_description:
    "Ngutapa, Wone, Eware, el Sol, la Luna, el friaje y la canoa de Moe.",
  canonical_path: "/comunidades/ticuna",
  summary:
    "Dos fichas corregidas y cuatro relatos añadidos desde fuentes Tikuna atribuidas.",
  focus_topics: [
    "pueblo Ticuna",
    "Ngutapa",
    "Yoí e Ípi",
    "Wone y Eware",
    "Historias de los abuelos de Moruapü",
    "relatos de origen amazónicos",
  ],
};

export function ticunaCommunitySeoPayload() {
  return {
    ...ticunaCommunitySeo,
    keywords: ticunaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...ticunaCommunitySeo.focus_topics],
  };
}
