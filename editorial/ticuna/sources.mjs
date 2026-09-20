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
    type: "artículo de autoría tikuna en revista de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/10900",
    summary:
      "Abel Antonio Santos, lingüista tikuna, publica en Mundo Amazónico —Universidad Nacional sede Amazonia, acceso abierto— la narración del profesor Marcelino Noé y los aportes de los abuelos de Santa Lucía sobre Mowíchina, Ngutapa, Yoí, Ípi, Wone, Eware y el origen de los humanos.",
    limitation:
      "El artículo no fecha las narraciones de Marcelino Noé ni las de los abuelos de Santa Lucía: da comunidad y resguardo, pero no el año de la grabación, y el abuelo Manrique aparece sólo con ese nombre. La edición y las glosas son del autor; la ficha parafrasea episodios públicos y no reproduce fórmulas rituales.",
  }),
  moruapu2000: source({
    title: "Historias de los abuelos de Moruapü. Versión libre en castellano",
    author:
      "Hugo Armando Camacho González, Federico José Huaines Arara y Sergio Ramos del Águila (compiladores); narradores Dolores Noé, Augusto Coello y Remigio Santos",
    year: 2000,
    type: "compilación de tradición oral con narradores fechados",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/1335/",
    summary:
      "El libro que sostiene el Sol, la Luna, el friaje y la canoa de Moe. La Biblioteca Digital del Banco de la República publica el PDF completo, y cada relato lleva en el índice y en la nota al pie el nombre del narrador, la comunidad y el taller donde se grabó, entre 1993 y 1994.",
    limitation:
      "Es una versión libre en castellano, no un texto literal en tikuna. El escaneo tiene reconocimiento óptico defectuoso: hay letras cambiadas en casi todas las páginas y varios nombres propios sólo se leen por contexto. El libro alterna las grafías Moruapü y Muruapü en páginas contiguas.",
  }),
  nimuendaju1952: source({
    title: "The Tukuna",
    author:
      "Curt Nimuendajú; editado por Robert H. Lowie, traducido por William D. Hohenthal",
    year: 1952,
    type: "monografía etnográfica clásica, registro del editor",
    url: "https://www.ucpress.edu/books/the-tukuna",
    summary:
      "University of California Publications in American Archaeology and Ethnology 45: la etnografía clásica del pueblo, con una última sección de mitos de creación recogidos de narradores tikuna. Es la comparación obligada para el ciclo de Yoí e Ípi, la Luna y el origen de la humanidad.",
    limitation:
      "Es del lado brasileño: el trabajo de campo se hizo en el alto Solimões, y sus versiones se citan como variantes del mismo pueblo, no como la versión colombiana. La obra sigue en derechos —ISBN 9780520349681, edición electrónica de pago—, así que el enlace es el registro del editor; la lectura se hizo sobre el ejemplar digitalizado que hay en el expediente y en la Biblioteca Digital Curt Nimuendajú, que no ofrece TLS.",
  }),
  toruDuugu1985: source({
    title: "Torü Duü'ügü. Nosso povo",
    author:
      "Maestros tikuna de Vendaval y Campo Alegre —Reinaldo Otaviano do Carmo, Quintino Emílio Marques y Miguel Avelino Firmino— con la Organização Geral dos Professores Ticuna Bilíngues",
    year: 1985,
    type: "libro escolar bilingüe de autoría tikuna",
    url: "https://acervo.socioambiental.org/acervo/livros/toru-duuugu-nosso-povo",
    summary:
      "Ciento diez páginas en tikuna y portugués con los mitos principales del pueblo, escritas para las escuelas por maestros tikuna del alto Solimões. El acervo del Instituto Socioambiental ofrece el PDF completo.",
    limitation:
      "Fuente vecina: es del lado brasileño, del alto Solimões, y está en tikuna y portugués. Se usa para cotejar episodios, nunca como la versión colombiana de un relato.",
  }),
  faulhaber2020: source({
    title: "Sol e lua na iconografia Tikuna",
    author: "Priscila Faulhaber",
    year: 2020,
    type: "artículo de etnoastronomía en repositorio universitario",
    url: "https://sedici.unlp.edu.ar/handle/10915/132367",
    summary:
      "Cosmovisiones/Cosmovisões 1 (1), pp. 90-104: lee los dibujos tikuna donde el Sol y la Luna tuvieron existencia terrestre antes de subir al cielo, y los liga al origen de la gente, al parentesco y a las prescripciones de la ceremonia de la nueva muchacha. El repositorio SEDICI de la Universidad Nacional de La Plata publica el PDF.",
    limitation:
      "Trabaja con comunidades tikuna de Brasil y con iconografía, no con transcripción de relatos: es fuente vecina y de interpretación, no una segunda versión narrativa.",
  }),
  gomezPulgarin2011: source({
    title:
      "Dos mitos culturales de la alta Amazonia: relatos de un mundo humanizado",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2011,
    type: "artículo comparativo de acceso abierto",
    url: "https://revistas.unal.edu.co/index.php/imanimundo/article/view/18912",
    summary:
      "Mundo Amazónico 2, pp. 359-364: compara los mitos de origen tikuna y uitoto y muestra la complementariedad entre los gemelos míticos y la reorganización del mundo para que la gente pueda vivir en él.",
    limitation:
      "Es un artículo comparativo de seis páginas, no una recopilación: aporta el paralelo con los uitoto y la lectura de los gemelos, no el texto de ningún relato tikuna.",
  }),
  gomezPulgarin2012: source({
    title: "Rasgos lingüísticos en relatos míticos tikuna: una caracterización",
    author: "W. Eduardo Gómez Pulgarín",
    year: 2012,
    type: "tesis de maestría en repositorio institucional",
    url: "https://repositorio.unal.edu.co/items/7c7d7491-4077-4aa2-867b-f9453a589fea",
    summary:
      "Tesis de la Maestría en Estudios Amazónicos de la Universidad Nacional en Leticia sobre cuatro narraciones orales de la frontera colombo-peruana. Su ficha de corpus es la que fecha y atribuye el relato de origen de Humberto Chetanükü —grabado por Jean-Pierre Goulard en 1989 en Santa Rosa de Loreto— y el «Ngutapachiga» de Augusto Coello.",
    limitation:
      "De esos dos relatos aquí sólo se conoce la ficha de corpus —narrador, año, lugar, número de líneas—: no se leyó el texto de ninguno. La tesis analiza prosodia y cohesión gramatical, no reconstruye argumentos.",
  }),
  men2014: source({
    title: "Bamachigà. Historias del bama",
    author:
      "Docentes de la comunidad tikuna de Macedonia y San Martín de Amacayacu; Ministerio de Educación Nacional, serie Río de Letras — Territorios Narrados",
    year: 2014,
    type: "libro bilingüe tikuna-español de autoría comunitaria",
    url: "https://redaprende.colombiaaprende.edu.co/media/recursos/alliances/reception/resources/b4490f4b-0881-410c-b1a3-48c51b633aa2/T%C3%ADtulo_7._Historias_del_Bama.pdf",
    summary:
      "Relatos escritos por docentes tikuna del Amazonas colombiano dentro del proyecto educativo comunitario Naane ru duetagu, con glosario y texto bilingüe. ISBN 978-958-691-605-9; el catálogo del Ministerio publica el PDF completo.",
    limitation:
      "Es material escolar reescrito por docentes, no la transcripción de una grabación con narrador fechado: da el lado colombiano y contemporáneo de los relatos, no la versión de un mayor identificado.",
  }),
};

/**
 * Entradas propias por mito: una lista de claves, o de `{ key, summary,
 * limitation }` cuando el mito quiere decir qué le aporta esa obra a él en
 * particular. Antes había además un `pickTicunaSources(primaryKey)` que
 * armaba un dossier fijo de siete con un solo interruptor: eso era el reparto
 * en bloque, y por eso las seis fichas citaban lo mismo.
 */
export function entradasPropias(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = ticunaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente desconocida en ticuna: ${visto}`);
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
