function source({
  title,
  author,
  year,
  originalYear,
  type,
  url,
  summary,
  limitation,
}) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    ...(originalYear ? { originalYear } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const nasaSources = {
  bernal1953: source({
    title: "Mitología y cuentos de la parcialidad de Calderas, Tierradentro",
    author: "Segundo Bernal Villa",
    year: 1953,
    type: "recolección etnográfica primaria",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/download/1898/1439/6287",
    summary:
      "Publica veintiséis relatos recogidos en Calderas con nombres de informantes, intérpretes y variantes diferenciadas.",
    limitation:
      "El registro pasó por traducción al castellano y por categorías antropológicas de 1953; no conserva el nasa yuwe de las narraciones.",
  }),
  villa1993: source({
    title: "Mitos y leyendas de Colombia, tomo I",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "compilación crítica de literatura oral",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=58546",
    summary:
      "Reproduce el corpus de Bernal, acredita su procedencia y advierte que contiene varias versiones y modalidades de una misma narración.",
    limitation:
      "No es un testimonio independiente: para los cuentos de Calderas depende del artículo de Bernal de 1953.",
  }),
  minculturaNasa: source({
    title: "Lenguas nasa yuwe y namtrik",
    author: "Ministerio de las Culturas, las Artes y los Saberes de Colombia",
    year: 2024,
    type: "caracterización lingüística y cultural oficial",
    url: "https://mng.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Documents/Biblioteca-Lenguas-Vivas-De-Colombia/VOL.%20IV%20TOMO%20I%20-%20Lenguas%20nasa%20yuwa%20y%20namtrik.pdf",
    summary:
      "Describe lengua, territorio, organización, héroes, trabajo de la tierra y cosmogonía desde bibliografía y procesos educativos contemporáneos.",
    limitation:
      "Es una síntesis institucional amplia y no una edición completa de cada relato de Calderas.",
  }),
  onicNasa: source({
    title: "Nasa",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos/2095-nasa",
    summary:
      "Presenta territorio, lengua, organización, casa, autoridad y continuidad histórica del pueblo Nasa desde una organización indígena nacional.",
    limitation:
      "Su escala es general y contemporánea; no prueba por sí sola detalles narrativos de un cuento local.",
  }),
  cricTerritory: source({
    title: "Territorio ancestral del pueblo Nasa entre el riesgo y la resistencia",
    author: "Consejo Regional Indígena del Cauca",
    year: 2010,
    type: "memoria territorial de organización indígena",
    url: "https://www.cric-colombia.org/portal/territorio-ancestral-del-pueblo-nasa-entre-el-riesgo-y-la-resistencia/",
    summary:
      "Sitúa Tierradentro como territorio ancestral Nasa y vincula memoria, autonomía, Juan Tama y defensa comunitaria.",
    limitation:
      "Es una intervención política y territorial contemporánea, no una transcripción de los relatos de 1953.",
  }),
  scieloCosmology: source({
    title: "Nidos de lengua y revitalización del nasa yuwe",
    author: "Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud",
    year: 2024,
    type: "investigación académica contemporánea",
    url: "https://www.scielo.org.co/scielo.php?pid=S1692-715X2024000200180&script=sci_arttext",
    summary:
      "Explica la relación entre lengua, territorio, señales, sueños, naturaleza y los tres espacios del mundo Nasa en procesos educativos actuales.",
    limitation:
      "Estudia revitalización lingüística y educativa; no establece una versión canónica de los cuentos de Calderas.",
  }),
  ferrari2022: source({
    title:
      "Palabrandar el mito: el relato fundacional nasa de Juan Tama en la versión oralitegráfica de Gustavo Yonda",
    author: "Simone Ferrari",
    year: 2022,
    type: "estudio académico de oralidad, escritura y arte visual Nasa",
    url: "https://www.orillas.net/orillas/index.php/orillas/article/download/445/450/1544",
    summary:
      "Compara versiones escritas de Juan Tama y estudia la obra bilingüe del diseñador Nasa Gustavo Yonda, construida con mayores de Tierradentro.",
    limitation:
      "Analiza mediaciones escritas y visuales contemporáneas; no reemplaza la escucha de una narración ritual situada.",
  }),
  unicaucaMemory: source({
    title:
      "Memoria narrativa y orden sociocultural en la etnoliteratura de Tierradentro",
    author: "Universidad del Cauca",
    type: "investigación académica sobre memoria narrativa Nasa",
    url: "https://repositorio.unicauca.edu.co/bitstream/handle/123456789/3514/Memoria%20narrativa%20y%20orden%20sociocultural%20en%20la%20etnoliteratura%20de%20Tierradentro_.pdf?isAllowed=y&sequence=1",
    summary:
      "Relaciona relatos de origen, agua, armonía, territorio y memoria cultural en Tierradentro desde fuentes Nasa y trabajo académico.",
    limitation:
      "Es una interpretación universitaria reciente y no una fuente primaria para todos los episodios del corpus.",
  }),
  wilches2005: source({
    title: "Proyecto Nasa: la construcción de un plan de vida de un pueblo que sueña",
    author: "Gustavo Wilches-Chaux",
    year: 2005,
    type: "memoria de proceso comunitario y territorial",
    url: "https://www.agr.una.py/descargas/biblioteca_digital_gestion_riesgos/P/proyecto_nasa%20Construcci%C3%B3n%20de%20un%20plan%20de%20vida%20de%20un%20pueblo%20que%20sue%C3%B1a.pdf",
    summary:
      "Recoge el nacimiento de Juan Tama desde un manuscrito de Álvaro Ulcué y vincula agua, trueno, avalanchas e historia territorial.",
    limitation:
      "Integra múltiples voces en una memoria de planificación; la cita de Juan Tama proviene de una publicación anterior.",
  }),
  icanhTierradentro: source({
    title: "Tierradentro National Archaeological Park: Guidebook",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "guía oficial de patrimonio y territorio",
    url: "https://musicasdelrio.com/wp-content/uploads/2021/11/RDoc2_TIERRADENTRO_Guidebook_by_ICANH.pdf",
    summary:
      "Documenta paisaje, poblamiento, patrimonio arqueológico y presencia Nasa contemporánea en Tierradentro.",
    limitation:
      "La cultura de quienes construyeron los hipogeos no puede identificarse automáticamente con el pueblo Nasa actual.",
  }),
  ovid: source({
    title: "Metamorphoses",
    author: "Ovidio",
    type: "fuente comparativa clásica",
    url: "https://ovid.lib.virginia.edu/",
    summary:
      "Reúne narraciones antiguas de transformación, petrificación, castigo, agua y paso entre formas humanas y no humanas.",
    limitation:
      "Compartir un motivo no demuestra contacto, origen común ni equivalencia cultural con una narración Nasa.",
  }),
  popolVuh: source({
    title: "Popol Vuh: Sacred Book of the Quiché Maya People",
    author: "Traducción y estudio de Allen J. Christenson",
    type: "fuente comparativa mesoamericana",
    url: "https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf",
    summary:
      "Ofrece una traducción crítica del Popol Vuh con episodios de creación, héroes, animales, fuego, oscuridad y cabezas separadas.",
    limitation:
      "La tradición k’iche’ maya posee historia, lengua y cosmología propias; la comparación se limita a motivos narrativos.",
  }),
  hesiod: source({
    title: "Theogony and Works and Days",
    author: "Hesíodo",
    type: "fuente comparativa griega",
    url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0132",
    summary:
      "Conserva relatos griegos sobre distribución de bienes, fuego, trabajo y consecuencias de una disputa entre humanos y potencias.",
    limitation:
      "No existe evidencia de dependencia entre estos textos griegos y la tradición oral de Calderas.",
  }),
};

export const defaultNasaSourceKeys = [
  "bernal1953",
  "villa1993",
  "minculturaNasa",
  "onicNasa",
  "cricTerritory",
  "scieloCosmology",
];

export function pickNasaSources(...keys) {
  const unique = [...new Set(keys)];
  return unique.map((key) => {
    const selected = nasaSources[key];
    if (!selected) {
      throw new Error(`Fuente Nasa desconocida: ${key}`);
    }
    return selected;
  });
}
