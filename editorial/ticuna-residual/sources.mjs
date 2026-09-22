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

export const ticunaResidualSources = {
  rodriguezCatalog: source({
    title: "Muestra de literatura oral en Leticia, Amazonas",
    author: "María Luisa Rodríguez de Montes; Instituto Caro y Cuervo",
    year: 1981,
    type: "registro bibliográfico de la recopilación histórica",
    url: "https://cendoc.caaap.org.pe/cgi-bin/koha/opac-detail.pl?biblionumber=2824&shelfbrowse_itemnumber=3655",
    summary:
      "Confirma autora, edición, extensión y estructura del volumen que reúne análisis, textos y glosario de relatos grabados en Leticia.",
    limitation:
      "El catálogo no muestra las páginas del libro ni permite identificar desde la web al informante de cada relato Ticuna.",
  }),
  abcBibliotecario: source({
    title: "ABC del bibliotecario promotor de lectura",
    author: "Biblioteca Nacional de Colombia y SINIC, Ministerio de Cultura",
    year: 2010,
    type: "inventario institucional de leyendas Ticuna",
    url: "https://bibliotecanacional.gov.co/es-co/actividades/Publicaciones%20sobre%20las%20Bibliotecas%20P%C3%BAblicas/Documents/ABC%20del%20Bibliotecario.pdf",
    summary:
      "Enumera como leyendas Ticuna El sol, La luna, Los vegetales, Las aguas, El gavilán y Los micos boquiblancos, y resume sus núcleos.",
    limitation:
      "Es una síntesis de promoción de lectura y no reemplaza el texto completo, la grabación ni la atribución individual de 1981.",
  }),
  galante2018: source({
    title: "Animalidad y otredad en una muestra de literatura oral de Leticia, Amazonas",
    author: "Andrés González Galante",
    year: 2018,
    type: "tesis de análisis literario del corpus de Rodríguez de Montes",
    url: "https://es.scribd.com/document/871355828/u-821011",
    summary:
      "Analiza la transcripción del volumen de 1981 y cita el abandono, el engaño con harina y la transformación de los niños en micos.",
    limitation:
      "Es una lectura académica posterior alojada en una plataforma secundaria; depende del corpus publicado y no es otra tradición oral independiente.",
  }),
  moruapu2000: source({
    title: "Historias de los abuelos de Moruapü: versión libre en castellano",
    author:
      "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila",
    year: 2000,
    type: "compilación comunitaria para educación bilingüe Tikuna",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "Publica relatos atribuidos del Sol, la Luna, los alimentos y la canoa de Moe, útiles para distinguir variantes y personajes.",
    limitation:
      "Es una versión libre en castellano y sus relatos no se fusionan con la recopilación de Leticia como si fueran un único testimonio.",
  }),
  santos2010: source({
    title: "Narración tikuna del origen del territorio y de los humanos",
    author: "Abel Antonio Santos Angarita",
    year: 2010,
    type: "artículo académico basado en historia oral Tikuna",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/10900",
    summary:
      "Publica la narración de Marcelino Noé y mayores sobre Ngutapa, Yoí, Ípi, Wone, el agua, el huito, Eware y la pesca de la gente.",
    limitation:
      "Reúne aportes de más de una situación de narración; la revisión conserva esa atribución y no rellena sus silencios.",
  }),
  contraSilencio: source({
    title: "Contra el silencio: lenguas originarias y justicia lingüística",
    author: "Agustín Panizo; entrevista y registros de Paula Letts",
    year: 2022,
    type: "libro institucional con testimonios Ticuna atribuidos",
    url: "https://diliandes.funproeibandes.org/wp-content/uploads/2023/12/Contra-el-silencio.-Lenguas-originarias-y-justicia-linguistica-libro.pdf",
    summary:
      "Publica la narración de José Aparicio Fonseca sobre la lupuna y pasajes de Humberto Yumbato sobre Techi, Ípi, el huito y la pesca humana.",
    limitation:
      "El capítulo enlaza testimonios de comunidades peruanas y comentarios de entrevista; cada pasaje debe conservar su procedencia particular.",
  }),
  arbolAgua: source({
    title: "Madre Selva: El árbol de Agua Grande",
    author: "Leidy Constanza Duarte Castro; Universidad Distrital Francisco José de Caldas",
    year: 2016,
    type: "proyecto académico de creación que reproduce un mito Ticuna",
    url: "https://repository.udistrital.edu.co/bitstreams/931e1d18-8afd-4157-87f8-eb08062b5842/download",
    summary:
      "Reproduce la secuencia de Yoí e Ípi, las dos ardillas, el perezoso, el ají o las hormigas y la caída del árbol que forma aguas.",
    limitation:
      "No identifica al narrador de la versión reproducida y adapta el relato dentro de un proyecto de danza; se usa como contraste, no como fuente oral primaria.",
  }),
  goulard2009: source({
    title: "Entre mortales e inmortales: el ser según los Ticuna de la Amazonía",
    author: "Jean-Pierre Goulard",
    year: 2009,
    type: "monografía antropológica de acceso abierto",
    url: "https://books.openedition.org/ifea/3927",
    summary:
      "Analiza personas, transformaciones, parentesco y episodios de Yoí e Ípi sin reducir el ciclo a una cronología simple.",
    limitation:
      "Es una interpretación antropológica y no reemplaza la voz de cada narrador ni prueba que una variante pertenezca a todas las comunidades.",
  }),
  lopez2002: source({
    title: "Los ticuna frente a los procesos de nacionalización en la frontera entre Brasil, Colombia y Perú",
    author: "Claudia Leonor López Garcés",
    year: 2002,
    type: "artículo académico de antropología fronteriza",
    url: "https://www.redalyc.org/pdf/1050/105015289004.pdf",
    summary:
      "Sitúa la circulación de variantes del ciclo Ticuna en comunidades atravesadas por fronteras y políticas nacionales.",
    limitation:
      "Aporta contexto histórico y territorial; no confirma por sí solo cada escena de las siete rutas.",
  }),
  icanhProfile: source({
    title: "Pueblo Tikuna",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "perfil institucional del pueblo",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/TIKUNA.php",
    summary:
      "Sitúa al pueblo Tikuna en la cuenca amazónica transfronteriza y aporta contexto histórico y cultural contemporáneo.",
    limitation:
      "Es una síntesis institucional y no se usa para completar escenas, prácticas ni una versión única de los relatos.",
  }),
  parques2024: source({
    title: "Siete cantos de la sabiduría ancestral Tikuna",
    author: "Parques Nacionales Naturales de Colombia y comunidades Tikuna",
    year: 2024,
    type: "publicación institucional y comunitaria de contexto vivo",
    url: "https://www.parquesnacionales.gov.co/sala-de-prensa/publicaciones/7-cantos-de-la-sabiduria-ancestral-tikuna/",
    summary:
      "Documenta continuidad de lengua, memoria y relaciones territoriales en el Trapecio Amazónico.",
    limitation:
      "No narra estos argumentos ni se usa para reproducir cantos o conocimientos ceremoniales.",
  }),
  urbinaTree: source({
    title: "Las palabras del origen: Moniya Amena, el árbol de la abundancia",
    author: "Fernando Urbina Rangel; relato de Kïneraï y otros narradores Huitoto",
    year: 2010,
    type: "fuente comparativa amazónica directa y atribuida",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "Publica otro gran árbol amazónico cuya caída distribuye alimentos y organiza el mundo humano.",
    limitation:
      "El árbol Huitoto reparte frutos y no forma el Amazonas mediante el perezoso y las ardillas; la comparación no implica influencia.",
  }),
  grimms: source({
    title: "Grimms' Fairy Tales: Hansel and Gretel and The Seven Ravens",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    year: 1812,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "Conserva cuentos europeos de niños abandonados y de hermanos transformados en aves.",
    limitation:
      "Los bosques, agentes, transformaciones y desenlaces europeos difieren de las relaciones amazónicas; no prueban origen compartido.",
  }),
  eskimoMoon: source({
    title: "Eskimo Folk-Tales: The Sun and the Moon",
    author: "Knud Rasmussen; Project Gutenberg",
    year: 1921,
    type: "fuente folclórica comparativa traducida",
    url: "https://www.gutenberg.org/ebooks/46972",
    summary:
      "Publica un relato ártico donde dos hermanos quedan asociados con Sol y Luna después de una transgresión y una persecución.",
    limitation:
      "Procede de otra ecología y otra historia de traducción; no contiene wocha, huito, chagra ni el árbol de ascenso Ticuna.",
  }),
  ovidPhaethon: source({
    title: "Metamorphoses, Book 2: Phaethon",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D2%3Acard%3D1",
    summary:
      "Narra el intento de conducir el carro solar y el peligro de una luz celeste fuera de medida.",
    limitation:
      "El carro, la filiación divina y la catástrofe grecorromana no aparecen en el ascenso Ticuna mediante achiote.",
  }),
  ovidMonkeys: source({
    title: "Metamorphoses, Book 14: the Cercopes",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D14%3Acard%3D75",
    summary:
      "Incluye la transformación punitiva de los Cercopes en monos y permite comparar causas distintas de una forma animal.",
    limitation:
      "Es una sanción divina por engaños en un poema romano; no trata niños huérfanos, hambre ni cuidado familiar.",
  }),
  demeter: source({
    title: "Homeric Hymn 2 to Demeter",
    author: "tradición griega; Perseus Digital Library",
    type: "fuente religiosa comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0138%3Ahymn%3D2",
    summary:
      "Relaciona la pérdida de una mujer, el hambre de la tierra y el retorno del crecimiento vegetal.",
    limitation:
      "La agricultura estacional griega y el pacto olímpico no contienen una canasta robada ni la chagra amazónica.",
  }),
  genesisCreation: source({
    title: "Genesis 1-3: luminaries, plants and the garden",
    author: "New Revised Standard Version Updated Edition; Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%201-3&version=NRSVUE",
    summary:
      "Presenta astros, aguas y plantas dentro de una secuencia de creación y una pérdida ligada al alimento.",
    limitation:
      "La creación por mandato, el jardín y la prohibición no equivalen a ascensos humanos, árboles-río o canastas Ticuna.",
  }),
  genesisBrothers: source({
    title: "Genesis 4: Cain and Abel",
    author: "New Revised Standard Version Updated Edition; Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%204&version=NRSVUE",
    summary:
      "Narra una ruptura violenta entre hermanos y la separación posterior del sobreviviente.",
    limitation:
      "No contiene Techi, huito, transformación en peces ni fundación de pueblos mediante pesca; no es clave explicativa del ciclo Ticuna.",
  }),
  plutarchRomulus: source({
    title: "Plutarch, Life of Romulus",
    author: "Plutarco; Perseus Digital Library",
    type: "fuente histórica-literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A2008.01.0061%3Achapter%3D1",
    summary:
      "Conserva la tradición de dos hermanos cuya rivalidad y separación quedan asociadas con un origen colectivo.",
    limitation:
      "La fundación urbana romana, el fratricidio y la cronología heroica son ajenos al tejido amazónico de Yoí e Ípi.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  lettsContra2022: source({
    title: "Contra el silencio. Lenguas originarias y justicia lingüística, cap. 12 «La infinita mitología de los ticuna»",
    author: "Agustín Panizo; entrevista a Paula Letts",
    year: 2022,
    type: "libro institucional con testimonios ticuna atribuidos",
    url: "https://diliandes.funproeibandes.org/wp-content/uploads/2023/12/Contra-el-silencio.-Lenguas-originarias-y-justicia-linguistica-libro.pdf",
    summary:
      "Pp. 111-115: Letts cuenta la caída de la lupuna, el corazón que se vuelve humarí, Techi escondida en el tururí, la risa que la delata, el castigo del huito, la caída de Ipi al mundo de abajo, el rallado y la pesca con yuca blanca. Intercala citas de José Aparicio Fonseca (Yahuma Primera Zona) y Humberto Yumbato (Bufeococha).",
    limitation:
      "Es un libro peruano y sus narradores son del lado peruano del Amazonas. Las citas en bloque vienen de Woxrexcüchiga, el ritual de la pubertad en el pueblo Ticuna (Ministerio de Cultura del Perú, 2016), cuyo repositorio no se pudo abrir (barrera antibots); lo que une las citas es resumen de Letts, no narración grabada, y no hay fecha de grabación.",
  }),
  filhoamadurecimento2017: source({
    title: "O amadurecimento dos corpos e do cosmos – mito, ritual e pessoa ticuna",
    author: "Edson Tosta Matarezio Filho",
    year: 2017,
    type: "artículo de antropología (Revista de Antropologia, USP)",
    url: "https://revistas.usp.br/ra/article/view/132073",
    summary:
      "Resume la secuencia de la samaumeira, la «filha do umari» (Tetchi), el embarazo por Ipi, el jenipapo en el que Ipi se ralla, la borra que se vuelve peces y la pesca de los magüta; recoge de Nimuendajú (1952, p. 134) la separación final: Ipi río abajo por el Solimões, Yoí río arriba.",
    limitation:
      "Trabaja con comunidades ticuna de Brasil y es interpretación, no transcripción. Su lado del río para Ipi contradice el de José Aparicio Fonseca.",
  }),
  goulardColores2013: source({
    title: "Colores y olores del cuerpo tikuna",
    author: "Jean-Pierre Goulard",
    year: 2013,
    type: "artículo de antropología (Maguaré, Universidad Nacional)",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/48835",
    summary:
      "Maguaré 27 (2), pp. 67-90: vuelve al mito de origen para explicar los clanes; los gemelos pescan pecaríes de labios blancos y de collar que se hacen humanos, y toda esa gente procede de la carne del huito, en la que Ipi se había raspado el cuerpo. Relaciona el huito con el color negro del cuerpo tikuna.",
    limitation:
      "Es un análisis de clanes, colores y olores; resume el episodio siguiendo sobre todo a Nimuendajú y no cita a los narradores de Panizo.",
  }),
  hohenthalTukuna1952: source({
    title: "The Tukuna",
    author: "Curt Nimuendajú; ed. Robert H. Lowie; trad. William D. Hohenthal",
    year: 1952,
    type: "monografía etnográfica",
    url: "https://www.ucpress.edu/books/the-tukuna",
    summary:
      "Registra entre los ticuna del Solimões el ciclo de Dyoi e Ipi, la pesca de la gente y la separación de los hermanos hacia oriente y occidente, que Matarezio y Goulard retoman (pp. 61 y 134).",
    limitation:
      "El enlace es la ficha de la editorial; el texto se consultó en la copia extraída del proyecto. Es trabajo de campo de 1929 y 1941-1942 en Brasil.",
  }),
  rangelpalabras2010: source({
    title: "Las palabras del origen. Breve compendio de la mitología de los uitotos",
    author: "Fernando Urbina Rangel",
    year: 2010,
    type: "antología de mitos uitoto (Ministerio de Cultura)",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "Cuenta que hubo que derribar el Árbol de la abundancia y que, tumbado, su tronco formó el gran Amazonas y sus ramas la red de afluentes: el paralelo uitoto más cercano a la lupuna de Yahuma.",
    limitation:
      "Es otro pueblo y el árbol da alimentos, no un corazón que se vuelva mujer; la comparación no implica préstamo.",
  }),
  garciaTiempo2024: source({
    title: "Tiempo y espacio en El Popol Vuh. Entre mito, historia y literatura",
    author: "José Alejos García",
    year: 2024,
    type: "artículo académico (Estudios de Cultura Maya, UNAM)",
    url: "https://www.scielo.org.mx/pdf/ecm/v63/0185-2574-ecm-63-137.pdf",
    summary:
      "Glosa el pasaje en que los gemelos se lanzan a la hoguera de Xibalbá, sus huesos se arrojan al río, y al quinto día aparecen en el agua como «hombres-peces» antes de volver: el paralelo de un cuerpo deshecho que va al río y regresa.",
    limitation:
      "Es un análisis semiótico del Popol Vuh quiché, no del ciclo ticuna; se usa sólo para el paralelo de Similitudes.",
  }),
  almeidaAnimalidad2018: source({
    title: "Animalidad y otredad en una muestra de literatura oral de Leticia, Amazonas",
    author: "Andrés González Galante (dir. María Cândida Ferreira de Almeida)",
    year: 2018,
    type: "tesis de pregrado en literatura (Universidad de los Andes)",
    url: "https://repositorio.uniandes.edu.co/server/api/core/bitstreams/73b9ac2e-6ba2-40fc-871e-5060dd4c8906/content",
    summary:
      "Pp. 32-33: copia el comienzo y el final de «Origen de los micos boquiblancos» (Rodríguez de Montes 1981, pp. 100-101) y resume lo demás: tres huérfanos, la cuñada que da el caldo y guarda la presa, la harina de maíz en la boca, la huida y el hermano que llega cuando ya son micos. Lee el relato como mito de origen y señala que la transformación no se narra.",
    limitation:
      "Es una tesis literaria: el relato se conoce por dos citas y una paráfrasis, no entero. No da el nombre ni el pueblo del informante. La ficha del repositorio es https://repositorio.uniandes.edu.co/handle/1992/39146.",
  }),
  ortizMuestra1981: source({
    title: "Muestra de literatura oral en Leticia, Amazonas (reseña en el Portal de lenguas de Colombia)",
    author: "María Luisa Rodríguez de Montes; reseña de Yaty Andrea Urquijo Ortiz y Liz Castro",
    year: 1981,
    type: "libro de literatura oral (Instituto Caro y Cuervo), consultado por su reseña institucional",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-bufeo-muestra-de-literatura-oral-en-leticia/",
    summary:
      "La reseña confirma la obra de la que sale el relato: 262 páginas, publicada por el Caro y Cuervo en 1981, con relatos de seres del río y la selva y otros de dioses, brujos, héroes y jóvenes astutos.",
    limitation:
      "El portal sólo publica «El bufeo»; el texto de los micos no está en abierto y no se ha leído en el libro.",
  }),
  pulgarinRasgos2012: source({
    title: "Rasgos lingüísticos en relatos míticos tikuna: una caracterización",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2012,
    type: "tesis de maestría (Universidad Nacional, sede Amazonia)",
    url: "https://repositorio.unal.edu.co/items/7c7d7491-4077-4aa2-867b-f9453a589fea",
    summary:
      "Su catálogo de corpus, en el apartado de Historias de los abuelos de Moruapü, registra «El mico boquiblanco y el abuelo hongo» (1993) de un narrador de Nazareth: confirma, con otra fuente, que el mico boquiblanco tiene historias propias en la tradición del trapecio.",
    limitation:
      "Es un inventario y un estudio lingüístico; no trae el relato de los huérfanos.",
  }),
  jacobGrimms1812: source({
    title: "Grimms' Fairy Tales: Hansel and Gretel",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    year: 1812,
    type: "colección de cuentos populares europeos",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "En tiempo de hambre la madrastra convence al padre de dejar a los niños en el bosque; ellos vuelven con riquezas y ella ha muerto. Paralelo de la mujer que no alimenta a los hijos ajenos.",
    limitation:
      "Tradición europea sin relación con Leticia; el desenlace es opuesto y no hay transformación animal.",
  }),
  fonsecaContra2022: source({
    title: "Contra el silencio. Lenguas originarias y justicia lingüística (cap. 12, «La infinita mitología de los ticuna»)",
    author: "Agustín Panizo; entrevista a Paula Letts; narración de José Aparicio Fonseca, traducida por Ling Cándido Serra",
    year: 2022,
    type: "libro con narración ticuna atribuida (fuente primaria de la ficha)",
    url: "https://diliandes.funproeibandes.org/wp-content/uploads/2023/12/Contra-el-silencio.-Lenguas-originarias-y-justicia-linguistica-libro.pdf",
    summary:
      "En las pp. 111-112 Paula Letts resume el comienzo —la lupuna gigante Wochine que tapa el cielo, los dos pájaros carpinteros, la ardilla grande que no llega y el pelejo dormido que agarra la copa y el cielo— y cita la narración de José Aparicio Fonseca, recogida en Yahuma Primera Zona: la pequeña ardilla sube cuatro veces con ají picante, el pelejo queda colgado de las uñas, las raíces le levantan la cola y las ramas hundidas forman ríos y quebradas como la Callarú. Letts añade que el tronco formó el Amazonas y sigue con el corazón del árbol, el humarí y Techi.",
    limitation:
      "Es un libro peruano (Biblioteca Bicentenario, Lima) y la comunidad del narrador está en Loreto, Perú. La narración es una traducción al castellano citada de segunda mano desde Ministerio de Cultura del Perú 2016a, p. 239, que no se pudo abrir (repositorio con desafío antibots). Las glosas del principio y del final son de Letts, no del narrador.",
  }),
  hohenthalTukuna19522: source({
    title: "The Tukuna",
    author: "Curt Nimuendajú; ed. Robert H. Lowie; trad. William D. Hohenthal",
    year: 1952,
    type: "etnografía clásica con mitos transcritos",
    url: "https://etnolinguistica.wdfiles.com/local--files/biblio%3Animuendaju-1952-tukuna/nimuendaju_1952_tukuna.pdf",
    summary:
      "En «The Acquisition of Daylight» (pp. 123-124) la oscuridad viene de una sumaúma que cubre el cielo; Yoí e Ípi la cortan con ayuda de hormigas y comejenes, pero no cae; Yoí ofrece a la hermana de Ípi a quien suba; la ardilla grande sólo llega a la altura de un techo y la pequeña descubre un perezoso de dos dedos, al que ciega con hormigas de fuego llevadas en la cola; el rebote del árbol le dobla la cola sobre el lomo y se casa con la muchacha. No hay formación de ríos.",
    limitation:
      "Versión del lado brasileño (alto Solimões, trabajo de campo de 1929 a 1942), publicada en inglés en traducción de Hohenthal; no nombra al narrador de este episodio.",
  }),
  filhoFesta2015: source({
    title: "A Festa da Moça Nova: ritual de iniciação feminina dos índios Ticuna",
    author: "Edson Tosta Matarezio Filho",
    year: 2015,
    type: "tesis doctoral de antropología (Universidade de São Paulo)",
    url: "https://www.teses.usp.br/teses/disponiveis/8/8134/tde-16092015-164516/pt-br.html",
    summary:
      "En la p. 252 resume el mito de la samaumeira wõne derribada por Yoí como origen del día: un sapo gigante, dueño del árbol, hace que el tronco se regenere hasta que Yoí lo alimenta con caza; luego un perezoso real sujeta el cielo desde la copa y la ardillita le mete pimienta molida con papa roja en uñas, orejas, nariz y ojos; el tronco, las ramas y las hojas se vuelven el Solimões, los igarapés y los lagos. Liga el episodio a un canto de la Fiesta de la Moza Nueva.",
    limitation:
      "Es material ticuna de Brasil, en portugués, resumido por el autor dentro de un análisis ritual; el texto completo del mito está en un anexo (004) que no se cotejó. Es la única fuente abierta con el sapo que regenera el tronco.",
  }),
  castroMadre2016: source({
    title: "Madre Selva: representación de mitos y leyendas de la región amazónica colombiana a través de la danza («El árbol de Agua Grande. Mito Ticuna»)",
    author: "Leidy Constanza Duarte Castro, Universidad Distrital Francisco José de Caldas",
    year: 2016,
    type: "proyecto de grado de licenciatura con recopilación escolar de relatos",
    url: "https://repository.udistrital.edu.co/bitstreams/931e1d18-8afd-4157-87f8-eb08062b5842/download",
    summary:
      "En las pp. 86-88 reproduce una versión en que todos los animales pican el árbol llamado Lupuna, Yoí manda subir primero a la ardilla golosa, que llega a la mitad, y después a la trepadora, que encuentra a un mico perezoso con las manos en el cielo y los pies en la copa; el ají en la boca no sirve y lo logran unas hormigas llamadas twnw; la caída hace brotar el Amazonas, lagunas y afluentes, y Yoí se vuelve peces en el agua.",
    limitation:
      "No nombra narrador: el trabajo dice que los relatos los recogieron niños de un colegio de Bogotá preguntando a sus familias, y los adapta para una obra de danza. Sirve como contraste, no como registro oral atribuido.",
  }),
  faulhabericonografia2020: source({
    title: "Sol e lua na iconografia Tikuna",
    author: "Priscila Faulhaber",
    year: 2020,
    type: "artículo académico (Cosmovisiones/Cosmovisões 1 (1): 90-104)",
    url: "https://sedici.unlp.edu.ar/handle/10915/132367",
    summary:
      "En la p. 98 resume un relato ticuna en que el pueblo magüta vivía a oscuras porque un perezoso gigante sostenía el cielo desde la Wone (Ceiba pentandra); Yoí le lanza una hormiga de fuego a los ojos, el cielo cae sobre el árbol y su peso le derrite el corazón, que forma el río Amazonas y separa el día de la noche.",
    limitation:
      "Resumen de pocas líneas, sin narrador ni lugar; material de los ticuna de Brasil. No trae ardillas ni ají.",
  }),
  colombiaBamachiga2014: source({
    title: "Bamachigà. Historias del bama. Tikuna (Territorios narrados)",
    author: "Ministerio de Educación Nacional de Colombia y maestros tikuna",
    year: 2014,
    type: "libro bilingüe escolar tikuna-castellano",
    url: "https://redaprende.colombiaaprende.edu.co/media/recursos/alliances/reception/resources/b4490f4b-0881-410c-b1a3-48c51b633aa2/T%C3%ADtulo_7._Historias_del_Bama.pdf",
    summary:
      "En la historia de Metare y Mowacha (p. 90), una nota al pie dice que la historia de la ceiba ocurre antes de ellos y que del tronco derribado de la ceiba surgieron los grandes ríos del mundo, como el Amazonas. Confirma, desde una publicación colombiana en lengua, que el derribo del árbol es el origen de los ríos.",
    limitation:
      "Es una nota de una línea dentro de otro relato; no narra el derribo ni menciona ardillas ni perezoso.",
  }),
  gonzalezHistorias2000: source({
    title: "Historias de los abuelos de Moruapü. Versión libre en castellano",
    author: "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila (comps.), Asociación Eware",
    year: 2000,
    type: "compilación comunitaria tikuna con glosario",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "Su glosario identifica Wochine, el nombre que el narrador de Yahuma da a la lupuna, con la ceiba o ceibo (Ceiba pentandra), árbol «muy importante de la selva» de copa frondosa y aletas radiculares enormes. Ayuda a ver que lupuna, ceiba, sumaúma y wone nombran el mismo tipo de árbol mítico en distintas versiones.",
    limitation:
      "No narra el derribo del árbol; el dato es de glosario y de otra comunidad (Puerto Nariño y Putumayo).",
  }),
  pulgarinmitos2011: source({
    title: "Dos mitos culturales de la Alta Amazonia: relatos de un mundo humanizado",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2011,
    type: "artículo en Mundo Amazónico 2: 359-364",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/18912",
    summary:
      "Compara la geografía mítica ticuna y uitoto: entre los uitoto el paisaje sale de un líquido que inunda todo hasta que Jitoma inventa la arena; entre los ticuna, citando a Montes y a Goulard, la selva actual es resto de árboles primigenios, y en la lucha por tumbar la ceiba mítica wone Yoí e Ípi envenenan a Yuchí. Sostiene el paralelo uitoto de las similitudes.",
    limitation:
      "Artículo breve e interpretativo; no narra la caída de la ceiba ni la ardilla, y el episodio de Yuchí es otro obstáculo del mismo derribo.",
  }),
  hohenthalTukuna19523: source({
    title: "The Tukuna («The One-legged Man» y «wiikica (Orion)»)",
    author: "Curt Nimuendajú; ed. Robert H. Lowie; trad. William D. Hohenthal",
    year: 1952,
    type: "etnografía clásica con mitos transcritos",
    url: "https://etnolinguistica.wdfiles.com/local--files/biblio%3Animuendaju-1952-tukuna/nimuendaju_1952_tukuna.pdf",
    summary:
      "En las pp. 146-147 publica el mismo relato entre los ticuna: el ñame robado de la comida de un demonio que contesta desde la barriga, la pierna cortada con uñas como cuchillos, el hermano que baila semanas alrededor de árboles gaütine, la cuñada que lo empuja pasada la fecha de la fiesta, el consejo de sembrar maíz y la transformación en vá'e, gavilán que grita al empezar el verano. Añade la variante del Capitán Félix (1929), en que el mutilado sube al cielo con los gallinazos y es Orión.",
    limitation:
      "Versión del alto Solimões, Brasil, de informantes de 1941-1942 sin nombre, publicada en inglés; no es el registro de Leticia sino su paralelo más completo.",
  }),
  caroMuestra1981: source({
    title: "Muestra de literatura oral en Leticia, Amazonas (ficha del Instituto Caro y Cuervo)",
    author: "María Luisa Rodríguez de Montes; Instituto Caro y Cuervo",
    year: 1981,
    type: "página institucional sobre el libro del que sale el relato",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-bufeo-muestra-de-literatura-oral-en-leticia/",
    summary:
      "El portal de lenguas y literaturas del Caro y Cuervo presenta «El bufeo», con sus ocho versiones, como parte del libro «Muestra de literatura oral en Leticia, Amazonas» de María Luisa Rodríguez de Montes. Es la única página institucional abierta sobre el volumen de 1981 en que se publicó «Origen del gavilán», en las pp. 119-121.",
    limitation:
      "La página sólo reproduce «El bufeo»: no trae el texto del gavilán. Se cita para fijar edición y editor del registro, no como texto del relato.",
  }),
  angaritaCantos2010: source({
    title: "Cantos del ritual de la pelazón tikuna",
    author: "Emilio Angarita, Roberto Vento, Javier José y Marcelino Manduca (cantores); transcripción y traducción de Abel Santos; presentación de Baudilio Ramos y Hugo A. Ramos",
    year: 2010,
    type: "transcripción bilingüe de cantos rituales en Mundo Amazónico",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/9992",
    summary:
      "Uno de los cantos de la pelazón le dice a la muchacha iniciada que se está emplumando, «como cría de gavilán, como cría de gavilán», y otro la llama «nuestra hija (cría de gavilán)». Sostiene la similitud entre el rito para el que cazaban los hermanos y el emplumarse del herido.",
    limitation:
      "Son cantos, no un relato; la relación con el origen del gavilán es un paralelo de imagen, no una prueba de que el canto aluda a este relato.",
  }),
  lettsContra20222: source({
    title: "Contra el silencio. Lenguas originarias y justicia lingüística (entrevista a Paula Letts)",
    author: "Agustín Panizo; entrevista a Paula Letts",
    year: 2022,
    type: "libro con entrevista antropológica sobre la tradición oral ticuna",
    url: "https://diliandes.funproeibandes.org/wp-content/uploads/2023/12/Contra-el-silencio.-Lenguas-originarias-y-justicia-linguistica-libro.pdf",
    summary:
      "En las pp. 110-111 Letts explica qué llaman los ticuna «pelazón» o yüü: el rito de pubertad en que se arranca el cabello a la muchacha, pero también otras fiestas de paso de los niños con pintura de huito y achiote y danzas, que pueden hacerse juntas. Precisa la fiesta que prepara el hombre del relato.",
    limitation:
      "Material del lado peruano; no menciona el relato del gavilán.",
  }),
  faulhaberestrelas2004: source({
    title: "«As estrelas eram terrenas»: antropologia do clima, da iconografia e das constelações Ticuna",
    author: "Priscila Faulhaber",
    year: 2004,
    type: "artículo en Revista de Antropologia (USP) 47 (2)",
    url: "https://www.scielo.br/j/ra/a/Hmktwpjvbr4BzjjgGDKw9yt/?lang=pt",
    summary:
      "Reconstruye con comunidades ticuna el calendario y las constelaciones: los astros «eran terrenos», es decir, tuvieron vida en la tierra antes de subir; el gavilán real es epónimo clánico y une el mundo de arriba con la subsistencia; y el movimiento y el canto de las aves sirven de señales del ciclo anual. Da el marco del vá'e que grita al empezar el verano y de la variante en que el mutilado sube como Orión.",
    limitation:
      "Material de los ticuna de Brasil; no trae este relato ni la variante de Orión que recoge Nimuendajú.",
  }),
};

