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

export const afrocolombianSources = {
  arochaAnanse: source({
    title: "Ombligados de Ananse: hilos ancestrales y modernos en el Pacífico colombiano",
    author: "Jaime Arocha Rodríguez",
    year: 1999,
    type: "investigación antropológica con memoria oral afrochocoana",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2795/download",
    summary:
      "Conserva la narración comunicada por Don Pío Perea a Nina S. de Friedemann: Ananse era sacristán, comía hostias, fue condenado y habló desde el campanario.",
    limitation:
      "El episodio llega mediante una cadena de registro identificada y no representa todas las historias de Ananse del Pacífico.",
  }),
  bejaranoAnanse: source({
    title:
      "La araña Ananse, ancestro presente en el cuento «Betsabelina Ananse Docordó»",
    author: "Paola Andrea Bejarano Alzate",
    year: 2024,
    type: "artículo académico sobre literatura afrocolombiana",
    url: "https://revistas.udea.edu.co/index.php/lyl/article/view/356160",
    summary:
      "Analiza la continuidad de Ananse en una obra chocoana contemporánea y su relación con memoria, resistencia y vínculos ancestrales.",
    limitation:
      "Estudia una obra literaria contemporánea; no es una segunda versión del episodio del campanario.",
  }),
  smithsonianAnansiJourney: source({
    title: "Anansi’s Journey: A Story of Jamaican Cultural Resistance",
    author: "Emily Zobel Marshall, registro Smithsonian Libraries",
    type: "estudio comparativo de circulación afroatlántica",
    url: "https://www.si.edu/object/anansis-journey-story-jamaican-cultural-resistance-emily-zobel-marshall%3Asiris_sil_1021866",
    summary:
      "Documenta la trayectoria de Anansi en el Caribe y su capacidad de adaptación cultural como figura de resistencia.",
    limitation:
      "Se usa como comparación diaspórica, no para completar el relato colombiano con episodios jamaiquinos.",
  }),
  smithsonianAshanti: source({
    title: "Ashanti Folk Tales from Ghana",
    author: "Harold Courlander y Smithsonian Folkways",
    year: 1966,
    type: "registro sonoro y comparativo de cuentos ashanti",
    url: "https://folkways.si.edu/harold-courlander/ashanti-folk-tales-from-ghana/childrens-prose/album/smithsonian",
    summary:
      "Ofrece un referente directo para comparar la figura de la araña embaucadora en narraciones ashanti.",
    limitation:
      "No prueba que un episodio ghanés sea la fuente lineal del relato chocoano.",
  }),
  valenciaTunda: source({
    title: "El mito de la Tunda en el imaginario de Tumaco",
    author: "Willian Javier Valencia Hurtado",
    year: 2010,
    type: "tesis de maestría en etnoliteratura con versiones orales",
    url: "https://sired.udenar.edu.co/5247/1/83270.pdf",
    summary:
      "Reúne versiones de Tumaco, entre ellas la estudiante que sigue a una figura con el rostro de su madre hasta que sus compañeras alertan a la madre real.",
    limitation:
      "La tesis interpreta múltiples relatos; cada versión debe conservar su atribución y no convertirse en biografía única de la Tunda.",
  }),
  minCulturaTunda: source({
    title: "La Tunda",
    author: "Banco de Contenidos del Ministerio de Cultura de Colombia",
    type: "registro sonoro institucional de tradición oral",
    url: "https://bancodecontenidos.mincultura.gov.co/FichaDocumental?id=10283",
    summary:
      "Aporta una expresión oral pública de la Tunda dentro del patrimonio narrativo del Pacífico.",
    limitation:
      "La ficha audiovisual no sustituye la transcripción atribuida usada para el núcleo del relato.",
  }),
  banrepPacificOral: source({
    title: "Tradición oral del Pacífico colombiano",
    author: "Biblioteca Virtual del Banco de la República",
    type: "colección sonora y documental de memoria regional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll18/id/343/",
    summary:
      "Sitúa narración, música y memoria oral en el Pacífico sin reducir sus expresiones a un repertorio homogéneo.",
    limitation:
      "Sirve como contexto de transmisión; no contiene necesariamente cada secuencia narrativa de esta colección.",
  }),
  kijimbaBook: source({
    title: "La escuela en la tradición oral",
    author: "Helena Roldán y Programa RED de la Universidad Nacional de Colombia",
    year: 1998,
    type: "libro pedagógico con narraciones orales atribuidas",
    url: "https://books.google.com/books/about/La_escuela_en_la_tradici%C3%B3n_oral.html?id=P5WYUJAbAr8C",
    summary:
      "En las páginas 44 y 45 atribuye a Rosalba Cossio García el relato de Kijimba, el baile nocturno, la hiel y la fiesta de las ánimas.",
    limitation:
      "Google Books ofrece vista parcial; la adaptación se limita a los pasajes visibles y no completa vacíos.",
  }),
  unadAlabaos: source({
    title: "Alabaos y gualíes del Chocó: patrimonio oral y prácticas mortuorias",
    author: "Universidad Nacional Abierta y a Distancia",
    type: "investigación académica sobre oralidad y duelo",
    url: "https://repository.unad.edu.co/handle/10596/13955",
    summary:
      "Documenta prácticas orales y musicales asociadas con muerte, velorio y comunidad en el Chocó.",
    limitation:
      "No registra la trama de Kijimba y no se usa para añadir cantos o ceremonias al baile de las ánimas.",
  }),
  unicaucaDeath: source({
    title: "Entre la muerte y los matachines: sentidos de comunidad guapireños",
    author: "Universidad del Cauca",
    type: "investigación antropológica sobre muerte y comunidad",
    url: "https://repositorio.unicauca.edu.co/bitstream/handle/123456789/2620/Entre%20la%20muerte%20y%20los%20matachines.%20Sentidos%20de%20comunidad%20guapire%C3%B1os.pdf?isAllowed=y&sequence=1",
    summary:
      "Aporta contexto contemporáneo sobre relaciones entre muerte, celebración y comunidad en el Pacífico.",
    limitation:
      "Su territorio y objeto no son idénticos al relato chocoano; funciona como contexto, no como versión.",
  }),
  metDanceDeath: source({
    title: "The Dance of Death",
    author: "The Metropolitan Museum of Art",
    type: "fuente comparativa museal",
    url: "https://www.metmuseum.org/art/collection/search/334871",
    summary:
      "Documenta una representación europea de la danza de la muerte para una comparación visual y conceptual controlada.",
    limitation:
      "No se propone parentesco histórico con Kijimba ni se importan sus personajes al Pacífico.",
  }),
  britishUnderworld: source({
    title: "Frightening fiestas and sacred ceremonies",
    author: "The British Museum",
    type: "ensayo museal comparativo sobre muertos y ceremonias",
    url: "https://www.britishmuseum.org/blog/frightening-fiestas-and-sacred-ceremonies",
    summary:
      "Presenta distintas formas culturales de imaginar encuentros entre vivos y muertos.",
    limitation:
      "Es una comparación amplia; no demuestra influencia sobre la narración de Kijimba.",
  }),
  chocoTourismSierpe: source({
    title: "Guía turística del Chocó: mitos y leyendas",
    author: "Fondo de Promoción Turística de Colombia",
    type: "guía institucional de divulgación territorial",
    url: "https://cdn.colombia.com/docs/turismo/sitios-turisticos/pacifico/choco.pdf",
    summary:
      "Resume el núcleo de la Sierpe de Beté: tres cabezas, aparición durante fiestas patronales y temor entre pescadores.",
    limitation:
      "Es una síntesis breve y sin narrador individual; no respalda diálogos, curaciones, cantos ni desenlaces.",
  }),
  medioAtratoRisk: source({
    title: "Caracterización general de escenarios de riesgo: Medio Atrato",
    author: "Consejo Municipal para la Gestión del Riesgo de Desastres",
    year: 2011,
    type: "caracterización territorial institucional",
    url: "https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/28505/Caracterizacion_MedioAtratoChoco_2011.pdf?isAllowed=y&sequence=2",
    summary:
      "Sitúa a Beté, su población mayoritariamente negra, la pesca, la agricultura, el río y las fiestas del municipio.",
    limitation:
      "No es una fuente narrativa y no prueba que toda práctica local forme parte de la leyenda.",
  }),
  unidadVictimasAtrato: source({
    title: "El río Atrato: territorio, memoria y vida",
    author: "Unidad para las Víctimas",
    year: 2021,
    type: "memoria territorial institucional",
    url: "https://www.unidadvictimas.gov.co/especiales/Bojaya2DeMayo2021/rio.html",
    summary:
      "Describe la centralidad material y social del Atrato para las comunidades ribereñas.",
    limitation:
      "No registra la Sierpe; se usa solo para evitar un paisaje fluvial genérico.",
  }),
  minCulturaCuasimodo: source({
    title: "La fiesta de Cuasimodo en Medio Atrato",
    author: "Ministerio de Cultura de Colombia",
    year: 2018,
    type: "registro institucional de celebración local",
    url: "https://mng.mincultura.gov.co/Paginas/ListEvents.aspx?PageFirstRow=7711&Paged=TRUE&View=%7BF72D6BDC-EF4D-4841-8A02-BE1D100F8102%7D&p_EventDate=20180606+19%3A52%3A36&p_ID=3224",
    summary:
      "Aporta contexto sobre festividades del Medio Atrato sin convertir una celebración concreta en escena obligatoria del relato.",
    limitation:
      "No documenta la Sierpe ni permite atribuirle cantos, altares o rituales específicos.",
  }),
  minCulturaSanPacho: source({
    title: "Fiesta de San Francisco de Asís en Quibdó",
    author: "Ministerio de Cultura de Colombia",
    type: "expediente de patrimonio cultural inmaterial",
    url: "https://www.mincultura.gov.co/direcciones/patrimonio-y-memoria/Paginas/servicios-informacion/LRPCI/fiesta-de-san-francisco-de-asis-en-quibdo.aspx",
    summary:
      "Documenta una fiesta patronal afrochocoana y sus funciones sociales y religiosas.",
    limitation:
      "San Pacho ocurre en Quibdó y no se traslada a Beté ni se usa para ampliar la leyenda.",
  }),
  metHydra: source({
    title: "The Labors of Herakles: the Lernaean Hydra",
    author: "The Metropolitan Museum of Art",
    type: "fuente comparativa museal",
    url: "https://www.metmuseum.org/de/essays/the-labors-of-herakles",
    summary:
      "Documenta la hidra de múltiples cabezas como paralelo formal de una gran serpiente acuática.",
    limitation:
      "La coincidencia de cabezas no prueba transmisión ni convierte a la Sierpe en monstruo griego.",
  }),
  banrepSerpents: source({
    title: "Cosmología y simbolismo",
    author: "Enciclopedia del Banco de la República",
    type: "síntesis comparativa de simbolismo indígena colombiano",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Cosmolog%C3%ADa_y_simbolismo",
    summary:
      "Ofrece comparaciones colombianas con serpientes y seres de varias cabezas en contextos distintos.",
    limitation:
      "No se usa para atribuir cosmologías indígenas a la tradición afrochocoana.",
  }),
  cnhmBuenaventura: source({
    title: "Buenaventura: un puerto sin comunidad",
    author: "Centro Nacional de Memoria Histórica",
    year: 2015,
    type: "investigación con memoria comunitaria local",
    url: "https://centrodememoriahistorica.gov.co/descargas/informes-accesibles/buenaventura_accesible.pdf",
    summary:
      "Recoge una memoria local donde el Riviel y la mochita entran en canoas de quienes llegan del Chocó, los confunden y luego regresan al agua.",
    limitation:
      "El pasaje es una evocación comunitaria breve, no una biografía total del Riviel.",
  }),
  opcaRiviel: source({
    title: "Patrimonios emergidos: herencia inmaterial y patrimonio sumergido en Tumaco y Buenaventura",
    author: "Observatorio del Patrimonio Cultural y Arqueológico, Universidad de los Andes",
    type: "investigación académica y patrimonial costera",
    url: "https://cienciassociales.uniandes.edu.co/opca/articulo/patrimonios-emergidos-herencia-inmaterial-y-su-vinculo-con-el-patrimonio-sumergido-en-san-andres-de-tumaco-y-buenaventura/",
    summary:
      "Sitúa relatos, navegación y memorias del litoral dentro de relaciones vivas con el patrimonio marítimo.",
    limitation:
      "No confirma por sí sola cada detalle del Riviel y no reemplaza la memoria directa de Buenaventura.",
  }),
  uasbRiviel: source({
    title: "El Riviel en la tradición oral del Pacífico colombo-ecuatoriano",
    author: "Universidad Andina Simón Bolívar",
    type: "tesis académica sobre circulación transfronteriza",
    url: "https://repositorio.uasb.edu.ec/items/2f753427-b70f-40ea-b717-44130bcf0999",
    summary:
      "Estudia variantes y circulación del Riviel entre comunidades costeras del Pacífico.",
    limitation:
      "Las variantes regionales no se funden en una sola genealogía ni se proyectan automáticamente sobre Buenaventura.",
  }),
  rivielActors: source({
    title: "Actores sociales y dinámicas culturales de la religiosidad popular negra",
    author: "Investigación sobre testimonios del Pacífico colombiano",
    type: "artículo académico con testimonios regionales",
    url: "https://www.researchgate.net/publication/298090477_Actores_sociales_y_dinamicas_culturales_de_la_religiosidad_popular_negra_en_algunas_localidades_del_Pacifico_Colombiano_analisis_de_testimonios",
    summary:
      "Aporta contexto sobre entidades narrativas y religiosidad popular negra en localidades del Pacífico.",
    limitation:
      "La copia disponible es secundaria; se usa para contraste y no para afirmar detalles exclusivos.",
  }),
  udenarOralPacific: source({
    title: "Tradición oral y memoria cultural del Pacífico nariñense",
    author: "Universidad de Nariño",
    type: "investigación etnoliteraria regional",
    url: "https://sired.udenar.edu.co/2701/1/89852.pdf",
    summary:
      "Documenta circulación, transformación y funciones de relatos orales en el litoral nariñense.",
    limitation:
      "Es contexto regional; no sustituye la versión de Buenaventura ni fija un origen único del Riviel.",
  }),
  velasquezDeath: source({
    title: "Tres cuentos de la tradición afrochocoana",
    author: "Rogerio Velásquez Murillo; reproducción de Julio César Uribe Hermocillo",
    year: 1960,
    type: "reproducción pública de recopilación folclórica histórica",
    url: "https://choco7dias.com/tres-cuentos-de-la-tradicion-afrochocoana/",
    summary:
      "Reproduce dos relatos publicados en la Revista Colombiana de Folclor: uno de Tutunendo y otro de Munguidó sobre la aparición de la muerte.",
    limitation:
      "La reproducción conserva lenguaje y mediaciones de 1960; las dos versiones no se fusionan ni se atribuyen a todo el Chocó.",
  }),
  rogerioProfile: source({
    title: "Rogerio Velásquez Murillo",
    author: "Enciclopedia del Banco de la República",
    type: "perfil biográfico e historiográfico",
    url: "https://enciclopedia.banrepcultural.org/Rogerio_Vel%C3%A1squez",
    summary:
      "Sitúa la trayectoria intelectual del investigador chocoano que recopiló los dos cuentos.",
    limitation:
      "No es una segunda versión narrativa; permite entender autor, periodo y mediación.",
  }),
  afriprovDeath: source({
    title: "Origin of Death: Myth of the Chameleon and the Lizard",
    author: "African Proverbs, Sayings and Stories",
    type: "fuente comparativa africana",
    url: "https://afriprov.tangaza.ac.ke/origin-of-death-myth-of-the-chameleon-and-the-lizard/",
    summary:
      "Conserva un relato africano del mensajero retrasado y el mensaje contrario que explica la mortalidad.",
    limitation:
      "La semejanza estructural no demuestra que la versión de Munguidó sea copia directa.",
  }),
  bakoDeath: source({
    title: "An African perspective on the origin and meaning of death",
    author: "N. Bako, University of South Africa",
    type: "tesis académica comparativa",
    url: "https://ir.unisa.ac.za/bitstream/handle/10500/3729/thesis_bako_n.pdf?isAllowed=y&sequence=1",
    summary:
      "Examina relatos africanos sobre mensajes demorados, animales y el origen de la mortalidad.",
    limitation:
      "Aporta comparación temática, no una genealogía demostrada para los cuentos afrochocoanos.",
  }),
  vaninPacific: source({
    title: "Cultura del litoral Pacífico: todos los mundos son reales",
    author: "Alfredo Vanín",
    year: 1993,
    type: "ensayo cultural afrocolombiano sobre el litoral",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2807/",
    summary:
      "Explica la pluralidad de mundos, memorias y expresiones orales del Pacífico desde una perspectiva regional afrocolombiana.",
    limitation:
      "No contiene todos los relatos ni autoriza a presentar el litoral como una cultura sin diferencias locales.",
  }),
  minCulturaAfro: source({
    title: "Comunidades negras, afrocolombianas, raizales y palenqueras",
    author: "Ministerio de Cultura de Colombia",
    type: "perfil institucional contemporáneo",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/comunidades-negras-afrocolombianas-raizales-y-palenqueras/Paginas/default.aspx",
    summary:
      "Aporta el marco contemporáneo y plural para nombrar comunidades afrocolombianas sin usar Africano como comunidad única.",
    limitation:
      "No es una fuente narrativa ni reemplaza la autoidentificación de cada comunidad local.",
  }),
  minCulturaOral: source({
    title: "Lenguas y tradición oral",
    author: "Ministerio de Cultura de Colombia",
    type: "marco institucional de salvaguardia de memoria oral",
    url: "https://patrimonio.mincultura.gov.co/Paginas/Lenguas-y-tradici%C3%B3n-oral.aspx",
    summary:
      "Sitúa la tradición oral como patrimonio vivo que cambia según narradores, territorios y condiciones de transmisión.",
    limitation:
      "No respalda por sí sola ninguna escena ni permite declarar una versión como ancestral.",
  }),
  minCulturaViche: source({
    title: "Saberes y tradiciones asociados a la manifestación del Viche/Biche",
    author: "Ministerio de Cultura de Colombia",
    year: 2021,
    type: "expediente patrimonial construido con comunidades portadoras",
    url: "https://mincultura.gov.co/direcciones/patrimonio-y-memoria/Paginas/servicios-informacion/LRPCI/saberes-y-tradiciones-asociados-a-la-manifestacion-del-vichebiche-del-pacifico.aspx",
    summary:
      "Documenta diferencias territoriales, transmisión familiar y relaciones entre río, mar, selva, trabajo, fiesta y duelo en el Pacífico.",
    limitation:
      "No es una fuente para añadir viche a todos los relatos ni homogeneizar cuatro departamentos.",
  }),
  unescoMarimba: source({
    title: "Música de marimba y cantos y bailes tradicionales del Pacífico Sur",
    author: "UNESCO y comunidades portadoras de Colombia y Ecuador",
    year: 2015,
    type: "expediente de patrimonio cultural inmaterial",
    url: "https://ich.unesco.org/es/RL/musica-de-marimba-y-cantos-y-bailes-tradicionales-de-la-region-colombiana-del-pacifico-sur-y-de-la-provincia-ecuatoriana-de-esmeraldas-01099",
    summary:
      "Documenta transmisión, música, celebración y vida comunitaria en el Pacífico Sur.",
    limitation:
      "No prueba que toda fiesta de un relato use marimba ni que prácticas del sur describan el Medio Atrato.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  mejiaOralidad2007: source({
    title: "Oralidad y escritura en la isla de San Andrés",
    author: "Juliana Botero Mejía",
    year: 2007,
    type: "artículo de revista arbitrada",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-48072007000200014",
    summary:
      "Fija los nombres con que la araña circula en el archipiélago —Anancy, Nansi, Anansi, Old Anancy, Bredda Anancy, Hemano Nansi— y registra que las Historias de Anancy se hicieron para ser contadas, cantadas y actuadas por los abuelos, y que en ellas se narran África, la esclavitud y el presente de las islas.",
    limitation:
      "Es un estudio sobre oralidad y alfabetización, no una recopilación: los datos sobre Anancy están en una nota al pie y no incluye ninguna versión narrativa. Remite a los trabajos de Carol O'Flynn de Chávez, Marcia Dittmann y Oakley Forbes sin reproducirlos.",
  }),
  rodriguezdiaspora2011: source({
    title: "La diáspora akán: los cuentos de Anancy en Limón y el Caribe colombiano insular",
    author: "Lina Pochet Rodríguez",
    year: 2011,
    type: "artículo de revista arbitrada",
    url: "https://dialnet.unirioja.es/descarga/articulo/5689730.pdf",
    summary:
      "Traza la ruta por la que el personaje llegó a Colombia: los akán del sur de Ghana y las zonas vecinas de Costa de Marfil y Togo, la lengua twi, la atribución de los cuentos de la araña a los asante, las compañías navieras inglesas, Jamaica como plataforma de distribución y el desembarco en el archipiélago de San Andrés, Vieja Providencia y Santa Catalina.",
    limitation:
      "Es una reseña histórica de la diasporización, no un corpus de relatos; no documenta ninguna versión chocoana ni menciona el episodio del campanario. Su otro caso es Limón, en Costa Rica, y no Colombia continental.",
  }),
  mejiacuentistas2007: source({
    title: "Las cuentistas de hoy en La Guajira, San Andrés y Providencia y El Chocó",
    author: "Ana Mercedes Patiño Mejía",
    year: 2007,
    type: "artículo de revista arbitrada",
    url: "https://www.redalyc.org/pdf/4983/498357113007.pdf",
    summary:
      "Describe el corpus isleño: los veintidós relatos de Lolia Pomare Myles publicados en «Anancy Stories. Cuentos de Anancy» (Fabio Eusse, ed., Fondo Mixto para la Promoción de la Cultura y las Artes del Archipiélago, 2001), en los que Anancy aparece siempre con el hermano Tigre y no siempre sale bien librado, y las compilaciones que Bill y Cathy Washabaugh hicieron en Vieja Providencia en los años setenta.",
    limitation:
      "Es una reseña de literatura escrita por mujeres: describe el volumen de 2001 pero no lo transcribe, y el libro de Eusse no está digitalizado, de modo que el contenido de los veintidós relatos se conoce aquí sólo por esta descripción.",
  }),
  velasquezCriollo2023: source({
    title: "Criollo sanandresano (ficha de lengua)",
    author: "Astrid Lorena Bernal Velásquez, Instituto Caro y Cuervo",
    year: 2023,
    type: "ficha institucional de lengua",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/criollo-sanandresano/",
    summary:
      "Documenta la lengua en la que se cuentan los Anancy stories: población raizal del archipiélago, base lexical inglesa del criollo, y la sectorización lingüística de San Andrés descrita por Marcia Dittmann tras la declaratoria de puerto libre de 1953.",
    limitation:
      "No menciona a Anancy ni recoge relato alguno; sirve únicamente para situar la lengua y el desplazamiento del criollo, y sus cifras de población provienen del censo piloto de 1999.",
  }),
  rEDescuela: source({
    title: "La escuela en la tradición oral",
    author: "Programa RED, Universidad Nacional de Colombia; narración de Rosalba Cossio García",
    type: "recopilación escolar de tradición oral",
    url: "https://books.google.com.co/books?id=P5WYUJAbAr8C&pg=PA44&q=Kijimba",
    summary:
      "Es la fuente del relato completo. En las páginas 44 y 45, bajo el título «KIJIMBA» y la línea «Narración de la señora Rosalba Cossio García», está todo lo que la ficha cuenta: los bailes de Tanguí, Guayabal, Tutunendo, Condoto, Tanando y Quito; la tambora escuchada desde la cama; las advertencias de los familiares; la palanca, el canalete y la champa achicada; la casa río arriba con todos vestidos de blanco; el grito «llegó Kijimba»; el trago que era hiel; el coro que ordena tomárselo porque a todo baile no se va; y la muerte al día siguiente en una fiesta de las ánimas. La página 45 trae además «La viudita», narrada por María de Jesús Ampudia Perea, nacida en Tadó en 1924, que la ficha usa como paralelo.",
    limitation:
      "Sólo se pudo leer en la vista previa parcial de Google Libros: las páginas 7, 44 y 45 se leyeron completas y el resto del volumen no. No se pudo confirmar el año, el pie de imprenta ni el compilador desde el propio libro, ni se sabe dónde, cuándo ni a qué edad narró Rosalba Cossio García. Es material recogido en trabajo escolar, sin aparato etnográfico.",
  }),
  rianoAlcalaCantando2020: source({
    title: "Cantando el sufrimiento del río. Memoria, poética y acción política de las cantadoras del Medio Atrato chocoano",
    author: "Pilar Riaño-Alcalá y Ricardo Chaparro Pacheco",
    year: 2020,
    type: "artículo de revista arbitrada",
    url: "https://www.redalyc.org/journal/1050/105064118004/html/",
    summary:
      "Da el marco en el que las ánimas del Medio Atrato son agentes y no decorado: documenta que la fuerza para invocar alabaos viene de personas de entendimiento fuerte con conexión especial con las ánimas, y que la alabaora mayor Petrona aportó tres alabaos que, según ella, se los enseñaron en sueños las ánimas. Sitúa además el eje geográfico del relato y distingue alabaos de gualís, que se cantan en el duelo por niños.",
    limitation:
      "No conoce a Kijimba ni recoge relato alguno de aparecidos: su objeto son el canto, el duelo y la acción política de las cantadoras de Pogue tras la masacre de Bojayá. El paralelo de las ánimas que enseñan en sueños es temático, no genealógico.",
  }),
  aristizabalChoco2022: source({
    title: "El Chocó y las mitologías de oro",
    author: "Juanita C. Aristizábal",
    year: 2022,
    type: "artículo de revista arbitrada",
    url: "https://www.redalyc.org/journal/396/39672447013/html/",
    summary:
      "Muestra cómo la narración oral chocoana llega a la letra impresa y quién la ha mediado, incluidas las transcripciones que Alfredo Vanín hizo de narradores mayores como Manuel María Moreno, de Opogodó; ayuda a leer «La escuela en la tradición oral» como un eslabón más de esa cadena de mediaciones.",
    limitation:
      "Su tema es el oro y la economía extractiva, no las ánimas; no menciona a Kijimba y trata sobre todo producción literaria, periodística y cinematográfica sobre el Chocó, con el riesgo de mirada externa que la propia autora discute.",
  }),
  netoModo2024: source({
    title: "Modo de vida afrocolombiano y territorialidades pesqueras en el Chocó (Colombia)",
    author: "Dorival Bonfá Neto y Luis Carlos Jiménez Reyes",
    year: 2024,
    type: "artículo de revista arbitrada",
    url: "https://www.redalyc.org/journal/268/26878603005/html/",
    summary:
      "Sostiene lo que la ficha dice de los pescadores: que en las comunidades negras del Chocó la pesca artesanal es la base de un modo de vida y que el agua es un espacio vivido, concebido y percibido, donde se concentra un saber complejo construido en interacción continua con el ambiente. Es lo que explica por qué el miedo de un pescador ante la Sierpe es una noticia y no una anécdota.",
    limitation:
      "Su trabajo de campo es en Bahía Solano, en la costa pacífica del Chocó, y su elemento es el mar, no el Atrato ni el Medio Atrato; no menciona la Sierpe ni recoge narrativa oral. Se usa para el oficio, no para el relato.",
  }),
  frazerBiblioteca: source({
    title: "Biblioteca, libro 2, capítulo 5, sección 2",
    author: "Apolodoro; edición de James George Frazer, Perseus Digital Library",
    type: "fuente clásica en edición crítica",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0022%3Atext%3DLibrary%3Abook%3D2%3Achapter%3D5%3Asection%3D2",
    summary:
      "Da el paralelo formal que la ficha usa y sus medidas exactas: la hidra criada en el pantano de Lerna, con cuerpo enorme y nueve cabezas, ocho mortales y la del medio inmortal, que salía a arrasar el ganado y los campos y a la que Heracles sólo venció con la ayuda de Yolao quemando los cuellos.",
    limitation:
      "Es griega y pertenece al ciclo de los trabajos de Heracles: su estructura es de combate y muerte, mientras la Sierpe sólo pasa. La coincidencia de cabezas múltiples no prueba transmisión alguna y no debe convertir a la Sierpe en monstruo clásico.",
  }),
  ontanedaTeratologia2026: source({
    title: "Teratología afropacífica: la Tunda y el vocablo de la violencia en la frontera entre Ecuador y Colombia",
    author: "Juan Suárez Ontaneda",
    year: 2026,
    type: "artículo de revista arbitrada",
    url: "https://lalrp.net/articles/10.26824/lalr.660",
    summary:
      "Sostiene que la Tunda es una sola a ambos lados de la frontera y que su nombre es también un verbo: entundar, el estado de ensueño y abandono en que queda la víctima, para el que no hay otro vocabulario. Rastrea los registros desde el periodo colonial en Ecuador hasta las etnografías, cuentos y canciones del siglo XX, con Adalberto Ortiz entre ellos, y lee a la criatura como figura de la frontera y del ciclo largo de violencias sobre los niños del Pacífico.",
    limitation:
      "Es crítica literaria y cultural: no recoge versiones nuevas ni aporta narradores colombianos. Su centro de gravedad es Esmeraldas y la lectura fronteriza, y no menciona en ningún momento a la Tulavieja.",
  }),
  archivesTulivieja2018: source({
    title: "La Tulivieja, Panama",
    author: "USC Digital Folklore Archives, Universidad del Sur de California",
    year: 2018,
    type: "archivo universitario de tradición oral",
    url: "https://folklore.usc.edu/la-tulivieja-panama/",
    summary:
      "Es la pieza que permite separar los dos nombres que el sitio venía fundiendo: registra la Tulivieja como leyenda panameña, contada por una joven nacida y criada en Ciudad de Panamá, con su trama propia —la mujer que ahoga a su hijo, el castigo divino, la cara llena de agujeros, las alas de murciélago, las patas de gallina, el sombrero de tule y los pechos llenos de leche—, sin pata de molinillo, sin entunde y sin suplantación de la madre.",
    limitation:
      "Es panameña y describe a la Tulivieja, no a la Tunda. Además es una entrada de archivo estudiantil: la narradora tenía veinte años, contaba desde Los Ángeles el 24 de abril de 2018 y ella misma especula con un parentesco con La Llorona mexicana, especulación que no se recoge.",
  }),
  bolivarFondo: source({
    title: "Fondo Documental Afro-Andino",
    author: "Universidad Andina Simón Bolívar y Proceso de Comunidades Negras; archivo reunido por Juan García Salazar",
    type: "archivo de tradición oral",
    url: "https://www.uasb.edu.ec/vinculacion/fondo-documental-afro%E2%88%92andino/",
    summary:
      "Es el depósito donde está grabada la Tunda del lado ecuatoriano: más de tres mil horas de audio y 1.333 archivos de tradición oral de Esmeraldas y el valle del Chota, recogidos durante más de treinta años entre decimeros, curanderos de culebra, arrulladoras y cuenteros.",
    limitation:
      "La página institucional describe el acervo pero no publica los relatos: ninguna versión de la Tunda se consultó aquí de primera mano. Es material afroecuatoriano, no colombiano, y el cotejo con las versiones de Tumaco está pendiente.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  duncanAnancy2015: source({
    title: "Anancy y el tigre en la literatura oral afrodescendiente",
    author: "Quince Duncan",
    year: 2015,
    type: "artículo de revista arbitrada (Cuadernos de Literatura, vol. XIX, n.º 38, pp. 65-78)",
    url: "https://revistas.javeriana.edu.co/index.php/cualit/article/view/12949",
    summary:
      "Rastrea a Anansi desde la cultura akan —donde Kuaku Anansi es la persona de Nyame que teje el universo— hasta el Gran Caribe, y dice expresamente que su presencia llega hasta el Pacífico colombiano. Registra la variedad de nombres (Hermano Araña, Breda Nansi, Anancy, Ananse, Aunt Nancy, Ti Malice, Nansi), el par araña débil y astuta frente al Hermano Tigre fuerte y torpe, la fórmula jamaicana de Jack Mandora con que el narrador se descarga de la historia, y transcribe como «Ejemplo 1. Pacífico colombiano» el cuento «Hermano tigre, hermano Anancy y el pescado frito», en el que Anancy salva a su familia subiéndola a un árbol de calabaza y hiere al Tigre.",
    limitation:
      "Es un ensayo de síntesis de un autor costarricense, no trabajo de campo, y no menciona el Anansi chocoano del campanario. El cuento que presenta como «Ejemplo 1. Pacífico colombiano» lo toma del portal Colombia Aprende sin narrador ni lugar; Pochet (2012) lo registra en cambio como relato escrito de Lolia Pomare, de San Andrés, así que su procedencia real es isleña. La fórmula de Jack Mandora y buena parte del marco son jamaicanos y centroamericanos.",
  }),
  rodriguezcuentos2012: source({
    title: "Los cuentos de Anancy: huella indeleble de una tradición akán",
    author: "Lina Pochet Rodríguez",
    year: 2012,
    type: "artículo de revista arbitrada (Revista de Lenguas Modernas, n.º 17, pp. 189-207, Universidad de Costa Rica)",
    url: "https://archivo.revistas.ucr.ac.cr/index.php/rlm/article/view/12667",
    summary:
      "Compara la estructura —personajes, escenarios, tono, conflictos y temas— de un corpus de ciento cincuenta cuentos de Anancy reunidos en 2001 en San Andrés, Providencia y Santa Catalina y en Limón, con cuentos jamaiquinos y tres relatos akán de referencia. Su tabla enumera los relatos isleños escritos por Lolia Pomare («El muñeco de brea», «Anancy le hace una jugarreta a Tigre», «Hermano Tigre, Hermano Anancy y el pescado frito», «Anancy y Tigre utilizan los servicios de Mico como juez», entre otros) y muestra cómo el narrador sitúa la acción en Jamaica, San Andrés, Providencia o aldeas ghanesas.",
    limitation:
      "Es un trabajo distinto del artículo de 2011 de la misma autora que la ficha ya cita (Cuadernos de Antropología), aunque sale del mismo corpus. Trata el ciclo isleño y costarricense, no el episodio chocoano del campanario; buena parte de la comparación es con Jamaica y Limón, fuera de Colombia, y los relatos de San Andrés se citan por título, sin transcribirlos.",
  }),
  corredorFormaciones2021: source({
    title: "Formaciones de alteridades e identidades desde el Caribe insular: memorias y huellas de africanía en San Andrés Islas",
    author: "Laura García Corredor",
    year: 2021,
    type: "artículo de revista arbitrada con trabajo de campo (Fronteiras: Revista de História, vol. 23, n.º 42, pp. 87-108)",
    url: "https://ojs.ufgd.edu.br/index.php/FRONTEIRAS/article/view/15808",
    summary:
      "Recoge en entrevistas con raizales de San Andrés cómo se nombra a Anansi en la memoria isleña: personaje vinculado a las huellas de africanía tanto en el Caribe como en el Pacífico afrodescendiente, héroe de la Costa de Oro que con su inteligencia vence la fuerza del Tigre, y figura «contraelite» de estilo criollo, rebelde frente a la respetabilidad de cuño británico; sigue en esto a Nina S. de Friedemann, «Religión y tradición oral en San Andrés y Providencia» (1989).",
    limitation:
      "Anansi ocupa un párrafo y una nota en un artículo sobre identidad raizal; no transcribe ningún cuento ni dice nada del Anansi chocoano. La caracterización es de Friedemann 1989, cuyo texto no está digitalizado y no se leyó de primera mano. La revista es brasileña.",
  }),
  mRitos1961: source({
    title: "Ritos de la muerte en el Alto y Bajo Chocó",
    author: "Rogerio Velásquez M.",
    year: 1961,
    type: "etnografía (Revista Colombiana de Folclor 2 (6): 9-76), reeditada en «Antropología hecha en Colombia», tomo 1, Universidad del Cauca, ICANH y ALA, 2017, pp. 359-",
    url: "https://asociacionlatinoamericanadeantropologia.net/portal/wp-content/uploads/2018/09/Antropologia_hecha_en_Colombia_T1_-_2017.pdf",
    summary:
      "Es la descripción chocoana de primera mano de cómo se trata a las ánimas, dedicada a informantes del Atrato, Buenaventura y el Patía. Registra que las ánimas que no han llegado a puerto seguro se aparecen en sueños, como estrellas errantes o ramas que tiemblan en la corriente, y exigen oraciones; que las ánimas condenadas causan tormentas, dañan siembras y «asisten a sitios en que no se les llama»; que los muertos se muestran de frente, con vestido talar y la cara borrosa, sobre todo en Semana Santa; que durante la gravedad de un enfermo se cambian los vestidos de color por pálidos o blancos y hacer bailes crea enemistades; que el luto se cierra con un baile en que se come y se bebe para olvidar; y transcribe los cantos del velorio, prohibidos en gualíes y velatorios de niños.",
    limitation:
      "No menciona a Kijimba ni ningún baile de ánimas que invite a un vivo: sostiene el marco de creencias sobre los difuntos en el Chocó y la separación entre velorio, gualí y relato que hace la ficha, no el relato mismo. Es un texto de 1961 con juicios de su época sobre la población («ignorancia», «ridícula fiesta») que no deben trasladarse a la ficha. La paginación citada es la de la reedición de 2017; el URL es el PDF completo del tomo en la Asociación Latinoamericana de Antropología, coeditora.",
  }),
  solanoTras2006: source({
    title: "Tras las huellas de la Candelaria en los litorales colombianos",
    author: "Laura De la Rosa Solano y Lina del Mar Moreno Tovar",
    year: 2006,
    type: "artículo de revista con trabajo de campo (Memorias: revista digital de historia y arqueología desde el Caribe, n.º 5, Universidad del Norte)",
    url: "https://rcientificas.uninorte.edu.co/memorias/es/article/view/287",
    summary:
      "Documenta que Beté celebra como fiesta patronal la de la Virgen de la Candelaria, igual que Bagadó, Cértegui, Tadó y Paimadó, y recoge de la maestra e historiadora quibdoseña Ezequiela Urrutia un relato del propio pueblo: la imagen original de Beté era una aparición, un cuadro milagroso, que alguien venido de Cartagena cambió y se llevó, de modo que «la famosa» del cerro de la Popa «es de Beté»; el historiador Sergio Mosquera confirma la historia pero atribuye el cambio a viajeros y no a un cura. Es la única fuente hallada que dice cuáles son las patronales de Beté.",
    limitation:
      "El trabajo de campo es sobre todo de Paimadó (2002-2004) y Beté aparece en dos pasajes; no menciona la Sierpe ni a los pescadores. El relato de la imagen es de una informante de Quibdó, no de un vecino de Beté. Hay copia en Redalyc; se prefiere la del editor.",
  }),
  lemosTamarasistemas2012: source({
    title: "Los sistemas productivos tradicionales de comunidades negras del Medio Atrato chocoano, su relación con el clima y su vulnerabilidad frente a eventos climáticos extremos",
    author: "Liliana L. Lemos-Támara, William Murillo-López y José Daniel Pabón-Caicedo",
    year: 2012,
    type: "artículo de revista arbitrada (Bioetnia, vol. 9, n.º 1, Instituto de Investigaciones Ambientales del Pacífico)",
    url: "https://bioetnia.iiap.org.co/index.php/bioetnia/article/view/82",
    summary:
      "Sitúa el lugar con precisión: Beté es la cabecera del municipio de Medio Atrato, el río Beté es una de las subcuencas de la margen occidental del Atrato y la comunidad de Beté pertenece a la zona 4 de la ACIA, donde se vive del corte de madera y de la pesca. Describe esa pesca con los datos de las entrevistas en las comunidades: se pesca todo el año, sobre todo en las subiendas de enero a marzo; con el río crecido los pescadores no salen y con el río bajo escasea el pescado; se usan atarraya, copón, anzuelo, chinchorro y trasmallo, y se capturan bocachico, dentón, sabaleta, mojarra y barbudo. Registra además avalanchas en Beté.",
    limitation:
      "Es un estudio de clima y sistemas productivos: no trata relatos, fiestas ni seres del agua, y no menciona la Sierpe. Sirve para el lugar y el oficio de los pescadores que la ficha describe, no para el relato.",
  }),
  bernalCosmograma2024: source({
    title: "Cosmograma de la gente negra de Guapi, Colombia: cosmovisión y conocimiento ancestral",
    author: "Ernesto Hernández Bernal y Anairamiz Aranguren Becerra",
    year: 2024,
    type: "artículo de revista arbitrada con testimonios de campo (Boletín Antropológico, año 42, n.º 107, pp. 8-35, Universidad de Los Andes, Mérida)",
    url: "https://doi.org/10.53766/BA/2024.01.107.01",
    summary:
      "Dedica un apartado a la Tunda en Guapi: mujer que toma la apariencia de un familiar o conocido, desvía a la persona de su camino y se la lleva al monte, donde vive; se la reconoce porque una pierna es de niño y la otra un molinillo de madera. Registra que se la invoca contra los niños que se meten al monte o desobedecen y contra los hombres infieles, trasnochadores o borrachos; que para rescatar al entundado van al monte los padrinos llamándolo por su nombre mientras otros rezan, dicen groserías o tocan instrumentos, a veces con el cura; y trae dos testimonios de 2017: el del que camina todo el día y vuelve a pasar por el mismo sitio sin darse cuenta, y el de una niña hallada sujeta en una mesa comiendo camarón, «porque la Tunda los pone a comer camarón», que quedó muda unos diez días. Cita además la quebrada de la Tunda del barrio San Pablo, donde una mujer bonita y mal peinada con pata de palo cantaba «tundu, tundu, tundu» y echaba camarones en un canasto, y la definición de Yacup (1990).",
    limitation:
      "Es de Guapi, en la costa del Cauca, no de Tumaco: sirve como variante vecina del mismo ser. El artículo trata sobre todo de las azoteas y la cosmovisión agrícola y la Tunda ocupa un apartado; los testimonios son anónimos. La revista es venezolana y su repositorio sólo publica por http: el DOI resuelve a http://www.saber.ula.ve/handle/123456789/50560.",
  }),
  guayaquildare2019: source({
    title: "«Te daré una Tunda», Editorial UArtes presenta libro de Ibsen Hernández",
    author: "Universidad de las Artes (Guayaquil), sobre el libro de Ibsen Hernández Valencia",
    year: 2019,
    type: "nota editorial de presentación de libro",
    url: "https://www.uartes.edu.ec/sitio/blog/2019/02/21/te-dare-una-tunda-editorial-uartes-presenta-libro-de-ibsen-hernandez/",
    summary:
      "Presenta el libro con que el educador afroecuatoriano Ibsen Hernández Valencia relee a la Tunda como «Tunda libertaria»: una cimarrona que se hizo montaraz, invitaba a sus hermanos a meterse a la montaña a construir palenques y fue satanizada por la sociedad dominante y la Iglesia; lee la pata de molinillo como la mutilación que le hizo el opresor. Es la lectura emancipadora de la figura que la ficha resume al hablar de la cadena de violencias que va de la esclavización al reclutamiento.",
    limitation:
      "Es la nota de la editorial, no el libro, que no está en abierto; recoge palabras del autor en una presentación. Es una interpretación de autor desde Esmeraldas, del lado ecuatoriano, no un registro de tradición oral, y no aporta ninguna versión del relato de Tumaco.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  charcoVisiones2016: source({
    title: "Visiones y seres maravillosos del Pacífico (Río de Letras. Territorios Narrados, 21)",
    author: "Comunidad Educativa de El Charco y La Tola (Nariño); ilustr. Nelly Zoraida Cuero",
    year: 2016,
    type: "cartilla de tradición oral (Ministerio de Educación Nacional y Save the Children)",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/plan-lectura-2021/territorios-narrados-parte-1/Visiones_y_seres_maravillosos_del_pacifico.pdf",
    summary:
      "El registro que da el título: el Riviel es un sacerdote que quemó un rosario y fue convertido en visión; flota sobre una mochila o una tabla en noches de menguante, embruja y vuelve sonámbula a la gente; trae el caso de don Casimiro y la copla «tu rosario te condena» (pp. 19-21).",
    limitation:
      "Texto colectivo escolar, sin narradores identificados salvo don Casimiro; redacción adaptada para niños.",
  }),
  rodriguezescuela2013: source({
    title: "La escuela de tradición oral, una estrategia pedagógica ... del municipio de Magüí Payán",
    author: "Luz Ángela Pazos Rodríguez",
    year: 2013,
    type: "trabajo de grado (Especialización en Pedagogía de la Creatividad, Universidad de Nariño)",
    url: "https://sired.udenar.edu.co/2701/1/89852.pdf",
    summary:
      "En el río Patía el riviel es una lucecita azul o verde que persigue a los pescadores nocturnos hacia la muerte y se espanta con la palabra atarraya (p. 47).",
    limitation:
      "Cuatro líneas dentro de una propuesta pedagógica; no identifica al narrador de este relato.",
  }),
  penaPinzonPatrimonios: source({
    title: "Patrimonios emergidos. Herencia inmaterial y su vínculo con el patrimonio sumergido en San Andrés de Tumaco y Buenaventura (Boletín OPCA n.º 13)",
    author: "Víctor Andrés Pérez Bermúdez; Wilson Peña-Pinzón",
    type: "artículo de divulgación académica (Observatorio de Patrimonio Cultural y Arqueológico, Universidad de los Andes)",
    url: "https://cienciassociales.uniandes.edu.co/opca/articulo/patrimonios-emergidos-herencia-inmaterial-y-su-vinculo-con-el-patrimonio-sumergido-en-san-andres-de-tumaco-y-buenaventura/",
    summary:
      "La versión de Tumaco: un pirata que abandonó a su tripulación por un tesoro y vaga maldito en una canoa partida en dos con una linterna; le atribuyen naufragios y lo vinculan con la tradición afroecuatoriana.",
    limitation:
      "No transcribe testimonios ni da narradores; la página no indica año.",
  }),
  rTVCMitos2024: source({
    title: "Mitos y leyendas de Buenaventura, el puerto del Pacífico",
    author: "Señal Colombia (RTVC)",
    year: 2024,
    type: "nota de medio público",
    url: "https://www.senalcolombia.tv/cultura/mitos-leyendas-Buenaventura",
    summary:
      "La variante del pescador: el Riviel en canoa sin proa pregunta «amigo, ¿cómo está la pesca?» y vuelve pesado el potro; si no le contestan, confunde el rumbo hasta el amanecer.",
    limitation:
      "Divulgación sin autor ni fuentes; repite formulaciones que circulan en la red.",
  }),
  comejenriviel2020: source({
    title: "El riviel se los sigue llevando",
    author: "Harrinson Cuero (El Comején)",
    year: 2020,
    type: "columna de prensa regional (Pacífico)",
    url: "https://elcomejen.com/2020/09/18/el-riviel-se-los-sigue-llevando/",
    summary:
      "Usa al riviel, espíritu que boga en un ataúd y sale en la menguante entre el Mira y el Guapi, como figura de los grupos armados que desaparecen líderes del litoral.",
    limitation:
      "Columna de opinión: toma la leyenda como metáfora; no es un registro del relato.",
  }),
  espanolRiviel2026: source({
    title: "El Riviel",
    author: "Wikipedia en español",
    year: 2026,
    type: "enciclopedia colaborativa",
    url: "https://es.wikipedia.org/wiki/El_Riviel",
    summary:
      "Resume la variante esmeraldeña (ataúd, cruz por remo, lámpara en la proa, ser sin rostro) y los remedios de gritar nombres de aparejos de pesca o rezar la Magnífica.",
    limitation:
      "Wikipedia, apoyada en la tesis de la UASB que no se pudo leer; sólo para el paralelo ecuatoriano.",
  }),
};

