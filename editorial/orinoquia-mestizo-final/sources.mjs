function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const orinoquiaMestizoFinalSources = {
  vargasPrimary: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro primario digitalizado",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2797/download",
    summary:
      "Publica los once cuentos firmados que originan las rutas revisadas y permite controlar argumento, lenguaje, secuencia y autoría.",
    limitation:
      "Es una obra literaria individual, no una transcripción neutral de tradición oral ni una fuente histórica suficiente para sus afirmaciones internas.",
  }),
  vargasBanrep: source({
    title: "Cuentos, mitos y leyendas del llano: ficha bibliográfica",
    author: "Biblioteca Virtual del Banco de la República",
    year: 1996,
    type: "catálogo bibliográfico institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Controla título, autor, edición, cobertura llanera y acceso al ejemplar digital.",
    limitation:
      "El catálogo describe la publicación, pero no valida como hechos los sucesos narrados por el autor.",
  }),
  vargasCervantes: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "repositorio bibliográfico académico",
    url: "https://www.cervantesvirtual.com/obra/cuentos-mitos-y-leyendas-del-llano-1165049/",
    summary:
      "Ofrece control independiente de la obra, su autoría y su pertenencia a la literatura colombiana de tema llanero.",
    limitation:
      "La ficha no constituye una segunda recolección oral ni corrobora detalles históricos del argumento.",
  }),
  vargasBogota: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Biblioteca Digital de Bogotá",
    year: 1996,
    type: "registro de biblioteca pública",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2092921/",
    summary:
      "Documenta circulación bibliotecaria y datos editoriales del volumen de Getulio Vargas Barón.",
    limitation:
      "Es control bibliográfico; no aporta informantes diferentes ni autentica genealogías, curaciones o sucesos sobrenaturales.",
  }),
  vargasWorldcat: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "WorldCat",
    year: 1996,
    type: "catálogo internacional de bibliotecas",
    url: "https://search.worldcat.org/title/Cuentos-mitos-y-leyendas-del-llano/oclc/318388273",
    summary:
      "Confirma la identidad bibliográfica y presencia del libro en colecciones institucionales.",
    limitation:
      "No analiza la relación entre invención autoral y repertorio folclórico.",
  }),
  vargasGoogleBooks: source({
    title: "Cuentos, mitos y leyendas del Llano",
    author: "Google Books",
    year: 1996,
    type: "índice bibliográfico",
    url: "https://books.google.com/books/about/Cuentos_mitos_y_leyendas_del_Llano.html?id=kDTyAQAACAAJ",
    summary:
      "Aporta otro control de autor, título y año de publicación del volumen.",
    limitation:
      "La vista no sustituye la lectura del ejemplar primario ni una investigación histórica externa.",
  }),
  vargasTiempoReview: source({
    title: "El llano en once relatos",
    author: "El Tiempo",
    year: 1997,
    type: "reseña periodística contemporánea",
    url: "https://www.eltiempo.com/archivo/documento/MAM-524842",
    summary:
      "Presenta el volumen como once cuentos de un autor y documenta su recepción temprana como obra literaria llanera.",
    limitation:
      "La reseña es promocional y no evalúa críticamente estereotipos, datos históricos o apropiaciones culturales.",
  }),
  vargasTiempoAnnouncement: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "El Tiempo",
    year: 1996,
    type: "noticia editorial contemporánea",
    url: "https://www.eltiempo.com/archivo/documento/MAM-515777",
    summary:
      "Registra la aparición del libro y su intención de convertir materiales y paisajes llaneros en narraciones escritas.",
    limitation:
      "No es una fuente independiente sobre los hechos internos de cada cuento.",
  }),
  pittType160: source({
    title: "Folktale Type 160: Grateful Animals, Ungrateful Man",
    author: "D. L. Ashliman, University of Pittsburgh",
    type: "catálogo comparativo de tipos folclóricos",
    url: "https://sites.pitt.edu/~dash/type0160.html",
    summary:
      "Identifica el ciclo internacional en que animales rescatados recompensan a una persona mientras el humano salvado actúa con ingratitud.",
    limitation:
      "El catálogo compara argumentos de múltiples tradiciones; no prueba una transmisión oral directa hacia Vargas Barón.",
  }),
  uamCalila: source({
    title: "Tradición y transmisión de Calila e Dimna",
    author: "Universidad Autónoma de Madrid",
    type: "investigación académica de historia literaria",
    url: "https://repositorio.uam.es/server/api/core/bitstreams/ab8981e7-bcda-4862-bfc2-a027d321ec08/content",
    summary:
      "Contextualiza las etapas de traducción y reelaboración que conectan materiales orientales, árabes y castellanos de Calila e Dimna.",
    limitation:
      "No estudia el cuento de Vicente y Encuentro ni demuestra qué edición conoció el autor llanero.",
  }),
  cervantesCalila: source({
    title: "Las fábulas del Panchatantra y sus versiones en Kalilah wa-Dimnah y Calila e Dimna",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "estudio académico de literatura comparada",
    url: "https://www.cervantesvirtual.com/portales/agustin_moreto/obra/las-fabulas-del-panchatantra-y-sus-nuevas-versiones-en-el-kalilah-wa-dimnah-arabe-y-el-calila-e-dimna-espanol/",
    summary:
      "Distingue los grandes estadios textuales del Panchatantra, la versión árabe y el Calila e Dimna castellano.",
    limitation:
      "Ofrece genealogía literaria general y no atribuye la historia llanera de Encuentro a esos libros.",
  }),
  arbesuCalila: source({
    title: "Calila e Dimna: edición completa",
    author: "David Arbesú, editor",
    type: "edición académica de texto medieval",
    url: "https://www.davidarbesu.com/uploads/3/0/7/1/3071571/calila_y_dimna_completo.pdf",
    summary:
      "Permite controlar directamente motivos, marco y tradición castellana de la colección de ejemplos animales.",
    limitation:
      "La coincidencia temática no convierte todo episodio con animales agradecidos en copia literal de un pasaje único.",
  }),

  baqueroPrimary: source({
    title: "Los cuentos de Pascual: mitos y leyendas del piedemonte llanero",
    author: "Alberto Baquero Nariño",
    year: 1988,
    type: "libro primario digitalizado",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2818/download",
    summary:
      "Publica el preámbulo sobre mitos de transición y los seis relatos revisados, con su lenguaje, escenas y atribución autoral completa.",
    limitation:
      "Es literatura firmada; su voz pícara incluye misoginia, coerción, homofobia, violencia y pseudociencia que no deben reproducirse como norma cultural.",
  }),
  baqueroBanrep: source({
    title: "Los cuentos de Pascual: ficha bibliográfica",
    author: "Biblioteca Virtual del Banco de la República",
    year: 1988,
    type: "catálogo bibliográfico institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2818/",
    summary:
      "Identifica ocho narraciones de Alberto Baquero Nariño sobre la imaginería cultural llanera y cataloga la obra como cuentos y cuentería.",
    limitation:
      "La descripción institucional reconoce su interés cultural, pero no convierte cada escena en testimonio oral literal.",
  }),
  baqueroCervantes: source({
    title: "Los cuentos de Pascual",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "repositorio bibliográfico académico",
    url: "https://www.cervantesvirtual.com/obra/los-cuentos-de-pascual-1165112/",
    summary:
      "Controla autoría, título y circulación académica de la colección del piedemonte llanero.",
    limitation:
      "No ofrece informantes distintos ni corrobora las supuestas fechas, curaciones o episodios políticos narrados.",
  }),
  baqueroWorldcat: source({
    title: "Los cuentos de Pascual: mitos y leyendas del piedemonte llanero",
    author: "WorldCat",
    year: 1988,
    type: "catálogo internacional de bibliotecas",
    url: "https://search.worldcat.org/es/title/cuentos-de-pascual-mitos-y-leyendas-del-piedemonte-llanero/oclc/33058441",
    summary:
      "Confirma la edición de Villavicencio y la identidad bibliográfica de la obra de Baquero Nariño.",
    limitation:
      "Es control de publicación y no una segunda fuente narrativa.",
  }),
  baqueroCanal: source({
    title: "El Tirapiedra: mitos y leyendas del piedemonte",
    author: "Canal Llanero",
    year: 2016,
    type: "republicación regional del cuento",
    url: "https://canalllanero.blogspot.com/2016/06/el-tirapiedra-mitos-y-leyendas-del.html",
    summary:
      "Documenta recepción digital del Tirapiedra y conserva la atribución a Los cuentos de Pascual.",
    limitation:
      "Es una republicación, no una versión oral independiente; no valida como hechos el origen universitario ni la violencia política.",
  }),
  baqueroCun: source({
    title: "Imaginarios y narrativas del piedemonte llanero",
    author: "Corporación Unificada Nacional de Educación Superior",
    type: "investigación académica contextual",
    url: "https://repositorio.cun.edu.co/server/api/core/bitstreams/0a24983e-874c-4bf7-bfb4-66fc925a705a/content",
    summary:
      "Usa la obra de Baquero dentro de estudios contemporáneos sobre representación cultural e identidad del piedemonte.",
    limitation:
      "Su mención contextual no autentica cada motivo ni elimina la mediación literaria del autor.",
  }),
  baqueroTiempo: source({
    title: "Alberto Baquero y la escritura del Llano",
    author: "El Tiempo",
    type: "perfil periodístico de autor",
    url: "https://www.eltiempo.com/archivo/documento/MAM-12460",
    summary:
      "Sitúa a Baquero Nariño como escritor e investigador regional y ayuda a leer las piezas como producción autoral.",
    limitation:
      "No es una evaluación crítica de Los cuentos de Pascual ni prueba de sus episodios sobrenaturales.",
  }),
  baqueroOrinoquia: source({
    title: "Cultura, poblamiento e identidad de la Orinoquía",
    author: "Alberto Baquero Nariño",
    type: "artículo académico de contexto regional",
    url: "https://orinoquia.unillanos.edu.co/index.php/orinoquia/article/download/211/659",
    summary:
      "Permite contrastar la reflexión regional del autor con la voz ficcional, humorística y extrema de Pascual.",
    limitation:
      "El artículo contextualiza al autor, pero no convierte los cuentos en etnografía ni autoriza sus remedios y conductas.",
  }),

  caribabareLlanera: source({
    title: "La leyenda del tesoro de Caribabare",
    author: "Temis Perea Pedroza; reproducción de Llanera.com",
    year: 2010,
    type: "versión regional atribuida",
    url: "https://llanera.com/llanos/la-leyenda-del-tesoro-de-caribabare/26675",
    summary:
      "Narra al padre Manare, la bóveda, el riachuelo desviado y la sombra guardiana, y cita antecedentes impresos sobre la hacienda.",
    limitation:
      "Mezcla datos económicos, tradición y rumores petroleros; cada capa debe distinguirse y no prueba que exista un depósito.",
  }),
  caribabareExternado: source({
    title: "Tras el leco del cabrestero",
    author: "Universidad Externado de Colombia",
    type: "trabajo académico sobre cultura e historia llanera",
    url: "https://bdigital.uexternado.edu.co/bitstreams/a9bbea8d-5172-4534-a743-2d98e3bfa5ef/download",
    summary:
      "Separa la gran hacienda jesuita de la leyenda posterior sobre Manare, la excavación y la sombra de plenilunio.",
    limitation:
      "Reproduce la leyenda desde fuentes secundarias y no aporta evidencia material del tesoro.",
  }),
  caribabareCanal: source({
    title: "San Salvador del Puerto del Casanare y Caribabare",
    author: "Canal Llanero",
    year: 2015,
    type: "divulgación histórica regional",
    url: "https://canalllanero.blogspot.com/2015/07/san-salvador-del-puerto-del-casanare-y.html",
    summary:
      "Relaciona el puerto, la hacienda, las misiones y la circulación regional del relato del tesoro.",
    limitation:
      "No publica documentación primaria de Manare ni localización verificable de una bóveda.",
  }),
  caribabareBanrepHistory: source({
    title: "Historia regional de los Llanos y la hacienda Caribabare",
    author: "Boletín Cultural y Bibliográfico, Banco de la República",
    type: "estudio histórico regional",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/download/1815/1869",
    summary:
      "Aporta contexto histórico sobre misiones, poblamiento, ganadería y propiedades jesuitas en los Llanos.",
    limitation:
      "El contexto histórico no demuestra los detalles sobrenaturales ni el contenido exacto del supuesto tesoro.",
  }),
  caribabareRegiones: source({
    title: "Colombia, país de regiones: empresas misioneras",
    author: "Banco de la República",
    type: "síntesis histórica regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2817/download",
    summary:
      "Ubica Caribabare cerca de Paz de Ariporo y documenta su papel entre las principales haciendas jesuitas de los Llanos.",
    limitation:
      "No registra una bóveda, un mapa ni la aparición del padre Manare.",
  }),
  caribabareUasb: source({
    title: "Misiones jesuitas, economía y territorio en la Orinoquía",
    author: "Universidad Andina Simón Bolívar",
    type: "investigación histórica académica",
    url: "https://repositorio.uasb.edu.ec/server/api/core/bitstreams/aece393c-363d-49d5-b71c-36e49f00237d/content",
    summary:
      "Contextualiza la empresa misional, los circuitos económicos y la expulsión de la Compañía de Jesús.",
    limitation:
      "La historia institucional no prueba que los bienes fueran ocultados mediante el procedimiento descrito por la leyenda.",
  }),
  caribabareLibertadores: source({
    title: "Patrimonio narrativo y leyendas de la Orinoquía",
    author: "Fundación Universitaria Los Libertadores",
    type: "investigación educativa regional",
    url: "https://repository.libertadores.edu.co/server/api/core/bitstreams/c0a3a577-a45b-46f7-97ba-adc120998902/content",
    summary:
      "Registra la permanencia del tesoro de Caribabare dentro de repertorios y mediaciones culturales llaneras.",
    limitation:
      "Su función pedagógica no equivale a una excavación arqueológica ni a un inventario colonial del depósito.",
  }),
  caribabareNunchia: source({
    title: "Diagnóstico del centro histórico de Nunchía",
    author: "Alcaldía de Nunchía",
    type: "plan institucional de patrimonio",
    url: "https://www.nunchia-casanare.gov.co/MiMunicipio/Documentos%20Patrimonio/Etapa%20I%20Diagnostico%20Centro%20Historico%20Nunch%C3%ADa%20Casanare.pdf",
    summary:
      "Reconoce la leyenda del tesoro de Caribabare como referente del patrimonio cultural del Casanare.",
    limitation:
      "Demuestra recepción patrimonial, no la existencia material del tesoro ni la biografía del guardián.",
  }),

  bolaBaquero: source({
    title: "Preámbulo: la imaginería popular",
    author: "Alberto Baquero Nariño",
    year: 1988,
    type: "ensayo primario dentro de Los cuentos de Pascual",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2818/download#page=8",
    summary:
      "Describe la Bola de Fuego o Candileja como luz veloz del repertorio llanero y señala que las narraciones populares cambian de forma.",
    limitation:
      "Es interpretación de un escritor regional; no fija un origen único ni prueba que la aparición queme viajeros.",
  }),
  bolaTiempo: source({
    title: "Mitos y leyendas: riqueza del Llano",
    author: "Llano 7 días; El Tiempo",
    year: 2005,
    type: "reportaje de tradición regional",
    url: "https://www.eltiempo.com/archivo/documento/mam-1630248",
    summary:
      "Registra la Bola de Fuego entre relatos transmitidos en los Llanos y conserva su función de advertencia nocturna.",
    limitation:
      "La recreación periodística no demuestra apariciones ni establece una biografía única.",
  }),
  bolaMen: source({
    title: "Lenguaje 7: comparación de versiones de la Bola de Fuego",
    author: "Ministerio de Educación Nacional",
    type: "guía pedagógica oficial",
    url: "https://contenidos.mineducacion.gov.co/ntg/men/archivos/Referentes_Calidad/Modelos_Flexibles/Secundaria_Activa/Guias_del_estudiante/Lenguaje/LG_Grado07.pdf",
    summary:
      "Presenta versiones distintas y convierte su comparación en ejercicio escolar de lectura.",
    limitation:
      "Es mediación educativa, no registro de campo ni prueba de que una versión sea la original.",
  }),
  bolaEsap: source({
    title: "Leyenda de la Bola de Fuego",
    author: "Repositorio CDIM, Escuela Superior de Administración Pública",
    type: "documento territorial con repertorio cultural",
    url: "https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8",
    summary:
      "Registra el relato dentro de un inventario territorial y permite controlar su circulación regional.",
    limitation:
      "No identifica una cadena completa de informantes ni prueba instrucciones de protección sobrenatural.",
  }),
  bolaCasanareAntigua: source({
    title: "Mitos y leyendas: la Bolefuego",
    author: "Casanare Antigua",
    year: 2020,
    type: "memoria digital local",
    url: "https://casanareantigua.blogspot.com/2020/07/mitos-y-leyendas-la-bolefuego.html",
    summary:
      "Conserva nombre, movimiento luminoso y fórmulas narrativas reconocidas en Casanare.",
    limitation:
      "Es divulgación local sin edición crítica; las contras mágicas se documentan, no se recomiendan.",
  }),
  bolaEncantos: source({
    title: "El mito de la Bola de Fuego",
    author: "Casanare, tierra de encantos",
    year: 2018,
    type: "divulgación cultural local",
    url: "https://casanaretierradeencantos.blogspot.com/2018/03/mitos-y-leyendas-casanare-el-mito-de.html",
    summary:
      "Publica una variante casanareña y muestra que la apariencia y la causa del castigo no son uniformes.",
    limitation:
      "No ofrece fuentes primarias identificadas y no debe convertirse en origen exclusivo.",
  }),
  bolaVillanueva: source({
    title: "Elementos de la cultura de Villanueva",
    author: "Memoria cultural de Villanueva, Casanare",
    type: "inventario cultural municipal",
    url: "https://villanueva-casanare1962.blogspot.com/p/parte-iii-elementos-de-la-cultura.html",
    summary:
      "Incluye la Bola de Fuego en el repertorio reconocido del municipio y aporta evidencia de circulación territorial.",
    limitation:
      "La lista cultural no corrobora fechas, víctimas ni una apariencia física exacta.",
  }),
  candilejaScrd: source({
    title: "La Candileja",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "divulgación institucional de folclor colombiano",
    url: "https://ant.culturarecreacionydeporte.gov.co/en/node/1127",
    summary:
      "Describe la Candileja de tres luces y permite compararla con la bola luminosa móvil de versiones llaneras.",
    limitation:
      "Es una síntesis divulgativa y no demuestra que todas las Bolas de Fuego sean idénticas a la versión tolimense.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  baronCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro de relatos de autor (edición digital)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Es el único texto de «Amanecer Llanero», primer relato del libro (pp. 5-9): veintiún párrafos de prosa invocatoria sobre la huida de Pamoare y Casanari, la esmeralda arrojada que crea la sabana, el blanqueo de tres lunas, la boda con fuego, venado y sangre, los dieciocho hijos, la muerte de Casanari por un jaguar, las lágrimas que forman esteros, el cataclismo de la arena verde, el mar negro «semejante al aceite de la palma de Seje» y la profecía de la conquista y del mestizaje. La Presentación (p. 4) dice que el autor «recrea la Llanura colombiana» «con inspiración de artista».",
    limitation:
      "Es creación literaria de autor, no recolección oral: no nombra narradores para este relato y el propio texto llama a su materia «supuesta leyenda mitológica». La Presentación no está firmada. El espejo de la UNAL está truncado en otros relatos; las páginas se citan por el PDF de Banrepcultural (api/collection/p17054coll10/id/2797/download).",
  }),
  martinfolclor1979: source({
    title: "Del folclor llanero",
    author: "Miguel Ángel Martín",
    year: 1979,
    type: "monografía folclórica regional",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/df7fd3f6-ad07-489b-aac8-da8cba07cecf/content",
    summary:
      "En la entrada del departamento de Casanare dice que el nombre viene de «la voz achagua Casanari», que es el nombre del héroe de Vargas Barón, y enumera a los primeros pobladores (tunebos, achaguas, guahíbos, sálibas, cusianas, caquetíos, piapocos, amorúas) y a los grupos de los resguardos, entre ellos cuibas, chiripos y masiguares, varios de los cuales reaparecen en la lista de los dieciocho hijos. Define además al llanero como «mestizo triétnico», que es la figura con la que cierra la profecía de Pamoare.",
    limitation:
      "Es folclor de autor sin fichas de informante y no contiene el relato de Pamoare y Casanari; sirve para el nombre, la lista de pueblos y la idea del llanero mestizo, no para el argumento. El texto extraído no conserva la paginación impresa: se cita por la entrada «Casanare».",
  }),
  simonNoticias1891: source({
    title: "Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales, segunda parte",
    author: "Fray Pedro Simón",
    year: 1891,
    type: "crónica colonial (edición de 1891-1892 sobre manuscritos del siglo XVII, digitalizada)",
    url: "https://archive.org/details/tierrafirmeindias02simbrich",
    summary:
      "Trae los dos paralelos muiscas que usa la ficha. En la cuarta noticia, capítulo II (pp. 279-280 de esta edición), Bachué sale de una laguna de Iguaque con un niño, baja al llano, se casa con él, puebla la tierra y, ya vieja, vuelve a la laguna y se hunde en ella convertida en culebra; en el capítulo IV (pp. 289-290), Chibchachum anega la sabana y Bochica abre las peñas de Tequendama con una vara de oro para que salgan las aguas, origen de que tiemble la tierra.",
    limitation:
      "Es fuente colonial escrita por un franciscano con intención evangelizadora, sobre el altiplano muisca y no sobre el Llano. No menciona a Pamoare ni a Casanari: el paralelo es estructural (pareja que baja de la sierra, puebla y desaparece en el agua; tierra que se abre tras una inundación). Edición de Medardo Rivas, Bogotá; OCR de archive.org con errores.",
  }),
  baronpoeta1999: source({
    title: "Ser poeta: poemas al llano",
    author: "Getulio Vargas Barón",
    year: 1999,
    type: "poemario de autor (digitalizado por la Biblioteca Virtual del Banco de la República)",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/615dc917-0cd2-4c81-975b-1e8a4ec38f7d/content",
    summary:
      "Es la clave para leer el «mar de Seje» de «Amanecer Llanero». En los poemas «El petróleo» y en unas décimas sobre Casanare, el mismo autor nombra lo que el relato calla: la mancha de petróleo que se expande «desde el Cusiana, enlodando las sabanas», el «oro negro» y el pueblo al que dejan «sin redención». El prólogo, fechado en Yopal en noviembre de 1999, dice que para él «la mancha de petróleo es el principio de la muerte de su llano».",
    limitation:
      "Es obra posterior (prólogo de 1999, publicada en Bogotá por H. G. Impresores) y en verso; no contiene a Pamoare ni a Casanari. Sirve para la postura del autor ante el petróleo, no como variante del relato. Se consultó el espejo de la UNAL.",
  }),
  redaccionCusiana1991: source({
    title: "Cusiana: gran hallazgo",
    author: "El Tiempo (redacción)",
    year: 1991,
    type: "prensa nacional fechada (9 de julio de 1991)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-116787",
    summary:
      "Fecha el anuncio del gran yacimiento de Cusiana, en Casanare, a unos treinta kilómetros de Yopal, y explica que los primeros pozos, de 1988, dieron gas y que el crudo apareció en formaciones más profundas. Sitúa «Amanecer Llanero», publicado en 1996, cinco años después de ese anuncio, que es el contexto de su mar negro guardado en las entrañas del Llano.",
    limitation:
      "Es prensa de noticia económica, sin relación directa con el relato; sólo se usa para fechar el contexto petrolero. La lectura del mar de seje como petróleo es interpretación y se declara como tal.",
  }),
  investigacionColombia1998: source({
    title: "Colombia país de regiones, tomo IV (cap. 4, «Vida y cultura del llano»)",
    author: "CINEP (Centro de Investigación y Educación Popular), con Colciencias",
    year: 1998,
    type: "geografía histórica y social regional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2817/",
    summary:
      "En el capítulo de la Orinoquía repasa la exploración petrolera del Llano desde los años cincuenta, los hallazgos de Caño Limón y Apiay en los ochenta y el potencial de Casanare, del que atribuye el 75 % a Cusiana, y habla de una «bonanza petrolera» y de la responsabilidad de invertir las regalías. Describe también a los pueblos achagua, cusiana, tunebo y chiricoa como pobladores previos a la conquista. Es el marco regional en el que se escribió la profecía de Pamoare.",
    limitation:
      "No contiene ningún relato ni menciona a Vargas Barón. Es contexto histórico y económico; su paginación se citó por la del PDF (pp. 85 y 96), no por la impresa.",
  }),
  vasconcelosraza1925: source({
    title: "La raza cósmica. Misión de la raza iberoamericana",
    author: "José Vasconcelos",
    year: 1925,
    type: "ensayo (texto completo en el Proyecto Filosofía en español)",
    url: "https://www.filosofia.org/aut/001/razacos.htm",
    summary:
      "Anuncia en América una «raza síntesis o raza integral, hecha con el genio y con la sangre de todos los pueblos», y reserva a la cuenca del Amazonas, «junto con el Orinoco y el Magdalena», un papel en ese destino. Es el paralelo moderno de la profecía final de Pamoare, en la que la sangre de sus hijos «confundida con la de los intrusos» produce «al gran dominador de las sabanas».",
    limitation:
      "Es ensayo filosófico mexicano de 1925, con juicios raciales hoy inaceptables; no hay prueba de que Vargas Barón lo leyera. El parentesco es de idea, no de fuente.",
  }),
  redaccionMurio2000: source({
    title: "Murió Getulio Vargas Barón",
    author: "El Tiempo (redacción)",
    year: 2000,
    type: "prensa nacional fechada (obituario, 17 de marzo de 2000)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-1265393",
    summary:
      "Da los datos del autor que la historia de la ficha necesita: nacido en Támara, murió en Yopal a los 67 años, fue alcalde de Paz de Ariporo, diputado a la Asamblea de Boyacá y gerente del Fondo Ganadero de Boyacá, y dirigió la lucha por la autonomía administrativa de Casanare. Permite leer «Amanecer Llanero» como cosmogonía escrita por un político regionalista de la generación que vio nacer el departamento y su petróleo.",
    limitation:
      "Es una nota necrológica: no habla de este relato ni de su método. Los cargos se dan sin fechas.",
  }),
  riveroHistoria1883: source({
    title: "Historia de las misiones de los llanos de Casanare y los ríos Orinoco y Meta",
    author: "Juan Rivero, S. J.",
    year: 1883,
    type: "crónica misional jesuita (escrita en 1736; edición de Bogotá, 1883, digitalizada)",
    url: "https://archive.org/details/historiadelasmi00rivegoog",
    summary:
      "Es el registro colonial de los pueblos de las misiones de Casanare, y en él figuran con frecuencia seis de los dieciocho nombres que «Amanecer Llanero» da a los hijos de Pamoare y Casanari: achaguas, betoyes, chiricoas, sálibas, tunebos y macaguanes. Muestra de dónde viene el repertorio de etnónimos del autor: de la historia misional del Llano, no de una genealogía indígena.",
    limitation:
      "Es una crónica jesuita del siglo XVIII escrita desde la evangelización; no contiene ningún relato de Pamoare ni una genealogía común de esos pueblos. El conteo de nombres se hizo sobre el OCR de archive.org (escaneo de origen bibliotecario), que tiene errores.",
  }),
  tiempoCuentos1996: source({
    title: "Cuentos y mitos",
    author: "Redacción El Tiempo",
    year: 1996,
    type: "prensa",
    url: "https://www.eltiempo.com/archivo/documento/MAM-515777",
    summary:
      "Nota del 24 de septiembre de 1996 sobre la salida del libro con patrocinio del Corpes de la Orinoquia y su lanzamiento en Yopal. Dice que el autor es de Támara (Casanare), que fue político y funcionario en Boyacá y Casanare y que presidía la Academia de Historia de Casanare: el mismo Casanare de Paz de Ariporo, San Luis de Palenque y Maporal del Pauto donde transcurre este caso.",
    limitation:
      "No menciona este relato: lista sólo siete títulos del libro. Es una nota de lanzamiento sin firma y sin análisis.",
  }),
  romeromitos1997: source({
    title: "Los mitos del Llano",
    author: "Héctor Preciado Romero",
    year: 1997,
    type: "prensa (reseña)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-524842",
    summary:
      "Reseña de la segunda edición (Impreandes). Presenta al autor como casanareño y líder cívico de la segregación de Casanare respecto de Boyacá, y lee el libro como un retrato del «decir y el sentir» del Llano. Sirve para situar la voz criolla y regionalista desde la que se cuenta el caso del brujo.",
    limitation:
      "Es una reseña de un amigo del autor, elogiosa y sin análisis de ningún relato. Repite que el libro tiene «once cuentos», cuando el índice trae doce textos.",
  }),
  chamorrotono2008: source({
    title: "Del tono y los tonos de velorio",
    author: "Benjamín Yépez Chamorro",
    year: 2008,
    type: "artículo académico",
    url: "https://revistas.ucm.es/index.php/CMIB/article/download/61148/4564456547824/4564456554150",
    summary:
      "Estudia los velorios de los llanos de la cuenca media del Orinoco, compartidos por Colombia y Venezuela, y cita a José Peñín para definir el velorio como reunión en que la comunidad acompaña a un difunto adulto o niño, el «velorio de angelito», con rezo, comida, bebida y baile. Documenta el marco del baile de los Santos Angelitos de Macarabure.",
    limitation:
      "Cuadernos de Música Iberoamericana, vol. 16. Se centra en el velorio de Cruz de Mayo y en la música; el velorio de angelito aparece como categoría, no se describe en detalle, y los datos son sobre todo venezolanos.",
  }),
  pinedaRacionalidades2015: source({
    title: "Racionalidades médicas de los sistemas tradicional colombiano, biomédico y osteopático: una aproximación a la conceptualización de la dolencia del descuaje en Bogotá",
    author: "León Felipe Sanín Pineda",
    year: 2015,
    type: "tesis de maestría",
    url: "https://repositorio.unal.edu.co/bitstream/handle/unal/54823/Sanin%20Pineda.%20Tesis.%202015.%20Racionalidades%20m%C3%A9dicas%20y%20descuaje..pdf?sequence=1&isAllowed=y",
    summary:
      "Describe el descuaje como dolencia de la medicina tradicional colombiana, atribuida a golpes o caídas, y el tratamiento con el paciente en posición vertical invertida, pies arriba y cabeza abajo, junto con la sobada del vientre. Es el mismo procedimiento que la madre del niño «escuajado» atribuye a Piriachi.",
    limitation:
      "Trabajo sobre Bogotá, con sobanderos urbanos, no sobre el Llano. Es una tesis de maestría en medicina alternativa, no un estudio etnográfico de Casanare.",
  }),
  pinzonViolencia1988: source({
    title: "Violencia y brujería en Bogotá",
    author: "Carlos Pinzón",
    year: 1988,
    type: "artículo académico",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/2792",
    summary:
      "Resultado de doce años de trabajo con curanderos y pacientes: muchos enfermos llegaban convencidos de que su mal era una «brujería» o «mal postizo» hecho por envidia, y el curandero interpretaba los conflictos con vecinos y parientes como ataques de hechicería. Es el esquema de la consulta de don Agapito, a quien Piriachi le dice que su mal se lo manda un vecino.",
    limitation:
      "Boletín Cultural y Bibliográfico, vol. 25, núm. 16. El campo es urbano (Bogotá, migrantes populares), no llanero; no trata de ningún caso del libro.",
  }),
  uribeMagia2003: source({
    title: "Magia, brujería y violencia en Colombia",
    author: "Carlos Alberto Uribe",
    year: 2003,
    type: "artículo académico",
    url: "https://revistas.uniandes.edu.co/index.php/res/article/download/5316/5124/23685",
    summary:
      "Sostiene que en Colombia el conflicto y el caos social son un escenario privilegiado para la brujería, y que la acusación mágica circula por lazos de parentesco y vecindario regidos por la envidia y la venganza. Da el marco para leer cómo un diagnóstico de brujería termina, en este caso, en el asesinato de un vecino en plena posguerra partidista.",
    limitation:
      "Revista de Estudios Sociales, núm. 15. Se basa en un caso clínico de una familia antioqueña; no trata del Llano ni de curanderos rurales.",
  }),
  rTVCguerrillas2023: source({
    title: "La paz con las guerrillas liberales, setenta años después",
    author: "Señal Memoria (RTVC)",
    year: 2023,
    type: "artículo de archivo público",
    url: "https://www.senalmemoria.co/articulos/guerrillas-liberales-la-paz",
    summary:
      "Reconstruye la entrega de armas de las guerrillas liberales de Guadalupe Salcedo a Rojas Pinilla, el 15 de septiembre de 1953 en Monterrey (Casanare), y el regreso de los campesinos a sus veredas. Es el momento que el texto llama «recién llegada la paz a Casanare», cuando Saúl viaja a San Luis de Palenque y al baile de Maporal del Pauto.",
    limitation:
      "Artículo divulgativo del archivo audiovisual de RTVC, sin firma individual. No menciona la Caja Agraria ni el programa de Rehabilitación y Socorro que cita el relato.",
  }),
  caldwellEstudio1936: source({
    title: "Estudio sobre la efectividad antielmítica de la leche del higuerón en el tratamiento de la tricocefalosis, y su efectividad contra la infección de los ascárides",
    author: "Fred C. Caldwell y Elfreda L. Caldwell",
    year: 1936,
    type: "artículo médico",
    url: "https://www.revistamedicahondurena.hn/assets/Uploads/A6-2-1936-14.pdf",
    summary:
      "Ensayo de la División de Sanidad Internacional de la Fundación Rockefeller sobre la leche de higuerón como antihelmíntico contra tricocéfalos y ascárides. Respalda la explicación de Saúl a don Agapito: lo que curó a don Lisandro fue un purgante contra parásitos, no la limpia con brandy.",
    limitation:
      "Revista Médica Hondureña, 1936: estudio médico antiguo, hecho en Alabama y publicado en Honduras, sin relación con el Llano. Se cita sólo para el remedio; no es recomendación de uso.",
  }),
  narinocuentos1988: source({
    title: "Los cuentos de Pascual: mitos y leyendas del piedemonte llanero",
    author: "Alberto Baquero Nariño",
    year: 1988,
    type: "libro (primario)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2818/",
    summary:
      "Cierra el libro con «El domador de brujas», pp. 56-64: las brujas invaden la vereda El Carmen a principios de 1982, Don Tarsicio, un curandero esotérico recién vuelto de España, las espanta sin saberlo, somete a las que vuelven, vence a la bruja mayor en un duelo de coplas en Samaria y en tres días de encierro, y desde finales de 1984 no vuelven; al final Pascual se va volando en una escoba. El preámbulo lo presenta como un cuadro reciente de la realidad veredal.",
    limitation:
      "Reescritura declarada del autor sobre lo que narraba Pascual; el autor aparece como personaje y añade digresiones propias. La ficha del Banco fecha la obra en 1988 y el preámbulo del ejemplar está firmado en enero de 1991.",
  }),
  monteroMitos2014: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 5: Las brujas",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "libro, capítulo (testimonios de campo)",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377938/mitos_portuguesa_c_05_las-brujas.pdf",
    summary:
      "Recoge testimonios de brujas nocturnas en el llano venezolano: un vecino de Biscucuy oye caer algo pesado como una res sobre el techo de cinc y correr por los tejados, y una vecina de Acarigua le grita a un ave enorme que vuelva al otro día por sal. Son los mismos rasgos de las brujas de El Carmen: ruido en el techo y sal contra ellas.",
    limitation:
      "Es venezolana (estado Portuguesa) y de la década de 2000; no conoce el relato. Se usa como paralelo.",
  }),
  baronCuentos19962: source({
    title: "Cuentos, mitos y leyendas del llano, «El brujo de la costa del Pauto»",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro de relatos",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Trae otro curandero llanero de fama, el brujo que ensalma, encierra al enfermo en un cuarto oscuro, quema hierbas y entra en trance para curar a un hacendado. Es el pariente más cercano de Tarsicio en la literatura del llano, pero su conflicto es la curación y no el dominio sobre las brujas.",
    limitation:
      "Obra literaria firmada, de Casanare, sin informantes fichados; no contiene el relato.",
  }),
  pantojaColombia1998: source({
    title: "Colombia país de regiones, tomo 4, cap. 4 «Vida y cultura del llano»",
    author: "CINEP (Fabio Zambrano Pantoja, ed.)",
    year: 1998,
    type: "geografía histórica y social",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2817/",
    summary:
      "Describe el parrando llanero, con arpa, cuatro, maracas, coplas y contrapunteos, que es el escenario de la fiesta de Samaria, y sitúa a los guayupe entre los pueblos del piedemonte del Meta en la conquista, los antepasados cuyas tumbas Tarsicio no quiere perturbar.",
    limitation:
      "Es geografía histórica; no contiene ningún relato ni nombra la vereda.",
  }),
  albinHerivelto: source({
    title: "Herivelto Martins, entrada del Dicionário Cravo Albin da Música Popular Brasileira",
    author: "Instituto Cultural Cravo Albin",
    type: "diccionario de referencia",
    url: "https://dicionariompb.com.br/artista/herivelto-martins/",
    summary:
      "Documenta «Ave Maria no morro», samba-canción de Herivelto Martins grabado por el Trio de Ouro, que fue uno de sus mayores éxitos, se grabó en varias versiones en el exterior y el cardenal Leme quiso prohibir por herética. Es casi con seguridad la canción que el libro llama «Ave María del Mono» y con la que Tarsicio vence a la bruja.",
    limitation:
      "No menciona el relato; la identificación de la canción es inferencia a partir de la descripción del libro.",
  }),
  narinodesarrollo2009: source({
    title: "El desarrollo regional de Colombia: Selva y Llanos, modelos contrapuestos",
    author: "Alberto Baquero Nariño",
    year: 2009,
    type: "artículo de revista universitaria (Orinoquia, Universidad de los Llanos)",
    url: "https://orinoquia.unillanos.edu.co/index.php/orinoquia/article/download/211/659",
    summary:
      "Permite identificar al autor que aparece como personaje en el relato, el que llega a la fiesta de Samaria con su guitarra: la revista lo presenta como escritor e historiador, asesor de planeación de la Universidad de los Llanos.",
    limitation:
      "Es un artículo de economía regional; no habla de brujas ni de este relato.",
  }),
  monteroMitos20142: source({
    title: "Mitos y leyendas del estado Portuguesa: presentación, introducción y aspectos generales",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "libro, capítulo introductorio",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377933/presentacion-introduccion-y-aspectos-generales.pdf",
    summary:
      "Explica que el libro venezolano se levantó con testimonios recientes y en diálogo directo con los entrevistados, lo que permite contrastar el método de Baquero: allí cada testimonio lleva nombre y lugar, aquí hay un solo narrador reescrito por el autor.",
    limitation:
      "Es venezolana y general; no trata de este relato.",
  }),
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II (sección 20, Mitos del Tolima: Misael Devia, «Folclor tolimense», 1962)",
    author: "Eugenia Villa Posse (investigación y compilación); Misael Devia",
    year: 1993,
    type: "antología con texto reproducido de folclorólogo",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "En la entrada «El Mohán» (pp. 145-147) Devia registra que en la Vega de los Padres y en Piedras el Mohán toma la forma de cualquier pescador conocido y se mezcla en las faenas sin que lo reconozcan, hasta que los campesinos se dicen «el mechudo estuvo con nosotros anoche, compadre». Es el paralelo más exacto del engaño del Domínguez: el ser que suplanta al conocido.",
    limitation:
      "Es tolimense y ribereño, no del piedemonte; Devia es folclorólogo que resume y analiza, no transcribe. Se leyó en la reproducción de Villa Posse (IADAP, Quito), no en la Revista Colombiana de Folclor de 1962.",
  }),
  polarMitos2014: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 18 «Los duendes»",
    author: "Carmen Pérez Montero (Fundación Empresas Polar)",
    year: 2014,
    type: "comparativa venezolana: testimonios de campo",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377951/mitos_portuguesa_c_18_los-duendes.pdf",
    summary:
      "Cuenta un duende doméstico en una casa de Acarigua que llamaba a cada miembro de la familia con la voz de otro, de modo que todos acudían a un llamado que nadie había hecho; y otros duendes de monte y quebrada que asustan a quien les deja o les toma algo. Sirve de paralelo para la suplantación de lo familiar.",
    limitation:
      "Es venezolana (llanos de Portuguesa) y los duendes son mayormente domésticos y nocturnos, almas de niños sin bautizo; no hay un duende con nombre propio ni rasgo dominical. Parte del capítulo es experiencia personal de la autora.",
  }),
  eSAPEsquema: source({
    title: "Esquema de Ordenamiento Territorial de Campohermoso, dimensión cultural",
    author: "Municipio de Campohermoso (Boyacá) / repositorio CDIM de la ESAP",
    type: "documento municipal con tradición oral levantada por veredas",
    url: "https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8",
    summary:
      "Entre las leyendas del municipio registra una aparición femenina muy bella que enamora y se roba a los hombres mujeriegos y se ahuyenta con el sonido de un tiple, junto a «Los Mohanes» de las quebradas. Documenta el tiple como defensa contra seres del monte en otro municipio del piedemonte, como el que el preámbulo de Baquero receta contra los duendes.",
    limitation:
      "Campohermoso está en la provincia de Lengupá, Boyacá, no en el Meta; el documento no trae al Domínguez ni fecha las recolecciones ni nombra narradores. La aparición es femenina y no suplanta a nadie.",
  }),
  narinodesarrollo20092: source({
    title: "El desarrollo regional de Colombia: «Selva y Llanos, modelos contrapuestos»",
    author: "Alberto Baquero Nariño",
    year: 2009,
    type: "artículo de reflexión, revista Orinoquia (Universidad de los Llanos)",
    url: "https://orinoquia.unillanos.edu.co/index.php/orinoquia/article/download/211/659",
    summary:
      "Acredita que el autor era «escritor e historiador, asesor de Planeación de la Universidad de los Llanos», lo que explica que el episodio del Domínguez ocurra durante una salida de naturalistas invitados desde esa universidad y que el propio autor aparezca en ella.",
    limitation:
      "Es un texto de economía política regional; no dice una palabra sobre mitos ni sobre el Domínguez. Sólo sirve para identificar al autor. El enlace de descarga devuelve HTML, no PDF.",
  }),
  baronCuentos19963: source({
    title: "Cuentos, mitos y leyendas del llano (copia en el repositorio de la Universidad Nacional)",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro (copia digital)",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/d38bbc0e-4fd1-495c-a678-48e5d7c78bfd/content",
    summary:
      "Copia del mismo libro, sin números de página. Para este texto trae completas las pp. 37-42 y coincide con el PDF de Banrepcultural hasta la burla al salador.",
    limitation:
      "Está incompleta: corta el texto en la p. 42 y pasa directamente a «La Leyenda del silbón». Pierde las pp. 42-49 (cena, espantos, vaquería, paga, arreo y el remate de Saúl). No sirve sola para citar este texto.",
  }),
  uNESCOCantos2017: source({
    title: "Cantos de trabajo de Los Llanos de Colombia y Venezuela",
    author: "UNESCO, Patrimonio Cultural Inmaterial",
    year: 2017,
    type: "expediente de patrimonio inmaterial",
    url: "https://ich.unesco.org/es/USL/cantos-de-trabajo-de-los-llanos-de-colombia-y-venezuela-01285",
    summary:
      "Expediente de la inscripción de 2017 en la Lista de salvaguardia urgente. Describe los cantos a capela de arreo y ordeño como parte del sistema tradicional de cría de ganado, y dice que su vitalidad se ha visto mermada por cambios socioeconómicos, políticos y de ordenación territorial. Es el mismo diagnóstico de pérdida que el texto hace para el trabajo de llano, y documenta el oficio del cabrestero que canta, que Saúl menciona al llegar al corral.",
    limitation:
      "Es un documento institucional sobre los cantos, no sobre este libro. Cubre Colombia y Venezuela en general.",
  }),
  herreraManejo2019: source({
    title: "Manejo de la quema de pastizales de sabana inundable: una mirada del pueblo originario Sáliva en Colombia",
    author: "Alejandro Huertas Herrera, Brigitte Luis Guillermo Baptiste Ballera, Mónica Toro Manríquez y Hugoberto Huertas Ramírez",
    year: 2019,
    type: "artículo académico (Chungara, vol. 51, n.º 1, pp. 167-176)",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=7387596",
    summary:
      "Estudia la quema de pastizales en la sabana inundable de Orocué (Casanare). El resumen sostiene que el fuego mantiene el paisaje de sabana, que la ganadería jesuítica cambió el modo de aplicarlo y que la idea de que toda quema es dañina se ha instalado en el imaginario. Sirve para leer la tensión del texto, donde la primera voz culpa a las quemas y Saúl recuerda con orgullo que los blancos repartían fósforos para quemar los pajonales.",
    limitation:
      "Se consultó la ficha y el resumen de Dialnet; el texto completo está en SciELO Chile, que no respondió a la verificación automática (403). Es sobre el pueblo sáliva, no sobre hatos criollos.",
  }),
  monteroMitos20143: source({
    title: "Mitos y leyendas del estado Portuguesa, capítulo 12: La Bola de Fuego",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "libro de testimonios de campo (Fundación Empresas Polar)",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377945/mitos_portuguesa_c_12_la-bola-de-fuego.pdf",
    summary:
      "Recoge testimonios con nombre de vecinos de Guanarito y Las Matas y los orígenes que se le atribuyen a la bola de fuego, entre ellos el espíritu de una pareja que hizo el amor en Semana Santa. Una testigo la vio precisamente yendo a Guanare en Semana Santa. Es el mejor paralelo para la luz que persigue al compadre Hilarión, que volvía de ver a su querida en vísperas de Semana Santa.",
    limitation:
      "Es venezolana (estado Portuguesa), no casanareña, y es de 2014.",
  }),
  riveravoragine1924: source({
    title: "La vorágine (edición de la Biblioteca Ayacucho)",
    author: "José Eustasio Rivera",
    year: 1924,
    type: "novela",
    url: "http://libreriasdelsur.gob.ve/wp-content/uploads/2023/12/La-voragine-Jose-Eustasio-Rivera.pdf",
    summary:
      "La primera parte transcurre en los hatos de Casanare y termina con el incendio que el narrador prende en la llanura; el prólogo de la edición cuenta que Rivera conoció la región en 1918 por un litigio de ganaderos. Es el antecedente literario más conocido de la sabana casanareña que arde y del mundo de hato que el texto de 1996 añora.",
    limitation:
      "Es novela, no registro; el paralelo es de tema y paisaje. El PDF es de la red estatal venezolana Librerías del Sur y reproduce la edición de Biblioteca Ayacucho. Sólo publica por http.",
  }),
  latamefecto2021: source({
    title: "El efecto negativo de los incendios sobre los pequeños mamíferos de la Orinoquía colombiana",
    author: "Mongabay Latam",
    year: 2021,
    type: "periodismo ambiental sobre investigación",
    url: "https://es.mongabay.com/2021/06/efecto-negativo-de-incendios-sobre-los-mamiferos-colombia/",
    summary:
      "Reporta un estudio hecho entre 2018 y 2020 en la reserva Bojonawi (Puerto Carreño): la sabana rebrota a los pocos días de la quema, pero cuando el fuego se sale de control daña los bosques de galería que rodean los cuerpos de agua y cambia la fauna. Documenta desde fuera el paisaje del marco del texto: orillas sin monte y candela avanzando por un caño.",
    limitation:
      "Es periodismo sobre un estudio en Vichada, no en Casanare, y de 2021; no menciona el libro.",
  }),
  baronCuentos19964: source({
    title: "Cuentos, mitos y leyendas del llano (edición digital paginada, 130 pp.)",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro primario digitalizado",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2797/download",
    summary:
      "Trae «El llano cobra sus cuentas» completo en pp. 81-100: seis páginas de ensayo sobre Támara, jesuitas, plumas de garza y Orocué, y después la historia de Victoriano y Arcadio, los cuatro hierros, la denuncia por abigeato, la clínica y la ruina de los hatos. Su Glosario define «guate», «paisano» y «padrón» (registro de un hierro).",
    limitation:
      "Es obra literaria firmada, sin informante ni fecha de recolección; el autor se presenta como testigo pero no da apellidos. Los datos históricos del preámbulo no llevan referencias verificables salvo las obras que nombra.",
  }),
  republicaCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano: ficha de la Biblioteca Virtual",
    author: "Biblioteca Virtual del Banco de la República",
    year: 1996,
    type: "catálogo bibliográfico institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Ficha del ejemplar: autor Vargas Barón, Getulio, 1933-2000; colección Obras generales; archivo 2817.pdf. Es la puerta de acceso a la edición paginada donde está el relato completo.",
    limitation:
      "Es control bibliográfico: no analiza el relato ni corrobora a sus personajes.",
  }),
  baronCuentos19965: source({
    title: "Cuentos, mitos y leyendas del llano (espejo en el repositorio de la Universidad Nacional, 49 pp.)",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "copia digital del primario",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/d38bbc0e-4fd1-495c-a678-48e5d7c78bfd/content",
    summary:
      "Otra copia digital del mismo libro. De este relato conserva sólo el preámbulo histórico (hasta los levantamientos en apoyo a Túpac Amaru y Galán) y salta a «Las chanzas de don felipe»: sirve para explicar por qué circularon resúmenes sin la trama de la familia.",
    limitation:
      "Está truncada: omite toda la historia de don Victoriano (pp. 86-100 de la edición paginada). No debe usarse para citar este relato.",
  }),
  bibloRedCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano: detalle de contenido",
    author: "BibloRed, Biblioteca Digital de Bogotá",
    year: 1996,
    type: "registro de biblioteca pública",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2092921/",
    summary:
      "Registro de la obra que habla de doce relatos y un glosario que imitan la forma oral y reproducen el tono y el léxico de las conversaciones llaneras, rasgo visible en los diálogos de don Victoriano con su hermano y con sus mensuales.",
    limitation:
      "Descripción catalográfica general de la obra; no comenta este relato.",
  }),
  rodriguezGanaderos2012: source({
    title: "Ganaderos, domadores, copleros y conuqueros: la frontera llanera en La vorágine de José Eustasio Rivera",
    author: "María de las Mercedes Ortiz Rodríguez",
    year: 2012,
    type: "artículo académico (Lingüística y Literatura, Universidad de Antioquia, n.º 61, pp. 39-57)",
    url: "https://www.redalyc.org/pdf/4765/476549333004.pdf",
    summary:
      "Estudia el mundo del hato casanareño en La vorágine: define el hato por número de reses, describe la fundación, la doma, las faenas y los matrimonios por la iglesia de las familias dueñas de hatos. Da el contexto social en que Vargas Barón sitúa a Victoriano y Arcadio.",
    limitation:
      "Se ocupa de la novela de Rivera y no de Vargas Barón; su contexto es de principios del siglo XX.",
  }),
  riveravoragine19242: source({
    title: "La vorágine (primera edición)",
    author: "José Eustasio Rivera",
    year: 1924,
    type: "novela, primera edición digitalizada",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/4309/download",
    summary:
      "La novela que el preámbulo del relato asocia a Orocué, donde Rivera llevó un pleito en 1918 según la ficha de Banrepcultural. Cierra con «¡Los devoró la selva!»: la misma imagen de una naturaleza que se traga lo humano que el relato aplica a los hatos cubiertos por la maraña.",
    limitation:
      "Es paralelo temático y de lugar, no fuente del relato; la identificación de personajes con vecinos de Orocué la hace el propio Vargas citando a José Luis Merizalde, sin comprobación aquí.",
  }),
  shakespeareKing1608: source({
    title: "King Lear",
    author: "William Shakespeare",
    year: 1608,
    type: "drama, texto en Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/1532",
    summary:
      "Un padre reparte en vida sus bienes entre sus hijas («we have divided… our daughters' several dowers») y queda despojado por ellas: es el esquema de los cuatro hierros que Victoriano pone a nombre de esposa e hijos y que después se usan para denunciarlo.",
    limitation:
      "Paralelo estructural señalado aquí; el relato no cita a Shakespeare ni hay prueba de influencia.",
  }),
  balzacFather1835: source({
    title: "Father Goriot (Le Père Goriot)",
    author: "Honoré de Balzac",
    year: 1835,
    type: "novela, traducción inglesa en Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/1237",
    summary:
      "Un comerciante enriquecido lo da todo a dos hijas criadas en el lujo, que dejan de visitarlo y lo abandonan hasta la muerte: comparte con el relato la fortuna hecha a pulso, los hijos educados lejos del trabajo y el padre muerto en soledad.",
    limitation:
      "Paralelo literario europeo, sin relación documentada con el autor; se consultó en traducción inglesa.",
  }),
  llaneracomleyenda2009: source({
    title: "La leyenda del tesoro de Caribabare (de De la tradición y el mito a la literatura llanera, 3.ª ed., Arfo, 2009)",
    author: "Temístocles Perea Pedroza; reproducido por Llanera.com",
    year: 2009,
    type: "libro regional reproducido en portal web (30-01-2010)",
    url: "https://llanera.com/llanos/la-leyenda-del-tesoro-de-caribabare/26675",
    summary:
      "Es el único texto consultable de la leyenda: la expulsión de 1767, el padre Manare en San Salvador del Puerto de Casanare, la excavación de mampostería en las sabanas de Caribabare con peones llaneros, el oro y la plata de Antioquia y el Chocó, el riachuelo desviado, la sombra del religioso en plenilunio y tres finales: guardián, comisión petrolera de 1944 y mapa del guía enloquecido. Cierra citando a Sepúlveda Escobar, Ensayos de historia araucana (1992), p. 124.",
    limitation:
      "Reproducción web de un libro que no se consultó; sin página de Perea; no se sabe qué parte es cita de Sepúlveda. Confianza media-baja.",
  }),
  zuluagaTranscripcion2021: source({
    title: "Transcripción de los bienes secuestrados a los padres jesuitas de los pueblos de Casanare y llevados a la hacienda de Caribabare",
    author: "Julián Galindo Zuluaga",
    year: 2021,
    type: "transcripción de archivo (Quirón. Revista de Estudiantes de Historia, UNAL Medellín, n.º 15, pp. 110-133)",
    url: "https://revistafche.medellin.unal.edu.co/ojs/index.php/quiron/article/view/378",
    summary:
      "Transcribe el testimonio de 1767-1768 (AGN, Colonia, Temporalidades, leg. 7) de los bienes de seis pueblos llevados a Caribabare, «la hacienda de Tame», para su administrador Joseph Daza. Es el destino documentado de los bienes que la leyenda entierra; y en él Manare es un pueblo de misión, de donde no se trasladó una caja «ttan grande y pesada», y la hacienda aparece también escrita «Caribare».",
    limitation:
      "Trabajo de estudiante de pregrado; transcribe un solo legajo. Su certificado TLS no valida por curl sin -k.",
  }),
  gomezResena2020: source({
    title: "Reseña de José Eduardo Rueda Enciso, Campos de Dios y campos del hombre. Actividades económicas y políticas de los jesuitas en el Casanare (Universidad del Rosario, 2018)",
    author: "Ismael Jiménez Gómez",
    year: 2020,
    type: "reseña académica (Estudios de Historia Novohispana, n.º 63)",
    url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-25232020000200157",
    summary:
      "Resume que Caribabare fue la principal hacienda jesuita del Casanare, pionera en ganado vacuno, que abastecía de carne a Santafé y Tunja desde 1749 por concesión del virrey Eslava, y que tras la expulsión de 1767 las haciendas fueron rematadas y vendidas a particulares: el final de archivo frente a la bóveda de la leyenda.",
    limitation:
      "Es la reseña, no el libro; no menciona la leyenda.",
  }),
  plan2015: source({
    title: "Plan Especial de Manejo y Protección del Centro Histórico y Zona de Influencia de Nunchía, Casanare: documento de diagnóstico",
    author: "Municipio de Nunchía (convenio n.º 168 de 2014)",
    year: 2015,
    type: "documento oficial patrimonial con fuentes del AGN",
    url: "https://www.nunchia-casanare.gov.co/MiMunicipio/Documentos%20Patrimonio/Etapa%20I%20Diagnostico%20Centro%20Historico%20Nunch%C3%ADa%20Casanare.pdf",
    summary:
      "Documenta el paso de Caribabare a la Junta de Temporalidades en octubre de 1767, los linderos que el gobernador Domínguez de Tejada no pudo fijar, los hatos de La Yegüera y Tunapuna, su entrega a Joseph Daza y al dominico Joseph Zabala, y el reparto de sus ornamentos entre Nunchía, Chire y el Piñal (pp. 55 y 64 del PDF). En la p. 193 reconoce que esa riqueza generó la leyenda del tesoro.",
    limitation:
      "Diagnóstico técnico de 565 páginas; menciona la leyenda en una línea, sin contarla.",
  }),
  investigacionColombia19982: source({
    title: "Colombia, país de regiones, tomo 4, cap. 4 «Vida y cultura del llano»",
    author: "CINEP (Centro de Investigación y Educación Popular)",
    year: 1998,
    type: "obra de divulgación regional (Santafé de Bogotá, Cinep y Colciencias; Biblioteca Virtual del Banco de la República)",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2817/download",
    summary:
      "Sitúa Caribabare como la principal hacienda jesuita de los Llanos, en las cercanías de Paz de Ariporo, junto a Tocaría, Cravo y Apiay, dentro del circuito de ganados vendidos en Tunja y Santafé (p. 84 del PDF).",
    limitation:
      "Síntesis de divulgación sin aparato; ubica la hacienda en otro punto que Galindo (Tame): la hacienda abarcaba ambos lados.",
  }),
  velandiapapeles2014: source({
    title: "Los papeles de la abundancia. Historia del periodismo agropecuario en Colombia (1800-1850)",
    author: "Juan Carlos Polanía Velandia",
    year: 2014,
    type: "libro académico (Fundación Universitaria Los Libertadores)",
    url: "https://repository.libertadores.edu.co/server/api/core/bitstreams/c0a3a577-a45b-46f7-97ba-adc120998902/content",
    summary:
      "Con base en Rueda y González (2004), da el tamaño de la hacienda que la leyenda imagina rica: 447.700 hectáreas entre Casanare y Arauca y, en el inventario de 1767, 57 esclavos, 16.606 reses y 1.384 équidos; escribe «Caribare» (pp. 49-50).",
    limitation:
      "Obra sobre periodismo agropecuario, de segunda mano; su cifra de reses (16.606) no coincide con la de Galindo y Perea (unas 10.600).",
  }),
  eSAPEsquema2000: source({
    title: "Esquema de Ordenamiento Territorial de Campohermoso, Boyacá, 1998-2000: dimensión cultural, «Los Mohanes»",
    author: "Municipio de Campohermoso (equipo del EOT); repositorio CDIM de la ESAP",
    year: 2000,
    type: "documento oficial municipal",
    url: "https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8",
    summary:
      "Registra en el piedemonte a los mohanes, hombres pequeños cargados de oro que viven en las quebradas y regalan un puñado a quien les lleva aguardiente y tabaco: paralelo de oro guardado por seres del paisaje, que aquí se da y en Caribabare se esconde.",
    limitation:
      "Es Boyacá, no Casanare; no habla de Caribabare. Sólo sostiene la comparación.",
  }),
  narinodesarrollo20093: source({
    title: "El desarrollo regional de Colombia «Selva y Llanos: modelos contrapuestos»",
    author: "Alberto Baquero Nariño",
    year: 2009,
    type: "artículo de revista (Orinoquia, Universidad de los Llanos)",
    url: "https://orinoquia.unillanos.edu.co/index.php/orinoquia/article/download/211/659",
    summary:
      "Acredita quién es el autor del libro —escritor e historiador, asesor de Planeación de la Universidad de los Llanos— y describe la economía campesina que se instaló a lo largo del piedemonte del Meta y Casanare con migraciones del oriente de Cundinamarca y el suroriente de Boyacá, atraídas por vínculos de familia y compadrazgo desde 1830. Es el marco de la trayectoria del narrador, nacido en Quetame y asentado en una vereda de Villavicencio.",
    limitation:
      "Artículo de economía regional sin una línea sobre mitos ni sobre este espanto. Sirve para situar al autor y el poblamiento del piedemonte, no el relato.",
  }),
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor",
    author: "Javier Ocampo López",
    year: 1977,
    type: "libro (Banrepcultural)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2782/",
    summary:
      "En el capítulo «Mitos, leyendas y creencias populares en Boyacá» (p. 123) describe a los duendes como seres traviesos que, entre otras cosas, arrojan lluvias de piedras sobre los techos de las casas donde quieren cebarse. Es el paralelo andino documentado de las pedradas sin mano visible que el Tirapiedra lleva a los caminos del piedemonte.",
    limitation:
      "Es folclor de Boyacá, no del Meta, y los duendes que describe atacan casas, no caminantes, ni tienen historia personal. Obra de síntesis de un historiador, sin narradores identificados.",
  }),
  molanoAproximacion1989: source({
    title: "Aproximación al proceso de colonización de la región del Ariari-Güejar-Guayabero",
    author: "Alfredo Molano",
    year: 1989,
    type: "capítulo de libro (repositorio de la Universidad Nacional)",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/4aa642b8-e6e9-430d-87a6-db0a92b3d9f1/content",
    summary:
      "Documenta que la colonización campesina del piedemonte del Meta arrancó con gentes de Cáqueza y Quetame, expulsadas por el minifundio, y que con la carretera Bogotá-Villavicencio a esos contingentes se sumaron colonos de Cundinamarca, Boyacá, Santander, Tolima y Huila. Explica por qué el narrador, un campesino de Quetame, trae al Meta un saber de camino aprendido en su pueblo, como él mismo dice en el relato.",
    limitation:
      "Historia de la colonización del Ariari, más al sur de Villavicencio, sin referencia a espantos. El PDF corresponde al volumen «La Macarena: reserva biológica de la humanidad, territorio de conflicto» (Universidad Nacional); el año de edición se toma de ese volumen y conviene cotejarlo.",
  }),
  riosinteligencia2016: source({
    title: "La inteligencia en Colombia: «De la oscuridad a la institucionalidad»",
    author: "Herbert Harbey Romero Ríos",
    year: 2016,
    type: "trabajo de especialización (Universidad Militar Nueva Granada)",
    url: "https://repository.umng.edu.co/bitstream/handle/10654/14196/Romero%20Rios%20Herbert%20Harbey%202016.pdf;sequence=3",
    summary:
      "Reconstruye la creación del SIC por el Decreto 2872 de 1953, bajo el gobierno de Rojas Pinilla, y su sustitución por el DAS con el Decreto 1717 de 1960. Permite contrastar la institución real con el «tenebroso Servicio de Inteligencia Colombiana» que el relato hace blanco del último golpe del estudiante, y precisa que el SIC no existía en 1948.",
    limitation:
      "Trabajo de grado descriptivo, desde la perspectiva de la seguridad del Estado; no trata la represión que el relato atribuye al SIC ni menciona el piedemonte.",
  }),
  chamberlayneLithobolia1698: source({
    title: "Lithobolia: or, The Stone-Throwing Devil",
    author: "Richard Chamberlayne",
    year: 1698,
    type: "impreso antiguo (Internet Archive)",
    url: "https://archive.org/details/per_witchcraft-in-europe-and-america_lithobolia-or-the-stone_chamberlayne-richard-f_1698_210",
    summary:
      "Relato impreso en Londres en 1698 de las piedras, ladrillos y cascotes que una mano invisible lanzó durante un cuarto de año contra la casa del colono George Walton en Great Island, provincia de New Hampshire, atribuidas a una vecina acusada de brujería. Es un paralelo temprano, y bien documentado, de la lluvia de piedras sin lanzador visible.",
    limitation:
      "Tradición anglosajona sin relación genética con el piedemonte colombiano; la semejanza es de motivo. El texto se consultó en la copia digitalizada con OCR de la serie «Witchcraft in Europe and America» de Internet Archive, con ortografía de época.",
  }),
  rTVCguerrillas20232: source({
    title: "La paz con las guerrillas liberales, 70 años después",
    author: "Señal Memoria (RTVC)",
    year: 2023,
    type: "artículo de archivo audiovisual público",
    url: "https://www.senalmemoria.co/articulos/guerrillas-liberales-la-paz",
    summary:
      "Explica que el asesinato de Gaitán el 9 de abril de 1948 desató la violencia bipartidista que se extendió por el país, con guerrillas liberales en los Llanos Orientales, hasta la paz de Rojas Pinilla con Guadalupe Salcedo en septiembre de 1953. Es el marco de las «épocas de la violencia (1948-1960)» que el relato usa para situar al exjefe del SIC.",
    limitation:
      "Texto de divulgación del archivo de RTVC, sin aparato crítico, centrado en los Llanos y no en la policía política; la fecha de publicación se deduce del aniversario que conmemora.",
  }),
  monteroMitos20144: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 10: «El familiar o los pactos con el diablo»",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "investigación testimonial de campo (Fundación Empresas Polar, Caracas)",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377943/mitos_portuguesa_c_10_el-familiar.pdf",
    summary:
      "Recoge testimonios con nombre de dos toros «familiares» del llano venezolano que anticipan cada gesto de Patorreal: el toro negro que Lucifer mandó a un ganadero del fundo El Chaparral, en Turén, que recogía todo el ganado suelto de la sabana hasta que no cabía en los corrales y se fue con la manada cuando llegó el cura; y el toro blanco de un hato de Sabana Dulce, hacia 1910, que nadie lograba enlazar y que corneó al caporal hasta matarlo, contado por un vecino que lo oyó de su abuelo.",
    limitation:
      "Es Portuguesa, Venezuela, no Casanare: documenta el lado venezolano de un repertorio compartido y no autoriza a trasladar sus nombres ni lugares al cuento colombiano. En estos testimonios el toro sirve al que pactó con el diablo; en Vargas Barón sirve al muerto. La bibliografía del ciclo lo numeraba como capítulo 11: el archivo es el 10.",
  }),
  redaccionsantuario1998: source({
    title: "El santuario de los llaneros",
    author: "El Tiempo (redacción)",
    year: 1998,
    type: "prensa nacional fechada (15 de mayo de 1998)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-806939",
    summary:
      "Documenta la fiesta que organiza el tramo central del cuento: la imagen de la Virgen de Manare, traída por jesuitas, el rescate del rostro de la imagen tras la destrucción del pueblo en la Violencia y su traslado a Paz de Ariporo en 1953, y la fiesta de cada 6 de enero, adonde llegan llaneros de lugares remotos y en la que se celebran matrimonios y bautizos. Coincide con lo que el relato dice de la romería de Manare, con sus bodas y bautizos del seis de enero.",
    limitation:
      "Es una crónica de prensa sin aparato. No dice nada de billetes sobre el manto ni de hatos comprados por la Iglesia, que son afirmaciones del cuento y siguen sin verificar.",
  }),
  gomezResena20202: source({
    title: "Reseña de José Eduardo Rueda Enciso, «Campos de Dios y campos del hombre. Actividades económicas y políticas de los jesuitas en el Casanare» (2018)",
    author: "Ismael Jiménez Gómez",
    year: 2020,
    type: "reseña académica (Estudios de Historia Novohispana, n.º 63)",
    url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-25232020000200157",
    summary:
      "Resume la historia de las haciendas ganaderas de las órdenes religiosas en Casanare —con Caribabare como la principal, sus mayordomos y caporales, y su remate a particulares tras la expulsión jesuita—, que es el antecedente histórico de la acusación que el cuento pone en boca del narrador: que con el dinero de la Virgen de Manare «la comunidad religiosa compró» hatos en la región.",
    limitation:
      "Es una reseña de un libro que no está en acceso abierto, y trata la época colonial; no confirma nada sobre las compras del siglo XX que afirma el cuento.",
  }),
  monteroMitos20145: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 16: «Las ánimas del Purgatorio»",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "investigación testimonial de campo (Fundación Empresas Polar, Caracas)",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377949/mitos_portuguesa_c_16_las-animas-del-purgatorio.pdf",
    summary:
      "Describe la creencia llanera en las ánimas de los difuntos: en Portuguesa se les reza los lunes, a veces a «un difunto con quien se hubiese soñado»; salen a las doce de la noche a recorrer «los lugares que ellas habitaron en vida» y vuelven en sueños a reclamar lo que se les debe. Es el marco del catolicismo popular en que se entiende el cuento: el toro aparece a medianoche junto a la tumba, y el alma del padre se revela al hijo en un sueño.",
    limitation:
      "Es venezolana y no trae ningún caso de alma alojada en un animal; el parentesco con el cuento es de creencia general, no de motivo. Se cita sólo para el contexto religioso.",
  }),
  torresSecundaria2012: source({
    title: "Secundaria Activa. Lenguaje grado séptimo (cap. 3, tema 6: «La bola de fuego», primera y segunda versión)",
    author: "Ministerio de Educación Nacional; textos tomados de Silvia Aponte de Torres, Cuatro caballos del tiempo (GM Editores, 1998)",
    year: 2012,
    type: "reproducción escolar de obra literaria regional",
    url: "https://contenidos.mineducacion.gov.co/ntg/men/archivos/Referentes_Calidad/Modelos_Flexibles/Secundaria_Activa/Guias_del_estudiante/Lenguaje/LG_Grado07.pdf",
    summary:
      "Reproduce en las pp. 55-56 las dos biografías de la Bola de Fuego que fijan el mito: la madre que mata a su hijo con un hacha y cuyo corazón rueda en llamas y late, contada en primera persona por José Ortiz, del Casanare, con el consejo de maldecirla, no rezarle y tirarle la soga; y los compadres que se aman en un rancho de la sabana, fulminados por una centella en una tempestad seca.",
    limitation:
      "Es una guía escolar que copia el texto para un ejercicio de comparación; el crédito a Aponte de Torres va al pie de la segunda versión y no aclara si cubre la primera. El libro de 1998 no se consultó.",
  }),
  eSAPEsquema20002: source({
    title: "Esquema de Ordenamiento Territorial de Campohermoso, Boyacá, 1998-2000: «Campohermoso a través del tiempo», dimensión cultural",
    author: "Municipio de Campohermoso (equipo del EOT); repositorio CDIM de la ESAP",
    year: 2000,
    type: "documento oficial municipal levantado con cartografía social",
    url: "https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8",
    summary:
      "En la «Leyenda de la Bola de Fuego» (p. 51 del PDF) la describe como un punto pequeño de candela que se acerca y crece hasta volverse una gran bola, y da el látigo como defensa para que no se acerque ni queme. Dice que es una leyenda de los Llanos Orientales incorporada al piedemonte: fecha y localiza el préstamo.",
    limitation:
      "Es Boyacá (provincia de Lengupá), no la Orinoquía; tres oraciones sin informante ni vereda.",
  }),
  monteroMitos20146: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 12 «La Bola de Fuego»",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "investigación testimonial de campo (Fundación Empresas Polar, Caracas)",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377945/mitos_portuguesa_c_12_la-bola-de-fuego.pdf",
    summary:
      "La orilla venezolana, pp. 80-83: una lista de orígenes (obispo pecador, hijo que maldijo a su madre, dos comadres que pelearon un jueves santo, judío errante, tirano Aguirre, pareja que se amó en Semana Santa) y seis testimonios con nombre y lugar: Eduardo Daza, Mercedes de Mena, Matilde Torres, José «Cacho» Linares, Juan del Cerro Tovar y Francisco «Pancho» Pérez, entre ellos la prohibición de rezarle y el insulto que la ahuyenta.",
    limitation:
      "Es Portuguesa y Cojedes, Venezuela; sus nombres y lugares no se trasladan al mito colombiano. Se usa para versiones y similitudes.",
  }),
  culturaCandileja: source({
    title: "La Candileja. Leyenda de los llanos orientales",
    author: "Secretaría de Cultura, Recreación y Deporte de Bogotá",
    type: "página institucional",
    url: "https://ant.culturarecreacionydeporte.gov.co/en/node/1127",
    summary:
      "Describe la Candileja como leyenda de los Llanos Orientales: una bola ardiente de tres antorchas que persigue a borrachos, infieles y padres irresponsables. Es el testimonio de la otra lectura de la Candileja, frente a la rueda con una luz de Baquero y a su equivalencia con la Bola de Fuego.",
    limitation:
      "Página institucional sin autor, fecha ni fuente declarada; se usa sólo para mostrar la ambigüedad del nombre.",
  }),
  investigacionMitos19932: source({
    title: "Mitos y leyendas de Colombia, vol. II, sección 17 «Varias regiones»: Enrique Otero D'Costa, «No hay deuda que no se pague…»",
    author: "Eugenia Villa Posse (investigación y compilación); texto de Enrique Otero D'Costa",
    year: 1993,
    type: "antología (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=53",
    summary:
      "El cuento andino del perulero Damián Vásquez Montiel, que pacta con el Demonio, termina con una mula que se aleja echando fuego «cual si fuera una gran bola de fuego»: paralelo de la imagen del condenado convertido en fuego errante fuera del llano.",
    limitation:
      "Es un relato de autor de otra región y otro ciclo; la bola de fuego aparece como imagen, no como espanto con nombre.",
  }),
  monteroMitos20147: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 28: La Sayona",
    author: "Carmen Pérez Montero",
    year: 2014,
    type: "libro, capítulo (testimonios de campo)",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377961/mitos_portuguesa_c_28_la-sayona.pdf",
    summary:
      "Recoge testimonios con nombre sobre la Sayona, que sólo asusta a hombres infieles, parranderos y enamorados que andan de noche. Antonio Angulo cuenta que en Los Palmares una mujer muy bonita se les montaba a los choferes en los carros, que sólo él la veía transformarse y que la quebrada creció y se llevó el vehículo: es el paralelo más cercano a la pasajera de El Carmen.",
    limitation:
      "Es venezolana (estado Portuguesa) y la figura tiene otro nombre y otro origen, la mujer celosa que mató al marido; se usa sólo como paralelo.",
  }),
  veraResena2006: source({
    title: "Reseña de José Manuel Pedrosa, La autoestopista fantasma y otras leyendas urbanas españolas (Madrid, Páginas de Espuma, 2004)",
    author: "Claudia Carranza Vera",
    year: 2006,
    type: "reseña académica (Revista de Literaturas Populares, UNAM, VI-2, pp. 430-434)",
    url: "http://rlp.culturaspopulares.org/textcit.php?textdisplay=382",
    summary:
      "Reseña la recopilación de leyendas urbanas españolas cuyo título nombra el motivo de la mujer que sube de noche a un vehículo y se esfuma, y explica que el adjetivo «urbana» engaña porque los sucesos ocurren igual en el campo, como ocurre en el camino rural de El Carmen.",
    limitation:
      "Es una reseña del libro de Pedrosa, no el libro; trata material español y no menciona el relato colombiano. La revista sirve la página por http. Sólo publica por http.",
  }),
  restrepoaccidente: source({
    title: "El accidente crotálico en Colombia (mordedura por serpiente de cascabel)",
    author: "Héctor Charry Restrepo",
    type: "documento técnico",
    url: "https://www.probiol.com/documents/Accidentes_por_serpientes_de_cascabel_en_Colombia.pdf",
    summary:
      "Describe la cascabel colombiana (Crotalus durissus) y su distribución natural en las sabanas del Meta, Casanare y Vichada, la gravedad de su veneno y la creencia popular en su sangre y su carne como remedio, que ha diezmado la especie en los llanos. Sostiene lo que el cuento da por sentado: que en la sabana casanareña hay «tantas» cascabeles y que una mordida mata a un perro en minutos.",
    limitation:
      "Documento de divulgación de un herpetólogo, sin fecha ni editor; no trata el cuento. Dice que la especie no habita el piedemonte, lo que no permite ubicar con certeza la Aguascalientes del cuento.",
  }),
  historicalegado: source({
    title: "El legado de Guadalupe Salcedo y Dumar Aljure: resistencia y lucha en los Llanos Orientales",
    author: "Centro Nacional de Memoria Histórica",
    type: "página institucional",
    url: "https://centrodememoriahistorica.gov.co/el-legado-de-guadalupe-salcedo-y-dumar-aljure-resistencia-y-lucha-en-los-llanos-orientales/",
    summary:
      "Sitúa a las guerrillas liberales del Llano de Guadalupe Salcedo, su desmovilización en 1953 y el asesinato de Salcedo en 1957: el conflicto que el cuento llama «la guerra guadalupana» y que usa para fechar la niñez de Saúl «pocos años después».",
    limitation:
      "Texto institucional de memoria histórica, sin fecha visible; no menciona el cuento ni el nombre «guerra guadalupana».",
  }),
  memoriaGuadalupe: source({
    title: "Guadalupe Salcedo y la historia de los incumplimientos a la paz",
    author: "Centro de Memoria, Paz y Reconciliación de Bogotá",
    type: "página institucional",
    url: "http://centromemoria.gov.co/guadalupe-salcedo-y-la-historia-de-los-incumplimientos-a-la-paz/",
    summary:
      "Reconstruye el origen de las guerrillas del Llano tras el 9 de abril de 1948, las Leyes del Llano de 1952 y 1953 y la entrega de armas de 1953 ante Rojas Pinilla. Precisa el marco temporal de «la guerra guadalupana» que abre el recuerdo de Saúl.",
    limitation:
      "Sólo publica por http y sin fecha visible. Enfoque en la paz y sus incumplimientos; no trata folclor ni el cuento.",
  }),
  ajmadConejo2019: source({
    title: "De Tío Conejo a Condorito: la familia latinoamericana del pícaro",
    author: "Diego Rojas Ajmad",
    year: 2019,
    type: "prensa (columna)",
    url: "https://correodelcaroni.com/opinion/de-tio-conejo-a-condorito-la-familia-latinoamericana-del-picaro/",
    summary:
      "Explica que el pícaro de origen hispánico se llama Pedro Rimales en Venezuela y Pedro Urdemalas en otros países, y rastrea su origen hasta El sutil cordobés Pedro de Urdemales y el refranero de Correas. Sostiene la identificación del Pedro Rimalas que los peones de la finca cuentan de noche en el cuento, y la filiación picaresca de Saúl.",
    limitation:
      "Columna de opinión venezolana (Correo del Caroní, 18 de mayo de 2019), sin aparato académico; no menciona el Llano colombiano ni el cuento.",
  }),
  manuelEnxemplo1335: source({
    title: "Enxemplo VII: De lo que contesció a una mujer quel dician doña Truhana, en El conde Lucanor",
    author: "Don Juan Manuel",
    year: 1335,
    type: "texto clásico (edición digital)",
    url: "https://www.gutenberg.org/files/65738/65738-h/65738-h.htm",
    summary:
      "Patronio aconseja atenerse a las cosas ciertas y no a las «vanas fiuzas»: doña Truhana, pobre, va al mercado con una olla de miel en la cabeza y se imagina huevos, gallinas, ovejas, riqueza y bodas de sus hijos, hasta que la olla se le rompe. Es el antecedente castellano más antiguo del cálculo de ganancias que se come el presente, que en el cuento llanero consume a los hijos.",
    limitation:
      "Edición de Project Gutenberg de una obra de 1331-1335, con notas de su editor. En el exemplo lo que se pierde es la mercancía, no una vida; la relación con el Llano es funcional, no de influencia comprobada.",
  }),
  samaniegolechera1781: source({
    title: "La lechera, en Fábulas de Samaniego",
    author: "Félix María de Samaniego",
    year: 1781,
    type: "texto clásico (edición digital)",
    url: "https://www.gutenberg.org/files/55206/55206-h/55206-h.htm",
    summary:
      "La lechera camino del mercado planea vender la leche, comprar huevos, criar cien pollos, cambiarlos por un cochino y luego por una vaca y un ternero, y todo se pierde al caer el cántaro. Es la forma escolar hispánica del motivo que el cuento de Saúl invierte: aquí la riqueza llega y lo que se pierde mientras se planea es la comida de los hijos.",
    limitation:
      "Edición anotada en Project Gutenberg; fábula ilustrada del siglo XVIII (año de la primera parte como convención). No hay constancia de que el autor la tuviera presente.",
  }),
  moreMetamorphoses1922: source({
    title: "Metamorphoses, book 11, lines 85-145 (Bacchus and Midas)",
    author: "Ovidio (trad. Brookes More)",
    year: 1922,
    type: "texto clásico (traducción)",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D11%3Acard%3D85",
    summary:
      "Midas pide a Baco que todo lo que toque se vuelva oro y descubre que ya no puede comer ni beber. Es la figura clásica del oro que no alimenta, que en el cuento llanero toma la forma de unas morrocotas vendidas y consignadas mientras los niños mueren de hambre.",
    limitation:
      "Traducción inglesa en verso libre de 1922, alojada en Perseus (Tufts). Paralelo temático, sin relación directa con el relato.",
  }),
  ramirezindios2020: source({
    title: "Del oro de los indios a los entierros de los viejos",
    author: "Anderson Jaimes Ramírez",
    year: 2020,
    type: "artículo académico",
    url: "https://asociacionlatinoamericanadeantropologia.net/revistas/index.php/plural/article/download/127/93/212",
    summary:
      "Estudia en el Táchira la práctica de los entierros: ganancias en monedas de oro guardadas en botijas dentro de paredes, patios y solares, y botijas halladas por accidente al demoler paredes antiguas. Recoge el deseo de «encontrarse un entierro para acomodarse la vida». Es el mismo hallazgo que hace el marido al tumbar la tapia pisada.",
    limitation:
      "Plural. Antropologías desde América Latina y el Caribe, año 3, núm. 5. Es un estudio venezolano (Táchira), fronterizo con Colombia pero no llanero; no menciona este cuento.",
  }),
  ekmanTesoros2006: source({
    title: "Tesoros y entierros: mitos y rituales de los cazadores de botijas de Santa Cruz de Mora, estado Mérida",
    author: "Chjalmar Ekman y Francisco Chacón",
    year: 2006,
    type: "artículo académico",
    url: "https://www.redalyc.org/pdf/712/71206804.pdf",
    summary:
      "Etnografía de la «cacería de botijas»: tesoros de monedas escondidos por antiguos dueños y la creencia de que quien los saca sin cumplir sus condiciones recibe un castigo, la ruina, la enfermedad o la muerte propia o de sus familiares. Da el marco de creencia en que el hallazgo de las morrocotas acaba en la muerte de los hijos.",
    limitation:
      "Boletín Antropológico (Universidad de Los Andes, Mérida), vol. 24, núm. 68. Caso andino venezolano; el cuento llanero no menciona espíritus ni condiciones del dueño del tesoro.",
  }),
  anonimoVida1554: source({
    title: "Vida de Lazarillo de Tormes y de sus fortunas y adversidades",
    author: "Anónimo",
    year: 1554,
    type: "novela picaresca, texto en Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/320",
    summary:
      "En el primer tratado el ciego burla a Lázaro contra el toro de piedra y Lázaro le devuelve la burla haciéndolo saltar contra un poste («¿Cómo, y olistes la longaniza y no el poste?»): es el modelo hispánico del burlador burlado que remata este relato.",
    limitation:
      "Paralelo de motivo, sin influencia documentada sobre el autor.",
  }),
  saavedraPedro1615: source({
    title: "Pedro de Urdemalas, en Novelas y teatro",
    author: "Miguel de Cervantes Saavedra",
    year: 1615,
    type: "comedia, texto en Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/15115",
    summary:
      "La comedia de Cervantes sobre Pedro de Urdemalas, el pícaro burlador del folclor hispánico. Sirve para contrastar: Pedro es pobre y engaña a los poderosos, don Felipe es hacendado y sus burlas caen sobre forasteros más débiles.",
    limitation:
      "Obra española del Siglo de Oro; el parentesco con don Felipe es tipológico.",
  }),
  thompsonMotifindex1958: source({
    title: "Motif-index of folk-literature, capítulo K (Deceptions), K1600-K1699 «Deceiver falls into own trap»",
    author: "Stith Thompson",
    year: 1958,
    type: "índice de motivos folclóricos, edición digital de Ruthenia",
    url: "https://www.ruthenia.ru/folklore/thompson/k.htm",
    summary:
      "Cataloga como K1600 el motivo del engañador que cae en su propia trampa, el esquema del remate en que don Felipe, burlado a su vez por el revólver del narrador, declara que todo era chanza.",
    limitation:
      "Catálogo internacional de motivos; no registra este relato.",
  }),
  llanoCosiaca2023: source({
    title: "Cosiaca y Pedro Rimales",
    author: "Albeiro Valencia Llano",
    year: 2023,
    type: "artículo de prensa regional (El Diario, Pereira)",
    url: "https://www.eldiario.com.co/seccion-d/cosiaca-y-pedro-rimales/",
    summary:
      "El historiador de la Universidad de Caldas explica que Pedro Rimales viene del Pedro de Urdemalas del folclor español del Siglo de Oro y que en Colombia se hizo pícaro de los cuenteros, sobre todo en Antioquia, recogido por Agustín Jaramillo Londoño en «Testamento del paisa».",
    limitation:
      "Habla de la tradición antioqueña, no de la llanera; es divulgación de prensa.",
  }),
  edGrateful2014: source({
    title: "The Grateful Animals and the Ungrateful Man: Fables of Aarne-Thompson-Uther Type 160",
    author: "D. L. Ashliman (ed.)",
    year: 2014,
    type: "antología académica en línea",
    url: "https://sites.pitt.edu/~dash/type0160.html",
    summary:
      "Reúne los textos del tipo 160. En el Panchatantra un brahmán saca del foso a un tigre, un mono, una serpiente y un orfebre; el tigre le da joyas de un príncipe que mató, y la serpiente muerde a la reina, que sólo sana con el toque del inocente. En el Kalila y Dimna el viajero saca a un mono, una serpiente, un tigre y un orfebre; el tigre mata a la hija del rey y la serpiente pica al hijo del rey y le da hojas como antídoto. Permite ver que la fábula de Saúl combina ambas ramas.",
    limitation:
      "Traducciones inglesas antiguas (Benfey, Knatchbull) editadas por un folclorista de la Universidad de Pittsburgh; no incluye el Calila e Dimna castellano de 1251 ni ninguna variante americana.",
  }),
  miguezCuentos2016: source({
    title: "Cuentos populares y sociedad en los oasis del Valle Nuevo (Egipto)",
    author: "Celeste Seoane Míguez",
    year: 2016,
    type: "tesis doctoral",
    url: "https://repositorio.uam.es/server/api/core/bitstreams/ab8981e7-bcda-4862-bfc2-a027d321ec08/content",
    summary:
      "En el tomo I, pp. 163-164, estudia una variante oral egipcia de «Los animales agradecidos y el hombre desagradecido» (tipo 160, con un joyero delator) y traza su camino: leyenda budista, Panchatantra, traducción árabe de Calila e Dimna y llegada a la península ibérica. Recuerda que en el Panchatantra la serpiente muerde a la reina y que el cuento transmite que para el ingrato no hay redención.",
    limitation:
      "Tesis de la Universidad Autónoma de Madrid sobre cuentos árabes de Egipto; no conoce ninguna versión colombiana y trata el tipo sólo como contexto comparativo.",
  }),
  higinoFabulae: source({
    title: "Fabulae, 130: Icarius et Erigone",
    author: "Gayo Julio Higino",
    type: "texto clásico (latín)",
    url: "https://www.thelatinlibrary.com/hyginus/hyginus5.shtml",
    summary:
      "Icario, muerto por pastores borrachos, queda insepulto; su perra Mera, aullando, lleva a Erígone hasta el cadáver; por voluntad de los dioses pasan a las estrellas y la perra se vuelve la Canícula. Es el paralelo más cercano del perro que guía a los trabajadores hasta Vicente y del lucero pequeño junto al grande.",
    limitation:
      "Texto latino sin aparato crítico en The Latin Library; datación tradicional del siglo I d. C. (año 0 como convención). Ninguna relación de influencia con el Llano: es un paralelo funcional.",
  }),
  nipponcomHachiko2023: source({
    title: "Hachikō, the Faithful Dog",
    author: "Nippon.com",
    year: 2023,
    type: "artículo divulgativo",
    url: "https://www.nippon.com/en/japan-glances/jg00137/",
    summary:
      "Reconstruye el caso de Hachi: tras la muerte súbita del profesor Hidesaburō Ueno en mayo de 1925, el perro se negó a comer tres días y durante años volvió cada mañana y cada tarde a esperarlo a la estación de Shibuya. Es el caso documentado más parecido a las visitas diarias de Encuentro a la tumba y a sus días sin comer ni beber.",
    limitation:
      "Artículo divulgativo de una plataforma japonesa de difusión; es un caso histórico japonés sin relación con el relato, que sólo sirve como comparación.",
  }),
  caroNoticias1975: source({
    title: "Noticias Culturales n.º 179 (El Cotomachaco y El Bufeo, Leticia)",
    author: "Instituto Caro y Cuervo",
    year: 1975,
    type: "revista (registro de campo)",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf",
    summary:
      "Publica testimonios de informantes de Leticia sobre el bufeo o boto, que según una de ellas «se aparece en forma del enamorao» y se lleva a la gente al agua. Es el registro de campo colombiano del delfín como amante, el motivo que el relato de Vargas invierte: allí el delfín seduce en forma humana; aquí dos humanos enamorados engendran delfines.",
    limitation:
      "Es Amazonía (Leticia), no Orinoquía, y habla del bufeo rosado, no de delfines dorados. Sirve como paralelo, no como fuente del relato.",
  }),
  carobufeo: source({
    title: "El bufeo: muestra de literatura oral en Leticia",
    author: "Instituto Caro y Cuervo, Portal de lenguas y literaturas de Colombia",
    type: "página institucional",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-bufeo-muestra-de-literatura-oral-en-leticia/",
    summary:
      "Presenta la muestra de María Luisa Rodríguez de Montes y resume la leyenda del Hombre Bufeo, el delfín rosado que de noche se transforma en hombre, seduce a las mujeres y se las lleva a su reino acuático. Sostiene el paralelo de «similitudes» con el relato de Vargas.",
    limitation:
      "Es la página de presentación del libro de 1981, no el libro: la muestra completa no está en abierto. Ámbito amazónico.",
  }),
  correaAnotacoes2020: source({
    title: "Anotações sobre a lenda da Cobra Norato",
    author: "Paulo Maués Corrêa",
    year: 2020,
    type: "artículo académico",
    url: "https://periodicos.uepa.br/index.php/sentidos/article/download/3673/1917/13707",
    summary:
      "Recoge, a partir de Câmara Cascudo, que la madre de Norato habría sido embarazada por el boto, el delfín seductor de los ríos amazónicos: el delfín como origen de un linaje acuático, paralelo del remate de Vargas, donde los delfines dorados nacen de un amor humano.",
    limitation:
      "Tradición amazónica brasileña, en portugués; no tiene relación documentada con el Llano ni con este libro.",
  }),
  lguerra1998: source({
    title: "La guerra de exterminio contra los grupos indígenas cazadores-recolectores de los llanos orientales (siglos XIX y XX)",
    author: "Augusto J. Gómez L.",
    year: 1998,
    type: "artículo académico",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/16710",
    summary:
      "Documenta las cacerías de indígenas de la familia guahibo por vaqueros y hacendados de los llanos, y abre con la masacre del hato La Rubiera (26 de diciembre de 1967), donde vaqueros invitaron a comer a un grupo cuiba y mataron a dieciséis. Da contexto histórico a la «expedición punitiva» contra los guahíbos que el relato pone en boca de los hacendados, y a la coincidencia del nombre del hato.",
    limitation:
      "Historia documental, no folclor: no menciona a Vargas ni su cuento. La relación entre el hato del cuento y el de 1967 es una coincidencia de nombre que el libro no establece; no se afirma en el texto publicado. Se leyó la página del artículo y su resumen.",
  }),
  lozanoreconstruccion2013: source({
    title: "La reconstrucción del espejo: 1969 ¿el indígena como persona?",
    author: "Luisa Fernanda García Lozano",
    year: 2013,
    type: "artículo académico",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-182X2013000100005",
    summary:
      "Reconstruye el juicio por la masacre de La Rubiera (Prolegómenos, vol. 16, n.º 31) y cómo la prensa y el derecho de 1969-1970 discutieron si el indígena tenía personalidad jurídica: el trasfondo real del desprecio que el hacendado del cuento expresa al preferir ver muerta a su hija antes que tocada por «un salvaje».",
    limitation:
      "SciELO Colombia sólo publica por http. Estudio jurídico sobre un hecho de 1967 en Arauca; no trata el cuento ni la época colonial en que se sitúa.",
  }),
  corporinoquiatoninas2019: source({
    title: "Las toninas de Arauca, Casanare y Vichada",
    author: "Corporinoquia y Fundación Omacha",
    year: 2019,
    type: "cartilla institucional",
    url: "https://www.omacha.org/descargas/2019/Cartilla-Las-toninas-Arauca-Casanare-Vichada-Corporinoquia.pdf",
    summary:
      "Describe la tonina (Inia geoffrensis) de los ríos Arauca, Meta y Orinoco, que nace grisácea y puede volverse rosada con el tiempo: los delfines reales de los ríos donde transcurre el relato, frente al color dorado que el cuento inventa.",
    limitation:
      "Material de divulgación ambiental; no recoge leyendas ni menciona el cuento.",
  }),
  corredormemoria2018: source({
    title: "La memoria biocultural de la etnia sáliba, resguardo El Suspiro, municipio de Orocué, Casanare",
    author: "Cindy Pamela Quintero Corredor y Juan José Monje Carvajal",
    year: 2018,
    type: "artículo académico",
    url: "https://revistasojs.ucaldas.edu.co/index.php/lunazul/article/view/3069",
    summary:
      "Investigación participativa con los sáliba de Orocué, a orillas del Meta, sobre su espiritualidad, su producción y la erosión de su memoria por el contacto con la sociedad no indígena. Sirve para situar al pueblo real al que el cuento adscribe a José Amalio, y para medir la distancia entre ese pueblo y el personaje.",
    limitation:
      "No trata el cuento ni ningún relato de delfines; se consultó la página del artículo (Luna Azul, n.º 47) y su resumen. El personaje de Vargas no debe leerse como testimonio sáliba.",
  }),
  radioParatebueno2024: source({
    title: "Paratebueno (provincia de Medina)",
    author: "El Dorado Radio, Gobernación de Cundinamarca",
    year: 2024,
    type: "página institucional departamental",
    url: "https://eldoradoradio.cundinamarca.gov.co/provincias/medina/paratebueno/",
    summary:
      "Dice que Paratebueno nació como caserío en la región de Sabana Brava, adonde llegaron refugiados de la violencia; que su nombre viene de una finca donada por Álvaro Parra, y que se separó de Medina en 1981 y fue creado municipio en 1982. Confirma que el Álvaro Parra del relato, jefe liberal de la resistencia, es el mismo que fundó el pueblo al que van los viajeros.",
    limitation:
      "Reseña institucional breve, sin autor ni fecha visibles y sin fuentes; el año corresponde a la consulta. No menciona espantos ni la carretera.",
  }),
  meertensMujer1995: source({
    title: "Mujer y violencia en los conflictos rurales",
    author: "Donny Meertens",
    year: 1995,
    type: "artículo de revista (Análisis Político, IEPRI, Universidad Nacional)",
    url: "https://repositorio.unal.edu.co/bitstream/handle/unal/75369/Mujer%20y%20violencia.pdf?sequence=1&isAllowed=y",
    summary:
      "Estudia a las mujeres como víctimas directas de la Violencia de los años cincuenta y sesenta, con historias de vida y archivos judiciales, y documenta que su muerte, frecuentemente acompañada de violación, tortura y mutilación, cumplía un papel simbólico contra el bando contrario. Es el fondo histórico de lo que Enrique Parra cuenta sobre las mujeres usadas de señuelo y violentadas en la vía a Paratebueno.",
    limitation:
      "Trabaja el Eje Cafetero, la Costa, el Magdalena Medio y el Caquetá, no el piedemonte llanero, y no registra este caso. Sirve de contexto, no de comprobación.",
  }),
  bvial1995: source({
    title: "Red vial y transformación urbana hacia el futuro",
    author: "Leonel Pérez B. y Diego Garcés (CORPES Orinoquia)",
    year: 1995,
    type: "capítulo técnico (repositorio de la Universidad Nacional)",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/ffe126ca-4348-4c99-88ce-04e22df19d28/content",
    summary:
      "Explica que la Marginal de la Selva nació de un acuerdo internacional de 1963 y que en el llano colombiano toma el nombre de Troncal del Llano, la vía que integra el piedemonte entre San José del Guaviare y Arauca; describe además a Restrepo y Cumaral como los puntos que enlazan el polo de Villavicencio con el sur de Casanare. Es la carretera por la que avanza la camioneta y la obra que el relato cita como empezada en 1988.",
    limitation:
      "Documento de planeación vial de mediados de los noventa (cita cifras de 1993 y un informe de 1994; el año es aproximado). No menciona la violencia en la vía ni a Paratebueno por su nombre en los pasajes consultados.",
  }),
  tiempoInauguran1998: source({
    title: "Inauguran, a medias, la Marginal de la Selva",
    author: "Redacción El Tiempo",
    year: 1998,
    type: "prensa nacional (archivo)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-778060",
    summary:
      "Nota del 3 de junio de 1998 sobre la inauguración parcial de la Marginal, «una vía soñada desde hace 20 años» que atraviesa el piedemonte llanero, dividida en un tramo de Villavicencio a Arauca y otro hacia la frontera con Ecuador. Fecha lo que el relato anunciaba para 1992: la obra seguía a medias seis años después.",
    limitation:
      "Prensa de la época, sin firma individual; describe la vía en su conjunto y no el tramo Villavicencio-Paratebueno.",
  }),
  boyacaEsquema2000: source({
    title: "Esquema de Ordenamiento Territorial del municipio de Campohermoso, dimensión cultural",
    author: "Municipio de Campohermoso (Boyacá), repositorio CDIM de la ESAP",
    year: 2000,
    type: "documento municipal de planeación",
    url: "https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8",
    summary:
      "Recoge, levantada en las veredas, la «Leyenda de la Zorra Perruna»: una mujer muy bella que enamoraba y se llevaba a los hombres mujeriegos y adúlteros y luego se convertía en un animal de uñas largas que devoraba a su víctima. Es el paralelo colombiano de piedemonte más cercano a la seductora que castiga al hombre que la sigue.",
    limitation:
      "Campohermoso está en Boyacá, provincia de Lengupá, no en el Meta ni en Cundinamarca. El EOT corresponde al periodo 1998-2000; la redacción es municipal y sin narradores identificados.",
  }),
  samperleyendas2007: source({
    title: "Las leyendas modernas y la transmisión de valores",
    author: "José Manuel de Prada Samper",
    year: 2007,
    type: "artículo de revista (Signa, UNED, n.º 16, pp. 57-72)",
    url: "https://dialnet.unirioja.es/descarga/articulo/2216738.pdf",
    summary:
      "Parte de la leyenda de la autoestopista fantasma, cita el estudio de Jan Harold Brunvand «The Vanishing Hitchhiker» (1981) y recuerda que Gabriel García Márquez contó una de esas apariciones en su columna «Fantasmas de carreteras» de «El País», en agosto de 1981, atribuyendo su circulación a los conductores profesionales. Da el marco de la leyenda de carretera moderna en la que se inscribe el viaje nocturno a Paratebueno.",
    limitation:
      "Trabaja leyendas españolas y europeas; no menciona Colombia más allá de García Márquez ni este relato. La semejanza es de motivo, con los papeles invertidos.",
  }),
  martinezllano2013: source({
    title: "El llano en armas: vida, acción y muerte de Guadalupe Salcedo",
    author: "Orlando Villanueva Martínez",
    year: 2013,
    type: "libro de historia (Universidad Distrital, IPAZUD; vista previa del editor)",
    url: "https://api.pageplace.de/preview/DT0400.9789588782546_A46982849/preview-9789588782546_A46982849.pdf",
    summary:
      "Historia de la insurrección liberal llanera de 1949-1953. Describe a campesinos y peones comandados por hacendados y pequeños propietarios, la entrega de armas ante Rojas Pinilla y el regreso al abandono después de la paz. Es el marco histórico de la guerra que en el relato se lleva a Carlos a la guerrilla y deja arruinadas las fundaciones.",
    limitation:
      "Sólo se consultó la vista previa pública del editor (primeras páginas). No menciona el libro de Vargas Barón ni los ataques concretos a Moreno, Pore y Trinidad.",
  }),
  ariporoPlan: source({
    title: "Plan Básico de Ordenamiento Territorial de Paz de Ariporo (Casanare), sistema político-administrativo",
    author: "Municipio de Paz de Ariporo, en el repositorio de la ESAP",
    type: "documento de planeación municipal",
    url: "https://repositoriocdim.esap.edu.co/server/api/core/bitstreams/bc017f0f-745b-4c6b-863e-b27fde52b62e/content",
    summary:
      "Fija el río Guachiría como límite entre Paz de Ariporo, Trinidad y Pore, desde su desembocadura en el Meta, lo que sitúa la «costa del Guachiría» del relato cerca de Pore. En su reseña histórica llama «cruento capítulo» de Casanare a la violencia bipartidista de mediados de siglo, con Guadalupe Salcedo y Eduardo Franco entre sus figuras.",
    limitation:
      "El repositorio lo cataloga como EOT de Pore, pero el documento es el de Paz de Ariporo. No menciona Vijagual ni el paso de La Soledad.",
  }),
  martinezGuadalupe2012: source({
    title: "Guadalupe Salcedo y la insurrección llanera, 1949-1957",
    author: "Orlando Villanueva Martínez",
    year: 2012,
    type: "libro de historia (Universidad Nacional de Colombia)",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/3205427/",
    summary:
      "Monografía sobre la rebelión llanera tras el asesinato de Gaitán. Según la descripción, se apoya en crónicas, novelas, corridos y memoria oral. Es la referencia académica mayor para la guerra que atraviesa el relato, y su descripción reconoce la memoria oral y literaria como materia de esa historia, que es donde se sitúa el relato de Saúl.",
    limitation:
      "Sólo se consultó la ficha de BibloRed; el texto requiere cuenta de usuario. No trata el libro de Vargas Barón.",
  }),
  polarMitos20142: source({
    title: "Mitos y leyendas del estado Portuguesa, cap. 14 «El amo del agua»",
    author: "Carmen Pérez Montero (Fundación Empresas Polar)",
    year: 2014,
    type: "comparativa venezolana: testimonios de campo",
    url: "https://bibliofep.fundacionempresaspolar.org/media/1377947/mitos_portuguesa_c_14_el-amo-de-agua.pdf",
    summary:
      "Recoge en Chabasquén, a orillas del río Chabasquencito, el testimonio del cronista Ángel Márquez: de niño vio salir del río al atardecer a un hombre alto y flaco vestido de blanco que lo dejó paralizado y desmayado. Es el dueño del agua de los llanos venezolanos, que como la Madrerío deja al testigo sin fuerzas.",
    limitation:
      "Es venezolano y masculino; no seduce ni arrastra a nadie, y el capítulo mezcla otros relatos de tesoros y ahogados. La semejanza es funcional, no de transmisión.",
  }),
  drexlermontes2002: source({
    title: "¡En los montes, sí; aquí, no! Cosmología y medicina tradicional de los Zenúes",
    author: "Josef Drexler",
    year: 2002,
    type: "monografía etnográfica (Abya-Yala, repositorio de la Universidad de Nuevo México)",
    url: "https://digitalrepository.unm.edu/abya_yala/222/",
    summary:
      "Documenta, según la lectura hecha en la ronda zenú del 2026-09-19, que en el Caribe sinuano la mohana es dueña de lo que hay en el agua y se transforma en culebra, y que los pescadores ponen cobre en las atarrayas para que el mohán no se enrede. Es el uso caribeño del mismo nombre.",
    limitation:
      "Es cosmología de un pueblo indígena, no tradición mestiza. En esta ronda sólo se pudo abrir la ficha del repositorio: el PDF queda detrás de un control anti-robots, y el contenido se toma de la reescritura zenú ya verificada (content/editorial/zenu/fuentes-2026-09-19/el-ojo-de-la-canoa.json).",
  }),
  culturaLeyenda: source({
    title: "Leyenda de El Mohán",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional divulgativa",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-el-mohan",
    summary:
      "Resume el Mohán o Poira del Tolima como perseguidor de mujeres que vive en los charcos más profundos de ríos y quebradas, fuma tabaco y encanta a las lavanderas para llevárselas. Muestra la forma masculina que circula hoy, frente a la cual la Madrerío de El Carmen es una inversión.",
    limitation:
      "Es una reelaboración escolar que repite casi literalmente frases de Devia sin citarlo; no aporta registro propio ni trae la variante femenina del piedemonte.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  murrayOdyssey1919: source({
    title: "Odyssey, book 17, lines 290-327",
    author: "Homero (trad. A. T. Murray)",
    year: 1919,
    type: "texto clásico (traducción)",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0136%3Abook%3D17%3Acard%3D290",
    summary:
      "Argos, criado por Odiseo antes de partir a Troya, yace descuidado en el estiércol; al reconocer a su amo mueve la cola y baja las orejas, sin fuerzas para acercarse, y muere en ese momento. Sirve de paralelo para la espera y la muerte de Encuentro ligada a la de su dueño.",
    limitation:
      "Traducción inglesa de 1919 en Perseus (Tufts). Argos muere al ver vivo al amo; Encuentro, sobre la tumba del amo muerto: la estructura es distinta.",
  }),
};

