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

export function pickAmazonasMixtoResidualSources(slug) {
  const keys = amazonasMixtoResidualSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = amazonasMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
