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

export const santanderClassicFolkloreSources = {
  villaPosseFullText: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, investigadora y compiladora",
    year: 1993,
    type: "compilación digitalizada con textos primarios reproducidos",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce Tal para cual y El cacique Salomón de Otero D’Costa, además de La piedra del muerto, El trapiche ardiendo, Lagunas encantadas y Lo que enseñan las cuevas de Juan de Dios Arias.",
    limitation:
      "Es una reedición de 1993: identifica las cadenas impresas, pero no ofrece grabaciones, cuadernos de campo ni una voz comunitaria directa para cada episodio.",
  }),
  elLibroTotalArias: source({
    title: "Folclore santandereano",
    author: "Juan de Dios Arias; El Libro Total",
    year: 1954,
    type: "edición digital regional",
    url: "https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=298",
    summary:
      "Mantiene disponible la obra en la que Arias reunió coplas, narraciones, supersticiones y escenas de transmisión doméstica en Santander.",
    limitation:
      "La ficha cultural presenta la obra desde una identidad regional celebratoria y no verifica por separado las personas, cuevas, lagunas o castigos narrados.",
  }),
  santanderLiteratureStudy: source({
    title: "Literatura santandereana: visibilidad, concepciones y evocaciones",
    author: "Luis Rubén Pérez Pinzón",
    year: 2020,
    type: "artículo académico de historia literaria regional",
    url: "https://revistas.udea.edu.co/index.php/elc/article/download/334302/20790243/152950",
    summary:
      "Contextualiza a Juan de Dios Arias y la lectura de coplas, tradiciones y supersticiones como construcción literaria de lo santandereano.",
    limitation:
      "Analiza proyectos e imaginarios regionales; no convierte cada relato recopilado por Arias en testimonio histórico independiente.",
  }),
  regionalLibrariesStudy: source({
    title:
      "Los gobiernos del libro: intelectuales, imprentas y Bibliotecas de Santander, Caldas y Antioquia (1932-1953)",
    author: "Investigación doctoral, Universidad Nacional de Colombia",
    year: 2024,
    type: "historia académica del libro y las colecciones regionales",
    url: "https://repositorio.unal.edu.co/handle/unal/86317",
    summary:
      "Explica las condiciones políticas y editoriales bajo las cuales las bibliotecas regionales difundieron representaciones colectivas durante la primera mitad del siglo XX.",
    limitation:
      "Aporta historia editorial y no confirma la antigüedad oral ni la factualidad de Nazario, las lagunas o las cuevas.",
  }),
  cauchosLivingMemory: source({
    title: "Mitos y leyendas de Cauchos",
    author:
      "Biblioteca Rural Itinerante Monguaté-Cauchos y habitantes del corregimiento de Cauchos",
    type: "memoria comunitaria contemporánea",
    url: "https://www.bibliotecanacional.gov.co/es-co/Bibliotecas-en-Red/bibliotecas-publicas-moviles/Itinerancias/mitos-y-leyendas-de-cauchos.html",
    summary:
      "Presenta voces actuales de Cauchos, Mogotes, que conservan relatos de fogón, lluvias, barbacoa y otros espantos mediante narración comunitaria.",
    limitation:
      "No incluye La piedra del muerto ni demuestra continuidad literal entre sus registros actuales y el texto de Arias de 1954.",
  }),
  mogoticosTerritory: source({
    title: "Comunicado sobre afectación ambiental en Cuchiquira, Mogotes",
    author: "Corporación Autónoma Regional de Santander",
    year: 2023,
    type: "fuente institucional territorial y ambiental",
    url: "https://old.cas.gov.co/prensa/comunicado-a-la-opinion-publica-4/",
    summary:
      "Confirma Cuchiquira como vereda de Mogotes y sitúa la quebrada Potrerona como afluente del río Mogoticos.",
    limitation:
      "Documenta territorio y afectaciones recientes, no la roca antropomorfa, el propietario, el mendigo o la tormenta de la leyenda.",
  }),
  vetasLagunasStudy: source({
    title:
      "Who owns the Santurbán Moorland? Mining Ancestry as a Narrative of Territorial Defense in the Municipality of Vetas, Santander",
    author: "Revista CS, Universidad Icesi",
    year: 2022,
    type: "investigación antropológica contemporánea",
    url: "https://www.icesi.edu.co/revistas/index.php/revista_cs/en/article/view/4742/4479",
    summary:
      "Documenta en Vetas memorias actuales de lagunas bravas que se enojan, hacen llover y participan en relaciones de cuidado territorial.",
    limitation:
      "Corresponde a Santurbán y Vetas; no es prueba directa de las variantes que Arias reunió en otros municipios de Santander.",
  }),
  museoDelOroMuisca: source({
    title: "Muisca: ofrendas, balsa y laguna de Guatavita",
    author: "Museo del Oro, Banco de la República",
    type: "síntesis arqueológica y museológica",
    url: "https://enciclopedia.banrepcultural.org/index.php/Muisca",
    summary:
      "Distingue la ceremonia de Guatavita, la balsa hallada en Pasca y las prácticas de ofrenda respaldadas por crónicas y objetos.",
    limitation:
      "La evidencia muisca de Guatavita no autoriza a atribuir todos los relatos de lagunas santandereanas a una sola cosmología indígena.",
  }),
  ancizarProfile: source({
    title: "Manuel Ancízar Basterra (Alpha)",
    author: "Banco de la República",
    type: "perfil histórico y bibliográfico",
    url: "https://enciclopedia.banrepcultural.org/index.php/Manuel_Anc%C3%ADzar_Basterra_%28Alpha%29",
    summary:
      "Contextualiza Peregrinación de Alpha y su descripción de regiones santandereanas durante la Comisión Corográfica de 1850-1851.",
    limitation:
      "El perfil explica al viajero y la obra; el diálogo de la laguna del monte sigue siendo una escena escrita desde su mirada decimonónica.",
  }),
  uisGuaneArchaeology: source({
    title:
      "Arqueología del Nororiente colombiano: Los Teres, un sitio preguane y guane",
    author: "Leonardo Moreno González; Universidad Industrial de Santander",
    year: 2012,
    type: "artículo académico de arqueología regional",
    url: "https://revistas.uis.edu.co/index.php/anuariohistoria/article/download/3056/3939?inline=1",
    summary:
      "Estudia poblamiento preguane y guane y documenta hallazgos en cuevas de la Mesa de Los Santos dentro de una historia de investigación y rescate.",
    limitation:
      "No identifica como históricos a Miguel Seco, el Biato, el Colmenero o el guía de Cachalú, ni equipara hallazgo arqueológico con tesoro.",
  }),
  icanhArchaeologyFaq: source({
    title: "Preguntas frecuentes sobre patrimonio arqueológico",
    author: "Instituto Colombiano de Antropología e Historia",
    year: 2022,
    type: "guía institucional de protección patrimonial",
    url: "https://www.icanh.gov.co/wp-content/uploads/2025/05/Preguntas_frecuentes_y_sus_respuestas_ICANH_2022.docx.pdf",
    summary:
      "Explica que solo profesionales autorizados pueden excavar y que un hallazgo debe reportarse sin remover objetos ni restos.",
    limitation:
      "No interpreta las leyendas de Arias; fija el límite contemporáneo para no convertirlas en instrucciones de búsqueda o guaquería.",
  }),
  unabChicamochaArchaeology: source({
    title: "Paisaje Cultural Cañón del Chicamocha: patrimonio arqueológico",
    author: "Museo UNAB",
    type: "síntesis institucional de patrimonio regional",
    url: "https://museo.unab.edu.co/chicamocha/index.html",
    summary:
      "Presenta cerámica, textiles, momias, arte rupestre y ocupaciones guane investigadas alrededor del cañón y Los Santos.",
    limitation:
      "Aporta contexto material y territorial; no valida cuevas de oro, guardianes espectrales ni fórmulas mágicas.",
  }),
  oteroCatalog: source({
    title: "Leyendas por Enrique Otero D’Costa",
    author: "Médiathèques de Strasbourg",
    year: 1936,
    type: "registro de colección patrimonial",
    url: "https://www.mediatheques.strasbourg.eu/doc/IGUANA_2/750237/leyendas-por-enrique-otero-d-costa",
    summary:
      "Registra la edición de Minerva de 1936, sus 146 páginas y su pertenencia a la Biblioteca Aldeana de Colombia.",
    limitation:
      "La ficha acredita edición y autoría, pero no documenta por sí misma el origen oral de cada cuento o la historicidad de sus personajes.",
  }),
  oteroCollection: source({
    title: "La colección de Enrique Otero D’Costa",
    author: "Academia Colombiana de Historia; Banco de la República",
    year: 2021,
    type: "perfil archivístico e historiográfico",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-375/la-coleccion-de-enrique-otero-dcosta",
    summary:
      "Describe la trayectoria de Otero D’Costa como historiador, folclorista, coleccionista y figura pública vinculada con Santander y otros centros históricos.",
    limitation:
      "Contextualiza al autor y su archivo; no convierte su prosa arcaizante ni sus escenas dialogadas en transcripciones literales.",
  }),
  oteroUpbReprint: source({
    title: "Leyendas de Enrique Otero D’Costa",
    author: "Enrique Otero D’Costa; Revista Universidad Pontificia Bolivariana",
    type: "reproducción hemerográfica del texto",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/download/3125/2843/5578",
    summary:
      "Ofrece otra cadena consultable de El cacique Salomón, incluidos Sugamuxi, Guatesique, Dubigara y Pirinoche.",
    limitation:
      "Reproduce la obra de Otero y no constituye corroboración histórica independiente de sus episodios.",
  }),
  uptcSugamuxi: source({
    title: "Historia de la fiesta de San Pascual Bailón en Sogamoso",
    author: "Investigación académica, Universidad Pedagógica y Tecnológica de Colombia",
    type: "estudio histórico y de memoria festiva",
    url: "https://repositorio.uptc.edu.co/server/api/core/bitstreams/bb2b505c-e61e-43ec-a4f5-ec1f89be5bd2/content",
    summary:
      "Contextualiza a Sugamuxi, su bautismo como don Alonso y la transformación colonial del valle de Iraca y sus celebraciones.",
    limitation:
      "No documenta la anécdota del río ni prueba que Sugamuxi pronunciara el diálogo que Otero publicó en 1936.",
  }),
  uisGuaneHistory: source({
    title: "Historia de la provincia de Guane: origen, poblamiento y organización",
    author: "Investigación histórica, Universidad Industrial de Santander",
    year: 2022,
    type: "estudio académico de historia regional",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-1be0-4c77-a9d7-faf78fa4f1b5/content",
    summary:
      "Reconstruye cacicazgos y organización guane mediante fuentes tributarias coloniales y análisis historiográfico.",
    limitation:
      "No prueba a Andrés Guatesique, Pirinoche, la deuda de veinte pesos ni la sentencia corporal narrada por Otero.",
  }),
  gironOfficialHistory: source({
    title: "Reseña histórica y territorial de San Juan Girón",
    author: "Alcaldía de Girón",
    year: 2016,
    type: "documento institucional municipal",
    url: "https://www.giron-santander.gov.co/Transparencia/BancoDocumentos/Programa%20de%20Gobierno%20Con%20Gir%C3%B3n%20Trabajando%202016-2019.pdf",
    summary:
      "Sitúa San Juan Girón en Santander, junto al río de Oro, y resume su formación colonial y condición patrimonial.",
    limitation:
      "No documenta a Anselmo Landínez, Cirilo, el cacaotal, la enfermedad o el contrato de pecados.",
  }),
  medlineGoiter: source({
    title: "Goiter",
    author: "MedlinePlus, U.S. National Library of Medicine",
    type: "información médica pública",
    url: "https://medlineplus.gov/ency/article/001178.htm",
    summary:
      "Define el bocio como agrandamiento de la glándula tiroides y describe varias causas médicas posibles.",
    limitation:
      "No diagnostica a personajes literarios; permite reconocer que la equivalencia entre bocio e inteligencia es un prejuicio del narrador, no un dato clínico.",
  }),
  ovidBaucis: source({
    title: "Metamorphoses, Book 8: Baucis and Philemon",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D8",
    summary:
      "Narra cómo dos viajeros divinos encuentran puertas cerradas, reciben hospitalidad de una pareja humilde y transforman el paisaje.",
    limitation:
      "Es literatura clásica grecorromana; la semejanza temática no demuestra contacto ni origen para La piedra del muerto.",
  }),
  genesisLot: source({
    title: "Genesis 19: destruction and the pillar of salt",
    author: "Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%2019&version=NRSVUE",
    summary:
      "Contiene la destrucción de las ciudades y la transformación de la esposa de Lot en columna de sal.",
    limitation:
      "Comparte catástrofe y petrificación, pero no el río Mogoticos, la hospitalidad individual ni la roca funeraria de Mogotes.",
  }),
  lukeRichMan: source({
    title: "Luke 16:19-31, the rich man and Lazarus",
    author: "Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Luke%2016%3A19-31&version=NRSVUE",
    summary:
      "Contrasta la abundancia de un hombre rico con el sufrimiento ignorado de Lázaro y un desenlace de inversión moral.",
    limitation:
      "No contiene trapiche, trabajo cañero, fuego anual ni memoria infantil, y no prueba dependencia del relato santandereano.",
  }),
  dickensChristmasCarol: source({
    title: "A Christmas Carol",
    author: "Charles Dickens; Project Gutenberg",
    year: 1843,
    type: "obra literaria comparativa directa",
    url: "https://www.gutenberg.org/ebooks/46",
    summary:
      "Presenta una visita espectral que obliga a un propietario insensible a mirar el daño causado y cambiar su conducta.",
    limitation:
      "Scrooge puede transformarse; Nazario aparece como sombra posterior al incendio. La afinidad moral no demuestra influencia.",
  }),
  unescoTiticaca: source({
    title: "Titicaca: the sacred lake reveals its secrets",
    author: "UNESCO",
    year: 2020,
    type: "fuente arqueológica y comparativa institucional",
    url: "https://www.unesco.org/en/articles/titicaca-sacred-lake-reveals-its-secrets-0",
    summary:
      "Documenta la centralidad del Titicaca en las mitologías de Tiwanaku e Inca y la investigación arqueológica de sus ofrendas.",
    limitation:
      "Es otra historia andina del agua sagrada; no equivale a las variantes campesinas de Santander ni prueba una genealogía común.",
  }),
  aliBaba: source({
    title: "Ali Baba, or the Forty Thieves",
    author: "Relato anónimo; Project Gutenberg",
    type: "fuente folclórica comparativa directa",
    url: "https://gutenberg.org/ebooks/37679",
    summary:
      "Conserva la cueva de tesoro que se abre mediante una fórmula y castiga la codicia de quien intenta apropiarse de todo.",
    limitation:
      "La semejanza fue observada por el propio Arias para Cenicero; no convierte la variante santandereana en copia ni en ruta real.",
  }),
  ovidMidas: source({
    title: "Metamorphoses, Book 11: Bacchus and Midas",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D11",
    summary:
      "Narra cómo el deseo de transformar cuanto se toca en oro convierte la abundancia en peligro.",
    limitation:
      "Midas recibe un don y logra revertirlo; Miguel Seco es enchapado por guardianes dentro de una conseja regional.",
  }),
  kingsSolomon: source({
    title: "1 Kings 3:16-28, the judgment of Solomon",
    author: "Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=1%20Kings%203%3A16-28&version=NRSVUE",
    summary:
      "Presenta el juicio atribuido a Salomón como demostración narrativa de agudeza para resolver una disputa.",
    limitation:
      "Explica la alusión del título de Otero, pero no es fuente para Sugamuxi, Guatesique o la administración colonial.",
  }),
  grimmCleverDaughter: source({
    title: "The Peasant’s Clever Daughter",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    type: "fuente folclórica comparativa directa",
    url: "https://gutenberg.org/cache/epub/59508/pg59508-images.html",
    summary:
      "Una joven campesina resuelve acertijos y usa su ingenio frente al rey para intervenir en una decisión injusta.",
    limitation:
      "Comparte agudeza ante el poder, pero sus acertijos, protagonista y estructura no pertenecen a El cacique Salomón.",
  }),
  leviticusScapegoat: source({
    title: "Leviticus 16, the scapegoat ritual",
    author: "Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Leviticus%2016&version=NRSVUE",
    summary:
      "Describe un rito colectivo en el que faltas e iniquidades se confiesan sobre un animal que es enviado fuera del campamento.",
    limitation:
      "Es un ritual comunitario y no un contrato privado, una compraventa de culpa ni una sátira de dos compadres.",
  }),
  goetheFaust: source({
    title: "Faust, part 1",
    author: "Johann Wolfgang von Goethe; Project Gutenberg",
    type: "obra literaria comparativa directa",
    url: "https://www.gutenberg.org/cache/epub/14591/pg14591-images.html",
    summary:
      "Desarrolla un pacto escrito en el que una persona acepta consecuencias espirituales a cambio de una promesa de beneficio.",
    limitation:
      "Fausto pacta con Mefistófeles; Cirilo negocia con un compadre sobre pecados ajenos y medio cacaotal.",
  }),
};

