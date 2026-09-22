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

export const bogotaMestizoNightSources = {
  villaPosseFarol: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "antología digital de leyendas colombianas",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Conserva la narración de Manuelito Llanos y transcribe el decreto del 3 de noviembre de 1828 que ordena liberarlo tras declarar Juan Miguel Acevedo.",
    limitation:
      "Es una elaboración literaria posterior; patrón, romance, diálogos y caracterización de Manuelito no equivalen a una biografía archivística independiente.",
  }),
  banrepAcevedo: source({
    title: "Juan Miguel Acevedo: el conjurado del farol y Autobiografía",
    author: "Mario Germán Romero y Juan Miguel Acevedo",
    year: 1969,
    type: "estudio y fuente autobiográfica",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/issue/view/139",
    summary:
      "Identifica a Juan Miguel Acevedo como participante de la Septembrina y como el conjurado asociado al farol.",
    limitation:
      "La autobiografía se publicó décadas después de los hechos y no demuestra por sí sola cada escena de la versión de Manuelito.",
  }),
  museoSeptembrina: source({
    title: "Hace 190 años: la Conspiración Septembrina",
    author: "Museo Nacional de Colombia",
    year: 2018,
    type: "investigación curatorial histórica",
    url: "https://www.museonacional.gov.co/exposiciones/lists/listaexposiciones/allitems.aspx?PageFirstRow=21991&Paged=TRUE&View=%7B0BB90374-ECD4-4486-90ED-E51EEF323957%7D&p_ID=227",
    summary:
      "Contextualiza el atentado del 25 de septiembre de 1828, la Sociedad Filológica y la represión posterior.",
    limitation:
      "No menciona a Manuelito Llanos ni confirma el romance o las conversaciones de la narración literaria.",
  }),
  conjurationArchive: source({
    title: "La conjuración de septiembre: escritos varios",
    author: "Compilación anónima, Biblioteca Digital de Bogotá",
    year: 1894,
    type: "compilación histórica digitalizada",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2090637/",
    summary:
      "Reúne versiones de protagonistas sobre los hechos de 1828 y demuestra la pluralidad y conflicto de sus memorias.",
    limitation:
      "Fue compilada 66 años después y no constituye una transcripción neutral ni un expediente de Manuelito.",
  }),
  societyFilologica: source({
    title: "La Sociedad Filológica de Bogotá en 1828",
    author: "El Tiempo",
    year: 1997,
    type: "divulgación histórica periodística",
    url: "https://www.eltiempo.com/archivo/documento/mam-619547",
    summary:
      "Enumera participantes, incluido Juan Miguel Acevedo, y explica el entorno político de la conspiración.",
    limitation:
      "Es una síntesis tardía y su tono valorativo no resuelve todas las responsabilidades individuales.",
  }),
  lopezBogotaCatalog: source({
    title: "Mitos y leyendas de Bogotá",
    author: "Asdrúbal López Orozco",
    year: 2008,
    type: "catálogo bibliográfico con índice de obra literaria",
    url: "https://bibliotecasfya.kohalatino.info/cgi-bin/koha/opac-detail.pl?biblionumber=45532",
    summary:
      "Identifica como capítulos del libro La monja y el taxista, Los esqueletos caminantes, El venado de oro y El toro en el ascensor.",
    limitation:
      "El catálogo prueba autoría, edición y contenido, pero no ofrece testimonios previos ni permite tratar los capítulos como historia factual.",
  }),
  lopezBogotaSecondCatalog: source({
    title: "Mitos y leyendas de Bogotá: registro de colección",
    author: "Biblioteca Centro Cultural Jairo Panesso Tascón",
    type: "segundo registro bibliográfico",
    url: "https://catalogo.uniajc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=4761&shelfbrowse_itemnumber=7473",
    summary:
      "Confirma título, autor, extensión, ISBN y el índice de los relatos bogotanos publicados por Kingkolor.",
    limitation:
      "Corrobora la existencia material del libro, no la historicidad ni el origen oral de cada relato.",
  }),
  toroChronicle: source({
    title: "Muerte fuera del ruedo",
    author: "Lizeth León",
    year: 2015,
    type: "crónica de investigación de rumor urbano",
    url: "https://cucharitadepalo.co/cronicasilustradas/muerte-fuera-del-ruedo/",
    summary:
      "Contrasta testigos, edificios, décadas, libros y prensa; localiza una nota de El Espectador sobre una res que entró a un edificio y corneó a un hombre.",
    limitation:
      "No logra fijar fecha, inmueble, raza ni recorrido y muestra que la memoria combina hechos y rumor.",
  }),
  toroChronicleReview: source({
    title: "Seis cronistas y un solo género verdadero",
    author: "Boletín Cultural y Bibliográfico, Banco de la República",
    type: "reseña académica de la crónica premiada",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/download/20763/21189/41607",
    summary:
      "Describe Muerte fuera del ruedo como rastreo de archivos, televisión y voces urbanas alrededor del toro y el ascensor.",
    limitation:
      "Evalúa la escritura de la crónica y no aporta un expediente adicional del incidente.",
  }),
  toro1996: source({
    title: "Un toro en el ascensor",
    author: "Revista Tres",
    year: 1996,
    type: "testimonio periodístico publicado",
    url: "https://anaforas.fic.edu.uy/jspui/bitstream/123456789/11701/1/Tres%20n42%28ab%29.pdf",
    summary:
      "Registra la memoria de un periodista que sitúa en 1985 un camión volcado, seis toros y una muerte dentro de un edificio.",
    limitation:
      "Es recuerdo retrospectivo sin nombre del edificio ni reproducción de la noticia original.",
  }),
  scrdVenado: source({
    title: "El venado de oro: leyenda bogotana",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional atribuida a varios autores",
    url: "https://ant.culturarecreacionydeporte.gov.co/es/node/1196",
    summary:
      "Conserva el tesoro en Guadalupe, Diego Barreto, Inés y Pedro Domínguez, los cuernos, la espada, Casanare y el regreso fatal.",
    limitation:
      "Atribuye la versión en conjunto, entre otros, a Javier Ocampo López, sin separar pasajes ni ofrecer documento colonial.",
  }),
  vicachaCartilla: source({
    title: "Caminos del río Vicachá-San Francisco",
    author: "Empresa de Acueducto y Alcantarillado de Bogotá",
    type: "cartilla ambiental e histórica institucional",
    url: "https://www.acueducto.com.co/wps/wcm/connect/EAB2/1b3bbd0e-0f6c-4eb1-b662-5ff34fe0083c/Cartilla%2Bcamino%2Bdel%2BR%C3%ADo%2BVicach%C3%A1%2B-%2BSan%2BFrancisco.%2BCuenca%2Bde%2Bagua%2C%2Bcuenco%2Bde%2Bvida_compressed%2B%281%29.pdf?MOD=AJPERES",
    summary:
      "Incluye el Venado de Oro dentro de un recorrido por el río San Francisco, los cerros y la memoria ambiental de Bogotá.",
    limitation:
      "Es divulgación territorial y no certifica la existencia del tesoro ni la biografía de Diego Barreto.",
  }),
  tiendaAmbiguedades: source({
    title: "Tienda de ambigüedades",
    author: "BibloRed",
    type: "publicación literaria distrital",
    url: "https://repositorio.biblored.gov.co/bitstreams/1faff6ad-385e-49f7-a353-86c25d1a6601/download",
    summary:
      "Resume el venado oculto en una gruta de Guadalupe y el encuentro del portugués Diego Barreto.",
    limitation:
      "Es una recreación literaria contemporánea y no una fuente colonial independiente.",
  }),
  guacasHistory: source({
    title: "Breve historia de las guacas",
    author: "El Tiempo",
    year: 2003,
    type: "crónica cultural periodística",
    url: "https://www.eltiempo.com/archivo/documento/MAM-986272",
    summary:
      "Registra la persistencia del venado de oro como ejemplo bogotano de tesoros y guacas legendarias.",
    limitation:
      "Su propósito es panorámico y reproduce el relato sin documentar el origen de cada detalle.",
  }),
  venadoReception: source({
    title: "Siete lugares con historias paranormales en La Candelaria",
    author: "Colombia Visible",
    year: 2022,
    type: "periodismo cultural territorial",
    url: "https://colombiavisible.com/7-lugares-con-historias-paranormales-en-el-barrio-la-candelaria-de-bogota/",
    summary:
      "Muestra la circulación turística contemporánea del venado, Diego Barreto y los Cerros Orientales.",
    limitation:
      "Demuestra recepción reciente y no constituye una cadena histórica independiente.",
  }),
  espantosFullText: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Julio Orozco Vargas, editor, y equipo de autores",
    year: 2004,
    type: "libro de ficción con documentos imaginarios",
    url: "https://archive.org/stream/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed/Cuentos%20de%20Espantos%20y%20otros%20seres%20fant%C3%A1sticos%20del%20folclor%20Colombiano..compressed_djvu.txt",
    summary:
      "Publica La Bruja del Tranvía, La Mula Herrada y La Monja de las Rosas y declara expresamente que sus documentos son material de ficción.",
    limitation:
      "Recrea el folclor con fechas, cartas y testimonios inventados; esos recursos no deben citarse como archivos reales.",
  }),
  espantosOpenLibrary: source({
    title: "Registro de Cuentos de espantos",
    author: "Open Library e Internet Archive",
    type: "metadatos y tabla de contenido",
    url: "https://openlibrary.org/books/OL26208262M/Cuentos_de_Espantos_y_otros_seres_fant%C3%A1sticos_del_folclor_Colombiano",
    summary:
      "Confirma edición, ISBN, paginación y ubicación de Bruja del Tranvía, Mula Herrada y Monja de las Rosas.",
    limitation:
      "El registro bibliográfico no aporta una tradición anterior a la recreación de 2004.",
  }),
  espantosKoha: source({
    title: "Cuentos de espantos: registro de biblioteca",
    author: "Biblioteca Pública Municipal San Juan Bosco",
    type: "catálogo bibliográfico",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=11108",
    summary:
      "Registra responsables editoriales, ISBN y el índice completo de la obra.",
    limitation:
      "Prueba la existencia del libro, no la factualidad de los documentos imaginarios.",
  }),
  brujaRincon: source({
    title: "Leyenda de la Bruja del Tranvía",
    author: "Revista El Rincón Colombiano",
    year: 2023,
    type: "reproducción digital contemporánea",
    url: "https://elrinconcolombiano.com/leyenda-de-la-bruja-del-tranvia/",
    summary:
      "Muestra cómo la ficción de 2004 circula después como leyenda sin su marco de documentos imaginarios.",
    limitation:
      "No identifica una fuente anterior e historiza como hecho el juicio secreto que el libro presenta dentro de la ficción.",
  }),
  damaAdaptation: source({
    title: "La Dama",
    author: "Corporación Unificada Nacional de Educación Superior",
    year: 2016,
    type: "proyecto audiovisual de adaptación",
    url: "https://repositorio.cun.edu.co/server/api/core/bitstreams/391f3aa1-f4ff-4aa3-b96f-8b363da1d02f/content",
    summary:
      "Declara que una obra audiovisual se construyó a partir de la leyenda de la Bruja del Tranvía.",
    limitation:
      "Es recepción creativa y no prueba la desaparición de Ezequiel ni un juicio eclesiástico en 1948.",
  }),
  archivoTransporte: source({
    title: "Historia del transporte en Bogotá",
    author: "Archivo de Bogotá",
    year: 2020,
    type: "historia urbana institucional",
    url: "https://archivobogota.secretariageneral.gov.co/node/2168",
    summary:
      "Documenta el tranvía de mulas desde 1884, la electrificación en 1910 y el cierre del sistema en 1951.",
    limitation:
      "Aporta contexto material; no documenta un tranvía blanco sobrenatural ni la carta de Ezequiel.",
  }),
  fantasmagoriasStudy: source({
    title:
      "Fantasmagorías bogotanas: invención y producción de fantasmas en La Candelaria",
    author: "Revista de Estudios Colombianos",
    year: 2019,
    type: "artículo académico de crítica cultural",
    url: "https://colombianistas.org/ojs/index.php/rec/article/view/61/59",
    summary:
      "Analiza cómo libros, recorridos y dispositivos culturales producen y fijan fantasmas bogotanos.",
    limitation:
      "Interpreta recepción cultural y no prueba ni refuta experiencias sobrenaturales individuales.",
  }),
  museoQuinta: source({
    title: "Intervenir la historia",
    author: "Casa Museo Quinta de Bolívar y Museo de la Independencia",
    type: "presentación museológica oficial",
    url: "https://www.museoindependencia.gov.co/quienes-somos/intervenir-la-historia",
    summary:
      "Describe la Quinta como jardín, casa y colección histórica que invita a interpretar críticamente sus objetos y memorias.",
    limitation:
      "No registra una monja espectral ni valida el guion ficticio del libro de 2004.",
  }),
  bogotaViveMonja: source({
    title: "La monja y el taxista",
    author: "Bogotá Vive",
    type: "versión digital de leyenda urbana",
    url: "https://www.bogotavive.com/mitos-y-leyendas/leyenda-la-monja-y-el-taxista",
    summary:
      "Sitúa la versión bogotana en los años noventa, conserva la conversación de fútbol, la funeraria y el ataúd.",
    limitation:
      "No identifica testigos, fecha exacta, funeraria ni archivo de prensa, y añade una sonrisa macabra.",
  }),
  radioNacionalMonja: source({
    title: "Transportar a una monja que estaban velando en una funeraria",
    author: "Radio Nacional de Colombia",
    year: 2021,
    type: "relato radial de mito urbano",
    url: "https://www.radionacional.co/index.php/actualidad/historias-de-taxistas-transportar-una-monja-que-estaban-velando",
    summary:
      "Documenta la circulación en Tuluá del mismo núcleo: taxi, monja, pago pendiente, funeraria y cadáver.",
    limitation:
      "Lo presenta explícitamente como historia convertida en mito y no permite verificar nombres o hechos.",
  }),
  antiguaTuluaMonja: source({
    title: "La monja y el taxista",
    author: "La Antigua Tuluá",
    year: 2020,
    type: "archivo comunitario digital",
    url: "https://antiguatulua.blogspot.com/2020/02/la-monja-y-el-taxista.html",
    summary:
      "Conserva una variante tulueña y el motivo local de taxistas que evitan transportar monjas de noche.",
    limitation:
      "Atribuye el texto a otra página y usa un nombre propio que no queda corroborado independientemente.",
  }),
  tourMonja: source({
    title: "Propuesta de recorrido turístico en torno a historias de Bogotá",
    author: "Universitaria Agustiniana",
    type: "trabajo académico de recepción turística",
    url: "https://backend.uniagustiniana.edu.co/server/api/core/bitstreams/769839e5-abfd-4e27-9f60-3fcf48c954a8/content",
    summary:
      "Incluye la monja y el taxista, la conversación sobre el Mundial de 1994 y el descubrimiento en la funeraria.",
    limitation:
      "Estudia su uso turístico y reproduce una versión, no un expediente de prensa de los años noventa.",
  }),
  bogotalogoMula: source({
    title: "Bogotálogo, tomo II: Mula Herrada",
    author: "Instituto Distrital de Patrimonio Cultural",
    type: "diccionario patrimonial de bogotanismos",
    url: "https://centrodocumentacion.idpc.gov.co/opac-tmpl/cendoc/apariencia%20cendoc/site/images/descargas/bogotalogotomoII.pdf",
    summary:
      "Conserva a don Álvaro Sánchez, la casa de juego de don Juan de Guevara, la mula ensillada y el galope posterior a sus muertes.",
    limitation:
      "Resume la leyenda sin publicar el testimonio temprano del que procede cada episodio.",
  }),
  mulaDigital: source({
    title: "La mula herrada",
    author: "Mito y Leyenda",
    type: "reproducción digital de leyenda bogotana",
    url: "https://mitoyleyenda.com/leyenda/la-mula-herrada/",
    summary:
      "Conserva la versión de Las Nieves, el jugador Álvaro Sánchez y la mula parda que acude a buscarlo.",
    limitation:
      "Es una publicación reciente sin bibliografía explícita y depende de repertorios previos.",
  }),
  nievesHistory: source({
    title: "La Iglesia, 1985: historia de Las Nieves",
    author: "Arquidiócesis de Bogotá",
    year: 1985,
    type: "publicación histórica eclesiástica digitalizada",
    url: "https://patrimoniodocumental.arquibogota.org.co/uploads/1/5/2/0/152021795/la_iglesia_1985-_0001_sch_compressed-5.pdf",
    summary:
      "Menciona la Mula Herrada del siglo XVII como parte inseparable de la memoria del barrio Las Nieves.",
    limitation:
      "La mención es breve y presenta otra asociación infernal sin desarrollar la cadena de Álvaro Sánchez.",
  }),
  caballeroMemory: source({
    title: "Memorias infantiles",
    author: "Eduardo Caballero Calderón",
    type: "memoria literaria bogotana",
    url: "https://kimera.com/data/redlocal/ver_demos/RLBVF/VERSION/RECURSOS/REFERENCIA%20ESCOLAR/2%20BIBLIOTECA%20BASICA%20COLOMBIANA/Memorias_infantiles_BBCC_libro_pdf_71.pdf",
    summary:
      "Recuerda la Mula Herrada entre los cuentos que acompañaban la infancia y la imaginación de la vieja Bogotá.",
    limitation:
      "Demuestra circulación cultural, no fecha el origen ni confirma a Álvaro Sánchez como persona histórica.",
  }),
  bogotaTradition: source({
    title: "Tradición oral de Bogotá",
    author: "Proyecto comunitario Mitos y Leyendas de Bogotá",
    year: 2011,
    type: "inventario digital comunitario",
    url: "https://mitosyleyendasdebogota.blogspot.com/",
    summary:
      "Registra esqueletos andantes dentro de un inventario amplio de espantos atribuidos a la memoria bogotana.",
    limitation:
      "No ofrece testimonios, fechas ni una narración comparable completa y mezcla repertorios regionales.",
  }),
  medicinaName: source({
    title: "De NN a una condición de no identificado",
    author: "Instituto Nacional de Medicina Legal y Ciencias Forenses",
    year: 2012,
    type: "directriz institucional de dignidad e identificación",
    url: "https://www.medicinalegal.gov.co/en/de-nn-a-una-condicion-de-no-identificado",
    summary:
      "Explica por qué la entidad sustituyó NN por cadáver en condición de no identificado y afirma que la identidad es un derecho.",
    limitation:
      "No trata la leyenda; sirve para impedir que una ficción estigmatice cuerpos y familias reales.",
  }),
  medicinaRnd: source({
    title: "¿Qué es el Registro Nacional de Desaparecidos?",
    author: "Instituto Nacional de Medicina Legal y Ciencias Forenses",
    type: "información institucional",
    url: "https://medicinalegal.gov.co/web/guest/que-es-el-rnd",
    summary:
      "Describe la coordinación estatal para buscar personas e identificar cadáveres en condición de no identificados.",
    limitation:
      "Aporta el contexto real que la página debe respetar; no corrobora esqueletos caminantes ni culpa moral.",
  }),
};

