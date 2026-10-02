export const umbraCommunityPage = {
  title: "Umbra",
  description:
    "Archivo crítico de dos relatos de Guacuma y Quinchía: la marca que revela al hermano en Tasime y la desaparición estratégica de los jeques en Batero.",
  longDescription:
    "La colección Umbra conserva la URL de Tasime, pero corrige su lectura: tasime o tassime significa tigre en el corpus publicado y no está demostrado como nombre propio del hermano. El relato bilingüe atribuido a Yoani Largo Trejos —citado también como Yoany— cuenta cómo una joven marca con beé al visitante nocturno, descubre el parentesco prohibido y desencadena una secuencia que alcanza el río Cauca, la luna pintada y la transformación final en lobo. La segunda ficha incorpora una memoria narrada por Merardo Largo: los jeques difundieron que habían desaparecido en el cerro Batero mientras se desplazaban en secreto hacia La Güaira y protegían la continuidad de la lengua. La pezuña de Sausagua permanece como contexto porque su propio narrador dice que la historia se perdió y sigue en reconstrucción. La categoría histórica del sitio menciona Caldas, aunque Batero y Quinchía pertenecen hoy a Risaralda; esta página conserva esa ruta sin borrar el territorio actual ni fundir Umbra, Anserma, Kirma y Quimbaya en una identidad única.",
  imagePrompt:
    "Ilustración editorial digital 2D full paper cut y paper quilling, de acabado gráfico plano y capas planas, del territorio Umbra de Guacuma y Quinchía: cerro Batero con niebla, caminos entre bosque y río Cauca, casas sobrias, sal y oro como oficios discretos, una luna con marcas de beé y dos rutas que se separan entre la cumbre visible y un sendero oculto; sin escena sexual, salto al río, demonios, portales, batalla, regalia inventada, tocados panindígenas, símbolos aztecas, mayas o muiscas, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const umbraCommunitySeo = {
  meta_title: "Mitos Umbra: Tasime y los jeques de Batero",
  meta_description:
    "Explora dos relatos Umbra revisados: Tasime, la marca de beé y la luna, y la desaparición estratégica de los jeques en Batero.",
  meta_keywords:
    "mitos Umbra, Tasime, tassime, jeques de Batero, Guacuma, Quinchía, lengua Umbra, Merardo Largo",
  og_title: "Umbra: marcas, montaña y lengua protegida",
  og_description:
    "Dos expedientes distinguen una narración bilingüe y una memoria contemporánea de desaparición estratégica.",
  twitter_title: "Relatos Umbra revisados y contextualizados",
  twitter_description:
    "Tasime recupera su secuencia documentada y Batero entra con atribución, cautelas y dos imágenes full paper cut.",
  canonical_path: "/comunidades/umbra",
  summary:
    "La revisión corrige Tasime, incorpora la memoria de los jeques de Batero y dota ambas páginas de horizontal y vertical 2D full paper cut.",
  focus_topics: [
    "Tasime o tassime como tigre",
    "beé y la identificación del hermano",
    "luna pintada y transformación en lobo",
    "jeques y cerro Batero",
    "La Güaira y desplazamiento secreto",
    "lengua Umbra y memoria de Guacuma",
  ],
};

export function umbraCommunitySeoPayload() {
  return {
    ...umbraCommunitySeo,
    keywords: umbraCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...umbraCommunitySeo.focus_topics],
  };
}
