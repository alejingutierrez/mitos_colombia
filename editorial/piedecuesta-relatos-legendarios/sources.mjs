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

  // ——— Búsqueda profunda 2026-09-23 ———
  uISCronicas2012: source({
    title: "Crónicas y romances (Biblioteca Mínima Santandereana)",
    author: "Vicente Arenas Mantilla; Ediciones UIS",
    year: 2012,
    type: "página de catálogo de editorial universitaria",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Es la obra de la que más probablemente procede el relato, narrado en primera persona por un piedecuestano. El catálogo describe el libro como cuadros de costumbres y «hechos curiosos» de Piedecuesta, Lebrija y Bucaramanga y enumera quince crónicas, entre ellas «El cerro de los compadres», «El correo de las brujas» y «Una librería piedecuestana». Fija editorial, colección e ISBN 978-958-8777-15-3.",
    limitation:
      "«La descarga de datos todavía no está disponible»: no hay texto. Ninguna crónica del índice lleva el nombre de Cantera, así que la atribución no está comprobada. El servidor tiene un certificado TLS incompleto.",
  }),
  martinezProyecto2023: source({
    title: "Proyecto de intervención urbana y artística «La Cantera vive» en Piedecuesta, Santander",
    author: "Giovanny Jaimes Martínez, revista Documenta (Universidad Antonio Nariño, Facultad de Artes), vol. I, año 1",
    year: 2023,
    type: "ensayo académico de aula",
    url: "https://revistas.uan.edu.co/index.php/documenta/article/download/1717/1458/6216",
    summary:
      "Es la única fuente abierta que habla de una «leyenda de la Cantera». A partir del documento «La Cantera vive» de Pinzón (1995-2010) explica que el cerro fue decisivo en el nacimiento de Piedecuesta, que de allí salieron piedras y barro para las primeras casas y la piedra de la fachada y el atrio de la iglesia de San Francisco Javier, y que brotaban de él fuentes de agua. Sitúa el cerro a seis cuadras del parque La Libertad.",
    limitation:
      "Es un trabajo de grado en formulación y cita a Pinzón de segunda mano; no cuenta la historia de la niña ni de Arnefo. Trata el cerro, no este relato.",
  }),
  bucaramangaCantera2013: source({
    title: "La Cantera en Piedecuesta estrena virgen, atrio, plazoleta, mirador y senderos para convertirse en Parque Metropolitano",
    author: "Área Metropolitana de Bucaramanga",
    year: 2013,
    type: "boletín institucional",
    url: "https://www.amb.gov.co/la-cantera-en-piedecuesta-estrena-virgen-atrio-plazoleta-mirador-y-senderos-para-convertirse-en-parque-metropolitano/",
    summary:
      "Confirma el lugar del relato: el cerro de la Cantera es «el cerro tutelar de Piedecuesta», con una Virgen visible desde todo el municipio, ruta de viacrucis y mirador, y se adecuó como Parque Metropolitano «El Cerro de la Cantera». Es el cerro que el relato dice que se ve desde la plaza.",
    limitation:
      "Boletín sin autor individual; el año se infiere de la inauguración de la obra y no está impreso en la página. No menciona leyendas. Trata el lugar, no este relato.",
  }),
  araqueVirgen2025: source({
    title: "La Virgen del Cerro de La Cantera de Piedecuesta volvió a brillar",
    author: "Milton Velosa Araque, Vanguardia",
    year: 2025,
    type: "artículo de prensa regional",
    url: "https://www.vanguardia.com/area-metropolitana/piedecuesta/2025/04/13/la-virgen-del-cerro-de-la-cantera-de-piedecuesta-volvio-a-brillar/",
    summary:
      "Documenta el uso religioso actual del cerro: la restauración de la Virgen de bronce del escultor Juan José Cobos tras trece años, la devoción de los feligreses que la llaman madre protectora del municipio y el cálculo de unos treinta mil visitantes ese año.",
    limitation:
      "Nota de actualidad sin contenido histórico ni legendario. Trata el lugar, no este relato.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas», folios 135-138",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Da el primer paralelo santandereano de un paisaje nacido de un choque en tiempos de la Conquista: el Socorro está edificado sobre una laguna donde los indios arrojaron sus tesoros; los conquistadores la secaron con 400 arrobas de sal y quedó reducida a dos vigas de oro, y tocarlas derrumbaría la ciudad. Recoge también la laguna de San Mateo en Bucaramanga y la del Peñón de la Luchata en Galán.",
    limitation:
      "Trata lagunas, no cerros, y ninguna leyenda de Piedecuesta. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo III, sección 33: Javier Ocampo López, «Mitos colombianos» (1988), «Furatena y las esmeraldas de Muzo», pp. 153-155",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de síntesis",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Sostiene el segundo paralelo: Fura, Tena y su hijo Itoco terminan convertidos en los peñascos que se ven junto al río Minero o Zarbi, después de una historia de deseo, celos y muerte. Es el caso colombiano más conocido de una historia de violencia fijada en cerros que llevan el nombre de sus protagonistas.",
    limitation:
      "Es un mito muzo de Boyacá, reelaborado por Ocampo como síntesis. Trata el motivo, no este relato.",
  }),
  hOYCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo (Proyectos Especiales) / Periódico HOY, con patrocinio de la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro de ficción declarada («documentos imaginarios»)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Se revisó porque otras fichas de Piedecuesta resultaron ser láminas casi literales de este libro. Sus cincuenta láminas son espantos y seres, no leyendas de lugar, y el texto completo no nombra a Cantera, Ardila ni Arnefo: queda descartado como origen.",
    limitation:
      "Es ficción de autor; se cita para dejar constancia de la búsqueda negativa. No trata este relato ni el motivo.",
  }),
  gonzalezHistoria2023: source({
    title: "Historia de la provincia de Guane: origen, poblamiento y configuraciones sociales (1540-1795), pp. 91, 101 y 140",
    author: "María Consuelo Moreno González",
    year: 2023,
    type: "tesis doctoral en historia (Universidad Industrial de Santander)",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-1be0-4c77-a9d7-faf78fa4f1b5/content",
    summary:
      "Documenta el mundo indígena que el relato nombra. Macaregua figura entre los cincuenta y ocho caciques guanes que la hueste de Martín Galeano encontró en 1540 (p. 101), y su encomienda se repartió entre Juan Vicente y Juan Eslava (p. 140), apellido que reaparece entre las familias de la villa del relato. La tesis fija además el límite norte del territorio guane en la Mesa de los Santos y la Mesa de Ruitoque (p. 91), el escenario de la huida y de la danza de don Juan.",
    limitation:
      "Es historia de archivo: no menciona leyendas, ni a Guarguatí, ni a los Cachimbos, ni ninguna batalla contra Piedecuesta. Trata el contexto, no este relato.",
  }),
  bucaramangaPiedecuesta2024: source({
    title: "Piedecuesta: historia, datos generales, economía (página municipal del Área Metropolitana de Bucaramanga)",
    author: "Área Metropolitana de Bucaramanga",
    year: 2024,
    type: "reseña institucional del municipio",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Fija la geografía y la cronología del lugar: Ruitoque al norte del municipio, la Mesa de Géridas, hoy de Los Santos, en el camino real hacia el Socorro, y el reconocimiento de Piedecuesta como villa en 1825 con su propio nombre. Permite ver que los parajes del relato son reales y que la «Villa de San Carlos» no consta.",
    limitation:
      "Página institucional sin autor ni fecha visibles (el año es el de la consulta). No menciona el relato, a los guanes ni ninguna batalla. Trata el lugar, no este relato.",
  }),
  compiladoraMitos19933: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 17 «Varias regiones. Leyendas»: Enrique Otero D'Costa, «Leyendas» (1936), «Talabalí», folios 36-41",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de leyenda de autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=34",
    summary:
      "Es la leyenda santandereana más cercana: Talabalí, guane del valle de Bucarica, paje del encomendero Juan de Velasco, huye al monte, se hace capitán de los yariguíes y, capturado, pelea en un palenque contra un español ante indios y blancos, y se deja matar por amor a la hija del encomendero. Da el modelo del duelo entre campeones de los dos bandos que el relato piedecuestano resuelve de otro modo.",
    limitation:
      "Es leyenda de autor, de ambiente del siglo XVI, sin cañones ni reconciliación final, y no nombra a Guarguatí ni a Piedecuesta. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19934: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas», folios 141-142",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=135",
    summary:
      "Recoge una «cueva del Indio» santandereana, probablemente cementerio indígena, donde se hallaron huesos, vasijas de barro y gargantillas de oro, y cuya leyenda cuenta que un codicioso murió flechado por los indios al intentar robar sus tesoros. Es el antecedente del túnel de El Clarinete, «la Cueva del Indio», donde Guarguatí y sus hombres trabajan años.",
    limitation:
      "La cueva de Arias está en otra comarca santandereana y no es mina ni refugio de caciques huidos. Trata el motivo, no este relato.",
  }),
  colaborativoZaquesazipa2026: source({
    title: "Zaquesazipa",
    author: "Wikipedia en español (artículo colaborativo, con referencias a Plaza y a Fernández de Piedrahíta)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/Zaquesazipa",
    summary:
      "Resume la historia de Sagipa, el último zipa independiente de Bacatá: Jiménez de Quesada le exigió el tesoro que Tisquesusa había escondido, le fijó un plazo para llenar un bohío de oro y, como no cumplió, lo sometió a tortura hasta su muerte en 1539. Es el paralelo histórico del cacique «zipa» del relato, encadenado para que revele sus caudales.",
    limitation:
      "Fuente terciaria y colaborativa, admitida sólo como paralelo. Sagipa es muisca, no guane, y no escapa. Trata el motivo, no este relato.",
  }),
  sanchezLeyendas2009: source({
    title: "Leyendas y cuentos de Santander (fragmento de cubiertas publicado por el autor)",
    author: "Germán Valenzuela Sánchez",
    year: 2009,
    type: "libro de leyendas de autor; sólo cubiertas consultables",
    url: "https://drive.google.com/uc?export=download&id=1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL",
    summary:
      "Es la compilación de leyendas piedecuestanas donde con más probabilidad podría estar un relato como éste: cuarenta y seis sagas de Santander con Piedecuesta como centro, reunidas por un periodista y bibliotecario del municipio.",
    limitation:
      "Sólo son las cubiertas; la contraportada nombra cuatro piezas y ninguna es ésta, y el índice no se puede leer. No hay ningún indicio directo de que el relato esté en el libro. Trata el corpus, no este relato.",
  }),
  lacroixDiario2009: source({
    title: "Diario de Bucaramanga (edición del Ministerio del Poder Popular para la Comunicación y la Información, Caracas, 2009, ISBN 978-980-227-085-9)",
    author: "Luis Perú de Lacroix",
    year: 2009,
    type: "diario de época (1828), edición institucional",
    url: "https://archive.org/details/diario-de-bucaramanga",
    summary:
      "Es el registro histórico del que el romance toma casi todo: la estadía de Bolívar en Bucaramanga en 1828 con Soublette, O'Leary, Wilson y Ferguson, el tresillo, los bailes, el convite del cura de Girón, el doctor Eloy Valenzuela, el paseo a Rionegro, la falsa alarma de temblor en misa (pp. 145-147) y la noche en que el Libertador durmió en Pie de Cuesta al emprender el viaje a Bogotá (pp. 250-252).",
    limitation:
      "Es la fuente histórica, no el romance: no trae la Pedregosa, la Puerta del Sol, el chocolate de Girón ni la muchacha de Rionegro, y su temblor fue una falsa alarma. La autenticidad del diario ha sido discutida por la historiografía. Trata el hecho, no este relato.",
  }),
  lacroixDiario1828: source({
    title: "Diario de Bucaramanga: vida pública y privada del libertador Simón Bolívar (Biblioteca Virtual del Banco de la República)",
    author: "Luis Perú de Lacroix",
    year: 1828,
    type: "diario de época, copia digital en biblioteca nacional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/3172/",
    summary:
      "Copia colombiana del mismo diario, que permite cotejar la escena del baile al que Bolívar no quiso acudir, la visita de despedida al cura Valenzuela y la jornada a Pie de Cuesta, tres leguas al sur de Bucaramanga, que es el único paso documentado del Libertador por la villa.",
    limitation:
      "El visor CONTENTdm no se leyó completo fuera de navegador; la paginación se tomó de la edición de Caracas. Trata el hecho, no este relato.",
  }),
  uISCronicas20122: source({
    title: "Crónicas y romances (Biblioteca Mínima Santandereana), ficha editorial",
    author: "Vicente Arenas Mantilla; Ediciones UIS",
    year: 2012,
    type: "ficha de catálogo editorial universitario",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Es la obra a la que el texto que circula atribuye el romance. La ficha fija la reedición de 2012 y publica un sumario de quince piezas en el que no figura ningún título sobre Bolívar ni sobre una visita del Libertador, lo que pone en duda la atribución.",
    limitation:
      "La ficha dice «Disponible: No» y no permite descargar el libro; el certificado del sitio exige abrirlo con curl -k. Sólo metadatos: no contiene el relato.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Monja de las Rosas», pp. 99-100",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Da el paralelo de la casa de Bolívar habitada por una presencia: en la Quinta de Bolívar de Bogotá, una niña ve a una mujer de negro recorrer los salones del Libertador y llevarse un ramo de rosas amarillas antes de desvanecerse en el jardín. Es la misma idea del final del romance, la casa donde todavía se oyen los pasos.",
    limitation:
      "La obra se declara ficción y la escena es en Bogotá; la aparición no es Bolívar. Trata el motivo, no este relato.",
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
