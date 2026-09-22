function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const orinoquiaMestizoFinalSources = {
  vargasPrimary: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro primario digitalizado",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2797/download",
    summary:
      "Publica los once cuentos firmados que originan las rutas revisadas y permite controlar argumento, lenguaje, secuencia y autoría.",
    limitation:
      "Es una obra literaria individual, no una transcripción neutral de tradición oral ni una fuente histórica suficiente para sus afirmaciones internas.",
  }),
  vargasBanrep: source({
    title: "Cuentos, mitos y leyendas del llano: ficha bibliográfica",
    author: "Biblioteca Virtual del Banco de la República",
    year: 1996,
    type: "catálogo bibliográfico institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Controla título, autor, edición, cobertura llanera y acceso al ejemplar digital.",
    limitation:
      "El catálogo describe la publicación, pero no valida como hechos los sucesos narrados por el autor.",
  }),
  vargasCervantes: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "repositorio bibliográfico académico",
    url: "https://www.cervantesvirtual.com/obra/cuentos-mitos-y-leyendas-del-llano-1165049/",
    summary:
      "Ofrece control independiente de la obra, su autoría y su pertenencia a la literatura colombiana de tema llanero.",
    limitation:
      "La ficha no constituye una segunda recolección oral ni corrobora detalles históricos del argumento.",
  }),
  vargasBogota: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Biblioteca Digital de Bogotá",
    year: 1996,
    type: "registro de biblioteca pública",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2092921/",
    summary:
      "Documenta circulación bibliotecaria y datos editoriales del volumen de Getulio Vargas Barón.",
    limitation:
      "Es control bibliográfico; no aporta informantes diferentes ni autentica genealogías, curaciones o sucesos sobrenaturales.",
  }),
  vargasWorldcat: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "WorldCat",
    year: 1996,
    type: "catálogo internacional de bibliotecas",
    url: "https://search.worldcat.org/title/Cuentos-mitos-y-leyendas-del-llano/oclc/318388273",
    summary:
      "Confirma la identidad bibliográfica y presencia del libro en colecciones institucionales.",
    limitation:
      "No analiza la relación entre invención autoral y repertorio folclórico.",
  }),
  vargasGoogleBooks: source({
    title: "Cuentos, mitos y leyendas del Llano",
    author: "Google Books",
    year: 1996,
    type: "índice bibliográfico",
    url: "https://books.google.com/books/about/Cuentos_mitos_y_leyendas_del_Llano.html?id=kDTyAQAACAAJ",
    summary:
      "Aporta otro control de autor, título y año de publicación del volumen.",
    limitation:
      "La vista no sustituye la lectura del ejemplar primario ni una investigación histórica externa.",
  }),
  vargasTiempoReview: source({
    title: "El llano en once relatos",
    author: "El Tiempo",
    year: 1997,
    type: "reseña periodística contemporánea",
    url: "https://www.eltiempo.com/archivo/documento/MAM-524842",
    summary:
      "Presenta el volumen como once cuentos de un autor y documenta su recepción temprana como obra literaria llanera.",
    limitation:
      "La reseña es promocional y no evalúa críticamente estereotipos, datos históricos o apropiaciones culturales.",
  }),
  vargasTiempoAnnouncement: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "El Tiempo",
    year: 1996,
    type: "noticia editorial contemporánea",
    url: "https://www.eltiempo.com/archivo/documento/MAM-515777",
    summary:
      "Registra la aparición del libro y su intención de convertir materiales y paisajes llaneros en narraciones escritas.",
    limitation:
      "No es una fuente independiente sobre los hechos internos de cada cuento.",
  }),
  pittType160: source({
    title: "Folktale Type 160: Grateful Animals, Ungrateful Man",
    author: "D. L. Ashliman, University of Pittsburgh",
    type: "catálogo comparativo de tipos folclóricos",
    url: "https://sites.pitt.edu/~dash/type0160.html",
    summary:
      "Identifica el ciclo internacional en que animales rescatados recompensan a una persona mientras el humano salvado actúa con ingratitud.",
    limitation:
      "El catálogo compara argumentos de múltiples tradiciones; no prueba una transmisión oral directa hacia Vargas Barón.",
  }),
  uamCalila: source({
    title: "Tradición y transmisión de Calila e Dimna",
    author: "Universidad Autónoma de Madrid",
    type: "investigación académica de historia literaria",
    url: "https://repositorio.uam.es/server/api/core/bitstreams/ab8981e7-bcda-4862-bfc2-a027d321ec08/content",
    summary:
      "Contextualiza las etapas de traducción y reelaboración que conectan materiales orientales, árabes y castellanos de Calila e Dimna.",
    limitation:
      "No estudia el cuento de Vicente y Encuentro ni demuestra qué edición conoció el autor llanero.",
  }),
  cervantesCalila: source({
    title: "Las fábulas del Panchatantra y sus versiones en Kalilah wa-Dimnah y Calila e Dimna",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "estudio académico de literatura comparada",
    url: "https://www.cervantesvirtual.com/portales/agustin_moreto/obra/las-fabulas-del-panchatantra-y-sus-nuevas-versiones-en-el-kalilah-wa-dimnah-arabe-y-el-calila-e-dimna-espanol/",
    summary:
      "Distingue los grandes estadios textuales del Panchatantra, la versión árabe y el Calila e Dimna castellano.",
    limitation:
      "Ofrece genealogía literaria general y no atribuye la historia llanera de Encuentro a esos libros.",
  }),
  arbesuCalila: source({
    title: "Calila e Dimna: edición completa",
    author: "David Arbesú, editor",
    type: "edición académica de texto medieval",
    url: "https://www.davidarbesu.com/uploads/3/0/7/1/3071571/calila_y_dimna_completo.pdf",
    summary:
      "Permite controlar directamente motivos, marco y tradición castellana de la colección de ejemplos animales.",
    limitation:
      "La coincidencia temática no convierte todo episodio con animales agradecidos en copia literal de un pasaje único.",
  }),

  baqueroPrimary: source({
    title: "Los cuentos de Pascual: mitos y leyendas del piedemonte llanero",
    author: "Alberto Baquero Nariño",
    year: 1988,
    type: "libro primario digitalizado",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2818/download",
    summary:
      "Publica el preámbulo sobre mitos de transición y los seis relatos revisados, con su lenguaje, escenas y atribución autoral completa.",
    limitation:
      "Es literatura firmada; su voz pícara incluye misoginia, coerción, homofobia, violencia y pseudociencia que no deben reproducirse como norma cultural.",
  }),
  baqueroBanrep: source({
    title: "Los cuentos de Pascual: ficha bibliográfica",
    author: "Biblioteca Virtual del Banco de la República",
    year: 1988,
    type: "catálogo bibliográfico institucional",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2818/",
    summary:
      "Identifica ocho narraciones de Alberto Baquero Nariño sobre la imaginería cultural llanera y cataloga la obra como cuentos y cuentería.",
    limitation:
      "La descripción institucional reconoce su interés cultural, pero no convierte cada escena en testimonio oral literal.",
  }),
  baqueroCervantes: source({
    title: "Los cuentos de Pascual",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "repositorio bibliográfico académico",
    url: "https://www.cervantesvirtual.com/obra/los-cuentos-de-pascual-1165112/",
    summary:
      "Controla autoría, título y circulación académica de la colección del piedemonte llanero.",
    limitation:
      "No ofrece informantes distintos ni corrobora las supuestas fechas, curaciones o episodios políticos narrados.",
  }),
  baqueroWorldcat: source({
    title: "Los cuentos de Pascual: mitos y leyendas del piedemonte llanero",
    author: "WorldCat",
    year: 1988,
    type: "catálogo internacional de bibliotecas",
    url: "https://search.worldcat.org/es/title/cuentos-de-pascual-mitos-y-leyendas-del-piedemonte-llanero/oclc/33058441",
    summary:
      "Confirma la edición de Villavicencio y la identidad bibliográfica de la obra de Baquero Nariño.",
    limitation:
      "Es control de publicación y no una segunda fuente narrativa.",
  }),
  baqueroCanal: source({
    title: "El Tirapiedra: mitos y leyendas del piedemonte",
    author: "Canal Llanero",
    year: 2016,
    type: "republicación regional del cuento",
    url: "https://canalllanero.blogspot.com/2016/06/el-tirapiedra-mitos-y-leyendas-del.html",
    summary:
      "Documenta recepción digital del Tirapiedra y conserva la atribución a Los cuentos de Pascual.",
    limitation:
      "Es una republicación, no una versión oral independiente; no valida como hechos el origen universitario ni la violencia política.",
  }),
  baqueroCun: source({
    title: "Imaginarios y narrativas del piedemonte llanero",
    author: "Corporación Unificada Nacional de Educación Superior",
    type: "investigación académica contextual",
    url: "https://repositorio.cun.edu.co/server/api/core/bitstreams/0a24983e-874c-4bf7-bfb4-66fc925a705a/content",
    summary:
      "Usa la obra de Baquero dentro de estudios contemporáneos sobre representación cultural e identidad del piedemonte.",
    limitation:
      "Su mención contextual no autentica cada motivo ni elimina la mediación literaria del autor.",
  }),
  baqueroTiempo: source({
    title: "Alberto Baquero y la escritura del Llano",
    author: "El Tiempo",
    type: "perfil periodístico de autor",
    url: "https://www.eltiempo.com/archivo/documento/MAM-12460",
    summary:
      "Sitúa a Baquero Nariño como escritor e investigador regional y ayuda a leer las piezas como producción autoral.",
    limitation:
      "No es una evaluación crítica de Los cuentos de Pascual ni prueba de sus episodios sobrenaturales.",
  }),
  baqueroOrinoquia: source({
    title: "Cultura, poblamiento e identidad de la Orinoquía",
    author: "Alberto Baquero Nariño",
    type: "artículo académico de contexto regional",
    url: "https://orinoquia.unillanos.edu.co/index.php/orinoquia/article/download/211/659",
    summary:
      "Permite contrastar la reflexión regional del autor con la voz ficcional, humorística y extrema de Pascual.",
    limitation:
      "El artículo contextualiza al autor, pero no convierte los cuentos en etnografía ni autoriza sus remedios y conductas.",
  }),

  caribabareLlanera: source({
    title: "La leyenda del tesoro de Caribabare",
    author: "Temis Perea Pedroza; reproducción de Llanera.com",
    year: 2010,
    type: "versión regional atribuida",
    url: "https://llanera.com/llanos/la-leyenda-del-tesoro-de-caribabare/26675",
    summary:
      "Narra al padre Manare, la bóveda, el riachuelo desviado y la sombra guardiana, y cita antecedentes impresos sobre la hacienda.",
    limitation:
      "Mezcla datos económicos, tradición y rumores petroleros; cada capa debe distinguirse y no prueba que exista un depósito.",
  }),
  caribabareExternado: source({
    title: "Tras el leco del cabrestero",
    author: "Universidad Externado de Colombia",
    type: "trabajo académico sobre cultura e historia llanera",
    url: "https://bdigital.uexternado.edu.co/bitstreams/a9bbea8d-5172-4534-a743-2d98e3bfa5ef/download",
    summary:
      "Separa la gran hacienda jesuita de la leyenda posterior sobre Manare, la excavación y la sombra de plenilunio.",
    limitation:
      "Reproduce la leyenda desde fuentes secundarias y no aporta evidencia material del tesoro.",
  }),
  caribabareCanal: source({
    title: "San Salvador del Puerto del Casanare y Caribabare",
    author: "Canal Llanero",
    year: 2015,
    type: "divulgación histórica regional",
    url: "https://canalllanero.blogspot.com/2015/07/san-salvador-del-puerto-del-casanare-y.html",
    summary:
      "Relaciona el puerto, la hacienda, las misiones y la circulación regional del relato del tesoro.",
    limitation:
      "No publica documentación primaria de Manare ni localización verificable de una bóveda.",
  }),
  caribabareBanrepHistory: source({
    title: "Historia regional de los Llanos y la hacienda Caribabare",
    author: "Boletín Cultural y Bibliográfico, Banco de la República",
    type: "estudio histórico regional",
    url: "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/download/1815/1869",
    summary:
      "Aporta contexto histórico sobre misiones, poblamiento, ganadería y propiedades jesuitas en los Llanos.",
    limitation:
      "El contexto histórico no demuestra los detalles sobrenaturales ni el contenido exacto del supuesto tesoro.",
  }),
  caribabareRegiones: source({
    title: "Colombia, país de regiones: empresas misioneras",
    author: "Banco de la República",
    type: "síntesis histórica regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2817/download",
    summary:
      "Ubica Caribabare cerca de Paz de Ariporo y documenta su papel entre las principales haciendas jesuitas de los Llanos.",
    limitation:
      "No registra una bóveda, un mapa ni la aparición del padre Manare.",
  }),
  caribabareUasb: source({
    title: "Misiones jesuitas, economía y territorio en la Orinoquía",
    author: "Universidad Andina Simón Bolívar",
    type: "investigación histórica académica",
    url: "https://repositorio.uasb.edu.ec/server/api/core/bitstreams/aece393c-363d-49d5-b71c-36e49f00237d/content",
    summary:
      "Contextualiza la empresa misional, los circuitos económicos y la expulsión de la Compañía de Jesús.",
    limitation:
      "La historia institucional no prueba que los bienes fueran ocultados mediante el procedimiento descrito por la leyenda.",
  }),
  caribabareLibertadores: source({
    title: "Patrimonio narrativo y leyendas de la Orinoquía",
    author: "Fundación Universitaria Los Libertadores",
    type: "investigación educativa regional",
    url: "https://repository.libertadores.edu.co/server/api/core/bitstreams/c0a3a577-a45b-46f7-97ba-adc120998902/content",
    summary:
      "Registra la permanencia del tesoro de Caribabare dentro de repertorios y mediaciones culturales llaneras.",
    limitation:
      "Su función pedagógica no equivale a una excavación arqueológica ni a un inventario colonial del depósito.",
  }),
  caribabareNunchia: source({
    title: "Diagnóstico del centro histórico de Nunchía",
    author: "Alcaldía de Nunchía",
    type: "plan institucional de patrimonio",
    url: "https://www.nunchia-casanare.gov.co/MiMunicipio/Documentos%20Patrimonio/Etapa%20I%20Diagnostico%20Centro%20Historico%20Nunch%C3%ADa%20Casanare.pdf",
    summary:
      "Reconoce la leyenda del tesoro de Caribabare como referente del patrimonio cultural del Casanare.",
    limitation:
      "Demuestra recepción patrimonial, no la existencia material del tesoro ni la biografía del guardián.",
  }),

  bolaBaquero: source({
    title: "Preámbulo: la imaginería popular",
    author: "Alberto Baquero Nariño",
    year: 1988,
    type: "ensayo primario dentro de Los cuentos de Pascual",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2818/download#page=8",
    summary:
      "Describe la Bola de Fuego o Candileja como luz veloz del repertorio llanero y señala que las narraciones populares cambian de forma.",
    limitation:
      "Es interpretación de un escritor regional; no fija un origen único ni prueba que la aparición queme viajeros.",
  }),
  bolaTiempo: source({
    title: "Mitos y leyendas: riqueza del Llano",
    author: "Llano 7 días; El Tiempo",
    year: 2005,
    type: "reportaje de tradición regional",
    url: "https://www.eltiempo.com/archivo/documento/mam-1630248",
    summary:
      "Registra la Bola de Fuego entre relatos transmitidos en los Llanos y conserva su función de advertencia nocturna.",
    limitation:
      "La recreación periodística no demuestra apariciones ni establece una biografía única.",
  }),
  bolaMen: source({
    title: "Lenguaje 7: comparación de versiones de la Bola de Fuego",
    author: "Ministerio de Educación Nacional",
    type: "guía pedagógica oficial",
    url: "https://contenidos.mineducacion.gov.co/ntg/men/archivos/Referentes_Calidad/Modelos_Flexibles/Secundaria_Activa/Guias_del_estudiante/Lenguaje/LG_Grado07.pdf",
    summary:
      "Presenta versiones distintas y convierte su comparación en ejercicio escolar de lectura.",
    limitation:
      "Es mediación educativa, no registro de campo ni prueba de que una versión sea la original.",
  }),
  bolaEsap: source({
    title: "Leyenda de la Bola de Fuego",
    author: "Repositorio CDIM, Escuela Superior de Administración Pública",
    type: "documento territorial con repertorio cultural",
    url: "https://repositoriocdim.esap.edu.co/bitstream/handle/20.500.14471/11011/5957-8.pdf?isAllowed=y&sequence=8",
    summary:
      "Registra el relato dentro de un inventario territorial y permite controlar su circulación regional.",
    limitation:
      "No identifica una cadena completa de informantes ni prueba instrucciones de protección sobrenatural.",
  }),
  bolaCasanareAntigua: source({
    title: "Mitos y leyendas: la Bolefuego",
    author: "Casanare Antigua",
    year: 2020,
    type: "memoria digital local",
    url: "https://casanareantigua.blogspot.com/2020/07/mitos-y-leyendas-la-bolefuego.html",
    summary:
      "Conserva nombre, movimiento luminoso y fórmulas narrativas reconocidas en Casanare.",
    limitation:
      "Es divulgación local sin edición crítica; las contras mágicas se documentan, no se recomiendan.",
  }),
  bolaEncantos: source({
    title: "El mito de la Bola de Fuego",
    author: "Casanare, tierra de encantos",
    year: 2018,
    type: "divulgación cultural local",
    url: "https://casanaretierradeencantos.blogspot.com/2018/03/mitos-y-leyendas-casanare-el-mito-de.html",
    summary:
      "Publica una variante casanareña y muestra que la apariencia y la causa del castigo no son uniformes.",
    limitation:
      "No ofrece fuentes primarias identificadas y no debe convertirse en origen exclusivo.",
  }),
  bolaVillanueva: source({
    title: "Elementos de la cultura de Villanueva",
    author: "Memoria cultural de Villanueva, Casanare",
    type: "inventario cultural municipal",
    url: "https://villanueva-casanare1962.blogspot.com/p/parte-iii-elementos-de-la-cultura.html",
    summary:
      "Incluye la Bola de Fuego en el repertorio reconocido del municipio y aporta evidencia de circulación territorial.",
    limitation:
      "La lista cultural no corrobora fechas, víctimas ni una apariencia física exacta.",
  }),
  candilejaScrd: source({
    title: "La Candileja",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "divulgación institucional de folclor colombiano",
    url: "https://ant.culturarecreacionydeporte.gov.co/en/node/1127",
    summary:
      "Describe la Candileja de tres luces y permite compararla con la bola luminosa móvil de versiones llaneras.",
    limitation:
      "Es una síntesis divulgativa y no demuestra que todas las Bolas de Fuego sean idénticas a la versión tolimense.",
  }),
};

