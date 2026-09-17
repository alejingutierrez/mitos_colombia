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

export const andoqueSources = {
  diluvioPdf: source({
    title: "Cuentos del diluvio de fuego",
    author: "Jon Landaburu y Roberto Pineda Camacho",
    year: 1981,
    type: "artículo académico con transcripción de relatos orales",
    url: "https://dialnet.unirioja.es/descarga/articulo/4862280.pdf",
    summary:
      "Transcribe ciclos de fundación del mundo Andoque recogidos en Aduche y atribuidos al capitán Yiñeko y a Yiñefoque.",
    limitation:
      "La publicación ofrece traducción y notas de los investigadores; no sustituye nuevas ediciones ni el trabajo comunitario contemporáneo.",
  }),
  diluvioRecord: source({
    title: "Cuentos del diluvio de fuego: registro bibliográfico",
    author: "Red Colombiana de Información Científica",
    year: 1981,
    type: "metadato institucional",
    url: "https://redcol.minciencias.gov.co/Record/UNACIONAL2_9115a4ea512185281cc90abe2568f1e1/Details",
    summary:
      "Documenta autores, publicación en Maguaré y procedencia académica del artículo consultado.",
    limitation:
      "Es la ficha del mismo artículo accesible en Dialnet, no una segunda narración independiente.",
  }),
  tradicionesGoogle: source({
    title: "Tradiciones de la gente del hacha: mitología de los indios andoques del Amazonas",
    author: "Jon Landaburu y Roberto Pineda Camacho",
    year: 1984,
    type: "monografía académica en vista bibliográfica y fragmentaria",
    url: "https://books.google.com/books/about/Tradiciones_de_la_gente_del_Hacha.html?hl=es&id=zGxsAAAAMAAJ",
    summary:
      "El índice y los fragmentos consultables confirman los once títulos heredados, sus secuencias y su ubicación dentro del corpus.",
    limitation:
      "La vista disponible es fragmentaria. La revisión no completa silencios con escenas inventadas ni la presenta como lectura integral.",
  }),
  tradicionesOpenLibrary: source({
    title: "Tradiciones de la gente del hacha: ficha de obra",
    author: "Open Library",
    year: 1984,
    type: "catálogo bibliográfico",
    url: "https://openlibrary.org/works/OL5297576W/Tradiciones_de_la_gente_del_hacha",
    summary:
      "Confirma autores, título, fecha, extensión y edición de la monografía dedicada a la mitología Andoque.",
    limitation:
      "No ofrece préstamo ni texto completo; sirve para trazabilidad bibliográfica, no para reconstruir argumentos.",
  }),
  minCultura: source({
    title: "Caracterización del pueblo Andoke",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20ANDOKE.pdf",
    summary:
      "Aporta contexto territorial, lingüístico, histórico y ritual del pueblo Andoke y referencia la obra de Landaburu y Pineda.",
    limitation:
      "No transcribe íntegramente los relatos y no se usa para rellenar sus episodios.",
  }),
  puebloAndoke: source({
    title: "Pueblo Andoke",
    author: "Comunidad Andoke de Aduche",
    type: "sitio comunitario contemporáneo",
    url: "https://puebloandoke.com/",
    summary:
      "Presenta iniciativas, territorio y vida comunitaria desde una plataforma vinculada al pueblo Andoke.",
    limitation:
      "No funciona como edición crítica de los relatos históricos ni atribuye cada versión del corpus.",
  }),
  igac: source({
    title: "Expedición Andoke",
    author: "Instituto Geográfico Agustín Codazzi y pueblo Andoke",
    type: "cartografía participativa y contexto territorial",
    url: "https://expediciones.igac.gov.co/andoque/",
    summary:
      "Sitúa el territorio, la memoria geográfica y el trabajo participativo contemporáneo con la comunidad Andoke.",
    limitation:
      "Su propósito es territorial, no narrativo; no constituye otra versión de cada mito.",
  }),
};

export function pickAndoqueSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = andoqueSources[key];
    if (!selected) throw new Error(`Fuente Andoque desconocida: ${key}`);
    return selected;
  });
}
