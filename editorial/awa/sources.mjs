export const awaSources = {
  arcos2018: {
    title:
      "Narraciones de montaña y educación en la cultura del pueblo Ɨnkal Awá",
    authors: "Bayron Rodrigo Arcos Meza",
    publication: "Tesis doctoral, Universidad de Nariño",
    year: 2018,
    url: "https://sired.udenar.edu.co/7875/1/92632.pdf",
    summary:
      "Investigación con comunidades y narradores Awá. Publica en awapit y castellano tanto La Barbacha como el relato de los dos hermanos que caen al mundo de abajo.",
  },
  sinsajoa2022: {
    title:
      "Historias propias del pueblo Ɨnkal Awá como material didáctico para la enseñanza de las ciencias sociales",
    authors: "Deiby Orlando Sinsajoa Mambuscay",
    publication: "Tesis de maestría, Universidad de Nariño",
    year: 2022,
    url: "https://sired.udenar.edu.co/8175/1/2022306.pdf",
    summary:
      "Sistematización educativa basada en entrevistas Awá. Registra variantes del origen desde la barbacha y varias versiones del armadillo y los cuatro mundos.",
  },
  mora2012: {
    title: "Palabra y letra del pueblo Awá",
    authors: "Paula Andrea Mora Pedreros",
    publication: "Maestría en Etnoliteratura, Universidad de Nariño",
    year: 2012,
    url: "https://sired.udenar.edu.co/732/1/90666.pdf",
    summary:
      "Analiza el relato sagrado La Barbacha: origen del Inkal Awá y reproduce la versión preparada para el ordenamiento cultural y ambiental de UNIPA.",
  },
  planPialapi2021: {
    title: "Plan de Vida del Resguardo Pialapí Pueblo Viejo",
    authors: "Resguardo Indígena Awá Pialapí Pueblo Viejo",
    publication: "Ricaurte, Nariño",
    year: 2021,
    url: "https://reservalaplanada.com/wp-content/uploads/2023/11/Plan_de_vida_RPPV_Documento_Final_03_05_2021.pdf",
    summary:
      "Documento comunitario que presenta el árbol y las dos barbachas como referente de origen y describe Maza Su, el mundo inferior de quienes comen humo.",
  },
  planVidaPutumayo: {
    title: "Plan Integral de Vida del Pueblo Awá del Putumayo",
    authors:
      "Asociación de Cabildos Indígenas del Pueblo Awá del Putumayo (ACIPAP)",
    publication: "Repositorio de la Organización Internacional para las Migraciones",
    year: 2004,
    url: "https://repository.iom.int/handle/20.500.11788/394",
    summary:
      "Plan de vida que atribuye a Pedro Fidencio Nastacuaz una formulación del origen: los Awá son hijos de dos barbachas, blanca y negra, junto a un río.",
  },
  delOlvido2012: {
    title: "Del olvido a la memoria viva",
    authors: "Hernán Quintero Cardona",
    publication: "Organización Internacional para las Migraciones",
    year: 2012,
    url: "https://publications.iom.int/system/files/pdf/del_olvido.pdf",
    summary:
      "Publicación de OIM que reproduce, en el apartado sobre UNIPA y CAMAWARI, la secuencia del hombre nacido de la barbacha negra y la mujer de la blanca.",
  },
  gualti3: {
    title: "Gualti 3: Los cuatro mundos de la gente de la montaña",
    authors:
      "Resguardo Indígena Awá Pialapí Pueblo Viejo, Universidad de Nariño e Instituto Humboldt",
    publication:
      "Informativo sobre conocimientos ancestrales, ciencia, cultura y naturaleza del pueblo Awá",
    url: "https://reservalaplanada.com/wp-content/uploads/2024/01/IAVH_Bio-Narino-VOL-3.pdf",
    summary:
      "Material participativo del Resguardo Pialapí que identifica Maza Su con la gente que come humo, las hormigas, el armadillo y otros seres pequeños.",
  },
  altaquer2015: {
    title: "Mitos y leyendas de la etnia Awá en Altaquer",
    authors:
      "Jessica Basantes Flores, Blanca Rosa Casanova Narváez, Darío Yovanny Canticus Morán, Delia Silvana Canticus Morán y Karol Fernanda Silva Arévalo",
    publication: "Recopilación cultural de Altaquer, Nariño",
    year: 2015,
    url: "https://mitosyleyendasawa.blogspot.com/2015/11/mitos-y-leyendas-de-la-etnia-awa-en.html",
    summary:
      "Recopilación local que publica una versión completa del Mito del armadillo o los cuatro mundos, con los dos cazadores, la gente que come humo y el pago de maíz.",
  },
  botero2011: {
    title:
      "Algunos elementos religiosos del pueblo awá del suroccidente colombiano",
    authors: "Luis Fernando Botero Villegas",
    publication: "Gazeta de Antropología, 27(2), artículo 27",
    year: 2011,
    url: "https://www.gazeta-antropologia.es/wp-content/uploads/G27_27LuisFernando_Botero_Villegas.pdf",
    summary:
      "Aproximación etnográfica que registra un ciclo relacionado: cazadores, el dueño de los armadillos Kuesmasú y una hormiga arriera que ayuda a salir del mundo de abajo.",
  },
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickAwaSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = awaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Awá desconocida: ${visto}`);
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