export const bogotaMestizoNightSourceKeysBySlug = {
  "el-hombre-del-farol": [
    "villaPosseFarol",
    "banrepAcevedo",
    "museoSeptembrina",
    "conjurationArchive",
    "societyFilologica",
  ],
  "el-toro-en-el-ascensor": [
    "toroChronicle",
    "lopezBogotaCatalog",
    "toroChronicleReview",
    "toro1996",
    "lopezBogotaSecondCatalog",
  ],
  "el-venado-de-oro": [
    "scrdVenado",
    "lopezBogotaCatalog",
    "vicachaCartilla",
    "tiendaAmbiguedades",
    "guacasHistory",
    "venadoReception",
  ],
  "la-bruja-del-tranvia": [
    "espantosFullText",
    "espantosOpenLibrary",
    "brujaRincon",
    "damaAdaptation",
    "archivoTransporte",
    "fantasmagoriasStudy",
  ],
  "la-monja-de-las-rosas": [
    "espantosFullText",
    "espantosOpenLibrary",
    "espantosKoha",
    "museoQuinta",
    "fantasmagoriasStudy",
  ],
  "la-monja-vidente-y-el-taxista": [
    "lopezBogotaCatalog",
    "bogotaViveMonja",
    "radioNacionalMonja",
    "antiguaTuluaMonja",
    "tourMonja",
    "lopezBogotaSecondCatalog",
  ],
  "la-mula-herrada": [
    "bogotalogoMula",
    "espantosFullText",
    "espantosOpenLibrary",
    "mulaDigital",
    "nievesHistory",
    "caballeroMemory",
  ],
  "los-esqueletos-caminantes": [
    "lopezBogotaCatalog",
    "lopezBogotaSecondCatalog",
    "bogotaTradition",
    "medicinaName",
    "medicinaRnd",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickBogotaMestizoNightSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickBogotaMestizoNightSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = bogotaMestizoNightSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickBogotaMestizoNightSourcesHeredadas(slug) {
  const keys = bogotaMestizoNightSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  // Admite `{ key, summary, limitation }` además de la clave suelta: la ficha
  // bibliográfica la fija el pool y lo que cambia por mito es qué dice esa
  // obra sobre ESE relato.
  return keys.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = bogotaMestizoNightSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${JSON.stringify(entrada)}.`);
    if (typeof entrada === "string") return selected;
    return {
      ...selected,
      ...(entrada.summary ? { summary: entrada.summary } : {}),
      ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}
