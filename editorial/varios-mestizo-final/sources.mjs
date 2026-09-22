function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const variosMestizoFinalSources = {
  rinconViudita: source({
    title: "Leyenda de la Viudita",
    author: "El Rincón Colombiano",
    year: 2022,
    type: "divulgación regional comparada",
    url: "https://elrinconcolombiano.com/leyenda-de-la-viudita/",
    summary:
      "Localiza el espanto en Nariño y el occidente colombiano, describe vestido negro, mantilla verde, presagio de muerte y recorrido nocturno hasta el cementerio.",
    limitation:
      "Es una síntesis web tardía sin informantes identificados; sirve para controlar motivos y distingue expresamente Viudita, Dama Verde y Viuda Alegre.",
  }),
  compartoViudita: source({
    title: "La Viudita",
    author: "Georgina Elena Palmeyro",
    year: 2008,
    type: "divulgación de repertorio cultural",
    url: "https://compartiendoculturas.blogspot.com/2008/07/la-viudita.html",
    summary:
      "Registra el núcleo de Nariño y Pasto: anciana de negro, mantilla verde, sacristías, anuncio de muerte y castigo de borrachos mediante un rostro cadavérico.",
    limitation:
      "No declara su fuente previa y varios pasajes coinciden con repertorios impresos; no constituye una recopilación oral independiente.",
  }),
  ericColombia: source({
    title:
      "Colombia, Many Countries in One: Profile and Paradox, Volumes I and II",
    author: "Fulbright-Hays Summer Seminars Abroad",
    year: 1997,
    type: "compilación educativa sobre regiones de Colombia",
    url: "https://files.eric.ed.gov/fulltext/ED430849.pdf",
    summary:
      "Incluye un material regional que conserva una Viudita bien vestida, reconocible por el ruido de sus enaguas y su encuentro con hombres ebrios.",
    limitation:
      "Es una guía curricular colectiva de gran extensión; el pasaje es breve y no ofrece una cadena de transmisión nariñense detallada.",
  }),
  colombianBestiary: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author:
      "Julio Orozco Vargas, editor; Juan Federico Torres Mantilla y equipo",
    year: 2016,
    type: "catálogo bibliográfico de repertorio ilustrado",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=11108",
    summary:
      "Controla autoría, editorial, ISBN y tabla de contenidos de un volumen que incluye La Viudita, El Judío Errante y El Bus Fantasma como entradas separadas.",
    limitation:
      "El catálogo demuestra publicación y separación de motivos, pero no reproduce las páginas completas ni autentica como hechos sus montajes narrativos.",
  }),
  colombianStorytellers: source({
    title:
      "Historias y leyendas de Colombia: encuentros regionales de contadores de historias y leyendas",
    author: "Encuentros regionales de Buga; repositorio FLACSO Andes",
    year: 1991,
    type: "memoria publicada de narración oral regional",
    url: "https://repositorio.flacsoandes.org/items/547db58e-c820-465a-9c73-6facd532e13f/full",
    summary:
      "La tabla de contenidos ubica una narración titulada La Viudita dentro del bloque nariñense junto con Pandiaco, la Cocha y otros relatos del departamento.",
    limitation:
      "El registro público permite identificar contexto editorial y ubicación, pero no basta por sí solo para trasladar cada detalle de esa versión al núcleo reconstruido.",
  }),
  nuquiEot: source({
    title: "Esquema de Ordenamiento Territorial del Municipio de Nuquí",
    author:
      "Alcaldía de Nuquí; Instituto de Investigaciones Ambientales del Pacífico",
    type: "documento institucional territorial con inventario oral",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/9a709572-4c57-4ea2-9df3-e01736872c37/download",
    summary:
      "La tabla de tradiciones registra una Viudita del Pacífico: mujer de luto con lámpara que llora al esposo muerto y revela un rostro cadavérico a hombres infieles.",
    limitation:
      "Es una variante de Nuquí, Chocó, no prueba del argumento nariñense ni autorización para fundir ambas geografías en una sola biografía.",
  }),
  caliEntreRios: source({
    title: "Cali entre ríos",
    author: "Universidad del Valle",
    type: "investigación universitaria de memoria fluvial y archivo de prensa",
    url: "https://bibliotecadigital.univalle.edu.co/server/api/core/bitstreams/d4ecc070-156f-4f2a-a46d-a32c13312f05/content",
    summary:
      "Documenta que el magazine Despertar Vallecaucano publicó en 1990 otra leyenda titulada La Viudita vinculada con una casa campesina a orillas del río Cauca.",
    limitation:
      "La coincidencia nominal muestra circulación vallecaucana, pero no convierte esa historia fluvial en un episodio de la Viudita de Pasto.",
  }),
  molinaCatalog: source({
    title: "¡A echar cuentos, pues...!: consejas y leyendas del mito campesino",
    author: "Antonio Molina Uribe",
    type: "catálogo de la Biblioteca Departamental Jorge Garcés Borrero",
    url: "https://consultas.bibliovalle.gov.co/bib/56735",
    summary:
      "Ofrece control bibliográfico de un repertorio colombiano que publica la Viudita y otros espantos campesinos como entradas diferenciadas.",
    limitation:
      "La ficha de catálogo no reemplaza el texto del libro ni demuestra que todas las versiones web deriven de informantes distintos.",
  }),

  hasanRokem: source({
    title: "The Wandering Jew: a Jewish perspective",
    author: "Galit Hasan-Rokem",
    year: 1985,
    type: "artículo académico de folclor y literatura judía",
    url: "https://cris.huji.ac.il/en/publications/the-wandering-jew-a-jewish-perspective/",
    summary:
      "Identifica el impreso alemán de 1602 y caracteriza la figura como invención cristiana antijudía, posteriormente reapropiada por autores judíos.",
    limitation:
      "Su resumen institucional sintetiza el argumento y no estudia la adaptación tunjana de Santo Domingo.",
  }),
  jewishEncyclopedia: source({
    title: "Wandering Jew",
    author: "Joseph Jacobs",
    year: 1906,
    type: "entrada histórica de enciclopedia judía",
    url: "https://www.jewishencyclopedia.com/articles/968-ahasuerus-the-legend-of",
    summary:
      "Distingue a Cartaphilus de Ahasuerus, ubica la rápida difusión del folleto de 1602 y rastrea nombres, supuestos avistamientos y recepción literaria.",
    limitation:
      "Es una síntesis de comienzos del siglo XX y sus avistamientos son afirmaciones de la tradición, no pruebas de una persona inmortal.",
  }),
  conwayWandering: source({
    title: "The Wandering Jew",
    author: "Moncure Daniel Conway",
    year: 1881,
    type: "estudio histórico de dominio público",
    url: "https://www.gutenberg.org/files/77755/77755-h/77755-h.htm",
    summary:
      "Reproduce las noticias medievales de Cartaphilus y el relato moderno de Ahasuerus, mostrando cambios de nombre, oficio, culpa y función testimonial.",
    limitation:
      "El estudio refleja categorías comparatistas de su época y transcribe materiales polémicos que deben contextualizarse críticamente.",
  }),
  hessCursed: source({
    title: "Being cursed: Medieval model texts",
    author: "Cordelia Heß",
    year: 2022,
    type: "capítulo académico de historia del antisemitismo",
    url: "https://www.degruyterbrill.com/document/doi/10.1515/9783110757408-005/html",
    summary:
      "Sitúa la errancia eterna dentro de un archivo cristiano de maldiciones colectivas y modelos textuales antijudíos reutilizados en la modernidad.",
    limitation:
      "Analiza Europa y Suecia; sirve para reconocer la carga ideológica del motivo, no para fechar la versión de Tunja.",
  }),
  ushmmEternalJew: source({
    title: "Der ewige Jude",
    author: "United States Holocaust Memorial Museum",
    type: "artículo histórico sobre propaganda nazi",
    url: "https://encyclopedia.ushmm.org/content/en/article/der-ewige-jude",
    summary:
      "Documenta cómo el título y la imagen del judío eterno fueron usados por un pseudodocumental nazi para deshumanizar a las personas judías.",
    limitation:
      "Estudia una apropiación propagandística del siglo XX y no afirma que cada narración religiosa anterior tenga idéntica función o alcance.",
  }),
  boyacaFolklore: source({
    title: "El pueblo boyacense y su folclor",
    author: "Javier Ocampo López",
    type: "estudio regional publicado por la Academia Boyacense de Historia",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Describe la proyección tunjana de la leyenda universal: el viajero visita la escultura de Santo Domingo y continúa su camino tras dialogar con ella.",
    limitation:
      "La datación colonial de la visita pertenece a la tradición local; no equivale a un registro contemporáneo del supuesto viajero.",
  }),
  elTiempoTunja: source({
    title: "El Judío Errante en Tunja",
    author: "Boyacá 7 Días; El Tiempo",
    year: 1996,
    type: "reportaje de patrimonio y tradición religiosa",
    url: "https://www.eltiempo.com/archivo/documento/MAM-325151",
    summary:
      "Documenta las tallas policromadas del Nazareno, el Cireneo y El Judío en Santo Domingo, su uso procesional y la leyenda del encuentro entre viajero y estatua.",
    limitation:
      "La antigüedad de las esculturas no prueba que el encuentro sobrenatural ocurriera ni elimina la necesidad de examinar el estereotipo heredado.",
  }),
  ensstTunja: source({
    title: "Didáctica de la sensibilidad y el pensamiento crítico 2",
    author: "Escuela Normal Superior Santiago de Tunja",
    year: 2016,
    type: "cartilla educativa de patrimonio narrativo tunjano",
    url: "https://ensst.edu.co/ens/wp-content/uploads/2021/07/CartillaDidactica-2-2016.pdf",
    summary:
      "Conserva para uso escolar la visita al Padre Luis, las salidas nocturnas de la estatua y su reconocimiento por el viajero en Semana Santa.",
    limitation:
      "Es una adaptación didáctica y reproduce la leyenda desde un marco cristiano; no constituye prueba histórica ni perspectiva judía.",
  }),

  espantosBus: source({
    title: "El Bus Fantasma",
    author: "Luis Ávila",
    year: 2015,
    type: "repertorio web de espantos colombianos",
    url: "https://espantoscolombianos.blogspot.com/p/el-bus-fantasma.html",
    summary:
      "Narra el accidente en una carretera montañosa, el bus lleno que conserva un asiento libre y la orden de bajar sin mirar a los pasajeros muertos.",
    limitation:
      "No identifica carretera, accidente ni informantes y puede derivar del bestiario impreso; se conserva como versión publicada, no como crónica.",
  }),
  ugcCartography: source({
    title: "Cartografía de mitos y leyendas del territorio de Bacatá, Santafé y Bogotá",
    author: "Jessika Andrea Quintero Martínez",
    year: 2023,
    type: "trabajo de grado sobre cartografía literaria y pedagogía",
    url: "https://repository.ugc.edu.co/server/api/core/bitstreams/4441cbe0-b71b-4aa4-9369-3ede0e874a20/content",
    summary:
      "Incluye TransMilenio G66 entre relatos seleccionados mediante literatura, narración oral y netnografía, y separa las creepypastas como categoría digital.",
    limitation:
      "El proyecto estudia recolección y reescritura escolar; no valida desapariciones ni determina un autor único de la G66.",
  }),
  elTiempoG66: source({
    title: "G66: historia detrás del mito sobre misterioso TransMilenio fantasma",
    author: "Valeria Castro Valencia; El Tiempo",
    year: 2023,
    type: "reportaje sobre leyenda urbana digital",
    url: "https://www.eltiempo.com/cultura/gente/g66-de-transmilenio-mito-del-misterioso-bus-fantasma-en-bogota-747128",
    summary:
      "Contrasta el relato con horarios, oferta y color del sistema, y rastrea su circulación en redes entre 2014 y 2017 con variantes posteriores.",
    limitation:
      "Depende de versiones radiales y sociales para el origen y no identifica una denuncia verificable por desaparición vinculada a la ruta.",
  }),
  infobaeG66: source({
    title: "La historia detrás del mito de la G66",
    author: "María Paula González",
    year: 2023,
    type: "periodismo de cultura digital",
    url: "https://www.infobae.com/colombia/2023/07/04/la-historia-detras-del-mito-de-la-g66-la-ruta-de-transmilenio-que-no-existe-y-en-la-cual-habria-desaparecido-un-ciudadano/",
    summary:
      "Define la historia como creepypasta, resume la desaparición del universitario y registra cambios de conductor, pasajeros y color del bus.",
    limitation:
      "La narración usa fórmulas de rumor y contenidos de redes; no aporta expediente policial que corrobore al estudiante desaparecido.",
  }),
  miSenalUrban: source({
    title: "Ciudades colombianas: un viaje a través de sus leyendas urbanas",
    author: "Mi Señal; RTVC",
    type: "divulgación pública infantil y cultural",
    url: "https://www.misenal.tv/leyendas-urbanas-colombia",
    summary:
      "Registra la G66 como leyenda urbana bogotana ya integrada a un repertorio contemporáneo de ciudades colombianas.",
    limitation:
      "Es una mención breve de difusión y no reconstruye cronología, testimonios ni funcionamiento real de TransMilenio.",
  }),
  libertadoresOrality: source({
    title:
      "La cultura narrativa intergeneracional como estrategia para potenciar la oralidad en niños",
    author: "Fundación Universitaria Los Libertadores",
    type: "investigación educativa sobre memoria oral familiar",
    url: "https://repository.libertadores.edu.co/bitstreams/2db405b6-6bf9-4383-821b-ef967dfa5cc3/download",
    summary:
      "Una matriz de relatos conocidos por generaciones adultas incluye al Bus Fantasma y documenta su reconocimiento dentro de repertorios familiares.",
    limitation:
      "La mención no ofrece una versión extensa ni permite identificar si corresponde al bus montañoso, a la G66 o a otro relato local.",
  }),
  perrinWayuu: source({
    title: "Asombros del pueblo wayuu",
    author: "Michel Perrin",
    type: "recopilación antropológica y literaria de relatos wayuu",
    url: "https://biblioteca-repositorio.clacso.edu.ar/bitstream/CLACSO/7763/1/APW.pdf",
    summary:
      "Publica en la Guajira venezolana un bus que transporta almas a Jepira, dentro de un sistema funerario y territorial wayuu específico.",
    limitation:
      "Es una tradición cultural distinta y transfronteriza; no debe absorberse en el bus mestizo de carretera ni en la creepypasta bogotana.",
  }),
};

const sourceKeysBySlug = {
  "la-viudita": [
    "rinconViudita",
    "compartoViudita",
    "ericColombia",
    "colombianBestiary",
    "colombianStorytellers",
    "nuquiEot",
    "caliEntreRios",
    "molinaCatalog",
  ],
  "el-judio-errante": [
    "hasanRokem",
    "jewishEncyclopedia",
    "conwayWandering",
    "hessCursed",
    "ushmmEternalJew",
    "boyacaFolklore",
    "elTiempoTunja",
    "ensstTunja",
  ],
  "el-bus-fantasma": [
    "colombianBestiary",
    "espantosBus",
    "ugcCartography",
    "elTiempoG66",
    "infobaeG66",
    "miSenalUrban",
    "libertadoresOrality",
    "perrinWayuu",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickVariosMestizoFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickVariosMestizoFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = variosMestizoFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      key,
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickVariosMestizoFinalSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene selección de fuentes.`);
  return keys.map((key) => {
    const selected = variosMestizoFinalSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return { key, ...selected };
  });
}
