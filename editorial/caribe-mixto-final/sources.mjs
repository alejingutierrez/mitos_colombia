function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const caribeMixtoFinalSources = {
  friedemannPrimary: source({
    title: "Miss Nansi, Old Nansi y otras narraciones del folklore de la isla de San Andrés",
    author: "Nina S. de Friedemann, con narradores de Ground Road y Sound Bay",
    year: 1967,
    type: "registro antropológico primario de tradición oral",
    url: "https://www.iberoamericadigital.net/BDPI/Search.do?matter=Criollo+de+San+Andres+Gramatica",
    summary:
      "Identifica una investigación realizada en 1965, las grabaciones conservadas por el Instituto Colombiano de Antropología, los grupos de edad y la transcripción bilingüe de cuentos, rimas y adivinanzas.",
    limitation:
      "El registro fue mediado por investigadoras y traductores de su época; no representa todas las voces raizales ni autoriza a corregir el creole como si fuera inglés defectuoso.",
  }),
  folclorIdentidad: source({
    title: "El folclor de Colombia: práctica de la identidad cultural",
    author: "Compilación colombiana de folclor; sección de Nina S. de Friedemann",
    type: "antología facsimilar de registros orales",
    url: "https://www.flacso.org.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce Mico y Nansi, Beda Nansi, Beda Monkey y el molino, Tiger y el baile de perros y otros materiales de la colección insular con su oralidad concisa.",
    limitation:
      "Es una reedición compilada y la digitalización contiene erratas de OCR; se usa para controlar acciones, no para inventar psicología, ceremonias o cosmologías.",
  }),
  cuentoPopular: source({
    title: "Colombia, cuento popular",
    author: "Instituto Andino de Artes Populares; selección de tradición colombiana",
    type: "antología de cuentos populares con transcripción bilingüe",
    url: "https://biblio.flacsoandes.edu.ec/libros/digital/44511.pdf",
    summary:
      "Publica el contexto de la recolección de 1965, dos variantes de Tigre y Nansi y el cuento Un perro, una cabra y Beda Tiger en creole y traducción literal.",
    limitation:
      "El volumen cambia algunas grafías y títulos y no identifica a cada narrador; las traducciones son literales y no deben novelarse para hacerlas más fluidas.",
  }),
  banrepAnancy: source({
    title: "¡Recordemos a Anancy! | No forget beda Nancy!",
    author: "Andrés Steele Mitchell; Centro Cultural de San Andrés, Banco de la República",
    year: 2020,
    type: "divulgación cultural institucional desde el archipiélago",
    url: "https://www.banrepcultural.org/noticias/recordemos-anancy-no-forget-beda-nancy",
    summary:
      "Explica la centralidad identitaria de Anancy, sus nombres y géneros variables, su carácter de trickster y su circulación en el Caribe anglófono.",
    limitation:
      "Es una síntesis contemporánea y no una variante primaria de cada cuento; no fija una única apariencia, género o moraleja de Anancy.",
  }),
  duncan2015: source({
    title: "Anancy y el tigre en la literatura oral afrodescendiente",
    author: "Quince Duncan",
    year: 2015,
    type: "artículo académico comparativo",
    url: "https://revistas.javeriana.edu.co/index.php/cualit/article/view/12949",
    summary:
      "Examina el origen africano y las funciones míticas e ideológicas de Anancy y Tiger en África, el Pacífico colombiano y Centroamérica dentro de la diáspora.",
    limitation:
      "Su escala transatlántica no demuestra que toda versión caribeña tenga el mismo desenlace ni que Tiger represente siempre a un único actor histórico.",
  }),
  botero2007: source({
    title: "Oralidad y escritura en la isla de San Andrés",
    author: "Juliana Botero Mejía",
    year: 2007,
    type: "artículo etnográfico sobre oralidad, escuela e infancia",
    url: "https://revistas.javeriana.edu.co/index.php/univhumanistica/article/view/2235/1492",
    summary:
      "Describe las historias de Anancy como relatos hechos para ser contados, cantados y animados por mayores a nuevas generaciones, vinculados con memoria e identidad isleña.",
    limitation:
      "Estudia prácticas de 2005 y no ofrece una edición crítica de los cinco relatos concretos revisados aquí.",
  }),
  leipold2002: source({
    title: "Our Native Thing: estudio sobre la imagen histórica de los sanandresanos",
    author: "Claudia Leipold",
    year: 2002,
    type: "tesis etnohistórica con entrevistas a Native Islanders",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll23/id/1005/download",
    summary:
      "Sitúa las Nancy-Stories en lengua y cultura oral insular, recoge la lectura de Oakley Forbes sobre el estilo sanandresano y documenta tensiones generacionales de memoria.",
    limitation:
      "La autora escribe desde una investigación externa y algunas interpretaciones históricas de Anancy y Tiger son hipótesis, no equivalencias obligatorias para cada relato.",
  }),
  locAnansi: source({
    title: "Anansi the Spider",
    author: "Library of Congress, World Treasures exhibition",
    type: "síntesis curatorial comparativa",
    url: "https://www.loc.gov/exhibits/world/earth.html#obj138",
    summary:
      "Reconoce a Anansi como figura popular de Ghana transmitida oralmente y transformada en relatos de África occidental, las Antillas y comunidades afroamericanas.",
    limitation:
      "Es una comparación internacional general; no sustituye el registro raizal ni prueba parentesco textual directo con cada episodio de San Andrés.",
  }),
  smithsonianAnansi: source({
    title: "Ashanti: Folk Tales from Ghana",
    author: "Harold Courlander; Smithsonian Folkways",
    year: 1959,
    type: "colección sonora y ficha curatorial de cuentos asante",
    url: "https://folkways.si.edu/harold-courlander/ashanti-folk-tales-from-ghana/childrens-prose/album/smithsonian",
    summary:
      "Documenta a Anansi como héroe, villano, inspiración moral y figura cómica en cuentos recogidos en Ghana.",
    limitation:
      "Es una colección adaptada por un folclorista estadounidense y no debe usarse para africanizar detalles insulares ausentes de las grabaciones de 1965.",
  }),
  minEducacionOralidad: source({
    title: "Orientaciones pedagógicas para niñas y niños de comunidades de grupos étnicos",
    author: "Ministerio de Educación Nacional de Colombia",
    type: "orientación pública sobre lenguas y oraliteraturas étnicas",
    url: "https://siteal.iiep.unesco.org/sites/default/files/sit_accion_files/orientaciones_pedagogicas_para_la_educacion_inicial_de_ninas_y_ninos_pertenecientes_a_comunidades_de_grupos_etnicos_0.pdf",
    summary:
      "Reconoce el creole del pueblo raizal y define la oraliteratura como acervo conservado y difundido primordialmente mediante la oralidad.",
    limitation:
      "Es un marco pedagógico nacional, no una fuente narrativa ni una autorización para homogeneizar voces, grafías o prácticas del archipiélago.",
  }),

  platoFestival: source({
    title: "Festival Folclórico de la Leyenda del Hombre Caimán",
    author: "Alcaldía Municipal de Plato, Magdalena",
    type: "memoria institucional local del festival",
    url: "https://plato-magdalena.gov.co/MiMunicipio/Paginas/Fiestas-Celebraciones.aspx",
    summary:
      "Atribuye la leyenda a una compilación de relatos de pescadores realizada por Virgilio Di Filippo y documenta el festival iniciado en 1972.",
    limitation:
      "La página celebra patrimonio local y resume el argumento; no aporta las crónicas originales de La Prensa ni demuestra cada detalle biográfico de Saúl.",
  }),
  unimagdalenaCaiman: source({
    title: "El Hombre Caimán",
    author: "Álvaro González Uribe; edición de la Universidad del Magdalena",
    year: 2008,
    type: "crónica cultural regional publicada por universidad",
    url: "https://editorial.unimagdalena.edu.co/Content/ArchivosLibros/tempx1x2x3x4x5x6x7x8x9x0/librox1x2x3-3036/368e454b9ef5f0b91b84ccc0a3f9f604_preview.pdf",
    summary:
      "Registra la versión del mirón de Caño de las Mujeres y otra de amor contrariado con Roque Lina, brebajes y una transformación incompleta.",
    limitation:
      "Es una crónica que enumera versiones y no un estudio histórico de Saúl; la variante amorosa no debe absorber el núcleo del voyeur castigado.",
  }),
  congresoCaiman: source({
    title: "Proyecto de Ley 237 de 2024 Senado: Leyenda del Hombre Caimán",
    author: "Congreso de la República de Colombia",
    year: 2024,
    type: "exposición legislativa de memoria cultural local",
    url: "https://sidn.ramajudicial.gov.co/SIDN/PUBLICACIONES%20PERIODICAS/TEXTO%20COMPLETO%20Y%20TABLAS%20DE%20CONTENIDO/GACETA%20DEL%20CONGRESO/GACETA%20DEL%20CONGRESO%202024/GC%200518%20DE%202024.PDF",
    summary:
      "Resume la atribución a Di Filippo, las crónicas de la década de 1940, la circulación entre pescadores y la popularización musical de la leyenda.",
    limitation:
      "Es la justificación de un proyecto, no una investigación etnográfica independiente; su vínculo con creencias Chimila requiere fuentes comunitarias adicionales.",
  }),
  elTiempoTrenos: source({
    title: "Los fatídicos trenos del Hombre Caimán",
    author: "El Tiempo",
    year: 1995,
    type: "crónica periodística de memoria plateña",
    url: "https://www.eltiempo.com/archivo/documento/mam-482277",
    summary:
      "Recuerda a Virgilio Di Filippo como recopilador de relatos de pescadores y registra motivos de la madre, el ron, el río y el cuerpo de caimán con cabeza humana.",
    limitation:
      "Su prosa recrea la leyenda y añade color local; no convierte a Saúl ni sus rasgos físicos en una persona históricamente comprobada.",
  }),
  elTiempoSong: source({
    title: "Murió el compositor de Se va el caimán",
    author: "Roberto Llanos Rodado; El Tiempo",
    year: 2006,
    type: "perfil periodístico y control musical",
    url: "https://www.eltiempo.com/archivo/documento/MAM-1908465",
    summary:
      "Identifica a José María Peñaranda y documenta la canción que sitúa explícitamente la transformación en Plato.",
    limitation:
      "La canción difundió la leyenda, pero su letra no es una transcripción de las crónicas ni una prueba de la existencia de Saúl.",
  }),
  colombiaTravelCaiman: source({
    title: "Monumento a la leyenda del Caimán",
    author: "Colombia Travel, ProColombia",
    type: "ficha pública de patrimonio turístico",
    url: "https://colombia.travel/es/cienaga/conoce-el-monumento-la-leyenda-del-caiman",
    summary:
      "Confirma el monumento de Plato como espacio público de preservación y celebración de la leyenda caribeña.",
    limitation:
      "Es divulgación turística y no reconstruye variantes, fechas de transmisión ni la autoría de todos los componentes del relato.",
  }),
  minculturaCaiman: source({
    title: "Resolución 4208 de 2018 del Ministerio de Cultura",
    author: "Ministerio de Cultura de Colombia",
    year: 2018,
    type: "acto administrativo sobre patrimonio material",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/resolucion_mincultura_4208_2018.htm",
    summary:
      "Registra la presencia de la leyenda del Hombre Caimán en la composición patrimonial del telón de boca del Teatro Santa Marta.",
    limitation:
      "Prueba recepción patrimonial, no la literalidad del relato ni una procedencia indígena específica.",
  }),
  zenuCaimanComparison: source({
    title: "En los montes, sí, aquí no: cosmología y medicina tradicional de los Zenúes",
    author: "Josef Drexler, con familias y narradores del resguardo Zenú",
    year: 2002,
    type: "etnografía comparativa con testimonios atribuidos",
    url: "https://digitalrepository.unm.edu/abya_yala/222/",
    summary:
      "Documenta un caimán de oro territorial dentro de la cosmología Zenú y permite contrastarlo con el híbrido humano de la leyenda plateña.",
    limitation:
      "El caimán Zenú pertenece a otra comunidad y otro sistema narrativo; se compara para marcar diferencias, nunca para explicar a Saúl.",
  }),
};

const raizalKeys = [
  "friedemannPrimary",
  "folclorIdentidad",
  "cuentoPopular",
  "banrepAnancy",
  "duncan2015",
  "botero2007",
  "leipold2002",
  "locAnansi",
];

const hombreCaimanKeys = [
  "platoFestival",
  "unimagdalenaCaiman",
  "congresoCaiman",
  "elTiempoTrenos",
  "elTiempoSong",
  "colombiaTravelCaiman",
  "minculturaCaiman",
  "zenuCaimanComparison",
];

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickCaribeMixtoFinalSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickCaribeMixtoFinalSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = caribeMixtoFinalSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickCaribeMixtoFinalSourcesHeredadas(slug) {
  const keys = slug === "el-hombre-caiman" ? hombreCaimanKeys : raizalKeys;
  return keys.map((key) => {
    const selected = caribeMixtoFinalSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
