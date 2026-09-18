export const quimbayaCommunityPage = {
  title: "Quimbaya",
  description:
    "Archivo crítico de tres relatos vinculados con la provincia quimbaya y el Cauca medio: juego festivo, leyenda literaria y memoria colonial de resistencia.",
  longDescription:
    "La colección Quimbaya reúne tres estratos que no deben confundirse. Batatabatí vuelve a su registro más temprano: no era una princesa ni una diosa, sino el canto «ea, juguemos» dentro de una fiesta con grupos, tambores, danza, bebida y memoria de los mayores. Ipiaré Ebachí se conserva como leyenda literaria regional, con autor y fecha visibles: Gonzalo Uribe Mejía la publicó en 1932 y no se encontró una tradición oral prehispánica independiente. Nabsacadas se incorpora a partir de una crónica de 1603 y de su revisión historiográfica: una figura asociada al páramo de Tataquí, las cosechas, el agua y la resistencia, sin repetir el rótulo colonial de demonio ni convertirla en deidad general. El nombre Quimbaya cubre períodos arqueológicos, provincias y poblaciones distintas del Cauca medio; esta landing no los aplana en una comunidad homogénea ni limita su historia al municipio moderno que hoy lleva ese nombre.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling, de acabado gráfico plano y capas planas, del Cauca medio quimbaya: plaza festiva con dos tambores y grupos en movimiento, guaduales, casas de hojas de caña, ríos, senderos hacia los nevados y un bohío de reuniones nocturnas; una sandalia pequeña y una estrella descendente aparecen como motivos secundarios de las capas literaria y colonial, sin princesa llorando, demonios, dioses monumentales, exceso de oro, tocados panindígenas, símbolos aztecas, mayas o muiscas, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const quimbayaCommunitySeo = {
  meta_title: "Mitos Quimbaya: Batatabatí, Ipiaré y Nabsacadas",
  meta_description:
    "Explora tres relatos revisados del Cauca medio: Batatabatí, la leyenda literaria de Ipiaré y el relato colonial de Nabsacadas.",
  meta_keywords:
    "mitos Quimbaya, Batatabatí, Ipiaré Ebachí, Nabsacadas, Cauca medio, Cumanday, Tataquí, Cartago antigua",
  og_title: "Quimbaya: juego, literatura y resistencia",
  og_description:
    "Tres expedientes distinguen una fiesta documentada, una leyenda de 1932 y un relato colonial de resistencia.",
  twitter_title: "Relatos Quimbaya revisados y contextualizados",
  twitter_description:
    "Batatabatí vuelve al juego, Ipiaré reconoce su autoría moderna y Nabsacadas entra con su archivo crítico.",
  canonical_path: "/comunidades/quimbaya",
  summary:
    "La revisión conserva dos URL, sustituye una princesa inventada, identifica una leyenda literaria de 1932 e incorpora Nabsacadas con seis ilustraciones 2D full paper cut.",
  focus_topics: [
    "Batatabatí y la fiesta quimbaya",
    "Ipiaré Ebachí y Gonzalo Uribe Mejía",
    "Nabsacadas y el páramo de Tataquí",
    "Cauca medio y provincia de Quimbaya",
    "crítica de fuentes coloniales",
    "literatura indigenista regional",
  ],
};

export function quimbayaCommunitySeoPayload() {
  return {
    ...quimbayaCommunitySeo,
    keywords: quimbayaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...quimbayaCommunitySeo.focus_topics],
  };
}
