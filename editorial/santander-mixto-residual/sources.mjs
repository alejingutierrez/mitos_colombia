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

  // ——— Búsqueda profunda 2026-09-22 ———
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, vol. II, sección 17 «Varias regiones. Leyendas»: «Talabalí», de Enrique Otero D'Costa",
    author: "Eugenia Villa Posse (investigación y compilación)",
    year: 1993,
    type: "antología institucional que reproduce un libro de leyendas de autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=34",
    summary:
      "Texto íntegro en los folios 36 a 41, con la cabecera impresa «T ALABAD» y el nombre Talabalí en todo el cuerpo. Es la única fuente del relato completo: la ruina de Juan de Velasco y su traslado de Pamplona a Bucarica; los yariguíes y la parcialidad suamacá de las vegas del Cáchira; la captura de Talabalí, guane de Bucarica y antiguo paje, en la entrada contra el cacique Suamacá; la jaula del tigre y la comida secreta de doña María; el vizcaíno Juan de Arteaga Gamboa y la condición del duelo de espada y macana; el consejo del minero Beltrán de Luzuriaga; el palenque de la doctrina de Bucarica con sus tres tablados y los nombres de doctrinero, teniente-alcalde de minas, escribano y alguacil; el primer golpe que rompe la rodela, el grito de María y la muerte buscada.",
    limitation:
      "Reproducción de 1993 del libro de 1936, con erratas de composición, empezando por el título. El PDF va dos páginas por detrás de los folios. No declara narrador ni lugar de escucha, y la pieza tiene voz de escritor, sin marcas de oralidad.",
  }),
  perezPinzonBucaramanga2022: source({
    title: "Bucaramanga 400 años. Indios pobladores antes (1622) y después (1657) de su «fundación»",
    author: "Luis-Rubén Pérez-Pinzón",
    year: 2022,
    type: "artículo de historia colonial en revista universitaria",
    url: "https://revistas.unal.edu.co/index.php/hisysoc/article/view/102127",
    summary:
      "Da el suelo documental de los nombres del relato. Con los expedientes de la visita de Juan de Villabona Zubiaurre (1622) muestra que el oidor mandó congregar a los indios lavadores de Guaca y Bucarica para frenar los abusos del encomendero y gobernador de Pamplona Juan de Velasco, de su familia y, en especial, de su yerno Juan de Arteaga; que el auto lo ejecutó Andrés Páez de Sotomayor, teniente del alcalde de minas, el mismo que en el palenque de Otero ocupa el tablado de los blancos; y que fue Otero D'Costa quien halló en 1914 la copia del auto y la publicó en el Boletín de Historia y Antigüedades n.º 100.",
    limitation:
      "No menciona a Talabalí, la jaula, doña María ni el duelo. Su Arteaga es yerno y administrador en 1622, no el pretendiente pobre del relato; la relación entre ambos no está demostrada.",
  }),
  camargoHacia2015: source({
    title: "Hacia una nueva comprensión de la historiografía colombiana: breve historia intelectual de Enrique Otero D'Costa (1883-1964)",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "trabajo de grado en historia",
    url: "https://repository.urosario.edu.co/server/api/core/bitstreams/4fc7392a-c2aa-4a84-92ff-4a2402f57200/content",
    summary:
      "En su página 58 cita «Talabalí» por la edición de «Historietas. Leyendas y tradiciones colombianas» (Manizales, Arturo Zapata, 1934), p. 150, lo que fija una impresión anterior a la de 1936. Resume el duelo de espada y macana por la mano de doña María y transcribe la negativa del hidalgo a batirse con indios, que usa para mostrar el interés de Otero por la mentalidad de la élite colonial. Describe además el «Cronicón solariego» de 1922 como un libro de historia regional, con capítulos sobre guanes, yariguíes y los placeres de oro del Río del Oro.",
    limitation:
      "Trabajo de pregrado; resume la pieza en un párrafo y no la coteja entre ediciones. La cita que da trae una variante mínima («indios o personas») frente a la de 1993 («indios y personas»).",
  }),
  gonzalezHistoria2023: source({
    title: "Historia de la provincia de Guane: origen, poblamiento y configuraciones sociales (1540-1795)",
    author: "María Consuelo Moreno González",
    year: 2023,
    type: "tesis doctoral en historia",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-1be0-4c77-a9d7-faf78fa4f1b5/content",
    summary:
      "En sus páginas 187 y 188 sitúa a Ortún Velasco como uno de los primeros pobladores de la margen del Río del Oro, con estancia de ganado y cultivos de caña y maíz en el sitio de Bucarica, donde sus indios de encomienda lavaban oro y tributaban; y explica que los de Juan Velasco siguieron viviendo en esa estancia aunque se los congregara en Bucaramanga en 1602 y 1622. Es el fondo de la «casona de Bucarica» del relato. En la página 341 registra además uniones entre guanes encomendados e indias yariguíes, el cruce de mundos que la biografía de Talabalí dramatiza.",
    limitation:
      "No menciona el relato ni a ninguno de sus personajes inventados. Se apoya en parte en el propio Otero («Fundación de Bucaramanga», 1914), de modo que no es del todo independiente de él.",
  }),
  ercillaAraucana1569: source({
    title: "La Araucana, parte I, canto III",
    author: "Alonso de Ercilla y Zúñiga",
    year: 1569,
    type: "poema épico, edición de 1776 digitalizada",
    url: "https://archive.org/details/laaraucanapartei01erci",
    summary:
      "Trae el paralelo más preciso de la figura: Lautaro, «un hijo de un cacique conocido / que a Valdivia de paje le servía», criado en casa del conquistador, que en la batalla se pasa a los suyos y acaba como su capitán. Como Talabalí, sale del servicio doméstico español y convierte lo aprendido de los blancos en arma contra ellos.",
    limitation:
      "Poema épico del siglo XVI sobre Chile, citado en una edición madrileña de 1776. Lautaro vence y Talabalí renuncia; la comparación es de trayectoria, no de desenlace, y no hay indicio de que Otero lo tomara de Ercilla.",
  }),
  meraCumanda1879: source({
    title: "Cumandá o un drama entre salvajes",
    author: "Juan León Mera",
    year: 1879,
    type: "novela indianista, edición de 1891 digitalizada",
    url: "https://archive.org/details/cumandundram00merauoft",
    summary:
      "Es el paralelo andino del desenlace: la protagonista, criada entre los pueblos de la selva oriental del Ecuador, acepta ir a la muerte para salvar al joven blanco al que ama, y declara que prefiere sacrificar su vida por la de su adorado. Como en Bucarica, el amor que cruza la frontera colonial se resuelve con la muerte voluntaria del personaje indígena, contada por un escritor criollo.",
    limitation:
      "Novela ecuatoriana de autor; la imposibilidad de su amor se debe a un parentesco revelado, no a la jerarquía de castas. Comparación de género, no de fuente.",
  }),
  cupaedicion2019: source({
    title: "La edición de la Selección Samper Ortega de Literatura Colombiana. Bibliotecas, editoriales e imprentas en la década de 1930",
    author: "Miguel Ángel Pineda Cupa",
    year: 2019,
    type: "artículo de historia del libro",
    url: "https://www.redalyc.org/journal/2630/263058277003/html/",
    summary:
      "Sitúa la edición de 1936 en que Villa Posse lee «Talabalí»: la Biblioteca Aldeana de Colombia era la edición oficial en cartilla de la Selección Samper Ortega, contratada por el Ministerio de Educación Nacional en 1935 para bibliotecas. Menciona también que la Biblioteca Santander, lanzada en Bucaramanga en 1932 por Gustavo Otero Muñoz, contó entre sus autores a Enrique Otero D'Costa.",
    limitation:
      "Historia editorial; no trata el contenido del volumen de Otero ni menciona esta pieza.",
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

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickSantanderMixtoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickSantanderMixtoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = santanderMixtoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickSantanderMixtoResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene expediente de fuentes.`);
  return keys.map((key) => {
    const selected = santanderMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
