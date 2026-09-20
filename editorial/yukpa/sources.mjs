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

  // ——— Búsqueda profunda 2026-09-19 ———
  halbmayermundo2025: source({
    title: "El mundo que se daña. Transgresiones humanas, castigos cataclísmicos y la de-creación parcial del mundo entre los yukpa",
    author: "Ernst Halbmayer y Anne Goletz",
    year: 2025,
    type: "artículo de revista arbitrada",
    url: "https://revistas.ucm.es/index.php/REAA/article/view/99239",
    summary:
      "Es la fuente de la secuencia. Reúne versiones irapa, iroka y sokorhpa del diluvio: lluvias continuas de semanas y meses con una oscuridad prolongada, la huida a las dos montañas más altas de la Serranía del Perijá, Shkhimo y Tʉtarhi, que en Sokorhpa son personas y son las que instruyen a cuál subir; el desacuerdo sobre la causa, que en muchas versiones no se menciona; y los armadillos que hunden el agua y vuelven a separar tierra, cauce, monte y conuco. De aquí sale la frase del narrador irapa Kumateta —«se salvó la tierra, y quien lo arregló era el armadillo»— y la observación de que los animales eran yukpapi y sólo tomaron forma animal después de la re-diferenciación. También el incendio y la sequía posteriores en algunas versiones.",
    limitation:
      "Vecindad declarada: buena parte del material es del lado venezolano de la Serranía, del territorio irapa, y los autores escriben desde Marburg. Las versiones primarias del diluvio —Wilbert 1974, Armato 1988, Vannini y Armato 2001, Acuña Delgado 1998, Castillo 2016— se leen aquí de segunda mano, citadas con página pero no reproducidas; ninguna de ellas se pudo abrir en línea. El artículo tampoco fecha ni sitúa la narración de Kumateta más allá de identificarlo como irapa.",
  }),
  goletzRecibiendo2020: source({
    title: "Recibiendo el canto del armadillo: transmisión onírica de saberes entre un armadillo y una mujer sabia en Sokorpa, territorio yukpa al norte de Colombia",
    author: "Anne Goletz",
    year: 2020,
    type: "artículo de revista arbitrada",
    url: "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1794-24892020000400267",
    summary:
      "Sostiene al armadillo, que en este relato es quien arregla la tierra. Documenta la relación entre la mujer sabia Diocelina Restrepo y el armadillo Kamashrhush en Sokorpa, en el municipio de Becerril, Cesar, y explica qué es un tuwancha, «el que sabe»: el especialista que en algunas versiones del diluvio es quien avisa a la gente qué montaña debe escalar.",
    limitation:
      "No narra el diluvio. Es un estudio sobre transmisión onírica de saberes en una sola unidad territorial, Sokorpa, y su objeto es la comunicación con lo que no es humano. Se usa para el lugar del armadillo y para la figura del tuwancha, nunca para la secuencia del relato. SciELO Colombia sirve este artículo sólo por http: la versión https no responde, y se prefiere el enlace que funciona al que se ve mejor.",
  }),
  halbmayerTecendo2016: source({
    title: "Tecendo o mundo e as origens da vida como a conhecemos: noções de crescimento, fabricação e reprodução nos mitos de origem yukpa",
    author: "Ernst Halbmayer",
    year: 2016,
    type: "artículo de revista arbitrada",
    url: "https://www.revistas.usp.br/ra/article/view/116915",
    summary:
      "Da el marco conceptual que el relato necesita: owaya como mundo-espacio entre la tierra y el firmamento, owaya tamorhiya como el tiempo en que el mundo todavía se estaba haciendo, y la clasificación de la mitología yukpa publicada en cuatro complejos, de los cuales el diluvio pertenece al primero. Explica por qué los animales del episodio podían actuar como personas y sólo después quedaron fijados como animales.",
    limitation:
      "Está escrito en portugués, con versión inglesa en la misma ficha del artículo, y su tema es la transformación del mundo y el origen de la vida, no el diluvio: aporta los conceptos y no la secuencia. El campo es irapa, en Venezuela, e iroka y sokorpa, en Colombia, y el autor no nombra a los narradores de cada versión.",
  }),
  correayukpa2023: source({
    title: "Los yukpa: un pueblo móvil doblemente confinado. COVID-19 y gobierno propio en la serranía de Perijá (resguardo Iroka, Cesar, Colombia)",
    author: "Claudia Cano Correa, Claudia Patricia Platarrueda Vanegas, Sandra Carolina Portela García, Javier Clavijo Franco, Wilson Largo Sichacá y Herlinda Luisa Nieves Alarcón",
    year: 2023,
    type: "artículo de revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/2426",
    summary:
      "Impide que la montaña del relato se lea como paisaje. Describe el resguardo Iroka en la serranía de Perijá, la reducción progresiva de sus tierras, los despojos, las expulsiones y las violencias de larga data, y el gobierno propio con el que el pueblo responde. La altura a la que se sube en el mito es el mismo territorio que se ha ido perdiendo.",
    limitation:
      "Su objeto es el confinamiento durante la pandemia y el gobierno propio en un solo resguardo colombiano; no aporta material mítico ni versiones del diluvio.",
  }),
  halbmayerBailando2020: source({
    title: "Bailando recién nacidos, sometiendo enemigos, formando guerreros: el baile del niño como fuente de fuerza, vitalidad, y resistencia entre los yukpa",
    author: "Ernst Halbmayer",
    year: 2020,
    type: "artículo de revista arbitrada",
    url: "https://www.revistatabularasa.org/numero-36/13-halbmayer.pdf",
    summary:
      "Ilumina el final del relato, cuando hay que volver a sembrar. Explica el tami, la masa de maíz molido que fermenta y produce vitalidad, y el ciclo ritual asociado al maíz que el diluvio interrumpe y que hay que reactivar cuando el agua baja.",
    limitation:
      "Su objeto es el baile del recién nacido y la formación de personas fuertes; el maíz aparece como medio y no como tema, y el artículo no narra el diluvio. El material es sobre todo irapa, del lado venezolano.",
  }),
  mauriOfrendas2020: source({
    title: "Ofrendas, intercambios y otros modos de relación en las socio-cosmologías indígenas contemporáneas del área istmo-colombiana",
    author: "Mònica Martínez Mauri y Ernst Halbmayer",
    year: 2020,
    type: "artículo de revista arbitrada",
    url: "https://www.revistatabularasa.org/numero-36/02-martinez-halbmayer.pdf",
    summary:
      "Da el marco comparativo que usa Similitudes: define el área istmo-colombiana como una región con modos de relación propios, distintos de los amazónicos, y permite explicar por qué este relato se parece más a las cosmologías chibchas vecinas que a las de los pueblos caribes del sur con los que los yukpa comparten lengua.",
    limitation:
      "Es la introducción de un dossier de revista y no trata de los yukpa en particular: se usa para el encuadre regional y no aporta ningún dato del relato.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickYukpaSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
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
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = yukpaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Yukpa desconocida: ${visto}`);
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
