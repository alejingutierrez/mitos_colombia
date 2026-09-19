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
