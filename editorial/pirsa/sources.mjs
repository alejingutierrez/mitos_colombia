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

export const pirsaSources = {
  cieza1553: source({
    title:
      "Parte primera de la Crónica del Perú, capítulo CXVIII: lo sucedido a Tamaracunga",
    author: "Pedro de Cieza de León",
    year: 1553,
    type: "crónica colonial del siglo XVI",
    url: "https://hdl.handle.net/123456789/90",
    summary:
      "Es la versión más temprana conocida: sitúa el episodio en 1549, identifica a Tamaracunga como hermano joven del señor de Pirsa y narra su viaje a Anserma para recibir el bautismo.",
    limitation:
      "Cieza organiza la historia como ejemplo de victoria cristiana y no conserva una voz Pirsa que explique las apariciones, el rito o el sentido indígena del episodio.",
  }),
  cabildo2016: source({
    title:
      "Recopilación de documentos para la historia del Resguardo Indígena Escopetera Pirza",
    author: "Cabildo Indígena de Escopetera Pirza",
    year: 2016,
    type: "compilación documental comunitaria",
    url: "https://resguardoescopeteraypirza.org/wp-content/uploads/2017/11/LIBRO-RECOPILACION-HISTORIA-ESCOPETERA-PIRZA.pdf",
    summary:
      "Reproduce el capítulo de Tamaracunga y lo incorpora a una reconstrucción territorial elaborada desde el actual Resguardo Escopetera Pirza.",
    limitation:
      "La compilación transmite el texto colonial y propone algunas conexiones interpretativas; no convierte esa versión española en testimonio oral Pirza del siglo XVI.",
  }),
  elizalde1997: source({
    title:
      "Investir e investirse. La conquista de América y la construcción de identidades colectivas",
    author: "Valeria Marina Elizalde",
    year: 1997,
    type: "tesis doctoral de historia",
    url: "https://sedici.unlp.edu.ar/bitstream/handle/10915/2973/Documento_completo.pdf?isAllowed=y&sequence=1",
    summary:
      "Analiza el episodio de Tamaracunga como relato ejemplar que construye la superioridad cristiana española y una imagen subordinada de la alteridad indígena.",
    limitation:
      "Su objeto es el discurso identitario de la conquista y no una reconstrucción etnográfica de la sociedad Pirsa ni una tradición oral contemporánea.",
  }),
  correaDelgado2024: source({
    title:
      "Historia y territorio: propuesta pedagógica para la implementación del PEC del Resguardo Indígena Escopetera Pirza",
    author: "Jhon Jaime Correa Ramírez y Luz Adriana Delgado Caicedo",
    year: 2024,
    type: "investigación académica y educativa comunitaria",
    url: "https://hdl.handle.net/11059/15472",
    summary:
      "Documenta procesos de memoria, territorio y educación propia del Resguardo Escopetera Pirza y permite situar la vigencia contemporánea del nombre Pirza.",
    limitation:
      "Estudia el presente educativo y territorial del resguardo; no demuestra una continuidad sin cambios entre la población Pirsa descrita por Cieza y todas las identidades actuales.",
  }),
  cabildoTitulos: source({
    title: "Los títulos de Escopetera y Pirza",
    author: "Cabildo Indígena de Escopetera Pirza",
    type: "cartilla histórica y territorial comunitaria",
    url: "https://resguardoescopeteraypirza.org/wp-content/uploads/2017/11/LIBRO-ESCOPETERA.pdf",
    summary:
      "Reúne documentos sobre títulos, linderos y memoria histórica del territorio de Escopetera y Pirza en Caldas.",
    limitation:
      "Su propósito es la historia territorial del resguardo y no registrar una variante independiente de la noche de Tamaracunga.",
  }),
  guazzo1608: source({
    title: "Compendium Maleficarum, libro III, capítulo IV",
    author: "Francesco Maria Guazzo",
    year: 1608,
    type: "tratado europeo de demonología",
    url: "https://en.wikisource.org/wiki/Compendium_Maleficarum/Book_3/Chapter_4",
    summary:
      "Reutiliza la historia de Tamaracunga como prueba de que el bautismo vence la brujería y muestra su temprana circulación fuera de América.",
    limitation:
      "No es una fuente Pirsa independiente: depende de Cieza, cambia detalles y somete todo el episodio a la demonología europea.",
  }),
  mondragon1750: source({
    title:
      "Crónica de la Orden de la Merced en América: prosiguen hechos heroicos de nuestros misioneros mercedarios",
    author: "Fray Diego de Mondragón",
    year: 1750,
    type: "crónica hagiográfica mercedaria",
    url: "https://ec.aciprensa.com/wiki/Cr%C3%B3nica_de_la_Orden_de_la_Merced_en_Am%C3%A9rica%3A_Prosiguen_hechos_heroicos_de_nuestros_misioneros_mercedarios_en_servicio_de_ambas_majestades",
    summary:
      "Amplía la escena alrededor de fray Juan de Santa María, habla expresamente de exorcismos y convierte el episodio en hazaña de la Orden de la Merced.",
    limitation:
      "Fue escrita dos siglos después, depende de la tradición colonial y agrega episodios hagiográficos que no aparecen en el relato temprano de Cieza.",
  }),
  cardona2013: source({
    title: "Tamaracunga y el diablo riosuceño",
    author: "Alfredo Cardona Tobón",
    year: 2013,
    type: "ensayo de divulgación histórica regional",
    url: "https://historiayregion.blogspot.com/2013/11/tamaracunga-y-el-diablo-riosuceno.html",
    summary:
      "Ofrece una reelaboración moderna del episodio y permite rastrear detalles añadidos por la divulgación regional y su asociación retórica con el Carnaval de Riosucio.",
    limitation:
      "No es una versión oral Pirza autónoma y añade escenas, comparaciones y conexiones festivas que no están en Cieza ni prueban continuidad histórica.",
  }),
  minculturaCarnaval: source({
    title: "Carnaval de Riosucio",
    author: "Ministerio de las Culturas, las Artes y los Saberes",
    type: "ficha oficial de patrimonio cultural inmaterial",
    url: "https://www.mincultura.gov.co/direcciones/patrimonio-y-memoria/Paginas/servicios-informacion/LRPCI/carnaval-de-riosucio.aspx",
    summary:
      "Describe al Diablo del carnaval como figura festiva de vida, alegría, amistad y sátira dentro de una tradición histórica propia de Riosucio.",
    limitation:
      "Documenta el carnaval contemporáneo y no establece que su Diablo sea la misma presencia que la crónica colonial atribuyó a Tamaracunga.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickPirsaSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = pirsaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Pirsa desconocida: ${visto}`);
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
