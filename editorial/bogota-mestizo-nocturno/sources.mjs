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

  // ——— Búsqueda profunda 2026-09-22 ———
  possehombre1936: source({
    title: "«El hombre del farol», en Leyendas (Biblioteca Aldeana de Colombia, Selección Samper Ortega, Minerva, 1936), reproducido en Mitos y leyendas de Colombia, tomo II, sección 17 «Varias regiones – Leyendas»",
    author: "Enrique Otero D'Costa; compilación de Eugenia Villa Posse",
    year: 1936,
    type: "leyenda histórica de autor construida sobre un expediente judicial, reeditada en antología institucional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Es el registro de esta ficha y está entero en las pp. 44-49 del tomo II, entre «Las clavelinas» y «Genus irritabili vatum». Cuenta el viaje y la pareja amo-criado: un joven samario llega a Santafé en 1828 con un paje costeño, Manuelito Llanos, natural de San Juan de la Ciénaga. Inventaría pieza por pieza el vestido blanco como indumentaria costeña, que es lo que lo hace visible —y luego identificable— en una ciudad gris. Y precisa que el objeto del relato no es un espanto sino un dato del asalto al palacio: alguien de blanco iba al frente con un farol descolgado del cuerpo de guardia, y nadie sabía quién era; la propia fuente cuenta que, antes de que hubiera sospechoso, ya se hablaba de un aparecido. Sigue la acusación construida por eliminación de vestuario, las tres coartadas distintas dadas a tres interlocutores, el careo que termina en empate —uno dice que no y otro que le parece que sí—, y transcribe las piezas fechadas: la declaración de Llanos del 30 de septiembre de 1828, el concepto del auditor de guerra Tomás Barriga y Brito del 31 de octubre, que admite por escrito que no hay prueba y pide ocho años de destino militar en la Costa por sospechas, y el auto del 3 de noviembre que, tras confesar otro conjurado que el del farol era él, no sólo ordena soltarlo sino publicar su inocencia.",
    limitation:
      "No es recolección oral: Otero D'Costa reelabora literariamente un expediente judicial y no da la signatura del proceso ni el archivo donde lo consultó, de modo que las piezas que transcribe no se pueden cotejar. Escribe en 1936, más de un siglo después, con la prosa y los juicios de la Biblioteca Aldeana. Se lee aquí por una reedición de 1993 cuya sección no nombra a Bogotá —se titula «Varias regiones»—, y cuya paginación no es la del original de 1936.",
  }),
  moureReminiscencias1900: source({
    title: "Reminiscencias de Santafé y Bogotá, Serie cuarta (1.ª ed. corregida y aumentada)",
    author: "José María Cordovez Moure",
    year: 1900,
    type: "crónica costumbrista con listas nominales de los conjurados",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2896/",
    summary:
      "Saca el farol de la leyenda y lo pone en el relato histórico del asalto. Su capítulo «La conspiración del 25 de septiembre de 1828», que ocupa las pp. 1-180, describe en la p. 56 el interior del palacio esa noche: «la escalera, iluminada con una vela en un farol que descolgó D. Juan Miguel Acebedo para guiar á sus compañeros, no había otra luz en el patio y corredores de palacio, que la de la luna». Es decir, el farol existió, fue la única luz de la escena y lo llevó alguien con nombre. Y en la p. 50, la lista nominal de los reunidos esa noche en casa de Luis Vargas Tejada registra a «Juan Miguel Acebedo, 20 años, de Bogotá»: el más joven de todos. Con eso el hueco de identidad que la leyenda llena con un aparecido y la justicia con un costeño de blanco queda cerrado por una tercera vía, la del propio expediente de los conjurados.",
    limitation:
      "Cordovez no conoce ni menciona a Manuelito Llanos ni el proceso que Otero D'Costa narra: su relato es el de los conjurados, no el del acusado por error. Escribe de memoria y de oídas setenta años después, sin declarar narrador ni fecha, y reconstruye escenas que nadie registró. La edición de Banrep es una selección de cuatro volúmenes y no las ocho series originales. Certificado TLS incompleto en el servidor.",
  }),
  moureReminiscencias1899: source({
    title: "Reminiscencias de Santafé y Bogotá, Serie tercera (1.ª ed. corregida y aumentada)",
    author: "José María Cordovez Moure",
    year: 1899,
    type: "crónica costumbrista de la Santafé colonial",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2854/",
    summary:
      "Sostiene el primer paralelo con su registro más antiguo. Dentro del catálogo de conversaciones de atrio de la Santafé colonial, en la p. 313, aparece «el espanto de la mula herrada que recorría las calles en altas horas de la noche y nadie veía». La frase es breve y es exactamente lo que la ficha necesita: un ruido sin dueño, una explicación sobrenatural ya formada y ningún cuerpo al que atribuirlo. Es el mismo movimiento que organiza esta historia —primero falta el autor del ruido y después sobra un culpable—, y esta obra documenta la primera mitad de ese movimiento en el siglo XIX, ochenta años antes de que otra fuente le ponga cuerpo a la mula.",
    limitation:
      "Es una sola frase dentro de un catálogo de habladurías: no hay relato, ni informante, ni fecha, ni desarrollo. El índice de este volumen es ilegible por OCR y la localización del pasaje se hizo por búsqueda en el cuerpo del texto. Cordovez recoge la mención como curiosidad de época y no como testimonio, y nada relaciona en su obra la mula con el hombre del farol: la comparación la establece esta ficha.",
  }),
  bogotaFantasmas2008: source({
    title: "Fantasmas de ciudad: fantasmas en La Candelaria (colección «Memorias de la Ciudad», n.º 1)",
    author: "Stella Monsalve Gaitán; Archivo de Bogotá, Secretaría General de la Alcaldía Mayor",
    year: 2008,
    type: "transcripción de tradición oral de barrio publicada por un archivo público",
    url: "https://repositorio.biblored.gov.co/items/8bb2dbdc-15de-44f9-b5cd-ac1568fa2bc8",
    summary:
      "Cierra el paralelo por el otro extremo, y muestra qué le pasa a un ruido sin dueño cuando la ciudad lo deja correr ochenta años. En las pp. 30-31 la Mula Herrada ya no es un espanto que nadie ve: tiene dueño con nombre y un recorrido fijo entre dos barrios, y el relato acaba con el cadáver de una mujer marcado por las herraduras, aunque la propia narradora desmienta la lectura de bruja. Es decir, el hueco se llenó con un cuerpo, y el cuerpo es el de alguien a quien se castiga. Ese es el mismo procedimiento que en 1828 convirtió una luz sin identificar en un muchacho costeño vestido de blanco: la ciudad decide primero quién encaja en el papel y después busca cómo sostenerlo.",
    limitation:
      "Es divulgación de tradición oral sin aparato crítico, transcrita de una sola vecina y sin fecha de recolección, y sus datos no están cotejados con documento alguno. No menciona el hombre del farol ni el proceso de 1828. La comparación entre el registro de Cordovez y esta transcripción la establece esta ficha, y salva ochenta años de circulación de los que no hay testigos intermedios.",
  }),
  moureReminiscencias18992: source({
    title: "Reminiscencias de Santafé y Bogotá, Serie primera (3.ª ed. corregida y aumentada)",
    author: "José María Cordovez Moure",
    year: 1899,
    type: "crónica costumbrista de un contemporáneo, con tres capítulos sobre el proceso de 1851",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2917/",
    summary:
      "Aporta el contraste judicial que la ficha necesita, y lo aporta del mismo autor y sobre la misma ciudad. Sus capítulos de «Crímenes célebres» narran el otro gran caso bogotano en que la condena se apoyó en la reputación del acusado antes que en la prueba: el juicio y la ejecución de José Raimundo Russi (pp. 173-203), con el asalto a San Agustín (123-130) y el asesinato de Manuel Ferro (154-172) como antecedentes. Y contiene la frase que hace el paralelo exacto: «si no se obtuvo la plena prueba exigida en Derecho respecto de Russi, fue tal el cúmulo de indicios, coincidencias y sospechas que recayeron sobre ese hombre, que el Jurado no pudo menos de condenarlo». Es el mismo razonamiento que el auditor de guerra de 1828 pone por escrito al pedir ocho años de destino sin prueba, y es lo que permite decir que en Bogotá ese procedimiento no fue una excepción. La diferencia es el desenlace: a Russi lo fusilaron y a Llanos lo soltaron.",
    limitation:
      "No tiene relación documental con el caso del farol: es otro proceso, otra década y otro tribunal, y Cordovez no los compara. Escribe de memoria y de oídas décadas después, con sus juicios morales de clase y con simpatía por el veredicto. La edición de Banrep es una selección de cuatro volúmenes. Mismo aviso de certificado.",
  }),
  castroabogado2020: source({
    title: "El abogado de la criminalidad: José Raimundo Russi",
    author: "Valentina Mena Castro",
    year: 2020,
    type: "artículo de microhistoria en revista de programa universitario",
    url: "https://sociales.uexternado.edu.co/wp-content/uploads/sites/11/2020/06/El-abogado-de-la-criminalidad.pdf",
    summary:
      "Es lo que convierte el paralelo con el caso de 1851 en algo más que una impresión. Vuelve sobre aquel proceso con fuentes primarias —el juicio, el escrito de defensa y las notas de prensa— y muestra cómo se construyó la culpabilidad con indicios, coincidencias y objetos interpretados en contra del acusado. Documenta además que el escrito de defensa sólo circuló impreso después de la ejecución, es decir, que la palabra del condenado llegó tarde: lo contrario de lo que le pasó a Llanos, cuya inocencia un auto mandó publicar a tiempo. La comparación entre ambos deja de ser retórica y pasa a ser de procedimiento probatorio, que es como la ficha la plantea.",
    limitation:
      "Trata un proceso de 1851 y no el de 1828: no menciona el asalto al palacio, ni a Llanos, ni el auto que ordenó publicar su inocencia. Es un artículo de pregrado en la revista de su propio programa, con aparato pero sin revisión por pares indexada, y cita a Cordovez por una edición cuya paginación no coincide con la digitalizada. WebFetch lo declara corrupto; el fichero baja bien.",
  }),
  rosaCalles1938: source({
    title: "Calles de Santafé de Bogotá: homenaje en su IV centenario, 1938",
    author: "Moisés de la Rosa",
    year: 1938,
    type: "topografía histórica de la ciudad, calle por calle",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2554/",
    summary:
      "Permite comprobar que los lugares del relato existen y dónde están. La leyenda se mueve por un puñado de sitios muy concretos —la calle de la Carrera y la casa de José María del Castillo y Rada, el palacio de gobierno, la calle del Árbol, el cuartel de Granaderos y la cárcel—, y esta obra es la que traduce esos nombres viejos a la trama de la ciudad, barrio por barrio: Catedral p. 33, Palacio 137, Las Nieves oriental 163 y occidental 211. Con ella se ve que el trayecto de la noche del 25 de septiembre de 1828 cabe en unas pocas cuadras, y que un hombre vestido de blanco era, en esa escala, un objeto imposible de no ver. Es el mismo instrumento que sitúa la Calle de Russi del otro caso.",
    limitation:
      "No menciona el episodio del farol ni el proceso: es una topografía de nomenclatura, y su horizonte es el nombre de la vía y no el suceso. Su nomenclatura es anterior a la renumeración y obliga a traducir direcciones. Erudición de concejo municipal de 1938 sin archivo citado. Es contexto, no registro. Mismo aviso de certificado.",
  }),
  colombiaPieza2005: source({
    title: "Pieza del mes, octubre de 2005: cráneo del «doctor Russi», registro 942",
    author: "Museo Nacional de Colombia",
    year: 2005,
    type: "ficha de pieza de museo nacional, con número de inventario",
    url: "https://www.museonacional.gov.co/colecciones/Pieza_del_mes/colecciones-pieza-del-mes-2005/Paginas/Octubre%2005.aspx",
    summary:
      "Da la medida material de la diferencia entre los dos casos, que es lo que la ficha usa para cerrar. Del acusado de 1828 quedó un auto que ordenó publicar su inocencia y ningún resto; del condenado de 1851 quedó un cráneo con el agujero del tiro, registro 942 de la colección de Historia del Museo Nacional, área de objetos testimoniales, exhibido en la sala Federalismo y centralismo (1830-1886). La ficha oficial precisa que el hueso ingresó en algún momento del siglo XX y desde entonces permanece en reserva. Dos hombres juzgados por indicios en la misma ciudad: al que soltaron lo devolvió un papel y al que fusilaron lo conserva un inventario.",
    limitation:
      "Es una ficha divulgativa de museo sin firma y sin bibliografía, cuyos datos biográficos no vienen acompañados de documento, y cuya fecha de ingreso de la pieza el propio texto declara como conjetura. No tiene nada que ver con el caso del farol: se cita por contraste, y el contraste lo establece esta ficha.",
  }),
  leonMuerte2015: source({
    title: "Muerte fuera del ruedo (crónica ganadora del Premio Distrital de Crónica Ciudad de Bogotá 2014, recogida en «Seis historias para ser contadas», Ícono Editorial, 2015)",
    author: "Lizeth León",
    year: 2015,
    type: "crónica de investigación que localiza y transcribe el registro de prensa primario",
    url: "https://cucharitadepalo.co/cronicasilustradas/muerte-fuera-del-ruedo/",
    summary:
      "Es la pieza que devuelve el hecho a su expediente y cierra la discusión sobre si ocurrió. Localiza las notas de El Espectador y El Tiempo del viernes 18 de octubre de 1985 y las transcribe: a las siete y media de la mañana del jueves 17, un camión con placas SW1012 que llevaba cinco novillos se volcó en la carrera 10 con calle Primera, en el sector de La Hortúa; los animales se dispersaron por las vías del centro; uno entró a un edificio de la carrera 8.ª y corneó a un hombre en el instante en que éste salía del ascensor. No eran toros de lidia camino de una plaza: iban al matadero, y el muerto salía, no entraba. La autora entrevista además a testigos y oidores con nombre —Ernesto Alfaro, que dice haberlo visto, Luisa Luquerna, Rafael Noguera, Francisco Celis, el editor Gonzalo Guillén— y en vez de fundir sus versiones las enfrenta, que es lo que convierte la crónica en la fuente de método de esta ficha.",
    limitation:
      "La propia autora advierte que encontró la cobertura de 1985 después de escribir la primera versión de la crónica, de modo que el hallazgo documental llegó al final del trabajo y no lo organiza entero. No reproduce los recortes en facsímil ni da la página de cada diario, con lo que las notas primarias siguen llegando por transcripción. Y sobre el edificio no cierra: la carrera 8.ª que da la prensa convive con una carrera 10.ª que aparece en otras versiones. El sitio devuelve 403 a cliente de línea de comandos y sólo carga en navegador.",
  }),
  entrevistadotoro1996: source({
    title: "«Un toro en el ascensor», en «Los dramas y las alegrías de Macondo. Colombia mirada por dos periodistas», revista tres, n.º 42, Montevideo, viernes 15 de noviembre de 1996, p. 57",
    author: "Héctor Mario Rodríguez (entrevistado)",
    year: 1996,
    type: "testimonio de un periodista dentro de una entrevista de revista, con fecha y página",
    url: "https://anaforas.fic.edu.uy/jspui/bitstream/123456789/11701/1/Tres%20n42%28ab%29.pdf",
    summary:
      "Es el registro más antiguo y más atribuible del episodio, y estaba en el módulo sin que se le reconociera ese peso. Un periodista bogotano, entrevistado en Montevideo once años después de los hechos, lo cuenta con su nombre y por escrito: «En 1985 yo trabajaba para la radio Caracol en Bogotá. Y muy cerca de la radio, un camión que transportaba seis toros de lidia volcó en pleno centro de Bogotá. Los seis toros salieron corriendo por una de las principales avenidas […] Asustado, un toro entró a un edificio de oficinas. En ese momento se abrieron las puertas del ascensor y el toro entró al ascensor, matando con sus cuernos a una persona que iba a salir.» Coincide con la prensa en el año, en el centro de la ciudad y en la muerte junto al ascensor, y discrepa en dos cifras —seis toros de lidia donde el registro dice cinco novillos camino del matadero—, que es exactamente el tipo de deriva que la ficha documenta. Es también donde el propio testigo compara la escena con «un pequeño San Fermín», y con eso da la clave del contagio taurino de todo el relato.",
    limitation:
      "Es un recuerdo de once años después, dentro de una entrevista sobre otro tema —narcotráfico y lavado de dólares—, y el entrevistado cuenta la escena como ejemplo de lo macondiano y no como reportaje. Sus cifras y su clasificación de los animales contradicen el registro de prensa. Está publicado en Uruguay, en una revista que no verificó el dato, y no da fecha exacta, ni calle, ni nombre del muerto.",
  }),
  velezAfuera2011: source({
    title: "Afuera del ruedo",
    author: "Fernando Araújo Vélez",
    year: 2011,
    type: "texto literario en primera persona publicado en la sección Bogotá de un diario",
    url: "https://www.elespectador.com/bogota/afuera-del-ruedo-article-247764/",
    summary:
      "Es una de las dos versiones de peso que compiten con la prensa, y su interés está en que se puede fechar y firmar. Publicada el 29 de enero de 2011, es un monólogo en primera persona de un celador que describe la escena dentro del Banco Ganadero: las patas descompuestas del animal sobre el mármol, el logo del banco, la gente enloquecida, las puertas del ascensor que se abren, el hombre de corbata corneado, los gritos, la sangre. Aporta además una causa del vuelco que la prensa de 1985 no da —una piedra lanzada por otro camión que rompe el eje—, y la pone en boca del personaje. Permite mostrar con nombre y fecha cómo un accidente registrado se convierte en escena literaria, y cómo de esa escena sale un edificio concreto que después circula como dato.",
    limitation:
      "Es literatura y está publicado como tal: no es reportaje, no cita fuentes, no entrevista a nadie y su narrador es un personaje. La sede del Banco Ganadero no aparece en el registro de prensa de 1985 ni en el testimonio de 1996, y la causa mecánica del vuelco que ofrece no está documentada en ninguna parte. Se cita como versión, nunca como prueba.",
  }),
  salamancacentro2017: source({
    title: "El centro de Bogotá: curioso e histórico",
    author: "Guillermo Romero Salamanca",
    year: 2017,
    type: "columna de divulgación sobre curiosidades urbanas",
    url: "https://www.eje21.com.co/2017/12/el-centro-de-bogota-curioso-e-historico/",
    summary:
      "Es el origen rastreable de la versión del edificio Henry Faux, y se cita para poder decir de dónde viene. Publicada el 27 de diciembre de 2017, treinta y dos años después de los hechos, recorre rarezas del centro bogotano —la numeración del edificio de la calle 13, San Victorino, las esquinas con historia— y en ese recorrido menciona de pasada el episodio del toro y lo sitúa en un edificio concreto, sin fecha, sin testigo y sin fuente. Con esta pieza a la vista, la atribución del Henry Faux deja de ser una tradición y pasa a ser una afirmación con autor y año, que es lo que la ficha necesita para ponerla en «versiones» en lugar de fundirla con el resto.",
    limitation:
      "Es una columna de curiosidades sin aparato: no cita prensa, ni archivo, ni testigo para ninguna de sus afirmaciones, y el episodio del toro aparece en ella como anécdota entre otras. Es treinta y dos años posterior al suceso, y su edificio no coincide con el de la prensa de 1985 ni con el del texto literario de 2011. No documenta nada: fecha una versión.",
  }),
  colombiaCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo con la Universidad Autónoma de Colombia",
    year: 2004,
    type: "antología impresa de relatos, digitalizada con capa de texto",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Sostiene el paralelo invertido que cierra la ficha. En este volumen dos relatos bogotanos se publican con su forma de autor a la vista: la Monja de las Rosas en las pp. 99-100, presentada como un guion de cine atribuido a una directora alemana, y la Bruja del Tranvía en las pp. 41-42, presentada como una carta mecanografiada con nombre y fecha de desaparición. Es decir, dos piezas escritas que al circular perdieron la firma y empezaron a leerse como testimonio. Con el toro pasó lo contrario y por eso el contraste sirve: un hecho con placa, hora y esquina perdió sus papeles y fue ganando autores —una columna, un monólogo literario, una anécdota de sobremesa—, y cada mano le dejó encima un edificio distinto.",
    limitation:
      "Es una antología de divulgación de un diario y una universidad, sin aparato crítico, sin narradores, sin lugares de recolección y sin fechas: reelabora, no recoge. No menciona el episodio del toro. Se consulta por su digitalización en Internet Archive, cuya capa de texto viene de OCR y arrastra erratas; el ítem debe citarse entero, no por su fichero de texto en bruto.",
  }),
  caicedoanfiteatro2015: source({
    title: "El anfiteatro de la Facultad de Medicina. Una visita guiada",
    author: "Carlos Arturo Florido Caicedo",
    year: 2015,
    type: "ensayo en revista universitaria de morfología (Morfolia, vol. 7, n.º 2, Universidad Nacional de Colombia)",
    url: "https://revistas.unal.edu.co/index.php/morfolia/article/download/52871/52538/259709",
    summary:
      "Se cita por el punto del plano donde empieza todo y que ninguna otra fuente explica: La Hortúa. El vuelco del camión ocurrió en la carrera 10 con calle Primera, es decir, en el barrio del hospital y de la Facultad de Medicina, y este ensayo describe desde dentro ese sector y sus instituciones —el anfiteatro, el hospital, la relación cotidiana del barrio con los cuerpos y con el Cementerio Central—. Permite entender por qué un camión de ganado pasaba por allí a las siete y media de la mañana: es la puerta sur del centro, el eje por donde entraba a la ciudad lo que venía del matadero y de la sabana, y no una avenida de oficinas. El contraste entre ese punto de partida y el edificio de la carrera 8.ª es la distancia real que los animales recorrieron.",
    limitation:
      "No menciona el episodio, ni el camión, ni el matadero: su objeto es el anfiteatro de anatomía y la enseñanza de la medicina. Es un ensayo de opinión en primera persona, sin archivo, y su información sobre el sector es incidental. Se cita como contexto de lugar y por eso no va como fuente clave. WebFetch lo declara ilegible; el fichero baja bien.",
  }),
  eljaiekRodriguezFantasmagorias2019: source({
    title: "Fantasmagorías bogotanas: invención y producción de fantasmas en la Candelaria",
    author: "Gabriel Eljaiek-Rodríguez",
    year: 2019,
    type: "artículo arbitrado de estudios culturales (Revista de Estudios Colombianos, vol. 54)",
    url: "https://colombianistas.org/ojs/index.php/rec/article/view/61",
    summary:
      "Da el marco teórico de lo que esta ficha describe caso por caso. Estudia cómo el repertorio de relatos sobrenaturales de la ciudad se construye por inclusiones y exclusiones —qué entra en el circuito, qué se cae, qué se le añade a cada historia para que funcione en un recorrido— y trata esos relatos como representaciones capturadas y puestas a producir, no como supervivencias. Es lo que permite afirmar que la conversión de un accidente de tránsito de 1985 en leyenda urbana no fue un olvido sino un trabajo: alguien le puso el edificio, alguien le puso los toros de lidia y alguien le puso el celador, y cada capa responde a una necesidad narrativa distinta. La ficha usa ese marco para ordenar sus versiones en lugar de fundirlas.",
    limitation:
      "Trata los fantasmas de La Candelaria y no este episodio, que ni menciona: el marco lo aplica esta ficha. Es un ensayo de estudios culturales sin trabajo de campo ni documentación de casos, y su corte temporal es 2019. No aporta ningún dato sobre el suceso de 1985.",
  }),
  ibanezCronicas1913: source({
    title: "Crónicas de Bogotá, tomo I, capítulo con el sumario «prohibición del uso de la chicha — Propiedad de las aguas de la ciudad — Leyenda del venado de oro»",
    author: "Pedro María Ibáñez, extractando una crónica anónima de prensa de 1896",
    year: 1913,
    type: "historia urbana erudita que reproduce en parte un texto de periódico y declara su procedencia",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2400/",
    summary:
      "Es el registro entero de la ficha y está en las pp. 139-141, con la procedencia en la nota (8) al pie: no lo recogió de nadie, lo extractó de la crónica anónima «El venado de oro» publicada en el diario El Correo Nacional, año VII, n.º 1745, Bogotá, 14 de noviembre de 1896. De ahí sale todo lo que la ficha afirma. Los tres personajes con origen, oficio y año —un portugués jugador que llega hacia 1700 y un comerciante español viudo con su única hija—; el conflicto, que es de reputación y no de fortuna, porque el padre rechaza al pretendiente por aventurero y de origen desconocido; la pelea que precede al hallazgo y lo provoca, con el padre malherido y Diego huyendo; el venado de oro macizo, de tamaño natural y factura tosca, encontrado al amanecer dentro de la gruta donde se refugió de la tormenta; la explicación muisca puesta en la memoria del personaje y no en boca del narrador —oyó decir que en Teusaquillo hubo un santuario con un venado de oro escondido por orden del Zipa ante la invasión—; la cornamenta cortada a espada y a guijarros con el cuerpo dejado dentro; el disimulo de la boca de la cueva con piedras y plantas parásitas metidas en las junturas para que echaran raíz; las dos señas para volver, la visual tirada en línea recta hasta el aldabón de La Veracruz y la espada clavada frente a la entrada; y el final sin boda ni ascenso, con Diego apuñalado en la calle camino de la gruta, el padre muerto en prisión y la hija encerrada en Santa Clara. Cierra documentando la recepción: la leyenda circuló mucho tiempo y hubo quien se paraba en el atrio de La Veracruz a buscar la cueva con la vista.",
    limitation:
      "No es un registro de tradición oral: es la reelaboración de un texto de prensa de 1896, y Ibáñez ni lo reproduce entero ni dice quién lo escribió, porque la crónica es anónima. La acción se sitúa hacia 1700 y el primer testimonio es de casi dos siglos después, sin nada en medio. El cronista no verifica ninguno de los datos que recoge ni cita archivo. Certificado TLS incompleto en el servidor.",
  }),
  oroHistorias2013: source({
    title: "Historias de ofrendas muiscas (catálogo de la exposición del Museo del Oro, 31 de mayo de 2013 a 23 de febrero de 2014)",
    author: "Museo del Oro, Banco de la República, con el Instituto de Arqueología del University College of London",
    year: 2013,
    type: "catálogo de exposición con investigación arqueométrica",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll18/id/400",
    summary:
      "Es lo que permite tratar la explicación muisca del relato como algo más que un adorno exótico. Documenta la práctica de la ofrenda entre los muiscas con investigación de laboratorio sobre la orfebrería —el vaciado a la cera perdida con que se hacían los tunjos, analizado con microscopios de haces electrónicos en Londres— y dedica capítulos enteros a los contextos rituales: «Hacer ofrendas», «Rituales y ofrendas», «Una ofrenda de miniaturas», «Un cerrito donde se ofrendaba», «La historia del cercado del cacique». Ese «cerrito donde se ofrendaba» es exactamente el tipo de lugar que la leyenda imagina en la falda de Monserrate, y la práctica de depositar piezas de oro en cuevas, lagunas y elevaciones es la que hace verosímil, dentro del relato, que un hombre tropiece con una figura escondida. Su cobertura geográfica —Cundinamarca, Boyacá, la laguna de Guatavita, Pasca— es la del territorio muisca donde el relato sitúa el santuario.",
    limitation:
      "Es un catálogo de exposición, no un estudio del relato: no menciona el venado de oro de la leyenda, ni Teusaquillo como santuario concreto, ni ninguna pieza que corresponda a la descripción del cuento —un venado macizo de tamaño natural, que no es un formato conocido de la orfebrería muisca, hecha de tunjos pequeños y láminas—. Es decir, documenta la práctica y desmiente implícitamente el objeto. Certificado TLS incompleto en el servidor.",
  }),
  salazarConflictos2019: source({
    title: "Conflictos eclesiásticos en torno a la administración del cerro de Monserrate, Nuevo Reino de Granada, siglo XVII",
    author: "Carlos Arnulfo Rojas Salazar",
    year: 2019,
    type: "artículo arbitrado de historia colonial con fuentes de archivo (Boletín Americanista n.º 79, Universitat de Barcelona, pp. 29-46)",
    url: "https://revistes.ub.edu/index.php/BoletinAmericanista/article/download/21445/31119/71464",
    summary:
      "Es lo único con aparato que documenta el cerro donde la leyenda pone la gruta, y de paso explica de dónde viene el motivo del santuario escondido. Reconstruye con documentos del Archivo General de la Nación la ocupación del cerro de las Nieves —el que después se llamó Monserrate— durante el siglo XVII: la hermandad, la ermita, los pleitos entre órdenes religiosas por su administración. Y recoge la línea historiográfica según la cual las ermitas levantadas en Santafé durante los siglos XVI y XVII se erigieron sobre antiguos santuarios indígenas, que es precisamente la creencia sobre la que el relato se apoya cuando su protagonista recuerda haber oído que allí hubo un lugar sagrado con un venado de oro. Permite decir que esa idea circulaba, y que no la inventó la crónica de 1896.",
    limitation:
      "No menciona el venado de oro ni ninguna leyenda de tesoros: su objeto es la administración eclesiástica del cerro. La hipótesis de las ermitas sobre santuarios indígenas la cita de la bibliografía previa y no la demuestra con excavación ni con documento propio. Y su periodo se cierra en el siglo XVII, antes de la fecha hacia la que el relato sitúa su acción.",
  }),
  culturavenado2020: source({
    title: "El venado de oro (Bogotanitos · Cuenta la leyenda, versión archivada)",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    year: 2020,
    type: "ficha de divulgación infantil del Distrito, en el subdominio archivado",
    url: "https://ant.culturarecreacionydeporte.gov.co/es/node/1196",
    summary:
      "Fija la versión que el Distrito difunde hoy y hace visible lo que se le ha ido añadiendo al relato de 1896 en el camino. Es la pieza contra la cual se mide la deriva: donde el registro tiene una pelea previa, un hallazgo accidental, una cornamenta mutilada y un apuñalamiento en la calle, la divulgación tiende a dejar un tesoro, una boda impedida y un castigo del cerro. Su valor no es probatorio sino de contraste, y permite fechar en qué momento el relato dejó de terminar con tres personas arruinadas y empezó a terminar con una moraleja. Sobrevive además sólo en el subdominio archivado del Distrito, lo que dice algo sobre la estabilidad de estas versiones.",
    limitation:
      "No es un registro y no sostiene ningún hecho: divulgación infantil sin autor, sin fecha y sin bibliografía. Su año se consigna por la aparición de la sección, no por la ficha. Vive en el subdominio archivado, de modo que ni siquiera es la versión vigente del Distrito, y no cita en ningún punto la crónica de 1896 ni las Crónicas de Bogotá de las que desciende.",
  }),
  leonMuerte20152: source({
    title: "Muerte fuera del ruedo (crónica ganadora del Premio Distrital de Crónica Ciudad de Bogotá 2014)",
    author: "Lizeth León",
    year: 2015,
    type: "crónica de investigación sobre la deriva de un hecho bogotano documentado",
    url: "https://cucharitadepalo.co/cronicasilustradas/muerte-fuera-del-ruedo/",
    summary:
      "Documenta el primer paralelo —el destino de un texto de prensa que un cronista rescata y que la divulgación posterior desarma— con el caso mejor medido que hay en la ciudad. León localiza las notas de El Espectador y El Tiempo del 18 de octubre de 1985 sobre un camión volcado con cinco novillos, con hora, placa y esquina, las transcribe, y después muestra cómo columnas y textos posteriores le cambiaron el edificio, la clase de animal y el número de reses. La cadena del venado tiene la misma forma y es más larga: crónica anónima de El Correo Nacional en 1896, capítulo de Ibáñez en 1913, y después un cerro, una boda y un derrumbe añadidos por el camino. Sirve, por tanto, no como fuente del relato sino como demostración del mecanismo que esta ficha describe.",
    limitation:
      "Trata un episodio de 1985 que nada tiene que ver con esta leyenda: la analogía es de proceso de transmisión y la establece esta ficha. No reproduce los recortes en facsímil ni da la página de cada diario. El sitio devuelve 403 a cliente de línea de comandos y sólo carga en navegador.",
  }),
  rodriguezBogota2020: source({
    title: "Bogotá etílica: chicha, cerveza, aguardiente y otras",
    author: "Luis Enrique Rodríguez, Grupo de Investigaciones del Archivo de Bogotá",
    year: 2020,
    type: "artículo de investigación de un archivo público",
    url: "https://archivobogota.secretariageneral.gov.co/noticias/bogota-etilica-chicha-cerveza-aguardiente-y-otras",
    summary:
      "Se cita por el vecino de página, que no es una casualidad. El capítulo de las Crónicas de Bogotá donde vive esta leyenda lleva por sumario «prohibición del uso de la chicha — Propiedad de las aguas de la ciudad — Leyenda del venado de oro»: el relato del tesoro está encajado entre dos asuntos de gobierno colonial sobre el consumo y el abastecimiento. Este artículo documenta el primero de ellos —la campaña contra la chicha en Bogotá desde el periodo colonial y a lo largo del XIX y el XX, con detenciones, cierres de chicherías y destrucción del producto decomisado— y muestra que el juego, la bebida y el desorden nocturno formaban un mismo expediente administrativo. Eso explica por qué el protagonista del relato es un jugador de oficio y por qué su castigo no necesita enunciarse: el marco moral ya estaba escrito en la ordenanza.",
    limitation:
      "No menciona la leyenda ni el capítulo de Ibáñez: su objeto son las bebidas y su regulación, y su documentación estadística es del siglo XX. La conexión entre la prohibición de la chicha y el relato del venado es de vecindad temática dentro de un sumario y la establece esta ficha, no la fuente. Es contexto, no registro.",
  }),
  autoresCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Bruja del Tranvía», pp. 41-42",
    author: "Juan Torres Mantilla (director del equipo de autores), con Constanza Orozco Vargas, Nohora Gómez Villamarín, Luis Carlos Álzate, Enrique Rodríguez, Andrés Castillo Brieva y Aída Lucía Quekan; Casa Editorial El Tiempo con la Universidad Autónoma de Colombia",
    year: 2004,
    type: "pieza escrita de autor presentada como documento hallado, dentro de una antología ilustrada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Es el registro de esta ficha y, al mismo tiempo, la prueba de que no hay tradición detrás. El capítulo no narra: presenta una carta mecanografiada hallada sobre el escritorio de un abogado el mismo día en que desaparece, con una cabecera en cursiva impresa encima del documento que fija fecha —4 de octubre de 2002—, ciudad y nombre. Quien escribe explica por qué usa máquina y no pantalla: es una despedida y el gesto anticuado forma parte de ella. La carta es antes una ruptura conyugal y de clase que un relato de espantos: el remitente abandona a su pareja, la ciudad y su oficio de abogado de contratos. El encuentro ocurre de madrugada y empieza por el vehículo, no por la mujer —primero el tranvía blanco, después ella—. La biografía de la aparición la cuenta ella misma: mujer de sociedad, química y botánica, ejecutada por brujería en un juicio eclesiástico fechado en 1948. Y el don no es pócima ni maldición sino la facultad de recordar la felicidad a voluntad, concedida a quien tenga «un brillo en los ojos y en el pecho». El texto se cierra con la desaparición anunciada y firmada, sin desenlace ni testigo. Dos fichas marginales manuscritas, que son voz del libro y no de la carta, añaden el modo de operar de la aparición y dos frascos con brebajes cómicos: es la única parte del capítulo que la convierte en personaje de repertorio. Y la introducción del propio volumen, en las pp. VI-VII, declara que se sitúa entre lo real y lo imaginario y que no pertenece al terreno de lo histórico.",
    limitation:
      "No es recolección: es literatura con firma falsa, y el libro lo advierte de sí mismo. No hay narrador, ni informante, ni lugar —el texto no da calle ni barrio, sólo «la ciudad de Bogotá»—, ni fecha de recolección. La fecha interna del documento es ficticia y el juicio eclesiástico de 1948 que la carta invoca es un anacronismo: en Colombia no había tribunal de fe que ejecutara por brujería en el siglo XX. Se consulta por la digitalización en Internet Archive, con capa de texto de OCR; el ítem debe citarse entero y no por su fichero de texto en bruto.",
  }),
  colombiaTranvia2009: source({
    title: "Tranvía municipal de Bogotá. Desarrollo y transición al sistema de buses municipal, 1884-1951",
    author: "Juan Ignacio Baquero Mora (tesis de maestría en Historia de Colombia, dirigida por Fabio Zambrano Pantoja, Universidad Nacional de Colombia)",
    year: 2009,
    type: "tesis de maestría en historia urbana con cartografía de rutas",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/ca64573f-6e3d-4e0f-990c-831bbfc6c4df/content",
    summary:
      "Es lo que hace visible el anacronismo sobre el que descansa la pieza, y de paso la explica. Documenta el sistema entero —el tranvía de mulas desde 1884, la electrificación, las rutas del centro y de Chapinero, los planos de 1940 a abril de 1948, la quema de vehículos del 9 de abril de 1948 y el desmonte hasta 1951— y con eso fija el dato decisivo: en 2002, fecha interna de la carta, en Bogotá no circulaba ningún tranvía, y no circulaba desde hacía medio siglo. La aparición no viaja en un vehículo antiguo sino en uno que ya no existe, y esa es la condición del relato: un tranvía blanco de madrugada sólo puede ser una aparición porque el sistema está muerto. La tesis documenta además cuándo y cómo murió.",
    limitation:
      "Es historia de la empresa y de la infraestructura: no menciona la bruja, ni ningún relato, ni ningún uso simbólico del tranvía después de su desmonte. No documenta nada de la pieza de 2004. Territorio, no registro. Tesis de maestría sin publicación posterior.",
  }),
  restrepotranvia2017: source({
    title: "El tranvía de Bogotá, 1882-1951",
    author: "Juan Santiago Correa Restrepo, Santiago Jimeno León y Marianela Villamizar Bacca",
    year: 2017,
    type: "artículo arbitrado de historia económica (Revista de Economía Institucional, vol. 19, n.º 36, pp. 203-229)",
    url: "http://www.scielo.org.co/pdf/rei/v19n36/0124-5996-rei-19-36-00203.pdf",
    summary:
      "Sostiene el segundo paralelo de la ficha, que es de infraestructura y no de literatura. Sigue el negocio del tranvía desde la concesión hasta su liquidación en 1951: la propiedad, las tarifas, las líneas, los conflictos con el Concejo y el reemplazo por buses. Lo que la ficha usa de aquí es el final: un sistema de transporte que se desmonta no se va del todo, se queda como escenario disponible, y la ciudad le sigue colgando personajes. El mismo vehículo desaparecido sostiene otra figura del repertorio bogotano, el llamado bobo del tranvía, y la coincidencia no es casual: el tranvía es el único medio de transporte de la ciudad que existe sólo en la memoria, y por eso es el lugar donde caben los que ya no están.",
    limitation:
      "Es historia económica y empresarial: no toca leyendas ni personajes, y no menciona la bruja. Corrige el arranque del sistema a 1882 frente al 1884 de la tesis, discrepancia que conviene nombrar. La URL con que el módulo lo citaba antes —la ruta `scielo.php` del mismo servidor— no conecta; sólo funciona la ruta del PDF, y SciELO Colombia sólo publica por http.",
  }),
  martinezCon2006: source({
    title: "«Con notable daño del buen servicio»: sobre la locura femenina en la primera mitad del siglo XX en Bogotá",
    author: "María Angélica Ospina Martínez",
    year: 2006,
    type: "artículo arbitrado de antropología histórica (Antípoda, n.º 2, Universidad de los Andes)",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1900-54072006000100016",
    summary:
      "Documenta qué le pasaba de verdad, en la Bogotá que la carta evoca, a una mujer señalada por saber demasiado o por comportarse fuera de norma. Sobre documentos institucionales e informes médicos del Asilo de Locas, muestra que en la primera mitad del siglo XX la ciudad no quemaba brujas: internaba mujeres, por vía administrativa y con criterios sociales antes que clínicos, en establecimientos de la Junta General de la Beneficencia de Cundinamarca. Esa es la corrección exacta que la ficha necesita frente al juicio eclesiástico de 1948 que la pieza inventa: el aparato que castigaba a la mujer sabia en esa década existía, tenía nombre y no era un tribunal de fe. La sustitución de uno por otro es lo que delata la mano del autor.",
    limitation:
      "No menciona la brujería, ni juicios eclesiásticos, ni por supuesto este relato: su objeto son los diagnósticos y tratamientos del asilo femenino en los años treinta y cuarenta. La comparación entre el internamiento real y la ejecución inventada la establece esta ficha. SciELO Colombia sólo publica por http.",
  }),
  investigacionCandelaria1994: source({
    title: "La Candelaria: el centro histórico de Santafé de Bogotá",
    author: "Alberto Saldarriaga Roa (investigación y textos); Fabio Zambrano P.; Corporación La Candelaria",
    year: 1994,
    type: "monografía urbana institucional",
    url: "https://idpc.gov.co/publicaciones/descargas/candelariacentro.pdf",
    summary:
      "Da la ciudad de madrugada que la pieza necesita y no describe. Reconstruye el tejido urbano del centro histórico, sus calles y sus espacios públicos, y documenta el despoblamiento que dejó ese casco vacío por las noches: la moda que se va a San Victorino, después a La Merced, a Teusaquillo y a Chapinero, hasta dejar un centro de casas viejas por el que a las tres de la mañana no pasa nadie. Esa ciudad desocupada es la condición de todo el repertorio nocturno bogotano y también de esta carta, donde un hombre camina solo de madrugada y encuentra un vehículo imposible sin que haya un solo testigo. La obra documenta además el corredor de la carrera séptima por donde el tranvía circulaba y que el relato da por escenario sin nombrarlo.",
    limitation:
      "No menciona la bruja, ni el tranvía como objeto de relato, ni ningún espanto: es una monografía patrimonial y arquitectónica cuyo interés es el inmueble. Se publica diez años antes que la pieza y no puede documentarla. El PDF pesa cuarenta megabytes y su OCR arrastra erratas.",
  }),
  autoresCuentos20042: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Monja de las Rosas», pp. 99-100",
    author: "Juan Torres Mantilla (director del equipo de autores), con Constanza Orozco Vargas, Nohora Gómez Villamarín, Luis Carlos Álzate, Enrique Rodríguez, Andrés Castillo Brieva y Aída Lucía Quekan; Casa Editorial El Tiempo con la Universidad Autónoma de Colombia",
    year: 2004,
    type: "pieza escrita de autor presentada como guion de cine ajeno, dentro de una antología ilustrada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Es el registro de la ficha y su desmentido a la vez. El capítulo, último del volumen antes del «Diccionario básico del horror», no es un relato sino un guion de cine, y su cabecera se lo atribuye a una directora alemana real de paso por Bogotá para un encuentro de cine en 2004. Está escrito por escenas y con precisión de reparto: un padre y una hija de seis años vestida de amarillo que pagan su entrada como cualquier visitante; la aparición que llega primero como una visitante más entre el público del jardín y a la que sólo distingue el vestuario fuera de época, negro, larguísimo hasta taparle los pies, y un sombrero grande; el ramo de rosas amarillas, que no sale del jardín ni del suelo sino que lo trae una secretaria del despacho de la casa museo y lo pone en un florero de cristal en un pasillo, delante de la niña; la escena de terror, que es un mutismo, con la niña sola, la mujer entrando por la puerta contraria y el pánico impidiéndole hablar y hasta llorar; el forcejeo, con la niña agarrada al ramo y la mujer arrancándoselo con un movimiento preciso y sin violencia aparente; la desaparición al aire libre, en el jardín, con la mujer llevándose el ramo y sólo pétalos en el suelo; y el cierre, que es su tesis: el padre atribuye el llanto al susto de quedarse sola y la niña ya sabe que no le van a creer. La escena está fechada en el presente de la ciudad —la salida es por la carrera quinta hacia una estación de Transmilenio—, y dos fichas marginales manuscritas, voz del libro y no del guion, son las que añaden el aparato de prueba: un cofre atribuido a la monja y una fotografía tomada por un fotógrafo con nombre para una revista de arquitectura. La introducción del volumen, en las pp. VI-VII, declara que se sitúa entre lo real y lo imaginario y que no pertenece al terreno de lo histórico.",
    limitation:
      "No es recolección y no hay tradición detrás: es una pieza escrita con firma atribuida a una tercera persona, y el propio libro advierte del artificio. No hay narrador, ni informante, ni fecha de recolección, ni testimonio de nadie que haya visto nada en la casa. La atribución a la directora alemana no está confirmada por ella ni por ninguna fuente externa. Se consulta por la digitalización en Internet Archive, cuya capa de texto viene de OCR; el ítem debe citarse entero y no por su fichero de texto en bruto.",
  }),
  colombiaCasa2024: source({
    title: "Casa Museo Quinta de Bolívar",
    author: "Ministerio de Cultura de Colombia",
    year: 2024,
    type: "sitio institucional de la casa museo donde transcurre la pieza",
    url: "https://www.quintadebolivar.gov.co/",
    summary:
      "Documenta el escenario tal como funciona hoy, que es exactamente el que el guion usa y ningún otro. La casa museo depende del Ministerio de Cultura, está en la calle 21 n.º 4A-30 Este, abre de martes a viernes de nueve de la mañana a cinco de la tarde y organiza su visita con entrada, horarios y servicios educativos. Es decir: hay taquilla, hay público que circula en grupo por habitaciones y jardín, y hay personal administrativo trabajando dentro de la casa mientras eso ocurre. Los tres elementos aparecen en el guion —la entrada pagada, la mujer confundida con una visitante más entre el público del jardín, la secretaria que sale del despacho con el ramo— y ninguno es un detalle de época: son los de una casa museo en funcionamiento. La pieza no está ambientada en el siglo XIX, está ambientada en una visita guiada.",
    limitation:
      "Es el sitio institucional del museo y su contenido es de visitante: horarios, tarifas, contacto y servicios. No ofrece en su portada una historia documentada de la casa ni de sus habitaciones, no menciona ninguna aparición y no conoce este relato. Se cita por lo que acredita del funcionamiento del lugar, no por la historia del inmueble. Su año es el de consulta, porque la página no se fecha.",
  }),
  culturalFicha2019: source({
    title: "Ficha de inventario y valoración de bienes culturales inmuebles: Santuario de Monserrate (código 101405000041)",
    author: "Instituto Distrital de Patrimonio Cultural, PEMP Patrimonio Inmueble",
    year: 2019,
    type: "ficha oficial de inventario patrimonial",
    url: "https://sisbic.idpc.gov.co/Fichas_CH/FV_101405000041.pdf",
    summary:
      "Se cita como muestra del otro modo de hablar del mismo tipo de inmueble, y sirve de vara de medir. Es una ficha de inventario de un bien patrimonial bogotano del mismo circuito de visita que la Quinta: describe el conjunto edificio por edificio, fecha cada intervención con año y arquitecto, distingue lo que se conserva de lo que no —«de la ermita original no se conserva nada»— y, en su apartado de significación cultural, reconoce que el recorrido del lugar «es objeto de innumerables mitos y relatos que permanecen en la historia popular de la Bogotá» sin suscribir ninguno. Ese es el registro que un inmueble patrimonial produce sobre sí mismo: fechas, autores, materiales y una mención neutra de los relatos. Poner al lado el guion de 2004 hace evidente lo que éste no tiene, que es cualquier anclaje de ese tipo en la casa que usa de escenario.",
    limitation:
      "Es la ficha de otro inmueble: documenta Monserrate y no la Quinta de Bolívar, y se cita por analogía de instrumento, no por su contenido. No menciona ninguna aparición concreta ni este relato. Su reseña histórica se apoya en una publicación de la Arquidiócesis y no en archivo propio. Es contexto metodológico y por eso no va como fuente clave.",
  }),
  transcritaFantasmas2008: source({
    title: "Fantasmas de ciudad: fantasmas en La Candelaria (colección «Memorias de la Ciudad», n.º 1)",
    author: "Stella Monsalve Gaitán; para la versión transcrita, Jorge Bayona Posada; Archivo de Bogotá, Secretaría General de la Alcaldía Mayor",
    year: 2008,
    type: "transcripción de tradición oral de barrio que además reproduce literalmente un texto anterior",
    url: "https://repositorio.biblored.gov.co/server/api/core/bitstreams/f5763725-1882-4b6e-a17a-1710a7497891/content",
    summary:
      "Es el registro de esta ficha y su mayor mérito es que recoge dos versiones del mismo espanto y las deja separadas en vez de fundirlas. En la p. 18 transcribe literalmente a Jorge Bayona Posada, «Los fantasmas de Santafé»: el recorrido con dos extremos con calle y número, «de las inmediaciones de la calle de Piedra Ancha (calle 6, entre carreras 5 y 6), a un sitio al parecer cercano a la iglesia de Las Nieves»; lo que ve quien se asoma, «una mula sin jinete que corría por el centro de la vía, arrancando chispas a las piedras del pavimento con el choque de sus herraduras»; y el desenlace, una mujer «muy conocida anteriormente en la ciudad por su oficio celestinesco», desaparecida meses atrás y hallada muerta en una ramada tras la ermita de Belén, con herraduras clavadas en manos y pies que no se pueden arrancar, tras lo cual el galope cesa para siempre. En las pp. 30-31, en cambio, la ficha propia del barrio cuenta otra cosa: un jugador con nombre que bajaba de Santa Bárbara a Las Nieves a jugar y a beber y volvía pasada la medianoche, la mula que se suelta en el abrevadero y hace sola el camino hasta la casa de juego a buscar a su amo, y el punto de giro dicho con toda la cautela de un «aseguran», que el animal le habló. El libro enfrenta las dos lecturas y escoge: nombra la del cadáver herrado, la atribuye a lo que «dicen» y se queda con la del jugador y su mula.",
    limitation:
      "Monsalve declara de dónde saca el material y es una declaración pobre que conviene citar tal cual antes de apoyarse en ella: historiadores sin nombre y el legado de las generaciones anteriores. No fecha ninguna recolección ni nombra informantes para esta ficha. El texto de Bayona Posada llega aquí de segunda mano, sin año ni editorial en la transcripción, y de ese libro no se ha localizado ejemplar digitalizado ni ficha institucional: hoy sólo existe dentro de estas páginas. Y las dos versiones que el volumen recoge no concuerdan en el recorrido, en el protagonista ni en el desenlace.",
  }),
  ibanezCronicas19132: source({
    title: "Crónicas de Bogotá, tomo I",
    author: "Pedro María Ibáñez, extractando una crónica anónima de prensa de 1896",
    year: 1913,
    type: "historia urbana erudita que reproduce en parte un texto de periódico",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2400/",
    summary:
      "Sostiene el segundo paralelo, que está a pocas cuadras y en otro siglo. En las pp. 139-141, la leyenda del venado de oro pone en el centro a la misma figura urbana que la ficha de barrio de la mula: un jugador de oficio, en este caso un portugués llegado hacia 1700 que dejaba el garito solamente para buscar lances de amor y que acaba apuñalado en la calle, camino de la gruta donde escondió su hallazgo. Las dos historias usan al hombre que se pasa las noches fuera, en mesas de juego, y vuelve tarde por calles vacías, y las dos lo castigan sin decir nunca que lo castigan por jugar. El parentesco no es de motivo sobrenatural sino de moral urbana: en la Santafé de las crónicas, el que anda de noche paga.",
    limitation:
      "No menciona la mula herrada: el paralelo es de figura y lo establece esta ficha. El relato que Ibáñez trae no es recolección sino extracto de una crónica anónima de El Correo Nacional del 14 de noviembre de 1896, que él declara en nota y que no está digitalizada. Mismo aviso de certificado que los demás volúmenes de Banrep.",
  }),
  sedeNova1979: source({
    title: "Nova Vulgata, Liber Numeri (libro de los Números), capítulo 22",
    author: "Santa Sede, Archivio",
    year: 1979,
    type: "edición oficial del texto bíblico publicada por la Santa Sede",
    url: "https://www.vatican.va/archive/bible/nova_vulgata/documents/nova-vulgata_vt_numeri_lt.html",
    summary:
      "Da el antecedente de la bestia que habla, que en la Santafé colonial cualquier lector reconocía sin esfuerzo. En el capítulo 22 la burra de Balaam se planta en el camino, ve lo que su jinete no ve y acaba dirigiéndole la palabra para reprocharle los golpes. Es la misma estructura de la escena bogotana: la cabalgadura sabe algo que el hombre ignora, y la relación entre ambos se rompe en el instante en que el animal abre la boca —el jugador no volvió a montarla—. La diferencia es de economía narrativa y está a favor del relato bogotano: allí la burra habla y su discurso se transcribe entero; aquí nadie transcribe la palabra, queda una sola mención sin repetir, y esa reticencia es lo más eficaz que tiene la página.",
    limitation:
      "Es el texto latino de la edición oficial de la Santa Sede, sin comentario ni aparato crítico, y no es una edición filológica de las que discuten el pasaje. No tiene relación documental alguna con el relato bogotano: el parentesco es de motivo y lo establece esta ficha. Que el motivo fuera conocido en la Santafé colonial es una inferencia razonable a partir de la circulación de la Biblia y del sermón, no un dato demostrado.",
  }),

  // ——— Búsqueda profunda 2026-09-23 ———
  playTransportar2021: source({
    title: "Transportar a una monja que estaban velando en una funeraria, la historia de un taxista",
    author: "RTVC Play, Radio Nacional de Colombia",
    year: 2021,
    type: "nota de medio público (21 de octubre de 2021)",
    url: "https://www.radionacional.co/actualidad/historias-de-taxistas-transportar-una-monja-que-estaban-velando",
    summary:
      "La versión de Tuluá: la religiosa que toma un taxi hasta una funeraria, pide que la esperen porque adentro le darán el dinero y resulta ser la monja que están velando. Añade la variante del pasajero que desaparece camino de Chía y deja al taxista sin la carrera.",
    limitation:
      "Trata el motivo en Tuluá, no este relato bogotano; es una nota de promoción de un pódcast, sin nombre de narrador para la versión de la monja.",
  }),
  samperleyendas2007: source({
    title: "Las leyendas modernas y la transmisión de valores",
    author: "José Manuel de Prada Samper",
    year: 2007,
    type: "artículo de revista (Signa, UNED, n.º 16, pp. 57-72)",
    url: "https://dialnet.unirioja.es/descarga/articulo/2216738.pdf",
    summary:
      "Analiza la autoestopista fantasma como leyenda moderna, con la versión de García Márquez en «Fantasmas de carreteras» (1981) y su observación de que los conductores profesionales difunden estos relatos: el marco del pasajero muerto que la monja del taxi comparte.",
    limitation:
      "Trata el motivo en España y Europa, no este relato; no menciona monjas, taxis ni funerarias.",
  }),
  brunvandVanishing1981: source({
    title: "The Vanishing Hitchhiker: American Urban Legends and Their Meanings",
    author: "Jan Harold Brunvand",
    year: 1981,
    type: "libro de folclorística (W. W. Norton), copia digital en préstamo",
    url: "https://archive.org/details/vanishinghitchhi00brun",
    summary:
      "El estudio clásico del pasajero que desaparece y resulta estar muerto, la estructura sobre la que se monta el viaje de la monja hasta la funeraria.",
    limitation:
      "Trata el motivo en los Estados Unidos, no este relato; sólo disponible en préstamo controlado.",
  }),
  colaborativaAutoestopista: source({
    title: "Autoestopista fantasma",
    author: "Wikipedia en español (colaborativa)",
    type: "enciclopedia colaborativa, sólo como paralelo",
    url: "https://es.wikipedia.org/wiki/Autoestopista_fantasma",
    summary:
      "Resume la forma básica del motivo y cómo el viajero se entera después de que la mujer había muerto, contraste útil con la monja que se descubre en el ataúd del mismo edificio.",
    limitation:
      "Trata el motivo, no este relato; Wikipedia sin autoría responsable, sólo como paralelo.",
  }),
  tiempofantasmas2003: source({
    title: "Los fantasmas de La Candelaria",
    author: "Marta Beltrán (El Tiempo)",
    year: 2003,
    type: "crónica de prensa (El Tiempo, 2 de febrero de 2003)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-989068",
    summary:
      "Reúne los aparecidos del centro de Bogotá que alimentaban los recorridos nocturnos de La Candelaria —el duende Baltazar, la lavandera emparedada, el cortesano de casaca verde de Ángel Cuervo— y los libros de los que salen. Sitúa la tradición de espantos urbanos en la que se inscribe el relato.",
    limitation:
      "Trata la tradición de aparecidos bogotanos, no este relato: no menciona esqueletos, morgues ni élites arrepentidas.",
  }),
  colaborativaDanza: source({
    title: "Danza de la Muerte",
    author: "Wikipedia en español (colaborativa)",
    type: "enciclopedia colaborativa, sólo como paralelo",
    url: "https://es.wikipedia.org/wiki/Danza_de_la_muerte",
    summary:
      "Explica el género tardomedieval en que la Muerte, como esqueleto, llama a bailar a personas de todas las condiciones, con la Danza general de la Muerte castellana del siglo XV: el antecedente europeo de la muerte que iguala a poderosos y humildes.",
    limitation:
      "Trata el motivo, no este relato; Wikipedia sin autoría responsable, sólo como paralelo.",
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
