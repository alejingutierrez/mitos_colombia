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

  // ——— Búsqueda profunda 2026-09-22 ———
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, vol. II, sección 17 «Varias regiones. Leyendas»: «El cacique Salomón», de Enrique Otero D'Costa",
    author: "Eugenia Villa Posse (investigación y compilación)",
    year: 1993,
    type: "antología institucional que reproduce un libro de leyendas de autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=31",
    summary:
      "Texto íntegro en los folios 33 a 36. Contiene las dos partes: la viñeta de Sugamuxi, sacerdote de Iraca bautizado don Alonso, que manda mirar hacia dónde corre el río ante el anuncio de un juez nuevo para Sogamoso; y el caso de Dubigara, en tierras de la actual Barichara, con el encomendero Juan Bautista de Olarte, provincial de la Santa Hermandad de Vélez, el labrantío de maíz vendido por Pirinoche a un criado mestizo por veinte pesos pagaderos en Pascua, el chiste de la ciudad de Paga, los dos azotes por peso, los diez pesos cobrados, la zafacoca de Vélez con el licenciado Morantes y la defensa por mitades. Es la única de las impresiones que cierra con «Lo certifico».",
    limitation:
      "Reproducción de 1993 del libro de 1936, con erratas de composición; en la réplica del encomendero falta una palabra («en vuestra no estaba la punición»). El PDF va dos páginas por detrás de los folios. No nombra narrador ni lugar de escucha.",
  }),
  dCostaLeyendas1964: source({
    title: "Leyendas",
    author: "Enrique Otero D'Costa",
    year: 1964,
    type: "serie de leyendas de autor publicada en revista universitaria",
    url: "https://revistas.upb.edu.co/index.php/revista-institucional/article/view/3125",
    summary:
      "Revista de la Universidad Pontificia Bolivariana, número 95, 1964: «El cacique Salomón» ocupa las páginas 70 a 73 y cierra la serie de seis leyendas (De frente al sol, In illo tempore, El castellano de San Juan, Las clavellinas, Genus irritabile vatum y ésta). Es un segundo testimonio impreso, independiente de Villa Posse, que permite cotejar: el texto coincide casi palabra por palabra, escribe «Sogomoso», acentúa distinto algunas formas y termina en el refrán de la prudencia, sin el «Lo certifico» de la antología.",
    limitation:
      "Publicación póstuma sin aparato: no dice de qué edición anterior toma los textos. Comparte con la de 1993 la omisión de «mano» en la réplica del encomendero.",
  }),
  camargoHacia2015: source({
    title: "Hacia una nueva comprensión de la historiografía colombiana: breve historia intelectual de Enrique Otero D'Costa (1883-1964)",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "trabajo de grado en historia",
    url: "https://repository.urosario.edu.co/server/api/core/bitstreams/4fc7392a-c2aa-4a84-92ff-4a2402f57200/content",
    summary:
      "En sus páginas 57 y 58 analiza «El cacique Salomón» a partir de la edición de «Historietas» (Manizales, 1934), que cita en sus páginas 181 a 183: es la prueba de una impresión anterior a 1936. Lee la apertura como defensa de la agudeza indígena frente a los cronistas que dudaban de su alma, y la queja de Sugamuxi como testimonio de la inconformidad con la justicia colonial. Transcribe el diálogo de las mitades con la palabra «mano» que falta en las impresiones de 1964 y 1993. Presenta la copla de la peste como «un canto indígena», lectura suya que el texto de Otero no sostiene.",
    limitation:
      "Trabajo de pregrado sobre historiografía; trata la pieza como documento de mentalidades y no discute su carácter literario ni su procedencia oral. Su lectura de la copla contradice la atribución del propio Otero.",
  }),
  gonzalezHistoria2023: source({
    title: "Historia de la provincia de Guane: origen, poblamiento y configuraciones sociales (1540-1795)",
    author: "María Consuelo Moreno González",
    year: 2023,
    type: "tesis doctoral en historia",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/19c96599-1be0-4c77-a9d7-faf78fa4f1b5/content",
    summary:
      "Da el fondo documental del cuerpo santandereano del relato. En la reconstrucción de las encomiendas de la provincia de Guane tras la visita del oidor Jacinto de Vargas Campuzano (1642-1645), registra a un Juan Bautista de Olarte como encomendero de Curití y de la mitad de Lubiguara, en la jurisdicción de Vélez (p. 203). Documenta también la mano de obra mestiza que sustituyó a los tributarios en la región, que es el mundo social del criado deudor, y la historia posterior de la parroquia de Barichara.",
    limitation:
      "No menciona a Guatesique, a Pirinoche ni el episodio. La fecha de su Olarte (década de 1640) no coincide con la que da Otero (fines del XVII), y no se ha comprobado que Lubiguara corresponda a la Dubigara del relato.",
  }),
  simonNoticias1892: source({
    title: "Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales, partes segunda y tercera",
    author: "Fray Pedro Simón",
    year: 1892,
    type: "crónica franciscana del siglo XVII en su primera edición impresa",
    url: "https://archive.org/details/tierrafirmeindias03simbrich",
    summary:
      "Es el «Simón» con quien Otero discute en la primera línea. En la séptima noticia describe el valle de Sogamoso como tierra santa para los muiscas, que no osaban cruzarla sin reverencia por el templo que allí veneraban y por su cacique-sacerdote, y cuenta lo difícil de su conversión. Es el trasfondo de la figura de Sugamuxi, el sacerdote de Iraca que en el relato ya es cristiano, se llama don Alonso y sólo le queda la ironía frente a los jueces.",
    limitation:
      "Crónica de conquista escrita desde la evangelización, publicada por primera vez en Bogotá en 1892 sobre los manuscritos de la Biblioteca Nacional. No trae la anécdota del río ni nada de Dubigara.",
  }),
  saavedraingenioso1615: source({
    title: "El ingenioso hidalgo don Quijote de la Mancha, segunda parte, capítulo XLV",
    author: "Miguel de Cervantes Saavedra",
    year: 1615,
    type: "novela, texto completo en biblioteca digital",
    url: "https://www.gutenberg.org/cache/epub/2000/pg2000.txt",
    summary:
      "En el primer día de gobierno en Barataria, Sancho resuelve el caso del hombre que reclama diez escudos de oro prestados y del viejo que jura haberlos devuelto tras entregarle su cañaheja al acreedor: Sancho manda romper la caña y aparecen los escudos. Es el paralelo más cercano en español del juez rústico que desarma a un deudor burlón con ingenio, frente a la justicia letrada.",
    limitation:
      "Texto literario peninsular; la semejanza es de motivo (deuda negada, juez de ocasión, sentencia ingeniosa). No hay mitades, castas ni azotes, y nada indica que Otero lo tuviera por modelo.",
  }),
  cupaedicion2019: source({
    title: "La edición de la Selección Samper Ortega de Literatura Colombiana. Bibliotecas, editoriales e imprentas en la década de 1930",
    author: "Miguel Ángel Pineda Cupa",
    year: 2019,
    type: "artículo de historia del libro",
    url: "https://www.redalyc.org/journal/2630/263058277003/html/",
    summary:
      "Explica por qué una sátira colonial sobre castas y azotes circuló como lectura oficial: la Biblioteca Aldeana de Colombia, que es el sello del «Leyendas» de 1936, fue la edición en cartilla que el Ministerio de Educación Nacional contrató en 1935 con la Editorial Minerva, por dos mil colecciones destinadas a bibliotecas. Registra además que la Biblioteca Santander de Gustavo Otero Muñoz, iniciada en Bucaramanga en 1932, publicó trabajos de Enrique Otero D'Costa, de modo que el autor circulaba ya en una colección regional.",
    limitation:
      "Historia editorial; no menciona «El cacique Salomón» ni el contenido del volumen de Otero.",
  }),
  ariasFolclor1954: source({
    title: "Folclor santandereano, capítulo de Leyendas: «Veladas campesinas. La Barbacoa · El Trapiche Ardiendo» (Biblioteca Santander, vol. XXIV, tomo II, Bucaramanga, 1954), reproducido en la sección 19 del tomo II de «Mitos y leyendas de Colombia», folios 131-135",
    author: "Juan de Dios Arias",
    year: 1954,
    type: "obra de folclor regional con escena de transmisión oral recordada por el autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=125",
    summary:
      "Es el único registro del trapiche de Nazario y lo da dentro de su escena. La pieza abre con las temporadas de Arias niño en estancias campesinas con su abuela materna; el episodio ocurre de noche en El Volcán, desgranando maíz sobre un cuero de res. Don Crisanto nombra la luz lejana como el trapiche del difunto Nazario, que ya no existe y se deja ver cada año por la misma época. Trae la impiedad de Nazario, las moliendas de semanas sin domingo, el muchacho caído al fondo de la miel, el prensero dormido entre sábado y domingo, el incendio que alcanza casa, potreros y cañales, la sombra entre las llamas y el remate con la Mancarita y Telmo Chacón en la vereda de San José. Cierra con la función que Arias le atribuye: explicar quemas y enseñar a los niños.",
    limitation:
      "No da apellido de don Crisanto, ni vereda o municipio de El Volcán, ni año. Arias supone variantes en otras estancias pero no recoge ninguna. La mitad de la pieza es otra leyenda, la Barbacoa, contada otra noche en otra casa.",
  }),
  investigacionMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo II: «Leyendas y cuentos del folclor», sección 19 «Narraciones del folclor. Departamento de Santander»",
    author: "Eugenia Villa Posse (investigación y compilación), Ediciones IADAP, Instituto Andino de Artes Populares del Convenio Andrés Bello, Quito",
    year: 1993,
    type: "antología institucional con nota de procedencia por sección",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=120",
    summary:
      "Conserva la unidad que Arias le dio al trapiche. La antología publica el capítulo de Leyendas completo y en su orden, de modo que «Veladas campesinas» se lee como una sola pieza con dos leyendas y con su nota al pie que remite a la Mancarita, en vez de un episodio arrancado de su marco. Gracias a eso se ve que el trapiche es la segunda de dos noches y que don Crisanto es el narrador de una escena, no un informante suelto. La nota de cabecera del folio 125 fija la edición de 1954 de la Biblioteca Santander.",
    limitation:
      "Es reproducción, no recolección. La compiladora no comenta la pieza, no localiza El Volcán ni identifica a sus personajes. El número de página del PDF va seis por detrás del folio impreso.",
  }),
  ariasFolclor19542: source({
    title: "Folclor santandereano, capítulo de Leyendas: «La Mancarita», en el tomo II de «Mitos y leyendas de Colombia», folios 127-129",
    author: "Juan de Dios Arias",
    year: 1954,
    type: "obra de folclor regional con registros ajenos citados",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=121",
    summary:
      "Es la leyenda a la que el trapiche remite en su última pregunta, y la nota 7 de Arias manda ahí al lector. El capítulo describe a la Mancarita como la oían de niño a los campesinos de Guanentá: una mujer salvaje, peluda, de pies vueltos, que grita de noche en las selvas; unos la creían tímida y dicen que huye apenas oye gente o perros, otros que roba niños y aun hombres. Esas dos opiniones son las que junta don Crisanto cuando dice que a su compadre Telmo Chacón casi se lo lleva una noche y que lo salvaron los perros.",
    limitation:
      "No menciona la vereda de San José ni a Telmo Chacón, y trata la Mancarita como leyenda propia, sin relación con Nazario. Sirve para entender el remate, no el trapiche.",
  }),
  ariasFolclor19543: source({
    title: "Folclor santandereano, capítulo de Leyendas: «Lo que enseñan las cuevas» (la leyenda de El Colmenero, San Gil), en el tomo II de «Mitos y leyendas de Colombia», folios 138-140",
    author: "Juan de Dios Arias",
    year: 1954,
    type: "obra de folclor regional con relato transmitido por un maestro de escuela",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=132",
    summary:
      "Da, en el mismo libro, otra pena por trabajar en día santo. El muchacho que sube a sacar miel de una colmena en la escarpa del Fonce justo cuando en el pueblo empiezan los oficios del Viernes Santo queda preso en la roca, y su lamento se oye en las noches de invierno a lo largo de la hondonada. Como el trapiche de Nazario, es una culpa contra el calendario sagrado que se vuelve señal visible y repetida para quien pasa por allí, y como él tiene su fecha en el año litúrgico.",
    limitation:
      "El Colmenero trabaja para sí y peca solo; Nazario obliga a sus peones y los accidentes los sufren otros. La leyenda termina en piedra y no en fuego, y Arias no relaciona las dos.",
  }),
  biblicoEvangelio1960: source({
    title: "Evangelio según san Lucas 16, 19-31 (el rico y Lázaro), versión Reina-Valera 1960",
    author: "Texto bíblico, traducción de Casiodoro de Reina revisada por Cipriano de Valera, revisión de 1960 de las Sociedades Bíblicas",
    year: 1960,
    type: "texto religioso de referencia",
    url: "https://www.biblegateway.com/passage/?search=Lucas%2016%3A19-31&version=RVR1960",
    summary:
      "Es la matriz cristiana más cercana a la figura de Nazario, rico y malo con los pobres. En la parábola, el hombre que se vestía de púrpura y banqueteaba cada día mientras el mendigo Lázaro, lleno de llagas, esperaba las migajas a su puerta, aparece después de muerto diciendo que está atormentado en esta llama. Pide que alguien vuelva a avisar a sus cinco hermanos y se le niega. La leyenda santandereana hace lo contrario: al rico condenado se le permite dejarse ver cada año entre las llamas, y su aparición funciona como el aviso que la parábola rehúsa.",
    limitation:
      "La parábola no trata de trabajo, domingo ni trapiche, y el tormento ocurre en el más allá, no en el lugar de la falta. Arias no la cita; el cruce no sale de la obra.",
  }),
  albarracinalma2023: source({
    title: "Un alma en pena aparece entre los vivos: purgatorio y devoción en la segunda mitad del siglo XIX en Colombia (Anuario Colombiano de Historia Social y de la Cultura, vol. 50, n.º 2, pp. 51-78)",
    author: "Ana María Henao Albarracín, Universidad Nacional de Colombia",
    year: 2023,
    type: "artículo arbitrado de historia cultural",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/103741",
    summary:
      "Explica qué significa, en la Colombia católica rural, que don Crisanto diga que allí está penando don Nazario. El artículo reconstruye el informe que el cura de Jamundí, Juan de la Cruz Saavedra, envió a la diócesis de Popayán en octubre de 1900: su hermano Alfonso, un niño de doce años, veía en la sacristía al antiguo párroco León Sardi, ya difunto, que pedía limosnas y misas para salir del purgatorio. Como en El Volcán, el que ve es un niño y el adulto registra lo que el niño cuenta. La autora concluye que estas apariciones servían para inculcar normas y principios cristianos, la misma función que Arias atribuye a la leyenda del trapiche.",
    limitation:
      "Estudia un caso documentado del Valle del Cauca, no de Santander, y un alma que pide misas para salvarse, no un condenado que arde en el lugar de su culpa. No menciona trapiches ni leyendas de hacendados.",
  }),
  pimientoVoces2025: source({
    title: "Voces y relatos desde el trapiche. Tradición oral hecha historia en un ejercicio de museografía digital (Santander. Estudios de Patrimonio, n.º 8, DOI 10.22429/Euc2025.sep.08.17)",
    author: "Óscar Eduardo Rueda Pimiento, Diana Marcela Pedraza Díaz y Sergio Andrés Acosta Lozano, Universidad Pontificia Bolivariana",
    year: 2025,
    type: "artículo arbitrado de patrimonio con trabajo de campo en trapiches",
    url: "https://santanderestudiospatrimonio.unican.es/index.php/sanespat/article/view/247",
    summary:
      "Da nombre y oficio a la gente que la leyenda pone en peligro. El trabajo de campo en los trapiches de Piedecuesta describe la molienda como la etapa en que se juntan el prensero, que mete la caña al molino y extrae el jugo, el hornillero, que alimenta el fuego con bagazo, los relimpiadores y el tolinchero. Es exactamente el puesto del prensero que en la leyenda se duerme pasando caña, y el fuego de la hornilla es el que termina alcanzando la casa y los cañales. El artículo menciona además los riesgos de accidentalidad de estos trapiches, que siguen funcionando.",
    limitation:
      "Estudia memoria productiva y museografía en Piedecuesta hoy, no leyendas: no recoge el trapiche de Nazario ni ningún relato de aparecidos, y los relatos que cita son de trabajadores y familias de la caña, no de espantos.",
  }),
  suarezTipificacion2016: source({
    title: "Tipificación técnica y socioeconómica de trapiches paneleros en el municipio de Ocamonte, Santander: una aplicación de análisis multivariado (Revista Lebret, n.º 8, pp. 243-261)",
    author: "Álvaro Ramírez Suárez y Leidy Ximena Arenas Mejía, Universidad Santo Tomás, Bucaramanga",
    year: 2016,
    type: "artículo arbitrado de economía agraria regional",
    url: "https://revistas.ustabuca.edu.co/index.php/LEBRET/article/view/1696",
    summary:
      "Mide en un municipio del sur de Santander lo que en la leyenda es exceso. Sobre 43 trapiches de Ocamonte, el estudio usa como variables las semanas de molienda al año, la mano de obra familiar no remunerada, la ocasional pagada y la fuerza animal. Encuentra que el 65 % de los trapiches trabaja en un sistema marginal y que la producción panelera del municipio descansa en una tecnología intensiva en mano de obra y fuerza animal. Permite leer las moliendas de semanas y semanas de Nazario como una medida real de la economía panelera de la región, en la que el ritmo lo impone la caña, y no el calendario.",
    limitation:
      "Es un análisis técnico de producción actual; no habla de descanso dominical, accidentes ni tradición oral, y no menciona leyendas.",
  }),
  publica1926: source({
    title: "Ley 57 de 1926, por la cual se establece el descanso dominical y se dictan otras disposiciones sobre legislación obrera",
    author: "Congreso de la República de Colombia (Gestor Normativo del Departamento Administrativo de la Función Pública)",
    year: 1926,
    type: "norma legal",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=13028",
    summary:
      "Fecha el momento en que el domingo que Nazario negaba a sus peones pasó de precepto religioso a obligación de ley. Su artículo 1 declara obligatorio un día de descanso cada seis de trabajo para todo obrero de un establecimiento industrial o comercial, con una duración mínima de veinticuatro horas, y manda que se dé el domingo. La leyenda, contada a Arias en su niñez, castiga como impiedad lo que en su tiempo empezaba a ser también una falta legal.",
    limitation:
      "La ley habla de establecimientos industriales y comerciales y deja excepciones a reglamento; no consta que cubriera el trabajo de molienda en una hacienda. No menciona trapiches ni sirve para fechar la leyenda, que Arias presenta como anterior e imprecisable.",
  }),
  ariasFolclor19544: source({
    title: "Folclor santandereano, capítulo de Leyendas: «La piedra del muerto» (Biblioteca Santander, vol. XXIV, tomo II, Bucaramanga, 1954), reproducido en la sección 19 del tomo II de «Mitos y leyendas de Colombia», folios 129-131",
    author: "Juan de Dios Arias",
    year: 1954,
    type: "obra de folclor regional con relato oído en la infancia, reproducida en antología institucional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=123",
    summary:
      "Es el único registro de la leyenda y lo trae entero. Sitúa la piedra a unos diez kilómetros de Mogotes, sobre la nueva carretera a San Gil, donde la vía se acerca al río hasta la quebrada del Bosque, y la describe como un cadáver amortajado sobre un bloque de basalto. Cuenta la falta completa del rico: ni posada al viajero, ni limosna, ni diezmos ni primicias, ni maíz para el hospital ni caña para el paso de San Isidro Labrador. Trae los perros soltados contra el mendigo, la maldición sin palabras, la tormenta, la petrificación, el ganado que también quedó en piedra y las piedras del cauce que la gente señalaba como baúles, silla, perros y muebles. Añade la casita que en 1954 ya tapaba la vista desde el vehículo y cierra con la hospitalidad mogotana como fruto de esta creencia.",
    limitation:
      "No nombra al narrador ni fecha la recolección: Arias sólo dice que se la contaron de niño la primera vez que pasó por el sitio. No nombra el río en el pasaje de la piedra, no transcribe la maldición y no da ninguna variante. La paginación citable es la de la reproducción de 1993; la del original de 1954 no se conoce.",
  }),
  ariasFolclor19545: source({
    title: "Folclor santandereano, capítulo de Leyendas: «Lagunas encantadas», en el tomo II de «Mitos y leyendas de Colombia», folios 135-137",
    author: "Juan de Dios Arias",
    year: 1954,
    type: "obra de folclor regional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=131",
    summary:
      "Muestra que en la comarca de Mogotes la tormenta se leía como respuesta a una ofensa, que es la lógica de la piedra del muerto. En el pasaje sobre Mogotes, Arias anota que la quema de cohetes en los días de fiesta provocaba un aguacero copioso y que la gente lo atribuía a la cólera de las lagunas bravas de la comarca; en otro lugar del mismo capítulo las lagunas irritadas hacen llover y se desbordan contra quien intenta llevarse sus tesoros. Junto con la nota de la piedra sobre Mogotes como tierra de los rayos, sitúa la tempestad de la leyenda en un clima de creencias local y no sólo bíblico.",
    limitation:
      "Las lagunas bravas castigan por su cuenta, sin Dios de por medio, y no hay en ellas mendigo, rico ni petrificación. El capítulo no menciona la piedra del muerto.",
  }),
  biblicoGenesis1960: source({
    title: "Génesis, capítulo 7 (el diluvio), versión Reina-Valera 1960",
    author: "Texto bíblico, traducción de Casiodoro de Reina revisada por Cipriano de Valera, revisión de 1960 de las Sociedades Bíblicas",
    year: 1960,
    type: "texto religioso de referencia",
    url: "https://www.biblegateway.com/passage/?search=G%C3%A9nesis%207&version=RVR1960",
    summary:
      "Es el paralelo que la propia leyenda invoca. En la descripción de la tormenta Arias escribe que, como en la época del diluvio bíblico, las aguas borraron el pecado de la tierra, y el capítulo 7 del Génesis cuenta justamente cómo se rompieron las fuentes del abismo y se abrieron las cataratas de los cielos para acabar con toda carne. La piedra del muerto reduce ese diluvio universal a una sola casa: arrasa hombres, animales y sembrados de una hacienda y deja al culpable en medio de la corriente.",
    limitation:
      "En el Génesis el castigo es universal y el justo se salva en el arca; en Mogotes no hay salvado que se nombre. Es una traducción moderna; la edición que pudieron conocer los narradores de Arias no se puede fijar.",
  }),
  biblicoGenesis19602: source({
    title: "Génesis, capítulo 19 (Sodoma y la mujer de Lot), versión Reina-Valera 1960",
    author: "Texto bíblico, traducción de Casiodoro de Reina revisada por Cipriano de Valera, revisión de 1960 de las Sociedades Bíblicas",
    year: 1960,
    type: "texto religioso de referencia",
    url: "https://www.biblegateway.com/passage/?search=Genesis%2019&version=RVR1960",
    summary:
      "Reúne en un solo capítulo las dos cosas que hacen la piedra del muerto: una ciudad que maltrata a unos forasteros llegados al anochecer y un castigo que baja del cielo, y un cuerpo que queda convertido en materia mineral, la mujer de Lot vuelta estatua de sal. Permite ver que la leyenda de Mogotes pone en el mismo personaje lo que el Génesis reparte entre Sodoma y la mujer que mira atrás: aquí es el propio inhospitalario quien queda petrificado.",
    limitation:
      "La estatua de sal castiga una desobediencia en la huida, no la falta de hospitalidad. Arias no cita este capítulo, sólo el diluvio, así que el cruce no sale de la obra.",
  }),
  libraryMetamorphoses1922: source({
    title: "Metamorphoses, libro VIII (Baucis y Filemón), traducción de Brookes More",
    author: "Publio Ovidio Nasón; traducción inglesa de Brookes More (Perseus Digital Library, Tufts University)",
    year: 1922,
    type: "texto clásico en biblioteca digital académica",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D8",
    summary:
      "Es el antecedente clásico del castigo por negar posada. Júpiter y Mercurio recorren la tierra como caminantes cansados pidiendo comida y cama, encuentran cerradas las puertas de mil casas y sólo los reciben dos viejos pobres; al subir con ellos al monte, los viejos ven los campos del vecindario tragados por un pantano mientras su choza se vuelve templo. El cierre se parece al de Mogotes: el narrador asegura que la gente de Tiana todavía muestra los dos árboles en que se convirtieron los ancianos, igual que los mogotanos muestran las piedras del cauce.",
    limitation:
      "Ovidio pone el foco en la pareja que acoge y la premia; en Mogotes no hay nadie que abra la puerta. Es una traducción inglesa en verso libre, no el latín, y no prueba ninguna transmisión hacia Santander.",
  }),
  pedrazaAdministrar2020: source({
    title: "Administrar la fe: administración parroquial y régimen de obvenciones en el Nuevo Reino de Granada (villas de San Gil y Socorro, 1780), en Mejía, Danwerth y Albani (eds.), «Normatividades e instituciones eclesiásticas en el Nuevo Reino de Granada, siglos XVI-XIX» (Global Perspectives on Legal History 13)",
    author: "Julián Andrei Velasco Pedraza, Max Planck Institute for European Legal History",
    year: 2020,
    type: "capítulo académico de historia del derecho eclesiástico, acceso abierto",
    url: "https://www.lhlt.mpg.de/2287498/GPLH13-gesamt-suchbar-mit-Lesezeichen.pdf#page=161",
    summary:
      "Explica qué deja de pagar el rico de la leyenda y por qué eso pesaba en esa comarca. El capítulo estudia las relaciones de rentas parroquiales que se levantaron hacia 1780 en las villas de San Gil y Socorro, la región a la que pertenece Mogotes, y muestra que los curatos vivían de los novenos de los diezmos, de las primicias, de las fiestas, las cofradías y las limosnas. Define las primicias como una renta suplementaria del diezmo formada por los primeros frutos de las cosechas. Negarse a pagarlas no era sólo tacañería: era dejar sin sustento la parroquia de todos.",
    limitation:
      "Trata del siglo XVIII y de la administración de las rentas, no de leyendas; no menciona Mogotes ni la piedra. El diezmo dejó de ser obligatorio en la Nueva Granada a mediados del siglo XIX, así que no puede datar la leyenda, sólo explicar la falta que describe.",
  }),
  redaccionCientos2009: source({
    title: "Cientos de campesinos boyacenses rinden tributo a San Isidro Labrador con comida, animales y dinero",
    author: "El Tiempo (redacción, archivo)",
    year: 2009,
    type: "crónica de prensa nacional",
    url: "https://www.eltiempo.com/archivo/documento/CMS-5270347",
    summary:
      "Ilustra, en el departamento vecino, la costumbre que el rico de Mogotes se negaba a cumplir cuando no daba ni una caña para el paso de San Isidro Labrador. La crónica describe la procesión de labriegos del municipio de Boyacá que llevan al santo lo mejor de sus cosechas, las huertas armadas en la plaza con lo que aporta cada vereda y el remate que hace el sacerdote al final de la tarde, con destino a las necesidades de la parroquia. Es la ofrenda de primeros frutos convertida en fiesta colectiva.",
    limitation:
      "Es prensa de 2009 y de Boyacá, no de Santander, y no habla de la leyenda ni del «paso» como imagen procesional. Sirve para entender la costumbre, no para fecharla en Mogotes.",
  }),
  investigacionMitos19933: source({
    title: "Mitos y leyendas de Colombia, tomo II: «Leyendas y cuentos del folclor», sección 19, Departamento de Santander: «Lagunas encantadas», de Juan de Dios Arias, Folclor santandereano (Biblioteca Santander, vol. XXIV, Bucaramanga, 1954)",
    author: "Juan de Dios Arias; Eugenia Villa Posse (investigación y compilación), IADAP, Quito",
    year: 1993,
    type: "capítulo de folclorista regional reproducido en antología institucional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=129",
    summary:
      "Es el único texto que reúne las ocho lagunas, folios 135 a 138. Arias abre con la frase que explica la mezcla del ciclo —«Superstición indígena y deslumbramiento ingenuo de los iberos»— y enumera «informes particulares» con municipio: la laguna bajo la Casa de Mercado de Bucaramanga amansada con una imagen de San Mateo; la del Peñón de la Luchata en Galán, cavada por arte diabólico, con su totumo de frutos de oro y su clueca de oro guardados por un mohán; las cuatrocientas arrobas de sal que dejaron al Socorro sobre dos vigas de oro; la serpiente con cabeza de ternero del Pantano de Girón y el cáliz del sacerdote; la doncella de catorce años de Alto Nogales; los cohetes de Mogotes; la flor del lago de Ortices, medida «según nos informaron»; y el diálogo de Los Santos copiado de Ancízar.",
    limitation:
      "Villa Posse reproduce, no recoge: la paginación citable es la del tomo de 1993 y no la de la edición de 1954, que no está digitalizada. Arias no nombra a ningún informante ni fecha sus encuestas, y en la entrada de Alto Nogales la frase «De ella salían también» queda sin complemento, sin que se pueda saber si el salto es del original o de la reproducción.",
  }),
  culturaPeregrinacion1853: source({
    title: "Peregrinación de Alpha (edición digital de la Biblioteca Básica de Cultura Colombiana)",
    author: "Manuel Ancízar; presentación de Verónica Uribe Hanabergh; Ministerio de Cultura y Biblioteca Nacional de Colombia",
    year: 1853,
    type: "relato de viaje de la Comisión Corográfica, en edición digital institucional",
    url: "https://siise.bibliotecanacional.gov.co/BBCC/Documents/View/265",
    summary:
      "Es la fuente de la octava laguna y permite cotejar la transcripción de Arias. En el capítulo de Los Santos, Ancízar cuenta que los vecinos tomaron a los comisionados por guardas del contrabando y las salinas a causa de los barómetros enfundados, y que entre los curiosos apareció uno «letrado en veredas y cursado en viajes» que les habló de la Laguna del Monte, a cinco leguas, en el extremo norte de la Mesa. Trae el diálogo entero: la alusión del viajero a la laguna de Tota desencantada por un inglés que cazaba venados, las calabazas blancas que el forastero rumbo a La Florida echa en la ruana, la tormenta, las dos sierpes amarillas y la espera de un sacerdote que conjure el agua.",
    limitation:
      "Ancízar es un viajero ilustrado que no cree lo que oye y lo dice: atribuye estas consejas a «ciertos hombres interesados en propagar semejantes consejas». No da nombre al vecino. La edición digital es de 2016 sobre la de 1853; la paginación de la edición oficial de 1942 que maneja Arias no es comparable con ella.",
  }),
  cubillosEntre2012: source({
    title: "Entre el agua y el oro: tensiones y reconfiguraciones territoriales en el municipio de Vetas, Santander, Colombia",
    author: "Emerson Andrés Buitrago Hernández; dirección de Astrid Ulloa Cubillos, Departamento de Antropología, Universidad Nacional de Colombia",
    year: 2012,
    type: "tesis de pregrado en antropología con trabajo de campo",
    url: "https://repositorio.unal.edu.co/handle/unal/11612",
    summary:
      "Es el mismo motivo, recogido en campo sesenta años después y en otro municipio de Santander. En las páginas 89 y 90, doña Aura cuenta que la laguna de Pajarito era la más brava de Vetas, que se tragaba a las personas y a las mulas cargadas de oro, y que por eso un cura la maldijo echándole un cáliz: el mismo remedio que Arias registra en la vereda del Pantano de Girón. Añade que a las lagunas no se les tiran piedras porque se ponen bravas y mandan a llover, como la de Alto Nogales, y que en la de Cunta aparecía un toro dorado y en otras un niño de oro jugando con canicas, parientes de la clueca de oro de Galán.",
    limitation:
      "Es trabajo de pregrado centrado en el conflicto minero del páramo de Santurbán, no en la narrativa oral, y los relatos aparecen como ilustración del vínculo con el agua. Vetas no es ninguno de los ocho municipios de Arias: sirve como paralelo, no como otra versión de las mismas lagunas.",
  }),
  parraRomeroquien2022: source({
    title: "¿De quién es el páramo de Santurbán? Ancestralidad minera como narrativa de defensa del territorio en el municipio de Vetas, Santander",
    author: "Adela Parra-Romero, Revista CS (Universidad Icesi), n.º 36",
    year: 2022,
    type: "artículo de revista académica arbitrada",
    url: "https://www.icesi.edu.co/revistas/index.php/revista_cs/en/article/download/4742/4479/24360",
    summary:
      "Retoma el testimonio de la laguna de Pajarito, maldecida con un cáliz porque se tragaba personas y cargas de oro, y lo lee junto a su propio trabajo de campo: en Vetas las lagunas se enojan, hacen llover y envían neblina para estorbar el camino, y nadie explota minas ni cultiva cerca de ellas. Muestra que la laguna brava de Arias no es una curiosidad de 1954 sino una figura que en el páramo santandereano sigue regulando qué se puede hacer junto al agua.",
    limitation:
      "Es un estudio de ecología política y cita la laguna de Pajarito de segunda mano, desde Buitrago 2012. La página de presentación del artículo en el sitio de la revista mostraba al consultarla texto publicitario ajeno incrustado; por eso se cita la URL de descarga del texto completo, que está limpia.",
  }),
  culturacarnero1636: source({
    title: "El carnero (edición digital de la Biblioteca Básica de Cultura Colombiana)",
    author: "Juan Rodríguez Freyle; Ministerio de Cultura y Biblioteca Nacional de Colombia",
    year: 1636,
    type: "crónica colonial neogranadina en edición digital institucional",
    url: "https://siise.bibliotecanacional.gov.co/BBCC/Documents/View/274",
    summary:
      "Da el antecedente colonial de dos entradas de Arias. Describe la ceremonia de Guatavita: el heredero, untado de tierra pegajosa y espolvoreado de oro, salía en una balsa de juncos a ofrecer oro y esmeraldas en mitad de la laguna, que es la ofrenda indígena de la que Arias parte en su introducción. Y cuenta que la fama del tesoro llevó a Antonio de Sepúlveda a capitular con Felipe II el desagüe de la laguna: sacó de las orillas más de doce mil pesos, no logró un segundo desagüe y murió pobre. Es el mismo empeño de secar el agua para llegar al oro que en el Socorro se hace con sal.",
    limitation:
      "Rodríguez Freyle escribe entre 1636 y 1638 sobre la sabana de Bogotá y dice haber oído la ceremonia a un cacique de Guatavita; no se refiere a Santander. El paralelo es de motivo, no de transmisión: nada prueba que la conseja del Socorro derive de Guatavita.",
  }),
  colombianaPeregrinacion2019: source({
    title: "2.1 Peregrinación de Alpha, en la exposición Manuel Ancízar de la Biblioteca Virtual Colombiana",
    author: "Biblioteca Virtual Colombiana, Facultad de Ciencias Humanas, Universidad Nacional de Colombia",
    year: 2019,
    type: "exposición documental de biblioteca universitaria",
    url: "https://www.humanas.unal.edu.co/bvc/exhibits/show/manuel_ancizar/nuestros_investigadores_resalt/peregrinacion_de_alpha",
    summary:
      "Fecha la entrada más antigua del capítulo de Arias. Informa que la Peregrinación empezó a publicarse en la sección de variedades de El Neo-Granadino el 21 de mayo de 1850 y terminó el 21 de diciembre de 1851, que se escribió sobre la marcha de la Comisión Corográfica y que sólo en 1853 se reunió en libro, en la imprenta de Echeverría Hermanos. Con eso, el diálogo de la laguna del monte de Los Santos queda fechado un siglo antes que el resto de las lagunas.",
    limitation:
      "Es una página de presentación con enlaces a capítulos, libretas y cartas; no comenta el episodio de Los Santos ni las lagunas. El año es aproximado, porque la página no declara fecha de publicación.",
  }),
  pinzonLiteratura2018: source({
    title: "«Literatura santandereana». Visibilidad, concepciones y evocaciones",
    author: "Luis Rubén Pérez Pinzón, Estudios de Literatura Colombiana, n.º 43, Universidad de Antioquia",
    year: 2018,
    type: "artículo de revista académica arbitrada",
    url: "https://revistas.udea.edu.co/index.php/elc/article/download/334302/20790243/152950",
    summary:
      "Sitúa a quien reunió estas lagunas. Cuenta a Juan de Dios Arias entre los escritores santandereanos de mediados del siglo XX que los autores de la región siguen recordando, junto a Mario Acevedo Díaz y Horacio Rodríguez Plata, y cita un juicio suyo de 1943 sobre el pueblo santandereano que fantasea en las noches de tertulia casera y fija en imágenes y refranes sus tradiciones. Esa es la mirada con que Arias arma el inventario: la de un letrado que colecciona lo que el vulgo de aldeas y veredas cuenta.",
    limitation:
      "Es un panorama de la literatura regional basado en una encuesta a escritores de 2017; no menciona Folclor santandereano ni ninguna de las lagunas, y no aporta datos sobre cómo recogió Arias su material.",
  }),
  totalFolklore1954: source({
    title: "Folklore santandereano (ficha de la obra)",
    author: "Juan de Dios Arias; Fundación El Libro Total",
    year: 1954,
    type: "ficha de biblioteca digital regional",
    url: "https://www.ellibrototal.com/ltotal/ficha.jsp?idLibro=298",
    summary:
      "Confirma que la obra de Arias circula hoy en una biblioteca digital de Bucaramanga, y describe su método: una recopilación hecha «con ayuda del magisterio de todo el departamento», que buscaba el sello de cada provincia y la influencia de las culturas que formaron la región. Esa influencia mezclada es la que el capítulo de las lagunas formula al hablar de superstición indígena y deslumbramiento ibérico.",
    limitation:
      "La ficha describe una obra de coplas y romances, y el lector de la obra no cargó fuera de navegador, así que no se pudo comprobar que contenga el capítulo de leyendas. Puede tratarse de otra parte del volumen o de otra obra del mismo autor.",
  }),
  investigacionMitos19934: source({
    title: "Mitos y leyendas de Colombia, tomo II: «Leyendas y cuentos del folclor», sección 19, Departamento de Santander: «Lo que enseñan las cuevas», de Juan de Dios Arias, Folclor santandereano (Biblioteca Santander, vol. XXIV, Bucaramanga, 1954)",
    author: "Juan de Dios Arias; Eugenia Villa Posse (investigación y compilación), IADAP, Quito",
    year: 1993,
    type: "capítulo de folclorista regional reproducido en antología institucional",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=132",
    summary:
      "Es la única fuente de las seis cuevas, folios 138 a 142. Trae entre comillas la leyenda de El Colmenero tal como la escribió a pedido de Arias un maestro de escuela: el rapaz que trepa con ayuda de Satanás a la hora de los Oficios del Viernes Santo, queda clavado en la roca sobre el Fonce y se ve todavía en una piedra blanquecina al oriente de San Gil. Resume luego el Cenicero de Bolívar, con Miguel Seco, la fórmula «Ábrete toronjil, ciérrate culantrillo» y el hombre enchapado en oro; La Calentana con su San Antonio; el Biato de Buena Vista y su baúl bajo el sombrero; la cueva del indio con sus huesos y gargantillas; y Cachalú, cuyo oro doró el altar mayor de Oiba. Arias mismo sugiere el parentesco con el «sésamo, ábrete» y con el Dorado.",
    limitation:
      "Villa Posse reproduce la edición de 1954 sin cotejo declarado y la paginación citable es la de 1993. Sólo el Colmenero tiene informante, y sin nombre; las demás cuevas no tienen narrador, fecha ni, en el caso de la cueva del indio, lugar.",
  }),
  gonzalezArqueologia2012: source({
    title: "Arqueología del Nororiente colombiano. Los Teres: un sitio de asentamiento de las culturas prehispánicas Preguane y Guane",
    author: "Leonardo Moreno González, Anuario de Historia Regional y de las Fronteras, Universidad Industrial de Santander",
    year: 2012,
    type: "artículo de revista académica arbitrada",
    url: "https://revistas.uis.edu.co/index.php/anuariohistoria/article/download/3056/3939?inline=1",
    summary:
      "Da el fondo material de lo que Arias llama la cueva del indio, «probablemente un cementerio indígena». Reconstruye la historia de la arqueología guane desde el reporte de los hermanos Bárcenas, guaqueros que hacia 1939 encontraron en una cueva de la Mesa de Los Santos cuerpos momificados, textiles, huesos y vasijas; el rescate encargado en 1940 a Justus Schottelius, que halló en esos cementerios restos humanos, cestería, instrumentos musicales, adornos y metalurgia; y las excavaciones de Martín Carvajal en 1941 y de Gabriel Giraldo Jaramillo en la Cueva del Indio de Los Santos. Son los mismos huesos, vasijas y piezas de oro que en la conseja protegen los indios.",
    limitation:
      "El artículo trata del sitio de Los Teres y no menciona leyendas. Que la Cueva del Indio excavada en Los Santos sea la «cueva del indio» de Arias no se puede afirmar: el primario no la localiza.",
  }),
  wrigleyBaba2011: source({
    title: "Ali Baba, or the Forty Thieves",
    author: "Anónimo; pliego de J. Wrigley, Nueva York, en Project Gutenberg (eBook n.º 37679)",
    year: 2011,
    type: "cuento popular en pliego del siglo XIX, edición digital",
    url: "https://www.gutenberg.org/ebooks/37679",
    summary:
      "Sostiene el paralelo que Arias propone para el Cenicero. La roca de los ladrones se abre con «Open, Sesame» y se cierra con «Shut, Sesame»; Cassim entra, encuentra más tesoro del que esperaba, la codicia le hace olvidar la palabra y los ladrones lo matan dentro, como los indios enchapan en oro a Miguel Seco cuando quiere echar mano de sus riquezas. El pliego trae además el recurso que reaparece en Cachalú: Morgiana lleva con los ojos vendados al zapatero Mustapha hasta la casa donde ha de coser el cuerpo y lo devuelve del mismo modo para que no pueda rehacer el camino.",
    limitation:
      "Es un resumen popular en inglés, sin fecha impresa, de un cuento que Galland añadió a Las mil y una noches en el siglo XVIII; el año es el de la edición digital. Arias no dice por qué vía conoció el cuento, y el parecido no prueba transmisión.",
  }),
  cardenasArroyoAnalisis2021: source({
    title: "Análisis de algunas fechas radiocarbónicas de momias arqueológicas colombianas",
    author: "Felipe Cárdenas-Arroyo, Revista de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales, vol. 45, n.º 174",
    year: 2021,
    type: "artículo de revista científica arbitrada",
    url: "http://www.scielo.org.co/scielo.php?pid=S0370-39082021000100010&script=sci_arttext&tlng=es",
    summary:
      "Pone fechas a los cementerios en cueva que la conseja convierte en tesoros guardados. Reúne cinco fechas de radiocarbono de momias de la Mesa de Los Santos, entre 700 y 1600 de nuestra era, y argumenta que las cuevas usadas como cementerios acumulaban cuerpos durante decenios o siglos. Es la escala de tiempo que hay detrás de la frase de Arias según la cual casi todas las leyendas de cuevas santandereanas parten de que allí vivieron o se enterraron los indios.",
    limitation:
      "SciELO Colombia sólo publica por http. El artículo es de bioarqueología y no menciona leyendas ni ninguna de las seis cuevas de Arias; sus fechas son de la Mesa de Los Santos y no se pueden trasladar a Bolívar, San Gil u Oiba.",
  }),
  tarazonaturismo2020: source({
    title: "El turismo como propuesta patrimonial: de los museos arqueológicos a las nuevas alternativas lúdicas en la actual provincia de Guanentá (Santander, Colombia)",
    author: "Álvaro Acevedo Tarazona y María Consuelo Moreno González, Memorias. Revista Digital de Historia y Arqueología desde el Caribe, n.º 40, Universidad del Norte",
    year: 2020,
    type: "artículo de revista académica arbitrada",
    url: "https://www.redalyc.org/journal/855/85569988004/html/",
    summary:
      "Muestra en qué se han convertido hoy las cuevas funerarias de la región: las Cuevas del Indio y del Guerrero de la Mesa de Los Santos son parada obligada del turismo en la provincia de Guanentá, y sus momias se exhiben en los museos regionales como prueba de un pasado guane con el que se construye el «ser santandereano». Es el destino contemporáneo de la cueva que, en la conseja de Arias, castigaba a quien entraba a llevarse lo de los indios.",
    limitation:
      "Estudia el turismo patrimonial y no recoge relatos orales ni menciona a Arias ni a las cuevas de Bolívar, San Gil u Oiba.",
  }),
  investigacionMitos19935: source({
    title: "Mitos y leyendas de Colombia, vol. II, sección 17 «Varias regiones. Leyendas»: «Tal para cual», de Enrique Otero D'Costa",
    author: "Eugenia Villa Posse (investigación y compilación)",
    year: 1993,
    type: "antología institucional que reproduce un libro de leyendas de autor",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620#page=7",
    summary:
      "Es el texto completo, en los folios 9 a 12, y la pieza que abre la sección. De aquí sale todo el relato: el hidalgo de Girón con su nombre entero y su rutina de chocolate, siesta y rosario; el cacaotal heredado del valle del Río de Oro; el coto «padre de todos los cotos» y la envidia del sacristán Cirilo; el tabardillo, los santos óleos y el refrán de la abuela sobre ñor Seguro; el juramento ante el Santo Cristo por los pecados pasados, presentes y futuros a cambio de medio cacaotal; la escritura ante el Escribano Público y de Cabildo; las dos objeciones de la mujer; la negativa de Anselmo a destratarse y el final supuesto en el cielo. La cabecera de la sección declara que «muchas» de estas leyendas se oyeron a campesinos y trae la ficha del libro de 1936.",
    limitation:
      "Es reproducción de 1993 con erratas de composición («pescados» por pecados) y no un facsímil del original de Minerva. La paginación citable es la del tomo; el PDF va dos páginas por detrás de los folios. No identifica narrador ni lugar de escucha para esta pieza.",
  }),
  societyRemaines1881: source({
    title: "Remaines of Gentilisme and Judaisme, 1686-87",
    author: "John Aubrey; ed. James Britten (Folklore Society)",
    year: 1881,
    type: "apuntes de anticuario del siglo XVII, edición crítica del XIX",
    url: "https://archive.org/stream/remainesofgentil00aubruoft/remainesofgentil00aubruoft_djvu.txt",
    summary:
      "Trae el paralelo más preciso del motivo: en el condado de Hereford, al sacar el cadáver, se entregaba a un pobre sobre el cuerpo una hogaza, un cuenco de cerveza y seis peniques, y a cambio tomaba sobre sí «all the Sinnes of the Defunct». El mismo Aubrey lo relaciona con el macho cabrío del Levítico 16. Sirve para medir lo que el relato de Girón exagera: el pago existe en los dos, pero allí se cobra por culpas cerradas y aquí se firman también las futuras.",
    limitation:
      "Testimonio inglés, de un solo anticuario, sobre una práctica cuya extensión discuten los folcloristas. No hay ninguna relación de préstamo con Santander; es comparación de motivo.",
  }),
  carrasquilladiestra1897: source({
    title: "En la diestra de Dios Padre",
    author: "Tomás Carrasquilla",
    year: 1897,
    type: "cuento de autor sobre materia oral antioqueña, texto completo en biblioteca digital",
    url: "https://www.textos.info/tomas-carrasquilla/en-la-diestra-de-dios-padre/ebook",
    summary:
      "Es el paralelo colombiano de la salvación tramitada con papeles: el cielo resuelve el pleito de las almas que Peralta le gana al diablo a las cartas con un escrito que firman santo Tomás de Aquino y santa Teresa como «mayores d'edá, y del vecindario del Cielo», con fórmula de notaría. Como en Girón, un hombre simple termina en la gloria por la vía de un documento, y el humor sale de aplicar el derecho civil a la economía de la gracia.",
    limitation:
      "Texto literario de autor, antioqueño y no santandereano, reproducido en una biblioteca digital sin aparato crítico; no se indica la edición de base. No hay pacto de pecados entre vivos ni relación comprobada con Otero.",
  }),
  bastidasSanchezHistoria2018: source({
    title: "Historia del bocio endémico, desde Sheng-Nung hasta los programas de yodación universal de la sal en Latinoamérica",
    author: "Hernando Vargas-Uricoechea; María Virginia Pinzón-Fernández; Beatriz Eugenia Bastidas-Sánchez",
    year: 2018,
    type: "artículo de revisión histórica en revista médica",
    url: "https://revistas.ces.edu.co/index.php/medicina/article/view/4560",
    summary:
      "Documenta que el coto del relato no es un adorno: en la Nueva Granada se escribía sobre él desde 1794, cuando el Papel Periódico de Santa Fe publicó unas «Reflexiones sobre la enfermedad que vulgarmente se llama coto»; el estudio nacional de fines de los años cuarenta midió una prevalencia del 53 %, con zonas por encima del 80 %, y la yodación de la sal se estableció en 1947. Explica además la palabra coto, que deriva de una voz quechua.",
    limitation:
      "Historia médica general de América Latina; no menciona Girón ni el relato, y no discute el estigma de «bobo» que la copla asocia al cotudo.",
  }),
  monteroPoliticas2012: source({
    title: "Políticas sanitarias y situación actual del bocio endémico: el caso de Colombia",
    author: "María Victoria Valero-Bernal; Roberto Franco Vega; Angélica María Chaves; Juan Sebastián Montero",
    year: 2012,
    type: "artículo de salud pública",
    url: "https://revistas.unal.edu.co/index.php/revfacmed/article/view/38443",
    summary:
      "Completa el fondo sanitario del relato con la cronología de las políticas: la recomendación de Boussingault de usar sal de fuentes yodadas para prevenir el coto, los trabajos de Socarrás sobre «coto y cretinismo en Colombia» y la Ley 44 de 1947 que organizó la yodación. Permite situar la pieza de 1934-1936 en el momento en que el coto todavía era rasgo común de las montañas santandereanas y materia de chiste.",
    limitation:
      "Artículo de política sanitaria contemporánea. No trata el folclor ni la región de Girón en particular.",
  }),
  gatewayLevitico1960: source({
    title: "Levítico 16 (Reina-Valera 1960)",
    author: "Bible Gateway",
    year: 1960,
    type: "texto bíblico en edición digital",
    url: "https://www.biblegateway.com/passage/?search=Leviticus%2016&version=RVR1960",
    summary:
      "El rito del día de la expiación, con el macho cabrío «por Azazel» sobre el que se confiesan las culpas del pueblo antes de enviarlo al desierto, es el modelo que Aubrey invoca para el comedor de pecados y el trasfondo más antiguo de la idea de que la culpa puede pasar a otro. En el relato de Girón esa transferencia se vuelve contrato privado entre compadres, con precio y escritura.",
    limitation:
      "Texto religioso de referencia, citado aquí sólo como fondo del motivo. No hay relación directa con el relato ni con Santander.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  gatewayReyes1960: source({
    title: "1 Reyes 3:16-28 (Reina-Valera 1960)",
    author: "Bible Gateway",
    year: 1960,
    type: "texto bíblico en edición digital",
    url: "https://www.biblegateway.com/passage/?search=1%20Reyes%203%3A16-28&version=RVR1960",
    summary:
      "Es la referencia del título: el rey ordena «Partid por medio al niño vivo, y dad la mitad a la una, y la otra mitad a la otra». La sentencia de Guatesique repite la operación de partir por mitades para resolver un caso, pero la invierte: Salomón no llega a dividir, el cacique divide en serio y deja la otra mitad al encomendero.",
    limitation:
      "Texto religioso de referencia; sólo sostiene la alusión del título, no ninguna relación de préstamo.",
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

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickSantanderClassicFolkloreSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickSantanderClassicFolkloreSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = santanderClassicFolkloreSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickSantanderClassicFolkloreSourcesHeredadas(slug) {
  const keys = santanderClassicFolkloreSourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: falta selección de fuentes.`);
  return keys.map((key) => {
    const selected = santanderClassicFolkloreSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
