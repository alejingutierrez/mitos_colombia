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

export const yukpaSources = {
  halbMayer2016: source({
    title:
      "Transformación, diferencia y relación entre los Yukpa: notas sobre una ontología transformacional",
    author:
      "Ernst Halbmayer; trabajo de campo entre grupos Irapa, Iroka y Sokorpa",
    year: 2016,
    type: "artículo etnográfico comparativo con versiones atribuidas",
    url: "https://www.uni-marburg.de/de/fb03/ivk/fachgebiete/kultur-und-sozialanthropologie/fachgebiet/personen/halbmayer/116915-texto-do-artigo-233536-1-10-20161208.pdf",
    summary:
      "Distingue cuatro complejos narrativos Yukpa y compara nombres y episodios de creación, gemelos, astros, plantas cultivadas y transformaciones.",
    limitation:
      "Las versiones cambian entre subgrupos y narradores; la revisión no las funde como una sola voz ni completa secuencias ausentes.",
  }),
  halbMayerGoletz2018: source({
    title:
      "La realidad del mito: mitos de lxs Yukpa de Colombia y Venezuela",
    author:
      "Ernst Halbmayer y Anne Goletz; colaboración con narradores Iroka, Sokorpa e Irapa",
    year: 2018,
    type: "exposición bilingüe basada en trabajo etnográfico",
    url: "https://www.researchgate.net/publication/349711238_Die_Wirklichkeit_des_Mythos_Mythen_der_Yukpa_aus_Kolumbien_und_Venezuela_-_Eine_Ausstellung_La_realidad_del_mito_Mitos_de_lxs_Yukpa_de_Colombia_y_Venezuela_-_Una_exposicion",
    summary:
      "Publica adaptaciones breves sobre Aponto, Manurhacha, el pájaro carpintero y el ciclo de los gemelos Yirhwach con sus constelaciones.",
    limitation:
      "La exposición condensa narraciones orales que pueden durar mucho más; sus textos son ventanas públicas y no transcripciones completas.",
  }),
  halbMayerGoletz2025: source({
    title:
      "El mundo que se daña: transgresiones humanas, castigos cataclísmicos y la de-creación parcial del mundo entre los Yukpa",
    author: "Ernst Halbmayer y Anne Goletz",
    year: 2025,
    type: "artículo académico comparativo con materiales de campo",
    url: "https://revistas.ucm.es/index.php/REAA/article/download/99239/4564456574816/4564456770387",
    summary:
      "Compara versiones del diluvio, la separación entre Sol y Luna y otros cataclismos sin reducirlos siempre a castigos divinos.",
    limitation:
      "Algunas versiones incluyen incesto y violencia; la adaptación conserva su función narrativa sin convertir detalles sensibles en espectáculo.",
  }),
  minCulturaYukpa: source({
    title: "Caracterización del pueblo Yukpa",
    author: "Ministerio de Cultura de Colombia",
    type: "perfil institucional territorial y cultural",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20YUKPA.pdf",
    summary:
      "Describe territorio, lengua y una síntesis cosmológica que incluye dos soles, diluvio, hermanos Sol y Luna y la concepción del mundo como tejido.",
    limitation:
      "Es una caracterización general y no sustituye versiones narradas ni resuelve diferencias entre comunidades Yukpa.",
  }),
  meDuenoMaiz: source({
    title: "Mé ynetachako: la historia del dueño del maíz",
    author:
      "Comunidades Yukpa participantes; Fundación para el Desarrollo de los Pueblos Marginados y Ministerio de Educación Nacional",
    year: 2014,
    type: "libro bilingüe comunitario de Territorios Narrados",
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/plan-lectura-2021/territorios-narrados-parte-2/Me_ynetachako_la_historia_del_duen%CC%83o_del_Maiz.pdf",
    summary:
      "Publica con autorización de mayores la historia de Mé, Mésh, la ardilla, Atántocha, la llegada del maíz cariaco y la fiesta de cada cosecha.",
    limitation:
      "Es una edición pedagógica colectiva; no se usa para representar como idénticas todas las prácticas agrícolas de las comunidades Yukpa.",
  }),
  lecHisYup: source({
    title: "Lecturas históricas Yukpa",
    author:
      "Programa de educación bilingüe Yukpa; materiales de alfabetización y tradición oral",
    type: "material pedagógico bilingüe con narraciones breves",
    url: "https://lengamer.org/admin/language_folders/yukpa/user_uploaded_files/links/File/LecHisYup.pdf",
    summary:
      "Ofrece una adaptación breve del ciclo de Mé y contexto lingüístico para su lectura en yukpa y español.",
    limitation:
      "La versión es resumida y escolar; se usa como control lingüístico y no para añadir escenas al libro comunitario más amplio.",
  }),
  planVidaYukpa: source({
    title: "Plan de vida Yukpa: relaciones entre territorio y buen vivir",
    author: "María Franco",
    type: "artículo sobre territorio y plan de vida con relato de origen",
    url: "https://dialnet.unirioja.es/descarga/articulo/6108314.pdf",
    summary:
      "Recoge una versión donde Aponto forma personas de madera, hace sus articulaciones y les da movimiento y risa.",
    limitation:
      "El artículo no publica todos los ciclos Yukpa y su versión de origen debe permanecer atribuida, no combinarse como transcripción literal con otras.",
  }),
  externoYukpa2024: source({
    title:
      "Los Yukpa: conocimientos para la vida de un pueblo que camina",
    author:
      "Universidad Externado de Colombia y participantes del resguardo Iroka",
    year: 2024,
    type: "divulgación de colaboración académica y comunitaria",
    url: "https://www.uexternado.edu.co/revista-experto/los-yukpa-conocimientos-para-la-vida-de-un-pueblo-que-camina/",
    summary:
      "Aporta contexto contemporáneo sobre territorio, movilidad, maíz y producción colaborativa de conocimiento con la comunidad Iroka.",
    limitation:
      "No es una fuente narrativa para reconstruir episodios y no representa por sí sola a todos los subgrupos Yukpa.",
  }),
  andeanMyths: source({
    title: "Los mitos en la región andina",
    author:
      "Compilación académica; versión Yukpa basada en Kenneth Ruddle y Johannes Wilbert",
    type: "compilación comparativa de relatos publicados",
    url: "https://biblio.flacsoandes.edu.ec/libros/digital/45534.pdf",
    summary:
      "Publica el relato de los dos Soles, el engaño de Kopeco y la transformación de uno de los hermanos en Luna.",
    limitation:
      "Es una fuente secundaria y regional; se controla con estudios etnográficos posteriores antes de adaptar nombres o secuencias.",
  }),
};

export function pickYukpaSources() {
  const keys = [
    "halbMayer2016",
    "halbMayerGoletz2018",
    "halbMayerGoletz2025",
    "minCulturaYukpa",
    "meDuenoMaiz",
    "lecHisYup",
    "planVidaYukpa",
    "externoYukpa2024",
    "andeanMyths",
  ];
  return keys.map((key) => {
    const selected = yukpaSources[key];
    if (!selected) throw new Error(`Fuente Yukpa desconocida: ${key}`);
    return selected;
  });
}
