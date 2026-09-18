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

export const ticunaResidualSources = {
  rodriguezCatalog: source({
    title: "Muestra de literatura oral en Leticia, Amazonas",
    author: "María Luisa Rodríguez de Montes; Instituto Caro y Cuervo",
    year: 1981,
    type: "registro bibliográfico de la recopilación histórica",
    url: "https://cendoc.caaap.org.pe/cgi-bin/koha/opac-detail.pl?biblionumber=2824&shelfbrowse_itemnumber=3655",
    summary:
      "Confirma autora, edición, extensión y estructura del volumen que reúne análisis, textos y glosario de relatos grabados en Leticia.",
    limitation:
      "El catálogo no muestra las páginas del libro ni permite identificar desde la web al informante de cada relato Ticuna.",
  }),
  abcBibliotecario: source({
    title: "ABC del bibliotecario promotor de lectura",
    author: "Biblioteca Nacional de Colombia y SINIC, Ministerio de Cultura",
    year: 2010,
    type: "inventario institucional de leyendas Ticuna",
    url: "https://bibliotecanacional.gov.co/es-co/actividades/Publicaciones%20sobre%20las%20Bibliotecas%20P%C3%BAblicas/Documents/ABC%20del%20Bibliotecario.pdf",
    summary:
      "Enumera como leyendas Ticuna El sol, La luna, Los vegetales, Las aguas, El gavilán y Los micos boquiblancos, y resume sus núcleos.",
    limitation:
      "Es una síntesis de promoción de lectura y no reemplaza el texto completo, la grabación ni la atribución individual de 1981.",
  }),
  galante2018: source({
    title: "Animalidad y otredad en una muestra de literatura oral de Leticia, Amazonas",
    author: "Andrés González Galante",
    year: 2018,
    type: "tesis de análisis literario del corpus de Rodríguez de Montes",
    url: "https://es.scribd.com/document/871355828/u-821011",
    summary:
      "Analiza la transcripción del volumen de 1981 y cita el abandono, el engaño con harina y la transformación de los niños en micos.",
    limitation:
      "Es una lectura académica posterior alojada en una plataforma secundaria; depende del corpus publicado y no es otra tradición oral independiente.",
  }),
  moruapu2000: source({
    title: "Historias de los abuelos de Moruapü: versión libre en castellano",
    author:
      "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila",
    year: 2000,
    type: "compilación comunitaria para educación bilingüe Tikuna",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "Publica relatos atribuidos del Sol, la Luna, los alimentos y la canoa de Moe, útiles para distinguir variantes y personajes.",
    limitation:
      "Es una versión libre en castellano y sus relatos no se fusionan con la recopilación de Leticia como si fueran un único testimonio.",
  }),
  santos2010: source({
    title: "Narración tikuna del origen del territorio y de los humanos",
    author: "Abel Antonio Santos Angarita",
    year: 2010,
    type: "artículo académico basado en historia oral Tikuna",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/10900",
    summary:
      "Publica la narración de Marcelino Noé y mayores sobre Ngutapa, Yoí, Ípi, Wone, el agua, el huito, Eware y la pesca de la gente.",
    limitation:
      "Reúne aportes de más de una situación de narración; la revisión conserva esa atribución y no rellena sus silencios.",
  }),
  contraSilencio: source({
    title: "Contra el silencio: lenguas originarias y justicia lingüística",
    author: "Agustín Panizo; entrevista y registros de Paula Letts",
    year: 2022,
    type: "libro institucional con testimonios Ticuna atribuidos",
    url: "https://diliandes.funproeibandes.org/wp-content/uploads/2023/12/Contra-el-silencio.-Lenguas-originarias-y-justicia-linguistica-libro.pdf",
    summary:
      "Publica la narración de José Aparicio Fonseca sobre la lupuna y pasajes de Humberto Yumbato sobre Techi, Ípi, el huito y la pesca humana.",
    limitation:
      "El capítulo enlaza testimonios de comunidades peruanas y comentarios de entrevista; cada pasaje debe conservar su procedencia particular.",
  }),
  arbolAgua: source({
    title: "Madre Selva: El árbol de Agua Grande",
    author: "Leidy Constanza Duarte Castro; Universidad Distrital Francisco José de Caldas",
    year: 2016,
    type: "proyecto académico de creación que reproduce un mito Ticuna",
    url: "https://repository.udistrital.edu.co/bitstreams/931e1d18-8afd-4157-87f8-eb08062b5842/download",
    summary:
      "Reproduce la secuencia de Yoí e Ípi, las dos ardillas, el perezoso, el ají o las hormigas y la caída del árbol que forma aguas.",
    limitation:
      "No identifica al narrador de la versión reproducida y adapta el relato dentro de un proyecto de danza; se usa como contraste, no como fuente oral primaria.",
  }),
  goulard2009: source({
    title: "Entre mortales e inmortales: el ser según los Ticuna de la Amazonía",
    author: "Jean-Pierre Goulard",
    year: 2009,
    type: "monografía antropológica de acceso abierto",
    url: "https://books.openedition.org/ifea/3927",
    summary:
      "Analiza personas, transformaciones, parentesco y episodios de Yoí e Ípi sin reducir el ciclo a una cronología simple.",
    limitation:
      "Es una interpretación antropológica y no reemplaza la voz de cada narrador ni prueba que una variante pertenezca a todas las comunidades.",
  }),
  lopez2002: source({
    title: "Los ticuna frente a los procesos de nacionalización en la frontera entre Brasil, Colombia y Perú",
    author: "Claudia Leonor López Garcés",
    year: 2002,
    type: "artículo académico de antropología fronteriza",
    url: "https://www.redalyc.org/pdf/1050/105015289004.pdf",
    summary:
      "Sitúa la circulación de variantes del ciclo Ticuna en comunidades atravesadas por fronteras y políticas nacionales.",
    limitation:
      "Aporta contexto histórico y territorial; no confirma por sí solo cada escena de las siete rutas.",
  }),
  icanhProfile: source({
    title: "Pueblo Tikuna",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "perfil institucional del pueblo",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/TIKUNA.php",
    summary:
      "Sitúa al pueblo Tikuna en la cuenca amazónica transfronteriza y aporta contexto histórico y cultural contemporáneo.",
    limitation:
      "Es una síntesis institucional y no se usa para completar escenas, prácticas ni una versión única de los relatos.",
  }),
  parques2024: source({
    title: "Siete cantos de la sabiduría ancestral Tikuna",
    author: "Parques Nacionales Naturales de Colombia y comunidades Tikuna",
    year: 2024,
    type: "publicación institucional y comunitaria de contexto vivo",
    url: "https://www.parquesnacionales.gov.co/sala-de-prensa/publicaciones/7-cantos-de-la-sabiduria-ancestral-tikuna/",
    summary:
      "Documenta continuidad de lengua, memoria y relaciones territoriales en el Trapecio Amazónico.",
    limitation:
      "No narra estos argumentos ni se usa para reproducir cantos o conocimientos ceremoniales.",
  }),
  urbinaTree: source({
    title: "Las palabras del origen: Moniya Amena, el árbol de la abundancia",
    author: "Fernando Urbina Rangel; relato de Kïneraï y otros narradores Huitoto",
    year: 2010,
    type: "fuente comparativa amazónica directa y atribuida",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "Publica otro gran árbol amazónico cuya caída distribuye alimentos y organiza el mundo humano.",
    limitation:
      "El árbol Huitoto reparte frutos y no forma el Amazonas mediante el perezoso y las ardillas; la comparación no implica influencia.",
  }),
  grimms: source({
    title: "Grimms' Fairy Tales: Hansel and Gretel and The Seven Ravens",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    year: 1812,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "Conserva cuentos europeos de niños abandonados y de hermanos transformados en aves.",
    limitation:
      "Los bosques, agentes, transformaciones y desenlaces europeos difieren de las relaciones amazónicas; no prueban origen compartido.",
  }),
  eskimoMoon: source({
    title: "Eskimo Folk-Tales: The Sun and the Moon",
    author: "Knud Rasmussen; Project Gutenberg",
    year: 1921,
    type: "fuente folclórica comparativa traducida",
    url: "https://www.gutenberg.org/ebooks/46972",
    summary:
      "Publica un relato ártico donde dos hermanos quedan asociados con Sol y Luna después de una transgresión y una persecución.",
    limitation:
      "Procede de otra ecología y otra historia de traducción; no contiene wocha, huito, chagra ni el árbol de ascenso Ticuna.",
  }),
  ovidPhaethon: source({
    title: "Metamorphoses, Book 2: Phaethon",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D2%3Acard%3D1",
    summary:
      "Narra el intento de conducir el carro solar y el peligro de una luz celeste fuera de medida.",
    limitation:
      "El carro, la filiación divina y la catástrofe grecorromana no aparecen en el ascenso Ticuna mediante achiote.",
  }),
  ovidMonkeys: source({
    title: "Metamorphoses, Book 14: the Cercopes",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D14%3Acard%3D75",
    summary:
      "Incluye la transformación punitiva de los Cercopes en monos y permite comparar causas distintas de una forma animal.",
    limitation:
      "Es una sanción divina por engaños en un poema romano; no trata niños huérfanos, hambre ni cuidado familiar.",
  }),
  demeter: source({
    title: "Homeric Hymn 2 to Demeter",
    author: "tradición griega; Perseus Digital Library",
    type: "fuente religiosa comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0138%3Ahymn%3D2",
    summary:
      "Relaciona la pérdida de una mujer, el hambre de la tierra y el retorno del crecimiento vegetal.",
    limitation:
      "La agricultura estacional griega y el pacto olímpico no contienen una canasta robada ni la chagra amazónica.",
  }),
  genesisCreation: source({
    title: "Genesis 1-3: luminaries, plants and the garden",
    author: "New Revised Standard Version Updated Edition; Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%201-3&version=NRSVUE",
    summary:
      "Presenta astros, aguas y plantas dentro de una secuencia de creación y una pérdida ligada al alimento.",
    limitation:
      "La creación por mandato, el jardín y la prohibición no equivalen a ascensos humanos, árboles-río o canastas Ticuna.",
  }),
  genesisBrothers: source({
    title: "Genesis 4: Cain and Abel",
    author: "New Revised Standard Version Updated Edition; Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%204&version=NRSVUE",
    summary:
      "Narra una ruptura violenta entre hermanos y la separación posterior del sobreviviente.",
    limitation:
      "No contiene Techi, huito, transformación en peces ni fundación de pueblos mediante pesca; no es clave explicativa del ciclo Ticuna.",
  }),
  plutarchRomulus: source({
    title: "Plutarch, Life of Romulus",
    author: "Plutarco; Perseus Digital Library",
    type: "fuente histórica-literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A2008.01.0061%3Achapter%3D1",
    summary:
      "Conserva la tradición de dos hermanos cuya rivalidad y separación quedan asociadas con un origen colectivo.",
    limitation:
      "La fundación urbana romana, el fratricidio y la cronología heroica son ajenos al tejido amazónico de Yoí e Ípi.",
  }),
};

