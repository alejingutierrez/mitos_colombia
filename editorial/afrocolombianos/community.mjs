import { afrocolombianMedia } from "./media.mjs";

export const afrocolombianCommunityImageUrl =
  afrocolombianMedia.anansi.horizontal;

export const afrocolombianCommunityPage = {
  title: "Afrocolombianos",
  description:
    "Seis relatos documentados del Pacífico sobre astucia, extravío, fiesta, río y mortalidad.",
  longDescription:
    "Esta colección reúne seis expedientes con procedencias explícitas y sin tratar Afrocolombianos como una comunidad homogénea. Ananse conserva el episodio del sacristán que sube al campanario; la Tunda sigue una versión de Tumaco donde una estudiante reconoce demasiado tarde el rostro prestado de su madre; Kijimba vuelve a la narración de Rosalba Cossio García sobre el baile de las ánimas; la Sierpe de Beté queda limitada a su núcleo de tres cabezas, fiestas patronales y temor entre pescadores; el Riviel pasa desde Mixto a Afrocolombianos y recupera la mochita recordada en Buenaventura; y una ficha nueva mantiene por separado los cuentos de Tutunendo y Munguidó sobre la aparición de la muerte. La antigua categoría Africano se elimina solo cuando quede vacía. Chimbilaco conserva su URL, pero pasa al frente Yagua como rumor amazónico contemporáneo e interétnico. Ninguna ruta se despublica. Cada ficha canónica requiere dos escenas propias generadas con OpenAI como ilustración digital 2D full paper cut y paper quilling.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: Ananse pequeño sobre un campanario chocoano mientras abajo un sacerdote y vecinos escuchan una voz que desciende; paisaje húmedo en capas digitales mate, figuras adultas con ropa cotidiana sobria, sin caricatura ni exotización; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: afrocolombianCommunityImageUrl,
  searchTerms: [
    "Afrocolombianos",
    "comunidades negras",
    "Pacífico colombiano",
    "tradición oral afrocolombiana",
    "mitos del Chocó",
  ],
};

export const afrocolombianCommunitySeo = {
  meta_title: "Mitos afrocolombianos del Pacífico",
  meta_description:
    "Seis relatos afrocolombianos documentados: Ananse, Tunda, Kijimba, Sierpe de Beté, Riviel y dos versiones chocoanas sobre la muerte.",
  meta_keywords:
    "mitos afrocolombianos, Ananse, Tunda, Kijimba, Sierpe de Beté, Riviel, tradición oral del Pacífico",
  og_title: "Seis relatos afrocolombianos revisados",
  og_description:
    "Historias de Chocó, Tumaco y Buenaventura con narradores, variantes y límites documentales visibles.",
  twitter_title: "Mitos afrocolombianos revisados",
  twitter_description:
    "Astucia, extravío, baile, río y mortalidad en seis expedientes del Pacífico colombiano.",
  canonical_path: "/comunidades/afrocolombianos",
  summary:
    "Seis fichas canónicas afrocolombianas, tres transferencias taxonómicas y una incorporación documentada.",
  focus_topics: [
    "Ananse en el Chocó",
    "Tunda de Tumaco",
    "Kijimba y las ánimas",
    "Sierpe de Beté",
    "Riviel de Buenaventura",
    "muerte en Tutunendo y Munguidó",
  ],
};

export function afrocolombianCommunitySeoPayload() {
  return {
    ...afrocolombianCommunitySeo,
    keywords: afrocolombianCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...afrocolombianCommunitySeo.focus_topics],
  };
}
