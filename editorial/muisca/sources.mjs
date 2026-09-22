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

export const muiscaSources = {
  villa: source({
    title: "Mitos y leyendas de Colombia, vol. III: región Andina",
    author: "Eugenia Villa Posse",
    year: 1993,
    type: "compilación crítica",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Ordena relatos muiscas, transcribe fuentes y advierte cuándo una figura o episodio no constituye propiamente un mito.",
    limitation:
      "Es una compilación moderna y depende en gran medida de crónicas coloniales y publicaciones anteriores.",
  }),
  simon: source({
    title:
      "Noticias historiales de las conquistas de Tierra Firme en las Indias occidentales, tomo II",
    author: "Fray Pedro Simón",
    year: 1892,
    originalYear: 1627,
    type: "crónica colonial",
    url: "https://archive.org/details/tierrafirmeindias02simbrich",
    summary:
      "Conserva algunas de las noticias coloniales más extensas sobre autoridades, divinidades, ceremonias y relatos muiscas.",
    limitation:
      "Es una voz evangelizadora del siglo XVII: traduce categorías indígenas como idolatría, demonio o superstición.",
  }),
  piedrahita: source({
    title: "Historia general de las conquistas del Nuevo Reino de Granada",
    author: "Lucas Fernández de Piedrahita",
    year: 1688,
    type: "crónica colonial",
    url: "https://www.cervantesvirtual.com/obra/historia-general-de-las-conquistas-del-nuevo-reino-de-granada-a-las-s-c-r-m-de-d-carlos-segundo-rey-de-las-espanas-y-de-las-indias-1166129/",
    summary:
      "Ofrece una versión colonial amplia de gobernantes, guerras, genealogías y leyendas del altiplano.",
    limitation:
      "Fue escrita más de un siglo después de la conquista y mezcla noticia, tradición historiográfica y composición literaria.",
  }),
  gamboaSenores: source({
    title: "Los señores muiscas",
    author: "Jorge Augusto Gamboa Mendoza",
    year: 1993,
    type: "historia crítica",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-44/los-senores-muiscas",
    summary:
      "Explica la organización política muisca y cuestiona la imagen de un imperio uniforme gobernado por reyes absolutos.",
    limitation:
      "Es una síntesis histórica; no pretende fijar por sí sola la forma de cada relato mítico.",
  }),
  gamboaArqueologiaHistoria: source({
    title:
      "Los muiscas en los siglos XVI y XVII: miradas desde la arqueología y la historia",
    author: "Jorge Augusto Gamboa Mendoza, editor",
    year: 2008,
    type: "volumen académico interdisciplinario",
    url: "https://ediciones.uniandes.edu.co/gpd-los-muiscas-en-los-siglos-xvi-y-xvii-miradas-desde-la-arqueologia-y-la-historia-9789586953481-67f86154e57c4.html",
    summary:
      "Reúne investigación arqueológica e histórica que corrige modelos simplificadores sobre sociedad, poder y territorio muiscas.",
    limitation:
      "Sus capítulos tratan problemas diversos y no todos se refieren directamente al personaje o cuento de cada página.",
  }),
  cobo: source({
    title: "The Muisca: Chiefdoms in Transition",
    author: "Juan Fernando Cobo Betancourt",
    year: 2024,
    type: "síntesis académica reciente",
    url: "https://doi.org/10.1017/9781009314046.003",
    summary:
      "Sitúa la sociedad muisca dentro de procesos históricos y transformaciones coloniales, evitando verla como una cultura inmóvil.",
    limitation:
      "Es una síntesis en inglés y no constituye una fuente narrativa directa para cada mito.",
  }),
  correa: source({
    title: "El sol del poder: simbología y política entre los muiscas del norte de los Andes",
    author: "François Correa Rubio",
    year: 2004,
    type: "antropología",
    url: "https://books.google.com/books/about/El_sol_del_poder.html?id=OCyF3XmjprAC",
    summary:
      "Analiza relaciones entre cosmología, parentesco, territorio y autoridad en materiales muiscas.",
    limitation:
      "Su interpretación antropológica no debe confundirse con una transcripción neutral de una tradición oral.",
  }),
  planBosa: source({
    title: "Plan de vida de la comunidad indígena Muisca de Bosa",
    author: "Cabildo Indígena Muisca de Bosa",
    type: "memoria y planeación comunitaria",
    url: "https://historico.gobiernobogota.gov.co/sites/gobiernobogota.gov.co/files/control/plan_de_vida_muisca-transparencia.pdf",
    summary:
      "Expresa desde una comunidad muisca contemporánea la relación entre territorio, memoria, familia, educación y continuidad colectiva.",
    limitation:
      "Es una voz comunitaria actual; no se usa para atribuirle retrospectivamente una versión prehispánica exacta a un relato.",
  }),
  planSesquile: source({
    title: "Plan de vida de la comunidad Mhuysqa de Sesquilé",
    author: "Comunidad Mhuysqa de Sesquilé",
    year: 2012,
    type: "memoria y planeación comunitaria",
    url: "https://www.sesquile-cundinamarca.gov.co/Transparencia/PublishingImages/Paginas/Estudios-Investigaciones-y-otras-Publicaciones/Plan%20de%20vida%20de%20la%20comunidad%20Mhuysqa.pdf",
    summary:
      "Documenta una recuperación comunitaria contemporánea en torno a territorio, espiritualidad, educación y lagunas sagradas.",
    limitation:
      "No es una ventana directa e inalterada al siglo XVI; habla desde un proceso vivo de recomposición y memoria.",
  }),
  caminosSuba: source({
    title: "Caminos de la memoria Muisca de Suba",
    author: "Cabildo Indígena Muisca de Suba",
    type: "memoria comunitaria",
    url: "https://www.bibliotecadigitaldebogota.gov.co/resources/4159796/",
    summary:
      "Presenta recorridos, voces y lugares de memoria desde el Cabildo Muisca de Suba.",
    limitation:
      "Su escala es territorial y contemporánea; no confirma por sí sola episodios narrados por cronistas.",
  }),
  minculturaMuisca: source({
    title: "Caracterización del pueblo Muisca",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20MUISCA.pdf",
    summary:
      "Resume presencia territorial, historia, población y procesos organizativos contemporáneos del pueblo muisca.",
    limitation:
      "Es un documento general e institucional, no una edición crítica de mitos ni una voz comunitaria única.",
  }),
  banrepMuisca: source({
    title: "Muisca",
    author: "Enciclopedia del Banco de la República",
    type: "síntesis histórica y cultural institucional",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=Muisca",
    summary:
      "Resume territorio, organización, economía, orfebrería, textiles y transformaciones históricas de los muiscas.",
    limitation:
      "Es una síntesis general; no sustituye la lectura crítica de la crónica que nombra a un personaje.",
  }),
  garcia: source({
    title: "Érase una vez entre los chibchas",
    author: "Alfredo García Giraldo",
    year: 1984,
    type: "literatura juvenil colombiana",
    url: "https://books.google.com.co/books/about/Erase_una_vez_entre_los_chibchas.html?id=nKtsAAAAMAAJ",
    summary:
      "Es la fuente literaria directa de varios relatos modernos protagonizados o enmarcados por Sesquilé y Chypuy.",
    limitation:
      "No es una transcripción de tradición oral antigua: dramatiza, enlaza e inventa escenas para una obra juvenil de autor.",
  }),
  garciaCatalog: source({
    title: "Registro bibliográfico de Érase una vez entre los chibchas",
    author: "Biblioteca Departamental Jorge Garcés Borrero",
    type: "catálogo bibliográfico",
    url: "https://consultas.bibliovalle.gov.co/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=14972",
    summary:
      "Identifica autoría, edición, serie de literatura juvenil y contenido de la obra de García Giraldo.",
    limitation:
      "El catálogo demuestra procedencia editorial, pero no evalúa por sí mismo la historicidad de cada episodio.",
  }),
  gomezAldana: source({
    title: "La llamada Lengua Báculo de los muisca: una revisión crítica",
    author: "Diego Fernando Gómez Aldana",
    type: "investigación lingüística y crítica de fuentes",
    url: "https://zaquenzipa.org/ewExternalFiles/Lengua%20Baculo%20final.pdf",
    summary:
      "Rastrea pasajes presentados como tradición muisca hasta su antecedente literal en la obra de García Giraldo.",
    limitation:
      "Su objeto principal es una supuesta escritura muisca; sirve aquí para establecer procedencia, no para reconstruir todos los relatos.",
  }),
  montana: source({
    title: "Mitos, leyendas y tradiciones del folclor del Lago de Tota",
    author: "Lilia Montaña",
    year: 1970,
    type: "compilación y reelaboración literaria de tradición campesina",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Conserva los ciclos narrativos del origen de Tota, Toquechá y Toquilla, y el castigo de Chaquén.",
    limitation:
      "La propia historia editorial del texto obliga a reconocer una elaboración literaria intensa sobre materiales recogidos en la región.",
  }),
  montanaCatalog: source({
    title:
      "Registro bibliográfico de Mitos, leyendas y tradiciones del folclor del Lago de Tota",
    author: "Jardín Botánico de Bogotá José Celestino Mutis",
    type: "catálogo bibliográfico",
    url: "https://catalogo.jbb.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=2122",
    summary:
      "Confirma autoría, edición universitaria y existencia material de la recopilación regional de Lilia Montaña.",
    limitation:
      "Acredita el libro, pero no separa en cada episodio la voz campesina de la recreación de la autora.",
  }),
  icanhTota: source({
    title:
      "Propuesta metodológica para la caracterización arqueológica de entornos lacustres aplicada en la bahía de Aquitania",
    author: "Instituto Colombiano de Antropología e Historia",
    year: 2025,
    type: "investigación arqueológica institucional",
    url: "https://www.icanh.gov.co/prensa/actualidad-icanh/propuesta-metodologica-para-la-caracterizacion-arqueologica-de-entornos-lacustres-aplicado-en-la-bahia-de-aquitania-en-el-lago-de-tota-boyaca",
    summary:
      "Estudia el lago de Tota como paisaje arqueológico y propone leer conjuntamente agua, orillas y ocupaciones humanas.",
    limitation:
      "No confirma personajes sobrenaturales ni una versión concreta del mito de origen.",
  }),
  lakeTotaRecent: source({
    title: "Humans and climate in ritualized landscapes, Lake Tota",
    author: "Investigación publicada en The Holocene",
    year: 2024,
    type: "estudio paleoambiental y arqueológico",
    url: "https://journals.sagepub.com/doi/10.1177/09596836241266408",
    summary:
      "Relaciona larga duración ambiental, presencia humana y ritualización del paisaje de Tota.",
    limitation:
      "Su escala temporal y ambiental no permite derivar de ella la trama literaria de Montaña.",
  }),
  siturTota: source({
    title: "Municipio de Tota",
    author: "Sistema de Información Turística de Boyacá",
    type: "fuente territorial institucional",
    url: "https://situr.boyaca.gov.co/sugamuxi/municipio-de-tota/",
    summary:
      "Ubica el lago y su entorno municipal dentro de la provincia de Sugamuxi, en Boyacá.",
    limitation:
      "Es una referencia geográfica y turística, no una fuente etnográfica especializada.",
  }),
  turbay: source({
    title:
      "Las familias indígenas de Santafé, Nuevo Reino de Granada, según los testamentos de los siglos XVI y XVII",
    author: "Sandra Turbay Ceballos",
    year: 2012,
    type: "historia social",
    url: "https://revistas.unal.edu.co/index.php/achsc/article/view/34162",
    summary:
      "Encuentra persistencias matrilineales en legados y sucesión de cacicazgos, además de cambios familiares bajo el orden colonial.",
    limitation:
      "La filiación matrilineal no equivale a matriarcado y el estudio no demuestra que un héroe individual inventara la regla.",
  }),
  mantas: source({
    title: "Mantas muiscas",
    author: "Emilia Cortés Moreno",
    type: "estudio arqueológico y textil",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7066",
    summary:
      "Documenta materiales, clases de mantas, hallazgos y relevancia del tejido en el altiplano oriental.",
    limitation:
      "Los textiles conservados son escasos y muchos carecen de contexto arqueológico preciso.",
  }),
  minculturaIza: source({
    title:
      "Resolución 1811 de 2015: declaratoria de las Cuadrillas de San Isidro de Iza",
    author: "Ministerio de Cultura de Colombia",
    year: 2015,
    type: "acto administrativo sobre patrimonio cultural",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/resolucion_mincultura_1811_2015.htm",
    summary:
      "Documenta una tradición viva de Iza y su memoria local, donde Bochica y el maíz aparecen en el relato patrimonial.",
    limitation:
      "Describe una práctica contemporánea y sus narrativas de memoria; no acredita por sí sola una trama prehispánica exacta.",
  }),
  cocinas: source({
    title: "Los muiscas y su organización social",
    author: "Museo del Oro, Banco de la República",
    type: "cartilla museológica y educativa",
    url: "https://admin.banrepcultural.org/sites/default/files/adjunto-minisitios/maleta-didactica-muisca-banrepcultural.pdf",
    summary:
      "Documenta el cultivo de distintas variedades de maíz, sus preparaciones, el trabajo agrícola y su función en la provisión comunitaria muisca.",
    limitation:
      "Es una reconstrucción educativa basada en colecciones e investigación, no una voz muisca prehispánica ni una fuente para la trama de Piracá.",
  }),
  tejo: source({
    title: "Tejo: tradición que viene de los muiscas",
    author: "Banco de Contenidos del Ministerio de Cultura",
    type: "documento audiovisual de patrimonio",
    url: "https://bancodecontenidos.mincultura.gov.co/FichaDocumental?id=1494",
    summary:
      "Registra la relación cultural contemporánea entre el tejo, el altiplano y una memoria de origen muisca.",
    limitation:
      "La continuidad del juego no prueba los detalles sobrenaturales del cuento moderno de Fu.",
  }),
  pacanchiqueRetelling: source({
    title: "Pacanchique y la bella Azay",
    author: "Javier Ocampo López, reproducción de Tunja Tesoros Escondidos",
    type: "recreación folclórica moderna",
    url: "https://www.tunjatesorosescondidos.com/index.php/mitos/180-pacanchique-y-la-bella-azay",
    summary:
      "Ofrece la versión moderna localizable del amor, rescate, castigo y venganza de Pacanchique.",
    limitation:
      "Es una reelaboración tardía y no una fuente colonial; no demuestra que la trama completa circulara antes de la conquista.",
  }),
  quetzalcoatl: source({
    title: "Quetzalcóatl",
    author: "Encyclopedia of Latin American History and Culture",
    type: "referencia comparativa mesoamericana",
    url: "https://www.encyclopedia.com/people/history/mesoamerican-indigenous-peoples-biographies/quetzalcoatl",
    summary:
      "Resume tradiciones mesoamericanas asociadas a Quetzalcóatl, conocimiento, autoridad y ciclos históricos.",
    limitation:
      "No demuestra parentesco con Bochica; la comparación se limita a funciones narrativas atribuidas a viajeros y maestros.",
  }),
  popolVuh: source({
    title: "Popol Vuh: Sacred Book of the Quiché Maya People",
    author: "Traducción y estudio de Allen J. Christenson",
    year: 2007,
    type: "edición académica de fuente mesoamericana",
    url: "https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf",
    summary:
      "Ofrece el relato k'iche' donde la humanidad finalmente es formada de maíz, dentro de una cosmogonía propia.",
    limitation:
      "No es un antecedente del cuento colombiano: se compara el valor humano del maíz, no genealogías entre pueblos.",
  }),
  indra: source({
    title: "Indra",
    author: "Encyclopaedia Iranica",
    type: "estudio comparativo de religión védica",
    url: "https://www.iranicaonline.org/articles/indra/",
    summary:
      "Explica el ciclo védico en el que Indra vence a Vritra y hace efectivas las aguas retenidas.",
    limitation:
      "No existe conexión histórica demostrada con Tota; se compara la forma narrativa serpiente, golpe y liberación del agua.",
  }),
  ovidio: source({
    title: "Metamorphoses, Book X",
    author: "Ovidio, traducción de A. S. Kline",
    type: "fuente clásica comparativa",
    url: "https://ovid.lib.virginia.edu/trans/Metamorph10.htm",
    summary:
      "Conserva relatos de pérdida, transformación vegetal, competencia y descenso por amor en la tradición grecorromana.",
    limitation:
      "Es un corpus distante en tiempo y sociedad; solo permite comparar estructuras narrativas acotadas.",
  }),
  herakles: source({
    title: "The Labors of Herakles",
    author: "Colette Hemingway, The Metropolitan Museum of Art",
    year: 2003,
    type: "estudio comparativo de mitología griega",
    url: "https://www.metmuseum.org/essays/the-labors-of-herakles",
    summary:
      "Explica cómo una serie de pruebas difíciles transforma la condición y el reconocimiento del héroe Herakles.",
    limitation:
      "La prueba heroica griega no equivale a los pactos matrimoniales ni a la integración política del altiplano.",
  }),
  eteocles: source({
    title: "Eteocles and Polyneikes in combat",
    author: "The British Museum",
    type: "catálogo arqueológico comparativo",
    url: "https://www.britishmuseum.org/collection/object/G_1894-0516-1",
    summary:
      "Documenta una representación antigua de dos hermanos del ciclo tebano enfrentados por una sucesión disputada.",
    limitation:
      "Es una tradición mediterránea sin relación histórica con Hunsa; solo permite contrastar ambición, legitimidad y guerra interna.",
  }),
  atalanta: source({
    title: "Hippomenes and Atalanta",
    author: "Museo Nacional del Prado",
    type: "estudio y mediación de mitología clásica",
    url: "https://www.museodelprado.es/en/whats-on/multimedia/hippomenes-and-atalanta-guido-reni/248b84e8-6291-5420-0725-18e34d0efe65",
    summary:
      "Explica la carrera en la que Atalanta condiciona su matrimonio a ser vencida por un pretendiente.",
    limitation:
      "La competencia griega decide un matrimonio mediante engaño y peligro; no debe proyectarse sobre las prácticas muiscas.",
  }),
  kingsEgypt: source({
    title: "Kings and Queens of Egypt",
    author: "Susan Allen, The Metropolitan Museum of Art",
    year: 2004,
    type: "estudio comparativo de realeza",
    url: "https://www.metmuseum.org/essays/kings-and-queens-of-egypt",
    summary:
      "Explica instituciones, símbolos y transmisión de autoridad en la monarquía egipcia antigua.",
    limitation:
      "Sirve como contraste: la organización egipcia no es modelo ni equivalente de los cacicazgos muiscas.",
  }),
  hammurabi: source({
    title: "The Code of Hammurabi",
    author: "Musée du Louvre",
    type: "catálogo histórico y jurídico comparativo",
    url: "https://www.louvre.fr/en/the-code-of-hammurabi",
    summary:
      "Presenta una estela jurídica mesopotámica y permite distinguir ley, memoria de gobierno y construcción posterior de un legislador.",
    limitation:
      "No existe relación histórica conocida con Nemequene; se compara cómo una sociedad recuerda autoridad y norma.",
  }),
  melusine: source({
    title: "Mélusine: A Fairy with a Tail",
    author: "The Metropolitan Museum of Art",
    type: "estudio comparativo de leyenda europea",
    url: "https://www.metmuseum.org/perspectives/melusine",
    summary:
      "Examina el ciclo de una mujer sobrenatural cuya forma acuática o serpentina es descubierta por su pareja.",
    limitation:
      "La leyenda europea tiene parentescos, normas y desenlaces propios; no explica el relato de Meicuchuca.",
  }),
  dionysus: source({
    title: "Mystery Cults in the Greek and Roman World",
    author: "Colette Hemingway, The Metropolitan Museum of Art",
    year: 2013,
    type: "estudio comparativo de religión antigua",
    url: "https://www.metmuseum.org/essays/mystery-cults-in-the-greek-and-roman-world",
    summary:
      "Describe celebraciones y experiencias colectivas asociadas, entre otras figuras, a Dioniso.",
    limitation:
      "Nencatacoa no es un Dioniso andino; la comparación se limita a fiesta, bebida y suspensión temporal de la rutina.",
  }),
  anansi: source({
    title: "The exception who proves the rules: Ananse the Akan trickster",
    author: "Christopher Vecsey, Smithsonian Libraries and Archives",
    year: 1981,
    type: "estudio comparativo de folclor akan",
    url: "https://www.si.edu/object/siris_sil_599217",
    summary:
      "Registra un estudio sobre Ananse como figura embaucadora capaz de quebrar y hacer visibles las reglas.",
    limitation:
      "Fu no es Ananse ni hay relación histórica demostrada; se contrasta la ambigüedad del personaje cómico que produce consecuencias útiles.",
  }),
  cassandra: source({
    title: "Agamemnon, lines 1202–1330",
    author: "Esquilo, Perseus Digital Library",
    type: "fuente clásica comparativa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0004%3Acard%3D1202",
    summary:
      "Presenta a Casandra ante un desastre que puede nombrar, aunque su conocimiento no logra impedirlo.",
    limitation:
      "Popón no comparte el origen, la maldición ni el marco trágico griego de Casandra; solo se compara la advertencia incómoda.",
  }),
  viracocha: source({
    title: "Huiracocha (dios): el diluvio y la nueva humanidad",
    author: "Crónicas de Sarmiento de Gamboa y Juan de Betanzos, resumidas en referencia enciclopédica",
    type: "referencia comparativa andina",
    url: "https://es.wikipedia.org/wiki/Huiracocha_(dios)",
    summary:
      "Registra cómo Viracocha destruye con un diluvio a los gigantes que no lo reconocieron, enseña a la nueva humanidad y desaparece caminando sobre el mar; Manco Cápac y Mama Ocllo portan un bastón de oro.",
    limitation:
      "Es una síntesis enciclopédica; sirve para comparar la función de héroe civilizador y castigo por ofensa, sin probar contacto con Bochica.",
  }),
  chalchiuhtlicue: source({
    title: "Chalchiuhtlicue y la edad del sol de agua (Atonatiuh)",
    author: "Tradiciones recogidas por Fernando de Alva Ixtlilxóchitl, referencia enciclopédica",
    type: "referencia comparativa mesoamericana",
    url: "https://es.wikipedia.org/wiki/Chalchitlicue",
    summary:
      "Conserva el relato del desborde de las aguas que cierra una edad del mundo, entendido en Mesoamérica como crecida de ríos y no solo como lluvia del cielo.",
    limitation:
      "El diluvio nahua clausura una era completa del cosmos; no debe presentarse como equivalente del desagüe de una región.",
  }),
  trentren: source({
    title: "Trentren Vilu y Caicai Vilu",
    author: "Tradición oral mapuche, referencia enciclopédica",
    type: "referencia comparativa mapuche",
    url: "https://es.wikipedia.org/wiki/Trentren_Vilu_y_Caicai_Vilu",
    summary:
      "Cuenta el diluvio en que la serpiente Caicai hace subir el mar y Trentren eleva el cerro donde se refugian; los alcanzados por el agua se vuelven peces.",
    limitation:
      "La retirada de las aguas depende del desenlace del combate entre las serpientes, sin un tercer ser que abra un cauce.",
  }),
  atrahasis: source({
    title: "Atrahasis: el poema acadio del diluvio",
    author: "Epica mesopotámica, referencia enciclopédica",
    type: "referencia comparativa mesopotámica",
    url: "https://es.wikipedia.org/wiki/Atrahasis",
    summary:
      "Narra cómo un dios decide el diluvio para castigar a una humanidad que lo molesta y una familia advertida logra sobrevivir en una barca.",
    limitation:
      "A diferencia del Génesis, en Atrahasis y en Gilgamesh el arco iris no aparece como señal de pacto.",
  }),
  atlas: source({
    title: "Atlas: el titán que sostiene los cielos",
    author: "Mitología griega, referencia enciclopédica",
    type: "referencia comparativa clásica",
    url: "https://es.wikipedia.org/wiki/Atlas_(mitología)",
    summary:
      "Documenta al titán condenado a sostener la bóveda celeste tras la guerra de los Titanes; Villa Posse llama a Chibchacum 'el Atlas de los muiscas'.",
    limitation:
      "El castigo de Atlas es cósmico y posterior a una derrota de dioses; el de Chibchacum explica los temblores de una tierra concreta.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  piedrahitaHistoria1688: source({
    title: "Historia general de las conquistas del Nuevo Reyno de Granada",
    author: "Lucas Fernández de Piedrahita",
    year: 1688,
    type: "crónica colonial (facsímil)",
    url: "https://archive.org/details/historiagenerald00fern",
    summary:
      "Registra el pez negro con cabeza de buey del lago de Tota, citado por Quesada y asociado al demonio por los indígenas.",
    limitation:
      "Cubre solo el estrato colonial del ciclo; no narra el mito de Busiraco.",
  }),
  calderaConcepcion2008: source({
    title: "Concepción sagrada de la naturaleza en la mítica muisca",
    author: "Luis Alfredo Bohórquez Caldera",
    year: 2008,
    type: "artículo académico (Franciscanum 149)",
    url: "https://www.redalyc.org/pdf/3435/343529807006.pdf",
    summary:
      "Trata a Tota como laguna sagrada y los intentos de desagüe, citando a Camargo Pérez y a Pedro Simón.",
    limitation:
      "No relata la leyenda de Busiraco; solo el estatuto sagrado del lago.",
  }),
  tiempoLaguna2023: source({
    title: "Laguna de Tota: descubre el lago más grande de Colombia",
    author: "Pamela Avendaño Parra (El Tiempo)",
    year: 2023,
    type: "divulgación periodística",
    url: "https://www.eltiempo.com/colombia/otras-ciudades/laguna-de-tota-descubre-el-lago-mas-grande-de-colombia-758997",
    summary:
      "Cuenta la variante del origen por la múcura de agua entregada a una familia indígena.",
    limitation:
      "Registra una versión distinta de la del ciclo Busiraco.",
  }),
  tadeoviaje: source({
    title: "Un viaje al lago de Tota",
    author: "Yeison Alejandro Naranjo Molano (U. Tadeo)",
    type: "crónica universitaria",
    url: "https://www.utadeo.edu.co/es/articulo/crossmedialab/277626/un-viaje-al-lago-de-tota",
    summary:
      "Recoge la leyenda local de la cantina de agua sagrada que al derramarse formó el lago.",
    limitation:
      "Variante etiológica distinta y sin filiación bibliográfica.",
  }),
  albaImpresiones1871: source({
    title: "Impresiones de un viaje a América: Sogamoso, La Roma de los Chibchas",
    author: "José María Gutiérrez de Alba",
    year: 1871,
    type: "fuente primaria digitalizada (Banco de la República)",
    url: "https://www.banrepcultural.org/impresiones-de-un-viaje/index.php?fltcats%5B%5D=Ciudades%20y%20pueblos&id=43&r=episodios%2Fview",
    summary:
      "Describe Sugamuxi/Iracá, el iraca y el templo del Sol, contexto sagrado del conjuro de Suamox contra Busiraco.",
    limitation:
      "Trata la ciudad sagrada, no el lago ni la leyenda de su origen.",
  }),
  simonNoticias1881: source({
    title: "Noticias historiales de las conquistas de Tierra Firme en las Indias Occidentales",
    author: "Fray Pedro Simón",
    year: 1881,
    type: "crónica (facsímil digital)",
    url: "https://archive.org/details/pedro_simon-noticias_historiales_1",
    summary:
      "Crónica fuente de las costumbres muiscas, incluida la restricción del consumo de venado a los caciques.",
    limitation:
      "Crónica general; no nombra a Toquechá/Toquilla.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  rubioSociedad2005: source({
    title: "Sociedad y naturaleza en la mitología muisca",
    author: "François Correa Rubio",
    year: 2005,
    type: "artículo académico de acceso abierto (Tabula Rasa 3, pp. 197-222)",
    url: "https://www.revistatabularasa.org/numero-3/corrrea.pdf",
    summary:
      "Analiza la antropogénesis de los caciques de Sogamoso y Ramiriquí dentro del ciclo solar y lunar (pp. 204-205): subraya que la creación humana «fue distinguida por su género» —hombres de tierra amarilla, mujeres de la hierba alta de tronco hueco— y que, según Piedrahita, los dos caciques fundaron linajes «nobles». Sitúa el episodio en un diagrama de parentesco (Sogamoso-Luna, Ramiriquí-Tunja-Sol, Bachué) que lee la relación entre los astros como modelo de las relaciones sociales.",
    limitation:
      "Es análisis estructural, no una fuente nueva: trabaja sobre Simón y Piedrahita. Su lectura de los linajes nobles y del género como principio de orden social es del autor. Es otra obra del mismo Correa ya citado en la ficha por El sol del poder (enlace de Google Books), pero ésta tiene texto completo abierto.",
  }),
  hoyosTextiles1993: source({
    title: "Textiles de las culturas muisca y guane [reseña del libro de Gladys Tavera de Téllez y Carmen Urbina Caycedo]",
    author: "Adriana Muñoz Hoyos",
    year: 1993,
    type: "reseña académica (Boletín Museo del Oro 34-35, pp. 195-197)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7007",
    summary:
      "Abre con el relato: Chiminigagua da forma a dos caciques divinos, Iraca y Ramiriquí, que se vuelven Luna y Sol después de fabricar al primer hombre de tierra amarilla y a la primera mujer de «una hierba alta de tallo hueco», que identifica con el junco de las orillas de las lagunas, el mismo que entrelazado forma las esteras y funda el oficio textil femenino. Es la lectura que liga la materia vegetal de las mujeres con el tejido.",
    limitation:
      "Es una reseña breve, y el pasaje es una cita de Chaves Mendoza recogida por Tavera y Urbina, no una fuente primaria. Introduce a Chiminigagua como creador de los dos caciques y llama Iraca al de Sogamoso, elementos que Simón no pone en este episodio; la identificación de la hierba con el junco es interpretación moderna. El relato publicado dice «tallos» sin especie y no nombra a Chiminigagua: la diferencia queda anotada, no se corrige.",
  }),
  pazHistoria1886: source({
    title: "Historia del Nuevo Reino de Granada, tomo I",
    author: "Juan de Castellanos; publícala por primera vez Antonio Paz y Mélia",
    year: 1886,
    type: "crónica colonial en verso (edición decimonónica, facsímil digital)",
    url: "https://archive.org/details/historiadelnuevo01cast",
    summary:
      "El Canto primero (pp. 22-70) es la versión más antigua y extensa de la vida de Nemequene: lo llama «penúltimo rey» de Bogotá y traduce su nombre como «hueso de león»; narra su rivalidad heredada con Tunja y con Guatavita y Ubaque, el parlamento a sus principales antes de la campaña, el sacrificio y el augurio del xeque, el estrago en tierras de Turmequé, la batalla del Arroyo de las Vueltas contra el Tunja y Sogamoso, el dardo que lo hiere en la tetilla derecha y que él mismo se arranca, la huida hasta Chocontá, el traslado en andas a Bogotá, la cura de los xeques y la muerte a los tres, cuatro o cinco días; después, las exequias y la sucesión por el sobrino Thisquesuzha.",
    limitation:
      "Poema épico de un conquistador escrito hacia 1601, anterior a Simón y a Piedrahita y fuente de ambos: narra con retórica de epopeya y juicio evangelizador («infames ceremonias»). Es la fuente del entierro con mujeres y esclavos vivos drogados que la ficha decide no publicar. No trae el llamado código de leyes. Ojo: contradice el relato publicado en que Nemequene «murió antes de volver al cercado»; en Castellanos llega vivo a Bogotá y muere allí bajo la cura de los xeques.",
  }),
  laverdeGuerras1992: source({
    title: "Guerras y fronteras: los límites territoriales del dominio prehispánico de Tunja",
    author: "Eduardo Londoño Laverde",
    year: 1992,
    type: "artículo académico (Boletín Museo del Oro 32-33, pp. 3-19)",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7010",
    summary:
      "Usa la campaña final de Nemequene como prueba de la frontera entre el Zipa y el Tunja: transcribe el pasaje de Castellanos (estrago en tierras de Turmequé, alianza del Tunja con Sogamoso, batalla del Arroyo de las Vueltas), lo contrasta con Piedrahita y Aguado y lo corrobora con archivo: la declaración de 1571 de un indio de Cucunubá sobre Babaguicanguya, que huyó al valle de Tenza «por guerras que tuvo con el cacique Bogotá». Anota que el arroyo de Las Vueltas, en Chocontá, aún se llamaba «la Carnicería» en memoria de esas batallas (Fals Borda). Lee además al Sogamoso como aliado y no como sujeto del Tunja.",
    limitation:
      "Es arqueología e historia territorial: no trata las leyes ni la figura legendaria, sólo la guerra con Tunja y su geografía. Resume a Castellanos diciendo que Nemequene «murió en esta refriega», cuando el poema lo hace morir días después en Bogotá. La documentación de archivo prueba guerras entre Bogotá y Tunja, no los detalles de la batalla.",
  }),
  murciaNencatacoa2015: source({
    title: "De Nencatacoa a San Lucas: mantas muiscas de algodón como soporte pictórico en el Nuevo Reino de Granada",
    author: "Laura Liliana Vargas Murcia",
    year: 2015,
    type: "artículo académico de acceso abierto (UCOARTE. Revista de Teoría e Historia del Arte 4, pp. 25-43)",
    url: "https://journals.uco.es/ucoarte/article/view/9477",
    summary:
      "El único estudio que lleva a Nencatacoa en el título. Resume la noticia de Simón —dios de los tejedores de mantas y de las borracheras, que se aparecía como oso o zorra cubierto con manta y gustaba de la chicha— y propone que, tras la Conquista, la gratitud al dios que enseñó a hilar, tejer y pintar pasó a santos patronos de oficio: santa Catalina de Alejandría para los tejedores y san Lucas para los pintores. Distingue además que Simón atribuye la enseñanza del hilado y el tejido a Bochica, no a Nencatacoa.",
    limitation:
      "Es historia del arte colonial: su objeto son las mantas como soporte de pintura de caballete, y Nencatacoa ocupa sólo dos pasajes (pp. 25-26). Depende de Simón y no aporta noticia nueva del dios. La sustitución por santa Catalina y san Lucas es una hipótesis de la autora («debió ser manifestada»), paralela a la de San Pascual Bailón que la ficha también da como hipótesis; no la confirma ni la contradice.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = muiscaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente muisca desconocida: ${visto}`);
    }
    if (vistas.has(key)) continue;
    vistas.add(key);
    salida.push(
      typeof entrada === "string"
        ? selected
        : {
            ...selected,
            ...(entrada.summary ? { summary: entrada.summary } : {}),
            ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
          },
    );
  }
  return salida;
}
