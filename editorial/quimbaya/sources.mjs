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

export const quimbayaSources = {
  cieza1553: source({
    title:
      "Parte primera de la Crónica del Perú, capítulo XXIV: provincia de Quimbaya",
    author: "Pedro de Cieza de León",
    year: 1553,
    type: "crónica colonial del siglo XVI",
    url: "https://pruebatcdn.aprende.org/libros/pdf/Cronica_del_Peru.pdf",
    summary:
      "Registra el canto «batatabati», lo traduce como «ea, juguemos» y describe el juego, los dos tambores, la danza, la bebida y los cantos sobre problemas presentes y hechos de los mayores.",
    limitation:
      "Cieza participó en la conquista y escribió desde categorías coloniales cristianas; su descripción no es una voz quimbaya directa y contiene juicios que esta revisión no adopta.",
  }),
  ciezaBnp: source({
    title: "Parte primera de la Chrónica del Perú, edición de 1553",
    author: "Pedro de Cieza de León; Biblioteca Nacional del Perú",
    year: 1553,
    type: "facsímil institucional de fuente primaria",
    url: "https://bibliotecadigital.bnp.gob.pe/items/ffea17d3-39f8-4a0f-a121-3d47522323a9/full?origin=internal",
    summary:
      "Ofrece el facsímil patrimonial de la edición temprana donde aparece el capítulo sobre Quimbaya y permite contrastar la transcripción moderna.",
    limitation:
      "Es la misma fuente primaria que la edición legible de la crónica, no un testimonio independiente; la grafía antigua y la mirada del autor requieren mediación crítica.",
  }),
  jimenez1946: source({
    title: "Los Quimbaya",
    author: "Edith Jiménez de Muñoz",
    year: 1946,
    type: "lección de prehistoria del Servicio Arqueológico Nacional",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/240/263/1576?inline=1",
    summary:
      "Reproduce Batatapatí o Batatabatí como juego festivo, explica la expresión «ea, juguemos» y vincula la escena con tambores, danza, chicha y memoria de los mayores.",
    limitation:
      "Es una síntesis de mediados del siglo XX basada en cronistas y en categorías arqueológicas hoy revisadas; no añade una variante oral independiente.",
  }),
  juegosPereira: source({
    title: "Los juegos tradicionales en Pereira",
    author: "Carlos Alberto Jiménez V.",
    type: "ensayo regional sobre historia lúdica",
    url: "https://studylib.es/doc/584022/los-juegos-en-pereira",
    summary:
      "Sitúa Batatabatí entre prácticas lúdico-guerreras del territorio y subraya la escasez de registros escritos sobre los juegos anteriores a la conquista.",
    limitation:
      "Es un texto de divulgación regional alojado en una copia secundaria y depende de fuentes históricas anteriores; no permite reconstruir reglas completas.",
  }),
  batatabatiPedagogico: source({
    title: "¿Qué es Batatabatí?",
    author: "Proyecto pedagógico Batatabatí",
    year: 2016,
    type: "apropiación educativa contemporánea",
    url: "https://batatabati.blogspot.com/p/que-es-batatabati.html",
    summary:
      "Muestra la recuperación moderna del término como invitación al juego y la creación, a partir de la obra de Guillermo Rendón.",
    limitation:
      "No es una fuente histórica ni una tradición oral documentada; sirve únicamente para mostrar la vida contemporánea del nombre.",
  }),
  banrepQuimbaya: source({
    title: "Quimbaya: la gente y el oro en el Cauca medio",
    author: "Museo del Oro, Banco de la República",
    type: "síntesis arqueológica institucional",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Quimbaya",
    summary:
      "Distingue los períodos arqueológicos Temprano y Tardío y las provincias nombradas por los europeos, evitando reducir dos milenios y múltiples pueblos a una sola cultura homogénea.",
    limitation:
      "No documenta Batatabatí, Ipiaré ni Nabsacadas en detalle; se usa para fijar el alcance territorial e histórico del rótulo Quimbaya.",
  }),
  caucaMedio: source({
    title: "El Cauca medio y la región",
    author: "Banco de la República",
    type: "recurso institucional de contexto territorial",
    url: "https://www.banrepcultural.org/biblioteca-virtual/tematicas/origenes-ancestrales-del-fogon-cafetero/el-cauca-medio-y-la-region",
    summary:
      "Presenta el Cauca medio como una región histórica amplia y diversa, útil para no identificar automáticamente el municipio actual de Quimbaya con toda la provincia del siglo XVI.",
    limitation:
      "Es una síntesis territorial y no una fuente narrativa; no demuestra por sí sola la procedencia de ninguno de los relatos.",
  }),
  duque1970: source({
    title: "Los Quimbayas: reseña etno-histórica y arqueológica",
    author: "Luis Duque Gómez",
    year: 1970,
    type: "monografía etnohistórica y arqueológica",
    url: "https://books.google.com/books/about/Los_quimbayas.html?id=Z00YAAAAYAAJ",
    summary:
      "Reúne documentación histórica y arqueológica sobre las poblaciones llamadas quimbayas y ayuda a situar los relatos dentro de un territorio afectado por conquista y despoblamiento.",
    limitation:
      "La vista pública es parcial y varias clasificaciones de 1970 han sido revisadas; no debe usarse para atribuir continuidad étnica automática.",
  }),
  friede1963: source({
    title: "Los Quimbayas bajo la dominación española",
    author: "Juan Friede",
    year: 1963,
    type: "estudio histórico documental",
    url: "https://www.si.edu/object/siris_sil_772150",
    summary:
      "Documenta la dominación colonial, la explotación y el colapso demográfico que forman el trasfondo histórico de las narraciones quimbayas y sus relecturas posteriores.",
    limitation:
      "El catálogo público confirma la obra, pero no expone todo su contenido; su foco es la historia colonial y no cada relato del corpus.",
  }),
  memoriaVirtual1932: source({
    title: "Memoria Virtual: página de «Estampas indígenas» en El Liberal",
    author: "Julián Humberto Parra Toro; original de Gonzalo Uribe Mejía",
    year: 1932,
    type: "reproducción universitaria de prensa histórica",
    url: "https://repositorio.utp.edu.co/bitstreams/a461859d-e648-4886-9a9a-aee232bde8b3/download",
    summary:
      "Reproduce la página publicada por Gonzalo Uribe Mejía en la edición número 500 de El Liberal, del 5 de abril de 1932, bajo el título «Estampas indígenas».",
    limitation:
      "La reproducción permite identificar fecha, autor y carácter periodístico, pero el escaneo es difícil de leer y no convierte la ficción indigenista en tradición oral prehispánica.",
  }),
  bernal2023: source({
    title: "Nuestro dios Ruiz",
    author: "Julián Bernal Ospina",
    year: 2023,
    type: "crónica cultural con recuperación de fuente de 1932",
    url: "https://universocentro.com.co/nuestro-dios-ruiz/",
    summary:
      "Recupera el argumento de Gonzalo Uribe: el viaje del último rey y su hija Ipiaré Ebachí al Cumanday, la sandalia perdida y la aparición nocturna en la montaña.",
    limitation:
      "Es una recuperación periodística noventa años posterior y cita el texto de 1932 mediante otra periodista; no acredita una cadena oral quimbaya.",
  }),
  sgcRuiz: source({
    title: "Generalidades del volcán Nevado del Ruiz",
    author: "Servicio Geológico Colombiano",
    type: "ficha científica institucional",
    url: "https://www2.sgc.gov.co/sgc/volcanes/VolcanNevadoRuiz/Paginas/generalidades-volcan-nevado-ruiz.aspx",
    summary:
      "Describe la localización, morfología y actividad del Nevado del Ruiz, escenario geográfico que la ficción de 1932 llama Cumanday o Tabuchía.",
    limitation:
      "La geología confirma el escenario natural, no la existencia histórica de Ipiaré ni las traducciones atribuidas a nombres indígenas.",
  }),
  unalRuiz: source({
    title: "Volcán Nevado del Ruiz, primer análogo de Marte en Colombia",
    author: "Agencia de Noticias UNAL",
    year: 2025,
    type: "divulgación científica universitaria",
    url: "https://agenciadenoticias.unal.edu.co/detalle/volcan-nevado-del-ruiz-primer-analogo-de-marte-en-colombia",
    summary:
      "Aporta una descripción contemporánea del volcán y registra la circulación de nombres históricos como Cumanday, Tabuchía y Tama.",
    limitation:
      "Es una nota científica sobre el volcán; la repetición de nombres tradicionales no valida la etimología ni la trama literaria de 1932.",
  }),
  simon1626: source({
    title:
      "Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales, tomo IV",
    author: "Fray Pedro Simón",
    year: 1626,
    type: "crónica colonial del siglo XVII",
    url: "https://catalogo.urosario.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=86848",
    summary:
      "Conserva el relato de 1603 sobre la aparición en Vía, el nombre Nabsacadas, el viaje entre pueblos, las reuniones nocturnas y el proyecto de levantamiento.",
    limitation:
      "Simón narra desde la demonología cristiana y a partir de informaciones franciscanas; su versión incluye coerción colonial y no ofrece la voz directa de los participantes.",
  }),
  arango2022: source({
    title:
      "Las ciudades y sus confines en la Monarquía Hispánica: poblamiento y guerra en el territorio de los indios pijaos, 1550–1664",
    author: "Mauricio Arango Puerta",
    year: 2022,
    type: "tesis doctoral en Historia",
    url: "https://repositorio.colmex.mx/downloads/pr76f520h?locale=es",
    summary:
      "Relee el expediente de Nabsacadas como un relato de conocimiento sagrado procedente del páramo, protección, cosechas y articulación política entre pueblos de la cordillera.",
    limitation:
      "Su investigación se centra en las fronteras de guerra y los pijaos; interpreta una crónica colonial y no sustituye un testimonio oral quimbaya.",
  }),
  zuluaga2013: source({
    title: "Historia extensa de Pereira",
    author: "Víctor Zuluaga Gómez",
    year: 2013,
    type: "historia regional universitaria",
    url: "https://repositorio.utp.edu.co/items/ae74e037-69e3-48cf-bae1-649111e1501a",
    summary:
      "Presenta a Nabsacadas como un líder procedente de los Quindos que buscó articular a Quindos, Quimbayas y Gorrones contra el dominio español.",
    limitation:
      "Ofrece una reconstrucción histórica distinta de la lectura religiosa de Simón y afirma captura y ejecución; esas conclusiones no aparecen con igual claridad en todas las versiones.",
  }),
  steward1948: source({
    title: "Handbook of South American Indians, volumen 4",
    author: "Julian H. Steward, editor; Smithsonian Institution",
    year: 1948,
    type: "manual etnológico histórico",
    url: "https://repository.si.edu/handle/10088/34600",
    summary:
      "Registra a Nabsacadas en una síntesis etnológica que lo convirtió en «dios quimbaya», ejemplo de cómo una narración colonial compleja fue reducida a una etiqueta.",
    limitation:
      "Es una clasificación general de mediados del siglo XX, dependiente de cronistas y hoy insuficiente para afirmar que Nabsacadas fuera una deidad panquimbaya.",
  }),
  correal1980: source({
    title: "Nomenclátor de líderes, héroes y mártires indígenas",
    author: "Gonzalo Correal",
    type: "artículo de historia nacional",
    url: "https://academiahistoria.org.co/boletines/BHA-575.pdf",
    summary:
      "Incluye a Nabsacadas como indígena quimbaya que intentó organizar una rebelión en 1603 y cuya conspiración fue descubierta en el pueblo de Vía o Bia.",
    limitation:
      "La entrada es muy breve, heroizante y no explica la dimensión religiosa ni sus fuentes con el detalle necesario para resolver las contradicciones.",
  }),
  cronicaQuindio: source({
    title: "Patrimonio cultural y crónica periodística en la provincia del Quindío histórico",
    author: "Crónica del Quindío",
    year: 2024,
    type: "crónica regional de patrimonio",
    url: "https://archivo.cronicadelquindio.com/noticias/historia-1/patrimonio-cultural-y-cronica-periodistica-en-la-provincia-del-quindio-historico",
    summary:
      "Reconoce la circulación regional de Batatabatí y Nabsacadas y señala que ambos llegan a través de cronistas, entre demonización, historia y leyenda.",
    limitation:
      "Es divulgación periodística reciente y no una fuente independiente del siglo XVI; sirve para documentar la recepción regional del relato.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  leoncronica1553: source({
    title: "La crónica del Perú, primera parte",
    author: "Pedro de Cieza de León",
    year: 1553,
    type: "crónica del siglo XVI",
    url: "https://archive.org/details/lacrnicadelper00ciez",
    summary:
      "En el capítulo XXIV, sobre la provincia de Quimbaya y la fundación de Cartago, registra el sonete «Batatabati, batatabati» y lo traduce «¡Ea, juguemos!»; describe los escuadrones de mujeres, hombres y muchachos que arremeten con tiraderas y varas, las heridas y muertes con que acaba el juego, las rodelas hechas de cabello, los dos tambores de la plaza, el que toma la delantera en la danza, la vasija del vino en cada mano y los cantares que «recitan a su uso los trabajos presentes y recuentan los sucesos pasados de sus mayores». Del mismo capítulo salen el cacique Tacurumbi, el río que lleva su nombre y el vaso de oro de dos azumbres que dio a Jorge Robledo.",
    limitation:
      "Cieza entró en la provincia con la hueste de Jorge Robledo y escribe sobre gente a la que se estaba sometiendo; su capítulo mezcla la descripción con el juicio («gente muy indómita y trabajosa de conquistar») y no conserva ninguna explicación indígena del juego: ni reglas, ni duración, ni sentido. Es además la única fuente temprana del episodio, de modo que toda la ficha descansa en un solo testigo interesado. La edición de Espasa-Calpe moderniza la ortografía y en un punto lee «después que han bebido» donde otra edición moderna lee «venido».",
  }),
  plazasQuimbaya2022: source({
    title: "Quimbaya. Orfebrería temprana",
    author: "Clemencia Plazas",
    year: 2022,
    type: "monografía arqueológica de acceso abierto",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/130/329/4303?inline=1",
    summary:
      "Establece que el rótulo Quimbaya cubre períodos muy distintos y que la orfebrería temprana no corresponde a la gente que Cieza vio en 1547: es la razón por la que esta ficha no traslada el oro arqueológico a la fiesta descrita en la crónica.",
    limitation:
      "Es interpretación arqueológica del siglo XXI y no documenta ni el juego ni la palabra batatabatí; su objeto son los objetos, no las prácticas festivas, que no dejan rastro material.",
  }),
  villegasorfebreria1991: source({
    title: "La orfebrería Quimbaya tardía: una investigación en la colección del Museo del Oro, en Boletín Museo del Oro núm. 31",
    author: "María Alicia Uribe Villegas",
    year: 1991,
    type: "artículo de Boletín Museo del Oro",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/7019/7265",
    summary:
      "Separa el Quimbaya Tardío del Temprano, que es la distinción que permite situar cronológicamente a los señores «muy ricos de oro» del capítulo XXIV y a los vasos que Tacurumbi entregó, sin confundirlos con el conjunto de Filandia.",
    limitation:
      "Trabaja sobre piezas de colección, la mayoría sin contexto de excavación por proceder de guaquería; nada de lo que estudia documenta la fiesta ni la palabra del juego.",
  }),
  arangoNuevas2021: source({
    title: "Nuevas perspectivas para la historia del pueblo pijao, siglos XVI y XVII, en Fronteras de la Historia 26(1)",
    author: "Juan José Velásquez Arango",
    year: 2021,
    type: "artículo de historia colonial",
    url: "https://www.redalyc.org/journal/833/83366936011/html/",
    summary:
      "Documenta a Calarcá como líder pijao del asalto a Ibagué de 1606 y del asedio al fuerte de Diego de Ospina en 1607, y sitúa a los quimbaya como socios comerciales y no como su pueblo: retira el último apoyo de la trama inventada del guerrero de Calarcá que raptaba a la supuesta princesa.",
    limitation:
      "Su objeto son los pijao y no la provincia de Quimbaya; entra en esta ficha sólo para desmontar una atribución, y no dice nada del juego ni de la fiesta.",
  }),
  gomezHistoria2013: source({
    title: "Historia extensa de Pereira",
    author: "Víctor Zuluaga Gómez",
    year: 2013,
    type: "historia regional universitaria",
    url: "https://repositorio.utp.edu.co/server/api/core/bitstreams/4f719db8-fd72-4308-857f-6025849013c8/content",
    summary:
      "Sitúa a Tacurumbí como cacique de Chinchiná junto a Chanviricua y Pimaracua, lo que contradice la ubicación quimbaya que le da Cieza y obliga a dejar la discrepancia a la vista en vez de resolverla.",
    limitation:
      "Es historia regional de divulgación universitaria: sus afirmaciones sobre caciques del siglo XVI se presentan sin referencia documental visible en el pasaje, y el enlace sólo entrega el PDF por la ruta de la API del repositorio, no por la de descarga directa.",
  }),
  toroMemoria2013: source({
    title: "Memoria virtual: portal literario y cultural del eje cafetero",
    author: "Julián Humberto Parra Toro",
    year: 2013,
    type: "trabajo de grado universitario",
    url: "https://repositorio.utp.edu.co/server/api/core/bitstreams/a461859d-e648-4886-9a9a-aee232bde8b3/content",
    summary:
      "Su capítulo tercero, páginas 191 a 234, está dedicado a Gonzalo Uribe Mejía —que firmaba como Luis Yagarí—, con biografía, cronología y obra publicada, y reproduce como imagen una página de El Liberal de Manizales del martes 5 de abril de 1932, edición 500. Es el único soporte localizado que da periódico, número y fecha para un texto de Uribe de ese año.",
    limitation:
      "El pie de esa reproducción la describe como artículo excepcional «donde aparecen algunas de sus poesías», y ni «Estampas indígenas» ni «Ipiaré» aparecen en el texto del trabajo. La identificación de esa página con el relato de Ipiaré es una conjetura, no un dato de la fuente. Además es un trabajo de grado de pregrado, y el PDF sólo se entrega por la ruta de la API del repositorio.",
  }),
  tobonhuellas1993: source({
    title: "Las huellas ancestrales, en Ánfora 1(1), pp. 76-79",
    author: "Alfredo Cardona Tobón",
    year: 1993,
    type: "ensayo de historia regional en revista indexada",
    url: "https://publicaciones.autonoma.edu.co/index.php/anfora/article/view/415",
    summary:
      "Aporta el paralelo regional documentado: en la página 78 recoge a Xixaraca, «Dios supremo que estampó sus huellas en las rocas de Mápura», y a Michua, «la diosa del valor y de la guerra que convertía los ríos en sangre». Dos divinidades que se van y dejan marca en la piedra y en el agua, escritas por un autor del mismo eje cafetero, muestran que la imagen circulaba entre los escritores regionales.",
    limitation:
      "Es un ensayo de opinión sobre la pérdida de la memoria regional, no un estudio con aparato: no cita informantes para esas dos frases ni relaciona a Xixaraca con la leyenda de Ipiaré. El paralelo es de motivo y de medio letrado, no de tradición.",
  }),
  americaTesoro: source({
    title: "Tesoro Quimbaya",
    author: "Museo de América, Ministerio de Cultura de España",
    type: "ficha institucional de colección museográfica",
    url: "https://www.cultura.gob.es/museodeamerica/investigacion/tesoro-quimbaya.html",
    summary:
      "Documenta las 121 piezas exhumadas por guaqueros en Filandia, Quindío, en 1890, entregadas a España en 1893 y hoy en el Museo de América, con el proyecto de investigación arqueometalúrgica y el pronunciamiento de 2023 de la Academia Colombiana de Historia que prefiere llamarlo «Conjunto Filandia». Es el oro real de la región frente al oro imaginado del palanquín y la sandalia.",
    limitation:
      "Es una ficha institucional de la parte que conserva las piezas, en un caso de restitución abierto; su contenido no toca en absoluto la leyenda de 1932 y entra en la ficha sólo como contraste.",
  }),
  simonNoticias1892: source({
    title: "Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales, tomo IV",
    author: "Fray Pedro Simón",
    year: 1892,
    type: "crónica del siglo XVII en edición decimonónica",
    url: "https://archive.org/details/tierrafirmeindias04simbrich",
    summary:
      "En la Tercera Noticia Historial, capítulo VI, párrafos cuarto y quinto, páginas 188 a 190, está el relato entero: el año de 1603, el pueblo de Vía a legua y media de Cartago en encomienda de Gaspar Dávila, la aparición a la india Inés, su marido Pedro Pachague y el cacique Diego Orobajo; la hija de quince o dieciséis años pedida por mujer y que lo lleva a cuestas más de tres meses; el cacique don Pedro y el páramo de Tataquí; el bohío entre guaduales; la frase «se llamaba Nabsacadas, que quiere decir en su lengua Estrella caída»; el maíz y las ahuyamas que crecen al tercer día y se pudren al cuarto; el agua de la quebrada frente al bautismo; el plan de los frenos y del silbo; los azotes al cacique, la entrada nocturna de fray Baltasar de Zamora, la sillita pintada sobre la estera y las trece o catorce mantas ofrecidas.",
    limitation:
      "Simón escribe desde la demonología franciscana y con informaciones de su propia orden: el encabezado del capítulo anuncia la aparición del Demonio y todo el pasaje está construido para probar que sus milagros «son sólo aparentes». Llama demonio al protagonista, no conserva ninguna voz indígena directa y refiere sin condenarla la tortura con que se obtuvo la información. La edición consultada es la de Bogotá, Medardo Rivas, 1892, con ortografía y puntuación decimonónicas; la obra se escribió en la década de 1620.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickQuimbayaSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = quimbayaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Quimbaya desconocida: ${visto}`);
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
