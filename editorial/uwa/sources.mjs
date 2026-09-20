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

export const uwaSources = {
  historiasAncestrales: source({
    title: "Historias ancestrales U’wa — Kajkin Luin Karita",
    author:
      "Institución Etnoeducativa U’wa Izketa Segovia; textos y traducción de Senén Ríos Santos y Camilo Delgado Rodríguez",
    year: 2020,
    type: "libro bilingüe de memoria comunitaria y etnoeducación",
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2020-12/Libro_UWA.pdf",
    summary:
      "Publica nueve narraciones seleccionadas y revisadas con niños, dinamizadores y autoridades U’wa de Norte de Santander, en castellano y u’wajka.",
    limitation:
      "Es una selección pedagógica pública de una tradición mucho más amplia; esta revisión la parafrasea y no reproduce sus textos ni ilustraciones.",
  }),
  osborn1995: source({
    title: "Las cuatro estaciones: mitología y estructura social entre los U’wa",
    author: "Ann Osborn",
    year: 1995,
    type: "monografía etnográfica y estudio de mitos cantados",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll18/id/446/",
    summary:
      "Documenta la cosmología de colores, deidades, ciclos Reowa y Aya, el ordenamiento de las abejas y otros cantos Kubaruwa dentro de sus ceremonias estacionales.",
    limitation:
      "Se concentra en el clan Kubaruwa y en registros de las décadas de 1970 y 1980; no representa por sí sola todas las comunidades ni autoriza a separar cantos de su contexto.",
  }),
  leyesOrigenOnic: source({
    title: "Documento madre: Leyes de Origen de los pueblos indígenas de Colombia",
    author:
      "Secretaría Técnica de la Mesa Permanente de Concertación y Organización Nacional Indígena de Colombia",
    year: 2022,
    type: "síntesis indígena e interinstitucional de leyes de origen",
    url: "https://smt-onic.com/media/pdf/DOCUMENTO_MADRE_Leyes_de_Origen_vf_SMT-ONIC.pdf",
    summary:
      "Explica para el pueblo U’wa la unión creadora de los mundos de arriba y abajo, el universo de colores y la responsabilidad de los cantos en el sostenimiento del mundo.",
    limitation:
      "Es una síntesis comparativa nacional y remite a fuentes anteriores; no transcribe cada narración ni cada variación de clan.",
  }),
  caracterizacionMincultura: source({
    title: "Caracterizaciones de los pueblos indígenas de Colombia: Pueblo U’wa",
    author: "Dirección de Poblaciones, Ministerio de Cultura",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20UWA.pdf",
    summary:
      "Sitúa territorio, lagunas de origen, clanes, lengua, mitos Reowa y Aya, miel, autoridades y continuidad cultural U’wa.",
    limitation:
      "Resume bibliografía y planes de salvaguarda; algunos pasajes reflejan categorías institucionales o lecturas sincréticas que no deben uniformar las voces U’wa.",
  }),
  icanhUwa: source({
    title: "Pueblo U’wa",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "ficha etnográfica institucional",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/U%C2%B4WA.php",
    summary:
      "Confirma autodenominación, lengua, territorio en la Cordillera Oriental y continuidad de la defensa de la Madre Tierra.",
    limitation:
      "Es una ficha breve de contexto y no una fuente narrativa independiente.",
  }),
  mininteriorMitos: source({
    title: "Archivo de mitos de pueblos indígenas de Colombia",
    author: "Ministerio del Interior",
    type: "portal institucional de documentos narrativos",
    url: "https://www.mininterior.gov.co/direccion-de-asuntos-indigenas-rom-y-minorias/mitos/",
    summary:
      "Conserva el acceso institucional al compendio donde circuló la síntesis del mito U’wa de la creación y a otros archivos regionales.",
    limitation:
      "El portal reúne materiales de procedencias y calidades distintas; la edición contrasta su síntesis con Osborn y fuentes comunitarias.",
  }),
  alonsoCreacion: source({
    title: "El mito U’wa de la creación desde la psicología analítica",
    author: "Juan Carlos Alonso",
    year: 2008,
    type: "estudio comparativo basado en la investigación de Ann Osborn",
    url: "https://www.adepac.org/inicio/el-mito-uwa-de-la-creacion-desde-la-psicologia-analitica/",
    summary:
      "Presenta la secuencia de Rurcocá, Sira, Canwará, los mundos de colores y la creación del mundo intermedio a partir de registros de Osborn.",
    limitation:
      "Su lectura central es junguiana; esta revisión usa la secuencia documentada, no las equivalencias arquetípicas propuestas por el autor.",
  }),
  abejasScielo: source({
    title: "Calendario reproductivo en mujeres indígenas U’wa (Tunebo) de Boyacá, Colombia",
    author: "Carmen Elisa Flórez y otros",
    year: 2013,
    type: "artículo académico de contexto demográfico y cultural",
    url: "https://www.scielo.org.mx/scielo.php?pid=S1405-74252013000100007&script=sci_arttext",
    summary:
      "Recoge la centralidad social de las abejas sin aguijón como hijas del Sol, vinculadas con fertilidad, comienzo y continuidad de la vida U’wa.",
    limitation:
      "No publica el mito completo; remite al trabajo de Falchetti y Nates-Parra y se usa como corroboración temática.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  cabreraComer1990: source({
    title: "Comer y ser comido: los animales en la tradición oral u’wa (tunebo)",
    author: "Ann Osborn; traducción de Fabricio Cabrera",
    year: 1990,
    type: "artículo de revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7083",
    summary:
      "Su resumen del mito cantado del aya conserva el canto 13, donde Rukwa advierte que todo está creado pero nada se ha puesto en movimiento y mezcla el calor del sol con el agua de los lagos del mundo de arriba, desencadenando a la vez la vida y la mortalidad.",
    limitation:
      "Es una síntesis de veintiocho páginas centrada en los animales, no en la cosmogonía; la propia edición advierte que se basa en dos versiones corregidas parcialmente por la autora antes de morir. No cubre el comienzo absoluto del universo.",
  }),
  laverdeLinajes1995: source({
    title: "Linajes y circuitos de matrimonio en tres grupos chibcha: u’wa, kogui y muisca",
    author: "Eduardo Londoño Laverde",
    year: 1995,
    type: "artículo de revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6977",
    summary:
      "Sirve para acotar la comparación con otras cosmogonías chibchas: muestra que lo comparable entre u’wa, kogui y muisca es la arquitectura del parentesco y la alianza, no el elenco de deidades.",
    limitation:
      "No analiza mitos de creación ni cita este relato; su aporte a la ficha es metodológico y se usa solo para delimitar hasta dónde llega una comparación entre pueblos chibchas.",
  }),
  perezestructuras1996: source({
    title: "Las estructuras de pensamiento dual en el ámbito de las sociedades indígenas de los Andes Orientales",
    author: "Roberto Lleras Pérez",
    year: 1996,
    type: "artículo de revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6932",
    summary:
      "Sitúa el dualismo arriba-abajo de esta cosmogonía dentro del conjunto de las sociedades indígenas de los Andes Orientales, donde los pares de opuestos son la norma.",
    limitation:
      "Es un estudio regional de larga escala que no trabaja directamente con material u’wa de primera mano; sirve de contraste y no sostiene ningún dato del relato.",
  }),
  torresResena1991: source({
    title: "Reseña de «Tengo los pies en la cabeza», de Berichá (Esperanza Aguablanca)",
    author: "William Torres",
    year: 1991,
    type: "reseña de libro en revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7023",
    summary:
      "Documenta que existe una autobiografía mitogónica escrita por una mujer U’wa, Berichá, hija de uejes y de mancena, y que en su cultura una transgresión alimentaria acarrea consecuencias corporales duraderas.",
    limitation:
      "Solo se pudo consultar la reseña de dos páginas, no el libro de 1992: todo lo que de allí se toma llega filtrado por el reseñista y no por la autora u’wa.",
  }),
  falchettiofrenda1997: source({
    title: "La ofrenda y la semilla: notas sobre el simbolismo del oro entre los Uwa",
    author: "Ana María Falchetti",
    year: 1997,
    type: "artículo de revista arbitrada",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6882",
    summary:
      "Documenta el intercambio silencioso por el que los U’wa dejaban cera de abejas y otros productos en puntos ceremoniales y recogían después objetos de oro que decían dejados por las abejas, lo que explica la tierra amarilla que las abejas reciben como pago en el mito.",
    limitation:
      "Su objeto es el simbolismo del oro y no el mito de las abejas, que trata de forma lateral apoyándose en Osborn; el texto digitalizado tiene errores de reconocimiento óptico en varios pasajes.",
  }),
  ruedaTres1987: source({
    title: "Tres formas de acceso a recursos en territorio de la Confederación del Cocuy, siglo XVI",
    author: "Carl Henrik Langebaek Rueda",
    year: 1987,
    type: "artículo de revista arbitrada de etnohistoria documental",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7214",
    summary:
      "Documenta con visitas y pleitos coloniales del siglo XVI la red de acceso a recursos del territorio de la Confederación del Cocuy —Chita, Panqueba, El Pueblo de la Sal, Sacamá, Ura, Ogamora—, con la sal en bloque como bien central, y registra que en 1772 todavía se acusaba a los tunebos de Güicán de persistir en sus prácticas.",
    limitation:
      "Es etnohistoria de archivo sobre el siglo XVI y no recoge ningún relato oral; el vínculo con Monoa es que documenta el circuito de trueque, no el episodio ni sus personajes.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickUwaSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = uwaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente U’wa desconocida: ${visto}`);
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
