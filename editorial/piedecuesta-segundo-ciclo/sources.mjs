function source({ title, author, year, type, url, summary, limitation }) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const piedecuestaSecondCycleSources = {
  valenzuelaFullText: source({
    title: "Mitos y leyendas de Piedecuesta y sus veredas",
    author: "Germán Valenzuela Sánchez; reproducción de Gonzalo Tolosa",
    year: 2012,
    type: "reproducción digital de dieciséis capítulos de una compilación local",
    url: "https://es.scribd.com/document/408561909/16-Mitos-y-Leyendas-de-Piedecuesta",
    summary:
      "Publica los textos completos de Bruja Silbona, Máncara, Cuento fantástico, Campana, Diablo de Umpalá, Cueva, nueva Luz del Limonal y Gritón.",
    limitation:
      "La reproducción dice 2012, mientras el estudio académico cita Leyendas y cuentos de Santander como obra de 2010; no aporta archivos de entrevista ni expedientes históricos.",
  }),
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Clasifica siete de estos relatos, explica sus cadenas editoriales y relaciona algunos espantos con sonidos y fuerzas del viento.",
    limitation:
      "No clasifica Cuento fantástico de forma individual ni demuestra hechos sobrenaturales, biografías o causalidades narradas.",
  }),
  perezBookMetadata: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón",
    year: 2016,
    type: "registro académico y resumen de publicación",
    url: "https://www.researchgate.net/publication/305682356_Literatura_folclorica_Leyendas_y_relatos_legendarios_de_Piedecuesta",
    summary:
      "Confirma autor, proyecto Gen_Ondas-Unab 585, primera edición e ISBN 978-958-46-9297-9.",
    limitation:
      "Es una ficha depositada por el autor y no una evaluación independiente de los capítulos de Valenzuela.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la existencia editorial de la compilación de 2016 dentro del repertorio iberoamericano.",
    limitation:
      "Prueba la publicación, no la antigüedad oral ni la factualidad de escenas, personajes o fechas.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/publicaciones/digitalizar-la-memoria-oral-colectiva-el-rescate-de-leyendas-como-estrategia-formativa",
    summary:
      "Describe cómo estudiantes, docentes y familias identificaron, clasificaron y digitalizaron leyendas rurales de Piedecuesta.",
    limitation:
      "Evalúa el proceso pedagógico; no proporciona transcripciones independientes de Tadeo, Mateo, Félix, Isabel u otros narradores nombrados.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta la historia municipal y el papel del territorio rural, los caminos y actividades tradicionales de Piedecuesta.",
    limitation:
      "Aporta contexto territorial, pero no menciona apariciones, testigos, campanas, cuevas o apodos del corpus.",
  }),
  municipalTerritoryPlan: source({
    title: "Plan de desarrollo del municipio de Piedecuesta",
    author: "Municipio de Piedecuesta",
    type: "documento de planeación territorial",
    url: "https://obsgestioneducativa.com/wp-content/uploads/2021/02/Piedecuesta.pdf",
    summary:
      "Ofrece cartografía y división rural contemporánea para ubicar de manera aproximada Umpalá, La Urgua y otros sectores.",
    limitation:
      "La cartografía contemporánea no prueba recorridos históricos ni fija árboles, peñas, cuevas o lugares de aparición.",
  }),
};

export const piedecuestaSecondCycleSourceKeysBySlug = {
  "la-bruja-silbona": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-mancarita": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
  ],
  "cuento-fantastico": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-campana-del-diablo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-diablo-de-umpala": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
  ],
  "la-cueva-del-diablo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
    "ambPiedecuesta",
  ],
  "nueva-version-de-la-luz-del-limonal": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-griton": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
  ],
};

export function pickPiedecuestaSecondCycleSources(slug) {
  const keys = piedecuestaSecondCycleSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaSecondCycleSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
