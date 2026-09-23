function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, ...(year ? { year } : {}), type, url, summary, limitation };
}

export const caribeMestizoFinalSources = {
  villaFull: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "antología digitalizada con textos reproducidos",
    url: "https://www.flacso.org.ec/biblio/catalog/resGet.php?resId=44620",
    summary: "Reproduce la selección de Martínez Fajardo y las leyendas de Otero D’Costa, con referencias a las ediciones de origen.",
    limitation: "Es una reedición y no ofrece grabaciones, cuadernos de campo ni corroboración histórica de cada escena.",
  }),
  villaDocsLib: source({
    title: "Mitos y leyendas de Colombia: copia de consulta",
    author: "Eugenia Villa Posse",
    year: 1993,
    type: "espejo de texto completo",
    url: "https://docslib.org/doc/13261952/mitos-y-leyendas-de-colombia",
    summary: "Permite controlar la estructura, créditos y advertencias editoriales de la antología cuando el servidor principal falla.",
    limitation: "Es un espejo no institucional del mismo ejemplar, no una fuente narrativa independiente.",
  }),
  martinezCinii: source({
    title: "Cuentos y leyendas de Cartagena",
    author: "CiNii Books",
    year: 1948,
    type: "catálogo bibliotecario",
    url: "https://ci.nii.ac.jp/ncid/BA91849884",
    summary: "Confirma autor, segunda edición corregida y aumentada, Editorial Mundo Nuevo, Cartagena y extensión de 222 páginas.",
    limitation: "Controla la publicación, pero no autentica como hechos los personajes y acontecimientos narrados.",
  }),
  martinezMuhca: source({
    title: "Fiestas de la Candelaria y El milagro de la Candelaria",
    author: "Museo Histórico de Cartagena de Indias",
    type: "historia cultural y recepción local",
    url: "https://www.muhca.gov.co/cartapedia_fiestas-de-la-candelaria-enrique-munoz-51",
    summary: "Identifica a Eustorgio Martínez Fajardo, su seudónimo, el libro y el carácter fantástico de su recreación cartagenera.",
    limitation: "Analiza de manera especial La Candelaria y no demuestra cada una de las otras treinta y dos tramas.",
  }),
  martinezScribd: source({
    title: "Leyendas y mitos de Colombia, parte 2",
    author: "Eugenia Villa Posse; copia en Scribd",
    type: "espejo secundario de consulta textual",
    url: "https://es.scribd.com/doc/287385294/Leyendas-y-Mitos-de-Colombia-Parte-2",
    summary: "Conserva la selección textual y permite contrastar pasajes cuando otros visores no responden.",
    limitation: "Duplica la antología y su acceso puede ser parcial; no suma un informante ni una edición crítica.",
  }),
  martinezWorldcat: source({
    title: "Cuentos y leyendas de Cartagena: búsqueda bibliográfica",
    author: "WorldCat",
    year: 1948,
    type: "catálogo internacional",
    url: "https://search.worldcat.org/search?q=ti%3ACuentos+y+leyendas+de+Cartagena+au%3AMartinez+Fajardo",
    summary: "Aporta un control adicional de circulación bibliotecaria de la obra atribuida a Martínez Fajardo.",
    limitation: "Una ficha de catálogo no valida fechas coloniales, milagros, fantasmas ni biografías internas.",
  }),
  cartagenaUnesco: source({
    title: "Port, Fortresses and Group of Monuments, Cartagena",
    author: "UNESCO World Heritage Centre",
    type: "contexto patrimonial institucional",
    url: "https://whc.unesco.org/en/list/285/",
    summary: "Documenta el valor histórico y urbano del puerto, las fortificaciones y el conjunto monumental que sirve de escenario a muchas piezas.",
    limitation: "El reconocimiento patrimonial no prueba apariciones, romances, cesiones ni milagros del libro.",
  }),
  cartagenaBanrep: source({
    title: "Cartagena de Indias: historia y patrimonio",
    author: "Banco de la República",
    type: "síntesis histórica institucional",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-222/cartagena-de-indias-historia-y-patrimonio",
    summary: "Ofrece contexto independiente para diferenciar ciudad colonial, memoria pública y elaboración legendaria.",
    limitation: "No contiene ni confirma de forma individual los treinta y tres argumentos literarios.",
  }),

  popularFull: source({
    title: "Colombia, cuento popular",
    author: "Selección latinoamericana; sección de Manuel Zapata Olivella",
    type: "antología digitalizada de textos orales y populares",
    url: "https://biblio.flacsoandes.edu.ec/libros/digital/44511.pdf",
    summary: "Publica quince cuentos del grupo cordobés atribuidos a Manuel Zapata Olivella y permite revisar títulos, secuencia y lenguaje.",
    limitation: "La edición media voces orales y contiene humor cruel, sexual o racializado que requiere tratamiento crítico.",
  }),
  zapataCervantes: source({
    title: "Portal Manuel Zapata Olivella",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "portal académico de autor",
    url: "https://www.cervantesvirtual.com/portales/manuel_zapata_olivella/",
    summary: "Contextualiza la trayectoria intelectual, literaria y afrocolombiana del recopilador y escritor.",
    limitation: "El portal no funciona como segunda grabación de cada cuento ni fija por sí solo sus informantes.",
  }),
  zapataBanrep: source({
    title: "Manuel Zapata Olivella",
    author: "Enciclopedia del Banco de la República",
    type: "perfil biográfico institucional",
    url: "https://enciclopedia.banrepcultural.org/index.php/Manuel_Zapata_Olivella",
    summary: "Sitúa la obra y el compromiso de Zapata Olivella con las culturas afrocolombianas y populares.",
    limitation: "No demuestra que cada chiste sea exclusivamente cordobés ni que represente a toda la población costeña.",
  }),
  zapataWorldcat: source({
    title: "Cuentos populares de Colombia: registros de Manuel Zapata Olivella",
    author: "WorldCat",
    type: "búsqueda en catálogo bibliotecario",
    url: "https://search.worldcat.org/search?q=au%3AManuel+Zapata+Olivella+su%3Acuentos+populares",
    summary: "Controla la circulación editorial de colecciones y estudios vinculados con los cuentos populares del autor.",
    limitation: "Los resultados bibliográficos no reemplazan el texto primario ni identifican cada narrador oral.",
  }),
  unescoOral: source({
    title: "Convention for the Safeguarding of the Intangible Cultural Heritage",
    author: "UNESCO",
    year: 2003,
    type: "marco internacional de patrimonio vivo",
    url: "https://ich.unesco.org/en/convention",
    summary: "Define la tradición oral como patrimonio vivo transmitido y recreado por comunidades, no como texto congelado o propiedad anónima.",
    limitation: "Es un marco metodológico general y no acredita la procedencia de un cuento cordobés específico.",
  }),
  folktaleCervantes: source({
    title: "El cuento folclórico y su transmisión",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "estudio comparativo de folclor narrativo",
    url: "https://www.cervantesvirtual.com/obra-visor/el-cuento-folklorico--0/html/",
    summary: "Explica variación, tipos, fórmulas y circulación de relatos populares más allá de una única región.",
    limitation: "No prueba una cadena directa hacia los cuentos recopilados en Córdoba.",
  }),
  threePriestsCervantes: source({
    title: "Cuentos populares andaluces XIV: La viuda y los tres curas",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "comparación internacional de tipo narrativo",
    url: "https://www.cervantesvirtual.com/obra-visor/cuentos-populares-andaluces-xiv/html/?indice=1",
    summary: "Documenta la extensa familia de cuentos en que una mujer y su esposo engañan u ocultan a tres sacerdotes.",
    limitation: "No es la fuente de la versión colombiana heredada ni demuestra procedencia cordobesa.",
  }),

  listIu: source({
    title: "Animal Tales from the Caribbean",
    author: "George List; John Holmes McDowell; Juan Sebastián Rojas E.",
    year: 2017,
    type: "edición académica bilingüe de grabaciones de campo",
    url: "https://iupress.org/9780253031174/animal-tales-from-the-caribbean/",
    summary: "Publica veintiún cuentos animales registrados por List en velorios de la costa Caribe colombiana.",
    limitation: "El corpus no representa a toda la costa ni autoriza a borrar la identificación afrodescendiente de sus narradores.",
  }),
  listJstor: source({
    title: "Animal Tales from the Caribbean: edición en JSTOR",
    author: "George List y editores",
    year: 2017,
    type: "libro académico en repositorio",
    url: "https://www.jstor.org/stable/j.ctv3hvc3p",
    summary: "Permite controlar introducción, contexto de campo, textos en español, traducciones y aparato comparativo.",
    limitation: "Es la misma edición académica, no una segunda recolección oral.",
  }),
  listDistributor: source({
    title: "Animal Tales from the Caribbean: descripción editorial",
    author: "University of Toronto Press Distribution",
    year: 2017,
    type: "ficha editorial",
    url: "https://utpdistribution.com/9780253031136/animal-tales-from-the-caribbean/",
    summary: "Resume el origen de los veintiún cuentos y su relación con velorios y narración competitiva.",
    limitation: "Es una descripción comercial y no sustituye los textos ni sus notas.",
  }),
  listContents: source({
    title: "Animal Tales from the Caribbean: tabla de contenidos",
    author: "ETH Zürich Library",
    type: "índice bibliográfico",
    url: "https://toc.library.ethz.ch/objects/pdf03/z01_978-0-253-02937-9_01.pdf",
    summary: "Confirma los títulos y la arquitectura del volumen, incluidos los cuentos de Tío Conejo revisados.",
    limitation: "El índice no contiene las narraciones completas ni identifica por sí solo todas las variantes.",
  }),
  listReview: source({
    title: "Review of Animal Tales from the Caribbean",
    author: "New West Indian Guide",
    year: 2018,
    type: "reseña académica",
    url: "https://brill.com/view/journals/nwig/92/1-2/article-p80_5.pdf",
    summary: "Confirma que List registró los cuentos durante velorios y que la edición conserva español y traducción inglesa.",
    limitation: "La reseña evalúa el libro como conjunto y no reemplaza la lectura de cada relato.",
  }),
  listVitalSource: source({
    title: "Animal Tales from the Caribbean: metadatos ISBN",
    author: "VitalSource",
    year: 2017,
    type: "registro editorial digital",
    url: "https://www.vitalsource.com/sg/products/animal-tales-from-the-caribbean-george-list-v9780253031174",
    summary: "Controla autor, editorial y los ISBN de las versiones impresa y digital.",
    limitation: "No aporta una versión oral independiente ni análisis cultural propio.",
  }),
  listPublisherJstor: source({
    title: "Indiana University Press on JSTOR",
    author: "JSTOR",
    type: "catálogo de editorial académica",
    url: "https://www.jstor.org/publisher/iupress",
    summary: "Verifica la incorporación del volumen al catálogo académico de Indiana University Press.",
    limitation: "Es control de publicación, no evidencia del argumento o localización de cada cuento.",
  }),

  buenaventuraUnivalle: source({
    title: "Consolidación y autonomía del campo teatral colombiano",
    author: "Universidad del Valle",
    type: "investigación académica de historia teatral",
    url: "https://bibliotecadigital.univalle.edu.co/server/api/core/bitstreams/1f2eff2c-c0b7-46f2-8773-ac15cebe8d70/content",
    summary: "Registra Tío Conejo zapatero como adaptación de 1958 basada en tradición oral de la costa Pacífica.",
    limitation: "No demuestra que la expansión heredada del sitio, situada en Cotorra, proceda de esa misma puesta o versión.",
  }),
  buenaventuraCervantes: source({
    title: "Enrique Buenaventura",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "perfil y archivo de dramaturgo",
    url: "https://www.cervantesvirtual.com/portales/enrique_buenaventura/",
    summary: "Contextualiza al dramaturgo y la relación de su obra con experimentación, oralidad y creación colectiva.",
    limitation: "No contiene una ficha de informante para el cuento ni prueba su adscripción cordobesa.",
  }),
  teatroCali: source({
    title: "Teatro Experimental de Cali y Enrique Buenaventura",
    author: "Banco de la República",
    type: "contexto institucional de historia cultural",
    url: "https://enciclopedia.banrepcultural.org/index.php/Enrique_Buenaventura",
    summary: "Sitúa al autor y su trabajo teatral en el contexto colombiano del siglo XX.",
    limitation: "No autentica la cadena animal ni la localización de Cotorra.",
  }),

  oteroPrimary: source({
    title: "Leyendas",
    author: "Enrique Otero D’Costa",
    type: "texto primario publicado por la Universidad Pontificia Bolivariana",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/download/3125/2843/5578",
    summary: "Publica El castellano de San Juan, Las clavelinas y Genus irritabile vatum con atribución autoral visible.",
    limitation: "Emplea una mirada colonial y literaria; sus diálogos, juicios y escenas no son crónica neutral.",
  }),
  oteroCatalog: source({
    title: "Leyendas por Enrique Otero D’Costa",
    author: "Médiathèques de Strasbourg",
    year: 1936,
    type: "catálogo patrimonial",
    url: "https://www.mediatheques.strasbourg.eu/doc/IGUANA_2/750237/leyendas-por-enrique-otero-d-costa",
    summary: "Confirma el volumen Leyendas, la edición Minerva y su pertenencia a la Biblioteca Aldeana de Colombia.",
    limitation: "No corrobora los hechos coloniales narrados en las tres piezas.",
  }),
  oteroAcademy: source({
    title: "Historietas: leyendas y tradiciones colombianas",
    author: "Biblioteca de la Academia Colombiana de Historia",
    year: 1934,
    type: "catálogo histórico institucional",
    url: "https://biblioteca.academiahistoria.org.co/pmb/opac_css/index.php?id=4024&lvl=publisher_see",
    summary: "Registra otra colección de Otero D’Costa y su clasificación como leyendas, tradiciones y folclor colombiano.",
    limitation: "Es historia editorial, no una segunda fuente para Hanspater, Yariva o El Carbón.",
  }),
  samperOrtega: source({
    title: "La Selección Samper Ortega, 1926–1937",
    author: "Banco de la República",
    type: "historia institucional del libro",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-54/la-seleccion-samper-ortega-1926-1937",
    summary: "Sitúa Leyendas de Otero D’Costa dentro del proyecto editorial de la Biblioteca Aldeana.",
    limitation: "Explica la colección y no certifica el contenido histórico interno de los cuentos.",
  }),
  oteroBulletin: source({
    title: "Boletín de Historia y Antigüedades, enero de 1925",
    author: "Academia Colombiana de Historia",
    year: 1925,
    type: "fuente institucional contemporánea del autor",
    url: "https://academiahistoria.org.co/boletines/BHA-166.pdf",
    summary: "Documenta la actividad de Otero D’Costa dentro del campo de historia y leyenda de su época.",
    limitation: "No prueba las tramas ni corrige por sí solo la perspectiva colonial del escritor.",
  }),

  morganDecree: source({
    title: "Decreto 2571 de 1957",
    author: "República de Colombia; SUIN-Juriscol",
    year: 1957,
    type: "norma oficial",
    url: "https://www.suin-juriscol.gov.co/viewDocument.asp?id=1468761",
    summary: "Documenta una partida estatal para buscar el supuesto tesoro en Providencia.",
    limitation: "Probar que hubo búsqueda no prueba que el tesoro existiera ni que fuera hallado.",
  }),
  morganRadio: source({
    title: "La leyenda del pirata Morgan en la tradición oral de San Andrés",
    author: "Radio Nacional de Colombia, San Andrés",
    year: 2018,
    type: "reportaje regional con memoria oral",
    url: "https://www.radionacional.co/cultura/la-leyenda-del-pirata-morgan-presente-en-la-tradicion-oral-de-san-andres",
    summary: "Registra la circulación isleña del tesoro y su asociación contemporánea con la Cueva de Morgan.",
    limitation: "La nota reproduce la tradición y algunos datos turísticos; no aporta evidencia material del botín.",
  }),
  morganBanrep: source({
    title: "Providencia y Santa Catalina: historia y memoria",
    author: "Banco de la República",
    type: "historia regional institucional",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-364/providencia-y-santa-catalina",
    summary: "Distingue la presencia de corsarios en el Caribe de los relatos sobre tesoros y lugares del archipiélago.",
    limitation: "El contexto histórico no confirma un escondite específico ni el mapa de la versión heredada.",
  }),
  morganSea: source({
    title: "Historia del archipiélago",
    author: "Banco de la República",
    type: "síntesis histórica regional",
    url: "https://www.banrepcultural.org/hablemos-del-mar/historia.html",
    summary: "Ofrece una cronología amplia de poblamiento, navegación, conflicto y sociedad isleña.",
    limitation: "No convierte la leyenda del tesoro en hecho arqueológico.",
  }),
  morganTiempo: source({
    title: "Tras el tesoro de Morgan",
    author: "El Tiempo",
    year: 1996,
    type: "archivo periodístico de recepción",
    url: "https://www.eltiempo.com/archivo/documento/MAM-301752",
    summary: "Documenta la persistencia de búsquedas y expectativas alrededor del tesoro.",
    limitation: "La continuidad de la búsqueda no demuestra el depósito ni su dueño.",
  }),
  morganGeography: source({
    title: "El archipiélago de San Andrés y Providencia",
    author: "Sociedad Geográfica de Colombia",
    type: "estudio histórico-geográfico",
    url: "https://sogeocol.edu.co/documentos/012_03_04_el_arc_de_san_and_y_prov.pdf",
    summary: "Aporta contexto geográfico e histórico para ubicar la narración sin reducir las islas a un escenario pirata.",
    limitation: "No identifica un tesoro enterrado ni avala excavaciones.",
  }),
  morganTourism: source({
    title: "Henry Morgan, el pirata",
    author: "Zona Turística San Andrés",
    type: "recepción turística local",
    url: "https://zonaturisticasanandres.com/henry-morgan-el-pirata/",
    summary: "Muestra cómo la tradición del tesoro y la cueva funciona hoy dentro del relato turístico isleño.",
    limitation: "La promoción turística no es evidencia histórica ni arqueológica.",
  }),

  franciscoMincultura: source({
    title: "Francisco el Hombre: juglar y leyenda",
    author: "Ministerio de Cultura de Colombia",
    year: 2014,
    type: "publicación patrimonial institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Patrimonio/Boleti%CC%81n%20Vigi%CC%81as%20Marzo.pdf",
    summary: "Publica la secuencia del duelo, la identificación con Francisco Moscote y la recepción caribeña de la figura.",
    limitation: "Es divulgación patrimonial y reconoce que mito y vida se entrelazan; no fija una biografía incontrovertible.",
  }),
  franciscoUninorte: source({
    title: "Mitología vallenata",
    author: "Universidad del Norte",
    type: "investigación académica sobre repertorio vallenato",
    url: "https://manglar.uninorte.edu.co/bitstream/handle/10584/9352/9789587892321%20eMitologia%20vallenata.pdf?isAllowed=&sequence=1",
    summary: "Analiza la leyenda dentro de un repertorio mayor y discute la dificultad de separar personaje histórico y figura narrativa.",
    limitation: "Las interpretaciones no constituyen acta civil ni grabación de una versión originaria.",
  }),
  franciscoFestival: source({
    title: "Mitos y leyendas del folclor vallenato",
    author: "Fundación Festival de la Leyenda Vallenata",
    type: "repertorio institucional regional",
    url: "https://festivalvallenato.com/mito-leyenda/",
    summary: "Conserva la versión del juglar que vence al diablo y muestra su recepción dentro del vallenato.",
    limitation: "No ofrece aparato crítico, fecha de recolección ni una cadena completa de narradores.",
  }),
  franciscoUnesco: source({
    title: "El vallenato, música tradicional del Magdalena Grande",
    author: "UNESCO y Ministerio de Cultura de Colombia",
    year: 2015,
    type: "expediente de patrimonio cultural inmaterial",
    url: "https://ich.unesco.org/en/USL/traditional-vallenato-music-of-the-greater-magdalena-region-01095",
    summary: "Explica las raíces mixtas, la función narrativa y los riesgos de salvaguardia del vallenato tradicional.",
    limitation: "Documenta el género y sus comunidades, no el duelo sobrenatural como acontecimiento.",
  }),
  franciscoPanorama: source({
    title: "La leyenda de Francisco el Hombre, al descubierto",
    author: "Panorama Cultural",
    year: 2013,
    type: "análisis periodístico regional",
    url: "https://panoramacultural.com.co/musica-y-folclor/1291/la-leyenda-de-francisco-el-hombre-al-descubierto",
    summary: "Discute a Francisco como juglar viajero y la transformación cultural de su leyenda.",
    limitation: "No resuelve de manera definitiva identidad, lugar o fecha del duelo.",
  }),
  franciscoPilon: source({
    title: "Francisco el Hombre en cortometraje",
    author: "El Pilón",
    year: 2015,
    type: "recepción cultural local",
    url: "https://elpilon.com.co/cultura/francisco-el-hombre-en-cortometraje",
    summary: "Registra la adaptación audiovisual y la continuidad pública del duelo musical.",
    limitation: "Una adaptación reciente no es una versión originaria ni prueba histórica.",
  }),
  franciscoPolice: source({
    title: "Conozca a Francisco el Hombre",
    author: "Policía Nacional de Colombia",
    type: "divulgación institucional",
    url: "https://www.policia.gov.co/contenido/se-acerca-festival-vallenato-conozca-francisco-hombre",
    summary: "Resume la asociación con Francisco Antonio Moscote y la relevancia regional de la figura.",
    limitation: "La nota no aporta documentos primarios para todas las fechas o episodios.",
  }),

  // ——— Búsqueda profunda 2026-09-21 ———
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, vol. II, sección 17: «Leyendas», de Enrique Otero D'Costa",
    author: "Eugenia Villa Posse (investigación y compilación); texto de Enrique Otero D'Costa",
    year: 1993,
    type: "antología regional que reproduce un libro de 1936",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Empieza en la página 60 y cierra en la 63 la sección entera, y es el único testimonio del caso. De aquí salen el nombre y el cargo del protagonista —don Juan Pérez de Luchando y Yurreamendi, contador de las reales cajas de Cartagena de Indias—, las dos muertes anunciadas de 1620 y 1650, el gobierno de don Juan de Borja en el Nuevo Reino, el médico que ausculta, sangra y dictamina «¡Mortuus!», el pleito de las hermanas doña Cristina y doña Mercedes por la mortaja franciscana o dominica, el lienzo de Castilla que ordena el cura, el hisopazo errado en la cara del difunto, la zapateta, Diego de Cárcamo el soldado de Flandes que lo atrapa en la cocina, la palabra «catalepsia» dicha en el cuerpo del relato y el remate: «¡Después de mi Dios, al hisopazo!». El volumen reproduce «Leyendas» (Bogotá, Editorial Minerva, Biblioteca Aldeana de Colombia, Selección Samper Ortega, 1936, pp. 15-46).",
    limitation:
      "El propio narrador admite dentro del relato que no averiguó el día ni la hora, y no cita documento alguno para un hombre al que da nombre completo, cargo y dos fechas. La nota de la sección atribuye origen «oído por el autor directamente de narraciones campesinas» a «muchas» de estas leyendas, sin decir a cuáles, y aquí no hay narrador ni lugar de escucha. La voz narrativa trata a las dos hermanas y a las vecinas como un coro de necias y a la gente de la casa como ociosos. La segunda muerte, la de 1650, se anuncia y no se cuenta. No hay ejemplar digitalizado del impreso de 1936, y el extracto legible trae erratas ópticas dentro del relato («Sofamente» por «Solamente», «Debérnoslo» por «Debémoslo») y dos folios ilegibles. El dominio sólo responde por https.",
  }),
  stevensonconvento2007: source({
    title: "El convento de San José, huella dominica en el periodo colonial, en «Cartagena de Indias en el siglo XVII», pp. 73-121",
    author: "Antonino Vidal Ortega; Haroldo Calvo Stevenson y Adolfo Meisel Roca (eds.)",
    year: 2007,
    type: "capítulo de historia institucional y religiosa en actas de simposio académico",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=76",
    summary:
      "Documenta, con papeles del Archivo General de Indias, que la pelea del cuento era un pleito real y que tenía causa económica. Escribe que «la falta de personas con patrimonio cuantioso que ayudaran a acrecentar los ingresos de los monasterios hizo que se suscitaran agrias disputas, en ocasiones entre las propias órdenes e incluso con el cabildo catedralicio, sobre el lugar sagrado donde debían reposar al morir los restos de estos pocos acaudalados». Eso es exactamente lo que ocurre alrededor del contador difunto. Y explica por qué había tan poco que repartir: en Cartagena los dominicos «nunca recibieron donaciones de tierras» y dependieron «exclusivamente de las limosnas» y de las capellanías, mientras los jesuitas se quedaban con los grandes comerciantes. Un hidalgo con caudal, muerto en su casa, era para las dos órdenes del relato una de las pocas presas disponibles.",
    limitation:
      "Es la historia de una sola casa religiosa, la dominica de San José, y no estudia a los franciscanos de Cartagena, que son la otra mitad de la disputa. Documenta el tipo de conflicto, no este caso: no menciona a Pérez de Luchando, ni el episodio de 1620, ni ninguna mortaja disputada con nombre propio.",
  }),
  stevensonVida2007: source({
    title: "Vida cotidiana en Cartagena de Indias en el siglo XVII, en «Cartagena de Indias en el siglo XVII», pp. 451-499",
    author: "Margarita Garrido; Haroldo Calvo Stevenson y Adolfo Meisel Roca (eds.)",
    year: 2007,
    type: "capítulo de historia social en actas de simposio académico",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=391",
    summary:
      "Sostiene la frase del relato que más parece adorno: que en esos siglos los bandos existían y se notaban. Reconstruye el conflicto de 1683, cuando las monjas clarisas pidieron pasar de la potestad de los franciscanos a la del obispo Miguel Antonio Benavides, «con ello se formaron dos bandos», hubo asedio armado del convento, expulsión del obispo por la Audiencia y se llegó a hablar de cisma. Y trae el arma que se usaba en esas peleas, que es la del cuento: el obispo ordenó a sus feligreses «de ninguna manera fuesen a misa a sus conventos, se enterraren en ellos, ni con sus hábitos». El hábito con que se amortaja un muerto era una posición en una guerra de jurisdicciones. Añade la consecuencia para los vecinos, que «debieron decidir con qué facción se alineaban, y parecía que en ello iba la salvación de su alma»: los visitantes que en la casa toman partido no están haciendo teatro.",
    limitation:
      "El episodio que documenta es de 1683, sesenta años posterior al que narra el cuento, y enfrenta al obispo con los franciscanos, no a franciscanos con dominicos. Es un ensayo de síntesis: no menciona a Pérez de Luchando ni ninguna disputa por una mortaja particular.",
  }),
  stevensonGobierno2007: source({
    title: "Gobierno, comercio y sociedad en Cartagena de Indias en el siglo XVII, en «Cartagena de Indias en el siglo XVII», pp. 353-377",
    author: "Julián B. Ruiz Rivera; Haroldo Calvo Stevenson y Adolfo Meisel Roca (eds.)",
    year: 2007,
    type: "capítulo de historia política y social en actas de simposio académico",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=356",
    summary:
      "Dice qué era, en esa ciudad, ser contador de las reales cajas, que es el dato del que depende el cuento entero. Sostiene que la administración provincial —gobernador y oficiales reales de nombramiento metropolitano— «conformaba la cúspide del poder sociopolítico», y sentencia que «los cargos de carácter económico, tesorero y contador, proporcionaban un trampolín casi automático para el enriquecimiento», hasta el punto de que «las personas más influyentes del siglo XVII no procedían del sector comercial, sino de la administración». Lo demuestra con los Rebolledo, familia de tesorero y regidores cuyos fraudes y caudales documenta con cédulas y cartas al rey. El muerto del relato no es un vecino cualquiera al que dos órdenes disputan por devoción: es uno de los hombres con más dinero de Cartagena, y por eso hay pelea.",
    limitation:
      "No nombra a Juan Pérez de Luchando y Yurreamendi en ninguna de sus nóminas de oficiales reales, de modo que la existencia del personaje sigue sin cotejo. Es historia de élites y de cabildo: no trata conventos, exequias ni disputas de devoción.",
  }),
  stevensonGasto2007: source({
    title: "Gasto militar y situados en Cartagena de Indias, 1645-1699, en «Cartagena de Indias en el siglo XVII», pp. 249-343",
    author: "José Manuel Serrano Álvarez; Haroldo Calvo Stevenson y Adolfo Meisel Roca (eds.)",
    year: 2007,
    type: "capítulo de historia fiscal con series contables en actas de simposio académico",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=252",
    summary:
      "Muestra qué pasaba por las manos del oficio que el relato menciona de pasada. Reconstruye, cuenta por cuenta, las entradas y salidas de la caja real de Cartagena en la segunda mitad del siglo y establece que «la Caja Real era con mucho la más importante y la que centralizaba la gran mayoría de los ingresos y salidas» de la plaza, alimentada por rentas, situados y préstamos. Documenta también su disfunción crónica: los situados «se retrasaban mucho en su llegada» y la guarnición vivía de empréstitos que se devolvían con el primer envío que llegara. Contar y pagar en esas condiciones era el trabajo diario del difunto, y explica por qué su casa tenía caudal y por qué su muerte convocaba visitas.",
    limitation:
      "Su serie empieza en 1645, veinticinco años después del episodio que el cuento data en 1620, y su objeto es el gasto militar, no la nómina ni las biografías de los oficiales reales. No menciona a ningún contador por su nombre en las fechas del relato.",
  }),
  stevensonJuan2007: source({
    title: "Juan Méndez Nieto y Pedro López de León: el arte de curar en la Cartagena del siglo XVII, en «Cartagena de Indias en el siglo XVII», pp. 385-443",
    author: "Jairo Solano Alonso; Haroldo Calvo Stevenson y Adolfo Meisel Roca (eds.)",
    year: 2007,
    type: "capítulo de historia de la medicina colonial en actas de simposio académico",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=388",
    summary:
      "Da verosimilitud al personaje del que depende toda la broma: el médico que se equivoca. A partir de los «Discursos medicinales» de Méndez Nieto y de la obra de López de León reconstruye la práctica médica cartagenera y registra que «era tal la incertidumbre y el temor ante la muerte que los poderosos gobernadores podían sucumbir en cuestión de horas por un diagnóstico errado y el extravío de los tratamientos», hasta el punto de que personas cultas acudían a curanderos porque sus remedios eran «menos lesivos que los médicos y sangradores ineptos que llevaban hasta extremos casi criminales la sangría». El facultativo del relato hace precisamente eso —huele, pulsa, ausculta, sangra— antes de certificar una muerte que no ocurrió. Documenta además que los médicos con nombre eran los de los gobernantes, el clero y los acaudalados: la clase del difunto.",
    limitation:
      "No trata la catalepsia ni la muerte aparente, que es el diagnóstico que el relato propone, y sus protagonistas son dos médicos del tránsito del siglo XVI al XVII, ninguno de los cuales aparece en el cuento. Es historia de la medicina y no verifica ningún episodio de 1620.",
  }),
  ramirezActos2017: source({
    title: "Actos devocionales y enfermedad: encarnación del milagro en el Nuevo Reino de Granada durante el siglo XVIII, en «Diálogo Andino», n.º 54, pp. 113-125",
    author: "Lina Marcela Silva Ramírez",
    year: 2017,
    type: "artículo arbitrado de historia cultural y religiosa",
    url: "https://dialogoandino.uta.cl/wp-content/uploads/2017/11/09-SILVA-RDA54.pdf",
    summary:
      "Reconstruye la competencia que el remate del cuento resuelve de un portazo: quién se lleva el crédito cuando un enfermo se recupera. Estudia los actos devocionales alrededor de la enfermedad y el proceso por el que la Iglesia fue fijando «la definición de los límites y clasificación de los milagros», con el cuerpo del enfermo como «territorio privilegiado del milagro». Documenta las disposiciones que ordenaban a los médicos atender primero el alma y recoge la instrucción de que la confianza no debía ponerse en los médicos que curan sino en los santos médicos, a quienes había que pedir «que den luz al Médico para que conozca» el mal. Contra ese fondo, la respuesta del resucitado —ni a San Francisco ni a Santo Domingo, sino al hisopazo— no es una ocurrencia: es una insolencia contra un reparto establecido.",
    limitation:
      "Trabaja el siglo XVIII y con relaciones y diarios de clérigos misioneros del interior del Nuevo Reino, no con la Cartagena de 1620. No menciona la catalepsia, ni las disputas entre franciscanos y dominicos, ni este episodio.",
  }),
  stevensondistincion2007: source({
    title: "Más que distinción, en busca de la diferenciación: arqueología histórica de Cartagena de Indias en el siglo XVII, en «Cartagena de Indias en el siglo XVII», pp. 17-67",
    author: "Mónika Therrien; Haroldo Calvo Stevenson y Adolfo Meisel Roca (eds.)",
    year: 2007,
    type: "capítulo de arqueología histórica en actas de simposio académico",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=22",
    summary:
      "Excava una de las dos casas que en el cuento se disputan el cadáver. Presenta los estudios arqueológicos del convento de Santo Domingo y del claustro de San Pedro Claver con el propósito de indagar «las negociaciones de su autoridad religiosa y política, además de las estrategias de producción económica» de esas instituciones, y muestra cómo construyeron identidades que «incidieron y marcaron divisiones en la estructuración de un segmento de la población cartagenera colonial». Es la prueba material de que la rivalidad entre comunidades religiosas no era un chiste de sacristía: se leía en la cerámica, en la mesa y en la obra de sus edificios. El análisis del material del Colegio de Santo Domingo, frente al de la Compañía, deja ver hasta qué punto cada casa se diferenciaba también en lo que comía y en cómo lo cocinaba.",
    limitation:
      "Es arqueología de dos inmuebles concretos, con estratigrafía y cerámica, no historia de las órdenes: no estudia a los franciscanos, no trata exequias ni mortajas y no menciona ninguna disputa por un difunto. Nada dice del contador de las reales cajas ni del episodio narrado.",
  }),
  dCostaLeyendas1964: source({
    title: "Leyendas",
    author: "Enrique Otero D'Costa",
    year: 1964,
    type: "conjunto de leyendas históricas reeditado en revista universitaria",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/view/3125",
    summary:
      "Trae en limpio la otra muerte que no lo era, la que «Similitudes» pone al lado de ésta. En las páginas 64 a 66 imprime «Las Clavellinas», donde una niña esclavizada aparece sin pulso y se incorpora al ser llamada por Pedro Claver, y donde el propio Otero se adelanta al escéptico admitiendo que «bien pudo la muchacha haber padecido un accidente cataléptico» antes de dejar el milagro en pie. Leídas juntas se ve la decisión: allí el diagnóstico se menciona para descartarlo y aquí se escribe en el cuerpo del relato y el milagro se le adjudica a un objeto. La misma trampa clínica, dos salidas opuestas y el mismo autor.",
    limitation:
      "No contiene «A Dios rogando y con el mazo dando»: de las seis piezas que reúne, ninguna es ésta. Es reedición póstuma sin número ni año en las páginas capturadas, con OCR ClearScan que deforma los nombres, y no dice nada de las reales cajas de Cartagena ni de la rivalidad entre franciscanos y dominicos.",
  }),
  mejiaseleccion1994: source({
    title: "La selección Samper Ortega, 1926-1937: historia de un gran legado bibliográfico",
    author: "Juan Luis Mejía",
    year: 1994,
    type: "artículo de historia editorial en revista cultural",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-54/la-seleccion-samper-ortega-1926-1937",
    summary:
      "Pone nombre y número al tomo que cierra con este chiste. Publica el índice completo de la Selección Samper Ortega, donde el 39 es «Enrique Otero D'costa, Leyendas», y reconstruye la empresa: cien volúmenes, 18.500 páginas, nueve años entre 1928 y 1937, Editorial Minerva de Bogotá, con proposición de la Academia Colombiana de Historia del 15 de mayo de 1937. Importa a esta pieza porque una burla sobre dos órdenes religiosas peleando por un milagro se publicó, en 1936, dentro de una colección patrocinada por el Ministerio de Educación Nacional y destinada a bibliotecas de aldea.",
    limitation:
      "Es historia editorial y no reproduce ninguna leyenda: no certifica el contenido del tomo 39 ni menciona esta pieza. Sólo carga con navegador; a `curl` responde con el CAPTCHA de Radware.",
  }),
  camargoHacia2015: source({
    title: "Hacia una nueva comprensión de la historiografía colombiana: breve historia intelectual de Enrique Otero D'Costa (1883-1964)",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "trabajo de grado en historia",
    url: "https://repository.urosario.edu.co/server/api/core/bitstreams/4fc7392a-c2aa-4a84-92ff-4a2402f57200/content",
    summary:
      "Da la clave del diálogo con el lector impaciente que sostiene esta pieza de principio a fin. Documenta el empeño del autor por «dar cuenta de las mentalidades de las personas que vivían dentro de la rígida estructura social colonial, desde los notables hasta aquellos pertenecientes a los sectores populares» —que es el reparto exacto del cuento: un contador de las reales cajas, sus hermanas, las vecinas con escobas y un soldado viejo— y establece que en «Historietas» no hay «una referencia documental específica sobre el uso de las fuentes», que es lo que aquí confiesa el propio narrador al reconocer que no dio con el día ni la hora.",
    limitation:
      "Es un trabajo de pregrado sobre la obra historiográfica del autor. No analiza esta leyenda ni la nombra, y no verifica la existencia del contador Pérez de Luchando ni el episodio de 1620.",
  }),
  historiaBoletin1925: source({
    title: "Boletín de Historia y Antigüedades, año XIV, n.º 166",
    author: "Academia Colombiana de Historia",
    year: 1925,
    type: "boletín académico institucional",
    url: "https://academiahistoria.org.co/boletines/BHA-166.pdf",
    summary:
      "Sostiene, con documento fechado, la adscripción cartagenera de un autor nacido en Bucaramanga. En las páginas 630 y 631, el informe de candidatura firmado por Arturo Quijano y J. D. Monsalve el 1.º de abril de 1924 le reconoce el mérito de ser «fundador de dos importantísimos centros de estudios históricos, el de Cartagena y el de Manizales, y el de sus respectivos órganos, el Boletín historial y el Archivo Historial». Sin ese dato, un cuento sobre el contador de las reales cajas de Cartagena firmado por un santandereano quedaría sin explicación; con él, la ciudad del relato es la ciudad donde el autor trabajó y escribió historia local.",
    limitation:
      "Es documento corporativo de un cuerpo académico y no prueba ningún hecho del siglo XVII. No menciona esta pieza, ni la real hacienda de Cartagena, ni a ninguno de sus personajes.",
  }),
  gonzalezfilo1962: source({
    title: "Al filo de la leyenda (Cartagena, Talleres El Marinero, 1962; impresión de la Imprenta Departamental, 1982, pp. 29-199), reproducida en la sección 28 del tomo II de «Mitos y leyendas de Colombia»",
    author: "Judith Porto de González",
    year: 1962,
    type: "libro de leyendas de autora, reproducido parcialmente en antología institucional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=343",
    summary:
      "Se extiende de los folios 363 a 368 y es la única fuente del relato, además de la pieza que se fecha con más precisión de todo el libro: el texto dice «esa noche sin estrellas de octubre de 1811» y de ahí no se mueve. Sólo aquí constan las tres cuartas partes que el resumen heredado omitía: no únicamente la joven entregada al claustro por un padre que prefiere darla a Dios antes que a los traidores, sino la monja carcelera que resulta ser la hermana mayor del pretendiente y que quince años antes entró allí por la misma causa, la muerte fingida, el ataúd relleno con el hábito, la fuga por el almendro y la boda con dispensa en la iglesia de la Trinidad. El nombre del convento no lo dice: sólo que está en la ciudad amurallada.",
    limitation:
      "El relato mete apellidos comprobables —García de Toledo, Rodríguez Torices, Ayos— junto a personajes que no existen fuera de estas páginas, y no avisa de la diferencia. No nombra el convento, no da día ni documento, y de don Álvaro de Enciso y Fuenmayor y de María del Pilar no hay rastro en ningún registro. Ninguna de sus impresiones —1962, 1979, 1982, 1989— está digitalizada, así que lo que se coteja es la reproducción parcial de 1993.",
  }),
  investigacionMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo II: «Leyendas y cuentos del folclor»",
    author: "Eugenia Villa Posse (investigación y compilación), Ediciones IADAP, Instituto Andino de Artes Populares del Convenio Andrés Bello, Quito",
    year: 1993,
    type: "antología institucional con nota de procedencia por sección",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Justifica que esta ficha separe lo comprobable de lo compuesto, porque es la antología —y no la autora— quien avisa de la mezcla. La nota del folio 359 declara que la sección reproduce las páginas 29 a 199 de «Al filo de la leyenda» y que sus textos «ofrecen una redacción literaria del lenguaje popular», advertencia que aquí hace falta más que en ninguna otra pieza, porque el cuento pone nombres de próceres en una escena inventada. El mismo tomo permite además deshacer un cruce que el catálogo heredado había hecho: la otra sección de Cartagena, la dieciocho, reproduce a Eustorgio Martínez Fajardo, y en su página 111 trae otra historia de convento y política —«¡Maldito sea Napoleón!…»— con el desenlace exactamente contrario. Son dos libros, dos autores y dos décadas.",
    limitation:
      "La compiladora atribuye el conjunto a la tradición oral de la población negra de Cartagena sin decir dónde ni con quién se recogió, y este relato transcurre íntegro entre un castellano del rey, unas familias criollas y un convento de clausura, sin ninguna persona negra. La nota no comenta piezas por separado y no aporta nada sobre el convento, la fecha ni los apellidos.",
  }),
  cartagenaOnce2020: source({
    title: "Once de noviembre (Enciclopedia del Banco de la República)",
    author: "Centro Cultural del Banco de la República de Cartagena",
    year: 2020,
    type: "entrada enciclopédica institucional",
    url: "https://enciclopedia.banrepcultural.org/Once_de_noviembre",
    summary:
      "Fija por fuera del cuento el mes en que la autora lo sitúa. La entrada reconstruye la Cartagena de 1808 a 1815 y narra la deposición del gobernador Montes por un grupo de hombres de Getsemaní, Santo Toribio y Santa Catalina que se congregó armado ante el palacio donde sesionaba el cabildo, y el papel del Regimiento de Pardos Patriotas de Getsemaní bajo Pedro Romero. Ese es el clima de octubre de 1811 que el relato aprovecha para que un castellano del rey pueda llamar traidores a sus vecinos y encerrar a su hija antes que emparentar con ellos: el conflicto entre peninsulares y criollos no es adorno de la trama, es su motor.",
    limitation:
      "Es una síntesis de divulgación sin autor individual y sin notas; el cuerpo del texto no llega a fijar explícitamente la fecha del 11 de noviembre de 1811 ni usa la expresión «lanceros de Getsemaní». No dice nada de conventos, ni de profesiones forzadas, ni de las familias que el relato nombra.",
  }),
  ceraOchoaEscritura2022: source({
    title: "Escritura, creatividad e historia de Cartagena: vida cotidiana y popular a través de la obra de Judith Porto de González",
    author: "Raúl Antonio Cera-Ochoa, Instituto de Patrimonio y Cultura de Cartagena (IPCC) e Iniciación Científica",
    year: 2022,
    type: "monografía de investigación patrimonial sobre la autora",
    url: "https://iniciacioncientifica.com/editorial/index.php/libros/article/view/1",
    summary:
      "Sitúa el encierro de esta muchacha dentro del lugar que la iglesia ocupa en toda la obra de la autora, que es mucho más que un decorado. La investigación, financiada por el Instituto de Patrimonio y Cultura de Cartagena, dedica un apartado —«La iglesia como segundo hogar»— a mostrar que en sus cuentos el ritmo de la vida cartagenera lo marcan las campanas, que la misa convoca sobre todo a mujeres y que para ellas la oración era una obligación diaria y la vía por la que la institución les enseñaba a administrar la casa, a los sirvientes y el matrimonio. Recoge además el juicio de Juan Zapata Olivella sobre este mismo libro: sus cuentos evocan sucesos «que más tienen de tradición y de embrujo maravilloso, que de acontecimientos históricos verdaderos». Es la advertencia exacta que necesita un relato lleno de apellidos reales.",
    limitation:
      "Es una cartilla de veintisiete páginas, no un estudio crítico: no analiza este relato, no distingue entre sus personajes documentados y sus personajes inventados y no menciona la reproducción de Villa Posse. Su propia ficha de «Al filo de la leyenda» oscila entre 1961 y 1962, y no registra la impresión de 1982 de la Imprenta Departamental.",
  }),
  mUHCAFiestas2017: source({
    title: "Fiestas de la Independencia (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_fiestas-de-la-independencia-124",
    summary:
      "Documenta el acontecimiento hacia el que el relato mira sin llegar a contarlo. El artículo narra la irrupción de Pedro Romero al frente de los Lanceros de Getsemaní en la sala donde sesionaba la junta el 11 de noviembre, con el pliego completo de exigencias, y registra que la primera conmemoración se celebró el 11 de noviembre de 1812 y que las fiestas se suspendieron durante el sitio de Morillo. La leyenda está escrita en la víspera de esa jornada —octubre de 1811— y el encierro de la muchacha se explica por lo que su padre ve venir.",
    limitation:
      "Es divulgación institucional de unas pocas páginas, sin bibliografía y sin autor firmante. No menciona esta leyenda ni a su autora, y el índice de la serie no se puede recorrer: el sitio devuelve error 406 a las rutas de listado, de modo que la pieza sólo se alcanza por búsqueda directa.",
  }),
  diazTres2009: source({
    title: "Tres siglos de historia demográfica de Cartagena de Indias",
    author: "María Aguilera Díaz y Adolfo Meisel Roca, Colección de Economía Regional, Banco de la República",
    year: 2009,
    type: "libro de historia demográfica regional",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_3_siglos_histo_demo_cartag_0.pdf",
    summary:
      "Mide en cifras la ciudad amurallada donde cabe todo el relato: la casa del castellano, el convento de clausura y la iglesia de la boda, a pocas calles unos de otros. El estudio reconstruye la población de Cartagena sobre el censo de 1777 y sigue su curva hasta la Independencia, y describe la escala de una ciudad en la que las familias de la élite se conocían entre sí y en la que una noticia —quién entró al claustro y quién se casó con quién— circulaba en horas. También fecha en 1815 la catástrofe que cerró ese mundo, con la que la autora remata varias piezas vecinas del mismo libro.",
    limitation:
      "No trata de conventos, votos ni derecho canónico, y no menciona la profesión forzada ni a ninguna de las familias del relato. Es historia demográfica hecha sobre tres censos, con la Independencia como frontera entre dos de ellos y no como objeto de estudio.",
  }),
  prestaIngresos2020: source({
    title: "Ingresos forzados, vocaciones incentivadas y voces desesperadas en el Monasterio de Nuestra Señora de los Remedios de la ciudad de La Plata, Charcas 1574-1640 (Autoctonía. Revista de Ciencias Sociales e Historia, vol. IV, n.º 2, pp. 142-164)",
    author: "Ana María Presta, PROHAL, Instituto Ravignani, Universidad de Buenos Aires-CONICET",
    year: 2020,
    type: "artículo arbitrado de historia social con documentación de archivo",
    url: "https://dialnet.unirioja.es/descarga/articulo/8423465.pdf",
    summary:
      "Acredita en papeles de archivo el dispositivo que el cuento pone en marcha en su primera página. El artículo estudia el primer monasterio femenino de la Audiencia de Charcas y muestra que la élite lo creó, entre otras cosas, para depositar allí a las hijas que había decidido no casar y a las jóvenes «a quienes sus padres, maridos, hermanos o tutores forzaban o incentivaban a convertirse en esposas de Cristo»; y recupera las voces de las que entraron por mandato patriarcal y dejaron rastro de disconformidad, abandono y esperanza de volver al siglo. La profesión forzada no es un recurso de comedia: es una práctica registrada, y el relato la muestra funcionando dos veces sobre dos generaciones de mujeres.",
    limitation:
      "Su terreno es Charcas entre 1574 y 1640, no Cartagena en 1811: no documenta ningún convento cartagenero, ni la coyuntura independentista, ni el motivo político que en esta leyenda decide el encierro. Tampoco registra fugas como la que el cuento narra; lo que documenta es la resistencia por escrito, no la evasión.",
  }),
  dominguezafro2011: source({
    title: "Lo «afro» en el discurso turístico de Cartagena: subexposición y sobreexposición, en «Circulaciones culturales. Lo afrocaribeño entre Cartagena, Veracruz y La Habana»",
    author: "Freddy Ávila Domínguez, en Ávila Domínguez, Pérez Montfort y Rinaudo (eds.), IRD Éditions / CIESAS",
    year: 2011,
    type: "capítulo académico sobre representación y patrimonio afrocaribeño",
    url: "https://books.openedition.org/irdeditions/19221",
    summary:
      "Nombra la operación que esta ficha deja declarada sin resolver: un conjunto presentado como tradición oral de la población negra de Cartagena cuyo relato transcurre entero entre un castellano del rey, unas familias criollas y un convento de clausura. El capítulo estudia cómo la imagen de Cartagena se construye sobre una ciudad doble —la zona monumental y rica frente a los barrios marginados— y sobre un doble régimen de visibilidad que sobreexpone unas pocas figuras afro convertidas en espectáculo y deja fuera del cuadro la vida real y la tradición oral de esa población. La ciudad amurallada del cuento es precisamente la mitad que sí se muestra.",
    limitation:
      "Analiza el discurso turístico contemporáneo y su genealogía en el siglo XX, no la literatura de leyendas: no menciona a Porto de González, ni a Villa Posse, ni la Independencia. El paralelo con esta ficha es interpretativo y no está en el texto del capítulo.",
  }),
  rodriguezhonra2023: source({
    title: "De la honra de las vírgenes al honor sexual de las demandantes: el tratamiento del estupro en la Nueva Granada y en la República de Colombia",
    author: "Diana Isabel Molina Rodríguez y Nathaly Rodríguez Sánchez",
    year: 2023,
    type: "artículo arbitrado de historia del derecho",
    url: "https://dialnet.unirioja.es/descarga/articulo/9576937.pdf",
    summary:
      "Explica por qué la carta falsa de Benavides funciona y por qué el marqués no tiene salida. Reconstruye el régimen de las Partidas sobre el estupro y llega al punto que el relato convierte en trampa: «aún si el estupro era efectuado contra la voluntad de la mujer, el matrimonio restablecía la situación inicial, es decir, volvía a poner las cosas en su lugar, devolviéndole la honra a la mujer y el honor a la familia agraviada». Y añade la clave de a quién se repara: «La honra se configuraba en este caso como el elemento valioso a cuidarse, esto es, como un bien familiar de importante repercusión social para un grupo, más que como una condición intrínseca de una mujer». Eso es literalmente lo que hacen los tres hombres del cuento: tratar la deshonra de doña Mariana como un bien del padre que sólo la boda repone.",
    limitation:
      "Es historia del derecho con casos judiciales del siglo XIX y del XX; sus ejemplos de archivo son de 1830 y de 1969, no de la Cartagena del XVII. No menciona esta leyenda, ni el encierro conventual, ni ningún expediente cartagenero: sostiene la lógica jurídica que el relato explota, no los hechos que narra.",
  }),
  lopezJerezCarceles2025: source({
    title: "Cárceles de Mujeres y del Divorcio: diferenciación sexual de las penas en el Virreinato del Nuevo Reino de Granada, siglos XVII a XIX",
    author: "Mabel López-Jerez",
    year: 2025,
    type: "artículo arbitrado de historia del derecho con perspectiva de género",
    url: "https://dialnet.unirioja.es/descarga/articulo/10366251.pdf",
    summary:
      "Nombra la institución que el cuento usa sin nombrar: el encierro de una mujer como sanción familiar, no penal. Documenta que el recogimiento, «como práctica institucional, involucraba a un número significativo de mujeres y niñas que vivían voluntaria o involuntariamente en Colegios, Casas de Arrepentidas, Casas de Recogidas, Hospitales, Hospicios, Divorcios, Conventos y Beaterios», y precisa que las mujeres de posición cumplían su reclusión «en casas de familia de reputación intachable, en conventos —para las nobles— o en casas de rehabilitación». Sitúa además esos espacios como herederos de un encierro pensado para «reconducir moralmente a quienes amenazaban el orden social y familiar», que es la razón que el marqués nunca enuncia y que el relato da por evidente.",
    limitation:
      "El grueso de su documentación es del siglo XVIII y comienzos del XIX —informes de visitas de cárcel y sentencias—, y su eje son las cárceles de Santafé, no los conventos de Cartagena. No menciona Santa Clara, ni este caso, ni ninguna reclusión del siglo XVII en la costa.",
  }),
  iniestafundacion2008: source({
    title: "La fundación del convento de Santa Teresa de Cartagena de Indias",
    author: "María Salud Elvás Iniesta",
    year: 2008,
    type: "artículo arbitrado de historia colonial con documentación de archivo",
    url: "https://revistascientificas.us.es/index.php/Temas_Americanistas/article/download/14737/12867/52477",
    summary:
      "Permite ver por dentro la otra mitad del par conventual cartagenero y, con ella, lo que costaba meter a una hija en un claustro. Estudia el acta que doña María de Barros y Montalvo firmó el 24 de marzo de 1609 para fundar Santa Teresa, y con ella los medios de financiación de una casa de monjas y el linaje que la sostiene: los Barros, descendientes del portugués Sebastián de Barros, «una de las más influyentes de la ciudad en los siglos XVI y XVII». Sirve a esta ficha para entender que un convento de Cartagena no era un depósito neutro sino una obra de familia poderosa, y que ingresar en él se negociaba entre linajes, tal como el marqués negocia el destino de doña Mariana sin consultarla.",
    limitation:
      "Trata Santa Teresa y no Santa Clara, que es el convento del relato, y su foco está en la fundación de 1609 y en la genealogía de la fundadora, no en el uso del claustro como sanción paterna. No menciona a los Villalta ni este episodio.",
  }),
  restrepoPoblamiento2011: source({
    title: "Poblamiento en la provincia de Antioquia (Nueva Granada) en los siglos XVI y XVII, en «Letras Históricas», n.º 4, pp. 15-41",
    author: "Juan Santiago Correa Restrepo",
    year: 2011,
    type: "artículo arbitrado de historia económica y territorial",
    url: "http://publicaciones.cucsh.udg.mx/pperiod/Lhistoricas/pdfs/vol4/1.pdf",
    summary:
      "Da realidad al tramo final del cuento, el que saca a los esposos de Cartagena y los pierde en el camino. Reconstruye el triángulo minero que organizaba la gobernación —«Santafé de Antioquia, Cáceres, Zaragoza y Guamocó»— y sostiene que Santafé de Antioquia «era el principal centro político y económico de la provincia», lo que explica que sea su cabildo, y no otro, el que resuelve devolver a los esposos bajo custodia. Documenta también la decadencia minera del siglo, con la producción de Santafé caída a una tercera parte hacia 1625: la gobernación a la que nombran a Benavides no era un premio próspero. Y sitúa Cáceres y Ayapel en la ruta fluvial hacia el Cauca y el Magdalena, que es por donde el enfermo pierde el juicio.",
    limitation:
      "Es historia del poblamiento y de la minería, con cifras de cajas reales y fundaciones: no trata cabildos como tribunales ni recoge acuerdos capitulares. No menciona a Manuel de Benavides y Ayala ni a ningún gobernador de Antioquia de este episodio, de modo que la escena del cabildo sigue sin cotejo documental.",
  }),
  investigacionMitos19933: source({
    title: "Mitos y leyendas de Colombia, vol. II · sección 18, «Cuentos y leyendas · Cartagena, Departamento de Bolívar», pp. 65-123",
    author: "Eugenia Villa Posse (investigación y compilación); texto de Eustorgio Martínez Fajardo",
    year: 1993,
    type: "antología de literatura oral que reproduce el impreso original",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Tres páginas, de la 105 a la 107, y son las únicas donde se conserva esta pieza. Lo que sólo aquí consta es la mecánica social del episodio: las casas nobles compitiendo en la subida del 2 de febrero con las personas que esclavizaban cargadas de joyas, los cabildos organizados con un cacique o una cacica al frente y un canto propio para cada grupo, la prohibición de matrimonio impuesta por los amos, y el castigo que recaía sobre quien dañara una alhaja ajena. La nota de procedencia de la página 65 es lo que obliga a leer esa descripción como escritura de 1948 sobre memoria de ciudad, no como informe: el autor trabajó literariamente el material antes de imprimirlo.",
    limitation:
      "Registro de segunda mano, en selección y sin aparato: ni grabación, ni narrador, ni fecha de recolección. La reproducción arrastra además erratas de escaneo —imprime «Qrellana de Azuá» donde el sentido pide «Orellana»— y da el sello como «Editorial Nuevo Mundo» frente al «Mundo Nuevo» de los catálogos nacionales. La cifra final de pérdidas la atribuye el propio texto a unos «cronistas de la época» que no nombra, y la antología no los identifica.",
  }),
  urbanosHistoria2010: source({
    title: "Historia del Cerro de la Popa (Macroproyecto de Recuperación Integral del Cerro de la Popa, Producto 3)",
    author: "Grupo de Estudios Urbanos, para el Establecimiento Público Ambiental de Cartagena (EPA Cartagena)",
    year: 2010,
    type: "anexo histórico de consultoría distrital, con notas al pie",
    url: "https://observatorio.epacartagena.gov.co/ftp-uploads/ga-eco-lp-macrop-anexo-historia.pdf",
    summary:
      "Reconstruye la subida que el relato convierte en pasarela. Fija la fiesta del 2 de febrero con su novena desde el 24 de enero, la procesión hasta la ermita del Pie de la Popa y el auge de la romería hacia 1930, cuando se traían burros, caballos y mulas de los pueblos vecinos para alquilarlos a quien no quisiera hacer la cuesta a pie. Documenta también que el entorno del cerro fue desde comienzos del XVII zona de estancias, tejares y pesquerías labradas «con sus esclavos e indios», y escenario de reuniones de cimarrones encabezadas por el mestizo Luis Andrea, condenado por el Santo Oficio en 1613. Es decir: el mismo cerro donde el relato pone el desfile de joyas tenía ya una historia de trabajo esclavo y de reunión clandestina.",
    limitation:
      "Anexo de consultoría no arbitrado, apoyado en buena medida en Marco Dorta y con una advertencia propia sobre la falta de referencias de una de sus fuentes. No documenta los cabildos de nación en la peregrinación, que es el dato más valioso del relato, ni la exhibición de personas esclavizadas enjoyadas. El año procede de la creación del archivo, porque el documento no se fecha.",
  }),
  lopezMiedo2006: source({
    title: "Miedo, rumor y rebelión: la conspiración esclava de 1693 en Cartagena de Indias (Historia Crítica, n.º 31)",
    author: "Sandra Beatriz Sánchez López, Universidad de los Andes",
    year: 2006,
    type: "artículo arbitrado de historia colonial",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-16172006000100003",
    summary:
      "Es el contrapeso documental del cuento. Reconstruye un episodio real de la misma ciudad en el que la población esclavizada aparece deliberando, organizándose y siendo temida, es decir, con la capacidad de acción que el relato le niega a su protagonista, reducido a instrumento de unos celos y a causante de la ruina de sus amos. Permite decir que la vida colectiva de los esclavizados cartageneros está documentada por otras vías, y que lo que el relato elige contar de ella —una joya rota, una venganza doméstica— es una elección y no el único material disponible.",
    limitation:
      "Trata un episodio de 1693 y un plan de rebelión, no la fiesta del cerro, ni los cabildos de nación en procesión, ni la topografía urbana de la esclavitud: en el artículo no aparece La Popa. Cronológicamente queda muy por delante del ambiente que el relato describe, que es de fin de la Colonia.",
  }),
  parraestudios2025: source({
    title: "Los estudios sobre la esclavitud en el Caribe colombiano (Historia Caribe, vol. 20, n.º 47, pp. 197-222)",
    author: "Sandra Milena Taborda Parra, Universidad del Atlántico",
    year: 2025,
    type: "artículo de balance historiográfico",
    url: "https://revistas.uniatlantico.edu.co/index.php/Historia_Caribe/article/download/4353/5079",
    summary:
      "Da la medida de lo que se sabe y de lo que no sobre el mundo que el relato describe de oído. Es el mapa actualizado del campo —qué se ha investigado sobre esclavitud en el Caribe colombiano, con qué archivos y desde qué preguntas—, con Cartagena como escenario dominante, y sirve para comprobar que la escena central de la pieza, la exhibición de personas esclavizadas enjoyadas como emblema del prestigio de sus amos, no está sostenida por ninguno de los trabajos que reseña. Es la fuente que convierte una duda vaga en una laguna localizada.",
    limitation:
      "Es revisión de obra ajena y no investigación primaria: no aporta un solo documento de archivo sobre este episodio ni sobre la fiesta de la Candelaria. El título del PDF difiere del título del registro en la revista, lo que obliga a citarlo con cuidado.",
  }),
  mUHCAPlaza2017: source({
    title: "«Plaza de los Coches» (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_plaza-de-los-coches-79",
    summary:
      "Nombra el lugar donde empieza la biografía que el relato supone. Enumera los nombres sucesivos de la plaza —del Juez, de la Yerba, del Rollo, de los Mercaderes— y entre ellos uno literal: «Plaza del Esclavo, por efectuarse en ella remates o ventas de esclavos». Con esa línea, el hombre del relato deja de ser una figura decorativa de la cuesta de La Popa y pasa a tener un punto de entrada documentado en la ciudad, a doscientos metros de la muralla, donde se le puso precio.",
    limitation:
      "Es divulgación municipal de unos pocos párrafos, sin bibliografía, sin autor individual y sin fecha visible en la página; el año se toma de las entradas fechadas de la misma serie. Da el nombre de la plaza y nada del funcionamiento del mercado: ni volúmenes, ni fechas, ni procedencias.",
  }),
  sierravirgen2016: source({
    title: "La virgen de la Candelaria: fiesta, idoloclastía y colonización de imaginarios en Cartagena de Indias",
    author: "Édgar Gutiérrez Sierra, Universidad de Cartagena",
    year: 2016,
    type: "ensayo académico de historia cultural",
    url: "https://dialnet.unirioja.es/descarga/articulo/5810284.pdf",
    summary:
      "Explica por qué la fiesta del cerro es el sitio exacto donde una jerarquía se exhibe. Lee la Candelaria de La Popa como el resultado de una operación sobre los imaginarios indígenas y africanos —la idoloclastía contra el culto que allí se atribuía, el proceso inquisitorial del 2 de febrero de 1614 contra el mestizo Luis Andrea— y al mismo tiempo como el marco festivo donde sobreviven música, baile y comida de la cultura popular. Esa tensión entre imposición y permanencia es la que el relato aprovecha sin nombrarla: los cabildos suben cantando lo suyo dentro de una fiesta que no es suya.",
    limitation:
      "El PDF de Dialnet no trae en cabecera revista, número ni año, de modo que el contenedor bibliográfico sigue sin fijar y el año consignado es el del registro. Es ensayo interpretativo más que estudio de archivo, y su fecha para el proceso de Luis Andrea discrepa de la del anexo del EPA.",
  }),
  bolivarEspacio2009: source({
    title: "Espacio Cultural de San Basilio de Palenque · Plan Especial de Salvaguardia",
    author: "Ministerio de Cultura de Colombia; Observatorio del Caribe Colombiano; Fondo Mixto de Bolívar",
    year: 2009,
    type: "expediente de salvaguardia de patrimonio inmaterial",
    url: "https://patrimonio.mincultura.gov.co/SiteAssets/Paginas/PES-Palenque/01-Espacio%20Cultural%20de%20San%20Basilio%20de%20Palenque%20-%20PES.pdf",
    summary:
      "Documenta la forma de organización que el relato describe y no sabe nombrar. El expediente reconstruye las agrupaciones por procedencia y parentesco con las que la población africana y afrodescendiente del entorno de Cartagena organizó su vida colectiva —jefaturas propias, repertorios propios, ritual funerario y musical propio—, y con ello permite afirmar que los grupos con cacique o cacica al frente y con su canto particular que el texto ve subir al cerro no son un adorno del autor, sino la institución real que sostenía buena parte de esa vida.",
    limitation:
      "Su objeto es San Basilio de Palenque y no los cabildos de nación de la ciudad amurallada, y su mirada es la del patrimonio inmaterial contemporáneo, con los datos históricos en función de la salvaguardia. Es un expediente de gestión, no una monografía: no permite fechar ni localizar ninguna procesión concreta al cerro de La Popa.",
  }),
  cervantesConvento2002: source({
    title: "Convento de la Popa (Ciudades Patrimonio · Cartagena de Indias, «De paseo», n.º 35)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/convento_popa.htm",
    summary:
      "Da la cuesta y la cima que el relato recorre sin describir: el convento, el claustro y la capilla de la Candelaria en lo alto del cerro, la fundación de 1607, y la leyenda del fraile que despeña por la escarpa al chivo al que, según esa misma tradición, rendían culto los mulatos bajo la dirección de Luis Andrea. Ese detalle importa aquí porque muestra que el cerro llegó al siglo XVIII con una historia previa de población negra y mulata asociada al lugar, lo que vuelve menos casual que la fiesta se organizara con cabildos.",
    limitation:
      "Ficha de divulgación turística sin referencias, escrita desde España para el visitante, y perteneciente a un conjunto que contiene un error de bulto en la cronología independentista de la ciudad. Reproduce la versión devota del episodio de Luis Andrea sin crítica de fuentes, y no dice nada de la romería del 2 de febrero como práctica social.",
  }),
  mUHCAFiestas20172: source({
    title: "«Fiestas de la Candelaria» (serie «cartapedia»)",
    author: "Enrique Muñoz; Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_fiestas-de-la-candelaria-enrique-munoz-51",
    summary:
      "Acredita quién mira, que en esta pieza es la cuestión decisiva. Identifica al autor como el periodista cartagenero que firmaba «Eumarfa» y caracteriza su obra como recreación fantástica de la imaginación popular de la ciudad histórica: un cronista urbano de clase letrada escribiendo en los años cuarenta sobre la esclavitud colonial. Eso es lo que explica el tono de catálogo con que enumera diademas y apellidos nobles y la facilidad con que el remate hace responsable del desastre al hombre esclavizado.",
    limitation:
      "Su pie de imprenta contiene dos errores verificados y no debe copiarse. No cita fuentes, carece de fecha visible y no menciona este relato: aporta autoría y método, nada del contenido.",
  }),
  olivellaTradicion1972: source({
    title: "Tradición oral y conducta en Córdoba",
    author: "Manuel Zapata Olivella",
    year: 1972,
    type: "estudio antropológico con corpus de literatura oral transcrito",
    url: "https://zapataolivella.univalle.edu.co/obras/tradicion-oral-y-conducta-en-cordoba/",
    summary:
      "Es el registro que fija este relato. El título cierra la página 252 de la tercera edición y el cuento entero cabe en la 253, impreso como «Conejo y Caimán», sin los tratamientos de tío que el habla del diálogo sí les da. La página sostiene lo que ninguna paráfrasis conserva: que no hay asalto sino contrato, porque Conejo llega buscando empleo, la idea de contratarlo es de Tía Caimana, le entregan los huevos y se los bebe; y que por eso el reproche final no va contra el ladrón sino contra el marido que no lo amarró. Es también la fuente del cierre en la cueva, con el matrimonio discutiendo, y de la posición de la pieza justo antes de la roza de Tío Conejo, donde la sección entra de lleno en el ciclo del burlador.",
    limitation:
      "No nombra a quien lo contó ni fecha la pieza: el libro habla siempre de «el informante» y lo único datable es la campaña de 1969-1970 en el Medio y Bajo Sinú. Tampoco declara el género de cada texto, de modo que la clasificación como chiste que sí da el catálogo de Indiana no tiene equivalente aquí. Las páginas citadas son las de la edición digital de 2021 de la Universidad del Valle; la primera del Incora de 1972 numera distinto.",
  }),
  mcDowellAnimal2017: source({
    title: "Animal Tales from the Caribbean",
    author: "George List; ed. John Holmes McDowell y Juan Sebastián Rojas E.",
    year: 2017,
    type: "edición académica bilingüe de grabaciones de campo",
    url: "https://muse.jhu.edu/book/59646",
    summary:
      "Es el segundo registro independiente de este argumento y el único que trae narrador con nombre. La pieza número 10 del volumen se titula «Tío Conejo y Tío Caimán» y ocupa las páginas 191 y 192 de la sección en español; la narró Silverio Martínez Torres y la grabó George List en el departamento de Bolívar. Que el mismo cuento aparezca en dos campañas distintas, en dos departamentos y con cuatro años de diferencia es lo que prueba que circulaba por la costa y no era una pieza local del Sinú: es el paralelo que `similitudes` nombra en primer lugar. El título bolivarense da tratamiento de tío a los dos animales donde el cordobés lo reserva para el diálogo.",
    limitation:
      "El texto del relato no se pudo leer: el volumen está tras muro de pago en Project MUSE y en JSTOR, y de él sólo se verificaron el índice con narradores y paginación y la descripción editorial. No consta, por tanto, si en esa versión existe Tía Caimana, ni si el equívoco de los arpones se resuelve igual, ni cómo termina. Dos páginas de extensión es lo único comparable con seguridad.",
  }),
  musicArchives1965: source({
    title: "Archives of Traditional Music, colección 65-291-F «Colombia, Dept. Bolívar, 1964» (catálogo en línea, copia archivada)",
    author: "Archives of Traditional Music, Indiana University Bloomington",
    year: 1965,
    type: "catálogo de archivo sonoro con metadatos por pista",
    url: "https://web.archive.org/web/2024/https://libraries.indiana.edu/animal-tales-caribbean",
    summary:
      "Pone fecha y soporte a la única voz con nombre de este cuento. El catálogo consigna la grabación de «Tío Conejo y Tío Caimán» a Silverio Martínez el 12 de marzo de 1965 y —dato que el libro cordobés no da de ninguna de sus piezas— declara el género: chiste, no cuento. Ese mismo narrador grabó ese día una segunda pieza del ciclo del conejo, de modo que la del caimán no le llegó suelta. Es la fuente que permite escribir en `versiones` que el registro bolivarense tiene día, cinta y número de colección mientras el cordobés no tiene ninguno de los tres.",
    limitation:
      "El catálogo abrevia el nombre como «Silverio Martínez» y el libro escribe «Silverio Martínez Torres»: se sigue la grafía del libro, que es la edición crítica, y la variante queda declarada. Da el departamento, Bolívar, pero no el municipio ni el corregimiento de la grabación. Las páginas vivas del catálogo devuelven 404 y sólo existe la copia archivada.",
  }),
  mcDowellAnimal20172: source({
    title: "Animal Tales from the Caribbean — índice del volumen",
    author: "George List; ed. John Holmes McDowell y Juan Sebastián Rojas E.",
    year: 2017,
    type: "índice impreso verificado de una edición académica de campo",
    url: "https://toc.library.ethz.ch/objects/pdf03/z01_978-0-253-02937-9_01.pdf",
    summary:
      "Es la prueba documental de la paginación y del orden en que este cuento aparece en el corpus bolivarense: el número 10 de veintiuno, entre «El hombre» y «El conejo que quería ser el hombre más grande del mundo», con Silverio Martínez Torres como narrador de los dos últimos. El índice también muestra que el volumen reparte los mismos veintiún relatos en dos bloques, inglés y español, y que el de esta pieza en español va de la 191 a la 192, que es la cifra con la que se puede afirmar que la versión bolivarense tiene una extensión parecida a la cordobesa y no la amplifica.",
    limitation:
      "Sólo es el índice de contenidos: no reproduce ni una línea del relato. Sirve para sostener la localización bibliográfica de la segunda versión, no su contenido, y el capítulo de tipología de Hasan M. El-Shamy que ocupa las páginas 103 a 132 tampoco se pudo consultar.",
  }),
  musicGeorge2023: source({
    title: "George List Colombia Collections",
    author: "Archives of Traditional Music, Indiana University Libraries",
    year: 2023,
    type: "descripción archivística de fondo sonoro",
    url: "https://libraries.indiana.edu/george-list-colombia-collections",
    summary:
      "Explica por qué de este argumento hay dos registros y no uno, y por qué los dos salen del mismo círculo de trabajo. La descripción del fondo documenta que List grabó más de ciento veinte cintas en cuatro viajes al Caribe colombiano entre 1964 y 1970, enumera los números de acceso —entre ellos el 65-291-F, que es el de esta pieza— y declara que para acceder a las comunidades y escoger a los intérpretes trabajó con los folcloristas colombianos Winston Caballero y los hermanos Manuel y Delia Zapata Olivella. Winston Caballero Salguedo es el mismo sociólogo que dirigió la búsqueda de géneros del libro cordobés: la coincidencia de este cuento en los dos corpus tiene ahí su explicación documental.",
    limitation:
      "Es una descripción de fondo: no contiene ningún relato y no menciona esta pieza. Tampoco indica en qué corregimiento se grabó cada cinta, de modo que del registro bolivarense sigue sin conocerse el lugar exacto. Que List trabajara con Zapata Olivella no prueba que los dos recogieran este cuento del mismo informante ni en el mismo sitio.",
  }),
  baqueroAlgunos1988: source({
    title: "Algunos comentarios socioeconómicos sobre los habitantes de los humedales de los ríos San Jorge y Sinú",
    author: "Álvaro Baquero",
    year: 1988,
    type: "artículo de investigación socioeconómica regional",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7169",
    summary:
      "Documenta el mundo anfibio que este cuento da por sabido y que la ficha necesita para no inventarlo: las ciénagas y caños del bajo Sinú donde el caimán es un animal con el que se convive y no una figura exótica, la pesca y la recolección de huevos como actividades de subsistencia estacional, y la circulación en canoa y a nado por un paisaje que se inunda y se seca. El equívoco de la pieza —un animal que atraviesa el agua cargando a otro y que recibe órdenes gritadas desde la orilla— sólo es verosímil en un terreno donde el paso del agua es una operación cotidiana y negociada.",
    limitation:
      "No trata literatura oral ni menciona ningún relato: aporta el contexto material y no una fuente del cuento. Se centra sobre todo en los humedales del San Jorge y sus datos son de mediados de los ochenta, quince años posteriores a la campaña que recogió esta pieza. No documenta el trabajo asalariado de cuidar nidos ajenos, que es el nudo del relato.",
  }),
  republicaManuel2017: source({
    title: "Manuel Zapata Olivella (Enciclopedia)",
    author: "Red Cultural del Banco de la República",
    year: 2017,
    type: "ficha enciclopédica de autor",
    url: "https://enciclopedia.banrepcultural.org/index.php/Manuel_Zapata_Olivella",
    summary:
      "Importa a esta ficha por un detalle de biografía que explica la coincidencia de los dos registros: el recopilador del texto cordobés es loriquero, es decir, nacido en el bajo Sinú, y fue a la vez médico, antropólogo y folclorista con trabajo de campo en las dos costas. Esa doble condición —hombre de la región y profesional del registro— es la que lo pone, cuatro años antes de su propia campaña, dentro del equipo con el que George List grabó en Bolívar. El perfil permite sostener en `historia` que el cordobés anónimo y el bolivarense con nombre son dos maneras de trabajar del mismo círculo y no dos tradiciones distintas.",
    limitation:
      "Ficha enciclopédica de divulgación, sin aparato ni bibliografía detallada. No menciona Tradición oral y conducta en Córdoba, ni la colaboración con George List, ni este relato. Perfil de autor de segundo escalón: no sostiene nada de lo que se afirma sobre el cuento.",
  }),
  escobarManuel2026: source({
    title: "Manuel Zapata Olivella en el folclor y la radio pública",
    author: "Felipe Arias Escobar, Señal Memoria — RTVC Sistema de Medios Públicos",
    year: 2026,
    type: "artículo de archivo sonoro público, con audios de la Radiodifusora Nacional",
    url: "https://www.senalmemoria.co/articulos/manuel-zapata-olivella-en-el-folclor-y-la-radio-publica",
    summary:
      "Adelanta en dieciséis años el interés del recopilador por el material del que sale esta pieza. El artículo publica los audios de un ciclo de conferencias grabado por la Radiodifusora Nacional en julio de 1956, y la del 10 de julio trató sobre la literatura tradicional en los departamentos de Córdoba y Bolívar —los dos de donde salen los dos registros de este cuento—, con Zapata lamentando en ella la falta de estudios sobre la materia. Es la prueba de que cuando en 1965 grabó para List en Bolívar y en 1969 empezó a recoger en el Sinú no estaba estrenándose en el asunto, sino cerrando un trabajo que llevaba planteando una década.",
    limitation:
      "Es un artículo de divulgación de archivo, de 2026, con fragmentos de audio seleccionados: no transcribe las conferencias enteras ni dice qué relatos concretos se citaron en ellas. No menciona Tradición oral y conducta en Córdoba, ni a George List, ni esta pieza. No aporta ningún dato sobre el cuento, sólo sobre la trayectoria de quien lo publicó.",
  }),
  universityManuel2026: source({
    title: "Manuel Zapata Olivella Collections — tema «cuentos», Jean and Alexander Heard Library",
    author: "Vanderbilt University",
    year: 2026,
    type: "archivo digital de grabaciones de campo con ficha por registro",
    url: "https://mzo.library.vanderbilt.edu/topics/cuentos",
    summary:
      "Muestra por contraste lo que se perdió en el registro cordobés de este cuento. En el archivo de Zapata Olivella las grabaciones de cuentos sí llevan número, fecha, lugar y entrevistado con nombre —Bayron Antonio Zapata y Marco Aurelio Correa en Santa Fe de Antioquia el 7 de septiembre de 1974, Jacinto Mena Robledo en Quibdó el 1 de diciembre del mismo año, varias sesiones en Barrancas, La Guajira, en octubre de 1985—, de manera que el anonimato de la versión sinuana no es una costumbre del recopilador sino una decisión del libro de 1972. Es lo que permite afirmar en `historia` que son dos maneras distintas de trabajar el mismo material y no una imposibilidad técnica.",
    limitation:
      "Lo digitalizado y consultable corresponde a 1974 y 1985, en Antioquia, Chocó y La Guajira: no hay ninguna grabación del Sinú de 1969-1970 y el archivo no devuelve el narrador de esta ficha. Son fichas descriptivas de registro, no transcripciones íntegras, y ninguna corresponde a este cuento.",
  }),
  gonzalezPrologo2021: source({
    title: "Prólogo y epílogo a Tradición oral y conducta en Córdoba (3.ª ed.)",
    author: "José Luis Garcés González",
    year: 2021,
    type: "estudio crítico regional",
    url: "https://drive.google.com/file/d/1SAj681_Z_Y7uqZxl3ixZOTBZ93kPpTat/view",
    summary:
      "Da la clave con la que el propio recopilador leía un cuento como éste. Garcés González resume las conclusiones de la encuesta que estructura el libro y señala entre los patrones medidos el de apreciación del trabajo, que es exactamente el eje de esta pieza: un jornalero que se emplea, cobra en especie y se come el encargo. El prólogo describe además la Córdoba de aquellos años —más de la mitad de la población analfabeta, agitación estudiantil, movimiento campesino invadiendo tierras— y confirma que la recopilación es del Medio y el Bajo Sinú y se hizo en dos etapas, la de recolección en 1969-1970 y la de comprobación a comienzos de 1971.",
    limitation:
      "Es un prólogo de homenaje impreso dentro de la edición que prologa, no una evaluación independiente, y no comenta ninguna pieza concreta: de este cuento no dice nada. La URL es la del PDF completo del volumen alojado por la Universidad del Valle, el mismo archivo del que sale el texto primario.",
  }),
  sFiesta1987: source({
    title: "Fiesta en corraleja (Boletín Cultural y Bibliográfico, vol. 24, n.º 12, pp. 124-126)",
    author: "Germán A. Pinto S.",
    year: 1987,
    type: "reseña académica de un libro de investigación regional",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/2983",
    summary:
      "Documenta pieza por pieza la utilería de la que depende el engaño de este cuento. Reseñando «El mundo de las corralejas», de Juan Santana Vega (Caja de Previsión Social de Córdoba, Montería, 1986), Pinto S. describe cómo se construye la corraleja o plaza de toros, las variaciones del ganado empleado en la lidia —de los viejos toros cimarrones al cebú y a los actuales ejemplares de media casta—, y las dos figuras que el relato necesita: los manteros, toreros criollos de a pie, y los garrocheros o picadores, que son los que entran montados. Sitúa además el nacimiento de estas corridas en tierras de la costa norte en el tercer o cuarto decenio del siglo XIX, en la celebración del cumpleaños de algún acaudalado estanciero de Sucre, y las vincula con el fandango. Es la fuente que sostiene que la garrocha, la silla, los estribos y la espuela del cuento son los de una fiesta real y no decorado genérico.",
    limitation:
      "Es una reseña de tres páginas, no una investigación de primera mano, y su objeto es el libro de Santana Vega, que el propio reseñista critica por escribir «desde fuera», con una óptica europea y contemporánea ajena al modo de ser de la región. No menciona Cotorra, ni a Zapata Olivella, ni ningún relato de tradición oral: aporta el contexto de la fiesta y no una fuente del cuento. Los datos de origen que reproduce son los de Santana y el propio reseñista los llama una sinopsis histórica.",
  }),
  turbaycumbia1995: source({
    title: "De la cumbia a la corraleja: el culto a los santos en el bajo Sinú (Revista Colombiana de Antropología, vol. 32, pp. 6-40)",
    author: "Sandra Turbay",
    year: 1995,
    type: "artículo académico de antropología regional",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1375",
    summary:
      "Es el estudio académico más próximo al escenario exacto de este cuento: la corraleja en el bajo Sinú, que es la comarca donde está Cotorra. Turbay analiza el culto a los santos en el resguardo zenú de San Andrés de Sotavento, en Sucre y Córdoba, y en las comunidades mestizas de las sabanas vecinas, y examina la funcionalidad y el simbolismo de las corridas de toros organizadas en esas sabanas junto con la cumbia y el fandango, dentro de rituales inspirados en las fiestas católicas. Sostiene lo que el relato da por sabido y nunca explica: que la fiesta de toros no es un espectáculo suelto sino una fecha del calendario religioso que ordena el año y que convoca a gente de fuera del pueblo.",
    limitation:
      "Sólo se pudo leer la ficha del artículo con su título, autoría, paginación y resumen: el PDF de texto completo que el repositorio del ICANH ofrece es un escaneo sin capa de texto y no devuelve contenido legible. No menciona Cotorra ni la fiesta de Toro por ese nombre, no trata tradición oral ni cuentos de animales, y no menciona a Zapata Olivella. Su eje es el culto a los santos y no la corraleja como fiesta profana.",
  }),
  hozeconomia2004: source({
    title: "La economía del departamento de Córdoba: ganadería y minería como sectores clave (Documentos de Trabajo sobre Economía Regional, n.º 51)",
    author: "Joaquín Viloria de la Hoz",
    year: 2004,
    type: "documento de trabajo institucional (Banco de la República, Centro de Estudios Económicos Regionales)",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/DTSER-51.pdf",
    summary:
      "Explica por qué en este cuento un caballo vale dinero y por qué venderlo resuelve la trama. El documento sitúa la ganadería como uno de los dos sectores clave de la economía cordobesa y describe la estructura de un departamento donde el ganado es la forma principal de riqueza y de circulación de capital. Sobre ese fondo, las dos carencias que el relato anuncia en su primera línea —sin caballo y sin plata— no son dos problemas distintos sino el mismo: en el Sinú el animal de silla es a la vez transporte y activo, y por eso las dos se resuelven con la misma bestia, primero montándola y después vendiéndola en una tienda.",
    limitation:
      "Es un documento de economía regional con datos de 2004, no de los años sesenta, y no dice nada de corralejas, de fiestas ni de tradición oral. Sus cifras son agregadas y departamentales, no del Bajo Sinú ni de Cotorra, y no documenta el mercado de caballos de silla en ferias ni el precio de un animal en una fiesta de pueblo.",
  }),
  becerraConjurar2018: source({
    title: "Conjurar el olvido: campesinos y política en las llanuras del Caribe colombiano en los años 70",
    author: "Andrea García Becerra y Diana Ojeda",
    year: 2018,
    type: "ensayo visual académico sobre archivo campesino",
    url: "https://www.redalyc.org/journal/814/81456145007/html/",
    summary:
      "Da cuerpo al marco que el propio Zapata declara en la página 237, cuando dice que estos cuentos reflejan las nuevas situaciones sociales y los movimientos de personas que entran y salen de la comunidad. El ensayo reconstruye desde el archivo de la Fundación del Sinú, en Montería, la movilización campesina en las llanuras del Caribe durante los mismos meses de la recolección: gente desplazándose entre veredas y pueblos, concentraciones, forasteros. La fiesta de corraleja es la versión festiva de ese mismo movimiento, el día del año en que el pueblo se llena de gente a la que se le puede vender un caballo sin que pregunte de dónde salió.",
    limitation:
      "Es un ensayo visual breve sobre un archivo gráfico, no un estudio de narrativa oral ni de fiestas populares. No cita a Zapata Olivella, no menciona este relato ni las corralejas, y no valida la lectura de la página 237: aporta la datación del contexto y no la prueba de que el cuento hable de él.",
  }),
  edTarBaby2018: source({
    title: "The Tar-Baby and the Rabbit: Folktales of Aarne-Thompson-Uther Type 175",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2018,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type0175.html",
    summary:
      "Es la comparativa que `similitudes` nombra y la mejor documentada de cuantas admite el ciclo. Reúne quince versiones editadas y atribuidas del muñeco pegajoso, repartidas entre las tres tradiciones que confluyen en el Caribe colombiano: una de España y Portugal por el lado hispánico; dos de Sudáfrica, una de las Bahamas y cuatro de los Estados Unidos por el africano y afroamericano, entre ellas las de Joel Chandler Harris que fijaron al conejo burlador en la literatura escrita; y dos indígenas norteamericanas, biloxi y shasta. Añade tres de la India, dos de ellas de los Jātaka, más Pakistán y Filipinas. Leída contra la cordobesa confirma el núcleo que no cambia —el burlador queda pegado por golpear a algo que no responde, y se pega más cuanto más se defiende, con las cuatro extremidades en el mismo orden— y aísla lo que sí cambia: la cera en lugar de la brea y la cantina en lugar del sembrado.",
    limitation:
      "No incluye ninguna versión latinoamericana ni colombiana: da el tipo y no el eslabón por el que llegó al Sinú. Tampoco recoge el desenlace de esta pieza, el del sustituto endosado dentro de la mochila, que en la página no aparece en ninguna de las quince. Son textos editados de fuentes impresas del XIX y comienzos del XX, no recogidos en campo por el compilador.",
  }),
  cantillanocuentos2002: source({
    title: "Los cuentos de tío Conejo (Letras, n.º 34, pp. 5-41)",
    author: "Odilie Cantillano, Universidad de Arizona",
    year: 2002,
    type: "artículo académico de análisis folclórico comparado, con índice de tipos",
    url: "https://dialnet.unirioja.es/descarga/articulo/5476198.pdf",
    summary:
      "Suple el hueco exacto que Ashliman deja en este cuento: las versiones hispanoamericanas del tipo 175 y, sobre todo, su desenlace. Cantillano cita el tipo Aarne-Thompson 175 junto al **74 de Terence Hansen —«Rabbit is caught and is going to be skinned, cooked and eaten; Tiger (fox) exchanges places with rabbit and is scalded»— y declara que el sustituto que paga por el burlador es «característica hispanoamericana», frente a la salida angloafricana del «no me tires al zarzal» de Brer Rabbit. Ése es el final de la versión cordobesa, con Tía Zorra dentro de la mochila. El artículo enumera además versiones del muñeco pegajoso en la República Dominicana, Puerto Rico, Panamá —«El muñeco de cera», de Mario Riera Pinilla— y Brasil, donde la figura también es de cera y no de brea.",
    limitation:
      "Su material es la serie de Carmen Lyra en Costa Rica y no registra ninguna versión colombiana: sigue sin documentarse el eslabón que trae el argumento al Sinú. En la versión que estudia el sustituto es tío Coyote y muere escaldado, mientras que aquí es Tía Zorra y el cuento se corta antes del castigo. `Similitudes` no nombra este artículo, sólo el tipo 175: entra como respaldo del mismo tipo con las versiones que la página de Ashliman no trae.",
  }),
  hozCuentos2025: source({
    title: "Cuentos de hadas campesinos de Colombia: topologías literarias de Cupido y Psique",
    author: "Adrián Farid Freja de la Hoz",
    year: 2025,
    type: "artículo académico de literatura oral comparada",
    url: "https://revistas.udea.edu.co/index.php/elc/article/view/358114",
    summary:
      "Da el marco con el que esta ficha sostiene su clasificación como mixta sin tratar la versión cordobesa como una copia empeorada. El artículo muestra cómo un argumento de circulación internacional se reescribe en la tradición oral campesina colombiana hasta divergir del original, y propone llamar topologías a esas reescrituras. Aplicado aquí, permite decir que la cera en vez de la brea, la cantina en vez del pozo y la mujer de bulto en vez del cebo de comida no son desviaciones de un modelo sino la forma que el tipo 175 adoptó en el Sinú, con materiales de casa y con el lugar de reunión del pueblo.",
    limitation:
      "No estudia ni menciona este cuento, ni el corpus de Zapata Olivella, ni el departamento de Córdoba: su material es el de Reichel-Dolmatoff y el del litoral Pacífico, y su tipo es Cupido y Psique, no el del muñeco pegajoso. Aporta el marco conceptual, no un paralelo documentado de esta pieza.",
  }),
  colombianoRespirando2001: source({
    title: "Respirando el Caribe. Memorias de la Cátedra del Caribe Colombiano, vol. I",
    author: "Ariel Castillo Mier (compilador); Observatorio del Caribe Colombiano, Ministerio de Cultura y Universidad del Atlántico",
    year: 2001,
    type: "memorias de cátedra académica regional",
    url: "https://biblioteca-repositorio.clacso.edu.ar/libreria_cm_archivos/pdf_772.pdf",
    summary:
      "Documenta para el Caribe colombiano la rama hispánica que el tipo 175 trae por un lado y que `similitudes` cita a través de la versión de España y Portugal. La ponencia de Consuelo Posada Giraldo sobre los animales y los versos de la tradición oral en la Depresión Momposina examina la influencia de la tradición oral española en los temas y las situaciones de la narrativa y la poesía popular de la región: es el apoyo regional más próximo a la afirmación de que la rama peninsular del cuento de animales llegó y se quedó en el Caribe colombiano, que en esta ficha sostiene una de las tres tradiciones del cruce.",
    limitation:
      "Su terreno es la Depresión Momposina y el verso cantado, no el cuento del Sinú: no documenta esta pieza, no menciona el muñeco pegajoso ni a Zapata Olivella. El texto consultado es una ponencia en unas memorias de 2001, no una investigación desarrollada, y no establece ninguna ruta entre España y Córdoba para este argumento.",
  }),
  martinezfortalezas1961: source({
    title: "Las fortalezas de San Lázaro (Boletín Cultural y Bibliográfico, vol. 4, n.º 11, pp. 1100-1104)",
    author: "Enrique Naranjo Martínez",
    year: 1961,
    type: "ensayo de historia de las fortificaciones en boletín cultural institucional",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/download/6153/6370/12474",
    summary:
      "Dice exactamente qué es lo que, según el relato, cabía en una escritura. Aclara que el nombre «Castillo de San Felipe de Barajas» se aplica con holgura a todo el cerro de San Lázaro, y no a un edificio suelto: obras iniciadas en 1630 y rematadas en 1657, con la lápida de mármol que lo data en tiempos de Felipe IV y del gobernador Pedro Zapata, más las obras complementarias de 1762-1769 y el conjunto de baterías —San Lázaro, la Redención, Santa Bárbara, la Cruz, San Carlos y los Apóstoles—. Ese inventario es lo que vuelve enorme el contraste que sostiene la pieza: un trámite de una tarde poniendo en manos privadas un sistema militar de siglo y medio y un cerro entero.",
    limitation:
      "Ensayo anticuario de 1961 sin aparato crítico, en facsímil con OCR imperfecto, que se ocupa de la fábrica militar de los siglos XVII y XVIII y no llega al siglo XIX. No menciona ninguna cesión, ni a Gulfo, ni la propiedad de los terrenos vecinos, que es donde el relato pone su única malicia.",
  }),
  cervantesCastillo2002: source({
    title: "Castillo de San Felipe de Barajas (Ciudades Patrimonio · Cartagena de Indias, «De paseo», n.º 34)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/castillo_felipe.htm",
    summary:
      "Da la reputación del objeto regalado, que es la mitad del chiste. Lo presenta como la obra más destacada de la ingeniería militar española en América, promovida por el gobernador Melchor de Aguilera en 1639, bautizada por Pedro Zapata de Mendoza en honor de Felipe IV, terminada en 1657 y probada en 1741 contra Vernon, que llegó con veintiséis mil hombres y más de ciento setenta velas y había acuñado por anticipado medallas que decían «I took Cartagena». Añade que sus bloques se sacaron de los arrecifes y los subieron al cerro personas esclavizadas. Una fortaleza con ese expediente es lo que el relato hace caber en un papel mal extendido.",
    limitation:
      "Ficha de divulgación turística sin citas ni bibliografía, con una cifra de atacantes muy superior a la que manejan los estudios modernos del ataque de 1741, y perteneciente a un conjunto con un error verificado de cronología independentista. Nada dice del régimen jurídico del monumento ni de su propiedad, que es lo que la ficha necesitaría.",
  }),
  mUHCAFortificaciones2017: source({
    title: "«Fortificaciones / Derribo de las murallas» (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_fortificaciones-derribo-de-las-murallas--16",
    summary:
      "Prueba que lo que el relato cuenta como absurdo tenía precedentes reales y peores. Documenta que las murallas, terminadas en 1796, fueron efectivamente demolidas en parte por decisión de la propia alcaldía —el tramo entre la Boca del Puente y la India Catalina— y que en 1915 una firma inglesa contratada por la ciudad recomendó seguir derribándolas. Es decir: en la Cartagena de entre siglos el patrimonio militar sí se entregaba y se deshacía por acuerdo administrativo. Con este antecedente, la cesión de un castillo por escritura deja de sonar inverosímil aunque siga sin documento.",
    limitation:
      "Se ocupa de las murallas y no del castillo ni del cerro de La Popa, y no cita normas, fechas de acuerdo ni expedientes. Es divulgación municipal breve, sin bibliografía, sin autor individual y sin fecha de redacción declarada.",
  }),
  mUHCATitulos2017: source({
    title: "«Títulos de Cartagena» (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_titulos-de-cartagena-73",
    summary:
      "Vale por el contraste de registros. Recoge cómo la ciudad se nombra a sí misma en clave heroica, empezando por el título ganado en el sitio de 1815, y esa retórica es justo la que el relato pincha: entre los emblemas oficiales y un cerro cedido por un papel mal extendido hay la misma distancia que entre el monumento y el archivo. Ayuda a entender por qué una anécdota administrativa como esta podía contarse en la ciudad con gusto y repetirse sin que nadie fuera a buscar la escritura.",
    limitation:
      "Página de pocas líneas sobre nomenclatura honorífica, sin ninguna relación documental con el episodio, sin bibliografía, sin autor individual y con una cifra de bajas del sitio que no coincide con la de los estudios. Es contexto de tono, no prueba.",
  }),
  mUHCAArchivo2023: source({
    title: "Archivo Histórico de Cartagena de Indias (página institucional)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2023,
    type: "página institucional de archivo",
    url: "https://www.muhca.gov.co/archivo",
    summary:
      "Señala el único sitio donde el caso podría resolverse y explica por qué sigue abierto. El archivo conserva el siglo XIX y la primera mitad del XX, que es exactamente el periodo del supuesto expediente de 1895, y guarda los «Anales del Municipio» con que trabajan los historiadores locales; pero no publica inventario ni instrumento de descripción, y la consulta sólo se hace por correo. El relato admite ignorar en qué archivo estarían los papeles: esta página dice cuál es ese archivo y por qué no se puede mirar desde fuera.",
    limitation:
      "No es catálogo y no permite buscar: no hay forma de saber si existen los acuerdos de la Prefectura General, la escritura de cesión o la colección de «El Porvenir» sin escribir y esperar respuesta. El dominio propio del archivo es NXDOMAIN y su ficha en el Censo-Guía español devuelve 404.",
  }),
  cervantesBlas2015: source({
    title: "Blas de Lezo (Cartagena de Indias · Personalidades)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2015,
    type: "semblanza biográfica en catálogo patrimonial",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/personalidades/lezo.htm",
    summary:
      "Es la comprobación externa del personaje sobre el que se construye el relato, y sostiene el rasgo del que depende su remate: que el héroe estaba mutilado. La semblanza reconstruye la carrera del marino —las heridas acumuladas en campaña que le costaron una pierna, un ojo y el uso de un brazo, y la defensa de Cartagena frente a la escuadra de Vernon en 1741— y permite decir, fuera del cuento, que la cojera, la tuerta y el brazo inútil que Isabel ve en el sarao no son invención de la autora. La leyenda hace con esas heridas lo que la retórica heroica lleva siglos haciendo: convertirlas en credencial.",
    limitation:
      "Es una ficha breve de divulgación patrimonial, sin notas ni bibliografía, y no entra en la discusión sobre la causa de la muerte del almirante, que es justamente donde la nota final del relato toma partido. No menciona la leyenda, ni a Isabel, ni las monedas.",
  }),
  greenwichMedal2024: source({
    title: "Medal commemorating Vernon's attack on Cartagena, 1741 (National Maritime Museum, objeto RMGC-38519)",
    author: "Royal Museums Greenwich, National Maritime Museum",
    year: 2024,
    type: "ficha de objeto de colección museística con transcripción de leyendas",
    url: "https://www.rmg.co.uk/collections/objects/rmgc-object-38519",
    summary:
      "Comprueba que la moneda del relato existe y que su fecha es la que la autora transcribe. La ficha describe una medalla de latón de 38 milímetros acuñada en torno a 1741 y conservada en el National Maritime Museum: en el anverso, Vernon de pie con bastón entre un ancla y un cañón, con la leyenda «THE BRITISH GLORY REVIV D ADMIRAL VERNON»; en el reverso, un puerto militar con un gran fuerte, navíos y una ciudad de tres campanarios, con la leyenda «AD VERNON ADML OGLE TOOK CARTHAGENA BY SEA AND LAND» y, en el exergo, la fecha «APL : I : 174 : 1». El museo anota que Vernon bombardeó Cartagena en 1740 y que el intento de tomarla en abril de 1741 fracasó. Es decir: la pieza proclama en metal una victoria que no ocurrió, y el cuento la usa exactamente para eso.",
    limitation:
      "Es una ficha de objeto de museo, breve y sin aparato histórico: no explica por qué se acuñaron medallas de una victoria fallida, no da tirada ni circulación y no documenta que ninguna llegara a Cartagena. La leyenda que el relato imprime en castellano es una traducción libre de la autora y no coincide literalmente con ninguna de estas dos inscripciones inglesas.",
  }),
  cervantesIglesia2015: source({
    title: "Iglesia de Santo Domingo (Cartagena de Indias · Paseo)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2015,
    type: "ficha monumental en catálogo patrimonial",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/igl_domingo.htm",
    summary:
      "Comprueba la calle en que la casa del cuento está puesta y le da su antigüedad. La ficha describe la iglesia de Santo Domingo como el templo más antiguo de la ciudad, terminado hacia 1559 bajo fray Jerónimo de Loayza, y explica los estribos tendidos sobre la vía que dieron nombre al callejón vecino. La leyenda sitúa en esa misma calle una casa con aljibe y tesoro enterrado, y el dato importa porque es el sector más viejo de la ciudad amurallada: es donde un entierro antiguo resulta verosímil para el vecindario que lo cuenta.",
    limitation:
      "Es una ficha monumental sin citas, dedicada al templo y no al vecindario: no documenta casas particulares, ni aljibes, ni familias, ni la conseja del muerto que cuenta los cubiertos. El conjunto al que pertenece presenta su material de tradición explícitamente como tradición, sin respaldo documental.",
  }),
  edGhosts2021: source({
    title: "Ghosts: Folktales of Aarne-Thompson-Uther Types 1676 and 1676B («Real Ghosts and Fake Ghosts»)",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2021,
    type: "antología comentada de un grupo de tipos folclóricos, con textos editados",
    url: "https://sites.pitt.edu/~dash/type1676.html",
    summary:
      "Pone a esta broma dentro de una familia que la tradición conoce y cataloga. La antología reúne relatos de los tipos 1676 y 1676B, donde el asunto es la frontera entre el espectro y el susto fabricado: el burlón que se disfraza de aparecido, el que se ríe de los muertos y cree recibir respuesta, el miedo que se produce a sí mismo. El muchacho que se duerme sobre su propio brazo y toma su mano fría por la de don Manuel de la Roca pertenece a esa rama, con la particularidad de que aquí el fingidor y el asustado son la misma persona y nadie más se entera nunca.",
    limitation:
      "Su corpus es europeo y sus textos suelen cerrar con un castigo o una moraleja, mientras que esta pieza se cierra en un reloj y sin testigos. No recoge ninguna versión hispanoamericana, no documenta el motivo del miembro dormido y no menciona Cartagena. Es una antología editada por un profesor, sin aparato crítico.",
  }),
  cartagenaJudith2020: source({
    title: "Judith Porto de González, la dama cartagenera que se halla «Al filo de la Leyenda»",
    author: "Revista Metro (Cartagena)",
    year: 2020,
    type: "semblanza de prensa local",
    url: "https://revistametro.co/2020/12/judith-porto-de-gonzalez-la-dama-cartagenera-que-se-halla-al-filo-de-la-leyenda/",
    summary:
      "Explica el tono con que está escrita una casa espantada, que es de afecto y no de terror. La semblanza recoge el juicio de Alberto Montezuma Hurtado sobre «Al filo de la leyenda» —un libro lleno de gracia, escrito amorosamente, con visible propósito de homenaje filial y emoción sostenida— y acredita a la autora como miembro de varias academias de historia y la única mujer que presidió la de Cartagena de Indias. Un relato que enumera con cariño los fantasmas de las casas del vecindario antes de desactivar el propio responde a ese propósito: el miedo es aquí una forma de inventario doméstico.",
    limitation:
      "Es una semblanza de prensa local sin notas ni bibliografía, y el juicio que cita procede de un prologuista. No fecha nada, no menciona esta pieza y nada dice de la atribución del conjunto a la tradición oral de la población negra de Cartagena, que en este relato es donde más chirría.",
  }),
  cervantesPlaza2002: source({
    title: "Plaza de los Coches (Ciudades Patrimonio · Cartagena de Indias, «De paseo», n.º 4)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/pz_coches.htm",
    summary:
      "Ninguna otra página localizada emplea la misma palabra del título de la ficha ni la ata a un acto administrativo: «A finales del siglo XIX, el Ayuntamiento autorizó a los aurigas a estacionar sus coches en un costado de la plaza, entonces los cartageneros pasaron a denominarla Plaza de los Coches». Esa autorización municipal de fin de siglo coincide exactamente con la juventud que el personaje recuerda, la de los años de Núñez, y da el punto de partida cronológico de una carrera que el relato muestra ya en su final. Añade que hasta entrado el siglo XX en medio de la plaza seguía en pie la picota, lo que sitúa el oficio en un lugar que venía de otra época.",
    limitation:
      "Es ficha patrimonial para el visitante, sin citas ni bibliografía, y no fecha la autorización más allá de «finales del siglo XIX». Tampoco dice cuándo dejaron de operar los coches ni cuándo llegó el automóvil. El conjunto del CVC al que pertenece contiene un error verificado de cronología independentista, de modo que su autoridad se limita al monumento.",
  }),
  mUHCACirco2017: source({
    title: "«Circo Teatro» (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_circo-teatro--132",
    summary:
      "Da cuerpo al único recuerdo taurino del monólogo y al barrio que lo rodea. La plaza de toros de la Serrezuela —la «Zerrezuela» que el cochero nombra— se inauguró en 1930 por Fernando Vélez Daníes, obra del maestro Marcial Calvo Castillo, y con la llegada del cine acabó funcionando también como sala. Esa fecha es útil para situar la vejez del personaje: si recuerda haber llevado toreros, el recuerdo cae en los años treinta o después, décadas después de los viajes al Cabrero, y el arco de su vida queda medido entre dos referencias comprobables.",
    limitation:
      "No registra carteles ni temporadas taurinas y no menciona a ningún matador de la dinastía Bienvenida, de modo que el nombre que el relato suelta sigue sin cotejo. Es divulgación municipal breve, sin bibliografía, sin autor individual y sin fecha visible en la página.",
  }),
  villegasModernizacion2017: source({
    title: "Modernización urbana y exclusión social en Cartagena de Indias, una mirada desde la prensa local (Territorios, n.º 36, pp. 159-188)",
    author: "Fabricio Fabián Valdemar Villegas, Universidad del Rosario",
    year: 2017,
    type: "artículo arbitrado de historia urbana sobre prensa",
    url: "https://revistas.urosario.edu.co/xml/357/35749527008/index.html",
    summary:
      "Pone nombre al adversario contra el que despotrica el cochero. Reconstruye, a partir de los periódicos cartageneros, cómo se armó en la ciudad un discurso de modernización que clasificaba lo viejo como premoderno y antihigiénico, y cómo ese discurso se tradujo en decisiones que expulsaron gente y formas de vida de los lugares que estorbaban. El personaje no discute con el automóvil: discute con esa idea de progreso, y aquí está documentada en la prensa que él mismo podía leer.",
    limitation:
      "Su materia son los desalojos de los barrios junto a las murallas y no el transporte urbano: no hay en el artículo coches de alquiler, aurigas, tranvía ni automóviles. Es análisis de discurso sobre prensa local, no historia de la movilidad, y no ayuda a fechar la sustitución de un oficio por otro.",
  }),
  gelizespacio2014: source({
    title: "El espacio urbano del cine en Cartagena 1936-1957 (Historia y Memoria, n.º 9, pp. 247-272)",
    author: "Ricardo Chica Geliz, Universidad Pedagógica y Tecnológica de Colombia",
    year: 2014,
    type: "artículo arbitrado de historia urbana y cultural",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S2027-51372014000200009",
    summary:
      "Es el modelo de cómo se documenta en Cartagena una transformación de este tipo, y por eso mide lo que falta aquí. Reconstruye sala por sala, con los «Anales del Municipio» del Archivo Histórico, «El Universal» y el «Diario de la Costa», cómo una tecnología nueva —el cine— reorganizó el ocio de la ciudad entre 1936 y 1957, con nombres de empresarios, direcciones y fechas. Para el paso del coche de caballos al automóvil no existe nada equivalente: este artículo prueba que el material de archivo está ahí y que el trabajo, sencillamente, no se ha hecho.",
    limitation:
      "No trata el transporte urbano en absoluto: ni coches de alquiler, ni tranvía, ni automóviles. Su periodo arranca en 1936, cuando el oficio del personaje ya estaba en retirada, y su aportación a esta ficha es metodológica y negativa, no documental.",
  }),
  tejedorTiempo2018: source({
    title: "Tiempo para la burla obsceno-escatológica. Las sandingas: fiesta, sexualidad e inversión del orden en un pueblo de Andalucía (Boletín de Literatura Oral, vol. 8)",
    author: "Alberto del Campo Tejedor",
    year: 2018,
    type: "artículo académico de antropología social, con trabajo de campo",
    url: "https://revistaselectronicas.ujaen.es/index.php/blo/article/view/3835",
    summary:
      "Es lo que permite decir que esta obscenidad tiene gramática y no es sólo grosería. El artículo estudia las sandingas de La Puebla de los Infantes (Sevilla), coplas burlescas que se cantan en torno a las hogueras de la Candelaria y en las que la pulla obscena y escatológica se considera «la sal y pimienta de la reunión festiva»; el autor las lee como una lucha ritual de degradación simbólica y renovación, con un sentido apotropaico antiguo de la risa y de lo obsceno. Dos rasgos coinciden con la página 258: la obscenidad se despliega pegada a una fiesta religiosa, y su función es invertir el orden, poner abajo a quien manda. Allí el blanco es la suegra o el sexo opuesto; aquí, el agente que vino a imponer compostura.",
    limitation:
      "Su terreno es un pueblo de Sevilla y su material son coplas de fiesta, no un cuento del Caribe colombiano: no menciona este relato, ni el Sinú, ni a Zapata Olivella. Además, las sandingas ocurren en un tiempo festivo en que la obscenidad está permitida, mientras que este cuento la coloca justo donde estaba prohibida, en la puerta de la iglesia y con la misa en curso.",
  }),
  ashlimanCensorship2021: source({
    title: "Censorship in Folklore",
    author: "D. L. Ashliman",
    year: 2021,
    type: "ensayo académico sobre historia de la disciplina folclórica",
    url: "https://sites.pitt.edu/~dash/censor.html",
    summary:
      "Es el argumento de por qué esta pieza no se puede contar limpia, y la prueba de lo raro que es que llegara impresa. Ashliman documenta cómo los recopiladores del siglo XIX y comienzos del XX suprimieron o rebajaron el material sexual y escatológico que les resultaba inasumible, dejando colecciones que dicen más de sus editores que de sus informantes. Zapata Olivella imprimió el cuento entero, con la palabra cruda repetida dos veces y la frase final tal como sonó, y lo colocó al lado de «La receta» sin una sola nota. Quitar el episodio que causa el escándalo, que es lo que la ficha heredada hacía, deja al policía sin motivo para preguntar y al cuento sin final.",
    limitation:
      "Su material son colecciones europeas y norteamericanas: no menciona Colombia, ni a Zapata Olivella, ni este relato, y no analiza el anticlericalismo ni la burla a la autoridad policial. Sostiene la práctica general de la higienización folclórica, no ninguna afirmación concreta sobre cómo se transcribió esta página.",
  }),
  rodriguezcuento2020: source({
    title: "El cuento de Mariquita triqui traca (ATU 1730C*) y el romance de La mujer del molinero y el cura: cultura popular, anticlericalismo y biopolítica (Boletín de Literatura Oral, n.º 10, pp. 87-108)",
    author: "José Bautista Rodríguez",
    year: 2020,
    type: "artículo académico de literatura oral comparada, con registro de campo propio",
    url: "https://revistaselectronicas.ujaen.es/index.php/blo/article/view/5466",
    summary:
      "Da nombre al segundo blanco del cuento, que no es el policía sino la misa. El artículo registra en 2020 una versión del cuento de Mariquita triqui traca en Herrera del Duque (Badajoz), la coteja con otras de Extremadura y del ámbito hispánico y sostiene que el anticlericalismo detectable en buena parte de la cultura oral y popular es manifestación de viejos conflictos biopolíticos entre clases dominantes y dominadas. En la página 258 el cura no es víctima ni cómplice: es el que pierde el hilo del oficio, el que llama a la fuerza pública para tapar un cuerpo y el que consigue, con eso, que todo el pueblo se voltee a mirar. Es la degradación de la autoridad eclesiástica que el artículo describe, ejecutada en doce líneas.",
    limitation:
      "Su terreno es Extremadura y la tradición peninsular: no registra versiones colombianas ni caribeñas, no menciona este corpus y el tipo de cuento que estudia —el del cura y la mujer— no es el de esta pieza. No trata la obscenidad animal ni la burla a la policía.",
  }),
  luengorepresentacion2019: source({
    title: "La representación lingüística del otro en la literatura colonial: el caso del indio en la Bolivia andina del siglo XVIII (Estudios de Teoría Literaria, vol. 8, n.º 15)",
    author: "José Luis Ramírez Luengo y Silvia Ruiz-Tresgallo",
    year: 2019,
    type: "artículo académico de lingüística histórica y análisis literario",
    url: "https://fh.mdp.edu.ar/revistas/index.php/etl/article/view/3021",
    summary:
      "Da el marco para tratar «plebedad» como dato y no como errata. El artículo analiza cómo la literatura colonial construía a sus personajes mediante fenómenos fónicos, morfosintácticos y léxicos deliberadamente marcados, y cómo esos rasgos funcionaban a la vez como caracterización y como estereotipo. La palabra que el cura de esta página se inventa para no nombrar lo que ve pertenece a esa clase de marca: no está en ningún diccionario, no está en el glosario del propio libro, y es lo único que caracteriza al personaje. Normalizarla a «plebeyez» o a «obscenidad» borraría precisamente el rasgo que el transcriptor decidió conservar.",
    limitation:
      "Su material es un entremés boliviano del siglo XVIII y su objeto es la representación del indio, no el habla de un cura cordobés ni la transcripción etnográfica del siglo XX. No menciona este relato, ni el Sinú, ni a Zapata Olivella, y no discute la palabra «plebedad» ni ninguna forma emparentada: aporta el criterio, no el dato.",
  }),
  teransexualidad2014: source({
    title: "La sexualidad y la reproducción humana en el proceso de secularización. Colombia: décadas de 1960 y 1970 (Revista Colombiana de Sociología, vol. 37, n.º 1, pp. 177-191)",
    author: "Sandra Liliana Caicedo Terán",
    year: 2014,
    type: "artículo académico de sociología histórica",
    url: "https://revistas.unal.edu.co/index.php/recs/article/view/44620",
    summary:
      "Fecha el momento en que un chiste así podía contarse en voz alta y llegar a un libro oficial. El artículo estudia cómo en la Colombia de los sesenta y setenta «la moral sexual, que la Iglesia católica había defendido y legitimado con su autoridad, perdió terreno», presionada por las políticas estatales de control de la natalidad y por quienes promovían la educación sexual. La página 258 es esa pérdida de terreno puesta en escena: la misa se interrumpe, la autoridad del cura no basta para restablecer el orden y la última palabra la tiene un muchacho que se ríe del agente delante de la iglesia.",
    limitation:
      "Es un estudio de ámbito nacional sobre debates públicos, política demográfica y educación sexual: no trata del Caribe ni del campo cordobés, no analiza la burla popular ni la tradición oral, y no menciona este relato. Se leyó la ficha del artículo con su resumen y sus metadatos completos, no el texto íntegro del PDF.",
  }),
  valleManuel2021: source({
    title: "Manuel Zapata Olivella — Obras completas y archivo digital",
    author: "Universidad del Valle, con el Ministerio de Cultura, la Universidad de Cartagena, la Universidad de Córdoba y la Universidad Tecnológica de Pereira",
    year: 2021,
    type: "portal institucional de obra completa y archivo",
    url: "https://zapataolivella.univalle.edu.co/",
    summary:
      "Es lo que dejó corregir la paginación y el título en plural que circulaban sobre esta pieza. El portal reúne en edición digital abierta la obra completa de Zapata Olivella y los 46 números de Letras Nacionales (1965-1985), respaldado por el Ministerio de Cultura y cuatro universidades, entre ellas la de Córdoba. Con el texto delante se comprobó que el cuento empieza y acaba en la página 258, que el encabezado dice «El burro y el policía» en singular y que la 259 abre ya con «El paisa y el gringo»: tres datos que la atribución heredada tenía mal.",
    limitation:
      "Es un portal de difusión de obra, no una fuente sobre ningún relato: no analiza el corpus cordobés, no menciona esta pieza ni advierte nada sobre su contenido, y el acceso a los textos pasa por enlaces de descarga externos.",
  }),
  mejiaSeleccion1994: source({
    title: "La Selección Samper Ortega, 1926-1937: historia de un gran legado",
    author: "Juan Luis Mejía",
    year: 1994,
    type: "artículo de historia editorial en revista cultural",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-54/la-seleccion-samper-ortega-1926-1937",
    summary:
      "Reconstruye la colección en cuyo tomo 39 circularon las leyendas de Otero D'Costa, y con ella la vía por la que este relato llegó a lectores de todo el país en los años treinta. Explica el criterio de selección que lo sacó de la revista regional y lo volvió canon escolar.",
    limitation:
      "Trata la colección como empresa editorial y no comenta ninguna leyenda en particular.",
  }),
  camargoHacia20152: source({
    title: "Hacia una nueva comprensión de la historiografía de Enrique Otero D'Costa",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "tesis universitaria sobre historiografía",
    url: "https://repository.urosario.edu.co/server/api/core/bitstreams/4fc7392a-c2aa-4a84-92ff-4a2402f57200/content",
    summary:
      "Documenta, con el fondo Otero D'Costa del Archivo General de la Nación, que el autor vivió y trabajó en la costa Caribe: gerente del ferrocarril Cartagena-Calamar hasta 1916, apoderado de la Colombia Railway hasta 1923, concejal de Cartagena. Es lo que responde a la pregunta obvia de qué hace un santandereano contando un sitio de Santa Marta.",
    limitation:
      "Estudio historiográfico centrado en la obra histórica del autor; trata las leyendas de pasada y no analiza ésta.",
  }),
  atlanticoHistoria2021: source({
    title: "Historia Caribe (Universidad del Atlántico)",
    author: "Universidad del Atlántico",
    year: 2021,
    type: "artículo en revista de historia regional",
    url: "https://revistas.uniatlantico.edu.co/index.php/Historia_Caribe/article/download/4353/5079",
    summary:
      "Aporta el marco de la defensa costera de la provincia de Santa Marta en el siglo XVII: quién guarnecía qué, con qué medios y frente a qué enemigos. Permite situar el castillo de San Juan y los cuatro capitanes de la copla sin tomar el relato por crónica.",
    limitation:
      "Historiografía regional; no menciona este episodio ni a Otero D'Costa.",
  }),
  compiladorRespirando2001: source({
    title: "Respirando el Caribe. Memorias de la Cátedra del Caribe Colombiano",
    author: "Ariel Castillo Mier (compilador)",
    year: 2001,
    type: "actas académicas de seminario regional",
    url: "https://biblioteca-repositorio.clacso.edu.ar/libreria_cm_archivos/pdf_772.pdf",
    summary:
      "Da el marco de cómo la literatura del Caribe colombiano construyó su propia memoria colonial en el siglo XX, que es la operación que Otero D'Costa hace aquí: convertir un episodio de archivo en leyenda con copla, astucia y objeto testigo.",
    limitation:
      "Actas de seminario de enfoque amplio; no analiza a Otero D'Costa ni este relato.",
  }),
  cervantesCartagena2015: source({
    title: "Cartagena de Indias · Ciudades Patrimonio de la Humanidad",
    author: "Centro Virtual Cervantes",
    year: 2015,
    type: "catálogo patrimonial comentado",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/",
    summary:
      "Documenta el sistema de fortificaciones del Caribe colombiano y el papel de las culebrinas en la artillería de plaza, que es el objeto con el que este relato certifica su propio episodio.",
    limitation:
      "Catálogo divulgativo sobre Cartagena, no sobre Santa Marta, y sin referencia al relato.",
  }),
  valientefortificaciones2021: source({
    title: "Las fortificaciones de la ciudad de Santa Marta",
    author: "Ospino Valiente",
    year: 2021,
    type: "estudio de historia local en academia departamental",
    url: "https://www.academiadehistoriadelmagdalena.org/wp-content/uploads/2021/01/LAS-FORTIFICACIONES-DE-LA-CIUDAD-DE-SANTA-MARTA.pdf",
    summary:
      "Da el nombre y la fecha exactos que el relato usa sin citarlos: «El capitán Juan Guiral Belón construye el Fuerte San Juan de las Matas en 1602, cuya traza corresponde al hábito de la encomienda de San Juan». Y explica la condición que hace verosímil el ardid del tasajo: la ciudad estuvo abrigada a esa fortaleza «por más de treinta años, dotada de una exigua artillería, una munición y armas en mal estado, sumada a la escasa guarnición». El castillo del cuento existió, era pobre, y eso es lo que obliga a su castellano a ganar con un engaño.",
    limitation:
      "Historia de la arquitectura militar samaria: documenta el fuerte y su penuria, no el episodio del sitio ni ninguno de los dos ardides. No menciona a Otero D'Costa.",
  }),
  magdalenaBreves2021: source({
    title: "Breves anotaciones sobre la historia de la ciudad de Santa Marta",
    author: "Academia de Historia del Magdalena",
    year: 2021,
    type: "síntesis de historia local en academia departamental",
    url: "https://www.academiadehistoriadelmagdalena.org/wp-content/uploads/2021/01/BREVES-ANOTACIONES-SOBRE-LA-HISTORIA-DE-LA-CIUDAD-DE-SANTA-MARTA.pdf",
    summary:
      "Sitúa el ataque que el relato cuenta dentro de la serie de asaltos que sufrió la ciudad en el siglo XVII, y le pone una fecha que no coincide con la del cuento: registra al «holandés Adrián Juan Patter» en 1630, mientras el relato transcurre en 1629. La discrepancia es de un año y de una sola fuente contra otra, así que no se resuelve aquí: se declara.",
    limitation:
      "Síntesis divulgativa de la academia departamental, sin notas ni remisión a archivo. Enumera los ataques en una sola frase y no describe ninguno.",
  }),
  lopezEstereotipos2021: source({
    title: "Estereotipos y prejuicios entre costeños y cachacos, y su impacto en la toma de decisiones en el ámbito de recursos humanos",
    author: "Luis Fernando Fábregas Ramírez (dir. Pedro Javier López)",
    year: 2021,
    type: "trabajo de grado con medición empírica (Colegio de Estudios Superiores de Administración, CESA)",
    url: "https://repository.cesa.edu.co/server/api/core/bitstreams/178a0375-563a-49dd-84b5-a95ec3a61d1f/content",
    summary:
      "Es la única obra de la cantera que mide, y no sólo describe, el reparto de etiquetas que este chiste ejecuta. Parte de que en la costa Caribe los términos costeño y cachaco se usan a diario con connotación negativa en un caso y positiva en el otro, y prueba con medidas explícitas e implícitas si existen prejuicios entre los dos grupos, cuál de ellos los sostiene con más fuerza y cómo pesan en decisiones de contratación. Importa aquí porque la página 255 invierte el reparto habitual: el costeño es el competente, el que tiene el oficio y el canasto lleno, y el del interior es el incapaz que convierte su torpeza en rectitud. La medición contemporánea muestra el prejuicio en la dirección contraria, y así deja ver que esta pieza es una réplica y no un espejo.",
    limitation:
      "Es un trabajo de grado de pregrado en administración, no un estudio de folclor ni de historia. Su muestra es contemporánea y urbana, no dice nada del Sinú, de los años sesenta ni de la tradición oral, y —lo más grave para esta ficha— trata cachaco y paisa como si fueran lo mismo, que es justamente la oscilación que aquí hay que declarar y no resolver.",
  }),
  villegashistoria2004: source({
    title: "La historia de Antioquia, entre lo real y lo imaginario. Un acercamiento a la versión de las élites intelectuales del siglo XIX (Revista Universidad EAFIT, vol. 40, n.º 134, pp. 51-79)",
    author: "Juan Camilo Escobar Villegas",
    year: 2004,
    type: "artículo académico de historia de los imaginarios sociales",
    url: "https://publicaciones.eafit.edu.co/index.php/revista-universidad-eafit/article/download/879/785/0",
    summary:
      "Da cuerpo a la mitad del cuento que el libro nombra mal. Si el remate llama «paisas» a los dos forasteros y les pone en la boca un «¡Ave María!», conviene saber qué se había construido bajo esa etiqueta: el artículo reconstruye cómo las élites letradas antioqueñas del siglo XIX fabricaron un imaginario identitario regional y acuñaron la idea de «raza antioqueña» de «casta limpia española», laboriosa y honrada por naturaleza, difundida por la geografía escolar, la historiografía conservadora y la prensa. El forastero que aquí se niega a cebar el anzuelo porque «no hemos venido a la Costa a engañar a ninguno» está representando esa honradez de catálogo justo en el momento en que se queda sin pescado.",
    limitation:
      "Trata de Antioquia y de sus élites letradas, no del Caribe ni de la tradición oral: no documenta la circulación de chistes sobre paisas en el Sinú, no menciona a Zapata Olivella y no dice nada de los cachacos, que son la otra etiqueta del cuento. Analiza la construcción culta del estereotipo, no la burla campesina que esta página practica.",
  }),
  hozLorica2003: source({
    title: "Lorica, una colonia árabe a orillas del río Sinú (Cuadernos de Historia Económica y Empresarial, n.º 10)",
    author: "Joaquín Viloria de la Hoz",
    year: 2003,
    type: "documento de historia económica regional (Banco de la República, sucursal Cartagena)",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/chee_10.pdf",
    summary:
      "Documenta que el Sinú de este cuento era un sitio al que se llegaba, y que el forastero era una figura conocida y no una aparición. Reconstruye con estudios de caso cómo entre 1880 y 1930 se instaló en Lorica y en la región sinuana una de las comunidades árabes más numerosas de Colombia —sirios, libaneses y palestinos, los «turcos» de la frase de Zapata en la página 238—, cómo prosperaron en el comercio del puerto fluvial y cómo la sedimentación del río y las carreteras troncales los empujaron después hacia Montería, Barranquilla y Cartagena. La burla de esta plana es la que una comarca receptora hace del recién llegado que pretende enseñarle su propio oficio.",
    limitation:
      "Estudia la inmigración árabe, no la del interior andino: no aporta ni un dato sobre cachacos ni paisas instalados en el Sinú, que es la migración que el cuento supone. Es historia económica sin relación con la literatura oral, y su corte cronológico termina a mediados del siglo XX, antes de los años de la recolección.",
  }),
  colombiaCaracterizaciones2010: source({
    title: "Caracterizaciones de los pueblos indígenas de Colombia — Zenú",
    author: "Ministerio de Cultura de Colombia, Dirección de Poblaciones",
    year: 2010,
    type: "ficha institucional de caracterización de pueblo indígena",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20ZEN%C3%9A.pdf",
    summary:
      "Es lo que permite decir quién es de verdad «el indio» de esta página, y por qué el chiste miente sobre él. El documento establece que el pueblo Zenú se localiza en los resguardos de San Andrés de Sotavento, que el 61,6 % de sus 233.052 personas censadas en 2005 vive en Córdoba, que su economía gira sobre el maíz, la yuca, el ñame, el fríjol y la caña flecha, y —lo que aquí más pesa— que la lengua zenú está considerada muerta y que el pueblo habla castellano. El indio del cuento gana el concurso inventando una lengua falsa; el indio del departamento donde el cuento se recogió llevaba generaciones hablando la del cura. El habla deformada que la pieza le atribuye no registra nada: la fabrica.",
    limitation:
      "Es una ficha de caracterización institucional con datos del censo de 2005, no un estudio etnográfico ni histórico: no describe la situación del pueblo Zenú en 1969-1970, no analiza su relación con la parroquia y no menciona ningún relato. No hay en ella ninguna prueba de que el personaje del cuento sea zenú: sirve para saber quién habitaba el territorio, no para identificar al protagonista.",
  }),
  zenuPlan2022: source({
    title: "Plan Especial de Salvaguardia. Trenzado en caña flecha, prácticas y conocimientos ancestrales artesanales de la identidad Zenú",
    author: "Cabildo Mayor Regional del Pueblo Zenú, Resguardo de San Andrés de Sotavento (Córdoba-Sucre); Ministerio de Cultura",
    year: 2022,
    type: "expediente de salvaguardia de patrimonio inmaterial, redactado por la comunidad portadora",
    url: "https://mincultura.gov.co/direcciones/patrimonio-y-memoria/Documents/PES-trenzado-en-cana-flecha-practicas-y-conocimiento-artesanales-de-la-identidad-zenu.pdf",
    summary:
      "Es la voz que falta en la página 248: la del pueblo al que el chiste llama «el indio», hablando de sí mismo. El expediente lo redacta el Cabildo Mayor Regional del Pueblo Zenú y describe el trenzado de la caña flecha como el eje en torno al cual se «trenzan» también la tradición oral, la poesía y la música de la vida zenú, con un diagnóstico hecho en Tuchín y San Andrés de Sotavento y con presencia declarada en Chinú y Chimá, municipios cordobeses. Puesto junto al cuento, deja ver la asimetría: allí el personaje no tiene nombre, pueblo ni palabra propia, y aquí la comunidad se define precisamente por lo que transmite de boca en boca.",
    limitation:
      "Es un documento de salvaguardia centrado en la artesanía de la caña flecha, no una recopilación de literatura oral: no contiene cuentos ni menciona esta pieza. No hay ningún vínculo documentado entre el resguardo y el relato recogido en el Medio y Bajo Sinú, y es un texto de los años veinte de este siglo, cincuenta años posterior a la grabación.",
  }),
  gelizCultura2022: source({
    title: "Cultura cinematográfica en Cartagena 1958-1971 (Historia Caribe, vol. XVII, n.º 40, pp. 281-309)",
    author: "Ricardo Chica Geliz, Universidad del Atlántico",
    year: 2022,
    type: "artículo arbitrado de historia cultural",
    url: "http://www.scielo.org.co/pdf/hisca/v17n40/0122-8803-hisca-17-40-281.pdf",
    summary:
      "Completa el censo de locales por el otro extremo del siglo y confirma la ausencia. Recorre el Teatro Padilla, el Miramar del Pie de la Popa y el Variedades —donde actuó Carlos Gardel en los treinta—, y registra el paso por la ciudad de Celia Cruz, Benny Moré y Pedro Infante en junio de 1954. Sirve para dos cosas: demuestra que Cartagena sí tuvo salas capaces de recibir figuras internacionales, de modo que una compañía lírica itinerante no es inverosímil en sí misma; y deja claro que ese circuito, documentado sala por sala, nunca incluyó un «Azul».",
    limitation:
      "Cubre 1958-1971, es decir, una década después de publicado el libro y medio siglo después de los hechos que el relato cuenta. Trata espectáculo popular y cine, no ópera ni compañías familiares de zarzuela, y no aporta nada sobre los Azuaga.",
  }),
  baraltCronologia2023: source({
    title: "Cronología del Teatro Baralt (Maracaibo, Venezuela)",
    author: "Teatro Baralt",
    year: 2023,
    type: "cronología institucional de una sala histórica",
    url: "https://www.teatrobaralt.org/__sub/cronologia-del-teatro-baralt/",
    summary:
      "Es el único rastro localizado de un Arcadio Azuaga real, y es el que obliga a no darlo por cartagenero. La cronología lo registra dos veces, el 19 de febrero y el 6 de marzo de 1887, como actor de una compañía familiar itinerante que pasó por Maracaibo. Existía, por tanto, un Azuaga de teatro en el Caribe una década antes de la fecha que el relato sugiere, lo que hace pensar que el autor tomó un apellido de la farándula viajera y no que inventara la familia entera. Es el dato que convierte la duda en una pista con fecha.",
    limitation:
      "La cronología no menciona Cartagena, ni Colombia, ni ninguna hermana cantante, ni un teatro llamado «Azul»: no hay nada en ella que ate a este hombre con la ciudad del relato. Es una cronología institucional de otro país, sin aparato crítico, y la coincidencia de apellido no prueba identidad.",
  }),
  ospinaBoquilla2022: source({
    title: "La Boquilla y Cartagena: historias de luchas territoriales, ciudadanía y etnicidad, en «Etnohistorias de América Latina y el Caribe» (pp. 207-233)",
    author: "Mónica P. Hernández Ospina y Orlando Deavila Pertuz, Abya-Yala, Quito",
    year: 2022,
    type: "capítulo académico de etnohistoria urbana",
    url: "https://sistemas.pedagogica.edu.sv/sistema/app-documentos/repositorio/documentos/197_Etnohistorias-de-America.pdf",
    summary:
      "Documenta el pueblo donde ocurre todo, con fecha de fundación y con censo. Reconstruye cómo hacia 1885 familias venidas de San Onofre, Villanueva y Rocha se asentaron en la franja entre el Caribe y la Ciénaga de la Virgen, y registra 257 viviendas en La Boquilla en 1929. Esa cifra da la escala exacta del caserío del relato: un lugar lo bastante pequeño para que una muerte así fuera un acontecimiento y lo bastante reciente para que su economía de pesca fuera lo único que había. Es la fuente que convierte el escenario en un sitio con historia propia y no en una playa genérica.",
    limitation:
      "El peso analítico del capítulo está en los conflictos de tierras del siglo XX tardío y del XXI, no en la vida pesquera de los años veinte y treinta. No nombra a ningún pescador, no describe técnicas ni artes de pesca, y no menciona el episodio. La versión del capítulo en SciELO Books devuelve 403, de modo que se cita por una copia del libro completo alojada en otro repositorio.",
  }),
  colombiapesca2020: source({
    title: "La pesca en Colombia: del agua a la mesa. Hacia dónde van nuestros océanos",
    author: "WWF Colombia",
    year: 2020,
    type: "informe institucional sobre pesca y acuicultura",
    url: "https://wwflac.awsassets.panda.org/downloads/libro_pesca_adm_2020baja_1.pdf",
    summary:
      "Sostiene los dos datos técnicos del relato que la ficha decidió no traducir ni juzgar. Por un lado, documenta la pesca artesanal marina colombiana como actividad de embarcación pequeña y arte manual, con las especies que la sostienen y con la distancia que hay entre los nombres locales de los peces y la nomenclatura científica: esa brecha es la razón por la que «cojnúa» se deja tal como el autor la escribió, entrecomillada, en lugar de asignarle una especie. Por otro, registra el uso de explosivos como práctica de pesca, con su daño al ecosistema, lo que confirma que los tacos de dinamita del relato eran equipo real de faena y no una exageración narrativa.",
    limitation:
      "Es un informe de conservación con horizonte contemporáneo y de política pesquera nacional, no un estudio histórico ni etnográfico: no cubre la primera mitad del siglo XX, no trabaja La Boquilla en particular y no recoge repertorios locales de nombres de peces del litoral cartagenero. No permite identificar la especie del relato.",
  }),
  sanchezMojicaGeografias2018: source({
    title: "Geografías del destierro: los barrios afro y populares de Cartagena de Indias, 1844-1885 (Nómadas, n.º 48)",
    author: "Dairo Sánchez-Mojica, Iesco, Universidad Central",
    year: 2018,
    type: "artículo arbitrado de historia urbana",
    url: "https://nomadas.ucentral.edu.co/index.php/inicio/2431-espectros-de-el-capital-nomadas-48/2-geo-grafias/977-geografias-del-destierro-los-barrios-afro-y-populares-de-cartagena-de-indias-1844-1885",
    summary:
      "Fecha en el mismo momento la creación de los asentamientos afro y populares del entorno de Cartagena y sostiene que esa periferia fue un proyecto y no una inercia. Con ello ayuda a leer la frase más dura del relato, que es la ausencia de cualquier posteridad: el cuento se cierra en la agonía y no concede un párrafo de memoria colectiva, y este artículo explica por qué la ciudad que produjo esos caseríos tampoco les producía archivo, ni monumento, ni nombre en los papeles.",
    limitation:
      "Su periodo termina en 1885, justo cuando La Boquilla empieza, y trata los barrios pegados a la muralla y no los caseríos de la ciénaga. No menciona La Boquilla, ni la pesca, ni ningún episodio de este tipo. Aviso técnico: el certificado del servidor no valida por cadena TLS incompleta y la descarga hay que forzarla.",
  }),
  edContrary2013: source({
    title: "The Contrary Wife: Folktales of Aarne-Thompson-Uther Type 1365",
    author: "D. L. Ashliman (ed.)",
    year: 2013,
    type: "antología comentada de un tipo folclórico",
    url: "https://sites.pitt.edu/~dash/type1365abc.html",
    summary:
      "Reúne las versiones europeas del pulso doméstico que se gana por terquedad y no por razón, que es el molde en el que este cuento encaja: el hijo no discute el fondo de lo que la madre pide, responde en la misma forma métrica para no ceder. Permite decir que el motivo está catalogado sin atribuirle un origen.",
    limitation:
      "No incluye ninguna versión hispanoamericana ni colombiana, y en las europeas el pulso es entre cónyuges, no entre madre e hijo.",
  }),
  ashlimanAging2021: source({
    title: "Aging and Death in Folklore",
    author: "D. L. Ashliman",
    year: 2021,
    type: "ensayo académico con antología de textos",
    url: "https://sites.pitt.edu/~dash/aging.html",
    summary:
      "Documenta el motivo del hijo que niega auxilio a la madre enferma como una familia narrativa reconocida, y con ella la función del remate cruel: la tradición no lo pone para celebrarlo sino para dejarlo dicho. Es lo que sostiene publicar la grosería final del muchacho en vez de suavizarla.",
    limitation:
      "Trata sobre todo material europeo y norteamericano; no menciona Colombia ni el Caribe.",
  }),
  hozCuentos20252: source({
    title: "Cuentos de hadas campesinos de Colombia: topologías literarias de la oralidad",
    author: "Adrián Farid Freja de la Hoz",
    year: 2025,
    type: "artículo académico en revista universitaria",
    url: "https://revistas.udea.edu.co/index.php/elc/article/view/358114",
    summary:
      "Estudia cómo el cuento campesino colombiano incorpora la copla dentro de la prosa y por qué esa mezcla se pierde al transcribir, que es exactamente el rasgo que esta pieza conserva. Da el marco para tratar el verso del cuento como forma y no como adorno.",
    limitation:
      "Trabaja sobre corpus de otras regiones del país y no analiza el material cordobés de Zapata Olivella.",
  }),
  hozLorica20032: source({
    title: "Lorica, una colonia árabe a orillas del río Sinú (Cuadernos de Historia Económica y Empresarial 10)",
    author: "Joaquín Viloria de la Hoz",
    year: 2003,
    type: "estudio de historia económica regional",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/chee_10.pdf",
    summary:
      "Describe la casa campesina del Bajo Sinú y el reparto del trabajo por horas del día en los años en que se recogió el cuento, que es lo que da sentido a que la madre llame al hijo de madrugada y a que el refrán del madrugador tenga fuerza de argumento.",
    limitation:
      "Estudio económico y urbano; no trata literatura oral ni menciona el relato.",
  }),
  becerraConjurar20182: source({
    title: "Conjurar el olvido: campesinos y política en las llanuras del Caribe colombiano",
    author: "Andrea García Becerra y Diana Ojeda",
    year: 2018,
    type: "artículo académico en revista indexada",
    url: "https://www.redalyc.org/journal/814/81456145007/html/",
    summary:
      "Documenta la vida campesina de las llanuras del Caribe en el periodo de la recolección y el lugar de la madre en la economía doméstica, que es el trasfondo sobre el que se entiende qué significa que nadie se levante cuando ella está mala.",
    limitation:
      "Trabajo de historia social y política; no analiza narrativa oral ni cita a Zapata Olivella.",
  }),
  universityManuel20262: source({
    title: "Manuel Zapata Olivella Collections — tema «cuentos»",
    author: "Vanderbilt University",
    year: 2026,
    type: "archivo digital de fondo personal",
    url: "https://mzo.library.vanderbilt.edu/topics/cuentos",
    summary:
      "Permite comprobar qué quedó del archivo de campo del recopilador y confirmar que el libro publica una selección: el cuento tiene detrás una grabación cuyo paradero el volumen no declara.",
    limitation:
      "Catálogo de fondo personal, no reproduce el texto de este cuento; la descripción por temas es del archivo, no del autor.",
  }),
  edFlying2021: source({
    title: "The Flying Dutchman: Legends of Aarne-Thompson-Uther Type 777*",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2021,
    type: "antología comentada de un tipo legendario, con textos editados",
    url: "https://sites.pitt.edu/~dash/type0777ast.html",
    summary:
      "Reúne el fondo mitológico que esta pieza roza sin nombrar, y lo reúne con fuentes fechadas: trece testimonios y versiones entre 1790 y 1891 —John MacDonald, el «Voyage to New South Wales» de 1795, Walter Scott en 1813, Heine en 1833, Washington Irving en 1855, el «Spectre Ship of Porthcurno» de Cornualles en 1865—, encabezados por una cita del «Naval Sketch-Book» de 1826 sobre lo que los marineros creen. Sirve para situar al personaje en su familia y para medir en qué se aparta: el holandés no puede llegar a puerto por una maldición, y este marino balear no puede zarpar por su propio apetito, se declara anclado como un barco desarbolado y no hay castigo sobrenatural ninguno. Es la versión doméstica y sin condena de la leyenda.",
    limitation:
      "Es un catálogo tipológico de tradición europea y anglosajona editado en inglés, sin una sola versión caribeña ni colombiana, y sin relación documental con Cartagena. Aporta el paralelo de tipo y no corrobora nada del relato: el propio texto de Martínez Fajardo no menciona ningún buque fantasma.",
  }),
  mUHCAHistoria2017: source({
    title: "«Historia del Barrio Getsemaní» (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_historia-del-barrio-getsemani-96",
    summary:
      "Da nombre y callejero al arrabal extramuros que contiene el Arsenal, que es el único lugar que el relato ancla. Ofrece la etimología del barrio y una lista de veintisiete nombres de calles, y ese inventario —modesto pero municipal— es lo que permite afirmar que la geografía del cuento no es genérica: los cafetines a la orilla de la bahía están en un vecindario documentado, con toponimia propia y con una relación histórica con el trabajo del puerto.",
    limitation:
      "Es prácticamente un muñón: lo sustancioso de la entrada va en un adjunto de presentación que la página no renderiza, y lo que queda son la nota etimológica y la lista de calles. Sin bibliografía, sin autor individual, sin fecha visible, y sin una sola línea sobre el Arsenal, las goletas o la vida de los cafetines.",
  }),
  vasquezDegeneracion2018: source({
    title: "Degeneración y mejoramiento de la raza: ¿higiene social o eugenesia? Colombia, 1920-1930 (História, Ciências, Saúde-Manguinhos, vol. 25, supl. 1, pp. 145-158)",
    author: "María Fernanda Vásquez, Universidade Federal de Santa Catarina",
    year: 2018,
    type: "artículo arbitrado de historia de la ciencia y la medicina",
    url: "https://www.redalyc.org/journal/3861/386156527009/html/",
    summary:
      "Fecha el vocabulario con que el narrador describe a los trabajadores del muelle, que es lo que esta ficha declara y no adopta. Reconstruye cómo entre 1920 y 1930 la élite médica colombiana discutió en serio la degeneración biológica de la población y elaboró explicaciones de carácter climático y geográfico para atribuir temperamentos y caracteres morales a los habitantes de ciertas regiones. Las categorías raciales que el texto de 1948 usa como si fueran descripción neutra vienen de ahí, y por eso se registran como voz de la obra y no como dato.",
    limitation:
      "Su periodo es anterior al libro y su materia es la política sanitaria y la circulación de saberes médicos, no la literatura costumbrista: no analiza ningún texto de Martínez Fajardo ni se ocupa de Cartagena. No aporta nada sobre marinos, puertos ni coplas.",
  }),
  mUHCAFiestas20173: source({
    title: "«Fiestas de la Independencia» (serie «cartapedia»)",
    author: "Museo Histórico de Cartagena de Indias (MUHCA)",
    year: 2017,
    type: "artículo de divulgación histórica institucional",
    url: "https://www.muhca.gov.co/cartapedia_fiestas-de-la-independencia-124",
    summary:
      "Sirve por comparación de calendarios festivos. Reconstruye la otra gran fiesta cívica de la ciudad, la del 11 de noviembre, con su primera conmemoración en 1812 y su suspensión durante el sitio de Morillo, y con ello deja ver que en Cartagena las fiestas se interrumpen cuando hay guerra. El relato hace lo contrario con la del 2 de febrero: la guerra civil no la suspende, la atraviesa, y la romería al cerro sigue funcionando mientras por debajo pasan las armas.",
    limitation:
      "No trata la Candelaria ni el cerro de La Popa, y su materia es la independencia de 1811-1815, no las guerras civiles del cambio de siglo. Es divulgación municipal sin bibliografía ni autor individual, y la página no declara fecha de redacción.",
  }),
  cartagenaOnce20202: source({
    title: "«Once de noviembre» (Enciclopedia Banrepcultural)",
    author: "Centro Cultural del Banco de la República de Cartagena",
    year: 2020,
    type: "artículo enciclopédico institucional",
    url: "https://enciclopedia.banrepcultural.org/Once_de_noviembre",
    summary:
      "Aporta el precedente cartagenero de lo que el relato pone en escena: la ciudad como puerta de entrada de armas y de gente armada, con el episodio de 1810 en que hombres de Getsemaní, Santo Toribio y Santa Catalina se congregan con machetes ante el palacio del gobernador y fuerzan una votación del cabildo. Entre ese antecedente y la escena del relato hay un siglo, pero la mecánica es la misma: en Cartagena la política nacional se resuelve con lo que llega por el mar y se reparte por los barrios.",
    limitation:
      "Cubre 1808-1815 y no llega a las guerras civiles del cambio de siglo ni nombra a Uribe Uribe. No tiene autor individual ni bibliografía detallada, y el artículo no fija explícitamente la fecha que le da título.",
  }),
  loboguerreroSinopsis1954: source({
    title: "Sinopsis geográfica del Archipiélago de San Andrés y Providencia, Boletín de la Sociedad Geográfica de Colombia, vol. XII, n.os 3 y 4",
    author: "Manuel José Loboguerrero",
    year: 1954,
    type: "informe geográfico oficial",
    url: "https://sogeocol.edu.co/documentos/012_03_04_el_arc_de_san_and_y_prov.pdf",
    summary:
      "Es el registro escrito más antiguo en abierto que recoge la leyenda, y el único que documenta que alguien fue a comprobarla. En la página 13 describe la roca de quince metros con forma de cabeza humana que llaman «Cabeza de Morgan», las cavernas donde entra el mar y la creencia de que allí enterró el pirata sus tesoros, y a continuación da lo que ninguna otra fuente da: tres expediciones fechadas y con nombre —Mr. Curry en 1877, Curtís en 1879 y Levy en 1881, esta última con autorización tramitada ante el Almirantazgo británico por Carlos Holguín, ministro de Colombia en Londres—. En la página 9 anota que los primeros pobladores fueron «los piratas Manswelt y Morgan» y que enterraron en Santa Catalina «el producto de su pillaje», y registra los apellidos isleños: Archibold, Robinson, Libingston, Rankin, Johvar, Britton y Newal.",
    limitation:
      "No da la fuente de ninguna de las tres expediciones, de modo que quedan documentadas por esta sinopsis y por nada más. Es un informe geográfico oficial de 1954 escrito desde el continente, que reporta la tradición raizal sin recogerla ni verificarla, y que no nombra a ningún isleño como narrador.",
  }),
  leipoldOur2002: source({
    title: "«Our Native Thing». Estudio sobre la imagen histórica de los sanandresanos en el Mar Caribe colombiano",
    author: "Claudia Leipold",
    year: 2002,
    type: "tesis doctoral con apéndice de entrevistas de campo",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll23/id/1005/",
    summary:
      "Es la única fuente que pone la leyenda en boca de los isleños, con nombre y fecha. Sobre trabajo de campo en San Andrés entre julio de 1994 y marzo de 1995, publica en apéndice las entrevistas transcritas en inglés isleño con traducción, cada una con biografía del hablante: Iris Abrahams, pintora nacida en 1900, responde el 20 de octubre de 1994 que «the first inhabitants was pirates, Morgan and all of those, they were English!»; Miss Gal Gal, nacida en 1910, dice el 17 de septiembre del mismo año que «we had plenty slaves and pirates on the island […] Morgan, Mitchell, all lived here, all nations»; y Thomas Livingston, entrevistado el 7 de octubre de 1994, es un ex navegante que dirige una empresa de salvamento de tesoros de mar. La autora resume el estado del relato: hay Morgan's Cave en San Andrés y Morgan's Head en Santa Catalina, y «el tesoro del oro enterrado mueve todavía los sueños y las imaginaciones de los isleños». Es la pieza que sostiene que esto es un relato raizal y no continental.",
    limitation:
      "El objeto de la tesis es la imagen histórica de los isleños, no el tesoro: Morgan aparece como dato de identidad, no como episodio narrado con trama. Nadie le cuenta a la autora la leyenda completa; le dicen que existe. Y la versión que se consulta es una traducción al español hecha desde el alemán, con erratas notorias.",
  }),
  exquemelinBuccaneers1684: source({
    title: "The Buccaneers of America",
    author: "Alexandre Olivier Exquemelin",
    year: 1684,
    type: "crónica de un testigo embarcado con los bucaneros",
    url: "https://www.gutenberg.org/cache/epub/26690/pg26690.txt",
    summary:
      "Es la fuente que la leyenda invoca y la que la desmiente. El capítulo XV, en la página 179, se titula «Captain Morgan leaves Hispaniola, and goes to St. Catherine's, which he takes»: el desembarco ocurre en una bahía llamada Aguade Grande, el castillo principal es Santa Teresa y al día siguiente cuentan cuatrocientos cincuenta y nueve prisioneros entre hombres, mujeres y niños. El capítulo XVI, página 187, saca de allí cuatrocientos hombres hacia Chagre. Lo decisivo para esta ficha es lo que el testigo describe: Morgan vacía Santa Catalina, se lleva la pólvora, demuele los fuertes y reparte el botín de Panamá en Chagre antes de escabullirse de noche hacia Jamaica con lo mejor. No hay entierro, no hay mapa y no hay isla. El mismo capítulo XV sostiene además el paralelo de «El castellano de San Juan»: el gobernador español pacta con el asaltante una rendición representada, «using the formality, as if they forced him to deliver the castle».",
    limitation:
      "La edición inglesa amplifica mucho respecto del original neerlandés de 1678 y su relación con los hechos está discutida desde el siglo XVIII. Es además el relato de un europeo embarcado con los agresores, que cuenta el saqueo desde dentro y sin una sola voz isleña.",
  }),
  exquemelinPiratas1681: source({
    title: "Piratas de la América, y luz a la defensa de las costas de Indias Occidentales",
    author: "Alexandre Olivier Exquemelin, traducción de Alonso de Buena-Maison",
    year: 1681,
    type: "crónica de bucaneros en traducción castellana de época",
    url: "https://archive.org/details/piratasdelaameri00exqu",
    summary:
      "Es la versión en que el episodio circuló en castellano tres años después del original neerlandés, y hay que citarla aparte porque la toma de la isla no está donde la busca quien viene de la edición inglesa: aquí abre el capítulo III, en la página 235, y la isla se escribe «Sancta Cathalina», por lo que no aparece buscando «Catalina». Sirve para comprobar que la desmentida de la leyenda —Morgan vacía la isla y reparte en Chagre— no es un añadido de los traductores ingleses del XVIII, sino que ya estaba en la primera difusión hispana del libro.",
    limitation:
      "Impresa con ese larga y sin paginación moderna, obliga a transcribir a mano; el OCR del facsímil es inservible. Y es la misma obra que la entrada anterior, leída en otra edición: no es una fuente independiente, sino una comprobación de la transmisión del texto.",
  }),
  nunezsoporte2007: source({
    title: "El soporte documental de la historia del Archipiélago de San Andrés y Providencia, Cuadernos del Caribe",
    author: "Álvaro Archbold Núñez",
    year: 2007,
    type: "inventario archivístico en revista universitaria",
    url: "https://revistas.unal.edu.co/index.php/ccaribe/article/download/41698/43411",
    summary:
      "Es el mapa del archivo de esta ficha, hecho por un abogado y político isleño. Sitúa el periodo —«Esta es la época de piratas y corsarios conocidos como Henry Morgan y Edward Mannsveldt»— y, sobre todo, dice dónde está lo que aquí falta: el Centro de Documentación del Banco de la República en San Andrés guarda el «Informe del reconocimiento técnico-histórico del Fuerte de La Libertad en la Isla de Santa Catalina, 1986», la geografía histórica de Parsons publicada por El Áncora en 1985 y el estudio de Donald Rowland sobre la ocupación española de Old Providence entre 1641 y 1670. Explica, por tanto, por qué ninguna fuente abierta narra la leyenda entera: el soporte documental de la isla está en papel y en San Andrés.",
    limitation:
      "No habla del tesoro ni de ninguna de las búsquedas, y no recoge tradición oral. Es la llave del archivo, no el archivo.",
  }),
  jayleyenda2018: source({
    title: "La leyenda del pirata Morgan presente en la tradición oral de San Andrés",
    author: "Vilma Jay, Radio Nacional de Colombia",
    year: 2018,
    type: "reportaje de radio pública sobre tradición oral",
    url: "https://www.radionacional.co/cultura/la-leyenda-del-pirata-morgan-presente-en-la-tradicion-oral-de-san-andres",
    summary:
      "Documenta la versión sanandresana, que es la que hoy recibe visitantes, y es explícita sobre su estatuto. Sitúa la cueva a ocho kilómetros por la vía circunvalar, con ciento veinte metros de profundidad y agua dulce, y recoge la versión que allí se cuenta: Morgan se refugia en la isla en 1668, tras saquear Panamá y Portobelo, huyendo de un huracán con cinco galeones cargados de oro, perlas, plata y monedas. Cita a Jimmy Gordon —«El mito sigue vivo, la leyenda sigue viva, la narración oral sigue viva»— y da los tres datos que hacen honesta la ficha: la transmisión lleva cinco generaciones, quienes dicen haber entrado encontraron «una isla virgen» sin tesoro, y no existe registro fotográfico de nada.",
    limitation:
      "Nombra la leyenda y su circulación, pero no la narra. Sus cifras —los cinco galeones, la fecha de 1668— no llevan fuente, y la cronología de Exquemelin las contradice: la salida del cabo Tiburón es de diciembre de 1670 y el asalto a Panamá de enero de 1671.",
  }),
  mitchellFuerte2020: source({
    title: "Fuerte Warwick, Enciclopedia del Banco de la República",
    author: "Andrés Steele Mitchell, Centro Cultural del Banco de la República de San Andrés",
    year: 2020,
    type: "entrada enciclopédica institucional",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Fuerte_Warwick",
    summary:
      "Sostiene el segundo paralelo de «Similitudes»: la manera insular de bautizar. Documenta que los colonos ingleses llegaron en 1629, que en 1630 el ingeniero Samuel Axe levantó la primera estructura en la ladera oriental de Santa Catalina y que el nombre venía de Robert Rich, segundo conde de Warwick, cofundador de la compañía colonizadora; que en 1641 lo reconquistó Francisco Díaz Pimienta y lo rebautizó Fuerte de la Cortadura de San Jerónimo; y que después fue Fuerte La Libertad, Fuerte Aury y Fuerte Morgan. Cinco nombres para una misma piedra, cada uno del último que pasó por allí: es la prueba de que un accidente del terreno con apellido de corsario documenta que se acordaron de él, no que él hiciera nada ahí. Declarado Monumento Nacional por la Resolución 0788 de 1998.",
    limitation:
      "La entrada atribuye a Morgan la dirección de la retoma inglesa de 1666, y eso es impreciso: según Exquemelin quien mandaba era Edward Mansvelt y Morgan iba de vicealmirante. No debe copiarse esa frase. Y no menciona ningún tesoro. El servidor devuelve a los clientes de línea de comandos una redirección antibot; la página carga entera con navegador.",
  }),
  escobarCueva2018: source({
    title: "La Cueva de Morgan: tradición oral raizal",
    author: "Carlos Barraza Escobar, Radio Nacional de Colombia",
    year: 2018,
    type: "reportaje de radio pública sobre patrimonio inmaterial",
    url: "https://www.radionacional.co/actualidad/mundo/la-cueva-de-morgan-tradicion-oral-raizal",
    summary:
      "Da la cadena de custodia del relato en San Andrés, que es lo que permite llamarlo raizal sin adjetivar de oídas. Cita a Jimmy «Bull» Gordon, escritor raizal y miembro de la Academia de Historia del Archipiélago, que administra la Cueva de Morgan y la considera «un 50 % de la identidad raizal», y nombra a Salomón Gordon, que abrió la cueva como sitio turístico en 1947. Esa fecha es el dato duro de la entrada: fija cuándo la leyenda pasó de contarse a visitarse.",
    limitation:
      "El propio texto advierte que «Legado de Piratas», el libro de Jimmy Gordon al que remite, «construye un relato imaginario». La nota no reproduce la leyenda, sólo la nombra, y es prensa reciente: entra por la fecha de 1947 y por los nombres, no por el relato.",
  }),
  republicaCentro1994: source({
    title: "Centro de Memorias Orales, subcolección «La imagen histórica de los sanandresanos en el Mar Caribe colombiano»: entrevista a Iris Abrahams",
    author: "Banco de la República, Biblioteca Virtual Babel",
    year: 1994,
    type: "archivo sonoro y transcripción de entrevista de campo",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll11/id/92",
    summary:
      "Es el archivo sonoro de la tradición oral raizal que la tesis de Leipold recogió, catalogado pieza por pieza con la biografía del hablante, y la prueba material de que estas voces existen fuera de la traducción alemana. La ficha de Iris Abrahams (1900-1999), pintora de paisaje y una de las primeras maestras de español de la isla, la sitúa entrevistada el 20 de octubre de 1994 en San Luis, «en una silla de ruedas» y «siempre vestida de blanco», en inglés, con audio y transcripción. La subcolección incluye además a Walwin Peterson, Delwin May, Thomas y Orly Livingston, Lolia Pomare, Cecilia Francis Hall, Álvaro Archbold, Miss Bowie y el reverendo George M. May.",
    limitation:
      "Las entrevistas versan sobre la historia y la identidad isleñas en general: Morgan aparece dentro de ellas, no como tema. Tienen derechos reservados del autor, así que se citan y no se reproducen, y el visor CONTENTdm tarda y no responde a descarga automática.",
  }),
  stanislawskiAndres1958: source({
    title: "San Andrés y Providencia (Islas), Boletín de la Sociedad Geográfica de Colombia, n.º 60, vol. XVI",
    author: "Dan Stanislawski, traducción de Marco F. Archbold Britton",
    year: 1958,
    type: "estudio geográfico traducido en boletín académico",
    url: "https://www.sogeocol.edu.co/documentos/060_san_andr_y_prov.pdf",
    summary:
      "Vale aquí exactamente por lo que no dice, y ése es el dato. Describe el contrabando y la piratería como norma insular y registra corsarios daneses hacia 1629, pero no menciona a Morgan ni ningún tesoro, y se publica en 1958, el año siguiente al decreto que supuestamente financió una búsqueda estatal en Providencia. La geografía oficial de ese momento no da la noticia por buena, y eso pesa contra la idea de que la búsqueda del tesoro fuera un asunto público reconocido.",
    limitation:
      "Es un estudio de geografía humana, no de historia ni de tradición oral. Un silencio no prueba nada por sí solo, y la ausencia puede deberse al recorte del artículo y no a un juicio del autor.",
  }),
  villarmujeres2020: source({
    title: "Las mujeres en la guerra de Independencia en las provincias del Caribe colombiano, 1815-1822 (Memorias. Revista Digital de Historia y Arqueología desde el Caribe, n.º 40, pp. 134-168)",
    author: "Vladimir Daza Villar",
    year: 2020,
    type: "artículo arbitrado de historia con documentación de archivo",
    url: "https://www.redalyc.org/journal/855/85569988007/html/",
    summary:
      "Documenta, con nombres y con archivo, la situación que el relato convierte en comedia de alcoba: mujeres patriotas alojando enemigos. El artículo registra que durante el sitio de Morillo hubo cartageneras que dieron refugio a prisioneros españoles —María del Rosario Valderrama, Jacinta Calonge— y que otras abastecieron hospitales militares con medicinas y pan, mientras algunas sufrían confiscaciones y abusos de la tropa ocupante. Que una casa patriota tenga en su cuarto de huéspedes a un oficial del rey herido no es una invención inverosímil de la autora: es una situación que el archivo conoce, sólo que en el archivo nadie lo duerme con un soporífero.",
    limitation:
      "Su periodo es 1815-1822 y esta pieza transcurre en 1811, de modo que el paralelo es de situación y no de fecha. No documenta el soporífero, ni los compromisos matrimoniales pagados como rescate, ni ninguno de los personajes del relato, y su foco está en la actuación económica y jurídica de las mujeres antes que en la doméstica.",
  }),
  colombiaActa1811: source({
    title: "Acta de independencia de la Provincia de Cartagena en la Nueva Granada (hoja suelta, Imp. de Ruiz e Hijos)",
    author: "Provincia de Cartagena; ejemplar de la Biblioteca Nacional de Colombia, digitalizado en la Biblioteca Digital de Bogotá",
    year: 1811,
    type: "documento primario impreso, digitalizado y de libre acceso",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/3705905/",
    summary:
      "Es el papel del que el protagonista sólo recibe la noticia. El impreso original de 1811, salido de la imprenta de Ruiz e Hijos y conservado en la Biblioteca Nacional de Colombia, proclama la separación de la Provincia de Cartagena y la firma, entre otros, José María García de Toledo, que en el relato aparece como personaje distinto del protagonista homónimo y con la casa abierta a ricos, pobres y gente de color. Permite comprobar que lo que en la alcoba llega como rumor —que el Acta se firmó esa mañana— es un documento con fecha, imprenta y firmas, y no un recurso de ambientación.",
    limitation:
      "Es una hoja suelta de proclamación: no narra la jornada, no dice cómo reaccionó el gobernador ni describe las fiestas, que son los tres ecos que el relato deja entrar. Lo consultado es la reproducción digital de un ejemplar, y el registro no transcribe la lista de firmantes en su descripción.",
  }),
  miramonreconquista1964: source({
    title: "La reconquista de Cartagena: Estampas de su martirio (Boletín Cultural y Bibliográfico, vol. 7, n.º 10, pp. 1801-1803)",
    author: "Alberto Miramón",
    year: 1964,
    type: "ensayo histórico en boletín cultural institucional",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/download/5309/5561/10865",
    summary:
      "Corrobora desde fuera lo que el relato enumera, empezando por el hambre. El ensayo narra la escuadra de Morillo fondeando en los primeros días de agosto de 1815, los 10.642 veteranos peninsulares, los términos de rendición rechazados, el bloqueo cerrado por tierra y mar para rendir la ciudad por hambre y, citando a Lino Pombo, el detalle de lo que se comió: carne y harina podridas, bacalao rancio, caballo y burro en salmuera, perros, ratas, el cuero de las correas y de los taburetes. Habla de un sitio de casi cuatro meses. Es la fuente que vuelve creíbles los tres mil cadáveres del cuento sin tener que creerle al cuento.",
    limitation:
      "Ensayo patriótico de 1964, de tres páginas, sin notas y leído en facsímil con reconocimiento óptico degradado. No da la cifra de los ochenta y cuatro mil pesos ni menciona a las doncellas escondidas en aljibes; y su duración de «casi cuatro meses» es una cuarta versión al lado de las tres cifras en días que circulan en la bibliografía.",
  }),
  najerasitio2014: source({
    title: "El sitio de Cartagena: una mirada desde la otra orilla. Reseña de Rodolfo Segovia, «105 días: El sitio de Pablo Morillo a Cartagena de Indias» (Economía & Región, vol. 8, n.º 1, pp. 255-259)",
    author: "Adelaida Sourdis Nájera, Universidad Tecnológica de Bolívar",
    year: 2014,
    type: "reseña académica de una monografía de historia militar",
    url: "https://revistas.utb.edu.co/economiayregion/article/download/72/54/110",
    summary:
      "Aporta la cifra que le falta al relato y la fecha exacta de la noche que narra. La reseña presenta la monografía de referencia moderna sobre el asedio —diez capítulos, índices onomástico y biográfico, orden de batalla del Ejército Expedicionario y una segunda mitad construida sobre documentación española de archivo antes inexplotada— y resume sus hallazgos: ciento cinco días de sitio, 3.125 bajas del ejército sitiador entre muertos, desertores y enfermos del trópico —el 44 % de la tropa pasada en revista en Santa Marta el 27 de julio de 1815—, la evacuación de la ciudad el cinco de diciembre engañados los sitiados por el pabellón de Cartagena izado por el enemigo, y la pérdida de más de la tercera parte de la población de la provincia. La fuente dice «el día quince» y «durante meses»; esto dice cuándo y cuántos.",
    limitation:
      "Es la reseña y no el estudio: el libro de Rodolfo Segovia, de 2013, sólo existe impreso y la copia del repositorio del Banco de la República está tras un CAPTCHA. Y su cifra de ciento cinco días es la tercera en discordia, frente a los ciento catorce y ciento ocho que da Aguilera y Meisel en dos pasajes distintos: la duración del sitio sigue sin conciliarse y esta ficha no la funde.",
  }),
  cervantesPaseo2015: source({
    title: "Paseo de los Mártires (Cartagena de Indias · Paseo)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2015,
    type: "ficha monumental en catálogo patrimonial",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/paseo_martires.htm",
    summary:
      "Documenta lo que la ciudad hizo después con los muertos que el relato cuenta. La ficha describe el Paseo de los Mártires, la explanada frente a la Torre del Reloj donde se levantaron los bustos de los nueve fusilados por la represión de la reconquista, y explica que esa memoria monumental nace del episodio de 1815 y 1816. Es la prueba de que el asedio y su represalia son el acontecimiento fundacional de la memoria pública cartagenera, y de que el título de Ciudad Heroica viene de ahí.",
    limitation:
      "Es una ficha monumental breve, sin citas ni bibliografía, sobre un conjunto conmemorativo del siglo XIX y no sobre el sitio. El catálogo al que pertenece tiene además un error verificado en su sección de historia, donde fecha la declaración de independencia en 1815, de modo que no se usa aquí para cronología.",
  }),
  monteseducacion2017: source({
    title: "La educación en Colombia: mujeres en la Escuela Normal de Institutoras de Bolívar (1903-1930) (Educação. Revista do Centro de Educação, vol. 42, n.º 1, pp. 191-214)",
    author: "Yésica Paola Montes y Nilce Vieira Campos Ferreira",
    year: 2017,
    type: "artículo académico de historia de la educación",
    url: "https://www.redalyc.org/journal/1171/117150748015/html/",
    summary:
      "Documenta la institución exacta en la que el cuento encierra a su protagonista, y en la costa Caribe. El artículo estudia la Escuela Normal de Institutoras de Bolívar, fundada en Cartagena en 1878, y establece tres cosas que la página 254 da por sabidas: que la enseñanza femenina se organizaba en régimen de internado —hacia 1918 unas treinta y dos alumnas internas, con la alimentación mal cubierta por el presupuesto—, que tras la reforma conservadora de 1903 la instrucción pública se dirigió «en concordancia con la religión católica», con tres horas semanales de religión impartidas por sacerdotes durante los cuatro años, y que a las muchachas se les enseñaba cocina, costura y economía doméstica en lugar de agricultura, física y matemáticas. La muchacha que teje junto a la ventana porque no la dejan salir está en ese régimen, y el tejido es parte del programa.",
    limitation:
      "Su objeto es una escuela normal de Cartagena entre 1903 y 1930, no un colegio de monjas del Sinú en los años sesenta: no hay vínculo documentado entre esa institución y la del cuento, y median cuatro décadas. No trata del lenguaje de las internas, ni de la relación con las familias, ni menciona la tradición oral.",
  }),
  edBreaking2020: source({
    title: "Breaking Wind: Legendary Farts",
    author: "D. L. Ashliman (ed.)",
    year: 2020,
    type: "antología comentada de relatos escatológicos tradicionales",
    url: "https://sites.pitt.edu/~dash/fart.html",
    summary:
      "Trae el paralelo del huésped en casa ajena que la ficha nombra sin nombrarle nombre. En «Till Eulenspiegel and the Innkeeper at Cologne», recogida aquí en su versión alemana, el visitante deja de noche su excremento sobre la mesa plegable del posadero y el desastre se descubre a la mañana siguiente, cuando el hombre abre la mesa para recibir invitados y «un olor infame le subió a la nariz». Es el mismo esquema del chiste cordobés —alguien duerme fuera de su cama, resuelve de noche una necesidad donde no debe, y la mañana va a encontrarlo—, y sirve para medir la vuelta que le da esta versión: allí el huésped se venga a propósito, aquí no hay malicia en nadie y el desastre está repartido entre dos, porque la segunda mitad la provoca el niño. La página recoge además «The Historic Fart» de Las mil y una noches y dos pasajes turcos y alemanes más.",
    limitation:
      "No es un índice tipológico ni fija un número ATU para este esquema: es una antología temática de cuatro textos europeos y orientales, editados de fuentes impresas, sin material hispánico ni hispanoamericano. Ninguna de sus piezas tiene la simetría del remate cordobés. Revisada el 2 de julio de 2020.",
  }),
  edGhosts20212: source({
    title: "Ghosts: Folktales of Aarne-Thompson-Uther Types 1676 and 1676B (Real Ghosts and Fake Ghosts)",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2021,
    type: "antología comentada de un tipo folclórico, con textos editados",
    url: "https://sites.pitt.edu/~dash/type1676.html",
    summary:
      "Reúne la rama de cuentos que esta pieza ejecuta y que los catálogos separan de las leyendas de espantos: relatos en que el aparecido resulta ser una persona con una sábana, un bromista, un vecino en su tarea nocturna. Entre los once textos editados —de Bélgica, Alemania, Suecia, Irlanda e Inglaterra— está «The Death Shroud» y está «Two Spirits», donde un marido se envuelve en un lienzo blanco para asustar a su mujer en el camino del cementerio. La mecánica es la misma que aquí: la aparición existe sólo mientras nadie la mira de cerca, y el desenlace no es el miedo sino la vergüenza de haber creído. Lo que el relato cartagenero añade al tipo es el horario laboral: el lechero y el fantasma tenían el mismo recorrido y la misma hora.",
    limitation:
      "Es un catálogo tipológico de tradición europea editado en inglés, sin ninguna versión colombiana ni caribeña, y no incluye el motivo del caballo sin cabeza, que aquí queda sin paralelo catalogado. Aporta la comparación de tipo que `similitudes` reclama y no corrobora ni un hecho del Playón del Blanco.",
  }),
  calderonAntonio2014: source({
    title: "Antonio Brugés Carmona. Música costeña / Realismo mágico, Revista de Estudios Colombianos n.º 44",
    author: "Luis Elías Calderón",
    year: 2014,
    type: "ensayo arbitrado de historia literaria",
    url: "https://colombianistas.org/wordpress/wp-content/themes/pleasant/REC/REC%2044/Ensayos/44-5-Ensayo_Calderon.pdf",
    summary:
      "Es la fuente que cambia la ficha y la que sostiene la capa de «Versiones». Reconstruye la obra periodística de Antonio Brugés Carmona (Santa Ana, Magdalena, 1911-1956) y transcribe el pasaje del duelo tal como éste lo publicó: «De repente se presentó el Diablo en forma de acordeonista […] Ocho días y ocho noches duró la lucha hasta que se firmó un acuerdo: Pedro Nolasco sería millonario y tocaría como nadie el acordeón, pero su alma quedaba hipotecada hasta el día de su muerte». Fecha la precedencia —Brugés puso ese encuentro en territorio guajiro «casi treinta años antes que García Márquez hiciera lo mismo con la figura de Francisco El Hombre»— y da la referencia completa de la crónica: «Vida y muerte de Pedro Nolasco Padilla», El Tiempo, Bogotá, 3 de noviembre de 1940, Segunda Sección, página 2. Identifica además al acordeonero real detrás del personaje, Pedro Nolasco Martínez (El Paso, Cesar, 1881-1969), autor de «El Maligno» sobre su propio encuentro con el diablo, cuya voz quedó grabada en la de su hijo Samuel Martínez para el sello OCORA-Radio France en 1996. Es además la única vía por la que hoy se puede leer la crónica que transcribe: «Vida y muerte de Pedro Nolasco Padilla», de Antonio Brugés Carmona, publicada en El Tiempo el 3 de noviembre de 1940, que es el registro escrito más antiguo del duelo con el diablo y donde el acordeonero pacta en vez de vencer.",
    limitation:
      "Es historia literaria y cita a Brugés de segunda mano: transcribe el pasaje del duelo pero no reproduce la crónica entera, y su tesis principal es sobre el realismo mágico, no sobre el vallenato. La crónica de 1940 sigue en hemeroteca y no en línea. La crónica de 1940 no se cita por su impreso original: El Tiempo de ese año no está en línea por ninguna vía que se haya podido abrir, así que se lee a través de esta transcripción arbitrada.",
  }),
  colombiaPlan2013: source({
    title: "Plan Especial de Salvaguardia para la Música Vallenata Tradicional del Caribe Colombiano",
    author: "Ministerio de Cultura de Colombia y Clúster de la Cultura y la Música Vallenata",
    year: 2013,
    type: "expediente de salvaguardia de patrimonio inmaterial",
    url: "https://patrimonio.mincultura.gov.co/SiteAssets/Paginas/PES-El-vallenato,-m%C3%BAsica-tradicional-de-la-regi%C3%B3n-del-Magdalena-Grande/16-La%20m%C3%BAsica%20vallenata%20tradicional%20del%20Caribe%20colombiano%20-%20PES.pdf",
    summary:
      "Es el documento que prueba que el Estado colombiano trata a este personaje como alguien que tuvo cuerpo y tumba. Registra que el 27 de octubre de 2011 el equipo del plan viajó a Riohacha y visitó el sitio referenciado como Macho Bayo «para conocer el estado de la tumba de Francisco Moscote, conocido como Francisco el Hombre, quien de acuerdo con la leyenda alrededor de la música vallenata demostró sus habilidades en la ejecución del acordeón derrotando al diablo». Entre las metas del plan figura la recuperación de esa tumba y su entorno, con costo estimado y entidades responsables, y el expediente registra el Festival Francisco el Hombre de Riohacha. Entra donde la Convención genérica de la Unesco no entraría, porque habla del relato y no sólo del género musical.",
    limitation:
      "Es un instrumento de política pública. La leyenda le importa como activo patrimonial y turístico: no discute su origen, no cita registros, no contrasta versiones y no menciona a Brugés Carmona ni a Pedro Nolasco Padilla.",
  }),
  tristanchoFrancisco2015: source({
    title: "Francisco el Hombre, juglar y leyenda (reseña), Boletín Vigías del Patrimonio Cultural",
    author: "Sebastián Rincón Tristancho, Ministerio de Cultura, Dirección de Patrimonio",
    year: 2015,
    type: "reseña en boletín institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Patrimonio/Boleti%CC%81n%20Vigi%CC%81as%20Marzo.pdf",
    summary:
      "Es la única fuente institucional abierta que reproduce los versos del duelo, y de ella salen las coplas que la ficha cuenta: «Yo vengo de tierra lejana / Yo soy un diablo desatao, / Prepárate, Francisco el hombre, / Que te tengo acorralao», y la respuesta «Muy diablo puedes sé, / no me tienes acorralao. / Por ser diablo desatao, / te canto el credo al revé». Da además la versión en prosa, con el acordeonista fantasmagórico de cinco metros sobre un caballo descomunal, y enumera los tres comparativos que el propio libro reseñado propone y que «Similitudes» recoge: Florentino y el Diablo en Venezuela, Finn en la mitología celta y Miseria en «Don Segundo Sombra».",
    limitation:
      "La propia reseña declara que las fuentes del libro que reseña van «desde poemas, canciones, artículos de internet, hasta la novela Cien años de Soledad». Es divulgación patrimonial, no recolección: detrás de esas coplas no hay narrador, ni vereda, ni fecha de recolección. El boletín no lleva año impreso en portada y su plana de créditos lo sitúa entre 2014 y 2016.",
  }),
  bauteMitologia2020: source({
    title: "Mitología vallenata, Colección Roble Amarillo, tomo 22",
    author: "Alonso Sánchez Baute",
    year: 2020,
    type: "libro de crónicas de autor",
    url: "https://manglar.uninorte.edu.co/bitstream/handle/10584/9352/9789587892321%20eMitologia%20vallenata.pdf?isAllowed=&sequence=1",
    summary:
      "Contiene la afirmación más fuerte de toda la controversia, en el capítulo «Transculturación», páginas 93 a 95: que Brugés Carmona «fue también el primero en contar la leyenda de un hombre que le vende su alma al diablo con tal de convertirse en el mejor acordeonero», que «este músico no se llamaba Francisco el Hombre, sino Pedro Nolasco Padilla» y que «antes de Cien años de soledad, nunca aparece reseñado en texto alguno el nombre de Francisco el Hombre». Lo dice declarándose a la vez creyente del mito. Es también la fuente del paralelo con Robert Johnson y «Me and the Devil Blues» que «Similitudes» desarrolla, y de la observación de que el enfrentamiento fáustico es común en las leyendas de ascendencia afro.",
    limitation:
      "Es un ensayo personal de un escritor, no una investigación con aparato, y el módulo lo describía mal como investigación académica sobre repertorio vallenato. Su fecha para la primera crónica de Brugés —1934— no coincide con la del ensayo arbitrado de Calderón, que la fecha en 1940 y da sección y página. Esa discrepancia se declara y no se funde.",
  }),
  wberthFrancisco2022: source({
    title: "Francisco El Hombre: un juglar más allá de la leyenda",
    author: "Emelda Wberth, Radio Nacional de Colombia",
    year: 2022,
    type: "reportaje de radio pública",
    url: "https://www.radionacional.co/actualidad/personajes/francisco-el-hombre-reconocido-juglar-en-la-musica-colombiana",
    summary:
      "Es la fuente abierta que da la línea guajira con nombre y fechas, que es la que discute la tesis de Sánchez Baute. Nombre completo Francisco Antonio Moscote Guerra, nacido en 1850 en la zona rural de Galán, hoy corregimiento de Riohacha, hijo de José del Carmen Moscote y Ana Julia Guerra, desplazados de un caserío llamado Ciudad Moreno, y muerto el 19 de noviembre de 1953 en Machobayo, donde quedan descendientes. Nombra como investigador principal al abogado y escritor Ángel Acosta Medina, autor de más de seis títulos sobre el personaje, entre ellos «El verdadero Francisco el Hombre» y «Francisco, el Hombre histórico».",
    limitation:
      "Es prensa cultural reciente y no cita documento civil ni parroquial para ninguna de las dos fechas. Si Moscote murió en 1953 a los ciento tres años, eso necesita un registro y no una nota: por eso la ficha no publica esas fechas como hechos.",
  }),
  colombiaResolucion2014: source({
    title: "Resolución 1321 de 2014 del Ministerio de Cultura, Diario Oficial n.º 49.168",
    author: "Ministerio de Cultura de Colombia",
    year: 2014,
    type: "acto administrativo",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/resolucion_mincultura_1321_2014.htm",
    summary:
      "Fija la fecha y el estatuto legal del expediente en que este relato quedó inscrito como patrimonio: por ella se incluye «la música vallenata tradicional del Caribe colombiano» en la Lista Representativa de Patrimonio Cultural Inmaterial del ámbito nacional y se aprueba su Plan Especial de Salvaguardia, el 16 de mayo de 2014. Sirve para citar con precisión el plan que fue a inspeccionar la tumba de Macho Bayo en 2011.",
    limitation:
      "Es el acto administrativo, no el expediente: no dice nada del relato, no menciona a Francisco el Hombre y no sustituye al Plan Especial de Salvaguardia.",
  }),
  perezFrancisco2014: source({
    title: "Francisco el Hombre, juglar y leyenda",
    author: "Alexander Casalins Pérez, César Augusto Sánchez Contreras y Berena Vergara Serpa, Ministerio de Cultura",
    year: 2014,
    type: "libro de divulgación patrimonial (página institucional)",
    url: "https://mng.mincultura.gov.co/areas/patrimonio/investigacion-y-documentacion/politicas-planes-y-programas/programa-nacional-de-vigias-del-patrimonio/noticias/Paginas/Francisco-el-Hombre,-Juglar-y-leyenda.aspx",
    summary:
      "Es el libro del que salen las dos partes que circulan juntas en esta ficha: la prosa del encuentro y las coplas del duelo. La página institucional del Programa Nacional de Vigías del Patrimonio confirma autores, ministerio, mes y año de publicación y el ISBN, y sitúa la obra dentro de un programa de investigación patrimonial ciudadana, que es el marco en que hay que leer su autoridad.",
    limitation:
      "La página se abre, pero el PDF del libro está caído: el enlace «Descargue el libro aquí» devuelve 404 en los cuatro dominios del Ministerio que se probaron. Hoy sólo es citable por su ficha y por la reseña del Boletín Vigías, y no debe usarse como fuente del relato mientras no aparezca el texto.",
  }),
  julioFrancisco2006: source({
    title: "Francisco el hombre: leyenda y realidad",
    author: "Lázaro Diago Julio, Fondo Mixto para la Promoción de las Artes y la Cultura de La Guajira",
    year: 2006,
    type: "libro de investigación regional (ficha de catálogo)",
    url: "https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=5831",
    summary:
      "Representa, dentro de la controversia que «Versiones» expone, la posición contraria a la de Sánchez Baute: la ficha declara la tesis del libro, que «Diago resuelve todos los interrogantes y demuestra con creces que su leyenda la originó Francisco Moscote, un acordeonero y juglar guajiro cuya prolífica descendencia diseminada entre La Guajira y el resto de Región Caribe es el mejor testimonio de su realidad». Es la línea guajira en su formulación más rotunda, y la que la ficha cita como posición y no como prueba.",
    limitation:
      "No se leyó el libro: el visor de El Libro Total responde pero carga por JavaScript y no entregó texto a la extracción. La ficha no da año ni número de páginas, y el año que aquí consta es aproximado. Hay que citarlo como posición en la controversia, no como prueba de nada.",
  }),
  nietofortaleza2019: source({
    title: "La fortaleza de los llanos de Bonda. Conquista de una frontera del reino español en el siglo XVI",
    author: "Eduardo Mazuera Nieto",
    year: 2019,
    type: "artículo arbitrado de historia colonial",
    url: "https://www.redalyc.org/journal/4556/455658392003/html/",
    summary:
      "Es lo único que se localizó en abierto que documenta el escenario de esta pieza sin pasar por Otero. Enumera las provincias indígenas que los españoles distinguían en la Sierra Nevada —«Osariona, Taironaca, Orejones, Carbón, Betoma, Pocigüeica, Aruacos, y los fronterizos a Santa Marta»— y sitúa Pocigueica y Betoma a seis leguas al sur de Santa Marta, descritas por el gobernador Luis de Rojas como «la mas rrica tierra de naturales y minas». Explica además que esa clasificación en provincias respondía a homogeneidad cultural y dialectal y no a cacicazgos políticos unificados, y describe la fortaleza de Bonda como base de las entradas contra los poblados vecinos: la mecánica militar exacta que el relato cuenta en clave de chiste.",
    limitation:
      "Es historia del siglo XVI y de la frontera de Bonda: no menciona la gobernación de Francisco Marmolejo, ni la entrada de 1590, ni la Nueva Salamanca de la Ramada, ni Zaraguato ni Duichirrea. Corrobora el mapa, no el episodio.",
  }),
  flacoEpistularum14: source({
    title: "Epistularum liber secundus, epístola II",
    author: "Quinto Horacio Flaco",
    year: -14,
    type: "texto clásico latino en edición digital",
    url: "https://www.thelatinlibrary.com/horace/epist2.shtml",
    summary:
      "Contiene el verso del que sale el título y que el relato no traduce: en la línea 102 de la segunda epístola del libro segundo se lee «Multa fero ut placem genus inritabile uatum», soporto mucho para aplacar a la raza irritable de los poetas. El contexto importa para leer la pieza: Horacio está describiendo a dos literatos que se elogian mutuamente y se pican en cuanto alguien les discute el verso —«Discedo Alcaeus puncto illius; ille meo quis?»—, que es exactamente lo que hacen aquí el capitán Flórez y don Pedro de Cárcamo en mitad de una campaña militar en la Sierra Nevada.",
    limitation:
      "Es el texto latino sin traducción, sin aparato crítico y sin comentario. Esta edición imprime «inritabile», y la forma que Otero usa en el título, «irritabile», es la de otras ediciones: la variante ortográfica no está explicada aquí. No tiene ninguna relación con América ni con el relato.",
  }),
  julianperla1787: source({
    title: "La perla de la América, provincia de Santa Marta, reconocida, observada y expuesta en discursos históricos",
    author: "Antonio Julián",
    year: 1787,
    type: "crónica colonial jesuita",
    url: "https://archive.org/details/laperladelaameri00juli",
    summary:
      "Es una de las dos autoridades que Otero llama en su apoyo dentro de la pieza, y de la que toma el apodo con que nombra a la provincia: la perla de la América. Permite comprobar de dónde viene la escenografía —el elogio de la riqueza y de la fertilidad de la gobernación de Santa Marta, escrito por un jesuita que misionó allí— y medir su distancia con el episodio: Julián escribe casi doscientos años después de la fecha interna del relato y con un propósito de promoción económica del territorio.",
    limitation:
      "Otero lo cita sin dar página y sólo para el paisaje y el apodo: no respalda ni la entrada de 1590 ni el episodio de las coplas. Es además una crónica de 1787 escrita desde la Compañía de Jesús y desde el interés de la Corona por explotar la provincia. El ejemplar digitalizado se verificó como accesible; no se leyó completo en esta pasada.",
  }),
  simonNoticias1627: source({
    title: "Noticias historiales de las conquistas de Tierra Firme en las Indias occidentales",
    author: "Fray Pedro Simón",
    year: 1627,
    type: "crónica de conquista",
    url: "https://archive.org/details/tierrafirmeindias03simbrich",
    summary:
      "Es la otra autoridad que Otero invoca dentro de la pieza, y sólo para el paisaje: de aquí saca la descripción de los picos de la Sierra Nevada que «se meten barrenando hasta bien dentro de la media región del aire». Sirve para comprobar que el decorado del relato viene de la crónica del siglo XVII y no de la observación del autor, y para situar la clase de fuente con que Otero trabajaba cuando decidía no dar página.",
    limitation:
      "Otero lo cita sin volumen ni página y sólo para la orografía: no respalda la entrada contra la provincia de El Carbón ni a ninguno de los personajes. Se verificó que el ejemplar digitalizado responde y es consultable; no se localizó en él el pasaje concreto en esta pasada, de modo que la atribución queda como la declara el propio Otero.",
  }),
  olivellaTradicion19722: source({
    title: "Tradición oral y conducta en Córdoba, sección «copla y décima», pp. 188-231",
    author: "Manuel Zapata Olivella",
    year: 1972,
    type: "estudio antropológico con corpus de literatura oral transcrito",
    url: "https://zapataolivella.univalle.edu.co/obras/tradicion-oral-y-conducta-en-cordoba/",
    summary:
      "Sostiene el tercer paralelo de «Similitudes», el de hechura: el duelo en coplas por turnos, donde cada réplica toma el metro y la rima de la anterior para desmentirla. La sección de copla y décima de este corpus, recogido con grabadora en el Medio y Bajo Sinú entre 1969 y 1970, documenta esa mecánica de contestación viva en el Caribe colombiano, y permite decir que lo que en la pieza de Otero parece un chiste de letrados es una forma de composición popular con su propia gramática: turno, molde métrico heredado y remate que derriba lo anterior. Aquí funciona en tres turnos, y el tercero echa abajo los dos primeros.",
    limitation:
      "Es un corpus cordobés del siglo XX y la pieza de Otero es una escena samaria fechada en 1590: el parentesco es de forma, no de filiación, y no hay ninguna cadena documental entre los dos. El libro no menciona coplas de soldados ni duelos de capitanes, y no nombra a ningún narrador de las piezas que transcribe.",
  }),
  edWhat2010: source({
    title: "What Should I Have Said (or Done)? Folktales of Aarne-Thompson-Uther Type 1696",
    author: "D. L. Ashliman (ed.)",
    year: 2010,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type1696.html",
    summary:
      "Es la fila europea a la que el propio Zapata adscribe a este personaje, con sus textos delante. Reúne diez versiones del ciclo del tonto de nombre que hace literalmente lo que se le dijo o copia mal lo que vio, y varias de ellas son exactamente esta escena: «Jock and His Mother», de Escocia, es el hijo tonto y su madre; «Silly Matt», de Noruega, «Lazy Jack» y «Stupid's Mistaken Cries», de Inglaterra, e «I'll Be Wiser the Next Time», de Irlanda, repiten el mecanismo de la instrucción bien cumplida en el momento equivocado. Puesto al lado, el cuento cordobés deja ver su vuelta de tuerca: aquí el tonto no falla en la orden —pila el maíz y hace la mazamorra sin error— sino en la lectura de un cuerpo, y el resultado no es una torpeza cómica sino un cadáver y un cura ensartado.",
    limitation:
      "No incluye ninguna versión hispánica ni hispanoamericana, y en ninguna de las diez muere nadie: el ciclo europeo del tonto es cómico y reparable, y éste no lo es. La página tampoco reproduce el texto de los tipos vecinos a los que remite. Sostiene la línea peninsular que Zapata declara en la página 237, no una filiación probada de este argumento. Revisada el 13 de agosto de 2010.",
  }),
  edOpen2022: source({
    title: "Open Sesame! Folktales of Aarne-Thompson-Uther Type 676",
    author: "D. L. Ashliman (ed.)",
    year: 2022,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type0676.html",
    summary:
      "Es el tipo al que pertenece la mitad final del cuento y la página que documenta que llegó al Caribe. Reúne nueve versiones del relato en que una fórmula hablada abre el escondite de unos ladrones y un testigo oculto se queda con el botín: además de Alí Babá, trae «The Robbers Robbed» de Cachemira, dos griegas y eslavas, tres alemanas —entre ellas «Simeli Mountain» de los Grimm y «Open Simson!» de Ernst Meier— y, sobre todo, dos americanas: «Ali Baba and Kissem», recogida en Jamaica por Martha Warren Beckwith, y «How Black Snake Caught the Wolf», de Joel Chandler Harris. Que el tipo tenga rama jamaiquina y afroamericana es lo que hace verosímil, sin necesidad de suponerlo, que el mismo engranaje apareciera en un pozo entre las raíces de un árbol del Sinú con la contraseña cambiada por «¡Ábrete perejil!». Compilada por D. L. Ashliman y revisada el 27 de enero de 2022.",
    limitation:
      "No incluye ninguna versión colombiana ni hispanoamericana continental: da el tipo y dos eslabones caribeños, no la cadena que llega a Córdoba. En ninguna de sus nueve versiones el que se esconde arriba es un tonto, ni el botín se gana ensuciando a los ladrones desde el árbol: esa parte del cuento cordobés pertenece a otra familia.",
  }),
  ashlimanBaba1891: source({
    title: "Ali Baba and the Forty Thieves from the 1001 Nights",
    author: "Edición de D. L. Ashliman, sobre las traducciones de Andrew Lang y Richard F. Burton",
    year: 1891,
    type: "cuento editado con texto completo y dos traducciones cotejadas",
    url: "https://sites.pitt.edu/~dash/alibaba.html",
    summary:
      "Es el paralelo que la ficha nombra, y aquí está con su texto entero y sus dos traducciones históricas: la de Andrew Lang en The Blue Fairy Book de 1891 y la de Richard F. Burton en las Supplemental Nights de 1886, donde la fórmula se traduce «Open, O Simsim!». Puesto al lado del cuento cordobés deja ver qué se conservó y qué se cambió: se conserva el engranaje completo —los ladrones que guardan el botín, el testigo escondido arriba, la contraseña de dos palabras, el saqueo posterior— y cambian la cueva por un pozo entre las raíces de un árbol y el sésamo por el perejil, que es lo que hay en una huerta del Sinú. La página clasifica además el episodio del descubrimiento como tipo 676 y los siguientes como 950 y 954.",
    limitation:
      "Es el texto de Las mil y una noches en ediciones inglesas del siglo XIX, no una versión oral recogida en campo, y la propia crítica discute que el cuento sea originalmente árabe. No hay ninguna prueba documental de que el narrador cordobés conociera ninguna de estas versiones: el parecido es de fórmula y de engranaje, no una filiación probada, y así queda anotado en las dudas de la ficha.",
  }),
  miramonreconquista19642: source({
    title: "La reconquista de Cartagena: Estampas de su martirio (Boletín Cultural y Bibliográfico, 7(10), pp. 1801-1803)",
    author: "Alberto Miramón",
    year: 1964,
    type: "ensayo histórico de divulgación en revista institucional",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/download/5309/5561/10865",
    summary:
      "Da el hambre que el relato usa como instrumento de tortura contra el convento, y la da fuera del convento: Morillo fondea en los primeros días de agosto de 1815 con 10.642 veteranos peninsulares, rechaza los términos de rendición y cierra el bloqueo por tierra y mar con el propósito declarado de rendir la ciudad por inanición. El inventario de lo que se comió —carne y harina podridas, bacalao rancio, caballo y burro en salmuera, perros, ratas, el cuero de las correas y de los taburetes, sobre testimonio de Lino Pombo— es lo que vuelve verosímil que a una comunidad religiosa se la doblegara quitándole la comida y el agua. Sin este artículo, el asedio del relato parecería una crueldad inventada para la escena.",
    limitation:
      "Ensayo patriótico de tres páginas escrito en 1964, sin notas ni aparato, y con el OCR del facsímil degradado. No menciona ningún convento sitiado ni ninguna abadesa, de modo que sostiene el marco del hambre y no el episodio: el relato sigue sin corroboración externa.",
  }),
  najeraResena2013: source({
    title: "Reseña de Rodolfo Segovia, «105 días: El sitio de Pablo Morillo a Cartagena de Indias» (Economía & Región, pp. 255-259)",
    author: "Adelaida Sourdis Nájera",
    year: 2013,
    type: "reseña académica de monografía histórica",
    url: "https://revistas.utb.edu.co/economiayregion/article/download/72/54/110",
    summary:
      "Introduce la tercera cifra de la duración del sitio y por eso entra aquí: el título mismo del libro reseñado dice ciento cinco días, frente a los ciento catorce y ciento ocho del estudio demográfico. Sirve además para medir la escala de la catástrofe sobre la que el relato monta su culpa individual —la provincia perdió más de un tercio de su población— y para saber dónde está hoy la investigación de referencia, con orden de batalla del Ejército Expedicionario e índices onomásticos, si alguna vez se quiere buscar en ella a la comunidad sitiada.",
    limitation:
      "Es la reseña y no el estudio: cinco páginas de valoración que no permiten citar un solo dato de archivo. El libro de Segovia sólo existe impreso y la copia del repositorio del Banco de la República está tras CAPTCHA, de modo que lo que aquí se maneja es la descripción de una obra que no se ha podido abrir.",
  }),
  cervantesPlaza20022: source({
    title: "Plaza o Paseo de los Mártires (Ciudades Patrimonio · Cartagena de Indias, «De paseo», n.º 2)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/paseo_martires.htm",
    summary:
      "Documenta el desenlace de la lista que la protagonista entrega: en esta plaza, frente a la Puerta del Reloj, fueron fusilados nueve próceres de la Independencia el 24 de febrero de 1816 por orden de Morillo, y el nombre actual del lugar se fijó al cumplirse un siglo de aquello. Sirve para situar sobre el plano la topografía de la delación —los patriotas denunciados, el paredón, la ciudad que después los conmemora— y confirma que en 1816 la represión tuvo nombres y una fecha, aunque no los que el relato nombra.",
    limitation:
      "Es una ficha turístico-patrimonial sin citas ni bibliografía, que nombra nueve fusilados y no los más de cien delatados del relato, y que no menciona el convento de la Merced ni ninguna fosa bajo el Palacio de Justicia. El mismo conjunto del CVC contiene un error grave de cronología independentista —hace que la ciudad declare su independencia el 11 de noviembre de 1815—, de modo que aquí se usa por el monumento y no por las fechas políticas.",
  }),
  montoyaCuando: source({
    title: "Cuando el tirano mandó: Cartagena 1600",
    author: "Manuel Ignacio Camacho Montoya, Academia Nacional de Medicina de Colombia",
    type: "reseña de divulgación histórico-médica en academia nacional",
    url: "https://anmdecolombia.org.co/cuando-el-tirano-mando-cartagena-1600/",
    summary:
      "Prueba que el nombre del título no es una invención literaria sino un truncamiento. La reseña de este libro sobre la medicina cartagenera del siglo XVII describe a «Blas Benito de Paz Pinto» como un judío portugués, hijo de boticario, perseguido por la Inquisición y convertido al catolicismo, que se refugió en Cartagena, curaba del escorbuto a los esclavos recién desembarcados dándoles proteína animal, verduras y cítricos, y los vendía una vez sanos, con lo que hizo su negocio de tratante; añade que fue traicionado por Diego López, su antiguo amigo, acusado de mantener una sinagoga, y que murió a manos de la Inquisición. Es la única fuente localizada que confirma, fuera del relato, que el personaje existió y que se llamaba como la autora lo escribe ocho veces.",
    limitation:
      "No da fechas exactas, ni dirección de casa, ni cita las fuentes de archivo de las que sale el episodio, y es una reseña de presentación de un libro, no el libro. El retrato que hace del personaje —benefactor interesado y tratante de esclavos— es más duro que el del relato, que lo presenta como víctima; la ficha no funde las dos versiones. La página no lleva fecha visible, de modo que el año de publicación queda sin fijar.",
  }),
  bottcheregodocumentos2023: source({
    title: "El uso de egodocumentos para los estudios de la América colonial: judeoconversos ante la Inquisición en el siglo XVII (Historia Mexicana, vol. LXXIII, n.º 1, pp. 257-292)",
    author: "Nikolaus Böttcher, El Colegio de México",
    year: 2023,
    type: "artículo arbitrado de historia colonial sobre fuentes inquisitoriales",
    url: "https://www.redalyc.org/journal/600/60075325006/html/",
    summary:
      "Es la corroboración académica más firme que hoy tiene el personaje, y viene con su fecha. El artículo, dedicado al uso de los expedientes inquisitoriales como egodocumentos, trata de los judeoconversos portugueses que tejieron redes mercantiles atlánticas como tratantes de esclavos y comerciantes, y nombra a Blas de Paz Pinto como el comerciante rico vinculado a la «gran complicidad de 1636» de Cartagena, la oleada de procesos coordinados que el Santo Oficio desplegó entre Cartagena, Lima y México. Sostiene además que el miedo y las rivalidades personales generaron acusaciones mutuas entre los procesados, y que algunas denuncias tuvieron motivo económico: exactamente la mecánica que el relato dramatiza con la delación por dos reales de limosna.",
    limitation:
      "Su asunto es metodológico —cómo leer los procesos como testimonio de vida— y su terreno principal es México; Paz Pinto aparece como caso citado y no como objeto de estudio, sin proceso reconstruido, sin fechas de detención y sin nada sobre Pedro Claver ni sobre la casa. La fecha de 1636 que sitúa la «gran complicidad» no aparece en el relato, que no da año.",
  }),
  cartagenaanos2012: source({
    title: "Los 90 años de la escritora Judith Porto de González",
    author: "El Universal (Cartagena)",
    year: 2012,
    type: "crónica de prensa local sobre la autora",
    url: "https://www.eluniversal.com.co/cultural/los-90-anos-de-la-escritora-judith-porto-de-gonzalez-92093-NWEU176784",
    summary:
      "Fecha y clasifica esa otra versión: es teatro, y es de 1965. La crónica de los noventa años de la autora ordena su bibliografía en dos columnas y pone «La casa de don Benito», con el año 1965, entre sus obras teatrales, junto a «Pilares vacíos», «El hacedor de hidalgos», «Mesa de juego» y «Los artistas de mamá», mientras deja «Al filo de la leyenda» entre los libros de cuentos. La conseja del barrio, la lectura en libros y viejos papeles, y la escena del auto de prisión pasaron por un escenario antes o después de pasar por esta página, y el dato obliga a decir que de este relato hay al menos dos formas firmadas por la misma mano.",
    limitation:
      "Es una crónica de aniversario en prensa local, sin notas ni fuentes: da el año pero no la editorial, ni el teatro, ni el estreno, ni el argumento, y no dice cuál de las dos versiones es anterior. No se ha localizado el texto de la pieza teatral, de modo que la relación entre ambas queda declarada y no comprobada.",
  }),
  stevensonCartagena2007: source({
    title: "Cartagena de Indias en el siglo XVII",
    author: "Haroldo Calvo Stevenson y Adolfo Meisel Roca (editores), Banco de la República",
    year: 2007,
    type: "actas de simposio de historia urbana",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf",
    summary:
      "Es el volumen que da el marco documental del proceso que el cuento dramatiza. Estas actas de historia urbana reúnen trabajos sobre la Cartagena del siglo XVII —el puerto negrero, la comunidad de comerciantes portugueses, la salud y la mortalidad de las cargazones de esclavos, la vida institucional de la ciudad— y permiten decir, sin apoyarse en el relato, que las causas del Santo Oficio contra portugueses acusados de judaizar, con denuncias de criados y esclavos y confiscación de bienes, son una serie histórica conocida y no un decorado. El mundo del médico judeoportugués que trata con esclavos recién llegados está descrito ahí con aparato de archivo.",
    limitation:
      "Es un volumen colectivo sobre un siglo entero: no contiene un estudio dedicado a Blas Benito de Paz Pinto ni a su casa, y no menciona esta leyenda ni la conseja del barrio. Sus capítulos tratan del comercio y la demografía antes que de los procesos inquisitoriales uno por uno.",
  }),
  cervantesPalacio2015: source({
    title: "Palacio de la Inquisición (Cartagena de Indias · Paseo)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2015,
    type: "ficha monumental en catálogo patrimonial",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/inquisicion.htm",
    summary:
      "Documenta la institución que en el relato se lleva al protagonista en coche y le lee el auto de prisión. La ficha describe el Palacio de la Inquisición de Cartagena, sede del tribunal del Santo Oficio establecido en la ciudad, su fábrica del siglo XVIII y la ventanilla de denuncias de su fachada, y sitúa el aparato judicial que la leyenda pone en marcha con una delación de dos reales. Sirve para que la figura del relapso y el procedimiento de la denuncia no queden como invención de escena.",
    limitation:
      "Es una ficha monumental de unas pocas páginas, sin citas ni bibliografía, centrada en el edificio y no en las causas: no da procesos, ni nombres de penitenciados, ni cronología del tribunal, y no menciona a Paz Pinto. Además el conjunto al que pertenece tiene errores verificados en su sección de historia.",
  }),
  aranaPedro2006: source({
    title: "Pedro Claver y la evangelización en Cartagena: pilar del encuentro entre africanos y el Nuevo Mundo, siglo XVII (Fronteras de la Historia, n.º 11)",
    author: "Paola Vargas Arana, Instituto Colombiano de Antropología e Historia",
    year: 2006,
    type: "artículo arbitrado de historia colonial",
    url: "https://www.redalyc.org/pdf/833/83301109.pdf",
    summary:
      "Sostiene el papel de avalista que el relato le da al jesuita. El artículo estudia la actuación de Pedro Claver en la Cartagena negrera del siglo XVII, su trabajo con los africanos recién desembarcados y la red de intermediarios con que operaba, sobre documentación de archivo. En la leyenda es él quien consigue que al preso lo lleven en coche y quien entrega la carta de libertad: el cuento lo usa como la hagiografía cartagenera lo ha usado siempre, y el artículo permite ver dónde termina esa tradición y dónde empieza la composición de la autora, sobre todo en lo que ella deja pasar sin corregir —que los liberados reciben el papel con pánico y piden seguir siendo del amo—.",
    limitation:
      "No documenta ninguna amistad entre Claver y Paz Pinto, que es justamente lo que la autora dice haber encontrado en sus lecturas. Su objeto es la evangelización y la figura del santo, no los procesos del Santo Oficio contra judaizantes.",
  }),
  rappaportIntroduccion2014: source({
    title: "Introducción: Orlando Fals Borda y la Historia doble de la Costa (Tabula Rasa, n.º 23)",
    author: "Joanne Rappaport",
    year: 2014,
    type: "artículo académico introductorio a un dossier de antropología e historia",
    url: "https://www.revistatabularasa.org/numero23/introduccion-orlando-fals-borda-y-la-historia-doble-de-la-costa/",
    summary:
      "Documenta el clima de campo que permitió imprimir esta página sin recortarla. Reconstruye cómo durante los años setenta Fals Borda trabajó con la ANUC en Sucre y Córdoba y con colectivos locales de investigación, «el más conocido de los cuales fue la Fundación del Caribe en Montería», dentro de la Rosca de Investigación y Acción Social, recuperando con los propios campesinos la memoria de sus luchas mediante historietas, manuales y crónicas. En una década en que dos equipos distintos andaban por el mismo departamento tomándole la palabra al campesinado, una burla cruda contra un cura llegó a la imprenta como material de estudio y no como escándalo.",
    limitation:
      "Es una introducción a un dossier, no una investigación de primera mano, y trata de Fals Borda y no de Zapata Olivella: no los relaciona, no menciona este corpus y no se ocupa ni de tradición oral ni de la Iglesia.",
  }),
  levyTierra2024: source({
    title: "Tierra, conflicto y violencia en la reforma agraria: la zona bananera del Magdalena, Colombia (1961-1977) (Historia Agraria, n.º 92)",
    author: "Benjamin Lévy",
    year: 2024,
    type: "artículo académico de historia agraria",
    url: "https://historiaagraria.com/ARTICULO/92/RHA92_levy.htm",
    summary:
      "Describe la institución que encargó y pagó el libro donde esta confesión quedó impresa. Reconstruye cómo operó el Incora en el Caribe colombiano entre 1961 y 1977 —compras de tierra, adjudicación por familias, empresas comunitarias fracasadas, movilización de la ANUC en la que las mujeres tuvieron un papel esencial y hasta ahora poco reconocido, y el giro de la redistribución a la modernización agrícola hacia mediados de los setenta—. Que un instituto de reforma agraria financiara una encuesta de tradición oral y publicara sin censura un chiste sobre un cura y una muchacha dice mucho de qué se consideraba entonces conocimiento útil sobre el campesinado.",
    limitation:
      "Su terreno es la zona bananera del Magdalena, no Córdoba ni el Sinú, y no menciona ni la División de Desarrollo Social Campesino ni las publicaciones del instituto. Es historia agraria: no trata de religión, de tradición oral ni de este relato.",
  }),
  hernandezRafael2019: source({
    title: "Rafael Reyes, el presidente que abandonó el poder",
    author: "Javier Hernández, Señal Memoria · RTVC",
    year: 2019,
    type: "pieza documental de archivo audiovisual público con texto de contexto",
    url: "https://www.senalmemoria.co/piezas/rafael-reyes-abandono-el-poder",
    summary:
      "Fecha el único ancla histórica del relato. Documenta que Reyes abandonó la presidencia el 9 de junio de 1909 y que, para evitar la humillación de un juicio político en el Congreso, tomó en Santa Marta un barco que lo llevó al exilio en Europa, del que no volvería hasta febrero de 1921. Ese es el régimen que el texto da por caído en su escena final, y lo que permite decir que la llegada de desterrados políticos al puerto de Cartagena —y con ella el reencuentro que destruye al protagonista— sólo puede ocurrir a partir del segundo semestre de 1909. Se apoya, además, en la biografía de Eduardo Lemaitre.",
    limitation:
      "Es una ficha de archivo audiovisual con texto de acompañamiento, no un estudio: no detalla los destierros ni los confinamientos de opositores que el relato supone, y no menciona Cartagena como puerto de regreso de exiliados. Documenta la salida del dictador y no la vuelta de sus enemigos, que es lo que el cuento necesita.",
  }),
  diazuxoricidio1960: source({
    title: "El uxoricidio por adulterio en el Código Penal colombiano (Estudios de Derecho, Universidad de Antioquia)",
    author: "Carlos Gaviria Díaz",
    year: 1960,
    type: "artículo de doctrina penal en revista universitaria",
    url: "https://revistas.udea.edu.co/index.php/red/article/download/333046/20789026/147611",
    summary:
      "Pone por escrito la figura jurídica con la que se defiende el asesino de esta historia. Expone el uxoricidio por adulterio tal como lo recogía el Código Penal colombiano vigente cuando Martínez Fajardo escribía: una rebaja de pena para el homicidio cometido por el marido sobre la mujer sorprendida en trato ilícito, y también para el cometido en estado de ira o intenso dolor causado por esa ofensa aunque no la sorprendiera. Es lo que permite afirmar que la palabra «uxoricida», que el texto usa con naturalidad, era un término técnico con consecuencias en la condena, y no un adorno del narrador.",
    limitation:
      "Es doctrina penal escrita en 1960 sobre el código de 1936, posterior tanto al crimen del relato como al libro de 1948, y no cubre la legislación vigente a comienzos del siglo XX. El PDF es un facsímil con OCR degradado en el que la sección aparece entre otras materias del mismo fascículo, lo que obliga a citar con cuidado la paginación.",
  }),
  ochoaCodigo2004: source({
    title: "El Código Penal Colombiano de 1890 (Estudios Socio-Jurídicos, vol. 6, n.º 2)",
    author: "Francisco Bernate Ochoa, Universidad del Rosario",
    year: 2004,
    type: "artículo arbitrado de historia del derecho penal",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-05792004000200017",
    summary:
      "Cubre el hueco que deja el artículo anterior, porque es el código que estaba en vigor cuando ocurre el crimen. Reconstruye el Código Penal de 1890 y su filosofía —de raíz ilustrada y de Escuela Clásica italiana—, y sirve para saber en qué marco legal se juzgó a un hombre que mata a su mujer en la Cartagena de la primera década del siglo XX, es decir, casi medio siglo antes de la figura que el autor nombra con el término «uxoricida». Es la fuente que impide dar por hecho que el derecho del relato es el mismo que el de su época de escritura.",
    limitation:
      "Es una exposición general del código y de su contexto doctrinal, no un estudio del homicidio conyugal ni de la atenuante por honor, y no ofrece jurisprudencia ni casos. No menciona Cartagena ni ningún proceso concreto, de modo que sitúa el marco y no resuelve qué habría pasado con este acusado.",
  }),
  hozCuentos20253: source({
    title: "Cuentos de hadas campesinos de Colombia: topologías literarias de Cupido y Psique (Estudios de Literatura Colombiana)",
    author: "Adrián Farid Freja de la Hoz, Universidad de Antioquia",
    year: 2025,
    type: "artículo académico de literatura oral comparada",
    url: "https://revistas.udea.edu.co/index.php/elc/article/view/358114",
    summary:
      "Pone nombre y catálogo al parentesco que «similitudes» describe en tercer lugar. El artículo estudia las topologías literarias de Cupido y Psique en el cuento de hadas campesino colombiano, es decir la familia de relatos en que la pareja se forma a pesar de una fealdad o una monstruosidad atribuida al pretendiente, y muestra que esos esquemas europeos circulan reelaborados en la narrativa oral del país. Aquí el pretendiente al que la muchacha huye está descrito por terceros como viruelento, giboso y cruel y resulta ser un caballero al que las damas del palacio celebran: el desmentido del monstruo funciona con el mismo mecanismo que el del fantasma.",
    limitation:
      "Trabaja sobre corpus campesino y no urbano, no registra ninguna versión cartagenera ni menciona esta pieza ni a su autora, y su objeto es el cuento maravilloso, no la leyenda de tesoro. Se leyó la ficha del artículo con su resumen y sus metadatos, no el texto íntegro.",
  }),
  edCastles2022: source({
    title: "Air Castles: Folktales of Aarne-Thompson-Uther Type 1430",
    author: "D. L. Ashliman (ed.)",
    year: 2022,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type1430.html",
    summary:
      "Reúne el esquema de manos ocupadas con el que este chiste se cruza: alguien lleva algo frágil —una olla de gachas, un cántaro de leche, un tarro de miel y aceite, una cesta de huevos—, se distrae con lo que pasa al lado y el objeto paga la distracción. Entre sus veinticuatro versiones están la lechera de Esopo, la anciana que lleva leche al mercado en un vaso de barro de Jacques de Vitry, «Lo que sucedió a una mujer que se llamaba doña Truhana» del infante don Juan Manuel —la rama castellana, que es la que importa aquí— y «El huevo» de Jens Kamp. El paralelo permite ver qué hace de original la pieza cordobesa: allí la distracción es un ensueño de riqueza y aquí es un apareamiento mirado de frente, y la vieja no tropieza sino que aplaude. El cruce de los dos esquemas es lo que produce la gracia.",
    limitation:
      "El tipo 1430 no es el de este chiste: en todas sus versiones lo que rompe el recipiente es el gesto de un castillo en el aire, no el entusiasmo por una escena obscena, y ninguna tiene contenido sexual. No incluye ninguna versión latinoamericana ni colombiana. Sirve para nombrar el esquema con el que el cuento juega, no para filiarlo. Revisado el 16 de diciembre de 2022.",
  }),
  garciaapostol2020: source({
    title: "El apóstol de los negros, Pedro Claver, y sus intérpretes",
    author: "Antonio Bueno García",
    year: 2020,
    type: "capítulo académico sobre fuentes documentales jesuitas",
    url: "https://cvc.cervantes.es/lengua/escritor_misionero/vol_02/14_bueno.pdf",
    summary:
      "Trabaja sobre el «Proceso de beatificación y canonización de san Pedro Claver», redactado en 1696 y traducido del latín y del italiano por Tulio Aristizábal y Anna María Splendiani, que es el corpus de testimonios de primera mano sobre el jesuita que esta leyenda pone a resucitar a una niña. Documenta cómo trabajaba Claver en el puerto —bautizaba a los recién llegados en cualquier parte y de inmediato, con intérpretes de su propia elección y con gestos codificados: el abrazo, la bienvenida, la señal de la cruz, el agua del bautismo, el regalo—, que es exactamente la escena que el relato convierte en milagro. Sirve para medir qué de la leyenda es práctica documentada y qué es invención piadosa.",
    limitation:
      "Es un estudio de historia de la traducción y de la mediación lingüística, no una hagiografía ni una historia de los milagros. No menciona la clavellina, ni ninguna flor, ni ninguna resurrección, y no cita a Otero D'Costa. Cita el proceso de 1696 en su edición moderna, que no se consultó directamente.",
  }),
  newsonCargazones2007: source({
    title: "Cargazones de negros en Cartagena de Indias en el siglo XVII: nutrición, salud y mortalidad",
    author: "Linda A. Newson y Susie Minchin, en Haroldo Calvo Stevenson y Adolfo Meisel Roca (editores), «Cartagena de Indias en el siglo XVII»",
    year: 2007,
    type: "capítulo de historia económica y social en volumen colectivo",
    url: "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_cartagena_siglo_XVII.pdf#page=210",
    summary:
      "Da el suelo documental de la escena de la compra con que arranca el relato. Establece que entre 1595 y 1640 los portugueses introdujeron entre 250.000 y 300.000 personas esclavizadas y que alrededor de la mitad entró por Cartagena, con unas 2.000 a 3.000 llegadas al año, de las que la mitad seguía viaje hacia Lima. Explica que las principales fuentes sobre lo que les pasaba al desembarcar son precisamente las narraciones jesuitas de Alonso de Sandoval y Pedro Claver, que es el marco en que la leyenda sitúa a Yariva y a su comprador.",
    limitation:
      "Es historia cuantitativa de la trata y de las condiciones sanitarias de la travesía. No trata de Claver como taumaturgo, no menciona la casta «mocaranga» ni el precio de ciento veinte pesos, y no conoce este relato.",
  }),
  campoLeyenda2018: source({
    title: "Leyenda",
    author: "Mercedes Zavala Gómez del Campo, Enciclopedia de la Literatura en México (Fundación para las Letras Mexicanas)",
    year: 2018,
    type: "entrada enciclopédica de teoría de géneros folclóricos",
    url: "http://www.elem.mx/genero/datos/20",
    summary:
      "Da el nombre técnico de lo que esta pieza es y que «Similitudes» señala: una leyenda etiológica, de las que existen para explicar por qué una cosa del mundo es como es. Describe el subtipo que explica «el origen de la fisonomía de algunos animales» y la formación de accidentes naturales, y señala los tres rasgos que definen el género —el valor de verdad, la ubicación en un tiempo y un lugar determinados, y la sencillez narrativa—, que son los tres que aquí sostienen el remate: la prueba no está en el cuerpo de la niña sino en la flor que no huele.",
    limitation:
      "Entrada de una enciclopedia mexicana sobre literatura mexicana. Su casuística es de otro país y no incluye ninguna leyenda colombiana ni ninguna de flores nacidas de un bautismo.",
  }),
  aranaPedro20062: source({
    title: "Pedro Claver y la evangelización en Cartagena: pilar del encuentro entre africanos y el Nuevo Mundo, siglo XVII, Fronteras de la Historia n.º 11",
    author: "Paola Vargas Arana, Instituto Colombiano de Antropología e Historia",
    year: 2006,
    type: "artículo arbitrado de historia colonial",
    url: "https://www.redalyc.org/pdf/833/83301109.pdf",
    summary:
      "Es la fuente que explica de qué cantera sale una leyenda como ésta. Documenta que el expediente sobre Claver empezó a redactarse en 1654, el año de su muerte, y que se organizó alrededor de «los milagros, los episodios heroicos y los hechos sobrenaturales»: la resurrección de una niña es exactamente el tipo de escena que ese archivo estaba hecho para recoger. Y describe la práctica que el relato convierte en prodigio: al subir a los navíos, Claver escogía a los más enfermos, les preguntaba por medio de los intérpretes si ya estaban bautizados y, cuando no podían responder porque estaban muy graves, los bautizaba «sub conditione». La escena de la muchacha que no contesta y a la que el jesuita bautiza de todos modos no es una invención del cuento: es el procedimiento ordinario del personaje.",
    limitation:
      "Es historia de la evangelización y de la trata, no de la santidad: la autora distingue expresamente su trabajo de las «biografías e historias fantásticas sobre milagros». No menciona la clavellina, ni a Yariva, ni la casta «mocaranga», ni a Otero D'Costa, y trabaja el periodo 1620-1654 con documentación de archivo que no incluye este relato.",
  }),
  ontiveroscompadrazgo2010: source({
    title: "El compadrazgo desde la perspectiva antropológica",
    author: "Martha Marivel Mendoza Ontiveros",
    year: 2010,
    type: "artículo académico de revisión antropológica",
    url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0188-70172010000200011",
    summary:
      "Documenta por qué el tratamiento de compadre organiza la escena: no son tres vecinos cualesquiera sino tres hombres ligados por una institución que crea obligación y jerarquía, y por eso a Matías se le acepta como árbitro sin que nadie lo nombre juez. Sin esto, el desenlace parece una ocurrencia y no un fallo.",
    limitation:
      "Revisión de bibliografía sobre México y Mesoamérica; no trata el Caribe colombiano ni menciona este relato.",
  }),
  ashlimanEntrapped2001: source({
    title: "Entrapped Suitors: Folktales of Aarne-Thompson-Uther Type 1730",
    author: "D. L. Ashliman, University of Pittsburgh",
    year: 2001,
    type: "antología comentada de un tipo folclórico",
    url: "https://sites.pitt.edu/~dash/type1730.html",
    summary:
      "Reúne los cuentos en que una discusión de palabras se zanja con una humillación corporal irrespondible, que es el procedimiento exacto de esta pieza. Sirve para decir que el remate pertenece a una familia catalogada y no es una salida de tono del narrador cordobés.",
    limitation:
      "Las versiones reunidas son europeas y el pulso es siempre de seducción, no de derecho; el paralelo es de procedimiento, no de argumento.",
  }),
  levyTierra20242: source({
    title: "Tierra, conflicto y violencia en la reforma agraria: la zona del Sinú",
    author: "Benjamin Lévy",
    year: 2024,
    type: "artículo académico de historia agraria",
    url: "https://historiaagraria.com/ARTICULO/92/RHA92_levy.htm",
    summary:
      "Documenta que el libro se hizo como estudio para la división de desarrollo social del Incora, en plena reforma agraria del Sinú. Esa circunstancia explica qué hacía un cuento sobre lo justo y lo legal en un informe institucional sobre conducta campesina.",
    limitation:
      "Estudio de historia agraria; no menciona el volumen de tradición oral ni esta pieza.",
  }),
  ashlimanEntrapped20012: source({
    title: "Entrapped Suitors: Folktales of Aarne-Thompson-Uther Type 1730 (Folktexts)",
    author: "D. L. Ashliman, University of Pittsburgh",
    year: 2001,
    type: "índice tipológico comentado de cuento folclórico, con textos editados",
    url: "https://sites.pitt.edu/~dash/type1730.html",
    summary:
      "Es la única página que clasifica esta trama y la que `similitudes` nombra. Reúne bajo el tipo 1730 dos versiones editadas: «The Lady and Her Five Suitors», de la traducción de Burton de 1885, y una versión europea recompuesta a partir de fuentes varias en la que los atrapados son un obispo, un cura y un sacristán, descubiertos por el marido de la mujer cuando vuelve a casa. Las dos comparten con la pieza cordobesa el mecanismo central —una mujer acumula pretendientes, les da citas escalonadas y convierte el escondite en trampa— y las dos se apartan de ella en lo mismo: ni el marido organiza el negocio ni muere nadie.",
    limitation:
      "La página clasifica pero no define el tipo: no da bibliografía, no discute variantes y no incluye ninguna versión hispanoamericana con la que cotejar la del Sinú. Una de sus dos versiones no es un texto documentado sino una recomposición del propio editor a partir de «fuentes europeas varias», sin indicar cuáles. Revisada por última vez el 25 de marzo de 2001.",
  }),
  traductorBook1885: source({
    title: "The Book of the Thousand Nights and a Night, vol. 6 — «The Lady and her Five Suitors»",
    author: "Richard F. Burton (traductor)",
    year: 1885,
    type: "traducción anotada de fuente literaria clásica (texto íntegro en dominio público)",
    url: "https://www.gutenberg.org/cache/epub/3440/pg3440.txt",
    summary:
      "Es el paralelo que `similitudes` cita por su nombre, y leído entero confirma las diferencias que la ficha afirma. En la versión de Burton la mujer no acumula tres curas sino cinco autoridades de distinto oficio —el jefe de policía, el cadí, el visir, el rey y el carpintero que fabrica el mueble—, los engaña uno a uno para sacar a su amante de la cárcel, y los encierra en un armario de cinco compartimentos del que salen vivos y humillados. Ni todos son clérigos, ni hay marido cómplice, ni muere ninguno: los tres rasgos que hacen distinta a la pieza cordobesa se ven aquí por contraste.",
    limitation:
      "Es una traducción victoriana de 1885, con las libertades y el aparato de notas de Burton, no una edición crítica del original árabe: sirve para leer el relato que Ashliman clasifica, no para afirmar nada sobre la forma antigua del tipo. No tiene ninguna relación documentada con el Caribe colombiano, y no hay eslabón conocido entre este texto y el Sinú.",
  }),
  edCorpse2022: source({
    title: "A Corpse Claims Its Property: Ghost Stories of Aarne-Thompson-Uther Type 366",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2022,
    type: "antología comentada de un tipo folclórico, con textos editados",
    url: "https://sites.pitt.edu/~dash/type0366.html",
    summary:
      "Reúne la familia internacional a la que pertenece exactamente lo que hace el protagonista, y con los dos objetos del cuento. El tipo agrupa relatos en que alguien roba a un muerto una parte de su cuerpo o de su ajuar y el muerto viene a reclamarla, y entre los textos editados figuran «The Golden Leg», «The Golden Arm» y —lo más literal posible para esta ficha— «Give Me My Teeth», junto a versiones de Islandia, Rusia, Polonia, Alemania, Dinamarca, Italia, Inglaterra y dos afroamericanas recogidas por Joel Chandler Harris y Mark Twain. Sirve para medir por dónde se aparta el relato cartagenero del molde: aquí el muerto no vuelve, no hay castigo, y el oro de la dentadura acaba financiando un exvoto bendecido por los herederos.",
    limitation:
      "Es un catálogo tipológico de tradición europea y norteamericana editado en inglés, sin ninguna versión colombiana ni caribeña, y sin relación documental con Cartagena. Aporta la comparación de tipo que `similitudes` necesita y no corrobora ningún hecho del relato.",
  }),
  cervantesPalacio2002: source({
    title: "Palacio de la Inquisición (Ciudades Patrimonio · Cartagena de Indias, «De paseo»)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/inquisicion.htm",
    summary:
      "Recuerda qué clase de ciudad era la que el relato pinta como salón de baile. En la Cartagena de 1810 seguía en pie y en funciones el tribunal del Santo Oficio, con su sede en la plaza de Bolívar, y su presencia es la que explica por qué encerrar a una muchacha en un convento era una decisión con fuerza ejecutiva y no un gesto sentimental: la autoridad eclesiástica era parte del aparato de gobierno. La ficha describe el edificio y la institución, y con ello da el tercer poder de la escena, junto al Cabildo y al gobernador.",
    limitation:
      "Es una ficha monumental de divulgación turística, sin citas ni bibliografía, centrada en el edificio y no en los procedimientos del tribunal. No menciona las clarisas ni ningún convento femenino, ni la crisis política de 1810, y pertenece a un conjunto cuya cronología independentista contiene un error comprobado.",
  }),
  molinaResena1998: source({
    title: "Reseña de «Cincuenta años de inquisición en el Tribunal de Cartagena de Indias 1610-1660», de Splendiani, Sánchez Bohórquez y Luque de Salazar, en «Fronteras de la Historia», n.º 3, pp. 275-281",
    author: "Diana Elizabeth García Molina",
    year: 1998,
    type: "reseña académica de una edición documental en revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/fh/article/view/748/596",
    summary:
      "Contesta, sin saberlo, la pregunta que esta ficha deja abierta: dónde habría que ir a buscar el proceso de Domingo da Cunha y qué hay allí. Describe los cuatro tomos de Splendiani y precisa que los volúmenes segundo y tercero «contienen la transcripción de los Libros 1020 y 1021 de la Sección Inquisición del Archivo Histórico Nacional de Madrid, que reúne las relaciones de causas y los autos de fe de la Inquisición de Cartagena de Indias» —el 1020 cubre 1610-1637, justo el tramo del auto de fe que el relato fecha en 1626—. Añade que los autores hallaron 450 procesos frente a los 340 de José Toribio Medina, y que el cuarto tomo trae un índice de reos con «nombre, sexo, edad, nacionalidad, procedencia, raza, profesión u oficio, delito, año en que se llevó a cabo el proceso y la localización de los respectivos documentos (libro y folio)». Es decir: un zapatero portugués penitenciado en 1626 sería, si existió, un registro localizable, y no lo ha localizado nadie.",
    limitation:
      "Es una reseña de siete páginas, no la obra reseñada: no reproduce ninguna relación de causa, no da nombres de reos y no permite comprobar si da Cunha figura o no en los índices. Discute además el argumento de los autores sobre el carácter «benevolente» del tribunal, que es tesis en debate y no dato.",
  }),
  navarreteJudeoconversos2002: source({
    title: "Judeo-conversos en la Audiencia del Nuevo Reino de Granada. Siglos XVI y XVII, en «Historia Crítica», n.º 23, pp. 73-84",
    author: "María Cristina Navarrete",
    year: 2002,
    type: "artículo arbitrado de historia colonial",
    url: "https://revistas.uniandes.edu.co/index.php/hiscrit/article/view/3917",
    summary:
      "Pone la fecha del cuento dentro de una campaña documentada y le da oficio al reo. Escribe que «en noviembre de 1626, los inquisidores de Cartagena escribían a las autoridades metropolitanas alarmados por la infestación de herejes, especialmente portugueses», cinco meses después del auto de fe que el relato fecha en junio de ese año: el tribunal estaba, ese mismo año, mirando hacia los portugueses. Y desmiente la imagen del converso rico: citando al visitador Rodríguez de San Isidro Manrique, registra que «la mayor parte era gente miserable […] de oficio pulperos, arráez, marineros, zapateros o sastres», que es exactamente la condición de Domingo da Cunha. Explica además el motor económico del tribunal, sostenido por multas y confiscaciones, que da otra lectura a los cien pesos que el zapatero paga camino del destierro.",
    limitation:
      "No menciona a Domingo da Cunha ni ningún auto de fe de 1626, y su asunto son los judaizantes, no los procesados por proposiciones o blasfemia, que es el cargo de esta pieza. Trabaja con bibliografía y con fondos que no detalla caso por caso. El dominio de SciELO donde también se aloja el texto sólo responde por http.",
  }),
  alonsoInquisicion2003: source({
    title: "Inquisición. El Tribunal de Cartagena de Indias, en el «Diccionario de Historia Cultural de la Iglesia en América Latina»",
    author: "Fermina Álvarez Alonso",
    year: 2003,
    type: "entrada de diccionario histórico especializado",
    url: "https://www.dhial.org/diccionario/index.php?title=INQUISICI%C3%93N._El_Tribunal_de_Cartagena_de_Indias",
    summary:
      "Da la estadística contra la que puede pesarse la sentencia del zapatero y dice qué quedó del tribunal. Registra que en el siglo XVII se tramitaron unas 731 causas —un 30 % por superstición y brujería, un 11 % por protestantismo, un 11 % por judaizantes— y que las abjuraciones «de levi», la pena exacta que el cuento le impone a da Cunha, suman el 29 % de las sentencias: no es un castigo excepcional sino el más común del tribunal, junto con el destierro y las multas. Sitúa la gran persecución de portugueses entre 1636 y 1642, la «gran complicidad», diez años después del episodio narrado, lo que obliga a leer 1626 como un proceso por palabras y no por criptojudaísmo. Y explica el hueco documental: los archivos originales del tribunal se perdieron en un incendio y sólo subsisten las copias de relaciones de causas enviadas a Madrid.",
    limitation:
      "Es una entrada de diccionario, sin aparato de notas y sin casos individuales: no nombra a ningún reo ni permite comprobar el auto de fe de junio de 1626, y tampoco da la nómina de inquisidores año por año. Sus porcentajes son agregados de todo el siglo, no de la década de 1620.",
  }),
  campoPleitos2021: source({
    title: "Pleitos civiles ante el tribunal de la Inquisición: privilegios judiciales y poder local en Cartagena de Indias (s. XVII-XVIII), en «Varia Historia», vol. 37, n.º 74, pp. 361-391",
    author: "Ana María Silva Campo",
    year: 2021,
    type: "artículo arbitrado de historia del derecho colonial",
    url: "https://www.redalyc.org/journal/3844/384467202003/html/",
    summary:
      "Es lo que permite decir por qué el expediente que Otero invoca puede no existir ya, sin acusarlo de inventarlo. Inventaria lo que se conserva del tribunal cartagenero —ocho legajos con 146 expedientes de pleitos civiles, en el Archivo Histórico Nacional de Madrid, producidos entre 1610 y 1781— y explica la razón del hueco: «El archivo local de procesos civiles de Cartagena que no llegaron a la instancia superior en Madrid no se conserva». Lo que subió a la Suprema sobrevivió; lo demás, no. Y aporta el ejemplo que cierra el argumento: del comerciante Juan Rodríguez Mesa, reo del tribunal y figura documentada, anota en nota al pie que «el proceso de fe de Juan Rodríguez Mesa no se conserva». Si el sumario de un mercader notable se perdió, el de un zapatero podía perderse sin dejar rastro.",
    limitation:
      "Su objeto son los pleitos civiles y fiscales, no las causas de fe, que es la clase de expediente que el relato cita. No menciona a Domingo da Cunha, ni el auto de fe de 1626, ni los delitos de proposiciones heréticas. Su periodo fuerte es posterior, en torno a la visita de Pedro de Medina Rico de 1647.",
  }),
  vilarCartagena2012: source({
    title: "Cartagena de Indias en el siglo XVII: puerto negrero internacional, en «Redescubriendo el Nuevo Mundo. Estudios americanistas en homenaje a Carmen Gómez», pp. 63-74",
    author: "Enriqueta Vila Vilar",
    year: 2012,
    type: "estudio de historia colonial en volumen de homenaje académico",
    url: "https://digital.csic.es/bitstream/10261/90467/4/Cartagena_Indias_siglo_XVII_Vila.pdf",
    summary:
      "Cuenta cómo llegó a Cartagena un hombre como el del cuento y por qué su acento lo volvía sospechoso. Reconstruye la emigración portuguesa al puerto al calor de los asientos de esclavos y sostiene que «la gran emigración de portugueses judaizantes a Cartagena fue aumentando a medida que se fueron desarrollando los asientos», hasta constituir la mayor parte de la población extranjera de la ciudad. Muestra con casos nominados que ser portugués y ser procesado iban juntos —el negrero Luis Gómez Barreto, «portugués judaizante», que «sufrió un duro proceso por parte de la Inquisición»— y que fue «el hecho de ser judíos lo que acabó» con las mayores fortunas lusas del puerto. Es el contexto que la página de Otero no trae y sin el cual el arresto del zapatero parece un capricho: en esa ciudad, un lusitano lenguaraz era material de denuncia.",
    limitation:
      "Su asunto es la trata y el gran comercio, no los artesanos ni los delitos de palabra: sus protagonistas son factores y asentistas con fortuna, no un chapinero de taller. El PDF es un OCR deficiente que deforma palabras y notas. No menciona a Domingo da Cunha ni el auto de fe de 1626.",
  }),
  navarretenoche2017: source({
    title: "Una noche de luces y festejo en Cartagena de Indias, 1690, en «Fronteras de la Historia», vol. 22, n.º 1, pp. 136-163",
    author: "María Cristina Navarrete",
    year: 2017,
    type: "artículo arbitrado de microhistoria con documentación inquisitorial",
    url: "https://www.redalyc.org/journal/833/83350361005/html/",
    summary:
      "Muestra el mecanismo que destruye al zapatero: cómo una reunión entre conocidos se convierte en causa de fe. Reconstruye, con los papeles del propio tribunal, una fiesta celebrada un viernes por la noche de 1690 cuyos participantes «fueron acusados de reunirse a celebrar prácticas judías», y sigue las biografías de esos tripulantes extranjeros hasta el punto en que alguien de la mesa habla. Es el reverso exacto de la tertulia del taller de El Candilejo: el peligro no venía de un enemigo sino de la compañía, y bastaba una frase oída en confianza. Sirve además para comprobar que las relaciones de causas conservadas permiten reconstruir episodios cartageneros con nombre propio cuando el documento existe, que es justo lo que aquí falta.",
    limitation:
      "El caso que estudia es de 1690, sesenta y cuatro años posterior, y sus acusados son marineros y oficiales extranjeros de las flotas, no vecinos artesanos. No menciona a da Cunha ni ningún auto de fe de la década de 1620.",
  }),
  edWives2024: source({
    title: "Wives Rule over Their Husbands: Folktales of Aarne-Thompson-Uther Type 1375",
    author: "D. L. Ashliman (ed.)",
    year: 2024,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type1375.html",
    summary:
      "Es el tipo exacto de este cuento, y la página trae la versión que lo calca. En el relato danés que edita Ashliman, un hombre recorre el mundo con una recua de caballos y un carro de huevos: da un huevo en las casas donde manda la mujer y se propone dar un caballo donde mande el marido —y la reparte entera en huevos. El cordobés hace lo mismo con el par de animales que tiene a mano en el Sinú, gallinas y gallos, y con el mismo resultado: en cada casa visitada la elección acaba cayendo en la gallina, y el visitante cierra diciéndole a su compadre «no le dije, compadre, que la mujer es la que manda en casa». La página reúne ocho versiones de Inglaterra, Arabia, Alemania, Italia y Dinamarca, y prueba que el emblema de la autoridad doméstica repartido casa por casa es un esquema hispánico y europeo de siglos, no una ocurrencia local. Revisada el 16 de diciembre de 2024.",
    limitation:
      "No incluye ninguna versión española ni hispanoamericana, de modo que documenta el tipo pero no el eslabón que lo trae al Caribe colombiano. Y hay una diferencia de arranque que la ficha no debe borrar: en las versiones europeas el repartidor sale sin adversario, mientras que aquí el recorrido nace de una discusión entre dos compadres, que es lo que convierte el cuento en un experimento y no en una ronda.",
  }),
  edTaming2025: source({
    title: "Taming of the Shrew: Folktales of Aarne-Thompson-Uther Type 901",
    author: "D. L. Ashliman (ed.)",
    year: 2025,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type0901.html",
    summary:
      "Es la otra mitad del pleito hispánico sobre el gobierno de la casa, la que el cuento cordobés no elige. La página abre precisamente con la versión española del asunto, «What Happened to a Young Man on His Wedding Day», el ejemplo del infante don Juan Manuel, y sigue con variantes alemanas e italianas del marido que somete a la mujer por la fuerza y el escarmiento. Puesto al lado, se ve lo que hace distinto al cuento de Zapata: aquí nadie somete a nadie, la disputa no se resuelve con violencia sino con un experimento de campo, y el que pierde el argumento es un compadre, no una esposa. Documenta que el debate sobre quién manda en casa produjo en España y en América dos familias de relatos opuestas, y que ésta se afilia a la burlona y no a la punitiva.",
    limitation:
      "El tipo 901 no es el de este cuento: comparte el asunto —la autoridad conyugal— y no el argumento, y su desenlace es el contrario. Ninguna de sus versiones tiene el reparto de aves casa por casa. No incluye material hispanoamericano. Página con copyright de 2025.",
  }),
  edContrary20132: source({
    title: "The Contrary Wife: Folktales of Aarne-Thompson-Uther Types 1365A, 1365B and 1365C",
    author: "D. L. Ashliman (ed.)",
    year: 2013,
    type: "antología comentada de un grupo de tipos folclóricos",
    url: "https://sites.pitt.edu/~dash/type1365abc.html",
    summary:
      "Completa el mapa del ciclo hispánico y europeo de la disputa doméstica que este cuento cita de lejos. Ashliman reúne aquí los tipos en que marido y mujer discuten sin que ninguno ceda —la mujer que se ahoga y a la que el marido busca río arriba porque era demasiado llevada la contraria, y la discusión sobre si algo se cortó o se rompió, sostenida hasta el absurdo—, y con ellos la forma cómica en que la tradición trató el gobierno de la casa durante siglos, en coplas, entremeses y cuentos de sobremesa. El cuento cordobés pertenece a la misma conversación, pero le da un giro que estas versiones no tienen: allí discuten los cónyuges, aquí discuten dos hombres sobre los cónyuges de otros, y el pleito se dirime observando conductas ajenas.",
    limitation:
      "Ninguno de los tres tipos es el de este cuento y ninguna de sus versiones tiene el reparto de aves ni la ronda de casas. No incluye material hispánico ni hispanoamericano: son textos europeos editados de fuentes impresas. Sirve para nombrar la familia temática que la ficha invoca, no para filiar el relato. Copyright de 2013.",
  }),
  asbjrnsenHusband1859: source({
    title: "The Husband Who Was to Mind the House",
    author: "Peter Christen Asbjørnsen y Jørgen Moe; edición de D. L. Ashliman",
    year: 1859,
    type: "cuento folclórico noruego editado, con texto completo",
    url: "https://sites.pitt.edu/~dash/norway010.html",
    summary:
      "Es la versión más conocida del pulso doméstico llevado a la prueba práctica, y funciona como contraste directo del cordobés. Aquí el marido gruñón sostiene que el trabajo de la casa es fácil, la mujer le propone cambiarse los oficios por un día, y la jornada termina con el hombre colgado por la cintura de la chimenea y la vaca en el tejado. La mecánica es la misma que la del cuento del Sinú —una disputa que no se resuelve hablando y que se decide poniendo a alguien a comportarse—, con una diferencia que la ficha aprovecha: en Noruega la prueba la sufre el que discute, y en Córdoba la sufren terceros, que no saben que están siendo examinados.",
    limitation:
      "Es un cuento noruego del siglo XIX en edición inglesa, sin relación documentada con el Caribe colombiano, y no reparte ningún emblema de autoridad: la prueba es un intercambio de oficios y no una elección entre dos animales. La página no da número de tipo ni nota comparativa.",
  }),
  edGodfather2022: source({
    title: "Godfather Death: Folktales of Aarne-Thompson-Uther Type 332",
    author: "D. L. Ashliman (ed.)",
    year: 2022,
    type: "antología comentada de un tipo folclórico, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type0332.html",
    summary:
      "Documenta la familia de cuentos en que un hombre pobre rechaza a Dios como padrino y acepta en su lugar a la Muerte, que se vuelve su compadre y le hace un favor de por vida: exactamente el trato del segundo episodio de Rambao, donde los dos primeros que se le presentan en el camino —María y Jesús— son despachados con desprecio y la tercera, la Muerte, come su gallina y queda de comadre porque le trae la noticia del parto. La página incluye una versión española, «Juan Holgado and Death», y otras de Alemania, Dinamarca, Noruega, Irlanda, Francia, Austria, Moravia, Hungría, Italia y Grecia, lo que prueba que el motivo del compadrazgo con la Muerte llegó al Sinú por la vía peninsular y no es invención del narrador cordobés. Compilada por D. L. Ashliman para la Universidad de Pittsburgh y revisada el 1 de mayo de 2022.",
    limitation:
      "No trae ninguna versión latinoamericana ni colombiana: da el tipo, no el eslabón que conecta a Rambao con la rama hispánica. Y en el tipo 332 el ahijado de la Muerte es médico y muere por engañarla una sola vez, mientras que Rambao la tiene presa dos años y acaba colándose en la Gloria: la coincidencia está en el pacto inicial, no en el desenlace.",
  }),
  jacobLittle1857: source({
    title: "The Little Old Man Made Young by Fire (Kinder- und Hausmärchen, n.º 147)",
    author: "Jacob y Wilhelm Grimm; edición y traducción de D. L. Ashliman",
    year: 1857,
    type: "cuento folclórico editado, con texto completo",
    url: "https://sites.pitt.edu/~dash/grimm147.html",
    summary:
      "Es el motivo europeo del que Rambao hace su negocio. En el texto de los Grimm, el Señor y san Pedro se hospedan en casa de un herrero, piden la fragua prestada, meten en las brasas a un mendigo viejo y achacoso hasta que resplandece, lo templan en la tina del agua y lo sacan sano, derecho y de veinte años. El herrero, que lo ha visto todo, intenta repetirlo con su suegra y la quema. En el cuento cordobés la escena es la misma con el reparto cambiado: Rambao es quien pregona por la ciudad «de hombre viejo me atrevo a hacer nuevo», quema en la hornilla al viejito que le entrega el Alcalde, y es el compañero de camino —al que el narrador nunca nombra, y a quien Rambao trata de Dios en dos exabruptos— el que lo rehace de las cenizas con la edad que piden los policías. El paralelo también explica que la escena funcione con un socio divino sin que el texto tenga que decirlo.",
    limitation:
      "Es la versión alemana de un tipo internacional, editada en el siglo XIX, no un eslabón documentado entre Alemania y el Sinú. Y falta en ella lo que en Rambao decide el final: en los Grimm el imitador fracasa y paga, mientras que aquí la operación sale bien las veces que hagan falta y rejuvenece la ciudad entera. La página de Ashliman para el tipo 753, que sería la entrada general, está vacía: sólo anuncia que se añadirán relatos.",
  }),
  edDeath2023: source({
    title: "Death and the Old Man: Folktales of Aarne-Thompson-Uther Type 845",
    author: "D. L. Ashliman (ed.)",
    year: 2023,
    type: "antología comentada de un tipo folclórico",
    url: "https://sites.pitt.edu/~dash/type0845.html",
    summary:
      "Trae doce versiones —cinco esópicas, dos de La Fontaine, una de Tolstói, tres afroamericanas de Virginia y Florida y una de Joel Chandler Harris— del encuentro entre un viejo cansado y la Muerte que acude a su llamada. Sirve para medir por contraste lo que Rambao hace con esa escena: aquí la Muerte no llega convocada por un desesperado sino que se sienta a pedir un pedazo de gallina, y el hombre no se arrepiente de haberla llamado sino que le impone las condiciones, primero como comadre y después como carcelero. Las versiones afroamericanas de la página son además el recordatorio de que este material circuló también por el Caribe y el sur de Estados Unidos, que es la ruta por la que se explica el repertorio de velorio del Sinú.",
    limitation:
      "El tipo 845 no es el de Rambao: comparte la figura de la Muerte tratable y conversable, no el argumento. Ninguna de las doce versiones tiene el encierro de la Muerte ni la entrada furtiva en el cielo. Todos los textos son ediciones impresas europeas o norteamericanas, sin material hispanoamericano. Revisado el 2 de abril de 2023.",
  }),
  cervantesCristo2002: source({
    title: "Cristo de la Expiración (Ciudades Patrimonio · Cartagena de Indias, «De paseo», n.º 12)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/cristo_expiracion.htm",
    summary:
      "Es el único sitio en abierto donde la leyenda aparece contada entera y fuera de Martínez Fajardo, y coincide con él en lo esencial: los novicios que recogen un madero en la orilla, el tallador desconocido que lo juzga corto, el madero devuelto al mar y encontrado después con la medida justa, el encierro del artesano que pide que le pasen la comida por una ventana, el silencio, la habitación vacía con la imagen terminada y la conclusión de que fue un ángel. Aporta además las dos fechas que el relato necesita: la epidemia de viruela de 1754, detenida —según los cronistas que invoca— tras nueve días de rezo a esta imagen, y el retablo barroco de 1807 del cartagenero Hermenegildo José de Ayala. Es la fuente que convierte la pieza en tradición documentada y no en invención de un autor.",
    limitation:
      "No cita ni un solo cronista por su nombre y presenta el material expresamente como «tradición». Es divulgación patrimonial sin bibliografía ni notas, escrita desde España para el visitante, y el conjunto al que pertenece contiene un error verificado de cronología independentista, lo que obliga a no extender su autoridad más allá de los monumentos. Su fecha de 1754 para la epidemia no coincide con la que da la prensa cartagenera reciente.",
  }),
  cervantesIglesia2002: source({
    title: "Iglesia de Santo Domingo (Ciudades Patrimonio · Cartagena de Indias, «De paseo», n.º 11)",
    author: "Centro Virtual Cervantes, Instituto Cervantes",
    year: 2002,
    type: "ficha institucional de patrimonio urbano",
    url: "https://cvc.cervantes.es/artes/ciudades_patrimonio/cartagena_indias/paseo/igl_domingo.htm",
    summary:
      "Sostiene la mitad arquitectónica del texto, que es la que el autor escribió de su puño. Confirma que es el templo más antiguo de la ciudad, terminado en 1559 con el empeño del obispo fray Jerónimo de Loayza y en cinco etapas discontinuas por la penuria de los dominicos; explica el origen de los estribos —contrafuertes levantados sobre la antigua calle de Nuestra Señora de la Luz para que no se hundiera—, que es exactamente el callejón que el relato nombra; y registra los daños que sufrió la torre del lado del Evangelio en el ataque de Vernon. Todo eso es lo que permite decir que el alegato patrimonial del autor describe un edificio real y descrito igual por otros.",
    limitation:
      "Fija la conclusión de la obra en 1559 y no discute la fundación de 1538 ni el traslado de 1551 que el relato menciona, de modo que esos dos puntos siguen sin cotejo. No dice nada de la imagen del Cristo, que trata en ficha aparte, ni del convento de Predicadores como institución. Sin citas ni bibliografía.",
  }),
  comunicacionesSanto2023: source({
    title: "Santo Cristo de la Expiración: historia y devoción",
    author: "Comunicaciones, Arquidiócesis de Cartagena",
    year: 2023,
    type: "divulgación devocional institucional",
    url: "https://arquicartagena.org/cristo-de-la-expiracion-cartagena-historia-devocion/",
    summary:
      "Es la voz de la institución que custodia la imagen, y su valor está tanto en lo que dice como en lo que calla. Confirma que la talla sigue en Santo Domingo, que tiene fiesta anual el 14 de septiembre y devociones fijas los lunes, y repite la leyenda del artesano desconocido, con detalle histórico atribuido al padre Rafael López, historiador arquidiocesano. Lo decisivo es que no menciona la epidemia de 1754: el episodio que en el relato hace nacer el culto no aparece en el relato oficial de la propia arquidiócesis, y esa ausencia es la que obliga a tratar la peste como versión y no como hecho.",
    limitation:
      "Es material devocional sin bibliografía ni referencias de archivo, que se apoya expresamente en la tradición oral y en la autoridad de un historiador de la casa. No fecha el origen de la imagen, no discute las versiones divergentes y no menciona a fray Braulio de Herrera ni a Porto del Portillo.",
  }),
  gutierrezMilagros2023: source({
    title: "Milagros y misterio, el enigma del santo Cristo de la Expiración",
    author: "Wilson Morales Gutiérrez, El Universal (Cartagena), 14 de septiembre",
    year: 2023,
    type: "crónica de prensa local",
    url: "https://www.eluniversal.com.co/cartagena/2023/09/14/milagros-y-misterio-el-enigma-del-santo-cristo-de-la-expiracion-en-cartagena/",
    summary:
      "Aporta la tercera datación del mismo suceso, y por eso entra. Sitúa la talla a comienzos del siglo XVII, obra de un artesano misterioso sobre un tronco llegado a la playa, y fecha «hacia 1720» la peste que dio fama a la imagen, frente a la viruela de 1754 del catálogo del Cervantes y frente al silencio de la arquidiócesis. Tiene además una voz identificada y actual, el padre Richard Nieto González, párroco de Santo Domingo, que es la única persona con nombre que hoy sostiene la versión desde dentro del templo. Con estas tres fuentes juntas, la epidemia deja de ser un dato y pasa a ser una discrepancia registrada.",
    limitation:
      "Prensa reciente sin aparato crítico, con una sola fuente citada y sin referencia documental para la fecha que propone. Entra en esta ficha por aportar una datación divergente y una voz localizable, no por el contenido de la leyenda, que reempaqueta.",
  }),
  edPlaying2018: source({
    title: "Playing Dead: Folktales of Aarne-Thompson-Uther Type 1 and Related Stories",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2018,
    type: "antología comentada de un tipo folclórico, con textos íntegros",
    url: "https://sites.pitt.edu/~dash/type0001.html",
    summary:
      "Es la comparativa que `similitudes` nombra, y leída entera resuelve la duda que la propia ficha dejaba abierta: sí hay versiones que repiten el fingimiento de muerte en el mismo camino, y en el mismo número. La página reúne bajo el tipo 1 ocho textos —«Reynard Steals Fish» de Joseph Jacobs, «Two Foxes Steal Herrings» de Escocia, «The Fox and the Lapp» de Laponia, dos afroamericanas de Joel Chandler Harris, «The Fox» de Palestina y «Mantharaka's Rescue» del Panchatantra— y entre ellos «Playing Dead Twice in the Road», de Virginia, cuyas versiones hacen que el conejo se tienda tres veces seguidas: «Brer Rabbit went and laid in the middle of the road… went under the hill and got in the road again… went around him and got into the road again». El esquema del tipo es el robo a un transporte de comida por un animal que se finge cadáver, que es exactamente lo que hace la pieza cordobesa con los plátanos.",
    limitation:
      "No incluye ninguna versión colombiana ni latinoamericana: da el tipo y no el eslabón por el que el argumento llegó al Sinú. Sus ocho textos son ediciones impresas europeas, norteamericanas y asiáticas, no material recogido en campo por el compilador, y en casi todos el robo se hace a un carretero humano y no a otro animal que carga al hombro. Nota para el editor: esta página obligó a corregir `similitudes`, que afirmaba que ninguna de sus versiones repetía el fingimiento tres veces en el mismo camino; la de Virginia sí lo hace y la frase se reescribió el 2026-09-20. Revisada el 17 de abril de 2018.",
  }),
  edRace2020: source({
    title: "The Race between Hare and Tortoise: Folktales of Aarne-Thompson-Uther Types 275, 275A, 275B, 275C and 1074",
    author: "D. L. Ashliman (ed.), University of Pittsburgh",
    year: 2020,
    type: "antología comentada de un grupo de tipos folclóricos, con índice de versiones",
    url: "https://sites.pitt.edu/~dash/type0275.html",
    summary:
      "La comparativa que `similitudes` nombra es ésta, y es también lo que sostiene la clasificación de la ficha como mixta. Reúne treinta y tres versiones de la carrera entre el rápido y el lento y separa con claridad las dos ramas que el cuento cordobés junta. Por un lado, la esópica y europea —seis traducciones de Esopo, La Fontaine, «La liebre y el erizo» de los Grimm y las versiones suiza, neerlandesa, rumana, inglesa y sueca—, donde el lento gana por constancia o con un único doble apostado en la meta. Por otro, la variante del relevo con parientes idénticos escalonados a lo largo del recorrido, que es la mecánica exacta de esta pieza y que la página documenta en versiones africanas occidentales, de Madagascar y afroamericanas recogidas por Joel Chandler Harris y Elsie Clews Parsons. Incluye además las versiones blackfeet, pueblo, ojibwa y sanpoil que la ficha cita.",
    limitation:
      "No incluye ninguna versión colombiana ni latinoamericana: establece la familia del cuento y no el eslabón por el que llegó al Sinú. Ninguna de sus treinta y tres versiones tiene el estribillo rimado, que es justamente lo propio del cordobés, y la página no lo registra como rasgo tipológico. Son textos editados de fuentes impresas, no recogidos en campo por el compilador.",
  }),
  gutierrezProceso2010: source({
    title: "Proceso de institucionalización de la higiene: estado, salubridad e higienismo en Colombia en la primera mitad del siglo XX (Estudios Socio-Jurídicos, vol. 12, n.º 1)",
    author: "María-Teresa Gutiérrez, Universidad del Rosario",
    year: 2010,
    type: "artículo arbitrado de historia de las instituciones sanitarias",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-05792010000100005",
    summary:
      "Documenta que la comisión de higiene del relato corresponde a un aparato real y fechado. Muestra que a lo largo del periodo higienista los laboratorios de higiene fueron «una preocupación importante, sobre todo como órgano consultor en cuanto a alimentos, bebidas alcohólicas, aguas y leches», que la Junta Central de Higiene informaba al Congreso ya en 1916 y que se quejaba de que las autoridades departamentales y municipales no hacían cumplir sus disposiciones. Describe además cómo el servicio se organizaba por ramos —matadero público, higiene municipal, hoteles y casas de asistencia—, que es la estructura de la que saldría una ronda nocturna a inspeccionar cántaros. La leche estaba, en efecto, entre los primeros productos regulados del país.",
    limitation:
      "Es un estudio nacional centrado en Bogotá y Cundinamarca: no hay en él Cartagena, ni comisiones cartageneras, ni rondas de madrugada, ni el articulado penal que castigaba al lechero. Documenta que el control existía y no cómo se ejecutaba en el Bolívar rural, que es donde ocurre el cuento.",
  }),
};

