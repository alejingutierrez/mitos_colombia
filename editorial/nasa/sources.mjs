function source({
  title,
  author,
  year,
  originalYear,
  type,
  url,
  summary,
  limitation,
}) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    ...(originalYear ? { originalYear } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const nasaSources = {
  bernal1953: source({
    title: "Mitología y cuentos de la parcialidad de Calderas, Tierradentro",
    author: "Segundo Bernal Villa",
    year: 1953,
    type: "recolección etnográfica primaria",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/download/1898/1439/6287",
    summary:
      "Publica veintiséis relatos recogidos en Calderas con nombres de informantes, intérpretes y variantes diferenciadas.",
    limitation:
      "El registro pasó por traducción al castellano y por categorías antropológicas de 1953; no conserva el nasa yuwe de las narraciones.",
  }),
  villa1993: source({
    title: "Mitos y leyendas de Colombia, tomo I",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "compilación crítica de literatura oral",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=58546",
    summary:
      "Reproduce el corpus de Bernal, acredita su procedencia y advierte que contiene varias versiones y modalidades de una misma narración.",
    limitation:
      "No es un testimonio independiente: para los cuentos de Calderas depende del artículo de Bernal de 1953.",
  }),
  minculturaNasa: source({
    title: "Lenguas nasa yuwe y namtrik",
    author: "Ministerio de las Culturas, las Artes y los Saberes de Colombia",
    year: 2024,
    type: "caracterización lingüística y cultural oficial",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Documents/Biblioteca-Lenguas-Vivas-De-Colombia/VOL.%20IV%20TOMO%20I%20-%20Lenguas%20nasa%20yuwa%20y%20namtrik.pdf",
    summary:
      "Describe lengua, territorio, organización, héroes, trabajo de la tierra y cosmogonía desde bibliografía y procesos educativos contemporáneos.",
    limitation:
      "Es una síntesis institucional amplia y no una edición completa de cada relato de Calderas.",
  }),
  acinNasa: source({
    title: "Somos el pueblo nasa de la Çxhab Wala Kiwe",
    author:
      "Asociación de Cabildos Indígenas del Norte del Cauca (ACIN, Çxhab Wala Kiwe)",
    type: "perfil de una organización nasa",
    url: "https://nasaacin.org/territorio-autonomo/somos-el-pueblo-nasa-de-la-cxhab-wala-kiwe/",
    summary:
      "Perfil del pueblo nasa escrito por su propia organización: ley de origen, territorio, lengua nasa yuwe, cabildos y los tejidos de educación, salud, justicia y comunicación, con los hitos del proceso organizativo.",
    limitation:
      "Habla desde el norte del Cauca y no desde Tierradentro: vale como voz nasa organizativa general, no como fuente local del corpus de Calderas.",
  }),
  nasaCxhacxha: source({
    title:
      "Plan de Vida de la Asociación de Autoridades Ancestrales Indígenas Nasa Çxhãçxha",
    author:
      "Asociación de Autoridades Ancestrales Indígenas Nasa Çxhãçxha, Tierradentro",
    year: 2019,
    type: "plan de vida de una asociación de cabildos nasa",
    url: "https://tierradentro.co/la-asociacion/el-plan-de-vida/",
    summary:
      "Voz organizativa de los diecisiete resguardos nasa del municipio de Páez, en Tierradentro, que define su plan de vida como un proceso colectivo de reflexión y acción fundado en el pensamiento propio.",
    limitation:
      "Cubre el municipio de Páez, mientras que Calderas pertenece a Inzá: es la voz nasa más cercana al corpus, pero no la de su propio resguardo.",
  }),
  cricTerritory: source({
    title: "Territorio ancestral del pueblo Nasa entre el riesgo y la resistencia",
    author: "Consejo Regional Indígena del Cauca",
    year: 2010,
    type: "memoria territorial de organización indígena",
    url: "https://www.cric-colombia.org/portal/territorio-ancestral-del-pueblo-nasa-entre-el-riesgo-y-la-resistencia/",
    summary:
      "Sitúa Tierradentro como territorio ancestral Nasa y vincula memoria, autonomía, Juan Tama y defensa comunitaria.",
    limitation:
      "Es una intervención política y territorial contemporánea, no una transcripción de los relatos de 1953.",
  }),
  scieloCosmology: source({
    title: "Nidos de lengua y revitalización del nasa yuwe",
    author: "Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud",
    year: 2024,
    type: "investigación académica contemporánea",
    url: "https://www.scielo.org.co/scielo.php?pid=S1692-715X2024000200180&script=sci_arttext",
    summary:
      "Explica la relación entre lengua, territorio, señales, sueños, naturaleza y los tres espacios del mundo Nasa en procesos educativos actuales.",
    limitation:
      "Estudia revitalización lingüística y educativa; no establece una versión canónica de los cuentos de Calderas.",
  }),
  ferrari2022: source({
    title:
      "Palabrandar el mito: el relato fundacional nasa de Juan Tama en la versión oralitegráfica de Gustavo Yonda",
    author: "Simone Ferrari",
    year: 2022,
    type: "estudio académico de oralidad, escritura y arte visual Nasa",
    url: "https://www.orillas.net/orillas/index.php/orillas/article/download/445/450/1544",
    summary:
      "Compara versiones escritas de Juan Tama y estudia la obra bilingüe del diseñador Nasa Gustavo Yonda, construida con mayores de Tierradentro.",
    limitation:
      "Analiza mediaciones escritas y visuales contemporáneas; no reemplaza la escucha de una narración ritual situada.",
  }),
  unicaucaMemory: source({
    title:
      "Memoria narrativa y orden sociocultural en la etnoliteratura de Tierradentro",
    author: "Universidad del Cauca",
    type: "investigación académica sobre memoria narrativa Nasa",
    url: "https://repositorio.unicauca.edu.co/bitstream/handle/123456789/3514/Memoria%20narrativa%20y%20orden%20sociocultural%20en%20la%20etnoliteratura%20de%20Tierradentro_.pdf?isAllowed=y&sequence=1",
    summary:
      "Relaciona relatos de origen, agua, armonía, territorio y memoria cultural en Tierradentro desde fuentes Nasa y trabajo académico.",
    limitation:
      "Es una interpretación universitaria reciente y no una fuente primaria para todos los episodios del corpus.",
  }),
  wilches2005: source({
    title: "Proyecto Nasa: la construcción de un plan de vida de un pueblo que sueña",
    author: "Gustavo Wilches-Chaux",
    year: 2005,
    type: "memoria de proceso comunitario y territorial",
    url: "https://www.agr.una.py/descargas/biblioteca_digital_gestion_riesgos/P/proyecto_nasa%20Construcci%C3%B3n%20de%20un%20plan%20de%20vida%20de%20un%20pueblo%20que%20sue%C3%B1a.pdf",
    summary:
      "Recoge el nacimiento de Juan Tama desde un manuscrito de Álvaro Ulcué y vincula agua, trueno, avalanchas e historia territorial.",
    limitation:
      "Integra múltiples voces en una memoria de planificación; la cita de Juan Tama proviene de una publicación anterior.",
  }),
  icanhTierradentro: source({
    title: "Tierradentro National Archaeological Park: Guidebook",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "guía oficial de patrimonio y territorio",
    url: "https://musicasdelrio.com/wp-content/uploads/2021/11/RDoc2_TIERRADENTRO_Guidebook_by_ICANH.pdf",
    summary:
      "Documenta paisaje, poblamiento, patrimonio arqueológico y presencia Nasa contemporánea en Tierradentro.",
    limitation:
      "La cultura de quienes construyeron los hipogeos no puede identificarse automáticamente con el pueblo Nasa actual.",
  }),
  ovid: source({
    title: "Metamorphoses",
    author: "Ovidio",
    type: "fuente comparativa clásica",
    url: "https://ovid.lib.virginia.edu/",
    summary:
      "Reúne narraciones antiguas de transformación, petrificación, castigo, agua y paso entre formas humanas y no humanas.",
    limitation:
      "Compartir un motivo no demuestra contacto, origen común ni equivalencia cultural con una narración Nasa.",
  }),
  popolVuh: source({
    title: "Popol Vuh: Sacred Book of the Quiché Maya People",
    author: "Traducción y estudio de Allen J. Christenson",
    type: "fuente comparativa mesoamericana",
    url: "https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf",
    summary:
      "Ofrece una traducción crítica del Popol Vuh con episodios de creación, héroes, animales, fuego, oscuridad y cabezas separadas.",
    limitation:
      "La tradición k’iche’ maya posee historia, lengua y cosmología propias; la comparación se limita a motivos narrativos.",
  }),
  hesiod: source({
    title: "Theogony and Works and Days",
    author: "Hesíodo",
    type: "fuente comparativa griega",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0132",
    summary:
      "Conserva relatos griegos sobre distribución de bienes, fuego, trabajo y consecuencias de una disputa entre humanos y potencias.",
    limitation:
      "No existe evidencia de dependencia entre estos textos griegos y la tradición oral de Calderas.",
  }),

  // ——— Búsqueda profunda 2026-09-17 ———
  rappaportMesianismo1981: source({
    title: "Mesianismo y las transformaciones de símbolos mesiánicos en Tierradentro",
    author: "Joanne Rappaport",
    year: 1981,
    type: "artículo académico (Revista Colombiana de Antropología 23, ICANH)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1512",
    summary:
      "Analiza al Santo Tomás de Calderas como emisario con poder de petrificar, hermano de la Virgen y encerrado en un ataúd, y registra la variante en que un carpintero lo engaña para hacerlo entrar en el ataúd y luego lo clava, vinculándola con la escuadra de carpintero como atributo del santo.",
    limitation:
      "No nombra al personaje de esta ficha: atribuye el episodio del baúl a Santo Tomás siguiendo la tesis inédita del propio Bernal, y su PDF es un escaneo.",
  }),
  francoarqueologia2021: source({
    title: "Una arqueología de las piedras: estatuas y ancestros en el suroccidente colombiano. Una perspectiva decolonial",
    author: "Luis Gerardo Franco",
    year: 2021,
    type: "artículo académico (Jangwa Pana, Universidad del Magdalena, 20(3))",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/view/4431",
    summary:
      "Transcribe el episodio en que este personaje convierte en piedra a dos mujeres que le negaron caña, junto a los otros relatos de piedras de Calderas, y documenta que hoy en el resguardo se sigue contando la historia del pueblo de piedra y que los mayores se preocupan por retener esas memorias.",
    limitation:
      "Cita el episodio sólo como transcripción de 1953: su argumento es sobre piedras y ancestros, no sobre el baúl, el carpintero ni los animales.",
  }),
  henaoOralitura2014: source({
    title: "Oralitura y tradición oral: una propuesta de análisis de las formas artísticas orales",
    author: "Diana Carolina Toro Henao",
    year: 2014,
    type: "artículo académico (Lingüística y Literatura 65, Universidad de Antioquia)",
    url: "https://revistas.udea.edu.co/index.php/lyl/article/view/18849",
    summary:
      "Toma como etnotextos páez este relato y el de los hermanos traviesos, y analiza el episodio en que el protagonista bebe de un pantano con una caña y el agua lo persigue en zigzag hasta el Magdalena como explicación del nacimiento del río Páez.",
    limitation:
      "Trabaja sobre una reedición de 1978 y no sobre la publicación original, y sólo trata el episodio del río.",
  }),
  casasIntelectuales2007: source({
    title: "Intelectuales públicos e intelligentsia local: una mirada a la antropología de Tierradentro, Cauca",
    author: "Elías Sevilla Casas",
    year: 2007,
    type: "artículo académico (Revista Colombiana de Antropología 43, ICANH)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1105",
    summary:
      "Identifica al informante de Calderas que fue la fuente principal de Bernal y también de Nachtigall, y anota que estos cuentos sirvieron después al CRIC para cartillas de etnoeducación y a Reichel-Dolmatoff para su teoría del chamanismo.",
    limitation:
      "No analiza este relato: es historia de la antropología y sirve para situar al informante y la circulación posterior del corpus.",
  }),
  villaEconomia1954: source({
    title: "Economía de los Páez",
    author: "Segundo Bernal Villa",
    year: 1954,
    type: "artículo académico (Revista Colombiana de Antropología, vol. III)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1870",
    summary:
      "Registra que la carne de armadillo es bastante apreciada y lo enumera entre los animales de cacería de Calderas, y documenta el comercio y los jornales en pesos con el pueblo vecino que dan sentido a la suma que se ofrece en el cuento.",
    limitation:
      "No menciona al armadillo de mina, el oro ni el pañuelo, y su PDF es un escaneo.",
  }),
  villaMedicina1954: source({
    title: "Medicina y magia entre los paeces",
    author: "Segundo Bernal Villa",
    year: 1954,
    type: "artículo académico (Revista Colombiana de Antropología, vol. II)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1884",
    summary:
      "Registra en las mismas parcialidades los presagios de lo enterrado: soñar una hoguera indica que en el sitio hay oro, soñar tigres indica que en la casa hay entierro antiguo, y el alma llega alumbrando como una vela: la luz nocturna como señal de oro o de presencia.",
    limitation:
      "No aparece el armadillo: la relación entre la luz, el oro y el animal es una lectura editorial y no del autor.",
  }),
  cuetiatejidos2011: source({
    title: "Los tejidos propios: simbología y pensamiento del pueblo nasa",
    author: "Abraham Quiguanás Cuetia",
    year: 2011,
    type: "trabajo de grado en Etnoeducación (Universidad del Cauca)",
    url: "https://transformemos.com/medios/tejidos-propios-simbologia-pueblo-nasa.pdf",
    summary:
      "Documenta que a las niñas se les soban las manos con la mano derecha del armadillo para recibir el don de tejer, y recoge de un mayor que el oro significa potencia, desarrollo y autoridad: el armadillo como animal que transfiere habilidad y el oro como signo de poder.",
    limitation:
      "Es un trabajo de pregrado sobre el norte del Cauca y no sobre Tierradentro, no trata al armadillo de mina, y su copia está alojada por una fundación y no por el repositorio universitario.",
  }),
  alvarengaMitologia2020: source({
    title: "Mitología y producción audiovisual nasa",
    author: "Gloria Imelda Patricia Irias Alvarenga",
    year: 2020,
    type: "tesis de maestría en Estudios Culturales (Universidad de los Andes)",
    url: "https://repositorio.uniandes.edu.co/handle/1992/48642",
    summary:
      "Transcribe de un documental nasa de Tierradentro la advertencia de un médico tradicional de que el nevado está furioso porque quieren enriquecerse con los tesoros que enterraron los espíritus creadores, y recoge la laguna de un cacique lleno de oro que no deja acercarse a nadie.",
    limitation:
      "Trata cine nasa contemporáneo y no el cuento: el armadillo no aparece y las referencias al oro son breves.",
  }),
  lopezfantastico2019: source({
    title: "Lo fantástico en la oralitura nasa",
    author: "Adriana del Pilar Mogollón López",
    year: 2019,
    type: "trabajo de grado en Literatura y Lengua Castellana (Universidad del Cauca), con relatos recogidos en Tierradentro",
    url: "https://repositorio.unicauca.edu.co/handle/123456789/3440",
    summary:
      "A partir de relatos recogidos en Tierradentro explica que, según las creencias nasa, el espíritu después de la muerte sigue el camino hacia el mundo de arriba, y analiza cómo el paraíso y el diablo cristianos se incorporan hoy a las narraciones orales.",
    limitation:
      "Es un trabajo de pregrado con relatos recientes y describe la cosmología nasa general, no un viaje al cielo con la Virgen.",
  }),
  guarinpensamiento2003: source({
    title: "El pensamiento de las aguas de las montañas",
    author: "Hugo Portela Guarín",
    year: 2003,
    type: "artículo académico (Etnográfica 7(1), OpenEdition)",
    url: "https://journals.openedition.org/etnografica/2872",
    summary:
      "Enumera al diablo entre las manifestaciones con forma humana de la fuerza vital de aguas y montañas nasa, junto al mohán, el duende, la madre de agua y la viuda: un ser más del paisaje que se aparece en caminos y quebradas.",
    limitation:
      "Trata a los nasa del Cauca en general, no a Calderas, y la mención es de una línea.",
  }),
  arismendiarchivo2025: source({
    title: "Un archivo de épocas etnográficas: reseña de Los indios del Cauca, una construcción etnográfica (1890-1956), compilado por Cristóbal Gnecco",
    author: "Juan Carlos Orrego Arismendi",
    year: 2025,
    type: "reseña académica (Boletín de Antropología, Universidad de Antioquia, vol. 40 n.º 70)",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/358998",
    summary:
      "Documenta que el artículo de Bernal Villa de 1953, fuente única de este relato, fue reeditado en 2023 junto con Nachtigall y Otero, con un prólogo que señala la objetualización de lo indígena en esa etnografía clásica.",
    limitation:
      "Es una reseña, no el libro, y no discute este cuento en particular.",
  }),
  casasLos2007: source({
    title: "«Los animales mágicos de Tierradentro», ¿magia de quién?",
    author: "Elías Sevilla Casas",
    year: 2007,
    type: "artículo académico (International Journal of South American Archaeology 1; repositorio Universidad Icesi)",
    url: "https://repository.icesi.edu.co/bitstreams/5f9b8cec-cc3c-7785-e053-2cc003c84dc5/download",
    summary:
      "Analiza los relatos de tigre del corpus de Calderas: los hombres tigre son ladrones de ganado asociados a los pijaos que no comen sal, cita a Nachtigall según el cual la transformación del chamán en tigre sólo existe como reminiscencia mítica entre los paeces, y critica que Reichel-Dolmatoff usara estos cuentos para sostener su complejo del jaguar chamánico.",
    limitation:
      "Es una ponencia de crítica arqueológica: no reproduce el texto completo del cuento ni el episodio del bastón de oro.",
  }),
  camachopoder2003: source({
    title: "El poder de los hombres que vuelan: Gerardo Reichel-Dolmatoff y su contribución a la teoría del chamanismo",
    author: "Roberto Pineda Camacho",
    year: 2003,
    type: "artículo académico (Tabula Rasa 1)",
    url: "https://www.revistatabularasa.org/numero-1/pineda.pdf",
    summary:
      "Resume el uso que Reichel-Dolmatoff hizo de las fuentes páez: el chamán malo se transforma en jaguar para robar o comer a la gente o a sus rebaños, la lectura chamánica del hombre tigre ladrón de ganado que Sevilla Casas discute.",
    limitation:
      "Trata al hombre tigre como dato de segunda mano dentro de la teoría del chamanismo; no cita a Bernal ni a Calderas.",
  }),
  francoarqueologia20212: source({
    title: "Una arqueología de las piedras: estatuas y ancestros en el suroccidente colombiano. Una perspectiva decolonial",
    author: "Luis Gerardo Franco",
    year: 2021,
    type: "artículo académico (Jangwa Pana, Universidad del Magdalena, 20(3))",
    url: "https://www.redalyc.org/journal/5880/588072488008/html/",
    summary:
      "Reproduce, desde trabajo de campo reciente en el resguardo de Calderas, el episodio en que Chautéh convierte en piedra a dos mujeres que le negaron caña, y describe cómo los calderunos de hoy conservan de forma desigual esas historias de transformación.",
    limitation:
      "Trata a Chautéh como transformador de personas en piedra y no el episodio del pantano, el carrizo y la persecución del agua: sirve para el personaje y su vigencia, no para el río.",
  }),
  menesesMitos1996: source({
    title: "Mitos y leyendas: testimonios orales de la cultura páez",
    author: "Jorge Orozco Meneses",
    year: 1996,
    type: "artículo académico (Lenguaje y Textos 8, Universidade da Coruña; ficha en Dialnet)",
    url: "https://ruc.udc.es/handle/2183/7994",
    summary:
      "Sitúa a Juan Chiracol junto a Llíban en la quebrada de Calderas y registra que su morada tras desaparecer es la laguna de Caspe, con lo que confirma fuera del corpus de 1953 el vínculo del cacique con esa laguna.",
    limitation:
      "Es un texto breve de divulgación pedagógica con testimonios de varias parcialidades, no sólo de Calderas.",
  }),
  casasLos20072: source({
    title: "«Los animales mágicos de Tierradentro», ¿magia de quién?",
    author: "Elías Sevilla Casas",
    year: 2007,
    type: "artículo académico (International Journal of South American Archaeology 1; repositorio Universidad Icesi)",
    url: "https://repository.icesi.edu.co/handle/10906/3642",
    summary:
      "Resume que Juan Chiracol nace de una mujer embarazada por un tigre, que su historia no menciona al Trueno y que termina diciendo que no dejó descendencia, y discute la lectura chamánica que otros hicieron de estos relatos.",
    limitation:
      "Su objetivo es refutar el complejo del jaguar chamánico: trata el texto como cuento suelto y no analiza la laguna ni la autoridad del cacique.",
  }),
  paezNarrativas2022: source({
    title: "Narrativas de autonomía nasa: el papel de los caciques y del comunitarismo indígena en la colonia",
    author: "Martha Elizabeth Varón Páez y Luisa Fernanda Bríñez García",
    year: 2022,
    type: "artículo académico (Jangwa Pana, Universidad del Magdalena, 21(1))",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/view/4547",
    summary:
      "Contrasta al cacique histórico de Vitoncó, con títulos coloniales y herencia de su tío, con la figura mítica del hijo de la estrella enviado por el trueno, cuyo nacimiento habrían predicho los médicos tradicionales, y recoge testimonios de que sigue acompañando al pueblo.",
    limitation:
      "Es un análisis documental de segunda mano sobre autonomía y cacicazgos: no aporta relato propio ni trabajo de campo.",
  }),
  sopoNasa2023: source({
    title: "Nasa Kiwe: tradition, resistance, dwelling and belief. The symbolic construction of indigenous territory in a contemporary southwestern Colombia reservation",
    author: "María Patricia Farfán Sopó",
    year: 2023,
    type: "tesis doctoral (McGill University, School of Architecture)",
    url: "https://mcgill.scholaris.ca/server/api/core/bitstreams/65bd8020-64b3-4bc1-8c66-f40cf0cbaa54/content",
    summary:
      "Recoge en entrevista una versión actual del mito: una laguna sagrada se desbordó tras días de tormenta y de sus aguas nació un niño cubierto de escamas que un médico tradicional rescató, y describe el ciclo de nacimiento y retorno a la laguna y los murales que hoy lo representan.",
    limitation:
      "El trabajo de campo es en el norte del Cauca y no en Tierradentro, y el texto está en inglés con el testimonio original en nota.",
  }),
  tumbokwet2014: source({
    title: "Ipx kwet peku'j: alrededor de la tulpa, creencias y costumbres de los mayores nasa",
    author: "Luz Eneida Tumbo, compiladora, Ministerio de Educación Nacional, colección Territorios Narrados",
    year: 2014,
    type: "libro bilingüe nasa yuwe y castellano de autoría comunitaria nasa",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/plan-lectura-2021/territorios-narrados-parte-2/Ipx_kwet_pekuj_alrededor_de_la_tulpa.pdf",
    summary:
      "Recoge normas vivas sobre la candela: en una casa nunca debe apagarse la tulpa y siempre debe haber brasa, hay un ritual con maíz y hierbas antes de volver a encenderla, y la candela maldice cuando no se le da, lo que muestra al fuego como un ser con exigencias.",
    limitation:
      "Viene de comunidades del norte del Cauca y no de Calderas, y recoge creencias actuales, no una versión del mito de origen del fuego.",
  }),
  casasLos20073: source({
    title: "«Los animales mágicos de Tierradentro», ¿magia de quién?",
    author: "Elías Sevilla Casas",
    year: 2007,
    type: "documento de trabajo (CIDSE, Universidad del Valle, n.º 101)",
    url: "https://socioeconomia.univalle.edu.co/images/publicaciones/documentos_de_trabajo/2016_06_15_DOC_TRAB_N_101.pdf",
    summary:
      "Concluye que el corpus de Calderas no es una mitología cerrada sino relatos sueltos en los que aparecen figuras de origen cristiano o mestizo, lo que respalda tratar esta petrificación como pieza de un ciclo sincrético.",
    limitation:
      "Es una mención de paso dentro de un argumento sobre la lectura del jaguar chamánico.",
  }),
  valenciaLugares2000: source({
    title: "Lugares y sentidos de la memoria indígena páez",
    author: "José Herinaldy Gómez Valencia",
    year: 2000,
    type: "artículo académico (Convergencia, Revista de Ciencias Sociales 21)",
    url: "https://www.redalyc.org/articulo.oa?id=10502106",
    summary:
      "Transcribe la narración de un mayor de Tierradentro según la cual en la iglesia se empezó a bautizar con sal de los españoles y de ahí nació la idea del bautizo, y liga la sal con un topónimo de la región.",
    limitation:
      "Viene de resguardos vecinos y no de Calderas, y la sal aparece en la memoria histórica, no como madre o dueña.",
  }),
  tovarcomunidad2015: source({
    title: "La comunidad negra de Páez: un acercamiento arqueo-histórico al poblamiento, la explotación de la sal y la vida de los afrodescendientes entre los siglos XVIII y XIX en El Salado, municipio de Páez, Cauca",
    author: "Julián Andrés Escobar Tovar",
    year: 2015,
    type: "tesis de maestría en Antropología (Universidad de los Andes)",
    url: "https://hdl.handle.net/1992/13300",
    summary:
      "Documenta la explotación de fuentes de sal en El Salado, en el mismo municipio, por personas esclavizadas llegadas a mediados del siglo XVIII, y la comunidad que se formó alrededor: una fuente real de sal en el territorio del relato.",
    limitation:
      "Trata la historia afrodescendiente y arqueológica de la sal, no el relato nasa, y su repositorio exige verificación de navegador.",
  }),
  guacacomunicacion2019: source({
    title: "La comunicación ancestral nasa: una comunicación desde el wët wët fxi'zenxi (buen vivir)",
    author: "Wilson Martínez Guaca y Dianny Guerrero Montilla",
    year: 2019,
    type: "artículo académico (IC, Revista Científica de Información y Comunicación 16, Universidad de Sevilla)",
    url: "https://icjournal-ojs.org/index.php/IC-Journal/article/view/501",
    summary:
      "Recoge de una dinamizadora de nasa yuwe que el arco es una serpiente y que cuando se ve muy fuerte está chupando la sangre de alguien, como anuncio de una muerte en la comunidad: la identificación explícita entre arco iris y serpiente como presagio.",
    limitation:
      "El testimonio viene del norte del Cauca y no de Tierradentro, y no menciona este relato.",
  }),
  drexlerNuestro2007: source({
    title: "Nuestro territorio frío: el concepto indoamericano de higiene territorial en el manejo de la crisis de recursos entre los nasa de Tierradentro",
    author: "Josef Drexler",
    year: 2007,
    type: "artículo académico (Indiana 24, Instituto Ibero-Americano de Berlín)",
    url: "https://journals.iai.spk-berlin.de/index.php/indiana/article/view/1938",
    summary:
      "Con trabajo de campo en Tierradentro, y con informantes de Calderas, explica que en la cosmología nasa las fuentes de agua son culebras verdes y madres del agua, representaciones de personas-espíritu como el arco: la cadena entre agua, culebra y arco iris que estructura el cuento.",
    limitation:
      "Está escrito en alemán y trata la ecología ritual de los años recientes, no el relato de la niña.",
  }),
  guavaResena2020: source({
    title: "Reseña de El arco, el cuerpo y la seña: cosmovisiones de la salud en la cultura nasa, de Hugo Portela Guarín y Sandra Carolina Portela García",
    author: "Luis Alberto Suárez Guava",
    year: 2020,
    type: "reseña académica (Boletín de Antropología, Universidad de Antioquia, 35(60))",
    url: "https://www.redalyc.org/journal/557/55766683012/html/",
    summary:
      "Resume la etnografía sobre el arco: hay al menos dos tipos, el blanco que sale de noche y el rojo que sale de día, un ser que ataca a las personas, dentro de la tríada de trueno, ancestros y lagunas de Tierradentro.",
    limitation:
      "Es una reseña y no el libro, y no trata a la niña serpiente ni la escena de la iglesia.",
  }),
  guarinsenas2002: source({
    title: "Las señas en la cosmovisión chamánica páez",
    author: "Hugo Portela Guarín",
    year: 2002,
    type: "ponencia académica (Universidad del Cauca)",
    url: "http://antropologiamedica.com/sites/default/files/2016-10/2002%20Las%20senas.pdf",
    summary:
      "Explica la categoría de lo sucio, que la menstruación y la sangre de parto contienen, y que la mujer menstruante debe cuidarse de frecuentar ambientes fríos como charcos, barriales, páramos y lagunas: el fundamento del procedimiento con que los médicos fuerzan la salida de la pareja.",
    limitation:
      "No narra el relato y está alojado como PDF suelto, sin página de revista ni enlace seguro.",
  }),
  mendozaanimales1981: source({
    title: "Los animales mágicos en las urnas de Tierradentro",
    author: "Álvaro Chaves Mendoza",
    year: 1981,
    type: "artículo académico (Revista Española de Antropología Americana XI)",
    url: "https://revistas.ucm.es/index.php/REAA/article/view/REAA8181110069A",
    summary:
      "Citando a Bernal, describe al Trueno como espíritu inmortal y defensor frente a los pijaos, que llevaba cuero de culebra en la espalda, y a su hijo Llíban como el mejor curandero de Tierradentro, que rodeado por los pijaos se defendió con una boleadora que era una culebra.",
    limitation:
      "Usa el mito sólo para interpretar la serpiente en las urnas funerarias prehispánicas; no habla de Juan Chiracol ni del diálogo final entre los caciques.",
  }),
  rappaportHistory1985: source({
    title: "History, myth, and the dynamics of territorial maintenance in Tierradentro, Colombia",
    author: "Joanne Rappaport",
    year: 1985,
    type: "artículo académico (American Ethnologist 12(1))",
    url: "https://anthrosource.onlinelibrary.wiley.com/doi/10.1525/ae.1985.12.1.02a00020",
    summary:
      "Sostiene que los páez de Tierradentro mantienen su territorio mediante un conocimiento histórico y unas narraciones míticas atadas a lugares concretos: el marco en que un peñón de lindero como Piedra Alta funciona como mojón narrativo.",
    limitation:
      "No nombra Piedra Alta ni a los Dimales; está en inglés y tras muro de pago, así que sólo se verificaron sus metadatos y su resumen en Crossref.",
  }),
  inzaEsquema2002: source({
    title: "Esquema de Ordenamiento Territorial del municipio de Inzá, Cauca: diagnóstico territorial",
    author: "Alcaldía de Inzá",
    year: 2002,
    type: "documento oficial de planeación (repositorio CDIM-ESAP)",
    url: "https://repositoriocdim.esap.edu.co/server/api/core/bitstreams/e4ab9a46-d274-4f84-b767-c375cd60826c/content",
    summary:
      "Fija el límite municipal en el alto de la Muralla, dividiendo los resguardos de Avirama, Chinas y Lame del de Calderas: confirma que la Muralla donde el relato sitúa la aparición de Piedra Alta es un alto de lindero real del resguardo.",
    limitation:
      "Documento administrativo que no habla del mito ni de Piedra Alta como topónimo; su portada no trae año, de modo que se cita como circa 2002.",
  }),
  cxhacxhaTerritorios2026: source({
    title: "Territorios de la Asociación de Autoridades Ancestrales Indígenas Nasa Çxhãçxha",
    author: "Asociación de Autoridades Ancestrales Indígenas Nasa Çxhãçxha, Tierradentro",
    year: 2026,
    type: "sitio de una asociación de cabildos nasa",
    url: "https://tierradentro.co/",
    summary:
      "Muestra que Lame, donde el relato sitúa la captura de Santo Tomás, es hoy el resguardo Lamus Çxhab, una de las diecisiete autoridades ancestrales asociadas en Nasa Çxhãçxha, lo que ubica el episodio en un territorio nasa vigente y vecino de Calderas.",
    limitation:
      "Es una fuente de lugar y de organización contemporánea: no narra el mito ni los temblores, y sólo debe citarse para situar Lame.",
  }),
};

export const defaultNasaSourceKeys = [
  "bernal1953",
  "villa1993",
  "minculturaNasa",
  "acinNasa",
  "nasaCxhacxha",
  "cricTerritory",
  "scieloCosmology",
];

/**
 * Cada entrada es una clave del pool ("bernal1953") o un objeto
 * `{ key, summary, limitation }` que conserva la identidad bibliográfica de la
 * obra y sólo particulariza lo que respalda en ESTE mito.
 */
export function pickNasaSources(...keys) {
  const seen = new Set();
  const out = [];
  for (const entry of keys) {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = nasaSources[key];
    if (!selected) {
      throw new Error(`Fuente Nasa desconocida: ${key}`);
    }
    if (seen.has(key)) continue;
    seen.add(key);
    if (typeof entry === "string") {
      out.push(selected);
      continue;
    }
    const { summary, limitation } = entry;
    out.push({
      ...selected,
      ...(summary ? { summary } : {}),
      ...(limitation ? { limitation } : {}),
    });
  }
  return out;
}
