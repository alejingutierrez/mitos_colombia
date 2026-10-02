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

export const ansermasSources = {
  cieza1864: source({
    title:
      "The Travels of Pedro de Cieza de León, A.D. 1532–50: First Part of His Chronicle of Peru",
    author: "Pedro de Cieza de León; traducción de Clements R. Markham",
    year: 1864,
    type: "crónica colonial en traducción histórica",
    url: "https://commons.wikimedia.org/wiki/File:The_travels_of_Pedro_de_Cieza_de_Le%C3%B3n,_A._D._1532-50_-_contained_in_the_first_part_of_his_Chronicle_of_Peru_(IA_gri_000033125008673861).pdf",
    summary:
      "Registra la provincia de Anserma o Umbra y conserva la formulación colonial según la cual Xixarama era llamado «diablo» y Tamaraca designaba a los españoles.",
    limitation:
      "Es la mirada de un conquistador del siglo XVI, mediada además por una traducción inglesa del XIX; sus categorías cristianas no describen la religión Anserma en sus propios términos.",
  }),
  steward1948: source({
    title:
      "Handbook of South American Indians, Volume 4: The Circum-Caribbean Tribes",
    author: "Julian H. Steward, editor",
    year: 1948,
    type: "síntesis etnológica comparativa",
    url: "https://repository.si.edu/handle/10088/34600",
    summary:
      "Resume fuentes históricas sobre los pueblos del alto Cauca y señala a Xixarama como deidad principal Anserma y progenitor del Sol y la Luna.",
    limitation:
      "Es una síntesis de mediados del siglo XX basada en cronistas y bibliografía previa; no constituye trabajo comunitario contemporáneo ni una narración oral completa.",
  }),
  abad1955: source({
    title: "Los Ansermas",
    author: "Inés Lucía Abad Salazar",
    year: 1955,
    type: "tesis y monografía histórica",
    url: "https://books.google.com/books/about/Los_ansermas.html?id=fq0jAAAAMAAJ",
    summary:
      "Sistematiza territorio, lengua, organización, vida ritual y referencias históricas a Xixarama o Xixaraca entre los pueblos agrupados bajo el nombre Anserma.",
    limitation:
      "La vista pública es parcial y la obra emplea categorías antropológicas propias de su época; debe contrastarse con voces indígenas y estudios posteriores.",
  }),
  cardona1989: source({
    title: "Quinchía mestizo",
    author: "Alfredo Cardona Tobón",
    year: 1989,
    type: "historia local y memoria regional",
    url: "https://books.google.com/books/about/Quinch%C3%ADa_mestizo.html?id=W2wYAAAAYAAJ",
    summary:
      "Relaciona el cerro Karambá o Batero con Xixaraca y Michua, las huellas de Mápura, los Tamaracas y la memoria histórica de Guacuma y Quinchía.",
    limitation:
      "Combina documentos, tradición local e interpretación del autor; algunas reconstrucciones no identifican por separado narrador, fecha y variante.",
  }),
  cardona1993: source({
    title: "Ensayos: Las huellas ancestrales",
    author: "Alfredo Cardona Tobón",
    year: 1993,
    type: "artículo de historia y memoria regional",
    url: "https://publicaciones.autonoma.edu.co/index.php/anfora/article/view/415",
    summary:
      "Documenta las grandes huellas humanas de las rocas del río Mápura y las memorias que las atribuyen a la deidad protectora Anserma.",
    limitation:
      "Es un ensayo regional sobre pérdida de memoria, no una transcripción filológica ni una investigación arqueológica de las marcas.",
  }),
  cardona2011: source({
    title: "El último cacique de los Currumíes: La leyenda de los Tamaracas",
    author: "Alfredo Cardona Tobón",
    year: 2011,
    type: "memoria oral regional publicada",
    url: "https://historiayregion.blogspot.com/2011/08/el-ultimo-cacique-de-los-currumies.html",
    summary:
      "Publica el relato que Cardona recuerda haber escuchado en 1947 a Cándido Aricapa sobre Xixaraca, Michua, Karambá, Opiramá y las transformaciones de los Tamaracas.",
    limitation:
      "El testimonio fue escrito décadas después y está enmarcado por la memoria personal y política del autor; no es una grabación ni una transcripción contemporánea de Aricapa.",
  }),
  valencia2009: source({
    title:
      "Antiguos pobladores del territorio caldense: aspectos de la vida cotidiana",
    author: "Albeiro Valencia Llano",
    year: 2009,
    type: "artículo histórico con testimonio indígena",
    url: "https://filedn.com/ld7H5po5QNfB2tIYyyCQhm7/Gonzalo-public/Repositorio%20Revista%20Impronta%20ACH/Academia%20Caldense%20de%20Historia-%20Revista%20Impronta%2007%20de%202009.pdf",
    summary:
      "Contrasta cronistas coloniales y fuentes regionales e incluye una entrevista de 1977 al gobernador indígena Gabriel Campeón, quien rechaza llamar «diablo» a Xixarama.",
    limitation:
      "El artículo cubre numerosos pueblos del antiguo Caldas y reproduce vocabulario colonial que requiere lectura crítica; no desarrolla por sí solo cada episodio narrativo.",
  }),
  cubillos2020: source({
    title:
      "La interdisciplinariedad en las ciencias ambientales: la problemática ambiental del territorio",
    author: "León Felipe Cubillos Quintero",
    year: 2020,
    type: "monografía académica de la Universidad Tecnológica de Pereira",
    url: "https://oses-alc.net/wp-content/uploads/2021/08/2020-Libro.pdf",
    summary:
      "Sitúa a Karambá como centro patrimonial de Guacuma y resume a Xixaraca, Michua, los seres de adentro llamados Tamaracas, las huellas y las cascadas dentro de una historia territorial.",
    limitation:
      "Integra bibliografía regional, investigación ambiental y divulgación; varios pasajes dependen de Cardona y no equivalen a una nueva versión oral independiente.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  socioculturalesMichua2020: source({
    title: "Michua",
    author: "Instituto de Estudios Socioculturales y Problemática Ambiental, Facultad de Ciencias Ambientales, Universidad Tecnológica de Pereira",
    year: 2020,
    type: "nota institucional universitaria",
    url: "https://www.iespautp.com/actualidad/michua-iespa.",
    summary:
      "Es la formulación citable del ciclo entero: «Michua la diosa Anserma del valor y de la guerra protegía desde el cerro Karambá al actual territorio de Quinchía, llamado Guacuma. Los Tamaracas como dioses enemigos han querido acabar con el territorio […] convirtiéndose en diversos enemigos […] langostas, conquistadores españoles», y cierra diciendo que con su dios protector Xixaraca el territorio aún intenta defenderse de la minería transnacional. De aquí salen las dos formas de los Tamaracas que la ficha narra y el uso contemporáneo del relato.",
    limitation:
      "Es una nota web publicada el 17 de agosto de 2020, sin autor firmado y sin aparato, que remite a un «(Cardona, 1987)» que no se ha podido localizar. Usa la fórmula «desde tiempos inmemoriales» y enumera entre los enemigos a un pueblo indígena vecino vivo: esta edición no reproduce ni la fórmula ni esa identificación. Su marco es la defensa ambiental del territorio, y el relato le sirve de argumento.",
  }),
  leoncronica1553: source({
    title: "La crónica del Perú, primera parte",
    author: "Pedro de Cieza de León",
    year: 1553,
    type: "crónica del siglo XVI",
    url: "https://archive.org/details/lacrnicadelper00ciez",
    summary:
      "El capítulo XVI aporta la clave filológica del nombre de los enemigos: de los pueblos comarcanos a la villa de Ancerma escribe «Llaman al diablo Xixarama, y a los españoles, tamaraca». Tamaraca era la palabra con que esa gente nombraba a los invasores, lo que explica por qué cuatro siglos después designa a las potencias que vienen de afuera a acabar con el territorio. El capítulo XV añade que esos mismos pueblos adoraban ídolos tallados y figuras de gatos, y que «cuando tienen necesidad de agua o de sol para cultivar sus tierras, piden ayuda a estos sus dioses».",
    limitation:
      "Cieza escribe desde la conquista y sobre gente a la que se estaba sometiendo, y traduce con la categoría cristiana de diablo lo que no entendía. Registra la palabra tamaraca en singular y como gentilicio, no como nombre de potencias enemigas: entre ese uso y el del siglo XX no hay ningún eslabón documentado, sólo continuidad del término.",
  }),
  ospinaEntre2020: source({
    title: "Entre cerros y montañas. Memorias de resistencias en Quinchía, Colombia",
    author: "Alberto A. Berón Ospina, Juan Pablo Arciniegas Martin, Isabel Cristina Castillo Quintero y Jefferson Jaramillo Marín",
    year: 2020,
    type: "libro universitario de memoria e historia oral",
    url: "https://comunicaciones.utp.edu.co/wp-content/uploads/sites/2/Entre-cerros-y-Montan-as-Memorias-de-resistencias-en-Quinchia-Risaralda-pdf.pdf",
    summary:
      "Confirma los dos topónimos del relato —el cerro de Batero o Karambá como «piedra alta y dura» y la tierra de Guacuma— y aporta una corrección importante: Opiramá aparece allí como río del que bajan las quebradas hacia el Cauca, no como cerro donde estarían encerrados los Tamaracas.",
    limitation:
      "Su objeto es la memoria de la violencia del siglo XX; lo que dice de los mitos son tres líneas de contexto, y llama a Xixaraca cacique y no dios, sin discutir la discrepancia.",
  }),
  gomezHistoria2013: source({
    title: "Historia extensa de Pereira",
    author: "Víctor Zuluaga Gómez",
    year: 2013,
    type: "historia regional universitaria",
    url: "https://repositorio.utp.edu.co/server/api/core/bitstreams/4f719db8-fd72-4308-857f-6025849013c8/content",
    summary:
      "Aporta la tercera acepción de Opiramá y desarma la geografía heredada: entre los caciques de la provincia de Anserma capturados en la represión de 1557 figuran «Opirama, hijo y heredero de la cacica de Andica», «Tuzarma, cacique de Mapura, hoy Quinchía» y «Aytamara, hermano del cacique de Mapura». Opiramá es también nombre de persona, no sólo de accidente geográfico.",
    limitation:
      "Es historia regional de divulgación universitaria y no expone en el pasaje las referencias documentales de esa lista. No menciona a los Tamaracas ni a Michua.",
  }),
  marinPacificacion2020: source({
    title: "Pacificación territorial e insubordinación social en una «Plaza Roja». El caso de Quinchía, Colombia, en Anuario Colombiano de Historia Social y de la Cultura 47(2)",
    author: "Jefferson Jaramillo Marín, Alberto Berón Ospina y Juan Carlos Victoria Mena",
    year: 2020,
    type: "artículo de historia social",
    url: "https://www.redalyc.org/journal/1271/127164235005/html/",
    summary:
      "Documenta la sucesión de amenazas concretas sobre el territorio de Guacuma en el siglo XX —disolución de los resguardos, despojo de tierras comunales, violencia partidista— que es la serie histórica sobre la que la comunidad proyecta el retorno de los Tamaracas con caras nuevas.",
    limitation:
      "Es historia social contemporánea y no trata los relatos míticos: la conexión entre esa serie de daños y el ciclo de los Tamaracas la hace la comunidad, no el artículo.",
  }),
  caicedoComentarios2018: source({
    title: "Comentarios al libro de Guillermo Rendón sobre el descubrimiento de indígenas Quimbaya en Riosucio (Caldas), en Ciencia Nueva 2(1), pp. 154-171",
    author: "Luis Javier Caicedo",
    year: 2018,
    type: "artículo académico de revisión crítica",
    url: "https://revistas.utp.edu.co/index.php/historia/article/view/18261",
    summary:
      "Impide tratar «los ansermas» como una etnia unificada: muestra que Anserma fue un nombre colonial aplicado a unas treinta parcialidades y advierte contra las reconstrucciones que empalman Umbra, Kirma, Anserma y Quimbaya sin evidencia. De ahí que esta ficha hable de memoria regional y no de una creencia de todo un pueblo.",
    limitation:
      "Es una reseña crítica dirigida a una obra concreta y no menciona a Xixaraca, a Michua ni a los Tamaracas. Su aporte es de método.",
  }),
  ticoraumbra2025: source({
    title: "¿Es el umbra una lengua chocó?: un primer acercamiento desde la lingüística comparada, en Lengua y Sociedad 24(2)",
    author: "Simón González Ticora",
    year: 2025,
    type: "artículo de lingüística comparada",
    url: "https://www.scielo.org.pe/scielo.php?pid=S2413-26592025000200011&script=sci_arttext&tlng=es",
    summary:
      "Sirve para no asignar los nombres Tamaraca, Michua y Xixaraca a una familia lingüística concreta: concluye que el umbra no es chocó, que los parecidos con el emberá-chamí son de contacto, y que la relación entre anserma y umbra no puede precisarse con la evidencia disponible.",
    limitation:
      "Trabaja sobre un corpus pequeño y declara él mismo que sus conclusiones son preliminares. No analiza ninguno de los tres nombres de esta ficha.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickAnsermasSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ansermasSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Anserma desconocida: ${visto}`);
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