const vargasKeys = [
  "vargasPrimary",
  "vargasBanrep",
  "vargasCervantes",
  "vargasBogota",
  "vargasWorldcat",
  "vargasGoogleBooks",
  "vargasTiempoReview",
  "vargasTiempoAnnouncement",
];

const lealKeys = [
  "vargasPrimary",
  "vargasBanrep",
  "vargasTiempoReview",
  "vargasCervantes",
  "pittType160",
  "uamCalila",
  "cervantesCalila",
  "arbesuCalila",
];

const baqueroKeys = [
  "baqueroPrimary",
  "baqueroBanrep",
  "baqueroCervantes",
  "baqueroWorldcat",
  "baqueroCanal",
  "baqueroCun",
  "baqueroTiempo",
  "baqueroOrinoquia",
];

const caribabareKeys = [
  "caribabareLlanera",
  "caribabareExternado",
  "caribabareCanal",
  "caribabareBanrepHistory",
  "caribabareRegiones",
  "caribabareUasb",
  "caribabareLibertadores",
  "caribabareNunchia",
];

const bolaKeys = [
  "bolaBaquero",
  "bolaTiempo",
  "bolaMen",
  "bolaEsap",
  "bolaCasanareAntigua",
  "bolaEncantos",
  "bolaVillanueva",
  "candilejaScrd",
];

