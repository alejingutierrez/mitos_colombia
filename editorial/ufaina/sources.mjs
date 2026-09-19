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

export const ufainaSources = {
  hildebrand1975: source({
    title: "Origen del mundo según los Ufaina",
    author: "Martín von Hildebrand",
    year: 1975,
    type: "registro etnográfico primario de narración oral",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1609",
    summary:
      "Publica el ciclo de los Imarikakana narrado principalmente por Guaraná Tanimuka, con un fragmento de Ñaki Tanimuka, y explica sus condiciones de registro.",
    limitation:
      "El autor reconoce una versión incompleta, alterada para un oyente externo y organizada en capítulos que los narradores no empleaban; excluye el Yuruparí por petición comunitaria.",
  }),
  hildebrand1984: source({
    title:
      "Notas etnográficas sobre el cosmos Ufaina y su relación con la maloca",
    author: "Martín von Hildebrand",
    year: 1984,
    type: "estudio etnográfico contrastado con varios sabedores Ufaina",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/177-210/16459",
    summary:
      "Relaciona la primera maloca, los cuatro soportes y los niveles del cosmos con un modelo vivo que organiza la experiencia cotidiana.",
    limitation:
      "Es una interpretación antropológica posterior y no autoriza a reconstruir detalles narrativos ausentes del registro de 1975.",
  }),
  frankyMahecha2013: source({
    title:
      "Historias de los abuelos, cuerpo y territorio entre los tanimuca y macuna",
    author: "Carlos Eduardo Franky y Dany Mahecha Rubio",
    year: 2013,
    type: "capítulo académico basado en investigación contemporánea",
    url: "https://www.researchgate.net/publication/306275641_Historias_de_los_abuelos_cuerpo_y_territorio_entre_los_tanimuca_y_macuna_amazonia_colombiana",
    summary:
      "Documenta a los Imarimakâra como Cuatro Seres Vivientes y explica la continuidad entre relatos, cuerpo, territorio y Camino del Pensamiento.",
    limitation:
      "Compara Tanimuka y Makuna; la edición conserva sus diferencias y no traslada secuencias de un pueblo al otro.",
  }),
  minCultura: source({
    title: "Tanimuca: otras denominaciones de la lengua y el pueblo",
    author: "Ministerio de Cultura de Colombia",
    type: "perfil institucional y sociolingüístico contemporáneo",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Documents/Tanimuca.pdf",
    summary:
      "Sitúa a las familias Tanimuka en Amazonas y Vaupés, registra Ufaina entre sus denominaciones y describe la transmisión intergeneracional de la lengua.",
    limitation:
      "Es una síntesis institucional con cifras de distintas fechas; se usa para presencia y lengua actuales, no como fuente de la trama.",
  }),
  parquesYaigoje: source({
    title: "Parque Nacional Natural Yaigojé Apaporis",
    author:
      "Parques Nacionales Naturales de Colombia y autoridades del Yaigojé Apaporis",
    type: "fuente territorial e institucional contemporánea",
    url: "https://www.parquesnacionales.gov.co/nuestros-parques/pnn-yaigoje-apaporis/",
    summary:
      "Identifica a los Yairi marâ o Tanimuka entre los pueblos del territorio y explica la relación entre sitios, creación y manejo del mundo.",
    limitation:
      "Describe un territorio multiétnico y no adjudica cada sitio ni cada relato exclusivamente al pueblo Ufaina.",
  }),
  hughJones2015: source({
    title: "A origem da noite e por que o sol é chamado de folha de caraná",
    author: "Stephen Hugh-Jones",
    year: 2015,
    type: "estudio comparativo de narrativas del noroeste amazónico",
    url: "https://www.scielo.br/j/sant/a/PGN6HrRSsC8ybV4QJgjHM6S/?lang=pt",
    summary:
      "Compara versiones sobre la obtención de la noche entre pueblos del Alto Río Negro e identifica la secuencia Ufaina registrada por Hildebrand.",
    limitation:
      "La comparación ilumina motivos regionales, pero no demuestra identidad, copia ni una versión panamazónica única.",
  }),
  arhem2004: source({
    title: "Etnografía Makuna: tradiciones, relatos y saberes de la Gente de Agua",
    author:
      "Kaj Århem, Luis Cayón, Gladys Angulo, Maximiliano García y narradores Makuna",
    year: 2004,
    type: "etnografía colaborativa y fuente comparativa regional",
    url: "https://acervo.socioambiental.org/acervo/livros/etnografia-makuna-tradiciones-relatos-y-saberes-de-la-gente-de-agua",
    summary:
      "Documenta la versión Makuna en la que los Ayawa derriban un árbol del que salen aguas y peces, paralelo regional del episodio Ufaina.",
    limitation:
      "Es una tradición Makuna, no una variante que pueda incorporarse a la narración Ufaina ni una fuente para vestir o ritualizar sus imágenes.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickUfainaSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
    "hildebrand1975",
    "hildebrand1984",
    "frankyMahecha2013",
    "minCultura",
    "parquesYaigoje",
    "hughJones2015",
    "arhem2004",
  ];
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ufainaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Ufaina desconocida: ${visto}`);
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
