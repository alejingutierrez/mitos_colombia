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

export const piedecuestaClasicosFinalSources = {
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Reproduce el romance del Ánima Coy y adapta Luz del Limonal, Silbón, Tunjos de la Cantera y Duende del Salto con notas de procedencia.",
    limitation:
      "Es la principal cadena textual disponible, pero sus adaptaciones no prueban personas, delitos, transformaciones, milagros, culturas prehispánicas o sucesos coloniales.",
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
      "Es una ficha depositada por el autor y no una evaluación independiente de los relatos o sus afirmaciones históricas.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la compilación de 2016 dentro del repertorio iberoamericano y respalda su existencia editorial.",
    limitation:
      "No prueba la antigüedad oral, la factualidad de sus escenas ni la pertenencia cultural de motivos atribuidos.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/sites/default/files/5134.pdf",
    summary:
      "Describe el proceso pedagógico y declara que el Duende del Salto integra textos, monografías, un blog escolar y vivencias del editor.",
    limitation:
      "Explica la metodología del proyecto; no aporta entrevistas o documentos independientes para cada escena narrativa.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Aporta contexto público sobre Piedecuesta, su historia y su relación con áreas rurales.",
    limitation:
      "No menciona a Benedicta, Luz, Silvestre, Muki, apariciones, tunjos vivientes ni cuevas con tesoros.",
  }),
  uisCronicas: source({
    title: "Crónicas y romances",
    author: "Vicente Arenas Mantilla; Ediciones UIS",
    year: 2023,
    type: "catálogo oficial de reedición universitaria",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Documenta la reedición de la obra de 1960 que contiene el Romance del Ánima Coy.",
    limitation:
      "El catálogo respalda obra y autoría, no las acusaciones o apariciones contenidas en el poema.",
  }),
  laEskinaAnima: source({
    title: "Vicente Arenas Mantilla y el Romance del Ánima Coy",
    author: "La Eskina Magazín",
    year: 2019,
    type: "reproducción cultural y nota de recepción",
    url: "https://laeskinavirtual.blogspot.com/2019/12/la-eskina-magazin-numero-70.html",
    summary:
      "Reproduce el romance y contextualiza la escritura costumbrista, mágica y crítica de Arenas.",
    limitation:
      "Es una reproducción de divulgación; no verifica a Benedicta, Rosario o Policarpo como personas históricas.",
  }),
  ciniiEstampas: source({
    title: "Estampas de mi tierra",
    author: "Vicente Arenas Mantilla",
    year: 1941,
    type: "registro bibliográfico internacional",
    url: "https://ci.nii.ac.jp/ncid/BA91868368",
    summary:
      "Registra la obra de la que procede la adaptación original de La Luz del Limonal.",
    limitation:
      "Confirma la publicación, no cada fecha, relación, muerte, reclutamiento o ritual de la narración.",
  }),
  municipalPlan: source({
    title: "Plan de desarrollo de Piedecuesta 2012-2015",
    author: "Municipio de Piedecuesta",
    year: 2012,
    type: "documento institucional de planeación",
    url: "https://repositoriocdim.esap.edu.co/server/api/core/bitstreams/bee7efc0-464c-40db-a42d-6f9dbfa18862/content",
    summary:
      "Reconoce La Luz del Limonal como una de las leyendas que permanecen en la memoria local y en publicaciones piedecuestanas.",
    limitation:
      "El reconocimiento patrimonial no demuestra la tragedia, la aparición o el exorcismo narrados.",
  }),
  riveraBiography: source({
    title: "José del Carmen Rivera Mejía: vida, periodismo y obra",
    author: "Trabajo académico de historia regional",
    type: "estudio biográfico reproducido digitalmente",
    url: "https://es.slideshare.net/slideshow/ta01402332005/17214153",
    summary:
      "Documenta la trayectoria de Rivera y que Los Tunjos de Oro compartió el primer puesto del concurso de Leyenda Popular Santandereana de 1969.",
    limitation:
      "La biografía acredita autoría y recepción; no verifica el trapiche, el Silbón o el tunjo viviente como hechos.",
  }),
  alcaldiaSilbon: source({
    title: "Piedecuesta, ciudad ilustre y muy leal",
    author: "Alcaldía de Piedecuesta",
    year: 2025,
    type: "nota institucional de memoria local",
    url: "https://www.alcaldiadepiedecuesta.gov.co/publicaciones/2354/piedecuesta-ciudad-ilustre-y-muy-leal/",
    summary:
      "Menciona al Silbón entre las leyendas conocidas del municipio dentro de una actividad educativa.",
    limitation:
      "Confirma recepción contemporánea, no una biografía del espectro ni la versión concreta de Rivera.",
  }),
  museoTunjo: source({
    title: "Los encantos: escenarios de relaciones interétnicas",
    author: "Jorge Morales Gómez; Boletín Museo del Oro",
    year: 2001,
    type: "artículo académico de arqueología y folclor",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/4867/5113/9974",
    summary:
      "Distingue los tunjos arqueológicos muiscas, objetos pequeños de ofrenda, de los encantos o seres vivientes del folclor.",
    limitation:
      "Trata comparaciones andinas y no demuestra que la criatura de la Cantera pertenezca a una cosmología Guane específica.",
  }),
  icanhProtection: source({
    title: "Gestión y protección del patrimonio arqueológico para entidades territoriales",
    author: "Instituto Colombiano de Antropología e Historia",
    year: 2021,
    type: "guía oficial de patrimonio arqueológico",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/109",
    summary:
      "Explica protección, hallazgos fortuitos y el carácter destructivo e ilegal de la guaquería y el saqueo.",
    limitation:
      "No es fuente del relato y se usa solo para impedir que una leyenda funcione como instrucción de búsqueda o extracción.",
  }),
  schoolDuende: source({
    title: "Algunos datos sobre la Escuela El Duende",
    author: "Colegio Holanda, sede rural El Duende",
    year: 2013,
    type: "memoria comunitaria escolar",
    url: "https://escuelaelduende.blogspot.com/p/blog-page.html",
    summary:
      "Ubica la escuela, la quebrada La Honda y el Salto del Duende, y describe la leyenda como relato de boca en boca.",
    limitation:
      "No nombra a Muki, Pedro N., un ángel caído, tesoros, ritos Guane o sucesos coloniales.",
  }),
  rederRisk: source({
    title:
      "Socioterritorialidad del riesgo de desastres en Piedecuesta",
    author: "Deysi Ofelmina Jerez-Ramírez",
    year: 2022,
    type: "artículo académico con cartografía social",
    url: "https://www.revistareder.com/ojs/index.php/reder/article/download/88/100",
    summary:
      "Documenta el Salto del Duende como formación montañosa y cascada estacional representativa para habitantes de la vereda.",
    limitation:
      "Aporta territorio y riesgo, pero no confirma una caverna, un duende o el argumento literario de 2016.",
  }),
  formalArtResearch: source({
    title: "Exploración formal de la tradición oral en la cultura",
    author: "Universidad Industrial de Santander",
    year: 2026,
    type: "trabajo académico de creación visual",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/e7d7156d-21a7-4945-9298-0dfaecace712/content",
    summary:
      "Registra la recepción artística contemporánea de lugares y personajes de las leyendas de Piedecuesta.",
    limitation:
      "Es una reinterpretación visual reciente y no una fuente primaria de las escenas sobrenaturales.",
  }),
};

export const piedecuestaClasicosFinalSourceKeysBySlug = {
  "el-anima-coy": [
    "perezBookFullText",
    "uisCronicas",
    "laEskinaAnima",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-luz-del-limonal": [
    "perezBookFullText",
    "ciniiEstampas",
    "municipalPlan",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-silbon": [
    "perezBookFullText",
    "riveraBiography",
    "alcaldiaSilbon",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "los-tunjos-de-la-cantera": [
    "perezBookFullText",
    "riveraBiography",
    "museoTunjo",
    "icanhProtection",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
  ],
  "duende-del-salto": [
    "perezBookFullText",
    "educoasProject",
    "schoolDuende",
    "rederRisk",
    "formalArtResearch",
    "perezBookMetadata",
    "ambPiedecuesta",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPiedecuestaClasicosFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaClasicosFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaClasicosFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaClasicosFinalSourcesHeredadas(slug) {
  const keys = piedecuestaClasicosFinalSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaClasicosFinalSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
