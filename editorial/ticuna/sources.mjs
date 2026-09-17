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

export const ticunaSources = {
  santos2010: source({
    title: "Narración tikuna del origen del territorio y de los humanos",
    author: "Abel Antonio Santos Angarita",
    year: 2010,
    type: "artículo académico basado en historia oral Tikuna",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/10900",
    summary:
      "Publica la narración del profesor Marcelino Noé y aportes de mayores sobre Mowíchina, Ngutapa, Yoí, Ípi, Wone, Eware y el origen de los humanos.",
    limitation:
      "La edición y las glosas pertenecen al autor; esta revisión parafrasea solo los episodios públicos y no reproduce fórmulas rituales.",
  }),
  moruapu2000: source({
    title: "Historias de los abuelos de Moruapü: versión libre en castellano",
    author:
      "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila",
    year: 2000,
    type: "compilación de relatos de mayores para educación bilingüe Tikuna",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "Atribuye y publica los relatos del Sol, la Luna, el friaje y la canoa de Moe recogidos con narradores Tikuna de varias comunidades.",
    limitation:
      "Es una versión libre en castellano. La página identifica al narrador de cada relato y evita tratar la traducción como texto literal.",
  }),
  goulard2009: source({
    title: "Entre mortales e inmortales: el ser según los Ticuna de la Amazonía",
    author: "Jean-Pierre Goulard",
    year: 2009,
    type: "monografía antropológica de acceso abierto",
    url: "https://books.openedition.org/ifea/3927",
    summary:
      "Analiza la relación entre cuerpos, inmortales, parentesco y territorio en versiones Ticuna del ciclo de Yoí e Ípi.",
    limitation:
      "Es una interpretación antropológica comparativa y no sustituye la voz de los narradores identificados en las fuentes principales.",
  }),
  lopez2002: source({
    title:
      "Los ticuna frente a los procesos de nacionalización en la frontera entre Brasil, Colombia y Perú",
    author: "Claudia Leonor López Garcés",
    year: 2002,
    type: "artículo académico de antropología fronteriza",
    url: "https://www.redalyc.org/pdf/1050/105015289004.pdf",
    summary:
      "Documenta cómo distintas versiones del ciclo de origen dialogan con fronteras nacionales y experiencias históricas contemporáneas.",
    limitation:
      "Aporta contexto sobre variantes y nacionalización; no es la fuente narrativa de los episodios resumidos.",
  }),
  minCultura: source({
    title: "Caracterización del pueblo Tikuna",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20TIKUNA.pdf",
    summary:
      "Sitúa al pueblo Tikuna en Colombia, Perú y Brasil y resume la centralidad de Yoí, Ípi, Wone y el territorio amazónico.",
    limitation:
      "Es una síntesis institucional y se usa como contexto, no para completar escenas ausentes en los relatos publicados.",
  }),
  funaiFilm: source({
    title: "Yo'i e Ipi: filme producido por indígenas del pueblo Ticuna",
    author: "Museu do Índio / Funai y realizadores Ticuna de Umariaçu II",
    year: 2022,
    type: "presentación institucional de película indígena",
    url: "https://www.gov.br/museudoindio/pt-br/assuntos/noticias/2022/yo-i-e-ipi-assista-ao-filme-produzido-por-indigenas-do-povo-ticuna",
    summary:
      "Presenta una realización Ticuna construida mediante entrevistas con mayores sobre Ngutapa, Yoí, Ípi y la pesca del pueblo en Eware.",
    limitation:
      "La ficha resume la producción y no reemplaza el visionado ni autoriza a reproducir íntegramente testimonios o escenas.",
  }),
  parques2024: source({
    title: "Siete cantos de la sabiduría ancestral Tikuna",
    author: "Parques Nacionales Naturales de Colombia y comunidades Tikuna",
    year: 2024,
    type: "publicación institucional y comunitaria de contexto cultural",
    url: "https://www.parquesnacionales.gov.co/sala-de-prensa/publicaciones/7-cantos-de-la-sabiduria-ancestral-tikuna/",
    summary:
      "Muestra la continuidad contemporánea de la lengua, la memoria y el vínculo territorial Tikuna en el Trapecio Amazónico.",
    limitation:
      "No se usa para transcribir cantos ni como fuente de los argumentos míticos; aporta contexto vivo y una advertencia contra folklorizar.",
  }),
};

export function pickTicunaSources(primaryKey) {
  const keys = [
    primaryKey,
    primaryKey === "santos2010" ? "moruapu2000" : "santos2010",
    "goulard2009",
    "lopez2002",
    "minCultura",
    "funaiFilm",
    "parques2024",
  ];
  return [...new Set(keys)].map((key) => {
    const selected = ticunaSources[key];
    if (!selected) throw new Error(`Fuente Ticuna desconocida: ${key}`);
    return selected;
  });
}
