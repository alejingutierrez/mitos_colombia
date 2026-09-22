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

export const piedecuestaEspantosSources = {
  valenzuelaFullText: source({
    title: "Mitos y leyendas de Piedecuesta y sus veredas",
    author: "Germán Valenzuela Sánchez; reproducción de Gonzalo Tolosa",
    year: 2012,
    type: "reproducción digital de ocho capítulos de una compilación local",
    url: "https://es.scribd.com/document/408561909/16-Mitos-y-Leyendas-de-Piedecuesta",
    summary:
      "Publica los textos completos de Hilandera, Galeacer, Carriazo, Reventón, Pisca, Monedita, Diabla y Lámpara, con narradores y lugares internos.",
    limitation:
      "La reproducción dice 2012, mientras el estudio académico cita Leyendas y cuentos de Santander como obra de 2010; no aporta facsímiles de entrevistas ni expedientes.",
  }),
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Clasifica el corpus de Valenzuela, explica el proyecto Monteredondo y advierte sobre tergiversaciones producidas por búsquedas y copias de internet.",
    limitation:
      "Combina análisis, adaptaciones infantiles, fuentes impresas y trabajo escolar; su clasificación no prueba hechos sobrenaturales.",
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
      "Es una ficha depositada por el autor y no una evaluación independiente de cada relato.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la existencia editorial de la compilación de 2016 dentro del repertorio iberoamericano.",
    limitation:
      "Prueba la publicación, no la antigüedad oral ni la factualidad de las escenas.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/publicaciones/digitalizar-la-memoria-oral-colectiva-el-rescate-de-leyendas-como-estrategia-formativa",
    summary:
      "Describe cómo estudiantes, docentes y familias identificaron, clasificaron y digitalizaron leyendas del sector rural de Piedecuesta.",
    limitation:
      "Evalúa el proceso pedagógico; no proporciona transcripciones independientes para todos los supuestos testigos de Valenzuela.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta la historia municipal y la importancia de las industrias del fique, tabaco y panela en Piedecuesta.",
    limitation:
      "Aporta contexto territorial y productivo, pero no menciona a los protagonistas de las ocho leyendas.",
  }),
  culturalPolicyStudy: source({
    title:
      "Efectos de los planes decenales de cultura en las comunidades municipales: Piedecuesta",
    author: "Luis Rubén Pérez Pinzón",
    year: 2019,
    type: "artículo académico sobre política cultural",
    url: "https://www.redalyc.org/journal/110/11063117012/",
    summary:
      "Sitúa el proyecto de leyendas de Monteredondo dentro de las acciones culturales municipales y ofrece bibliografía histórica de Piedecuesta.",
    limitation:
      "Analiza institucionalidad cultural y no verifica cada trama o personaje legendario.",
  }),
  asalePisca: source({
    title: "Pisca",
    author: "Asociación de Academias de la Lengua Española",
    type: "diccionario de americanismos",
    url: "https://www.asale.org/damer/pisca",
    summary:
      "Define pisca en Colombia y Venezuela como hembra del pisco o pavo.",
    limitation:
      "Aclara el animal del relato, pero no documenta la cueva, los polluelos dorados ni el tesoro.",
  }),
  municipalTerritoryPlan: source({
    title: "Plan de desarrollo del municipio de Piedecuesta",
    author: "Municipio de Piedecuesta",
    type: "documento de planeación territorial",
    url: "https://obsgestioneducativa.com/wp-content/uploads/2021/02/Piedecuesta.pdf",
    summary:
      "Enumera veredas como San Isidro y Blanquiscal y ofrece cartografía del territorio rural y urbano.",
    limitation:
      "La cartografía contemporánea no fija la ubicación histórica exacta de cuevas, casas, árboles o apariciones.",
  }),
  upbFamilyViolence: source({
    title: "Caracterización de la violencia intrafamiliar en Piedecuesta",
    author: "Universidad Pontificia Bolivariana",
    type: "investigación social aplicada",
    url: "https://repository.upb.edu.co/handle/20.500.11912/5918",
    summary:
      "Estudia violencia sufrida principalmente por mujeres en el municipio y la necesidad de respuestas institucionales.",
    limitation:
      "No estudia a Rebeca, Maribella o Tenorio; se usa solo para impedir que la ficha celebre una agresión como defensa del honor.",
  }),
  piedecuestaIndustryStudy: source({
    title: "Empresas y empresarios en Bucaramanga, 1930-1950",
    author: "Universidad Industrial de Santander",
    type: "investigación histórica empresarial",
    url: "https://noesis.uis.edu.co/bitstreams/a5514e43-7d75-4326-9e38-0da4ab360462/download",
    summary:
      "Registra en Piedecuesta actividades de empaques, cables e hilazas de fique durante el periodo industrial asociado al relato de Oliva.",
    limitation:
      "Confirma la actividad económica, no el taller, la identidad o el proceso judicial narrados por Valenzuela.",
  }),
  santanderViolenceStudy: source({
    title: "Violencia política e impunidad: casos en Santander, 1930-1948",
    author: "Universidad Industrial de Santander",
    type: "investigación histórica regional",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/ab8e2e84-caa7-4894-a35f-f467db43cb6e/content",
    summary:
      "Documenta hechos de violencia política en Santander, incluido Piedecuesta, antes del periodo evocado por la Lámpara.",
    limitation:
      "No cubre por sí solo las décadas de 1950 a 1970 ni identifica la luz de La Urgua con una víctima concreta.",
  }),
};

export const piedecuestaEspantosSourceKeysBySlug = {
  "la-hilandera": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
    "piedecuestaIndustryStudy",
  ],
  "el-doctor-galeacer": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-carriazo-de-vereda-san-isidro": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
    "ambPiedecuesta",
  ],
  "el-reventon-de-jacobo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-cueva-de-la-pisca": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "asalePisca",
    "municipalTerritoryPlan",
  ],
  "la-monedita-en-la-alcancia": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
    "piedecuestaIndustryStudy",
  ],
  "la-diabla-castigadora": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "upbFamilyViolence",
  ],
  "la-lampara-de-petroleo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
    "santanderViolenceStudy",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPiedecuestaEspantosSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaEspantosSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaEspantosSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaEspantosSourcesHeredadas(slug) {
  const keys = piedecuestaEspantosSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaEspantosSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