const sourceKeysBySlug = {
  "origen-del-sol": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "moruapu2000",
    "santos2010",
    "goulard2009",
    "icanhProfile",
    "ovidPhaethon",
    "genesisCreation",
  ],
  "origen-de-la-luna": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "moruapu2000",
    "goulard2009",
    "icanhProfile",
    "eskimoMoon",
    "ovidPhaethon",
    "genesisCreation",
  ],
  "origen-del-agua": [
    "contraSilencio",
    "arbolAgua",
    "santos2010",
    "moruapu2000",
    "goulard2009",
    "icanhProfile",
    "urbinaTree",
    "genesisCreation",
  ],
  "origen-de-los-vegetales-cultivaldos": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "galante2018",
    "moruapu2000",
    "goulard2009",
    "icanhProfile",
    "demeter",
    "genesisCreation",
  ],
  "origen-del-gavilan": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "galante2018",
    "goulard2009",
    "icanhProfile",
    "parques2024",
    "ovidMonkeys",
    "grimms",
  ],
  "origen-de-los-micos-boquiblancos": [
    "rodriguezCatalog",
    "abcBibliotecario",
    "galante2018",
    "goulard2009",
    "icanhProfile",
    "parques2024",
    "grimms",
    "ovidMonkeys",
  ],
  "moe-e-ipi": [
    "contraSilencio",
    "santos2010",
    "goulard2009",
    "icanhProfile",
    "lopez2002",
    "moruapu2000",
    "genesisBrothers",
    "plutarchRomulus",
  ],
};

export function pickTicunaResidualSources(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`Ruta Ticuna residual desconocida: ${slug}`);
  return keys.map((key) => {
    const selected = ticunaResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}`);
    return selected;
  });
}
