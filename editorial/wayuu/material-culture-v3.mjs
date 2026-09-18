/**
 * Contrato de cultura material para la Biblia visual Wayuu V3.
 *
 * Esta compuerta corrige una cautela mal aplicada en los lotes 01-07: evitar
 * simbolos inventados no significa neutralizar la indumentaria ni la pintura
 * facial documentadas. Desde el lote 08 toda figura humana debe declarar que
 * usa, por que lo usa, en que momento y con que respaldo.
 */

export const WAYUU_MATERIAL_CULTURE_SOURCES_V3 = {
  chaves_kosina_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - El pequeño indio Kosina",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "Kosina como cazador de lagartijas con arco y flecha, agricultor de ahuyama, patilla y frijol, musico de caja o tambor y jinete",
      "madre, viajeros indigenas acomodados, jefe de fiesta, aliado bien vestido, dueños de caballos, burros, dos caballos individuales y una familia equina",
      "trupillo sancochado, faja de captura, manea, huellas menguantes, roza, casa, fiesta de carreras, corral y cueva subterranea como elementos narrativos diferenciados",
      "ausencia de descripcion de pueblo, clan, fisonomia, pintura facial o vestuario para el protagonista, la madre, el jefe y los colectivos; solo el aliado se califica como elegante y bien vestido",
    ],
    caution: "Transcripcion publicada en 1946 con mediacion de epoca. La palabra Kosina no se interpreta por si sola como nombre propio, identidad Wayuu o autorizacion para transferir un traje; tampoco se reproducen matanza, amenaza, maltrato animal o consumo de alcohol.",
  },
  pnn_macuira_cosina_kosina: {
    title: "Plan de Manejo del Parque Nacional Natural Makuira",
    institution: "Parques Nacionales Naturales de Colombia",
    url: "https://www.parquesnacionales.gov.co/wp-content/uploads/2020/10/plan-de-manejo-pnn-macuira.pdf",
    supports: [
      "Cosina o Kosina como uno de los grupos de familia linguistica Arawak señalados historicamente en la Alta Guajira",
      "distincion entre esa referencia historica y los actuales ocupantes Wayuu de la Makuira y su zona de influencia",
    ],
    caution: "El plan recoge tradicion oral e informacion secundaria y no identifica al protagonista del cuento ni documenta su ropa. Solo impide tratar Kosina y Wayuu como terminos visualmente intercambiables.",
  },
  perrin_kusina_1989: {
    title: "Antropologica 72 - wayuu, alijuna, kusina",
    institution: "Michel Perrin, Fundacion La Salle de Ciencias Naturales",
    url: "https://biblat.unam.mx/hevila/AntropologicaCaracas/1989/no72/2.pdf",
    supports: [
      "Kusina como termino relacional usado para otros pueblos indigenas lejanos, distantes o desaparecidos",
      "acepcion historica para un grupo situado en la Sierra de los Cosinas o Sierra Kusina",
      "interpretacion alternativa para antiguos cazadores guajiros y uso posterior para Wayuu empobrecidos de zonas remotas",
    ],
    caution: "La polisemia impide cerrar una etnia, fisonomia o indumentaria para el personaje. Los juicios historicos citados por la fuente no se convierten en jerarquia, salvajismo ni pobreza visual.",
  },
  sena_cocina_wayuu_trupillo: {
    title: "Inventario de cultura alimentaria Wayuu",
    institution: "Servicio Nacional de Aprendizaje - SENA",
    url: "https://repositorio.sena.edu.co/bitstream/handle/11404/7308/cocina_ancestral_tradicional_guajira.pdf?isAllowed=y&sequence=3",
    supports: [
      "trupillo como fruto silvestre en forma de vainas",
      "consumo alimentario de la vaina y preparaciones en harina o chicha",
    ],
    caution: "El inventario contemporaneo no reconstruye el plato exacto del cuento. Para el sancochado se conserva la evidencia directa de Chaves y se evita inventar receta, recipiente ceremonial o presentacion moderna.",
  },
  finol_origen_fuego_2007: {
    title: "Mito y cultura guajira - tres versiones del origen del fuego",
    institution: "Jose Enrique Finol, Universidad del Zulia; versiones atribuidas y narradores identificados en la publicacion",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf",
    supports: [
      "separacion de las versiones protagonizadas por Siki o Makutulain, Junuunay y Kasemashi",
      "Maajua, su madre, los Señores de Wuna'apu, Mouwa y Jamu en la primera version",
      "Kenáa, Jimut, Serumáa, el Caujaro, las dos brasas y la gruta de Maleiwa en la segunda version",
      "Maleiwa como viejo mendicante, Awa'alas, las piedras de Pülowi y Ma'ayüi con Ulapiuy en la tercera version",
    ],
    caution: "Las tres versiones tienen mediaciones y procedencias distintas y Finol las conserva como variantes comparables. No se fusionan en una cronologia, no se derivan prendas de las acciones y no se reproducen castigos corporales de forma explicita.",
  },
  mercado_epieyu_maayui_ulapiuy_2026: {
    title: "Ma'ayüi, Mma'leiwa y Ulapiuy en una explicacion Wayuu contemporanea",
    institution: "Rafael Mercado Epieyu, linguista e investigador Wayuu",
    url: "https://www.facebook.com/rafael.mercadoepieyu/",
    supports: [
      "vigencia contemporanea de los nombres Ma'ayüi y Ulapiuy dentro de relatos Wayuu de transformadores",
      "necesidad de conservar los nombres propios de la pareja sin sustituirlos por una pareja distinta del corpus",
    ],
    caution: "Publicacion contemporanea de autor Wayuu consultada como contraste nominal; no basta para identificar uno a uno a Ma'ayüi y Ulapiuy con Tumajü'le y Peeliyuu ni para fijar fisonomia, vestuario o escena historica.",
  },
  chaves_pushiana_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - El Indio Pushiana",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "Pushiana o Pushaina como jinete del caballo capon Kasap y su muerte por la caida posterior al sobresalto",
      "retorno del propio Pushaina como persona que puede ser oida sin cuerpo visible, sin acompañante sobrenatural independiente",
      "culebra, zorro, mapurito, gallinazo y ciempies como cinco formas animales nombradas en momentos diferentes",
      "hija cuidadora, casa grande, sala, cuarto, alimentos, botellas, anillo empeñado y cementerios como elementos narrativos distintos",
    ],
    caution: "Transcripcion historica de 1946, mediada por interprete y acompañada por lenguaje de miedo, superioridad y una prueba sexualizada. Se conserva su procedencia y sus elementos, pero no se reproduce violencia, humillacion, diagnostico sexual, sacrificio animal ni romantizacion del alcohol; tampoco describe vestuario, especies zoologicas o arquitectura exacta.",
  },
  villa_posse_pushiana_1993: {
    title: "Mitos y leyendas de Colombia - El Indio Pushiana",
    institution: "Eugenia Villa Posse, compiladora; IADAP / repositorio FLACSO Andes",
    url: "https://repositorio.flacsoandes.edu.ec/items/796b49f5-fff2-4cf8-a8a5-ce5b14b01694/full",
    supports: [
      "republicacion e indexacion del relato El indio Pushiana atribuido a Chaves 1946",
      "trazabilidad bibliografica del cuento dentro de una compilacion de literatura oral colombiana",
    ],
    caution: "Es una compilacion que vuelve a publicar el material de Chaves; no cuenta como una variante oral independiente ni autoriza sumar hechos que no esten en la transcripcion primaria.",
  },
  suarez_arquitectura_wayuu_2021: {
    title: "Materia y penumbra: una arquitectura en el desierto",
    institution: "Universidad Nacional de Colombia / Anales de Investigacion en Arquitectura",
    url: "https://revistas.ort.edu.uy/anales-de-investigacion-en-arquitectura/article/view/3059",
    supports: [
      "arquitectura Wayuu como sistema de dispositivos domesticos, cotidianos y rituales vinculado con territorio y memoria",
      "necesidad de distinguir configuraciones y usos en vez de fabricar una casa universal",
      "investigacion basada en estudios de campo y entrevistas para describir configuraciones formales",
    ],
    caution: "Investigacion contemporanea sobre habitat; orienta relaciones y materiales, pero no reconstruye la casa grande de Pushaina ni prueba su forma en 1946.",
  },
  angel_cementerio_wayuu_2022: {
    title: "Entre lo urbano y lo rural. El caso de un barrio indigena wayuu de la Baja Guajira",
    institution: "Dary Marcela Angel-Rodriguez, Revista de Antropologia y Sociologia: Virajes",
    url: "https://dialnet.unirioja.es/descarga/articulo/8743666.pdf",
    supports: [
      "cementerio como espacio de pertenencia familiar y clanil en un asentamiento Wayuu situado",
      "tumbas alineadas, placas y cruces de concreto y cerramiento documentados en La Granjita contemporanea",
    ],
    caution: "Caso contemporaneo de Baja Guajira; demuestra importancia y variabilidad espacial, pero sus placas, cruces y cerramientos no se trasladan a un cementerio historico indeterminado del relato de Pushaina.",
  },
  chaves_jururiana_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - El Indio Jururiana",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "Jururiana como mayor que recorre rancherias y anuncia un cambio de lluvia",
      "reunion de semillas y chivos negros y traslado hacia Patsuo, cerca de Puerto Estrella",
      "chubasco que borra huellas sin afirmacion de diluvio universal",
      "Warir como nieto que estudia el tiempo y vincula sus secretos con la Tierra como abuela",
    ],
    caution: "Fuente historica publicada en 1946 con terminologia y mediacion de epoca. No describe el vestuario de Jururiana o Warir y presenta ambiguedad de sujeto en la prueba de la casa oscura; se usa para secuencia y limite de evidencia.",
  },
  restrepo_agua_wayuu_2018: {
    title: "El recurso agua en las comunidades indigenas Wayuu de La Guajira Colombiana. Parte 1",
    institution: "Diana Restrepo-Tarquino y otros, Informacion Tecnologica / SciELO",
    url: "https://www.scielo.cl/scielo.php?pid=S0718-07642018000600013&script=sci_arttext_plus&tlng=es%2F",
    supports: [
      "suenos como mensajes de prevencion dentro de decisiones familiares",
      "lluvia con significados distintos segun epoca, frecuencia e intensidad",
      "canto de aves, desplazamiento de hormigas, apareamiento de chivos y remolinos como indicadores ambientales documentados",
      "bahareque, yotojoro, barro, arcilla y paja como materiales de vivienda historicamente descritos",
    ],
    caution: "Revision contemporanea de saberes y practicas; contextualiza agua, suenos y construccion, pero no convierte el episodio de Jururiana en codigo meteorologico universal ni reconstruye su casa exacta.",
  },
  uniguajira_etnoecologia_puerto_estrella: {
    title: "Etnoecologia Wayuu - Palalielu'u / Puerto Estrella",
    institution: "Universidad de La Guajira",
    url: "https://repositoryinst.uniguajira.edu.co/bitstreams/aa8e33c6-a76a-444c-aad4-0403075d05b0/download",
    supports: [
      "Puerto Estrella como territorio costero semiarido de la Alta Guajira",
      "mar al norte y ausencia de rios y serranias inmediatas en la descripcion local",
      "cardones, cactus, trupillo y dividivi entre la flora registrada",
      "chivos entre la fauna y economia local descritas",
    ],
    caution: "Descripcion territorial contemporanea de Palalielu'u; orienta la gramatica ambiental cercana, pero no georreferencia Patsuo ni prueba que el paisaje mitico tuviera la misma configuracion exacta.",
  },
  chaves_mitos_guajira_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "dos episodios distintos reunidos bajo El incesto",
      "la hermana del primer episodio como joven que sale del encierro y recibe una transformacion petrea litoral",
      "ausencia de una transformacion independiente afirmada para el hermano en la version transcrita",
      "la joven del segundo episodio como majayura ligada por transformacion al cerro Katetamana",
    ],
    caution: "Fuente historica transcrita en 1946: conserva lenguaje culpabilizante, generalizaciones y sesgos de epoca. Se usa para personas, secuencia y limites de evidencia, no como juicio cultural vigente ni como descripcion completa de vestuario.",
  },
  chaves_majayura_puro_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - La majayura de Puro",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "Puro como cueva sagrada a la que ningun ser viviente debe entrar",
      "majayura descrita como joven elegante, bonita y bien vestida que se aparece de dia o de noche",
      "hombres anonimos, desorientacion, conduccion hacia Puro y revelacion de secretos del territorio",
      "regla de silencio para quien regresa, apariencia movil de piedra blanca y piedra final llamada Papach",
      "ausencia en el relato de primer joven, compañeros, buscadores, agua, bienes, voces, puerta cambiante, Papach humano o Pulowi explicita",
    ],
    caution: "Relato breve y mediado por lenguaje masculino de 1946. La descripcion 'bien vestida' exige ropa completa pero no fija corte, color, ornamentacion ni ocasion; el comentario preliminar de Chaves sobre pubertad y encierro no se trata como detalle de la accion. No se reproduce el ahogamiento, la muerte ni el cuerpo encontrado.",
  },
  chaves_umarala_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - El Piache Umarala",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "John Paurala como nombre anterior del protagonista y Umarala como nombre recibido despues de la vision",
      "tia anciana piache como cuidadora, maestra, cantora, mediadora y fuente del capote y la maraca",
      "Jirarai dentro del canto y Jumajule como auxiliar nombrado e invocado por la tia",
      "Jarara como region de crianza, epidemia y retorno; bosque y cementerio por los lados de Maiceo",
      "Umarala anciano torciendo maguey, paciente como madre de una familia pudiente, sarta de oro, mula ofrecida y dos botellas de ron",
      "tropel de caballos, canto y maraca sin testigos directos durante la curacion nocturna",
      "Umarala bien vestido con manta de algodon sobre mula mora; viajero de Macuira con capote y manta de algodon sobre mula ratona; viajero de Parashi con vestido de cuero de venado, manta de lana y riendas de cuero de venado sobre mula oscura",
      "viajero de Macuira identificado despues como Jururiana y viajero de Parashi capaz de convertirse en venado y fabricar objetos de maguey",
    ],
    caution: "Fuente oral transcrita y publicada en 1946 con terminologia, juicios sobre especialistas y explicaciones medicas propias de su epoca. Los resultados de curacion pertenecen a la narracion y no prueban eficacia clinica; muerte, enfermedad, ceguera, castigo y cuerpos no se representan de forma explicita. Capote, manta y vestido de cuero se interpretan solo hasta donde permite el texto y nunca como uniforme Wayuu contemporaneo.",
  },
  chaves_worunka_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - La India Worunka",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "cadena de transmision declarada: Juancito Iguaran, de setenta anos y casta Pushaina, como informador; Roberto Iguaran como interprete",
      "Worunka embarazada, hijo ya extraido, intervencion de Mareiwa, fortalecimiento mediante dos costillas y conversion final en piedra",
      "piedra y arroyo en el valle entre Itojoro y Kousopa, llegada de Worunka desde la Sierra de Macuira y ausencia de coordenada exacta",
      "Sangre Toro, carpintero, guacamayo y otras aves que reciben rojo de maneras distintas",
      "cambio narrado en iniciativa matrimonial, animales de compensacion y devolucion de bienes",
      "dos hombres enviados por frutos colorados, semillas sembradas que resultan tumas y valor atribuido a esas piedras",
      "semillas de sustento entregadas a Worunka, chicha fuerteada en tinaja, sequia, tumas enterradas, veranos largos y retorno estacional de la lluvia",
    ],
    caution: "Transcripcion y traduccion publicadas en 1946 con lenguaje corporal, juicios de genero y generalizaciones propias del investigador y su epoca. Se usa para personas, objetos, lugares y secuencia de esta version, no para naturalizar autoridad masculina, compraventa de mujeres, anatomia sexual, violencia o una unica ley cultural vigente. No describe vestuario, fisonomias, especies exactas de aves o cultivos, cantidad de animales, forma de la tinaja ni coordenada del arroyo.",
  },
  chaves_serranias_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - Serranias de la Guajira",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "cadena de transmision declarada: Juancito Iguaran, de setenta anos y casta Pushaina, como informador; Roberto Iguaran como interprete",
      "partida de varios hombres desde Uchi Juroteka y detencion ordenada de Wojoro, Epits, Wososopo, Juyouira, Tsitsi, otro compañero anonimo, Itojoro, Monkii y Guarapu",
      "Mareiwa como remitente de la marcha y transformador de quienes no alcanzan el destino en alturas del territorio",
      "honda y piedra lanzada desde Tsitsi hacia Kasuto, retroceso del mar y persistencia de pozos salados",
      "Wampiray o pavas, Urui o turpiales, arbusto Morva de frutos negros y dispersion de cardon, maschura, iguaraya, sandre de toro y sojoo",
      "gran cueva o pozo, creacion de personas, dieciocho nombres de castas o clanes, pares animales, territorios, compañeras y hierros pintados en Arachí",
      "ausencia total de descripcion de ropa, pintura facial, fisonomia, especies botanicas exactas, diseños claniles o limites cartograficos",
    ],
    caution: "Transcripcion y traduccion publicadas en 1946 con vocabulario, ortografia y categorias de epoca. Se usa para la cadena particular de este relato y sus vacios, no para fabricar geografia exacta, una lista biologica cerrada, marcas claniles, fronteras contemporaneas, propiedad sobre mujeres o una reconstruccion prehispanica del vestuario. Hambre, sed, heridas y muerte se traducen mediante postura y territorio sin espectaculo corporal.",
  },
  uniguajira_etnoecologia_serranias: {
    title: "Etnoecologia Wayuu - territorio, serranias y memoria oral",
    institution: "Universidad de La Guajira",
    url: "https://repositoryinst.uniguajira.edu.co/bitstreams/aa8e33c6-a76a-444c-aad4-0403075d05b0/download",
    supports: [
      "circulacion contemporanea de una variante sobre el viaje que origina las serranias y los morros del extremo de la peninsula",
      "variantes nominales Munkis o Monjes y Warapu o Guarapu dentro de la memoria territorial",
      "necesidad de tratar toponimos y nombres como variantes situadas, no como equivalencias automaticas o coordenadas definitivas",
    ],
    caution: "Documento contemporaneo y fuente de contraste, no segunda transcripcion independiente de la misma cadena de Juancito Iguaran. No se mezclan sus nombres, geografias o explicaciones con la secuencia de Chaves sin marcarlos como variante.",
  },
  pnn_macuira_rem_2019: {
    title: "Reporte de estado y manejo del Parque Nacional Natural Macuira 2019",
    institution: "Parques Nacionales Naturales de Colombia",
    url: "https://www.parquesnacionales.gov.co/wp-content/uploads/2022/09/rem-pnn-macuira_2019.pdf",
    supports: [
      "Macuira como mosaico de bosque seco, matorral espinoso, bosque de galeria, bosque deciduo y bosque nublado bajo en un territorio semiarido",
      "agua y vegetacion mas humeda como condiciones localizadas y no filtro verde uniforme sobre toda la Alta Guajira",
      "Iwaraya o iguaraya como fruto del cardon y producto vegetal recolectado en el territorio",
    ],
    caution: "Fuente ambiental contemporanea usada para morfologia de cardon, iguaraya y gradientes ecologicos. No identifica las plantas vernaculas Morva, maschura, sandre de toro, sojoo o ita del relato ni prueba la apariencia historica exacta de cada lugar mitico.",
  },
  guerra_ontologia_wayuu_2019: {
    title: "Ontologia Wayuu: categorizacion, identificacion y relaciones de los seres en la sociedad indigena de la peninsula de La Guajira, Colombia",
    institution: "Weildler Guerra Curvelo, tesis doctoral, Universidad de los Andes",
    url: "https://repositorio.uniandes.edu.co/server/api/core/bitstreams/1eb4793b-7ba7-45c2-9ee3-1df8a6414968/content",
    supports: [
      "Wolunka o Worunka como mujer primigenia presente en versiones registradas desde el siglo XIX con nombres, parentescos, agentes y lugares variables",
      "variantes nominales Borunka, Wootka, Worunka y Walunkaa y necesidad de no convertirlas en una cronologia unificada",
      "versiones donde la accion pertenece a Maleiwa o a los mellizos transformadores, con piedra y arroyo como invariantes territoriales recurrentes",
      "Maleiwa como transformador y principio ordenador, no cuerpo humano universal ni equivalente simple del Dios cristiano",
      "los mitos como narraciones continuamente contadas y reescritas, por lo que una variante no completa automaticamente a otra",
    ],
    caution: "Sintesis antropologica contemporanea que compara autores, versiones y tiempos distintos. Se usa para separar variantes, nombres y funciones; no autoriza mezclar en la produccion de Chaves los mellizos, flechas, parentescos, rios o descendencias de Isaacs, Fuchs, Perrin, Paz Ipuana o Pimienta.",
  },
  corpoguajira_sangre_toro_2022: {
    title: "Documento tecnico de ordenamiento territorial y avifauna - Nuevo Espinal",
    institution: "Corporacion Autonoma Regional de La Guajira - Corpoguajira",
    url: "https://corpoguajira.gov.co/wp/wp-content/uploads/2022/10/3._Documento-tecnico-Nuevo-Espinal-1.pdf",
    supports: [
      "uso regional del nombre Sangre Toro para un ave registrada como Ramphocelus sp.",
      "presencia regional de carpinteros y psitacidos sin que el documento determine las especies exactas del relato de Worunka",
    ],
    caution: "Inventario ambiental regional contemporaneo, no identificacion zoologica de los ejemplares miticos. Permite una morfologia reversible de Ramphocelus para Sangre Toro, pero no cerrar especie, sexo o patron; carpintero y guacamayo permanecen sin especie exacta.",
  },
  pineda_chama_1947: {
    title: "La chama, un mito guajiro",
    institution: "Roberto Pineda Giraldo, Revista de Folklore numero 2; facsimil de acceso abierto en la Biblioteca Digital de Bogota",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2910662/",
    supports: [
      "hombre acomodado que cuida con esmero sus caballos y encuentro con La Chama bajo apariencia de joven hermosa",
      "compañera femenina llamada por La Chama, trayecto entre formaciones rocosas y cueva que funciona como casa familiar",
      "familia de la misma especie que intenta dañar al hombre mientras La Chama lo protege",
      "vida de pareja, nacimiento de un hijo, nueva pareja del hombre y separacion posterior",
      "burro deteriorado, ollas ennegrecidas y quebradas, esterilla vieja y manta sucia y rota como carga de la salida",
      "casimba, aviso de la nueva pareja y persecucion de cinco dias y noches hasta el agotamiento del caballo",
      "transformaciones del burro en animal gordo y lustroso, de las ollas en mochilas hermosas, de la esterilla en nueva y de la manta en una manta roja nueva asociada con mujeres ricas",
      "hijo que pide detenerse por su padre, retorno a la cueva, cuidado de los pies lastimados y disposicion domestica con sala, cuarto y chinchorro",
      "desenlace violento contra hombre e hijo, registrado para integridad narrativa pero excluido de representacion",
    ],
    caution: "Articulo historico publicado en 1947 con mediacion etnografica y lenguaje de epoca. La narracion no describe cortes de vestuario, fisonomias, numero completo de parientes, arquitectura constructiva, patrones textiles ni mecanismo anatomico de las transformaciones; esos vacios no se rellenan como hechos culturales.",
  },
  villa_posse_chama_1993: {
    title: "Mitos y leyendas de Colombia - La Chama",
    institution: "Eugenia Villa Posse, compiladora; reproduccion digital consultada de la compilacion de 1993",
    url: "https://studylib.es/doc/8316192/mitos-y-leyendas",
    supports: [
      "trazabilidad bibliografica y reproduccion searchable del relato publicado por Pineda Giraldo",
      "La Chama anciana vigorosa, ciega y de olfato agudo, con cabello grueso que llega hasta los tobillos",
      "aparicion alternativa como majayura con vision poderosa",
      "formas nombradas de tigre, huevo y flor, sin descripcion de transicion o especie botanica",
      "residencia entre rocas inaccesibles de la sierra y parentesco con seres de la misma especie",
    ],
    caution: "Es una compilacion posterior y no una entrevista oral independiente. La caracterizacion sintetiza materiales atribuidos a Pineda y otras fuentes; se usa para corroborar morfologia y rastrear pasajes, nunca para convertir una expansion editorial en fuente primaria ni para presentar el uso medicinal del cabello como eficacia comprobada.",
  },
  chaves_la_sed_1946: {
    title: "Mitos, leyendas y cuentos de la Guajira - La sed de los civilizados",
    institution: "Milciades Chaves Ch., Boletin de Arqueologia del Servicio Arqueologico Nacional; edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    supports: [
      "dos comerciantes alijuna que iban a vender panela",
      "Utta como lugar cercano a Katetamana donde se detienen por sed y cansancio",
      "petrificacion de ambos comerciantes y consecuencia verbal atribuida a Mareiwa",
      "ausencia de viajeros Wayuu, familias, jagüey, recipientes, modo de transporte, embalaje o vestuario descritos en el relato",
    ],
    caution: "Relato breve transcrito y traducido en 1946. Su contraste esencialista entre resistencia Wayuu y alijuna se conserva como dato historico de la narracion, no como afirmacion biologica ni jerarquia racial; la fuente no permite fijar etnia, fisonomia o ropa de los comerciantes.",
  },
  banrep_guajira_memoria_visual_2002: {
    title: "Guajira, memoria visual",
    institution: "Centro Cultural de Riohacha, Banco de la Republica",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll18/id/434/",
    supports: [
      "fotografias historicas de La Guajira en las decadas de 1920, 1930 y 1940",
      "Riohacha como ciudad comercial y escenario de contacto regional",
      "uso prudente de prendas rurales historicas como referencia de epoca, no como identidad etnica del alijuna",
    ],
    caution: "El archivo contextualiza el periodo de recoleccion de Chaves, pero no fotografia a los dos comerciantes del relato. Todo conjunto individual sigue siendo una traduccion editorial reversible.",
  },
  angel_parentesco_wayuu_2019: {
    title: "Las experiencias sobre el parentesco de las mujeres Wayuu del asentamiento indigena La Granjita en el municipio de Barrancas, La Guajira, Colombia",
    institution: "Dary Marcela Angel Rodriguez, CIESAS",
    url: "https://ciesas.repositorioinstitucional.mx/jspui/bitstream/1015/917/1/TE%20A.R.%202019%20Dary%20Marcela%20Angel%20Rodriguez.pdf",
    supports: [
      "el encierro como proceso femenino situado dentro de relaciones de parentesco",
      "la salida del encierro como transicion social hacia la condicion de majayura",
      "aprendizaje y presentacion de la joven sin reducir el proceso a adorno o disponibilidad matrimonial",
    ],
    caution: "Etnografia contemporanea y situada en La Granjita; ayuda a no aislar el encierro de las redes femeninas, pero no reconstruye el vestuario exacto del episodio mitico de 1946.",
  },
  finol_mellizos_transformadores: {
    title: "Mito y cultura guajira - Los mitos de los mellizos transformadores y Maleiwa",
    institution: "Jose Enrique Finol, con transcripcion de las versiones de Ramon Paz Ipuana y Michel Perrin",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf",
    supports: [
      "Manna como joven embarazada que viaja durante siete lunas por la Alta Guajira",
      "Kalamantuunay como anciana domestica que trabaja el algodon y posee ropa propia",
      "Tumajule y Peeliyuu como ninos corporalmente distintos, cazadores y transformadores",
      "Hombres-Tigre como colectivo de morfologias humanas, felinas y aviares diferenciadas",
    ],
    caution: "La version de Paz Ipuana es una elaboracion literaria de una narracion de Nicanor Gonzalez; documenta funciones y acciones, pero no describe un vestuario completo para cada figura.",
  },
  finol_viaje_mas_alla_perrin_2007: {
    title: "Mito y cultura guajira - El viaje al mas alla, version Perrin",
    institution: "Jose Enrique Finol, Universidad del Zulia; transcripcion bilingue atribuida a Michel Perrin",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf",
    supports: [
      "version Perrin separada de La historia de Ulepala, paginas 208-220",
      "viudo Wayuu, esposa yolujaa con apariencia humana, parientes muertos, madre, hermana, alcaravan, vacas, Juya, Pulowi y Alekeru",
      "todos los participantes de la yonna vestidos de rojo, esposa que cambia de vestido, tambor, casas y hamacas",
      "figura kusina con flecha, corona de corteza de cuji y plumas de gallo; figura indigena rica con cinturon rojo, traje y sombrero",
      "apariencias humanas de conejos, patilla, ahuyama, maiz y melon, ademas de los objetos y espacios del recorrido",
    ],
    caution: "Finol reproduce una version registrada y traducida por Perrin. La ropa explicita se conserva; donde falta un conjunto completo se usa repertorio Wayuu documentado como traduccion editorial reversible. No se muestran sexo, desnudez, sangre, muerte grafica ni antropofagia.",
  },
  finol_ulepala_sibotta_paz_2007: {
    title: "Mito y cultura guajira - La historia de Ulépala",
    institution: "Relato de Sibotta Sapuana publicado por Ramon Paz Ipuana y reproducido y analizado por Jose Enrique Finol, Universidad del Zulia",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf",
    supports: [
      "procedencia declarada de la narracion: Sibotta Sapuana, 70 anos, Waitapa'a, registro del 17 de febrero de 1970; publicacion literaria de Ramon Paz Ipuana y transcripcion analizada por Finol",
      "Ulepala, majayura, madre, seis acompanantes, familias vivas y muertas, Malinot, tigre, monturas, rebanos, collares, cementerio, provisiones, caverna, sembrado y herramientas como entidades diferenciadas",
      "Juya en apariencia humana con cuerpo fuerte, alto y grueso, cabello blanco hasta los hombros, vestimenta amplia gris reluciente con solapas grana, sandalias gruesas y vara flexible",
      "She'ebe, Kotsu y Molono explicitamente vestidos por los jovenes que Ulepala percibe en el bosque; mantolas amplias en las jovenes del mismo grupo",
      "majayuras-ahuyama con mantas amplias y solapas verdes y jovenes-venado con Tolooma y casquetes empenachados",
      "banco-jabali, chinchorro gigantesco, armas diferenciadas, Parruluwa-puercoespines y tunas-conejos como transformaciones propias de esta version, distintas de las de Perrin",
      "Maleiwa como Gran Senor misterioso y rico a caballo; anciana amiga, dos mulas mohinas, lienzo, ovillo y ruta por sombras sin identificacion de la anciana como arana",
    ],
    caution: "La narracion conserva mediacion literaria, lenguaje de jerarquia, sexo explicito, violencia, antropofagia y personas ofrecidas como bienes. La Biblia registra esas funciones sin representarlas de forma explicita ni convertirlas en norma cultural. Las grafias She'ebe, Kotsu y Molono se conservan como aparecen en esta version y solo se cruzan con otros repertorios cuando la equivalencia esta documentada.",
  },
  perrin_ganado_pensamiento_guajiro_1987: {
    title: "Creaciones miticas y representacion del mundo: el ganado en el pensamiento simbolico Guajiro",
    institution: "Michel Perrin, Antropologica 67, Fundacion La Salle de Ciencias Naturales",
    url: "https://biblat.unam.mx/hevila/AntropologicaCaracas/1987/no67/1.pdf",
    supports: [
      "resumen independiente del viaje del viudo con su esposa muerta a Jepira, las pruebas de Juya, el limite de Pulowi, la resurreccion, el regreso por Araña y el secreto roto",
      "vacas lecheras que conducen a la casa de Juya y relacion simbolica entre lluvia, pastos y ganado",
      "yoluja como presencia de un muerto en sueños y no demonio cristiano",
    ],
    caution: "El articulo resume el relato y analiza ganado; no reemplaza la transcripcion extensa para vestuario, cantidades o secuencia visual.",
  },
  maguare_cucunuba_cartilla_wayuu: {
    title: "Wayuu - Cucunuba, cartilla de patrimonio para la primera infancia",
    institution: "Ministerio de Cultura de Colombia / Maguare",
    url: "https://staging.maguared.gov.co/wp-content/uploads/2016/01/cucunuba_cartilla_wayuu.pdf",
    supports: [
      "ashajawaa o pintura facial con figuras circulares para mujeres y figuras rectas asociadas a lluvia para hombres",
      "necesidad de relatar los significados en comunidad en vez de inventarlos fuera de contexto",
    ],
    caution: "La cartilla ofrece una distincion pedagogica general y no un catalogo exhaustivo. En la Biblia se usa un solo trazo sobrio por persona y solo en la yonna documentada; no se asigna clan ni significado adicional.",
  },
  carrasquero_finol_cuerpo_y_yonna_2010: {
    title: "Mito, concepciones del cuerpo y yonna wayuu",
    institution: "Angela Carrasquero y Jose Enrique Finol, Universidad del Zulia",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/Mito-concepciones-del-cuerpo-y-yonna-1.pdf",
    supports: [
      "diferenciacion corporal entre los dos mellizos sin convertirla en jerarquia moral",
      "transformacion de Tumajule y desaparicion narrativa posterior de Peeliyuu en una version",
      "morfologias documentadas para varios Hombres-Tigre",
    ],
    caution: "Es una interpretacion antroposemiotica posterior; se usa para continuidad corporal y diferencias de version, no para inventar ornamentos o atribuir una unica lectura comunitaria.",
  },
  mincultura_caracterizacion_wayuu: {
    title: "Caracterizaciones de los pueblos indigenas de Colombia - Pueblo Wayuu",
    institution: "Ministerio de Cultura de Colombia",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WAY%C3%9AU.pdf",
    supports: [
      "manta/ashein femenina",
      "wayuco y siira masculinos",
      "waireñas para mujeres y hombres",
      "karatse y pintura facial en el contexto especifico de la yonna",
    ],
  },
  artesanias_tejeduria_wayuu_2016: {
    title: "Tejeduria del pueblo indigena Wayuu",
    institution: "Artesanias de Colombia",
    url: "https://artesaniasdecolombia.com.co/Documentos/Contenido/29783_tejeduria_del_pueblo_indigena_wayuu.pdf",
    supports: [
      "manta como vestido tradicional de las mujeres Wayuu",
      "diferencia entre manta tradicional lisa y desarrollos bordados o pintados posteriores",
      "waireñas como calzado de mujeres y hombres",
    ],
  },
  artesanias_comunidad_wayuu: {
    title: "Comunidad Wayuu",
    institution: "Artesanias de Colombia",
    url: "https://artesaniasdecolombia.com.co/PortalAC/C_sector/comunidad-wayu_201",
    supports: [
      "siira como faja del guayuco masculino",
      "mochilas diferenciadas por uso y no como adorno universal",
      "sheii como manta funeraria y no vestuario cotidiano",
    ],
  },
  artesanias_womu_wayuu: {
    title: "Un accesorio tradicional: Womu Wayuu",
    institution: "Artesanias de Colombia",
    url: "https://www.artesaniasdecolombia.com.co/PortalAC/Noticia/con-artesanias-celebra-ser-colombiano_5372",
    supports: [
      "womu como sombrero tradicional usado por mujeres y hombres",
      "fibra de isi y antecedentes cromaticos naturales",
    ],
  },
  artesanias_legados_ancestrales: {
    title: "Legados ancestrales",
    institution: "Artesanias de Colombia",
    url: "https://www.artesaniasdecolombia.com.co/PortalAC/Movil/Publicacion.jsf?contenidoId=11567",
    supports: [
      "pintura facial en mujeres y hombres Wayuu",
      "pigmentos de origen vegetal, animal o mineral",
      "formas ligadas a contextos culturales y no decoracion libre",
    ],
  },
  icanh_aspectos_magia_guajira: {
    title: "Aspectos de la magia en la Guajira",
    institution: "Instituto Colombiano de Antropologia e Historia",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1",
    supports: [
      "paipai o achiote mezclado con grasa como proteccion del rostro frente al sol",
      "pintura facial para viaje o visita",
      "uso funerario historicamente documentado que no debe trasladarse a escenas ordinarias",
      "paginas 78-86: wanuru y yoruja en relacion con muerte, sueño, casas desocupadas, ruidos y el muerto que deshace sus pasos",
      "paginas 101-102: calaveras de caballo colocadas junto a viviendas contra wanuru como practica explicitamente postcontacto",
      "paginas 144-149: guanuru menor o intermediario, wanuru y yoruja como nombres historicamente confundidos y no como una jerarquia demonologica estable",
      "mariposa nocturna blanca de tamaño mediano como visita atribuida a wanuru o a un pariente muerto, no como forma canonica de Guanuru",
    ],
    caution: "Fuente etnografica historica mediada por vocabulario evolucionista y comparaciones cristianas de su epoca. Se usa como evidencia contextual y se conservan sus contradicciones: no es fotografia atemporal de toda persona Wayuu, no autoriza una taxonomia cerrada de espiritus y no convierte la mariposa blanca en Guanuru.",
  },
  minenergia_abc_relacionamiento_wayuu_2016: {
    title: "ABC de relacionamiento del pueblo Wayuu y el sector minero-energetico",
    institution: "Ministerio de Minas y Energia de Colombia y mesas de trabajo Wayuu",
    url: "https://repositoriobi.minenergia.gov.co/bitstream/handle/123456789/2846/13.%20ABC%20de%20relacionamiento%20del%20pueblo%20Wayuu%20y%20el%20sector%20minero-energe%CC%81tico.pdf?isAllowed=y&sequence=1",
    supports: [
      "conjunto masculino con siira/wayuco, camisa de manga larga, guaireñas y sombrero",
      "diferencia entre ropa domestica y ropa para eventos en el caso femenino",
      "evidencia construida con mesas de trabajo comunitarias, incluida Pitulumana en 2015",
    ],
  },
  banrep_moser_hombres_wayuu_1961: {
    title: "Hombres wayuu trabajando",
    institution: "Biblioteca Virtual del Banco de la Republica",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll35/id/181/",
    supports: [
      "fotografia fechada en 1961 de hombres Wayuu trabajando con prendas occidentales",
      "incorporacion de camisillas, camisas y gorras sin borrar la continuidad Wayuu",
      "siira, pequeña bolsa woolu y sandalias como componentes compatibles del conjunto",
    ],
    caution: "Registro fotografico situado en 1961; no se extrapola como uniforme ancestral ni contemporaneo universal.",
  },
  icanh_organizacion_social_guajira_1950: {
    title: "Organizacion social en la Guajira: estudio etnografico",
    institution: "Instituto Etnologico Nacional, edicion digital ICANH",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/249/273/1635?inline=1",
    supports: [
      "uso historicamente documentado de camisa o camiseta sin abandonar el guayuco",
      "guayuco como prenda de identidad y no como conjunto masculino completo por si solo",
      "cambio cultural y combinacion de prendas como parte de una historia situada",
    ],
    caution: "Etnografia publicada en 1950 sobre trabajo de mediados del siglo XX; conserva lenguaje y sesgos de su epoca.",
  },
  banrep_wale_keru_1995: {
    title: "Wale Keru",
    institution: "Artesanias de Colombia, registro de la Biblioteca Virtual del Banco de la Republica",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2758/",
    supports: [
      "siiira como faja masculina",
      "Püna'a süma wüsii como vestido de niña",
      "wayuushein como manta de mujer",
      "sheii como manta funeraria, que no debe confundirse automaticamente con ropa masculina cotidiana",
    ],
  },
  paz_ipuana_waleker_1973: {
    title: "Mitos, leyendas y cuentos guajiros - Wokoloonat / Waleker",
    institution: "Ramón Paz Ipuana; Instituto Agrario Nacional",
    url: "https://books.google.com/books/about/Mitos_legendas_y_cuentos_guajiros.html?id=CXhsAAAAMAAJ",
    supports: [
      "Irunúu como cazador y cuidador de Wokoloonat, equipado con armas de caza, tapara y Japükiitü'u o protector de muñeca",
      "Wokoloonat como niña y luego majayüt o joven tejedora nocturna, siempre traducida con ropa completa y sin reproducir pasajes sexualizados",
      "conjunto masculino tejido para Irunúu que nombra Aanaláa, ruana, She'e, Sii'ira, Aichee, Woolu, pañolón, Molono y Tolooma",
      "Uyaaliwa u Outshi como especialista mayor, Tool como anciana trabajadora de algodón, las tres hermanas de Irunúu, Kulami'a y los servidores de Wanurü como personajes distintos",
      "Atia o Attia, Kanaspi, Maawüi y Sese como predecesores o maestras materiales del color, las flores, el algodón y el hilo",
      "Isashii, Suumain Yolujaa, el tejido nocturno, el sueño del chinchorro, las transformaciones de las hermanas y Tool, el jirón de telaraña y el destino estelar de Irunúu",
    ],
    caution: "Edición literaria de tradición oral con vocabulario y mediación de su época. Se conserva la secuencia y el repertorio nombrado, pero no se reproducen maltrato, sexualización, embriaguez, violencia ni se convierten prendas de prestigio en uniforme Wayuu universal.",
  },
  icanh_hilos_desierto_2017: {
    title: "Hilos en el desierto: el tejido y la transmisión entre mujeres Wayuu",
    institution: "Instituto Colombiano de Antropología e Historia",
    url: "https://colecciones.icanh.gov.co/articulos/mujeresWayuu.php",
    supports: [
      "Walé'kerü como referente de fajas y chinchorros y los caminitos que orientan diseños",
      "aprendizaje transmitido por madres y mujeres de la familia materna mediante telar y huso",
      "perfeccionamiento técnico y simbólico durante el encierro de las jóvenes",
      "introducción histórica del crochet por misiones a comienzos del siglo XX, que no debe proyectarse al tiempo mítico",
    ],
    caution: "La continuidad contemporánea no autoriza copiar kanas, motivos familiares o diseños comerciales. El modelo muestra técnicas, herramientas y transmisión sin apropiarse de patrones específicos.",
  },
  paz_ipuana_aleya_tomo_ii_2016: {
    title: "Ale'eya - Tomo II: Conceptos y descripciones de la cultura Wayuu",
    institution: "Ramon Paz Ipuana, Fondo Editorial Wayuu Araurayu",
    url: "https://kimera.com/data/redlocal/ver_demos/RLWAYUU/VERSION/RECURSOS/CONTENIDO%20WAYUU/CULTURA%20WAYUU/RELATOS/TEXTO/ALE%20EYA%20WAYUU%20Tomo%20II.pdf",
    supports: [
      "repertorio masculino diferenciado por edad, rango, actividad y ocasion en la seccion Como visten los Wayuu, paginas 114-119",
      "Wusi o Aichee con variantes de trabajo, recepcion, paseo y lujo; la prenda base no equivale por si sola a un conjunto masculino universal",
      "la lista inicial usa She'ewe y el desarrollo usa She'etebe para una manta masculina holgada de una pieza que cubre gran parte del cuerpo; se conservan ambas grafias sin fingir una equivalencia ortografica resuelta",
      "Kotin como manta amplia mas liviana y menos colorida que She'etebe, no como una pieza inferior aislada",
      "Asheinpalajanaa como manta masculina cuadrada arrollada y ceñida para fiesta, viaje o paseo",
      "Kemiisa o camisa, Piiraneeru o franela y saco como incorporaciones historicas que conviven con prendas Wayuu",
      "S'ira, Kumusu o A'amuushi, Wo'olii, Asapatshee, Ekiialiiijaa y Wom o Woma como fajas, bolsa, calzado, panuelo y sombrero diferenciados",
      "Kotsii, Karatse y Tolooma como adornos de cabeza ligados a fiesta, yonna, prestigio o carrera, no a la vida cotidiana universal",
      "dos conjuntos masculinos formales descritos como sistemas completos: sombrero, saco, manta envolvente hasta las rodillas, faja y calzado; o Tolooma, She'ewe de hombros a rodillas, faja y abarcas",
    ],
    caution: "La obra conserva voces y categorias de un autor Wayuu, pero tambien clasificaciones historicas de rango y pobreza. No se asigna jerarquia social a un personaje mitico por su ropa, no se extrapola ninguna pieza como traje prehispanico o universal y no se resuelve por intuicion la diferencia entre She'ewe, She'etebe, She'i y She'ii.",
  },
  cinep_lo_que_somos_wayuu_2015: {
    title: "Lo que somos, lo que sonamos: narraciones de mis abuelos sobre la cultura Wayuu",
    institution: "CINEP/PPP, construido con entrevistas en el Resguardo Provincial",
    url: "https://kimera.com/data/redlocal/ver_demos/RLWAYUU/VERSION/RECURSOS/CONTENIDO%20WAYUU/CULTURA%20WAYUU/RELATOS/TEXTO/narraciones%20cultura%20wayuu.pdf",
    supports: [
      "kamisaa, gorras y sombrero Wayuu en combinaciones masculinas contemporaneas situadas",
      "susu cotidiana y susuchon o woot como cargas funcionales, no adornos universales",
      "kousu y waireñas como calzado con construcciones y usos diferenciados",
      "conjunto de yonna narrado desde entrevistas comunitarias, separado de la ropa cotidiana",
    ],
    caution: "El cuaderno recoge una comunidad y un momento concretos; no convierte sus combinaciones en norma para toda la peninsula.",
  },
  serrano_outsu_flacso_2020: {
    title: "Curaciones Wayuu en contextos rituales: la practica de la outsu en La Guajira, Colombia",
    institution: "Silvia Rubiela Serrano Lopez, antropologa Wayuu, FLACSO Ecuador",
    url: "https://repositorio.flacsoandes.edu.ec/bitstreams/81cf1e67-f2e5-445b-b923-6f2129b7dda6/download",
    supports: [
      "outsu como mujer curadora y autoridad espiritual en una practica relacional, no hechicera generica",
      "mmolona o cintillo rojo y tela roja como proteccion en rituales documentados",
      "una prenda blanca larga distinta de la manta cotidiana en un ritual de proteccion observado",
      "variaciones de color y vestuario durante la preparacion e iniciacion de una outsu",
    ],
    caution: "Etnografia situada en Wararalain y en rituales concretos. No autoriza reconstruir una coreografia, generalizar el rojo ni trasladar prendas de curacion a un canto de lluvia.",
  },
  jangwa_outsu_outshi_2021: {
    title: "La outsu y el outshi: especialistas de la curacion Wayuu",
    institution: "Jangwa Pana, Universidad del Magdalena",
    url: "https://redalyc.org/journal/5880/588069242003/",
    supports: [
      "outsu como denominacion femenina y outshi como denominacion masculina",
      "existencia reconocida de especialistas mujeres y hombres, con mayor presencia documentada de mujeres",
      "autoridad fundada en conocimiento y relaciones espirituales, no en disfraz exotico",
    ],
    caution: "La fuente respalda genero y funcion general, pero no afirma que una ceremonia de lluvia reuna necesariamente un grupo mixto ni fija su vestuario exacto.",
  },
  mincultura_cuadernillo_wayuu: {
    title: "La palabra y el vivir Wayuu",
    institution: "Ministerio de Cultura de Colombia",
    url: "https://patrimonio.mincultura.gov.co/Documents/cuadernillo_wayuu_EF_V2.pdf",
    supports: [
      "advertencia contra reducir la cultura Wayuu a textiles vistosos, rancherias, pintura y exotismo paisajistico",
      "prioridad de la palabra, la ley, los vinculos familiares y la vida social para comprender los elementos visibles",
    ],
  },
};

