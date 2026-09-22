function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const andinaVariosMestizoResidualSources = {
  espantosScan: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Periódico Hoy; Universidad Autónoma de Colombia",
    year: 2004,
    type: "facsímil digital de la edición primaria consultada",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Permite leer las fichas y narraciones de Ánima Sola, Vieja Colmillona, Niña de la Carta, Barbacoa del Muerto y Los Meneses en su composición editorial original.",
    limitation:
      "El volumen mezcla síntesis folclórica con notas, diarios, informes y trances dramatizados; esos marcos no se tratan como documentos históricos corroborados.",
  }),
  openLibrary: source({
    title: "Cuentos de Espantos y otros seres fantásticos del folclor Colombiano",
    author: "Open Library; Internet Archive",
    year: 2004,
    type: "registro bibliográfico y mapa de contenidos",
    url: "https://openlibrary.org/books/OL26208262M/Cuentos_de_Espantos_y_otros_seres_fant%C3%A1sticos_del_folclor_Colombiano",
    summary:
      "Identifica autoría institucional, fecha, extensión y páginas impresas de las cinco entradas revisadas.",
    limitation:
      "El catálogo describe el objeto bibliográfico; no confirma por sí solo la historicidad de los episodios narrados.",
  }),
  mosqueraCatalog: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Biblioteca Pública Municipal San Juan Bosco de Mosquera",
    year: 2016,
    type: "catálogo público de la reedición",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=11108",
    summary:
      "Registra editor, investigadores, ilustradores, ISBN y tabla completa de contenidos de la reedición de 103 páginas.",
    limitation:
      "La reedición cataloga las narraciones como literatura, cuentos fantásticos, mitología y leyendas; no aporta informantes para cada detalle.",
  }),
  biblioValleCatalog: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Biblioteca Departamental Jorge Garcés Borrero",
    year: 2016,
    type: "catálogo bibliotecario y resumen editorial",
    url: "https://consultas.bibliovalle.gov.co/bib/93644",
    summary:
      "Describe el libro como un bestiario situado entre lo real y lo imaginario y documenta su inclusión en la red pública de lectura.",
    limitation:
      "Su resumen caracteriza el proyecto editorial, no demuestra que sus documentos internos sean archivos auténticos.",
  }),
  redAcademicaCatalog: source({
    title: "Catálogo de la Colección de Actualización Bibliográfica",
    author: "Secretaría de Educación de Bogotá; Red Académica",
    year: 2025,
    type: "catálogo educativo institucional",
    url: "https://www.redacademica.edu.co/sites/default/files/2025-02/catalogo_19Dic_0.pdf",
    summary:
      "Presenta la reedición como libro educativo sobre seres fantásticos que estimula lectura, escritura e invención.",
    limitation:
      "Su función pedagógica y creativa refuerza la necesidad de no leer cada marco narrativo como acta histórica.",
  }),
  losonczyAnima: source({
    title: "Del anonimato de la violencia al Ánima Sola de la ciudad",
    author: "Anne-Marie Losonczy",
    year: 2001,
    type: "artículo antropológico en la Revista Colombiana de Antropología",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/download/1273/917/3756",
    summary:
      "Examina en cementerios urbanos colombianos el culto del ánima sola, las almas del purgatorio y muertos anónimos o abandonados.",
    limitation:
      "Documenta prácticas urbanas del siglo XX; no autentica la supuesta nota de Marquetalia ni una identidad llamada Celestina.",
  }),
  carrasquillaAnima: source({
    title: "Cuentos",
    author: "Tomás Carrasquilla; Biblioteca Familiar de la Presidencia de la República",
    year: 1996,
    type: "edición digital de obra literaria colombiana",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll9/id/11/",
    summary:
      "Incluye El ánima sola, cuento escrito por Carrasquilla a finales del siglo XIX, como antecedente literario antioqueño diferenciado.",
    limitation:
      "El cuento de Carrasquilla no es la nota del animero de 1940 ni prueba que ambos relatos compartan una sola biografía.",
  }),
  vaticanPurgatory: source({
    title: "Catecismo de la Iglesia Católica, números 1030-1032",
    author: "Santa Sede",
    type: "texto doctrinal oficial comparativo",
    url: "https://www.vatican.va/archive/catechism_sp/p123a12_sp.html",
    summary:
      "Define el purgatorio como purificación y recomienda oraciones y sufragios por los difuntos.",
    limitation:
      "La doctrina general no identifica un personaje llamado Ánima Sola, no avala cadenas devocionales y no confirma favores o castigos particulares.",
  }),
  ocampoAntioquia: source({
    title: "Mitos y leyendas de Antioquia la grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "compilación folclórica con ficha bibliográfica",
    url: "https://books.google.com/books/about/Mitos_y_leyendas_de_Antioquia_la_grande.html?id=9DeSlEufFMEC",
    summary:
      "Incluye a la Vieja Colmillona, Los Meneses y la Niña de la Carta en repertorios regionales de Antioquia y el antiguo Gran Caldas.",
    limitation:
      "La vista disponible no expone la cadena completa de informantes ni valida los documentos ficticios usados por otras ediciones.",
  }),
  uniagustinianaColmillona: source({
    title: "Estudio sobre imaginarios y relatos regionales colombianos",
    author: "Lina Marcela Barajas Oliveros; Universitaria Agustiniana",
    year: 2018,
    type: "trabajo académico de recepción cultural",
    url: "https://backend.uniagustiniana.edu.co/server/api/core/bitstreams/b419a32f-cd98-4ef2-8ab3-badf415208d1/content",
    summary:
      "Registra a la Vieja Colmillona como aparición vinculada con zonas donde comen los peones.",
    limitation:
      "La mención es breve y depende de repertorios publicados; no corrobora a Agustín Moreno ni una hacienda específica.",
  }),
  cinepColmillona: source({
    title: "Archivo de prensa sobre cuentos de espantos regionales",
    author: "CINEP; archivo de prensa de 1982",
    year: 1982,
    type: "microficha hemerográfica de circulación",
    url: "https://biblioarchivo.bogota.gov.co/opac-tmpl/IMG_CINEP1/DD06-1982-2S-1.pdf",
    summary:
      "Enumera a la Vieja Colmillona entre espantos reconocibles en una tertulia de relatos regionales.",
    limitation:
      "La referencia prueba circulación nominal, pero el fragmento no ofrece una versión completa ni una procedencia oral trazable.",
  }),
  diazGranadosCatalog: source({
    title: "Cuentos y leyendas de Colombia",
    author: "José Luis Díaz-Granados; Biblioteca Nacional de Colombia",
    year: 2013,
    type: "catálogo de colección literaria colombiana",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/3699958/",
    summary:
      "Registra una Niña de la Carta dentro de una selección de tradición oral y literatura popular colombiana.",
    limitation:
      "El catálogo no reproduce el cuento ni demuestra que coincida con el supuesto informe de Itagüí de la edición de 2004.",
  }),
  utpNina: source({
    title: "Quién patea un perro muerto",
    author: "Humberto Senegal; Biblioteca de Autores Quindianos, UTP",
    type: "cuento literario de recepción",
    url: "https://www2.utp.edu.co/cms-utp/data/bin/UTP/web/uploads/media/literario/documentos/Quien-patea-un-perro-muerto-Humberto-Senegal.pdf",
    summary:
      "Alude a una versión donde una niña vestida de primera comunión entrega en una casa una carta que anuncia muerte o desgracia.",
    limitation:
      "Es una reelaboración literaria y no permite proyectar ese argumento sobre todas las versiones del espanto vial.",
  }),
  ivooxNina: source({
    title: "La Niña de la Carta",
    author: "Mitos y Leyendas de Colombia 2",
    year: 2022,
    type: "recepción sonora contemporánea",
    url: "https://www.ivoox.com/la-nina-carta-audios-mp3_rf_84823033_1.html",
    summary:
      "Difunde una variante moderna donde una niña porta una carta para revelar dónde quedó su cuerpo y obtener sepultura.",
    limitation:
      "El episodio no cita fuente y añade violencia explícita; se registra como recepción reciente, no como origen histórico.",
  }),
  spreadsheetBarbacoa: source({
    title: "Base de mitos del proyecto, hoja Mitos, fila 399",
    author: "Archivo editorial Mitos de Colombia",
    type: "fuente interna del corpus con memoria familiar",
    url: "https://github.com/alejingutierrez/mitos_colombia/blob/main/docs/base_mitos.xlsx",
    summary:
      "Conserva el relato escuchado en El Calzo: un enfermo incumple su peregrinación a Chiquinquirá y reaparece como barbacoa cargada por cuatro hombres sin cabeza.",
    limitation:
      "La hoja no identifica la edición o transcripción previa del testimonio y sus interpretaciones automáticas deben separarse del núcleo narrativo.",
  }),
  unabGuando: source({
    title: "Fortalecimiento de la comprensión y producción textual",
    author: "Diana María Tovar Osorio; Universidad Autónoma de Bucaramanga",
    year: 2020,
    type: "tesis educativa con repertorio regional",
    url: "https://repository.unab.edu.co/bitstream/handle/20.500.12749/12120/2020_Tesis_Diana_Maria_Tovar_Osorio.pdf?sequence=1",
    summary:
      "Registra El Guando o la barbacoa del muerto como leyenda representativa de Antioquia Grande usada en actividades escolares.",
    limitation:
      "Prueba circulación pedagógica, no la historicidad de Anselmo Santamaría ni de la médium del libro de 2004.",
  }),
  libertadoresGuando: source({
    title: "Fortalecimiento de lectura comprensiva de mitos y leyendas",
    author: "Fundación Universitaria Los Libertadores",
    type: "material educativo universitario",
    url: "https://repository.libertadores.edu.co/bitstreams/9b1dfd95-f78b-4e67-85c5-0937aa1a20c7/download",
    summary:
      "Resume una variante del Guando en la que un avaro muerto cae al río y reaparece en una procesión de guadua durante días de difuntos.",
    limitation:
      "Es una adaptación didáctica sin cadena de informantes y no debe fundirse con la promesa a Chiquinquirá.",
  }),
  remediosMunicipal: source({
    title: "Programa de gobierno de Remedios, Antioquia 2020-2023",
    author: "Albeiro Arenas; portal municipal de Remedios",
    year: 2019,
    type: "documento público municipal de contexto cultural",
    url: "https://remediosantioquia.micolombiadigital.gov.co/sites/remediosantioquia/content/files/000236/11768_ok-programa-de-gobierno-remedios-antioquia-alcaldia-20202023.pdf",
    summary:
      "Enumera la barbacoa y Los Meneses entre los relatos reconocidos en el repertorio paisa de Remedios.",
    limitation:
      "La enumeración acredita circulación local del nombre, pero no reproduce versiones ni identifica narradores.",
  }),
  raeDuende: source({
    title: "duende",
    author: "Real Academia Española y ASALE",
    year: 2006,
    type: "entrada lexicográfica comparativa",
    url: "https://www.rae.es/desen/duende",
    summary:
      "Define al duende como espíritu fantástico travieso que puede aparecer con figura de viejo o de niño.",
    limitation:
      "La definición permite una comparación funcional; no convierte a Los Meneses en duendes ni explica su nombre.",
  }),
  caroDuendes: source({
    title: "Los cuentos folclóricos del Valle del Cauca y del Chocó",
    author: "Instituto Caro y Cuervo",
    year: 1965,
    type: "nota de investigación folclórica comparativa",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/1506/1/NC_1E_53_1965.pdf",
    summary:
      "Describe duendes colombianos como niños de sombrero grande que hacen ruidos, daños leves y travesuras con animales.",
    limitation:
      "Proviene del Valle y Chocó y describe otro repertorio; la semejanza infantil no prueba identidad con Los Meneses.",
  }),
};

