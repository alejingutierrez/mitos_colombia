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

export const kuivaSources = {
  idartes2015: source({
    title: "Mitos de creación",
    author: "Selección de Julio Paredes Castro; Instituto Distrital de las Artes",
    year: 2015,
    type: "antología literaria institucional, segunda edición",
    url: "https://idartesencasa.gov.co/sites/default/files//libros_pdf/LAV044-MitosdeCreaci%C3%B3n-2ed.pdf",
    summary:
      "Reproduce en sus páginas 46 y 47 el relato Kuiva sobre la herida del cielo, la caída de sangre, el origen de las primeras personas, Boupé y Daimú.",
    limitation:
      "La antología no identifica narrador, comunidad específica ni fuente bibliográfica del fragmento; por ello esta ficha atribuye cada detalle a la edición y no lo presenta como versión única de todo el pueblo.",
  }),
  flood28: source({
    title: "Namon and the Flood",
    author: "Relato recopilado por Isabel Kerr; edición de Johannes Wilbert y Karin Simoneau",
    year: 1991,
    type: "reproducción digital de un relato del corpus Folk Literature of the Cuiva Indians",
    url: "https://floodstories.wordpress.com/2025/07/09/16-26-f-i-wilbert-and-simoneau-1991/",
    summary:
      "Reproduce el relato número 28 del corpus: Namon advierte la inundación, sobreviven quienes construyen balsas y luego aparecen alimentos para afrontar el descenso de las aguas.",
    limitation:
      "Es una reproducción secundaria en línea, no una transmisión independiente; se contrasta con el índice bibliográfico del libro y se usa solo para narrar esta versión completa.",
  }),
  wilbertIndex1991: source({
    title: "Folk Literature of the Cuiva Indians: bibliographic record and contents",
    author: "Johannes Wilbert y Karin Simoneau, editores",
    year: 1991,
    type: "índice bibliográfico y tabla de contenidos del corpus",
    url: "https://www.gbv.de/dms/sub-hamburg/111683858.pdf",
    summary:
      "Documenta 177 relatos Cuiva, incluidos ciclos sobre Namon, el origen de la humanidad, inundaciones y salidas desde debajo de la tierra.",
    limitation:
      "El archivo consultable ofrece títulos e índice, pero no el texto completo de la mayoría de las narraciones; no autoriza reconstruir páginas nuevas a partir de un título.",
  }),
  uclaSeries1991: source({
    title: "UCLA Latin American Center Publications: Folk Literature of the Cuiva Indians",
    author: "UCLA Latin American Institute",
    year: 1991,
    type: "catálogo académico de la serie Folk Literature",
    url: "https://www.international.ucla.edu/lai/publications/folk",
    summary:
      "Confirma la edición, autoría editorial, alcance y pertenencia del volumen Cuiva a una serie comparativa de literatura oral indígena sudamericana.",
    limitation:
      "Es una ficha de catálogo y no reproduce las narraciones ni reemplaza las voces de quienes las contaron.",
  }),
  arcandArchive: source({
    title: "Mitos: grabaciones entre los Wamonae-Cuiva de Caño Mochuelo",
    author: "Bernard Arcand; preservación Universidad Nacional de Colombia",
    type: "registro de archivo sonoro y ficha de colección",
    url: "https://redcol.minciencias.gov.co/Record/UNACIONAL2_169061e35d686a7d5c48c68ed69cdc02/Details",
    summary:
      "Registra la existencia de grabaciones realizadas por Bernard Arcand entre los Wamonae-Cuiva de Caño Mochuelo y preservadas por la Universidad Nacional.",
    limitation:
      "La ficha confirma el archivo y su contexto, pero no identifica estos dos relatos ni permite atribuirle los textos publicados aquí.",
  }),
  minculturaKuiva: source({
    title: "Kuiva. La gente del río",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización oficial del pueblo Kuiva",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20KUIVA.pdf",
    summary:
      "Describe autodenominaciones, territorialidad fluvial, lugares de origen y tres ámbitos del mundo Kuiva, y advierte sobre intervenciones misioneras en algunos registros míticos.",
    limitation:
      "Sintetiza bibliografía y contexto institucional; no transcribe de forma completa los dos relatos seleccionados.",
  }),
  icbfWamonae: source({
    title: "Pueblo Wamonae: Estudio Nacional de la Situación Alimentaria y Nutricional de los Pueblos Indígenas de Colombia",
    author: "ICBF y pueblo Wamonae",
    type: "caracterización institucional con participación comunitaria",
    url: "https://www.icbf.gov.co/sites/default/files/wamonae.pdf",
    summary:
      "Aporta contexto contemporáneo sobre el pueblo Wamonae, su territorio, alimentación, movilidad y continuidad cultural en la Orinoquía.",
    limitation:
      "Su objeto principal es alimentario y nutricional; no funciona como fuente narrativa de los mitos.",
  }),
  onicWamonae: source({
    title: "Wamonae",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos/2230-wamonae",
    summary:
      "Recoge las denominaciones Wamonae, Wamone, Kuiva, Cuiva y Chiricoa, y destaca identidades y territorialidades vinculadas con ríos y caños.",
    limitation:
      "Es un perfil general y no reproduce los relatos ni representa todas las variantes locales.",
  }),
};

export function pickKuivaSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = kuivaSources[key];
    if (!selected) throw new Error(`Fuente Kuiva desconocida: ${key}`);
    return selected;
  });
}
