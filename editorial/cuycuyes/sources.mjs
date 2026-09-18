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
};

export function pickCuycuyesSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = cuycuyesSources[key];
    if (!selected) throw new Error(`Fuente Cuycuy desconocida: ${key}`);
    return selected;
  });
}
