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

  // ——— Búsqueda profunda 2026-09-23 ———
  orozcoTres2004: source({
    title: "Tres leyendas ganadoras y algo más… (fragmento publicado por el autor: portada, prólogo «Los senderos de Germán» y p. 7)",
    author: "Germán Valenzuela Sánchez; prólogo de Julio César Niño Orozco",
    year: 2004,
    type: "cartilla de leyendas de autor; sólo fragmento consultable",
    url: "https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9",
    summary:
      "Es la procedencia más probable del Salto del Duende. En la primera página de «La locura de Milandro Tejas» el autor cuenta que salió de Piedecuesta «con la intención de conocer personalmente El Duende» y que una anciana, en una tienda del camino, sabía historias de la Mesa de los Santos y de El Duende. El prólogo fija el método: cinco meses recorriendo las veredas de Piedecuesta y hablando con sus habitantes.",
    limitation:
      "Son seis páginas escaneadas con marca de agua. El prólogo enumera ocho títulos del libro y el del Salto no está entre ellos; el texto de este relato no se puede leer. Trata el corpus y el motivo, no este relato.",
  }),
  bucaramangaPiedecuesta2024: source({
    title: "Piedecuesta: historia, datos generales, economía (página municipal del Área Metropolitana de Bucaramanga)",
    author: "Área Metropolitana de Bucaramanga",
    year: 2024,
    type: "reseña institucional del municipio",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta el escenario del relato: el camino real que salía de Piedecuesta hacia el Socorro subía por la Mesa de Géridas, «hoy de Los Santos». Es la mesa en cuyas estribaciones occidentales el relato sitúa la cascada y la caverna de Muki.",
    limitation:
      "Página institucional sin autor individual ni fecha de redacción visible (el año es el de la consulta). No menciona el Salto, el duende ni ninguna leyenda.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas», folios 138-142",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=132",
    summary:
      "Da el antecedente santandereano de la caverna con tesoro indígena. Arias afirma que todas las cuevas de Santander tienen su leyenda y que casi todas fueron refugio, habitación o cementerio de los indios; recoge la del Cenicero (Bolívar), donde el cazador Miguel Seco es enchapado en oro por querer robar el tesoro, la de Cachalú (Oiba) y la cueva del Indio, cuyo ladrón muere flechado.",
    limitation:
      "Los guardianes de estas cuevas son los indios, no un duende, y ninguna está en la Mesa de los Santos. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia, «Folclor tolimense» (1962), «Brujas y duendes», folios 165-166",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=159",
    summary:
      "Es la descripción más completa del duende campesino andino: pequeños diablos que persiguen a las muchachas casaderas, las llaman y las tocan de noche y espantan a los novios; los campesinos los ahuyentaban con un tiplecito de ocho cuerdas de temple especial que tocaba el «son de las vacas». Sirve para leer el tiple de Muki y la música con que lo calman.",
    limitation:
      "Es folclor del Tolima, no de Santander, y el duende de Devia es doméstico, sin caverna ni tesoro. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19933: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 21: Cesáreo Rocha Castilla, leyendas del Tolima (1968), «El duende», folio 182",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=174",
    summary:
      "Define al duende como personaje casi universal, tan maligno como la Patasola, que persigue a las muchachas casaderas tirándoles terrones a través del techo y las paredes hasta dejarlas como poseídas. Confirma el rasgo de acoso a las muchachas que el relato del Salto conserva.",
    limitation:
      "Es una nota breve sobre el Tolima; no trae cuevas, tesoros ni origen angélico. Trata el motivo, no este relato.",
  }),
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», pp. 121-123 («Los duendes»)",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Registra el duende en la cordillera Oriental: en las minas aparece entre los trabajadores como enano de trajes vistosos, arroja piedras sobre los techos, persigue a las mozas casaderas, roba provisiones y abre los corrales. El enano ensombrerado de minas y tesoros es el mismo tipo que el Salto convierte en guardián de oro.",
    limitation:
      "Es folclor de Boyacá, en un catálogo general de seres. No menciona Santander ni el Salto. Trata el motivo, no este relato.",
  }),
  colaborativoDuende2026: source({
    title: "Duende",
    author: "Wikipedia en español (artículo colaborativo, con referencia a C. S. Lewis, «La imagen del mundo», 1964)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/Duende",
    summary:
      "Resume la explicación medieval, tomada de C. S. Lewis, de duendes y hadas como espíritus que no se pusieron de parte de Lucifer ni de Dios en la rebelión, y que, caídos a la tierra, habitan cuevas y subterráneos. Es exactamente el origen que el relato da a Muki: ángel expulsado por no tomar partido, condenado a vivir en una caverna.",
    limitation:
      "Fuente terciaria y colaborativa, admitida sólo como paralelo. Trata la genealogía europea del motivo, no este relato.",
  }),
  mantillaCronicas2012: source({
    title: "Crónicas y romances (ficha de catálogo de Ediciones UIS, Biblioteca Mínima Santandereana)",
    author: "Vicente Arenas Mantilla",
    year: 2012,
    type: "ficha editorial de un libro de crónicas de autor",
    url: "https://ediciones.uis.edu.co/index.php/publicacionesuis/catalog/book/128",
    summary:
      "Es la obra a la que se atribuye el ánima Coy: crónicas y romances de un piedecuestano, reeditados por la Universidad Industrial de Santander con ISBN 978-958-8777-15-3. La ficha publica el sumario completo, quince piezas de costumbres de Piedecuesta y Bucaramanga.",
    limitation:
      "Es sólo el catálogo: el libro figura como no disponible y sin descarga. El sumario no incluye ningún romance del ánima Coy, así que la atribución no está comprobada. Trata el autor y el corpus, no este relato.",
  }),
  compiladoraMitos19934: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «La Mancarita», nota 5, folio 142",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=136",
    summary:
      "Es el único registro santandereano del motivo central: en algunas comarcas del departamento el grito del mochuelo se atribuye a la Llorona, «mujer salvaje que recorre de noche las quebradas y riachuelos en busca de un hijo que ella misma ahogó». Documenta en Santander a la madre filicida condenada a vagar de noche.",
    limitation:
      "Es una nota al pie, sin relato ni nombres, y su Llorona busca al hijo junto al agua; no es un ánima que recorra calles pidiendo oraciones. Trata el motivo, no este relato.",
  }),
  lopezpueblo19772: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», pp. 121-123 («La Llorona» y «El toque de las ánimas»)",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Da las dos piezas que el relato junta: la Llorona boyacense, mujer de largas vestiduras y rostro de calavera con un niño muerto en brazos, y el toque de ánimas de San Francisco de Tunja, donde un sacerdote muerto aparece en el altar hasta que alguien lo ayuda y pide a la comunidad que comulgue por su redención.",
    limitation:
      "Es folclor de Boyacá; ninguna de las dos piezas es una madre que pida limosnas por las calles. Trata el motivo, no este relato.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Llorona» (pp. 3-4) y «El ánima sola» (pp. 53-54)",
    author: "Casa Editorial El Tiempo y Universidad Autónoma de Colombia (dir. Juan Torres Mantilla; ed. Julio Orozco Vargas)",
    year: 2004,
    type: "libro de ficción de autor que se declara recopilación de documentos imaginarios",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Su ficha técnica de la Llorona la da por presente en todos los pueblos y campos colombianos, con hábitat en ríos, quebradas y pozos profundos, figura de mujer de vestido largo y sucio y rostro de calavera. Sirve para contrastar la iconografía común de la Llorona con la túnica de llamas de Benedicta.",
    limitation:
      "Es ficción declarada: cada entrada es un documento inventado. No nombra a Benedicta, a Rosario ni a Piedecuesta; su ánima sola transcurre en Marquetalia y Olaya. Trata el motivo, no este relato.",
  }),
  colaborativoLlorona2026: source({
    title: "La Llorona",
    author: "Wikipedia en español (artículo colaborativo)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/La_Llorona",
    summary:
      "Resume la tradición hispanoamericana de la Llorona, con su centro en México: el espectro de una mujer que mató a sus hijos ahogándolos y los llora por las noches. Es el paralelo continental de Benedicta, que echó a su hija al pozo y vaga de noche.",
    limitation:
      "Fuente terciaria y colaborativa, admitida sólo como paralelo. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19935: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia, «Folclor tolimense» (1962), «El Tunjo», folios 156-159",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=149",
    summary:
      "Es la descripción más completa del tunjo campesino: un niño que llora a la orilla del camino, sobre todo en Viernes Santo; quien lo bautiza con el pulgar mojado en saliva lo vuelve muñeco de oro que, alimentado y guardado en una caja, defeca oro. Trae además el relato de Venancio Moncaleano, que se enriquece con un tunjo y cuyos hijos lo pierden en una creciente. Es el esquema que sigue el relato de Silvestre.",
    limitation:
      "Es folclor del Tolima (Chenche, llanos del Salitre), no de Piedecuesta, y el desenlace no es moral sino de pérdida. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19936: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 21: Cesáreo Rocha Castilla, leyendas del Tolima (1968), «Los tunjitos», folio 181",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=173",
    summary:
      "Define el tunjo como el muñeco de oro que se sepultaba con los indios y cuenta que los tunjitos salen al anochecer a la orilla de quebradas y acequias, cantando o llorando, todos dorados; con ellos se asusta a los niños para que se acuesten temprano. Documenta el vínculo entre oro funerario indígena y ser vivo que el relato de Silvestre supone.",
    limitation:
      "Nota breve del Tolima, sin captura ni riqueza. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19937: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas», folios 141-142",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=135",
    summary:
      "Da las formas santandereanas de enriquecerse con oro indígena: la cueva del Cenicero, donde Miguel Seco entra con una fórmula y es enchapado en oro por codicioso; el Biato de la loma de Buena Vista, que vencido a golpes entrega un baúl de oro; y la observación de Arias de que así se explicaban fortunas repentinas. Es el paralelo regional más cercano al tunjo de Silvestre.",
    limitation:
      "No aparece la palabra tunjo ni ningún muñeco de oro, y los lugares son Bolívar y alrededores. Trata el motivo, no este relato.",
  }),
  tiempoCuentos20042: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «El Tunjo» (pp. 63-64)",
    author: "Casa Editorial El Tiempo y Universidad Autónoma de Colombia (dir. Juan Torres Mantilla; ed. Julio Orozco Vargas)",
    year: 2004,
    type: "libro de ficción de autor que se declara recopilación de documentos imaginarios",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Presenta el tunjo como criatura diabólica: en una declaración inventada, un sacerdote cuenta que en un camino a las afueras de Ibagué encontró a un niño que lloraba, que le mostró dientes de bestia, le ofreció riquezas y lo mordió. Conserva el niño que llora y la tentación de la riqueza, y permite ver cuán lejos está el tunjo benéfico de Silvestre.",
    limitation:
      "Es ficción declarada, ambientada en el Tolima. No nombra a Silvestre ni a Piedecuesta. Trata el motivo, no este relato.",
  }),
  colaborativoTunjo2026: source({
    title: "Tunjo",
    author: "Wikipedia en español (artículo colaborativo, con referencias al Museo del Oro)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/Tunjo",
    summary:
      "Resume lo que es el tunjo en la arqueología: pequeñas figuras humanas o animales de oro o tumbaga hechas por los muiscas, usadas como ofrenda en tumbas, templos, lagunas y ríos; menciona el comercio de oro de los muiscas con vecinos como los guanes. Es el objeto real del que nace el ser vivo de la tradición campesina.",
    limitation:
      "Fuente terciaria y colaborativa, admitida sólo como paralelo. Trata el objeto arqueológico, no este relato.",
  }),
  baronCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano, «La culebra cascabel», p. 34",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro de relatos llaneros de autor",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Nombra a Pedro Rimalas entre los personajes de los cuentos que los peones contaban de noche en los hatos, junto a la Bola de Fuego, el Silbador y el Mandingas. Es el único registro localizado del espíritu que el relato de Silvestre menciona de paso como terror de las muchachas.",
    limitation:
      "Es una mención llanera, sin descripción ni relato de Pedro Rimalas; no hay tunjos ni Piedecuesta. Trata un personaje secundario, no este relato.",
  }),

  // ——— Búsqueda profunda 2026-09-23 ———
  sanchezLeyendas2009: source({
    title: "Leyendas y cuentos de Santander (fragmento de cubiertas publicado por el autor)",
    author: "Germán Valenzuela Sánchez",
    year: 2009,
    type: "libro de leyendas de autor; sólo cubiertas consultables",
    url: "https://drive.google.com/uc?export=download&id=1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL",
    summary:
      "Es la procedencia más probable del Silbón de Guatiguará: el volumen reúne cuarenta y seis leyendas de Santander con Piedecuesta como centro, y la contraportada muestra que trabaja con espantos de camino, vereda y trapiche. Fija editorial (Sic Editorial, Bucaramanga) e ISBN.",
    limitation:
      "Sólo son las cubiertas, escaneadas con marca de agua. El Silbón no está entre las cuatro piezas que nombra la contraportada y el índice no se puede leer. Trata el corpus, no este relato.",
  }),
  baronCuentos19962: source({
    title: "Cuentos, mitos y leyendas del llano, «La leyenda del silbón», pp. 50-74",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro de relatos llaneros de autor",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Es la versión colombiana más extensa del motivo, contada por el narrador Saúl, el Niño Mentiroso: Secundino Quanay, caballicero envidioso, se adueña de una sabana, espanta a sus vecinos con su silbo y muere destrozado en el monte; desde entonces su espíritu recorre el Llano silbando como presagio de muerte. De aquí sale la mención de Saúl que trae el texto publicado.",
    limitation:
      "Es literatura de autor ambientada en el Llano, sin costal de huesos ni Piedecuesta. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19938: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia, «Folclor tolimense» (1962), «El Silbador», folios 161-164",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=154",
    summary:
      "Registra el Silbador como creencia exclusiva del sur del Tolima: un pájaro de mal agüero invisible, ave del demonio y compañero de las brujas, cuyo aviso son tres silbidos prolongados que oye quien va a sufrir una desgracia, sobre todo la muerte de un ser querido. Trae el testimonio en habla campesina de don Baltasar Cabrera.",
    limitation:
      "Es un ave, no un alma en pena, y es del Tolima. Trata el motivo, no este relato.",
  }),
  tiempoCuentos20043: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «El Silbador» (pp. 87-88)",
    author: "Casa Editorial El Tiempo y Universidad Autónoma de Colombia (dir. Juan Torres Mantilla; ed. Julio Orozco Vargas)",
    year: 2004,
    type: "libro de ficción de autor que se declara recopilación de documentos imaginarios",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Es de donde sale el episodio de Edilberto Triana que el texto publicado mezclaba con el Silbón: fragmentos inventados de un diario sobre la reconciliación de Dodó y Río Bello en la finca El Refugio, el 26 de junio de 1950, rota por el graznido del Silbador, que vuelve bestias a los hombres. La ficha técnica lo describe como «Ave del Demonio», invisible y compañero de las brujas.",
    limitation:
      "Es ficción declarada, del Tolima, y su ser es el Silbador, no el Silbón. No nombra Piedecuesta. Trata un motivo vecino, no este relato.",
  }),
  colaborativoSilbon2026: source({
    title: "El Silbón",
    author: "Wikipedia en español (artículo colaborativo)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/El_Silb%C3%B3n",
    summary:
      "Resume la tradición venezolana del Silbón, difundida en los Llanos Orientales de Colombia: el alma en pena de un joven que mató a su padre y fue maldecido a vagar cargando sus huesos en un saco; si su silbido suena lejos, está cerca. Es el paralelo del costal de huesos que conserva el relato de Piedecuesta.",
    limitation:
      "Fuente terciaria y colaborativa, admitida sólo como paralelo. Trata el motivo, no este relato.",
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
