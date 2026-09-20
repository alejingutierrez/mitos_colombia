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

export const desanaSources = {
  lanaLana1995: source({
    title: "Antes o mundo não existia. Mitologia dos antigos Desana-Kẽhíripõrã",
    author: "Umusĩ Pãrõkumu (Firmiano Arantes Lana) y Tõrãmũ Kẽhíri (Luiz Gomes Lana)",
    year: 1995,
    type: "libro de autoría desana, segunda edición",
    url: "https://acervo.socioambiental.org/acervo/livros/antes-o-mundo-nao-existia-mitologia-dos-antigos-desana-kehiripora-2a-ed-rev-ampl",
    summary:
      "El primer volumen de la colección Narradores Indígenas do Rio Negro: la mitología desana dictada por el tuxaua, baya y kumu Umusĩ Pãrõkumu a su hijo Tõrãmũ Kẽhíri, que empezó a escribirla en 1968 sin grabadora, en cuadernos comprados por él. Sostiene las ocho fichas.",
    limitation:
      "Es la versión del clan Kẽhíripõrã, del Tiquié, en Brasil: una versión de clan, no la doctrina del pueblo desana, y del otro lado de la frontera. La reedición de 2019 cambió deliberadamente varios términos, así que no es intercambiable con esta.",
  }),
  dantes2019: source({
    title: "Antes o mundo não existia (reedición)",
    author: "Umusĩ Pãrõkumu y Tõrãmũ Kẽhíri",
    year: 2019,
    type: "reedición con revisión de terminología",
    url: "https://dantes.com.br/produto/antes-o-mundo-nao-existia/",
    summary:
      "La edición viva de la obra, con PDF gratuito en el sitio de la editorial.",
    limitation:
      "Su prólogo lista las sustituciones de vocabulario respecto de la edición de 1995 —firmamento por céu, demiurgo por espírito, navio por canoa—, de modo que no sirve para citar pasajes de aquella.",
  }),
  diakuruKisibi1996: source({
    title: "A mitologia sagrada dos antigos Desana do grupo Wari Dihputiro Põrã",
    author: "Diakuru (Américo Castro Fernandes) y Kisibi (Dorvalino Moura Fernandes)",
    year: 1996,
    type: "libro de autoría desana",
    url: "https://acervo.socioambiental.org/acervo/livros/mitologia-sagrada-dos-antigos-desana-do-grupo-wari-dihputiro-pora",
    summary:
      "La versión del clan Wari Dihputiro Põrã, escrita en Cucura a lo largo de cinco años, con borradores retraducidos al desana para que el padre los corrigiera.",
    limitation:
      "Es otra versión de clan y difiere de la de los Kẽhíripõrã en episodios enteros: no se funden.",
  }),
  galvao2004: source({
    title: "Livro dos antigos Desana-Guahari Diputiro Porã",
    author: "Tõrãmũ Bayaru (Wenceslau Sampaio Galvão) y Guahari Ye Ni (Raimundo Castro Galvão)",
    year: 2004,
    type: "libro de autoría desana",
    url: "https://acervo.socioambiental.org/acervo/livros/livro-dos-antigos-desana-guahari-diputiro-por%C3%A3",
    summary:
      "La versión del clan Guahari Diputiro Porã, del medio Papurí, en casi setecientas páginas. Es donde Miriá Porã Masü mata tres turmas de iniciados y por eso fracasan los tres primeros intentos de poblar el mundo.",
    limitation:
      "Tercera versión de clan, con su propio reparto de episodios; tampoco se funde con las otras dos.",
  }),
  amazonianCosmos1971: source({
    title: "Amazonian Cosmos. The Sexual and Religious Symbolism of the Tukano Indians",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1971,
    type: "monografía etnográfica",
    url: "https://lccn.loc.gov/73133491",
    summary:
      "La obra que dio a conocer la cosmología desana fuera de Colombia. Se hizo en una oficina de Bogotá, en seis meses de sesiones con Antonio Guzmán, desana del sib semé-peyáru-porá del Macú-paraná.",
    limitation:
      "Antonio Guzmán figura como informante y asistente de investigación, nunca como coautor. El enlace es el registro de la Library of Congress: la editorial descatalogó el título y no tiene página, y las copias con texto que circulan están en repositorios que alojan obra en derechos sin licencia declarada.",
  }),
  bruzzi1994: source({
    title: "Crenças e lendas do Uaupés",
    author: "Alcionilio Brüzzi Alves da Silva",
    year: 1994,
    type: "compilación misionera de tradición oral",
    url: "https://www.documentation.ird.fr/hor/fdi:010020940",
    summary:
      "Recopilación salesiana de creencias y leyendas del Uaupés, útil para cotejar episodios entre pueblos del alto río Negro.",
    limitation:
      "Es obra de un misionero y del lado brasileño: vecindad documentada, no fuente desana de primera mano.",
  }),
  ribeiro1994: source({
    title: "Desana Mythology: Oral Indigenous Literature",
    author: "Berta G. Ribeiro",
    year: 1994,
    type: "artículo académico",
    url: "https://doi.org/10.1080/08873267.1994.9976945",
    summary:
      "Presentación en inglés del libro de los Lana, traducida por Stanley Krippner, con el relato de cómo se preparó aquella primera edición.",
    limitation:
      "Es un artículo de revista, no un libro, y habla sobre la obra de los Lana más que sobre la mitología misma.",
  }),
  beksta1988: source({
    title: "A maloca tukano-dessana e seu simbolismo",
    author: "Casimiro Béksta",
    year: 1988,
    type: "estudio etnográfico",
    url: "http://www.etnolinguistica.org/biblio:beksta-1988-maloca",
    summary:
      "Estudio de la maloca tukano-desana y de su simbolismo espacial, con el que se leen las casas y los recorridos que nombran los relatos.",
    limitation:
      "La ficha está completa y curada, pero la descarga del PDF falla; y es material de contexto, no narración.",
  }),
  desanaTexts1989: source({
    title: "Desana Texts and Contexts. Origin Myths and Tales of a Tukanoan Tribe of the Colombian Northwest Amazon",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1989,
    type: "colección de textos con narradores acreditados",
    url: "https://lccn.loc.gov/95102090",
    summary:
      "La mejor fuente del lado colombiano: relatos del bajo Papurí y de Mitú con sus kumua acreditados, entre ellos Torame, que había visto a los misioneros de Montfort quemar los objetos sagrados de su pueblo.",
    limitation:
      "No existe ninguna copia legítima en línea: el editor austríaco no tiene presencia digital y lo que circula son archivos personales. El enlace es el registro de la Library of Congress; la lectura se hizo sobre el ejemplar digitalizado que hay en el expediente.",
  }),
  geografiaChamanistica: source({
    title: "Algunos conceptos de geografía chamanística de los indios Desana de Colombia",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1981,
    type: "capítulo de libro",
    url: "http://www.etnolinguistica.org/biblio:reichel-1981-algunos",
    summary:
      "Sobre cómo los desana leen el territorio: los lugares del relato como puntos de una geografía que el chamán recorre.",
    limitation:
      "Capítulo de un homenaje académico; el volumen anfitrión no está digitalizado en ningún repositorio universitario.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito.
 */
export function pickDesanaSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = desanaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Desana desconocida: ${visto}`);
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