const vargasSlugs = new Set([
  "amanecer-llanero",
  "el-toro-negro-patorreal",
  "los-delfines-dorados",
  "la-culebra-cascabel",
  "el-llano-ayer-hoy",
  "los-tres-luceros",
  "el-llano-cobra-sus-deudas",
  "las-chanzas-de-don-felipe",
  "el-brujo-de-la-costa-del-pauto",
  "leal-hasta-la-muerte",
  "la-tertulia-de-la-italiana",
]);

const baqueroSlugs = new Set([
  "el-tirapiedra",
  "los-monstruos-de-paratebueno",
  "el-dominguez",
  "madre-rio-o-mohana",
  "la-bruja-de-los-ojos-miel",
  "el-domador-de-brujas",
]);

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickOrinoquiaMestizoFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickOrinoquiaMestizoFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = orinoquiaMestizoFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickOrinoquiaMestizoFinalSourcesHeredadas(slug) {
  const keys = slug === "leal-hasta-la-muerte"
    ? lealKeys
    : vargasSlugs.has(slug)
    ? vargasKeys
    : baqueroSlugs.has(slug)
      ? baqueroKeys
      : slug === "el-tesoro-de-caribare"
        ? caribabareKeys
        : slug === "la-bola-de-fuego"
          ? bolaKeys
          : null;
  if (!keys) throw new Error(`${slug}: no tiene selección de fuentes.`);
  return keys.map((key) => orinoquiaMestizoFinalSources[key]);
}
