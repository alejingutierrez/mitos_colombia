function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const amazonasMixtoResidualSources = {
  caro1975: source({
    title: "El español hablado en el Amazonas: versiones de algunas leyendas",
    author: "Instituto Caro y Cuervo; equipo de la encuesta de Leticia",
    year: 1975,
    type: "transcripciones institucionales directas de varios informantes",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf",
    summary:
      "Publica testimonios identificados sobre el bufeo y el Cotomachaco recogidos en Leticia, San José, Nazaret y Arara.",
    limitation:
      "El fascículo selecciona y transcribe respuestas en español; no convierte el corpus mixto de Leticia en tradición exclusiva de un pueblo.",
  }),
  rodriguez1981: source({
    title: "Muestra de literatura oral en Leticia, Amazonas",
    author: "María Luisa Rodríguez de Montes",
    year: 1981,
    type: "catálogo de corpus de literatura oral",
    url: "https://cendoc.caaap.org.pe/cgi-bin/koha/opac-detail.pl?biblionumber=2824&shelfbrowse_itemnumber=3655",
    summary:
      "Documenta el volumen que organiza relatos recogidos entre población Ticuna, Huitoto y habitantes hispanohablantes de Leticia.",
    limitation:
      "El catálogo confirma la obra y sus partes, pero no ofrece en abierto todos los textos ni la atribución de cada pieza.",
  }),
  galante2018: source({
    title: "Análisis crítico de Muestra de literatura oral en Leticia, Amazonas",
    author: "Andrés González Galante",
    year: 2018,
    type: "tesis universitaria de análisis del corpus de 1981",
    url: "https://es.scribd.com/document/871355828/u-821011",
    summary:
      "Cita y analiza bufeo, Cotomachaco y Cobra Grande, y advierte la transculturación y fragmentación editorial del corpus leticiano.",
    limitation:
      "Es una lectura académica secundaria alojada en una plataforma comercial; se contrasta con las transcripciones y catálogos primarios.",
  }),
  contratiempo: source({
    title: "Investigación sobre músicas indígenas en la Amazonía colombiana",
    author: "A Contratiempo; revisión de colecciones del Instituto Caro y Cuervo",
    type: "artículo de historia de archivo sonoro",
    url: "https://www.musigrafia.org/acontratiempo/files/ediciones/revista-13/pdf/Investigacion_sobre_musicas_indigenas_Parte1.pdf",
    summary:
      "Describe informantes y grabaciones de 1975 a 1977 y confirma la composición pluricultural y mayoritariamente castellana del archivo de Leticia.",
    limitation:
      "Aporta procedencia del corpus, no una versión narrativa completa de cada ruta.",
  }),
  abcBibliotecario: source({
    title: "ABC del bibliotecario: mitos y leyendas del Amazonas",
    author: "Biblioteca Nacional de Colombia",
    type: "inventario institucional de circulación bibliotecaria",
    url: "https://bibliotecanacional.gov.co/es-co/actividades/Publicaciones%20sobre%20las%20Bibliotecas%20P%C3%BAblicas/Documents/ABC%20del%20Bibliotecario.pdf",
    summary:
      "Incluye resúmenes breves de Chuyachaque y otras piezas del repertorio de Leticia.",
    limitation:
      "La lista mezcla tradiciones y no identifica por sí sola narrador, comunidad ni texto oral de origen.",
  }),
  hugoNino: source({
    title: "Primitivos relatos contados otra vez: héroes y mitos amazónicos",
    author: "Hugo Niño",
    year: 1979,
    type: "libro de reescritura literaria amazónica",
    url: "https://books.google.com/books/about/Primitivos_relatos_contados_otra_vez.html?id=CDsYAAAAYAAJ",
    summary:
      "Contiene Chuya-Chaqui, Yacu-Runa y el episodio de Ahuanari difundido como literatura de autor.",
    limitation:
      "El título declara que son relatos contados otra vez; no se presenta como transcripción oral literal ni como una comunidad única.",
  }),
  mineduAmazonicos: source({
    title: "Antología literaria 4: relatos amazónicos",
    author: "Ministerio de Educación del Perú",
    type: "antología pedagógica oficial",
    url: "https://repositorio.minedu.gob.pe/bitstream/handle/20.500.12799/6361/Antolog%C3%ADa%20literaria%204%20relatos%20amaz%C3%B3nicos.pdf?isAllowed=y&sequence=1",
    summary:
      "Publica una versión extensa del Chullachaqui y permite contrastar pies desiguales, engaño y protección del bosque.",
    limitation:
      "Es una mediación escolar peruana y su lenguaje de dios ecológico no se universaliza ni se traslada a Leticia sin atribución.",
  }),
  bicentenarioChullachaqui: source({
    title: "Zonas de mitos y visiones: El Chullachaquí",
    author: "Proyecto Especial Bicentenario del Perú",
    type: "publicación cultural institucional",
    url: "https://bicentenario.gob.pe/exposiciones/amazonas/src/Capitulo9_El_chullachaqui.pdf",
    summary:
      "Sitúa la figura en el imaginario amazónico peruano y conserva sus rasgos de engaño, imitación y pie desigual.",
    limitation:
      "Resume una circulación nacional peruana y no prueba la autoría oral del episodio de Ahuanari.",
  }),
  mineduYacuruna: source({
    title: "Comunicación 6: lectura sobre el Yacuruna",
    author: "Ministerio de Educación del Perú",
    year: 2020,
    type: "cuaderno escolar oficial con versión regional",
    url: "https://formacionenservicio.minedu.gob.pe/sifods/centro-recurso/2021/recursos-orientaciones-escolar/recursos-pedagogicos/primaria/materiales-estudiantes/cuadernos-trabajo/comunicacion-2020-6.pdf",
    summary:
      "Conserva la transformación humana, la ciudad subacuática, el caimán negro y la boa como motivos de una versión de Iquitos.",
    limitation:
      "Incluye un estereotipo dañino sobre menstruación que esta revisión no reproduce ni legitima.",
  }),
  vocesperu: source({
    title: "Voces del Perú: memoria y tradición oral",
    author: "Proyecto Especial Bicentenario del Perú",
    type: "libro institucional sobre tradición oral y memoria",
    url: "https://bicentenario.gob.pe/biblioteca/detalle-libro/voces-del-peru-memoria-y-tradicion-oral",
    summary:
      "Explica cómo testimonios, memoria y escritura se relacionan sin convertir el relato oral en un objeto fijo.",
    limitation:
      "Es marco metodológico general y no adjudica Yacuruna o Chullachaqui a una sola comunidad.",
  }),
  nimuendaju1952: source({
    title: "The Tukuna: The Errors of Cimidyue",
    author: "Curt Nimuendajú",
    year: 1952,
    type: "monografía etnográfica con relato Ticuna traducido",
    url: "https://etnolinguistica.wdfiles.com/local--files/biblio%3Animuendaju-1952-tukuna/nimuendaju_1952_tukuna.pdf",
    summary:
      "Publica el viaje de Chimuya-e: abandono, monos, tortuga, jaguar, mariposa, transformación y regreso a su padre.",
    limitation:
      "La versión pasó por investigación externa, traducción y edición de mediados del siglo XX; no sustituye voces Ticuna contemporáneas.",
  }),
  goulard2009: source({
    title: "Entre mortales e inmortales: el ser según los Ticuna de la Amazonía",
    author: "Jean-Pierre Goulard",
    year: 2009,
    type: "monografía antropológica de acceso abierto",
    url: "https://books.openedition.org/ifea/3927",
    summary:
      "Analiza a Chimuya-e, transformaciones, cuerpo y parentesco dentro del pensamiento Ticuna.",
    limitation:
      "Es interpretación antropológica y no autoriza a completar diálogos, rituales o escenas ausentes del testimonio elegido.",
  }),
  azcaita: source({
    title: "Reglamento interno de AZCAITA",
    author: "Autoridades tradicionales indígenas de la zona de carretera de Leticia",
    year: 2020,
    type: "documento comunitario e institucional",
    url: "https://www.minjusticia.gov.co/programas-co/fortalecimiento-etnico/Documents/banco-2019/1.%20REGLAMENTO%20AZCAITA%2009072020.pdf",
    summary:
      "Publica una creación Ticuna contemporánea con Ngütapa, Mapana, Yoí, Ípi y las hermanas nacidas de las rodillas.",
    limitation:
      "Se usa para separar el ciclo de Ngutapa del viaje de Chimuya-e, no para fusionar ambos relatos ni reproducir conocimiento restringido.",
  }),
  icanhTicuna: source({
    title: "Pueblo Tikuna",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "perfil institucional del pueblo",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/TIKUNA.php",
    summary:
      "Sitúa al pueblo Tikuna en una región amazónica transfronteriza y aporta contexto histórico contemporáneo.",
    limitation:
      "No confirma por sí solo escenas particulares ni una versión única para todas las comunidades.",
  }),
  airumakuchi: source({
    title: "El mito de los alimentos",
    author: "Milton Jesús Pinto Linares; Asociación Airumaküchi",
    type: "relato comunitario narrado y escrito por autor identificado",
    url: "https://www2.cifor.org/wp-content/uploads/sites/bushmeat/Numero%204.pdf",
    summary:
      "Cuenta que Petapeta lleva por mandato de Yoí semillas y material de siembra que Jau roba antes de recibir la orden de sembrarlo todo.",
    limitation:
      "Es una versión atribuida y localizada; no se usa para afirmar que todas las versiones Ticuna siguen la misma secuencia.",
  }),
  visionPetapeta: source({
    title: "Fortalecimiento de la canasta básica de abundancia Petapeta",
    author: "Visión Amazonía y ATICOYA",
    type: "documento institucional de proyecto comunitario",
    url: "https://visionamazonia.minambiente.gov.co/content/uploads/2020/11/RESULTADO-CONV-MUJERES.pdf",
    summary:
      "Documenta el uso contemporáneo del nombre Petapeta en un proyecto de mujeres Ticuna, Cocama y Yagua de Puerto Nariño.",
    limitation:
      "Acredita continuidad nominal y territorial, no narra ni valida cada episodio mítico.",
  }),
  omachaRaices: source({
    title: "Raíces sumergidas: Jau y el robo de las semillas",
    author: "Fundación Omacha y colaboradores amazónicos",
    year: 2025,
    type: "compilación contemporánea de memorias del río",
    url: "https://www.omacha.org/descargas/2025/Libro-Raices-sumergidas-web.pdf",
    summary:
      "Publica otra versión de Jau, Petapeta y las semillas, útil para reconocer variación contemporánea.",
    limitation:
      "Contiene violencia sexual sensible; la ficha pública no la reproduce ni la convierte en elemento obligatorio de la tradición.",
  }),
  solartelibro: source({
    title: "El hombre con cola de león: leyendas indígenas de Colombia",
    author: "Fernando Solarte Lindo",
    year: 1980,
    type: "libro de reelaboraciones literarias para público infantil",
    url: "https://books.google.com/books/about/El_hombre_con_cola_de_le%C3%B3n.html?id=bYpsAAAAMAAJ",
    summary:
      "Es la cadena editorial de El hijo de Tuhixana y La Tía o descubrimiento del agua y los peces.",
    limitation:
      "No identifica narradores y transforma los relatos con propósito pedagógico; se cita como obra de autor, no como transcripción directa.",
  }),
  utpSolarte: source({
    title: "Análisis de los relatos de Fernando Solarte Lindo",
    author: "Universidad Tecnológica de Pereira",
    type: "tesis académica sobre mediación y clasificación literaria",
    url: "https://repositorio.utp.edu.co/server/api/core/bitstreams/2971b111-ab2d-44a1-a880-5070d9359a86/content",
    summary:
      "Clasifica El hijo de Tuhixana como Vaupés y La Tía como Tainimuka, y analiza su reescritura didáctica.",
    limitation:
      "La clasificación depende del libro de Solarte y no recupera por sí sola una voz oral o lugar preciso de narración.",
  }),
  tanimucaProfile: source({
    title: "Tanimuca: otras denominaciones de la lengua y el pueblo",
    author: "Ministerio de Cultura de Colombia",
    type: "perfil lingüístico institucional",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Documents/Tanimuca.pdf",
    summary:
      "Registra Ufaina entre las denominaciones del pueblo Tanimuka y lo sitúa entre Amazonas y Vaupés.",
    limitation:
      "No narra la historia de La Tía ni valida las ampliaciones literarias de Solarte.",
  }),
  ufaina1975: source({
    title: "Origen del mundo según los Ufaina",
    author: "Guaraná Tanimuka, Ñaki Tanimuka y Martín von Hildebrand",
    year: 1975,
    type: "ciclo Ufaina publicado con narradores y mediación identificados",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7421",
    summary:
      "Documenta agua, peces y formación del Apaporis dentro de un ciclo Ufaina distinto del cuento de La Tía.",
    limitation:
      "Se usa para contexto y contraste; sus episodios no se insertan en la reescritura Tainimuka de Solarte.",
  }),
  butantanCurupira: source({
    title: "Conheça a história do Curupira",
    author: "Instituto Butantan",
    type: "síntesis histórica y ambiental institucional brasileña",
    url: "https://butantan.gov.br/bubutantan/conheca-a-historia-do-curupira-o-defensor-das-arvores-e-dos-animais",
    summary:
      "Presenta al Curupira como figura forestal de amplia circulación, con pies invertidos y función protectora en versiones brasileñas.",
    limitation:
      "Es una síntesis brasileña moderna y no prueba que esos rasgos aparezcan iguales en Leticia.",
  }),
  cascudoCurupira: source({
    title: "Geografia dos mitos brasileiros",
    author: "Luís da Câmara Cascudo",
    year: 1947,
    type: "estudio histórico del folclore brasileño",
    url: "https://portalbiblioteca.ufra.edu.br/images/Ebook/letrasportugues/geografiadosmitosbrasileiros.pdf",
    summary:
      "Rastrea variantes impresas del Curupira, nombres, desplazamientos y asociación con el bosque.",
    limitation:
      "Su modelo comparativo y sus fuentes pertenecen a otra época; no se usa para fijar una esencia indígena universal.",
  }),
  curupiraOral2025: source({
    title: "Narrativas orais do Curupira em Boa Vista, Pará",
    author: "Revista Entre Parênteses, Universidade Federal de Alfenas",
    year: 2025,
    type: "estudio académico de cinco relatos orales contemporáneos",
    url: "https://publicacoes.unifal-mg.edu.br/revistas/index.php/entreparenteses/article/view/2383",
    summary:
      "Muestra que informantes de una misma región pueden describir un Curupira sin pies invertidos y con acciones diferentes.",
    limitation:
      "Los testimonios son de Pará, Brasil, no de Leticia; sirven para demostrar variación, no para completar la ficha colombiana.",
  }),
  mecCurupira: source({
    title: "Folclore brasileiro: Curupira y registros coloniales",
    author: "Portal do Professor, Ministerio de Educación de Brasil",
    type: "recurso pedagógico oficial con fuentes históricas",
    url: "https://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=51423",
    summary:
      "Remite a la carta de José de Anchieta de 1560 y reúne Curupira y Cobra Grande en la pedagogía brasileña.",
    limitation:
      "La carta misionera demoniza saberes locales y no se acepta como descripción neutral de los pueblos originarios.",
  }),
  ufamHonorato: source({
    title: "Honorato, a cobra grande",
    author: "Amazônia Lúdica Interativa, Universidade Federal do Amazonas",
    year: 2023,
    type: "síntesis universitaria brasileña de una variante",
    url: "https://florestas.ufam.edu.br/amazoniali/2023/11/30/honorato-a-cobra-grande/",
    summary:
      "Conserva a Honorato y Maria Caninana como hermanos serpiente de temperamentos opuestos.",
    limitation:
      "Es una recreación moderna y no reemplaza la transcripción leticiana de Pedro Roque.",
  }),
  multiRioBoiuna: source({
    title: "Boiuna",
    author: "MultiRio, Empresa Municipal de Multimeios de Rio de Janeiro",
    year: 2017,
    type: "recurso cultural público brasileño",
    url: "https://www.multirio.rj.gov.br/index.php/multiclube/3a5/diz-a-lenda/13061-boiuna",
    summary:
      "Resume la versión brasileña de Boiuna, Maria Caninana y Honorato, incluida la ruptura del encantamiento.",
    limitation:
      "Es material divulgativo infantil y no prueba continuidad directa con la versión de Leticia.",
  }),
  butantanSnakes: source({
    title: "Serpentes & Gentes: Cobra Norato",
    author: "Instituto Butantan",
    type: "proyecto científico-cultural sobre serpientes y relatos",
    url: "https://serpentesegentes.butantan.gov.br/mapa_interativo.php",
    summary:
      "Presenta Cobra Norato entre relatos amazónicos y distingue información zoológica de escuchar decir y leyenda.",
    limitation:
      "La interfaz reúne múltiples entradas; no se usa como transcripción de Pedro Roque ni como fuente zoológica sobre una serpiente sobrenatural.",
  }),
  omachaDolphins: source({
    title: "Guía para la observación responsable de delfines de río",
    author: "Fundación Omacha",
    year: 2021,
    type: "guía científica y de conservación",
    url: "https://www.omacha.org/descargas/2021/guia-observacion-responsable-delfines-de-rio-2a-edicion-2021-02-17-final.pdf",
    summary:
      "Aporta información biológica y recomendaciones de observación para separar al delfín real del personaje legendario.",
    limitation:
      "No valida metamorfosis, encantamientos ni amuletos; se usa solo para contexto ecológico responsable.",
  }),
  scieloBufeo: source({
    title: "El bufeo colorado y la violencia de género en la narrativa amazónica",
    author: "Letras, Universidad Nacional Mayor de San Marcos",
    year: 2021,
    type: "artículo académico de crítica literaria",
    url: "https://www.scielo.org.pe/scielo.php?pid=S2071-50722021000200008&script=sci_arttext",
    summary:
      "Examina cómo relatos del bufeo pueden romantizar coerción, embarazo y desigualdad de poder.",
    limitation:
      "Analiza novelas peruanas, no los testimonios leticianos; orienta la lectura crítica sin sustituirlos.",
  }),
  homerOdyssey: source({
    title: "Odyssey, Book 12: the Sirens",
    author: "Homero; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0136%3Abook%3D12",
    summary:
      "Narra voces acuáticas que atraen al navegante y permiten comparar llamada, escucha y peligro.",
    limitation:
      "El Mediterráneo épico, las sirenas aladas y el viaje de Odiseo no equivalen a playas fluviales ni seres amazónicos.",
  }),
  ovidProteus: source({
    title: "Metamorphoses, Book 8: Proteus",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D8",
    summary:
      "Incluye a Proteo cambiando de figura y ofrece un paralelo formal para metamorfosis acuáticas.",
    limitation:
      "Es poesía grecorromana de divinidades marinas; no explica al bufeo, Yacuruna ni sus contextos sociales.",
  }),
  plinyAmphisbaena: source({
    title: "Natural History, Book 8: the amphisbaena",
    author: "Plinio el Viejo; Perseus Digital Library",
    type: "fuente antigua comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0137%3Abook%3D8%3Achapter%3D35",
    summary:
      "Describe una serpiente de dos extremos en la historia natural antigua.",
    limitation:
      "No comparte selva, voz de mono, cananguchal ni historia de transmisión con el Cotomachaco.",
  }),
  genesisJonah: source({
    title: "Jonah 1-4",
    author: "New Revised Standard Version Updated Edition",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Jonah%201-4&version=NRSVUE",
    summary:
      "Presenta a un viajero tragado por un gran ser acuático y devuelto con vida.",
    limitation:
      "La profecía, el mar y la intervención divina no forman parte de las variantes amazónicas de serpiente tragadora.",
  }),
  grimmHansel: source({
    title: "Grimms' Fairy Tales: Hansel and Gretel",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    year: 1812,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "Conserva un relato europeo de abandono, bosque, engaño, astucia y regreso a casa.",
    limitation:
      "La familia, la casa comestible y la bruja europea no aparecen en la odisea Ticuna de Chimuya-e.",
  }),
  virgilAeneid: source({
    title: "Aeneid, Book 1: storm and displaced fleet",
    author: "Virgilio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0054%3Abook%3D1",
    summary:
      "Narra una comunidad navegante desviada por una tormenta y obligada a buscar retorno y refugio.",
    limitation:
      "La flota épica mediterránea, su guerra y destino imperial no equivalen a una balsa de troncos del Vaupés.",
  }),
  genesisWaters: source({
    title: "Genesis 1 and 7-9: waters and vessels",
    author: "New Revised Standard Version Updated Edition",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%201%2CGenesis%207-9&version=NRSVUE",
    summary:
      "Reúne separación de aguas y navegación en una gran embarcación dentro de otra tradición escrita.",
    limitation:
      "No contiene cuatro recipientes, La Tía, un joven-pájaro ni la clasificación Tainimuka de Solarte.",
  }),
  prometheus: source({
    title: "Theogony: Prometheus and the hidden fire",
    author: "Hesíodo; Perseus Digital Library",
    type: "fuente literaria-religiosa comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0129%3Acard%3D507",
    summary:
      "Narra la obtención de un recurso retenido y su llegada a los humanos mediante engaño.",
    limitation:
      "El fuego, Zeus y el castigo griego no equivalen a semillas Ticuna ni a recipientes de agua Tainimuka.",
  }),
  smithsonianMamiWata: source({
    title: "Mami Wata: Arts for Water Spirits in Africa and Its Diasporas",
    author: "Smithsonian National Museum of African Art",
    type: "catálogo museal comparativo",
    url: "https://africa.si.edu/exhibitions/current-exhibitions/mami-wata/",
    summary:
      "Documenta representaciones plurales de espíritus acuáticos, belleza, riqueza, peligro y transformación.",
    limitation:
      "Mami Wata pertenece a historias africanas y diaspóricas; no es un nombre alternativo de Madre de Playa o Yacuruna.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  caroespanol1975: source({
    title: "El español hablado en el Amazonas. Encuesta en Leticia para el Atlas Lingüístico Etnográfico de Colombia; sección «Folclor. Versiones de algunas leyendas: El bufeo»",
    author: "José Joaquín Montes Giraldo (Instituto Caro y Cuervo, Noticias Culturales n.º 179)",
    year: 1975,
    type: "transcripción de testimonios orales en boletín institucional",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf",
    summary:
      "Es el registro del relato, pp. 6-9: seis voces de Leticia transcritas por separado en septiembre de 1975. Los niños del puerto (juego, fruta, el que se llevan y queda como gente); María Cachique de Vega (el boto que se aparece en forma del enamorado); Pedro Roque (el encanto que empuja a tirarse al agua y el diente para brujería); Manuel Curitima (el pescador que vuelve de madrugada, el perro que aúlla, los hijos con rabito, los soles gastados en el pueblo, el huequito bajo el sombrero); Gladys de Bolívar (la pusanga del diente y el bufeo que se lo cobra a quien lo usa); Raimundo Curico (el bufeo bravo de la canoa, las tres clases y el marido suplantado que contaban los viejos).",
    limitation:
      "Es una nota de cuatro páginas con fin lingüístico: transcribe el habla y no analiza el relato, ni da edad u oficio de los narradores adultos. El OCR del PDF deforma los nombres («Roovc» por Roque); se cotejaron contra la imagen de la p. 7.",
  }),
  castrobufeo2024: source({
    title: "El bufeo: Muestra de literatura oral en Leticia (reseña de Rodríguez de Montes, 1981)",
    author: "Liz Castro, Portal de lenguas y literaturas de Colombia, Instituto Caro y Cuervo",
    year: 2024,
    type: "reseña institucional de un corpus de literatura oral",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-bufeo-muestra-de-literatura-oral-en-leticia/",
    summary:
      "Da noticia del libro de María Luisa Rodríguez de Montes (Instituto Caro y Cuervo, 1981, 262 pp.), que reúne ocho versiones distintas de El Bufeo recogidas en Leticia, y lo clasifica entre los seres «fantasmales» del río y la selva que se describen más que se narran. Resume rasgos que la nota de 1975 sólo insinúa: el bufeo hecho hombre viste con elegancia y usa siempre sombrero para ocultar el espiráculo, toma la forma del esposo de la mujer que desea, y las muelas y partes de la hembra sirven de talismán para la pesca, la cacería y el amor.",
    limitation:
      "Es una reseña de 2024, no el libro: no reproduce las ocho versiones ni dice quién narró cada una. El impreso de 1981 no está digitalizado en abierto. El 2026-09-20 la página respondió 403 a curl; el 2026-09-22 respondió 200 y se leyó.",
  }),
  valdiviesoCuidado2005: source({
    title: "«Cuidado te mochan la cabeza». Circulación y construcción de un rumor en la frontera amazónica de Colombia, Perú y Brasil",
    author: "Salima Cure Valdivieso",
    year: 2005,
    type: "tesis de maestría en Estudios Amazónicos con trabajo de campo en Leticia y la frontera",
    url: "https://repositorio.unal.edu.co/items/1a723217-91df-44a2-b7bc-46be3abfc030",
    summary:
      "Registra el bufeo treinta años después de la encuesta, en la misma frontera: se vuelve persona, sobre todo gringo, blanco y bien vestido, va a los bailes a llevarse muchachas o muchachos a ciudades bajo el agua con calles y alumbrado, rapta a las muchachas que se bañan en el río, y los delfines de antes eran bravos y volteaban canoas. Varios interlocutores le dicen que ahora los bufeos ya no son malos, ni bravos. Recoge además el bufeo como disfraz de los cortacabezas, reconocible porque golpea la canoa en vez de huir.",
    limitation:
      "Su tema es el rumor de los cortacabezas, no el bufeo, que aparece como antecedente (hacia p. 61). La autora cambia los nombres de sus interlocutores. El PDF del repositorio no se deja bajar con curl (devuelve HTML); se leyó una copia del mismo PDF descargada en otra sesión del proyecto, y la página del ítem confirma título, autora y año.",
  }),
  iIbufeo2021: source({
    title: "El bufeo colorado en dos novelas amazónicas peruanas",
    author: "Stefano Pau (Università degli Studi di Napoli Federico II), Letras (Lima) 92(136)",
    year: 2021,
    type: "artículo académico de crítica literaria",
    url: "https://www.scielo.org.pe/scielo.php?pid=S2071-50722021000200008&script=sci_arttext",
    summary:
      "Describe el relato del bufeo colorado en la Amazonía peruana: se transforma en un hombre de rasgos occidentales, a menudo rubio, y se le señala como padre de los hijos sin paternidad reconocida. Cita la pusanga hecha con partes del bufeo hembra y el sombrero que el bufeo hecho hombre no puede quitarse porque delata el orificio de la cabeza, y lee el relato como encubrimiento de la violencia contra las mujeres. Cita a Cure Valdivieso 2005.",
    limitation:
      "Analiza novelas peruanas (Calvo de Araújo, Rumrrill, César Calvo), no testimonios orales de Leticia; sirve para el paralelo peruano y la lectura crítica, no como registro.",
  }),
  correaAnotacoes2020: source({
    title: "Anotações sobre a lenda da Cobra Norato",
    author: "Paulo Maués Corrêa, Revista Sentidos da Cultura 7(13), Universidade do Estado do Pará",
    year: 2020,
    type: "artículo académico sobre narrativa oral amazónica brasileña",
    url: "https://periodicos.uepa.br/index.php/sentidos/article/download/3673/1917/13707",
    summary:
      "Documenta el boto brasileño que se vuelve hombre vestido de blanco y baila toda la noche con las muchachas en las fiestas de orilla; recoge de Câmara Cascudo que la madre de la Cobra Norato fue embarazada por el boto, «el mayor seductor de las aguas amazónicas», y cita el poema «Foi boto, sinhá» de Antônio Tavernard, musicado por Waldemar Henrique. Es el paralelo brasileño del nombre «boto» que usa María Cachique de Vega.",
    limitation:
      "Es Pará, no Leticia, y el tema central es la Cobra Norato: el boto aparece como personaje conexo.",
  }),
  colombiamanejo1992: source({
    title: "El manejo del mundo: naturaleza y sociedad entre los Yukuna de la Amazonia colombiana",
    author: "María Clara van der Hammen (Tropenbos Colombia, Estudios en la Amazonia colombiana IV)",
    year: 1992,
    type: "etnografía",
    url: "https://www.tropenboscol.org/app/data/uploads/sites/15/Col-Series-4-1.pdf",
    summary:
      "En la p. 113 cuenta al delfín de agua dulce entre los dueños del agua de los yukuna del Mirití-Paraná, junto a la anaconda, la charapa y las nutrias, y dice que esos dueños viven en el fondo del agua, donde tienen sus malocas y su gente. Es el paralelo indígena colombiano del «queda como gente» de los niños de Leticia.",
    limitation:
      "Es cosmología yukuna del Mirití-Paraná, no el relato leticiano; no narra seducción ni transformación del bufeo.",
  }),
  lowieTukuna1952: source({
    title: "The Tukuna",
    author: "Curt Nimuendajú (trad. William D. Hohenthal; ed. Robert H. Lowie), University of California Publications in American Archaeology and Ethnology 45",
    year: 1952,
    type: "etnografía clásica",
    url: "https://etnolinguistica.wdfiles.com/local--files/biblio%3Animuendaju-1952-tukuna/nimuendaju_1952_tukuna.pdf",
    summary:
      "En la p. 27 anota que los ticuna no matan al delfín colorado, aunque les disgusta porque espanta a los peces. Contrasta con la versión de Gladys de Bolívar, en la que se mata al bufeo para sacarle los dientes, y con el bufeo que se amontona con los pescaditos en las cochas de Raimundo Curico.",
    limitation:
      "Trabajo de campo de las décadas de 1920-1940 en el lado brasileño; es un dato de etnografía, no una versión del relato.",
  }),
  trujilloGuia2021: source({
    title: "Guía de observación responsable de delfines en la Amazonia colombiana (2.ª edición)",
    author: "Fundación Omacha (Fernando Trujillo y otros)",
    year: 2021,
    type: "guía científica y de conservación",
    url: "https://www.omacha.org/descargas/2021/guia-observacion-responsable-delfines-de-rio-2a-edicion-2021-02-17-final.pdf",
    summary:
      "Describe al delfín rosado o bufeo (Inia geoffrensis): el delfín de río más grande del mundo, de hasta 2,75 m, con entre 25 y 28 pares de dientes por lado en cada mandíbula, y menciona las historias y mitos que lo rodean en la región de Leticia y Puerto Nariño. Da la medida real frente a los «casi tres metros» del bufeo colorado grande de Raimundo Curico y explica por qué el diente es el objeto del filtro.",
    limitation:
      "Es biología y turismo responsable: no recoge ni analiza el relato.",
  }),
  trujilloRaices2025: source({
    title: "Raíces sumergidas: historias ancestrales de la Amazonia",
    author: "Fundación Omacha (comp. Diana Trujillo, Pablo Alonso Ramos-Henao, Mario Guillermo Guerrero), con sabedores tikuna de Puerto Nariño",
    year: 2025,
    type: "compilación comunitaria de relatos",
    url: "https://www.omacha.org/descargas/2025/Libro-Raices-sumergidas-web.pdf",
    summary:
      "En «El Toreruma, abuelo de los delfines» (p. 46) los delfines se vuelven rosados al envejecer, los más viejos se convierten en el Toreruma, cuidan las almas de los que mueren en los ríos y viven en un lago del mundo de los espíritus. Es la cara tikuna del mismo animal: otro mundo bajo el agua adonde van los que se pierden en el río.",
    limitation:
      "Relatos tikuna de Puerto Nariño reescritos para divulgación; no es el relato mestizo de Leticia ni atribuye cada historia a un narrador.",
  }),
  caldasMadre2016: source({
    title: "Madre Selva: representación de mitos y leyendas de la región amazónica colombiana a través de la danza",
    author: "Leidy Constanza Duarte Castro (Universidad Distrital Francisco José de Caldas)",
    year: 2016,
    type: "trabajo de grado (obra de danza)",
    url: "https://repository.udistrital.edu.co/handle/11349/3448",
    summary:
      "Su apartado «El bufeo colorado» (pp. 89-90) resume el núcleo que en 1975 da Gladys de Bolívar: el animal se transforma en persona y se presenta a quien usa sus dientes o mata a su especie para hacer brujería o talismanes, y las muelas de la hembra sirven para la pesca, la cacería y el amor. Muestra que esa es la forma que circula del relato en Colombia.",
    limitation:
      "Es una obra de creación escénica, no una investigación de campo; su resumen de la leyenda remite a un sitio web (Taringa) y no a un narrador.",
  }),
  orinoquiaCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano: «Los delfines dorados»",
    author: "Getulio Vargas Barón (Corpes Orinoquía)",
    year: 1996,
    type: "reelaboración literaria de tradición llanera",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "En «Los delfines dorados» (pp. 22-32) los delfines del Pauto y del Meta son la descendencia de unos amantes perdidos en un remolino. Es el paralelo colombiano que invierte el motivo leticiano: el delfín nace de un amor humano en vez de suplantar al marido.",
    limitation:
      "Es un relato de autor, del Llano y no del Amazonas, con narrador inventado; se usa sólo como paralelo.",
  }),
  letrasTrabajos1947: source({
    title: "Trabajos de carácter monográfico y folklórico de los alumnos del Colegio Nacional «Padre Agustín López» de Requena (Loreto), para la Sección de Folklore y Artes Populares del Ministerio de Educación Pública",
    author: "Alumnos del 3.er año de Media del Colegio Nacional «Padre Agustín López»; transcripción alojada por Rômulo Monte Alto (Faculdade de Letras, UFMG)",
    year: 1947,
    type: "composiciones escolares de folklore, transcritas del manuscrito",
    url: "https://www.letras.ufmg.br/padrao_cms/documentos/profs/romulo/LibroLoreto1.pdf",
    summary:
      "Trae entero, en las pp. 44-46, el relato que se sigue: el Chullachaqui toma la figura de una hermana y luego la de un hermano, se lleva al monte a una niña de Pampa Hermosa, la abandona en la quebrada de Cachi Yacu y un brujo llamado Antonio la encuentra a los ocho días. El mismo cuaderno reúne otras siete piezas sobre el ser, con desacuerdos sobre cuál es el pie menor y con dos parricidios por confusión.",
    limitation:
      "Es peruano (Requena, Loreto), no leticiano. Es una transcripción de 2011 sin editor declarado, con la ortografía del manuscrito; las páginas son las de la transcripción y el original no está digitalizado. La pieza no da el nombre del alumno ni de quién oyó el relato.",
  }),
  castrobufeo20242: source({
    title: "El bufeo: muestra de literatura oral en Leticia (reseña de Rodríguez de Montes, Muestra de literatura oral en Leticia, Amazonas, Instituto Caro y Cuervo, 1981)",
    author: "Liz Castro, Portal de lenguas y literaturas de Colombia, Instituto Caro y Cuervo",
    year: 2024,
    type: "reseña institucional de una recopilación de literatura oral",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-bufeo-muestra-de-literatura-oral-en-leticia/",
    summary:
      "Es la única prueba abierta de que el ser circula en Colombia con el nombre de Chuyachaque: cuenta «El Chuyachaque» entre las narraciones descriptivas que Rodríguez de Montes recogió entre la población leticiana de habla española, figuras temidas del río y de la selva sin argumento largo.",
    limitation:
      "Sólo nombra la pieza; no la transcribe ni da narrador. El libro de 1981 no está en abierto.",
  }),
  mejiaSeres2019: source({
    title: "Seres imaginarios y motivos de la literatura oral en Mitos, leyendas y cuentos peruanos de José María Arguedas y Francisco Izquierdo Ríos",
    author: "Nécker Salazar Mejía",
    year: 2019,
    type: "artículo académico, Boletín de Literatura Oral 9, Universidad de Jaén",
    url: "https://revistaselectronicas.ujaen.es/index.php/blo/article/view/4768",
    summary:
      "Explica que la antología de 1947 salió de relatos transcritos por profesores y alumnos de colegios nacionales convocados por Arguedas e Izquierdo Ríos, que es el circuito del cuaderno de Requena. Resume los cuatro relatos del Chullachaqui de la antología: el cazador burlado de San Martín, la joven del Cumbaza retenida en una cueva, el hermano suplantado en Loreto y los chanchitos que crecen; y cita la descripción de Izquierdo Ríos en Pueblo y bosque (1975).",
    limitation:
      "Es peruano y estudia la antología impresa, no los cuadernos de Requena; no menciona Leticia.",
  }),
  cruzMitos2014: source({
    title: "Mitos y leyendas de la Amazonía brasileña y peruana, dos países con raíces en la literatura indígena",
    author: "Bithian Mota da Cruz y Maria do Socorro Simões",
    year: 2014,
    type: "artículo académico, Poligramas 40, Universidad del Valle",
    url: "https://dialnet.unirioja.es/descarga/articulo/7528487.pdf",
    summary:
      "Compara la Curupira de Abaetetuba (Pará) con el Chullachaqui de Iquitos: los dos toman el cuerpo de alguien próximo para engañar. Cita un relato brasileño en que la Curupira adopta la figura de la madre y se lleva a la niña al monte, y uno peruano de Jaime Regan en que un brujo vecino dictamina que el Chullachaqui se ha llevado a un niño.",
    limitation:
      "Trabajo breve de comparación; los relatos que cita vienen de Simões (1995) y Regan (1993), no de trabajo de campo propio publicado aquí. Dialnet puede responder 503 por límite de peticiones.",
  }),
  rocchiettiChullachaqui2024: source({
    title: "Chullachaqui de la selva",
    author: "Ana María Rocchietti",
    year: 2024,
    type: "artículo académico, ANTI Nueva Era, Documentos de Trabajo 12, Universidad Nacional de Río Cuarto",
    url: "https://www2.hum.unrc.edu.ar/ojs/index.php/Coord/article/view/2111",
    summary:
      "Describe al Chullachaqui loretano como desaparecedor de personas que toma la forma de quien más ama la víctima y la lleva al monte, sin regreso; recoge el caso de una niña de la familia de un amigo amazónico no indígena. Atribuye el nombre quechua a la llegada de serranos a la cuenca amazónica, lo que sostiene la lectura de figura mezclada.",
    limitation:
      "Su objeto son las cerámicas kukama kukamiria recientes del Chullachaqui, no la literatura oral; el relato familiar que cita es de oídas.",
  }),
  viviendaMitos2007: source({
    title: "Mitos y leyendas del agua en el Perú",
    author: "Ministerio de Vivienda, Construcción y Saneamiento del Perú; Concurso Mitos y Leyendas del Agua (Foro Ecológico)",
    year: 2007,
    type: "antología de relatos recogidos por escolares, publicada por el Banco Mundial",
    url: "https://documents1.worldbank.org/curated/en/228711468090584434/pdf/396680PE0Mitos0y0leyendas01PUBLIC1.pdf",
    summary:
      "En «El Mishquiyacu y el pescador», contado por Teodomiro López Arrese y Danny Greenwich Herrera y escrito por una escolar de Tarapoto de once años, el Chullachaqui es el «Rey del Bosque» al que un pueblo pide castigar a un pescador que envenena el río con barbasco. Muestra la cara protectora del ser, ausente del relato de Requena.",
    limitation:
      "Es de San Martín, Perú, y es un texto de concurso escolar con elaboración literaria; no toca la suplantación de parientes ni el rapto de niños.",
  }),
  palaciosAproximacion2014: source({
    title: "Aproximación sociocultural al pensamiento matemático de la cultura Pastos, en la época precolombina, asentada en Colombia y Ecuador",
    author: "Alexander Rodrigo Viveros Palacios",
    year: 2014,
    type: "tesis de maestría en Educación, Universidad de Nariño",
    url: "https://sired.udenar.edu.co/1318/1/89992.pdf",
    summary:
      "Transcribe una entrevista en que una mujer cuenta que unos cazadores vieron la «chulla pata», un hombre enorme de una sola pierna que se lleva a la gente al monte, y analiza la palabra chulla en el castellano de los Pastos (chulla guambra, chulla queso): el mismo quechuismo del nombre amazónico, del otro extremo de Colombia.",
    limitation:
      "Es otra figura, la Pata Sola andina, no el Chullachaqui; la tesis es de educación matemática y la entrevista es un anexo. Sirve sólo como paralelo léxico y temático.",
  }),
  caroespanol19752: source({
    title: "El español hablado en el Amazonas. Encuesta en Leticia para el Atlas Lingüístico Etnográfico de Colombia; sección «Folclor. Versiones de algunas leyendas: El cotomachaco»",
    author: "José Joaquín Montes Giraldo (Instituto Caro y Cuervo, Noticias Culturales n.º 179)",
    year: 1975,
    type: "transcripción de testimonios orales en boletín institucional",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf",
    summary:
      "Es el registro del relato, pp. 5-6, con dos voces de Leticia recogidas en septiembre de 1975. Gladys de Bolívar: una boa de dos cabezas, una en la rama y otra en la tierra, que caza micos y aves arriba y animales de tierra abajo, remeda a los cotos y a todos los animales, y vive «por el Perú, en la selva, en cananguchal», donde nadie va. Manuel Curitima, que lo oía de muchacho: la cabeza colgada de un palo de cincuenta metros o más, la que come cristianos y animales, el turno de las cabezas, el grito de coto que llama al cazador y la escopeta que queda en el suelo.",
    limitation:
      "Dos testimonios breves en transcripción dialectal hecha con fin lingüístico; no hay episodio con personajes ni datos de edad u oficio de los narradores.",
  }),
  peruanaKutumachakuy2021: source({
    title: "Kutumachakuy: la gran serpiente del bosque",
    author: "Estudios Amazónicos (organización sin ánimo de lucro de la Amazonía peruana)",
    year: 2021,
    type: "nota divulgativa",
    url: "https://estudiosamazonicos.com/kutumachakuy-la-gran-serpiente-del-bosque/",
    summary:
      "Documenta en el Perú un mito de nombre casi idéntico, el Kutumachakuy de los quechuas de Lamas (San Martín, valle del Huallaga): una gran serpiente del bosque de bramido atronador que los de Lamas mataron con armas mágicas, presentada dentro de la figura andino-amazónica de la Gran Serpiente de Dos Cabezas. Sostiene la procedencia peruana que Gladys de Bolívar da al animal.",
    limitation:
      "Nota breve sin aparato ni narrador, que además promociona un producto de la tienda de la organización; no describe la forma del animal ni la imitación del coto. Es de San Martín, no de la frontera con Colombia.",
  }),
  gCananguchales2018: source({
    title: "Cananguchales y manglares: humedales forestales de las zonas bajas tropicales, tan semejantes como contrastantes",
    author: "Ligia Estela Urrego G., Revista de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales 42(162): 80-95",
    year: 2018,
    type: "artículo científico",
    url: "http://www.scielo.org.co/pdf/racefn/v42n162/0370-3908-racefn-42-162-00080.pdf",
    summary:
      "Describe el cananguchal como humedal forestal dominado por la palma Mauritia flexuosa, en zonas mal drenadas de los planos de inundación, con parcelas en el trapecio amazónico (río Calderón). Explica por qué Gladys de Bolívar dice del sitio del cotomachaco que es «como quien dice una laguna».",
    limitation:
      "Ecología de la vegetación, sin relación con el relato. SciELO Colombia sólo publica por http.",
  }),
  bostockNatural77: source({
    title: "Natural History, Book 8, chapter 35: different kinds of serpents",
    author: "Plinio el Viejo (trad. John Bostock y H. T. Riley), Perseus Digital Library",
    year: 77,
    type: "fuente antigua comparativa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0137%3Abook%3D8%3Achapter%3D35",
    summary:
      "Reúne en un solo capítulo la anfisbena, que tiene dos cabezas, una de ellas en la cola; el cerastes, que atrae a las aves moviendo sus cuernos mientras esconde el resto del cuerpo; y el jáculo, que se lanza desde las ramas de los árboles. Son la forma bicéfala, el señuelo y la caza desde el árbol que el cotomachaco junta en un solo animal.",
    limitation:
      "Historia natural grecorromana sin relación de origen con la Amazonía; sólo paralelo formal.",
  }),
  tanimukaOrigen1975: source({
    title: "Origen del mundo según los Ufaina",
    author: "Martín von Hildebrand (recopilador); narrador principal Guaraná Tanimuka",
    year: 1975,
    type: "recopilación de mitos con transcripción directa de campo, Revista Colombiana de Antropología 18, pp. 323-382 (ICANH)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1609",
    summary:
      "Es el primario. El capítulo IV (pp. 337-339) cuenta el episodio completo. La tía da a los cuatro Imarikakana un poco de agua en un platón y dice que la recoge de hoja en hoja. En realidad saca agua y pescado de cuatro estantillos con llaves y ventanitas. El menor, Imárika Kayafikí, halla un huesito de pescado en la ceniza, la espía convertido en chimbe y tumba los estantillos con hacha. El primero se hunde en la tierra por el consejo tramposo de los palos, dos solo tienen raya, guío y temblón, y el cuarto se vuelve el río, que era boa. La introducción da la fecha (noviembre de 1972), la ruta entre el Vaupés, el Apaporis y el Caquetá y el narrador. Los anexos glosan tía, estantillos, platón, popay, caguana y chimbe (murciélago vampiro).",
    limitation:
      "El PDF es un escaneo sin capa de texto, a dos páginas por hoja; se leyó por OCR y se cotejó con las imágenes. El autor advierte que los narradores le contaron el ciclo tergiversado a propósito, saltando episodios o cambiando el orden, y que la división en capítulos es suya. Los mitos son ante todo de Guaraná Tanimuka, con un extracto del finado Ñaki Tanimuka insertado sin marcar, así que no se sabe cuál de los dos contó este capítulo.",
  }),
  hildebrandNotas1983: source({
    title: "Notas etnográficas sobre el cosmos Ufaina y su relación con la maloca",
    author: "Martín von Hildebrand",
    year: 1983,
    type: "artículo etnográfico, Maguaré n.º 2, pp. 177-210 (Universidad Nacional de Colombia)",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/177-210",
    summary:
      "Resume el mismo episodio de otra manera (pp. 187-189). Antes de que hubiera ríos, los Imarimákana tumbaron un árbol que Ñamatu, la tierra madre, tenía escondido con el agua y los animales acuáticos. Al caer, el árbol se volvió una boa que abrió los ríos con sus surcos y se colocó en la base del cosmos. Define a Ñamatu como dueña del agua, la pesca y la cacería, que no compartía lo que poseía y lo consumía en secreto. Explica además que los estantillos de la maloca son el pecho del jaguar.",
    limitation:
      "Es una síntesis interpretativa del investigador, no una transcripción, y no nombra a la tía ni cuenta el espionaje. El PDF del repositorio es también un escaneo y se leyó por OCR. La fecha que da el repositorio (1983) no coincide con la de la bibliografía de Hugh-Jones (1984).",
  }),
  hammenmanejo1992: source({
    title: "El manejo del mundo. Naturaleza y sociedad entre los Yukuna de la Amazonia colombiana",
    author: "María Clara van der Hammen",
    year: 1992,
    type: "monografía etnográfica (Tropenbos Colombia, 2.ª edición, julio de 1992; 1.ª edición ISOR, Utrecht, 1991)",
    url: "https://www.tropenboscol.org/app/data/uploads/sites/15/Col-Series-4-1.pdf",
    summary:
      "Trae el paralelo yukuna casi episodio por episodio (pp. 87-88). Amerú, la tía de los Karipulakena, les da un poquito de agua y dice que la junta de las hojas del monte. Lamuchí, el menor, se hace el dormido y la sigue convertido en murciélago hasta el árbol del que saca agua y pescado. La tía les aconseja una pasera de balso y el primer árbol se va derecho al mundo de abajo con el pescado bueno. Luego eligen, entre varios, el que tiene «pescado bueno como malo», y ése se vuelve el río de este mundo. La autora lo lee como el origen del sistema fluvial y del tiempo.",
    limitation:
      "Es yukuna, del bajo Caquetá y el Mirití-Paraná, no ufaina. Lo presenta como resumen dentro de un análisis y no como transcripción íntegra, y no nombra al narrador de esa versión.",
  }),
  gonzalezHistorias2000: source({
    title: "Historias de los abuelos de Moruapü (versión libre en castellano)",
    author: "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila (compiladores)",
    year: 2000,
    type: "antología de narraciones tikuna con narradores nombrados (Bogotá, Imprenta Nacional; Biblioteca Virtual del Banco de la República)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "Sostiene el paralelo ticuna. En el «Origen de Metare» (pp. 61-64), que contaron Dolores Noé (Ventura, 1993) y Jorge Santamaría Fidelis (Caña Brava, 1996), una tía guarda el agua purificada en un estantillo tapado con cera. El sobrino finge que unas hormigas le picaron los ojos para ver dónde la esconde, y luego vuelve convertido en pájaro y se la lleva en el pico. Comparte con el relato ufaina el depósito escondido en un poste y el sobrino que espía transformado en animal que vuela.",
    limitation:
      "Es tikuna, de otro río y otra familia lingüística. Los compiladores declaran que el castellano es una traducción libre revisada en talleres pedagógicos, y en este relato el agua cura los ojos, no forma ríos.",
  }),
  bourguecaminos1976: source({
    title: "Los caminos de los hijos del cielo. Estudio socio-territorial de los Kawillary del Cananarí y del Apaporis",
    author: "François Bourgue",
    year: 1976,
    type: "artículo etnográfico, Revista Colombiana de Antropología 20, pp. 101-146 (ICANH)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1703",
    summary:
      "Resume la versión kawiyarí (pp. 129-130). En la cepa del árbol Itchuna, Kamanatana, la dueña del árbol y mujer de Mapitare, niega a los Munully el agua, los peces y la cacería, y los alimenta con minguao. El más joven la espía transformado en lagarto y luego en chupaflor, descubre los peces que ella come y, tras cegarla, los hermanos tumban árboles que forman ríos hasta llegar al Apaporis.",
    limitation:
      "Es kawiyarí (arawak) y es un resumen del investigador dentro de un estudio territorial, no un texto narrado. El escaneo del ICANH no tiene capa de texto y se leyó por OCR, con algunos renglones cortados en el margen.",
  }),
  garciaCaracterizacion2007: source({
    title: "Caracterización temática de la narrativa infantil colombiana (1980-2005)",
    author: "Ilene Rojas García y Giohanny Olave Arias",
    year: 2007,
    type: "tesis de licenciatura en Español y Literatura, Universidad Tecnológica de Pereira",
    url: "https://repositorio.utp.edu.co/server/api/core/bitstreams/2971b111-ab2d-44a1-a880-5070d9359a86/content",
    summary:
      "Documenta que Fernando Solarte Lindo incluyó en «El hombre con cola de león» (1980) un relato titulado «La Tía», clasificado como «Tainimuka» en su tabla 6 (pp. 38-39), bajo el tema del castigo por las faltas de los dioses. En el mismo libro hay otros relatos tanimuka, como «La creación de la noche». Describe además el marco didáctico del libro: un narrador adulto que cuenta los mitos a unos niños (p. 37).",
    limitation:
      "Sólo da el título y la etiqueta étnica: no trae ni una frase de la trama de Solarte, y la etiqueta sale del propio libro. El libro de Solarte sólo tiene en línea una ficha de Google Books y no se pudo consultar.",
  }),
  hughJonesorigem2015: source({
    title: "A origem da noite e por que o sol é chamado de «folha de caraná»",
    author: "Stephen Hugh-Jones",
    year: 2015,
    type: "artículo de antropología comparada, Sociologia & Antropologia 5(3), pp. 709-763 (SciELO Brasil)",
    url: "https://www.scielo.br/j/sant/a/PGN6HrRSsC8ybV4QJgjHM6S/?lang=pt",
    summary:
      "Sitúa el ciclo ufaina de von Hildebrand (1975) entre las versiones regionales del Vaupés y el Apaporis. Nombra a sus creadores (Imararimakana) junto a los Munully kawiyarí y los Karipú Lakena yukuna. Anota que en esa versión el dueño de lo que se pide puede ser un tío y no el abuelo. Advierte que estas historias de origen se encadenan con otras sobre el agua, las hojas o la mortalidad, y que hablar de un mito de un solo pueblo es problemático en esa región de intercambio.",
    limitation:
      "Trata el origen de la noche, no el del agua. Menciona el episodio de la tía sólo como parte del mismo corpus, y está escrito en portugués.",
  }),
  colombiaTanimuca: source({
    title: "Tanimuca (perfil de la lengua y el pueblo)",
    author: "Ministerio de Cultura de Colombia, programa de lenguas nativas",
    type: "perfil sociolingüístico institucional",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Documents/Tanimuca.pdf",
    summary:
      "Registra «ufaina» y «ufanía» entre las denominaciones del pueblo y de la lengua tanimuca, junto a retuarã y letuama. Ubica la lengua en la subfamilia tucano oriental y describe los resguardos donde viven las familias. Sirve para atribuir el relato al pueblo que lo contó.",
    limitation:
      "Es una síntesis institucional sin fecha visible en el documento. No narra el relato: sólo sirve para denominación y ubicación.",
  }),
  colombiaParque: source({
    title: "Parque Nacional Natural Yaigojé Apaporis",
    author: "Parques Nacionales Naturales de Colombia",
    type: "ficha institucional del área protegida",
    url: "https://www.parquesnacionales.gov.co/nuestros-parques/pnn-yaigoje-apaporis/",
    summary:
      "Cuenta a los Yairi marâ (Tanimuka) entre los pueblos del territorio del bajo Apaporis, con los Letuama, Macuna, Yauna, Cabiyari y otros. Confirma que el pueblo del relato tiene hoy un nombre propio distinto de «Ufaina» y que comparte el territorio con los vecinos cuyos paralelos se citan.",
    limitation:
      "Es divulgación institucional sin aparato y no menciona el relato. Describe un territorio multiétnico y no adjudica tradiciones a un solo pueblo.",
  }),
  rosisilvo2021: source({
    title: "O silvo da serpente: saberes poéticos em narrativas indígenas sobre a Cobra Grande",
    author: "Marcos Henrique de Oliveira Zanotti Rosi",
    year: 2021,
    type: "disertación de maestría (Programa de Pós-Graduação em Educação, Universidade do Estado do Pará)",
    url: "https://propesp.uepa.br/ppged/wp-content/uploads/2024/03/ROSI-Marcos-H.-O.-Z.-O-SILVO-DA-SERPENTE-saberes-poeticos-em-narrativas-indigenas-sobre-a-Cobra-Grande.-PDF.pdf",
    summary:
      "Distingue la gran serpiente de doce narrativas indígenas catalogadas (tupari, suruí paiter, wai-wai, munduruku; cuadro 1, p. 28) de la Cobra Grande que, «no diálogo entre os povos originários e os recém chegados europeus», se vuelve Boiuna, Norato o Maria Caninana (pp. 61-63). Cita la versión de Josse Fares (2001): herir la cabeza de Norato con un machado virgem y echar leche de mujer en su boca, y Norato siguiendo las canoas hacia las fiestas.",
    limitation:
      "Tesis brasileña sobre Pará y otras regiones de Brasil; no trata Leticia ni Colombia, y trabaja la Cobra Norato sólo a través de fuentes secundarias.",
  }),
  santosNarracion2010: source({
    title: "Narración tikuna del origen del territorio y de los humanos",
    author: "Abel Antonio Santos",
    year: 2010,
    type: "artículo en revista académica (Mundo Amazónico 1, pp. 303-313, Universidad Nacional de Colombia, sede Amazonia)",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/10900",
    summary:
      "A partir de la narración del profesor Marcelino Noé, de Puerto Nuevo (resguardo Putumayo-Cotuhé, Tarapacá, Amazonas colombiano), presenta a Noratù, inmortal que devoraba a quien se acercaba a beber del agua primera, expulsado al borde del mundo, y que como boa regula las crecientes y vaciantes del Amazonas; los curanderos bajan a mediar con él.",
    limitation:
      "Es mitología ticuna, no el relato ribereño de Norato: sirve sólo como paralelo del lado colombiano. La coincidencia del nombre no la comenta el autor y no prueba parentesco.",
  }),
  lowieTukuna19522: source({
    title: "The Tukuna",
    author: "Curt Nimuendajú (ed. Robert H. Lowie, trad. William D. Hohenthal)",
    year: 1952,
    type: "monografía etnográfica (University of California Publications in American Archaeology and Ethnology 45)",
    url: "https://www.etnolinguistica.org/biblio:nimuendaju-1952-tukuna",
    summary:
      "En la p. 121 recoge de los ticuna del Solimões la historia de dos hermanos con poderes mágicos que, odiados por la gente, se transforman en grandes serpientes, socavan las casas de sus enemigos y las hunden con todos sus habitantes, hasta que los matan con lanzas envenenadas.",
    limitation:
      "Trabajo de campo en el lado brasileño del territorio ticuna, en los años treinta y cuarenta. Es un paralelo del motivo de la casa hundida por serpientes, no una versión de Norato.",
  }),
  silvaCrencas1994: source({
    title: "Crenças e lendas do Uaupés",
    author: "Alcionílio Brüzzi Alves da Silva",
    year: 1994,
    type: "compilación de relatos indígenas del Uaupés (Abya-Yala / ORSTOM, Quito)",
    url: "https://horizon.documentation.ird.fr/exl-doc/pleins_textes/divers11-10/010020940.pdf",
    summary:
      "Recoge «Bóia-assu, o homem que desapareceu» (pp. 198-199), narrado por Ambrósio, tukano de Santa Luzia, en el río Papuri, en el que una mujer queda preñada de un hijo de la Cobra Grande y lo lleva a Bóia-assu, cerca de Manaos; y «A Piranha, filha da Cobra-Grande» (p. 204). El editor recuerda que Bopp tomó de Amorim los mitos de la Cobra Grande.",
    limitation:
      "Relatos tukano y desana del Uaupés, no ribereños paraenses: comparten el motivo de la mujer preñada por la Cobra Grande, no la trama de Norato y Caninana.",
  }),
  paraCobra2019: source({
    title: "Cobra Norato: a educação do herói pelo rio",
    author: "Benilton Cruz (Universidade Federal do Pará)",
    year: 2019,
    type: "artículo de divulgación académica (Amazônia Latitude)",
    url: "https://www.amazonialatitude.com/2019/03/26/cobra-norato-a-educacao-do-heroi-pelo-rio/",
    summary:
      "Resume la leyenda: la cabocla Zelina pare a los gemelos Maria Caninana y Honorato, echados al río; Norato frena las maldades de la hermana, se vuelve joven en las fiestas y sólo lo desencanta un soldado de la guarnición de Cametá, que le pone leche de mujer parida en la boca y le hiere la cabeza. Lo contrasta con el poema de Raul Bopp, donde la metamorfosis es inversa.",
    limitation:
      "Texto breve de divulgación orientado al uso didáctico del poema de Bopp; no da fuente del nombre Zelina ni narrador.",
  }),
  cayonPienso2013: source({
    title: "Pienso, luego creo: la teoría makuna del mundo",
    author: "Luis Cayón",
    year: 2013,
    type: "monografía etnográfica (Instituto Colombiano de Antropología e Historia, colección Terrenos Etnográficos)",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/71",
    summary:
      "En la nota 56 (p. 146) propone que Buyawasu, la Anaconda primordial makuna, sea una adaptación de boia açu, «cobra grande» en nheengatú, «nombre recurrente para varias anacondas mitológicas en varios lugares del Amazonas y sus afluentes».",
    limitation:
      "Etnografía del Pirá Paraná (Vaupés colombiano), no del Amazonas ribereño; sólo documenta que el nombre de la Cobra Grande en lengua general circula en la Amazonia colombiana.",
  }),
  galvaoLivro2004: source({
    title: "Livro dos antigos Desana: Guahari Diputiro Porã",
    author: "Tõrãmü Bayaru (Wenceslau Sampaio Galvão) y Guahari Ye Ni (Raimundo Castro Galvão)",
    year: 2004,
    type: "libro de narradores indígenas (ONIMRP/FOIRN, São Gabriel da Cachoeira, 687 pp.; narraciones grabadas en desana entre 1986 y 1997, organizadas por Dominique Buchillet)",
    url: "https://acervo.socioambiental.org/acervo/livros/livro-dos-antigos-desana-guahari-diputiro-por%C3%A3",
    summary:
      "En un episodio en que un hombre visita la maloca de la familia de su esposa, el suegro y el cuñado llegan a saludarlo «na forma de uma cobra grande»; su esposa le advierte que le darán miedo pero no le harán daño y que no debe asustarse. Es el mismo motivo de la prueba del susto ante la gran serpiente que en Hygama decide el desencanto de Honorato.",
    limitation:
      "Mitología desana del alto río Negro, en la frontera de Brasil con Colombia, sin relación directa con Norato. Se leyó la ficha del acervo del ISA y el texto del libro; es un paralelo, no una versión.",
  }),
  araujomito2025: source({
    title: "El mito Curupira en las narraciones orales de Boa Vista, una comunidad ribereña ubicada en el municipio de Nova Timboteua (PA)",
    author: "Gracineia dos Santos Araújo y Sara Cristina Linhares Aleixo",
    year: 2025,
    type: "artículo académico con cinco relatos orales transcritos (Revista (Entre Parênteses), Universidade Federal de Alfenas, v. 14, n. 1, pp. 1-18)",
    url: "https://publicacoes.unifal-mg.edu.br/revistas/index.php/entreparenteses/article/view/2383",
    summary:
      "Publica y analiza cinco testimonios de Boa Vista (Pará): Rosalio, Bira, cuenta la hoguera junto al igarapé Seco donde dos pretinhos desnudos los adormecen a él y a su compadre Paió (relato 1, p. 9) y los ruidos de caballo bajo los mutás en Maracanãzinho (relato 5, p. 14); Teudorico, don Perí, lo ve junto al igarapé Quariquara. Concluye que allí Curupira es un hombrecito negro, desnudo, de pies normales, que anda en grupo y vigila la mata.",
    limitation:
      "Es un poblado de Pará, no Leticia. Los relatos se transcribieron al portugués, se tradujeron al español y se ajustaron a la norma culta; no se da la fecha de las entrevistas.",
  }),
  araujolengua2022: source({
    title: "La lengua del colonizador europeo y los mitos indígenas: análisis de la leyenda de Curupira a partir de la cosmovisión amazónica paraense",
    author: "Gracineia dos Santos Araújo",
    year: 2022,
    type: "artículo académico (Tabuleiro de Letras, Universidade do Estado da Bahia, v. 16, n. 2, pp. 8-24)",
    url: "https://www.revistas.uneb.br/index.php/tabuleirodeletras/article/view/14805",
    summary:
      "Estudia las narraciones sobre Curupira recogidas entre 2021 y 2022 en los campus de Castanhal y Cametá de la Universidade Federal do Pará para ver si es un dios vivo o el demonio de la carta de Anchieta de 1560. Según el artículo de 2025, reúne rasgos como pelo de fuego, dientes verdes o látigo de bejuco ardiente.",
    limitation:
      "Pará, no Colombia. Se leyó el resumen y la cita que de él hace el artículo de 2025, no el texto completo.",
  }),
  araujoCurupira2023: source({
    title: "Curupira: configuración del mito en las narraciones orales de los pueblos de la selva",
    author: "Gracineia dos Santos Araújo",
    year: 2023,
    type: "artículo académico en español (Muiraquitã, Universidade Federal do Acre, v. 11, n. 1, DOI 10.29327/210932.11.1-8)",
    url: "https://periodicos.ufac.br/index.php/mui/article/download/6343/4220",
    summary:
      "Analiza narraciones orales del interior amazónico paraense y la función de Curupira como protector de la selva que castiga a quien la daña; cita la tradición que lo describe como un pequeño tapuio con los pies vueltos y sin orificios del cuerpo, «mussiço».",
    limitation:
      "Pará y Acre, no Leticia; es análisis con citas breves de testimonios, no transcripción de relatos completos.",
  }),
  camachoColombia1988: source({
    title: "Colombia amazónica: el ciclo del caucho (1850-1932)",
    author: "Roberto Pineda Camacho",
    year: 1988,
    type: "capítulo de libro de historia (Colombia amazónica, edición digital en Libros Libres de Villegas Editores)",
    url: "https://www.100libroslibres.com/colombia-amazonica-el-ciclo-del-caucho-1850-1932",
    summary:
      "Al describir las misiones del río Negro y el Isana, anota que junto al culto de los santos «subsistían los temores hacia el Curupira» y a otros seres del agua y de la selva, cuyos males curaban los chamanes.",
    limitation:
      "Historia regional; menciona a Curupira de pasada como creencia de la frontera del río Negro, sin relato.",
  }),
  reichelDolmatoffAlgunos1981: source({
    title: "Algunos conceptos de geografía chamanística de los indios Desana de Colombia",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1981,
    type: "artículo etnográfico (digitalizado en la Biblioteca Digital Curt Nimuendajú)",
    url: "https://www.etnolinguistica.org/biblio:reichel-1981-algunos",
    summary:
      "Menciona las tradiciones orales desana relacionadas con el curupira, «espíritu de la selva estrechamente asociado con ciertas palmas», al fechar el complejo ritual de los ritos de iniciación.",
    limitation:
      "Mención de una línea en un estudio sobre geografía chamanística del Vaupés colombiano; no narra ningún encuentro.",
  }),
  araujoSeres2026: source({
    title: "Seres invisibles visibles: la tradición oral amazónica en Histórias de Curupira, de Paulo Maués Corrêa",
    author: "Gracineia dos Santos Araújo y Daniel Guillermo Gordillo Sánchez",
    year: 2026,
    type: "artículo académico (fólio - Revista de Letras, Universidade Estadual do Sudoeste da Bahia)",
    url: "https://periodicos2.uesb.br/folio/article/view/18890",
    summary:
      "Estudia el libro Histórias de Curupira (2018) de Paulo Maués Corrêa, diez relatos sobre el espíritu de la selva, como parte de la tarea de desdemonizar la figura que el colonizador europeo convirtió en diablo.",
    limitation:
      "Se leyó el resumen; trabaja sobre una reelaboración escrita paraense, no sobre testimonios orales directos.",
  }),
  comCienciaCurupira2025: source({
    title: "Curupira: figura folclórica nunca é a mesma para diferentes povos",
    author: "Juliana Vicentini (ComCiência, Labjor/Unicamp)",
    year: 2025,
    type: "reportaje de divulgación científica",
    url: "https://www.comciencia.br/curupira-e-a-criatura-que-antecipou-a-necessidade-de-preservacao-ambiental/",
    summary:
      "Recoge a especialistas en tradición oral que subrayan que la descripción física de Curupira no es homogénea: en unos lugares pelo de fuego y pies vueltos, en otros niño peludo con un solo ojo, y que su castigo recae sobre el cazador que mata hembras.",
    limitation:
      "Divulgación brasileña general, sin testimonios fechados ni referencia a la Amazonia colombiana.",
  }),
  hohenthalTukuna1952: source({
    title: "The Tukuna, «The Errors of Cimidyue», pp. 148-150 (PDF completo en la Biblioteca Digital Curt Nimuendajú)",
    author: "Curt Nimuendajú; edición de Robert H. Lowie; traducción de William D. Hohenthal",
    year: 1952,
    type: "monografía etnográfica, fuente primaria",
    url: "https://etnolinguistica.wdfiles.com/local--files/biblio%3Animuendaju-1952-tukuna/nimuendaju_1952_tukuna.pdf",
    summary:
      "Único registro completo del relato. Cuenta el engaño del marido con los dardos y los monos coatá, la noche con los monos que se vuelven gente, la casa del señor de los monos que es de raza de jaguares, la cuerda en la pierna, la fuga con el morrocoy, el garrotazo en la rodilla del hermano que hoy es Orión, los guías falsos (el pájaro que golpea la madera, el inambú, el nido de hormigas que es un jaguar), la mariposa azul dueña de la ceiba, la libélula roja, las piñas del padre Naugeane, el vomitivo y la muerte del marido en la fiesta de máscaras. En la p. 147 compara la explicación de la pierna de Orión de sus informantes de 1941-1942 con la del «Captain» Félix en 1929.",
    limitation:
      "Es una traducción al inglés, hecha por otro, de notas de un etnógrafo que trabajó sólo con los ticuna del lado brasileño; no nombra al narrador de esta leyenda. El escaneo reproduce mal los signos fonéticos de los nombres, así que Cimidyue y Naugeane son lecturas aproximadas.",
  }),
  pressTukuna1952: source({
    title: "The Tukuna (ficha editorial)",
    author: "University of California Press",
    year: 1952,
    type: "ficha del editor original",
    url: "https://www.ucpress.edu/books/the-tukuna",
    summary:
      "Confirma autoría (Curt Nimuendajú, con Robert Lowie) y que el libro es la edición de la Universidad de California en la que se publicó la leyenda de Cimidyue.",
    limitation:
      "Sólo es la ficha del libro; no reproduce el texto ni dice nada del relato.",
  }),
  nimuendajuTukuna1952: source({
    title: "The Tukuna (Nimuendajú 1952) — ficha en la Biblioteca Digital Curt Nimuendajú",
    author: "Biblioteca Digital Curt Nimuendajú",
    year: 1952,
    type: "ficha bibliográfica con enlace al PDF",
    url: "https://biblio.etnolinguistica.org/nimuendaju_1952_tukuna",
    summary:
      "Es la página desde la que se descarga el PDF íntegro usado como primario; da los datos de la serie (University of California Publications in American Archaeology and Ethnology, vol. 45).",
    limitation:
      "Ficha y enlace, no texto. Duplica la fuente primaria como punto de acceso: se incluye para que el primario pueda localizarse aunque cambie la URL del archivo.",
  }),
  faulhaberestrelas2004: source({
    title: "«As estrelas eram terrenas»: antropologia do clima, da iconografia e das constelações Ticuna",
    author: "Priscila Faulhaber",
    year: 2004,
    type: "artículo de antropología, Revista de Antropologia (USP), en SciELO Brasil",
    url: "https://www.scielo.br/j/ra/a/Hmktwpjvbr4BzjjgGDKw9yt/?lang=pt",
    summary:
      "Identifica, a partir del registro de Nimuendajú y de talleres con ticuna, una constelación en forma de pierna que corresponde a Orión: los dedos en las Tres Marías y la quiebra de la pierna en alfa, gamma, beta y épsilon, que empieza a desaparecer al oeste desde el 20 de mayo. No trata el episodio, pero confirma que una pierna rota en Orión es figura del cielo ticuna, que es lo que el relato explica con el garrotazo de Cimidyue. Describe además las máscaras y vestimentas rituales de la colección Nimuendajú del Museo Goeldi, del tipo que lleva el marido en la fiesta final.",
    limitation:
      "No cuenta la leyenda de Cimidyue; trata la astronomía y la iconografía ticuna en general. El nombre ticuna de la constelación aparece en el artículo como imagen y no se lee en el texto.",
  }),
  pulgarinRasgos2012: source({
    title: "Rasgos lingüísticos en relatos míticos tikuna: una caracterización (tesis de maestría)",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2012,
    type: "tesis de maestría, Universidad Nacional de Colombia, sede Amazonia",
    url: "https://repositorio.unal.edu.co/items/7c7d7491-4077-4aa2-867b-f9453a589fea",
    summary:
      "Cita el resumen de Goulard del mito de origen: Ngutapa ata a su esposa a un árbol en pleno monte, un tatatao la desata y ella, hecha avispa, le pica las rodillas. Es la prueba de que Ngutapa pertenece al relato de origen y no a la odisea de Cimidyue, y a la vez el paralelo más próximo: otra mujer ticuna abandonada por su marido en la selva.",
    limitation:
      "No menciona a Cimidyue. Su corpus son relatos grabados en Colombia; el resumen de Ngutapa es de segunda mano (Goulard 2009).",
  }),
  goulardEntre2009: source({
    title: "Entre mortales e inmortales. El Ser según los Ticuna de la Amazonía — Anexo 1. Mito del origen (resumen)",
    author: "Jean-Pierre Goulard",
    year: 2009,
    type: "monografía antropológica, Institut français d'études andines / CAAAP, en OpenEdition Books",
    url: "https://books.openedition.org/ifea/3953",
    summary:
      "El anexo resume el mito de origen ticuna, con Ngutapa y los gemelos nacidos de sus rodillas. Sirve para separar ese ciclo de la odisea de Cimidyue, con la que la ficha heredada lo había fundido.",
    limitation:
      "OpenEdition devolvió un desafío anti-robots (Anubis) a la descarga directa; el contenido se comprobó con un lector web el 2026-09-22 y no nombra a Cimidyue ni a Chimuiyaé. No se ha podido confirmar que la grafía «Chimuya-e» venga de este libro.",
  }),
  nietoReligion1994: source({
    title: "Religión y mitología de los uitotos, primera parte (cap. III, «Análisis de los mitos»)",
    author: "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto",
    year: 1994,
    type: "etnografía clásica (original alemán de 1921-1923), Universidad Nacional de Colombia",
    url: "https://repositorio.unal.edu.co/handle/unal/3113",
    summary:
      "Resume el mito uitoto de Kudiruejitoma, el jefe enfermo: su mujer quema en una hoguera la piel vieja que él se quita para ir a los bailes, y él convierte a los suyos en libélulas y se va al pie del cielo. Da el paralelo amazónico colombiano del disfraz quemado en tiempo de fiesta y de la libélula como forma de tránsito.",
    limitation:
      "Es otro pueblo (uitoto) y la lectura de Preuss es lunar; no hay contacto documentado entre ese mito y el de Cimidyue. El texto del mito está en la segunda parte de la obra.",
  }),
  iSATicuna2008: source({
    title: "Ticuna — Povos Indígenas no Brasil",
    author: "Instituto Socioambiental (ISA)",
    year: 2008,
    type: "enciclopedia institucional de pueblos indígenas",
    url: "https://pib.socioambiental.org/pt/Povo:Ticuna",
    summary:
      "Sitúa a los ticuna del alto Solimões, donde se recogió el relato, y reconstruye las visitas de Nimuendajú desde 1929 y el valor de su monografía; resume la mitología de Yo'i e Ipi que Nimuendajú publicó en las mismas páginas.",
    limitation:
      "Perfil general del pueblo del lado brasileño; no trata esta leyenda.",
  }),
  filhoamadurecimento2017: source({
    title: "O amadurecimento dos corpos e do cosmos – mito, ritual e pessoa ticuna",
    author: "Edson Tosta Matarezio Filho",
    year: 2017,
    type: "artículo de antropología, Revista de Antropologia (USP)",
    url: "https://www.revistas.usp.br/ra/article/download/132073/129513/256170",
    summary:
      "Relaciona mito, cuerpo y territorio entre los ticuna y discute la obra de Nimuendajú (1952) y Goulard (2009) como las fuentes de referencia de la mitología ticuna, que es el marco en que se lee esta leyenda.",
    limitation:
      "No menciona a Cimidyue; es contexto sobre la mitología ticuna y la fiesta de la moza nueva.",
  }),
  jacobGrimms1812: source({
    title: "Grimms' Fairy Tales («Hansel and Gretel»), Project Gutenberg n.º 2591",
    author: "Jacob y Wilhelm Grimm",
    year: 1812,
    type: "colección de cuentos populares europeos",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "Contiene «Hansel and Gretel»: el abandono en el bosque por quien debía cuidar y el regreso a casa tras perderse, el paralelo europeo que se usa en similitudes.",
    limitation:
      "Paralelo tipológico lejano, sin relación histórica con el relato ticuna; la edición de Gutenberg es una traducción inglesa.",
  }),
  trujilloRaices20252: source({
    title: "Raíces sumergidas. Historias ancestrales de la Amazonia, «Jau y el robo de las semillas», pp. 38-39",
    author: "Fundación Omacha; comps. Diana Trujillo, Pablo Alonso Ramos-Henao y Mario Guillermo Guerrero; abuelos sabedores de Puerto Nariño",
    year: 2025,
    type: "compilación de tradición oral, fuente primaria",
    url: "https://www.omacha.org/descargas/2025/Libro-Raices-sumergidas-web.pdf",
    summary:
      "Único texto legible que nombra a Petapeta: un hombre encantado que puede volverse venado y carga un costal con ñame, batata, camote, plátanos, estacas de yuca y semillas de frutales. Jau, hechicero, se disfraza de criatura emplumada y se tiende en el camino; cuando Petapeta intenta violarlo, salta, le roba el costal y huye, y Petapeta le grita que siembre todo. Cierra diciendo que así tuvieron sustento las generaciones de tikunas. El libro lista a los diecisiete abuelos sabedores (catorce tikuna) y se hizo en Puerto Nariño, en el Resguardo Ticoya.",
    limitation:
      "No atribuye el relato a un abuelo concreto ni da fecha de grabación; el texto está redactado por los compiladores en castellano para un libro ilustrado, no transcrito palabra por palabra.",
  }),
  gonzalezHistorias20002: source({
    title: "Historias de los abuelos de Moruapü. Versión libre en castellano («El venado y la historia de los alimentos», pp. 47-49; «El hombre Gau», pp. 51-54)",
    author: "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila (comps.); Asociación Eware",
    year: 2000,
    type: "compilación de relatos tikuna grabados en talleres del ICBF, con narrador, lugar y fecha por relato",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "Trae dos versiones colombianas fechadas del mismo robo. En «El hombre Gau» (Rafael Cayetano, clan Tigre, San Francisco, río Loretoyacu, 1994) un muchacho se empluma con resina de siringa, el dueño del canasto de alimentos lo revisa parte por parte y lo llama Gau, el muchacho le roba el canasto y el dueño le grita que siembre; luego un grillo encantado le tumba la chagra y el dueño recupera las semillas en una fiesta de pelazón. En «El venado y la historia de los alimentos» (Augusto Coello, Boyahuazú, 1993) Yoí envía a Iya Iya, un hombre con forma de venado, y le roban la mochila durante una pesca con barbasco.",
    limitation:
      "Es una traducción libre al castellano regional hecha para uso escolar, según su presentación; en ninguna de las dos el dueño se llama Petapeta.",
  }),
  hohenthalTukuna19522: source({
    title: "The Tukuna, «The Acquisition of Cultivated Plants», pp. 130-131, y nota sobre el vatu del venado, p. 22",
    author: "Curt Nimuendajú; edición de Robert H. Lowie; traducción de William D. Hohenthal",
    year: 1952,
    type: "monografía etnográfica",
    url: "https://etnolinguistica.wdfiles.com/local--files/biblio%3Animuendaju-1952-tukuna/nimuendaju_1952_tukuna.pdf",
    summary:
      "La versión más antigua: el venado había guardado en su canasto tapado esquejes del árbol de la yuca dulce; Dyoi, convertido en árbol a la orilla de un igarapé, se lo roba durante una pesca con barbasco, y el venado le dice que siembre en una chagra nueva. En la p. 22 anota que los ticuna dicen de una planta cultivada antigua que «llegó primero en el vatu del venado». Explica por qué Petapeta puede volverse venado.",
    limitation:
      "Recogido entre los ticuna del lado brasileño en 1941-1942; el dueño es el venado sin nombre y el ladrón es el héroe Dyoi, no Jau.",
  }),
  ambienteMujeres2020: source({
    title: "Mujeres Cuidadoras de la Amazonía. Convocatoria Mujer y Familia: listado de propuestas seleccionadas",
    author: "Visión Amazonía (Ministerio de Ambiente y Desarrollo Sostenible) y Programa de Pequeñas Donaciones GEF-PNUD",
    year: 2020,
    type: "documento institucional",
    url: "https://visionamazonia.minambiente.gov.co/content/uploads/2020/11/RESULTADO-CONV-MUJERES.pdf",
    summary:
      "Registra entre los proyectos seleccionados en Amazonas el de la Asociación de cabildos y autoridades tradicionales indígenas Ticuna, Cocama y Yagua (ATICOYA) de Puerto Nariño: «Fortalecimiento de la canasta básica de abundancia PETAPETA en producción para el sostenimiento de la vida de las mujeres y familias de ATICOYA». Prueba que el nombre del dueño del costal sigue vivo en Puerto Nariño asociado a la abundancia de la chagra.",
    limitation:
      "Es un listado de proyectos: no narra el mito ni explica el nombre.",
  }),
  nietoReligion19942: source({
    title: "Religión y mitología de los uitotos, primera parte (caps. II y III)",
    author: "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto",
    year: 1994,
    type: "etnografía clásica (original alemán de 1921-1923), Universidad Nacional de Colombia",
    url: "https://repositorio.unal.edu.co/handle/unal/3113",
    summary:
      "Describe el árbol de la abundancia uitoto, moniya amena, en cuya copa se daban toda clase de frutos e incluso raíces que comían las aves y el zorro pero no los hombres, y que los jefes antiguos decidieron talar. Es el paralelo amazónico colombiano del alimento retenido que hay que arrebatar.",
    limitation:
      "Es otro pueblo (uitoto) y otra forma del motivo: un árbol, no un costal ni un ladrón disfrazado.",
  }),
  transcripcionCantos2010: source({
    title: "Cantos del ritual de la pelazón tikuna",
    author: "Abel Santos (transcripción y traducción); Baudilio Ramos y Hugo Andrés Ramos (recopiladores)",
    year: 2010,
    type: "textos rituales tikuna grabados en Arara (Amazonas), revista Mundo Amazónico",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/9992",
    summary:
      "Documenta la fiesta de la pelazón en Arara (2008), con sus cantos y el masato, que es la fiesta a la que el dueño de los alimentos pide ser invitado en la versión de Augusto Coello y en la que recupera las semillas en la de Rafael Cayetano.",
    limitation:
      "No trata el mito de los alimentos; es contexto ritual de dos de sus versiones.",
  }),
  evelynWhiteHesiod1914: source({
    title: "Hesiod, the Homeric Hymns, and Homerica (Theogony), Project Gutenberg n.º 348",
    author: "Hesíodo; traducción de Hugh G. Evelyn-White",
    year: 1914,
    type: "poema clásico griego en traducción inglesa",
    url: "https://www.gutenberg.org/ebooks/348",
    summary:
      "La Teogonía cuenta cómo Prometeo roba el fuego a Zeus para los hombres y lo lleva escondido en una caña hueca, y el castigo que sigue. Es el paralelo mediterráneo del bien retenido que un ladrón astuto entrega a la humanidad.",
    limitation:
      "Paralelo tipológico lejano, sin relación histórica con el relato ticuna; aquí el robado no ordena sembrar sino que castiga.",
  }),
  reganHacia2011: source({
    title: "Hacia la tierra sin mal. La religión del pueblo en la Amazonía (3.ª ed. corregida y aumentada)",
    author: "Jaime Regan, S.J.",
    year: 2011,
    type: "estudio etnográfico con testimonios transcritos (CAAAP / CETA; 1.ª ed. Iquitos, 1983)",
    url: "https://web.archive.org/web/20240906143610/https://www.caaap.org.pe/Libros/2022/Hacia-la-tierra-sin-mal.pdf",
    summary:
      "El apartado «Los Yacurunas (Gente del Agua)», pp. 146-148, describe las ciudades del fondo del río (hamaca de boa, banco de charapa, gorra de raya, zapatos de carachama) y transcribe los testimonios R 163-R 170, con nombre, edad y pueblo de cada informante de Loreto: los pies con los dedos hacia el talón, el parecido con amigos y parientes, la niña de la balsa, las defensas con ajo, ají y cruz, y los bufeos colorados que bailan en Iquitos y se llevan a tres muchachas. En la p. 68 está el pescador que desafía el Viernes Santo.",
    limitation:
      "Es Perú (Loreto), con trabajo de campo de 1977-1979; no dice nada de Colombia. El PDF ya no está en la web del CAAAP (404) y se leyó en la copia de la Wayback Machine del 6-9-2024. El OCR tiene erratas.",
  }),
  uFMGTrabajos1947: source({
    title: "Trabajos folklóricos de Requena (Loreto): «La cocha de “Santa Tereza”» (transcripción)",
    author: "Alumnos de 3.er año de Media del Colegio Nacional «Padre Agustín López» de Requena; transcripción publicada por Rômulo Monte Alto (UFMG)",
    year: 1947,
    type: "composiciones escolares para la Sección de Folklore y Artes Populares del Ministerio de Educación Pública del Perú",
    url: "https://www.letras.ufmg.br/padrao_cms/documentos/profs/romulo/LibroLoreto1.pdf",
    summary:
      "En las pp. 49-50 de la transcripción, la composición fechada en Requena el 9-11-1947 define a los yacurunas como hombres del agua o bufeos colorados que aparecen en las playas con la cara del tío, el hermano o el padre, y cuenta el caso del hombre que buscaba taricayas en la playa Cotoyaen, fue llevado bajo el agua hasta Iquitos, vio allí ciudades bonitas y fue devuelto al tercer día.",
    limitation:
      "Es una transcripción de 2011 hecha sobre manuscritos escolares, sin nombre del autor de la pieza. Es de la campaña de 1947 que dio origen a la antología de Arguedas e Izquierdo Ríos, pero no consta que esta composición sea la que ellos publicaron.",
  }),
  ruizReconociendo2022: source({
    title: "Reconociendo al río: gran serpiente acuática como ser vivo en la cosmología animista kukama-kukamiria de la Amazonía peruana",
    author: "Roxani Rivas Ruiz",
    year: 2022,
    type: "artículo de antropología con relatos orales (Amazonía Peruana, vol. XVIII, n.º 35, pp. 89-114)",
    url: "https://amazoniaperuana.caaap.org.pe/index.php/amazoniaperuana/article/view/301",
    summary:
      "Recoge el relato de Roberto Tapayuri Canaquiri (bajo Huallaga, CN Tamarate, 2004) sobre las ciudades de yacurunas donde se quedaron los que estaban en tierra y desde donde roban a jóvenes. Lo sitúa en la cosmología kukama: el mundo de abajo nació del gran diluvio y allá el tiempo corre distinto. Anota, con Chaumeil, que los yagua también hablan de ciudades sumergidas.",
    limitation:
      "Trata del yacuruna sólo de paso: el tema del artículo es la serpiente acuática. Es kukama-kukamiria del Huallaga, no ribereño de Iquitos, y peruano.",
  }),
  ramosMitos2023: source({
    title: "Mitos e lendas da Amazônia brasileira e peruana: estratégias de ensino de língua espanhola",
    author: "Francisca Jaiciclea Farias Ramos",
    year: 2023,
    type: "disertación de maestría (Universidade Federal do Acre, Cruzeiro do Sul)",
    url: "https://www.ufac.br/ppehl/producoes/dissertacoes/DissertaoVersoFINAL.pdf",
    summary:
      "Retoma la definición de Cruz y Simões, sitúa al yacuruna entre los seres de la Amazonía peruana junto al chullachaqui, el tunche y la yacumama, y propone «El Yacuruna» como lectura de clase, remitiendo a Mitos, leyendas y cuentos peruanos de Arguedas e Izquierdo Ríos.",
    limitation:
      "Es una propuesta didáctica brasileña: no transcribe el relato ni aporta registro propio.",
  }),
  arguedasMitos1947: source({
    title: "Mitos, leyendas y cuentos peruanos (fragmento de muestra de la edición de Siruela)",
    author: "José María Arguedas y Francisco Izquierdo Ríos (eds.)",
    year: 1947,
    type: "antología de relatos recogidos por maestros y alumnos (fragmento editorial en PDF)",
    url: "https://www.siruela.com/archivos/fragmentos/Cuentos_peruanos.pdf",
    summary:
      "El índice de la sección Selva registra «El Yacuruna (Loreto)» en la p. 134, y la introducción explica cómo se reunieron los relatos: un cuestionario enviado a las escuelas del Perú, respondido por maestros y alumnos con cita de sus fuentes.",
    limitation:
      "El fragmento sólo trae el índice y la introducción: el texto de «El Yacuruna» no está en abierto (el ejemplar de Internet Archive es de préstamo restringido).",
  }),
  giraldoFolclor1975: source({
    title: "Folclor: versiones de algunas leyendas (Noticias Culturales n.º 179, pp. 6-9)",
    author: "José Joaquín Montes Giraldo, Instituto Caro y Cuervo",
    year: 1975,
    type: "boletín institucional con transcripciones orales",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1634/1/NC_1E_179_1975.pdf",
    summary:
      "Transcribe en castellano amazónico los relatos de Leticia sobre el bufeo o boto que roba gente y se aparece en forma del enamorado (María Cachique de Vega) o se lleva a la persona al agua (Pedro Roque). Es el paralelo colombiano más cercano al Yacuruna de Loreto.",
    limitation:
      "No nombra al Yacuruna: habla del bufeo. Sirve para las similitudes, no como registro de este relato.",
  }),
};