const keysByGroup = {
  martinez: ["villaFull", "villaDocsLib", "martinezCinii", "martinezMuhca", "martinezScribd", "martinezWorldcat", "cartagenaUnesco", "cartagenaBanrep"],
  zapata: ["popularFull", "villaFull", "zapataCervantes", "zapataBanrep", "zapataWorldcat", "unescoOral", "folktaleCervantes", "listIu"],
  list: ["listIu", "listJstor", "listDistributor", "listContents", "listReview", "listVitalSource", "listPublisherJstor", "unescoOral"],
  unresolved: ["villaFull", "popularFull", "listIu", "folktaleCervantes", "threePriestsCervantes", "unescoOral", "zapataCervantes", "zapataBanrep"],
  buenaventura: ["buenaventuraUnivalle", "buenaventuraCervantes", "teatroCali", "popularFull", "listIu", "unescoOral", "folktaleCervantes", "zapataCervantes"],
  otero: ["oteroPrimary", "villaFull", "villaDocsLib", "oteroCatalog", "oteroAcademy", "samperOrtega", "oteroBulletin", "cartagenaBanrep"],
  morgan: ["morganDecree", "morganRadio", "morganBanrep", "morganSea", "morganTiempo", "morganGeography", "morganTourism", "unescoOral"],
  francisco: ["franciscoMincultura", "franciscoUninorte", "franciscoFestival", "franciscoUnesco", "franciscoPanorama", "franciscoPilon", "franciscoPolice", "unescoOral"],
};

