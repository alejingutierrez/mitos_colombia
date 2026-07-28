export const awaCommunityPage = {
  title: "Awá",
  description:
    "Relatos Awá documentados sobre el origen desde la barbacha y el viaje de dos hermanos al mundo de abajo.",
  longDescription:
    "La colección Awá reúne dos núcleos narrativos registrados con voces y materiales comunitarios. La Barbacha cuenta cómo el primer hombre y la primera mujer surgen de fibras negras y blancas que descienden de un árbol; El mundo de abajo sigue a dos hermanos tras un armadillo hasta Maza Su, donde conocen a la gente pequeña que come humo. Las dos páginas heredadas habían sido construcciones editoriales: una mezclaba ambos ciclos con episodios sin fuente y la otra inventaba a Guagaja, Nampí y una serpiente guardiana. Se conservan sus URLs para no romper enlaces, pero el contenido visible declara los reemplazos. Las imágenes de Barbachas se reutilizan por su correspondencia con el relato; el segundo expediente recibe una pareja horizontal y vertical nueva, con escenas distintas y dirección full paper cut 2D.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling del territorio Awá: montaña húmeda, árbol con barbacha blanca y negra, raíces, armadillo, hormigas, maíz y mundos interrelacionados en capas planas; sin fotografía de papel, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const awaCommunitySeo = {
  meta_title: "Mitos Awá: la barbacha y el mundo de abajo",
  meta_description:
    "Explora dos relatos Awá documentados: el origen del Inkal Awá desde la barbacha y el viaje de los hermanos tras el armadillo a Maza Su.",
  meta_keywords:
    "mitos Awá, origen Inkal Awá, barbacha, mundo de abajo, Maza Su, armadillo, cuatro mundos",
  og_title: "Mitos Awá documentados",
  og_description:
    "La Barbacha y El mundo de abajo, con variantes, voces identificadas y fuentes consultables.",
  twitter_title: "Mitos Awá",
  twitter_description:
    "Conoce el origen desde la barbacha y el viaje al mundo de abajo.",
  canonical_path: "/comunidades/awa",
  summary:
    "La revisión conserva dos URLs, reemplaza dos tramas editoriales inventadas y publica relatos Awá documentados con imágenes horizontal y vertical pertinentes.",
  focus_topics: [
    "mitología Awá",
    "Inkal Awá",
    "La Barbacha",
    "Maza Su",
    "cuatro mundos",
    "armadillo",
  ],
};

export function awaCommunitySeoPayload() {
  return {
    ...awaCommunitySeo,
    keywords: awaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...awaCommunitySeo.focus_topics],
  };
}