const sourceKeysBySlug = {
  "el-anima-sola": [
    "espantosScan",
    "openLibrary",
    "mosqueraCatalog",
    "biblioValleCatalog",
    "redAcademicaCatalog",
    "losonczyAnima",
    "carrasquillaAnima",
    "vaticanPurgatory",
  ],
  "la-vieja-colmillona": [
    "espantosScan",
    "openLibrary",
    "mosqueraCatalog",
    "biblioValleCatalog",
    "redAcademicaCatalog",
    "ocampoAntioquia",
    "uniagustinianaColmillona",
    "cinepColmillona",
  ],
  "la-nina-de-la-carta": [
    "espantosScan",
    "openLibrary",
    "mosqueraCatalog",
    "biblioValleCatalog",
    "redAcademicaCatalog",
    "diazGranadosCatalog",
    "utpNina",
    "ivooxNina",
  ],
  "la-barbacoa-del-muerto": [
    "espantosScan",
    "openLibrary",
    "mosqueraCatalog",
    "biblioValleCatalog",
    "spreadsheetBarbacoa",
    "unabGuando",
    "libertadoresGuando",
    "remediosMunicipal",
  ],
  "los-meneses": [
    "espantosScan",
    "openLibrary",
    "mosqueraCatalog",
    "ocampoAntioquia",
    "redAcademicaCatalog",
    "remediosMunicipal",
    "raeDuende",
    "caroDuendes",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickAndinaVariosMestizoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickAndinaVariosMestizoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = andinaVariosMestizoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickAndinaVariosMestizoResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene dossier de fuentes.`);
  return keys.map((key) => andinaVariosMestizoResidualSources[key]);
}