const vargasKeys = [
  "vargasPrimary",
  "vargasBanrep",
  "vargasCervantes",
  "vargasBogota",
  "vargasWorldcat",
  "vargasGoogleBooks",
  "vargasTiempoReview",
  "vargasTiempoAnnouncement",
];

const lealKeys = [
  "vargasPrimary",
  "vargasBanrep",
  "vargasTiempoReview",
  "vargasCervantes",
  "pittType160",
  "uamCalila",
  "cervantesCalila",
  "arbesuCalila",
];

const baqueroKeys = [
  "baqueroPrimary",
  "baqueroBanrep",
  "baqueroCervantes",
  "baqueroWorldcat",
  "baqueroCanal",
  "baqueroCun",
  "baqueroTiempo",
  "baqueroOrinoquia",
];

const caribabareKeys = [
  "caribabareLlanera",
  "caribabareExternado",
  "caribabareCanal",
  "caribabareBanrepHistory",
  "caribabareRegiones",
  "caribabareUasb",
  "caribabareLibertadores",
  "caribabareNunchia",
];

const bolaKeys = [
  "bolaBaquero",
  "bolaTiempo",
  "bolaMen",
  "bolaEsap",
  "bolaCasanareAntigua",
  "bolaEncantos",
  "bolaVillanueva",
  "candilejaScrd",
];

