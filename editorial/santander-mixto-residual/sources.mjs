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

export const santanderMixtoResidualSources = {
  villaPosseTalabali: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, compiladora; Enrique Otero D’Costa, autor",
    year: 1993,
    type: "compilación digitalizada con el texto literario primario reproducido",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce Talabalí: cautiverio en Bucarica, ayuda de María de Velasco, condición matrimonial, duelo con Juan de Arteaga y muerte voluntaria del cautivo.",
    limitation:
      "Villa Posse advierte que el corpus incluye arreglos literarios; esta reproducción no convierte escenas, diálogo o personaje en expediente colonial.",
  }),
  croniconSolariego: source({
    title: "Cronicón solariego, volumen 1",
    author: "Enrique Otero D’Costa",
    year: 1922,
    type: "obra histórica y literaria regional de primera edición",
    url: "https://play.google.com/store/books/details/Enrique_Otero_d_Costa_Cronic%C3%B3n_solariego?id=6eVNAQAAMAAJ",
    summary:
      "Controla autor, título, imprenta, fecha y extensión de la obra temprana desde la cual circuló la elaboración regional de Otero.",
    limitation:
      "La ficha bibliográfica no demuestra por sí sola qué frases proceden de archivo, tradición oral o invención literaria.",
  }),
  scieloBucaramanga: source({
    title:
      "Bucaramanga 400 años. Indios pobladores antes (1622) y después (1657) de su ‘fundación’",
    author: "Luis Rubén Pérez Pinzón",
    year: 2022,
    type: "artículo académico con transcripción de documentos coloniales",
    url: "https://revistas.unal.edu.co/index.php/hisysoc/article/view/102127",
    summary:
      "Documenta a Juan de Velasco, Juan de Arteaga, Bucarica y las cuadrillas indígenas de lavado de oro mediante las visitas de 1622 y 1657.",
    limitation:
      "No registra a Talabalí, la jaula, el auxilio de María, el duelo ni el sacrificio amoroso narrados por Otero.",
  }),
  oteroFundacionBucaramanga: source({
    title: "Fundación de Bucaramanga",
    author: "Enrique Otero D’Costa",
    year: 1914,
    type: "artículo histórico temprano con documentos de Bucarica",
    url: "https://academiahistoria.org.co/boletines/BHA-100.pdf",
    summary:
      "Describe la visita a Bucarica, a Juan de Velasco y la administración de Juan de Arteaga en un contexto de trabajo indígena forzado.",
    limitation:
      "Es la reconstrucción histórica del mismo autor de Talabalí y no confirma en esos documentos el argumento romántico posterior.",
  }),
  uisColonialPunishment: source({
    title:
      "Trabajo y castigos laborales a los indios de Pamplona del Nuevo Reino de Granada, siglo XVII",
    author: "Leonardo Fabián García Rincón",
    year: 2019,
    type: "artículo académico basado en diligencias de visita",
    url: "https://www.redalyc.org/journal/4075/407564496008/html/",
    summary:
      "Documenta castigos de Juan de Arteaga contra trabajadores indígenas de Bucarica y vincula violencia, cuotas de oro, huidas y declive demográfico.",
    limitation:
      "El artículo respalda el régimen coercitivo, no a Talabalí ni la secuencia específica de fuga, captura y duelo.",
  }),
  oteroCollection: source({
    title: "La colección de Enrique Otero D’Costa",
    author: "Academia Colombiana de Historia y Banco de la República",
    year: 2021,
    type: "perfil archivístico e historiográfico",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-375/la-coleccion-de-enrique-otero-dcosta",
    summary:
      "Contextualiza a Otero como historiador, folclorista, coleccionista y autor regional vinculado con Santander.",
    limitation:
      "Explica la trayectoria del autor, pero no separa dentro de Talabalí cada dato archivístico de cada recurso narrativo.",
  }),
  lastMohicans: source({
    title: "The Last of the Mohicans: A Narrative of 1757",
    author: "James Fenimore Cooper; Project Gutenberg",
    year: 1826,
    type: "novela histórica comparativa directa",
    url: "https://www.gutenberg.org/ebooks/940",
    summary:
      "Presenta a Uncas dentro de una frontera colonial ficcionalizada, con afecto imposible, conflicto armado y muerte trágica.",
    limitation:
      "Es una novela norteamericana; el paralelo de género no demuestra préstamo, parentesco cultural ni historicidad de Talabalí.",
  }),
  atala: source({
    title: "Atala",
    author:
      "François-René de Chateaubriand; traducción digital de la Biblioteca Virtual Miguel de Cervantes",
    year: 1801,
    type: "novela romántica comparativa directa",
    url: "https://www.cervantesvirtual.com/descargaPdf/traduccion-de-atala-de-chateaubriand/",
    summary:
      "Construye un amor trágico en un paisaje americano idealizado y hace del sacrificio personal el desenlace del conflicto.",
    limitation:
      "La comparación es literaria y crítica: no autoriza a reducir a Talabalí a un arquetipo europeo ni prueba influencia de Atala sobre Otero.",
  }),
  espantosArchive: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author:
      "Casa Editorial El Tiempo y Universidad Autónoma de Colombia; edición de Julio Orozco Vargas",
    year: 2004,
    type: "antología editorial consultable con recreaciones narrativas",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Dedica las páginas 93–94 al Ermitaño Iracundo: ficha fantástica, origen de Nicolás y correos ficticios entre Ana y Édgar en Ocaña.",
    limitation:
      "El volumen reconstruye expedientes y testimonios como recurso literario; los correos, poderes y encuentro no son documentos verificados.",
  }),
  openLibraryEspantos: source({
    title: "Registro de Cuentos de espantos y otros seres fantásticos",
    author: "Open Library e Internet Archive",
    year: 2004,
    type: "registro bibliográfico y tabla de contenido",
    url: "https://openlibrary.org/books/OL26208262M/Cuentos_de_Espantos_y_otros_seres_fant%C3%A1sticos_del_folclor_Colombiano",
    summary:
      "Controla editorial, ISBN, año, extensión y ubicación de El Ermitaño Iracundo en las páginas 93–94.",
    limitation:
      "Acredita la edición, no una recolección oral independiente ni la factualidad del marco epistolar.",
  }),
  mosqueraCatalog: source({
    title: "Cuentos de espantos y otros seres fantásticos: registro bibliotecario",
    author: "Biblioteca Pública Municipal San Juan Bosco de Mosquera",
    year: 2016,
    type: "catálogo bibliotecario institucional",
    url: "https://biblioteca.apps-mosquera.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=11108",
    summary:
      "Confirma autores, editor, extensión y presencia separada de El Ermitaño Iracundo en la antología.",
    limitation:
      "Prueba existencia bibliográfica y no valida como testimonios reales las historias del volumen.",
  }),
  ufpsoOcanaTradition: source({
    title:
      "Diseño y producción del libro: Leyendas y mitos de tradición rural y urbana de Ocaña, Norte de Santander",
    author: "Arlyd Marisol Monterrosa Cuello y Keyla Melissa Guillin Acosta",
    year: 2014,
    type: "trabajo de grado sobre memoria oral local",
    url: "https://repositorioinstitucional.ufpso.edu.co/handle/20.500.14167/2785",
    summary:
      "Documenta la necesidad de recopilar relatos ocañeros mediante entrevistas y distingue memoria oral, leyenda urbana y producto editorial.",
    limitation:
      "Aporta contexto metodológico de Ocaña, pero no ofrece en el material seleccionado una corroboración independiente de Ana ni de los poderes del Ermitaño.",
  }),
  ufpsoEducationalSoftware: source({
    title:
      "Desarrollo de un software educativo de mitos y leyendas para estudiantes de primaria en Ocaña",
    author: "Erika Alexandra Rojas Claro y Angela Viviana Verano Yañez",
    year: 2018,
    type: "trabajo de grado sobre recepción pedagógica local",
    url: "https://repositorioinstitucional.ufpso.edu.co/handle/20.500.14167/1529",
    summary:
      "Registra el uso escolar y multimedia de mitos y leyendas como parte de la transmisión cultural en Ocaña.",
    limitation:
      "No identifica en su ficha pública al Ermitaño como corpus ni demuestra una versión oral anterior a 2004.",
  }),
  mitosCortosErmitano: source({
    title: "El ermitaño de Ocaña",
    author: "Mitos Cortos",
    year: 2018,
    type: "versión digital derivada y contemporánea",
    url: "https://www.mitos-cortos.com/mitos-colombianos/el-ermit/",
    summary:
      "Nombra Nicolás al ermitaño, conserva la visita de ángeles, el resentimiento ante un pecador perdonado, el rayo y el espíritu errante.",
    limitation:
      "No cita informantes ni bibliografía y añade bandeja preciosa, época colonial y detalles de castigo que no se tratan como núcleo independiente.",
  }),
  lukeProdigal: source({
    title: "Lucas 15:11–32, el hijo pródigo y su hermano",
    author: "Bible Gateway, NRSVUE",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Luke%2015%3A11-32&version=NRSVUE",
    summary:
      "El hermano mayor se enoja porque el padre recibe y celebra al hijo que regresó arrepentido.",
    limitation:
      "No contiene ermita, ángeles, cueva, rayo ni aparición ocañera; la afinidad moral no demuestra una fuente directa.",
  }),
  lukePharisee: source({
    title: "Lucas 18:9–14, el fariseo y el recaudador",
    author: "Bible Gateway, NRSVUE",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Luke%2018%3A9-14&version=NRSVUE",
    summary:
      "Contrasta la confianza orgullosa en la propia piedad con la petición humilde de misericordia de quien reconoce su falta.",
    limitation:
      "Comparte crítica de la superioridad religiosa, pero no la trama fantástica ni la procedencia de Ocaña.",
  }),
};

const sourceKeysBySlug = {
  talabad: [
    "villaPosseTalabali",
    "croniconSolariego",
    "scieloBucaramanga",
    "oteroFundacionBucaramanga",
    "uisColonialPunishment",
    "oteroCollection",
    "lastMohicans",
    "atala",
  ],
  "el-ermitano-iracundo": [
    "espantosArchive",
    "openLibraryEspantos",
    "mosqueraCatalog",
    "ufpsoOcanaTradition",
    "ufpsoEducationalSoftware",
    "mitosCortosErmitano",
    "lukeProdigal",
    "lukePharisee",
  ],
};

export function pickSantanderMixtoResidualSources(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = santanderMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
