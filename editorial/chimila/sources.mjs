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

export const chimilaSources = {
  reichel1945: source({
    title: "Mitos y cuentos de los indios Chimila",
    author: "Gerardo Reichel-Dolmatoff; narrados por Tangrutaya Mutsu",
    year: 1945,
    type: "corpus etnográfico primario de veintiún relatos",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/234/256/1567?inline=1",
    summary:
      "Publica los veintiún relatos del corpus histórico y atribuye su narración al cacique Tangrutaya Mutsu, registrada en castellano durante trabajo etnográfico.",
    limitation:
      "La mediación del investigador, la traducción al castellano, el contexto colonial de la disciplina y la voz de un solo narrador impiden tratar el corpus como inventario total o inmutable del pueblo Ette.",
  }),
  rocha2010: source({
    title:
      "El sol babea jugo de piña: antología de las literaturas indígenas del Atlántico, el Pacífico y la Serranía del Perijá",
    author: "Miguel Rocha Vivas, compilador; Ministerio de Cultura",
    year: 2010,
    type: "antología literaria indígena de fuente declarada",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/3/",
    summary:
      "Reedita y contextualiza literatura Ette dentro de una antología nacional, identifica las traducciones y remite a las fuentes etnográficas usadas.",
    limitation:
      "Es una compilación y no un nuevo registro oral; reproduce materiales anteriores y no vuelve independientes sus versiones.",
  }),
  mincultura2024: source({
    title:
      "Los Ette Ennaka, un pueblo que resiste y conserva sus tradiciones a pesar de siglos de violencia",
    author: "Ministerio de las Culturas, las Artes y los Saberes",
    year: 2024,
    type: "reportaje institucional con voces comunitarias",
    url: "https://mincultura.gov.co/noticias/Paginas/los-ette-ennaka-un-pueblo-que-resiste-y-conserva-sus-tradiciones-a-pesar-de-siglos-de-violencia.aspx",
    summary:
      "Recoge voces de Luis Eduardo Granados y César Rozo, emplea el nombre Ette Ennaka y documenta el relato de Yaau, Numirinta y las dos mazorcas de maíz cariaco.",
    limitation:
      "El reportaje sintetiza la narración y no publica una transcripción completa en ette taara ni las circunstancias detalladas de su transmisión.",
  }),
  buitRago2020: source({
    title:
      "Teogonías de los pueblos indígenas en Colombia: ¿una erótica sin dominación?",
    author: "Andrea Paola Buitrago Rojas",
    year: 2020,
    type: "artículo académico de análisis comparado",
    url: "https://www.redalyc.org/journal/5155/515562961006/html/",
    summary:
      "Reproduce y analiza el relato de Yunari Kraari como Tierra Madre, las cinco tierras y los ciclos de destrucción y renovación Ette.",
    limitation:
      "Su propósito es filosófico y comparativo; las citas proceden de publicaciones previas y no constituyen por sí mismas un nuevo testimonio comunitario.",
  }),
  onic2023: source({
    title: "Documento madre: Leyes de origen de los pueblos indígenas",
    author: "Organización Nacional Indígena de Colombia y Sistema de Monitoreo Territorial",
    year: 2023,
    type: "compendio organizativo de leyes de origen",
    url: "https://smt-onic.com/media/pdf/DOCUMENTO_MADRE_Leyes_de_Origen_vf_SMT-ONIC.pdf",
    summary:
      "Incluye la ley de origen Ette Ennaka, la creación atribuida a Papá Grande y una síntesis de las regiones superpuestas del universo.",
    limitation:
      "Es una compilación nacional; parte de la sección Ette cita el corpus de 1945 y debe distinguirse de testimonios contemporáneos originales.",
  }),
  nino2008: source({
    title:
      "Ciclos de destrucción y regeneración: experiencia histórica entre los ette del norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2008,
    type: "artículo antropológico con trabajo etnográfico",
    url: "https://journals.openedition.org/histcrit/pdf/31620",
    summary:
      "Estudia cómo sueños, memoria histórica, Yunari y la quinta tierra articulan ciclos de destrucción, regeneración y acción ceremonial entre los Ette.",
    limitation:
      "Es una interpretación antropológica situada; no convierte todas las variantes, sueños o comentarios registrados en un único relato fijo.",
  }),
  uninorte2023: source({
    title:
      "Aspectos socio-históricos y farmacogenómica de los Chimilas Narakajmanta",
    author:
      "Enio Armando Hernández Agüirre, María Rosa Baldovino Díaz e Isis Arias Madera",
    year: 2023,
    type: "artículo académico con síntesis sociohistórica",
    url: "https://rcientificas.uninorte.edu.co/index.php/memorias/article/download/15385/214421447243?inline=1",
    summary:
      "Resume el Plan de Salvaguarda, el nombre Ette Ennaka, las cinco tierras, Yunari, Yaau, Numirinta y la creación de los Ette con dos mazorcas.",
    limitation:
      "La cosmogonía es contexto de un estudio biomédico y contiene interpretaciones especulativas de catástrofes que esta revisión no adopta.",
  }),

  // ——— Búsqueda profunda 2026-09-17 ———
  vargasBajo2025: source({
    title: "Bajo la responsabilidad humana: creación, conservación y destrucción del mundo entre los chibchas",
    author: "Juan Camilo Niño Vargas",
    year: 2025,
    type: "artículo académico (Revista Española de Antropología Americana 55-2)",
    url: "https://revistas.ucm.es/index.php/REAA/article/view/101388",
    summary:
      "Sitúa la creación ette dentro del patrón chibcha y precisa que el padre modeló la tierra como si fuera un cultivo y que los ette provienen del maíz que él sembró, tras la aparición y desaparición de humanidades anteriores.",
    limitation:
      "No comenta la versión del informante de 1945: no menciona la greda, el tigre ni los nombres de la primera pareja, y trabaja a escala comparativa.",
  }),
  vargastejido2014: source({
    title: "El tejido del cosmos: tiempo, espacio y arte de la hamaca entre los ette (chimila)",
    author: "Juan Camilo Niño Vargas",
    year: 2014,
    type: "artículo académico (Journal de la Société des Américanistes 100-1)",
    url: "https://journals.openedition.org/jsa/13726",
    summary:
      "Describe la tierra ette como plana, ancha y bipolar, delimitada intencionalmente por el padre creador, y explica que los ette se piensan gente nueva descendida sobre el fango que dejaron los cataclismos.",
    limitation:
      "Es una cosmología contemporánea reconstruida en campo, no una glosa del cuento de 1945.",
  }),
  reichelDolmatoffEtnografia1946: source({
    title: "Etnografía chimila",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1946,
    type: "monografía (Boletín de Arqueología II-2, Servicio Arqueológico Nacional)",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/241",
    summary:
      "Volumen hermano de los mitos de 1945, que documenta la creencia de que los médicos llevan doble vida convirtiéndose en tigres y tras su muerte se manifiestan como esos animales, y sitúa al grupo en El Difícil, La Peña, San Ángel y Monterrubio.",
    limitation:
      "No reproduce ni comenta el relato de la creación: aporta el contexto material y las creencias sobre el tigre.",
  }),
  vargasdivision2020: source({
    title: "La división cósmica de las labores terrenales: interacción entre humanos y no humanos en los campos de cultivo ette",
    author: "Juan Camilo Niño Vargas",
    year: 2020,
    type: "artículo académico (Tabula Rasa 36)",
    url: "https://www.revistatabularasa.org/numero36/la-division-cosmica-de-las-labores-terrenales-interaccion-entre-humanos-y-no-humanos-en-los-campos-de-cultivo-ette/",
    summary:
      "Presenta a los progenitores míticos ette como el orden suprahumano y refiere cómo las deidades, hartas de la violencia de los pueblos antiguos, los convirtieron en animales y purificaron la tierra con incendios e inundaciones.",
    limitation:
      "Su foco es la roza y el cultivo: el origen del mundo aparece de pasada, sin la greda ni el tigre primordial.",
  }),
  vargastravesia2013: source({
    title: "La travesía de la joven: un mito astral de los ette del norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2013,
    type: "artículo académico (Estudios de Lingüística Chibcha XXXII, Universidad de Costa Rica)",
    url: "https://archivo.revistas.ucr.ac.cr/2/index.php/chibcha/article/view/17593",
    summary:
      "Establece que sólo existen tres trabajos publicados sobre mitología ette, los veintiún relatos de 1945, las veinticuatro narraciones del propio autor y una compilación del pueblo ette de 2013, y advierte que esta última reabsorbió cuentos retransmitidos por misioneros en la escuela.",
    limitation:
      "No analiza el relato de la creación: sirve para fechar y calibrar la cadena documental.",
  }),
  mauriOfrendas2020: source({
    title: "Ofrendas, intercambios y otros modos de relación en las socio-cosmologías indígenas contemporáneas del área istmo-colombiana",
    author: "Mònica Martínez Mauri y Ernst Halbmayer",
    year: 2020,
    type: "artículo académico (Tabula Rasa 36)",
    url: "https://www.redalyc.org/journal/396/39664893002/",
    summary:
      "Presenta a los padres creadores ette como el orden suprahumano y celeste, y liga el cielo con el calendario terrestre: cuando las estrellas aparecen por oriente a mediados de junio, los ette celebran la llegada de las mazorcas verdes.",
    limitation:
      "Es la introducción a un dossier comparativo: los ette son un caso entre varios y no se tratan los sexos de los astros.",
  }),
  sinningResistencia2009: source({
    title: "Resistencia chimila: ni aniquilados, ni vencidos",
    author: "Edgar Rey Sinning",
    year: 2009,
    type: "artículo académico (Palobra 10, Universidad de Cartagena; ficha en Dialnet)",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=3156319",
    summary:
      "Delimita el territorio chimila anterior a la ocupación española entre las estribaciones de la Sierra Nevada, el brazo de Mompox y la ciénaga de Zapatosa, y entre la ribera derecha del Magdalena y los ríos Ariguaní y Cesar: la geografía real que recorren las flechas.",
    limitation:
      "Es historia territorial y de resistencia, no exégesis del mito.",
  }),
  zuluagaEntre2015: source({
    title: "Entre la inconstancia y la incuria: la experiencia fallida de los pueblos de misión chimilas a finales del siglo XVIII en las llanuras del Caribe",
    author: "Marcela Quiroga Zuluaga",
    year: 2015,
    type: "artículo académico (Historia Caribe 10-26, Universidad del Atlántico)",
    url: "https://revistas.uniatlantico.edu.co/index.php/Historia_Caribe/article/view/1341",
    summary:
      "Examina la formación de los pueblos de misión tras la derrota militar de finales del siglo XVIII en la gobernación de Santa Marta y la lee como el punto de quiebre del largo enfrentamiento entre este pueblo y los colonizadores.",
    limitation:
      "Es historia colonial documental: nada dice de las guerras que narra el relato, y llega siglo y medio antes del testimonio.",
  }),
  vargasinmediaciones2010: source({
    title: "En las inmediaciones del fin del mundo: los encuentros de Gustaf Bolinder y los chimilas en 1915 y 1920",
    author: "Juan Camilo Niño Vargas",
    year: 2010,
    type: "artículo académico (Antípoda 11, Universidad de los Andes)",
    url: "https://revistas.uniandes.edu.co/index.php/antipoda/article/view/1835",
    summary:
      "Muestra que la imagen del chimila desintegrado y en extinción que dejaron los etnógrafos tempranos resulta de prácticas indígenas de aislamiento y rechazo del contacto, lo que ayuda a leer con cautela la enemistad que el relato atribuye a los pueblos vecinos.",
    limitation:
      "No aborda a los pueblos que el relato nombra: su tema son los encuentros con un etnógrafo sueco y la construcción del relato del declive.",
  }),
  bolinderultimos1987: source({
    title: "Los últimos indígenas chimilas",
    author: "Gustaf Bolinder, traducción de Sonia Goggel",
    year: 1987,
    type: "artículo en revista de museo (Boletín Museo del Oro 18, Banco de la República)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7213",
    summary:
      "Traduce el relato de las expediciones de 1914 a 1920 en que el autor tuvo un corto encuentro con los chimila de los bosques del río Ariguaní, un testimonio de primera mano tres décadas anterior al corpus de 1945.",
    limitation:
      "El texto original es de 1924 y mira a los chimila con las categorías de su época; la página ofrece resumen y descarga, no el relato en línea.",
  }),
  vargascasa2024: source({
    title: "La casa ette: humanidad y arquitectura en el norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2024,
    type: "artículo académico (Indiana 41-1, Instituto Ibero-Americano de Berlín)",
    url: "https://journals.iai.spk-berlin.de/index.php/indiana/article/view/3112",
    summary:
      "Reconstruye las grandes casas ette de los siglos XVIII y XIX como edificaciones de planta redonda y forma cónica levantadas alrededor de un poste central, con una base circular de dieciocho metros según la mejor descripción del siglo XIX, y sitúa la vivienda como modelo del cosmos.",
    limitation:
      "Trata casas reales y su lectura antropomorfa, no el relato del diluvio; no menciona refugios subterráneos.",
  }),
  vargasmotivo2022: source({
    title: "El motivo del gran árbol en las tradiciones chibchas",
    author: "Juan Camilo Niño Vargas",
    year: 2022,
    type: "artículo académico (Literatura: teoría, historia, crítica 24-2, Universidad Nacional de Colombia)",
    url: "https://revistas.unal.edu.co/index.php/lthc/article/view/102090",
    summary:
      "Recoge una versión ette contemporánea del mito: una ceiba maravillosa se alzaba sobre el territorio con cientos de mazorcas colgando, el dios anima a los humanos a abatirla, la tarea exige muchos días sin descanso y al caer el tronco un personaje oscuro roba las mejores mazorcas y deja granos de segunda, con lo que se explican el origen del maíz, la dureza del trabajo agrícola y las malas cosechas.",
    limitation:
      "Es una versión reciente distinta de la de 1945, donde no hay dios ni robo: debe presentarse como otra versión y no como glosa del texto del corpus.",
  }),
  villamilMemorias2020: source({
    title: "Memorias de oficio: tejeduría ette ennaka",
    author: "Camilo Ernesto Rodríguez Villamil, Sandra Milena Gutiérrez González y Luis Aldemar Rodríguez Cifuentes, Artesanías de Colombia",
    year: 2020,
    type: "documento institucional (repositorio CENDAR, Artesanías de Colombia)",
    url: "https://repositorio.artesaniasdecolombia.com.co/handle/001/5127",
    summary:
      "Registro oficial del oficio ette que afirma que el algodón y la fibra de majagua fueron esenciales en su desarrollo artesanal y que con ellos se hicieron históricamente mochilas, chinchorros y prendas de vestir.",
    limitation:
      "Es un documento de fomento artesanal, sin fuentes históricas propias ni referencia a la tradición oral.",
  }),
  vargasanatomia2016: source({
    title: "La anatomía de la casa: humanización y ciclo vital de la vivienda ette (chimila)",
    author: "Juan Camilo Niño Vargas",
    year: 2016,
    type: "artículo académico (Dearq 19, Universidad de los Andes)",
    url: "https://revistas.uniandes.edu.co/index.php/dearq/article/view/3309",
    summary:
      "Explica qué ocurre con la casa cuando muere quien la habita: el fallecimiento de uno de sus dueños va seguido de su abandono, hasta el punto de que una sola palabra nombra la muerte de la persona y la de la vivienda.",
    limitation:
      "Es etnografía contemporánea sobre arquitectura y no menciona este relato ni su desenlace.",
  }),
  vargasSueno2007: source({
    title: "Sueño, realidad y conocimiento: noción del sueño y fenomenología del soñar entre los ette del norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2007,
    type: "artículo académico (Antípoda 5)",
    url: "https://revistas.uniandes.edu.co/index.php/antipoda/article/view/1769",
    summary:
      "Explica que la persona ette se compone de cuerpo y de un principio inmaterial llamado too, que sobrevive a la muerte y actúa con autonomía fuera del cuerpo, y que por eso se teme a los componentes anímicos de los muertos que no fueron sepultados adecuadamente.",
    limitation:
      "Es etnografía de los resguardos actuales, no un comentario al corpus de 1945: no menciona una casa de muertos en el monte ni una lengua propia de los difuntos.",
  }),
  angelChimilas2002: source({
    title: "Chimilas y españoles: el manejo político de los estereotipos raciales en la sociedad neogranadina del siglo XVIII",
    author: "Marta Clemencia Herrera Ángel",
    year: 2002,
    type: "artículo académico (Memoria y Sociedad 7-13, Universidad Javeriana)",
    url: "https://revistas.javeriana.edu.co/index.php/memoysociedad/article/view/7771",
    summary:
      "Analiza cómo se construyeron y usaron políticamente los estereotipos raciales sobre los chimila en la Nueva Granada del siglo XVIII, tanto para reforzar la dominación como en clave de resistencia: la base para leer el título heredado del cuento como etiqueta colonial y no como descripción cultural.",
    limitation:
      "Es historia del discurso colonial y no dice nada sobre este cuento ni sobre el corpus de 1945; la galerada en línea es un escaneo sin capa de texto, de modo que sólo se verificaron título, autora y resumen.",
  }),
  vargaslegado2019: source({
    title: "El legado del último kraanti: obituario al líder ette Samuel Sánchez",
    author: "Juan Camilo Niño Vargas",
    year: 2019,
    type: "obituario etnográfico (Revista Colombiana de Antropología 55-1, ICANH)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/594",
    summary:
      "Explica qué es el cacique que los dos homicidas temen: kraanti es el título de los ancianos a quienes corresponde mantener en equilibrio el conjunto cósmico, término que los ette traducen como cacique pero cuya etimología remite a sabiduría, ancestralidad, árbol primordial y columna universal.",
    limitation:
      "Es un obituario sobre una autoridad contemporánea: no describe funciones judiciales ni castigos, así que no autoriza a decir qué habría hecho el cacique del relato.",
  }),
  vargasOoyoriyasa2007: source({
    title: "Ooyoriyasa: cosmología e interpretación onírica entre los ette del norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2007,
    type: "monografía etnográfica (Universidad de los Andes)",
    url: "https://cienciassociales.uniandes.edu.co/publicaciones/ooyoriyasa-comologia-e-interpretacion-onirica-entre-los-ette-del-norte-de-colombia/",
    summary:
      "Es la monografía dedicada íntegramente a cómo los ette conciben el universo y cómo interpretan colectivamente sus sueños, el único trabajo extenso que permite leer este relato como un caso de interpretación onírica fallida y no como una fábula moral.",
    limitation:
      "Es un libro impreso: sólo su ficha editorial está en línea, y no permite comprobar si comenta este relato.",
  }),
  toroentranas2013: source({
    title: "En las entrañas del caimán: la simbología del caimán en la arqueología",
    author: "Arturo Cifuentes Toro",
    year: 2013,
    type: "artículo académico (Entornos 26(2), Universidad Surcolombiana; PDF en Dialnet)",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=6937028",
    summary:
      "Resume este relato paso a paso citando la página 16 de la edición de 1945, con el sueño del huevo en la playa, la burla del hermano, el hambre en el vientre, la flecha que tranca las mandíbulas y el regreso con las presas, y lo lee junto a la interpretación que el propio recopilador hizo después del hombre tragado por un monstruo acuático que vuelve con saber.",
    limitation:
      "Es un artículo sobre iconografía de San Agustín que usa el mito como apoyo comparativo y lo encuadra en arquetipos ajenos a los ette.",
  }),
  roldanTortugas2024: source({
    title: "Tortugas continentales en el registro arqueológico y etnozoológico del Caribe colombiano: una reflexión sobre el uso sustentable como recurso alimenticio",
    author: "Juan Salvador Mendoza Roldán",
    year: 2024,
    type: "artículo académico (Jangwa Pana 23-3, Universidad del Magdalena)",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/view/5778",
    summary:
      "Dice expresamente que para los ette estos animales representan seres preliminares al hombre que habitan el inframundo, y que el morrocoy en concreto hace parte de un mito de este pueblo sobre el origen de los animales del monte y la cacería, dentro de un repaso del morrocoy como alimento y motivo mitológico en el Caribe.",
    limitation:
      "Es una síntesis de dos frases apoyada en bibliografía ajena: no transcribe el relato ni discute sus episodios, ni la flecha, ni la cola, ni el agua.",
  }),
  vargasOniromancia2006: source({
    title: "Oniromancia y perspectiva entre los ette del norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2006,
    type: "artículo académico (Maguaré 20, Universidad Nacional de Colombia)",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/10635",
    summary:
      "Sostiene que entre los ette se piensa que los animales son gente y que cada especie se ve a sí misma como humana, con su madriguera por casa y sus depredadores por depredadores de los humanos: es la premisa exacta de que el morrocoyo fuera antes gente y pudiera usar arco y flecha.",
    limitation:
      "Trabaja el perspectivismo y la interpretación de sueños en general y no menciona al morrocoyo ni este relato en particular.",
  }),
  colombiaCaracterizacion2010: source({
    title: "Caracterización del pueblo Ette Ennaka (Chimila)",
    author: "Ministerio de Cultura de Colombia, Dirección de Poblaciones",
    year: 2010,
    type: "documento oficial de caracterización",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/noticias/Documents/Caracterizaci%C3%B3n%20del%20pueblo%20Ette%20Ennaka%20(Chimila).pdf",
    summary:
      "Documento oficial que presenta a los ette ennaka como una historia de resistencia y ensoñación y reproduce en verso un relato sobre Yaau, del que dice que siempre han estado dos, Yaau ette y Yaau waacha, lo que explica la bifurcación entre ette y no indígenas y sitúa a Yaau como la entidad creadora con la que se conversa en sueños y con tabaco.",
    limitation:
      "No menciona a Numirinta, ni la laguna de San Ángel, ni las mazorcas de maíz cariaco: aporta a Yaau como creador, no el episodio de la pareja.",
  }),
  atencionMujeres2024: source({
    title: "Mujeres indígenas Ette Ennaka superan las afectaciones del conflicto a través del mandato de su diosa Numirinta",
    author: "Unidad para la Atención y Reparación Integral a las Víctimas",
    year: 2024,
    type: "nota institucional de entidad estatal",
    url: "https://www.unidadvictimas.gov.co/mujeres-indigenas-ette-ennaka-superan-afectaciones-conflicto-mandato-diosa-numirinta/",
    summary:
      "Documenta el papel vigente de Numirinta en la vida ette ennaka: la diosa es la primera mujer en obtener el mandato y es la encargada de dar conocimiento a las mujeres del pueblo, dentro de un proceso de reparación colectiva.",
    limitation:
      "No narra la creación con las mazorcas ni cita fuentes: es una nota de gestión institucional sin autoría personal, útil sólo como testimonio de la vigencia contemporánea de la figura.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  thurnAmong1883: source({
    title: "Among the Indians of Guiana: being sketches chiefly anthropologic from the interior of British Guiana",
    author: "Everard F. im Thurn",
    year: 1883,
    type: "monografía etnográfica (Kegan Paul, Trench & Co., Londres; ejemplar de dominio público en Internet Archive)",
    url: "https://archive.org/details/amongindiansgui00thurgoog",
    summary:
      "Es la fuente original del relato karib que el campo de similitudes ya contrapone a este cuento: en el capítulo de folclore (pp. 379-380) cuenta que al llegar del cielo la yuca, el plátano y todas las plantas útiles crecían en un solo árbol que descubrió una danta, que los karib lo derribaron tras muchos meses con hachas de piedra y que cada hombre se llevó pedazos para sembrarlos en su propio campo, «so from that day each Indian has had his own cassava-field». Añade que los akawoio cuentan lo mismo con el acure como descubridor.",
    limitation:
      "Bibliografía de la Guayana británica (hoy Guyana), fuera de Colombia, y en inglés de 1883; no menciona a los chimila ni el algodón: sostiene sólo el contraste ya escrito en la ficha entre un reparto de plantas hacia adentro del pueblo y una semilla que cruza una enemistad. El recopilador de 1945 la cita como de 1878; la edición que existe es de 1883.",
  }),
  ehrenreichMythen1905: source({
    title: "Die Mythen und Legenden der südamerikanischen Urvölker und ihre Beziehungen zu denen Nordamerikas und der alten Welt",
    author: "Paul Ehrenreich",
    year: 1905,
    type: "monografía de mitología comparada (suplemento de la Zeitschrift für Ethnologie 37, A. Asher & Co., Berlín; dominio público en Internet Archive)",
    url: "https://archive.org/details/diemythenundleg00ehregoog",
    summary:
      "Es la obra de la que el recopilador de 1945 toma el paralelo que la ficha repite: en el apartado sobre las analogías con Polinesia califica de «una de las más interesantes coincidencias» la del mito de Rata de Aitutaki (según Gill) con el relato de Im Thurn sobre un chamán de Guayana que se mete en las fauces de un omar, los dos del tipo de Jonás, y afirma que en ambos el héroe usa un trozo de su lanza como tranca para mantener abierta la boca del monstruo y con el otro hace un taladro de fuego.",
    limitation:
      "En alemán y de 1905; no conoce el cuento chimila. Su lectura del texto de Im Thurn no se sostiene al cotejarlo (véase esa fuente): la tranca en la jeta sólo está documentada aquí para el mito polinesio.",
  }),
  gillMyths1876: source({
    title: "Myths and Songs from the South Pacific",
    author: "William Wyatt Gill",
    year: 1876,
    type: "compilación misionera de mitos de las islas Cook (Henry S. King & Co., Londres; dominio público en Internet Archive)",
    url: "https://archive.org/details/mythssongsfromso00gill",
    summary:
      "Es la fuente primaria del «mito polinésico de Ratham de Aututaki» que la ficha cita de segunda mano: «Rata's canoe. A legend from Aitutaki» (pp. 142-149). Cuando una ballena abre la boca con una mandíbula bajo la canoa y otra encima, Nganaoa parte en dos su lanza larga y mete las dos estacas en la boca del animal para que no pueda cerrarla, salta adentro, encuentra vivos a sus padres tragados mientras pescaban, convierte una de las estacas en palos de fuego, quema la grasa del estómago y los tres salen por la boca abierta cuando la ballena encalla. El propio Gill anota que los isleños lo leían como una versión deformada de Jonás.",
    limitation:
      "Oceanía, no América; el paralelo está ya nombrado en similitudes. Corrige un detalle de la ficha: quien atranca las fauces no es Rata sino su acompañante Nganaoa, y lo que se atranca es una ballena, no un caimán.",
  }),
  rothInquiry1915: source({
    title: "An Inquiry into the Animism and Folk-lore of the Guiana Indians",
    author: "Walter E. Roth",
    year: 1915,
    type: "monografía etnográfica (30th Annual Report of the Bureau of American Ethnology, Washington; dominio público en Internet Archive)",
    url: "https://archive.org/details/cu31924104074665",
    summary:
      "Es la página que el comentario de 1945 cita para los akawoio y los warao (p. 244): reproduce el omar de Im Thurn y añade un relato warao del río Moruca, «The Piai in the Water Spirit's Belly», en que el espíritu de agua Ho-arinni se traga al piache con su canoa, leña y fuego; en la oscuridad del vientre enciende fuego y clava postes en la barriga del monstruo hasta que, de tanto dolor, sale a boquear a la superficie y el piache se escapa por entre las fauces; llega a su casa diciendo que viene sólo a mostrarse y muere poco después.",
    limitation:
      "Guayana británica, en inglés; no menciona a los chimila. El paralelo es de estructura —hombre tragado en el río, que hiere al monstruo desde dentro, escapa por la boca y vuelve enfermo— y no incluye aprendizaje de caza: donde el ette se recupera en el monte y vuelve gordo, el piache warao muere.",
  }),
  reverolHacer2017: source({
    title: "«Hacer los sueños». Una perspectiva wayuu",
    author: "Carmen Laura Paz Reverol",
    year: 2017,
    type: "artículo académico (EntreDiversidades 9, Universidad Autónoma de Chiapas)",
    url: "https://entrediversidades.unach.mx/index.php/entrediversidades/article/view/18",
    summary:
      "Es la fuente del paralelo wayuu que ya nombra el campo de similitudes: define a Lapü como la deidad que transmite mensajes a través de los sueños y pronostica sucesos de salud, vida y muerte, describe al aa'in que deambula mientras se duerme y recibe mensajes, recoge el testimonio de un sueño que llega «como si fuera un aviso» de algo malo, y cierra con la costumbre de preguntar «¿cómo estuvo tu sueño?» y de «escuchar y hacer los sueños».",
    limitation:
      "Trata a los wayuu, en buena parte del lado venezolano de la Guajira, y no menciona a los ette ni este cuento: sólo sostiene el contraste que la ficha ya traza entre un sueño con deidad que obliga y uno sin deidad que empujan los compañeros.",
  }),
  teresaindios1959: source({
    title: "Los indios catíos, los indios cunas: ensayo etnográfico de dos razas de indios de la América española",
    author: "Fray Severino de Santa Teresa, O.C.D.",
    year: 1959,
    type: "monografía misionera (Autores Antioqueños 7, Imprenta Departamental, Medellín; reedición de «Creencias, ritos, usos y costumbres de los indios catíos», 1924; ejemplar digitalizado por Princeton en Internet Archive)",
    url: "https://archive.org/details/losindioscatiosl00seve",
    summary:
      "Es la fuente del relato katío que el campo de similitudes ya empareja con este cuento (pp. 23-25): Caragabí no tiene agua, la paloma y el pájaro mosca descubren a Gentzerá bañándose, y según «los más» el agua está en la concavidad de un árbol enorme y sagrado, el Genené; Caragabí y su gente lo cortan con hachas de piedra, el árbol amanece sin las incisiones del día anterior, trabajan de noche con la luz que él saca frotándose las manos, los bejucos lo sostienen hasta que una ardita, Chidima, los desenreda, y al caer brotan las aguas e inundan la tierra durante un año.",
    limitation:
      "Es la mirada de un misionero carmelita, con comentarios burlones sobre el dios katío, y el texto de 1959 no coincide literalmente con la cita que da el comentario de 1945 (allí hachas de hierro y el tronco hecho mar; aquí hachas de piedra y un diluvio de un año). No menciona a los ette: sostiene sólo el paralelo ya escrito, con el agua dentro de la madera y no debajo del palo.",
  }),
  historicaCaragabi: source({
    title: "Caragabi · Dachi Chiuu, nuestra lucha: la historia de la comunidad embera katío en Bogotá",
    author: "Centro Nacional de Memoria Histórica, con la comunidad emberá katío del Alto Andágueda (resguardo Tahamí) en Bogotá",
    type: "micrositio institucional de una iniciativa de memoria histórica, en voz comunitaria",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/caragabi/",
    summary:
      "Versión contemporánea, contada en primera persona plural por emberá katío desplazados, del mismo mito que la ficha cita del volumen de 1945: Gentserá entra al gran árbol Jenené por una puerta invisible y dentro hay un pozo de aguas azules; las hachas, primero grandes y luego de hierro, no bastan porque el árbol sana cada noche; Caragabí ilumina el bosque para trabajar día y noche, monos y ardillas lo desatan de los bejucos y, al caer, del tronco salen los mares Atlántico y Pacífico, de las ramas grandes el Atrato y el San Juan y de las pequeñas los arroyos, ciénagas y lagos.",
    limitation:
      "Es un texto de divulgación sin fecha visible ni narrador individual identificado, y no menciona a los ette. Confirma que el detalle «el tronco es el mar y los brazos los ríos» sigue vivo en la tradición katío, y con ello el contraste que la ficha traza con el palo pequeño que sólo tapa el agua.",
  }),
  reichelDolmatofflengua1947: source({
    title: "La lengua chimila",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1947,
    type: "estudio lingüístico con gramática y vocabulario (Journal de la Société des Américanistes, nouvelle série XXXVI, pp. 15-50; edición digital Persée)",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1947_num_36_1_2358",
    summary:
      "Es el vocabulario levantado en el mismo trabajo de campo de 1944, y nombra en ette taara el atavío con que los hijos reconocen al padre muerto. En la lista de casa, utensilios y armas (pp. 31-32) registra el arco, la flecha, la macana, el penacho de plumas, el collar, el vestido de hombre y la faja de los guerreros, junto al achiotero; en la fauna, la guacamaya (p. 35); y el verbo «morir», yút:ka- («está muerto», p. 46). Anota además que «cacique», ta-ngrúta-ya, es una de las pocas palabras que marcan género posponiendo «hombre» o «mujer» (p. 16): existe la forma femenina, «cacica», que la Etnografía de 1946 no menciona al reservar la corona al cacique.",
    limitation:
      "No menciona el cuento ni la muerte de la mujer: aporta el léxico de los objetos que el relato enumera, del mismo autor y la misma estancia, por lo que no es confirmación independiente. La lista no trae una entrada para «corona» ni para las ligaduras de hilo; sólo «penacho de plumas». De paso deja ver que ta-ngrúta-ya, que la Historia publicada trata como parte del nombre del narrador («Tangrutaya Mutsu»), es en el vocabulario del mismo recopilador la palabra para «cacique» (pp. 16, 25, 45-47).",
  }),
  kochGrunbergZwei1909: source({
    title: "Zwei Jahre unter den Indianern: Reisen in Nordwest-Brasilien 1903/1905, Band 2",
    author: "Theodor Koch-Grünberg",
    year: 1909,
    type: "relato de viaje etnográfico (Ernst Wasmuth, Berlín; copia digital en Internet Archive)",
    url: "https://archive.org/details/zwei-jahre-unter-den-indianern-t-koch-grunberg-band-2-1909-45000030641",
    summary:
      "Es la fuente del primer paralelo que la ficha nombra en Similitudes, el de los kobeua (cubeo), tomado de la Etnografía chimila de 1946, que la cita como «82, 317». En la p. 156 del tomo 2 Koch-Grünberg anota, entre los kobeua del río Querary, que el chamán viejo se vuelve jaguar de tiempo en tiempo, va al monte, mata y come venados, agutíes y también gente, y regresa hombre; que su alma, al morir, vaga para siempre como «jaguar muy malo»; y que en kobeua y la mayoría de las lenguas tukano jaguar y chamán se nombran con la misma palabra (yaui, yai). Es el tigre-que-es-otra-cosa contra el que la ficha mide al tigre chimila, que no es nadie transformado y simplemente habla.",
    limitation:
      "Paralelo tukano oriental del Vaupés en alemán, sin relación con los chimila ni con la idea de que los animales hablen; sólo sostiene el contraste que Similitudes ya plantea. Reichel-Dolmatoff cita la 2.ª edición de 1923; en esta de 1909 el pasaje está en el tomo 2, p. 156.",
  }),
  wavrinFolklore1932: source({
    title: "Folk-lore du Haut-Amazone",
    author: "Marquis Robert de Wavrin",
    year: 1932,
    type: "artículo etnográfico (Journal de la Société des Américanistes, nouvelle série XXIV-1, pp. 121-146; edición digital Persée)",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1932_num_24_1_1847",
    summary:
      "Es la obra exacta de la que Reichel-Dolmatoff sacó, en su nota al cuento de los brujos de 1945, el paralelo huitoto que la ficha cita en Similitudes. En la sección «Croyances des Witotos» (pp. 135-136) se lee que después de su muerte el alma de los brujos sigue haciendo el mal y que el tigre y la boa son brujos metamorfoseados, al punto que algunos imploran al jaguar por tenerlo invulnerable «puisqu'il est sorcier»; y en la p. 140, en la misma región del Putumayo, que tras su muerte los brujos se metamorfosean en tigres y sólo el corazón sigue vivo, por lo que no se los puede matar.",
    limitation:
      "Es la fuente del paralelo comparativo, no del relato chimila: habla de pueblos del Putumayo y del alto Amazonas (Witoto y vecinos), recogido por un viajero en francés y con la mirada de 1932. Reichel-Dolmatoff la cita como «34. 133, 136, 142»; en la edición digital las frases están en las pp. 135-136 y 140, y la atribución de la p. 140 a los miraña es de Reichel, no se lee en la página misma.",
  }),
  simonNoticias1892: source({
    title: "Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales, segunda parte (Cuarta noticia)",
    author: "Fray Pedro Simón",
    year: 1892,
    type: "crónica colonial (1627), edición de Medardo Rivas, Bogotá; escaneo con texto en Internet Archive",
    url: "https://archive.org/details/tierrafirmeindias02simbrich",
    summary:
      "En la Cuarta noticia, capítulos XV a XVII (pp. 325-329), cuenta cómo el Ubaque mata al hermano del zipa Nemequene y, temiendo su indignación, le envía la verdad del caso con mensajeros y regalos; el zipa exige que venga en persona, rehúsa el presente salvo dos mantas «por no tomar del acusado cosa que turbase la claridad de la justicia», manda averiguar y tras seis meses de pesquisas lo deja volver libre. Es el Nemequene juez que la ficha opone en «similitudes»: allí un homicidio se lleva ante la autoridad y se investiga; aquí dos homicidas borran el cuerpo para que el cacique nunca lo sepa.",
    limitation:
      "Es una crónica franciscana muisca de 1627, no ette, escrita con la mirada evangelizadora de su autor; sirve sólo al contraste que la ficha declara y no dice nada de los chimila. La obra ya está en el pool del módulo muisca con esta misma URL, no en el de chimila.",
  }),
  ortegaEntre2015: source({
    title: "Entre ríos, llanuras y selva: aspectos culturales de las poblaciones nativas de la provincia de Santa Marta en la segunda mitad del XVIII",
    author: "Antonino Vidal Ortega y David J. Luquetta Cediel",
    year: 2015,
    type: "artículo académico (Investigación y Desarrollo 23-1, Universidad del Norte; texto completo en SciELO Colombia)",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-32612015000100002",
    summary:
      "Lee los diarios de guerra de 1765 y 1768 del Archivo General de la Nación contra los chimila y recoge lo que dicen de su trato con la muerte: la expedición de 1765 halló dos casas dejadas desde hacía tiempo y, en una, un hoyo como de sepultura fresca con dos calaveras, ropas y macanas; otro testimonio describe a una mujer muerta a flechazos junto a la que dejaron una totuma de chicha y sonajas «al uso bárbaro antiguo, practicado en la sepultura de los indios». Es el antecedente documental, dos siglos anterior, de la casa convertida en tumba y abandonada que Reichel-Dolmatoff describe en 1946 y que el relato desplaza al monte.",
    limitation:
      "Es historia colonial escrita desde los diarios de las expediciones punitivas, con su vocabulario de «bárbaros»; no conoce ni comenta el relato. SciELO Colombia sólo publica por http, y el DOI que imprime la página (10.14482/indes.22.2.6615) resuelve a otro artículo de la revista. Una versión anterior de los mismos autores y el mismo tema en Diálogos (Costa Rica, 2014) figura como «Retractado» sin que la página diga el motivo: se cita esta de 2015, que no lleva esa marca.",
  }),
  finolMito2007: source({
    title: "Mito y cultura guajira",
    author: "José Enrique Finol",
    year: 2007,
    type: "libro de semiótica del mito (2.ª edición, Universidad del Zulia), PDF del autor",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf",
    summary:
      "Su capítulo VI publica y analiza los mitos «Viaje al más allá» y «La historia de Ulépala», con una secuencia dedicada a Jepira, la tierra de los guajiros muertos: el paralelo wayuu del vivo que cruza al dominio de los muertos que la ficha nombra en «similitudes».",
    limitation:
      "Es bibliografía venezolana sobre los wayuu, otro pueblo y otra familia lingüística; se cita como contraste, no como filiación, y no menciona a los ette ni este relato.",
  }),
};

export function pickChimilaSources(...entries) {
  const seen = new Set();
  const picked = [];
  for (const entry of entries) {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = chimilaSources[key];
    if (!selected) throw new Error(`Fuente Ette Ennaka desconocida: ${key}`);
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

