function source({ title, author, year, type, url, summary, limitation }) {
  return { title, author, year, type, url, summary, limitation };
}

export const tolimaMixtoResidualSources = {
  villaPosseFolklore: source({
    title: "Mitos y leyendas de Colombia, volumen II: Leyendas y cuentos del folclor",
    author: "Eugenia Villa Posse; Instituto Andino de Artes Populares",
    year: 1993,
    type: "compilación crítica y facsímil digital",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce el corpus de Misael Devia de 1962 y fragmentos de Cesáreo Rocha Castilla, con Madre de Agua, Candileja, Muelona, Cazador, Tunjo, Guango, Silbador, brujas y duendes.",
    limitation:
      "Es una selección de obras publicadas y mediadas por folclorólogos; conserva lenguaje religioso, racial y de género de su época y no es una voz comunitaria transparente.",
  }),
  deviaCatalog: source({
    title: "Folclor Tolimense",
    author: "Misael Devia Morales; Universidad de Ibagué",
    year: 2013,
    type: "ficha editorial universitaria de reedición",
    url: "https://ediciones.unibague.edu.co/catalogo-1/44-institucional/97-folclor-tolimense",
    summary:
      "Documenta la reedición universitaria de una obra publicada inicialmente en la Revista Colombiana de Folclor entre 1962 y 1965.",
    limitation:
      "Confirma autoría y trayectoria editorial, pero no publica la cadena de informantes ni autentica cada escena del corpus.",
  }),
  rochaPatronato: source({
    title: "Prehistoria y folclor del Tolima",
    author: "Cesáreo Rocha Castilla; Patronato Colombiano de Artes y Ciencias",
    year: 2017,
    type: "ficha editorial de reedición",
    url: "https://patronatocolombiano.com/producto/prehistoria-y-folclor-del-tolima-cesareo-rocha-castilla/",
    summary:
      "Registra las ediciones de 1959 y 1968 de una investigación regional que contiene versiones breves de Candileja y Tunjitos.",
    limitation:
      "La ficha no reproduce el libro completo ni demuestra que cada pasaje sea una transcripción literal de oralidad.",
  }),
  modulemaTolima: source({
    title: "Patrimonio cultural: un estudio integral de las leyendas del Tolima en la ciudad de Ibagué",
    author:
      "Néstor Andrés Guarnizo Sánchez, Fabio Andrés Lizcano Prada, Robert Gutiérrez Ortiz y Misael Fernando Ariza Rodríguez",
    year: 2024,
    type: "artículo académico en MODULEMA",
    url: "https://dialnet.unirioja.es/descarga/articulo/9874382.pdf",
    summary:
      "Clasifica figuras del repertorio tolimense y mide su reconocimiento entre 384 habitantes de Ibagué.",
    limitation:
      "Sus resúmenes dependen de bibliografía y de un cuaderno de ilustración; la encuesta prueba circulación urbana, no antigüedad de cada detalle.",
  }),
  spreadsheetCorpus: source({
    title: "Base de mitos del proyecto, filas 411, 413, 415-425, 436, 439, 840 y 841",
    author: "Archivo editorial Mitos de Colombia",
    type: "fuente interna para control de cobertura",
    url: "https://github.com/alejingutierrez/mitos_colombia/blob/main/docs/base_mitos.xlsx",
    summary:
      "Conserva núcleos y variantes heredadas de las once rutas y permite rastrear fragmentos que proceden de una misma obra.",
    limitation:
      "La hoja resume y segmenta publicaciones anteriores; no reemplaza los textos de origen ni vuelve histórica una escena literaria.",
  }),
  cultureOverview: source({
    title: "Explora los mitos y leyendas de Colombia",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    year: 2024,
    type: "síntesis institucional de tradición oral",
    url: "https://www.culturarecreacionydeporte.gov.co/es/principal/noticias/mitos-y-leyendas-de-colombia",
    summary:
      "Distingue mito, leyenda y literatura oral y resume la circulación contemporánea de varios espantos colombianos.",
    limitation:
      "Es divulgación general y no sustituye las fuentes regionales ni sus cautelas históricas.",
  }),
  espantosScan: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano",
    author: "Periódico Hoy; Universidad Autónoma de Colombia",
    year: 2004,
    type: "facsímil digital de una reelaboración literaria",
    url: "https://archive.org/details/CuentosDeEspantosYOtrosSeresFantasticosDelFolclorColombiano..compressed",
    summary:
      "Incluye Tarasca, Cazador, Tunjo, Silbador y Chenche mediante cartas, diálogos, diarios y película encontrada, además de comparaciones con otros espantos.",
    limitation:
      "Sus soportes documentales forman parte del montaje narrativo y no son cartas, cintas, partes oficiales ni testimonios históricos corroborados.",
  }),
  espantosCatalog: source({
    title: "Cuentos de espantos y otros seres fantásticos del folclor colombiano: registro bibliográfico",
    author: "Biblioteca Departamental Jorge Garcés Borrero",
    type: "catálogo público de biblioteca",
    url: "https://consultas.bibliovalle.gov.co/bib/93644",
    summary:
      "Identifica la obra como literatura y cuento fantástico, enumera su contenido y documenta edición, ilustradores e ISBN.",
    limitation:
      "La ficha clasifica el volumen y resume su propuesta, pero no verifica la historicidad de los documentos ficticios que contiene.",
  }),
  colombiaRegiones: source({
    title: "Colombia, país de regiones, tomo 3",
    author: "CINEP; Biblioteca Luis Ángel Arango",
    type: "síntesis histórica y regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2835/download",
    summary:
      "Explica la función ética de los espantos del Gran Tolima y resume el Guando como relato sobre solidaridad funeraria.",
    limitation:
      "Es una interpretación regional de finales del siglo XX y no una transcripción de una sesión de narración.",
  }),
  culturaMotherWater: source({
    title: "La madre de agua",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional atribuida a Asdrúbal López Orozco",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/la-madre-de-agua",
    summary:
      "Registra una versión colombiana posterior de la doncella luminosa que atrae a jóvenes desde manantiales, quebradas y ríos.",
    limitation:
      "No es específicamente tolimense y amplifica rasgos físicos; se usa como variante atribuida, no como origen del corpus de Devia.",
  }),
  culturaCandileja: source({
    title: "La Candileja",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de circulación llanera",
    url: "https://www2.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/la-candileja",
    summary:
      "Describe tres llamaradas asociadas con la abuela y sus dos nietos y documenta circulación en los Llanos Orientales.",
    limitation:
      "Es una adaptación pedagógica posterior; la ubicación llanera no invalida ni reemplaza la versión tolimense de Devia.",
  }),
  culturaMuelona: source({
    title: "La muelona",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de divulgación",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/la-muelona",
    summary:
      "Conserva la mujer seductora de dentadura enorme y una biografía posterior ligada a la llamada Maga.",
    limitation:
      "La biografía punitiva no aparece en la entrada de Devia de 1962 y no se presenta como historia colonial comprobada.",
  }),
  radioNacionalMitos: source({
    title: "Mitos y leyendas de Colombia: nueve relatos en las regiones",
    author: "Radio Nacional de Colombia",
    year: 2021,
    type: "divulgación de medio público",
    url: "https://www.radionacional.co/cultura/historia-colombiana/mitos-y-leyendas-de-colombia-nueve-relatos-en-las-regiones",
    summary:
      "Resume la Muelona y el Silbón y permite documentar una circulación nacional contemporánea y separar personajes homónimos.",
    limitation:
      "La nota funde Muelona y Colmillona y simplifica procedencias; se usa para comparar recepción, no para fijar el núcleo regional.",
  }),
  culturaCazador: source({
    title: "El cazador fantasma",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de divulgación",
    url: "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-cazador-fantasma",
    summary:
      "Registra una versión colombiana del cazador que persigue a quienes cazan con crueldad o ambición.",
    limitation:
      "Añade apariencia, equipo y animales que no constan en Devia; es una recepción posterior, no una descripción visual del espíritu invisible.",
  }),
  museoOroOfrenda: source({
    title: "La ofrenda",
    author: "Museo del Oro, Banco de la República",
    year: 2017,
    type: "fuente museal y arqueológica",
    url: "https://www.banrepcultural.org/exposiciones/exposicion-permanente-del-museo-del-oro/la-ofrenda",
    summary:
      "Explica la función relacional de las ofrendas muiscas y el papel del ofrendatario en la búsqueda de equilibrio.",
    limitation:
      "Documenta prácticas muiscas, no la leyenda campesina tolimense del niño llamado Tunjo.",
  }),
  tunjosGenero: source({
    title: "El género como expresión simbólica: un estudio iconográfico sobre los tunjos muiscas",
    author: "Ana María Castro Sánchez; Boletín Museo del Oro 53",
    year: 2005,
    type: "investigación arqueológica e historiográfica",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/issue/download/189/9",
    summary:
      "Discute la lectura votiva de los tunjos y advierte que muchas interpretaciones proyectan categorías occidentales y de género sobre los objetos.",
    limitation:
      "Se ocupa de iconografía muisca y no demuestra que el espanto infantil de Devia derive directamente de una práctica arqueológica pijao.",
  }),
  culturaDuende: source({
    title: "El Duende",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de divulgación",
    url: "https://www2.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/el-duende",
    summary:
      "Conserva la persecución doméstica, los terrones y el tiple tocado al son de las vacas como recurso para alejar al duende.",
    limitation:
      "No identifica una localidad o narrador tolimense y reproduce motivos religiosos posteriores.",
  }),
  culturaBrujaCortijo: source({
    title: "La Bruja del Cortijo, una leyenda urbana de Engativá",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    year: 2024,
    type: "memoria oral contemporánea",
    url: "https://www.culturarecreacionydeporte.gov.co/es/podcast/la-bruja-del-cortijo-una-leyenda-urbana-de-engativa",
    summary:
      "Documenta cómo una memoria local reciente de transformación en perro o lechuza fue recogida y publicada por un colectivo.",
    limitation:
      "Es una leyenda urbana bogotana contemporánea y sirve para contrastar procesos de transmisión, no para describir la bruja tolimense.",
  }),
  culturaJuanaGarcia: source({
    title: "Leyenda del cerro de Juana García",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "versión institucional de una leyenda colonial",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-el-cerro-de-juana-garcia",
    summary:
      "Muestra otra tradición colombiana de acusación de brujería, castigo público y vuelo, situada en Santa Fe.",
    limitation:
      "No pertenece al Tolima y combina leyenda con un marco inquisitorial; se usa como comparación histórica y no como variante local.",
  }),
  culturaMohan: source({
    title: "Leyenda de El Mohán",
    author: "Secretaría Distrital de Cultura, Recreación y Deporte de Bogotá",
    type: "ficha institucional de divulgación folclórica",
    url: "https://culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-el-mohan",
    summary:
      "Conserva a Mohán o Poira como ser fluvial del Tolima y permite comparar la apariencia asignada al Chenche en 2004.",
    limitation:
      "Repite lenguaje romántico y no identifica informantes ni una entidad tradicional independiente llamada Chenche.",
  }),
  radioNacionalMohan: source({
    title: "El Mohán: un mito a orillas del río Magdalena",
    author: "Radio Nacional de Colombia",
    year: 2020,
    type: "memoria regional en medio público",
    url: "https://www.radionacional.co/cultura/historia-colombiana/el-mohan-una-historia-viva-orillas-del-rio-magdalena",
    summary:
      "Registra al Mohán en El Espinal y menciona Guando, Silbador y Tunjos dentro del repertorio campesino del Tolima.",
    limitation:
      "Es periodismo cultural y no autentica los personajes y objetos pseudoarchivísticos del libro de 2004.",
  }),
  unescoTarasque: source({
    title: "Processional giants and dragons in Belgium and France",
    author: "UNESCO Intangible Cultural Heritage",
    type: "registro institucional de patrimonio vivo",
    url: "https://ich.unesco.org/en/RL/processional-giants-and-dragons-in-belgium-and-france-00153",
    summary:
      "Documenta la Tarasque procesional de Tarascon dentro de una tradición europea de efigies urbanas activa desde finales de la Edad Media.",
    limitation:
      "No demuestra influencia directa sobre el espanto colombiano ni valida la carta ficticia de 1825.",
  }),
  bnfTarasque: source({
    title: "Folklores régionaux: la tarasque provençale",
    author: "Bibliothèque nationale de France",
    year: 2020,
    type: "referencia patrimonial y comparativa",
    url: "https://fantasy.bnf.fr/fr/grand/fan_269.php",
    summary:
      "Sitúa a la tarasca provenzal entre las criaturas regionales que alimentaron el bestiario europeo.",
    limitation:
      "Es una comparación de historia cultural; el parentesco de nombre no prueba una cadena de transmisión hacia Tolima.",
  }),
  flacsoVolume3: source({
    title: "Mitos y leyendas de Colombia, volumen III",
    author: "Eugenia Villa Posse; Instituto Andino de Artes Populares",
    year: 1993,
    type: "compilación crítica y reproducción documental",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Reproduce una presentación literaria de Mariano Izquierdo Gallo de 1956 que llama 'dioses lares' a creencias atribuidas a pueblos distintos.",
    limitation:
      "El pasaje usa categorías cristianas y coloniales, lenguaje deshumanizante y una analogía romana externa; no es un relato indígena autónomo.",
  }),
  izquierdoCatalog: source({
    title: "Mitología americana: selección de los mitos aborígenes de América",
    author: "Mariano Izquierdo Gallo",
    year: 1956,
    type: "registro bibliográfico de la obra fuente",
    url: "https://books.google.com/books/about/Mitologia_americana.html?id=2ZobAAAAIAAJ",
    summary:
      "Confirma autor, editorial, fecha, extensión y alcance americanista del libro del que procede la comparación de 'dioses lares'.",
    limitation:
      "La vista es bibliográfica y no añade evidencia comunitaria a las afirmaciones del autor.",
  }),
  minculturaPijao: source({
    title: "Caracterización del pueblo Coyaima Natagaima (Pijao)",
    author: "Ministerio de Cultura de Colombia, Dirección de Poblaciones",
    type: "caracterización institucional contemporánea",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20PIJAO.pdf",
    summary:
      "Describe continuidad, reetnización, territorio, pérdida lingüística y relatos de origen del pueblo Pijao actual.",
    limitation:
      "Es una síntesis institucional basada en fuentes secundarias y no confirma el sacrificio descrito por Izquierdo Gallo.",
  }),
  onicPijao: source({
    title: "Pijao: caracterización del pueblo Pijao-Coyaima-Natagaima",
    author: "Organización Nacional Indígena de Colombia",
    type: "fuente organizativa indígena contemporánea",
    url: "https://www.onic.org.co/pueblos/2014-",
    summary:
      "Ubica comunidades actuales en Coyaima, Natagaima, Ortega, Chaparral y otros municipios y explica su historia territorial reciente.",
    limitation:
      "La caracterización no adopta el nombre 'dioses lares' ni documenta la escena del Chenche como tradición comunitaria.",
  }),
  onicCrit: source({
    title: "X Congreso Regional Indígena del Tolima - CRIT",
    author: "Organización Nacional Indígena de Colombia; CRIT",
    year: 2019,
    type: "comunicado de organización indígena",
    url: "https://www.onic.org.co/comunicados-regionales/3530-x-congreso-regional-indigena-del-tolima-crit-por-la-pervivencia-del-pueblo-pijao-unidad-territorio-cultura-paz-y-autonomia",
    summary:
      "Documenta organización, autonomía y presencia contemporánea del pueblo Pijao en el Tolima.",
    limitation:
      "No es una fuente sobre religiones antiguas; se usa para impedir que un texto de 1956 borre a una comunidad viva.",
  }),
  britishMuseumLares: source({
    title: "Lares",
    author: "British Museum",
    type: "ficha museal de comparación clásica",
    url: "https://www.britishmuseum.org/collection/term/BIOG59082",
    summary:
      "Define los Lares como deidades protectoras romanas, especialmente espíritus ancestrales del hogar.",
    limitation:
      "Documenta religión romana y demuestra el carácter externo de la analogía; no nombra ni explica tradiciones indígenas colombianas.",
  }),
  tolimaArchaeology: source({
    title: "Tolima: la gente y el oro en el valle del Magdalena",
    author: "Museo del Oro, Banco de la República",
    type: "síntesis arqueológica institucional",
    url: "https://enciclopedia.banrepcultural.org/index.php/Tolima",
    summary:
      "Presenta trece milenios de ocupaciones distintas, prácticas funerarias y cultura material de la región arqueológica Tolima.",
    limitation:
      "La región arqueológica no equivale automáticamente al pueblo Pijao histórico ni respalda la categoría 'dioses lares'.",
  }),
  coyaimaNatagaimaEthnography: source({
    title: "Coyaimas y Natagaimas",
    author: "Diana E. Oliveros; Geografía Humana de Colombia",
    type: "síntesis etnográfica con trabajo de campo",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2778/download",
    summary:
      "Analiza territorio, memoria, reconocimiento y vida contemporánea de comunidades indígenas del sur del Tolima.",
    limitation:
      "No valida el pasaje sacrificial de 1956; ayuda a distinguir comunidad contemporánea, categorías históricas y región.",
  }),
  duchasBanshee: source({
    title: "Death Omens, The Schools' Collection, volume 0671, page 158",
    author: "National Folklore Collection, University College Dublin",
    type: "archivo comparativo de folclor",
    url: "https://www.duchas.ie/en/cbes/5008858/4961384/5083211",
    summary:
      "Registra a la banshee como aviso de muerte ligado a familias concretas y permite comparar otra señal auditiva de duelo.",
    limitation:
      "Pertenece al folclor irlandés y no prueba difusión ni parentesco histórico con el pájaro Silbador del sur del Tolima.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  moralesFolclor2013: source({
    title: "Folclor tolimense",
    author: "Misael Devia Morales",
    year: 2013,
    type: "libro (reedición de Ediciones Unibagué del artículo de 1962 en la Revista Colombiana de Folclor, v. 3, n.º 7)",
    url: "https://repositorio.unibague.edu.co/server/api/core/bitstreams/7ecf7fde-a143-4744-a6bd-6f8618d50e2a/content",
    summary:
      "Registro de los dos repertorios bajo un título: las brujas que se vuelven pisca y los duendes que tiran terrones y persiguen muchachas, y el tiplecito de ocho cuerdas que los espanta (pp. 81-84 de la edición de 2013).",
    limitation:
      "Es un encabezado de categoría con varios casos, no un relato único; sin narrador.",
  }),
  compiladoraMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II",
    author: "Eugenia Villa Posse (compiladora)",
    year: 1993,
    type: "antología (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Segundo registro de Devia (sección 20, pp. 165-166) y «El duende» de Rocha Castilla (sección 21, p. 182).",
    limitation:
      "Copia sin aparato crítico.",
  }),
  baronCuentos1996: source({
    title: "Cuentos, mitos y leyendas del llano",
    author: "Getulio Vargas Barón",
    year: 1996,
    type: "libro (Corpes Orinoquía)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2797/",
    summary:
      "Cuenta el duende del hato de Las Camazas que molestaba a don Gregorio Zambrano, con la copla que lo recuerda, el paralelo llanero de Similitudes.",
    limitation:
      "Otra región; el duende llanero se burla del patrón y no persigue muchachas.",
  }),
  cINEPColombia1998: source({
    title: "Colombia país de regiones, tomo 3: Región del Alto Magdalena",
    author: "CINEP y Colciencias",
    year: 1998,
    type: "obra de síntesis regional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2835/download",
    summary:
      "Lee al Guando como lección de solidaridad campesina en la síntesis del Tolima Grande (p. 99).",
    limitation:
      "Interpretación de síntesis, sin narradores.",
  }),
  narinocuentos1988: source({
    title: "Los cuentos de Pascual: mitos y leyendas del piedemonte llanero",
    author: "Alberto Baquero Nariño",
    year: 1988,
    type: "libro (recopilación regional, Biblioteca Digital Banrepcultural)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2818/",
    summary:
      "Nombra al Guando entre los mitos campesinos llevados al piedemonte llanero.",
    limitation:
      "Es una enumeración de una línea.",
  }),
  rangelpalabras2010: source({
    title: "Las palabras del origen: breve compendio de la mitología de los uitoto",
    author: "Fernando Urbina Rangel",
    year: 2010,
    type: "libro (Ministerio de Cultura)",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/4",
    summary:
      "Reúne relatos uitotos donde Jitoma oye cantar a Nokaido, busca al pájaro, no lo encuentra y sabe que es mal agüero (pp. 103-104).",
    limitation:
      "Otra tradición; la comparación es de función.",
  }),
  compiladoraMitos19932: source({
    title: "Mitos y leyendas de Colombia, tomo III",
    author: "Eugenia Villa Posse (compiladora)",
    year: 1993,
    type: "antología (IADAP, Quito)",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "El apartado «Los tunjos» de la sección chibcha describe las figuras de oro que se ofrecían en santuarios y lagunas, de donde viene el nombre.",
    limitation:
      "Es la glosa arqueológica, no el relato campesino.",
  }),
  oRLLOPComo2010: source({
    title: "Cómo se formó nuestra mitología en el departamento del Tolima",
    author: "El Tiempo (firma «ORLLOP»)",
    year: 2010,
    type: "prensa (5 de marzo de 2010)",
    url: "https://www.eltiempo.com/archivo/documento/MAM-3868565",
    summary:
      "Nombra al Tunjo en el repertorio tolimense de espantos.",
    limitation:
      "Teoría del origen, no relato.",
  }),
  redaccionAprendamos1995: source({
    title: "Aprendamos más de lo nuestro",
    author: "El Tiempo (Redacción)",
    year: 1995,
    type: "prensa (11 de octubre de 1995)",
    url: "https://www.eltiempo.com/archivo/documento/mam-425024",
    summary:
      "Fecha la circulación de la Candileja en la prensa en 1995.",
    limitation:
      "Eco de Rocha Castilla 1968.",
  }),
  correaMitos1997: source({
    title: "Mitos, espantos y leyendas de Caldas",
    author: "Fabio Vélez Correa",
    year: 1997,
    type: "libro (edición ampliada en El Libro Total)",
    url: "https://www.ellibrototal.com/ltotal/?d=4731&t=1",
    summary:
      "Recoge a la Vieja Colmillona de Caldas (pp. 57-58), la otra mujer definida por los dientes que compara Similitudes.",
    limitation:
      "Es otro ser, de otro departamento, y hace lo contrario: no daña a quien la trata bien.",
  }),
};

