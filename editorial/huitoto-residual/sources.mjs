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

export const huitotoResidualSources = {
  preussOne: source({
    title: "Religión y mitología de los uitotos, primera parte",
    author:
      "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto con asesoría de Gabriele Petersen de Piñeros",
    year: 1994,
    type: "edición académica de registros realizados en 1914",
    url: "https://pure.mpg.de/rest/items/item_576592_1/component/file_576590/content",
    summary:
      "Publica y analiza La vieja de la luna: la anciana llamada janai o taife, el bastón comestible, el cesto, la cueva y el humo de ají.",
    limitation:
      "La interpretación lunar es de Preuss y no se presenta como explicación definitiva de los narradores ni de comunidades actuales.",
  }),
  preussTwo: source({
    title: "Religión y mitología de los uitotos, segunda parte",
    author:
      "Konrad Theodor Preuss; transcripción y traducción revisadas por Eudocio Becerra y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe y repertorio lingüístico",
    url: "https://pure.mpg.de/pubman/item/item_576592_2/component/file_576591/witoto_preuss1994_2_s.pdf",
    summary:
      "Permite contrastar nombres, vocabulario y secuencias del corpus sin tratar grafías cambiantes como personajes independientes.",
    limitation:
      "Corresponde principalmente a la variedad mika y a una situación histórica concreta; no sustituye versiones posteriores localizadas.",
  }),
  tagliani: source({
    title: "Mitología y cultura huitoto",
    author: "Lino Tagliani",
    year: 1992,
    type: "estudio etnográfico y compilación narrativa",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/WIL00001.pdf",
    summary:
      "Documenta el origen donde Taife no logra salir del hueco y reproduce el ciclo de Nonuetoma con sus pruebas, transformaciones y desenlace.",
    limitation:
      "Combina trabajo de campo de 1983 a 1986 en Cuemaní con materiales anteriores; Nonuetoma se atribuye a Amazonía Peruana 7 de 1976 sin relator nombrado.",
  }),
  taglianiReview: source({
    title: "Reseña: Mitología y cultura huitoto",
    author: "William Torres; Boletín Museo del Oro",
    year: 1992,
    type: "reseña académica institucional",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/7024/7270",
    summary:
      "Explica el trabajo de Tagliani en Cuemaní y que el volumen mezcla relatos de estudiantes del centro Mama-Bué con textos publicados antes.",
    limitation:
      "Describe procedencia y método, pero no aporta otra versión independiente de Taife o Nonuetoma.",
  }),
  urbinaBook: source({
    title:
      "Las palabras del origen: breve compendio de la mitología de los uitotos",
    author:
      "Fernando Urbina Rangel; relato de Pablo Bigïdïma con traducción de Eudocio Becerra y Jitoma Zafiama",
    year: 2010,
    type: "compendio narrativo con relator, lugar y fecha identificados",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "Publica Kugï y Nokuerai, incluido el extravío de Joyareño y Rikoño, la persecución y la transformación final de Rikoño en lora.",
    limitation:
      "Es una edición de Fernando Urbina de un ciclo extenso; esta página conserva los créditos y no convierte sus comentarios en voz del relator.",
  }),
  cervantesUrbina: source({
    title:
      "Las palabras del origen: registro bibliográfico del compendio",
    author: "Biblioteca Virtual Miguel de Cervantes y Banco de la República",
    year: 2010,
    type: "registro bibliográfico institucional",
    url: "https://www.cervantesvirtual.com/portales/biblioteca_virtual_del_banco_de_la_republica/obra/las-palabras-del-origen-breve-compendio-de-la-mitologia-de-los-uitotos-878838/",
    summary:
      "Controla autoría, edición, institución de origen y acceso al compendio utilizado para Taik.",
    limitation:
      "No constituye una narración oral adicional ni resuelve por sí solo las diferencias entre episodios del ciclo.",
  }),
  onic: source({
    title: "Muina Murui",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil comunitario contemporáneo",
    url: "https://www.onic.org.co/pueblos/1125-muinane",
    summary:
      "Sitúa variedades lingüísticas, dispersión histórica, territorio y continuidad del pueblo Murui-Muina en Colombia.",
    limitation:
      "El perfil sintetiza identidades relacionadas y no valida por sí mismo ningún episodio narrativo de estas cuatro rutas.",
  }),
  mythEthics: source({
    title: "Mito y ética: una lectura del pensamiento mítico",
    author: "Fernando Urbina Rangel",
    year: 2010,
    type: "artículo académico de interpretación",
    url: "https://dialnet.unirioja.es/descarga/articulo/3703226.pdf",
    summary:
      "Ofrece criterios para leer perspectiva, cuidado, relaciones con animales y consecuencias sin convertir un relato en moraleja universal.",
    limitation:
      "Es una interpretación posterior y no reemplaza las narraciones ni autoriza una enseñanza total del pueblo.",
  }),
  yucaPaper: source({
    title: "La yuca como patrimonio culinario ancestral del pueblo uitoto",
    author: "Sabrina González Barbosa y Maricruz Romero Ugalde",
    year: 2024,
    type: "investigación reciente con memoria contemporánea",
    url: "https://cipres.sanmateo.edu.co/ojs/index.php/sosquua/article/download/1041/886/1732",
    summary:
      "Recoge una explicación contemporánea de Jitoma Zafiama sobre Taife, su permanencia bajo tierra y la existencia de otros taifes en el mundo.",
    limitation:
      "La comunicación se cita dentro de un estudio sobre yuca y no desarrolla La vieja de la luna ni reemplaza el texto de Preuss.",
  }),
  rodriguezBook: source({
    title: "Muestra de literatura oral en Leticia, Amazonas",
    author: "María Luisa Rodríguez de Montes; Instituto Caro y Cuervo",
    year: 1981,
    type: "monografía de recopilación y análisis",
    url: "https://libreriasiglo.com/8011-muestra-de-literatrua-oral-en-leticia-amazonas",
    summary:
      "Documenta la edición que contiene El diluvio y Guinadoma o el diluvio, además del estudio de narraciones recogidas en Leticia.",
    limitation:
      "La ficha comercial confirma la publicación, pero no muestra por sí sola el texto ni sus informantes.",
  }),
  guinadomaTranscript: source({
    title: "Guinadoma o el diluvio, transcripción de Rodríguez de Montes",
    author: "Hermanos Soto Flórez; recopilación de María Luisa Rodríguez de Montes",
    year: 1981,
    type: "reproducción consultable de la transcripción atribuida",
    url: "https://floodstories.wordpress.com/2025/07/17/16-44-b-i-rodriguez-de-montes-1981-spanish/",
    summary:
      "Reproduce las páginas 122 a 124: Anequi, el refugio sellado, los animales, Fusiñamuy, el descenso del agua y el tambor de Guinadoma.",
    limitation:
      "Es una reproducción web posterior; la ortografía y la puntuación siguen la edición de 1981, no una nueva consulta a las grabaciones.",
  }),
  contratiempo: source({
    title: "Investigación sobre músicas indígenas en Colombia, primera parte",
    author: "A Contratiempo",
    type: "revisión académica del archivo sonoro",
    url: "https://www.musigrafia.org/acontratiempo/files/ediciones/revista-13/pdf/Investigacion_sobre_musicas_indigenas_Parte1.pdf",
    summary:
      "Explica que Rodríguez de Montes grabó relatos entre 1975 y 1977 y reconoce a Lorenzo y José Soto Flórez, nacidos en La Chorrera y residentes en Leticia.",
    limitation:
      "Se concentra en música y archivo; no vuelve a narrar el diluvio completo ni determina la ubicación del cerro Anequi.",
  }),
  margeryFlood: source({
    title: "El mito del diluvio en Indoamérica",
    author: "Enrique Margery Peña",
    year: 1997,
    type: "estudio comparativo continental",
    url: "https://es.scribd.com/document/371936787/Libro-El-mito-del-diluvio-en-Indoamerica-Enrique-Margery-Pena-pdf",
    summary:
      "Indexa la versión Witoto que ordena subir al cerro Anequi y permite comparar su estructura con otros relatos americanos del agua.",
    limitation:
      "Es una síntesis comparativa y depende de Rodríguez de Montes para el testimonio Witoto; no es una línea oral independiente.",
  }),
  grimms: source({
    title: "Grimms' Fairy Tales: Hansel and Gretel",
    author: "Jacob y Wilhelm Grimm; Project Gutenberg",
    year: 1812,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/ebooks/2591",
    summary:
      "Conserva el extravío de dos hermanos, una casa engañosa, una anciana peligrosa y una fuga obtenida mediante atención y ayuda mutua.",
    limitation:
      "Es un cuento europeo editado durante el siglo XIX; no prueba parentesco, influencia ni equivalencia con Taife o Taik.",
  }),
  babaYaga: source({
    title: "Russian Fairy Tales: The Baba Yaga",
    author: "W. R. S. Ralston; Project Gutenberg",
    year: 1873,
    type: "fuente folclórica comparativa directa",
    url: "https://www.gutenberg.org/cache/epub/22373/pg22373-images.html",
    summary:
      "Reúne relatos de una anciana del bosque que amenaza a visitantes y cuyas pruebas pueden superarse mediante consejo y reciprocidad.",
    limitation:
      "Baba Yaga pertenece a tradiciones rusas y tiene variantes protectoras o donantes ausentes del episodio Huitoto de Taife.",
  }),
  odysseyTen: source({
    title: "Odyssey, Book 10: Circe",
    author: "Homero; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0136%3Abook%3D10",
    summary:
      "Presenta viajeros ante una casa peligrosa, transformación animal y una salida que depende de reconocer el engaño.",
    limitation:
      "Es poesía épica griega; no contiene a Joyareño, Rikoño, patos, parentesco amazónico ni transformación voluntaria en lora.",
  }),
  odysseyFour: source({
    title: "Odyssey, Book 4: Proteus",
    author: "Homero; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0136%3Abook%3D4",
    summary:
      "Narra el encuentro con Proteo, que cambia de forma repetidas veces mientras intentan obtener una respuesta.",
    limitation:
      "Las transformaciones son una defensa momentánea y no pruebas familiares, orígenes animales ni transmisión Huitoto.",
  }),
  ovidAchelous: source({
    title: "Metamorphoses, Book 9: Achelous and Hercules",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D9%3Acard%3D1",
    summary:
      "Aqueloo adopta varias formas durante un enfrentamiento y cada transformación cambia la relación de fuerzas.",
    limitation:
      "Es una lucha grecorromana entre rivales; no incluye suegro, chagra, animales originados ni hijos de Nonuetoma.",
  }),
  genesisFlood: source({
    title: "Genesis 6–9: the flood",
    author: "New Revised Standard Version Updated Edition; Bible Gateway",
    type: "fuente religiosa comparativa directa",
    url: "https://www.biblegateway.com/passage/?search=Genesis%206-9&version=NRSVUE",
    summary:
      "Narra una inundación, un refugio construido por advertencia y la convivencia temporal de personas y animales.",
    limitation:
      "El arca, el pacto y la selección de animales no aparecen en Guinadoma; la mención de Noé pertenece incluso al habla del informante de 1981.",
  }),
  ovidDeucalion: source({
    title: "Metamorphoses, Book 1: Deucalion and Pyrrha",
    author: "Ovidio; Perseus Digital Library",
    type: "fuente literaria comparativa directa",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D1",
    summary:
      "Presenta a una pareja que sobrevive en una elevación y participa en la renovación del mundo después del diluvio.",
    limitation:
      "No contiene a Anequi, Fusiñamuy, el tambor ni el refugio sellado de Guinadoma y no demuestra contacto histórico.",
  }),
};

