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

// Las cinco obras con las que se escribió el corpus tucano el 2026-09-19, cada
// una con la URL que se abrió y se cotejó contra el PDF en disco. Las ocho
// URLs heredadas —Icesi, Socioambiental (Gentil), Museu do Índio, FUNAI, Povos
// Indígenas, SAG-SSA, Cambridge— se retiraron: no eran las obras que la ficha
// usó, y el propio expediente de la reescritura pidió sacarlas.
export const tucanoSources = {
  fulop1954: source({
    title: "Aspectos de la cultura Tukana: Cosmogonía",
    author: "Marcos Fulop",
    year: 1954,
    type: "transcripción etnográfica de una narración tucano",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1865",
    summary:
      "Revista Colombiana de Antropología 3, pp. 99-137. Es la fuente madre: el ciclo de Yepá Huáke tal como lo narró Marcos Sierra, payé del caserío de Guadalajara sobre el río Paca, afluente del Papurí, con su hermano Manuel de intérprete, en la campaña del 13 de junio al 9 de julio de 1953 por comisión del Instituto Colombiano de Antropología.",
    limitation:
      "Fulop lo escribió de frente en la entrada: por el corto tiempo de la investigación y por haber consultado un solo informante, no se permitía asegurar la exactitud de la versión dada por Marcos Sierra. Es una versión, la de un hombre y un caserío, no la cosmogonía del pueblo tucano.",
  }),
  fulop1956: source({
    title: "Aspectos de la cultura Tukana: Mitología, parte I",
    author: "Marcos Fulop",
    year: 1956,
    type: "colección etnográfica de relatos tucano",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1801",
    summary:
      "Revista Colombiana de Antropología 5, pp. 337-373. Nueve conjuntos narrativos —entre ellos Boraró y Boraró Numió, Wejké y el pito, y la semilla de la yuca— recogidos en Guadalajara entre el 11 de junio y el 9 de septiembre de 1954, con los mismos Marcos Sierra de informante y Manuel Sierra de intérprete.",
    limitation:
      "El propio autor advierte en la nota preliminar que lo publicado es una porción muy pequeña de la mitología tucana total, y aplaza el análisis a que esté recogida entera. Arrastra además la reserva de 1954: un solo informante. El escaneo confunde u con v, y de ahí «Vejké» por Wejké.",
  }),
  maiaAndrello2019: source({
    title: "Ye'pâ-Di'iro-Mahsã, gente de carne da terra: os Tukano do rio Vaupés",
    author: "Arlindo Maia (Ye'pârã Oyé) y Geraldo Andrello",
    year: 2019,
    type: "artículo con coautoría tucano en revista arbitrada",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/74221",
    summary:
      "Mundo Amazónico 10(1), pp. 53-81. Un autor tucano y un antropólogo cuentan juntos el orden del mundo, la Canoa de Transformación y el reparto de los clanes desde el Vaupés de hoy. Es lo que permite leer a Fulop con nombres y términos que los propios tucano usan.",
    limitation:
      "Es del lado brasileño del Vaupés: vecindad documentada, no la misma comunidad de Guadalajara. «Canoa de transformación» es término suyo; Fulop sólo registra «barco del güío» y el nombre Pameriyekése, y no se le atribuye a Marcos Sierra.",
  }),
  lanaLana1995: source({
    title:
      "Antes o mundo não existia. Mitologia dos antigos Desana-Kẽhíripõrã",
    author:
      "Umusĩ Pãrõkumu (Firmiano Arantes Lana) y Tõrãmũ Kẽhíri (Luiz Gomes Lana)",
    year: 1995,
    type: "libro de autoría indígena, segunda edición",
    url: "https://acervo.socioambiental.org/acervo/livros/antes-o-mundo-nao-existia-mitologia-dos-antigos-desana-kehiripora-2a-ed-rev-ampl",
    summary:
      "Primer volumen de la colección Narradores Indígenas do Rio Negro: la mitología dictada por el kumu Umusĩ Pãrõkumu a su hijo, que la escribió en cuadernos desde 1968. Sirve para cotejar la canoa que sube el río, el Lago de Leche y la salida de los pueblos.",
    limitation:
      "Es desana, no tucano, y del lado brasileño: es la versión del clan Kẽhíripõrã en el Tiquié. Vecindad documentada dos veces —de pueblo y de frontera—: se usa para contrastar, nunca para completar lo que Fulop no trae.",
  }),
  hughJonesDominguez1981: source({
    title: "Historia del Vaupés",
    author:
      "Stephen Hugh-Jones; traducción de Camilo Domínguez y revisión de Julián Arturo",
    year: 1981,
    type: "artículo de historia regional",
    url: "https://revistas.unal.edu.co/index.php/maguare/article/view/29-51",
    summary:
      "Maguaré 1, Departamento de Antropología, Universidad Nacional de Colombia. Desmonta la idea del aislamiento prístino y reconstruye siglos de misión, caucho, comercio y escuela en el Vaupés. Es el marco que explica por qué en el ciclo aparecen el papel, el libro y los cargos de la república.",
    limitation:
      "Es historia regional de un área multiétnica, no etnografía tucano ni mitología: no aporta ninguna escena y no habla por la comunidad de Guadalajara.",
  }),
};

/**
 * Vía por entradas: cada mito declara su propia lista de claves, o de
 * `{ key, summary, limitation }` cuando quiere decir qué aporta esa obra a él
 * en particular. Sustituyó a `pickTucanoSources`, que armaba un reparto fijo de
 * siete con un solo interruptor —el primario— y por eso las siete fichas
 * citaban lo mismo.
 */
export function entradasPropias(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = tucanoSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente desconocida en tucano: ${visto}`);
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
