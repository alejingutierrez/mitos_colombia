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

  // ——— Enriquecimiento de fuentes (Fase B, 2026-09-16): fuentes específicas por mito ———
  pesPalabreros: source({
    title: "Plan Especial de Salvaguardia del Sistema Normativo Wayuu aplicado por el Pütchipü'üi",
    author: "Junta Mayor Autónoma de Palabreros Wayuu y Ministerio de Cultura",
    year: 2009,
    type: "plan de salvaguardia formulado por una organización wayuu",
    url: "https://patrimonio.mincultura.gov.co/SiteAssets/Paginas/PLAN-ESPECIAL-DE-SALVAGUARDA-DEL-SNW-SISTEMA-NORMATIVO-WAYUU-Aplicado-por-el-P%C3%BCtchip%C3%BC%E2%80%99%C3%BCi/02-El%20sistema%20normativo%20way%C3%BAu%20aplicado%20por%20el%20palabrero%20Putchipu%E2%80%99ui%20-%20PES.pdf",
    summary:
      "Documento formulado por la Junta Mayor Autónoma de Palabreros que explica, desde la propia organización wayuu, el territorio, los clanes matrilineales, la palabra, la reparación y los fundamentos mítico-históricos del sistema normativo.",
    limitation:
      "Es un instrumento de política patrimonial contemporáneo; describe la organización social y el derecho propio, no confirma episodios narrativos específicos.",
  }),
  perrinIniciacion1986: source({
    title: "Une interprétation morphogénétique de l'initiation chamanique",
    author: "Michel Perrin",
    year: 1986,
    type: "artículo académico (L'Homme, Persée)",
    url: "https://www.persee.fr/doc/hom_0439-4216_1986_num_26_97_368677",
    summary:
      "Analiza la categoría wanüliü, que designa a la vez las enfermedades epidémicas y los seres malignos que las causan.",
    limitation:
      "No narra el mito de Arámai; aporta el marco de la entidad de la epidemia.",
  }),
  perrinNouveaute1988: source({
    title: "Du Mythe au quotidien, penser la nouveauté",
    author: "Michel Perrin",
    year: 1988,
    type: "artículo académico (L'Homme 106-107, Persée)",
    url: "https://www.persee.fr/doc/hom_0439-4216_1988_num_28_106_368973",
    summary:
      "Estudia cómo la mitología guajira incorpora y piensa realidades nuevas como epidemias y bienes de contacto.",
    limitation:
      "Relevancia temática (epidemia como novedad mitologizada), no menciona a Arámai explícitamente.",
  }),
  riveraMetaforaCarne: source({
    title: "La metáfora de la carne; sobre los Wayuu en la península de la Guajira",
    author: "Alberto Rivera Gutiérrez",
    year: 1991,
    type: "artículo académico (Revista Colombiana de Antropología 28)",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1929",
    summary:
      "Desarrolla el origen de Maleiwa como demiurgo y la pareja mítica Juyá-Pulowi.",
    limitation:
      "Su foco es la ganadería y la metáfora de la carne, no una narrativa completa de creación.",
  }),
  hosteinPanorama: source({
    title: "El pueblo wayuu de la Guajira colombo-venezolana: un panorama de su cultura",
    author: "Nelly Hostein",
    year: 2010,
    type: "artículo académico (Cuadernos de Antropología 20, UCR)",
    url: "https://revistas.ucr.ac.cr/index.php/antropologia/article/view/2006",
    summary:
      "Describe el origen de los wayuu y presenta a Mareigua como el maestro de la creación, el que no fue engendrado.",
    limitation:
      "La creación ocupa un apartado breve dentro de un panorama general.",
  }),
  ochoaSoberania: source({
    title: "Soberanía móvil: la nación wayuu entre los sueños, el comercio y la política",
    author: "María Ochoa Sierra",
    year: 2025,
    type: "artículo académico (Revista Colombiana de Antropología 61(1))",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/2798",
    summary:
      "Etnografía sobre la presentación de los sueños y la construcción de la persona wayuu, clave para leer la advertencia onírica del hijo del guerrero.",
    limitation:
      "No trata el mito; es contexto etnográfico del peso de los sueños.",
  }),
  perrinGanado: source({
    title: "Creaciones míticas y representación del mundo: el ganado en el pensamiento simbólico guajiro",
    author: "Michel Perrin",
    year: 1987,
    type: "artículo científico (Antropológica, Caracas 67)",
    url: "https://biblat.unam.mx/hevila/AntropologicaCaracas/1987/no67/1.pdf",
    summary:
      "Análisis del venado en la mitología guajira (emisarios de Pulowi, señores de los venados), tema directo del mito de Jaichuasay.",
    limitation:
      "No menciona a Jaichuasay por nombre; aborda la figura del venado en general.",
  }),
  nosotrosLosWayuu: source({
    title: "Nosotros los Wayuu",
    author: "Alfonso Forero",
    year: 1995,
    type: "libro (registro bibliográfico Open Library)",
    url: "https://openlibrary.org/works/OL2796449W/Nosotros_los_Wayuu",
    summary:
      "Obra sobre literatura y tradición oral wayuu que cita el relato de Jaichuasay.",
    limitation:
      "El libro no está digitalizado; solo se accede al registro e índice.",
  }),
  mercadoAleeya: source({
    title: "Ale'eya conformación de todo lo que existe: la ley de origen de la cultura wayuu",
    author: "Rafael Segundo Mercado Epieyu",
    year: 2022,
    type: "artículo académico (Literatura: teoría, historia, crítica, UNAL)",
    url: "https://revistas.unal.edu.co/index.php/lthc/article/view/102228",
    summary:
      "Desde la voz wayuu, expone a Juya' (Lluvia) como genio fecundante que rige estaciones y constelaciones.",
    limitation:
      "No narra el episodio específico de Jururiana.",
  }),
  recursoAgua2018: source({
    title: "El recurso agua en las comunidades indígenas wayuu de La Guajira Colombiana. Parte 1",
    author: "Alcides R. Daza-Daza, Nelson Rodríguez-Valencia y Alexis Carabalí-Angola",
    year: 2018,
    type: "artículo académico (Información Tecnológica, SciELO Chile)",
    url: "https://www.scielo.cl/scielo.php?pid=S0718-07642018000600013&script=sci_arttext",
    summary:
      "Detalla cómo el wayuu concibe a Juya (lluvia) como ser dador de vida, con ritos para evocarla.",
    limitation:
      "Estudio de gestión del agua; la mitología es un componente.",
  }),
  filosofiaMitica2005: source({
    title: "Filosofía mítica wayúu",
    author: "Brígida Sánchez",
    year: 2005,
    type: "artículo académico (Revista de Artes y Humanidades UNICA)",
    url: "https://www.redalyc.org/pdf/1701/170118766003.pdf",
    summary:
      "Analiza el pensamiento mítico wayúu y presenta a Juyá como deidad masculina fecundadora en la pareja con Pulowi.",
    limitation:
      "Síntesis filosófica general; no aborda a Jururiana en particular.",
  }),
  carrasqueroFinolYonna: source({
    title: "Mito, concepciones del cuerpo y yonna wayuu",
    author: "Ángel Carrasquero y José Enrique Finol",
    year: 2010,
    type: "artículo académico (Omnia, LUZ)",
    url: "https://www.redalyc.org/pdf/737/73715016002.pdf",
    summary:
      "Asocia a Juya y sus hermanos con las formas de precipitación pluvial y las lluvias intensas.",
    limitation:
      "Centrado en el cuerpo y la danza yonna.",
  }),
  cosmovisionCotidianidad2024: source({
    title: "Cosmovisión y cotidianidad Wuayuu de las familias del Clan Pushaina",
    author: "Andrea García Puello, Francis Araque Barboza y Ennia Cardona",
    year: 2024,
    type: "artículo científico (VISION SY, U. Metropolitana)",
    url: "https://revvisy.unimetro.edu.co/index.php/visy/article/view/341",
    summary:
      "Etnografía del clan del protagonista: cosmovisión, simbolismo e historia del clan Pushaina.",
    limitation:
      "Trata el clan, no el relato de Chaves en sí.",
  }),
  etnografiaRito1999: source({
    title: "Etnografía del rito: reciprocidad y ritual funerario entre los guajiros",
    author: "José Enrique Finol y José Ángel Fernández",
    year: 1999,
    type: "artículo académico (Cuicuilco, INAH)",
    url: "https://revistas.inah.gob.mx/index.php/cuicuilco/article/view/20380",
    summary:
      "Estudia el primer entierro wayuu y remite al mito del viaje al más allá recogido por Perrin y Paz Ipuana.",
    limitation:
      "Enfoque etnográfico del rito mortuorio; el mito se usa como marco.",
  }),
  migrarMuerte2017: source({
    title: "Migrar con la muerte. Cambios en los ritos de los restos wayuu en Maracaibo",
    author: "Nelly García, Dilia Flores y Carlos Valbuena",
    year: 2017,
    type: "artículo académico (Perspectivas, UNERMB)",
    url: "https://www.perspectivas.unermb.web.ve/index.php/Perspectivas/article/view/215",
    summary:
      "Compara los mitos del segundo velorio y el destino de los muertos en Jepirra entre ancianos wayuu.",
    limitation:
      "Interés en los cambios urbanos del rito, más que en la narración completa del mito.",
  }),
  cosmogoniaRito2014: source({
    title: "Cosmogonía y Rito en la Vivienda Wayuu",
    author: "Erik Marcelo Marín Ortíz",
    year: 2014,
    type: "tesis de maestría (UNAL Manizales)",
    url: "https://repositorio.unal.edu.co/items/d70b1a60-be82-49a1-97e1-13d6b5295b0e",
    summary:
      "Expone que el cementerio es el lugar sagrado donde las almas inician su viaje al más allá.",
    limitation:
      "Tesis de arquitectura; el mito se aborda como componente de la cosmovisión.",
  }),
  contribucionEstudio1913: source({
    title: "Contribución al estudio de la lengua guajira",
    author: "Luis R. Oramas",
    year: 1913,
    type: "libro/glosario etnolingüístico",
    url: "https://books.google.com/books?id=jllFAQAAIAAJ",
    summary:
      "Registro lexicográfico temprano donde aparece Guanurú como espíritu/deidad del panteón guajiro.",
    limitation:
      "Es una entrada de diccionario, no una narración del mito.",
  }),
  simbolismoSerpiente2006: source({
    title: "Simbolismo de la serpiente entre los Wayuu",
    author: "Argenis C. Angola y Belinés Mejía",
    year: 2006,
    type: "artículo académico (Jangwa Pana, Unimagdalena)",
    url: "https://www.redalyc.org/pdf/5880/588069656007.pdf",
    summary:
      "Analiza relatos donde el wanülü roba mujeres e hijas y se metamorfosea, en línea con el canto que invoca a Wanurü.",
    limitation:
      "No menciona el canto Jirairay por nombre.",
  }),
  cuandoCambian2004: source({
    title: "Cuando cambian los sueños: la cultura wayuu frente a las iglesias evangélicas",
    author: "Nelly García Gavidia y Carmen V. García",
    year: 2004,
    type: "artículo académico (Opción, LUZ)",
    url: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1012-15872004000100002",
    summary:
      "Describe a los wanülü como emisarios de Pulowi asociados al mal, y sitúa a Jepirra y Juyá en el sistema religioso wayuu.",
    limitation:
      "Perspectiva sobre el cambio religioso.",
  }),
  crimenDeber2000: source({
    title: "El crimen y el deber-ser en la sociedad Wayuu",
    author: "Yanett Segovia",
    year: 2000,
    type: "artículo académico (Revista CENIPEC)",
    url: "http://www.ulpiano.org.ve/revistas/bases/artic/texto/CENIPEC/18-19/cenipec_2000_18-19_31-53.pdf",
    summary:
      "Analiza a Wanülü como el origen del mal que todo lo envuelve, dentro del código ético-jurídico wayuu.",
    limitation:
      "Trabajo sobre derecho consuetudinario; sin el canto Jirairay.",
  }),
  historiographyRegionalization2014: source({
    title: "Historiography of regionalization in Colombia: an institutional and interdisciplinary approach 1902-1987",
    author: "José Eduardo Rueda Enciso y Renzo Ramírez Bacca",
    year: 2014,
    type: "artículo académico (Historelo, UNAL)",
    url: "http://www.scielo.org.co/pdf/histo/v6n11/v6n11a2.pdf",
    summary:
      "Documenta que Roberto Pineda Giraldo publicó La Chama, un mito guajiro (1947), fuente primaria del relato.",
    limitation:
      "Referencia la publicación original; no reproduce el texto del mito.",
  }),
  relatosAncestrales2026: source({
    title: "Relatos ancestrales Wayuu como estrategia pedagógica para fortalecer la comprensión lectora",
    author: "Astrid Esther Mejía Pedroza, Gladys Cubides de González y Judith del Carmen Viloria Bohórquez",
    year: 2026,
    type: "tesis de maestría (U. de La Sabana)",
    url: "https://intellectum.unisabana.edu.co/entities/publication/8a58eb28-0a01-4a2d-b7d3-c44bd9df5955",
    summary:
      "Recopila relatos ancestrales wayuu seleccionados con la comunidad, entre los que se menciona La chama.",
    limitation:
      "Tesis de educación; presentación del mito al servicio de la didáctica.",
  }),
  mitoWayuu2025: source({
    title: "Mito wayuu: Wolunka y su análisis simbólico",
    author: "Geraldine Suárez González",
    year: 2025,
    type: "artículo académico (Omnia, U. del Zulia)",
    url: "https://www.produccioncientificaluz.org/index.php/omnia/article/view/44342",
    summary:
      "Análisis hermenéutico dedicado íntegramente al mito de Wolunka y sus símbolos (fertilidad, génesis wayuu).",
    limitation:
      "Revista venezolana, no especializada en etnografía wayuu.",
  }),
  tradicionMitologia2020: source({
    title: "Tradición-Mitología wayuu",
    author: "Delio Guerra Ibarra",
    year: 2020,
    type: "divulgación regional (Guajira Gráfica)",
    url: "https://www.guajiragrafica.net/2020/05/02/tradicion-mitologia-wayuu/",
    summary:
      "Narra el mito de Worunka y de la expedición de Warapuru convertidos en cerros por Mareiwa.",
    limitation:
      "Prensa regional sin revisión académica.",
  }),
  simbolismoRitual2004: source({
    title: "Simbolismo del ritual de paso femenino entre los Wayuu de la alta Guajira",
    author: "Maya Mazzoldi",
    year: 2004,
    type: "artículo académico (Maguaré 18, UNAL)",
    url: "https://repositorio.unal.edu.co/bitstreams/32954568-3cab-41e3-b7e0-e80b1c67c031/download",
    summary:
      "Analiza el encierro y los actos rituales de la majayura como paso de niña a mujer.",
    limitation:
      "Se centra en el ritual, no en la variante mítica de Puró.",
  }),
  encierroMajajut2017: source({
    title: "El encierro de las Majajüt: el ritual de pubertad femenina wayuu",
    author: "Yaneth Sierra (Banco de la República)",
    year: 2017,
    type: "multimedia institucional (Banrepcultural)",
    url: "https://www.banrepcultural.org/multimedia/el-encierro-de-las-majajut-el-ritual-de-pubertad-femenina-wayuu",
    summary:
      "Exposición de una mujer wayuu sobre el encierro y la figura de la majajüt.",
    limitation:
      "Contenido audiovisual por JavaScript, sin texto académico directo.",
  }),
  reconceptualizingWater2025: source({
    title: "Reconceptualizing water governance through traditional knowledge: insights from Wayuu cosmovision",
    author: "Frontiers in Water",
    year: 2025,
    type: "artículo científico (acceso abierto)",
    url: "https://www.frontiersin.org/journals/water/articles/10.3389/frwa.2025.1634360/pdf",
    summary:
      "Examina la cosmovisión wayuu del agua, la lluvia y la escasez como marco de gobernanza hídrica.",
    limitation:
      "Enfoque en gestión del agua, no en el relato mítico concreto.",
  }),
  wayuuInterminable: source({
    title: "Los wayuu y la interminable sed de vida",
    author: "Revista Gaceta",
    type: "divulgación seria",
    url: "https://gaceta.co/contenidos/los-wayuu-y-la-interminable-sed-de-vida/",
    summary:
      "Ensayo sobre el vínculo wayuu con el agua y la sed, citando la mitología de la lluvia.",
    limitation:
      "Divulgación periodística sin aparato académico.",
  }),
  serranoOutsu: source({
    title: "Outsü, enfermedades y práctica curativa ritual en los Wayuu de la Media Guajira, Colombia",
    author: "Silvia Rubiela Serrano López",
    year: 2020,
    type: "artículo académico (Jangwa Pana, Unimagdalena)",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/download/3643/2708",
    summary:
      "Documenta el papel de la curandera outsü frente a las wanülü, espíritus de enfermedad y de los muertos.",
    limitation:
      "Perspectiva de salud/ritual curativo, no del mito del valle de la muerte.",
  }),
  ajapujawaEspiritu2010: source({
    title: "AJAPÜJAWA (espíritu del sueño) em rituais de morte e vingança wayuu",
    author: "Fanny Longa Romero",
    year: 2010,
    type: "artículo académico (Espaço Ameríndio, UFRGS)",
    url: "https://seer.ufrgs.br/EspacoAmerindio/article/view/17108",
    summary:
      "Antropóloga wayuu analiza el espíritu del sueño y su papel en los ritos de muerte y venganza.",
    limitation:
      "Escrito en portugués; centrado en el sueño/venganza.",
  }),
  pazReverolSuenos: source({
    title: "Hacer los sueños. Una perspectiva wayuu",
    author: "Carmen Laura Paz Reverol",
    year: 2017,
    type: "artículo académico (EntreDiversidades, UNACH)",
    url: "https://entrediversidades.unach.mx/index.php/entrediversidades/article/download/18/45",
    summary:
      "Perspectiva autoetnográfica wayuu sobre los sueños y su vínculo con la vida y la muerte.",
    limitation:
      "Enfoque en los sueños más que en el mito específico de las wanüru.",
  }),
  ritosMortuorios2024: source({
    title: "Los ritos mortuorios en la cultura Wayúu",
    author: "RTVC Radiónica",
    year: 2024,
    type: "divulgación (radio pública)",
    url: "https://www.radionica.rocks/cultura/analisis/creencias-sobre-la-muerte-en-la-cultura-wayuu",
    summary:
      "Artículo de divulgación sobre la muerte wayuu, el regreso de los muertos como lluvia y los wanülu.",
    limitation:
      "Divulgación breve sin citas detalladas.",
  }),
  cienAnos2022: source({
    title: "Cien años de soledad en el espejo wayuu",
    author: "Cindy Juliana García Gómez y María Isabel Salazar Bohórquez",
    year: 2022,
    type: "artículo académico (Jangwa Pana, Unimagdalena)",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/download/4632/3502",
    summary:
      "Rastrea la influencia de la cosmovisión wayuu (incluida la lluvia) en la obra de García Márquez.",
    limitation:
      "Estudio literario centrado en García Márquez.",
  }),
  crimenOtredad1998: source({
    title: "Crimen y otredad en la sociedad Wayuu (Interpretación a partir del significado mítico del mal)",
    author: "Yanet Segovia",
    year: 1998,
    type: "artículo académico (Boletín Antropológico, ULA)",
    url: "http://erevistas.saber.ula.ve/index.php/boletin_antropologico/article/view/22733/21921934620",
    summary:
      "Análisis del mal mítico wayuu que revisa la versión de Paz Ipuana sobre los mellizos Tumaju'le y Peeliyuu.",
    limitation:
      "Marcos semióticos de los años 90.",
  }),
  simbolosEspacio2009: source({
    title: "Símbolos, espacio y cuerpo en la Yonna Wayuu",
    author: "Ángela Carrasquero, José Enrique Finol, Nelly García Gavidia",
    year: 2009,
    type: "artículo académico (Revista de Ciencias Sociales, LUZ)",
    url: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-95182009000400006",
    summary:
      "Analiza directamente el episodio de Wolunka y los Mellizos Transformadores como símbolo de la primera menstruación.",
    limitation:
      "Su foco es la danza yonna.",
  }),
  kaziankaYolujaa: source({
    title: "Transformaciones en la relación entre los wayuu y Yolujaa a causa de las creencias cristianas evangélicas",
    author: "Barbara Kazianka",
    year: 2020,
    type: "artículo académico (Tabula Rasa 36)",
    url: "https://www.redalyc.org/journal/396/39664893011/movil/",
    summary:
      "Etnografía con sección propia sobre la creación del mundo y Maleiwa, documentando las dos versiones de la creación.",
    limitation:
      "Enfoque en el cambio religioso, no una monografía de Mareiwa.",
  }),
  aproximacionCosmogonia2011: source({
    title: "Aproximación a la Cosmogonía Wayuu: La Tierra y la Mujer",
    author: "Beatriz Sánchez Pirela",
    year: 2011,
    type: "artículo académico (Consciencia y Diálogo, ULA)",
    url: "http://erevistas.saber.ula.ve/index.php/conscienciaydialogo/article/view/3494",
    summary:
      "Interpretación hermenéutica del pensamiento mítico wayuu de la creación (Madre Tierra y la mujer).",
    limitation:
      "No se centra en Maleiwa sino en la cosmogonía general.",
  }),
  mitosLeyendas1991: source({
    title: "Mitos y leyendas de Colombia: Mitología indígena (Selección de textos)",
    author: "Eugenia Villa Posse",
    year: 1991,
    type: "antología de literatura oral (Google Books)",
    url: "https://books.google.com/books/about/Selecci%C3%B3n_de_textos_Mitolog%C3%ADa_ind%C3%ADgen.html?id=yXxsAAAAMAAJ",
    summary:
      "Reedita el corpus de Chaves de 1946 (incluido el mito de las serranías) dentro de una selección nacional de mitos indígenas.",
    limitation:
      "Vista de fragmentos en Google Books; sin texto completo en línea.",
  }),
  curarCarne2009: source({
    title: "Curar la carne para conjurar la muerte. Exhumación, segundo velorio y segundo entierro entre los wayuu",
    author: "M. Nájera Nájera y J. Lozano Santos",
    year: 2009,
    type: "artículo académico (Boletín de Antropología, U. de Antioquia)",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/6473/5941",
    summary:
      "Analiza los rituales funerarios wayuu (doble entierro, Jepira) que son el marco ritual del viaje del mito.",
    limitation:
      "Trata el rito funerario, no la narración mítica de Ulépala.",
  }),
  kuaiMare1972: source({
    title: "Kuai-Mare: mitos aborígenes de Venezuela",
    author: "María Manuela de Cora",
    year: 1972,
    type: "libro de mitos aborígenes (Monte Ávila Editores)",
    url: "https://books.google.co.ve/books?id=O2psAAAAMAAJ",
    summary:
      "Su Ciclo Guajiro incluye el mito del piache Umaralá, que elevó el prestigio de los curanderos con cantos mágicos y maraca.",
    limitation:
      "Solo vista de fragmentos en Google Books.",
  }),
  arteTejido2006: source({
    title: "El arte del tejido entre los hombres de la etnia Wayuu de la Guajira colombo-venezolana",
    author: "Iris Aguilar Ipuana y Elizabeth Márquez Reyes",
    year: 2006,
    type: "investigación patrimonial (Museo de Trajes Regionales, U. de América)",
    url: "https://hdl.handle.net/20.500.11839/7089",
    summary:
      "Documenta tradiciones, mitos y técnicas del tejido wayuu, marco cultural del mito de origen de Waleker.",
    limitation:
      "Se enfoca en la práctica textil, no en el análisis del mito.",
  }),
  balzaGarciaMal2010: source({
    title: "El mal, jerarquía y función socio-simbólica en la cultura Wayüu. Un enfoque simbólico",
    author: "Rafael Balza-García",
    year: 2010,
    type: "artículo académico (Espacio Abierto, Universidad del Zulia, vol. 19 n.º 1)",
    url: "https://www.redalyc.org/pdf/122/12212289005.pdf",
    summary:
      "Con etnografía en Nazareth presenta a Wanülüü como fuerza destructora opuesta a Maleiwa desde el mito de creación, aliada de los yolujas que roban el aa'in, y ambivalente porque también revitaliza en los rituales del outsü.",
    limitation:
      "No menciona a Guanurú ni los motivos de la mariposa y el cráneo de caballo; usa la grafía Wanülüü y la equivalencia con el vocabulario de Pineda (1950) exige cautela.",
  }),
  rinconEnfermarse2006: source({
    title: "Enfermarse y curarse en La Guajira: la salud entre tradición y modernidad",
    author: "Lucía Rincón Soto",
    year: 2006,
    type: "artículo académico (Praxis 59, Universidad Nacional de Costa Rica)",
    url: "https://www.revistas.una.ac.cr/index.php/praxis/article/download/4651/4478/9898",
    summary:
      "Describe a los wanulü como espíritus invisibles cuya visión anuncia la muerte, distingue enfermedades de origen wanulü y ayuule, y llama 'wanulü buenos' a los aseeyuu de los piaches.",
    limitation:
      "Trabajo de 2006 con wayuu del lado venezolano, sin referencia a Guanurú ni a Pineda; la parte sobre wanulü ocupa pocas páginas.",
  }),
  alarconSociedad2006: source({
    title: "La sociedad wayuu, entre la quimera y la realidad",
    author: "Johnny Alarcón Puentes",
    year: 2006,
    type: "artículo académico (Gazeta de Antropología 22, Universidad de Granada; copia en Colantropos, UNAL)",
    url: "https://www.humanas.unal.edu.co/colantropos/files/7214/7975/4872/G22_21Johnny_Alarcon_Puentes.pdf",
    summary:
      "Etnografía del parentesco wayuu que matiza la regla que el relato sanciona: los e'irukuu no son endogámicos ni exogámicos, y la prohibición y el conflicto se sitúan en el apüshi, el linaje uterino cercano.",
    limitation:
      "No trata el mito ni el incesto como tal; sirve para precisar que la frontera es el linaje uterino y no el clan entero, contra las síntesis divulgativas.",
  }),
  martinezJuanOso2009: source({
    title: "Juan Oso y la redención del salvaje",
    author: "Roberto Martínez González y Francisco Lugo Silva",
    year: 2009,
    type: "fuente comparativa (Desacatos 29, CIESAS, vía SciELO México)",
    url: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1607-050X2009000100009",
    summary:
      "Describe el cuento-tipo ATU 301 'Juan el Oso': mujer retenida por un animal en una cueva, hijo que desplaza la roca, compañeros golpeados por un ser maligno, oreja arrancada, descenso y traición, con versiones colombianas registradas por Jaramillo (1958).",
    limitation:
      "No menciona a los wayuu, a Chaves ni ninguna variante con cóndor; sirve para situar el ciclo de José Juan como versión guajira de un tipo folclórico de origen europeo, no como fuente del mito.",
  }),
  arnoldLopezCondor2001: source({
    title: "Jukumarinti sawurinti: el oso-guerrero y la tejedora. Un repertorio literario de lo masculino y lo femenino en los Andes",
    author: "Denise Y. Arnold y Ricardo López",
    year: 2001,
    type: "fuente comparativa (Ciencia y Cultura 9, Universidad Católica Boliviana, vía SciELO Bolivia)",
    url: "http://www.scielo.org.bo/scielo.php?script=sci_arttext&pid=S2077-33232001000100002",
    summary:
      "Analiza el ciclo andino del hijo del oso y su paralelo del cóndor que carga a una muchacha hasta su nido, leyéndolo como relato sobre el yerno que debe superar pruebas ante la familia política.",
    limitation:
      "Corpus aymara y quechua de Bolivia y Perú, sin mención a los wayuu, a Colombia ni a Chaves: ilustra el motivo del rapto por ave y las pruebas del yerno como paralelo, no como versión del mito.",
  }),

  // ——— Búsqueda profunda 2026-09-17 ———
  nacionCaracterizacion2019: source({
    title: "Caracterización pueblos indígenas Wayuú, gente de arena, sol y viento",
    author: "Procuraduría General de la Nación y Red Colombia Verde",
    year: 2019,
    type: "documento institucional",
    url: "https://www.procuraduria.gov.co/portal/media/docs/CaracterizacionWayuunaiki.pdf",
    summary:
      "Resume la cosmogonía: los primeros wayuu y sus clanes surgieron de Wotkasainru, Maleiwa hizo los hierros para marcar cada clan, Pulowi y Juyá generan la vida y Wanülü representa el mal de la enfermedad o la muerte.",
    limitation:
      "Síntesis de segunda mano que cita a la ONIC y a Vásquez y Correa; sin informantes ni variantes, útil sólo como fuente institucional de contraste.",
  }),
  curveloconflictos2006: source({
    title: "Los conflictos interfamiliares Wayuu",
    author: "Weildler Guerra Curvelo",
    year: 2006,
    type: "artículo académico (Frónesis, Universidad del Zulia, vol. 13 n.º 1)",
    url: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-62682006000100005",
    summary:
      "Analiza los factores de las disputas entre familias wayuu (control territorial, robo de ganado, jerarquización) y cómo se movilizan los individuos en ellas, frente a la eficacia de palabreros y compensación para detenerlas: el marco antropológico del conflicto Ipuana-Jayariyú y de la escalada que el relato no logra interrumpir.",
    limitation:
      "No conoce el relato de Chaves; es etnografía contemporánea del conflicto, no una versión del cuento.",
  }),
  riosVenganza2013: source({
    title: "Venganza y encierro como funciones restauradoras del orden social: un enfoque simbólico-ritual del crimen en la cultura Wayuu",
    author: "Francisco Molina Ríos",
    year: 2013,
    type: "artículo académico (Nómadas. Revista Crítica de Ciencias Sociales y Jurídicas, UCM)",
    url: "https://revistas.ucm.es/index.php/NOMA/article/view/42357",
    summary:
      "Explica que la ofensa de sangre provoca entre los wayuu un exagerado derecho a la venganza asumido colectivamente por la familia matrilineal, con signos rituales que inducen a vengar, y el encierro como purificación: por qué el guerrero regresa al combate por obligación social y por qué el adversario escala hasta decapitarlo.",
    limitation:
      "Sociosemiótica basada en entrevistas en Venezuela; no trata guerreros invulnerables ni el sueño del hijo.",
  }),
  silvatotem2020: source({
    title: "« Mi tótem tiene que ver con ese animal duro de cazar que corre con su propia gracia ». Simanca Pushaina ou la poétique de la négociation",
    author: "Laura Lema Silva",
    year: 2020,
    type: "artículo académico (IdeAs. Idées d'Amériques 16, Institut des Amériques)",
    url: "https://journals.openedition.org/ideas/8527",
    summary:
      "Expone, citando a Weildler Guerra, que en la ontología wayuu los animales tienen estatuto de persona y que la humanidad originaria se transformó en plantas, animales y montañas; trabaja el venado (irama) como figura de quien corre libre fuera del encierro, contexto del cuerpo de venado que Jaichuasay habita.",
    limitation:
      "Es crítica literaria sobre la escritora Estercilia Simanca; no conoce el relato de Jaichuasay ni trata la caza como reciprocidad.",
  }),
  sabogalConstrucciones2021: source({
    title: "Construcciones estativas en un relato wayuu",
    author: "Andrés Sabogal",
    year: 2021,
    type: "artículo académico (Forma y Función, UNAL, vol. 34 n.º 2)",
    url: "https://www.redalyc.org/journal/219/21982881007/",
    summary:
      "Analiza en wayuunaiki un relato de Miguel Ángel Jusayú en cuyo mundo de los muertos aparecen seres transformantes como una mujer-venado, mujeres-maíz y un caballo-cují junto a Ma'leiwa y Pülowi: la alternancia persona-venado en texto wayuu original, que Chaves sólo transmitió en español.",
    limitation:
      "Artículo de lingüística: el relato de Jusayú no es una versión de Jaichuasay y la mujer-venado es un personaje secundario del viaje a Jepira.",
  }),
  vilchezSueno2010: source({
    title: "Sueño y sintaxis ritual entre los wayuu: análisis de la ceremonia de asülajawaa",
    author: "Dalia Araujo de Vílchez y José Enrique Finol",
    year: 2010,
    type: "artículo académico (Revista de Artes y Humanidades UNICA, vol. 11, núm. 1)",
    url: "https://www.redalyc.org/pdf/1701/170121894004.pdf",
    summary:
      "Describe el asülajawaa como un rito determinado por los sueños que busca impedir el cumplimiento de premoniciones negativas y documenta que la mayoría de los wayuu toma acciones después del sueño: el patrón de sueño premonitorio seguido de preparación que estructura el relato de Jururiana.",
    limitation:
      "Su caso es el encierro ritual por un mal soñado, no una lluvia o epidemia colectiva; la premonición se contrarresta con abstención, no con acopio de semillas.",
  }),
  acunaWayuu1999: source({
    title: "Los Wayúu y los cocina: dos caras diferentes de una misma moneda en la resistencia indígena en la Guajira, siglo XVIII",
    author: "José Polo Acuña",
    year: 1999,
    type: "artículo académico (Anuario Colombiano de Historia Social y de la Cultura 26, UNAL)",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/16760",
    summary:
      "Explica el conflicto entre quienes propugnaban la expansión del ganado (los Wayúu) y quienes defendían el territorio natural y rechazaban esa expansión (los Cocinas), el trasfondo histórico de la incursión kosina sobre el rebaño de Kuriruputá.",
    limitation:
      "Es etnohistoria del siglo XVIII con fuentes coloniales; no describe el episodio de Kuriruputá ni los usos del término en el siglo XX.",
  }),
  bustamantemujeres2019: source({
    title: "Rol de las mujeres de las comunidades indígenas wayuu en La Guajira (Colombia) en torno a la actividad ganadera",
    author: "Clara Viviana Rúa Bustamante y otros",
    year: 2019,
    type: "capítulo de libro académico (Hélices y anclas para el desarrollo local; ficha en Dialnet)",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=7243710",
    summary:
      "Etnografía en nueve comunidades de la Media y Alta Guajira que registra que las mujeres son en gran parte las poseedoras de animales y que entre sus funciones está resolver conflictos cuando se presenta robo de algún animal, base actual de la intervención decisiva de las hermanas sobre el rebaño.",
    limitation:
      "Estudio de desarrollo rural reciente; no documenta mujeres combatientes ni el siglo XX temprano del relato. El enlace es la ficha bibliográfica con resumen.",
  }),
  perrinCreaciones1989: source({
    title: "Creaciones míticas y representación del mundo: el hombre blanco en la simbología Guajiro",
    author: "Michel Perrin",
    year: 1989,
    type: "artículo académico (Antropológica 72, Fundación La Salle; PDF en Biblat-UNAM)",
    url: "https://biblat.unam.mx/hevila/AntropologicaCaracas/1989/no72/2.pdf",
    summary:
      "Explica la evolución del término kusina: hasta el siglo XIX designaba a quienes saqueaban y robaban a los guajiros vecinos, y hoy nombra a otros indios o a wayuu pobres de zonas remotas que no criaban ganado, lo que permite tratar a los kosina del relato como categoría histórica y no como etnia esencial.",
    limitation:
      "El artículo versa sobre la imagen del alijuna; el pasaje sobre kusina es breve y no menciona a Kuriruputá.",
  }),
  garciaOutsu2011: source({
    title: "El Outsü y los rituales de curación Wayüu. Una interpretación simbólico-cognitiva",
    author: "Rafael Balza García",
    year: 2011,
    type: "artículo académico (Opción, Universidad del Zulia, vol. 27, núm. 64)",
    url: "https://produccioncientificaluz.org/index.php/opcion/article/view/6516",
    summary:
      "Presenta al outsü como quien restablece códigos, significados y saberes ante el desorden causado por el mal wanülüü, un marco para leer la relación de Pushaina con una presencia invisible sin reducirlo a hechicero.",
    limitation:
      "No menciona a Pushaina, la caída del caballo ni transformaciones animales; es un análisis del ritual de curación, no del relato.",
  }),
  chaconmujer2023: source({
    title: "La mujer ouutsü en la comunidad wayuu",
    author: "Marcela Hernández Chacón, Instituto Caro y Cuervo",
    year: 2023,
    type: "artículo institucional (Portal de lenguas y literaturas nativas, Instituto Caro y Cuervo)",
    url: "https://lenguasyliteraturasnativas.caroycuervo.gov.co/la-mujer-ouutsu-en-la-comunidad-wayuu/",
    summary:
      "Explica que todo ser tiene un aseyuu que se manifiesta en sueños, que el oficio se revela a la persona por un sueño y que la ouutsü es un ojo visionario que explora el mundo desconocido, útil para situar la adivinación del anillo de Pushaina.",
    limitation:
      "Texto divulgativo centrado en la ouutsü mujer; no menciona al clan Pushaina ni el episodio del retorno tras la caída.",
  }),
  velasquezMiradas2013: source({
    title: "Miradas al análisis de cuatro mitos venezolanos desde la perspectiva de Lévi-Strauss de lo crudo y lo cocido",
    author: "Jenny Nohemí Fraile Velásquez",
    year: 2013,
    type: "artículo académico (Revista de Comunicación de la SEECI 31)",
    url: "https://www.seeci.net/revista/index.php/seeci/article/view/15",
    summary:
      "Transcribe íntegra la versión guajira en que Maleiwa guarda piedras encendidas en una gruta y Junuunay lo engaña fingiendo frío, y la compara con mitos warao, yekuana y brasileños, concluyendo que el fuego siempre se obtiene tras robarlo con una treta.",
    limitation:
      "Usa la versión Junuunay/Maleiwa (línea Paz Ipuana y Armellada), no la de Siki como joven ocioso; análisis estructuralista, no etnografía nueva.",
  }),
  contrerasPrometeo2019: source({
    title: "Prometeo en la Guajira",
    author: "Mariano Nava Contreras",
    year: 2019,
    type: "ensayo comparativo (Prodavinci)",
    url: "https://prodavinci.com/prometeo-en-la-guajira/",
    summary:
      "Resume la segunda versión de Paz Ipuana (Junuunay roba brasas a Maleiwa, las pasa a Kenáa y a Jimut, Serumáa delata, castigos en cocuyo, pájaro Sikiyúu y escarabajo) y la lee frente a Prometeo como relato de engaño, transgresión, culpa y castigo ligado al progreso.",
    limitation:
      "Ensayo de un filólogo clásico en revista cultural, no artículo arbitrado; no aborda la versión de Siki ni la de Perrin.",
  }),
  salasceremonias2017: source({
    title: "Las ceremonias ancestrales y tradicionales de la etnia Wayúu, un estudio a través de su ceremonial y protocolo",
    author: "Leonardo Alberto Montaño Salas",
    year: 2017,
    type: "artículo académico (Estudios Institucionales, UNED, vol. 4 n.º 6)",
    url: "https://revistas.uned.es/index.php/EEII/article/view/18995",
    summary:
      "Describe las carreras de caballos como parte de las fiestas wayuu, tras los bailes y bebidas de la presentación de la joven, y los caballos competidores en carreras dentro de la dote: contexto ceremonial de la fiesta con carreras del relato.",
    limitation:
      "Estudio de protocolo, descriptivo y general; menciona las carreras de paso y no el mito.",
  }),
  reverolritos2018: source({
    title: "Los ritos de muerte y dobles enterramientos en el pueblo wayuu",
    author: "Carmen Laura Paz Reverol",
    year: 2018,
    type: "artículo académico (Interacción y Perspectiva, Universidad del Zulia, vol. 8 n.º 1)",
    url: "https://dialnet.unirioja.es/descarga/articulo/6329268.pdf",
    summary:
      "Describe la vida del yoluja en Jepira, con tierras y animales, y que el muerto puede volver a casarse y las mujeres tener una o más parejas, distinto de la monogamia de los vivos, lo que explica la escena de celos del viudo; sitúa Jepira en el Cabo de la Vela y dice que el yoluja, al morir allí, se vuelve lluvia o wanülüü.",
    limitation:
      "Etnografía del rito funerario; no reproduce el relato del viudo ni al alcaraván.",
  }),
  lizotResena1980: source({
    title: "Reseña de Le Chemin des Indiens morts: mythes et symboles goajiro, de Michel Perrin",
    author: "Jacques Lizot",
    year: 1980,
    type: "reseña académica (L'Homme, vol. 20 n.º 1, Persée)",
    url: "https://www.persee.fr/doc/hom_0439-4216_1980_num_20_1_368046",
    summary:
      "Identifica el mito del viaje al más allá como eje del libro de Perrin y la oposición Juyá y Pulowi como clave para leerlo, útil para documentar cómo se recibió la versión canónica que usa esta página.",
    limitation:
      "Reseña breve en francés; no detalla episodios como Jepira, el alcaraván o la esposa.",
  }),
  perrinMythes1975: source({
    title: "Mythes et rêves, rituel et chamanisme chez les Indiens Goajiro. Compte rendu de mission",
    author: "Michel Perrin",
    year: 1975,
    type: "informe de misión (L'Homme, vol. 15 n.º 1, Persée)",
    url: "https://www.persee.fr/doc/hom_0439-4216_1975_num_15_1_367525",
    summary:
      "Informe del trabajo de campo de 1969 a 1973 en que Perrin presenta a esta Eurídice guajira que vuelve por la Vía Láctea, camino de los indios muertos, a buscar a su marido inconsolable, y anuncia su análisis de la concepción guajira de la muerte y el más allá.",
    limitation:
      "Persée sólo muestra la primera página en abierto; el resto exige acceso.",
  }),
  reverolcurador2010: source({
    title: "Ser curador wayuu en la globalización y no morir en el intento",
    author: "Carmen Laura Paz Reverol, Morelva Leal Jerez, Johnny Alarcón Puentes y otros",
    year: 2010,
    type: "artículo académico (Index de Enfermería, vol. 19 n.º 2-3, SciELO España)",
    url: "https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1132-12962010000200003",
    summary:
      "Describe al oütshi que con cantos guturales, maraca, alcohol y pasta de tabaco entra en trance con sus aseyuu para diagnosticar, y clasifica las enfermedades wanülüü como producidas por entidades pülasü y atendidas sólo por el curador: contexto de la negociación de la piache con Wanurü.",
    limitation:
      "Centrado en la pérdida de prestigio del curador ante la biomedicina y el evangelismo.",
  }),
  zempleniResena1993: source({
    title: "Reseña de Les Praticiens du rêve. Un exemple de chamanisme, de Michel Perrin",
    author: "Andras Zempléni",
    year: 1993,
    type: "reseña académica (L'Homme, vol. 33 n.º 126-128, Persée)",
    url: "https://www.persee.fr/doc/hom_0439-4216_1993_num_33_126_369668",
    summary:
      "Sintetiza el libro de Perrin sobre chamanismo guajiro y define a wanülüü como espíritu auxiliar del chamán que va a recuperar el alma del enfermo en el mundo del sueño, matiz que complementa la lectura de Pineda sobre Wanurü y Jirairay.",
    limitation:
      "Reseña en francés; sin detalle de cantos, maraca ni tabaco.",
  }),
  giraldochama1947: source({
    title: "La chama, un mito guajiro",
    author: "Roberto Pineda Giraldo",
    year: 1947,
    type: "artículo (Revista de Folklore 2, pp. 113-126; ficha del catálogo Colombia Aprende y Biblioteca Nacional)",
    url: "https://redaprende.colombiaaprende.edu.co/metadatos/recurso/la-chama-un-mito-guajiro/",
    summary:
      "Registro del artículo monográfico de Pineda dedicado a la Chama, anterior a Aspectos de la magia: reúne relatos de indígenas de la península sobre apariciones de este personaje mitológico de apariencia femenina con rasgos sobrenaturales que aterrorizan y condicionan conductas.",
    limitation:
      "Sólo metadatos y descripción: el visor no ofrece el texto, así que el artículo no es consultable en línea y hay que pedirlo a la Biblioteca Nacional.",
  }),
  gonzalezCoexistencias2023: source({
    title: "Coexistencias. Mapa intercultural de La Guajira",
    author: "Otto Vergara González, Enciclopedia Banrepcultural",
    year: 2023,
    type: "entrada institucional (Enciclopedia Banrepcultural)",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Coexistencias._Mapa_intercultural_de_La_Guajira",
    summary:
      "Registra a Wolunka entre los lugares sagrados wayuu como una enorme piedra negra con manchas rojas en la serranía de la Macuira que recuerda a las mujeres primigenias y la vagina dentada.",
    limitation:
      "Ficha de lugar de una sola frase, sin narrar el mito ni citar fuentes; sirve para el anclaje territorial, no para la trama.",
  }),
  reverolLecturas2022: source({
    title: "Lecturas transculturales en salud a partir del mito de la vagina dentada en el pueblo wayuu",
    author: "Carmen Laura Paz Reverol, Carlos Adán Valbuena Chirinos y Nelly García Gavidia",
    year: 2022,
    type: "ponencia en congreso internacional (NODOS 2022)",
    url: "https://2022.nodos.org/ponencia/lecturas-transculturales-en-salud-a-partir-del-mito-de-la-vagina-dentada-en-el-pueblo-wayuu/",
    summary:
      "Usa el mito de Wolunka, la mujer de la vagina dentada, como recurso pedagógico intercultural para la prevención del virus del papiloma humano entre mujeres wayuu, documentando que el relato sigue vivo y operativo en salud.",
    limitation:
      "Resumen de ponencia, no artículo completo; no aporta versión narrativa ni fuentes primarias del mito.",
  }),
  coraMajayura2012: source({
    title: "La Majayura, misteriosa princesa wayúu (reproducción de Kuai-Mare. Mitos aborígenes de Venezuela, de María Manuela de Cora)",
    author: "María Manuela de Cora, reproducida en el blog Lecturas, yantares y otros placeres",
    year: 2012,
    type: "reproducción en blog de una recolección impresa (Cora 1957, ed. Monte Ávila 1993)",
    url: "http://lecturas-yantares-placeres.blogspot.com/2012/07/la-majayura-misteriosa-princesa-wayuu.html",
    summary:
      "Ofrece una segunda cadena editorial del mismo relato: la majayura de la cueva sagrada de Puró, cerca de la costa, que se vuelve piedra blanca para atraer hombres, los deja en la cueva o los convierte en la piedra Papach, y libera a quienes callan lo visto.",
    limitation:
      "Es un blog: la atribución a Kuai-Mare no pudo cotejarse contra el libro, y Cora es posterior a Chaves 1946, así que puede depender de él y no ser versión independiente.",
  }),
  perezwayuu2004: source({
    title: "Los wayuu: tiempos, espacios y circunstancias",
    author: "Luis Adolfo Pérez",
    year: 2004,
    type: "artículo académico (Espacio Abierto, Universidad del Zulia, vol. 13 n.º 4)",
    url: "https://www.redalyc.org/pdf/122/12213405.pdf",
    summary:
      "Documenta el trasfondo histórico del encuentro que el mito dramatiza: los wayuu controlaban los puertos para abastecer a los forasteros de agua dulce a cambio de mercancías, la panela figuraba entre los bienes de trueque de los alijuna, y comerciantes de todas las nacionalidades se infiltraron por la península.",
    limitation:
      "No menciona el relato ni Utta; aporta contexto de comercio, agua y alijuna, no confirmación de la petrificación.",
  }),
  curvelocuenta2017: source({
    title: "La paz se cuenta n.º 2: Weildler Guerra relata el origen mítico del pájaro Utta, primer palabrero y mediador wayuu",
    author: "Weildler Guerra Curvelo, Banco de la República",
    year: 2017,
    type: "audio institucional (Banco de la República, Biblioteca Digital de Bogotá)",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/2079128/",
    summary:
      "Presenta a Utta como el pájaro que fue el primer palabrero capaz de persuadir con la palabra: el otro referente del nombre Utta que la ficha advierte no confundir con el lugar del relato de la sed.",
    limitation:
      "Trata a Utta exclusivamente como ave-personaje, no como lugar ni en relación con la sed o los comerciantes.",
  }),
  montielEspiritualidad2019: source({
    title: "Espiritualidad de los outshii, médicos wayuu, y la medicina tradicional",
    author: "Gabriel Segundo Iguarán Montiel",
    year: 2019,
    type: "artículo académico (Entretextos, Universidad de La Guajira; PDF en Dialnet)",
    url: "https://dialnet.unirioja.es/descarga/articulo/8729574.pdf",
    summary:
      "Desde una voz wayuu de la Alta Guajira describe a los wanülüü como espíritus malignos con los que el outshii negocia, en trueque con piedras, la vida de un paciente grave de muerte; muestra la lógica de reparación con un Wanülü que la ficha atribuye al sueño de los hermanos.",
    limitation:
      "Texto etnoeducativo centrado en los médicos tradicionales; menciona a los wanülüü brevemente y sin relatos.",
  }),
  mancusoConvertirse2025: source({
    title: "“Convertirse en alijuna”: los wayuu frente al cambio climático y la expoliación territorial",
    author: "Alessandro Mancuso",
    year: 2025,
    type: "artículo académico (Revista Española de Antropología Americana, UCM, vol. 55 n.º 2)",
    url: "https://revistas.ucm.es/index.php/REAA/article/view/99412",
    summary:
      "Dedica una sección a Juyá como ser pülashi: lluvia y año, pariente destacado entre agentes climáticos hermanos, esposo de todas las Pülowi con quienes riñe y dispara, y dador de vida que fecunda a Mma; recoge testimonio de campo de 2005 sobre esas peleas y la compensación que ellas le exigen.",
    limitation:
      "El foco es el cambio climático y el devenir alijuna; no narra el episodio del visitante que aprende a ver presas humanas.",
  }),
  mancusoRelaciones2005: source({
    title: "Relaciones de género entre los wayúu: estado de la investigación y nuevos campos de análisis",
    author: "Alessandro Mancuso",
    year: 2005,
    type: "artículo académico (Aguaita 13-14, Observatorio del Caribe Colombiano; copia íntegra en el sitio de Sütsüin Jieyuu Wayúu)",
    url: "http://jieyuuwayuu.blogspot.com/2007/09/relaciones-de-gnero-entre-los-wayu.html",
    summary:
      "Sostiene que las guerras de venganza son el contexto principal donde se define la identidad del grupo uterino y que las mujeres gozan de una intangibilidad que les permite cruzar territorios, recoger muertos y heridos y conseguir armas e información: ilumina por qué el hermano pide a la hermana quedarse y por qué su salida armada rompe la norma.",
    limitation:
      "La única copia consultable está en el blog de la organización de mujeres wayuu, porque el repositorio de la Universidad de Palermo bloquea el acceso; Mancuso no discute el relato de Chaves.",
  }),
  ponceResolucion2006: source({
    title: "Resolución de conflictos en la sociedad Wayuu contemporánea",
    author: "Pastor Ponce",
    year: 2006,
    type: "artículo académico (Frónesis, Universidad del Zulia, vol. 13 n.º 1)",
    url: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-62682006000100008",
    summary:
      "Explica que el arreglo y la compensación existen para evitar la venganza que sobrevendría sin pago, que el conflicto compromete al linaje materno y que la compensación tradicional se paga en ganado: contexto para leer los animales y bienes que la hermana acumula como deuda o causa de otra disputa.",
    limitation:
      "Más general que Guerra Curvelo; no aborda el abigeato ni el papel femenino en detalle y no cita relatos.",
  }),
  sotoPrologo2009: source({
    title: "Prólogo a El pensamiento filosófico Wayuu, de Beatriz Sánchez Pirela",
    author: "Claudio García Soto",
    year: 2009,
    type: "reseña académica (Utopía y Praxis Latinoamericana, vol. 14 n.º 45)",
    url: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-52162009000200011",
    summary:
      "Identifica a los hermanos gemelos Tumajüle y Peeliyuu como figuras transformadoras del cosmos wayuu y los sitúa junto a Maleiwa, héroe civilizador, y al par Juyá y Pulowi dentro del sistema mítico que Sánchez Pirela analiza.",
    limitation:
      "Prólogo-reseña de un libro que no está en línea; confirma la nomenclatura pero no desarrolla el relato.",
  }),
  ossaconstruccion2021: source({
    title: "La construcción del territorio costero wayuu: un análisis integrado de procesos en La Guajira colombiana",
    author: "Miryam Yorlenis Arroyo de la Ossa y Pedro Arenas Granados",
    year: 2021,
    type: "artículo académico (Revista Costas, Universidad de Cádiz, vol. 3 n.º 1)",
    url: "https://revistas.uca.es/index.php/costas/article/download/8859/8917/41714",
    summary:
      "Enumera los sitios sagrados de la Alta Guajira (Jepira, Kamaichi, Epitsü, Itojolu, Wolunka) y, citando a Guerra Curvelo, describe la tríada de hermanos-cerros Epitsü, Itojolu y Kamaichi, con Epitsü como dueño de los seres terrestres.",
    limitation:
      "Artículo de gestión costera que resume el mito de segunda mano; no reproduce la cadena de topónimos de Chaves ni el episodio de la honda.",
  }),
  colombiaParque2015: source({
    title: "Parque Nacional Natural Macuira: reserva de vida y tradición cultural wayuu (descripción del área protegida)",
    author: "Parques Nacionales Naturales de Colombia, Dirección Territorial Caribe",
    year: 2015,
    type: "documento institucional (Parques Nacionales Naturales)",
    url: "https://old.parquesnacionales.gov.co/portal/wp-content/uploads/2015/06/Descripcion-PNN-Macuira.pdf",
    summary:
      "Transcribe el mito wayuu sobre la formación de la Macuira: tres hermanos bajan de la Sierra Nevada, uno queda como cerro Epitz, otro como Itujol y el tercero como Cerro de los Monjes, y la familia que los sigue amanece convertida en todos los cerros de la Macuira; lista además el cerro del Itojoro como sitio de interés.",
    limitation:
      "Versión sin informante ni fecha de registro y con nombres distintos a los de Chaves; documento de la misma institución que la ficha del parque y el régimen de manejo ya citados.",
  }),
  curveloCocina2021: source({
    title: "Cocina guajira dominical: frijolito guandú o pilujuui con chorizo riohachero",
    author: "Weildler Guerra Curvelo y Tivi López",
    year: 2021,
    type: "artículo de divulgación (Revista Entornos, La Guajira)",
    url: "https://revistaentornos.com/cocina-guajira-dominical-frijolito-guandu-o-pilujuui-con-chorizo-riohachero/",
    summary:
      "Resume el relato Los trabajos de Ulepala de Ramón Paz Ipuana: Juyá manda al joven Ulepala a su huerta por frijoles y este encuentra jóvenes armados con machetes y punzones de hueso que, al ser desarmados, recuperan su apariencia vegetal, cada cuchillo vuelto vaina de frijol.",
    limitation:
      "Columna gastronómica firmada por un antropólogo, no artículo arbitrado; sólo cubre el episodio de los frijoles en el dominio de Juyá.",
  }),
  varniermobilite2016: source({
    title: "De la mobilité des vivants à celle des morts: permanences et mutations du rituel funéraire guajiro dans les cimetières de Maracaibo, Venezuela",
    author: "Camille Varnier",
    year: 2016,
    type: "artículo académico (Les Cahiers d'Outre-Mer 274, OpenEdition)",
    url: "https://journals.openedition.org/com/7854",
    summary:
      "Presenta Jepira como espacio imaginario de transición entre tierra y cielo donde las almas aguardan, ligado al doble entierro y al peregrinaje final hacia el Cabo de la Vela: el destino al que la mujer muerta conduce a Ulépala.",
    limitation:
      "En francés y centrado en cementerios urbanos de Maracaibo; no trata el mito ni al protagonista.",
  }),
  perrinpracticantes1995: source({
    title: "Los practicantes del sueño: el chamanismo wayuu",
    author: "Michel Perrin",
    year: 1995,
    type: "libro (Monte Ávila Editores; ficha de Google Books)",
    url: "https://books.google.com.co/books/about/Los_practicantes_del_sue%C3%B1o.html?id=DnhsAAAAMAAJ",
    summary:
      "Monografía de referencia sobre la iniciación de carácter pülasü, las curas con maraca, tabaco y cantos de varios días, los espíritus auxiliares y las enfermedades causadas por wanülüü: el oficio que hereda Umaralá.",
    limitation:
      "Sólo hay ficha y nube de términos en línea, sin texto consultable; no narra a Umaralá.",
  }),
  epieyuMiedo2018: source({
    title: "Miedo a educar como wayuu",
    author: "Rafael Mercado Epieyu",
    year: 2018,
    type: "artículo académico (Caminos Educativos, Universidad de Cundinamarca)",
    url: "https://revistas.ucundinamarca.edu.co/index.php/Caminos_educativos/article/view/114",
    summary:
      "Un maestro wayuu relee a Paz Ipuana y presenta a Waleker, abuela araña y deidad del arte del tejido, hija de Isashii, que a los ojos infértiles es criatura chata, cabezona y fétida y a los fértiles la que crea con salivas resplandecientes el saber del tejido, ligando el mito al encierro y a Irunu, estrella fugaz.",
    limitation:
      "Ensayo pedagógico, no recolección; parafrasea a Paz Ipuana sin narrar la traición de Irunúu.",
  }),
  serradatejido2014: source({
    title: "El tejido funerario wayuu: rescate de una tradición ancestral",
    author: "Caribay Yare Romero Serrada",
    year: 2014,
    type: "trabajo de grado de especialización en Museología (Universidad Central de Venezuela, repositorio Saber UCV)",
    url: "https://saber.ucv.ve/handle/10872/8729",
    summary:
      "Transcribe, con atribución a Miguel Ángel Jusayú, la variante en que Waleker enseña primero a una sola mujer, se fuga con un wayuu, come el algodón y de su boca sale el hilo ya torcido, teje de noche y enseña los kanas haciendo caminitos a las muchachas en encierro; añade los mitos del comején y de la kanaaspi.",
    limitation:
      "Tesis de especialización, no arbitrada, y la versión difiere de la de Paz Ipuana: sin Irunúu ni traición.",
  }),
  artesaniaWalekeru2018: source({
    title: "Wale'kerü, el espíritu de una cultura",
    author: "Sistema de Información para la Artesanía, Artesanías de Colombia",
    year: 2018,
    type: "artículo institucional (Artesanías de Colombia)",
    url: "https://artesaniasdecolombia.com.co/PortalAC/Noticia/waleker-el-espiritu-de-una-cultura_11425",
    summary:
      "Presenta a Wale'kerü como la araña que enseñó a tejer: de su boca salía hilo ya torcido y preparado, tejía de noche y por eso al amanecer ya tenía una faja hecha, y explica su papel de guía en la iniciación de las jóvenes y la transmisión matrilineal del oficio.",
    limitation:
      "Divulgación institucional sin informante ni fuente citada; omite a Irunúu y la ruptura del secreto.",
  }),
  colombiaQue: source({
    title: "¿Qué cuentan los kanas wayúu?",
    author: "Artesanías de Colombia",
    type: "artículo institucional (Artesanías de Colombia)",
    url: "https://www.artesaniasdecolombia.com.co/PortalAC/C_sector/artesaniasdecolombia.com.co/PortalAC/Publicacion/que-cuentan-los-kanas-wayu_20709",
    summary:
      "Vincula los kanas con el mito: Wale'kerü tejía de noche y de su boca salían hilos de colores con los que aparecían, antes del amanecer, chinchorros y fajas terminados, y sostiene que las mujeres heredaron de ella la técnica y la paciencia durante el encierro.",
    limitation:
      "Misma institución que la fuente anterior; sin fecha fiable en la página ni autor personal.",
  }),
};

/**
 * Cada entrada de `sourceKeys` es una clave del pool ("chaves1946") o un objeto
 * `{ key, summary, limitation }` que conserva la identidad bibliográfica del pool
 * (título, autor, año, tipo, URL) y sólo particulariza lo que la fuente respalda
 * en ESTE mito. Así una obra citada por quince fichas tiene una sola URL y una
 * sola ficha bibliográfica, pero cada expediente dice qué le debe.
 */
export function pickWayuuSources(...keys) {
  return keys.map((entry) => {
    const key = typeof entry === "string" ? entry : entry?.key;
    const selected = wayuuSources[key];
    if (!selected) {
      throw new Error(`Fuente Wayúu desconocida: ${key}`);
    }
    if (typeof entry === "string") return selected;
    const { summary, limitation } = entry;
    return {
      ...selected,
      ...(summary ? { summary } : {}),
      ...(limitation ? { limitation } : {}),
    };
  });
}
