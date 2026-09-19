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

export const barasanaSources = {
  communityBook: source({
    title:
      "Hee Yaia Godo ~Bakari. El territorio de los Jaguares de Yuruparí. Conocimiento tradicional de las etnias del río Pirá Paraná para el cuidado del medio ambiente",
    author:
      "ACAIPI (Asociación de Autoridades Tradicionales Indígenas del río Pirá Paraná) y Fundación Gaia Amazonas",
    year: 2015,
    type: "investigación y publicación colectiva indígena",
    url: "https://gaiaamazonas.org/wp-content/uploads/2024/04/GaiaAmazonas-Hee_yaia_Godo-bakari.pdf",
    summary:
      "La obra de cabecera: la firman los propios pueblos del Pirá Paraná y acredita capítulo por capítulo al narrador, al traductor, a su etnia y a su comunidad —Hee Gu Reynel Ortega, ~Kubu Ricardo Marín, ~Kubu Uriel Betancour y el baya Jaime Giraldo entre ellos—. De aquí salen el surgimiento barasano, la Cuerda de Leche, los cerros-estantillos y los frutales silvestres.",
    limitation:
      "Es un bien colectivo de seis pueblos del Pirá Paraná —barasano, eduria, itana, bara, macuna y tatuyo—, y varios de sus capítulos los narra un sabedor macuna, carapana o tatuyo, no barasano. Cada ficha distingue lo acreditado a narradores barasanos de lo que viene de vecinos del mismo río. El PDF está maquetado a dos columnas y la extracción automática entrelaza pasajes.",
  }),
  ilv1974: source({
    title:
      "Folclor indígena de Colombia 1. «Texto barasano del sur: la historia de Rĩjocamacʉ»",
    author:
      "Antonio Barasana, Richard D. Smith y Connie Smith; Ministerio de Gobierno e Instituto Lingüístico de Verano",
    year: 1974,
    type: "texto bilingüe con narrador indígena acreditado",
    url: "https://archive.org/details/rosettaproject_bsn_vertxt-1",
    summary:
      "La muestra de folclor barasano recogida por el ILV en 1974, con Antonio Barasana como narrador acreditado: el ciclo de Rĩjocamacʉ, el episodio de Mení y sus hijas que se bañan, y las pocas páginas de texto barasano que existen fuera del libro del Pirá Paraná.",
    limitation:
      "Es una muestra de pocas páginas y corresponde a «barasano del sur», que puede no designar al mismo grupo del Pirá Paraná. El enlace es la copia del Rosetta Project en Internet Archive, que es la que tiene el texto: la ficha del propio editor (colombia.sil.org/resources/archives/19038) está en pie, pero su PDF devuelve 403.",
  }),
  cayon2013: source({
    title: "Pienso, luego creo. La teoría makuna del mundo",
    author: "Luis Cayón",
    year: 2013,
    type: "monografía etnográfica de acceso abierto",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/71",
    summary:
      "La etnografía makuna del Pirá Paraná, publicada por el ICANH con PDF gratuito. Sirve para contrastar la Anaconda Yeba, los ~Hadera/hanerã y la identificación de los ancestros que hace el libro de la ACAIPI.",
    limitation:
      "Es makuna, no barasana: pueblo vecino del mismo río, documentado como tal. Y no narra mitos, es una teoría del mundo; de hecho contradice al libro del Pirá Paraná, porque para los makuna el ancestro barasana es la Anaconda Pintada. Nunca se usa como fuente de creencia barasana.",
  }),
  palm: source({
    title:
      "The Palm and the Pleiades: Initiation and Cosmology in Northwest Amazonia",
    author: "Stephen Hugh-Jones",
    year: 1979,
    type: "monografía etnográfica con textos míticos",
    url: "https://ehrafworldcultures.yale.edu/cultures/sq19/documents/010",
    summary:
      "Etnografía barasana del Pirá Paraná hecha con trabajo de campo entre septiembre de 1968 y diciembre de 1970. Cierra con una selección de textos míticos, entre ellos el ciclo de Sol y Luna y el de Warimi, que es de donde la ficha heredada tomó su atribución.",
    limitation:
      "No se consultó en esta pasada: el enlace es la ficha de publicación de eHRAF —pública, con resumen e indización—, pero el texto sólo se lee por suscripción, y cambridge.org está fuera de servicio. Los episodios que las fichas le atribuyen vienen del contenido heredado y no se verificaron contra la obra.",
  }),
  torres: source({
    title:
      "Mito y cultura entre los Barasana: un grupo indígena tukano del Vaupés",
    author: "Alfonso Torres Laborde",
    year: 1969,
    type: "ficha de catálogo institucional, sin texto",
    url: "https://repository.icesi.edu.co/items/a77d1476-97cd-4bd0-a0c4-d6502e61202f",
    summary:
      "Trabajo de grado presentado en la Universidad de los Andes en 1969 sobre el mito y la cultura barasana. Es la obra a la que la ficha heredada de Luna atribuía las grafías Muyhu y Méneri-Ya.",
    limitation:
      "Esa atribución no está corroborada. El enlace es el registro de la Biblioteca Digital Icesi —handle hdl.handle.net/10906/116167—, que es una ficha de catálogo sin archivo adjunto: la propia búsqueda del repositorio lo marca como «sin contenido». No se localizó ninguna copia con texto en Uniandes ni en el Banco de la República, y los nombres propios de aquella ficha no aparecen en ninguna otra parte de la web indexada. Se cita para que el lector pueda ir al original impreso, no como respaldo de lo narrado.",
  }),
  pleiades: source({
    title: "As Plêiades e Escorpião na Cosmologia Barasana",
    author: "Stephen Hugh-Jones",
    year: 2017,
    type: "artículo etnoastronómico revisado por el autor",
    url: "https://periodicos.ufpe.br/revistas/revistaanthropologicas/article/view/231438",
    summary:
      "Relaciona constelaciones, estaciones, ríos, lluvias, peces y ritualidad en la cosmología barasana, y revisa el artículo original de 1982 del propio autor.",
    limitation:
      "Es contexto astronómico y estacional, no una transcripción independiente de ningún episodio. Ninguna ficha lo usó como fuente narrativa.",
  }),
  minCultura: source({
    title:
      "Hee yaia keti oka, conocimiento tradicional de los Jaguares de Yuruparí",
    author: "Ministerio de Cultura de Colombia",
    type: "ficha institucional de patrimonio cultural inmaterial",
    url: "https://patrimonio.mincultura.gov.co/salvaguardiapci/Lista-Representativa/Paginas/el-conocimiento-tradicional-de-los-jaguares-de-Yurupar%C3%AD.aspx",
    summary:
      "Sitúa el sistema de conocimiento vivo de los pueblos del Pirá Paraná, el barasano entre ellos, y su relación con territorio, plantas, animales y seres visibles e invisibles.",
    limitation:
      "Resume la manifestación patrimonial: no narra ningún episodio y no reemplaza a la publicación comunitaria. Es contexto, nunca fuente clave de un relato.",
  }),
  planVida: source({
    title: "Plan de Vida del Territorio Indígena del Río Pirá Paraná",
    author: "Consejo Indígena del Territorio del Pirá Paraná",
    year: 2025,
    type: "documento contemporáneo de gobierno propio",
    url: "https://jaguaresdeyurupari.org/wp-content/uploads/2025/11/PdV-PP-V061125-_-Digital.pdf",
    summary:
      "Expone desde el gobierno propio el sentido vigente de Hee Yaia Keti Oka, el territorio, la transmisión del conocimiento y el cuidado de la vida.",
    limitation:
      "No publica versión narrativa de ningún mito. Sirve para fechar la lectura contemporánea del territorio, nunca para completar escenas.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickBarasanaSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = barasanaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Barasana desconocida: ${visto}`);
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
