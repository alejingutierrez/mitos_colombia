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

