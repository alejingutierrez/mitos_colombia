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

export const uwaSources = {
  historiasAncestrales: source({
    title: "Historias ancestrales U’wa — Kajkin Luin Karita",
    author:
      "Institución Etnoeducativa U’wa Izketa Segovia; textos y traducción de Senén Ríos Santos y Camilo Delgado Rodríguez",
    year: 2020,
    type: "libro bilingüe de memoria comunitaria y etnoeducación",
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2020-12/Libro_UWA.pdf",
    summary:
      "Publica nueve narraciones seleccionadas y revisadas con niños, dinamizadores y autoridades U’wa de Norte de Santander, en castellano y u’wajka.",
    limitation:
      "Es una selección pedagógica pública de una tradición mucho más amplia; esta revisión la parafrasea y no reproduce sus textos ni ilustraciones.",
  }),
  osborn1995: source({
    title: "Las cuatro estaciones: mitología y estructura social entre los U’wa",
    author: "Ann Osborn",
    year: 1995,
    type: "monografía etnográfica y estudio de mitos cantados",
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll18/id/446/",
    summary:
      "Documenta la cosmología de colores, deidades, ciclos Reowa y Aya, el ordenamiento de las abejas y otros cantos Kubaruwa dentro de sus ceremonias estacionales.",
    limitation:
      "Se concentra en el clan Kubaruwa y en registros de las décadas de 1970 y 1980; no representa por sí sola todas las comunidades ni autoriza a separar cantos de su contexto.",
  }),
  leyesOrigenOnic: source({
    title: "Documento madre: Leyes de Origen de los pueblos indígenas de Colombia",
    author:
      "Secretaría Técnica de la Mesa Permanente de Concertación y Organización Nacional Indígena de Colombia",
    year: 2022,
    type: "síntesis indígena e interinstitucional de leyes de origen",
    url: "https://smt-onic.com/media/pdf/DOCUMENTO_MADRE_Leyes_de_Origen_vf_SMT-ONIC.pdf",
    summary:
      "Explica para el pueblo U’wa la unión creadora de los mundos de arriba y abajo, el universo de colores y la responsabilidad de los cantos en el sostenimiento del mundo.",
    limitation:
      "Es una síntesis comparativa nacional y remite a fuentes anteriores; no transcribe cada narración ni cada variación de clan.",
  }),
  caracterizacionMincultura: source({
    title: "Caracterizaciones de los pueblos indígenas de Colombia: Pueblo U’wa",
    author: "Dirección de Poblaciones, Ministerio de Cultura",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20UWA.pdf",
    summary:
      "Sitúa territorio, lagunas de origen, clanes, lengua, mitos Reowa y Aya, miel, autoridades y continuidad cultural U’wa.",
    limitation:
      "Resume bibliografía y planes de salvaguarda; algunos pasajes reflejan categorías institucionales o lecturas sincréticas que no deben uniformar las voces U’wa.",
  }),
  icanhUwa: source({
    title: "Pueblo U’wa",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "ficha etnográfica institucional",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/U%C2%B4WA.php",
    summary:
      "Confirma autodenominación, lengua, territorio en la Cordillera Oriental y continuidad de la defensa de la Madre Tierra.",
    limitation:
      "Es una ficha breve de contexto y no una fuente narrativa independiente.",
  }),
  mininteriorMitos: source({
    title: "Archivo de mitos de pueblos indígenas de Colombia",
    author: "Ministerio del Interior",
    type: "portal institucional de documentos narrativos",
    url: "https://www.mininterior.gov.co/direccion-de-asuntos-indigenas-rom-y-minorias/mitos/",
    summary:
      "Conserva el acceso institucional al compendio donde circuló la síntesis del mito U’wa de la creación y a otros archivos regionales.",
    limitation:
      "El portal reúne materiales de procedencias y calidades distintas; la edición contrasta su síntesis con Osborn y fuentes comunitarias.",
  }),
  alonsoCreacion: source({
    title: "El mito U’wa de la creación desde la psicología analítica",
    author: "Juan Carlos Alonso",
    year: 2008,
    type: "estudio comparativo basado en la investigación de Ann Osborn",
    url: "https://www.adepac.org/inicio/el-mito-uwa-de-la-creacion-desde-la-psicologia-analitica/",
    summary:
      "Presenta la secuencia de Rurcocá, Sira, Canwará, los mundos de colores y la creación del mundo intermedio a partir de registros de Osborn.",
    limitation:
      "Su lectura central es junguiana; esta revisión usa la secuencia documentada, no las equivalencias arquetípicas propuestas por el autor.",
  }),
  abejasScielo: source({
    title: "Calendario reproductivo en mujeres indígenas U’wa (Tunebo) de Boyacá, Colombia",
    author: "Carmen Elisa Flórez y otros",
    year: 2013,
    type: "artículo académico de contexto demográfico y cultural",
    url: "https://www.scielo.org.mx/scielo.php?pid=S1405-74252013000100007&script=sci_arttext",
    summary:
      "Recoge la centralidad social de las abejas sin aguijón como hijas del Sol, vinculadas con fertilidad, comienzo y continuidad de la vida U’wa.",
    limitation:
      "No publica el mito completo; remite al trabajo de Falchetti y Nates-Parra y se usa como corroboración temática.",
  }),
};

export function pickUwaSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = uwaSources[key];
    if (!selected) throw new Error(`Fuente U’wa desconocida: ${key}`);
    return selected;
  });
}
