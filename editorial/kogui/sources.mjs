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

export const koguiSources = {
  chaves1947: source({
    title: "Mitología kágaba",
    author:
      "Narrado por Seye Ababi Makó y Benito Sontinkama; recogido por Milcíades Chaves Ch.",
    year: 1947,
    type: "corpus etnográfico primario, con narrador acreditado relato por relato",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/244",
    summary:
      "Publica veintidós relatos kággaba y acredita el narrador de cada uno: «Informador:» aparece veintidós veces, una por mito. Es la fuente de la que salen las grafías del sitio —Kashindukwe, Seiskwisbuche, Naowa, Susabanka— y presenta a los dos narradores con edad, cargo y comunidad: Benito Sontinkama, cabo del mama Julián en el grupo de San Andrés, y Seye Ababi Makó, cabo del mama Ignacio Abiguí de Tucurinca.",
    limitation:
      "El propio Chaves declara que trabajó por interrogatorios en castellano y que los conceptos vertidos a esa lengua pueden haber quedado deformados. Hasta esta revisión, el sitio atribuía este corpus al tomo II de Reichel-Dolmatoff a través de un PDF que no es ese libro, y publicaba sin nombrar a los narradores.",
  }),
  reichel1950: source({
    title: "Los Kogi: una tribu de la Sierra Nevada de Santa Marta, tomo I",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1950,
    type: "monografía etnográfica",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/256",
    summary:
      "El volumen que ninguna ficha citaba, en acceso abierto y con el texto legible. Documenta el territorio, los linajes, la casa ceremonial —que llama «cansamaría», es decir «casa de María»— y nombra a la Madre Gaulchováng, de la que descendían los cuatro Padres del Mundo.",
    limitation:
      "Sus grafías no son las del corpus del sitio: escribe Kashindúkua donde Chaves escribe Kashindukwe, y no contiene Susabanka, Kasaugé ni Núnkasha. El propio autor registra que los mayores temían la divulgación de lo que llama los secretos del pueblo, y admite haber ocultado a sus anfitriones el destino de unas piezas arqueológicas.",
  }),
  preuss1993: source({
    title:
      "Visita a los indígenas Kágaba de la Sierra Nevada de Santa Marta",
    author: "Konrad Theodor Preuss; traducción de María Mercedes Ortiz",
    year: 1993,
    type: "edición española de textos y observaciones recogidos en 1914-1915",
    url: "https://openlibrary.org/works/OL23581955W/Visita_a_los_indigenas_Kagaba_de_la_Sierra_Nevada_de_Santa_Marta",
    summary:
      "Reúne textos en lengua Kogui, traducciones y observaciones tempranas sobre creación, ritual, máscaras, jaguares y personajes que reaparecen en el corpus posterior.",
    limitation:
      "La expedición estuvo ligada al coleccionismo etnográfico europeo y a relaciones desiguales; la traducción española es tardía y la ortografía de los nombres varía.",
  }),
  reichel1987: source({
    title: "The Great Mother and the Kogi Universe: A Concise Overview",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1987,
    type: "síntesis académica de cosmología Kogui",
    url: "https://ehrafworldcultures.yale.edu/cultures/sc07/documents/014",
    summary:
      "Describe a la Gran Madre, la estructura de nueve mundos, los siete puntos del universo, el templo como modelo cósmico y varias versiones de la creación.",
    limitation:
      "Es una interpretación de autor producida después de décadas de trabajo, no una transcripción comunitaria ni una voz única del pueblo Kogui.",
  }),
  pes2017: source({
    title:
      "Plan Especial de Salvaguardia del Sistema de Conocimiento Ancestral de los cuatro pueblos de la Sierra Nevada",
    author:
      "Pueblos Kogui, Arhuaco, Wiwa y Kankuamo; Ministerio de Cultura",
    year: 2017,
    type: "instrumento comunitario e institucional de salvaguardia",
    url: "https://mincultura.gov.co/direcciones/patrimonio-y-memoria/Documents/21-sistema-de-conocimiento-ancestral-SNSM-PES.pdf",
    summary:
      "Expone la responsabilidad Kággaba sobre espacios sagrados, gobierno propio, Ley de Origen y equilibrio territorial desde voces de autoridades de la Sierra.",
    limitation:
      "Es un documento colectivo de cuatro pueblos y de política patrimonial; no desarrolla cada relato antiguo ni debe usarse para homogeneizar diferencias internas.",
  }),
  malezhi2025: source({
    title: "Pueblo Kogui Malezhi: vivir en equilibrio con todos los seres",
    author: "Comunicación propia Kogui Malezhi; Ministerio de las Culturas",
    year: 2025,
    type: "relato transmedia de comunicación propia",
    url: "https://tuneldeltiemposantamarta.mincultura.gov.co/kogui-malezhi/index.html",
    summary:
      "Presenta en primera persona la relación del pueblo Kogui con la Sierra, el pensamiento que sostiene la vida, la resistencia y el cuidado del territorio.",
    limitation:
      "Es una presentación pública breve de una comunidad específica y no una edición crítica del corpus mitológico de comienzos del siglo XX.",
  }),
  decreto2018: source({
    title: "Decreto 1500 de 2018 sobre el territorio ancestral de la Línea Negra",
    author: "Presidencia de la República de Colombia",
    year: 2018,
    type: "norma construida con la cosmovisión de los cuatro pueblos de la Sierra",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/decreto_1500_2018.htm",
    summary:
      "Reconoce la Línea Negra como tejido de espacios sagrados conectado con la Ley de Origen y documenta funciones Kogui de lugares, madres y pagamentos.",
    limitation:
      "Su finalidad es jurídica y territorial, no narrativa; sirve para contextualizar lugares y responsabilidades, no para completar escenas ausentes.",
  }),
  loom1978: source({
    title: "The Loom of Life: A Kogi Principle of Integration",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1978,
    type: "artículo académico sobre tejido, sociedad y cosmología",
    url: "https://www.loc.gov/item/hlas-bi80101238/",
    summary:
      "Analiza el telar como modelo del cosmos y relaciona tejido, género, vida social, canto y pensamiento Kogui.",
    limitation:
      "Es una lectura antropológica del simbolismo; sus asociaciones no prueban por sí solas variantes de cada mito.",
  }),
  gauteovanCompilation: source({
    title: "Mitos y leyendas: Gauteován",
    author: "Compilación editorial basada en Karl Theodor Preuss y Walter Krickeberg",
    type: "síntesis secundaria histórica",
    url: "https://biblio.flacsoandes.edu.ec/catalog/resGet.php?resId=44622",
    summary:
      "Publica la síntesis que originó la ficha Gauteován: la Madre, el Sol, cuatro padres, máscaras ceremoniales y cerros asociados con los muertos.",
    limitation:
      "Usa vocabulario evolucionista y comparaciones con Muisca, Grecia y México; no identifica relator ni transcribe un relato Kogui continuo.",
  }),

  // ——— Búsqueda profunda 2026-09-18 ———
  gonzalezinterpretacion2009: source({
    title: "Una interpretación psicológica del mito kogi de la creación",
    author: "Juan Carlos Alonso González",
    year: 2009,
    type: "artículo de revista académica",
    url: "https://revistas.ces.edu.co/index.php/psicologia/article/view/216",
    summary:
      "Transcribe completo el relato de los nueve mundos tomado de Reichel-Dolmatoff (Los Kogi, ed. 1996): la Madre sola en Aluna, el mar, la formación sucesiva de los mundos, y el episodio central de esta ficha —la Madre pare nueve hijas que son las nueve tierras, entrega todas menos la negra, y los Padres adivinan que Sintána puede sacarla: \"cuando Sintána bailó y cantó, la Tierra Negra salió\". Es el respaldo más literal a la frase de la ficha sobre la obtención mediante canto y música.",
    limitation:
      "La lectura interpretativa es junguiana (arquetipos, inconsciente colectivo, huevo materno) y proyecta categorías psicoanalíticas sobre el relato; hay que tomar la transcripción y descartar el marco. Además el texto del mito es de segunda mano: Alonso cita la edición divulgativa de Reichel-Dolmatoff, no la transcripción de 1951.",
  }),
  mahechareencuentro2010: source({
    title: "Al reencuentro con \"lo otro\": alteridad y sistema de pensamiento de la cultura ika o arahuaco en el Caribe colombiano",
    author: "Luis Eduardo Wilches Mahecha",
    year: 2010,
    type: "tesis de maestría (Universidad Nacional de Colombia)",
    url: "https://repositorio.unal.edu.co/bitstreams/08ed4c46-13af-4c3b-9aa1-89c0623db56d/download",
    summary:
      "Los apartados 1.3.2 y 1.3.3 reproducen íntegro el mito kogui de la creación y lo comentan mundo por mundo: el segundo mundo con un Padre que era tigre en aluna, la gente sin huesos \"como gusanos y lombrices\", la división del mundo en lado Azul y lado Negro en el sexto, los 36 Padres en el octavo, y el árbol grande sobre el agua en el noveno. Sirve para sostener que las nueve tierras son a la vez etapas y niveles, no un mapa fijo.",
    limitation:
      "Es una tesis sobre los ika o arhuacos, otro pueblo de la Sierra: el mito kogui entra como caso comparativo para hablar del \"pensamiento Ika-Kaggaba\" como si fuera uno solo, y el autor lo lee con psicología analítica. Además no es fuente primaria: copia el texto del estudio de Alonso.",
  }),
  garcialiteratura2021: source({
    title: "La literatura oral del pueblo Kaggaba: acercamiento hermenéutico y etnográfico al mito de la creación y otros relatos",
    author: "Leydi Johanna Pinto García",
    year: 2021,
    type: "artículo de revista académica",
    url: "http://erevistas.saber.ula.ve/index.php/bordes/article/view/17387",
    summary:
      "Análisis del mito de la creación kaggaba acompañado de la palabra oral del Mama José Gil. Desglosa qué son los nueve mundos en la práctica: \"nueve planetas, nueve madres, nueve padres, nueve cerros, nueve suelos, nueve meses de embarazo\", nueve noches de ayuno, nueve clases de tierras, nueve edades; y liga el relato al nuhue o cansamaría, a la mochila como vientre de la Madre y al territorio (Sé, Nenulang).",
    limitation:
      "El aparato teórico es literario y europeo (Ricoeur, Durand, Eliade) y a ratos tapa el relato. El sitio de la revista (Universidad de Los Andes, Venezuela) sólo responde por HTTP sin certificado válido; el PDF se descarga, la página no siempre carga.",
  }),
  reichelDolmatoffTemplos1975: source({
    title: "Templos kogi. Introducción al simbolismo y a la astronomía del espacio sagrado",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1975,
    type: "artículo de revista académica",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1670",
    summary:
      "Explica la imagen kogi del cosmos que está detrás de las nueve tierras: la tierra se concibe plana y rectangular \"tal como un telar\", y por encima y por debajo de esa superficie se escalonan otras tierras, cada una algo más reducida, de modo que el cosmos son dos pirámides unidas por sus bases y atravesadas por un huso. Da también el sol como \"gran tejedor\" y la tela de la vida (alúna žakua).",
    limitation:
      "Es un estudio del templo y de la astronomía, no una versión del relato: no narra a la Madre, ni a las nueve hijas, ni la tierra negra. El PDF del ICANH es un escaneo sin capa de texto (hay que leerlo a ojo) y el vocabulario de 1975 —\"tribu\", \"cacicazgos\", \"idolo\"— es el de su época.",
  }),
  vargasmotivo2022: source({
    title: "El motivo del gran árbol en las tradiciones chibchas",
    author: "Juan Camilo Niño Vargas",
    year: 2022,
    type: "artículo de revista académica",
    url: "https://revistas.unal.edu.co/index.php/lthc/article/view/102090",
    summary:
      "Aporta el dato kogui que la ficha no tiene: \"los cuatro hijos de la Madre Universal construyeron el mundo a manera de templo alrededor de una inmensa ceiba surgida del mar\", primero alejando el agua de la que brotaba. Y añade que los kogi llaman kalbusankua al universo entendido como árbol, e identifican a la Madre Universal con esa ceiba primordial. Explica por qué la creación empieza con agua y oscuridad y termina con un espacio construido.",
    limitation:
      "Es un ensayo comparativo sobre el área chibcha entera (bribri, cabécar, barí, maleku, ette, iku, kuna): lo kogui ocupa párrafos sueltos y se apoya en Reichel-Dolmatoff y Parra Witte, no en trabajo de campo propio con koguis. No menciona las nueve tierras ni la tierra negra.",
  }),
  wittestructure2020: source({
    title: "The structure that sustains life: nourishment and exchange among the Kogi",
    author: "Falk Parra Witte",
    year: 2020,
    type: "artículo de revista académica",
    url: "https://www.revistatabularasa.org/numero-36/parra-eng.pdf",
    summary:
      "Etnografía reciente que define Aluna tal como la usa la ficha: el pensamiento con el que la Gran Madre concibió el mundo y tejió la vida, organizado después por sus hijos e hijas, los Padres y Madres espirituales (Kalguasha). Documenta además que las franjas climáticas de la Sierra son la versión visible de los nueve niveles del universo, que hay nueve cantos que ascienden de la playa a los picos, y que el Árbol del Mundo (Kaxbʉánkua) sostiene los nueve niveles.",
    limitation:
      "Su tema es el pagamento y la confesión, no la cosmogonía: no cuenta el relato de la Madre y las nueve hijas ni menciona a Sintana ni la tierra negra. Trabajo hecho con mamas de determinados linajes y eizuamas; el propio autor advierte que hay variación entre ellos.",
  }),
  cuencatierras2018: source({
    title: "Las tierras negras en la mitología y arqueología de la vertiente sureste de la Sierra Nevada de Santa Marta, La Guajira",
    author: "José Vicente Rodríguez Cuenca",
    year: 2018,
    type: "artículo de revista académica",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/390",
    summary:
      "Toma el episodio de la tierra negra como marco de una excavación real. Cita a Preuss y a Reichel-Dolmatoff para decir que los indígenas pidieron a Sintaná \"tierra negra, la hija negra de la Madre, la buena tierra para la siembra\", y que Sintaná la buscó con ayuda de su compañero el Viento hasta hallar a la hija que representaba esa tierra. Añade el dato vivo: pese a su fertilidad, los koguis actuales no siembran en la tierra negra porque \"los antiguos andaban por allí\".",
    limitation:
      "El grueso del artículo es arqueología de suelos (antrosoles del río Ranchería) y comparación con las terras pretas amazónicas; el mito ocupa dos párrafos. En esa versión Sintaná obtiene la tierra con el Viento, no con canto y música: conviene citarla como variante, no como confirmación. El texto completo se leyó en la copia de Redalyc del mismo artículo.",
  }),
  molinaresNumeros2019: source({
    title: "Números y universo en las comunidades indígenas: kogui, arhuaca, wiwa y kankuama de la Sierra Nevada de Santa Marta",
    author: "Eugenio de la Hoz Molinares, José Pacheco Fernández y Orlando Trujillo Varilla",
    year: 2019,
    type: "artículo de revista académica",
    url: "https://www.redalyc.org/journal/2740/274063987004/html/",
    summary:
      "Registra con voces de los cuatro pueblos qué significa el nueve, y separa explícitamente la respuesta kogui: la madre naturaleza \"tuvo nueve hijas, de ellas solo la tierra era fértil\", mientras arhuacos y wiwas leen el nueve como los nueve tipos de suelos. Útil para sostener que la ficha habla de cualidades del suelo y no de un territorio histórico.",
    limitation:
      "Trata a los cuatro pueblos de la Sierra en bloque y su interés es la etnomatemática (sistemas de numeración), no la narrativa: no hay relato, sólo glosas breves. Publicado en la Revista Latinoamericana de Etnomatemática; se consultó la copia en Redalyc.",
  }),
  ortizMitologia2023: source({
    title: "Mitología kogui (Portal de lenguas y literaturas de Colombia)",
    author: "Yaty Andrea Urquijo Ortiz, Instituto Caro y Cuervo",
    year: 2023,
    type: "ficha de portal institucional con fuentes citadas",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/mitologia-kogui/",
    summary:
      "Reproduce una versión del origen del ser humano narrada por los Mamas Arregocés Pinto, Miguel Gil y Santo Mojica (tomada de Coronado Conchala 1993) en la que la antropogénesis ocurre por intentos sucesivos: Aluna Java hizo primero \"un ser humano sin huesos, sin ojos, sin pies, sin manos… era como gelatina\"; después uno con huesos pero que no hablaba ni trabajaba; y por último al hombre completo. Respalda directamente el punto de la ficha sobre nacimientos incompletos antes de la humanidad organizada.",
    limitation:
      "Es una ficha divulgativa breve, sin aparato crítico y con grafías propias (Seiyankua, Sukukui, Makuyantana, Duguenavi, Seinekun). No menciona a Sintana ni a Naowa, ni las piedras, ni la crianza separada del niño y la niña: es otra versión del mismo paso, no la misma.",
  }),
  cardonajaguar2020: source({
    title: "El jaguar en la literatura Kogi: análisis del complejo simbiótico asociado con el jaguar, el chamanismo y lo masculino",
    author: "Fabio Gómez Cardona",
    year: 2020,
    type: "libro académico (Programa Editorial Universidad del Valle)",
    url: "https://doi.org/10.25100/peu.555",
    summary:
      "Dedica un capítulo a Sintana como héroe solar y fija su lugar en la antropogénesis: los primeros dioses, hijos directos de la Madre Universal, son nueve hombres —entre ellos Sintana, primer hombre de la creación— y nueve mujeres, entre las cuales Sei-nake, la tierra negra. Sostiene con Reichel-Dolmatoff que Sintana engendró a los primeros hombres y mujeres en relación incestuosa con la Madre, y subraya que es un personaje ambiguo, \"juguetón, mujeriego, poco responsable\", no un patriarca ejemplar.",
    limitation:
      "El eje del libro es el jaguar, el chamanismo y lo masculino; la primera pareja aparece de paso. La versión que maneja (Sintana engendrando con la Madre) no coincide con la de la ficha (niño y niña criados aparte y unidos después): son dos maneras distintas de contar el inicio de las generaciones, y el libro no las concilia.",
  }),
  preciadoCompilacion2012: source({
    title: "Compilación y análisis de la literatura Kogi",
    author: "Zulma Martínez Preciado y Liliana Moreno Muñoz",
    year: 2012,
    type: "artículo de revista académica",
    url: "https://revistas.fuac.edu.co/index.php/grafia/article/view/141",
    summary:
      "Analiza expresamente la facultad de la Madre Universal de autofecundarse y la connotación andrógina que eso acarrea, y cita el pasaje de la creación del primer hombre con el pelo y \"la sangre de un mes\". Sirve para sostener que en esta versión la generación no empieza con una pareja sino con una Madre que produce sola la materia del cuerpo.",
    limitation:
      "Su método es la mitocrítica comparada (Campbell, Graves, Getty, Durand) y desemboca en la Magna Mater euroasiática y en un relato evolutivo del \"orden matriarcal\": precisamente el tipo de comparación que la ficha retira. No menciona la piedra ni el nombre Wastora.",
  }),
  gilDugunawi2025: source({
    title: "Dugunawi (cuento kogui-wiwa)",
    author: "Cenexan Nacogui Gil",
    year: 2025,
    type: "relato de autor indígena en revista universitaria",
    url: "https://hemeroteca.unad.edu.co/index.php/sociologico/article/view/10068",
    summary:
      "Versión contada por un narrador kogui-wiwa, en primera persona comunitaria. Dugunawi sale todos los días a sembrar en la parcela; su mujer Kaldikukui descubre que en vez de cultivar hace máscaras y las cocina en la olla con el alimento. Al final el relato cierra sobre la comida: las mujeres que son el río \"le entregan alimento a la madre\" y suben al cielo cargadas de alimento de tierra caliente, y hay que cuidar los pozos \"porque morirían los padres que sostienen los alimentos\". Voz viva sobre el mismo personaje que la ficha nombra.",
    limitation:
      "Es un cuento literario contemporáneo, no una transcripción con contexto de registro, y el propio autor se identifica como kogui-wiwa: mezcla las dos tradiciones de la Sierra. No menciona la madre de los alimentos, ni la yuca, el plátano o la malanga, ni a Ñiwiwe. Texto corto, seis páginas.",
  }),
  gavilanEnsamblando2016: source({
    title: "Ensamblando una colección. Trayectos biográficos de sujetos, objetos y conocimientos antropológicos en Konrad Theodor Preuss a partir de su expedición a Colombia (1913-1919)",
    author: "Aura Lisette Reyes Gavilán",
    year: 2016,
    type: "tesis doctoral (Freie Universität Berlin)",
    url: "https://refubium.fu-berlin.de/handle/fub188/2195",
    summary:
      "Es la historia de la cadena documental que esta ficha necesita: cómo se armó el corpus kágaba de Preuss, cómo fue traducido por María Mercedes Ortiz y publicado por Fischer en los noventa, y cómo circuló después. Documenta la existencia de dos máscaras kágaba de la vertiente norte en el Museo Etnológico de Berlín y el reclamo de la organización indígena, y muestra el método comparativo del propio Preuss —explicar estatuas de San Agustín con el kalguakala kágaba, o compararlas con dioses mexicas y mayas—, que es el origen del vocabulario evolucionista que la ficha retira.",
    limitation:
      "Es historia de la antropología y de las colecciones, no mitología: no discute el contenido del relato de Gauteován ni las casas del Sol ni los cerros de los muertos. Cierra en 2016, antes de la restitución de 2023. Texto largo (364 páginas) y en parte en alemán.",
  }),
  zapataMujicaMascaras2025: source({
    title: "Máscaras koguis en la comprensión de la organización social indígena: aportes desde el archivo de la Unión de Seglares Misioneros",
    author: "Juan Sebastián Zapata-Mujica y Santiago Forero Bedoya",
    year: 2025,
    type: "artículo de revista académica",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/359005",
    summary:
      "El trabajo reciente sobre las máscaras koguis: reconstruye, con fotografías y diarios de campo inéditos de 1973 y 1981 del archivo USEMI, el uso ritual de las máscaras y la danza del Tani-Cansamaría oficiada por el mama-cacique enmascarado, y su papel en reproducir el orden social. Abre además con la devolución de junio de 2023 de las dos máscaras que Preuss llevó a Berlín, apoyándose en la carta del propio Preuss y en la investigación de Reyes.",
    limitation:
      "No documenta el relato de Gauteován ni ningún pacto que explique el origen de las máscaras; su pregunta es la organización social. Reconoce que la información sobre el Tani-Cansamaría es escasa y que buena parte depende de fotografías y descripciones de Preuss, es decir, de la misma cadena que la ficha examina.",
  }),
  museumRestitution2023: source({
    title: "Restitution of Kogi Masks from the Ethnologisches Museum",
    author: "Staatliche Museen zu Berlin – Ethnologisches Museum",
    year: 2023,
    type: "comunicado institucional del museo tenedor",
    url: "https://www.smb.museum/en/whats-new/detail/restitution-of-kogi-masks-from-the-ethnologisches-museum/",
    summary:
      "El museo que las tuvo declara la procedencia: dos máscaras (V A 62649 y V A 62650) adquiridas por Konrad Theodor Preuss en 1915 durante su viaje a Colombia, hechas \"para uso ritual en danzas y cantos\" y todavía con significado religioso para los koguis, entregadas el 16 de junio de 2023. Documenta con fuente primaria institucional las devoluciones que la ficha menciona y ata a Preuss no sólo con los textos sino con los objetos.",
    limitation:
      "Es un comunicado corto y sin autoría individual, escrito desde la institución que las retuvo un siglo: no analiza el uso ni discute la responsabilidad. No dice nada sobre Gauteován ni sobre el relato.",
  }),
  mellconcepcion2013: source({
    title: "La concepción del fuego como principio femenino en la cosmogonía kaggaba de la Sierra Nevada de Santa Marta",
    author: "Hasury Mell",
    year: 2013,
    type: "ensayo premiado (Premio Nacional de Crítica, Universidad de los Andes / Ministerio de Cultura)",
    url: "https://premionalcritica.uniandes.edu.co/wp-content/uploads/concepcionFuego.pdf",
    summary:
      "Trae la misma escena con una variante útil: la Madre llevaba 'mochilas y poporo' y entregó a sus hijos 'su poporo, sus mochilas... y también bigote y barba'. Y añade lo que la ficha necesita para no tratar el poporo como accesorio: explica sus partes (el cuerpo como útero, el chukero o palito, la cal como semen), que la entrega marca el inicio de la vida reproductiva del hombre, y que el poporo se fisura si quien lo lleva falta a su compromiso marital. Da también el marco de los nueve Padres y los 36 Dueños del Mundo en que ocurre la entrega de gobierno.",
    limitation:
      "Es un ensayo de concurso, no un artículo arbitrado, y mezcla la transcripción del mito con comparaciones filosóficas occidentales (Atlas, Heráclito) que no vienen de la fuente. Se apoya en la versión de Reichel y en visitas recientes a la Sierra; no discute a Preuss ni el nombre Naowa.",
  }),
  mogollonGonzalezCreacion2024: source({
    title: "Creación y pensamiento en la Sierra Nevada de Santa Marta. Aproximaciones filosóficas a los poporos",
    author: "Diego Ricardo Mogollón-González, Jorge Francisco Maldonado-Serrano y Rafael Guillermo Angarita-Cáceres",
    year: 2024,
    type: "artículo en revista arbitrada (Entramado 20[1])",
    url: "https://revistas.unilibre.edu.co/index.php/entramado/article/view/10230",
    summary:
      "Documenta la entrega del poporo como acto de gobierno y no de mayoría de edad a secas: el mamo o la zaku media un ritual de cuatro días para jóvenes de 13 a 18 años, pero la creencia sostiene que quien entrega el poporo es la Madre Universal y el mamo sólo hace de intermediario. Eso coincide con la estructura del relato, donde la entrega viene de una figura materna primordial. Da además el nombre kogui del poporo (sugi) y lo vincula con Seinake, la tierra negra primordial y primera mujer.",
    limitation:
      "Trata a la vez a kogui, iku (arhuaco), wiwa y kankuamo, y buena parte del material es de conversaciones de los últimos cinco años, no del corpus de 1915: hay que separar lo kogui del resto y no proyectar la práctica actual sobre el relato antiguo. No menciona a Naowa.",
  }),
  reichelDolmatoffAnalisis1987: source({
    title: "Análisis de un templo de los indios Ika, Sierra Nevada de Santa Marta, Colombia (Antropológica 68: 3-22)",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1987,
    type: "artículo en revista científica (Fundación La Salle, Caracas)",
    url: "https://biblat.unam.mx/hevila/AntropologicaCaracas/1987/no68/1.pdf",
    summary:
      "Da el nombre y el carácter del Sol que la ficha llama Mama: 'Kake Mulkua-kúkve es el Padre Sol de los Ika. En Kogi se llama Háte Mulkua-kukui, literalmente, padre-brillo-dueño', sinónimo de Bunkua-kukuí. Añade que entre kogui e ika el sol antropomorfizado tiene marcado carácter fálico y que su resplandor dorado simboliza poder seminal y fertilizador: eso explica sin adornos por qué Sol y Luna reciben oro o brillo dorado al ser elevados. Registra también nuhué, 'casa-mundo', como el término kogui para el templo.",
    limitation:
      "El templo descrito y medido es ika (arhuaco), de la aldea de Seránkua, no kogui; las equivalencias koguis son comparaciones del autor y él mismo advierte que uno de sus interlocutores ika le estaba dando 'una versión Kogi, por lo demás algo confusa'. No narra el mito del origen del Sol ni menciona la ceniza.",
  }),
  rangelResena1990: source({
    title: "Reseña: Mitos Kogi, de Manuela Fischer y Konrad Theodor Preuss",
    author: "Fernando Urbina Rangel",
    year: 1990,
    type: "reseña en revista de museo (Banco de la República, acceso abierto)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7073",
    summary:
      "Explica exactamente por qué la transcripción de Namaku resulta difícil de leer y por qué la ficha hace bien en no rellenar los huecos. Detalla que la edición Abya-Yala entresacó los textos míticos de una obra de tres secciones (etnografía, mitos y cantos, gramática) y que al hacerlo 'se pierde un marco de referencias', que la lectura queda sin claves simbólicas suficientes, y que muchas notas explicativas de la traductora María Mercedes Ortiz 'fueron inexplicablemente suprimidas'. Da el conteo: 27 relatos de Preuss (1915) y 16 de Fischer (1986-87), 43 en total.",
    limitation:
      "Es una reseña de dos páginas: juzga la edición, no analiza ningún mito ni menciona a Namaku. Su crítica a Preuss —tres meses de campo, actitud distante— es una valoración del reseñista, no un hallazgo documentado.",
  }),
  lLinajes1995: source({
    title: "Linajes y circuitos de matrimonio en tres grupos chibcha: u'wa, kogui y muisca (Boletín Museo del Oro 38-39)",
    author: "Eduardo Londoño L.",
    year: 1995,
    type: "artículo en revista de museo (Banco de la República, acceso abierto)",
    url: "https://www.humanas.unal.edu.co/colantropos/files/7514/7948/6927/blaa.pdf",
    summary:
      "Explica el sistema de linajes que hace inteligible la 'sangre de tigre' de Namaku: reconstruye los cuatro túxe y cuatro dáke originales y muestra que Hukuméiji es el túxe del jaguar, asociado al día, al sol y al blanco, emparejado con el dáke Séinake (puerco). Como el linaje masculino se hereda del padre, la pertenencia felina de Namaku no es metáfora: es filiación, y por eso la transformación puede llegarle por herencia y no sólo por quebrar una prescripción.",
    limitation:
      "No trata mitos ni nombra a Námaku: es un estudio de parentesco comparado. La parte kogui se apoya enteramente en Reichel-Dolmatoff 1985, sin campo propio, y buena parte del artículo es sobre u'wa y muiscas. La copia consultada está alojada en un repositorio de la Universidad Nacional, no en el sitio del Boletín.",
  }),
  witteecologia2025: source({
    title: "La ecología kogi en el devenir del mundo",
    author: "Falk Parra Witte",
    year: 2025,
    type: "artículo de revista académica (Revista Española de Antropología Americana 55-2, pp. 231-243)",
    url: "https://revistas.ucm.es/index.php/REAA/article/view/99346",
    summary:
      "Es la fuente que sostiene el cierre cosmológico de esta ficha sin convertirlo en profecía. A partir de trabajo de campo propio con mamas kogui, explica que el posible cataclismo no es un apocalipsis fechado sino el desenlace de un deterioro que depende del cumplimiento o incumplimiento de la Ley. Matiza además una creencia común: los ciclos cósmicos y climáticos 'poco se pueden impedir', y lo que sí está en manos humanas es corregir el pensar y el actuar; esa 'regeneración antropogénica' impediría el cataclismo y continuaría esta fase existencial. Registra también que los propios kogi reconocen estar incumpliendo la Ley (rituales desatendidos, tala sin pedir permiso, desinterés por las normas), lo que da al motivo del retorno de los jaguares un anclaje presente y no arqueológico.",
    limitation:
      "No nombra a Kashindukwe, ni a Nuánashe, ni las piedras de transformación: no verifica ningún detalle del episodio. Es un artículo de ecología política y ontología orientado al debate sobre el Antropoceno, y su material mítico aparece como ilustración. Los informantes son de comunidades concretas y el autor no pretende hablar por todo el pueblo kogui.",
  }),
  vargasBajo2025: source({
    title: "Bajo la responsabilidad humana. Creación, conservación y destrucción del mundo entre los chibchas",
    author: "Juan Camilo Niño Vargas",
    year: 2025,
    type: "artículo de revista académica (Revista Española de Antropología Americana 55-2, pp. 291-304)",
    url: "https://revistas.ucm.es/index.php/REAA/article/view/101388",
    summary:
      "Da el marco regional exacto para la secuencia 'sin Sol, animalización, agua' sin recurrir al diluvio bíblico ni al viaje del héroe. Muestra que en el norte de Colombia, donde el tiempo corre al ritmo del maíz, el mundo se destruye periódicamente y las catástrofes estallan a intervalos que los humanos pueden predecir y tratar de retrasar, frente a Centroamérica donde el fin es gradual y no periódico. Y precisa la causa: la causa última del fin del mundo es siempre moral, la renuncia de los humanos a su humanidad definitoria; cita a los kogui vía Reichel-Dolmatoff para decir que el mundo acabará 'si el código moral y religioso se olvidara o no se obedeciera'. Eso conecta directamente la transgresión del límite alimentario con la posibilidad del retorno.",
    limitation:
      "Es etnología comparada de toda la estirpe chibcha (ette, iku, u'wa, guna, ngäbe, bribrí, cabécar...) y los kogui aparecen solo en referencias puntuales; el material de primera mano del autor es ette, no kogui. No menciona jaguares, ni piedras, ni a Kashindukwe. Hay que leerlo como contexto de patrón regional, no como fuente del relato.",
  }),
  garciaReyesIconografias2017: source({
    title: "Iconografías y representaciones del jaguar en Colombia: de la permanencia simbólica a la conservación biológica",
    author: "Cristina Gómez Garcia-Reyes y Esteban Payán Garrido",
    year: 2017,
    type: "artículo de revista académica (Antípoda 28, Universidad de los Andes, pp. 131-152)",
    url: "https://revistas.uniandes.edu.co/index.php/antipoda/article/view/2026",
    summary:
      "Sirve para lo que la ficha afirma y no documenta: que el jaguar no es un mal absoluto. Recoge que entre los kogui el término jaguar y sus raíces aparecen con frecuencia en nombres de sacerdotes, jefes míticos, personificaciones divinas y constelaciones, que el jaguar ocupa un lugar preferencial desde el acto mismo de la creación por la Madre Haba, y que los kogui se llaman a sí mismos Gente Jaguar. Cita a Reichel-Dolmatoff sobre 'esos seres que se dice que fueron grandes chamanes que podían mudarse a voluntad de hombre a animal y viceversa, y que establecieron rituales, hicieron guerras y ejercieron su dominio por todas las montañas'. También señala que la imagen del jaguar fue afectada por la aproximación reprobatoria de las misiones, que es exactamente la capa que la revisión quiere quitar.",
    limitation:
      "Es un panorama nacional escrito desde la biología de la conservación (los autores trabajan en Panthera y Parques Nacionales); lo kogui ocupa unos pocos párrafos y se apoya en Reichel-Dolmatoff, Arocha y Friedemann y en Gómez 2010. No narra ningún episodio de Kashindukwe ni menciona las piedras de transformación.",
  }),
  witteLiving2018: source({
    title: "Living the Law of Origin: The Cosmological, Ontological, Epistemological, and Ecological Framework of Kogi Environmental Politics",
    author: "Falk Xué Parra Witte",
    year: 2018,
    type: "tesis doctoral (University of Cambridge, Department of Social Anthropology; doi 10.17863/CAM.22047)",
    url: "https://www.repository.cam.ac.uk/items/1ae26b5b-97f4-4c86-85eb-09b1ba2bc3b2",
    summary:
      "Es el hallazgo que más cambia esta ficha. El capítulo 5 tiene una sección entera, 5.4 'Kaxsouggi: Kogi relations to trees', y el glosario define Kaxsouggi como 'un árbol sagrado especial; también, la gente que engañó y se comió a los kogi'. O sea: el nombre designa hoy, a la vez, una especie de árbol que marca sitios sagrados —fotografiada en el trabajo, con mamas adivinando junto a ella y acompañada de piedras haxsʉnkalda— y al pueblo del relato. La versión narrada en campo por Alejo y el Mama Shibulata (2014-2016) difiere mucho de la transcripción de 1951: los Kaxsouggi nacieron de Kaldakshé (Padre de los Árboles) y Kaldāwiā (Madre de los Árboles); engañaban a los kogi ofreciéndoles descargar sus pensamientos, les 'abrían' la cabeza por el punto donde el cuerpo se amarra como una mochila, y convertían ese contenido en cultivos: plátano, yuca, papa. Sintana los enfrentó uno por uno, llegó a vestirse con la piel del Comisario Kaxsouggi para suplantarlo, y los fue disminuyendo hasta que se convirtieron en árboles y madera, 'como son ahora'. De ahí que hoy los humanos puedan cortar árboles. Y el cierre que la ficha no tiene: el Mama Shibulata advierte que los humanos están repitiendo ahora la conducta de los Kaxsouggi.",
    limitation:
      "Es una versión contemporánea recogida con narradores concretos de unas comunidades determinadas, no la transcripción de 1951 que la ficha sigue: no confirma el hombre peludo y barbudo, ni a Serawi, ni los micos capuchinos, ni el envío a España. Debe presentarse como versión viva paralela, no como corrección de la antigua. Está en inglés, con ortografía kogui propia del autor (Kaxsouggi, no Kasaugé). El foco de la tesis es la política ambiental, y el relato aparece dentro de ese argumento.",
  }),
  tkogi1987: source({
    title: "Los kogi de la Sierra Nevada de Santa Marta",
    author: "Carlos Alberto Uribe T.",
    year: 1987,
    type: "artículo de divulgación académica (Boletín Museo del Oro 18, Banco de la República)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7201",
    summary:
      "Enuncia en una frase la obligación positiva que es el reverso de la prohibición, y lo hace desde un antropólogo que trabajó largamente con este pueblo. Al describir las redes prehispánicas de la Sierra, Uribe señala que unos grupos eran 'donadores' de mujeres en matrimonio a otros grupos con los que tenían alianzas establecidas, 'para cumplir así con los dictados de la exogamia que obliga a encontrar esposas por fuera del propio grupo'. Formulado así, el relato no prohíbe por horror sino porque obliga a lo contrario: a salir del propio grupo. Sitúa además a los kogui como descendientes de los pueblos derrotados por la invasión española y explica el desplome de esas redes de intercambio, lo que ayuda a no leer la norma como costumbre inmóvil.",
    limitation:
      "Es un texto breve de divulgación, no un estudio de parentesco: la mención a la exogamia ocupa una sola frase y se refiere al periodo prehispánico y a los grupos de la Sierra en general, no específicamente a los linajes kogui actuales. No menciona el incesto, ni este mito, ni a los mamas estableciendo la prohibición. El tono narrativo de 1987 y las cifras de población están desactualizados.",
  }),
  sAMemorias2020: source({
    title: "Memorias de oficio: Tejeduría Sierra Nevada de Santa Marta",
    author: "Luis Aldemar Rodríguez Cifuentes (investigador); Camilo Ernesto Rodríguez Villamil (coord.); Artesanías de Colombia S.A.",
    year: 2020,
    type: "documento de investigación institucional (PDF abierto)",
    url: "https://www.artesaniasdecolombia.com.co/Documentos/Contenido/40012_inst-d_2020._90.pdf",
    summary:
      "Es la descripción más detallada y accesible de la cadena completa del algodón en la Sierra, que es justamente lo que el relato resume en una palabra («semillero»): siembra, cosecha del algodón, teñido con plantas para distintos colores, hilado de los algodones de color y arranque del tejido. Registra que antes de tejer una mochila se pide a un Mamo que la bendiga y le ponga semillas de algodón, que la mochila blanca de algodón pertenece al Mamʉ, y que el cordón umbilical del recién nacido se guarda en una mochila de algodón que luego se entierra: la fibra acompaña el nacimiento, igual que en el relato acompaña el reparto inicial. También documenta que la obtención del algodón se volvió difícil con la invasión de colonos en las tierras bajas.",
    limitation:
      "Grave y explícita: la memoria publicada es la del pueblo Arhuaco (Iku), no la kogui; los koguis aparecen solo en los pasajes de contexto compartido (Ley de Origen, despojo territorial, los cuatro pueblos hermanos). Los nombres de mochilas y de las autoridades están en lengua ikun, no en kogui. El propio documento advierte que la investigación se hizo en 2020 sin trabajo presencial por la emergencia sanitaria, lo que limitó la profundidad y la diversidad de voces. Es una publicación de fomento artesanal, no un estudio etnográfico ni mitográfico.",
  }),
  knowledgemochila2025: source({
    title: "The mochila and the weaving of the universe in Sierra Nevada de Gonawindúa",
    author: "Consejo Territorial de Cabildos de la Sierra Nevada de Santa Marta; publicado por UNESCO en «Indigenous Knowledge, Ancestral Places: Navigating Change in UNESCO Designated Sites»",
    year: 2025,
    type: "texto de autoría indígena en publicación institucional",
    url: "https://www.unesco.org/en/articles/mochila-and-weaving-universe-sierra-nevada-de-gonawindua",
    summary:
      "Aporta la voz propia y actual sobre lo que la ficha deliberadamente no desarrolla: por qué la fibra tiene una dimensión mayor que la de un recurso. Explica parte por parte (hilo, chipire o base, cuerpo, boca, asa) cómo la mochila es lectura del origen del universo, y sitúa esa organización en Jaba Sénenulang, la madre espiritual, desde el estado espiritual Sé/She. Sirve para sostener, con fuente declarada y contemporánea, la frase de la ficha sobre que la materia «llega con una historia y una responsabilidad», sin tener que importar la teoría del telar cósmico.",
    limitation:
      "La fibra que describe es maguey/fique, no algodón, de modo que no puede citarse como si hablara de la planta del relato. Habla en nombre de los cuatro pueblos de la Sierra como colectivo y no distingue lo kogui de lo arhuaco, wiwa o kankuamo. Es un texto breve, en inglés, dentro de un volumen institucional de UNESCO, sin aparato crítico ni referencia a Mamagakue ni a Námsiku.",
  }),
  carbonoDelahozPlantas2013: source({
    title: "Plantas medicinales usadas por los Cogui en el río Palomino, Sierra Nevada de Santa Marta (Colombia)",
    author: "Eduino Carbonó-Delahoz y Juan Carlos Dib-Diazgranados (Universidad del Magdalena; Fundación Salud para el Trópico)",
    year: 2013,
    type: "artículo de revista académica (Caldasia, Universidad Nacional de Colombia, vol. 35, n.º 2, pp. 333-350; acceso abierto CC BY 4.0)",
    url: "https://revistas.unal.edu.co/index.php/cal/article/view/41206",
    summary:
      "Es la única fuente nueva que trata directamente el lugar del relato: la cuenca del río Palomino, y a la gente kogui (cogui, kággaba) que vive allí. Documenta el conocimiento sobre plantas medicinales a partir de entrevistas con los mamos durante recorridos por zonas silvestres, cultivadas y huertas en los distintos pisos térmicos de la cuenca, y registra 189 especies útiles en 162 géneros y 77 familias, con el modo de uso y la preparación para tratar enfermedades comunes; el 89 % procede de espacios silvestres. Permite hablar de curación dentro del sistema kogui —con sus propias autoridades, su propio territorio y su propio repertorio— y no desde el asombro, y desmiente de paso que Palomino sea un sitio de enfermedad: es una cuenca habitada, cultivada y conocida planta por planta.",
    limitation:
      "Es etnobotánica cuantitativa: nombra especies y usos, no la cosmología de la enfermedad, y no menciona a Hiwihá, a los Mulkokókwi ni el relato de origen. Su marco conceptual es biomédico («enfermedades comunes») y traduce categorías kogui a diagnósticos occidentales, exactamente la operación contra la que la ficha advierte. Verifiqué la ficha del artículo y su resumen en el portal del editor, no el texto completo. El PDF está abierto, pero el espejo de SciELO Colombia no respondía durante la consulta.",
  }),
};

export function pickKoguiSources(...entries) {
  const seen = new Set();
  const picked = [];
  for (const entry of entries) {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = koguiSources[key];
    if (!selected) throw new Error(`Fuente Kogui desconocida: ${key}`);
    if (seen.has(key)) continue;
    seen.add(key);
    if (typeof entry === "string") {
      picked.push(selected);
      continue;
    }
    picked.push({
      ...selected,
      ...(entry.summary ? { summary: entry.summary } : {}),
      ...(entry.limitation ? { limitation: entry.limitation } : {}),
    });
  }
  return picked;
}
