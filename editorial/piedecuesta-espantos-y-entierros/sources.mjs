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

export const piedecuestaEspantosSources = {
  valenzuelaFullText: source({
    title: "Mitos y leyendas de Piedecuesta y sus veredas",
    author: "Germán Valenzuela Sánchez; reproducción de Gonzalo Tolosa",
    year: 2012,
    type: "reproducción digital de ocho capítulos de una compilación local",
    url: "https://es.scribd.com/document/408561909/16-Mitos-y-Leyendas-de-Piedecuesta",
    summary:
      "Publica los textos completos de Hilandera, Galeacer, Carriazo, Reventón, Pisca, Monedita, Diabla y Lámpara, con narradores y lugares internos.",
    limitation:
      "La reproducción dice 2012, mientras el estudio académico cita Leyendas y cuentos de Santander como obra de 2010; no aporta facsímiles de entrevistas ni expedientes.",
  }),
  perezBookFullText: source({
    title: "Literatura folclórica: leyendas y relatos legendarios de Piedecuesta",
    author: "Luis Rubén Pérez Pinzón, editor",
    year: 2016,
    type: "libro de investigación formativa y compilación folclórica",
    url: "https://es.scribd.com/document/427463771/LiteraturaFolclricaPiedecuesta2016-pdf",
    summary:
      "Clasifica el corpus de Valenzuela, explica el proyecto Monteredondo y advierte sobre tergiversaciones producidas por búsquedas y copias de internet.",
    limitation:
      "Combina análisis, adaptaciones infantiles, fuentes impresas y trabajo escolar; su clasificación no prueba hechos sobrenaturales.",
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
      "Es una ficha depositada por el autor y no una evaluación independiente de cada relato.",
  }),
  cerlalcBook: source({
    title: "Registro de Literatura folclórica de Piedecuesta",
    author: "Cerlalc",
    type: "registro bibliográfico regional",
    url: "https://cerlalc.org/rilvi/literatura-folclorica-leyendas-y-relatos-legendarios-de-piedecuesta-14873/",
    summary:
      "Registra la existencia editorial de la compilación de 2016 dentro del repertorio iberoamericano.",
    limitation:
      "Prueba la publicación, no la antigüedad oral ni la factualidad de las escenas.",
  }),
  educoasProject: source({
    title:
      "Digitalizar la memoria oral colectiva: el rescate de leyendas como estrategia formativa",
    author: "Luis Rubén Pérez Pinzón y Claudia Patricia Serrano",
    year: 2017,
    type: "ponencia de investigación formativa",
    url: "https://recursos.educoas.org/publicaciones/digitalizar-la-memoria-oral-colectiva-el-rescate-de-leyendas-como-estrategia-formativa",
    summary:
      "Describe cómo estudiantes, docentes y familias identificaron, clasificaron y digitalizaron leyendas del sector rural de Piedecuesta.",
    limitation:
      "Evalúa el proceso pedagógico; no proporciona transcripciones independientes para todos los supuestos testigos de Valenzuela.",
  }),
  ambPiedecuesta: source({
    title: "Piedecuesta: historia, economía y división territorial",
    author: "Área Metropolitana de Bucaramanga",
    type: "perfil institucional municipal",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Documenta la historia municipal y la importancia de las industrias del fique, tabaco y panela en Piedecuesta.",
    limitation:
      "Aporta contexto territorial y productivo, pero no menciona a los protagonistas de las ocho leyendas.",
  }),
  culturalPolicyStudy: source({
    title:
      "Efectos de los planes decenales de cultura en las comunidades municipales: Piedecuesta",
    author: "Luis Rubén Pérez Pinzón",
    year: 2019,
    type: "artículo académico sobre política cultural",
    url: "https://www.redalyc.org/journal/110/11063117012/",
    summary:
      "Sitúa el proyecto de leyendas de Monteredondo dentro de las acciones culturales municipales y ofrece bibliografía histórica de Piedecuesta.",
    limitation:
      "Analiza institucionalidad cultural y no verifica cada trama o personaje legendario.",
  }),
  asalePisca: source({
    title: "Pisca",
    author: "Asociación de Academias de la Lengua Española",
    type: "diccionario de americanismos",
    url: "https://www.asale.org/damer/pisca",
    summary:
      "Define pisca en Colombia y Venezuela como hembra del pisco o pavo.",
    limitation:
      "Aclara el animal del relato, pero no documenta la cueva, los polluelos dorados ni el tesoro.",
  }),
  municipalTerritoryPlan: source({
    title: "Plan de desarrollo del municipio de Piedecuesta",
    author: "Municipio de Piedecuesta",
    type: "documento de planeación territorial",
    url: "https://obsgestioneducativa.com/wp-content/uploads/2021/02/Piedecuesta.pdf",
    summary:
      "Enumera veredas como San Isidro y Blanquiscal y ofrece cartografía del territorio rural y urbano.",
    limitation:
      "La cartografía contemporánea no fija la ubicación histórica exacta de cuevas, casas, árboles o apariciones.",
  }),
  upbFamilyViolence: source({
    title: "Caracterización de la violencia intrafamiliar en Piedecuesta",
    author: "Universidad Pontificia Bolivariana",
    type: "investigación social aplicada",
    url: "https://repository.upb.edu.co/handle/20.500.11912/5918",
    summary:
      "Estudia violencia sufrida principalmente por mujeres en el municipio y la necesidad de respuestas institucionales.",
    limitation:
      "No estudia a Rebeca, Maribella o Tenorio; se usa solo para impedir que la ficha celebre una agresión como defensa del honor.",
  }),
  piedecuestaIndustryStudy: source({
    title: "Empresas y empresarios en Bucaramanga, 1930-1950",
    author: "Universidad Industrial de Santander",
    type: "investigación histórica empresarial",
    url: "https://noesis.uis.edu.co/bitstreams/a5514e43-7d75-4326-9e38-0da4ab360462/download",
    summary:
      "Registra en Piedecuesta actividades de empaques, cables e hilazas de fique durante el periodo industrial asociado al relato de Oliva.",
    limitation:
      "Confirma la actividad económica, no el taller, la identidad o el proceso judicial narrados por Valenzuela.",
  }),
  santanderViolenceStudy: source({
    title: "Violencia política e impunidad: casos en Santander, 1930-1948",
    author: "Universidad Industrial de Santander",
    type: "investigación histórica regional",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/ab8e2e84-caa7-4894-a35f-f467db43cb6e/content",
    summary:
      "Documenta hechos de violencia política en Santander, incluido Piedecuesta, antes del periodo evocado por la Lámpara.",
    limitation:
      "No cubre por sí solo las décadas de 1950 a 1970 ni identifica la luz de La Urgua con una víctima concreta.",
  }),

  // ——— Búsqueda profunda 2026-09-23 ———
  orozcoTres2004: source({
    title: "Tres leyendas ganadoras y algo más… (fragmento publicado por el autor: portadilla, solapa y prólogo «Los senderos de Germán»)",
    author: "Germán Valenzuela Sánchez; prólogo de Julio César Niño Orozco",
    year: 2004,
    type: "libro de leyendas de autor; fragmento consultable",
    url: "https://drive.google.com/uc?export=download&id=1PHDCYRYjtmex3X5gBcHcDDjdZimIaCM9",
    summary:
      "Es la única prueba impresa de que el relato existe: el prólogo de Niño Orozco enumera las piezas del libro y la primera es «El Carriazo de San Isidro». La solapa sitúa su origen en la correría a pie del autor por las 57 veredas de Piedecuesta, recogiendo lo que contaban los campesinos.",
    limitation:
      "Sólo seis páginas escaneadas con marca de agua; el texto del Carriazo no está entre ellas, así que no se puede cotejar ningún hecho del relato. La obra da el título y el método, no el relato.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas», el Biato de la loma de Buena Vista, folio 141",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=135",
    summary:
      "Registra en Santander el guardián de tesoro que se vence a golpes: el Biato sale de una cueva cerca de la loma de Buena Vista y ataca al viandante solitario; si éste lo azota, el Biato lo lleva a la cueva y bajo el sombrero aparece un baúl lleno de oro. Es el paralelo documentado más cercano a la pelea con el Carriazo.",
    limitation:
      "Trata el motivo, no este relato: no nombra San Isidro, ni un conde, ni tres pruebas. Arias no identifica municipio ni narrador para esta cueva. El número de página del PDF va seis por detrás del folio.",
  }),
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», p. 129",
    author: "Javier Ocampo López",
    year: 1977,
    type: "estudio de folclor regional (Instituto Colombiano de Cultura)",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Recoge la creencia campesina sobre los entierros: las almas que escondieron joyas y dinero aparecen como luces verdosas para revelar el lugar y no descansan hasta que se descubren, y el aire que escapa de los cofres mata («lo flechó la plata»). Da el marco del tesoro que su dueño muerto no suelta.",
    limitation:
      "Es Boyacá, no Santander, y una descripción general de creencias sin relato concreto. Trata el motivo del entierro, no el Carriazo.",
  }),
  correaMitos1997: source({
    title: "Mitos, espantos y leyendas de Caldas (edición digital ampliada)",
    author: "Fabio Vélez Correa",
    year: 1997,
    type: "compilación de folclor regional (Gobernación de Caldas)",
    url: "https://www.ellibrototal.com/ltotal/?d=4731&t=1",
    summary:
      "En su presentación enumera, entre los espantos de los caminos de la colonización, el del rico fallecido que recorre el camino secreto hasta su entierro para vigilarlo de la codicia de los buscadores de tesoros: la misma figura del dueño avaro que guarda su oro después de muerto, como el Conde del Carriazo.",
    limitation:
      "Es Caldas, y la mención es de una línea, sin relato. La edición servida es posterior a 2007 aunque la primera es de 1997. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia Morales, «Folclor tolimense» (1962), «El Tunjo», folio 158",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=151",
    summary:
      "Describe la búsqueda ritual de tesoros: don Venancio sale el Viernes Santo a los lugares más apartados, «equipado con todos los conjuros y aprontes necesarios», a «puestiar» guacas y entierros, y descarta el pacto con el diablo. Es el paralelo de las ceremonias y ritos con que Carmelo vence al Carriazo.",
    limitation:
      "Es del Tolima y su tesoro es un Tunjo, no un entierro custodiado por un espanto. Trata el oficio de buscar tesoros, no este relato.",
  }),
  sanchezSobre2021: source({
    title: "Sobre el autor (sitio de Germán Valenzuela Sánchez, «PicaPica»)",
    author: "Germán Valenzuela Sánchez",
    year: 2021,
    type: "biografía en el sitio del autor",
    url: "https://germanvalenzuelasanchez.wordpress.com/about/",
    summary:
      "Identifica al recopilador del libro donde figura el Carriazo: piedecuestano, bibliotecario municipal y difusor del folclor local «basado en el rescate oral». Ayuda a fechar y situar la circulación escrita del relato en Piedecuesta.",
    limitation:
      "Página biográfica sin aparato ni fecha de edición; no menciona San Isidro ni el Carriazo.",
  }),
  sanchezLeyendas2009: source({
    title: "Leyendas y cuentos de Santander (fragmento de cubiertas publicado por el autor)",
    author: "Germán Valenzuela Sánchez",
    year: 2009,
    type: "libro de leyendas de autor; sólo cubiertas consultables",
    url: "https://drive.google.com/uc?export=download&id=1WV9BYw8m9PKm1aQp-0s3v7gEWVw3mSLL",
    summary:
      "Es la obra de la que con más probabilidad sale el doctor Galeacer: reúne, según la contraportada, cuarenta y seis «sagas» santandereanas y fija editorial (Sic, Bucaramanga) e ISBN. Las cuatro piezas que nombra son de pueblo y de espanto, el mismo registro de este relato de la Loma Baja.",
    limitation:
      "Sólo dos páginas de cubiertas escaneadas; el índice y el texto no están, y el Galeacer no es ninguna de las cuatro piezas nombradas. La atribución es probable, no comprobada.",
  }),
  correaMitos19972: source({
    title: "Mitos, espantos y leyendas de Caldas (edición digital ampliada), «Presencia animal del diablo» y «La mula de tres patas»",
    author: "Fabio Vélez Correa",
    year: 1997,
    type: "compilación de folclor regional (Gobernación de Caldas)",
    url: "https://www.ellibrototal.com/ltotal/?d=4731&t=1",
    summary:
      "Documenta el diablo en figura de animal nocturno: la mula de tres patas, el perro negro, el pollo maligno y la gallina ciega. Cita versiones de Supía (la mula del hombre cruel, condenada a vagar tras la muerte de su dueño), Riosucio y las cantinas donde asusta a tahúres y trasnochadores. Es el paralelo más cercano al caballo negro de Galeacer.",
    limitation:
      "Es Caldas, no Santander, y el animal es una mula cómplice, no un hombre transformado por un pacto. La edición servida es posterior a 2007. Trata el motivo, no este relato.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «El Mandingas», pp. 21-22",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Su ficha técnica atribuye al Mandingas el poder de tentar a las personas con riquezas y poder a cambio de sus almas y de transformarse en perro, buitre, lobo o animal doméstico. Da las dos piezas del relato de Galeacer, el pacto y la metamorfosis animal, aunque aquí es el diablo quien cambia de forma.",
    limitation:
      "La obra se declara ficción. Trata el motivo del diablo y sus formas, no a Galeacer; se revisó el texto completo y no trae ningún relato de un hombre convertido en caballo.",
  }),
  lopezpueblo19772: source({
    title: "El pueblo boyacense y su folclor, cap. 8 «Mitos, leyendas y creencias populares en Boyacá», pp. 121 y 123",
    author: "Javier Ocampo López",
    year: 1977,
    type: "estudio de folclor regional (Instituto Colombiano de Cultura)",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Anota que en el Valle de Tenza se cree que el Cucacuy tiene pacto con el diablo y enumera la mula de tres patas entre los espantos que recorren los caminos boyacenses de noche. Sitúa en la cordillera Oriental, la misma de este relato, la figura del pactante y la del animal espectral.",
    limitation:
      "Son menciones de una línea, en Boyacá; no hay transformación de un hombre en caballo. Trata el motivo, no este relato.",
  }),
  correaMitos19973: source({
    title: "Mitos, espantos y leyendas de Caldas (edición digital ampliada), «La Dama Verde»",
    author: "Fabio Vélez Correa",
    year: 1997,
    type: "compilación de folclor regional (Gobernación de Caldas)",
    url: "https://www.ellibrototal.com/ltotal/?d=4731&t=1",
    summary:
      "Describe a la Dama Verde, que se aparece en casas abandonadas y guía a los vivos hacia los objetos preciosos ocultos por los muertos: donde desaparece hay que cavar, y con el desentierro los muertos descansan. Es el paralelo de la casa abandonada donde una figura de negro le ofrece a Jacobo el entierro.",
    limitation:
      "Es Antioquia y Caldas, y la aparición es una anciana, no una figura que entrega huesos. La edición servida es posterior a 2007. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19933: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas», cuevas de La Calentana y de Buena Vista, folios 140-141",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=134",
    summary:
      "Da dos formas santandereanas del tesoro que se revela a una sola persona: la mujer que ve el oro de La Calentana, corre a buscar a su marido y al volver no halla la cueva; y el Biato de Buena Vista, que entrega un baúl lleno de oro al que lo vence. Arias anota que así se explican fortunas que aparecen de la noche a la mañana, como la de Jacobo.",
    limitation:
      "Son cuevas, no una casa abandonada, y ninguno de los dos relatos trae el vaho ni la ceguera. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  compiladoraMitos19934: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas»: Peñón de la Luchata, Alto Nogales y Laguna de Ortices, folios 136-137",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=130",
    summary:
      "Documenta en Santander el ave con su cría ligada a un tesoro: en el Peñón de la Luchata (Galán), «una clueca con polluelos, una y otros de oro» guardados por un mohán; en el Alto Nogales (Bolívar), la clueca que espulga a sus pollitos junto a una laguna brava; en Ortices (San Andrés), «las innumerables consejas de la clueca y los pollitos de oro». Es el paralelo directo de la pisca y sus pisquitos.",
    limitation:
      "Son lagunas, no cuevas, y ninguna está en Piedecuesta. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  gonzalezHistoria2023: source({
    title: "Historia de la provincia de Guane: origen, poblamiento y configuraciones sociales (1540-1795), tesis de doctorado en Historia, pp. 18 y 87-88",
    author: "María Consuelo Moreno González, Universidad Industrial de Santander",
    year: 2023,
    type: "tesis doctoral de historia",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-1be0-4c77-a9d7-faf78fa4f1b5/content",
    summary:
      "Da el fondo histórico de la cueva con tesoro en tierra de guanes: los restos guanes se han extraído sobre todo de cuevas de la Mesa de los Santos (Los Indios, El Conde, El Duende, La Loma), zona en jurisdicción de Los Santos y Piedecuesta, y desde 1940 hubo guaquería en esas cuevas. Explica por qué en ese camino una cueva se asocia con riquezas escondidas.",
    limitation:
      "Es historia y arqueología, no folclor; no menciona leyendas, ni la pisca, ni Tres Esquinas. Trata el territorio, no este relato.",
  }),
  compiladoraMitos19935: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lo que enseñan las cuevas»: cuevas del Cenicero y de La Calentana, folios 140-141",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=134",
    summary:
      "Recoge las cuevas santandereanas con tesoros de indios: en la del Cenicero, en Bolívar, el cazador que intenta llevarse el oro queda enchapado en oro; en La Calentana hay peroles y vasijas de oro, y la cueva se cierra ante quien quiere entrar. Arias escribe que todas las cuevas de Santander tienen su leyenda y casi todas hablan de los indios, como la de la pisca en el camino de los guanes.",
    limitation:
      "Son cuevas de Bolívar (Santander), sin aves guardianas. Trata el motivo de la cueva con tesoro, no este relato.",
  }),
  guerreromito2009: source({
    title: "El mito, un mundo legendario real en los imaginarios socioculturales de los estudiantes del corregimiento de El Encano, cap. 4 «Mito y agua templos de vida», pp. 76-80",
    author: "Mario Enrique Sarasty Guerrero y Sonia Rocío Ramírez Barco",
    year: 2009,
    type: "tesis de maestría en Etnoliteratura, Universidad de Nariño",
    url: "https://sired.udenar.edu.co/361/1/81610.pdf",
    summary:
      "Recoge la tradición de la laguna de La Cocha según la cual el Viernes Santo navega un bulto de totora con un mate, un peine y «una gallina clueca con sus polluelos»; recogerlos desencantaría las ciudades hundidas. Es el paralelo colombiano fuera de Santander del ave con su camada como señal de un encanto.",
    limitation:
      "Es Nariño y un contexto lacustre y de desencanto, sin tesoro que se saque. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19936: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia Morales, «Folclor tolimense» (1962), «La Candileja», folio 151",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=144",
    summary:
      "Documenta el espanto que castiga los amores torcidos: la Candileja, anciana condenada a vagar con un hachón encendido, persigue a los borrachos, a los malos padres, a «los enamorados banales» y a los que andan en malos pasos, y se ahuyenta con insultos. Es el castigo nocturno de la infidelidad que el barrio de Villanueva atribuye a una diabla.",
    limitation:
      "Es folclor del Tolima, no de Santander, y la Candileja es un ser sobrenatural que persigue al infiel, no a la amante. Trata el motivo, no este relato.",
  }),
  compiladoraMitos19937: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 21: Cesáreo Rocha Castilla, «Prehistoria y folclor del Tolima», «La Candileja», folio 180",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=172",
    summary:
      "Segunda forma del mismo espanto: una luz en llama que sale de la orilla de los pantanos y persigue a los caminantes solos, pero sólo a los que andan en malos pasos, son «enamorados de mala fe» o tienen algún motivo de remordimiento. Confirma que el castigo nocturno del amor clandestino es un motivo registrado en la tradición andina.",
    limitation:
      "Es folclor del Tolima y un párrafo breve. Trata el motivo, no este relato ni Piedecuesta.",
  }),
  compiladoraMitos19938: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «Lagunas encantadas», con el diálogo de Manuel Ancízar en Los Santos, folio 138",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=132",
    summary:
      "Da la lectura santandereana más antigua del diablo con cara humana: Ancízar, de paso por Los Santos con la Comisión Corográfica, comenta que los prodigios se achacan al diablo, «que en nada de eso se mete, salvo en figura de ciertos hombres interesados en propagar semejantes consejas». Es el mecanismo del relato de Villanueva, donde la diabla es una esposa disfrazada.",
    limitation:
      "Trata una laguna encantada y el comentario es de un viajero ilustrado del siglo XIX. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  tiempoCuentos20042: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Bola de Fuego», pp. 13-14",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "La ficha técnica dice que la Bola de Fuego, de los Llanos Orientales y el Tolima, se transforma en una mujer bella y seductora para atacar a los borrachos, los caminantes solitarios, «los esposos infieles» y los enamorados que andan en malos pasos. Es un disfraz al servicio del castigo de la infidelidad, invertido respecto al de Rebeca.",
    limitation:
      "La obra se declara ficción. Trata el motivo, no este relato ni Santander.",
  }),
  sanchezBiografia2021: source({
    title: "Biografía (sitio de Germán Valenzuela Sánchez, «PicaPica»)",
    author: "Germán Valenzuela Sánchez",
    year: 2021,
    type: "biografía en el sitio del autor",
    url: "https://germanvalenzuelasanchez.wordpress.com/about/",
    summary:
      "Sitúa al probable recopilador: nacido en Piedecuesta en 1946 y muerto en 2021, periodista, difusor del folclor piedecuestano y santandereano «basado en el rescate oral», con apoyo de la alcaldía municipal. Explica por qué una historia de barrio con nombres propios entra en una colección de leyendas.",
    limitation:
      "Página de homenaje sin editor ni fecha de edición; no menciona Villanueva ni este relato.",
  }),
  compiladoraMitos19939: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), notas a «La Mancarita», nota 5, folio 142",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=136",
    summary:
      "Da la forma santandereana documentada del motivo de la madre que mata a su hijo: Arias anota que en algunas comarcas del departamento el grito del mochuelo se atribuye a la Llorona, «mujer salvaje que recorre de noche las quebradas y riachuelos en busca de un hijo que ella misma ahogó». Es el paralelo regional más antiguo y cercano de la Hilandera.",
    limitation:
      "Es una nota al pie de otro relato. Trata el motivo de la Llorona, no esta historia ni Piedecuesta. El número de página del PDF va seis por detrás del folio.",
  }),
  tiempoCuentos20043: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «La Llorona», pp. 3-4",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "La ficha técnica de la Llorona la describe como figura de mujer de cabellera larga y desordenada, vestido largo, sucio y deshilachado y rostro de calavera; dice que espanta a los padres irresponsables, los borrachos y los infieles, y que su llanto y sus gritos auguran desgracias. Sirve para contrastar la Llorona castigadora con la Hilandera, que no vuelve como espanto.",
    limitation:
      "La obra se declara ficción. Trata el motivo de la Llorona, no esta historia; no menciona Santander ni el fique.",
  }),
  nievesEmpresas2004: source({
    title: "Empresas y empresarios en Bucaramanga, 1930-1950 (tesis de maestría en Historia), pp. 40-41",
    author: "Maribel Avellaneda Nieves, Universidad Industrial de Santander",
    year: 2004,
    type: "tesis de historia económica",
    url: "https://noesis.uis.edu.co/bitstreams/a5514e43-7d75-4326-9e38-0da4ab360462/download",
    summary:
      "Documenta el trabajo que rodea el relato: hacia 1930 la industria santandereana del fique ocupaba a más de tres mil personas, «en su mayoría ancianos, mujeres y niños», y mil quinientas de ellas trabajaban sólo en los empaques. Da contexto real a las hilanderas y torcedoras de fique del relato.",
    limitation:
      "Es historia económica regional centrada en Bucaramanga; no trata leyendas, ni a Oliva, ni el taller de la parte baja de Piedecuesta.",
  }),
  bucaramangaPiedecuesta: source({
    title: "Piedecuesta (historia, economía y división territorial)",
    author: "Área Metropolitana de Bucaramanga",
    type: "página institucional",
    url: "https://www.amb.gov.co/piedecuesta/",
    summary:
      "Enumera la industria del fique entre las del municipio, junto a los cigarros, la panela y la alfarería, y habla de las mujeres cigarreras de los barrios populares y de su trabajo en fabriquines y fábricas de empaque. Sitúa en Piedecuesta el oficio de la protagonista.",
    limitation:
      "Página institucional sin autor ni fecha; describe la economía del municipio, no el relato ni sus personajes.",
  }),
  compiladoraMitos199310: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 19: Juan de Dios Arias, «Folclor santandereano» (1954), «El trapiche ardiendo», folios 134-135",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=129",
    summary:
      "Es el paralelo santandereano: en una velada en la estancia de El Volcán, la familia ve desde el corredor una luz en las montañas lejanas que crece hasta parecer una hoguera, y un vecino la explica como el trapiche del difunto Nazario, que pena. La misma página cierra con la lamparita de petróleo encendida en la sala, la luz doméstica con que se compara la del relato.",
    limitation:
      "Trata otra luz, con otra explicación y en otra comarca de Santander. Trata el motivo, no este relato. El número de página del PDF va seis por detrás del folio.",
  }),
  uribeViolencia2018: source({
    title: "Violencia política e impunidad: casos en Santander identificados en los expedientes del Fondo Judicial durante el periodo 1930-1948 (pasantía de investigación), pp. 77-79",
    author: "Edwin Jovanny Pizza Uribe, Universidad Industrial de Santander",
    year: 2018,
    type: "trabajo de grado en historia con fuentes judiciales",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/ab8e2e84-caa7-4894-a35f-f467db43cb6e/content",
    summary:
      "Documenta la violencia partidista en Piedecuesta con procesos del Fondo Judicial: la masacre del 1 de febrero de 1931, día de elecciones a la Asamblea Departamental, con muertos y heridos en la plaza principal. Da un anclaje histórico real al fondo de violencia política que el relato asocia con la luz.",
    limitation:
      "Cubre 1930-1948, antes de las décadas que da el relato, y no trata leyendas ni la vereda de La Urgua. No prueba ninguna relación entre la violencia y la luz.",
  }),
  compiladoraMitos199311: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 20: Misael Devia Morales, «Folclor tolimense» (1962), relato del tunjo de don Venancio, folios 158-159",
    author: "Eugenia Villa Posse (compiladora), IADAP, Quito",
    year: 1993,
    type: "antología institucional con obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=151",
    summary:
      "Es el paralelo más cercano: un labriego que sale el Viernes Santo por la noche a «puestiar guacas, entierros y Tunjos» oye a medianoche el llanto desconsolado de un niño debajo de un capote; lo bautiza con saliva y la criatura se vuelve un muñeco de oro. Los vecinos atribuyen su riqueza a algún entierro de alma en pena o a una guaca. Reúne el llanto infantil, la noche santa y el oro escondido de la saquería.",
    limitation:
      "Es folclor del Tolima y allí el llanto es el tesoro mismo, no los restos de una criatura. Trata el motivo, no este relato.",
  }),
  tiempoCuentos20044: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano, «El Tunjo», pp. 63-64",
    author: "Casa Editorial El Tiempo, Proyectos Especiales, con el periódico HOY y la Universidad Autónoma de Colombia",
    year: 2004,
    type: "libro ilustrado de ficción de autor (documentos imaginarios)",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "La declaración imaginaria de un sacerdote que encontró en un camino de las afueras de Ibagué a un ser que lloraba como un niño perdido entre un atadito de ropa vieja, y que le ofreció hacerlo inmensamente rico; ante su silencio lo mordió. Es la forma contemporánea del llanto infantil ligado al oro.",
    limitation:
      "La obra se declara ficción. Trata el motivo del tunjo, no este relato ni Santander.",
  }),
};

export const piedecuestaEspantosSourceKeysBySlug = {
  "la-hilandera": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
    "piedecuestaIndustryStudy",
  ],
  "el-doctor-galeacer": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "el-carriazo-de-vereda-san-isidro": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "municipalTerritoryPlan",
    "ambPiedecuesta",
  ],
  "el-reventon-de-jacobo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
  ],
  "la-cueva-de-la-pisca": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "asalePisca",
    "municipalTerritoryPlan",
  ],
  "la-monedita-en-la-alcancia": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
    "piedecuestaIndustryStudy",
  ],
  "la-diabla-castigadora": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "upbFamilyViolence",
  ],
  "la-lampara-de-petroleo": [
    "valenzuelaFullText",
    "perezBookFullText",
    "perezBookMetadata",
    "educoasProject",
    "ambPiedecuesta",
    "santanderViolenceStudy",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickPiedecuestaEspantosSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickPiedecuestaEspantosSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = piedecuestaEspantosSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickPiedecuestaEspantosSourcesHeredadas(slug) {
  const keys = piedecuestaEspantosSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = piedecuestaEspantosSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
