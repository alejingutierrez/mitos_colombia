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

export const piedecuestaSecondCycleSources = {
  valenzuelaFullText: source({
    title: "Mitos y leyendas de Piedecuesta y sus veredas",
    author: "Germán Valenzuela Sánchez; reproducción de Gonzalo Tolosa",
    year: 2012,
    type: "reproducción digital de dieciséis capítulos de una compilación local",
    url: "https://es.scribd.com/document/408561909/16-Mitos-y-Leyendas-de-Piedecuesta",
    summary:
      "Publica los textos completos de Bruja Silbona, Máncara, Cuento fantástico, Campana, Diablo de Umpalá, Cueva, nueva Luz del Limonal y Gritón.",
    limitation:
      "La reproducción dice 2012, mientras el estudio académico cita Leyendas y cuentos de Santander como obra de 2010; no aporta archivos de entrevista ni expedientes históricos.",
  }),
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Clasifica siete de estos relatos, explica sus cadenas editoriales y relaciona algunos espantos con sonidos y fuerzas del viento.",
    limitation:
      "No clasifica Cuento fantástico de forma individual ni demuestra hechos sobrenaturales, biografías o causalidades narradas.",
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
      "Es una ficha depositada por el autor y no una evaluación independiente de los capítulos de Valenzuela.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la existencia editorial de la compilación de 2016 dentro del repertorio iberoamericano.",
    limitation:
      "Prueba la publicación, no la antigüedad oral ni la factualidad de escenas, personajes o fechas.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/publicaciones/digitalizar-la-memoria-oral-colectiva-el-rescate-de-leyendas-como-estrategia-formativa",
    summary:
      "Describe cómo estudiantes, docentes y familias identificaron, clasificaron y digitalizaron leyendas rurales de Piedecuesta.",
    limitation:
      "Evalúa el proceso pedagógico; no proporciona transcripciones independientes de Tadeo, Mateo, Félix, Isabel u otros narradores nombrados.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta la historia municipal y el papel del territorio rural, los caminos y actividades tradicionales de Piedecuesta.",
    limitation:
      "Aporta contexto territorial, pero no menciona apariciones, testigos, campanas, cuevas o apodos del corpus.",
  }),
  municipalTerritoryPlan: source({
    title: "Plan de desarrollo del municipio de Piedecuesta",
    author: "Municipio de Piedecuesta",
    type: "documento de planeación territorial",
    url: "https://obsgestioneducativa.com/wp-content/uploads/2021/02/Piedecuesta.pdf",
    summary:
      "Ofrece cartografía y división rural contemporánea para ubicar de manera aproximada Umpalá, La Urgua y otros sectores.",
    limitation:
      "La cartografía contemporánea no prueba recorridos históricos ni fija árboles, peñas, cuevas o lugares de aparición.",
  }),

  // ——— Búsqueda profunda 2026-09-23 ———
  bucaramangaPiedecuesta2024: source({
    title: "Piedecuesta: historia, datos generales, economía (página municipal del Área Metropolitana de Bucaramanga)",
    author: "Área Metropolitana de Bucaramanga",
    year: 2024,
    type: "reseña institucional del municipio",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Sitúa el río del cuento. La reseña cuenta que el camino hacia Pamplona y los Andes colombo-venezolanos subía siguiendo la ribera norte de la cuenca alta del río de Oro, nombra la falla del río de Oro entre los accidentes del relieve municipal y ubica en las vegas del valle del Río de Oro el cultivo de tabaco. Es el Río de Oro por el que huye el parroquiano.",
    limitation:
      "Página institucional sin autor individual ni fecha visible (el año es el de la consulta). No menciona la Calle Diez, las Clarisas ni ningún relato; trata el lugar, no este cuento.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas» (laguna de Ortices), folio 137",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=131",
    summary:
      "Da el registro santandereano del agua que actúa contra quien entra en ella. Sobre la laguna de Ortices, en San Andrés, Arias recoge «las innumerables consejas» de personas tragadas por un remolino súbito, de viandantes perseguidos por las aguas irritadas y de cóleras calmadas por un objeto bendito. En el cuento de Piedecuesta el río también se encrespa y arrastra, y también un objeto que se lleva encima decide la escena.",
    limitation:
      "Trata una laguna, no un río, y allí el agua persigue al caminante en vez de salvarlo. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  jacobWater1812: source({
    title: "The Water Nixie (Die Wassernixe), Kinder- und Hausmärchen n.º 79, en la traducción de D. L. Ashliman",
    author: "Jacob y Wilhelm Grimm; traducción y edición de D. L. Ashliman, Universidad de Pittsburgh",
    year: 1812,
    type: "cuento tradicional europeo recopilado",
    url: "https://sites.pitt.edu/~dash/grimm079.html",
    summary:
      "Da el esquema de la huida con objetos: dos niños escapan de la ondina que los tenía cautivos, y al verla venir arrojan un cepillo, un peine y un espejo, que se convierten en montañas; la de vidrio es tan resbaladiza que la perseguidora no puede cruzarla. Como la navaja del parroquiano, un objeto cotidiano que el fugitivo lleva encima se vuelve, en el momento justo, el obstáculo que lo salva.",
    limitation:
      "Es un cuento maravilloso alemán; el agua es allí el mundo del que se huye, no la vía de escape. No hay relación de procedencia con Piedecuesta. Trata el motivo, no este relato.",
  }),
  sanchezLeyendas2009: source({
    title: "Leyendas y cuentos de Santander (fragmento de cubiertas publicado por el autor)",
    author: "Germán Valenzuela Sánchez",
    year: 2009,
    type: "libro de leyendas de autor; sólo cubiertas consultables",
    url: "https://drive.google.com/uc?export=download&id=1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL",
    summary:
      "Es la obra de la que con más probabilidad sale el relato de Umpalá: el libro de Valenzuela reúne, según su contraportada, cuarenta y seis «sagas» santandereanas, y fija editorial (Sic, Bucaramanga) e ISBN 978-958-708-437-5. La contraportada nombra cuatro piezas —El Abuelo de los Burros de Pueblo Arrecho, La Vaca de Ungenio, La Hilandera y El Perro que se Parrandió al Pollo—; el tono de apodos y personajes de pueblo es el mismo del Diablo de Umpalá.",
    limitation:
      "Sólo son dos páginas de cubiertas escaneadas con marca de agua; el índice y el texto no están. Ésta no es ninguna de las cuatro piezas nombradas, así que la atribución es probable, no comprobada. La obra trata el corpus, no este relato.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «El Jinete Negro», pp. 23-24",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Trae el motivo del jinete nocturno que asusta con el ruido y las chispas de las herraduras. La ficha técnica lo describe como un caballero de luto sobre una cabalgadura negra que rastrilla los empedrados con la herradura, lo sitúa en Antioquia y los Santanderes y anota que en los Santanderes se le llama el Fantasma de Antón García. En el relato, las herraduras estallan contra las piedras y sale un chisperío, la misma imagen que en Umpalá se tomó por el diablo.",
    limitation:
      "La obra se declara ficción. Trata el motivo del jinete espectral, no a Félix María Rueda ni Umpalá; y allí el jinete sí es un muerto.",
  }),
  compiladoraMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas», con el diálogo de Manuel Ancízar en Los Santos, folios 137-138",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=131",
    summary:
      "Da la lectura santandereana más antigua de este tipo de diablo. Arias copia de «Peregrinación de Alpha» el diálogo de Ancízar con un vecino de Los Santos que atribuye al diablo los prodigios de una laguna; Ancízar comenta que el diablo no se mete en esas cosas, salvo en figura de ciertos hombres interesados en propagar semejantes consejas. Es el mismo mecanismo del relato de Umpalá: un hombre deja crecer la conseja del diablo y no la desmiente.",
    limitation:
      "Trata una laguna encantada, no un jinete, y el comentario es de un viajero ilustrado del siglo XIX, no de un narrador campesino. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  sanchezSobre2021: source({
    title: "Sobre el autor (sitio de Germán Valenzuela Sánchez, «PicaPica»)",
    author: "Germán Valenzuela Sánchez",
    year: 2021,
    type: "biografía en el sitio del autor",
    url: "https://germanvalenzuelasanchez.wordpress.com/about/",
    summary:
      "Sitúa al probable recopilador del relato: nacido en Piedecuesta en 1946 y muerto en 2021, bibliotecario municipal, concejal, columnista de Vanguardia Liberal, fundador de El PicaPica, socio fundador de la Academia de Historia de Piedecuesta y difusor del folclor municipal «basado en el rescate oral». Explica por qué un personaje de corregimiento como Félix María Rueda, con nombre, finca y negocio, entra en una colección de leyendas.",
    limitation:
      "Es una página biográfica sin fecha de edición ni aparato; no menciona Umpalá ni este relato.",
  }),
  tarazonaturismo2020: source({
    title: "El turismo como propuesta patrimonial: de los museos arqueológicos a las nuevas alternativas lúdicas en la actual provincia de Guanentá (Santander, Colombia) (Memorias, n.º 40, pp. 62-83, DOI 10.14482/memor.40.069.44)",
    author: "Álvaro Acevedo Tarazona y María Consuelo Moreno González, Universidad Industrial de Santander",
    year: 2020,
    type: "artículo arbitrado de historia y patrimonio",
    url: "https://www.redalyc.org/journal/855/85569988004/html/",
    summary:
      "Identifica el lugar: en su lista de voces guanes que se conservan en la toponimia santandereana incluye «Umpalá (corregimiento de Piedecuesta)», junto a Guatiguará y Ruitoque. Es la referencia académica abierta que sitúa el pueblo del relato.",
    limitation:
      "Es un estudio de turismo y patrimonio arqueológico; no trata leyendas, ni el diablo, ni a ningún personaje de Umpalá.",
  }),
  orozcoTres2004: source({
    title: "Tres leyendas ganadoras y algo más… (fragmento publicado por el autor: portadilla, solapa y prólogo «Los senderos de Germán»)",
    author: "Germán Valenzuela Sánchez; prólogo de Julio César Niño Orozco",
    year: 2004,
    type: "libro de leyendas de autor; fragmento consultable",
    url: "https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9",
    summary:
      "Documenta cómo se juntó el corpus piedecuestano al que probablemente pertenece el relato: la solapa habla de una correría a pie de más de 450 kilómetros cuadrados por las 57 veredas y 88 escuelas del municipio con apoyo de la alcaldía, y el prólogo cuenta que el autor habló con cada habitante rural que pudo y lo anotó en su bitácora.",
    limitation:
      "Es un libro anterior y distinto al de 2009; su lista de títulos no incluye el Diablo de Umpalá. Escaneo de imagen con marca de agua. Trata el método de recolección, no este relato.",
  }),
  tiempoCuentos20042: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, lámina 30 «El Gritón», pp. 59-60",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Es el texto del relato. La p. 60 cuenta, entre comillas y con la voz de la novia, la boda de Aquileo Guzmán y Virgelina Hacha en el Valle del Magdalena: los seis expedicionarios con silbatos, el chubasco, el extravío entre arbustos, el alarido que responde a los silbatos, la dispersión y el regreso guiados por tambores. La p. 59 es la ficha técnica: espanto invisible de las tormentas ribereñas y, en Antioquia, alma de un arriero en pena que arrea mulas o bueyes. Las notas al margen añaden el ramo bendito contra la tormenta.",
    limitation:
      "La obra se declara «material de ficción» y «recopilación de documentos imaginarios»: no hay narrador real, ni fecha, ni municipio. Nada la sitúa en Santander. Copia digital subida a Internet Archive por un particular; el OCR confunde el apellido de la novia («Hacha») y hay que leer la imagen.",
  }),
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», p. 121",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Es el único registro con editor que nombra al gritón fuera de la lámina de 2004. Ocampo lo pone en la lista de mitos campesinos que Boyacá comparte con otras regiones —el Jigura, la Mancarita, el Sombrerón, el Patetarro, la Patasola, el Hojarasquín— y los caracteriza en conjunto como seres que recorren caminos y veredas y son el temor de los caminantes en noches de oscuridad.",
    limitation:
      "Es una mención en una enumeración, sin descripción del gritón ni relato. No trae ni la tormenta ni el arriero, y no dice dónde de Boyacá se lo contaba.",
  }),
  baronCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano, «La leyenda del silbón», pp. 50-74",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro de relatos de autor (edición digital de la Biblioteca Luis Ángel Arango)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Sirve de paralelo: el Silbón llanero es otro espanto que se conoce por el sonido. En el relato, Secundino Quanay se aleja siempre silbando, sale a caballo en noches de tormenta y los vecinos de la sabana se marchan porque no quieren oír más «ese insoportable silbo, que sólo era presagio de calamidades» (p. 65). Voz antes que cuerpo, y tempestad como escenario, igual que en la lámina del Gritón.",
    limitation:
      "Es creación literaria de autor, larga y novelada, no una recolección. Trata el motivo del espanto sonoro, no el Gritón ni este relato.",
  }),
  compiladoraMitos19933: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia Morales, «Folclor tolimense» (1962), «La Madremonte», p. 151",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional de folclor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=145",
    summary:
      "Da el paralelo del extravío. Devia describe la influencia de la Madremonte como un mareo en que la víctima ve todos los lados del monte idénticos y cualquier bosquecito se vuelve una montaña sin senda ni salida; al pasar el conjuro descubre que sólo se perdió en un bosque pequeño. Es la misma experiencia que viven los expedicionarios de la boda cuando la lluvia vuelve igual todo el matorral.",
    limitation:
      "Trata a la Madremonte, que castiga faltas concretas; el Gritón de la lámina no castiga a nadie. El número de página del PDF va seis por detrás del folio impreso.",
  }),
  moralesFolclor2013: source({
    title: "Folclor tolimense (reedición de la Universidad de Ibagué)",
    author: "Misael Devia Morales",
    year: 2013,
    type: "libro de folclor regional (reedición del texto de 1962)",
    url: "https://repositorio.unibague.edu.co/server/api/core/bitstreams/7ecf7fde-a143-4744-a6bd-6f8618d50e2a/content",
    summary:
      "Es la edición completa de la obra que Villa Posse extracta. Permite leer el pasaje de la Madremonte en su contexto: junto a ella Devia pone la Madre de Agua y el Hojarasquín, todos seres que pierden al caminante en el monte, que es el oficio que la lámina de 2004 le da a la tormenta del Gritón.",
    limitation:
      "No menciona al Gritón. Sirve sólo para el motivo del extravío y como segunda vía de acceso a Devia.",
  }),
  albarracinalma2023: source({
    title: "Un alma en pena aparece entre los vivos: purgatorio y devoción en la segunda mitad del siglo XIX en Colombia (Anuario Colombiano de Historia Social y de la Cultura, vol. 50, n.º 2)",
    author: "Ana María Henao Albarracín",
    year: 2023,
    type: "artículo arbitrado de historia cultural",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/103741",
    summary:
      "Explica la figura que la ficha técnica usa para la variante antioqueña: el alma en pena. El artículo estudia cómo la devoción católica del siglo XIX entendía a los difuntos que no descansan y vuelven entre los vivos, y cómo esas apariciones servían para inculcar normas. Es el marco en que un arriero muerto puede seguir arreando su recua de noche.",
    limitation:
      "Estudia un caso documentado del Valle del Cauca (1900) y un alma que pide misas; no trata arrieros, gritos ni el Gritón. Trata el motivo del ánima, no este relato.",
  }),
  espanolTeatro1733: source({
    title: "Teatro crítico universal, tomo V (1733), discurso 16 «Tradiciones populares»: «Disertación sobre la Campana de Velilla»",
    author: "Benito Jerónimo Feijoo (edición digital del proyecto Filosofía en español)",
    year: 1733,
    type: "ensayo crítico ilustrado",
    url: "https://www.filosofia.org/bjf/bjft516.htm",
    summary:
      "Es el registro clásico de la campana que suena sola. Feijoo copia el manuscrito que le remitió la condesa de Atarés: en la iglesia de San Nicolás, en un monte vecino a Velilla, colgaban dos campanas al aire entre tres pilares; la menor sólo sonaba a fuerza de brazos y la mayor tañía «milagrosamente, y sin impulso ajeno». Luego examina las pruebas del prodigio. Sirve para situar el motivo central del relato de Piedecuesta en la tradición hispánica.",
    limitation:
      "Trata una campana de ermita en Aragón, leída como aviso de sucesos graves, no como obra del diablo. Trata el motivo, no este relato.",
  }),
  colaborativoCampana2026: source({
    title: "Campana de Velilla",
    author: "Wikipedia en español (artículo colaborativo, con referencias a la Gran Enciclopedia Aragonesa y al Ayuntamiento de Velilla de Ebro)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo como paralelo)",
    url: "https://es.wikipedia.org/wiki/Campana_de_Velilla",
    summary:
      "Resume la tradición de Velilla para el paralelo: la campana que llegó flotando por el Ebro, los toques atribuidos a la invasión musulmana, la derrota de Ponza, la muerte de Fernando el Católico y la del rey Sebastián, el último toque en 1686, la refundición del siglo XIX tras la cual no volvió a sonar, y las críticas de Quevedo y Feijoo.",
    limitation:
      "Fuente terciaria y colaborativa, admitida sólo como paralelo; sus datos vienen de la Gran Enciclopedia Aragonesa, que no se pudo abrir. No trata este relato.",
  }),
  lopezpueblo19772: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», pp. 122-123 («El toque de las ánimas»)",
    author: "Javier Ocampo López",
    year: 1977,
    type: "monografía de folclor regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Da el caso colombiano de campanas y espanto. En San Francisco de Tunja, en la segunda mitad del siglo XIX, el monje que iba a hacer el toque de ánimas encontraba en el altar a un sacerdote de casulla roja que esperaba ayudante; los legos dejaron de ir por miedo, y cuando uno se atrevió a ayudar al alma en pena, se volvió a escuchar el repicar de las campanas. La campana, aquí, marca el orden que el espanto interrumpe.",
    limitation:
      "Es una leyenda conventual de Tunja, tomada por Ocampo de Ramón C. Correa; la campana no suena sola ni se atribuye al diablo. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19934: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas» (El Colmenero), folios 138-140",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=132",
    summary:
      "Es el paralelo santandereano del castigo al muchacho desobediente. Arias transcribe la leyenda que le contó un maestro de escuela: un rapaz díscolo y haragán, al que no corrigen ni los padres ni el párroco, sale en Viernes Santo a sacar miel de una colmena en la escarpa y queda preso en la roca; su lamento se oye en las noches de invierno. Como Remigio, desoye la advertencia y paga en el lugar mismo de la falta.",
    limitation:
      "Es una leyenda de San Gil sin campana ni diablo como causa del sonido, y el castigo es definitivo. Trata el motivo de la desobediencia castigada, no este relato.",
  }),
  orozcoTres20042: source({
    title: "Tres leyendas ganadoras y algo más… (fragmento publicado por el autor: portada, prólogo «Los senderos de Germán» y primera página de «La locura de Milandro Tejas»)",
    author: "Germán Valenzuela Sánchez; prólogo de Julio César Niño Orozco",
    year: 2004,
    type: "libro de leyendas de autor; fragmento consultable",
    url: "https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9",
    summary:
      "Es la única obra donde consta el título «La cueva del diablo»: el prólogo de Niño Orozco lo nombra entre las piezas de la cartilla piedecuestana de 2004, y cuenta que el autor recorrió a pie las veredas del municipio anotando lo que le contaban.",
    limitation:
      "Sólo seis páginas escaneadas con marca de agua; el texto de este relato no está. La obra confirma el título, no el contenido.",
  }),
  sanchezLibros2021: source({
    title: "Libros (página de publicaciones de Germán Valenzuela Sánchez, «PicaPica»)",
    author: "Germán Valenzuela Sánchez",
    year: 2021,
    type: "página de autor con enlaces a fragmentos de sus libros",
    url: "https://germanvalenzuelasanchez.wordpress.com/libros/",
    summary:
      "Es el lugar desde donde el autor ofrece los fragmentos de sus cartillas de leyendas de Piedecuesta, entre ellos el de 2004 que nombra «La cueva del diablo». Permite fechar la obra y ver que el resto del libro no está publicado en abierto.",
    limitation:
      "Página de autor sin aparato; no reproduce el relato ni lo resume.",
  }),
  compiladoraMitos19935: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas» y «Lo que enseñan las cuevas», pp. 137-141",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Documenta el diablo de lugar en la misma comarca del relato: el diálogo de Ancízar en Los Santos sobre la laguna del monte de la Mesa, que nadie se arrima a pasar hasta que un sacerdote la conjure, con el comentario de que todos esos prodigios se achacan al diablo; y la leyenda del Colmenero de San Gil, una hendedura ligada a Satanás donde de noche se oyen ruidos y llueven pedradas sobre quien se acerca. Arias afirma que todas las cuevas de Santander tienen su leyenda.",
    limitation:
      "Trata el motivo del diablo y de las cuevas santandereanas, no este relato; ni Mateo ni la Quebrada Salvavidas aparecen. El número de página del PDF va seis por detrás del folio.",
  }),
  colombianaPeregrinacion2019: source({
    title: "Peregrinación de Alpha (exposición documental de la Biblioteca Virtual Colombiana)",
    author: "Biblioteca Virtual Colombiana, Facultad de Ciencias Humanas, Universidad Nacional de Colombia",
    year: 2019,
    type: "exposición documental de biblioteca universitaria",
    url: "https://www.humanas.unal.edu.co/bvc/exhibits/show/manuel_ancizar/nuestros_investigadores_resalt/peregrinacion_de_alpha",
    summary:
      "Fecha el paso de Ancízar por la Mesa de Los Santos: la Peregrinación se publicó por entregas en El Neo-Granadino entre 1850 y 1851, escrita sobre la marcha de la Comisión Corográfica. Es la misma época en que el relato pone a Mateo arriando por esos caminos, y el registro más antiguo del diablo como dueño de un lugar en esa meseta.",
    limitation:
      "Página de presentación; no comenta el pasaje de Los Santos. Trata el motivo por vía de Ancízar, no este relato.",
  }),
  tiempoCuentos20043: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «Francisco el Hombre», pp. 29-30",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Trae el olor de azufre como anuncio del diablo en un camino: un viajero, en una trocha de La Guajira, siente el aire cargado de un insoportable olor a azufre justo antes de encontrar a Satanás. Es el mismo aviso que en el relato de Mateo precede en cien metros a la aparición.",
    limitation:
      "La obra se declara ficción. Trata el motivo del diablo en el camino en otra región, no este relato.",
  }),
  compiladoraMitos19936: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «La Mancarita», pp. 127-129 y notas de la p. 143",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional (registro del relato)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Es el texto de donde sale el relato. Arias describe a la Mancarita como la oyó de niño en Guanentá (una sola mama, pelaje, pies al revés, grito nocturno), copia el diálogo de Ancízar con el viejo del páramo que la hace imitar voces, transcribe completa la historia de la manca Rita del Río Frío según Samuel Ortiz y la juzga reciente y literaria, y discute el mochuelo, la Ciguapa y los monos de Gómara.",
    limitation:
      "Es un OCR de una reproducción de 1993 de un libro de 1954; hay palabras dudosas («abricinas», «despasanza»). Los registros de Ortiz y García se conocen sólo por la transcripción de Arias.",
  }),
  tiempoCuentos20044: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, lámina 16, «La Mancarita», pp. 31-32",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Reelabora a la Mancarita como un encuentro nocturno cerca de Toca (Boyacá) en tiempos de la Independencia: un soldado manchego ve a una mujer desnuda, con un solo seno, pelaje, uñas larguísimas y pies al revés, y la reconoce como el espíritu de una celestina chismosa que huyó a los montes y rapta niños y hombres. Junta en una sola figura el cuerpo de Guanentá y la chismosa del Río Frío.",
    limitation:
      "La obra se declara ficción y recopilación de documentos imaginarios; no es un registro de tradición oral. El OCR del ítem es malo; la página se leyó sobre el texto extraído.",
  }),
  totalFolclor1954: source({
    title: "Folclor santandereano (ficha de la obra en la biblioteca digital)",
    author: "Juan de Dios Arias; Fundación El Libro Total",
    year: 1954,
    type: "ficha de biblioteca digital regional",
    url: "https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=298",
    summary:
      "Sitúa el método del autor que fija la Mancarita: una recopilación hecha con ayuda del magisterio de todo el departamento, atenta a lo propio de cada provincia. Explica por qué Arias pudo juntar su recuerdo de Guanentá con registros de Bucaramanga (Ortiz, García) y del páramo (Ancízar).",
    limitation:
      "La ficha describe la obra en general, y el visor no carga fuera de navegador: no se comprobó que el volumen digital contenga el capítulo de la Mancarita.",
  }),
  colaboradoresCiguapa2026: source({
    title: "Ciguapa",
    author: "Wikipedia en español (colaboradores)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo para el paralelo)",
    url: "https://es.wikipedia.org/wiki/Ciguapa",
    summary:
      "Documenta el paralelo dominicano que Arias propone: mujer de pies vueltos al revés y cabellera larga que sale de noche junto a las corrientes de agua, grita y embruja a los hombres; primera referencia literaria de Francisco Javier Angulo Guridi (1866) y registro de fray Cipriano de Utrera (1911).",
    limitation:
      "Es Wikipedia, sin autor identificable; se usa sólo para el paralelo. Trata el motivo en las Antillas, no la Mancarita.",
  }),
  colaboradoresCaipora2026: source({
    title: "Caipora",
    author: "Wikipedia en portugués (colaboradores)",
    year: 2026,
    type: "enciclopedia colaborativa (sólo para el paralelo)",
    url: "https://pt.wikipedia.org/wiki/Caipora",
    summary:
      "Documenta el paralelo brasileño que Antolínez, citado por Arias, emparenta con la Mancarita: guardiana tupí de los animales del monte, descrita a veces con los pies vueltos hacia atrás, que extravía a los cazadores simulando sonidos y silbando.",
    limitation:
      "Es Wikipedia, sin autor identificable; se usa sólo para el paralelo. Trata el motivo en el Brasil, no la Mancarita.",
  }),
  ibagueFolclor2013: source({
    title: "Folclor tolimense, «La Candileja», p. 65 (reimpresión de la edición de 1962)",
    author: "Misael Devia Morales; Universidad de Ibagué",
    year: 2013,
    type: "libro de folclor regional (reimpresión universitaria)",
    url: "https://repositorio.unibague.edu.co/server/api/core/bitstreams/7ecf7fde-a143-4744-a6bd-6f8618d50e2a/content",
    summary:
      "Da el paralelo más cercano de la luz errante: la Candileja es una mujer condenada tras su muerte a vagar por los caminos reales con un hachón encendido, que se aparece a la orilla del camino a los viajeros de a caballo y se les monta en la grupa; se la atrae rezando y se la ahuyenta con insultos. Es la misma figura de mujer muerta que paga una culpa con fuego en el camino.",
    limitation:
      "Es del Tolima, no de Santander, y la culpa de la Candileja es la alcahuetería con sus nietos, no el infanticidio. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19937: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), nota 5 de la p. 143 y «Lagunas encantadas», pp. 137-138",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Documenta en Santander las otras dos piezas del motivo: la Llorona, mujer salvaje que recorre de noche las quebradas en busca del hijo que ella misma ahogó (nota 5), y el conjuro del sacerdote como único remedio contra un lugar encantado, en el diálogo de Ancízar en Los Santos (pp. 137-138). La madre infanticida y el cura que conjura son los dos ejes de la Luz del Limonal.",
    limitation:
      "Ni la Llorona de la nota ni la laguna de Los Santos son la Luz del Limonal; Arias no menciona Piedecuesta ni una luz errante. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19938: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 21: Cesáreo Rocha Castilla, leyendas del Tolima, «La Candileja»",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=172",
    summary:
      "Registra una segunda forma tolimense de la luz errante: una llama que sale de las orillas de los pantanos y persigue de noche a los caminantes solitarios, se coloca en la grupa de los que van a caballo y sólo busca a los que andan en malos pasos o tienen algún remordimiento. El remordimiento como imán de la luz es el mismo de la Luz del Limonal.",
    limitation:
      "Es del Tolima y no tiene historia de origen; trata el motivo, no este relato. El ancla de página es aproximada.",
  }),
  tiempoCuentos20045: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Bola de Fuego», pp. 13-14",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Trae la luz de los caminos como ficción declarada: una luz intensa que gira en el aire a poca altura, persigue a los caminantes solitarios, a los esposos infieles y a los enamorados en malos pasos, y se transforma en mujer bella para atraerlos. Coincide con la Luz del Limonal en la mujer hecha fuego que castiga las faltas de amor.",
    limitation:
      "La obra se declara ficción y sitúa su relato en Arauca. No hay madre, niño ni cura. Trata el motivo, no este relato.",
  }),
};

export const piedecuestaSecondCycleSourceKeysBySlug = {
  "la-bruja-silbona": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-mancarita": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
  ],
  "cuento-fantastico": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "cerlalcBook",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-campana-del-diablo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-diablo-de-umpala": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
  ],
  "la-cueva-del-diablo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
    "ambPiedecuesta",
  ],
  "nueva-version-de-la-luz-del-limonal": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-griton": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPiedecuestaSecondCycleSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaSecondCycleSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaSecondCycleSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaSecondCycleSourcesHeredadas(slug) {
  const keys = piedecuestaSecondCycleSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaSecondCycleSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
