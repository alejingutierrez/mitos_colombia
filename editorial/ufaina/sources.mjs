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

  // ——— Búsqueda profunda 2026-09-19 ———
  hildebrandNotas: source({
    title: "Notas etnográficas sobre el cosmos Ufaina y su relación con la maloca",
    author: "Martín von Hildebrand, Maguaré 2(2), pp. 177-210",
    type: "artículo de revista arbitrada",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/177-210",
    summary:
      "Amplía el episodio de la primera maloca en las pp. 191-196 con lo que el registro de 1975 no trae: que fue el menor quien propuso hacerla, el nombre del abuelo —Yaifotsirimaki, de yai jaguar, maki hijo y fotsi el conjunto—, los cuatro intentos con su nombre, la medida tomada entre las tetillas y trasladada al estómago, los cuatro postes centrales y los doce alrededor, y la advertencia de que los postes traen las enfermedades y los bejucos y la cerca traen los chismes y las peleas. Trae además las categorías Wehea y Ñamatu y los nombres de los hermanos con otra grafía.",
    limitation:
      "El repositorio de la Universidad Nacional fecha el número en 1983, mientras Hugh-Jones y Franky lo citan como 1984: el año no puede darse por cerrado y por eso se omite. Es una interpretación antropológica posterior al registro y no autoriza a completar detalles narrativos ausentes de 1975.",
  }),
  bourguecaminos1976: source({
    title: "Los caminos de los hijos del cielo. Estudio socio-territorial de los Kawillary del Cananarí y del Apaporis",
    author: "François Bourgue, Revista Colombiana de Antropología 20",
    year: 1976,
    type: "artículo de revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1703",
    summary:
      "Sostiene el primer paralelo de Similitudes, y es un paralelo episodio por episodio. El mito de los Munully, en las pp. 138-143, tiene la petición de hojas a Peri el gavilán con el bejuco que hay que soltar desde la cumbrera, las hojas que se van y se pasan por el Cananarí y el Apaporis mientras en el Pirá casi no hay; la noche pedida a Karu el sapo y abierta en el camino, con el aguacero del que sólo el menor se libra; y a Kamanatana, llamada suegra, que guarda el agua en el hueco del palo Itchuna. Permite marcar las diferencias con precisión.",
    limitation:
      "Es una tradición kawiyerí y no una variante ufaina: no puede incorporarse al relato. El trabajo de campo es de agosto de 1974 a enero de 1977 y el artículo no da el nombre del narrador. El PDF es un escaneo sin capa de texto.",
  }),
  apaporisPlan2023: source({
    title: "Plan de Vida. Territorio Indígena del Yaigojé Apaporis",
    author: "Consejo Indígena del Territorio de Yaigojé Apaporis",
    year: 2023,
    type: "documento comunitario de gobierno propio",
    url: "https://jaguaresdeyurupari.org/wp-content/uploads/2024/10/7.-Plan-de-Vida-Yaigoje-Apaporis_compressed.pdf",
    summary:
      "Es la voz más próxima a la propia y la que resuelve el problema del nombre. Escrito en primera persona por las veintidós comunidades del territorio entre 2018 y 2023, nombra a los creadores emparejados como los Ayawaroa y los Imarima'kana, a las madres originarias como las Ñamatu, llama a los tanimuka Yairimara, y traduce buen vivir como Jia Imarika, saber vivir, que es la misma glosa de Imarika que da el registro de 1975.",
    limitation:
      "Es un documento político-territorial y no una versión del mito. La palabra «Ufaina» no aparece en él ni una sola vez, lo que obliga a tratar ese nombre como registro de los años setenta y no como uso actual.",
  }),
  rodriguezPracticas2025: source({
    title: "Prácticas lingüísticas, identidades fluidas y exogamia: reflexiones a partir de la historia de los yaunas del río Apaporis",
    author: "Joan Sebastián Gutiérrez Rodríguez y Ana María Ospina Bozzi, Revista Colombiana de Antropología 61(3)",
    year: 2025,
    type: "artículo de revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/2850",
    summary:
      "Da la diferencia que explica por qué este ciclo no se funde con el de sus vecinos: los tanimuca se apartan de los demás tucano orientales por reclamar jaguares y no anacondas como ancestros míticos, por sus malocas circulares en vez de cuadradas y por usar almidón de piña en lugar de yagé en contextos rituales. Eso concuerda con que el abuelo dueño de las hojas se llame Yaifotsirimaki. Advierte además que etnónimos como yauna, tanimuca, letuama y macuna designan grupos que se autorreconocen distintos.",
    limitation:
      "Es un artículo sociolingüístico sobre los yaunas y no usa la palabra «Ufaina» ni una vez; no aporta ningún episodio del relato.",
  }),
  hildebrandmanufactura1976: source({
    title: "La manufactura del budare entre la tribu Tanimuka (Amazonía, Colombia)",
    author: "Elizabeth Reichel von Hildebrand, Revista Colombiana de Antropología 20, pp. 178-199",
    year: 1976,
    type: "artículo de revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1729",
    summary:
      "Confirma de forma independiente el dato que decide el nombre de la ficha: «la tribu Tanimuka, autodenominados Ufaina», habitantes del bajo Apaporis, el Guacayá, el Popeyaca y el Mirití-Paraná. Aporta además una segunda descripción del cosmos, siete mundos superpuestos en forma de budare siguiendo el modelo de la maloca.",
    limitation:
      "Su tema es la cerámica y la cosmología aparece de paso. Su cifra de población —unas 180 personas— no coincide con las que da el mismo equipo en 1975 y en Maguaré, y ninguna se publica.",
  }),
  arhemEcocosmologia2001: source({
    title: "Ecocosmología y chamanismo en el Amazonas: variaciones sobre un tema",
    author: "Kaj Århem, Revista Colombiana de Antropología 37, pp. 268-288",
    year: 2001,
    type: "artículo de revista arbitrada",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1285",
    summary:
      "Da el término de comparación makuna que el Plan de Vida empareja con los Imarima'kana al nombrar juntos a los Ayawaroa: el marco ecocosmológico y chamánico del bajo Apaporis desde el que se entiende que dos pueblos vecinos ocupen el mismo lugar estructural con nombres distintos.",
    limitation:
      "Es una tradición makuna y no una variante que pueda incorporarse a la narración ufaina. Sustituye a la Etnografía Makuna de 2004, cuya única dirección en el módulo era una ficha de catálogo sin texto.",
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