export function sourceKeysForCaribeMestizoFinalGroup(group) {
  const keys = keysByGroup[group];
  if (!keys) throw new Error(`Grupo sin fuentes: ${group}.`);
  return [...keys];
}

/**
 * Resuelve una lista de fuentes.
 *
 * Admite dos formas, y la segunda es la que importa: además del nombre de un
 * grupo —el reparto en bloque heredado, ocho fuentes iguales para las treinta y
 * tres fichas de Martínez— acepta una lista propia por mito, donde cada entrada
 * puede ser una clave del pool o un `{ key, summary, limitation }`.
 *
 * La ficha bibliográfica la fija el pool; lo que cambia por mito es qué dice
 * esa obra SOBRE ESE RELATO. Villa Posse aparecerá en decenas de fichas: bien.
 * Lo que no puede repetirse es el resumen.
 */
export function pickCaribeMestizoFinalSources(groupOrKeys) {
  const lista = Array.isArray(groupOrKeys)
    ? groupOrKeys
    : sourceKeysForCaribeMestizoFinalGroup(groupOrKeys);
  return lista.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = caribeMestizoFinalSources[key];
    if (!selected) {
      throw new Error(
        `Fuente desconocida: ${typeof entrada === "string" ? entrada : JSON.stringify(entrada)}.`,
      );
    }
    if (typeof entrada === "string") return selected;
    // El resumen y el límite propios del mito pisan los del pool.
    return {
      ...selected,
      ...(entrada.summary ? { summary: entrada.summary } : {}),
      ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}
