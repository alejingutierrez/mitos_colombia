export const cuycuyesCommunityPage = {
  title: "Cuycuyes",
  description:
    "Archivo crítico del territorio Cuy-Cuy o Coy-Coy, llamado Arma o Armados por los españoles, y de dos relatos conservados alrededor de Aguadas.",
  longDescription:
    "La colección Cuycuyes reúne dos estratos narrativos distintos del territorio situado entre Sonsón, Aguadas y el Cauca medio. La primera página revisa un episodio ritual registrado por Pedro Cieza de León en el siglo XVI y corrige una demonización: la figura de ojos resplandecientes no recibe nombre en la crónica, mientras un vocabulario posterior distingue a Untré, Calgari o Calgavi como Dios y a Antomiá como Diablo. La segunda presenta el tesoro de Pipintá como una leyenda regional tardía de guacas, caminos y arrieros, no como una narración prehispánica intacta. Cuy-Cuy o Coy-Coy aparece en la historiografía como nombre anterior a Arma o Armados, rótulo colonial inspirado en los adornos de oro. La provincia era multilingüe y estaba formada por cacicazgos; esta página no la convierte en una comunidad contemporánea homogénea.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling, de acabado gráfico plano y capas planas, del territorio histórico Cuy-Cuy o Arma: montañas del norte de Caldas, río Cauca, casas redondas de paja, flores blancas y negras, vasijas de sahumerio y un camino de piedra hacia la memoria de Pipintá; sin demonios, cuernos, sacrificios, tocados panindígenas, símbolos aztecas, mayas o muiscas, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const cuycuyesCommunitySeo = {
  meta_title: "Mitos Cuycuyes: ritual de Arma y tesoro de Pipintá",
  meta_description:
    "Explora dos relatos revisados del territorio Cuy-Cuy: el ser de ojos resplandecientes y la leyenda regional del tesoro de Pipintá.",
  meta_keywords:
    "mitos Cuycuyes, Cuy-Cuy, Coy-Coy, Arma, Armados, Calgari, Calgavi, Antomiá, tesoro de Pipintá, Aguadas",
  og_title: "Cuycuyes: del oratorio de Arma al tesoro de Pipintá",
  og_description:
    "Dos páginas revisadas con crónicas, vocabularios históricos, crítica antropológica y memoria regional de Caldas.",
  twitter_title: "Mitos Cuycuyes revisados y contextualizados",
  twitter_description:
    "Conoce por qué Calgari no debe traducirse como diablo y cómo circula la leyenda del tesoro de Pipintá.",
  canonical_path: "/comunidades/cuycuyes",
  summary:
    "La revisión conserva dos URL, corrige una demonización colonial, sustituye un relato sintético de Pipintá y exige cuatro ilustraciones 2D full paper cut.",
  focus_topics: [
    "Cuy-Cuy, Coy-Coy y Arma",
    "figura de ojos resplandecientes",
    "Untré, Calgari, Calgavi y Antomiá",
    "tesoro de Pipintá",
    "Aguadas y Pácora",
    "lectura crítica de crónicas coloniales",
  ],
};

export function cuycuyesCommunitySeoPayload() {
  return {
    ...cuycuyesCommunitySeo,
    keywords: cuycuyesCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...cuycuyesCommunitySeo.focus_topics],
  };
}
