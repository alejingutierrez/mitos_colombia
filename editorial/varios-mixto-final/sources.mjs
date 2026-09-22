import { tolimaMestizoResidualSources } from "../tolima-mestizo-residual/sources.mjs";
import { tolimaMixtoResidualSources } from "../tolima-mixto-residual/sources.mjs";

function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const variosMixtoFinalSources = {
  villaPosseFolklore: tolimaMixtoResidualSources.villaPosseFolklore,
  deviaCatalog: tolimaMixtoResidualSources.deviaCatalog,
  rochaPatronato: tolimaMixtoResidualSources.rochaPatronato,
  modulemaTolima: tolimaMixtoResidualSources.modulemaTolima,
  cultureOverview: tolimaMixtoResidualSources.cultureOverview,
  colombiaRegiones: tolimaMixtoResidualSources.colombiaRegiones,
  culturaDuende: tolimaMixtoResidualSources.culturaDuende,
  culturaMohan: tolimaMixtoResidualSources.culturaMohan,
  radioNacionalMohan: tolimaMixtoResidualSources.radioNacionalMohan,
  menMunicipio: tolimaMestizoResidualSources.menMunicipio,
  espantosScan: tolimaMestizoResidualSources.espantosScan,
  colombiaAprendeSombreron:
    tolimaMestizoResidualSources.colombiaAprendeSombreron,
  leridaSombreron: tolimaMestizoResidualSources.leridaSombreron,
  radioNacionalSombreron: tolimaMestizoResidualSources.radioNacionalSombreron,
  guatemalaMcd: tolimaMestizoResidualSources.guatemalaMcd,
  laChicaSombreron: tolimaMestizoResidualSources.laChicaSombreron,
  despiertaTolima: tolimaMestizoResidualSources.despiertaTolima,

  udenarRural: source({
    title: "Leyenda rural: estrategia didáctica para mejorar ortografía",
    author: "Programa de Licenciatura de la Universidad de Nariño",
    year: 2016,
    type: "trabajo académico con repertorio rural nariñense",
    url: "https://sired.udenar.edu.co/8579/1/91329.pdf",
    summary:
      "Cita una versión publicada por Sánchez en la que el Cura sin Cabeza es un sacerdote que dejó misas gregorianas pagadas sin celebrar y llama a caminantes entre once y doce de la noche.",
    limitation:
      "Es una mediación pedagógica y bibliográfica; no identifica al sacerdote ni convierte la escena en un caso histórico ocurrido en Pasto.",
  }),
  diarioSurCura: source({
    title: "Espantos que todavía asustan en las semanas santas",
    author: "Diario del Sur, con referencias de residentes de Pasto",
    year: 2024,
    type: "memoria periodística local",
    url: "https://www.diariodelsur.com.co/espantos-que-todavia-asustan-en-las-semanas-santas/",
    summary:
      "Registra la vigencia del Cura sin Cabeza en Pasto y ubica una de sus salidas nocturnas en el templo de Santiago.",
    limitation:
      "La nota recopila recuerdos y fórmulas orales sin publicar entrevistas completas ni demostrar una aparición.",
  }),
  udenarTransmediaCura: source({
    title: "Estrategia de narrativa transmedia para la rememoración de mitos y leyendas de Pasto",
    author: "Universidad de Nariño",
    year: 2026,
    type: "trabajo académico de memoria cultural",
    url: "https://sired.udenar.edu.co/18217/1/210263.pdf",
    summary:
      "Reconoce al Cura o Padre descabezado como versión colombiana y pastusa de un relato extendido por Latinoamérica.",
    limitation:
      "Es un proyecto creativo contemporáneo y no una edición crítica de testimonios antiguos.",
  }),
  uisOralidadRural: source({
    title: "De la oralidad a la escritura en la escuela rural",
    author: "Universidad Industrial de Santander",
    year: 2021,
    type: "investigación educativa sobre narración oral",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/b1687919-00af-41d7-b2ee-2dd19f85302d/content",
    summary:
      "Incluye al Cura sin Cabeza dentro de repertorios contados y reelaborados en contextos escolares rurales colombianos.",
    limitation:
      "El objetivo es pedagógico; no fija una versión nacional única ni valida nombres propios de la ficha heredada.",
  }),
  bogotaTourCura: source({
    title: "Informe de comportamiento del turismo de Bogotá",
    author: "Observatorio de Turismo de Bogotá, Instituto Distrital de Turismo",
    year: 2023,
    type: "informe público de recepción urbana",
    url: "https://observatorio.idt.gov.co/sites/default/files/2024-12/Informe%20comportamiento%20turismo_julio.pdf",
    summary:
      "Registra al Cura sin Cabeza entre los relatos usados por recorridos nocturnos de La Candelaria.",
    limitation:
      "Prueba circulación turística en Bogotá, no que una misa espectral concreta haya ocurrido ni que la tradición nazca allí.",
  }),
  elColombianoParade: source({
    title: "Prográmese con el Desfile de Mitos y Leyendas",
    author: "El Colombiano",
    year: 2022,
    type: "registro periodístico de recepción festiva",
    url: "https://www.elcolombiano.com/cultura/programese-con-el-desfile-de-mitos-y-leyendas-conozca-horarios-cierres-viales-e-invitados-KL19565960",
    summary:
      "Incluye al Cura sin Cabeza en el repertorio escénico del tradicional desfile de Medellín.",
    limitation:
      "Documenta representación contemporánea y no el origen, apariencia exacta o conducta de una versión oral particular.",
  }),
  rinconCura: source({
    title: "Leyenda del Sacerdote sin Cabeza",
    author: "Revista El Rincón Colombiano",
    year: 2021,
    type: "síntesis comparativa de divulgación",
    url: "https://elrinconcolombiano.com/leyenda-del-sacerdote-sin-cabeza/",
    summary:
      "Enumera ciudades coloniales colombianas y distingue versiones de culpa clerical, muerte injusta y misa espectral.",
    limitation:
      "No publica informantes ni fuentes primarias de cada ciudad; sirve para mapear variantes, no para fundirlas.",
  }),

  caroCuervoMandinga: source({
    title: "El léxico negro-africano de Colombia",
    author: "Instituto Caro y Cuervo",
    type: "estudio lexicográfico e histórico",
    url: "https://bibliotecadigital.caroycuervo.gov.co/id/eprint/631/1/TH_39_123_100_0.pdf",
    summary:
      "Registra mandingas como equivalente de demonio en el Atlas Lingüístico-Etnográfico de Colombia y rastrea Mandinga hasta pueblos y territorios de África occidental.",
    limitation:
      "Documenta usos lingüísticos, no una trama única; la equivalencia demoníaca refleja una historia colonial racializada y no una cualidad del pueblo mandinga.",
  }),
  udeaOralitura: source({
    title: "Oralitura y tradición oral colombianas: revisión de materiales sonoros",
    author: "Estudios de Literatura Colombiana, Universidad de Antioquia",
    year: 2011,
    type: "revisión académica de archivos sonoros",
    url: "https://revistas.udea.edu.co/index.php/elc/article/download/12924/11640/0",
    summary:
      "Cataloga Mitos del Huila de 2003 e identifica una pista titulada El maldingas junto con Mohán, Madremonte, Llorona y otros relatos regionales.",
    limitation:
      "La reseña no transcribe la pista ni permite atribuirle el duelo de tamboras, Pamba Ahumé o el Carnaval de Barranquilla.",
  }),
  uscoCatalog: source({
    title: "Historias, mitos y leyendas colombianos: registro bibliográfico",
    author: "Biblioteca de la Universidad Surcolombiana",
    type: "catálogo público de colección folclórica",
    url: "https://biblioteca.usco.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=16983",
    summary:
      "Enumera Las mandingas como pieza diferenciada dentro de una colección colombiana de relatos.",
    limitation:
      "El catálogo prueba título y circulación editorial, pero no ofrece el argumento ni identifica narradores.",
  }),
  unalAfricanArchive: source({
    title: "Colección Negros y Esclavos",
    author: "Universidad Nacional de Colombia, Laboratorio de Fuentes Históricas",
    type: "archivo histórico y guía de fuentes",
    url: "https://humanasyeconomicas.medellin.unal.edu.co/laboratorios/fuentes-historicas/multimediaa/coleccion-negros-y-esclavos.html",
    summary:
      "Documenta la presencia en Colombia de denominaciones africanas como Mandinga, Congo y Carabalí dentro del sistema esclavista colonial.",
    limitation:
      "No trata al Mandingas folclórico; se usa para devolver al término su contexto humano e histórico y evitar la demonización étnica.",
  }),
  unescoCarnival: source({
    title: "El Carnaval de Barranquilla",
    author: "UNESCO Patrimonio Cultural Inmaterial",
    year: 2008,
    type: "expediente patrimonial internacional",
    url: "https://ich.unesco.org/es/RL/el-carnaval-de-barranquilla-00051",
    summary:
      "Describe la convergencia amerindia, europea y africana del carnaval, sus tambores, máscaras, sátira y representaciones teatrales.",
    limitation:
      "No registra a Pamba Ahumé ni un personaje tradicional llamado Santiago-Mandingas; el carnaval funciona como contexto, no como prueba del argumento heredado.",
  }),
  unescoCarnivalSafeguarding: source({
    title: "Plan de salvaguardia del Carnaval de Barranquilla",
    author: "UNESCO Patrimonio Cultural Inmaterial",
    year: 2008,
    type: "proyecto de inventario y transmisión patrimonial",
    url: "https://ich.unesco.org/en/projects/action-plan-for-the-safeguarding-of-the-carnival-of-barranquilla-00019",
    summary:
      "Registra investigación de campo, mapa cultural y transmisión intergeneracional como herramientas para proteger expresiones carnavaleras.",
    limitation:
      "No incluye el supuesto duelo musical; se usa para explicar por qué una escena carnavalesca necesita inventario y portadores identificables.",
  }),
  minculturaOralidad: source({
    title: "Lenguas y tradición oral",
    author: "Ministerio de Cultura de Colombia",
    type: "marco institucional de patrimonio inmaterial",
    url: "https://patrimonio.mincultura.gov.co/Paginas/Lenguas-y-tradici%C3%B3n-oral.aspx",
    summary:
      "Define lengua y oralidad como vehículos de sistemas de pensamiento, identidad e integración comunitaria.",
    limitation:
      "Es un marco general y no una fuente narrativa sobre el Mandingas.",
  }),
  unescoAfricanCaribbean: source({
    title: "UNESCO enaltece la diversidad de la cultura caribeña de herencia africana",
    author: "UNESCO",
    year: 2020,
    type: "contexto histórico-cultural regional",
    url: "https://www.unesco.org/es/articles/unesco-enaltece-la-diversidad-de-la-cultura-caribena-de-herencia-africana-mediante-la-integracion-y",
    summary:
      "Reconoce la herencia africana como constitutiva del Caribe y menciona el Carnaval de Barranquilla dentro de ese crisol.",
    limitation:
      "No explica la evolución semántica colombiana de Mandinga a diablo ni valida una trama específica.",
  }),

  minculturaTolima: source({
    title: "Tolima: sabores, saberes y relatos de la cocina tradicional",
    author: "Ministerio de Cultura de Colombia",
    type: "cartilla patrimonial regional",
    url: "https://patrimonio.mincultura.gov.co/SiteAssets/Paginas/Publicaciones-biblioteca-cocinas/Tolima.pdf",
    summary:
      "Resume a Mohán, Llorona y Madremonte como espantos del paisaje tolimense y los vincula con río Magdalena, pérdida y defensa del monte.",
    limitation:
      "Ofrece fichas breves para mediación cultural y no una transcripción de narradores ni una genealogía histórica.",
  }),
  colombiaAprendeLlorona: source({
    title: "Módulo Numi: la leyenda de La Llorona",
    author: "Ministerio de Educación Nacional, Colombia Aprende",
    year: 2017,
    type: "material escolar oficial con versión localizada",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/2021-09/moduloNumi.pdf",
    summary:
      "Sitúa una versión en Purificación durante las guerras civiles del siglo XIX y la usa para estudiar el carácter localizado y oral de la leyenda.",
    limitation:
      "Es una adaptación pedagógica; los lugares históricos hacen verosímil la narración, pero no demuestran que la protagonista haya existido.",
  }),
  colombiaAprendeGuide22: source({
    title: "Guía pedagógica 22: Historias ancestrales de Colombia y el mundo",
    author: "Ministerio de Educación Nacional, Colombia Aprende",
    year: 2022,
    type: "orientación educativa oficial",
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2022-07/Gu%C3%ADapedag%C3%B3gica22_%20Historias%20ancestrales%20de%20Colombia%20y%20el%20mundo.pdf",
    summary:
      "Reconoce a La Llorona como figura extendida desde México hasta Argentina y presenta a Cihuacóatl como una comparación mesoamericana.",
    limitation:
      "No demuestra que todas las versiones desciendan de Cihuacóatl ni reemplaza la versión colombiana localizada.",
  }),
  tolimaLerida: source({
    title: "Lérida: cultura y tradición oral",
    author: "Gobernación del Tolima",
    type: "ficha pública municipal",
    url: "https://tolima.gov.co/index.php?Itemid=162&catid=2%3Anoticias&id=1918%3Ase-calientan-seis-municipios-del-tolima-&option=com_content&view=article",
    summary:
      "Enumera Llorona, Madremonte, duendes, Sombrerón y otros relatos como tradición oral todavía reconocida en Lérida.",
    limitation:
      "La lista demuestra circulación local, pero no desarrolla argumentos ni fechas de recolección.",
  }),
  sanMartinLlorona: source({
    title: "Mito o leyenda: La Llorona",
    author: "Alcaldía de San Martín de los Llanos, Meta",
    type: "versión municipal de los Llanos",
    url: "https://www.sanmartin-meta.gov.co/MiMunicipio/Paginas/Mito-o-Leyenda---La-Llorona.aspx",
    summary:
      "Presenta una Llorona que carga a un bebé y atribuye la condena al ahogamiento del hijo tras un amor no correspondido.",
    limitation:
      "Es una variante llanera de divulgación; no debe trasladarse a Purificación ni erigirse en historia nacional única.",
  }),
  uisChicamochaLlorona: source({
    title: "Saberes del Cañón del Chicamocha: La Llorona",
    author: "Universidad Industrial de Santander",
    type: "inventario territorial de tradición oral",
    url: "https://proyectos.uis.edu.co/ccg/saberes/",
    summary:
      "Registra entre habitantes del territorio a una mujer de vestido blanco y cabello largo que llama a sus hijos junto a ríos.",
    limitation:
      "El portal sintetiza respuestas territoriales y no presenta una sola narración completa ni su cadena de transmisión.",
  }),
  udenarLlorona: source({
    title: "Susurros: La Llorona, de la leyenda oral a la imagen",
    author: "Universidad de Nariño",
    year: 2018,
    type: "investigación-creación sobre variantes",
    url: "https://sired.udenar.edu.co/8073/1/93089.pdf",
    summary:
      "Estudia cambios regionales de la Llorona y cómo versiones moralizantes convierten adulterio, maternidad y castigo en reglas sociales.",
    limitation:
      "Su propósito artístico y comparativo no autentica una biografía ni un origen prehispánico exclusivo.",
  }),
  uisPiedecuestaOral: source({
    title: "Exploración formal de la tradición oral en la cultura popular de Piedecuesta",
    author: "Fabio Leonardo Alvarado Hernández; Universidad Industrial de Santander",
    year: 2020,
    type: "investigación-creación de patrimonio oral",
    url: "https://noesis.uis.edu.co/items/35cbc19e-da15-4648-9f5f-7c94ee7126a5",
    summary:
      "Incluye Llorona, Duendes y Madremonte entre siete relatos trabajados desde la memoria oral de Piedecuesta.",
    limitation:
      "Las fotografías son interpretaciones artísticas y no fuentes visuales históricas de los personajes.",
  }),

  minculturaMadremontePacifico: source({
    title: "La Madremonte",
    author: "Ministerio de Cultura, serie Tradición Oral del Pacífico",
    year: 2012,
    type: "registro sonoro catalogado",
    url: "https://bancodecontenidos.mincultura.gov.co/FichaDocumental?id=5344",
    summary:
      "Cataloga una versión de Tumaco en la que la Madremonte vigila la selva, los ciclos animales, lluvia y viento y persigue cazadores y leñadores.",
    limitation:
      "La sinopsis no transcribe la grabación completa y esta versión pacífica no debe presentarse como idéntica a la tolimense.",
  }),
  coyaimaTradition: source({
    title: "La importancia de la tradición oral: el grupo Coyaima",
    author: "Investigación publicada en Revista Guillermo de Ockham",
    year: 2012,
    type: "artículo académico sobre tradición Coyaima",
    url: "https://revistas.usb.edu.co/index.php/GuillermoOckham/article/download/2365/2078/5741",
    summary:
      "Describe a la Madremonte como protectora del bosque que sanciona la extracción excesiva y sitúa Mohán, Mohana y otros espíritus dentro de la tradición Coyaima.",
    limitation:
      "La síntesis académica usa la categoría de deidad y no representa por sí sola todas las voces Coyaima ni toda Colombia.",
  }),
  minculturaWomenFright: source({
    title: "Mujeres de Espanto",
    author: "Ana Inés Acosta; Ministerio de Cultura de Colombia",
    year: 1997,
    type: "audiovisual patrimonial catalogado",
    url: "https://bancodecontenidos.mincultura.gov.co/FichaDocumental?id=3107",
    summary:
      "Documenta la vigencia de Patasola, Madremonte y Candileja en Tolima y su antigua función de control social.",
    limitation:
      "La ficha resume una producción audiovisual y no permite convertir su función social en una explicación única del personaje.",
  }),
  bncMadremonte: source({
    title: "La Madremonte: relato de una Biblioteca Rural Itinerante",
    author: "María del Carmen Cardona; Biblioteca Nacional de Colombia",
    type: "memoria oral atribuida",
    url: "https://www.bibliotecanacional.gov.co/es-co/Bibliotecas-en-Red/bibliotecas-publicas-moviles/Itinerancias/la-madremonte.html",
    summary:
      "Presenta a una narradora de la vereda La Plata, Caldas, contando la leyenda como la escuchó en su territorio.",
    limitation:
      "Es una versión personal y localizada; no debe absorber las formas de Tolima, Coyaima o Tumaco.",
  }),
  esapMadremonte: source({
    title: "Inventario municipal de mitos y tradición oral: La Madremonte",
    author: "Documento territorial alojado por la Escuela Superior de Administración Pública",
    type: "inventario municipal descriptivo",
    url: "https://repositoriocdim.esap.edu.co/bitstreams/e2157446-5cb0-4e99-afa6-f31ad7ee56b6/download",
    summary:
      "Reúne descripciones campesinas de una mujer musgosa o elegante, nacimientos de agua, tempestades, linderos y maniguas.",
    limitation:
      "El documento compila formas heterogéneas y su lectura ecológica es editorial; no identifica un solo narrador originario.",
  }),
  itmMadremonte: source({
    title: "Visiones teóricas e históricas sobre lo mítico en la Madremonte",
    author: "Sara Sierra Gil y Julián Camilo Arroyave García; ITM",
    year: 2018,
    type: "trabajo académico sobre recepción artística",
    url: "https://repositorio.itm.edu.co/entities/publication/3f91c451-0db8-454d-a84a-cf26afcea3bc",
    summary:
      "Analiza variantes de la Madremonte y su reelaboración en la escultura indigenista de José Horacio Betancur.",
    limitation:
      "Estudia historia del arte e identidad nacional; la escultura no es una imagen etnográfica ni prueba de origen indígena único.",
  }),
};

