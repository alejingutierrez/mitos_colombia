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
    title: "Biblioteca básica de cocinas tradicionales de Colombia, tomo 2",
    author: "Ministerio de Cultura de Colombia",
    type: "historia y patrimonio alimentario",
    url: "https://mng.mincultura.gov.co/Sitios/patrimonio/bibliotecas-de-cocinas/tomos/tomo02.pdf",
    summary:
      "Sitúa el maíz dentro de prácticas alimentarias, técnicas y continuidades culturales colombianas.",
    limitation:
      "No documenta como antigua la trama de Piracá ni la transformación de mantas en oro.",
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
};

export function pickSources(...keys) {
  return keys.map((key) => {
    const selected = muiscaSources[key];
    if (!selected) {
      throw new Error(`Fuente muisca desconocida: ${key}`);
    }
    return selected;
  });
}
