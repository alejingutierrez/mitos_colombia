import { zenuMedia } from "./media.mjs";

export const zenuCommunityImageUrl =
  zenuMedia["mexion-y-manexca"].horizontal;

export const zenuCommunityPage = {
  title: "Zenú",
  description:
    "Seis relatos documentados sobre creación, universo tejido, caimán de oro, Corcovao, Torcorá y el totumo de oro.",
  longDescription:
    "La revisión Zenú conserva las siete URLs heredadas, pero reemplaza sus expansiones originales por expedientes atribuidos. Seis páginas permanecen en la comunidad: Mexión y Manexca reúne creación, poblamiento, Ninha, Thi, primera luz y primera noche; la URL de La noche más larga presenta ahora el sombrero que ordenó el universo; el caimán de oro vuelve a ser el cuerpo que sostiene el resguardo; Corcovao recupera a Tofeme o Mocán y sus señales; Torcorá conserva la canoa encantada de La Sierpe; y el totumo de oro queda como una prueba breve de extravío y devolución. Juan Lara mantiene su enlace, pero pasa a Caribe Mestizo porque las fuentes lo identifican como folclor cordobés y no sostienen la trenza, el amuleto ni una atribución exclusivamente Zenú. Ixitoco, Ninha y Thi no se fragmentan en páginas separadas; Zenufana, Onomá, las Mohanas y otros materiales sensibles o incompletos permanecen como contexto. Ninguna ruta se despublica. Cada expediente tendrá dos escenas propias generadas con OpenAI como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: Mexión y Manexca observan cómo Ninha asciende como disco solar sobre sabanas, agua y pequeños asentamientos representados en capas digitales mate; figuras adultas simbólicas sin rasgos étnicos, tocados, pintura corporal, joyas ni vestuario ceremonial inventado; sin texto ni letras, sin fotografía, fibras reales, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: zenuCommunityImageUrl,
};

export const zenuCommunitySeo = {
  meta_title: "Mitos Zenú: seis relatos revisados",
  meta_description:
    "Seis mitos Zenú documentados: Mexión y Manexca, el sombrero-universo, el caimán de oro, Corcovao, Torcorá y el totumo de oro.",
  meta_keywords:
    "mitos Zenú, Mexión y Manexca, caimán de oro, Corcovao de Tofeme, Torcorá, totumo de oro, cosmovisión Zenú",
  og_title: "Seis ciclos documentados de la tradición Zenú",
  og_description:
    "Siete rutas corregidas, una transferencia a Caribe Mestizo y versiones atribuidas sin expansiones inventadas.",
  twitter_title: "Mitos Zenú revisados",
  twitter_description:
    "Creación, universo tejido, guardianes territoriales y relatos de oro con fuentes y límites visibles.",
  canonical_path: "/comunidades/zenu",
  summary:
    "Seis fichas canónicas Zenú y una ruta transferida a Caribe Mestizo, sin despublicar enlaces.",
  focus_topics: [
    "pueblo Zenú",
    "Mexión y Manexca",
    "sombrero y universo",
    "caimán de oro",
    "Corcovao de Tofeme",
    "Torcorá y La Sierpe",
    "totumo de oro",
  ],
};

export function zenuCommunitySeoPayload() {
  return {
    ...zenuCommunitySeo,
    keywords: zenuCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...zenuCommunitySeo.focus_topics],
  };
}