/**
 * Repertorio tipologico, no catalogo de disfraces.
 *
 * `coverage_role` permite comprobar algo que antes quedaba solo en prosa: el
 * Wusi/Aichee puede formar parte del conjunto masculino, pero no puede volver
 * a ser la unica respuesta visual para un hombre Wayuu.
 */
export const WAYUU_WARDROBE_REPERTOIRE_V3 = {
  wusi_aichee: {
    label: "Wusi o Aichee, wayuco/guayuco",
    wearer_scope: ["male", "child_male"],
    coverage_role: "base_partial",
    occasions: ["daily_work", "travel", "visit_or_exchange", "yonna_festive", "leadership_or_formal"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "mincultura_caracterizacion_wayuu"],
    caution: "Base de cobertura con variantes por trabajo y posicion; desde el lote 15 no satisface por si sola un conjunto masculino completo.",
    visual_signature: "base inferior secundaria sostenida por la faja; nunca domina la silueta ni sustituye la capa superior, la manta o la envolvente elegida",
  },
  sira_kumusu_aamuushi: {
    label: "S'ira, Kumusu o A'amuushi, faja con borlas segun tipo",
    wearer_scope: ["male", "child_male"],
    coverage_role: "waist_support",
    occasions: ["daily_work", "travel", "visit_or_exchange", "yonna_festive", "leadership_or_formal"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "artesanias_comunidad_wayuu"],
    caution: "No inventar kana, color, ancho, borla ni rango economico para una persona concreta.",
  },
  she_etebe_sheewe: {
    label: "She'etebe / She'ewe, manta masculina de una pieza",
    wearer_scope: ["male"],
    coverage_role: "full_body_layer",
    occasions: ["visit_or_exchange", "leadership_or_formal", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "La forma detallada se asocia a rango en la fuente; no es uniforme ancestral ni sinonimo de She'i o She'ii funeraria.",
    visual_signature: "manta masculina holgada de una pieza, con cabeza y un brazo pasando por aberturas propias, gran paño abierto al costado y cobertura dominante desde hombros hacia las rodillas",
  },
  kotin_male_manta: {
    label: "Kotin, manta masculina amplia y liviana",
    wearer_scope: ["male"],
    coverage_role: "full_body_layer",
    occasions: ["travel", "visit_or_exchange", "leadership_or_formal", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "La fuente la diferencia por rango, peso y colorido; la Biblia solo la usa como traduccion reversible con ocasion declarada.",
    visual_signature: "manta amplia y liviana que se lee sobre el cuerpo como capa principal; no falda corta, no poncho andino y no simple paño de cintura",
  },
  asheinpalajanaa_male_wrap: {
    label: "Asheinpalajanaa, manta masculina cuadrada arrollada",
    wearer_scope: ["male"],
    coverage_role: "substantial_wrap_layer",
    occasions: ["travel", "visit_or_exchange", "yonna_festive"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "Limitada en la fuente a fiesta, viaje o paseo; no se convierte en falda, poncho o ropa domestica universal.",
    visual_signature: "paño cuadrado arrollado alrededor de la cintura, con extremos inferiores recogidos y volumen posterior colgante; debe conservar lectura de manta envolvente y no reducirse a una tira estrecha",
  },
  kemiisa_piiraneeru: {
    label: "Kemiisa o Piiraneeru, camisa o franela",
    wearer_scope: ["male", "child_male"],
    coverage_role: "upper_body_layer",
    occasions: ["domestic_daily", "daily_work", "travel", "visit_or_exchange", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "icanh_organizacion_social_guajira_1950", "cinep_lo_que_somos_wayuu_2015"],
    caution: "Incorporacion postcontacto documentada. Usarla no borra identidad, pero exige declarar que no es reconstruccion prehispanica.",
    visual_signature: "capa superior claramente visible que cubre torso y hombros, con mangas y borde inferior legibles por separado de la faja y de la prenda base",
  },
  saco_male_layer: {
    label: "Saco o chaqueta gruesa combinada con prendas Wayuu",
    wearer_scope: ["male"],
    coverage_role: "upper_body_layer",
    occasions: ["daily_work", "travel", "visit_or_exchange", "leadership_or_formal"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "Uso historico para abrigo, sol, insectos o presentacion; no se proyecta automaticamente a un tiempo mitico.",
    visual_signature: "chaqueta o saco de tela gruesa como volumen superior inequívoco, combinado con el resto del conjunto y nunca usado como disfraz colonial generico",
  },
  woolii_waist_bag: {
    label: "Wo'olii, bolsa pequena de cintura",
    wearer_scope: ["male"],
    coverage_role: "functional_load",
    occasions: ["daily_work", "travel", "visit_or_exchange"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "banrep_moser_hombres_wayuu_1961"],
    caution: "Carga funcional para objetos pequenos, no mochila turistica decorativa.",
  },
  kapateera_travel_bag: {
    label: "Kapateera, bolsa tubular masculina de viaje",
    wearer_scope: ["male"],
    coverage_role: "functional_load",
    occasions: ["travel"],
    source_refs: ["artesanias_tejeduria_wayuu_2016"],
    caution: "Solo para viaje o transporte; no debe aparecer cruzada durante toda labor o ceremonia.",
  },
  asapatshee_koisuuttu_kuttiira: {
    label: "Asapatshee: sandalias o abarcas de cuero segun tipo",
    wearer_scope: ["male", "female", "child_male", "child_female"],
    coverage_role: "footwear",
    occasions: ["daily_work", "travel", "visit_or_exchange", "leadership_or_formal", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "No confundir automaticamente con la waireña contemporanea de suela de caucho.",
  },
  wairenas: {
    label: "Waireñas, calzado Wayuu de mujeres y hombres",
    wearer_scope: ["male", "female", "child_male", "child_female"],
    coverage_role: "footwear",
    occasions: ["daily_work", "travel", "visit_or_exchange", "yonna_festive", "leadership_or_formal", "mixed_narrative"],
    source_refs: ["artesanias_tejeduria_wayuu_2016", "mincultura_caracterizacion_wayuu"],
    caution: "La construccion actual documentada usa caucho de llanta; no se presenta como arqueologia de un tiempo mitico.",
  },
  punaa_wusii_girl_dress: {
    label: "Püna'a süma wüsii, vestido completo de niña",
    wearer_scope: ["child_female"],
    coverage_role: "full_body_layer",
    occasions: ["domestic_daily", "daily_work", "travel", "mixed_narrative"],
    source_refs: ["banrep_wale_keru_1995"],
    caution: "Se usa como categoría de vestido infantil documentada, sin inventar corte fino, bordado, kana, color ritual o rango familiar.",
    visual_signature: "vestido infantil largo y holgado que cubre hombros, torso y piernas como silueta dominante; no camisón roto, túnica corta ni versión miniaturizada sensualizada de la manta adulta",
  },
  aanalaa_male_mantle: {
    label: "Aanaláa, manto masculino nombrado en el ciclo de Waleker",
    wearer_scope: ["male"],
    coverage_role: "full_body_layer",
    occasions: ["leadership_or_formal", "mixed_narrative"],
    source_refs: ["paz_ipuana_waleker_1973"],
    caution: "Su presencia está documentada en el conjunto tejido para Irunúu, pero la fuente accesible no permite fijar patronaje, kana o color exacto; la construcción visual queda sobria y reversible.",
    visual_signature: "gran manto exterior de cuerpo completo, claramente separado de la prenda base y de la faja, con caída amplia desde hombros y espalda; no capa europea, poncho andino ni paño de cintura",
  },
  ekiialiiijaa_head_or_waist_cloth: {
    label: "Ekiialiiijaa, panuelo de cabeza o cintura",
    wearer_scope: ["male"],
    coverage_role: "head_or_waist",
    occasions: ["daily_work", "travel", "visit_or_exchange"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "No convertirlo en cintillo ritual ni asignarle motivo sin fuente.",
  },
  wom_woma_hat: {
    label: "Wom o Woma / womu, sombrero",
    wearer_scope: ["male", "female"],
    coverage_role: "headwear",
    occasions: ["daily_work", "travel", "visit_or_exchange", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "artesanias_womu_wayuu"],
    caution: "Sombrero funcional y contextual; nunca sombrero vueltiao, corona generica o accesorio obligatorio.",
  },
  kotsii_festive_headpiece: {
    label: "Kotsii, casquete tejido para baile o fiesta",
    wearer_scope: ["male"],
    coverage_role: "ceremonial_headwear",
    occasions: ["yonna_festive", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "finol_ulepala_sibotta_paz_2007"],
    caution: "No trasladar a trabajo, viaje ordinario, caza o identidad general. El uso fuera de yonna queda limitado a la apariencia colectiva nombrada en Ulepala.",
  },
  karatse_yonna_headpiece: {
    label: "Karatse, adorno masculino de yonna",
    wearer_scope: ["male"],
    coverage_role: "ceremonial_headwear",
    occasions: ["yonna_festive"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "mincultura_caracterizacion_wayuu"],
    caution: "La documentacion incluye plumas para este adorno especifico; eso no autoriza tocados de plumas panindigenas fuera de la yonna.",
  },
  tolooma_prestige_race_headpiece: {
    label: "Tolooma, gorro multicolor de prestigio o carrera",
    wearer_scope: ["male"],
    coverage_role: "ceremonial_headwear",
    occasions: ["leadership_or_formal", "mixed_narrative"],
    source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
    caution: "Restringido a personas prestigiosas o carreras en la fuente; no se usa para embellecer a cualquier heroe.",
  },
  molono_ulepala_headpiece: {
    label: "Molono, gorro nombrado en la apariencia juvenil de Ulépala",
    wearer_scope: ["male"],
    coverage_role: "ceremonial_headwear",
    occasions: ["mixed_narrative"],
    source_refs: ["finol_ulepala_sibotta_paz_2007"],
    caution: "Uso excepcional y exclusivo de la apariencia juvenil descrita por el relato. No se equipara automaticamente con el mmolona de la outsü contemporanea, no se vuelve sombrero cotidiano y no se inventan color, simbolo o autoridad.",
    visual_signature: "gorro tejido sobrio tipo bonete, subordinado al She'ebe y al Kotsu en la lectura colectiva; sin emblema, borlas o motivos no descritos",
  },
  wayuushein_manta: {
    label: "Wayuushein/ashein, manta femenina larga y con mangas",
    wearer_scope: ["female"],
    coverage_role: "full_body_layer",
    occasions: ["domestic_daily", "daily_work", "travel", "visit_or_exchange", "yonna_festive", "leadership_or_formal", "mixed_narrative"],
    source_refs: ["artesanias_tejeduria_wayuu_2016", "cinep_lo_que_somos_wayuu_2015", "mincultura_caracterizacion_wayuu"],
    caution: "La manta tradicional lisa se distingue de bordados y pinturas posteriores; no inventar kana ni abertura sensualizada.",
  },
  pechera_female_underlayer: {
    label: "Pechera o capa interior femenina",
    wearer_scope: ["female", "child_female"],
    coverage_role: "base_underlayer",
    occasions: ["domestic_daily", "daily_work", "travel", "visit_or_exchange", "yonna_festive", "mixed_narrative"],
    source_refs: ["artesanias_tejeduria_wayuu_2016"],
    caution: "Capa interior sobria; no se convierte en corseteria ni enfatiza el cuerpo.",
  },
};

export const WAYUU_MATERIAL_CULTURE_PROTOCOL_V3 = {
  schema: "mitos-colombia-wayuu-material-culture/v3",
  status: "approved_for_future_batches",
  approved_at: "2026-09-04",
  approved_by: "Propietario editorial del proyecto",
  effective_from_production_batch: 8,
  collective_wardrobe_from_production_batch: 10,
  repertoire_gate_from_production_batch: 15,
  silhouette_gate_from_production_batch: 17,
  prior_assets_policy: "Los 60 modelos aceptados de piloto y lotes 01-07 no se rehacen; la compuerta es prospectiva.",
  objective: "Recuperar especificidad cultural visible mediante conjuntos situados, sin convertirla en uniforme generico, desnudez por defecto, disfraz folclorico ni iconografia inventada.",
  required_dimensions: [
    "attire",
    "footwear",
    "accessories",
    "face_paint",
  ],
  decision_values: [
    "include_documented",
    "include_contextual",
    "omit_contextually",
    "unresolved_blocking",
  ],
  evidence_values: [
    "myth_explicit",
    "source_specific",
    "institutional_general",
    "editorial_reversible",
  ],
  temporal_registers: [
    "mythic_indeterminate",
    "ancestral_indeterminate",
    "historic_contact",
    "historic_postcontact_indeterminate",
    "twentieth_century",
    "contemporary",
  ],
  occasion_contexts: [
    "domestic_daily",
    "daily_work",
    "travel",
    "visit_or_exchange",
    "yonna_festive",
    "ritual_healing",
    "ritual_weather_or_ecological",
    "funerary",
    "leadership_or_formal",
    "mixed_narrative",
  ],
  rules: [
    "El tiempo mitico indeterminado no se presenta como reconstruccion prehispanica: cuando el relato no describe ropa exacta, el conjunto se declara traduccion editorial reversible apoyada en repertorios Wayuu documentados.",
    "Resolver cada personaje y cada estado por separado; no existe un atuendo Wayuu universal.",
    "Diseñar conjuntos completos y estratificados, no listas de prendas aisladas: base corporal, capa superior, faja, calzado, cabeza y carga deben leerse en relacion.",
    "Comparar al menos dos conjuntos respaldados antes de elegir; la opcion seleccionada responde al tiempo, actividad, ocasion, edad y posicion narrativa.",
    "La presencia de rifle, telas comerciales, viaje a centros, comercio u otros marcadores de contacto impide fingir una escena precontacto sin evidencia.",
    "Camisa, camiseta, camisilla, gorra o pantalon pueden coexistir historicamente con elementos Wayuu; incorporarlos no borra identidad ni equivale a ropa neutra.",
    "Torso descubierto con wayuco es una opcion contextual, no el valor predeterminado para todo hombre Wayuu ni una medida de autenticidad.",
    "En colectivos humanos, la pertenencia Wayuu no se expresa repitiendo un uniforme: edad, rol, actividad, rango, temporalidad y ocasion deben producir conjuntos legiblemente distintos.",
    "She'etebe, Kotin, Asheinpalajanaa, camisa, franela, saco, manta larga de anciano, sombrero, Kotsi, Kuratse y Tekialijiu amplian el repertorio masculino, pero cada uno conserva su contexto documentado.",
    "Desde el lote 15 toda figura humana declara un perfil y referencias al repertorio tipologico; un perfil masculino exige una capa superior, envolvente sustancial o de cuerpo entero ademas del Wusi/Aichee y la faja.",
    "Desde el lote 17 la seleccion de prendas no basta: cada figura Wayuu declara una silueta dominante y como deben leerse frente, perfil y espalda. Si la capa superior, manta o envolvente desaparece visualmente, la imagen se rechaza aunque el prompt la haya nombrado.",
    "Los prompts no repiten taparrabo o loincloth como ancla negativa. La silueta se describe desde la prenda dominante y la pieza inferior queda como base secundaria cuando corresponda.",
    "No maximizar tradicionalidad acumulando prendas y accesorios: escoger un conjunto plausible y funcional, con ausencias justificadas.",
    "Diferenciar indumentaria tradicional, variaciones contemporaneas y decisiones editoriales reversibles.",
    "La manta femenina, el wayuco con siira masculino, las waireñas y el womu son opciones documentadas, no accesorios obligatorios en toda escena.",
    "La pintura facial solo aparece cuando el relato o la investigacion sostienen persona, ocasion y funcion.",
    "Un motivo facial con significado solo puede usarse si la fuente respalda su forma y contexto exactos; de lo contrario se omite el motivo, no se improvisa.",
    "Paipai protector, pintura de celebracion, pintura de visita y pintura ritual no son intercambiables.",
    "Kanas, marcas claniles, coronas, joyas y patrones textiles no se agregan para aumentar exotismo.",
    "Karatse y desnudez de torso asociados a la yonna no se trasladan a trabajo, viaje o vida cotidiana solo porque resulten visualmente reconocibles.",
    "La similitud entre Sheii funeraria en Wale Keru y She'i, She'etebe u otras mantas masculinas descritas por Paz Ipuana no autoriza fusionarlas: se conservan grafia, fuente, construccion, usuario y ocasion por separado.",
    "Vestuario, pintura y accesorios aprobados pasan al ledger de continuidad del personaje y deben repetirse solo en estados compatibles.",
  ],
  qa_questions: [
    "Se reconoce una decision de indumentaria culturalmente situada y no ropa neutra por defecto?",
    "La edad, genero, rol, accion, clima y momento narrativo justifican cada prenda y accesorio?",
    "Se compararon conjuntos completos y se explico por que el elegido encaja mejor que las alternativas?",
    "Se evito usar torso descubierto o wayuco aislado como atajo visual de autenticidad?",
    "La prenda dominante del conjunto se ve realmente en frente, perfil y espalda, o el generador la colapso en una sola pieza inferior?",
    "Si es un colectivo, hay variedad legible de conjuntos completos y ningun uniforme de taparrabo repetido?",
    "Si el relato contiene marcadores postcontacto, el vestuario reconoce esa historia sin blanquear ni folclorizar?",
    "Si hay pintura facial, conocemos su funcion, material, ocasion y fuente?",
    "Se evito copiar un patron sin permiso o inventar un simbolo con supuesto significado?",
    "La indumentaria y pintura se mantienen entre vistas del mismo estado sin uniformar a personajes distintos?",
  ],
  sources: WAYUU_MATERIAL_CULTURE_SOURCES_V3,
  wardrobe_repertoire: WAYUU_WARDROBE_REPERTOIRE_V3,
};

const HUMAN_ENTITY_KINDS = new Set(["personaje", "colectivo"]);
const DECISIONS = new Set(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.decision_values);
const EVIDENCE = new Set(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.evidence_values);
const TEMPORAL_REGISTERS = new Set(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.temporal_registers);
const OCCASION_CONTEXTS = new Set(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.occasion_contexts);
const WARDROBE_PROFILES = new Set(["male", "female", "mixed_collective", "child_male", "child_female", "unspecified"]);
const CULTURAL_SCOPES = new Set([
  "wayuu",
  "non_wayuu_alijuna",
  "kusina_identity_unresolved",
  "regional_indigenous_unresolved",
  "mixed",
]);
const SUBSTANTIAL_MALE_COVERAGE = new Set(["upper_body_layer", "full_body_layer", "substantial_wrap_layer"]);
const WARDROBE_VISUAL_CONTRACT_FIELDS = ["dominant_silhouette", "front_read", "side_or_back_read", "anti_collapse_rule"];

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function productionBatchNumber(batchId) {
  const match = String(batchId || "").match(/production-(\d{2})-/);
  return match ? Number(match[1]) : null;
}

export function requiresWayuuMaterialCultureDecision(entity, batchId, direction) {
  const batchNumber = productionBatchNumber(batchId);
  return batchNumber !== null
    && batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.effective_from_production_batch
    && (HUMAN_ENTITY_KINDS.has(entity?.kind) || direction?.human_presenting === true);
}

export function validateWayuuMaterialCultureDecision(decision, { modelId = "modelo", entity, batchId, direction } = {}) {
  if (!requiresWayuuMaterialCultureDecision(entity, batchId, direction)) return [];
  const errors = [];
  const prefix = `${modelId}.material_culture`;
  if (!decision || typeof decision !== "object" || Array.isArray(decision)) {
    return [`${prefix}: falta la pasada obligatoria de cultura material`];
  }
  const culturalScope = decision.cultural_scope || "wayuu";
  if (!CULTURAL_SCOPES.has(culturalScope)) {
    errors.push(`${prefix}.cultural_scope: valor invalido`);
  }
  for (const field of ["person_scope", "time_basis", "narrative_moment", "activity_context"]) {
    if (!hasText(decision[field])) errors.push(`${prefix}.${field}: debe ser texto no vacio`);
  }
  if (!TEMPORAL_REGISTERS.has(decision.temporal_register)) {
    errors.push(`${prefix}.temporal_register: valor invalido`);
  }
  if (!OCCASION_CONTEXTS.has(decision.occasion_context)) {
    errors.push(`${prefix}.occasion_context: valor invalido`);
  }
  if (!Array.isArray(decision.considered_ensembles) || decision.considered_ensembles.length < 2) {
    errors.push(`${prefix}.considered_ensembles: exige al menos dos conjuntos plausibles comparados`);
  } else {
    const ids = new Set();
    for (const [index, ensemble] of decision.considered_ensembles.entries()) {
      const ensemblePrefix = `${prefix}.considered_ensembles.${index}`;
      for (const field of ["id", "label", "fit", "rationale"]) {
        if (!hasText(ensemble?.[field])) errors.push(`${ensemblePrefix}.${field}: debe ser texto no vacio`);
      }
      if (hasText(ensemble?.id)) ids.add(ensemble.id);
      if (!Array.isArray(ensemble?.source_refs) || ensemble.source_refs.length < 1) {
        errors.push(`${ensemblePrefix}.source_refs: exige respaldo registrado`);
      }
    }
    if (!decision.chosen_ensemble || typeof decision.chosen_ensemble !== "object" || Array.isArray(decision.chosen_ensemble)) {
      errors.push(`${prefix}.chosen_ensemble: falta el conjunto elegido`);
    } else {
      if (!ids.has(decision.chosen_ensemble.id)) errors.push(`${prefix}.chosen_ensemble.id: debe corresponder a un conjunto considerado`);
      for (const field of ["rationale", "specification"]) {
        if (!hasText(decision.chosen_ensemble[field])) errors.push(`${prefix}.chosen_ensemble.${field}: debe ser texto no vacio`);
      }
      if (!Array.isArray(decision.chosen_ensemble.layers) || decision.chosen_ensemble.layers.length < 2 || decision.chosen_ensemble.layers.some((layer) => !hasText(layer))) {
        errors.push(`${prefix}.chosen_ensemble.layers: exige al menos dos capas o componentes legibles`);
      }
    }
  }
  for (const dimension of WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.required_dimensions) {
    const item = decision[dimension];
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      errors.push(`${prefix}.${dimension}: falta decision explicita`);
      continue;
    }
    if (!DECISIONS.has(item.decision)) errors.push(`${prefix}.${dimension}.decision: valor invalido`);
    if (!EVIDENCE.has(item.evidence)) errors.push(`${prefix}.${dimension}.evidence: valor invalido`);
    if (!hasText(item.rationale)) errors.push(`${prefix}.${dimension}.rationale: debe explicar persona, momento y funcion`);
    if (hasText(item.decision) && item.decision.startsWith("include_") && !hasText(item.specification)) {
      errors.push(`${prefix}.${dimension}.specification: una inclusion exige descripcion visual concreta`);
    }
  }
  if (!Array.isArray(decision.source_refs) || decision.source_refs.length < 1) {
    errors.push(`${prefix}.source_refs: exige al menos una fuente registrada`);
  } else {
    for (const sourceRef of decision.source_refs) {
      if (!Object.hasOwn(WAYUU_MATERIAL_CULTURE_SOURCES_V3, sourceRef)) {
        errors.push(`${prefix}.source_refs: fuente desconocida ${sourceRef}`);
      }
    }
  }
  for (const ensemble of decision.considered_ensembles || []) {
    for (const sourceRef of ensemble?.source_refs || []) {
      if (!Object.hasOwn(WAYUU_MATERIAL_CULTURE_SOURCES_V3, sourceRef)) {
        errors.push(`${prefix}.considered_ensembles: fuente desconocida ${sourceRef}`);
      }
    }
  }
  const batchNumber = productionBatchNumber(batchId);
  if (batchNumber !== null && batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.repertoire_gate_from_production_batch) {
    if (!WARDROBE_PROFILES.has(decision.wardrobe_profile)) {
      errors.push(`${prefix}.wardrobe_profile: perfil invalido o ausente desde el lote 15`);
    }
    if (culturalScope === "wayuu") {
      if (!Array.isArray(decision.wardrobe_refs) || decision.wardrobe_refs.length < 2) {
        errors.push(`${prefix}.wardrobe_refs: exige al menos dos componentes tipologicos Wayuu desde el lote 15`);
      } else {
        const repertoire = decision.wardrobe_refs.map((wardrobeRef) => WAYUU_WARDROBE_REPERTOIRE_V3[wardrobeRef]);
        for (const [index, wardrobeEntry] of repertoire.entries()) {
          if (!wardrobeEntry) errors.push(`${prefix}.wardrobe_refs.${index}: referencia desconocida ${decision.wardrobe_refs[index]}`);
        }
        if (["male", "child_male"].includes(decision.wardrobe_profile)
          && !repertoire.some((entry) => SUBSTANTIAL_MALE_COVERAGE.has(entry?.coverage_role))) {
          errors.push(`${prefix}.wardrobe_refs: Wusi/Aichee, faja y accesorios no bastan; el perfil masculino exige capa superior, envolvente sustancial o cuerpo entero`);
        }
        if (batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.silhouette_gate_from_production_batch) {
          if (decision.wardrobe_refs.length < 3) {
            errors.push(`${prefix}.wardrobe_refs: desde el lote 17 exige al menos tres componentes situados del conjunto, no una prenda emblematica aislada`);
          }
          for (const [index, wardrobeEntry] of repertoire.entries()) {
            if (!wardrobeEntry) continue;
            if (!["mixed_collective", "unspecified"].includes(decision.wardrobe_profile)
              && !wardrobeEntry.wearer_scope.includes(decision.wardrobe_profile)) {
              errors.push(`${prefix}.wardrobe_refs.${index}: ${decision.wardrobe_refs[index]} no corresponde al perfil ${decision.wardrobe_profile}`);
            }
            if (!wardrobeEntry.occasions.includes(decision.occasion_context)
              && !wardrobeEntry.occasions.includes("mixed_narrative")) {
              errors.push(`${prefix}.wardrobe_refs.${index}: ${decision.wardrobe_refs[index]} no esta respaldado para la ocasion ${decision.occasion_context}`);
            }
          }
          const visualContract = decision.wardrobe_visual_contract;
          if (!visualContract || typeof visualContract !== "object" || Array.isArray(visualContract)) {
            errors.push(`${prefix}.wardrobe_visual_contract: falta el contrato de silueta obligatorio desde el lote 17`);
          } else {
            for (const field of WARDROBE_VISUAL_CONTRACT_FIELDS) {
              if (!hasText(visualContract[field])) {
                errors.push(`${prefix}.wardrobe_visual_contract.${field}: debe ser texto no vacio`);
              }
            }
          }
        }
      }
    } else {
      if (!Array.isArray(decision.wardrobe_components) || decision.wardrobe_components.length < 3 || decision.wardrobe_components.some((item) => !hasText(item))) {
        errors.push(`${prefix}.wardrobe_components: un personaje no Wayuu exige al menos tres componentes historicos legibles y no puede validarse con el repertorio Wayuu`);
      }
      if (batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.silhouette_gate_from_production_batch) {
        const visualContract = decision.wardrobe_visual_contract;
        if (!visualContract || typeof visualContract !== "object" || Array.isArray(visualContract)) {
          errors.push(`${prefix}.wardrobe_visual_contract: falta el contrato de silueta obligatorio desde el lote 17`);
        } else {
          for (const field of WARDROBE_VISUAL_CONTRACT_FIELDS) {
            if (!hasText(visualContract[field])) {
              errors.push(`${prefix}.wardrobe_visual_contract.${field}: debe ser texto no vacio`);
            }
          }
        }
      }
    }
    if (Array.isArray(decision.chosen_ensemble?.layers) && decision.chosen_ensemble.layers.length < 3) {
      errors.push(`${prefix}.chosen_ensemble.layers: desde el lote 15 exige al menos tres componentes legibles del conjunto completo`);
    }
  }
  if (!Array.isArray(decision.continuity_markers) || decision.continuity_markers.length < 1) {
    errors.push(`${prefix}.continuity_markers: exige al menos un marcador verificable`);
  }
  if (entity?.kind === "colectivo" && batchNumber !== null && batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.collective_wardrobe_from_production_batch) {
    const collective = decision.collective_wardrobe;
    if (!collective || typeof collective !== "object" || Array.isArray(collective)) {
      errors.push(`${prefix}.collective_wardrobe: falta el plan obligatorio de variacion interna`);
    } else {
      for (const field of ["variation_axis", "anti_uniformity_rule"]) {
        if (!hasText(collective[field])) errors.push(`${prefix}.collective_wardrobe.${field}: debe ser texto no vacio`);
      }
      if (!Array.isArray(collective.member_groups) || collective.member_groups.length < 2) {
        errors.push(`${prefix}.collective_wardrobe.member_groups: exige al menos dos grupos de vestuario`);
      } else {
        const ensembles = new Set();
        for (const [index, memberGroup] of collective.member_groups.entries()) {
          const memberPrefix = `${prefix}.collective_wardrobe.member_groups.${index}`;
          for (const field of ["id", "scope", "ensemble", "rationale"]) {
            if (!hasText(memberGroup?.[field])) errors.push(`${memberPrefix}.${field}: debe ser texto no vacio`);
          }
          if (hasText(memberGroup?.ensemble)) ensembles.add(memberGroup.ensemble.trim());
          if (!Array.isArray(memberGroup?.source_refs) || memberGroup.source_refs.length < 1) {
            errors.push(`${memberPrefix}.source_refs: exige respaldo registrado`);
          } else {
            for (const sourceRef of memberGroup.source_refs) {
              if (!Object.hasOwn(WAYUU_MATERIAL_CULTURE_SOURCES_V3, sourceRef)) {
                errors.push(`${memberPrefix}.source_refs: fuente desconocida ${sourceRef}`);
              }
            }
          }
          if (batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.repertoire_gate_from_production_batch && culturalScope === "wayuu") {
            if (!WARDROBE_PROFILES.has(memberGroup?.wardrobe_profile)) {
              errors.push(`${memberPrefix}.wardrobe_profile: perfil invalido o ausente desde el lote 15`);
            }
            if (!Array.isArray(memberGroup?.wardrobe_refs) || memberGroup.wardrobe_refs.length < 2) {
              errors.push(`${memberPrefix}.wardrobe_refs: exige al menos dos componentes tipologicos`);
            } else {
              const wardrobeEntries = memberGroup.wardrobe_refs.map((wardrobeRef) => WAYUU_WARDROBE_REPERTOIRE_V3[wardrobeRef]);
              for (const [wardrobeIndex, wardrobeEntry] of wardrobeEntries.entries()) {
                if (!wardrobeEntry) errors.push(`${memberPrefix}.wardrobe_refs.${wardrobeIndex}: referencia desconocida ${memberGroup.wardrobe_refs[wardrobeIndex]}`);
              }
              if (["male", "child_male"].includes(memberGroup.wardrobe_profile)
                && !wardrobeEntries.some((entry) => SUBSTANTIAL_MALE_COVERAGE.has(entry?.coverage_role))) {
                errors.push(`${memberPrefix}.wardrobe_refs: el grupo masculino no puede resolverse con Wusi/Aichee y accesorios solamente`);
              }
            }
          } else if (batchNumber >= WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.repertoire_gate_from_production_batch) {
            if (!WARDROBE_PROFILES.has(memberGroup?.wardrobe_profile)) {
              errors.push(`${memberPrefix}.wardrobe_profile: perfil invalido o ausente desde el lote 15`);
            }
            if (!Array.isArray(memberGroup?.wardrobe_components) || memberGroup.wardrobe_components.length < 3 || memberGroup.wardrobe_components.some((item) => !hasText(item))) {
              errors.push(`${memberPrefix}.wardrobe_components: un grupo no Wayuu exige al menos tres componentes propios y no referencias del repertorio Wayuu`);
            }
          }
        }
        if (ensembles.size < 2) errors.push(`${prefix}.collective_wardrobe.member_groups: no puede repetir un unico uniforme`);
      }
    }
  }
  if (decision.face_paint?.decision?.startsWith("include_") && decision.face_paint?.motif_policy !== "source_specific_only") {
    errors.push(`${prefix}.face_paint.motif_policy: debe ser source_specific_only`);
  }
  return errors;
}

export function materialCulturePromptLines(decision) {
  if (!decision) return [];
  const lines = [
    "MATERIAL CULTURE - REQUIRED AND CONTEXTUAL:",
    `- Person and moment: ${decision.person_scope}; ${decision.narrative_moment}.`,
    `- Time basis: ${decision.time_basis}. Temporal register: ${decision.temporal_register}.`,
    `- Activity and occasion: ${decision.activity_context}; ${decision.occasion_context}.`,
    `- Cultural scope: ${decision.cultural_scope || "wayuu"}; do not transfer one community's wardrobe repertoire to another identity.`,
    "- Ensembles considered:",
    ...decision.considered_ensembles.map((ensemble) => `  - ${ensemble.id}: ${ensemble.label}. Fit: ${ensemble.fit}. ${ensemble.rationale}.`),
    `- CHOSEN COMPLETE ENSEMBLE: ${decision.chosen_ensemble.specification}. Why: ${decision.chosen_ensemble.rationale}.`,
    `- Required readable layers/components: ${decision.chosen_ensemble.layers.join("; ")}.`,
  ];
  if (decision.wardrobe_profile) lines.push(`- Wardrobe profile: ${decision.wardrobe_profile}.`);
  if (Array.isArray(decision.wardrobe_refs)) {
    lines.push(`- Verified wardrobe repertoire: ${decision.wardrobe_refs.map((ref) => WAYUU_WARDROBE_REPERTOIRE_V3[ref]?.label || ref).join("; ")}.`);
    const visualSignatures = decision.wardrobe_refs
      .map((ref) => WAYUU_WARDROBE_REPERTOIRE_V3[ref]?.visual_signature)
      .filter(Boolean);
    if (visualSignatures.length) {
      lines.push(`- REQUIRED VISIBLE CONSTRUCTION: ${visualSignatures.join("; ")}.`);
    }
  }
  if (Array.isArray(decision.wardrobe_components)) {
    lines.push(`- Historically contextual wardrobe components: ${decision.wardrobe_components.join("; ")}.`);
  }
  if (decision.wardrobe_visual_contract) {
    lines.push(`- DOMINANT WARDROBE SILHOUETTE: ${decision.wardrobe_visual_contract.dominant_silhouette}.`);
    lines.push(`- FRONT READ: ${decision.wardrobe_visual_contract.front_read}.`);
    lines.push(`- SIDE/BACK READ: ${decision.wardrobe_visual_contract.side_or_back_read}.`);
    lines.push(`- REJECT IF COLLAPSED: ${decision.wardrobe_visual_contract.anti_collapse_rule}.`);
  }
  for (const dimension of WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.required_dimensions) {
    const item = decision[dimension];
    if (!item) continue;
    const specification = hasText(item.specification) ? ` Visual specification: ${item.specification}.` : "";
    lines.push(`- ${dimension}: ${item.decision}. ${item.rationale}.${specification}`);
  }
  lines.push(`- Continuity: ${decision.continuity_markers.join("; ")}.`);
  if (decision.collective_wardrobe) {
    lines.push(`- COLLECTIVE VARIATION AXIS: ${decision.collective_wardrobe.variation_axis}.`);
    lines.push(`- ANTI-UNIFORMITY RULE: ${decision.collective_wardrobe.anti_uniformity_rule}.`);
    lines.push("- Distinct member groups:");
    lines.push(...decision.collective_wardrobe.member_groups.map((memberGroup) => {
      const repertoire = Array.isArray(memberGroup.wardrobe_refs)
        ? ` Repertoire: ${memberGroup.wardrobe_refs.map((ref) => WAYUU_WARDROBE_REPERTOIRE_V3[ref]?.label || ref).join("; ")}.`
        : "";
      const components = Array.isArray(memberGroup.wardrobe_components)
        ? ` Components: ${memberGroup.wardrobe_components.join("; ")}.`
        : "";
      return `  - ${memberGroup.id} (${memberGroup.scope}): ${memberGroup.ensemble}. Why: ${memberGroup.rationale}.${repertoire}${components}`;
    }));
  }
  const culturalScope = decision.cultural_scope || "wayuu";
  if (culturalScope === "wayuu") {
    lines.push("- The selected complete outfit must define the silhouette. When a lower base garment is present, keep it visually secondary and make the selected shirt, mantle, substantial wrap or full-body layer unmistakable in every view.");
    lines.push("- Never invent facial motifs, kanas, clan marks or ceremonial attributes to make the person look more traditional.");
  } else if (culturalScope === "non_wayuu_alijuna") {
    lines.push("- This person is not Wayuu: do not add Wusi/Aichee, S'ira, Kemiisa, Kotin, manta, Womu, waireñas, kanas, clan marks or Wayuu facial paint.");
    lines.push("- Alijuna names an outsider relation, not a race, ethnicity, physiognomy or fixed costume; preserve the documented uncertainty.");
  } else if (culturalScope === "kusina_identity_unresolved") {
    lines.push("- Kusina/Kosina is historically and relationally ambiguous here: do not translate it as a personal name, a fixed ethnicity, a poverty costume or a synonym for Wayuu.");
    lines.push("- Do not add Wayuu-specific garment names, kanas, clan marks, ceremonial headwear or facial paint. The complete plain outfit is an explicit reversible editorial choice, not an ethnographic reconstruction.");
  } else if (culturalScope === "regional_indigenous_unresolved") {
    lines.push("- The source identifies this person only as Indigenous within the regional narrative; do not assign a people, clan, physiognomy or fixed traditional costume.");
    lines.push("- Do not transfer Wayuu-specific garment names, kanas, clan marks, ceremonial headwear or facial paint. Keep every complete outfit plain, individual and explicitly reversible.");
  } else {
    lines.push("- Mixed or unresolved identities must remain visibly distinct; do not collapse all people into one ethnic costume or uniform.");
  }
  return lines;
}

export function assertWayuuMaterialCultureCoverage({ batchId, modelId, entity, direction }) {
  const errors = validateWayuuMaterialCultureDecision(direction?.material_culture, { modelId, entity, batchId, direction });
  if (errors.length) throw new Error(`Compuerta de cultura material bloqueada:\n${errors.join("\n")}`);
}

export default WAYUU_MATERIAL_CULTURE_PROTOCOL_V3;