export const afroSourceKeysBySlug = {
  anansi: [
    "arochaAnanse",
    "bejaranoAnanse",
    "smithsonianAnansiJourney",
    "smithsonianAshanti",
    "vaninPacific",
    "minCulturaAfro",
  ],
  "tulavieja-tunda": [
    "valenciaTunda",
    "minCulturaTunda",
    "banrepPacificOral",
    "unescoMarimba",
    "vaninPacific",
    "minCulturaAfro",
    "minCulturaOral",
  ],
  "kijimba-de-las-animas": [
    "kijimbaBook",
    "unadAlabaos",
    "unicaucaDeath",
    "minCulturaViche",
    "unescoMarimba",
    "vaninPacific",
    "metDanceDeath",
    "britishUnderworld",
  ],
  "la-sierpe-de-bete": [
    "chocoTourismSierpe",
    "medioAtratoRisk",
    "unidadVictimasAtrato",
    "minCulturaViche",
    "minCulturaCuasimodo",
    "minCulturaSanPacho",
    "metHydra",
    "banrepSerpents",
  ],
  "el-riviel-del-rosario": [
    "cnhmBuenaventura",
    "opcaRiviel",
    "uasbRiviel",
    "rivielActors",
    "udenarOralPacific",
    "vaninPacific",
    "minCulturaViche",
  ],
  "como-aparecio-la-muerte-en-el-choco": [
    "velasquezDeath",
    "rogerioProfile",
    "vaninPacific",
    "unicaucaDeath",
    "minCulturaViche",
    "afriprovDeath",
    "bakoDeath",
  ],
};

/**
 * El reparto ya era por mito: `afroSourceKeysBySlug` le da a cada slug su lista.
 * Lo que faltaba era que una entrada pudiera decir, además de qué obra, qué dice
 * esa obra sobre ese relato: `{ key, summary, limitation }`. La ficha
 * bibliográfica la sigue fijando el pool.
 */
export function pickAfroSources(slug, declaradas) {
  const entradas = declaradas?.length ? declaradas : afroSourceKeysBySlug[slug];
  if (!entradas) throw new Error(`No hay dossier Afrocolombiano para ${slug}.`);
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = afrocolombianSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`${slug}: fuente desconocida ${visto}.`);
    }
    if (vistas.has(key)) continue;
    vistas.add(key);
    salida.push(
      typeof entrada === "string"
        ? selected
        : {
            ...selected,
            ...(entrada.summary ? { summary: entrada.summary } : {}),
            ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
          },
    );
  }
  return salida;
}
