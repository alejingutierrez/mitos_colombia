function source({
  title,
  author,
  year,
  type,
  url,
  summary,
  limitation,
}) {
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

export const emberaSources = {
  dogiramaBurumia1984: source({
    title: "Los Burumia, en Zrõarã Nẽburã: Historia de los antiguos",
    author: "Odilia Dogiramá, narradora; Floresmiro Dogiramá y Mauricio Pardo, compilación",
    year: 1984,
    type: "narración oral publicada",
    url: "https://ppg.pueblosoriginarios.com/textos/embera/burumia.html",
    summary:
      "Publica el relato atribuido a Odilia Dogiramá: la comunidad Burumia de la quebrada Usagará, el cautiverio y fuga de dos jóvenes y el ataque organizado desde Bojayá.",
    limitation:
      "La edición está en castellano y utiliza vocabulario histórico que requiere explicación; una narración no prueba por sí sola que los hechos ocurrieran literalmente.",
  }),
  vascoReview1986: source({
    title: "Floresmiro Dogiramá: Zroara Nebura, Historia de los Antiguos",
    author: "Luis Guillermo Vasco Uribe",
    year: 1986,
    type: "reseña antropológica crítica",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/7263/7527/",
    summary:
      "Sitúa la colección en el Alto Baudó, identifica a sus narradores y explica que las historias articulan conocimiento y conceptos, no solo entretenimiento literario.",
    limitation:
      "Es una reseña interpretativa de dos páginas y no reemplaza la narración de Odilia Dogiramá.",
  }),
  pardoRegionalizacion1987: source({
    title:
      "Regionalización de indígenas Chocó: datos etnohistóricos, lingüísticos y asentamientos actuales",
    author: "Mauricio Pardo",
    year: 1987,
    type: "investigación etnohistórica y lingüística",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/7215/7478/14654",
    summary:
      "Distingue áreas dialectales y procesos históricos entre poblaciones Emberá y Wounaan, evitando tratar Emberá como una comunidad territorial única.",
    limitation:
      "La regionalización refleja la investigación disponible en la década de 1980 y no fija identidades actuales de manera inmutable.",
  }),
  onicDobida: source({
    title: "Embera Dobidá",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos",
    summary:
      "Identifica a los Emberá Dóbida como gente de río y sitúa asentamientos en Bojayá, las cuencas del Atrato y el Baudó.",
    limitation:
      "Es un perfil panorámico que no edita ni comenta el relato de los Burumia.",
  }),
  minculturaDobida: source({
    title: "Caracterización del pueblo Emberá-Dóbida",
    author: "Ministerio de Cultura de Colombia",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20EMBERA-D%C3%93BIDA.pdf",
    summary:
      "Describe territorio, lengua, movilidad fluvial y organización del pueblo Emberá-Dóbida en el Chocó.",
    limitation:
      "Sintetiza información institucional y bibliográfica; no es una versión del mito ni una voz comunitaria individual.",
  }),
  icanhEmbera: source({
    title: "Pueblo Emberá",
    author: "Instituto Colombiano de Antropología e Historia",
    type: "perfil institucional de colecciones",
    url: "https://colecciones.icanh.gov.co/articulos/pueblos/EMBERA.php",
    summary:
      "Distingue a los Emberá Dóbida y Eperara Siapidara de los Emberá Chamí y Katío y presenta rasgos generales sin reducirlos a un solo grupo.",
    limitation:
      "Es una síntesis museográfica contemporánea; no permite atribuir automáticamente cada narración a un subgrupo.",
  }),
  vargas1993: source({
    title: "Los Emberá y los Cuna: impacto y reacción ante la ocupación española",
    author: "Patricia Vargas Sarmiento",
    year: 1993,
    type: "investigación etnohistórica",
    url: "https://books.google.com/books/about/Los_embera_y_los_cuna.html?id=n7dsAAAAMAAJ",
    summary:
      "Estudia relaciones, desplazamientos y nombres de pueblos en el Darién y el Chocó para contextualizar memorias de conflicto entre Emberá, Cuna y otros colectivos.",
    limitation:
      "El acceso digital es parcial y su evidencia histórica no convierte a los personajes de la narración en pueblos comprobados sin mediación.",
  }),
  chaves1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milciades Chaves Ch.",
    year: 1945,
    type: "colección etnográfica primaria",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    summary:
      "Incluye relatos narrados por un informante Katío, entre ellos Bibidigomia, útiles para contrastar motivos de cautiverio, seres antiguos y conflicto.",
    limitation:
      "Pertenece a otra región y a otro narrador; una semejanza de motivos no autoriza fusionarlo con Los Burumia.",
  }),
  usagaraMap: source({
    title: "Río Bojayá y confluencia del río Usagará",
    author: "WaterwayMap, a partir de OpenStreetMap",
    type: "fuente cartográfica",
    url: "https://waterwaymap.org/river/R%C3%ADo%20Bojay%C3%A1%20000469743989/",
    summary:
      "Ubica la desembocadura del Usagará en el río Bojayá cerca de 6°8′54″ N, 77°5′56″ O.",
    limitation:
      "La coordenada representa la confluencia cartográfica, no el alto exacto donde la narración sitúa las casas Burumia.",
  }),
};

export const defaultEmberaSourceKeys = [
  "dogiramaBurumia1984",
  "vascoReview1986",
  "onicDobida",
  "pardoRegionalizacion1987",
  "minculturaDobida",
  "icanhEmbera",
];

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickEmberaSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = emberaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Emberá desconocida: ${visto}`);
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