const sourceKeysBySlug = {
  taife: [
    "preussOne",
    "tagliani",
    "taglianiReview",
    "yucaPaper",
    "onic",
    "mythEthics",
    "grimms",
    "babaYaga",
  ],
  taik: [
    "urbinaBook",
    "cervantesUrbina",
    "preussOne",
    "preussTwo",
    "onic",
    "mythEthics",
    "grimms",
    "odysseyTen",
  ],
  nonuetoma: [
    "tagliani",
    "taglianiReview",
    "preussOne",
    "preussTwo",
    "onic",
    "mythEthics",
    "odysseyFour",
    "ovidAchelous",
  ],
  "el-diluvio-guinadoma": [
    "guinadomaTranscript",
    "rodriguezBook",
    "contratiempo",
    "margeryFlood",
    "onic",
    "preussOne",
    "genesisFlood",
    "ovidDeucalion",
  ],
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickHuitotoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickHuitotoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = huitotoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickHuitotoResidualSourcesHeredadas(slug) {
  const keys = sourceKeysBySlug[slug];
  if (!keys) throw new Error(`Ruta Huitoto residual desconocida: ${slug}`);
  return keys.map((key) => {
    const selected = huitotoResidualSources[key];
    if (!selected) throw new Error(`${slug}: fuente desconocida ${key}`);
    return selected;
  });
}