export const santanderClassicFolkloreSourceKeysBySlug = {
  "la-piedra-del-muerto": [
    "villaPosseFullText",
    "elLibroTotalArias",
    "cauchosLivingMemory",
    "mogoticosTerritory",
    "santanderLiteratureStudy",
    "ovidBaucis",
    "genesisLot",
  ],
  "el-trapiche-ardiendo": [
    "villaPosseFullText",
    "elLibroTotalArias",
    "santanderLiteratureStudy",
    "regionalLibrariesStudy",
    "cauchosLivingMemory",
    "lukeRichMan",
    "dickensChristmasCarol",
  ],
  "lagunas-encantadas": [
    "villaPosseFullText",
    "elLibroTotalArias",
    "vetasLagunasStudy",
    "museoDelOroMuisca",
    "ancizarProfile",
    "unescoTiticaca",
    "santanderLiteratureStudy",
  ],
  "lo-que-ensenan-las-cuevas": [
    "villaPosseFullText",
    "elLibroTotalArias",
    "uisGuaneArchaeology",
    "icanhArchaeologyFaq",
    "unabChicamochaArchaeology",
    "aliBaba",
    "ovidMidas",
  ],
  "el-cacique-salomon": [
    "villaPosseFullText",
    "oteroUpbReprint",
    "oteroCollection",
    "uptcSugamuxi",
    "uisGuaneHistory",
    "kingsSolomon",
    "grimmCleverDaughter",
  ],
  "tal-para-cual": [
    "villaPosseFullText",
    "oteroCatalog",
    "oteroCollection",
    "gironOfficialHistory",
    "medlineGoiter",
    "leviticusScapegoat",
    "goetheFaust",
  ],
};

export function pickSantanderClassicFolkloreSources(slug) {
  const keys = santanderClassicFolkloreSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = santanderClassicFolkloreSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
