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

export const koguiSources = {
  reichel1951: source({
    title: "Los Kogi: una tribu de la Sierra Nevada de Santa Marta, tomo II",
    author: "Gerardo Reichel-Dolmatoff; relatos atribuidos a distintos narradores Kogui",
    year: 1951,
    type: "corpus etnográfico primario de mitología y religión",
    url: "https://biblio.flacsoandes.edu.ec/libros/digital/58546.pdf",
    summary:
      "Publica las secuencias que sustentan las diecinueve fichas del corpus principal e identifica relatores como Seye Ababi Makó y Benito Sontinkama.",
    limitation:
      "La obra fue registrada y editada por un investigador externo en las décadas de 1940 y 1950; sus traducciones, categorías y selección no equivalen a la totalidad del conocimiento Kogui.",
  }),
  preuss1993: source({
    title:
      "Visita a los indígenas Kágaba de la Sierra Nevada de Santa Marta",
    author: "Konrad Theodor Preuss; traducción de María Mercedes Ortiz",
    year: 1993,
    type: "edición española de textos y observaciones recogidos en 1914-1915",
    url: "https://openlibrary.org/works/OL23581955W/Visita_a_los_indigenas_Kagaba_de_la_Sierra_Nevada_de_Santa_Marta",
    summary:
      "Reúne textos en lengua Kogui, traducciones y observaciones tempranas sobre creación, ritual, máscaras, jaguares y personajes que reaparecen en el corpus posterior.",
    limitation:
      "La expedición estuvo ligada al coleccionismo etnográfico europeo y a relaciones desiguales; la traducción española es tardía y la ortografía de los nombres varía.",
  }),
  reichel1987: source({
    title: "The Great Mother and the Kogi Universe: A Concise Overview",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1987,
    type: "síntesis académica de cosmología Kogui",
    url: "https://ehrafworldcultures.yale.edu/cultures/sc07/documents/014",
    summary:
      "Describe a la Gran Madre, la estructura de nueve mundos, los siete puntos del universo, el templo como modelo cósmico y varias versiones de la creación.",
    limitation:
      "Es una interpretación de autor producida después de décadas de trabajo, no una transcripción comunitaria ni una voz única del pueblo Kogui.",
  }),
  pes2017: source({
    title:
      "Plan Especial de Salvaguardia del Sistema de Conocimiento Ancestral de los cuatro pueblos de la Sierra Nevada",
    author:
      "Pueblos Kogui, Arhuaco, Wiwa y Kankuamo; Ministerio de Cultura",
    year: 2017,
    type: "instrumento comunitario e institucional de salvaguardia",
    url: "https://mincultura.gov.co/direcciones/patrimonio-y-memoria/Documents/21-sistema-de-conocimiento-ancestral-SNSM-PES.pdf",
    summary:
      "Expone la responsabilidad Kággaba sobre espacios sagrados, gobierno propio, Ley de Origen y equilibrio territorial desde voces de autoridades de la Sierra.",
    limitation:
      "Es un documento colectivo de cuatro pueblos y de política patrimonial; no desarrolla cada relato antiguo ni debe usarse para homogeneizar diferencias internas.",
  }),
  malezhi2025: source({
    title: "Pueblo Kogui Malezhi: vivir en equilibrio con todos los seres",
    author: "Comunicación propia Kogui Malezhi; Ministerio de las Culturas",
    year: 2025,
    type: "relato transmedia de comunicación propia",
    url: "https://tuneldeltiemposantamarta.mincultura.gov.co/kogui-malezhi/index.html",
    summary:
      "Presenta en primera persona la relación del pueblo Kogui con la Sierra, el pensamiento que sostiene la vida, la resistencia y el cuidado del territorio.",
    limitation:
      "Es una presentación pública breve de una comunidad específica y no una edición crítica del corpus mitológico de comienzos del siglo XX.",
  }),
  decreto2018: source({
    title: "Decreto 1500 de 2018 sobre el territorio ancestral de la Línea Negra",
    author: "Presidencia de la República de Colombia",
    year: 2018,
    type: "norma construida con la cosmovisión de los cuatro pueblos de la Sierra",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/decreto_1500_2018.htm",
    summary:
      "Reconoce la Línea Negra como tejido de espacios sagrados conectado con la Ley de Origen y documenta funciones Kogui de lugares, madres y pagamentos.",
    limitation:
      "Su finalidad es jurídica y territorial, no narrativa; sirve para contextualizar lugares y responsabilidades, no para completar escenas ausentes.",
  }),
  loom1978: source({
    title: "The Loom of Life: A Kogi Principle of Integration",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1978,
    type: "artículo académico sobre tejido, sociedad y cosmología",
    url: "https://www.loc.gov/item/hlas-bi80101238/",
    summary:
      "Analiza el telar como modelo del cosmos y relaciona tejido, género, vida social, canto y pensamiento Kogui.",
    limitation:
      "Es una lectura antropológica del simbolismo; sus asociaciones no prueban por sí solas variantes de cada mito.",
  }),
  gauteovanCompilation: source({
    title: "Mitos y leyendas: Gauteován",
    author: "Compilación editorial basada en Karl Theodor Preuss y Walter Krickeberg",
    type: "síntesis secundaria histórica",
    url: "https://biblio.flacsoandes.edu.ec/catalog/resGet.php?resId=44622",
    summary:
      "Publica la síntesis que originó la ficha Gauteován: la Madre, el Sol, cuatro padres, máscaras ceremoniales y cerros asociados con los muertos.",
    limitation:
      "Usa vocabulario evolucionista y comparaciones con Muisca, Grecia y México; no identifica relator ni transcribe un relato Kogui continuo.",
  }),
  music1967: source({
    title: "The Music of Some Indian Tribes of Colombia",
    author: "Brian Moser y Donald Tayler",
    year: 1967,
    type: "documentación musical y etnográfica",
    url: "https://bibliotecanacional.gov.co/es-co/actividades/Publicaciones-sobre-el-patrimonio/Pieza-del-mes/Documents/lp_426-30-1-91_1-43.pdf",
    summary:
      "Registra que las creencias Kogui se centran en una Madre llamada Guateovan o Nebulwe y vincula música, linajes y ritualidad.",
    limitation:
      "Los autores advierten que su visita fue breve y su acceso a ceremonias limitado; no confirma todos los detalles de la compilación Gauteován.",
  }),
};

export function pickKoguiSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = koguiSources[key];
    if (!selected) throw new Error(`Fuente Kogui desconocida: ${key}`);
    return selected;
  });
}
