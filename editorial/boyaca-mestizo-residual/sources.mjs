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

export const boyacaMestizoResidualSources = {
  villaPosseBuzaga: source({
    title: "Mitos y leyendas de Colombia, volumen II",
    author: "Eugenia Villa Posse, compiladora; Enrique Otero D’Costa, autor",
    year: 1993,
    type: "compilación digitalizada con reproducción completa del texto",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Reproduce El tesoro de Buzagá y atribuye la selección a Leyendas de Otero: Lope, Laserna, Iza, el mohán, la carga y el regreso sin tesoro.",
    limitation:
      "Villa Posse advierte que Otero recuerda y elabora materiales oídos; la pieza no es acta colonial ni transcripción literal de un informante identificado.",
  }),
  oteroCatalog: source({
    title: "Leyendas",
    author: "Enrique Otero D’Costa",
    year: 1936,
    type: "catálogo patrimonial de la edición de la Biblioteca Aldeana",
    url: "https://www.mediatheques.strasbourg.eu/doc/IGUANA_2/750237/leyendas-por-enrique-otero-d-costa",
    summary:
      "Controla autor, editor Minerva, año, extensión y pertenencia a la serie Historia y leyendas.",
    limitation:
      "El catálogo prueba la edición, pero no identifica el narrador campesino ni separa frase por frase tradición y elaboración de Otero.",
  }),
  historietasCatalog: source({
    title: "Historietas: leyendas y tradiciones colombianas",
    author: "Enrique Otero D’Costa; Academia Colombiana de Historia",
    year: 1934,
    type: "registro bibliográfico de colección anterior del autor",
    url: "https://biblioteca.academiahistoria.org.co/pmb/opac_css/index.php?id=4024&lvl=publisher_see",
    summary:
      "Documenta una colección de leyendas de Otero anterior a la edición de 1936 y su trabajo sostenido con tradiciones colombianas.",
    limitation:
      "La ficha no permite confirmar si Buzagá aparece con el mismo texto en 1934 ni demuestra historicidad de sus personajes.",
  }),
  tunjaTreasures: source({
    title: "El Tesoro de Buzagá",
    author: "Tunja Ciudad de Tesoros Escondidos",
    type: "versión digital de circulación turística local",
    url: "https://www.tunjatesorosescondidos.com/index.php/mitos?start=5",
    summary:
      "Conserva a Lope como empedrador pobre y ambicioso, la mediación de una mujer indígena y el tesoro custodiado por un mohán.",
    limitation:
      "No ofrece informantes, fecha de recolección o aparato crítico y parece depender de la versión impresa de Otero.",
  }),
  uisPedagogy: source({
    title: "Mitos y leyendas de la región Andina colombiana como textos",
    author: "Universidad Industrial de Santander",
    year: 2018,
    type: "investigación educativa con observación de lectura escolar",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/557e955c-c23c-4be5-9639-b7e9f5f2d339/content",
    summary:
      "Documenta el uso escolar de El tesoro de Buzagá, su identificación como leyenda y discusiones sobre Tunja, Iza, Lope, Laserna y el mohán.",
    limitation:
      "La afirmación docente de que Lope y el cura son reales es una práctica de aula, no corroboración archivística independiente.",
  }),
  bibliotecaAldeana: source({
    title: "La biblioteca aldeana de Colombia y el ideario de la República Liberal",
    author: "Hernán Alonso Muñoz Vélez",
    year: 2014,
    type: "historia académica de la colección que difundió la obra",
    url: "https://simehbucket.s3.amazonaws.com/miscfiles/la-biblioteca-aldeana-de-colombia-web_64t4rwhb.pdf",
    summary:
      "Contextualiza la Selección Samper Ortega y la circulación estatal de libros de la Biblioteca Aldeana desde la década de 1930.",
    limitation:
      "Explica el canal editorial y político de difusión, no el argumento de Buzagá ni su antigüedad oral.",
  }),
  saintChristopher: source({
    title: "Saint Christopher: A Golden Legend",
    author: "William Caxton, adaptación de Frances Jenkins Olcott; Project Gutenberg",
    type: "fuente comparativa directa del motivo de la carga creciente",
    url: "https://www.gutenberg.org/cache/epub/359/pg359-images.html",
    summary:
      "Cristóbal carga a un niño que se vuelve tan pesado como el mundo, imagen que Otero invoca explícitamente cuando Laserna alza al mohán.",
    limitation:
      "En la leyenda cristiana la carga es sagrada y se completa; en Buzagá es una trampa que el clérigo interrumpe.",
  }),
  elDoradoBanrep: source({
    title: "La Balsa muisca y El Dorado",
    author: "Museo del Oro, Banco de la República",
    type: "síntesis institucional comparativa sobre búsqueda colonial de riqueza",
    url: "https://www.banrepcultural.org/proyectos/bienvenidos-al-museo-del-oro/coleccion-arqueologica-y-etnografica/la-balsa-muisca-y-el",
    summary:
      "Distingue la ceremonia muisca de las fantasías europeas de un lugar hecho de oro y de las búsquedas que generaron saqueo.",
    limitation:
      "El Dorado tiene historia regional y colonial propia; no contiene a Lope, Laserna, Buzagá ni el mohán cargado.",
  }),
};

/**
 * Resuelve las fuentes de una ficha. Con una lista —la `sourceKeys` que la
 * ficha declara— devuelve esas obras en ese orden, y cada entrada puede ser una
 * clave suelta o `{ key, summary, limitation }` con lo que esa obra dice de
 * ESE relato. Con un slug cae en el reparto heredado, que se conserva tal cual
 * para las fichas que todavía no se han rehecho.
 */
export function pickBoyacaMestizoResidualSources(slugOrEntries) {
  if (!Array.isArray(slugOrEntries)) return pickBoyacaMestizoResidualSourcesHeredadas(slugOrEntries);
  return slugOrEntries.map((entrada) => {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = boyacaMestizoResidualSources[key];
    if (!selected) throw new Error(`Fuente desconocida: ${JSON.stringify(entrada)}.`);
    return {
      ...selected,
      ...(typeof entrada === "object" && entrada.summary ? { summary: entrada.summary } : {}),
      ...(typeof entrada === "object" && entrada.limitation ? { limitation: entrada.limitation } : {}),
    };
  });
}

// El reparto heredado, por slug. Sólo lo usan las fichas sin `sourceKeys`.
function pickBoyacaMestizoResidualSourcesHeredadas(slug) {
  if (slug !== "el-tesoro-de-buzaga") {
    throw new Error(`${slug}: no tiene expediente de fuentes.`);
  }
  return [
    "villaPosseBuzaga",
    "oteroCatalog",
    "uisPedagogy",
    "historietasCatalog",
    "tunjaTreasures",
    "bibliotecaAldeana",
    "saintChristopher",
    "elDoradoBanrep",
  ].map((key) => boyacaMestizoResidualSources[key]);
}