const sourceKeysBySlug = {
  "la-madre-agua": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "spreadsheetCorpus",
    "culturaMotherWater",
    "cultureOverview",
    "culturaMohan",
    "colombiaRegiones",
  ],
  "la-candileja": [
    "villaPosseFolklore",
    "deviaCatalog",
    "rochaPatronato",
    "modulemaTolima",
    "spreadsheetCorpus",
    "culturaCandileja",
    "cultureOverview",
    "colombiaRegiones",
  ],
  "la-muelona": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "spreadsheetCorpus",
    "culturaMuelona",
    "radioNacionalMitos",
    "espantosScan",
    "colombiaRegiones",
  ],
  "el-cazador": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "spreadsheetCorpus",
    "culturaCazador",
    "espantosScan",
    "espantosCatalog",
    "cultureOverview",
  ],
  "el-tunjo": [
    "villaPosseFolklore",
    "deviaCatalog",
    "rochaPatronato",
    "modulemaTolima",
    "spreadsheetCorpus",
    "espantosScan",
    "museoOroOfrenda",
    "tunjosGenero",
  ],
  "el-guango": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "spreadsheetCorpus",
    "colombiaRegiones",
    "espantosScan",
    "espantosCatalog",
    "radioNacionalMohan",
  ],
  "el-silbador": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "spreadsheetCorpus",
    "espantosScan",
    "espantosCatalog",
    "radioNacionalMitos",
    "duchasBanshee",
  ],
  "brujas-y-duendes": [
    "villaPosseFolklore",
    "deviaCatalog",
    "modulemaTolima",
    "spreadsheetCorpus",
    "culturaDuende",
    "culturaBrujaCortijo",
    "culturaJuanaGarcia",
    "cultureOverview",
  ],
  "la-tarasca": [
    "modulemaTolima",
    "spreadsheetCorpus",
    "espantosScan",
    "espantosCatalog",
    "unescoTarasque",
    "bnfTarasque",
    "colombiaRegiones",
    "cultureOverview",
  ],
  "el-chenche": [
    "villaPosseFolklore",
    "spreadsheetCorpus",
    "espantosScan",
    "espantosCatalog",
    "culturaMohan",
    "radioNacionalMohan",
    "minculturaPijao",
  ],
  "dioses-lares": [
    "flacsoVolume3",
    "izquierdoCatalog",
    "minculturaPijao",
    "britishMuseumLares",
    "tolimaArchaeology",
    "coyaimaNatagaimaEthnography",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickTolimaMixtoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickTolimaMixtoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = tolimaMixtoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickTolimaMixtoResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`${slug}: no tiene mapa de fuentes.`);
  return keys.map((key) => {
    const selected = tolimaMixtoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}.`);
    return selected;
  });
}
