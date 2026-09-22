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

export const katioSources = {
  severino1924: source({
    title:
      "Creencias, ritos, usos y costumbres de los indios Catíos de la Prefectura Apostólica de Urabá",
    author: "Fray Severino de Santa Teresa",
    year: 1924,
    type: "síntesis misionera histórica, consultada en la segunda edición de 1959",
    url: "https://archive.org/details/losindioscatiosl00seve",
    summary:
      "Reúne el corpus histórico más amplio consultado sobre Caragabí, Genené, Antomiá, Séver, los Domicó, la escalera, Herupotoarra, Baha, Aribamia y Dabeiba. La primera edición de 1924 no está en acceso abierto; el Libro Primero de «Los indios catíos, los indios cunas» (Medellín, 1959) es esa obra, según declara el propio autor en su razón de la segunda edición.",
    limitation:
      "Fue escrita desde una misión católica, emplea categorías racistas y cristianas de su época y no identifica de manera sistemática narradores, lugares ni variantes. La edición de 1959 no es facsímil: el autor admite haberla sacado «corregida y aumentada» sin marcar dónde. Ancastor y los Bibidigomia no aparecen en este volumen: son del corpus de Chaves de 1945, del lado de los relatos que narró Rafael Bailarín.",
  }),
  rochereau1929: source({
    title:
      "Nociones sobre creencias, usos y costumbres de los Catíos del occidente de Antioquia",
    author:
      "Hermanas misioneras de la Inmaculada Concepción y Santa Catalina de Sena, de Santa Rosa de Osos, recolectoras; remitidas por Henri Rochereau y publicadas por Paul Rivet",
    year: 1929,
    type: "notas de campo misioneras",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1929_num_21_1_3658",
    summary:
      "Publica notas reunidas por religiosas entre grupos del occidente antioqueño y conserva variantes de Caragabí, Genené, Antomiá, Costé, Séver, Herupotoarra, la escalera, Aribamia y el cerro Musinga. La nota inicial de Rivet aclara quién recogió el material: Rochereau lo remitió, no lo recogió.",
    limitation:
      "La recolección pasó por traducción y edición misionera; el artículo admite contradicciones entre grupos y usa categorías coloniales que esta edición no reproduce como voz comunitaria. La misma nota advierte que estas notas ya se habían usado en parte para el libro de Severino de Santa Teresa de 1924: los dos textos salen del mismo fondo, así que coincidir entre ellos no corrobora nada.",
  }),
  villa1993: source({
    title: "Mitos y leyendas de Colombia, volumen III",
    author: "Eugenia Villa Posse",
    year: 1993,
    type: "compilación bibliográfica",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Facilita una transcripción consultable de capítulos de Severino 1924 y distingue el relato Chamí de Surranabe del conjunto atribuido a los antiguos Catíos de Urabá.",
    limitation:
      "Reproduce sin suficiente crítica el lenguaje misionero de la obra de 1924 y no constituye una fuente oral independiente.",
  }),
  bicanGuide: source({
    title: "Guía bibliográfica sobre pueblos Emberá y Wounaan",
    author: "Biblioteca Luis Ángel Arango y Banco de la República",
    type: "guía bibliográfica institucional",
    url: "https://www.antioquia.gov.co/images/PDF2/gerencia-indigena/Documentos_tecnicos_academicos/Guia_Embera-Waunaan.pdf",
    summary:
      "Identifica ediciones, autores y localizaciones, incluido El hombre que no podía cazar, narrado por Zaquidiama Domicó de Río Verde.",
    limitation:
      "Es una guía y resumen de fuentes; no reemplaza la publicación original ni el registro oral.",
  }),
  clacsoRegionalization: source({
    title: "Misiones, región y clasificación indígena en Urabá",
    author: "Investigación académica compilada por CLACSO",
    type: "análisis histórico crítico",
    url: "https://biblioteca-repositorio.clacso.edu.ar/libreria_cm_archivos/pdf_2218.pdf",
    summary:
      "Explica que la categoría regional Catío fue parcialmente consolidada por el proyecto misionero en el occidente de Antioquia, Urabá y Chocó.",
    limitation:
      "Analiza la producción histórica de categorías; no ofrece una versión narrativa de los mitos.",
  }),
  restrepo2019: source({
    title: "Civilizar para colonizar en Urabá, Antioquia, 1918-1940",
    author: "Eduardo Restrepo",
    year: 2019,
    type: "estudio histórico crítico",
    url: "https://www.researchgate.net/publication/330453147_Civilizar_para_colonizar_en_Uraba_Antioquia_Colombia_1918-1940",
    summary:
      "Sitúa las prácticas misioneras y colonizadoras dentro de las cuales se produjeron varias fuentes escritas del corpus.",
    limitation:
      "Sirve como crítica de la mediación documental y no como testimonio de los episodios narrativos.",
  }),
  onicKatio: source({
    title: "Embera Katío",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/embera-katio/",
    summary:
      "Ofrece contexto contemporáneo sobre pueblos, territorios y diversidad Emberá sin reducirlos a una sola tradición.",
    limitation:
      "Es un directorio panorámico y no fija versiones canónicas de relatos históricos.",
  }),
  gobiernoMayorKatio: source({
    title: "Emberá Katío",
    author: "Gobierno Mayor de Autoridades Tradicionales Indígenas",
    type: "perfil de organización indígena",
    url: "https://www.gobiernomayor.org.co/embera-katio/",
    summary:
      "Ubica comunidades Katío en Chocó, el noroccidente antioqueño y las cuencas altas del Sinú y San Jorge.",
    limitation:
      "Aporta contexto territorial contemporáneo, no una transcripción de los mitos del archivo de 1924.",
  }),
  minInteriorPlan: source({
    title:
      "Diagnóstico unificado de los pueblos Emberá Chamí, Katío, Dóbida y Eperara Siapidara",
    author: "Ministerio del Interior y organizaciones Emberá",
    type: "diagnóstico y plan de salvaguarda",
    url: "https://www.mininterior.gov.co/wp-content/uploads/2022/08/pueblos_embera_chami_katio_dobida_eperara_siapidara_-_diagnostico_unificado.pdf",
    summary:
      "Documenta diferenciación interna, territorios, memoria y riesgos contemporáneos desde espacios participativos Emberá.",
    limitation:
      "Su escala interregional no permite atribuir cada relato antiguo a una comunidad contemporánea específica.",
  }),
  cnmhDachi: source({
    title: "Dachi Chiuu: nuestra memoria",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "memoria comunitaria multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/",
    summary:
      "Presenta una memoria contemporánea construida con grupos del Alto Andágueda, con audio en emberá y español.",
    limitation:
      "Representa un proceso comunitario localizado y no sustituye versiones de otras comunidades Katío.",
  }),
  cnmhCaragabi: source({
    title: "Karagabí",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "relato comunitario multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/caragabi/",
    summary:
      "Conserva una versión contemporánea del Alto Andágueda sobre Karagabí y el orden del mundo.",
    limitation:
      "Es una versión local contemporánea; no debe fusionarse en silencio con la síntesis de Urabá de 1924.",
  }),
  cnmhCobaima: source({
    title: "Cobaima",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "relato comunitario multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/cobaima/",
    summary:
      "Narra desde el Alto Andágueda la labor de Cobaima, primer jaibaná, en el ordenamiento de seres y lugares del territorio.",
    limitation:
      "La página editorial no debe convertir su resumen en una voz ancestral homogénea para todo el pueblo Katío.",
  }),
  cnmhAmor: source({
    title: "El amor prohibido de Humántahu y Gedeco",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "relato comunitario multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/amor-prohibido/",
    summary:
      "Relata una versión contemporánea del origen del sol y la luna desde voces del Alto Andágueda.",
    limitation:
      "Su procedencia localizada debe mantenerse y no mezclarse con otros ciclos solares Emberá.",
  }),
  cardonaHunter: source({
    title: "El hombre que no podía cazar",
    author: "Antonio María Cardona; narración de Zaquidiama Domicó",
    year: 1990,
    type: "relato con narrador y territorio identificados",
    url: "https://www.luguiva.net/admin/pdfs/Guia%20Embera-Waunaan.pdf",
    summary:
      "La guía bibliográfica acredita el relato a Zaquidiama Domicó, principal de Río Verde, y lo resume como una enseñanza sobre el respeto debido a los animales del monte.",
    limitation:
      "El enlace público consultado es la referencia bibliográfica y su resumen, no el facsímil completo de las páginas 165 a 168.",
  }),
  chaves1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milcíades Chaves Ch.",
    year: 1945,
    type: "recolección etnográfica con narradores identificados",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    summary:
      "Distingue relatos de Nicolás Henao, Chamí, y Rafael Bailarín, Katío; permite corregir la frontera de Surranabe.",
    limitation:
      "El título general puede inducir a mezclar ambos corpus si no se atiende a la atribución individual.",
  }),
  ferrari2023: source({
    title:
      "Jinu Potó, ¿mito o historia? Desplazamientos del saber y cuestionamientos epistémicos",
    author: "Simone Ferrari",
    year: 2023,
    type: "estudio contemporáneo de variantes Emberá",
    url: "https://dialnet.unirioja.es/descarga/articulo/9145820.pdf",
    summary:
      "Compara versiones regionales del ciclo del nacido de la pierna y muestra cambios en nacimiento, adversarios, viajes y desenlaces.",
    limitation:
      "La comparación no autoriza a fundir las versiones Katío, Chamí y Dóbida en una sola narración.",
  }),
  trimborn1953: source({
    title: "Dobaida o Dobaiba: diosa de las tormentas",
    author: "Hermann Trimborn",
    year: 1953,
    type: "estudio histórico de fuentes coloniales",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/6481",
    summary:
      "Examina la Dobaida de las fuentes sobre los Cueva del bajo Atrato y su relación con territorios y búsquedas coloniales.",
    limitation:
      "Trabaja testimonios coloniales externos y no prueba que Dobaida sea la misma figura que Dabeiba Katío.",
  }),

  // ——— Búsqueda profunda 2026-09-18 ———
  uribeJaibanas1985: source({
    title: "Jaibanás. Los verdaderos hombres",
    author: "Luis Guillermo Vasco Uribe",
    year: 1985,
    type: "libro",
    url: "http://www.luguiva.net/libros/detalle.aspx?id=7",
    summary:
      "Analiza el ciclo completo de enfrentamientos entre Tutruicá y Carabí/Karagabí (pruebas del lazo, del fuego, del hijo, del agua y de la canoa) y reconstruye la creación del hombre exactamente como la cuenta la ficha: Carabí hace muñecos de piedra que se mueven pero no hablan, Tutruicá los hace de barro y hablan, Carabí debe humillarse a pedir un pedacito de barro y sopla a través de una costilla para quitarle al hombre la pesadez de la tierra. Vasco concluye que los emberá son 'producto de la unidad entre Tutruicá y Carabí' y que en el ciclo de pruebas ambos salen airosos —cita a Santa Teresa 1924:135, 'quedaron los dos convencidos de la igualdad de sus poderes'—, lo que desarma la lectura cristiana de Tutruicá como adversario diabólico. La página del libro trae el PDF completo descargable.",
    limitation:
      "El trabajo de campo de Vasco es sobre todo chamí (Risaralda) y del Chocó, con referencias katías del Andágueda; la reconstrucción del ciclo Tutruicá–Carabí la hace a partir de Pinto (1978), María de Betania (1964) y Santa Teresa (1924), no de una narración katía recogida por él. Su lectura es estructuralista y marxista declarada: interpreta el mito, no sólo lo transcribe. El PDF está en el sitio personal del autor, no en un repositorio institucional.",
  }),
  cardonaMitologia2013: source({
    title: "Mitología Embera. Principales mitos, características y funciones",
    author: "Antonio María Cardona y Jairo Miguel Guerra Gutiérrez",
    year: 2013,
    type: "artículo de revista",
    url: "https://bioetnia.iiap.org.co/index.php/bioetnia/article/view/130",
    summary:
      "Da una cosmogonía emberá completa en la que Ankoré genera a Karagabí, Tutruika y Pakoré wera; Tutruika crea 'el mundo de los inmortales, los sin culo, llamado Armukurá' —el mismo Armucurá de esta ficha— y la humanidad se hace por ensayos sucesivos: un muñeco de palo de oquendo que falla y deja al hombre incompleto y mortal, y luego barro mezclado con agua. Aporta además dos cosas que la ficha necesita: una nota al pie que dice que 'en la mitología del Sinú, Tutruika no es hermano de Karagabi, Tutruika es un dios que se hace solo y disputa con él... Nadie vence a nadie y hacen pacto de no agresión e intercambian sabidurías' —que es la estructura katía—, y el testimonio de que en las comunidades del Pacífico chocoano Karagabí y Tutruika 'tienen poco peso' y que 'algunos llegan a afirmar que Karagabí es un dios de los katíos'.",
    limitation:
      "El trabajo de campo es de 2012 en Jawa (río Chorí), Tandó, Nuquí arriba y Yucal (río Panguí), golfo de Tribugá, costa pacífica chocoana: emberá de río y de costa, no katíos de Urabá ni del Andágueda. Los propios autores advierten que ahí los 'duros' son Ankoré y Pakoré wera, de modo que su versión central no es la katía y sólo la referencia al Sinú y la nota sobre Karagabí 'dios de los katíos' pueden usarse como paralelo directo. Es además prosa de divulgación antropológica: mezcla relato, interpretación y opinión del autor sin separar las voces.",
  }),
  rosiqueGraciaTodos2020: source({
    title: "«Todos en el mismo pensamiento»: las relaciones del pueblo embera con los sitios sagrados de los resguardos de Polines y Yaberaradó en Chigorodó (Antioquia)",
    author: "Javier Rosique-Gracia, Aída Gálvez-Abadía, Sandra Turbay, Nataly Domicó, Arnulfo Domicó, Plinio Chavarí, Justico Domicó, Fernando A. Alzate, José Fernando Navarro y Sneider Rojas-Mora",
    year: 2020,
    type: "artículo de revista",
    url: "https://www.revistatabularasa.org/numero36/todos-en-el-mismo-pensamiento-las-relaciones-del-pueblo-embera-con-los-sitios-sagrados-de-los-resguardos-de-polines-y-yaberarado-en-chigorodo-antioquia/",
    summary:
      "Trabajo de campo con emberá eyábida (katío) de Chigorodó, en el Urabá antioqueño —la misma región de los 'Catíos de Urabá' del libro de 1924— hecho con jaibanás y sabias de la comunidad como coautores. Dice qué queda hoy del desenlace de la creación: 'luego de la intensa actividad cumplida en la generación de su pueblo y en la ordenación del paisaje a partir de la caída en tierra del árbol jenené, Karagabí se fue al mundo de arriba y se alejó definitivamente de los humanos. Trutruicá, el segundo personaje, se fue al inframundo', a quien se atribuye el origen del saber jaibanístico y de serpientes, murciélagos, tatabros, chontaduro, maíz y plátano. Explica también qué se espera de los seres de cada nivel, y recuerda que a estos dioses 'no se les debe reverencia ni se les pide favores' (deus otiosus).",
    limitation:
      "No transcribe el relato de la creación del hombre: lo da por sabido y parte de sus consecuencias. La comunidad de Dojura, incluida en el mismo estudio, es emberá chamí, así que no todo el material del artículo es katío y hay que mirar de qué resguardo sale cada dato. El foco real es la relación con los sitios sagrados y con Pãkõré/Imamá, no la cosmogonía; Karagabí y Trutruicá aparecen como marco, en dos páginas.",
  }),
  campoperdida2024: source({
    title: "La pérdida de la riqueza: un mito embera sobre el origen de las razas y la desigualdad social",
    author: "Andrés Ricardo Restrepo Campo y Sandra Turbay",
    year: 2024,
    type: "artículo de revista",
    url: "https://revistas.uniandes.edu.co/index.php/antipoda/article/view/8777",
    summary:
      "Recoge y analiza un mito vivo de Karagabí narrado hoy en la comunidad de Jaikerazabi (Mutatá, Antioquia), emberá eyábida desplazados en 1997. Karagabí reparte pruebas y bienes entre los pueblos —alfabetización, corrales de ganado, un río en el que hay que sumergirse— y del reparto salen blancos ricos, paisas intermedios, indígenas pobres y afrodescendientes al final. Sirve a esta ficha para mostrar que la creación de la gente por Karagabí no terminó en 1924: sigue produciendo relatos nuevos sobre por qué unas gentes salieron de un modo y otras de otro, y que la narración explica hoy jerarquías sociales, no sólo el origen del cuerpo humano.",
    limitation:
      "No es el relato de Caragabí y Tutruicá: es un mito distinto, sobre el origen de las razas y de la desigualdad, que sólo comparte el personaje creador. Los propios autores subrayan que el relato atribuye la pobreza indígena a negligencia propia, de modo que es material delicado y no puede citarse como si fuera una continuación natural de la cosmogonía. La comunidad es eyábida de Mutatá, no del Alto Sinú ni del Andágueda.",
  }),
  ferrariJinu2023: source({
    title: "Jinu Potó, ¿mito o historia? Desplazamientos del saber y cuestionamientos epistémicos en la narración oral del pueblo Embera Dóbida",
    author: "Simone Ferrari",
    year: 2023,
    type: "artículo de revista",
    url: "https://editorial.ucatolica.edu.co/index.php/RevClat/article/view/5439",
    summary:
      "Transcribe íntegras dos narraciones orales grabadas en 2022. La de Graciliano (comunidad de Yucal) abre con una creación distinta y comparable: 'Ankore cuando creó al embera creó solamente a un hombre y un perro. Entonces el embera se sentía muy solito... Entonces creó a una mujer', y ensaya primero una gestación sin relación sexual que la gente estropea. El mismo narrador describe los mundos de abajo escalonados, con 'los que no comían, que solamente olían la comida', que es el pueblo inmortal y sin ano del mundo de Tutruicá. Útil para ver el mismo esquema —el creador que ensaya, falla y corrige— narrado hoy y por una persona con nombre.",
    limitation:
      "Es emberá dóbida del Chocó (Yucal y Boca de Jagua), no katío: el creador es Ankore, no Karagabí, y ni Karagabí ni Tutruicá aparecen por su nombre en estas dos versiones. El artículo además está construido para analizar la enunciación y el desplazamiento forzado, no para fijar contenidos míticos; el propio autor advierte que la variación entre los dos narradores es el objeto de estudio.",
  }),
  rojasescalera1986: source({
    title: "La escalera de cristal: términos y conceptos cosmológicos de los indígenas Emberá",
    author: "Mauricio Pardo Rojas",
    year: 1986,
    type: "artículo de revista",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/21-46",
    summary:
      "Reconstruye la arquitectura del cosmos que esta ficha presupone y la atribuye con precisión: según Severino de Santa Teresa, 'Dios, /dayhizeze/ sacó el mundo del pensamiento y creó a Karagabí a su vez creador de los hombres. Habría cuatro mundos sobre este y cuatro debajo, pero advierte Severino que los indígenas sólo saben dar razón de tres de ellos'; debajo está '/armukurá/ dominado por Tutruiká, ser que se creó a sí mismo y competidor de Karagabí'. Es el dato que permite decir de dónde sale la cuenta de ocho o nueve mundos y por qué no coincide con lo que la gente sostiene. Pardo identifica además /atau aramora/, el mundo de la gente sin ano del alto Baudó, con el /armacurá/ de Severino, siguiendo a Pinto.",
    limitation:
      "El grueso del trabajo de campo de Pardo es del alto Baudó y de Guanguí (Cauca); lo katío de Urabá entra por vía de Santa Teresa, a quien cita por la edición de 1959, no por la de 1924. Es un informe de etnoastronomía: la cosmogonía aparece como marco para situar niveles del cosmos, y el propio autor advierte que 'una interpretación juiciosa de todos estos problemas requeriría un estudio detenido de la mitología emberá'.",
  }),
  uribeResena1986: source({
    title: "Reseña de Floresmiro Dogiramá, «Zroara Nebura. Historia de los antiguos»",
    author: "Luis Guillermo Vasco Uribe",
    year: 1986,
    type: "reseña",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7263",
    summary:
      "Da noticia de un corpus emberá donde el trueno tiene capítulo propio: 'el compilador ha agrupado las veintiséis narraciones en varios capítulos de historias: del principio, de Ba (el trueno), de cuñados, de Jaibanás, de guerra, de cimarrones, de animales'. Menciona además 'la historia del trueno jaibaná', y discute precisamente que clasificarla como historia de jaibanás y no de trueno sea una decisión del compilador, no del narrador. Sirve para acreditar que Ba es un ciclo narrativo con nombre propio en la tradición oral emberá, y para nombrar al narrador principal, Floresmiro Dogiramá, cacique del río Baudó.",
    limitation:
      "Es una reseña de dos páginas, no el corpus: no reproduce ninguna historia de Ba y hay que ir al libro de 1984 para leerlas. El material recopilado por Pardo es del alto Baudó, emberá de río, no katío. Y la reseña es beligerante: Vasco discute la clasificación de Pardo y el propio tratamiento de los mitos como 'literatura', de modo que lo que dice sobre el índice viene dentro de una polémica.",
  }),
  reichelDolmatoffAlgunos1953: source({
    title: "Algunos mitos de los indios Chamí (Colombia)",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1953,
    type: "fuente primaria",
    url: "https://redaprende.colombiaaprende.edu.co/recursos/colecciones/34UDQKC25D1/T5RZEZ6LF62/1226",
    summary:
      "Conserva el episodio de la escalera en una transcripción hecha sin retocar las palabras del narrador: 'se puso a cortar guadua en el monte. Se fue amarrando las guaduas y se fue para arriba como en una escalera. Cuando llegó al camino de la luna, se quedó allá esperándola. Pero entonces vino el pájaro carpintero y casi le trozó la escalera. El hombre se cayó'. Y la caída desemboca en el mundo de abajo: 'cayó en otro mundo, bajo la tierra. Allí hubo indios muy bajitos que solo comían humo de su comida... No podemos comer sino humo, porque nosotros no tenemos ano'. Es la prueba de que el descenso a Armucurá, el mundo de los inmortales sin ano, está encadenado a la escalera rota y no es una escena aparte.",
    limitation:
      "Es chamí: recogido en 1945 entre unas sesenta personas de la vereda de Corozal, municipio de Río Frío (Valle), migrantes recientes del San Juan, Antioquia y Caldas, y 'relativamente aculturados' según el propio autor, que además declara que no tuvo tiempo de entender el contexto cultural de lo que transcribía. Tampoco es la escalera de Caragabí: es la de Jinú Potó, hecha de guadua y cortada por el pájaro carpintero. Las notas al pie son hipótesis del recopilador en 1953 y no palabras de quien narró.",
  }),
  angelGeografia1885: source({
    title: "Geografía general y compendio histórico del Estado de Antioquia en Colombia (capítulo II, sección \"Mitología\")",
    author: "Manuel Uribe Ángel",
    year: 1885,
    type: "libro (fuente decimonónica, texto completo digitalizado)",
    url: "https://repositorio.unal.edu.co/handle/unal/9806",
    summary:
      "Es la fuente real del relato que la ficha publica. En la sección \"Mitología\" del capítulo II Uribe Ángel escribe que \"los indios catíos decían que sus antecesores habían tenido la fortuna de vivir con una mujer providencial... que esta mujer se llamaba Dabeiba; que era joven, bellísima y llena de sabiduría; que este genio benéfico les había enseñado a labrar los terrenos, a construir habitaciones y pueblos, a fabricar tejidos, a mantener económicamente el hogar; y que cuando la obra de la civilización estuvo ya iniciada... había subido a lo más empinado del Cerro León... se había elevado airosamente al cielo y desaparecido\", y que desde allí \"presidía al cumplimiento de los grandes fenómenos naturales como la lluvia, el granizo, el trueno, el rayo, los huracanes, las borrascas y los terremotos\". Frase por frase, y con el mismo Cerro León, es el texto de la página. El libro también lista, cuarenta años antes de la misión carmelita, los parajes donde vivían esos indígenas: Caramanta, Murrí, Chontaduro, Juntas, Musinga, Uramá-grande, Urarruita, Pital, Ríoverde y Monos, en Urrao, Frontino y Cañasgordas.",
    limitation:
      "No es una transcripción: Uribe Ángel resume en tercera persona lo que \"decían\" los catíos, sin narrador, sin fecha y sin lengua, y cierra el párrafo llamándolos \"incultos pueblos\" que \"mecían un poco su imaginación en los senos fantásticos de la fábula\". Es prosa de geógrafo antioqueño ilustrado, no registro etnográfico. Además desmiente la atribución que la ficha hace hoy: la obra de fray Severino de Santa Teresa NO contiene este relato (ver la fuente siguiente), y el nombre citado en la página, \"Ángel Manuel Uribe\", es una inversión de Manuel Uribe Ángel. El repositorio sirve la obra en cinco PDF; el pasaje está en el cuarto archivo de la lista de bitstreams del registro.",
  }),
  paezhevexicos2004: source({
    title: "De los hevexicos a los catíos en la provincia de Antioquia",
    author: "Sofía Botero Páez",
    year: 2004,
    type: "artículo de investigación (Boletín de Antropología, Universidad de Antioquia, vol. 18, n.º 35, pp. 15-50)",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/6954",
    summary:
      "Es la pieza que permite separar a la Dabeiba del relato de la Dabeiba de los cronistas. Botero sostiene que \"existe una inconsistencia histórica, un error si se quiere, al definir o asimilar la sociedad embera con los catíos\", y propone que los catíos de las crónicas son descendientes de la nación hevexico, distinta de la embera, y que la palabra \"catío\" podría ser la hispanización de carauta, nombre con el que los embera designan \"una nación sobresaliente por ser la dueña del oro... la misma que estuvo asentada en Buriticá y Dabeiba, sitios legendarios desde la conquista por su riqueza aurífera\". Es decir: Dabeiba entra en la literatura colonial como topónimo de un lugar rico en oro y como nación ajena a los emberá, no como diosa. Botero corrige además expresamente a Uribe Ángel sobre la ubicación del jefe catío Toné.",
    limitation:
      "Es una hipótesis explícitamente presentada como tal, discutida dentro de la etnohistoria antioqueña y no resuelta; no cita ni analiza el relato de la mujer que enseña oficios. El OJS fecha el depósito en 2010, pero el propio artículo se cita como 2004 (vol. 18 n.º 35).",
  }),
  eComplejos1988: source({
    title: "Complejos arqueológicos y grupos étnicos del siglo XVI en el occidente de Antioquia",
    author: "Neyla Castillo E.",
    year: 1988,
    type: "artículo (Boletín Museo del Oro, n.º 20)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7165",
    summary:
      "Documenta qué había en el suelo de Dabeiba antes de que el nombre se volviera relato. Castillo rastrea un complejo cerámico \"Incisa con borde doblado\" desde la ciénaga de Tumaradó por la cuenca del río Sucio hasta Chigorodó, Mutatá, Dabeiba, Uramita, Cañasgordas y Giraldo, y describe una tradición funeraria distinta, de entierros en túmulos, presente en el curso superior del río Sucio en Dabeiba y hacia el occidente en Frontino y Urrao. Y da el dato clave para la lectura colonial del nombre: entre los grupos mencionados por los cronistas sobre el Atrato figuran \"Abraime, Abanumaque, Abibaibe y Dabaibe\", es decir, Dabaibe aparece como parcialidad y territorio, junto a otros, no como divinidad.",
    limitation:
      "Es arqueología y etnohistoria del siglo XVI: no habla de emberá katío contemporáneos ni de ningún relato oral, y advierte ella misma que las correspondencias entre complejos materiales y etnias de las crónicas son \"datos contradictorios que dificultan el establecimiento de correspondencias étnicas confiables\".",
  }),
  duartecaso2022: source({
    title: "El caso del niño de Dabeiba, una aproximación a las prácticas funerarias del noroccidente de Suramérica en tiempos prehispánicos desde la perspectiva tafonómica",
    author: "Bibiana Andrea Cadena Duarte y Eliana Pulgarín Montoya",
    year: 2022,
    type: "artículo (Boletín de Arqueología PUCP, n.º 31, pp. 103-115)",
    url: "https://revistas.pucp.edu.pe/index.php/boletindearqueologia/article/view/26371",
    summary:
      "Excavación reciente de un túmulo funerario en el municipio de Dabeiba, cordillera Occidental, con los restos de un infante. Sirve para lo que la ficha necesita: anclar \"Dabeiba\" en un lugar concreto y fechado, con prácticas mortuorias verificables y con evidencia del saqueo posterior de la tumba, en vez de dejarlo flotando entre el mito y la leyenda del tesoro. Muestra también que el saqueo de tumbas en Dabeiba —el motivo que alimentó la fama aurífera del topónimo— dejó huella material.",
    limitation:
      "No dice absolutamente nada sobre el relato de Dabeiba, sobre los emberá katío ni sobre continuidad cultural: es un estudio tafonómico y osteológico. Sólo aporta el lugar, no la figura.",
  }),
  rojasRegionalizacion1987: source({
    title: "Regionalización de indígenas Chocó: datos etnohistóricos, lingüísticos y asentamientos actuales",
    author: "Mauricio Pardo Rojas",
    year: 1987,
    type: "artículo (Boletín Museo del Oro, n.º 18)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7215",
    summary:
      "Ubica \"la zona de Dabeiba\" como una subárea dialectal emberá concreta —área 2, noroccidente antioqueño y Córdoba, junto al valle del alto Murrí y los altos Sinú y San Jorge—, distinta del área del alto Atrato y del alto San Juan, donde queda el Chamí y también el alto Andágueda. Y sostiene la afirmación más incómoda para toda la ficha: esos emberá del noroccidente antioqueño \"han sido incorrectamente nombrados como Emberá-Catío sin que hasta ahora haya ninguna prueba de su relación o ascendencia con los extintos Catío\". Es decir, el rótulo bajo el que circula el relato de Dabeiba es, para Pardo, un error de clasificación.",
    limitation:
      "Es de 1987 y trabaja con el estado de la dialectología y la etnohistoria de entonces; no se ocupa de relatos ni de la figura de Dabeiba. La tesis sobre el rótulo \"Emberá-Catío\" es de Pardo y no es consenso: las propias organizaciones emberá de Antioquia usan hoy \"Eyábida (katío)\" como autodenominación.",
  }),
  upeguiEstrategias2015: source({
    title: "Estrategias de evangelización y catequización de las misioneras Lauritas en el Occidente Antioqueño (1914-1925)",
    author: "Laura Montoya Upegui",
    year: 2015,
    type: "artículo (Revista de Estudios Sociales, Universidad de los Andes, n.º 51, pp. 118-131)",
    url: "https://revistas.uniandes.edu.co/index.php/res/article/view/5876",
    summary:
      "Documenta exactamente la mediación que la ficha señala pero no puede sustentar: quiénes eran las religiosas del occidente antioqueño y cómo traducían. Muestra que las Lauritas identificaron al jaibaná —\"el doctor y brujo que comunicándose con Antomiá, dios del río, marcaba los cambios y las relaciones mágicas de los Catíos\"— como \"el personaje que se comunicaba con el diablo\" y como el principal enemigo de la misión, y que hubo esfuerzos deliberados por hacerlos renunciar a esa relación. Es decir: Antomiá era dios del río antes de ser diablo, y la traducción a \"diablo\" fue una operación misionera fechable. Documenta también el sincretismo inverso: las misioneras pasaron a ocupar en las comunidades un lugar de poder mágico análogo al del jaibaná.",
    limitation:
      "Trabaja con las fuentes publicadas por la propia congregación (crónicas de la Madre Laura, Del Dulce 1964), de modo que la voz indígena llega otra vez filtrada. No trata el Plateado, ni Musinga, ni el relato del cerro; sirve para leer la capa cristiana, no para reconstruir la capa previa.",
  }),
  montoyaUpeguiHermanas2026: source({
    title: "Hermanas cabras: las misioneras lauritas en el occidente antioqueño (1914-1925)",
    author: "Laura Montoya-Upegui",
    year: 2026,
    type: "artículo (Historia y Sociedad, Universidad Nacional de Colombia sede Medellín, n.º 50, pp. 151-176)",
    url: "https://revistas.unal.edu.co/index.php/hisysoc/article/view/119803",
    summary:
      "Versión ampliada y más reciente del trabajo anterior, ahora con el fondo de religiosas de la Diócesis de Antioquia. Reconstruye cómo las Lauritas adaptaron la misión a los asentamientos dispersos catíos del occidente antioqueño —Dabeiba entre ellos— sin necesitar edificios, y cómo las mujeres asumieron la evangelización y no sólo la catequesis. Importa aquí porque el aparato que produjo los apuntes de 1929 fue precisamente este: religiosas que vivían en los bohíos, aprendían la lengua a medias y anotaban lo que oían. Permite fechar y situar a los intermediarios del relato del cerro en vez de nombrarlos en abstracto.",
    limitation:
      "Es historia de la congregación, no de los emberá: no discute mitos, ni Antomiá, ni el Plateado, y la voz indígena aparece sólo a través del archivo misionero. Publicado en el número de enero-junio de 2026.",
  }),
  oIADiagnostico2012: source({
    title: "Diagnóstico y Plan de Salvaguarda Embera, capítulo Antioquia",
    author: "Organización Indígena de Antioquia (OIA) y Ministerio del Interior, convenio 147 de 2011",
    year: 2012,
    type: "documento oficial construido con las autoridades emberá (254 pp.)",
    url: "https://antioquia.gov.co/images/PDF2/gerencia-indigena/Documentos_juridicos/Plan%20de%20Salvaguarda%20Embera%20capitulo%20Antioquia.pdf",
    summary:
      "Da la lista, en voz de las autoridades emberá, de los cerros sagrados del occidente antioqueño: \"Jai Katuma (Cerro Careperro) en Murindó, Carmen del Darién, Frontino, Dabeiba, Mutatá, Vigía del Fuerte y Urrao, el Katuma Chagerado..., el Katuma Paimadó y Pegadocito límite entre Frontino y Dabeiba, el Katuma Soso só..., Katuma Eburá (Cerro Amor) y Katuma Sobia entre Dabeiba y Frontino, Katuma Chever en Dabeiba, Katuma Tasidó..., Katuma de Dabeiba Viejo..., Katuma Yaberaradó (Serranía de Abibe)...\". El cerro no es una curiosidad de un relato antiguo: es una categoría territorial vigente, katuma, y hoy está amenazada por títulos mineros (Mandé Norte, Pantanos-Pegadocito) y por el uso militar de las cimas. Fija además la nomenclatura propia: \"el Pueblo Embera de Antioquia... se divide en: Embera Eyabida (katío), Embera Chamí y Embera Dóbida\".",
    limitation:
      "Es un diagnóstico político-jurídico, no un corpus narrativo: no recoge el relato del Plateado ni nombra a Musinga, y no ofrece versiones de mitos. La fecha exacta de publicación no consta en portada; el convenio que lo origina es de 2011 y el texto cita hechos hasta 2012.",
  }),
  vargasemberas1991: source({
    title: "Los emberas y los cunas en frontera con el imperio español. Una propuesta para el trabajo complementario de la historia oral y de la historia documental",
    author: "Patricia Vargas",
    year: 1991,
    type: "artículo (Boletín Museo del Oro, n.º 29)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7040",
    summary:
      "Hace justo lo que esta ficha pide: leer la memoria oral y el archivo español como dos narrativas sobre los mismos hechos, sin subordinar una a la otra. Su tesis de partida es que \"las historias que tradicionalmente se han conocido como mitos, refieren según convenciones culturales acontecimientos y procesos históricos\". Aporta el dato decisivo: \"Los que son conocidos en las crónicas como Catíos, en la tradición oral Embera se identifican como los Carautas, los dueños del oro\". Documenta con testimonios de encomienda el rapto de mujeres en las guerras con los catíos (el caso de Pedro Criollo, cuya madre fue cautivada en la provincia de los heras), la captura y encomienda de carautas en Santa Fe de Antioquia a comienzos del XVII, y el uso de Cieza de León, Oviedo y la carta de Juan de Vadillo de 1537.",
    limitation:
      "La historia oral que usa es del Atrato y el Baudó, no de las notas de 1929 del occidente antioqueño; no comenta los dos fragmentos que la ficha publica. El PDF es una digitalización con OCR defectuoso en las notas al margen.",
  }),
  hernandezEstrategias2015: source({
    title: "Estrategias de negociación y resistencia indígena a la colonización del occidente de Antioquia, 1880-1920",
    author: "Elizabeth Karina Salgado Hernández",
    year: 2015,
    type: "artículo (Historia y Sociedad, Universidad Nacional de Colombia sede Medellín, n.º 29, pp. 171-201)",
    url: "https://revistas.unal.edu.co/index.php/hisysoc/article/view/50594",
    summary:
      "Muestra la conquista que sí quedó documentada, y que no es la del relato. Entre 1880 y 1920 la colonización del occidente antioqueño chocó con el resguardo de San Carlos de Cañasgordas —en cuyo territorio histórico se crearon Cañasgordas, Dabeiba, Frontino, Urrao, Abriaquí, Caicedo y Murindó— y los indígenas respondieron con memoriales, pleitos y quejas a las autoridades. Salgado transcribe, por ejemplo, la comunicación del 11 de junio de 1894 en que la Prefectura de Occidente conmina con multa al alcalde de Dabeiba \"para que proteja... a los indígenas Carmelo Majoré y Nepomuceno Domicó de los ataques a la propiedad de estos, efectuados por los colonos Nemesio David, Ignacio Sepúlveda, Ángel María Echavarría y otros\". La despojo tiene nombres, fechas y folios; la conquista del relato no.",
    limitation:
      "Es historia republicana, no del siglo XVI: no sirve para verificar reyes, casas de oro ni a Ambeu, y sólo debe usarse para contrastar, no para completar el relato. Cubre el occidente antioqueño, no Urabá ni el Darién.",
  }),
  restrepoSon2012: source({
    title: "¿Son los embera katío del Alto Sinú étnicamente correctos?",
    author: "Ana Carolina Castañeda Vargas (director: Eduardo Restrepo)",
    year: 2012,
    type: "tesis de Maestría en Estudios Culturales, Pontificia Universidad Javeriana",
    url: "https://ram-wan.net/tesis/44-casta%C3%B1eda.pdf",
    summary:
      "Enseña cómo funciona hoy una memoria de invasión entre emberá katío, y por tanto cómo leer la de 1929. Castañeda reconstruye la lucha de los Cabildos Mayores del río Sinú y río Verde contra Urrá y muestra que el mito del origen del agua —donde Karagabí y todos los emberá deben derribar el árbol de jenené para liberar el agua acaparada— se volvió el marco explícito de la movilización: \"los embera del presente debían combatir a Urrá como los embera sin tiempo... combatieron a quién acaparaba el agua\". El relato de conquista no es archivo congelado: es material que se reactiva, se reinterpreta y a veces se transforma en actas, tomas y sentencias.",
    limitation:
      "Es Alto Sinú, no occidente antioqueño, y su objeto es la etnicidad y la política del reconocimiento, no la conquista española: no aporta ningún dato sobre Ambeu ni sobre las casas de oro. El PDF está alojado en el sitio académico ram-wan.net (Eduardo Restrepo), no en el repositorio institucional de la Javeriana.",
  }),
  turbayNotas2021: source({
    title: "Notas sobre los nombres personales embera",
    author: "Sandra Turbay y José Joaquín Domicó",
    year: 2021,
    type: "artículo de investigación coautorado con un investigador emberá (Chungará, Universidad de Tarapacá, 53(1), pp. 131-157)",
    url: "https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0717-73562021000100131",
    summary:
      "Es la fuente que corrige el supuesto central de la ficha. Turbay y Domicó establecen que \"el repertorio de apellidos embera es distinto al de los nombres personales y es muy limitado. Los más frecuentes en los censos son Domicó, Sinigüí, Bailarín, Carupia, Majoré, Cuñapa, Zapia y Guaseruca\" —justo los nombres que el relato pone en boca de Caragabí— y que no funcionan como marcas de clan ni de linaje, sino como indicador de etnicidad: \"a diferencia de otros grupos indígenas colombianos, los embera no adoptaron apellidos españoles\". Añaden la advertencia exacta que el encargo pide: fuera de la comunidad esos apellidos no sirven para rastrear parentesco porque \"son demasiado comunes y muchas personas que no tienen ningún parentesco conocido llevan el mismo apellido\". Lo que carga sentido cosmológico y protector, muestran, es el nombre personal, no el apellido.",
    limitation:
      "El artículo trata sobre todo los nombres personales; a los apellidos les dedica poco espacio y no reconstruye su historia ni discute el papel del bautismo misionero en su fijación. El trabajo de campo es con emberá eyábida de Antioquia y no cubre a todos los emberá.",
  }),
  medinaResena1997: source({
    title: "Reseña de «Chajeradó, el río de la caña flecha partida», de Luz Marcela Duque, Iván Darío Espinosa, Aída Cecilia Gálvez, Diego Herrera y Sandra María Turbay",
    author: "Ana María Medina",
    year: 1997,
    type: "reseña (Boletín Museo del Oro, n.º 42)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6917",
    summary:
      "Sitúa en el presente el territorio que el relato recorre. Reseña un estudio del Instituto Colombiano de Cultura sobre la comunidad indígena emberá katía del río Chajeradó, municipio de Murindó, Antioquia —afluente del Atrato, exactamente la geografía por donde Séver y sus hijos navegan—, con datos de composición étnica y demográfica, organización familiar, social y política, salud y manejo del ambiente, y con una evaluación a posteriori del impacto de la explotación maderera de 1987-1991. Permite decir quiénes viven hoy en ese río y qué les ha pasado, en vez de dejar el Atrato como escenario mítico.",
    limitation:
      "Es una reseña breve: no reproduce los datos ni ninguna narración, y el libro reseñado es un diagnóstico de impacto ambiental, no una recopilación de relatos. No menciona a Séver ni la guerra con los cunas.",
  }),
  bogotaPor2020: source({
    title: "¡Por la cultura emberá! Cartilla para la educación inicial indígena (contiene «Chi Jaibana Aribada Ome / El jaibaná y el mohán»)",
    author: "Secretaría de Educación del Distrito de Bogotá, Dirección de Educación Preescolar y Básica; relato narrado por Germán Tamaniza",
    year: 2020,
    type: "cartilla educativa institucional con relato bilingüe",
    url: "https://www.redacademica.edu.co/sites/default/files/2021-11/Cartilla%20Embera%20RA.pdf",
    summary:
      "Reproduce completo, en emberá y en castellano, un relato de aribada narrado por una autoridad tradicional identificada: dos cuñadas van por plátano y ven al aribada dormido bajo una casa sobre hojas secas; una lo nombra en voz alta, la otra la regaña porque «nunca debes pronunciar ese nombre»; el aribada grita detrás de ellas, la que lo nombró cae desmayada «porque el espíritu del aribada se estaba apoderando de ella» y muere degollada; después los hijos del jaibaná mayor salen con lanzas y flechas y lo matan, y el viudo acusa al jaibaná anciano de haber puesto el mal. El texto emberá usa «aribamia» y «aribada» en la misma narración. Aporta dos cosas que no están ni en Santa Teresa ni en Rochereau: la prohibición de decir el nombre, y un episodio con narrador acreditado.",
    limitation:
      "El narrador es emberá chamí del resguardo Dai Drua (Institución Etnoeducativa Rural Santa Rosa del Guamuez, sede Argelia, Putumayo), no katío: no puede usarse para describir «el» Aribamia katío. Es material didáctico de la Secretaría de Educación del Distrito, editado para preescolar, y traduce aribada como «mohán», término mestizo que la propia versión castellana adopta. La escritura de la narración estuvo a cargo de tres docentes bilingües, no del narrador.",
  }),
  compCuentos1933: source({
    title: "Cuentos de los Indios Chocós recogidos por Erland Nordenskiöld durante su expedición al istmo de Panamá en 1927 y publicados con notas y observaciones comparativas de Henry Wassén",
    author: "Henry Wassén (comp.) y Erland Nordenskiöld (recopilador)",
    year: 1933,
    type: "artículo en revista científica (Journal de la Société des Américanistes, t. XXV, pp. 103-137)",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1933_num_25_1_1873",
    summary:
      "Es la fuente de la que Chaves toma la noción de Aripadá: monstruos de dos clases, unos de cuatro patas parecidos al caballo y otros de dos parecidos al hombre, y la noticia de que también los hombres pueden ser transformados en Aripadá. Permite ver que el ser que la ficha llama Aribamia circula con ese otro nombre entre los emberá del istmo, y que la variación de forma que la ficha atribuye a «las notas de 1929» ya está documentada aquí.",
    limitation:
      "NO PUDE LEER EL TEXTO COMPLETO. Persée sólo sirve en línea el prólogo del artículo, y la copia de Gallica está detrás de una verificación antibot que no franqueé. Todo lo que afirmo de su contenido procede de las citas literales que hacen Chaves 1945 (pp. 141-142, referencia «9-119») y Vasco 1985, no de lectura directa. Además los narradores son emberá del istmo de Panamá, no katíos de Colombia, y el texto pasó por Nordenskiöld, por Wassén y por el sueco antes de llegar al castellano.",
  }),
  uribeplata2001: source({
    title: "El oro y la plata entre los embera y waunaan",
    author: "Luis Guillermo Vasco Uribe",
    year: 2001,
    type: "artículo en revista científica (acceso abierto, Banco de la República)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/4861",
    summary:
      "Pone a los bibidí dentro de una serie que la ficha no ve: los burumiás, antecesores antropófagos de los emberá, vivían en cuatro árboles gigantescos guardados por un tigre y estaban «casados con mujeres antomiáes», que fueron quienes «les enseñaron a valerse de las manos para sacar oro de los filones, derribar árboles y cortar con ellas lo necesario» —de ahí las manos que cortan como cuchillos—; y los bibidí «solían capturar a los humanos y engordarlos para comérselos, hasta que uno de ellos escapó y trajo a sus compañeros para dar muerte al bibidí». Vasco enlaza el motivo de los «seres con brazos cortantes» con Costé, el dueño del oro de barberas y dientes de oro al que cincuenta indios matan dormido, es decir con otro relato del mismo corpus.",
    limitation:
      "Es un ensayo sobre metalurgia y tradición oral del oro, no una edición del relato: el resumen de los bibidí es de segunda mano y remite a Vasco 1985 y a Betania. El grueso del material etnográfico del artículo es chamí y waunaan, con datos inéditos del Alto Andágueda.",
  }),
  galvezbinomio1997: source({
    title: "El binomio maíz-plátano: alimentación y símbolos en la cultura emberá (Boletín de Antropología, vol. 11, n.º 27)",
    author: "Aída Gálvez",
    year: 1997,
    type: "artículo en revista científica (acceso abierto, Universidad de Antioquia)",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/338719",
    summary:
      "Es la única fuente académica hallada que nombra a Ancastor y lo lee como pieza de un sistema: «en la versión de un indígena del noroccidente antioqueño recogida por Chávez (1945, citado en Patiño, 1958), las semillas de maíz y chontaduro son traídas a la tierra por dos mujeres que visitaron bajía (el cielo, donde moran los muertos) conducidas por Ancastor, el ave blanca. A su regreso a la tierra una mujer trae escondida en la boca la semilla de maíz, y la otra la semilla de chontaduro». Gálvez sitúa además el episodio en la estructura de los tres estratos —utre, egoró, annukurá— y lo contrasta con la versión de Nordenskiöld en que el maíz viene del mundo de abajo, y con la de Jerú Potó, que trae el chontaduro desde abajo. Así aparece lo que la ficha no dice: que el maíz y el chontaduro llegan del cielo en una tradición y del subsuelo en otra, y que Ancastor es la variante «de arriba».",
    limitation:
      "Gálvez no consultó a Chaves directamente, sino a través de Víctor Manuel Patiño («El maíz chococito», América Indígena XVIII-3, 1958, pp. 192-193), que no pude verificar. Caracteriza al narrador sólo como «un indígena del noroccidente antioqueño», sin llegar a nombrar a Rafael Bailarín ni a decir que era katío. El artículo es sobre alimentación y símbolos, no una edición del relato.",
  }),
  ferrariJinu2024: source({
    title: "Jinu Potó, mito o storia? Migrazioni del sapere e inquietudini metanarrative nella letteratura orale embera, Illuminazioni 67, pp. 49-101",
    author: "Simone Ferrari",
    year: 2024,
    type: "artículo de revista académica (en italiano, acceso abierto)",
    url: "https://www.rivistailluminazioni.it/wp-content/uploads/2024/04/Simone%20Ferrari_JINU%20POTO,%20MITO%20O%20STORIA_MIGRAZIONI%20DEL%20SAPERE%20E%20INQUIETUDINI%20METANARRATIVE%20NELLA%20LETTERATURA%20ORALE%20EMBERA.pdf",
    summary:
      "Es el artículo hermano del de Cultura Latinoamericana que ya cita la ficha, pero no el mismo, y es el que hace explícita la geografía del ciclo: «Le avventure di Jinu Potó, Jeru Poto Oarra, Jinu-Poto-Wuarra o Jinopotabar –a seconda delle diverse trascrizioni e dell'area linguistico-culturale di riferimento– integrano le cosmogonie delle culture embera dóbida, embera catío ed embera chamí». En nota separa los subgrupos con precisión: dóbida es «gente del río» del occidente del Chocó; eyabida es «gente de la montaña» y se subdivide en catío (oriente del Chocó, Urabá antioqueño y Córdoba) y chamí (eje cafetero, suroeste antioqueño, Valle). Reúne además la lista de versiones publicadas del ciclo (Santa Teresa 1924, Rochereau 1933, Reichel-Dolmatoff 1953, Betania 1964, Pinto García 1974, Urbina Rangel 1978, Nengarabe y Vasco Uribe 1978, Vélez Vélez 1990, Domicó-Hoyos-Turbay 2002, Vasco Uribe 2002, Rocha Vivas 2010) y registra que el padre del héroe varía según la versión: Picario, el primer jaibaná, o una nutria, un murciélago, un espíritu o la luna. Eso convierte la nutria de la versión katía en una opción dentro de un abanico documentado, no en un dato aislado.",
    limitation:
      "El trabajo de campo del autor es enteramente emberá dóbida (Boca de Jagua y Yucal, Chocó): las dos versiones que transcribe y analiza en detalle son dóbidas, y lo katío entra sólo por bibliografía. Está en italiano, sin traducción al español (la versión española publicada en Cultura Latinoamericana es un texto distinto y más corto). Cita a Rochereau con fecha 1933 para el artículo que Persée fecha en 1929: conviene no repetir esa fecha sin comprobarla.",
  }),
  ceballosNotas2021: source({
    title: "Notas sobre los nombres personales embera, Chungará (Arica) 53(1), pp. 131-142",
    author: "Sandra Turbay Ceballos y José Joaquín Domicó",
    year: 2021,
    type: "artículo de revista científica indexada, coautoría con hablante embera",
    url: "https://www.scielo.cl/scielo.php?pid=S0717-73562021000100131&script=sci_arttext",
    summary:
      "Explica cómo funciona el nombre propio entre los embera eyábida (el subgrupo que incluye a los katío), que es justamente lo que el relato hace con Herupotoarra: el nombre no clasifica, describe una circunstancia. Documenta que la selección del nombre se hace observando «las características físicas o de comportamiento del niño para seleccionar un nombre que las refleje», o retomando el nombre de un difunto, y que los nombres incorporan lexemas que remiten a entidades naturales, seres espirituales y rasgos del entorno. Sirve para sostener, con base lingüística y no sólo mitográfica, por qué «nacido de la pierna» es un nombre y no un epíteto, y por qué el propio relato se detiene a explicarlo. El coautor Domicó pertenece al mismo apellido-linaje que la versión katía nombra como el de la madre.",
    limitation:
      "No menciona ni a Jinopotabar ni a Jerupotowarra ni analiza nombres formados con -potó-: el apoyo es sobre el mecanismo general de nominación, no sobre este nombre en particular. El corpus de nombres es de comunidades eyábida de Antioquia y no distingue en todos los casos katío de chamí, ambos eyábida. Es un artículo de antropología lingüística, sin contenido mitológico narrativo.",
  }),
  raceroCasarrubiaPercepcion2008: source({
    title: "Percepción y patrones de uso de la fauna silvestre por las comunidades indígenas Embera-Katíos en la cuenca del río San Jorge, zona amortiguadora del PNN-Paramillo, Revista de Estudios Sociales 31, pp. 118-131",
    author: "Javier Alfonso Racero-Casarrubia, Carlos C. Vidal, Óscar D. Ruiz y Jesús Ballesteros C.",
    year: 2008,
    type: "artículo de revista científica (Universidad de los Andes)",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0123-885X2008000300009",
    summary:
      "Documenta, en comunidades emberá katío de Córdoba (Ybudó, Mogaradó, Narindó y Mejondó) y en talleres con ellas, cuáles son de hecho las presas de la cacería y con qué miedos y respetos se relacionan. Registra que a los felinos «se les tiene temor y respeto, considerándose peligrosas» porque compiten por saínos, ñeques y guartinajas, las mismas «especies valiosas como fuente de alimento» que la etnografía identifica como las piezas favoritas del cazador. Recoge también relatos vivos asociados a animales concretos: la serpiente Porremia que «aparece sólo dos veces al año a recoger los males del pueblo Embera», y los poderes atribuidos a la «gran bestia-Kâyicomia». Sirve para anclar el relato en una cacería real, con especies nombradas, en el territorio katío de hoy.",
    limitation:
      "Es un estudio de biología y uso de fauna, no de mitología: los mitos aparecen como anotaciones laterales a las fichas de especies. No contiene este relato ni la figura de Pãkõré. La información se obtuvo en talleres con nombres de especie en castellano y embera, mediados por la antropóloga del proyecto, no en recolección de tradición oral. Las comunidades son del San Jorge cordobés, no del Urabá antioqueño del registro de 1924.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  reichelDolmatoffMitos1945: source({
    title: "Mitos y cuentos de los indios chimila (Boletín de Arqueología, vol. I, n.º 1)",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1945,
    type: "recolección etnográfica de relatos orales con comentario",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/234",
    summary:
      "Es la fuente de primera mano del segundo paralelo que las Similitudes de Ancastor ya nombran. El cuento 8, «Cómo los Chimila consiguieron el maíz» (pp. 8-9), trae el texto que Chaves copia en su nota comparativa a Ancastor: la semilla del maíz guardada en una tusa en lo más alto de una ceiba, el árbol que se recompone cada noche y los hombres que lo tumban trabajando hasta medianoche. En el comentario (pp. 23-24) Reichel-Dolmatoff lo coloca en el ciclo del «árbol de la vida», en cuya cúspide crecían las semillas indispensables, y lo liga al cuento 9, donde la semilla se siembra en un tronco. Permite leer el paralelo en su fuente y no sólo a través de Chaves.",
    limitation:
      "Es un pueblo no emberá (chimila, hoy ette ennaka, del Magdalena) y no menciona a Ancastor, a Bajía ni el viaje de las dos mujeres: entra sólo como la comparativa que la ficha ya declara. El PDF del ICANH reúne el número entero del Boletín; el cuento está en las primeras treinta páginas. Las hipótesis difusionistas del comentario (origen arawak, fechas de llegada del maíz) son del autor en 1945.",
  }),
  bakataMina2021: source({
    title: "Mina de Oro (Dachi Chiuu, Nuestra Lucha. La historia de la comunidad embera katío en Bogotá)",
    author: "Comunidades Emberá Katío del Alto Andágueda en Bogotá (colectivos Embera Bakata y Abauda Andagueda, Agrupación Conondo) y CNMH",
    year: 2021,
    type: "memoria comunitaria (iniciativa de memoria histórica priorizada en 2020)",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/mina-de-oro/",
    summary:
      "Es la pieza que el mismo micrositio pone al lado del relato de Cobaima y la que explica por qué el último episodio del recorrido —la mina donde el oro se comía a la gente y a los animales— pesa tanto para quienes lo cuentan. Abre con la frase «La mina no solo era la vida de la tierra, sino que también representa la sangre en la tierra» y narra, con testimonios de participantes de la iniciativa (entrevista a Felipe Campo, 4 de noviembre de 2020), la historia del oro en el territorio que Caragabí entregó a los emberá katío: la mina El Morrón, el hallazgo de La Bruja en 1975 por Aníbal Murillo, el pleito con la familia Escobar, el asesinato de Luis Enrique Arce y otros líderes, la llegada del M-19 y la base militar montada en la Misión de Aguasal —el mismo Aguasal que Cobaima nombra en su segunda parada—, y el desplazamiento de 2008 hacia Bogotá. Sitúa en el tiempo y en el mapa lo que el relato dice en clave mítica: un oro que devora a los vivos.",
    limitation:
      "No nombra a Cobaima ni narra el episodio mítico: la relación entre el oro que devora del relato y la mina que trae la muerte es una lectura que la página sugiere al ponerlos juntos, no un enunciado de los narradores. Es la misma obra colectiva que la ficha ya cita en su portada y en la página de Cobaima (otra URL del mismo micrositio). La historia de la mina se apoya en fuentes secundarias de prensa y en Hoyos (2016) y en Molina y Molina (2013), que no están en línea; el CNMH advierte que los contenidos son responsabilidad de sus autores.",
  }),
  carupiaEmbera2024: source({
    title: "Embera trü: revitalización de la educación propia desde el (re)encuentro con nuestros nombres propios con los estudiantes embera eyabida de la Casa del Saber Isla Cruces, comunidad Isla, Murindó, Antioquia",
    author: "Dobigama Cabrera Carupia",
    year: 2024,
    type: "trabajo de grado (Licenciatura en Pedagogía de la Madre Tierra, Universidad de Antioquia), con versión oral transcrita",
    url: "https://hdl.handle.net/10495/41841",
    summary:
      "Trae, en las pp. 48-51 («Embera trú tejido al árbol Genené: origen del agua»), una versión eyabida contemporánea con narradora, lugar y fecha: la contó Edilma Carupia, Jainawidau, de 60 años, historiadora de la comunidad Isla (Murindó), a su hija el 9 de marzo de 2024; la autora la escribió en embera y la llevó al castellano. No había agua; la tenía Genzerá, la hormiga conga, que se niega a darle una gota a Karagabí; el hijo colibrí Chumbizú la sigue y la ve abrir con una llave el árbol Genené. Karagabí y sus hijos (mico tití cabeza blanca, mico negro y Chidima, ardilla pequeña) hacen hachas; el árbol amanece cada día sin lesión, hasta que el mico, de guardia, descubre que la rana Bokorro le vuelve a pegar la corteza. A los tres días cae, pero se queda enredado en un bejuco, y la prueba de la fruta la gana Chidima, que «se cayó antes de caer la fruta». Del tronco quedan los mares, del tallo el río grande, de las ramas las quebradas, de las hojas la ciénaga y la laguna, y de la flor lo húmedo.",
    limitation:
      "Es una versión de 2024 de Murindó (Atrato medio antioqueño), no de las notas de Urabá de 1924/1929, y no debe fundirse con ellas. Coincide con 1929 —no con Severino 1924— en la prueba de la fruta (caer antes que la fruta es lo que habilita a Chidima) y con Severino 1959 en el colibrí que sigue a Genzerá; no tiene diluvio, peña, aves emisarias ni cirios. Trae un personaje que ninguna fuente de la ficha nombra, la rana Bokorro que recompone la corteza. El trabajo es pedagógico, no una edición crítica.",
  }),
  morenoCaminar2020: source({
    title: "Caminar, identificar y exaltar: hacia la construcción de una propuesta de educación sensible, desde el arraigo y la apropiación simbólica del territorio y su relación sagrada con la naturaleza del Alto Atrato, en el resguardo embera katío «El 18»",
    author: "Daniel Ospina Moreno",
    year: 2020,
    type: "tesis de maestría en Educación (Universidad de Antioquia) con relatos orales transcritos",
    url: "https://hdl.handle.net/10495/17967",
    summary:
      "Transcribe (pp. 121-125) dos relatos del origen del agua recogidos en 2018 y 2019 entre los guardias jóvenes del resguardo embera katío «El 18» (Carmen de Atrato, Chocó): el de «Flechazi» y el complemento de Hernando Wataquí, «Calvo». No hay agua; Jetserá, la hormiga conga (Paraponera clavata), guarda el árbol Jenené y pica a quien se acerca; el tominejo, colibrí mensajero, lleva a los emberá hasta el árbol; lo cortan con hacha durante varios días, pero no cae porque está pegado del cielo, y una sola ardilla sube y roe durante días la fibra que lo une al cielo. Al caer, el tallo se vuelve el río Atrato (o la cordillera Occidental), las ramas los afluentes, la raíz el mar, y la parte que quedó arriba sigue cayendo como lluvia. El autor anota además que en el Urabá eyabida el origen del agua gira alrededor de una roca y en el alto Andágueda-Atrato en torno a un árbol.",
    limitation:
      "Versión del alto Atrato chocoano, contada en castellano por jóvenes en 2018-2019 y anotada por un investigador externo; no es la de las notas misioneras de Urabá y no debe fundirse con ella. El dios que ordena la tala es Ancoré, no Caragabí; no hay prueba de la fruta, ni diluvio, ni aves emisarias, ni cirios; la ardilla no tiene nombre. La cosmogonía que la precede mezcla elementos cristianos (Oquendo y Ambrosia, la mujer de barro) que el propio autor no discute.",
  }),
  carupiaEmbera2023: source({
    title: "Embera bedea kiranduade e baida zorara nenburadeba: historias propias como caminos de aprendizaje para el fortalecimiento de la lengua ebera eyabida con niñas, niños, escuela del saber Koredó, comunidad Kichabi, Dabeiba, Antioquia",
    author: "Iris Dilanie Domicó Carupia",
    year: 2023,
    type: "trabajo de grado (Licenciatura en Pedagogía de la Madre Tierra, Universidad de Antioquia) que transcribe un relato con narrador acreditado",
    url: "https://hdl.handle.net/10495/36045",
    summary:
      "Transcribe (pp. 44-45) el relato «Burumia o Bibidi o Bibidogomia» tal como lo publicó Luis Fernando Vélez en «Relatos tradicionales de la cultura catía» (ed. Universidad de Antioquia, 1990, p. 87), contado por Rubén Domicó el 24 de agosto de 1981. Es una segunda versión katía con narrador y fecha, independiente de Rafael Bailarín, y comparte con la de la ficha su núcleo operativo: el antropófago vive en la copa de un árbol muy grande; los indios siembran ají, rodean el árbol de leña, echan el ají al fuego y, con el humo, el que está arriba cae aturdido y lo matan a garrotazos. Difiere en lo demás: aquí es un solo ser, «como un indio muy grande», con uñas de más de dos pulgadas con que abre los cuerpos; cuelga de las ramas a los que caza, «más de mil indígenas pegados como murciélagos»; el ataque es de quinientos indios y quinientas indias a medianoche; y funde bajo un solo nombre a Burumiá y a Bibidí. No hay rastreador, negro, tigres ni niña cautiva. La autora, eyabida de Dabeiba, comenta además la mediación misionera que arrastra la antología de Vélez.",
    limitation:
      "Es cita de cita: la antología de Vélez (1982; reed. Universidad de Antioquia, 1990 y 2018) no está digitalizada en abierto, y el relato llega a través de este trabajo de grado, que no da el lugar donde se narró. Vélez mezcla en su antología relatos de religiosos y de narradores indígenas; éste declara narrador. La identificación Burumiá = Bibidí es del narrador de 1981 y contradice a Vasco, para quien los bibidí guerrean contra los burumiás.",
  }),
  isaramaKirincia2012: source({
    title: "Kirincia bio o kuitá. Pensar bien el camino de la sabiduría: una forma de volver a recorrer el camino del pensamiento y la sabiduría ancestral en diálogo con los mayores [...] para la pervivencia del pueblo embera eyábida y dóbida de Antioquia y Chocó",
    author: "Guzmán Cáisamo Isaramá",
    year: 2012,
    type: "tesis doctoral en Educación (Universidad de Antioquia) de un autor emberá",
    url: "https://hdl.handle.net/10495/6938",
    summary:
      "Es testimonio emberá, no misionero, de que el cuento sigue circulando y de qué lugar ocupa. El autor recuerda (p. 36) que en el internado de Catrú los jóvenes se reunían de noche a narrar en embera bedea «mitos, cuentos de baracocó, llianbera, jurara, bibidi komia, gemené». En el capítulo sobre el origen (pp. 107 y 111) define a los bibidi comia como «personaje mítico de los primeros hombres guerreros y malos que vivieron dentro los árboles grandes como su hábitat o escondite», recoge que hay quien sostiene que los emberá son «de la generación de bibidi comia», y que otros dicen que vienen de la raíz de un árbol grande llamado jenené, «que así lo llamaron la gente de bibidi comia». Confirma así el rasgo central de la ficha —el árbol como morada del pueblo antropófago— y lo coloca en el tiempo de las primeras generaciones, como hacen Vasco y Gálvez.",
    limitation:
      "No narra el relato: son tres menciones en una tesis de casi 800 páginas. El autor es dóbida, formado en el internado de Catrú, y escribe sobre eyábida y dóbida sin separar siempre de quién es cada versión; la genealogía que hace descender a los emberá de los bibidi comia no está en Bailarín ni en las notas de 1929 y no debe injertarse en la ficha.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  asensioDecadas1892: source({
    title: "Décadas del Nuevo Mundo, Década séptima, libro X, capítulo II («Sacrificios humanos a Dabaiba»), en Fuentes históricas sobre Colón y América, tomo IV",
    author: "Pedro Mártir de Anglería; trad. Joaquín Torres Asensio",
    year: 1892,
    type: "crónica (traducción castellana del latín)",
    url: "https://archive.org/details/fuenteshistorica04anghuoft",
    summary:
      "El capítulo entero dedicado al culto: el templo a cuarenta leguas del Darién, los esclavos degollados y quemados, la sequía primordial y los pozos en la playa, el ayuno de cuatro días, las campanas de oro y la castidad de los sacerdotes (pp. 232-238).",
    limitation:
      "Anglería no estuvo en América: escribe lo que le refirieron los colonos del Darién, con juicios de cristiano del siglo XVI. OCR de Internet Archive con erratas.",
  }),
  asensioDecadas18922: source({
    title: "Décadas del Nuevo Mundo, Década tercera, libro IV, en Fuentes históricas sobre Colón y América, tomo II",
    author: "Pedro Mártir de Anglería; trad. Joaquín Torres Asensio",
    year: 1892,
    type: "crónica (traducción castellana del latín)",
    url: "https://archive.org/details/fuenteshistorica02anghuoft",
    summary:
      "El origen de la figura: Dabaiba fue una mujer antigua, magnánima y providente, venerada en vida y después de muerta; da nombre a las montañas y al río, y cuando se enoja trae rayos, truenos y pérdida de cosechas (pp. 322-324).",
    limitation:
      "Pasaje breve dentro de una digresión geográfica sobre el Atrato; el cronista lo cierra acusando a los sacerdotes de explotar la creencia.",
  }),
  posseMitos1993: source({
    title: "Mitos y leyendas de Colombia, volumen III, cap. 2.3 «Dobaida»",
    author: "Eugenia Villa Posse",
    year: 1993,
    type: "compilación (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Resume a Trimborn: Dobaiba como diosa de las tormentas de los cueva, princesa divinizada, madre del Creador; cita a Vadillo («cuando truena, que está enojada la Dobaiba») y distingue Dabaiba, Dobaiba y Dabeiba (pp. 49-52).",
    limitation:
      "Reelaboración de segunda mano con tono apologético; mezcla testimonios sin separar siempre quién dice qué. El artículo de Trimborn que resume no está en abierto.",
  }),
  piazziniPlaneacion2009: source({
    title: "Planeación y procesos espaciales: configuración territorial del municipio de Frontino en el noroccidente de Antioquia (Colombia)",
    author: "Carlo Emilio Piazzini",
    year: 2009,
    type: "artículo académico (Boletín de Antropología, Universidad de Antioquia, vol. 23, n.º 40)",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/6481",
    summary:
      "Registra en 2007 que la diosa Dabeiba sigue en la tradición oral de los embera de Río Verde (Frontino), y da la referencia de Trimborn, «Dobaiba: diosa de las tormentas» (1953).",
    limitation:
      "Artículo de geografía histórica; menciona a la diosa en una línea y no cuenta su relato.",
  }),
  redaccionmitos2017: source({
    title: "Los mitos y leyendas de los embera katío inspirados en el Atrato",
    author: "Revista Semana (redacción)",
    year: 2017,
    type: "prensa nacional",
    url: "https://www.semana.com/mitos-y-leyendas-de-los-embera-katio-inspirados-en-el-atrato/551257/",
    summary:
      "La Dabeiba katía que sirve de paralelo: mujer venida de las llanuras del Atrato, maestra de oficios, que sube al cielo desde un cerro y causa lluvia, huracanes y terremotos.",
    limitation:
      "Nota divulgativa sin firma; se apoya en Ocampo López sin citar páginas y funde la diosa cueva con la katía.",
  }),
  redaccionCacica2005: source({
    title: "Cacica Dabeiba",
    author: "Vivir en El Poblado (redacción)",
    year: 2005,
    type: "prensa local (Medellín)",
    url: "https://vivirenelpoblado.com/cacica-dabeiba/",
    summary:
      "Versión antioqueña de la cacica Dabeiba: sube al Cerro León y al cielo, protectora contra tormentas, rayos y tempestades; cita a Amanda Gómez Gómez.",
    limitation:
      "Crónica de tono laudatorio, sin fuentes primarias; trata a Dabeiba como heroína regional.",
  }),
  edenDecades1555: source({
    title: "The Decades of the Newe Worlde or West India",
    author: "Pedro Mártir de Anglería; trad. Richard Eden",
    year: 1555,
    type: "crónica (traducción inglesa del siglo XVI)",
    url: "https://archive.org/details/decadesofnewewor00angh",
    summary:
      "La traducción inglesa más antigua de los pasajes sobre el río y las montañas de Dabaiba; permite cotejar la versión castellana de 1892.",
    limitation:
      "Inglés del siglo XVI con OCR muy deficiente; no incluye la Década séptima, donde está el culto.",
  }),
  espanolDabeiba2026: source({
    title: "Dabeiba",
    author: "Wikipedia en español",
    year: 2026,
    type: "enciclopedia colaborativa",
    url: "https://es.wikipedia.org/wiki/Dabeiba",
    summary:
      "En la toponimia del municipio separa tres hilos del nombre: doña Dabeiba Hernández, el tesoro «Dabeibe» y la diosa catía.",
    limitation:
      "Wikipedia, sin referencia para la etimología; sólo sirve para mostrar la confusión de nombres.",
  }),
  asensioDecadas18923: source({
    title: "Décadas del Nuevo Mundo, Década segunda, libro IV, y Década tercera, libro VI, en Fuentes históricas sobre Colón y América, tomo II",
    author: "Pedro Mártir de Anglería; trad. Joaquín Torres Asensio",
    year: 1892,
    type: "crónica (traducción castellana del latín)",
    url: "https://archive.org/details/fuenteshistorica02anghuoft",
    summary:
      "La entrada de Balboa por el río con cien hombres, el pueblo de pescadores de Dabaiba abandonado y los siete mil castellanos de oro (pp. 95-97); la carta al rey sobre la corte a cincuenta leguas, el error con los pescadores y los trescientos hombres (pp. 364-365).",
    limitation:
      "Anglería reescribe cartas de los colonos, que tenían interés en inflar la riqueza para obtener tropas. OCR con erratas.",
  }),
  caicedoRuta2017: source({
    title: "Ruta de Juan Vadillo por el Viejo Caldas (agosto-septiembre de 1538)",
    author: "Luis Javier Caicedo",
    year: 2017,
    type: "artículo académico (Ciencia Nueva, Universidad Tecnológica de Pereira, vol. 1, n.º 1)",
    url: "https://dialnet.unirioja.es/descarga/articulo/8693379.pdf",
    summary:
      "La última búsqueda: Heredia envía a Francisco César tras el tesoro de «Dabaibe», que llega al valle de Guaca, cerca de Dabeiba, y saca oro de las sepulturas; Vadillo sale de San Sebastián de Urabá en enero de 1538 (p. 73).",
    limitation:
      "Estudio de ruta; el tesoro aparece sólo como móvil de la expedición.",
  }),
  asensioDecadas18924: source({
    title: "Décadas del Nuevo Mundo, Década séptima, libro X, capítulo II, en Fuentes históricas sobre Colón y América, tomo IV",
    author: "Pedro Mártir de Anglería; trad. Joaquín Torres Asensio",
    year: 1892,
    type: "crónica (traducción castellana del latín)",
    url: "https://archive.org/details/fuenteshistorica04anghuoft",
    summary:
      "El botín tomado a un régulo del río Dabaiba: catorce mil pesos de oro en figuras, tres trompetas, tres campanas con badajos de hueso de pescado y mil trescientos cascabeles (pp. 234-235).",
    limitation:
      "No dice quién dirigió la entrada ni en qué año.",
  }),
};

export const defaultKatioSourceKeys = [
  "severino1924",
  "rochereau1929",
  "villa1993",
  "clacsoRegionalization",
  "onicKatio",
  "gobiernoMayorKatio",
  "minInteriorPlan",
];

export function pickKatioSources(...entries) {
  const seen = new Set();
  const picked = [];
  for (const entry of entries) {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = katioSources[key];
    if (!selected) throw new Error(`Fuente Katío desconocida: ${key}`);
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
