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

export const boyacaMixtoResidualSources = {
  liliaJbb: source({
    title: "Mitos, leyendas, tradiciones y folclor del Lago de Tota",
    author: "Lilia Montaña de Silva Celis; catálogo del Jardín Botánico de Bogotá",
    year: 1970,
    type: "registro bibliográfico institucional de la obra fuente",
    url: "https://catalogo.jbb.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=2122",
    summary:
      "Controla autora, título, fecha y existencia del libro sobre el lago de Tota que incluye Los mensajeros de los dioses.",
    limitation:
      "El catálogo no ofrece informantes, fecha de recolección ni el texto completo; no basta para calificar cada escena como tradición prehispánica.",
  }),
  liliaWorldcat: source({
    title: "Mitos, leyendas, tradiciones y folclor del Lago de Tota",
    author: "Lilia Montaña de Silva Celis; WorldCat",
    year: 1970,
    type: "control bibliográfico internacional",
    url: "https://search.worldcat.org/es/title/mitos-leyendas-tradiciones-y-folclor-del-lago-de-tota/oclc/2460936",
    summary:
      "Confirma la edición de Tunja, su extensión y la autoría de Montaña de Silva Celis.",
    limitation:
      "Es control de edición, no una fuente independiente del argumento ni prueba de transmisión oral antigua.",
  }),
  elTiempoMayavita: source({
    title: "Aves mensajeras del Sol",
    author: "Redacción El Tiempo",
    year: 2002,
    type: "reproducción periodística atribuida de la narración",
    url: "https://www.eltiempo.com/archivo/documento/MAM-1321433",
    summary:
      "Reproduce a Mongatá, Mayavita, las aves de hojas, el vuelo sobre Tota, la caída y el regreso de las guacamayas durante la ceremonia de Sua.",
    limitation:
      "Son apartes periodísticos de la versión de Montaña y contienen explicaciones lingüísticas que no se adoptan sin contraste especializado.",
  }),
  lorosJbb: source({
    title: "Loros de Colombia",
    author: "José Vicente Rodríguez Mahecha y Jorge Ignacio Hernández Camacho",
    year: 2002,
    type: "registro bibliográfico de guía ornitológica que reutilizó la leyenda",
    url: "https://catalogo.jbb.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=2944",
    summary:
      "Controla la guía citada por El Tiempo y la recepción naturalista de la narración de las guacamayas.",
    limitation:
      "Una guía de aves documenta reutilización contemporánea, no el origen oral ni la antigüedad del relato.",
  }),
  caroLilia: source({
    title: "Lilia Montaña de Silva Celis: memoria, folclor y escritura",
    author: "Instituto Caro y Cuervo",
    year: 2022,
    type: "estudio académico sobre la autora y su obra",
    url: "https://bibliotecadigital.caroycuervo.gov.co/1862/1/2022-80768352.pdf",
    summary:
      "Contextualiza la trayectoria intelectual de Montaña y registra Los mensajeros de los dioses dentro de su trabajo sobre Tota.",
    limitation:
      "El estudio explica autoría y circulación; no recupera por sí solo una cadena oral anterior a la publicación de 1970.",
  }),
  hijosAgua: source({
    title: "Los hijos del agua",
    author: "Susana Henao Montoya",
    year: 1995,
    type: "novela de recepción literaria",
    url: "https://books.google.com/books/about/Los_hijos_del_agua.html?id=WikfAQAAIAAJ",
    summary:
      "Alude a Mongatá y Mayavita dentro de una obra literaria posterior, evidencia de circulación del relato en la narrativa colombiana.",
    limitation:
      "La novela no es fuente etnográfica ni versión independiente y no debe completar vacíos de la edición de Montaña.",
  }),
  ocampoMitos: source({
    title: "Mitos y leyendas indígenas de Colombia",
    author: "Javier Ocampo López",
    year: 1997,
    type: "compilación histórica y folclórica digitalizada",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Recoge tradiciones muiscas y muzo, entre ellas las mojas mensajeras del Sol, Are creador y el ciclo de Fura y Tena.",
    limitation:
      "Mezcla relato, síntesis secundaria y paralelos universalistas; sus comparaciones clásicas no se tratan como parte de las tradiciones indígenas.",
  }),
  ovidRaven: source({
    title: "Metamorphoses, Book II",
    author: "Ovidio; Perseus Digital Library",
    type: "texto clásico comparativo directo",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D2",
    summary:
      "Incluye el cuervo de Apolo que lleva una noticia y cuyo plumaje cambia, útil para comparar función mensajera y transformación cromática.",
    limitation:
      "Es un relato grecorromano sin vínculo genealógico demostrado con Tota, Mayavita o las guacamayas.",
  }),

  puebloBoyacense: source({
    title: "El pueblo boyacense y su folclor",
    author: "Javier Ocampo López",
    type: "monografía folclórica regional digitalizada por el Banco de la República",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Sitúa al Cucacuy en el Valle de Tenza y describe a un hombre desnudo que busca calor en hornillas y fogones.",
    limitation:
      "La síntesis no documenta en la página consultada una cadena completa de narradores ni un único relato estable para toda Boyacá.",
  }),
  uptcLexicon: source({
    title: "Léxico de la tradición oral del Valle de Tenza",
    author: "Universidad Pedagógica y Tecnológica de Colombia",
    year: 2014,
    type: "artículo lingüístico con datos de campo recogidos en 2010",
    url: "https://revistas.uptc.edu.co/index.php/linguistica_hispanica/article/download/2764/4946",
    summary:
      "Registra cocacuy, cucacuy, cucuyé y quicacuy como guardián de tesoros con una uña larga perforada para silbar.",
    limitation:
      "Un registro léxico resume rasgos de la creencia, pero no fija una biografía única ni conecta automáticamente la figura moderna con usos coloniales.",
  }),
  uptcInventory: source({
    title: "Inventario del patrimonio cultural inmaterial de Sutatenza",
    author: "Universidad Pedagógica y Tecnológica de Colombia",
    year: 2015,
    type: "inventario académico y municipal de tradición local",
    url: "https://repositorio.uptc.edu.co/server/api/core/bitstreams/1c564948-8def-4456-9f14-cda32b69c788/content",
    summary:
      "Recoge en Sutatenza al Cucacuy desnudo, su silbido engañoso, la macana y su presencia en moliendas y casas.",
    limitation:
      "La ficha reproduce una monografía local y elementos moralizantes; no permite generalizar cada rasgo a todas las provincias boyacenses.",
  }),
  uptcMincho: source({
    title: "El Mincho: memoria oral y patrimonio cultural de Miraflores",
    author: "Universidad Pedagógica y Tecnológica de Colombia",
    year: 2019,
    type: "trabajo de grado con versión de Lengupá",
    url: "https://repositorio.uptc.edu.co/bitstream/001/2996/1/TGT_1531.pdf",
    summary:
      "Registra al Cucacuy como cerdo, a veces de oro, que lleva un duende silbador y aparece en trapiches durante las moliendas nocturnas.",
    limitation:
      "Es una variante de Miraflores/Lengupá y no debe fundirse sin aviso con el hombre desnudo del Valle de Tenza.",
  }),
  corpoboyacaPomca: source({
    title: "Caracterización socioeconómica y cultural del POMCA del río Garagoa",
    author: "Corpoboyacá y entidades asociadas",
    year: 2017,
    type: "documento institucional de caracterización territorial",
    url: "https://www.corpoboyaca.gov.co/cms/wp-content/uploads/2017/12/8-Volumen-III-caracterizacion-socioeconomica-cultural.pdf",
    summary:
      "Registra la versión del hombre desnudo, su pacto con el diablo, el bastón y la calabaza con demonios en el Valle de Tenza.",
    limitation:
      "Es una síntesis de patrimonio para ordenamiento ambiental, no una edición crítica ni prueba de un origen único.",
  }),
  sanEduardoPot: source({
    title: "Esquema de Ordenamiento Territorial de San Eduardo",
    author: "Municipio de San Eduardo y ESAP",
    type: "documento municipal con tradición local",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/0950249b-4ba1-4f98-b924-cc090cb49209/download",
    summary:
      "Incluye al Cucacuy desnudo, el silbido de la uña, la custodia de tesoros y el bastón asociado con demonios.",
    limitation:
      "La ficha municipal no identifica todos sus transmisores y conserva interpretaciones cristianas tardías.",
  }),
  muyscaCucacuy: source({
    title: "MU/cucacuy",
    author: "Muysc cubun, diccionario y fuentes coloniales colaborativas",
    type: "entrada lexicográfica con remisión documental",
    url: "https://muysca.cubun.org/MU/cucacuy",
    summary:
      "Reúne variantes gráficas modernas y cita un uso colonial de cocacuyes para especialistas rituales o personas calificadas como brujos.",
    limitation:
      "La semejanza de las palabras no prueba continuidad semántica entre el término colonial y el espanto moderno del Valle de Tenza.",
  }),
  boyaca7Dias: source({
    title: "Relatos y tradición oral de la provincia de Lengupá",
    author: "Boyacá 7 Días",
    year: 2020,
    type: "divulgación periodística de memoria oral regional",
    url: "https://boyaca7dias.com.co/2020/10/31/relatos-y-tradicion-oral-de-la-provincia-de-lengupa/",
    summary:
      "Difunde la variante del animal con duende vinculada a noches de molienda en Lengupá.",
    limitation:
      "Es una publicación de divulgación y no sustituye las entrevistas ni el contexto del trabajo académico que resume.",
  }),

  piedrahitaBanrep: source({
    title: "Historia general de las conquistas del Nuevo Reino de Granada",
    author: "Lucas Fernández de Piedrahita; Biblioteca Virtual del Banco de la República",
    year: 1688,
    type: "crónica colonial digitalizada",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/3164/",
    summary:
      "Es una de las crónicas tardías utilizadas para transmitir noticias sobre los muzo, Are y Furatena.",
    limitation:
      "Fue escrita más de un siglo después de la conquista desde una mirada colonial; no es voz muzo directa ni registro neutral.",
  }),
  bha05: source({
    title: "Boletín de Historia y Antigüedades, número 5",
    author: "Academia Colombiana de Historia",
    type: "historiografía temprana sobre relatos y poblamiento muzo",
    url: "https://academiahistoria.org.co/boletines/BHA-05.pdf",
    summary:
      "Repite a Are como sombra, la talla de figuras de madera y su animación junto al agua.",
    limitation:
      "Añade una interpretación difusionista de invasiones caribes propia de su época que no se presenta como hecho comprobado.",
  }),
  bha36: source({
    title: "Boletín de Historia y Antigüedades, número 36",
    author: "Academia Colombiana de Historia",
    type: "historiografía de comienzos del siglo XX",
    url: "https://academiahistoria.org.co/boletines/BHA-36.pdf",
    summary:
      "Permite rastrear cómo historiadores posteriores reutilizaron el relato de creación muzo para teorías de migración y origen.",
    limitation:
      "Sus hipótesis raciales y migratorias están históricamente situadas y no equivalen a memoria oral muzo corroborada.",
  }),
  perezBarradas: source({
    title: "Los Chibchas antes de la conquista española",
    author: "José Pérez de Barradas",
    year: 1950,
    type: "síntesis etnohistórica digitalizada",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Los_Chibchas_antes_de_la_conquista_espa%C3%B1ola_%28IA_b24875375%29.pdf",
    summary:
      "Reúne noticias coloniales y etnográficas sobre muzo, colimas, Furatena y relaciones regionales.",
    limitation:
      "Usa categorías y modelos de mediados del siglo XX que requieren lectura crítica y no aportan testimonio indígena contemporáneo.",
  }),
  popolVuh: source({
    title: "Popol Vuh: Sacred Book of the Quiché Maya People",
    author: "Traducción y comentarios de Allen J. Christenson",
    year: 2007,
    type: "edición académica de texto comparativo directo",
    url: "https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf",
    summary:
      "Describe una creación de seres de madera que fracasa, útil para contrastar material semejante y resultado opuesto.",
    limitation:
      "Pertenece a tradición maya k’iche’; la comparación formal no demuestra contacto ni parentesco con el ciclo de Are.",
  }),
  banrepBachue: source({
    title: "Cosmovisión en el río Bogotá",
    author: "Enciclopedia del Banco de la República",
    type: "síntesis institucional sobre cosmovisión muisca",
    url: "https://enciclopedia.banrepcultural.org/Cosmovisi%C3%B3n_en_el_r%C3%ADo_Bogot%C3%A1",
    summary:
      "Presenta a Bachué y su compañero emergiendo de Iguaque y poblando el territorio, comparación regional de origen ligada al agua.",
    limitation:
      "Es tradición muisca, no muzo; no talla figuras de madera ni convierte a Bachué en versión de Are.",
  }),
  locFuratena: source({
    title: "Peñones de Furatena y mina de esmeraldas de Muzo",
    author: "Carmelo Fernández; Library of Congress",
    year: 1850,
    type: "acuarela histórica y registro geográfico institucional",
    url: "https://www.loc.gov/resource/gdcwdl.wdl_09131/?r=-0.52%2C-0.011%2C2.041%2C0.831%2C0&st=image",
    summary:
      "Documenta visualmente el paisaje de los peñones y las minas de Muzo durante la Comisión Corográfica.",
    limitation:
      "La imagen contextualiza territorio y recepción decimonónica; no representa el acto creador de Are ni verifica una escena mítica.",
  }),

  boyapazFuratena: source({
    title: "Corporación BOYAPAZ: relato de Fura y Tena",
    author: "Diócesis de Chiquinquirá; versión atribuida a Víctor Julio Mendieta Verges",
    year: 2013,
    type: "versión local contemporánea con atribución",
    url: "https://www.diocesisdechiquinquira.org/node/380",
    summary:
      "Narra a Are, la creación de Fura y Tena, el pacto de fidelidad, Zarbi, la transformación en peñones, río, esmeraldas y mariposas.",
    limitation:
      "Es una versión contemporánea institucional y no permite fechar cada motivo ni presentarlo como texto prehispánico intacto.",
  }),
  rosarioFuratena: source({
    title: "Furatena",
    author: "Eliécer Suárez Forero; Revista del Colegio Mayor de Nuestra Señora del Rosario",
    type: "ensayo literario e histórico digitalizado",
    url: "https://repository.urosario.edu.co/bitstream/handle/10336/36792/16_Furatena_pag_588_595.pdf?sequence=1",
    summary:
      "Cita a fray Pedro Simón sobre Furatena como mujer encumbrada, el cerro menor como hijo y la peregrinación muisca al adoratorio.",
    limitation:
      "El autor también compone una leyenda propia de Fura, su hijo y una guerra; esa recreación no es la misma trama de Fura, Tena y Zarbi.",
  }),
  eanFuratena: source({
    title: "Narrativas culturales del occidente de Boyacá",
    author: "Universidad EAN",
    type: "trabajo académico contemporáneo con versión divulgativa",
    url: "https://repository.universidadean.edu.co/server/api/core/bitstreams/83701adb-4a58-48b9-a10f-960c93d31671/content",
    summary:
      "Recoge una versión de Are, figuras de tierra, juventud condicionada, Zarbi, infidelidad, muerte y lágrimas convertidas en esmeraldas.",
    limitation:
      "La denominación de tradición oral no reemplaza una genealogía detallada de informantes y la redacción puede armonizar motivos tardíos.",
  }),
  rioMinero: source({
    title: "El río Minero: representaciones sociales y memoria del territorio",
    author: "Estudio antropológico difundido por Dialnet",
    type: "artículo académico con testimonios contemporáneos",
    url: "https://dialnet.unirioja.es/descarga/articulo/4862224.pdf",
    summary:
      "Registra nombres como Furatena y Pitisoque y relatos actuales de cerros encantados, guardianes y una mujer llamada Furatena.",
    limitation:
      "Las voces contemporáneas muestran variación viva; no confirman una versión única ni todos los episodios del romance de Zarbi.",
  }),
  inahIztaccihuatl: source({
    title: "Iztaccíhuatl, la mujer dormida",
    author: "Instituto Nacional de Antropología e Historia de México",
    type: "síntesis institucional de leyenda comparativa",
    url: "https://inah.gob.mx/foto-del-dia/iztaccihuatl-la-mujer-dormida",
    summary:
      "Presenta la transformación paisajística de una pareja trágica en los volcanes Iztaccíhuatl y Popocatépetl.",
    limitation:
      "No contiene a Are, Zarbi, río de sangre, mariposas ni esmeraldas y no demuestra relación histórica con los muzo.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  eSAPEsquemasf: source({
    title: "Esquema de Ordenamiento Territorial de San Eduardo (Boyacá)",
    author: "Municipio de San Eduardo (repositorio ESAP)",
    year: "s. f.",
    type: "documento de planeación municipal",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/0950249b-4ba1-4f98-b924-cc090cb49209/download",
    summary:
      "El esquema municipal recoge el Cucacuy, parafraseando a Ocampo, como guarda del dinero enterrado en luna llena en Lengupá, y en la misma página el Biato que compara Similitudes (p. 31).",
    limitation:
      "Documento de planeación; su texto deriva de Ocampo.",
  }),
  corpoboyacaPOMCA2017: source({
    title: "POMCA del río Alto Suárez (2401-01), vol. III: caracterización socioeconómica y cultural",
    author: "Corpoboyacá",
    year: 2017,
    type: "plan de ordenamiento de cuenca",
    url: "https://www.corpoboyaca.gov.co/cms/wp-content/uploads/2017/12/8-Volumen-III-caracterizacion-socioeconomica-cultural.pdf",
    summary:
      "La caracterización cultural de la cuenca del Alto Suárez registra el Cucacuy con bordón y calavera (§4.1.5.7).",
    limitation:
      "Informe técnico; no da narradores.",
  }),
  gallegoInfluencia2014: source({
    title: "Influencia léxica del muisca en el español actual clasificada en campos semánticos",
    author: "D. Giraldo Gallego",
    year: 2014,
    type: "artículo (Cuadernos de Lingüística Hispánica 24, pp. 145-162)",
    url: "http://www.scielo.org.co/pdf/clin/n24/n24a09.pdf",
    summary:
      "Registra «cocacuy» entre los préstamos del muisca en el español del Valle de Tenza y del oriente de Cundinamarca.",
    limitation:
      "Estudio léxico: documenta la palabra, no el relato. SciELO Colombia sólo publica por http.",
  }),
  tiempoCuentos2004: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Casa Editorial El Tiempo, dir. Juan Torres Mantilla",
    year: 2004,
    type: "libro ilustrado de ficción declarada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Trae el Cucacuy en sus pp. 35-36, con ficha técnica y un fragmento de una novela ficticia.",
    limitation:
      "El libro se declara «documentos imaginarios»; la entrada es composición de autor.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo III",
    author: "Eugenia Villa Posse (compiladora)",
    year: 1993,
    type: "antología (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Texto del relato de Javier Ocampo López, Mitos colombianos (1988), en la sección 33, pp. 153-155: Are crea a Fura y Tena, Zarbi, la muerte de los tres, las lágrimas que se vuelven esmeraldas y mariposas, y en las páginas previas la cacica de Guatavita que compara Similitudes.",
    limitation:
      "Ocampo elabora literariamente; no da narrador.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II (sección 20, Mitos del Tolima: Misael Devia, «Folclor tolimense», 1962)",
    author: "Eugenia Villa Posse (investigación y compilación); Misael Devia",
    year: 1993,
    type: "antología con texto reproducido de folclorólogo",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Texto del relato de Lilia Montaña de Silva Celis (1970) en la sección 23, pp. 231-243: Mongatá, la esposa abandonada, Mayavita y las aves de hojas de grao que se vuelven guacamayas mensajeras del Sol, con el vocabulario de la autora.",
    limitation:
      "Villa Posse advierte una «elaboración excesivamente literaria» de la tradición campesina de Tota.",
  }),
  caroConversas2022: source({
    title: "Conversas del lago de Tota y el valle de Sogamoso",
    author: "Huérfano Huérfano (Instituto Caro y Cuervo)",
    year: 2022,
    type: "tesis de maestría",
    url: "https://bibliotecadigital.caroycuervo.gov.co/1862/1/2022-80768352.pdf",
    summary:
      "Describe el libro de Montaña (nueve mitos y 786 coplas) y su contexto en las excavaciones de Eliécer Silva Celis en el Templo del Sol.",
    limitation:
      "Estudio de las conversas de Tota; no reproduce el relato.",
  }),
};

const sourceKeysBySlug = {
  "los-mensajeros-de-los-dioses": [
    "liliaJbb",
    "elTiempoMayavita",
    "caroLilia",
    "liliaWorldcat",
    "lorosJbb",
    "hijosAgua",
    "ocampoMitos",
    "ovidRaven",
  ],
  "el-cucacuy": [
    "puebloBoyacense",
    "uptcLexicon",
    "uptcInventory",
    "uptcMincho",
    "corpoboyacaPomca",
    "sanEduardoPot",
    "muyscaCucacuy",
    "boyaca7Dias",
  ],
  "la-sombra-creadora": [
    "ocampoMitos",
    "piedrahitaBanrep",
    "bha05",
    "bha36",
    "perezBarradas",
    "popolVuh",
    "banrepBachue",
    "locFuratena",
  ],
  furatena: [
    "boyapazFuratena",
    "ocampoMitos",
    "rosarioFuratena",
    "piedrahitaBanrep",
    "locFuratena",
    "eanFuratena",
    "rioMinero",
    "inahIztaccihuatl",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickBoyacaMixtoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickBoyacaMixtoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = boyacaMixtoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickBoyacaMixtoResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = boyacaMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
