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

  // ——— Búsqueda profunda 2026-09-22 ———
  mcCormickJose1975: source({
    title: "José María Mantilla, combatiente y caudillo (discurso de posesión) y respuesta de Rafael Bernal Medina",
    author: "Ricardo Ortiz McCormick",
    year: 1975,
    type: "artículo en boletín académico (discurso de recepción)",
    url: "https://academiahistoria.org.co/boletines/BHA-709.pdf",
    summary:
      "Es el texto que fija la vida contada en la página. En las pp. 184-192 sigue a Mantilla desde el valle de Piedecuesta y el voluntariado de 1810, con 16 años, hasta el generalato de 1827; en las pp. 189-190 copia del expediente la condena a la horca, el oficio del gobernador Bausa que pide su cabeza para la plaza de Pamplona, los dos dictámenes del asesor Bierna y la insurrección del 31 de julio de 1819 en la cárcel, que cerró los caminos a La Torre. Las pp. 192-198 cubren la Sociedad Democrática de los rojos, la sesión del 9 de marzo de 1849, el calabozo compartido con Melo, el indulto y la muerte en Bogotá el 22 de enero de 1860. La respuesta de Bernal Medina (pp. 199-204) sitúa a Mantilla entre los hijos ilustres de Piedecuesta.",
    limitation:
      "Discurso laudatorio de un paisano ante la Academia, con alegato político explícito a favor de los draconianos y de Melo; no trae aparato de notas. El servidor de la Academia no respondió el 2026-09-22 (timeout en 443 y 80): se leyó la copia de Wayback Machine del 2025-05-18, truncada en 5 MiB de 7,5 MiB, que conserva completas las pp. 181-204. La bibliografía del ciclo lo citaba como «La parábola humana de José María Mantilla», que es una frase de la p. 198, no el título.",
  }),
  galindoRecuerdos1900: source({
    title: "Recuerdos históricos, 1840 a 1895",
    author: "Aníbal Galindo",
    year: 1900,
    type: "memorias",
    url: "https://archive.org/details/recuerdoshistri00galigoog",
    summary:
      "Es el testigo presencial de la sesión del Congreso de 1849 que eligió a José Hilario López. En la p. 31 describe a Mantilla como escrutador, «perpetuo Senador por la provincia de Pamplona», uno de los pocos que escaparon de Valencia en 1814 y «célebre en nuestros anales parlamentarios por sus sangrientas anécdotas». Cuenta que se mantenía con los brazos cruzados a la espalda para no tocar las papeletas y que se acercaba a la barra a pedir a los muchachos que no faltara el «gritico» por López. Es la fuente de la frase que cita el discurso de 1975.",
    limitation:
      "Memorias escritas medio siglo después por un liberal que estaba en la barra: favorable, anecdótico y de memoria. OCR de Internet Archive; la paginación citada es la de la edición de La Luz, Bogotá, 1900.",
  }),
  moureReminiscencias1907: source({
    title: "Reminiscencias de Santafé y Bogotá, serie 3",
    author: "José María Cordovez Moure",
    year: 1907,
    type: "crónica costumbrista e histórica",
    url: "https://archive.org/details/reminiscencias03cord",
    summary:
      "En el capítulo sobre la caída de Melo (pp. 399-400) cuenta que a Melo lo llevaron preso al Colegio de San Bartolomé y le remacharon un par de grillos, y que Mantilla, «su compañero de infortunio», le dijo con sarcasmo que su plan de campaña se le había bajado a los tobillos. Es la escena que la página usa para el calabozo compartido de 1854. El mismo pasaje defiende a los melistas de la acusación de bandidaje y cuenta la deportación de los artesanos a Panamá.",
    limitation:
      "Crónica de un bogotano conservador escrita décadas después, sin fuentes declaradas; la anécdota puede ser de oídas. Edición de la Librería Americana consultada por su OCR en Internet Archive; la serie 3 no trae la frase de Cordovez sobre «López o López» que cita el discurso de 1975.",
  }),
  banrepculturalJose2017: source({
    title: "José María Melo",
    author: "Gustavo Vargas Martínez (Enciclopedia Banrepcultural)",
    year: 2017,
    type: "enciclopedia institucional",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Jos%C3%A9_Mar%C3%ADa_Melo",
    summary:
      "Sostiene el segundo paralelo de «Similitudes»: el golpe del 17 de abril de 1854, la expulsión del país con confiscación de bienes y la muerte de Melo en México, el 1 de junio de 1860, sorprendido por descargas de fusilería mientras servía a la causa de Juárez. Es el destino que el discurso de 1975 contrapone al indulto y al retiro de Mantilla.",
    limitation:
      "No menciona a Mantilla ni a los draconianos. El sitio bloquea peticiones automáticas con un validador; se leyó por un lector web. El año 2017 es aproximado: la página no fecha la entrada.",
  }),
  uribesociedades1976: source({
    title: "Las sociedades democráticas de artesanos y la coyuntura política y social colombiana de 1848",
    author: "Jaime Jaramillo Uribe",
    year: 1976,
    type: "artículo académico (Anuario Colombiano de Historia Social y de la Cultura, n.º 8, pp. 5-18)",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/36322",
    summary:
      "Da el contexto de la escena en que Mantilla junta a los artesanos: sitúa hacia 1847 la fundación de la Sociedad Democrática de Artesanos de Bogotá, le atribuye un papel de primer orden en la elección de José Hilario López y cita el reglamento de 1848 firmado por su presidente, Miguel León, el mismo que el discurso de 1975 pone al frente de la sociedad de los rojos. Explica también el desengaño artesano con el librecambismo tras 1854 y la deportación de cerca de 300 socios a Panamá.",
    limitation:
      "No nombra a Mantilla: la atribución de la sociedad a su iniciativa es del discurso de 1975 y queda sin contraste en esta obra.",
  }),
  encisoGuaches2015: source({
    title: "Guaches vs. cachacos: la sociabilidad democrática en Bogotá 1845-1876",
    author: "José Eduardo Rueda Enciso",
    year: 2015,
    type: "artículo académico (Historia y Espacio, vol. 11, n.º 44, pp. 41-75)",
    url: "https://historiayespacio.univalle.edu.co/index.php/historia_y_espacio/article/view/1198",
    summary:
      "Sigue la Sociedad Democrática de Artesanos de Bogotá entre 1845 y 1876: la elección de 1848 con Ambrosio López y Miguel León, la escisión entre gólgotas y draconianos, el apoyo draconiano a la candidatura de Obando y los periódicos draconianos de 1852. Permite leer la «sociedad de rojos» del relato dentro de la historia de la sociabilidad artesana, más allá de la versión del discurso.",
    limitation:
      "No menciona a José María Mantilla. Revisión historiográfica de fuentes secundarias en buena parte; se leyó el PDF de Dialnet y se cita la URL de la revista.",
  }),
  historicoFernando2019: source({
    title: "Fernando Serrano y Uribe, otro prócer de la Independencia colombiana",
    author: "Universidad del Rosario (Archivo Histórico)",
    year: 2019,
    type: "nota institucional de archivo",
    url: "https://urosario.edu.co/en/node/14191",
    summary:
      "Sostiene el tercer paralelo: Serrano defendió Piedecuesta en 1812, cuando la atacaron fuerzas de Girón en Mensulí, y defendió la provincia de Pamplona como capitán general y gobernador, bajo cuya autoridad sirvió Mantilla según el discurso de 1975. La partida de bautismo que reproduce es de la parroquia del Ecce Homo de la Matanza, no de Piedecuesta.",
    limitation:
      "Contradice que Serrano naciera en Piedecuesta, como afirman Ortiz McCormick y Bernal Medina en el BHA 709: lo bautizaron en Matanza y vivía en Piedecuesta. La página lo llama piedecuestano sólo en boca de ese número del boletín. El año 2019 es aproximado: la nota no se fecha en la página.",
  }),
  pinzonQue2011: source({
    title: "¿Qué dejó a la historiografía regional el Bicentenario de la Independencia de Colombia? La resignificación del Socorro y los socorranos",
    author: "Luis Rubén Pérez Pinzón",
    year: 2011,
    type: "artículo académico (Anuario de Historia Regional y de las Fronteras, vol. 16, pp. 331-352)",
    url: "https://dialnet.unirioja.es/descarga/articulo/5755063.pdf",
    summary:
      "Sostiene el primer paralelo de «Similitudes»: en la p. 342 recoge un discurso oficial santandereano del Bicentenario según el cual los charaleños murieron el 4 de agosto de 1819 en el río Pienta para que un regimiento español del Socorro no llegara a apoyar a Barreiro. Es la misma operación de memoria que el discurso de 1975 hace con el levantamiento de Pamplona: una acción de provincia reclamada como condición de Boyacá.",
    limitation:
      "No trata de Mantilla ni de Pamplona. El pasaje sobre Charalá es una cita de discurso político conmemorativo que el autor analiza como representación, no como historia probada. La paginación exacta del artículo es aproximada.",
  }),
  espanolJose2026: source({
    title: "José María Mantilla",
    author: "Wikipedia en español",
    year: 2026,
    type: "enciclopedia colaborativa",
    url: "https://es.wikipedia.org/wiki/Jos%C3%A9_Mar%C3%ADa_Mantilla",
    summary:
      "Añade lo que ni el discurso ni Baraya cuentan: que el 4 de mayo de 1854 Mantilla aceptó de Melo la Comandancia General de Cundinamarca, que tras la derrota del 4 de diciembre estuvo preso hasta el 19 de julio de 1855 y que Pastor Ospina decretó su indulto tras una solicitud de clemencia firmada por 72 personalidades, remitiendo a la Gaceta Oficial del 2 de agosto de 1855. Concuerda con el «se le indultó por petición de todos los sectores» del discurso.",
    limitation:
      "Enciclopedia colaborativa: nunca como fuente clave. Sus datos de 1854-1855 remiten a la Gaceta Oficial, que no se abrió; sirven para orientar una verificación, no para escribir.",
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
