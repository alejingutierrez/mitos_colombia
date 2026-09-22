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

export const piedecuestaLegendaryAccountsSources = {
  perezBookFullText: source({
    title:
      "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Reproduce El Cerro Encantado, El Quijote Piedecuestano y La Visita del Libertador de Vicente Arenas, además de la biografía de José María Mantilla tomada de Baraya.",
    limitation:
      "Es la principal cadena textual disponible; sus romances, interpolaciones y comentarios editoriales no prueban cada persona, batalla, etimología, visita o parentesco.",
  }),
  perezBookMetadata: source({
    title:
      "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón",
    year: 2016,
    type: "registro académico y resumen de publicación",
    url: "https://www.researchgate.net/publication/305682356_Literatura_folclorica_Leyendas_y_relatos_legendarios_de_Piedecuesta",
    summary:
      "Confirma autor, proyecto Gen_Ondas-Unab 585, primera edición e ISBN 978-958-46-9297-9.",
    limitation:
      "Es una ficha depositada por el autor y no una evaluación independiente de los romances o de la biografía reproducida.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la compilación de 2016 dentro del repertorio iberoamericano y respalda su existencia editorial.",
    limitation:
      "No prueba la antigüedad oral, la factualidad de sus escenas ni la exactitud de cada atribución histórica.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/sites/default/files/5134.pdf",
    summary:
      "Describe el proceso pedagógico de selección, clasificación y digitalización de las leyendas y relatos de Piedecuesta.",
    limitation:
      "Explica el proyecto y su intención identitaria; no aporta expedientes independientes para cada escena o personaje.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Aporta contexto público sobre el municipio, sus caminos, áreas rurales y transformación territorial.",
    limitation:
      "No verifica a Cantera, Arnefo, Guarguatí, Celedonio, el recibimiento de Bolívar o los detalles biográficos de Mantilla.",
  }),
  uisCronicas: source({
    title: "Crónicas y romances",
    author: "Vicente Arenas Mantilla; Ediciones UIS",
    year: 2023,
    type: "catálogo oficial de reedición universitaria",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Documenta la reedición de la obra de 1960 que contiene El Cerro Encantado y La Visita del Libertador.",
    limitation:
      "El catálogo acredita la obra y su autoría, pero no demuestra la catástrofe del cerro ni el itinerario descrito para Bolívar.",
  }),
  ciniiEstampas: source({
    title: "Estampas de mi tierra",
    author: "Vicente Arenas Mantilla",
    year: 1941,
    type: "registro bibliográfico internacional",
    url: "https://ci.nii.ac.jp/ncid/BA91868368",
    summary:
      "Registra la obra de la que procede El Quijote Piedecuestano, páginas 140 a 144.",
    limitation:
      "Confirma la publicación, no a Guarguatí, Celedonio, la batalla, el túnel, los rituales ni las etimologías de la narración.",
  }),
  uisGuaneHistory: source({
    title: "Historia de la provincia de Guane: origen, poblamiento y organización",
    author: "Investigación histórica, Universidad Industrial de Santander",
    year: 2022,
    type: "estudio académico de historia regional",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-1be0-4c77-a9d7-faf78fa4f1b5/content",
    summary:
      "Documenta a Macaregua entre los cacicazgos Guane mediante fuentes tributarias coloniales y reconstrucción historiográfica.",
    limitation:
      "El Macaregua documentado no prueba que Juan de Guarguatí, los Cachimbos, el túnel o el combate de Arenas sean hechos históricos.",
  }),
  culturalPlansStudy: source({
    title:
      "Efectos de los planes decenales de cultura en el fomento y proyección de las comunidades municipales",
    author: "Luis Rubén Pérez Pinzón",
    year: 2019,
    type: "artículo académico de política cultural",
    url: "https://revistas.unab.edu.co/index.php/reflexion/article/view/3488",
    summary:
      "Contextualiza las políticas y proyectos mediante los cuales Piedecuesta ha recuperado y difundido memoria local.",
    limitation:
      "Respalda el contexto de circulación cultural, no la veracidad literal de los personajes y episodios de los romances.",
  }),
  vanguardiaBolivarClaim: source({
    title: "Simón Bolívar tuvo un hijo en Santander",
    author: "Juan Carlos Gutiérrez; Vanguardia",
    year: 2010,
    type: "entrevista periodística de recepción histórica",
    url: "https://www.vanguardia.com/judicial/2010/07/18/simon-bolivar-tuvo-un-hijo-en-santander/",
    summary:
      "Atribuye a Antonio Cacua Prada la hipótesis sobre Margarita Camacho y Miguel Simón Camacho en Piedecuesta.",
    limitation:
      "Es una afirmación periodística de un investigador; la página no aporta el expediente genealógico o documental necesario para tratarla como consenso probado.",
  }),
  barayaFullText: source({
    title: "Biografías militares, o Historia militar del país en medio siglo",
    author: "José María Baraya",
    year: 1874,
    type: "libro histórico digitalizado",
    url: "https://archive.org/details/biografasmilita00baragoog",
    summary:
      "Contiene la semblanza decimonónica de José María Mantilla que la compilación de Piedecuesta reproduce y edita.",
    limitation:
      "Es una biografía cercana a la cultura heroica militar de su siglo; sus juicios elogiosos requieren atribución y no sustituyen una biografía crítica actual.",
  }),
  openLibraryBaraya: source({
    title:
      "Registro de Biografías militares, o Historia militar del país en medio siglo",
    author: "Open Library",
    year: 1874,
    type: "registro bibliográfico y acceso a digitalización",
    url: "https://openlibrary.org/books/OL23470269M/Biograf%C3%ADas_militares_o_Historia_militar_del_pa%C3%ADs_en_medio_siglo",
    summary:
      "Confirma autor, fecha, edición, OCLC y el ejemplar digital de la obra de Baraya.",
    limitation:
      "Acredita el libro, pero no evalúa las decisiones políticas, campañas o valoraciones personales de la semblanza.",
  }),
  academiaMantilla: source({
    title: "La parábola humana de José María Mantilla",
    author: "Boletín de Historia y Antigüedades",
    year: 1975,
    type: "artículo de historia biográfica",
    url: "https://academiahistoria.org.co/boletines/BHA-709.pdf",
    summary:
      "Ofrece una reconstrucción histórica posterior de la trayectoria pública de Mantilla y confirma su muerte en Bogotá en 1860.",
    limitation:
      "Es una interpretación biográfica posterior y también debe distinguirse de documentos contemporáneos a cada campaña.",
  }),
  nationalArchiveCensus: source({
    title: "Archivo Histórico Municipal de Piedecuesta",
    author: "Censo-Guía de Archivos de España e Iberoamérica",
    type: "ficha institucional de archivo",
    url: "https://censoarchivos.cultura.gob.es/CensoGuia/archivodetail.htm?id=44984",
    summary:
      "Describe el fondo histórico municipal y contextualiza la formación administrativa de Piedecuesta antes y después de la Independencia.",
    limitation:
      "La ficha no contiene por sí misma expedientes de Cantera, Guarguatí, Bolívar o Mantilla.",
  }),
};

export const piedecuestaLegendaryAccountsSourceKeysBySlug = {
  "el-cerro-encantado": [
    "perezBookFullText",
    "uisCronicas",
    "culturalPlansStudy",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-quijote-piedecuestano": [
    "perezBookFullText",
    "ciniiEstampas",
    "uisGuaneHistory",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-vista-del-libertador": [
    "perezBookFullText",
    "uisCronicas",
    "vanguardiaBolivarClaim",
    "perezBookMetadata",
    "cerlalcBook",
    "culturalPlansStudy",
    "ambPiedecuesta",
  ],
  "un-libertador-piedecuestano": [
    "barayaFullText",
    "perezBookFullText",
    "academiaMantilla",
    "openLibraryBaraya",
    "perezBookMetadata",
    "nationalArchiveCensus",
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
export function pickPiedecuestaLegendaryAccountsSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaLegendaryAccountsSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaLegendaryAccountsSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaLegendaryAccountsSourcesHeredadas(slug) {
  const keys = piedecuestaLegendaryAccountsSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaLegendaryAccountsSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
