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

export const cuycuyesSources = {
  cieza1553: source({
    title:
      "Parte primera de la Chrónica del Perú, capítulos XVIII–XIX: provincia de Arma",
    author: "Pedro de Cieza de León",
    year: 1553,
    type: "crónica colonial del siglo XVI",
    url: "https://www.memoriachilena.gob.cl/602/w3-article-8649.html",
    summary:
      "Describe la provincia de Arma, sus casas redondas y un recinto ritual donde se usaban sahumerios, flores y resinas antes de que una figura de ojos luminosos respondiera preguntas.",
    limitation:
      "Cieza fue conquistador y tradujo prácticas indígenas mediante categorías cristianas como «demonio»; tampoco registra el nombre propio de la figura que dice haber conocido por testimonio.",
  }),
  uribe1885: source({
    title:
      "Geografía general y compendio histórico del Estado de Antioquia en Colombia",
    author: "Manuel Uribe Ángel",
    year: 1885,
    type: "geografía e historia regional del siglo XIX",
    url: "https://books.google.com/books/about/Geograf%C3%ADa_general_y_compendio_hist%C3%B3ric.html?id=PrACAAAAYAAJ",
    summary:
      "Conserva un vocabulario atribuido a poblaciones de la región en el que «Dios» aparece como Untré, Calgari o Calgavi y «Diablo» como Antomiá.",
    limitation:
      "Es una recopilación tardía, realizada siglos después de la conquista y sin documentación lingüística moderna; una equivalencia léxica no reconstruye por sí sola una teología completa.",
  }),
  academia2023: source({
    title: "Homenaje a Manuel Uribe Ángel",
    author: "Academia Antioqueña de Historia; compilación de José Alvear Sanín",
    year: 2023,
    type: "reedición institucional de textos históricos",
    url: "https://academiaantioquenadehistoria.org/wp-content/uploads/2023/09/MUA-13-1-152.pdf",
    summary:
      "Reproduce en la página 94 el contraste léxico «Diablo: Antomiá» y «Dios: Untré, Calgari o Calgavi», decisivo para revisar la página heredada.",
    limitation:
      "Reedita una fuente decimonónica y no agrega trabajo de campo contemporáneo; confirma la forma impresa del vocabulario, no la vigencia actual de esas palabras.",
  }),
  valencia2010: source({
    title: "Raíces en el tiempo: La región caldense",
    author: "Albeiro Valencia Llano",
    year: 2010,
    type: "síntesis histórica regional",
    url: "https://albeirovalencia.com/recursos/La_region_caldense_Raices_en_el_tiempo%20%281%29.pdf",
    summary:
      "Distingue el nombre Cuy-Cuy o Coy-Coy del rótulo colonial Armas o Armados y sitúa a estas poblaciones entre Sonsón, Aguadas y el Cauca medio.",
    limitation:
      "La reconstrucción depende en gran medida de cronistas coloniales y bibliografía regional; no debe convertir una provincia multilingüe en una comunidad homogénea.",
  }),
  jaramillo1995: source({
    title:
      "Guerra y canibalismo en el valle del río Cauca en la época de la conquista española",
    author: "Luis Gonzalo Jaramillo E.",
    year: 1995,
    type: "artículo académico de antropología histórica",
    url: "https://doi.org/10.22380/2539472X.1392",
    summary:
      "Examina las contradicciones de los relatos coloniales sobre Arma y otros grupos del Cauca medio y advierte que la conquista alteró las relaciones políticas y militares que describían los europeos.",
    limitation:
      "Su objeto principal es la guerra y el canibalismo, no el episodio ritual ni el tesoro de Pipintá; sirve para leer críticamente el archivo colonial.",
  }),
  rodriguez2011: source({
    title:
      "Cosmovisión, chamanismo y ritualidad en el mundo prehispánico de Colombia. Esplendor, ocaso y renacimiento",
    author: "José Vicente Rodríguez Cuenca",
    year: 2011,
    type: "artículo académico de síntesis arqueológica y etnohistórica",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/29892",
    summary:
      "Revisa fuentes tempranas sobre religiosidad del Cauca medio y señala que los españoles llamaron «diablos» a deidades y mediadores indígenas que no pertenecían a esa categoría cristiana.",
    limitation:
      "Es una síntesis amplia de Colombia prehispánica y agrupa datos de regiones y cronistas distintos; no identifica por nombre al ser de ojos resplandecientes.",
  }),
  aguadas2014: source({
    title: "Información básica del municipio de Aguadas",
    author: "Gobernación de Caldas y municipio de Aguadas",
    year: 2014,
    type: "perfil histórico municipal",
    url: "https://site.caldas.gov.co/media/pdf/2014/infomunicipios/INFORMACION%20DE%20%20AGUADAS.pdf",
    summary:
      "Resume la historia local de los Cocuyes o Armados, reproduce los nombres Untré, Calgaria y Calgavi y vincula el episodio del oratorio con el territorio de Aguadas.",
    limitation:
      "Es divulgación municipal que mezcla fuentes y conserva parte del vocabulario demonizante de la historiografía antigua; no es una versión oral independiente.",
  }),
  ocampo1996: source({
    title: "Leyendas populares colombianas",
    author: "Javier Ocampo López",
    year: 1996,
    type: "compilación folclórica nacional",
    url: "https://books.google.com/books/about/Leyendas_populares_colombianas.html?id=BdYrQfMRLrcC",
    summary:
      "Incluye la leyenda del tesoro de Pipintá dentro del repertorio colombiano de guacas y tesoros, y constituye una de las referencias impresas usadas por la divulgación regional.",
    limitation:
      "La vista pública es parcial y la compilación no ofrece para cada variante una transcripción oral fechada, un narrador identificable ni una cadena completa de transmisión.",
  }),
  ocampo2006: source({
    title: "Mitos, leyendas y relatos colombianos",
    author: "Javier Ocampo López",
    year: 2006,
    type: "antología folclórica revisada",
    url: "https://books.google.com/books/about/Mitos_leyendas_y_relatos_colombianos.html?id=lARg1lafMBAC",
    summary:
      "Su tabla de contenido registra «El tesoro de Pipintá» en la página 90 y confirma la circulación editorial autónoma de esta leyenda regional.",
    limitation:
      "La consulta pública confirma la inclusión y ubicación del relato, pero no permite contrastar libremente todas las páginas de la versión impresa.",
  }),
  ocaPipinta: source({
    title: "Camino de Pipintá y Loma del Pozo",
    author: "Organización Caminera de Antioquia",
    type: "ruta patrimonial y divulgación histórica regional",
    url: "https://organizacioncamineradeantioquia.org/web/index.php/caminos/subregion-suroeste/camino-de-pipinta-y-loma-del-pozo",
    summary:
      "Reproduce una versión atribuida a Javier Ocampo: los Armas esconden sus adornos, el tesoro recibe el nombre de Pipintá y se manifiesta a arrieros como un espejismo que desaparece.",
    limitation:
      "Es una página de patrimonio caminero que cita una compilación previa; no constituye una segunda tradición oral independiente ni prueba la existencia material del tesoro.",
  }),
  valencia2023: source({
    title: "Tesoros, entierros y guacas",
    author: "Albeiro Valencia Llano",
    year: 2023,
    type: "artículo de historia regional",
    url: "https://albeirovalenciallano.com/2023/06/03/tesoros-entierros-y-guacas/",
    summary:
      "Resume la leyenda y transcribe de la Monografía de Aguadas de Aníbal Valencia el itinerario de Martín Blandón: piedra, escalas, mantas, sombreros, figuras de oro, guardianes y un mono.",
    limitation:
      "La ruta llega a través de una cita de segunda mano y combina memoria local, búsqueda de guacas e historia regional; no permite verificar al informante original.",
  }),
  ocaArma: source({
    title: "Santiago de Arma y Pipintá",
    author: "Organización Caminera de Antioquia",
    type: "inventario de camino histórico y patrimonio regional",
    url: "https://corporacionoca.org/web/index.php/caminos/subregion-suroeste/titiribies-y-senufanaes/8-caminos/84-santiago-de-arma-y-pipinta",
    summary:
      "Ubica la memoria de Pipintá entre Santiago de Arma, Aguadas, Pácora, Loma del Pozo, la cueva o piedra de Pipintá y los corredores del río Cauca.",
    limitation:
      "Su objetivo es describir un itinerario patrimonial; reúne lugares y referencias históricas, pero no documenta por sí solo una variante narrativa completa.",
  }),
  henao2025: source({
    title:
      "Educación y formación literaria: una búsqueda por el pensamiento regional en Caldas, Colombia, siglos XVIII–XIX",
    author: "Ricardo Andrés Henao Pérez",
    year: 2025,
    type: "artículo académico de historia cultural",
    url: "https://doi.org/10.30554/p.e.1.5335.2025",
    summary:
      "Sitúa mitos, leyendas, oralidad y escritura dentro de la construcción literaria e identitaria de Caldas y menciona a Pipintá entre referentes regionales.",
    limitation:
      "No reconstruye el argumento del tesoro ni estudia la población Cuy-Cuy; se usa solo para contextualizar su circulación en la memoria literaria caldense.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  leoncronica1553: source({
    title: "La crónica del Perú, primera parte",
    author: "Pedro de Cieza de León",
    year: 1553,
    type: "crónica del siglo XVI",
    url: "https://archive.org/details/lacrnicadelper00ciez",
    summary:
      "El capítulo XIX conserva el episodio entero: «Casa de adoración no se ha visto ninguna, más de que en las casas o aposentos de los señores tenían un aposento muy esterado y aderezado; en Paucora vi yo uno destos oratorios […]; en lo secreto dellos estaba un retrete, y en él había muchos encensarios de barro, en los cuales, en lugar de encienso, quemaban ciertas hierbas menudas; yo las vi en la tierra de un señor desta provincia, llamado Yayo […]; unas tenían una flor muy negra y otras la tenían blanca; en el olor parescían a verbena; y éstas, con otras resinas, quemaban delante de sus ídolos; y después que han hecho otras supersticiones viene el demonio, el cual cuentan que les aparesce en figura de indio y los ojos muy resplandecientes, y a los sacerdotes o ministros suyos daba la respuesta de lo que preguntaban y de lo que querían saber». El capítulo XVIII da las casas redondas y los apartados entoldados con esteras; el XX, el ídolo de madera a la puerta del señor Pimana en Paucura; el XVI, el contraste anserma de la consulta a oscuras y sin lumbre con un solo portavoz.",
    limitation:
      "Cieza entró en la provincia con la hueste de Jorge Robledo y fue vecino de la comarca: escribe sobre gente a la que se estaba sometiendo, y este capítulo en particular está construido para demostrar «el dominio y señorío que el demonio […] sobre ellos tuvo», con acusaciones de canibalismo que le sirven de justificación. Llama demonio a la presencia y no conserva ningún nombre indígena, ninguna palabra del diálogo ni ninguna explicación de los ministros. Y distingue mal el testimonio ocular del oído: el oratorio que dice haber visto estaba en Paucora.",
  }),
  gomezAlgunos1962: source({
    title: "Algunos de los caciques de la resistencia, en Boletín de Historia y Antigüedades núm. 575, pp. 499-505",
    author: "Luis Duque Gómez",
    year: 1962,
    type: "nomenclátor histórico",
    url: "https://academiahistoria.org.co/boletines/BHA-575.pdf",
    summary:
      "La entrada 259, en las páginas 504 y 505, es el respaldo no circular del etnónimo de esta comunidad: «Maitama. Cacique de los indios Cuy-Cuy, que moraban en la zona que hoy corresponde a los municipios de Sonsón (Antioquia) y Aguadas (Caldas)». Describe además cómo salieron a la contienda «literalmente vestidos de oro, de pies a cabeza, con cascos, coronas, diademas, narigueras, collares, pectorales, petos, puñetes, cintos, ajorcas», lo que dio origen al nombre español de Armados.",
    limitation:
      "Es un nomenclátor heroizante de 1962, de entradas brevísimas y sin referencias documentales, escrito dentro de un texto que celebra «la gesta conquistadora». No dice nada del oratorio ni de la figura de ojos resplandecientes: entra en esta ficha sólo para anclar el nombre del pueblo y su territorio.",
  }),
  caldasInformacion2014: source({
    title: "Información básica del municipio de Aguadas",
    author: "Gobernación de Caldas",
    year: 2014,
    type: "monografía municipal oficial",
    url: "https://caldas.gov.co/media/pdf/2014/infomunicipios/INFORMACION%20DE%20%20AGUADAS.pdf",
    summary:
      "En el apartado de religión cita casi entero el pasaje del retrete y del señor Yayo, y a continuación afirma que «los Cocuyes o Armados tenían una idea, un poco vaga, de la existencia de un ser superior al que llamaban UNTRE, CALGARIA, o CALGAVI (una trinidad?)». Es la fuente que fusiona la figura del oratorio con esos tres nombres, y documenta al mismo tiempo la grafía Cocuyes y el sometimiento del pueblo por Jorge Robledo.",
    limitation:
      "Es un documento administrativo sin autoría ni aparato, que cita a Cieza con erratas de transcripción y sin dar capítulo. Su conclusión sobre los primeros habitantes está redactada en términos abiertamente racistas —«estado precultural de barbarie», «aberrante antropología»— que esta edición no reproduce. Y su atribución de Untré, Calgaria y Calgavi a los Cocuyes contradice la tabla del propio Uribe Ángel que le sirve de base. El documento ya no abre en el dominio `site.caldas.gov.co`.",
  }),
  angelGeografia1885: source({
    title: "Geografía general y compendio histórico del Estado de Antioquia en Colombia",
    author: "Manuel Uribe Ángel",
    year: 1885,
    type: "geografía e historia regional del siglo XIX",
    url: "https://repositorio.unal.edu.co/handle/unal/9806",
    summary:
      "Es el origen de la tabla de vocabulario que la página antigua usaba como prueba, donde Untré, Calgari o Calgavi traducen Dios y Antomiá traduce Diablo. Sirve exactamente para lo contrario de lo que se le hacía decir: demuestra que en su propio registro Calgari no es el diablo.",
    limitation:
      "Es una recopilación de 1885, trescientos treinta años posterior a la escena, hecha por un médico y geógrafo que clasifica a los indígenas de Antioquia en catíos, tahamíes y nutabes, y que no declara procedencia ni informante del vocabulario. El facsímil de la UNAL está escaneado como imagen sin capa de texto y se publica por capítulos, de modo que esta revisión no pudo fijar la página de la tabla.",
  }),
  cardonaMitologia: source({
    title: "Mitología Embera. Principales mitos, características y funciones, en Bioetnia",
    author: "Antonio María Cardona y Jairo Miguel Guerra Gutiérrez",
    type: "artículo de etnografía en revista institucional",
    url: "https://bioetnia.iiap.org.co/index.php/bioetnia/article/download/130/135",
    summary:
      "Registra Antomiá o Antumiá como teónimo emberá katío —«están regidos por Antomiá o Antumiá para otros, que vive con su Antomiá wera»— y precisa que «con la influencia cristiana ha tomado la categoría de diablo, señor del mal», pero que «en las leyendas ancestrales, Antomiá no es bueno ni es malo». Es la prueba de que el vocabulario de Uribe Ángel es emberá y no del Cauca medio, y de que la equivalencia con «diablo» es ella misma un efecto colonial.",
    limitation:
      "Documenta a los emberá, que son un pueblo vecino y distinto de los de Arma: entra en esta ficha para desmontar una atribución, no para describir a los Cuy-Cuy. Y no contiene la forma Caragabí, de modo que la identificación de Calgari o Calgavi con ese nombre queda sin comprobar.",
  }),
  eGuerra1995: source({
    title: "Guerra y canibalismo en el valle del río Cauca en la época de la conquista española, en Revista Colombiana de Antropología vol. 32",
    author: "Luis Gonzalo Jaramillo E.",
    year: 1995,
    type: "artículo de antropología histórica",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1392",
    summary:
      "Es el correctivo crítico de la crónica en la que descansa esta ficha: argumenta que los relatos españoles de guerra y canibalismo en Anserma, Quimbaya y Arma pueden estar deformados por la propia presencia española, y que el capítulo XIX de Cieza —que enmarca el episodio del oratorio— pertenece a ese registro.",
    limitation:
      "Su objeto es la guerra y el canibalismo, no la práctica oracular: no analiza el retrete, los incensarios ni la figura de ojos resplandecientes. Aporta método de lectura, no contenido.",
  }),
  averysuroeste1962: source({
    title: "El suroeste del Cauca y sus indios al tiempo de la conquista española, en Revista Colombiana de Antropología",
    author: "Kathleen Romoli de Avery",
    year: 1962,
    type: "artículo de etnohistoria documental",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1682",
    summary:
      "Es el modelo metodológico de contraste: muestra cómo se reconstruye la identidad de unos pueblos del Cauca a partir de documentos coloniales contemporáneos, y por comparación deja ver hasta dónde alcanza una ficha que sólo dispone de un capítulo de crónica y un vocabulario decimonónico.",
    limitation:
      "Trata el distrito de Almaguer, en el suroeste del Cauca, no la provincia de Arma: no aporta ningún dato de esta ficha y entra sólo como referencia de método.",
  }),
  nietoZonas1978: source({
    title: "Zonas arqueológicas de Colombia: «Tesoro de los Quimbayas» y piezas de orfebrería relacionadas, en Boletín Museo del Oro núm. 2",
    author: "Clemencia Plazas de Nieto",
    year: 1978,
    type: "artículo de Boletín Museo del Oro",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/6809/7043",
    summary:
      "Estudia el conjunto exhumado por guaqueros en Filandia y las piezas relacionadas: es la demostración de que la riqueza enterrada del Cauca medio existió de verdad y salió de tumbas, lo que explica por qué la leyenda del tesoro pudo arraigar sin necesidad de inventar el oro, sólo el escondite.",
    limitation:
      "Es un estudio arqueológico de piezas sin contexto de excavación, procedentes del Quindío y no de la provincia de Arma. Nada de lo que documenta se relaciona con Pipintá.",
  }),
  villegasorfebreria1991: source({
    title: "La orfebrería Quimbaya tardía: una investigación en la colección del Museo del Oro, en Boletín Museo del Oro núm. 31",
    author: "María Alicia Uribe Villegas",
    year: 1991,
    type: "artículo de Boletín Museo del Oro",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/7019/7265",
    summary:
      "Separa la orfebrería tardía de la temprana y describe los tipos de adorno corporal realmente documentados en el Cauca medio, que son los que encajan con las coronas, patenas y narigueras que Cieza y el nomenclátor de 1962 describen sobre los cuerpos de los Armados.",
    limitation:
      "Trabaja sobre una colección de museo, en su mayoría sin procedencia arqueológica documentada, y su zona de referencia es el Quindío y el Cauca medio en general, no la provincia de Arma.",
  }),
  americaTesoro: source({
    title: "Tesoro Quimbaya",
    author: "Museo de América, Ministerio de Cultura de España",
    type: "ficha institucional de colección museográfica",
    url: "https://www.cultura.gob.es/museodeamerica/investigacion/tesoro-quimbaya.html",
    summary:
      "Documenta el caso real que la leyenda desplaza a la ficción: 121 piezas de un ajuar funerario exhumado por guaqueros en Filandia en 1890, en España desde 1893 y en el museo desde 1941, con el proyecto de investigación arqueometalúrgica y el pronunciamiento de 2023 de la Academia Colombiana de Historia que prefiere llamarlo «Conjunto Filandia». Un tesoro que sí apareció y salió del país es el contrapunto del que nunca se encuentra.",
    limitation:
      "Es la ficha de la institución que conserva las piezas, en un caso de restitución abierto, y su relato del hallazgo es el de la parte poseedora. No tiene relación documental con Pipintá ni con la provincia de Arma.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickCuycuyesSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = cuycuyesSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Cuycuy desconocida: ${visto}`);
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
