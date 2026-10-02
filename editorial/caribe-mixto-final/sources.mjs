function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const caribeMixtoFinalSources = {
  friedemannPrimary: source({
    title: "Miss Nansi, Old Nansi y otras narraciones del folklore de la isla de San Andrés",
    author: "Nina S. de Friedemann, con narradores de Ground Road y Sound Bay",
    year: 1967,
    type: "registro antropológico primario de tradición oral",
    url: "https://www.iberoamericadigital.net/BDPI/Search.do?matter=Criollo+de+San+Andres+Gramatica",
    summary:
      "Identifica una investigación realizada en 1965, las grabaciones conservadas por el Instituto Colombiano de Antropología, los grupos de edad y la transcripción bilingüe de cuentos, rimas y adivinanzas.",
    limitation:
      "El registro fue mediado por investigadoras y traductores de su época; no representa todas las voces raizales ni autoriza a corregir el creole como si fuera inglés defectuoso.",
  }),
  folclorIdentidad: source({
    title: "El folclor de Colombia: práctica de la identidad cultural",
    author: "Compilación colombiana de folclor; sección de Nina S. de Friedemann",
    type: "antología facsimilar de registros orales",
    url: "https://www.flacso.org.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce Mico y Nansi, Beda Nansi, Beda Monkey y el molino, Tiger y el baile de perros y otros materiales de la colección insular con su oralidad concisa.",
    limitation:
      "Es una reedición compilada y la digitalización contiene erratas de OCR; se usa para controlar acciones, no para inventar psicología, ceremonias o cosmologías.",
  }),
  cuentoPopular: source({
    title: "Colombia, cuento popular",
    author: "Instituto Andino de Artes Populares; selección de tradición colombiana",
    type: "antología de cuentos populares con transcripción bilingüe",
    url: "https://biblio.flacsoandes.edu.ec/libros/digital/44511.pdf",
    summary:
      "Publica el contexto de la recolección de 1965, dos variantes de Tigre y Nansi y el cuento Un perro, una cabra y Beda Tiger en creole y traducción literal.",
    limitation:
      "El volumen cambia algunas grafías y títulos y no identifica a cada narrador; las traducciones son literales y no deben novelarse para hacerlas más fluidas.",
  }),
  banrepAnancy: source({
    title: "¡Recordemos a Anancy! | No forget beda Nancy!",
    author: "Andrés Steele Mitchell; Centro Cultural de San Andrés, Banco de la República",
    year: 2020,
    type: "divulgación cultural institucional desde el archipiélago",
    url: "https://www.banrepcultural.org/noticias/recordemos-anancy-no-forget-beda-nancy",
    summary:
      "Explica la centralidad identitaria de Anancy, sus nombres y géneros variables, su carácter de trickster y su circulación en el Caribe anglófono.",
    limitation:
      "Es una síntesis contemporánea y no una variante primaria de cada cuento; no fija una única apariencia, género o moraleja de Anancy.",
  }),
  duncan2015: source({
    title: "Anancy y el tigre en la literatura oral afrodescendiente",
    author: "Quince Duncan",
    year: 2015,
    type: "artículo académico comparativo",
    url: "https://revistas.javeriana.edu.co/index.php/cualit/article/view/12949",
    summary:
      "Examina el origen africano y las funciones míticas e ideológicas de Anancy y Tiger en África, el Pacífico colombiano y Centroamérica dentro de la diáspora.",
    limitation:
      "Su escala transatlántica no demuestra que toda versión caribeña tenga el mismo desenlace ni que Tiger represente siempre a un único actor histórico.",
  }),
  botero2007: source({
    title: "Oralidad y escritura en la isla de San Andrés",
    author: "Juliana Botero Mejía",
    year: 2007,
    type: "artículo etnográfico sobre oralidad, escuela e infancia",
    url: "https://revistas.javeriana.edu.co/index.php/univhumanistica/article/view/2235/1492",
    summary:
      "Describe las historias de Anancy como relatos hechos para ser contados, cantados y animados por mayores a nuevas generaciones, vinculados con memoria e identidad isleña.",
    limitation:
      "Estudia prácticas de 2005 y no ofrece una edición crítica de los cinco relatos concretos revisados aquí.",
  }),
  leipold2002: source({
    title: "Our Native Thing: estudio sobre la imagen histórica de los sanandresanos",
    author: "Claudia Leipold",
    year: 2002,
    type: "tesis etnohistórica con entrevistas a Native Islanders",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll23/id/1005/download",
    summary:
      "Sitúa las Nancy-Stories en lengua y cultura oral insular, recoge la lectura de Oakley Forbes sobre el estilo sanandresano y documenta tensiones generacionales de memoria.",
    limitation:
      "La autora escribe desde una investigación externa y algunas interpretaciones históricas de Anancy y Tiger son hipótesis, no equivalencias obligatorias para cada relato.",
  }),
  locAnansi: source({
    title: "Anansi the Spider",
    author: "Library of Congress, World Treasures exhibition",
    type: "síntesis curatorial comparativa",
    url: "https://www.loc.gov/exhibits/world/earth.html#obj138",
    summary:
      "Reconoce a Anansi como figura popular de Ghana transmitida oralmente y transformada en relatos de África occidental, las Antillas y comunidades afroamericanas.",
    limitation:
      "Es una comparación internacional general; no sustituye el registro raizal ni prueba parentesco textual directo con cada episodio de San Andrés.",
  }),
  smithsonianAnansi: source({
    title: "Ashanti: Folk Tales from Ghana",
    author: "Harold Courlander; Smithsonian Folkways",
    year: 1959,
    type: "colección sonora y ficha curatorial de cuentos asante",
    url: "https://folkways.si.edu/harold-courlander/ashanti-folk-tales-from-ghana/childrens-prose/album/smithsonian",
    summary:
      "Documenta a Anansi como héroe, villano, inspiración moral y figura cómica en cuentos recogidos en Ghana.",
    limitation:
      "Es una colección adaptada por un folclorista estadounidense y no debe usarse para africanizar detalles insulares ausentes de las grabaciones de 1965.",
  }),
  minEducacionOralidad: source({
    title: "Orientaciones pedagógicas para niñas y niños de comunidades de grupos étnicos",
    author: "Ministerio de Educación Nacional de Colombia",
    type: "orientación pública sobre lenguas y oraliteraturas étnicas",
    url: "https://siteal.iiep.unesco.org/sites/default/files/sit_accion_files/orientaciones_pedagogicas_para_la_educacion_inicial_de_ninas_y_ninos_pertenecientes_a_comunidades_de_grupos_etnicos_0.pdf",
    summary:
      "Reconoce el creole del pueblo raizal y define la oraliteratura como acervo conservado y difundido primordialmente mediante la oralidad.",
    limitation:
      "Es un marco pedagógico nacional, no una fuente narrativa ni una autorización para homogeneizar voces, grafías o prácticas del archipiélago.",
  }),

  platoFestival: source({
    title: "Festival Folclórico de la Leyenda del Hombre Caimán",
    author: "Alcaldía Municipal de Plato, Magdalena",
    type: "memoria institucional local del festival",
    url: "https://plato-magdalena.gov.co/MiMunicipio/Paginas/Fiestas-Celebraciones.aspx",
    summary:
      "Atribuye la leyenda a una compilación de relatos de pescadores realizada por Virgilio Di Filippo y documenta el festival iniciado en 1972.",
    limitation:
      "La página celebra patrimonio local y resume el argumento; no aporta las crónicas originales de La Prensa ni demuestra cada detalle biográfico de Saúl.",
  }),
  unimagdalenaCaiman: source({
    title: "El Hombre Caimán",
    author: "Álvaro González Uribe; edición de la Universidad del Magdalena",
    year: 2008,
    type: "crónica cultural regional publicada por universidad",
    url: "https://editorial.unimagdalena.edu.co/Content/ArchivosLibros/tempx1x2x3x4x5x6x7x8x9x0/librox1x2x3-3036/368e454b9ef5f0b91b84ccc0a3f9f604_preview.pdf",
    summary:
      "Registra la versión del mirón de Caño de las Mujeres y otra de amor contrariado con Roque Lina, brebajes y una transformación incompleta.",
    limitation:
      "Es una crónica que enumera versiones y no un estudio histórico de Saúl; la variante amorosa no debe absorber el núcleo del voyeur castigado.",
  }),
  congresoCaiman: source({
    title: "Proyecto de Ley 237 de 2024 Senado: Leyenda del Hombre Caimán",
    author: "Congreso de la República de Colombia",
    year: 2024,
    type: "exposición legislativa de memoria cultural local",
    url: "https://sidn.ramajudicial.gov.co/SIDN/PUBLICACIONES%20PERIODICAS/TEXTO%20COMPLETO%20Y%20TABLAS%20DE%20CONTENIDO/GACETA%20DEL%20CONGRESO/GACETA%20DEL%20CONGRESO%202024/GC%200518%20DE%202024.PDF",
    summary:
      "Resume la atribución a Di Filippo, las crónicas de la década de 1940, la circulación entre pescadores y la popularización musical de la leyenda.",
    limitation:
      "Es la justificación de un proyecto, no una investigación etnográfica independiente; su vínculo con creencias Chimila requiere fuentes comunitarias adicionales.",
  }),
  elTiempoTrenos: source({
    title: "Los fatídicos trenos del Hombre Caimán",
    author: "El Tiempo",
    year: 1995,
    type: "crónica periodística de memoria plateña",
    url: "https://www.eltiempo.com/archivo/documento/mam-482277",
    summary:
      "Recuerda a Virgilio Di Filippo como recopilador de relatos de pescadores y registra motivos de la madre, el ron, el río y el cuerpo de caimán con cabeza humana.",
    limitation:
      "Su prosa recrea la leyenda y añade color local; no convierte a Saúl ni sus rasgos físicos en una persona históricamente comprobada.",
  }),
  elTiempoSong: source({
    title: "Murió el compositor de Se va el caimán",
    author: "Roberto Llanos Rodado; El Tiempo",
    year: 2006,
    type: "perfil periodístico y control musical",
    url: "https://www.eltiempo.com/archivo/documento/MAM-1908465",
    summary:
      "Identifica a José María Peñaranda y documenta la canción que sitúa explícitamente la transformación en Plato.",
    limitation:
      "La canción difundió la leyenda, pero su letra no es una transcripción de las crónicas ni una prueba de la existencia de Saúl.",
  }),
  colombiaTravelCaiman: source({
    title: "Monumento a la leyenda del Caimán",
    author: "Colombia Travel, ProColombia",
    type: "ficha pública de patrimonio turístico",
    url: "https://colombia.travel/es/cienaga/conoce-el-monumento-la-leyenda-del-caiman",
    summary:
      "Confirma el monumento de Plato como espacio público de preservación y celebración de la leyenda caribeña.",
    limitation:
      "Es divulgación turística y no reconstruye variantes, fechas de transmisión ni la autoría de todos los componentes del relato.",
  }),
  minculturaCaiman: source({
    title: "Resolución 4208 de 2018 del Ministerio de Cultura",
    author: "Ministerio de Cultura de Colombia",
    year: 2018,
    type: "acto administrativo sobre patrimonio material",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/resolucion_mincultura_4208_2018.htm",
    summary:
      "Registra la presencia de la leyenda del Hombre Caimán en la composición patrimonial del telón de boca del Teatro Santa Marta.",
    limitation:
      "Prueba recepción patrimonial, no la literalidad del relato ni una procedencia indígena específica.",
  }),
  zenuCaimanComparison: source({
    title: "En los montes, sí, aquí no: cosmología y medicina tradicional de los Zenúes",
    author: "Josef Drexler, con familias y narradores del resguardo Zenú",
    year: 2002,
    type: "etnografía comparativa con testimonios atribuidos",
    url: "https://digitalrepository.unm.edu/abya_yala/222/",
    summary:
      "Documenta un caimán de oro territorial dentro de la cosmología Zenú y permite contrastarlo con el híbrido humano de la leyenda plateña.",
    limitation:
      "El caimán Zenú pertenece a otra comunidad y otro sistema narrativo; se compara para marcar diferencias, nunca para explicar a Saúl.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  compMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II, sección 22 «Narraciones · San Andrés Islas»",
    author: "Eugenia Villa Posse (comp.), reproduciendo a Nina S. de Friedemann, «Miss Nansi, Old Nansi y otras narraciones del folclor de San Andrés, Colombia», Revista Colombiana de Folclor, vol. IV, n.º 9 (1964-1965), pp. 213-234",
    year: 1993,
    type: "antología (fuente primaria reproducida)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Es la única obra abierta que trae el cuento, en las pp. 187-189: el molino que agarra a Nansi y contesta «Yo molinero», la barra de hierro clavada donde cayó, hermana Vaca, la cabra y el perro muertos en ella, Mico que mira desde el árbol, y el final en que el molino agarra a Nansi, Mico finge no poder sacar la barra y Nansi muere en su propia trampa.",
    limitation:
      "Reproduce sólo la versión castellana, traducida por bilingües, y el OCR del PDF tiene erratas («Oída Nansi» por Old Nansi). No nombra narradores. IADAP, Quito. Pp. 187-189.",
  }),
  beckwithJamaica1924: source({
    title: "Jamaica Anansi Stories, n.º 33 «Fling-a-mile» y su nota",
    author: "Martha Warren Beckwith",
    year: 1924,
    type: "colección de cuentos",
    url: "https://www.gutenberg.org/files/72735/72735-h/72735-h.htm",
    summary:
      "El mismo cuento en Jamaica, contado por George Parkes, de Mandeville: la cosa escondida en un hueco del río responde «No me Fling-a-mile» y lanza a sus víctimas sobre las horquetas de Anansi; mueren Cerdo, Cabra y Perro, y Monkey, que miraba desde un árbol, le empuja a Anansi la mano en el hueco. La nota lo llama «very popular» y lo compara con cuentos bulu de Camerún.",
    limitation:
      "Memoirs of the American Folk-Lore Society XVII. Es Jamaica, no San Andrés: sirve de paralelo documentado del mismo tipo de cuento, no de fuente del relato.",
  }),
  edJamaican1907: source({
    title: "Jamaican Song and Story: Annancy Stories, Digging Sings, Ring Tunes, and Dancing Tunes",
    author: "Walter Jekyll (ed.)",
    year: 1907,
    type: "colección de cuentos",
    url: "https://www.gutenberg.org/ebooks/35410",
    summary:
      "Colección jamaicana anterior a Beckwith. Trae «Wheeler» (n.º LI), el pariente más cercano del cuento del molino: la cosa que agarra responde «Me, Wheeler», Annancy clava estacas de hierro donde cae, mata a Peafowl y a Ratta, y Puss, que mira desde un árbol, lo hace caer y finge arrancar las estacas. La introducción anota paralelos africanos del ciclo, como la tortuga que convierte al leopardo en caballo de montar.",
    limitation:
      "Publications of the Folk-Lore Society LV, Londres. Es Jamaica, no San Andrés: paralelo, no fuente del relato.",
  }),
  belloColombia: source({
    title: "Colombia, cuento popular, sección «Nina S. Friedemann · San Andrés y Providencia»",
    author: "Nina S. de Friedemann (textos e introducción); IADAP / Convenio Andrés Bello, serie Cuento popular andino",
    type: "antología (fuente primaria reproducida)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44511",
    summary:
      "Trae la introducción de Friedemann: la comisión del Instituto Colombiano de Antropología (Friedemann y María Rosa de R.), las grabaciones de 1965 a habitantes negros de Ground Road y Sound Bay, los grupos de edad que recordaban o ayudaban a recordar los cuentos de Miss Nansi, la transcripción con Lynn Newball, de Providencia, y el uso del creole.",
    limitation:
      "No reproduce este cuento: sirve sólo para el marco de la recolección. Sin fecha de edición (su bibliografía llega a 1982).",
  }),
  nacionalMiss1965: source({
    title: "Miss Nansi, old Nansi y otras narraciones del folclor de las islas de San Andrés (Colombia) [ficha del artículo en el catálogo «Historia Hoy»]",
    author: "Nina S. de Friedemann; Colombia Aprende (Ministerio de Educación Nacional y Biblioteca Nacional de Colombia)",
    year: 1965,
    type: "ficha de catálogo",
    url: "https://redaprende.colombiaaprende.edu.co/metadatos/recurso/miss-nansi-old-nansi-y-otras-narraciones-del-folcl/",
    summary:
      "Ficha del artículo original de Friedemann: lo sitúa en el n.º 9 de la revista, «de los años 1964 y 1965», dice que las narraciones de Miss Nansi y Old Nansi se obtuvieron en una investigación de antropología social del Instituto Colombiano de Antropología en 1965 y da la autoría y la licencia de la Biblioteca Nacional.",
    limitation:
      "Sólo es la ficha: la página dice «La visualización del recurso no se encuentra disponible», así que el texto del artículo no se pudo leer ahí. Sirve para fechar y atribuir, no para el relato.",
  }),
  rodriguezcuentos2012: source({
    title: "Los cuentos de Anancy: huella indeleble de una tradición akán",
    author: "Lina Pochet Rodríguez",
    year: 2012,
    type: "artículo académico",
    url: "https://archivo.revistas.ucr.ac.cr//index.php/rlm/article/download/12667/11920/",
    summary:
      "Rastrea los cuentos de Anancy hasta la tradición akán de África occidental por sus personajes, escenarios, tono y temas, con trabajo de campo de 2001 en San Andrés, Providencia y Santa Catalina y en Limón (Costa Rica). Trae un inventario de cuentos con procedencia y narrador, entre ellos muchos de Nansi y Tigre en San Andrés, «Anancy and the Molasses Mill» (San Andrés) y dos «Tiger, Anancy's Father Old Riding Horse» tomados del libro Anancy in Limon.",
    limitation:
      "Revista de Lenguas Modernas 17, Universidad de Costa Rica, pp. 189-207. Da títulos de los cuentos, no sus textos, y no trabaja con las grabaciones de Friedemann.",
  }),
  leipoldOur2002: source({
    title: "«Our Native Thing»: estudio sobre la imagen histórica de los sanandresanos",
    author: "Claudia Leipold",
    year: 2002,
    type: "tesis doctoral",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll23/id/1005/download",
    summary:
      "Resume el trabajo de Friedemann en San Andrés (cita «Friedemann en 1965: 215-17»): los viejos recordaban los cuentos, los jóvenes ayudaban con el creole; las Nancy-Stories se cuentan de noche y en círculo pequeño, y su origen es africano. Recoge la descripción de la araña como «amarillo de pies negros» y la lectura de Oakley Forbes de Anancy como el pequeño que vence al fuerte hermano Tigre.",
    limitation:
      "Tesis de la Philipps-Universität Marburg, en un castellano con errores de traducción. Parafrasea a Friedemann y Forbes; no reproduce ninguno de estos cuentos.",
  }),
  mejiaOralidad2007: source({
    title: "Oralidad y escritura en la isla de San Andrés",
    author: "Juliana Botero Mejía",
    year: 2007,
    type: "artículo académico",
    url: "https://revistas.javeriana.edu.co/index.php/univhumanistica/article/download/2235/1492/7680",
    summary:
      "Etnografía de 2005 sobre oralidad y escritura entre niños de San Andrés. Una nota explica que Anancy, Nansi, Anansi, Old Anancy, Bredda Anancy y Hemano Nansi son nombres de la misma araña embaucadora, venida del África occidental con los esclavizados, y que sus historias se hicieron para ser contadas, cantadas y animadas por los abuelos.",
    limitation:
      "Universitas Humanística (Pontificia Universidad Javeriana). Es contexto sobre la tradición; no trae ni comenta estos cuentos.",
  }),
  idarragaLiteratura: source({
    title: "Literatura del archipiélago de San Andrés, Providencia y Santa Catalina",
    author: "Mónica María del Valle Idárraga",
    type: "ensayo bibliográfico",
    url: "https://admin.banrepcultural.org/sites/default/files/archivos-adjuntos-paginas-basicas/literatura_del_archipielago_de_san_andres_providencia_y_santa_catalin._002.pdf",
    summary:
      "Panorama de la literatura raizal que reivindica lo oral: menciona las historias de Anancy recontadas por Lolia Pomare-Myles y da la bibliografía de las colecciones del archipiélago, entre ellas Historias de Anansi y otras historias de la vieja Providencia, de Marcia Dittmann (2008).",
    limitation:
      "Documento del Banco de la República sin fecha. Es una puerta a la bibliografía raizal; no trata estos cuentos.",
  }),
  tiempotestigo2020: source({
    title: "Un testigo lo confirma: en Plato sí se volvió un hombre caimán",
    author: "Juan Gossaín (crónica especial para El Tiempo), citando la carta de Virgilio Di Filippo publicada en El Heraldo el 5 de julio de 1940",
    year: 2020,
    type: "prensa (crónica que transcribe un primario)",
    url: "https://www.eltiempo.com/colombia/otras-ciudades/la-verdadera-historia-detras-de-la-leyenda-del-hombre-caiman-518608",
    summary:
      "Cita por extenso la carta de Di Filippo de 1940: el animal con formas de hombre y caimán en el campamento de la Andian, los testigos Alfonso Camargo Maestre y Luis Arrieta, la madre Manuela Aguilar de El Yucal, la tos curada por Blas Contreras, los brujos de La Guajira, el frasco de líquido azufrado que El Cojo Arenilla arroja al río, el agua del cacique Mantaura y la noche en que Juan García le da plátanos y queso y le reza el Credo al revés. Es el texto que sostiene el mito.",
    limitation:
      "No es el original: es la cita de Gossaín, que intercala paráfrasis y comentarios propios (el móvil de la desnudez de las mujeres está en su paráfrasis, no entre comillas). En un pasaje la madre llama «Sergio» al hijo. Dice que la canción de Peñaranda nació de la carta, contra El Tiempo 2006. El Heraldo del 5-07-1940 no se ha consultado.",
  }),
  tiempoMurio2006: source({
    title: "Murió el compositor de ‘Se va el caimán’",
    author: "Roberto Llanos Rodado (El Tiempo)",
    year: 2006,
    type: "prensa (obituario)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-1908465",
    summary:
      "Dice que José María Peñaranda inició su carrera en 1937 precisamente con «Se va el caimán», y que la melodía se interpretó en 1940 en la película Pasiones tormentosas. Es el dato que pone la canción antes de la carta de Di Filippo y deja en disputa qué vino primero.",
    limitation:
      "Obituario de prensa sin aparato; la fecha de 1937 no se ha cotejado con grabaciones ni con prensa de la época.",
  }),
  uribeHombre2010: source({
    title: "El Hombre Caimán (crónica fechada el 12 de enero de 2008), en De Bolombolo a Aracataca",
    author: "Álvaro González Uribe",
    year: 2010,
    type: "crónica en libro universitario",
    url: "https://editorial.unimagdalena.edu.co/Content/ArchivosLibros/tempx1x2x3x4x5x6x7x8x9x0/librox1x2x3-3036/368e454b9ef5f0b91b84ccc0a3f9f604_preview.pdf",
    summary:
      "Recoge dos versiones que circulaban en Plato hacia 2008: el pícaro pescador Saúl que mira a las platenses en el Caño de las Mujeres, y el amor contrariado con Roque Lina, hija del rico del pueblo, con pócimas de chamanes wayúus de la Alta Guajira, el frasco que le salpica sólo la cara, la madre que lo alimenta con queso, pan y ron y el suegro que ordena disparar. Anota que algunos sitúan esta segunda en Magangué.",
    limitation:
      "Sólo se lee la vista previa pública (pp. 14-15); el texto sigue en p. 16. Es crónica de viaje de 2008, capa tardía respecto de 1940.",
  }),
  panoramaCulturalleyenda2023: source({
    title: "La leyenda del Hombre-caimán de Plato",
    author: "Juan Luis Romani Arroyo (PanoramaCultural)",
    year: 2023,
    type: "prensa cultural regional",
    url: "https://panoramacultural.com.co/patrimonio/9245/la-leyenda-del-hombre-caiman-de-plato",
    summary:
      "Sigue la recopilación de Darío Bolaño Ricaurte: Saúl pescador con diente dorado, la prohibición de la alcaldía de bañarse en el Caño de las Mujeres, el viaje con gitanos a la Alta Guajira, el gran Piacha y sus líquidos rojizo y blanco, el ayudante Mingo Padilla enfermo de malaria, el reemplazo que deja caer la botella y la huida río abajo hasta Tenerife y Sitio Nuevo.",
    limitation:
      "Versión tardía de segunda mano; cree perdido el escrito de Di Filippo y no conoce la cita de Gossaín. Sirve para fechar las capas, no como clave.",
  }),
  colombiaGaceta2024: source({
    title: "Gaceta del Congreso 518 de 2024: ponencia para primer debate del Proyecto de Ley 238 de 2024 Senado (400 años de Plato), apartado 1.2 «Leyenda del hombre caimán»",
    author: "Congreso de la República de Colombia",
    year: 2024,
    type: "documento legislativo",
    url: "https://sidn.ramajudicial.gov.co/SIDN/PUBLICACIONES%20PERIODICAS/TEXTO%20COMPLETO%20Y%20TABLAS%20DE%20CONTENIDO/GACETA%20DEL%20CONGRESO/GACETA%20DEL%20CONGRESO%202024/GC%200518%20DE%202024.PDF",
    summary:
      "Da los datos de Di Filippo (Cerro San Antonio, secretario del juzgado de Plato desde 1927, periodista, organista, sacristán), sitúa sus crónicas en La Prensa de Barranquilla en los años cuarenta, hace a Saúl comerciante que busca un brujo para espiar a las jóvenes del caño, y llama al caimán «animal totémico de los Chimilas». Menciona a Edgar Romanos Moisés como heredero de la leyenda.",
    limitation:
      "Reproduce casi palabra por palabra la crónica de Opinión Caribe de 2015 sin citarla; la atribución chimila no tiene fuente. Dice La Prensa donde Gossaín dice El Heraldo.",
  }),
  visiblePlato2015: source({
    title: "Plato, Magdalena: la Villa de Simón Bolívar (Crónica)",
    author: "Opinión Caribe (sin firma visible)",
    year: 2015,
    type: "prensa regional",
    url: "https://www.opinioncaribe.com/2015/08/22/plato-magdalena-la-villa-de-simon-bolivar-cronica/",
    summary:
      "Es el texto del que sale el párrafo de la Gaceta de 2024: Di Filippo recoge «chismes pueblerinos» de pescadores, escribe crónicas en La Prensa en los años cuarenta sobre el comerciante Saúl Montenegro que se esconde entre las tarullas para espiar a las muchachas del caño, y la canción de Peñaranda populariza la leyenda. Cita como bibliografía Plato, tierra de leyendas de Darío Bolaño (2002).",
    limitation:
      "Crónica de prensa regional sin firma; no transcribe a Di Filippo y repite la atribución chimila sin fuente.",
  }),
  platoFestivalsf: source({
    title: "Festival Folclórico de La Leyenda del Hombre Caimán (Fiestas y celebraciones)",
    author: "Alcaldía Municipal de Plato, Magdalena",
    year: "s. f.",
    type: "página institucional municipal",
    url: "https://plato-magdalena.gov.co/MiMunicipio/Paginas/Fiestas-Celebraciones.aspx",
    summary:
      "Fecha el festival en 1972, por iniciativa del médico Luis Delio Gómez, y la personería de la fundación en 1973; llama a la leyenda «la compilación que hizo el escritor Virgilio di Filippo de unos cuentos de pescadores» y resume la historia como la de Saúl Montenegro, «humilde pescador que por amor se volvió Caimán».",
    limitation:
      "Página institucional sin fecha ni autor; recoge la versión amorosa como oficial, no la de 1940.",
  }),
  reichelDolmatoffMitos1945: source({
    title: "Mitos y cuentos de los indios Chimila (cuento n.º 20, «El hombre que soñó con caimán»), Boletín de Arqueología I-1",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1945,
    type: "etnografía (paralelo)",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/234",
    summary:
      "Cuento chimila en que el caimán «es gente como nosotros»: se traga a un hombre que escapa hiriéndolo por dentro y que vuelve del monte convertido en cazador que aprendió del caimán a llamar a los animales. Es el paralelo documentado más cercano para la relación entre caimán y gente en el bajo Magdalena, y lo que más se acerca a respaldar la atribución chimila de la Gaceta.",
    limitation:
      "Paralelo, no fuente del relato de Plato: otro pueblo, otro argumento, sin transformación por remedio. Se lee en el PDF del ICANH (pp. 14-15 del artículo).",
  }),
  apuleyoBookes1566: source({
    title: "The XI Bookes of the Golden Asse (Metamorphoses), trad. William Adlington",
    author: "Lucio Apuleyo",
    year: 1566,
    type: "texto literario (paralelo)",
    url: "https://www.gutenberg.org/ebooks/1666",
    summary:
      "Obra del siglo II en que Lucio, por el ungüento equivocado que le da Fotis, se vuelve asno en vez de ave. Es el antecedente que propone la crónica de El Tiempo de 1995 para el Hombre Caimán: transformación por preparado, antídoto en manos ajenas y error que deja al hombre atrapado.",
    limitation:
      "Paralelo literario clásico sin relación de transmisión demostrada; traducción inglesa de 1566 en dominio público.",
  }),
  colombiaResolucion2018: source({
    title: "Resolución 4208 de 2018: se declara Bien de Interés Cultural del ámbito nacional el Telón de Boca «Se va el Caimán»",
    author: "Ministerio de Cultura de Colombia",
    year: 2018,
    type: "norma (recepción)",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/resolucion_mincultura_4208_2018.htm",
    summary:
      "Declara patrimonio nacional el telón de Alejandro Obregón «Se va el Caimán», del Teatro Amira de la Rosa de Barranquilla: la obra lleva el título de la canción de Peñaranda y es una de las formas en que la figura del hombre caimán entró en la iconografía del Caribe.",
    limitation:
      "Trata del telón, no del relato; no menciona Plato ni a Di Filippo. Sólo recepción.",
  }),
  beckwithJamaica19242: source({
    title: "Jamaica Anansi Stories, n.º 19 «Dog and Dog-head» y su nota",
    author: "Martha Warren Beckwith",
    year: 1924,
    type: "colección de cuentos",
    url: "https://www.gutenberg.org/files/72735/72735-h/72735-h.htm",
    summary:
      "El mismo cuento en Jamaica, contado por Richard Morgan, de las montañas de Santa Cruz: Hanansi clava la cabeza de perro sobre la vaca que agarró el perro de Tacoomah; Tacoomah restalla el látigo fingiendo que el dueño lo castiga, y Hanansi huye gritando que nadie ha oído que una cabeza de perro cace. La nota dice que se cuenta «everywhere in Jamaica», que no halló versión africana y describe sus dos partes.",
    limitation:
      "Memoirs of the American Folk-Lore Society XVII. Es Jamaica, no San Andrés: sirve de paralelo documentado del mismo tipo de cuento, no de fuente del relato.",
  }),
  parsonsFolkLore1923: source({
    title: "Folk-Lore of the Sea Islands, South Carolina",
    author: "Elsie Clews Parsons",
    year: 1923,
    type: "colección de cuentos",
    url: "https://archive.org/details/parsons-sea-islands",
    summary:
      "Abre con «Dog and Dog-Head» (n.º 1), en varias versiones de Ber Rabbit y Ber Fox o Ber Wolf, con el latigazo fingido contra un árbol y la burla de que una cabeza de perro no caza, y anota que ningún cuento es más popular en las islas. Trae también «Rabbit makes Wolf his Horse» (n.º 38): el conejo dice a las muchachas que el lobo es su caballo de silla, se finge enfermo y lo monta con silla y espuela.",
    limitation:
      "Memoirs of the American Folk-Lore Society XVI. Es la tradición afroamericana de Carolina del Sur con otros personajes (Rabbit, Wolf, Fox); paralelo lejano, no fuente.",
  }),
  compMitos19932: source({
    title: "Mitos y leyendas de Colombia, t. II, sección 22 «Narraciones · San Andrés Islas»: «Tiger y el baile de perros (Relato hecho en español)»",
    author: "Eugenia Villa Posse (comp.), reproduciendo a Nina S. de Friedemann",
    year: 1993,
    type: "antología",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Es la única transcripción abierta del cuento (p. 190): el baile de etiqueta, la regla de colgar el bunda en un clavo junto a la puerta, la llegada de Tiger, la huida con el bunda ajeno y la costumbre de los perros de olerse y pelear. El subtítulo dice que se contó en español, a diferencia de las demás piezas de la sección.",
    limitation:
      "Reproducción de 1993 del artículo de Friedemann (Revista Colombiana de Folclor n.º 9, 1964-1965), que no está abierto; no da narrador ni caserío. OCR con letras espaciadas.",
  }),
  friedemannColombiasfc19831985: source({
    title: "Colombia, cuento popular (serie Cuento popular andino), sección «Nina S. Friedemann · San Andrés y Providencia», introducción",
    author: "Instituto Andino de Artes Populares (IADAP) / Convenio Andrés Bello; textos de Nina S. de Friedemann",
    year: "s. f. (c. 1983-1985)",
    type: "antología (marco de la recolección)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44511",
    summary:
      "Su introducción (pp. 123-125) es la única descripción abierta de cómo se recogió el material del que sale este cuento: grabaciones de 1965 en Ground Road y Sound Bay, los grupos de edad, que los jóvenes de diez a veinte años hablaban español con los forasteros y que muchas conversaciones se hicieron con intérpretes. Explica que un cuento aparezca «hecho en español» en una colección creole.",
    limitation:
      "No trae el baile de perros: sólo reproduce dos cuentos de la sección. Sirve de contexto, no de texto.",
  }),
  estonioEesti2020: source({
    title: "Eesti muinasjutud II: Loomamuinasjutud (Estonian Folktales II. Animal Tales), resumen en inglés, tipo ATU 200B «Why Dogs Sniff at One Another»",
    author: "Archivo de Folclor Estonio, Museo Literario Estonio (Monumenta Estoniae antiquae)",
    year: 2020,
    type: "antología académica por tipos (paralelo)",
    url: "https://www.folklore.ee/era/pub/files/EMj2020_engsummary.pdf",
    summary:
      "Documenta el tipo internacional al que pertenece el motivo del cuento: dos formas estonias de ATU 200B (el perro que sale a buscar pimienta para el banquete del león y no vuelve; los perros expulsados del cielo buscando al culpable) y el tipo vecino 200A (el emisario que se come la petición). En todas los perros se huelen para encontrar algo perdido, como en San Andrés.",
    limitation:
      "Paralelo europeo del mismo tipo, no fuente: sin Tigre, sin baile y sin bundas. Se lee en el resumen inglés del volumen (p. 801).",
  }),
  beckwithJamaica19243: source({
    title: "Jamaica Anansi Stories, n.º 40 «Goat's Escape», variante b «The Dance»",
    author: "Martha Warren Beckwith",
    year: 1924,
    type: "colección folclórica (paralelo)",
    url: "https://www.gutenberg.org/files/72735/72735-h/72735-h.htm",
    summary:
      "En la variante que contó Elizabeth Hilton (Harmony Hall), Anansi y Assono organizan un baile e invitan a la cabra y al perro, y se sientan cada uno junto a una puerta para atraparlos. Es el paralelo antillano del baile de animales que termina en fuga ante un depredador, en el repertorio del que salen los cuentos de Nansi de San Andrés.",
    limitation:
      "Paralelo de motivo, no del mismo cuento: Beckwith no trae el baile de perros ni la explicación de por qué se huelen.",
  }),
  leipoldOur20022: source({
    title: "«Our Native Thing»: estudio sobre la imagen histórica de los sanandresanos en el Mar Caribe colombiano (tesis doctoral)",
    author: "Claudia Leipold",
    year: 2002,
    type: "tesis doctoral",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll23/id/1005/download",
    summary:
      "Resume el trabajo de Friedemann y señala la pérdida de la narración tradicional entre los niños isleños de los años sesenta, que ya cantaban en español; describe las Nancy-Stories como narración nocturna en círculo pequeño y su mezcla con adivinanzas y proverbios. Es el contexto de un cuento de animales contado en español en una isla anglófona.",
    limitation:
      "Paráfrasis de segunda mano (Philipps-Universität Marburg), en castellano traducido con errores; no menciona este cuento.",
  }),
  aprendeMiss19641965: source({
    title: "Miss Nansi, Old Nansi y otras narraciones del folclor de las islas de San Andrés (Colombia) (ficha del recurso)",
    author: "Nina S. de Friedemann; Colombia Aprende, Ministerio de Educación Nacional",
    year: 1964-1965,
    type: "ficha de metadatos del artículo primario",
    url: "https://redaprende.colombiaaprende.edu.co/metadatos/recurso/miss-nansi-old-nansi-y-otras-narraciones-del-folcl/",
    summary:
      "Identifica el artículo original en que se publicó el baile de perros, en la Revista Colombiana de Folclor, vol. IV, n.º 9, pp. 215-233.",
    limitation:
      "Sólo se consultó su ficha: el visor no muestra el recurso. No contiene el cuento.",
  }),
  beckwithJamaica19244: source({
    title: "Jamaica Anansi Stories, n.º 3 «Tiger as Riding-horse» y su nota",
    author: "Martha Warren Beckwith",
    year: 1924,
    type: "colección de cuentos",
    url: "https://www.gutenberg.org/files/72735/72735-h/72735-h.htm",
    summary:
      "El mismo cuento en Jamaica, contado por William Forbes, de Dry River: Anansi dice a dos señoritas que Tiger es el viejo caballo de su padre, se hace el que no puede caminar, pide silla, brida, fusta y espuelas con una excusa para cada una y entra galopando. La nota dice que es «very common in Jamaica», cita una versión en que la silla queda pegada a la espalda de una araña y lo compara con cuentos hausa, yoruba, brasileños y venezolanos.",
    limitation:
      "Memoirs of the American Folk-Lore Society XVII. Es Jamaica, no San Andrés: sirve de paralelo documentado del mismo tipo de cuento, no de fuente del relato.",
  }),
  friedemannColombiasfc198319852: source({
    title: "Colombia, cuento popular (serie Cuento popular andino), sección «Nina S. Friedemann · San Andrés y Providencia»",
    author: "Instituto Andino de Artes Populares (IADAP) / Convenio Andrés Bello; textos de Nina S. de Friedemann",
    year: "s. f. (c. 1983-1985)",
    type: "antología con transcripción creole y traducción",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44511",
    summary:
      "Da el cuento completo en las pp. 128-129 en el creole de San Andrés («A dog an a goat was travellin…») y en traducción literal, con la nota de que el canto del violín y la respuesta del tambor se entonan imitando los instrumentos. Su introducción (pp. 123-125) explica las grabaciones de 1965 en Ground Road y Sound Bay, los grupos de edad, los intérpretes y la transcripción con Lynn Newball.",
    limitation:
      "Reproducción sin fecha del artículo de Friedemann, no el artículo; el OCR tiene erratas. La URL del módulo (biblio.flacsoandes.edu.ec/…/44511.pdf) da 403; ésta es la buena.",
  }),
  compMitos19933: source({
    title: "Mitos y leyendas de Colombia, t. II, sección 22 «Narraciones · San Andrés Islas»",
    author: "Eugenia Villa Posse (comp.), reproduciendo a Nina S. de Friedemann",
    year: 1993,
    type: "antología",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce en la p. 189 la traducción castellana de «Un perro, una cabra y Beda Tiger», idéntica a la de Colombia, cuento popular salvo detalles de una palabra, sin el texto creole. La presentación de la sección (p. 183) dice que los relatos se contaron en inglés, que los tradujeron informantes bilingües y que «sólo se incluye la versión castellana».",
    limitation:
      "Sólo castellano; la frase sobre la versión castellana es ambigua respecto del artículo original. OCR con letras espaciadas.",
  }),
  beckwithJamaica19245: source({
    title: "Jamaica Anansi Stories, n.º 40 «Goat's Escape» (variantes a «The Rain» y b «The Dance») y nota comparativa",
    author: "Martha Warren Beckwith",
    year: 1924,
    type: "colección folclórica (paralelo)",
    url: "https://www.gutenberg.org/files/72735/72735-h/72735-h.htm",
    summary:
      "Es el mismo tipo de cuento en Jamaica. En la variante de Richard Pottinger (Claremont, St. Ann) la cabra, que teme a la lluvia, se refugia en casa de Anansi, que toca el violín cantando que la lluvia trae la carne a casa; la cabra huye, se vuelve piedrita blanca, y el perro, desde la otra orilla, hace que Anansi la lance. La nota dice que es un cuento favorito en Jamaica, que la segunda parte (la cabra lanzada al otro lado por su perseguidor) se mantiene constante, y compara un cuento de Jekyll sobre el aviso escondido en una canción.",
    limitation:
      "Paralelo jamaiquino, no fuente del cuento sanandresano; el perseguidor es Anansi o Assono, no el Tigre, y la cabra es piedra, no olla.",
  }),
};

const raizalKeys = [
  "friedemannPrimary",
  "folclorIdentidad",
  "cuentoPopular",
  "banrepAnancy",
  "duncan2015",
  "botero2007",
  "leipold2002",
  "locAnansi",
];

const hombreCaimanKeys = [
  "platoFestival",
  "unimagdalenaCaiman",
  "congresoCaiman",
  "elTiempoTrenos",
  "elTiempoSong",
  "colombiaTravelCaiman",
  "minculturaCaiman",
  "zenuCaimanComparison",
];

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickCaribeMixtoFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickCaribeMixtoFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = caribeMixtoFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickCaribeMixtoFinalSourcesHeredadas(slug) {
  const keys = slug === "el-hombre-caiman" ? hombreCaimanKeys : raizalKeys;
  return keys.map((key) => {
    const selected = caribeMixtoFinalSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
