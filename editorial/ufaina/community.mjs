import { ufainaMedia } from "./media.mjs";

export const ufainaCommunityImageUrl =
  ufainaMedia["creacion-ufaina"].horizontal;

export const ufainaCommunityPage = {
  title: "Ufaina / Tanimuka",
  description:
    "Un ciclo documentado sobre los Imarikakana, la primera maloca, la noche y el río Apaporis.",
  longDescription:
    "La revisión conserva la única URL heredada y corrige su atribución documental. El registro de Martín von Hildebrand fue narrado principalmente por Guaraná Tanimuka en 1972 y publicado en 1975. Sus cuarenta y cuatro capítulos son divisiones del investigador: los Ufaina contaban el conjunto de forma seguida, por lo que no se crean decenas de páginas artificiales. La edición selecciona episodios públicos sobre la primera maloca, la obtención de la noche, el agua y el árbol que se vuelve Apaporis; declara que el registro es incompleto y respeta la petición de mantener el Yuruparí fuera de publicación. La ficha usa también los nombres Tanimuka y Yairi marâ para reconocer su presencia contemporánea. Sus imágenes horizontal y vertical son escenas distintas generadas con OpenAI como ilustración digital 2D full paper cut.",
  imagePrompt:
    "Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano a página completa: cuatro hermanos adultos levantan una maloca circular bajo una palma de bombona mientras el río Apaporis aparece al fondo como capas azules recortadas; sin símbolos panindígenas, tocados, pintura corporal, vestuario ceremonial, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  imageUrl: ufainaCommunityImageUrl,
};

export const ufainaCommunitySeo = {
  meta_title: "Mito Ufaina: los Imarikakana y el Apaporis",
  meta_description:
    "Ciclo Ufaina revisado con fuentes sobre los Imarikakana, la primera maloca, el origen de la noche y el río Apaporis.",
  meta_keywords:
    "mito Ufaina, mito Tanimuka, Imarikakana, primera maloca, origen de la noche, río Apaporis",
  og_title: "Los Imarikakana y el origen del mundo Ufaina",
  og_description:
    "Una edición documentada que conserva el ciclo continuo y sus límites culturales.",
  twitter_title: "Los Imarikakana y el mundo Ufaina",
  twitter_description:
    "Primera maloca, noche, agua y formación del río Apaporis.",
  canonical_path: "/comunidades/ufaina",
  summary:
    "Una ficha corregida, siete fuentes y un ciclo continuo sin fragmentación artificial.",
  focus_topics: [
    "pueblo Ufaina o Tanimuka",
    "Imarikakana",
    "primera maloca",
    "origen de la noche",
    "río Apaporis",
    "Yaigojé Apaporis",
  ],
};

export function ufainaCommunitySeoPayload() {
  return {
    ...ufainaCommunitySeo,
    keywords: ufainaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...ufainaCommunitySeo.focus_topics],
  };
}