const sourceKeysBySlug = {
  "origen-del-sol": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "moruapu2000",
    "santos2010",
    "goulard2009",
    "icanhProfile",
    "ovidPhaethon",
    "genesisCreation",
  ],
  "origen-de-la-luna": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "moruapu2000",
    "goulard2009",
    "icanhProfile",
    "eskimoMoon",
    "ovidPhaethon",
    "genesisCreation",
  ],
  "origen-del-agua": [
    "contraSilencio",
    "arbolAgua",
    "santos2010",
    "moruapu2000",
    "goulard2009",
    "icanhProfile",
    "urbinaTree",
    "genesisCreation",
  ],
  "origen-de-los-vegetales-cultivaldos": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "galante2018",
    "moruapu2000",
    "goulard2009",
    "icanhProfile",
    "demeter",
    "genesisCreation",
  ],
  "origen-del-gavilan": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "galante2018",
    "goulard2009",
    "icanhProfile",
    "parques2024",
    "ovidMonkeys",
    "grimms",
  ],
  "origen-de-los-micos-boquiblancos": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "galante2018",
    "goulard2009",
    "icanhProfile",
    "parques2024",
    "grimms",
    "ovidMonkeys",
  ],
  "moe-e-ipi": [
    "contraSilencio",
    "santos2010",
    "goulard2009",
    "icanhProfile",
    "lopez2002",
    "moruapu2000",
    "genesisBrothers",
    "plutarchRomulus",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickTicunaResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickTicunaResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ticunaResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickTicunaResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`Ruta Ticuna residual desconocida: ${slug}`);
  return keys.map((key) => {
    const selected = ticunaResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}`);
    return selected;
  });
}