const vargasSlugs = new Set([
  "amanecer-llanero",
  "el-toro-negro-patorreal",
  "los-delfines-dorados",
  "la-culebra-cascabel",
  "el-llano-ayer-hoy",
  "los-tres-luceros",
  "el-llano-cobra-sus-deudas",
  "las-chanzas-de-don-felipe",
  "el-brujo-de-la-costa-del-pauto",
  "leal-hasta-la-muerte",
  "la-tertulia-de-la-italiana",
]);

const baqueroSlugs = new Set([
  "el-tirapiedra",
  "los-monstruos-de-paratebueno",
  "el-dominguez",
  "madre-rio-o-mohana",
  "la-bruja-de-los-ojos-miel",
  "el-domador-de-brujas",
]);

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickOrinoquiaMestizoFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickOrinoquiaMestizoFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = orinoquiaMestizoFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickOrinoquiaMestizoFinalSourcesHeredadas(slug) {
  const keys = slug === "leal-hasta-la-muerte"
    ? lealKeys
    : vargasSlugs.has(slug)
    ? vargasKeys
    : baqueroSlugs.has(slug)
      ? baqueroKeys
      : slug === "el-tesoro-de-caribare"
        ? caribabareKeys
        : slug === "la-bola-de-fuego"
          ? bolaKeys
          : null;
  if (!keys) throw new Error(`${slug}: no tiene selección de fuentes.`);
  return keys.map((key) => orinoquiaMestizoFinalSources[key]);
}
