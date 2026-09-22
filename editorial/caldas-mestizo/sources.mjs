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

export const caldasMestizoSources = {
  velezReader: source({
    title: "Mitos, espantos y leyendas de Caldas",
    author: "Fabio Vélez Correa",
    year: 1997,
    type: "libro regional en lector público",
    url: "https://www.ellibrototal.com/ltotal/?d=4731&t=1",
    summary:
      "Permite consultar directamente los apartados del Uñón, Cole-cabuya, Viejo del Costal, Coco, Cumanday y Clementina usados en este frente.",
    limitation:
      "La compilación combina testimonios, referencias secundarias y piezas literarias; cada ficha debe identificar cuál clase sustenta su trama.",
  }),
  velezFicha: source({
    title: "Ficha de Mitos, espantos y leyendas de Caldas",
    author: "El Libro Total",
    type: "ficha bibliográfica y de acceso",
    url: "https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=4731",
    summary:
      "Identifica la obra de Fabio Vélez Correa y su disponibilidad como compilación regional.",
    limitation:
      "La ficha no reemplaza la lectura de los apartados ni constituye un testimonio independiente.",
  }),
  velezGoogle: source({
    title: "Mitos, espantos y leyendas de Caldas",
    author: "Google Books",
    year: 1997,
    type: "registro bibliográfico con índice de términos",
    url: "https://books.google.com.ec/books/about/Mitos_espantos_y_leyendas_de_Caldas.html?id=FHbYAAAAMAAJ",
    summary:
      "Verifica autor, edición, extensión y circulación bibliográfica de la obra, además de términos y lugares presentes en el volumen.",
    limitation:
      "La vista es parcial y no debe utilizarse para reconstruir pasajes ausentes.",
  }),
  velezWorldcat: source({
    title: "Mitos, espantos y leyendas de Caldas",
    author: "WorldCat",
    type: "registro de catálogo bibliotecario",
    url: "https://search.worldcat.org/fr/title/39981312",
    summary:
      "Confirma la existencia y catalogación internacional de la obra de Vélez Correa.",
    limitation:
      "Aporta procedencia bibliográfica, no una segunda versión narrativa.",
  }),
  unalMemoriaCaldas: source({
    title: "Memoria oral de Caldas: mitos, leyendas, encantos y espantos",
    author: "Catherine López Cardona y Universidad Nacional de Colombia",
    year: 2016,
    type: "investigación universitaria de memoria oral",
    url: "https://portaldelibros.unal.edu.co/gpd-memoria-oral-de-caldas-mitos-leyendas-encantos-y-espantos-9789587755466.html",
    summary:
      "Documenta un proyecto basado en 280 entrevistas y diferencia narradores, lugares y repertorios indígenas, campesinos, rurales y urbanos de Caldas.",
    limitation:
      "Su ficha pública describe el proyecto, pero no confirma que cada detalle de las nueve rutas figure en el volumen.",
  }),
  senaMemoriaCaldas: source({
    title: "Remembranzas de mis abuelos: memoria oral y ambiental del alto oriente caldense",
    author: "SENA",
    type: "repositorio institucional de memoria regional",
    url: "https://repositorio.sena.edu.co/handle/11404/8024?show=full",
    summary:
      "Muestra la continuidad de repertorios de brujas, ánimas, diablos y espantos en una investigación regional posterior.",
    limitation:
      "Se centra en el alto oriente de Caldas y no traslada automáticamente sus relatos a Supía, Riosucio o Salamina.",
  }),
  ocampoAntioquiaGrande: source({
    title: "Mitos y leyendas de Antioquia la Grande",
    author: "Javier Ocampo López",
    year: 2001,
    type: "compilación folclórica comparativa",
    url: "https://books.google.com/books/about/Mitos_y_leyendas_de_Antioquia_la_grande.html?hl=es&id=9DeSlEufFMEC",
    summary:
      "Incluye repertorios compartidos en el antiguo espacio cultural antioqueño-caldense y sirve para comparar Coco, Cole-cabuya, Viejo del Costal y Uñón.",
    limitation:
      "No convierte la circulación regional en un origen único ni sustituye los lugares y atribuciones de Vélez Correa.",
  }),
  supiaPlan: source({
    title: "Plan de Desarrollo Municipal de Supía 2020–2023",
    author: "Alcaldía de Supía",
    year: 2020,
    type: "documento institucional territorial",
    url: "https://www.supia-caldas.gov.co/Transparencia/PlaneacionGestionyControl/PLAN%20DE%20DESARROLLO%202020%20-%202023_compressed.pdf",
    summary:
      "Ubica el municipio, sus áreas rurales y su diversidad comunitaria en el contexto donde circulan varios relatos.",
    limitation:
      "No registra apariciones sobrenaturales ni autoriza atribuir un relato a toda la población municipal.",
  }),
  antSanLorenzo: source({
    title: "Auto de visita para la ampliación del Resguardo Indígena San Lorenzo",
    author: "Agencia Nacional de Tierras",
    year: 2023,
    type: "documento administrativo territorial",
    url: "https://www.supia-caldas.gov.co/Transparencia/Edictos/202351000384683%20-%20Edicto%20visita%20San%20Lorenzo.pdf",
    summary:
      "Verifica que el territorio de San Lorenzo se extiende por Riosucio y Supía y evita tratarlo como un paraje mestizo genérico.",
    limitation:
      "No es fuente del Cole-cabuya ni prueba que su lectura moral sea compartida por autoridades o habitantes actuales.",
  }),
  riosucioEncantos: source({
    title: "Riosucio, tierra de encantos: relatos de infancia",
    author: "Riosucio Tierra de Encantos",
    year: 2011,
    type: "memoria local divulgativa",
    url: "https://riosuciotierradeencantos.blogspot.com/2011/",
    summary:
      "Registra la persistencia local de amenazas infantiles como el Viejo del Costal y la Mano Peluda.",
    limitation:
      "Es una evocación digital sin aparato crítico y no demuestra que todos los detalles tengan la misma antigüedad.",
  }),

  cervantesCoco: source({
    title: "El Coco y el miedo en el niño",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "estudio comparativo de tradición infantil",
    url: "https://www.cervantesvirtual.com/obra-visor/el-coco-y-el-miedo-en-el-nino/html/",
    summary:
      "Documenta al Coco como figura de miedo infantil, su forma imprecisa y su circulación en canciones y amenazas de distintos países, incluida Colombia.",
    limitation:
      "La comparación internacional no demuestra el origen de una variante concreta de Riosucio.",
  }),
  cervantesNanas: source({
    title: "Amor y miedo en las nanas de tradición hispánica",
    author: "Biblioteca Virtual Miguel de Cervantes",
    type: "estudio histórico-literario",
    url: "https://www.cervantesvirtual.com/obra-visor/amor-y-miedo-en-las-nanas-de-tradicion-hispanica/html/4d2ceae0-6bf0-4413-a79d-72bc6d2c5a40_2.html",
    summary:
      "Rastrea menciones ibéricas del Coco desde el siglo XV y muestra su uso disciplinario más allá del momento de dormir.",
    limitation:
      "No excluye reelaboraciones americanas, pero contradice presentar un origen africano único como hecho probado.",
  }),
  pradoCoco: source({
    title: "Que viene el Coco",
    author: "Museo Nacional del Prado",
    year: 1799,
    type: "ficha de obra y comentario crítico",
    url: "https://www.museodelprado.es/coleccion/obra-de-arte/que-viene-el-coco/b405fe71-0a95-401d-8e01-530a9fef7285",
    summary:
      "La estampa de Goya permite contextualizar la crítica ilustrada al uso de monstruos para educar mediante el miedo.",
    limitation:
      "Es una obra española y no representa visual ni etnográficamente al Coco caldense.",
  }),
  banrepInfancia: source({
    title: "Creaciones para la niñez",
    author: "Banco de la República",
    year: 2017,
    type: "ensayo curatorial sobre cultura infantil",
    url: "https://www.banrepcultural.org/exposiciones/los-ninos-que-fuimos/creaciones-para-la-ninez",
    summary:
      "Explica cómo repertorios europeos, indígenas y africanos se reelaboraron en la memoria infantil colombiana.",
    limitation:
      "Aporta contexto de circulación y mezcla cultural, no una genealogía específica del Coco o el Viejo del Costal.",
  }),

  sgcRuizFactSheet: source({
    title: "Hoja informativa del volcán Nevado del Ruiz",
    author: "Servicio Geológico Colombiano",
    type: "ficha científica institucional",
    url: "https://www2.sgc.gov.co/Temas-destacados/Documents/Hoja-informativa-volcan-Nevado-de-Ruiz-SGC.pdf",
    summary:
      "Identifica Cumanday o Kumanday como nombre precolombino del Nevado del Ruiz y aporta datos verificables del volcán.",
    limitation:
      "No documenta a un cacique histórico llamado Cumanday ni valida la trama amorosa de la leyenda.",
  }),
  sgcGeopark: source({
    title: "Geoparque Volcán del Ruiz: iniciativa Aspiring UNESCO",
    author: "Servicio Geológico Colombiano",
    type: "contexto geológico y patrimonial",
    url: "https://www2.sgc.gov.co/patrimonio/Paginas/iniciativa.aspx",
    summary:
      "Registra los nombres Kumanday y Tama, el paisaje volcánico y erupciones históricas del Nevado del Ruiz.",
    limitation:
      "La atribución de nombres territoriales no prueba la existencia ni la identidad étnica del protagonista literario.",
  }),
  ideamGlaciares: source({
    title: "Informe del estado de los glaciares colombianos",
    author: "IDEAM",
    type: "informe científico ambiental",
    url: "https://www.ideam.gov.co/file-download/download/public/11053",
    summary:
      "Ubica el Nevado del Ruiz o Kumanday y documenta su condición glaciar contemporánea.",
    limitation:
      "No aporta evidencia narrativa sobre Cumanday; se usa para describir el escenario real.",
  }),
  nationalAcademiesRuiz: source({
    title: "The Eruption of Nevado del Ruiz Volcano Colombia, South America",
    author: "National Research Council",
    year: 1991,
    type: "historia científica de erupciones",
    url: "https://www.nationalacademies.org/read/1784/chapter/3",
    summary:
      "Resume antecedentes históricos del volcán, incluida la erupción de 1595 documentada por Pedro Simón.",
    limitation:
      "No relaciona esos acontecimientos con el cacique de la obra de Vélez Correa.",
  }),
  sgcGeologiaRuiz: source({
    title: "Geología del Complejo Volcánico Nevado del Ruiz",
    author: "Servicio Geológico Colombiano",
    type: "publicación científica",
    url: "https://www2.sgc.gov.co/LibroGeologiaColombia/tgc/sgcpubesp38201903.pdf",
    summary:
      "Aporta la formación y evolución geológica del escenario montañoso de la leyenda.",
    limitation:
      "No es una fuente de tradición oral ni de identidad indígena.",
  }),

  oteroDeFrente: source({
    title: "Leyendas: De frente al sol",
    author: "Enrique Otero D’Costa",
    type: "texto literario primario",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/download/3125/2843/5578",
    summary:
      "Publica el relato de la encomienda de Chinchiná, Don Fernán, Rodrigo y el desenlace que da título a la obra.",
    limitation:
      "Es ficción histórica firmada; no debe leerse como transcripción literal de un combate de 1592.",
  }),
  oteroAnthology: source({
    title: "Antología de Enrique Otero D’Costa",
    author: "Autores Clásicos Programados",
    type: "reproducción digital de antología literaria",
    url: "https://es.scribd.com/document/878603150/Enrique-Otero-D-Costa-Autores-Clasicos-Programados",
    summary:
      "Reproduce De frente al sol e In illo tempore y aporta una nota biográfica y bibliográfica del autor.",
    limitation:
      "La plataforma es una copia mediada; se usa con apoyo de fuentes bibliográficas e históricas independientes.",
  }),
  banrepOtero: source({
    title: "La colección de Enrique Otero D’Costa",
    author: "Banco de la República",
    year: 2021,
    type: "perfil biográfico y archivístico",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-375/la-coleccion-de-enrique-otero-dcosta",
    summary:
      "Documenta a Otero como historiador y escritor nacido en Rionegro, Santander, con actividad en Manizales y otras ciudades.",
    limitation:
      "La trayectoria del autor no convierte sus ficciones en historia factual ni fija por sí sola la procedencia de cada relato.",
  }),
  samperOtero: source({
    title: "La selección Samper Ortega, 1926–1937",
    author: "Banco de la República",
    type: "historia bibliográfica institucional",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-54/la-seleccion-samper-ortega-1926-1937",
    summary:
      "Registra el volumen Leyendas de Enrique Otero D’Costa dentro de la colección Samper Ortega.",
    limitation:
      "Prueba publicación y clasificación bibliográfica, no oralidad anónima ni exactitud histórica.",
  }),
  oteroAnimasAnalysis: source({
    title:
      "Ánimas y pactos diabólicos: un regaño platónico a los borrachos e idólatras de Santander desde la mitología en prosa",
    author: "Farouk Caballero Hernández",
    year: 2012,
    type: "artículo académico de análisis literario",
    url: "https://dialnet.unirioja.es/descarga/articulo/6515540.pdf",
    summary:
      "Analiza los episodios de Laurián y Ñuá Ulogia como dos relatos de Otero D’Costa situados en Santander y orientados a la disciplina católica.",
    limitation:
      "Es una lectura crítica de textos publicados, no una verificación de apariciones ni de los testimonios retóricos del narrador.",
  }),
  oteroMontanas: source({
    title: "Montañas de Santander",
    author: "Enrique Otero D’Costa",
    type: "registro bibliográfico de obra regional",
    url: "https://books.google.com.do/books?id=XK8tAAAAIAAJ",
    summary:
      "Sitúa una parte central de la obra de Otero D’Costa dentro de la memoria histórica y literaria santandereana.",
    limitation:
      "No contiene por sí sola los dos episodios de ánimas usados en la ficha.",
  }),
  flacsoMitosColombia: source({
    title: "Mitos y leyendas de Colombia",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "compilación y marco metodológico",
    url: "https://repositorio.flacsoandes.edu.ec/items/796b49f5-fff2-4cf8-a8a5-ce5b14b01694",
    summary:
      "Explica criterios para distinguir literatura oral, mito, leyenda, procedencia bibliográfica y función social.",
    limitation:
      "Se usa como marco de clasificación; no atribuye automáticamente las obras firmadas de Otero a una tradición oral.",
  }),
  caldasConquista: source({
    title: "La conquista o encuentro de dos culturas",
    author: "Gobernación de Caldas",
    type: "síntesis histórica institucional",
    url: "https://www.caldas.gov.co/index.php/historia-caldas/10044-la-conquista-o-encuentro-de-dos-culturas",
    summary:
      "Resume el avance español, la fundación de Anserma y el sometimiento de poblaciones en el territorio del actual Caldas.",
    limitation:
      "Es una síntesis general y no confirma los diálogos o protagonistas íntimos de las ficciones de Otero.",
  }),
  ansermaTransferHistory: source({
    title:
      "Las dos Ansermas: seguimiento documental al traslado de una población",
    author: "HiSTOReLo. Revista de Historia Regional y Local",
    type: "artículo académico de historia regional",
    url: "https://portal.amelica.org/ameli/journal/619/6194023010/html/",
    summary:
      "Examina documentos sobre Anserma y los desplazamientos coloniales de población en el territorio donde Otero sitúa parte de sus ficciones.",
    limitation:
      "No confirma los personajes ni las conversaciones de De frente al sol o In illo tempore.",
  }),
  ansermaEncomiendas: source({
    title:
      "Leyes nuevas, visitas de tierras y encomiendas en la región de Anserma",
    author: "Ángel Luis Román Tamez",
    year: 2014,
    type: "registro académico de investigación histórica",
    url: "https://perfilesycapacidades.javeriana.edu.co/es/publications/leyes-nuevas-visitas-de-tierras-y-encomiendas-en-la-regi%C3%B3n-de-ans/",
    summary:
      "Documenta una investigación sobre tierras y encomiendas de la región de Anserma durante el periodo colonial.",
    limitation:
      "El registro contextualiza la institución, pero no identifica la escena de 1592 narrada por Otero D’Costa.",
  }),
  ansermaArchaeology: source({
    title: "Arqueología de la región de Anserma y el valle del Cauca Medio",
    author: "Boletín de Arqueología, Banco de la República",
    type: "artículo arqueológico de contexto",
    url: "https://publicaciones.banrepcultural.org/index.php/fian/article/view/5141",
    summary:
      "Aporta profundidad prehispánica al territorio que la ficción colonial reduce a escenario de conquista.",
    limitation:
      "No demuestra la existencia de Jerónimo de Vezga ni las motivaciones que le atribuye el cuento.",
  }),

  patriaJimenez: source({
    title: "Salamina repasa el legado de Rodrigo Jiménez Mejía",
    author: "La Patria",
    year: 2016,
    type: "perfil biográfico y bibliográfico regional",
    url: "https://archivo.lapatria.com/entretenimiento/salamina-repasa-el-legado-de-rodrigo-jimenez-mejia-281961?qt-qt_3_lomas=1",
    summary:
      "Identifica a Jiménez Mejía como autor salamineño de Tierrabuena y registra sus ediciones de 1959 y 1978.",
    limitation:
      "No reproduce el episodio de Clementina; su atribución narrativa depende del texto citado por Vélez Correa.",
  }),
  cervantesBrujaMinas: source({
    title: "La bruja de las minas",
    author: "Gregorio Sánchez Gómez",
    year: 1938,
    type: "registro y texto de novela",
    url: "https://www.cervantesvirtual.com/obra/la-bruja-de-las-minas-879426/",
    summary:
      "Identifica la novela ambientada en Marmato a la que pertenece Aspasia.",
    limitation:
      "Aspasia es un personaje literario distinto de Clementina y no debe incorporarse a su trama.",
  }),
  ceroSetentaBruja: source({
    title:
      "Brujas, minería y transnacionales: la precursora del gótico andino en Colombia",
    author: "Cerosetenta, Universidad de los Andes",
    type: "análisis literario y social",
    url: "https://cerosetenta.uniandes.edu.co/brujas-mineria-y-transnacionales-la-precursora-del-gotico-andino-en-colombia/",
    summary:
      "Analiza a Cecilia o Aspasia dentro de La bruja de las minas y su relación con despojo, minería y poder.",
    limitation:
      "No es una versión de Clementina ni una prueba de brujería histórica en Salamina.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II",
    author: "Eugenia Villa Posse (compiladora)",
    year: 1993,
    type: "antología (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Texto del cuento de Enrique Otero D'Costa, de sus Leyendas (Minerva, 1936), en la sección 17 «Varias regiones», pp. 17-21, con la dedicatoria a Aquilino Villegas.",
    limitation:
      "Villa Posse lo presenta como leyenda oída y reelaborada por el autor; es un cuento firmado, no un registro oral.",
  }),
  dCostaLeyendas1964: source({
    title: "Leyendas",
    author: "Enrique Otero D'Costa",
    year: 1964,
    type: "artículo (Revista Universidad Pontificia Bolivariana 27 (95), pp. 55-73)",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/view/3125",
    summary:
      "Tercera impresión del cuento, póstuma, que abre el grupo de seis «Leyendas» del autor (pp. 55-58) y trae entero el romance final.",
    limitation:
      "Variantes de taller frente a 1993; la revista lo llama crónica sobre temas coloniales.",
  }),
  camargoHacia2015: source({
    title: "Hacia una nueva comprensión de la historiografía colombiana: breve historia intelectual de Enrique Otero D'Costa (1883-1964)",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "trabajo de grado (Universidad del Rosario)",
    url: "https://repository.urosario.edu.co/handle/10336/10607",
    summary:
      "Estudio de la obra de Otero D'Costa que copia el pasaje del desayuno del tambo y lo remite a Historietas. Leyendas y tradiciones colombianas (Manizales, 1934), p. 131.",
    limitation:
      "Lee el cuento como historiografía de la vida diaria; no se ocupa del romance ni del honor del caído.",
  }),
  republicacoleccionsf: source({
    title: "La colección de Enrique Otero D'Costa",
    author: "Credencial Historia n.º 375 (Banco de la República)",
    year: "s. f.",
    type: "artículo de divulgación histórica",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-375/la-coleccion-de-enrique-otero-dcosta",
    summary:
      "Presenta a Enrique Otero D'Costa como historiador y coleccionista de documentos coloniales, el oficio desde el que escribe sus leyendas.",
    limitation:
      "No menciona este cuento.",
  }),
  plutarcoSayingssf: source({
    title: "Sayings of Spartan Women (Moralia)",
    author: "Plutarco, trad. F. C. Babbitt (LacusCurtius, Universidad de Chicago)",
    year: "s. f.",
    type: "fuente clásica comparativa",
    url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Moralia/Sayings_of_Spartan_Women*.html",
    summary:
      "Reúne el dicho de la madre espartana que, al saber que su hijo cayó en su puesto, pide que lo entierren y que su hermano ocupe el lugar (n.º 20), el paralelo de Similitudes.",
    limitation:
      "Es la Esparta de Plutarco, sin relación histórica con el cuento.",
  }),
  anonimoSongsf: source({
    title: "The Song of Roland",
    author: "Anónimo, trad. C. K. Scott-Moncrieff (Project Gutenberg)",
    year: "s. f.",
    type: "fuente medieval comparativa",
    url: "https://www.gutenberg.org/ebooks/391",
    summary:
      "El Roland moribundo que se tiende bajo un pino con la cara vuelta hacia el enemigo, el segundo paralelo de Similitudes.",
    limitation:
      "Épica francesa medieval; comparación de gesto, no de filiación.",
  }),
  colombianoGeneralidadessf: source({
    title: "Generalidades volcán Nevado del Ruiz",
    author: "Servicio Geológico Colombiano",
    year: "s. f.",
    type: "página institucional",
    url: "https://www2.sgc.gov.co/sgc/volcanes/VolcanNevadoRuiz/Paginas/generalidades-volcan-nevado-ruiz.aspx",
    summary:
      "Registra que en época precolombina el volcán se llamaba Cumanday (Cerro Blanco), Tabuchía o Tama.",
    limitation:
      "Es la página técnica del volcán; da el nombre, no el relato.",
  }),
  tiempollama2023: source({
    title: "Por qué se llama Nevado del Ruiz, la historia del volcán que genera alerta",
    author: "El Tiempo",
    year: 2023,
    type: "prensa",
    url: "https://www.eltiempo.com/colombia/otras-ciudades/por-que-se-llama-nevado-del-ruiz-la-historia-del-volcan-que-genera-alerta-759403",
    summary:
      "Explica en prensa que los quimbayas llamaban Cumanday al volcán y por qué terminó llamándose Nevado del Ruiz.",
    limitation:
      "Nota de actualidad sin fuentes citadas.",
  }),
  mexicoIztaccihuatl2022: source({
    title: "Iztaccíhuatl, la mujer dormida",
    author: "Instituto Nacional de Antropología e Historia (México)",
    year: 2022,
    type: "nota institucional",
    url: "https://www.inah.gob.mx/foto-del-dia/iztaccihuatl-la-mujer-dormida",
    summary:
      "Resume la leyenda de Iztaccíhuatl y Popocatépetl, la princesa y el guerrero convertidos en volcanes, el paralelo mexicano de Similitudes.",
    limitation:
      "Es otra tradición; la comparación es de función, no de parentesco.",
  }),
};