export const amazonasMixtoResidualSourceKeysBySlug = {
  "el-bufeo": [
    "caro1975", "rodriguez1981", "galante2018", "contratiempo",
    "omachaDolphins", "scieloBufeo", "ovidProteus", "homerOdyssey",
  ],
  "el-cotomachaco": [
    "caro1975", "rodriguez1981", "galante2018", "contratiempo",
    "plinyAmphisbaena", "genesisJonah", "abcBibliotecario", "vocesperu",
  ],
  "el-chuy-achaque": [
    "abcBibliotecario", "rodriguez1981", "contratiempo", "mineduAmazonicos",
    "bicentenarioChullachaqui", "hugoNino", "butantanCurupira", "grimmHansel",
  ],
  "madre-de-playa": [
    "rodriguez1981", "contratiempo", "galante2018", "abcBibliotecario",
    "homerOdyssey", "smithsonianMamiWata", "vocesperu", "mineduYacuruna",
  ],
  "la-cobra-grande": [
    "rodriguez1981", "galante2018", "caro1975", "ufamHonorato",
    "multiRioBoiuna", "butantanSnakes", "genesisJonah", "mecCurupira",
  ],
  petapeta: [
    "airumakuchi", "omachaRaices", "visionPetapeta", "icanhTicuna",
    "goulard2009", "azcaita", "prometheus", "genesisWaters",
  ],
  "la-curupira": [
    "butantanCurupira", "cascudoCurupira", "curupiraOral2025", "mecCurupira",
    "caro1975", "rodriguez1981", "mineduAmazonicos", "plinyAmphisbaena",
  ],
  "ngutapa-y-chimuiyae": [
    "nimuendaju1952", "goulard2009", "azcaita", "icanhTicuna",
    "grimmHansel", "homerOdyssey", "vocesperu", "contratiempo",
  ],
  yacuruna: [
    "mineduYacuruna", "hugoNino", "vocesperu", "mineduAmazonicos",
    "smithsonianMamiWata", "ovidProteus", "homerOdyssey", "contratiempo",
  ],
  "chuya-chaqui": [
    "hugoNino", "abcBibliotecario", "mineduAmazonicos", "bicentenarioChullachaqui",
    "butantanCurupira", "grimmHansel", "vocesperu", "contratiempo",
  ],
  "el-hijo-de-tuhixana": [
    "solartelibro", "utpSolarte", "tanimucaProfile", "vocesperu",
    "virgilAeneid", "genesisWaters", "prometheus", "contratiempo",
  ],
  "el-descubrimiento-del-agua-y-los-peces": [
    "solartelibro", "utpSolarte", "tanimucaProfile", "ufaina1975",
    "prometheus", "genesisWaters", "vocesperu", "contratiempo",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickAmazonasMixtoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickAmazonasMixtoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = amazonasMixtoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickAmazonasMixtoResidualSourcesHeredadas(slug) {
  const keys = amazonasMixtoResidualSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = amazonasMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
