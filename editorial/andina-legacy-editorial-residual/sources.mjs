function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const andinaLegacyEditorialResidualSources = {
  zasquaCase: source({
    title:
      "Causa criminal contra Lorenzo de Paz Maldonado por doble homicidio en Popayán",
    author:
      "Centro de Investigaciones Históricas José María Arboleda Llorente; Universidad del Cauca",
    year: 1591,
    type: "catálogo archivístico de expediente judicial primario",
    url: "https://zasqua.org/co-cihjml-acc-01200-judicial-i-cr/",
    summary:
      "Describe la causa de 1591 por las muertes de Catalina de Belalcázar y Francisco García de Tobar, registra versiones testimoniales divergentes y el volumen conservado.",
    limitation:
      "El expediente perdió sus primeros 106 folios y la ficha no conserva el resultado de la apelación; tampoco contiene una leyenda sobre una ñapanga hechizada.",
  }),
  salcedoWomenPopayan: source({
    title:
      "La mujer, los vecindarios y los barrios de Popayán en el siglo XVII",
    author: "Jaime Salcedo Salcedo",
    year: 2012,
    type: "artículo académico de historia urbana y social",
    url: "https://dialnet.unirioja.es/descarga/articulo/5684749.pdf",
    summary:
      "Reconstruye parentescos, vivienda, malos tratos previos, pruebas circunstanciales, condena y apelación; identifica además a mujeres indígenas presentes en el expediente.",
    limitation:
      "Interpreta el proceso desde una investigación posterior y no acredita el disfraz de ñapanga, el poeta mestizo ni una relación amorosa consumada.",
  }),
  llanosElitePopayan: source({
    title:
      "Surgimiento, permanencia y transformaciones históricas de la élite criolla de Popayán (siglos XVI-XIX)",
    author: "Héctor Llanos Vargas",
    type: "ensayo académico de historia social",
    url: "https://historiayespacio.univalle.edu.co/index.php/historia_y_espacio/article/download/4720/6886/",
    summary:
      "Sitúa el matrimonio de Catalina y Lorenzo entre familias descendientes de conquistadores y trata a García de Tobar como posible amante, no como hecho probado.",
    limitation:
      "Depende del expediente catalogado por Arboleda Llorente y estudia élites; no es una transcripción completa del proceso ni una fuente del relato moderno.",
  }),
  tobarDrama: source({
    title: "Catalina de Belalcázar: un drama de la Colonia",
    author: "Oscar Tobar Gómez; reproducción de Pachajoa",
    year: 2002,
    type: "divulgación histórica basada en el proceso de Popayán y Quito",
    url: "https://www.geocities.ws/pachajoa2000/cata.htm",
    summary:
      "Resume el doble homicidio, el proceso contra Lorenzo de Paz Maldonado y la recepción histórica local del caso.",
    limitation:
      "Es una reproducción web sin aparato crítico completo y no debe desplazar el catálogo archivístico ni los estudios académicos.",
  }),
  ivooxCatalina: source({
    title: "Catalina, una ñapanga hechizada de amor",
    author: "Marco Antonio Valencia Calle; lectura de Alejandra Henao",
    year: 2020,
    type: "lectura sonora de una recreación literaria contemporánea",
    url: "https://www.ivoox.com/catalina-una-napanga-hechizada-de-amor-audios-mp3_rf_63092301_1.html",
    summary:
      "Identifica el relato como pieza del libro Leyendas extraordinarias de Popayán y permite controlar el motivo amoroso y la caracterización de Catalina como ñapanga.",
    limitation:
      "Es literatura narrada en 2020, no testimonio colonial ni evidencia de que Catalina adoptara históricamente esa identidad o indumentaria.",
  }),
  udesLegends: source({
    title:
      "El escritor Marco Antonio Valencia presentó su obra Leyendas Extraordinarias de Popayán",
    author: "Universidad de Santander",
    year: 2021,
    type: "presentación institucional de autor y obra",
    url: "https://bucaramanga.udes.edu.co/extension/noticias/el-escritor-marco-antonio-valencia-presento-su-obra-leyendas-extraordinarias-de-popayan-en-la-udes",
    summary:
      "Describe el libro como obra literaria y de realismo mágico que enlaza personajes históricos con narración contemporánea destinada a circular.",
    limitation:
      "Es una entrevista promocional; documenta la mediación creativa del autor, no la antigüedad oral de cada episodio.",
  }),
  proclamaLegends: source({
    title: "Leyendas extraordinarias de Popayán",
    author: "Donaldo Mendoza; Proclama del Cauca y Valle",
    year: 2015,
    type: "reseña cultural contemporánea",
    url: "https://proclamadelpacifico.com/leyendas-extraordinarias-de-popayan/",
    summary:
      "Reseña la primera edición, su extensión y sus ilustraciones, y valora la escritura periodística, poética y narrativa de Valencia Calle.",
    limitation:
      "No analiza el expediente de Catalina ni demuestra que sus elementos ficcionales procedan de tradición oral independiente.",
  }),
  unicaucaNapanga: source({
    title: "Payanceta: música y danza",
    author: "Universidad del Cauca",
    type: "trabajo académico sobre repertorios y personajes payaneses",
    url: "https://repositorio.unicauca.edu.co/bitstream/handle/123456789/8095/Payanceta_musica%20y%20danza.pdf?isAllowed=y&sequence=1",
    summary:
      "Reúne explicaciones actuales sobre la ñapanga como personaje típico de Popayán, sus oficios, vestuario y presencia festiva.",
    limitation:
      "Las etimologías y descripciones compiladas son posteriores y divergentes; no prueban que Catalina de Belalcázar fuese ñapanga en 1591.",
  }),

  isaacsCane: source({
    title: "La caña de azúcar en el Valle del Cauca",
    author: "Isabel Cristina Bermúdez Escobar; Centro Virtual Isaacs",
    type: "síntesis histórica universitaria",
    url: "https://cvisaacs.univalle.edu.co/historia-del-valle-del-cauca/la-cana-de-azucar-en-el-valle-del-cauca/",
    summary:
      "Explica la introducción de la caña, trapiches, acequias, trabajo indígena y africano, economías campesinas e industrialización del paisaje vallecaucano.",
    limitation:
      "Documenta historia agraria y cultural, pero no menciona un hada ni acredita una narración tradicional con ese nombre.",
  }),
  cvcSonso: source({
    title: "Distrito Regional de Manejo Integrado Laguna de Sonso",
    author: "SIDAP y Corporación Autónoma Regional del Valle del Cauca",
    type: "ficha oficial de área protegida",
    url: "https://sidap.cvc.gov.co/es/areas-protegidas/drmi-laguna-de-sonso",
    summary:
      "Identifica la laguna como principal humedal de la planicie aluvial, describe biodiversidad y registra la red de ríos, derivaciones y acequias que la alimenta.",
    limitation:
      "Sirve para construir un paisaje ecológico reconocible; no contiene seres tutelares ni una tradición de cañaverales.",
  }),
  cvcWetlands: source({
    title: "Humedales del Valle del Cauca",
    author: "SIDAP y Corporación Autónoma Regional del Valle del Cauca",
    type: "síntesis institucional de conservación",
    url: "https://sidap.cvc.gov.co/es/areas-protegidas/estrategias-complementarias/humedales",
    summary:
      "Explica la designación Ramsar del complejo del alto río Cauca y la alteración antrópica de humedales en la zona plana agrícola.",
    limitation:
      "No atribuye voz, voluntad o agencia sobrenatural al agua ni a la vegetación.",
  }),
  univalleStrike: source({
    title:
      "El paro de los corteros de la caña de azúcar 2008: un análisis desde la perspectiva de la acción colectiva",
    author: "Jhon Edier Jaramillo Ferro; Universidad del Valle",
    year: 2011,
    type: "trabajo de grado sobre acción colectiva laboral",
    url: "https://bibliotecadigital.univalle.edu.co/entities/publication/d84e04cb-a555-4a0e-a30c-f7c11f5b6583",
    summary:
      "Estudia a los corteros como protagonistas con saberes, demandas, relaciones e historia laboral dentro del valle geográfico del río Cauca.",
    limitation:
      "Analiza una movilización contemporánea; no es una recopilación folclórica ni justifica presentar una protectora mágica como creencia de los trabajadores.",
  }),
  virajesCutters: source({
    title:
      "Movilización de los corteros de caña de azúcar en el Valle del Cauca, huellas y despliegues de una acción colectiva",
    author: "Jhon Edier Jaramillo Ferro",
    year: 2017,
    type: "artículo académico de antropología y sociología",
    url: "https://revistasojs.ucaldas.edu.co/index.php/virajes/article/view/3191",
    summary:
      "Analiza cómo la huelga de 2008 produjo subjetividad política y visibilizó experiencias, emociones y relaciones de actores históricamente subordinados.",
    limitation:
      "Deriva de la misma línea de investigación del trabajo de grado y no constituye una segunda tradición del Hada.",
  }),
  univalleEnvironmental: source({
    title:
      "Caña de azúcar en el espléndido valle del río Cauca: historia ambiental, conflictos ambientales y acción colectiva",
    author: "Hernando Uribe Castro",
    year: 2021,
    type: "libro académico de historia ambiental",
    url: "https://libros.univalle.edu.co/index.php/programaeditorial/catalog/book/666",
    summary:
      "Relaciona la expansión cañera con fuentes de agua, biodiversidad, perjuicios ecosistémicos y respuestas comunitarias en el valle geográfico.",
    limitation:
      "Aporta la tensión ambiental de la fábula, pero no documenta su personaje ni un origen oral.",
  }),
  unalCutters: source({
    title:
      "Construcción y transformación de masculinidades de los corteros de caña de azúcar del Valle del Cauca",
    author: "Betsy Johana Castro Muñoz",
    year: 2016,
    type: "artículo cualitativo de sociología",
    url: "https://revistas.unal.edu.co/index.php/recs/article/view/56342",
    summary:
      "Trabaja con historias de vida de corteros reubicados y muestra que el corte es trabajo, subsistencia, cuerpo e interacción cotidiana, no simple decorado rural.",
    limitation:
      "Su población y problema son específicos; no deben generalizarse a toda persona que trabaja en la caña ni convertirse en folclor sobrenatural.",
  }),
  cvcBurns: source({
    title: "A partir de hoy se reducen las quemas de caña en el Valle del Cauca",
    author: "Corporación Autónoma Regional del Valle del Cauca",
    year: 2020,
    type: "comunicado oficial de regulación ambiental",
    url: "https://www.cvc.gov.co/2020255",
    summary:
      "Registra extensión cultivada, reducción de quemas controladas y compromisos de restauración del río Cauca, Laguna de Sonso y humedales asociados.",
    limitation:
      "Es comunicación institucional sobre una medida sectorial; no demuestra resultados posteriores ni tradición mítica.",
  }),

  ciezaChronicle: source({
    title: "Crónica del Perú, primera parte, capítulo XI",
    author: "Pedro Cieza de León",
    year: 1553,
    type: "crónica colonial temprana",
    url: "https://pruebatcdn.aprende.org/libros/pdf/Cronica_del_Peru.pdf",
    summary:
      "Nombra a Quinunchú como hermano y lugarteniente de Nutibara en las montañas de Abibe y describe relaciones de provisión, territorio y guerra.",
    limitation:
      "Fue escrita desde la mirada conquistadora, mezcla observación con retórica colonial y no menciona un silbo protector ni una Dueña del Monte.",
  }),
  cambridgeCieza: source({
    title:
      "Of the Cacique Nutibara, and of his territory, and of other Caciques subject to the city of Antioquia",
    author: "Pedro Cieza de León; edición de Cambridge University Press",
    type: "edición académica y resumen del capítulo XI",
    url: "https://www.cambridge.org/core/books/abs/travels-of-pedro-de-cieza-de-leon-ad-153250/of-the-cacique-nutibara-and-of-his-territory-and-of-other-caciques-subject-to-the-city-of-antioquia/99088A7842F7E249B10FABCE0503212E",
    summary:
      "Controla la ubicación del pasaje de Cieza y su asunto dentro de la descripción temprana de Antioquia.",
    limitation:
      "Es edición del mismo testimonio colonial y su resumen público no sustituye la lectura crítica del capítulo.",
  }),
  correaTerritorialization: source({
    title:
      "Procesos de territorialización en la Antioquia colonial, siglo XVI-XVII",
    author: "Juan Santiago Correa R.",
    type: "artículo académico de historia territorial",
    url: "https://repository.cesa.edu.co/bitstream/handle/10726/268/21.PROCESOS%20DE.pdf",
    summary:
      "Describe el cogobierno Guaca de Nutibara y Quinunchú, el mando de este en Abibe, la resistencia prolongada, su muerte en combate y el saqueo español.",
    limitation:
      "Reconstruye los hechos a partir de crónicas coloniales con cifras divergentes y no atribuye fenómenos sobrenaturales al líder.",
  }),
  correalLeaders: source({
    title: "Nomenclátor de líderes, héroes y mártires indígenas",
    author: "Gonzalo Correal Urrego",
    year: 2009,
    type: "artículo histórico de repertorio biográfico",
    url: "https://academiahistoria.org.co/boletines/BHA-847.pdf",
    summary:
      "Registra a Quinunchú como hijo de Anunaibe, hermano de Nutibara y jefe muerto frente a Francisco César, citando una escena de fray Pedro Simón.",
    limitation:
      "Reproduce el lenguaje heroico y violento de la crónica; la escena exacta no cuenta con testimonio indígena equivalente.",
  }),
  frontinoHistory: source({
    title: "Frontino: historia, territorio y poblamiento",
    author: "Academia Antioqueña de Historia",
    type: "historia local y revisión territorial",
    url: "https://academiaantioquenadehistoria.org/wp-content/uploads/2024/06/FrontinoWeb.pdf",
    summary:
      "Advierte que Nutibara y Quinunchú pertenecen al señorío de Guacá, en el occidente antioqueño, y no al valle de Aburrá.",
    limitation:
      "La precisión territorial no resuelve la autodenominación del pueblo ni todas las rutas de la expedición de 1537.",
  }),
  banrepZenu: source({
    title: "Los señores del Zenú",
    author: "Ana María Falchetti; Red Cultural del Banco de la República",
    year: 1992,
    type: "síntesis arqueológica e histórica de divulgación especializada",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-44/los-senores-del-zenu",
    summary:
      "Relaciona a los hijos de Anunaibe con Guaca y Zenufana, describe a Quinunchú como lugarteniente de montaña y contextualiza poblamiento, cultivos y rutas.",
    limitation:
      "Integra crónicas y arqueología en una síntesis regional; no convierte cada detalle colonial en voz directa de los Guaca.",
  }),
  ocampoAntioquia: source({
    title: "Mitos y leyendas de Antioquia la grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "repertorio folclórico e histórico publicado",
    url: "https://books.google.com/books/about/Mitos_y_leyendas_de_Antioquia_la_grande.html?id=9DeSlEufFMEC",
    summary:
      "Incluye el capítulo El cacique Nutibara y su hermano Quinunchú y documenta la recepción de ambos dentro del repertorio legendario antioqueño.",
    limitation:
      "La vista pública muestra índice y metadatos, no el capítulo completo; sirve para recepción, no para añadir episodios ausentes de las crónicas.",
  }),
  historyColombia1911: source({
    title: "Historia de Colombia para la enseñanza secundaria",
    author: "Jesús María Henao y Gerardo Arrubla",
    year: 1911,
    type: "manual histórico republicano digitalizado por la Biblioteca Nacional",
    url: "https://centrovirtual.idep.edu.co/wp-content/uploads/2015/12/1911%20-%20Historia%20de%20Colombia%20para%20ensenanza%20secundaria.pdf",
    summary:
      "Conserva una recepción temprana del siglo XX sobre Guaca, el combate, la muerte de Quinunchú y el duelo de quienes retiraron su cuerpo.",
    limitation:
      "Usa lenguaje racial y épico hoy inaceptable y depende de cronistas coloniales; se consulta como historia de la recepción, no como voz indígena.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  calleCatalina2013: source({
    title: "Catalina, La Ñapanga",
    author: "Marco Antonio Valencia Calle",
    year: 2013,
    type: "columna de prensa (relato literario)",
    url: "https://www.lanacion.com.co/catalina-la-napanga-por-marco-antonio-valencia/",
    summary:
      "Texto completo del relato: la sobrina del conquistador vestida de ñapanga un Martes Santo, el poeta Francisco García, la boda forzada de 1576 con Alonso de Paz, la criada Bárbula, los quince años de amores, el doble crimen y la apelación que dejó impune al marido.",
    limitation:
      "Ficción de autor sobre un caso real; mezcla nombres (Alonso/Lorenzo) y da por probado un adulterio que los autos no prueban.",
  }),
  llorenteCausa1591: source({
    title: "Causa criminal seguida contra el capitán Lorenzo de Paz Maldonado por la muerte de doña Catalina de Belalcázar y de Francisco García de Tobar (Archivo Central del Cauca, signatura 01200, Col. J I-2 cr)",
    author: "Centro de Investigaciones Históricas José María Arboleda Llorente, catálogo en Zasqua",
    year: 1591,
    type: "descripción archivística de expediente judicial",
    url: "https://zasqua.org/co-cihjml-acc-01200-judicial-i-cr/",
    summary:
      "Resume el proceso real que el relato novela: demandantes, sentencia del gobernador Cueva de Montesdoca (degüello, pérdida de encomienda y de la mitad de los bienes), apelación a Quito y los testimonios contrarios sobre la visita de García de Tobar.",
    limitation:
      "Es una ficha de catálogo, no el expediente; faltan los primeros 106 folios del original.",
  }),
  mendozaLeyendas2015: source({
    title: "Leyendas extraordinarias de Popayán, de Marco Antonio Valencia Calle (Editorial SIC, febrero 2015)",
    author: "Donaldo Mendoza",
    year: 2015,
    type: "reseña de prensa regional (Proclama del Pacífico)",
    url: "https://proclamadelpacifico.com/leyendas-extraordinarias-de-popayan/",
    summary:
      "Fecha y describe el libro donde el relato de Catalina quedó recogido: 125 páginas, veintiséis dibujos de Rodrigo Valencia Quijano, trece leyendas escritas entre periodismo, poesía y narración.",
    limitation:
      "Reseña elogiosa de un colega; no resume el relato de Catalina.",
  }),
  henaoCatalina2020: source({
    title: "Catalina una ñapanga hechizada de amor (episodio del pódcast Leyendas extraordinarias de Popayán)",
    author: "Marco Antonio Valencia Calle; lectura de Alejandra Henao",
    year: 2020,
    type: "audio (iVoox)",
    url: "https://www.ivoox.com/catalina-una-napanga-hechizada-de-amor-audios-mp3_rf_63092301_1.html",
    summary:
      "Versión leída del capítulo del libro de 2015, con su título definitivo; acredita autor, obra y lectora.",
    limitation:
      "Audio sin transcripción; no se cotejó palabra por palabra con la columna de 2013.",
  }),
  santanderescritor2021: source({
    title: "El escritor Marco Antonio Valencia presentó su obra «Leyendas Extraordinarias de Popayán» en la UDES",
    author: "Universidad de Santander, Vicerrectoría de Extensión",
    year: 2021,
    type: "nota institucional",
    url: "https://bucaramanga.udes.edu.co/extension/noticias/el-escritor-marco-antonio-valencia-presento-su-obra-leyendas-extraordinarias-de-popayan-en-la-udes",
    summary:
      "Presenta a Valencia Calle como poeta, narrador y periodista y a su libro como obra literaria, lo que sitúa el relato de Catalina como literatura de autor.",
    limitation:
      "Nota de evento; no entra en el contenido de ningún relato.",
  }),
  herreraPayanceta2010: source({
    title: "Payanceta: música y danza. Estudio y aprendizaje de la danza Payanceta con los grupos culturales Aires de Pubenza y Yanaconas de Popayán",
    author: "Luz Adriana Morales Herrera",
    year: 2010,
    type: "trabajo de grado (Universidad del Cauca)",
    url: "https://repositorio.unicauca.edu.co/bitstream/handle/123456789/8095/Payanceta_musica%20y%20danza.pdf?isAllowed=y&sequence=1",
    summary:
      "Explica quién es la ñapanga de Popayán —mujer del pueblo, servicial y devota, que lucía su traje en los actos religiosos— y su pervivencia en las sahumadoras de las procesiones: el traje que Catalina se pone en el relato.",
    limitation:
      "Trabajo de licenciatura sobre danza; su etimología («doña Panga») es tradición local sin aparato filológico.",
  }),
  robledoInes2010: source({
    title: "Inés de Hinojosa, doncella huérfana y pecadora",
    author: "Ángela Inés Robledo",
    year: 2010,
    type: "artículo académico (Revista de Estudios Colombianos, núm. 35)",
    url: "https://colombianistas.org/wordpress/wp-content/themes/pleasant/REC/REC%2035/Art%C3%ADculos/9.REC_35_AngelaIRobledo.pdf",
    summary:
      "Paralelo: sigue cómo el caso de Inés de Hinojosa, contado por Rodríguez Freyle en El Carnero, se reescribe como romance en 1864 (Avella Mendoza) y en 1986 (Morales Pradilla), el mismo tránsito de proceso colonial a historia de pasión que hace Valencia Calle.",
    limitation:
      "No menciona a Catalina de Belalcázar; el paralelo es de procedimiento literario, no de tradición.",
  }),
  pelayoDramas1881: source({
    title: "Dramas de Guillermo Shakspeare, vol. 1 (incluye Otelo), traducción de Marcelino Menéndez Pelayo",
    author: "William Shakespeare; trad. Marcelino Menéndez Pelayo",
    year: 1881,
    type: "texto dramático (Proyecto Gutenberg)",
    url: "https://www.gutenberg.org/ebooks/53207",
    summary:
      "Paralelo que el propio relato invoca al comparar al marido con «el celoso Otelo»: el crimen de celos contra una esposa sin prueba de infidelidad.",
    limitation:
      "Paralelo literario universal traído por el autor, no por la tradición payanesa.",
  }),
};

const sourceKeysBySlug = {
  "catalina-la-napanga": [
    "zasquaCase",
    "salcedoWomenPopayan",
    "llanosElitePopayan",
    "tobarDrama",
    "ivooxCatalina",
    "udesLegends",
    "proclamaLegends",
    "unicaucaNapanga",
  ],
  "el-hada-de-los-canaverales": [
    "isaacsCane",
    "cvcSonso",
    "cvcWetlands",
    "univalleStrike",
    "virajesCutters",
    "univalleEnvironmental",
    "unalCutters",
    "cvcBurns",
  ],
  "el-silbo-de-quinunchu": [
    "ciezaChronicle",
    "cambridgeCieza",
    "correaTerritorialization",
    "correalLeaders",
    "frontinoHistory",
    "banrepZenu",
    "ocampoAntioquia",
    "historyColombia1911",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickAndinaLegacyEditorialResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickAndinaLegacyEditorialResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = andinaLegacyEditorialResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickAndinaLegacyEditorialResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = andinaLegacyEditorialResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
