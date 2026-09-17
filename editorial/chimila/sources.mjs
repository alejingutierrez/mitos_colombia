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

export const chimilaSources = {
  reichel1945: source({
    title: "Mitos y cuentos de los indios Chimila",
    author: "Gerardo Reichel-Dolmatoff; narrados por Tangrutaya Mutsu",
    year: 1945,
    type: "corpus etnográfico primario de veintiún relatos",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/234/256/1567?inline=1",
    summary:
      "Publica los veintiún relatos del corpus histórico y atribuye su narración al cacique Tangrutaya Mutsu, registrada en castellano durante trabajo etnográfico.",
    limitation:
      "La mediación del investigador, la traducción al castellano, el contexto colonial de la disciplina y la voz de un solo narrador impiden tratar el corpus como inventario total o inmutable del pueblo Ette.",
  }),
  rocha2010: source({
    title:
      "El sol babea jugo de piña: antología de las literaturas indígenas del Atlántico, el Pacífico y la Serranía del Perijá",
    author: "Miguel Rocha Vivas, compilador; Ministerio de Cultura",
    year: 2010,
    type: "antología literaria indígena de fuente declarada",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll8/id/3/",
    summary:
      "Reedita y contextualiza literatura Ette dentro de una antología nacional, identifica las traducciones y remite a las fuentes etnográficas usadas.",
    limitation:
      "Es una compilación y no un nuevo registro oral; reproduce materiales anteriores y no vuelve independientes sus versiones.",
  }),
  mincultura2024: source({
    title:
      "Los Ette Ennaka, un pueblo que resiste y conserva sus tradiciones a pesar de siglos de violencia",
    author: "Ministerio de las Culturas, las Artes y los Saberes",
    year: 2024,
    type: "reportaje institucional con voces comunitarias",
    url: "https://mincultura.gov.co/noticias/Paginas/los-ette-ennaka-un-pueblo-que-resiste-y-conserva-sus-tradiciones-a-pesar-de-siglos-de-violencia.aspx",
    summary:
      "Recoge voces de Luis Eduardo Granados y César Rozo, emplea el nombre Ette Ennaka y documenta el relato de Yaau, Numirinta y las dos mazorcas de maíz cariaco.",
    limitation:
      "El reportaje sintetiza la narración y no publica una transcripción completa en ette taara ni las circunstancias detalladas de su transmisión.",
  }),
  buitRago2020: source({
    title:
      "Teogonías de los pueblos indígenas en Colombia: ¿una erótica sin dominación?",
    author: "Andrea Paola Buitrago Rojas",
    year: 2020,
    type: "artículo académico de análisis comparado",
    url: "https://www.redalyc.org/journal/5155/515562961006/html/",
    summary:
      "Reproduce y analiza el relato de Yunari Kraari como Tierra Madre, las cinco tierras y los ciclos de destrucción y renovación Ette.",
    limitation:
      "Su propósito es filosófico y comparativo; las citas proceden de publicaciones previas y no constituyen por sí mismas un nuevo testimonio comunitario.",
  }),
  onic2023: source({
    title: "Documento madre: Leyes de origen de los pueblos indígenas",
    author: "Organización Nacional Indígena de Colombia y Sistema de Monitoreo Territorial",
    year: 2023,
    type: "compendio organizativo de leyes de origen",
    url: "https://smt-onic.com/media/pdf/DOCUMENTO_MADRE_Leyes_de_Origen_vf_SMT-ONIC.pdf",
    summary:
      "Incluye la ley de origen Ette Ennaka, la creación atribuida a Papá Grande y una síntesis de las regiones superpuestas del universo.",
    limitation:
      "Es una compilación nacional; parte de la sección Ette cita el corpus de 1945 y debe distinguirse de testimonios contemporáneos originales.",
  }),
  nino2008: source({
    title:
      "Ciclos de destrucción y regeneración: experiencia histórica entre los ette del norte de Colombia",
    author: "Juan Camilo Niño Vargas",
    year: 2008,
    type: "artículo antropológico con trabajo etnográfico",
    url: "https://journals.openedition.org/histcrit/pdf/31620",
    summary:
      "Estudia cómo sueños, memoria histórica, Yunari y la quinta tierra articulan ciclos de destrucción, regeneración y acción ceremonial entre los Ette.",
    limitation:
      "Es una interpretación antropológica situada; no convierte todas las variantes, sueños o comentarios registrados en un único relato fijo.",
  }),
  uninorte2023: source({
    title:
      "Aspectos socio-históricos y farmacogenómica de los Chimilas Narakajmanta",
    author:
      "Enio Armando Hernández Agüirre, María Rosa Baldovino Díaz e Isis Arias Madera",
    year: 2023,
    type: "artículo académico con síntesis sociohistórica",
    url: "https://rcientificas.uninorte.edu.co/index.php/memorias/article/download/15385/214421447243?inline=1",
    summary:
      "Resume el Plan de Salvaguarda, el nombre Ette Ennaka, las cinco tierras, Yunari, Yaau, Numirinta y la creación de los Ette con dos mazorcas.",
    limitation:
      "La cosmogonía es contexto de un estudio biomédico y contiene interpretaciones especulativas de catástrofes que esta revisión no adopta.",
  }),
};

export function pickChimilaSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = chimilaSources[key];
    if (!selected) throw new Error(`Fuente Ette Ennaka desconocida: ${key}`);
    return selected;
  });
}

