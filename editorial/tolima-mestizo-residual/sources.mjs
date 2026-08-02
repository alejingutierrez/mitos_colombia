function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const tolimaMestizoResidualSources = {
  villaPosseFolklore: source({
    title: "Mitos y leyendas de Colombia, volumen II: Leyendas y cuentos del folclor",
    author: "Eugenia Villa Posse; Instituto Andino de Artes Populares",
    year: 1993,
    type: "compilación crítica y facsímil digital",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce el artículo de Misael Devia y la obra de Cesáreo Rocha Castilla, incluidas las dos Patasolas, el relato de Ñor Mica, la oración del monte y la entrada del Poira.",
    limitation:
      "Es una selección de textos previamente publicados; preserva mediaciones literarias y vocabulario de época y no equivale a una transcripción comunitaria contemporánea.",
  }),
  deviaCatalog: source({
    title: "Folclor Tolimense",
    author: "Misael Devia Morales; Universidad de Ibagué",
    year: 2013,
    type: "ficha editorial universitaria de reedición",
    url: "https://ediciones.unibague.edu.co/catalogo-1/44-institucional/97-folclor-tolimense",
    summary:
      "Documenta la reedición universitaria de la obra publicada originalmente en la Revista Colombiana del Folclor entre 1962 y 1965.",
    limitation:
      "La ficha confirma historia editorial, autoría e interés patrimonial, pero no muestra la cadena de informantes de cada leyenda.",
  }),
  rochaPatronato: source({
    title: "Prehistoria y folclor del Tolima",
    author: "Cesáreo Rocha Castilla; Patronato Colombiano de Artes y Ciencias",
    year: 2017,
    type: "ficha editorial de la tercera edición",
    url: "https://patronatocolombiano.com/producto/prehistoria-y-folclor-del-tolima-cesareo-rocha-castilla/",
    summary:
      "Registra las ediciones de 1959 y 1968 y la recuperación posterior de una investigación regional sobre tradiciones, mitos y leyendas del Tolima.",
    limitation:
      "El catálogo no reproduce el texto completo ni permite comprobar que el diálogo atribuido a Ñor Mica fuera registrado palabra por palabra.",
  }),
  menMunicipio: source({
    title: "Proyecto 4: Mi municipio, Aceleración del Aprendizaje",
    author: "Ministerio de Educación Nacional; Colombia Aprende",
    type: "material educativo oficial",
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/rural-adultos/1_Coleccion_Avanzada_Programa_de_Educacion_Rural_PER/4-Modelos_Educativos_Flexibles/3-Aceleracion%20_del_aprendizaje/Materiales_Estudiantes/Proyecto-4-Mi_municipio.pdf",
    summary:
      "Presenta la Patasola y su oración con atribución a Rocha Castilla, y una versión colombiana del Sombrerón atribuida a Galindo Martín.",
    limitation:
      "Es una adaptación escolar posterior: confirma recepción pedagógica y procedencia bibliográfica, no la historicidad de sus personajes narrativos.",
  }),
  modulemaTolima: source({
    title: "Patrimonio cultural: un estudio integral de las leyendas del Tolima en la ciudad de Ibagué",
    author:
      "Néstor Andrés Guarnizo Sánchez, Fabio Andrés Lizcano Prada, Robert Gutiérrez Ortiz y Misael Fernando Ariza Rodríguez",
    year: 2024,
    type: "artículo académico en MODULEMA",
    url: "https://dialnet.unirioja.es/descarga/articulo/9874382.pdf",
    summary:
      "Clasifica a Patasola y Sombrerón entre figuras antropomorfas del Tolima y resume la vigencia del Mohán en el paisaje del Magdalena y el Saldaña.",
    limitation:
      "La tabla depende de bibliografía y de un cuaderno de ilustración; su encuesta mide reconocimiento urbano, no autentica cada detalle narrativo.",
  }),
  spreadsheetCorpus: source({
    title: "Base de mitos del proyecto, hoja Mitos, filas 414, 431-435, 437 y 819",
    author: "Archivo editorial Mitos de Colombia",
    type: "fuente interna del corpus y mapa de fragmentos",
    url: "https://github.com/alejingutierrez/mitos_colombia/blob/main/docs/base_mitos.xlsx",
    summary:
      "Conserva una síntesis de la Patasola de Devia, cinco fragmentos del relato de Ñor Mica, la entrada del Poira y una variante de origen por infidelidad.",
    limitation:
      "La hoja segmenta y reescribe materiales previos; sirve para controlar cobertura, pero no reemplaza las publicaciones de origen ni sus atribuciones.",
  }),
  espantosScan: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Periódico Hoy; Universidad Autónoma de Colombia",
    year: 2004,
    type: "facsímil digital de una reelaboración editorial",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Incluye fichas y escenas de Patasola y Sombrerón con recursos de grabación encontrada y solicitud a Alcohólicos Anónimos.",
    limitation:
      "Sus notas y grabaciones son marcos literarios no corroborados; la violencia ampliada y los datos de testigos no se presentan como archivos históricos.",
  }),
  cultureOverview: source({
    title: "Explora los mitos y leyendas de Colombia",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    year: 2024,
    type: "síntesis institucional de tradición oral",
    url: "https://www.culturarecreacionydeporte.gov.co/es/principal/noticias/mitos-y-leyendas-de-colombia",
    summary:
      "Distingue mito y leyenda desde la compilación de Villa Posse y registra a Patasola, Mohán y Sombrerón en el repertorio colombiano.",
    limitation:
      "Es una panorámica de divulgación y contiene descripciones breves; no sustituye la comparación de versiones regionales ni la fuente primaria.",
  }),
  culturaBogotaMohan: source({
    title: "Leyenda de El Mohán",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "ficha institucional de divulgación folclórica",
    url: "https://ant.culturarecreacionydeporte.gov.co/en/node/1269",
    summary:
      "Presenta al Poira como nombre del Mohán travieso y perseguidor dentro del repertorio tolimense y conserva su asociación con charcos, ríos y lavanderas.",
    limitation:
      "Reproduce lenguaje moral y de género de compilaciones anteriores y no identifica informantes ni fecha de campo.",
  }),
  despiertaTolima: source({
    title: "El Mohán o Poira",
    author: "Fernando González; Despierta Tolima",
    year: 2020,
    type: "memoria regional de circulación contemporánea",
    url: "https://despiertatolima.com/el-mohan-o-poira/",
    summary:
      "Registra la continuidad del nombre Poira en el Gran Tolima y reúne atributos musicales, ribereños y de juego transmitidos en memoria familiar.",
    limitation:
      "Es una recopilación periodística y memorial, no un estudio etnográfico con transcripciones, consentimientos y cadena de versiones.",
  }),
  elTiempo1995: source({
    title: "Aprendamos más de lo nuestro",
    author: "El Tiempo; atribución interna a José Ignacio Arciniegas",
    year: 1995,
    type: "archivo periodístico educativo",
    url: "https://www.eltiempo.com/archivo/documento/mam-425024",
    summary:
      "Resume al Poira como configuración del Mohán de los ríos Magdalena y Saldaña y conserva la atribución folclórica sobre antiguos oficios pijao.",
    limitation:
      "Es una nota de divulgación sin aparato crítico; su afirmación sobre los Pijao se atribuye al autor citado y no se trata como prueba histórica independiente.",
  }),
  elTiempo2010: source({
    title: "Cómo se formó nuestra mitología en el departamento del Tolima",
    author: "Carlos Orlando Pardo Rodríguez; El Tiempo",
    year: 2010,
    type: "ensayo periodístico de un recopilador regional",
    url: "https://www.eltiempo.com/archivo/documento/MAM-3868565",
    summary:
      "Enumera Mohán o Poira, Patasola y Sombrerón como personajes del repertorio tolimense y declara entrevistas regionales usadas por el autor.",
    limitation:
      "El artículo propone una genealogía religiosa propia y no publica las entrevistas completas; se usa para circulación, no para demostrar un origen único.",
  }),
  colombiaAprendeSombreron: source({
    title: "Unidad 4: El Sombrerón",
    author: "Ministerio de Educación Nacional; Contenidos para Aprender",
    type: "material escolar oficial",
    url: "https://contenidosparaaprender.colombiaaprende.edu.co/G_3/L/SM/SM_L_G03_U04_L01.pdf",
    summary:
      "Describe al jinete colombiano vestido de negro que persigue de noche a borrachos, peleadores, trasnochadores y jugadores tramposos.",
    limitation:
      "La ficha resume una versión nacional y no delimita qué detalles pertenecen a Tolima, Antioquia o el altiplano cundiboyacense.",
  }),
  leridaSombreron: source({
    title: "El Sombrerón",
    author: "Antonio Totto; portal cultural de Lérida, Tolima",
    year: 2020,
    type: "memoria local de divulgación",
    url: "https://www.lerida-tolima.com/el-sombreron/",
    summary:
      "Conserva el caminante del Gran Tolima cuyo sombrero llega a las pantorrillas, persigue a borrachos y jóvenes fumadores y puede pasar en silencio.",
    limitation:
      "La entrada no identifica narrador original ni fecha de recolección y mezcla como comparación una forma antioqueña con caballo, perros y cadenas.",
  }),
  radioNacionalSombreron: source({
    title: "Mitos y leyendas de Colombia: nueve relatos en las regiones",
    author: "Radio Nacional de Colombia",
    year: 2021,
    type: "divulgación de medio público",
    url: "https://www.radionacional.co/cultura/historia-colombiana/mitos-y-leyendas-de-colombia-nueve-relatos-en-las-regiones",
    summary:
      "Ubica en Cundinamarca y Boyacá una versión del jinete negro que aparece y desaparece y persigue a borrachos y bandidos.",
    limitation:
      "Es una variante regional comparativa: no demuestra que el caminante de gran sombrero del Tolima tenga exactamente el mismo aspecto.",
  }),
  guatemalaMcd: source({
    title: "Espantos y leyendas cobran vida en Tierra de leyenda",
    author: "Ministerio de Cultura y Deportes de Guatemala",
    year: 2026,
    type: "fuente institucional para desambiguación regional",
    url: "https://noticias.mcd.gob.gt/2026/04/27/espantos-y-leyendas-cobran-vida-en-tierra-de-leyenda-en-el-teatro-de-camara/",
    summary:
      "Describe al Sombrerón guatemalteco como hombre diminuto que corteja con coplas y guitarra, distinto del espanto caminante o jinete colombiano.",
    limitation:
      "Documenta una puesta en escena contemporánea de la tradición guatemalteca; se usa para separar repertorios y no para reconstruir su historia completa.",
  }),
  laChicaSombreron: source({
    title: "El diablo es un jinete con sombrero: figuras de poder en la tradición oral hispanoamericana",
    author: "María-Cruz La Chica",
    year: 2024,
    type: "capítulo académico comparativo",
    url: "https://publications.iai.spk-berlin.de/servlets/MCRFileNodeServlet/iai_derivate_00000443/ADR_Musser_CuestaAgredo_La%20Chica.pdf",
    summary:
      "Compara figuras hispanoamericanas de sombrero y cita para Colombia al caminante del sombrero gigante que persigue a jóvenes fumadores.",
    limitation:
      "Su objeto es comparativo y dedica la mayor parte del análisis al ámbito tojolabal; la mención colombiana depende de fuentes publicadas.",
  }),
};

const sourceKeysBySlug = {
  "la-patasola": [
    "villaPosseFolklore",
    "deviaCatalog",
    "menMunicipio",
    "modulemaTolima",
    "spreadsheetCorpus",
    "espantosScan",
    "elTiempo2010",
    "cultureOverview",
  ],
  "la-patasola-mixto": [
    "villaPosseFolklore",
    "rochaPatronato",
    "menMunicipio",
    "modulemaTolima",
    "spreadsheetCorpus",
    "deviaCatalog",
    "elTiempo2010",
    "cultureOverview",
  ],
  "el-poira": [
    "villaPosseFolklore",
    "rochaPatronato",
    "culturaBogotaMohan",
    "modulemaTolima",
    "despiertaTolima",
    "elTiempo1995",
    "elTiempo2010",
    "menMunicipio",
  ],
  "el-sombreron": [
    "espantosScan",
    "menMunicipio",
    "modulemaTolima",
    "colombiaAprendeSombreron",
    "leridaSombreron",
    "radioNacionalSombreron",
    "guatemalaMcd",
    "laChicaSombreron",
  ],
};

export function pickTolimaMestizoResidualSources(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene mapa de fuentes.`);
  return keys.map((key) => {
    const selected = tolimaMestizoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