const sourceKeysBySlug = {
  "el-cura-sin-cabeza": [
    "udenarRural",
    "diarioSurCura",
    "udenarTransmediaCura",
    "uisOralidadRural",
    "bogotaTourCura",
    "elColombianoParade",
    "rinconCura",
    "cultureOverview",
  ],
  "el-jinete-negro": [
    "espantosScan",
    "menMunicipio",
    "modulemaTolima",
    "colombiaAprendeSombreron",
    "leridaSombreron",
    "radioNacionalSombreron",
    "guatemalaMcd",
    "laChicaSombreron",
  ],
  "el-mandingas": [
    "caroCuervoMandinga",
    "udeaOralitura",
    "uscoCatalog",
    "unalAfricanArchive",
    "unescoCarnival",
    "unescoCarnivalSafeguarding",
    "minculturaOralidad",
    "unescoAfricanCaribbean",
  ],
  "el-mohan": [
    "villaPosseFolklore",
    "deviaCatalog",
    "rochaPatronato",
    "modulemaTolima",
    "culturaMohan",
    "radioNacionalMohan",
    "despiertaTolima",
    "minculturaTolima",
  ],
  "la-llorona": [
    "colombiaAprendeLlorona",
    "minculturaTolima",
    "cultureOverview",
    "colombiaAprendeGuide22",
    "tolimaLerida",
    "sanMartinLlorona",
    "uisChicamochaLlorona",
    "udenarLlorona",
  ],
  "la-madremonte": [
    "coyaimaTradition",
    "minculturaMadremontePacifico",
    "minculturaWomenFright",
    "bncMadremonte",
    "minculturaTolima",
    "cultureOverview",
    "esapMadremonte",
    "itmMadremonte",
  ],
  "los-duendes": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "culturaDuende",
    "udeaOralitura",
    "uisPiedecuestaOral",
    "udenarRural",
    "tolimaLerida",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickVariosMixtoFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickVariosMixtoFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = variosMixtoFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickVariosMixtoFinalSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene mapa de fuentes.`);
  return keys.map((key) => {
    const selected = variosMixtoFinalSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
