function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const andinaVariosMixtoResidualSources = {
  ocampoAntioquia: source({
    title: "Mitos y leyendas de Antioquia la grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "compilación folclórica con ficha bibliográfica",
    url: "https://books.google.com/books/about/Mitos_y_leyendas_de_Antioquia_la_grande.html?id=9DeSlEufFMEC",
    summary:
      "Compila a la Mano Peluda, el Viejo del Costal y el Hojarasquín del Monte y permite ubicar sus motivos en repertorios regionales colombianos.",
    limitation:
      "La vista disponible no expone todas las notas ni la cadena completa de informantes para cada pasaje.",
  }),
  ocampoColombia: source({
    title: "Mitos, leyendas y relatos colombianos",
    author: "Javier Ocampo López",
    year: 2006,
    type: "síntesis folclórica nacional",
    url: "https://books.google.com/books/about/Mitos_leyendas_y_relatos_colombianos.html?id=lARg1lafMBAC",
    summary:
      "Registra la Mano Peluda y otros espantos dentro de una síntesis nacional y aporta una segunda referencia bibliográfica del compilador.",
    limitation:
      "Es una compilación posterior y no convierte por sí sola cada motivo en testimonio oral independiente.",
  }),
  tunjaMano: source({
    title: "El Espanto de La Mano Peluda",
    author: "Javier Ocampo López; Tunja Tesoros Escondidos",
    type: "divulgación local atribuida",
    url: "https://www.tunjatesorosescondidos.com/index.php/escudo-de-tunja/193-el-espanto-de-la-mano-peluda",
    summary:
      "Describe una mano verdosa, peluda e incorpórea que aparece en el convento de La Candelaria y en casas antiguas de Tunja.",
    limitation:
      "La ambientación colonial no aporta una fecha comprobada para el nacimiento de la creencia.",
  }),
  senalMano: source({
    title: "Mitos y leyendas colombianas",
    author: "Señal Colombia",
    type: "divulgación cultural pública",
    url: "https://www.senalcolombia.tv/cultura/mitos-y-leyendas-colombianas",
    summary:
      "Difunde la variante cundiboyacense de una mano grande, peluda, de uñas largas y separada del cuerpo que asusta o arrastra niños.",
    limitation:
      "Resume circulación contemporánea y no identifica informantes ni demuestra una antigüedad colonial exacta.",
  }),
  radioNacionalMano: source({
    title: "Nueve mitos y leyendas en las regiones de Colombia",
    author: "Radio Nacional de Colombia",
    type: "divulgación regional de medio público",
    url: "https://www.radionacional.co/cultura/historia-colombiana/mitos-y-leyendas-de-colombia-nueve-relatos-en-las-regiones",
    summary:
      "Sitúa la Mano Peluda entre Cundinamarca y Boyacá y confirma la circulación nacional del núcleo incorpóreo.",
    limitation:
      "Es una síntesis periodística y no una recolección etnográfica autónoma.",
  }),
  boyacaRadioMano: source({
    title: "La Mano Peluda, espanto de Boyacá",
    author: "Boyacá Radio",
    year: 2018,
    type: "divulgación periodística local",
    url: "https://www.boyacaradio.com/noticia.php?id=19514",
    summary:
      "Asocia la aparición con La Candelaria y casas antiguas de Tunja, donde se mueve por muros y ventanas y asusta caminantes.",
    limitation:
      "Su calificativo colonial es una atribución divulgativa, no una datación archivística demostrada.",
  }),
  raeCoco: source({
    title: "coco",
    author: "Real Academia Española",
    type: "entrada lexicográfica comparativa",
    url: "https://dle.rae.es/coco",
    summary:
      "Define al coco como ser imaginario usado para meter miedo a los niños, comparación funcional con amenazas disciplinarias.",
    limitation:
      "La definición no describe una mano autónoma ni prueba parentesco con la tradición cundiboyacense.",
  }),
  cervantesSaco: source({
    title: "Personajes del miedo en la tradición oral",
    author: "Centro Virtual Cervantes",
    type: "estudio paremiológico comparativo",
    url: "https://cvc.cervantes.es/lengua/paremia/pdf/031/005_garcia.pdf",
    summary:
      "Examina al coco y al hombre del saco como figuras usadas para disciplinar o asustar niños en tradiciones hispánicas.",
    limitation:
      "La semejanza de función no demuestra que la Mano Peluda colombiana proceda de una figura europea única.",
  }),

  colombiaAprendeHojarasquin: source({
    title: "Proyecto 5: La Colombia de todos",
    author: "Colombia Aprende; Ministerio de Educación Nacional",
    type: "material educativo público con atribución bibliográfica",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/rural-adultos/1_Coleccion_Avanzada_Programa_de_Educacion_Rural_PER/4-Modelos_Educativos_Flexibles/3-Aceleracion%20_del_aprendizaje/Materiales_Estudiantes/Proyecto-5-La_Colombia_de_todos.pdf",
    summary:
      "Reproduce una versión atribuida a Ocampo: un leñador corta un guayacán, la Madremonte lo juzga y lo obliga a reemplazar el árbol.",
    limitation:
      "Es una adaptación escolar de una compilación, no transcripción directa de una entrevista comunitaria.",
  }),
  esapHojarasquin: source({
    title: "Inventario turístico y cultural de Risaralda",
    author: "ESAP y entidades territoriales de Risaralda",
    type: "inventario institucional de patrimonio local",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/572d52ab-2933-4d57-97f6-e17f39163934/download",
    summary:
      "Registra al protector de bosques como hombre-árbol, mico velludo o híbrido, capaz de perder o guiar viajeros y confundir cazadores con huellas.",
    limitation:
      "El inventario sintetiza variantes y no identifica la cadena de informantes detrás de cada forma.",
  }),
  caldasHojarasquin: source({
    title: "Información general del municipio de Samaná",
    author: "Gobernación de Caldas",
    type: "ficha municipal institucional",
    url: "https://caldas.gov.co/media/pdf/2014/infomunicipios/INFORMACION%20DE%20SAMANa.pdf",
    summary:
      "Documenta circulación local del Hojarasquín como protector del monte que puede adoptar rasgos vegetales o animales.",
    limitation:
      "Repite una síntesis administrativa cercana a otros inventarios y no cuenta como tradición independiente para cada detalle.",
  }),
  redalycProtectores: source({
    title: "Seres protectores y sentido de arraigo en narrativas ambientales",
    author: "Artículo académico alojado en Redalyc",
    year: 2023,
    type: "análisis académico ecocrítico",
    url: "https://www.redalyc.org/journal/4983/498380014009/html/",
    summary:
      "Analiza al Hojarasquín como guardián del bosque y distingue formas de árbol humano, híbrido y mico gigante en compilaciones colombianas.",
    limitation:
      "Interpreta textos publicados y no sustituye trabajo etnográfico con las comunidades que los transmiten.",
  }),
  banrepFolclor: source({
    title: "El pueblo boyacense y su folclor",
    author: "Javier Ocampo López; Biblioteca del Banco de la República",
    type: "monografía folclórica digitalizada",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Incluye al Hojarasquín dentro de repertorios colombianos y aporta contexto regional a la circulación del personaje.",
    limitation:
      "Su alcance comparativo no vuelve boyacense cada variante ni proporciona informantes para todos los motivos.",
  }),
  semanaOcampo: source({
    title: "Relatos de terror y misterio",
    author: "Javier Ocampo López; Semana",
    year: 2005,
    type: "entrevista y divulgación de folclor",
    url: "https://www.semana.com/amp/relatos-terror-misterio/73421-3/",
    summary:
      "Explica procesos de transmisión folclórica y enumera al Hojarasquín entre figuras antropomorfas de repertorios colombianos.",
    limitation:
      "Es una intervención divulgativa del compilador y no una fuente primaria de una versión local concreta.",
  }),
  samanaTioConejo: source({
    title: "El Hojarasquín",
    author: "Agustín Jaramillo Londoño; Samaná Caldas",
    year: 1963,
    type: "cuento literario local del ciclo de Tío Conejo",
    url: "https://www.samanacaldas.net.co/folclorver.php?idfolclor=4",
    summary:
      "Presenta a Tío Conejo cubierto de miel y hojas que usa el nombre Hojarasquín para asustar animales en un bebedero.",
    limitation:
      "Es un homónimo literario y no debe mezclarse con el guardián forestal de las compilaciones folclóricas.",
  }),
  curupiraInstituto: source({
    title: "Curupira",
    author: "Instituto Florestal, Gobierno del Estado de São Paulo",
    type: "divulgación institucional comparativa",
    url: "https://www.infraestruturameioambiente.sp.gov.br/institutoflorestal/curupira/",
    summary:
      "Describe al protector brasileño de bosques y animales que confunde cazadores mediante huellas invertidas.",
    limitation:
      "Pertenece a contextos brasileños y tupíes; la función semejante no demuestra genealogía con el Hojarasquín.",
  }),

  izquierdoVilla: source({
    title: "Mitos aborígenes de Colombia, volumen III",
    author: "Villa Posse, compilador; sección de Mariano Izquierdo Gallo",
    year: 1993,
    type: "compilación digitalizada de ensayo comparativo de 1956",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Reproduce Esperanza en el Oriente y explicita sus reservas: propone, sin demostrarla, una lectura común de héroes y entierros orientados al este.",
    limitation:
      "Es una hipótesis del autor basada en comparaciones selectivas, no una narración oral ni consenso arqueológico.",
  }),
  tacitoPerseus: source({
    title: "Histories 5.13",
    author: "Tácito; Perseus Digital Library",
    type: "texto clásico primario en edición digital",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0080%3Abook%3D5%3Achapter%3D13",
    summary:
      "El pasaje habla de un poder surgido en Oriente y de gobernantes procedentes de Judea con dominio universal.",
    limitation:
      "No formula una creencia universal en un salvador oriental ni se refiere a pueblos americanos.",
  }),
  uvaWorldLeader: source({
    title: "The World Leader from the Land of the Jews",
    author: "Universidad de Ámsterdam",
    type: "estudio académico de la profecía en fuentes romanas y judías",
    url: "https://dare.uva.nl/id/50bd6e18-a895-4cfb-892a-01273d5581a2",
    summary:
      "Contextualiza el oráculo paralelo en Josefo, Tácito y Suetonio como interpretación política de liderazgo mundial.",
    limitation:
      "Estudia el mundo romano y judío; no respalda una conexión con Bochica, Quetzalcóatl o entierros zenúes.",
  }),
  acostaCementerio: source({
    title: "Biografías de hombres ilustres o notables de Colombia",
    author: "Joaquín Acosta y compiladores decimonónicos",
    type: "obra histórica digitalizada con descripción funeraria",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Biografias_de_hombres_ilustres_o_notables%2C_relativas_a_la_epoca_del_descubrimiento%2C_conquista_y_colonizacion_de_la_parte_de_America_denominada_actualmente_EE._UU._de_Colombia_%28IA_biografiasdehomb00acos%29.pdf",
    summary:
      "Conserva descripciones históricas de túmulos, cuerpos y ajuares en el ámbito zenú utilizadas por comparatistas posteriores.",
    limitation:
      "Una orientación corporal observada no demuestra por sí sola esperanza de resurrección ni una doctrina común americana.",
  }),
  banrepMuiscas: source({
    title: "Los señores muiscas",
    author: "Martha Herrera Ángel; Banco de la República",
    type: "ensayo histórico institucional",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-44/los-senores-muiscas",
    summary:
      "Presenta versiones cronísticas sobre Bochica, su llegada y su papel cultural dentro de tradiciones muiscas diferenciadas.",
    limitation:
      "Las divergencias cronísticas impiden usar a Bochica como prueba simple de un héroe panamericano venido del este.",
  }),
  inahSerpiente: source({
    title: "La serpiente emplumada en Mesoamérica",
    author: "Instituto Nacional de Antropología e Historia de México",
    type: "ficha institucional de iconografía y religión mesoamericana",
    url: "https://repositorio.inah.gob.mx/o-35233",
    summary:
      "Contextualiza a Quetzalcóatl y Kukulcán dentro de historias, ciudades y funciones religiosas mesoamericanas específicas.",
    limitation:
      "Compartir rasgos civilizadores no convierte esas deidades en versiones de Bochica ni prueba un origen oriental común.",
  }),
  inahQuetzalcoatl: source({
    title: "Quetzalcóatl: historia y complejidad de una deidad",
    author: "Instituto Nacional de Antropología e Historia de México",
    type: "divulgación académica institucional",
    url: "https://www.feriadelibro.inah.gob.mx/FILAH36/views/user/detalle_evento.php?id=329",
    summary:
      "Subraya la complejidad histórica de Quetzalcóatl y evita reducirlo a un único extranjero civilizador.",
    limitation:
      "No trata a Colombia ni valida las equivalencias propuestas por Izquierdo Gallo.",
  }),
  banrepArqueologia: source({
    title: "Arqueología de Colombia: un texto introductorio",
    author: "Gerardo Reichel-Dolmatoff; Biblioteca del Banco de la República",
    year: 1997,
    type: "síntesis arqueológica e historia comparativa",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll9/id/18/download",
    summary:
      "Contextualiza a Bochica como héroe cultural muisca y muestra cómo la arqueología del siglo XX comparó elementos colombianos y mesoamericanos.",
    limitation:
      "Las semejanzas comparativas requieren evidencia material e histórica específica y no establecen una religión panamericana única.",
  }),
};

const sourceKeysBySlug = {
  "la-mano-peluda": [
    "ocampoAntioquia",
    "tunjaMano",
    "senalMano",
    "ocampoColombia",
    "radioNacionalMano",
    "boyacaRadioMano",
    "raeCoco",
    "cervantesSaco",
  ],
  "el-hojarasquin-del-monte": [
    "ocampoAntioquia",
    "colombiaAprendeHojarasquin",
    "esapHojarasquin",
    "caldasHojarasquin",
    "redalycProtectores",
    "banrepFolclor",
    "samanaTioConejo",
    "curupiraInstituto",
  ],
  "esperanza-en-el-oriente": [
    "izquierdoVilla",
    "tacitoPerseus",
    "uvaWorldLeader",
    "acostaCementerio",
    "banrepMuiscas",
    "inahSerpiente",
    "inahQuetzalcoatl",
    "banrepArqueologia",
  ],
};

export function pickAndinaVariosMixtoResidualSources(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = andinaVariosMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
