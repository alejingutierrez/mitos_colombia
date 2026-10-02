export const quillacingaCommunityPage = {
  title: "Quillacingas",
  description:
    "Relatos de Refugio del Sol sobre La Cocha, La Corota, Casapamba, colibríes, sirena e Inti.",
  longDescription:
    "La colección Quillacinga reúne seis núcleos documentados en El Encano y el Resguardo Refugio del Sol. Dos versiones de la creación de La Cocha se presentan juntas y con atribución; La Corota, el Rabo de Casapamba, los colibríes y la sirena conservan páginas distintas. El llamado de Inti publica la trama del e-book oficial, no la cosmogonía inventada que ocupaba la URL. La antigua página Cualanquizán conserva su dirección para no romper enlaces, pero declara que el relato de Bartolomé pertenece a una tradición Pasto de Túquerres y lo reemplaza por la creación de La Cocha.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio Quillacinga Refugio del Sol: Laguna de La Cocha, Isla La Corota, Tábano, Bordoncillo, totora, colibrí y pincullo en capas planas; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const quillacingaCommunitySeo = {
  meta_title: "Mitos Quillacingas de La Cocha y Refugio del Sol",
  meta_description:
    "Explora seis relatos Quillacingas documentados sobre La Cocha, La Corota, Casapamba, colibríes, sirena e Inti.",
  meta_keywords:
    "mitos Quillacingas, Refugio del Sol, Laguna de La Cocha, Isla La Corota, Casapamba, El llamado de Inti",
  og_title: "Mitos Quillacingas de Refugio del Sol",
  og_description:
    "Seis relatos de La Cocha con voces identificadas, variantes y fuentes consultables.",
  twitter_title: "Mitos Quillacingas",
  twitter_description:
    "La Cocha, La Corota, Casapamba, colibríes, sirena e Inti.",
  canonical_path: "/comunidades/quillacingas",
  summary:
    "La revisión retira dos construcciones mal atribuidas, conserva sus URLs, unifica las variantes de La Cocha y añade cuatro relatos del corpus oral de Refugio del Sol.",
  focus_topics: [
    "mitología Quillacinga",
    "Refugio del Sol",
    "Laguna de La Cocha",
    "Isla La Corota",
    "Rabo de Casapamba",
    "El llamado de Inti",
  ],
};

export function quillacingaCommunitySeoPayload() {
  return {
    ...quillacingaCommunitySeo,
    keywords: quillacingaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...quillacingaCommunitySeo.focus_topics],
  };
}