export const caldasMestizoSourceKeysBySlug = {
  "cuento-de-animas": [
    "oteroAnimasAnalysis",
    "oteroAnthology",
    "banrepOtero",
    "samperOtero",
    "oteroMontanas",
    "flacsoMitosColombia",
  ],
  "de-frente-al-sol": [
    "oteroDeFrente",
    "oteroAnthology",
    "banrepOtero",
    "caldasConquista",
    "ansermaTransferHistory",
    "ansermaEncomiendas",
  ],
  "in-illo-tempore": [
    "oteroAnthology",
    "banrepOtero",
    "samperOtero",
    "caldasConquista",
    "ansermaArchaeology",
    "ansermaTransferHistory",
  ],
  "el-aserrador": [
    "velezReader",
    "velezFicha",
    "velezGoogle",
    "velezWorldcat",
    "unalMemoriaCaldas",
    "supiaPlan",
    "ocampoAntioquiaGrande",
  ],
  "el-cacique-cumanday": [
    "velezReader",
    "velezGoogle",
    "sgcRuizFactSheet",
    "sgcGeopark",
    "ideamGlaciares",
    "nationalAcademiesRuiz",
    "sgcGeologiaRuiz",
  ],
  "el-coco": [
    "velezReader",
    "velezGoogle",
    "unalMemoriaCaldas",
    "cervantesCoco",
    "cervantesNanas",
    "pradoCoco",
    "banrepInfancia",
  ],
  "el-cole-cabuya": [
    "velezReader",
    "velezGoogle",
    "unalMemoriaCaldas",
    "ocampoAntioquiaGrande",
    "supiaPlan",
    "antSanLorenzo",
  ],
  "el-viejo-del-costal": [
    "velezReader",
    "velezGoogle",
    "unalMemoriaCaldas",
    "ocampoAntioquiaGrande",
    "riosucioEncantos",
    "banrepInfancia",
  ],
  "las-brujas": [
    "velezReader",
    "velezGoogle",
    "unalMemoriaCaldas",
    "patriaJimenez",
    "cervantesBrujaMinas",
    "ceroSetentaBruja",
    "senaMemoriaCaldas",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickCaldasMestizoSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickCaldasMestizoSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = caldasMestizoSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickCaldasMestizoSourcesHeredadas(slug) {
  const keys = caldasMestizoSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = caldasMestizoSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
