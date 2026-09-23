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

  // ——— Búsqueda profunda 2026-09-22 ———
  investigacionMitos1993: source({
    title: "Mitos y leyendas de Colombia, tomo II (sección 20, Mitos del Tolima: Misael Devia, «Folclor tolimense», 1962)",
    author: "Eugenia Villa Posse (investigación y compilación); Misael Devia",
    year: 1993,
    type: "antología con texto reproducido de folclorólogo",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44620",
    summary:
      "Texto del cuento de Otero D'Costa (Leyendas, 1936) en la sección 17, pp. 12-18: Lope Badillo, el clérigo Benito de Laserna, la india vieja, el mohán del valle de Iza que se hace cargar y el agua bendita que lo derriba.",
    limitation:
      "Villa Posse lo presenta como leyenda oída y reelaborada; es un cuento firmado.",
  }),
  noesisMitos2018: source({
    title: "Mitos y leyendas de la región Andina como textos",
    author: "Universidad Industrial de Santander (Noesis)",
    year: 2018,
    type: "material didáctico",
    url: "https://noesis.uis.edu.co/server/api/core/bitstreams/557e955c-c23c-4be5-9639-b7e9f5f2d339/content",
    summary:
      "Propone «El tesoro de Buzagá» como lectura escolar, «de Javier Ocampo López, adaptado por Rosmira Ardila Ortiz».",
    limitation:
      "Adaptación didáctica en lengua actual; sin narrador.",
  }),
  camargoHacia2015: source({
    title: "Hacia una nueva comprensión de la historiografía colombiana: breve historia intelectual de Enrique Otero D'Costa (1883-1964)",
    author: "Daniel Mauricio Preciado Camargo",
    year: 2015,
    type: "trabajo de grado (Universidad del Rosario)",
    url: "https://repository.urosario.edu.co/handle/10336/10607",
    summary:
      "Estudio de la obra de Otero D'Costa y de sus Leyendas como historiografía de la vida cotidiana colonial.",
    limitation:
      "No analiza este cuento.",
  }),
  republicacoleccionsf: source({
    title: "La colección de Enrique Otero D'Costa",
    author: "Credencial Historia n.º 375 (Banco de la República)",
    year: "s. f.",
    type: "artículo de divulgación histórica",
    url: "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-375/la-coleccion-de-enrique-otero-dcosta",
    summary:
      "Presenta al autor como historiador y coleccionista de documentos coloniales.",
    limitation:
      "No menciona este cuento.",
  }),
  lopezpueblo1977: source({
    title: "El pueblo boyacense y su folclor",
    author: "Javier Ocampo López",
    year: 1977,
    type: "libro (cap. 8, pp. 120-126)",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2782/download",
    summary:
      "Registra en Boyacá el hueso de mohán venerado en Onzaga y el Cucacuy, guardián del dinero enterrado, los paralelos que nombra Similitudes.",
    limitation:
      "No trata el cuento de Otero.",
  }),
  republicaofrendasf: source({
    title: "La ofrenda (exposición permanente del Museo del Oro)",
    author: "Banco de la República, Museo del Oro",
    year: "s. f.",
    type: "exposición museográfica",
    url: "https://www.banrepcultural.org/exposiciones/exposicion-permanente-del-museo-del-oro/la-ofrenda",
    summary:
      "Explica las ofrendas de oro muiscas —tunjos y otras piezas— depositadas en santuarios, lagunas y cuevas, el oro que el mohán promete.",
    limitation:
      "Es la exposición del museo; no trata el cuento.",
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
