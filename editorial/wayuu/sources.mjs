function source({
  title,
  author,
  year,
  originalYear,
  type,
  url,
  summary,
  limitation,
}) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    ...(originalYear ? { originalYear } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const wayuuSources = {
  chaves1946: source({
    title: "Mitos, leyendas y cuentos de la Guajira",
    author: "Milcíades Chaves Ch.",
    year: 1946,
    type: "recolección etnográfica temprana",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1",
    summary:
      "Publica quince relatos del corpus con nombres de informantes, intérpretes, lugares y observaciones sobre su circulación en 1946.",
    limitation:
      "La traducción y el comentario pertenecen a una antropología nacional de su época; emplean categorías hoy problemáticas y no preservan el wayuunaiki.",
  }),
  villa1993: source({
    title: "Mitos y leyendas de Colombia, tomo I",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "compilación crítica de literatura oral",
    url: "https://repositorio.flacsoandes.edu.ec/items/796b49f5-fff2-4cf8-a8a5-ce5b14b01694/full",
    summary:
      "Reedita el corpus de Chaves, conserva su procedencia bibliográfica y lo sitúa dentro de una selección nacional de literatura oral.",
    limitation:
      "No constituye una transmisión independiente: para estos relatos depende de la publicación de Chaves de 1946.",
  }),
  pineda1950: source({
    title: "Aspectos de la magia en la Guajira",
    author: "Roberto Pineda Giraldo",
    year: 1950,
    type: "etnografía de campo",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1",
    summary:
      "Documenta prácticas de piaches, sueños, enfermedad, Mareiwa, Wanurü, Jirairay, Guanurú y relatos de transformación recogidos en la expedición de 1947.",
    limitation:
      "Interpreta desde teorías de magia y religión de mediados del siglo XX; sus equivalencias con Dios o demonio requieren cautela.",
  }),
  finol2007: source({
    title: "Mito y cultura guajira",
    author: "José Enrique Finol",
    year: 2007,
    originalYear: 1984,
    type: "análisis semiótico con transcripción de relatos",
    url: "https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf",
    summary:
      "Transcribe y compara versiones de Paz Ipuana y Michel Perrin sobre el fuego, Maleiwa, Ulépala, Jepira y los dominios de Juyá.",
    limitation:
      "Su objetivo es estructural y semiótico; además advierte la intervención estética de Paz Ipuana en las versiones publicadas.",
  }),
  pazIpuana: source({
    title: "Ale'eya: conceptos y descripciones de la cultura wayuu, tomo II",
    author: "Ramón Paz Ipuana",
    type: "memoria escrita por autor wayuu",
    url: "https://kimera.com/data/redlocal/ver_demos/RLWAYUU/VERSION/RECURSOS/CONTENIDO%20WAYUU/CULTURA%20WAYUU/RELATOS/TEXTO/ALE%20EYA%20WAYUU%20Tomo%20II.pdf",
    summary:
      "Reúne conceptos, relatos y explicaciones de un investigador y escritor wayuu atento a la lengua y a la tradición de su pueblo.",
    limitation:
      "Es una elaboración literaria y analítica de autor; no debe confundirse con una transcripción sin mediación de una voz colectiva.",
  }),
  perrin1980: source({
    title: "El camino de los indios muertos: mitos y símbolos guajiros",
    author: "Michel Perrin",
    year: 1980,
    originalYear: 1976,
    type: "etnografía y colección de relatos en wayuunaiki",
    url: "https://www.si.edu/object/siris_sil_419249",
    summary:
      "Registra relatos en wayuunaiki con traducción asistida por hablantes bilingües y estudia Jepira, Juyá, Pülowi, yoluja y el viaje de los muertos.",
    limitation:
      "La ficha consultable acredita la obra; para el texto completo de los relatos usamos también las transcripciones comparadas por Finol.",
  }),
  perrin1979: source({
    title: "Sükuaitpa wayuu: los guajiros, la palabra y el vivir",
    author: "Michel Perrin",
    year: 1979,
    type: "antología trilingüe de tradición oral",
    url: "https://www.persee.fr/doc/hom_0439-4216_1981_num_21_3_368222",
    summary:
      "La reseña académica describe una edición en wayuunaiki, español y francés de veintisiete mitos y relatos tradicionales.",
    limitation:
      "El enlace ofrece la reseña y los datos de edición, no la consulta íntegra de todos los textos.",
  }),
  minculturaWayuu: source({
    title: "Caracterización del pueblo Wayúu",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WAY%C3%9AU.pdf",
    summary:
      "Resume territorio binacional, organización social, lengua, historia reciente y problemáticas contemporáneas del pueblo Wayúu.",
    limitation:
      "Es una síntesis institucional y no una edición crítica de los relatos ni una voz comunitaria única.",
  }),
  onicWayuu: source({
    title: "Wayuú",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos/1156-wayuu.",
    summary:
      "Presenta al pueblo desde una organización indígena nacional y destaca territorio, movilidad, lengua, clanes y continuidad histórica.",
    limitation:
      "Su escala es general y contemporánea; no confirma por sí sola episodios narrativos específicos.",
  }),
  macuira: source({
    title: "Parque Nacional Natural Macuira",
    author: "Parques Nacionales Naturales de Colombia",
    type: "fuente territorial oficial",
    url: "https://www.parquesnacionales.gov.co/nuestros-parques/pnn-macuira/",
    summary:
      "Documenta la serranía de la Macuira, sus fuentes de agua, bosque nublado, traslape con el resguardo y valor cultural para el pueblo Wayúu.",
    limitation:
      "Es una fuente geográfica y ambiental, no una prueba de que cada historia ocurriera en un punto exacto del parque.",
  }),
  regimenMacuira: source({
    title: "Régimen Especial de Manejo del PNN Macuira y Resguardo Wayuu",
    author: "Parques Nacionales y autoridades tradicionales Wayuu",
    year: 2019,
    type: "acuerdo territorial intercultural",
    url: "https://www.parquesnacionales.gov.co/wp-content/uploads/2022/09/rem-pnn-macuira_2019.pdf",
    summary:
      "Describe territorios claniles, descendencia materna, gobernanza, lugares de valor cultural y manejo concertado de la Macuira.",
    limitation:
      "Documenta un acuerdo de manejo contemporáneo; no fija una versión antigua de los mitos.",
  }),
  unescoPalabrero: source({
    title: "Sistema normativo Wayuu, aplicado por el Pütchipü’üi",
    author: "UNESCO y comunidades Wayuu",
    year: 2010,
    type: "expediente de patrimonio cultural inmaterial",
    url: "https://ich.unesco.org/en/RL/wayuu-normative-system-applied-by-the-putchipu-ui-palabrero-00435",
    summary:
      "Explica el diálogo, la reparación, la compensación y la autoridad del tío materno dentro de clanes matrilineales.",
    limitation:
      "No convierte cada desenlace violento de una narración de 1946 en una descripción del sistema normativo actual.",
  }),
  geografiasMiticas: source({
    title: "Relatos con GPS: una geografía mítica e histórica de La Guajira",
    author: "Proyecto de investigación y recorrido territorial",
    type: "cartografía narrativa y memoria territorial",
    url: "https://geografiasmiticasguajira.com/",
    summary:
      "Relaciona lugares, fotografías, voces y relatos; presenta Jepira como espacio de memoria donde se encuentran vida y muerte.",
    limitation:
      "La georreferenciación interpreta paisajes de memoria y no vuelve literalmente cartografiables todos los dominios sobrenaturales.",
  }),
  dictionaryWayuu: source({
    title: "Diccionario de mitología Wayuu",
    author: "Corporación Cultural Jayeechi",
    type: "compilación pedagógica y glosario mitológico",
    url: "https://cdnc.heyzine.com/flip-book/pdf/e76f31da5a84b39577d4b0f9b21b29b0b5d4d6b3.pdf",
    summary:
      "Sistematiza personajes, lugares y episodios a partir de Paz Ipuana, Perrin y consultas con docentes y sabedores de La Guajira.",
    limitation:
      "Es una fuente derivada y pedagógica; reproduce extractos y ortografías de obras previas, por lo que no cuenta como voz oral independiente.",
  }),
  banrepWaleker: source({
    title: "Wale Kerü, primera parte",
    author: "Martha Ramírez Zapata",
    year: 1995,
    type: "investigación cultural y manual de técnicas Wayuu",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2758/",
    summary:
      "Documenta el tejido, sus técnicas y el lugar de Wale'kerü en procesos de memoria y etnoeducación desarrollados con comunidades Wayuu.",
    limitation:
      "Combina investigación, divulgación y enseñanza técnica; no es una edición crítica de todas las variantes de la leyenda.",
  }),
  scieloWaleker: source({
    title: "Süchiki Walekerü: un ejemplo del uso de las TIC en escuelas indígenas",
    author: "Investigación educativa intercultural",
    year: 2006,
    type: "artículo académico sobre etnoeducación Wayuu",
    url: "https://ve.scielo.org/scielo.php?pid=S1316-49102006000300006&script=sci_arttext",
    summary:
      "Analiza el uso escolar bilingüe de la leyenda de Walekerü, atribuida a la creación literaria de Ramón Paz Ipuana sobre el origen del tejido.",
    limitation:
      "Estudia una adaptación educativa y no reemplaza el texto completo ni las variantes orales del relato.",
  }),
  icanhTejedoras: source({
    title: "Hilos en el desierto: las tejedoras wayuus en La Guajira",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "divulgación institucional de patrimonio textil",
    url: "https://colecciones.icanh.gov.co/articulos/mujeresWayuu.php",
    summary:
      "Relaciona a Walé'kerü con fajas y chinchorros y describe aprendizaje femenino, telar, huso, encierro y transmisión familiar.",
    limitation:
      "Resume el motivo de origen y prácticas contemporáneas; no transcribe la narración completa de Irunúu.",
  }),
  ortWaleker: source({
    title: "Minchi’i / Pi’ichi, un refugio de los sueños",
    author: "Anales de Investigación en Arquitectura",
    year: 2020,
    type: "artículo académico sobre casa y cosmovisión Wayuu",
    url: "https://revistas.ort.edu.uy/anales-de-investigacion-en-arquitectura/article/download/3059/3402?inline=1",
    summary:
      "Resume una variante de Wale'kerü como niña maltratada, tejedora nocturna, araña y maestra de jóvenes durante el encierro.",
    limitation:
      "Trabaja el relato para interpretar arquitectura y transformación; su síntesis no debe fundirse sin aviso con la versión de Irunúu.",
  }),
  uisViaje: source({
    title: "Análisis semiótico del mito El viaje del más allá",
    author: "Lina Marcela Díaz Peña y Nidia Carina Manrique Tarazona",
    year: 2021,
    type: "investigación universitaria",
    url: "https://noesis.uis.edu.co/items/8e96b9af-2c8b-404b-ba33-a0e25843474e",
    summary:
      "Estudia una versión literaria del viaje al más allá y permite distinguir representación de género, estructura narrativa y práctica cultural.",
    limitation:
      "Analiza una versión mediada por De la Fontanille y Serrano; sus conclusiones no representan por sí solas a todas las mujeres Wayuu.",
  }),
  uasbAlimentos: source({
    title: "Representaciones de abundancia y escasez en relatos wayuu",
    author: "Investigación de maestría, Universidad Andina Simón Bolívar",
    type: "análisis académico de relatos de Paz Ipuana",
    url: "https://repositorio.uasb.edu.ec/server/api/core/bitstreams/14fa6f0f-e40a-4533-a534-68933657f557/content",
    summary:
      "Analiza relatos de Juyá, Ulépala y Jamú y documenta procedencia, narradores, reciprocidad y alternancia entre abundancia y escasez.",
    limitation:
      "Trabaja una selección de textos publicados y un modelo semiótico; no aporta versiones independientes de todos los relatos.",
  }),
  ovidMetamorphoses: source({
    title: "Ovid, Metamorphoses",
    author: "Ovidio",
    type: "fuente comparativa clásica",
    url: "https://ovid.lib.virginia.edu/",
    summary:
      "Ofrece relatos antiguos de transformación corporal, pérdida, castigo y paso entre estados humanos y no humanos.",
    limitation:
      "La semejanza de un motivo no demuestra contacto, copia ni equivalencia cultural con una narración Wayuu.",
  }),
  ovidOrpheus: source({
    title: "Metamorphoses, Books X-XI: Orpheus and Eurydice",
    author: "Ovidio",
    type: "fuente comparativa sobre viaje por una persona muerta",
    url: "https://ovid.lib.virginia.edu/trans/Metamorph10.htm",
    summary:
      "Narra el descenso de Orfeo al mundo de los muertos para intentar recuperar a Eurídice y la pérdida que sigue a quebrar una condición.",
    limitation:
      "El Hades grecorromano no equivale a Jepira y Orfeo no atraviesa el ciclo de parentesco, lluvia y segunda muerte del relato Wayuu.",
  }),
  popolVuh: source({
    title: "Popol Vuh: Sacred Book of the Quiché Maya People",
    author: "Traducción y estudio de Allen J. Christenson",
    year: 2007,
    type: "edición académica de fuente mesoamericana",
    url: "https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf",
    summary:
      "Conserva relatos de creación, pruebas, gemelos transformadores, muerte y recomposición del mundo k’iche’.",
    limitation:
      "No existe evidencia de derivación entre estos relatos y los Wayuu; la comparación se limita a funciones narrativas.",
  }),
  hesiod: source({
    title: "Hesiod, Theogony and Works and Days",
    author: "Hesíodo",
    type: "fuente comparativa griega",
    url: "https://www.perseus.tufts.edu/hopper/searchresults?q=Hesiod",
    summary:
      "Documenta genealogías divinas y el ciclo de Prometeo, el fuego y las consecuencias de su distribución entre los humanos.",
    limitation:
      "Prometeo pertenece a otro orden moral y cosmológico; compartir el motivo del fuego no implica influencia.",
  }),
};

export function pickWayuuSources(...keys) {
  return keys.map((key) => {
    const selected = wayuuSources[key];
    if (!selected) {
      throw new Error(`Fuente Wayúu desconocida: ${key}`);
    }
    return selected;
  });
}
