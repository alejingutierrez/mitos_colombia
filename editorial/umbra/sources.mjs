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

export const umbraSources = {
  albicentenarioTasime: source({
    title: "Mito Umbra del tigre o del incesto",
    author: "Yoani Largo Trejos; Albicentenario",
    type: "relato bilingüe Umbra-español con traducción manuscrita",
    url: "https://www.albicentenario.com/index_archivos/riosucio_2.html",
    summary:
      "Publica el relato en lengua Umbra o Unga y su traducción al español: la mujer marca con beé al visitante nocturno, reconoce a su hermano y él termina convertido en lobo.",
    limitation:
      "La página no informa fecha ni circunstancias completas de registro; la traducción manuscrita exige lectura cuidadosa y no autoriza a completar vocabulario o rituales ausentes.",
  }),
  guacuma2013: source({
    title: "Historia de Guacuma",
    author:
      "Alejandro Ugarte Rico, Merardo Largo Trejos y Fernando Uribe Trejos",
    year: 2013,
    type: "libro de memoria histórica y lingüística regional",
    url: "https://es.scribd.com/document/495178763/Historia-de-Guacuma-OCR",
    summary:
      "Reproduce la traducción española del relato de Tasime y reúne memoria Umbra sobre Batero, los jeques, la lengua y el territorio de Guacuma.",
    limitation:
      "La copia pública es un OCR alojado por un tercero; el libro combina historia, tradición e interpretación y cada afirmación debe contrastarse con fuentes independientes.",
  }),
  alephSamoga: source({
    title:
      "El saber de la viva emoción en dos protagonistas: Anielka Gelemur-Rendón y Guillermo Rendón G.",
    author: "Revista Aleph",
    type: "retrospectiva cultural sobre investigación regional",
    url: "https://www.revistaaleph.com.co/el-saber-de-la-viva-emocion-en-dos-protagonistas-los-maestros-anielka-gelemur-rendon-y-guillermo-rendon-g/",
    summary:
      "Describe la lectura de una figura de jaguar o tasime en una roca y su relación interpretativa con mitos Umbra y Emberá.",
    limitation:
      "Resume la interpretación de los investigadores y no demuestra que el petroglifo narre por sí mismo la trama específica del incesto.",
  }),
  alephIndex: source({
    title: "Índice de la Revista Aleph por ediciones",
    author: "Revista Aleph",
    year: 1996,
    type: "índice bibliográfico de revista cultural",
    url: "https://www.revistaaleph.com.co/indice/indice-de-la-revista-aleph-por-ediciones/",
    summary:
      "Registra «Samogá, la roca viviente», de Anielka Gelemur-Rendón y Guillermo Rendón, en Aleph 98, páginas 52–55.",
    limitation:
      "El índice acredita la publicación, pero no expone el artículo completo ni constituye otra versión oral del relato.",
  }),
  scielo2025: source({
    title:
      "¿Es el umbra una lengua chocó?: un primer acercamiento desde la lingüística comparada",
    author: "Simón González",
    year: 2025,
    type: "artículo lingüístico académico",
    url: "https://www.scielo.org.pe/scielo.php?pid=S2413-26592025000200011&script=sci_arttext&tlng=es",
    summary:
      "Analiza materiales denominados Umbra literario A y B, registra tassime con el significado de tigre y revisa críticamente la clasificación de la lengua.",
    limitation:
      "Trabaja con un corpus escrito pequeño y advierte incertidumbres de procedencia y clasificación; no convierte cada texto publicado en tradición prehispánica comprobada.",
  }),
  espectador2021: source({
    title: "Umbra, la lengua que se resiste a desaparecer",
    author: "Duberney Galvis",
    year: 2021,
    type: "reportaje con testimonio de un líder Umbra",
    url: "https://www.elespectador.com/colombia/umbra-la-lengua-que-se-resiste-a-desaparecer/",
    summary:
      "Recoge de Merardo Largo la versión según la cual los jeques difundieron que habían desaparecido en Batero mientras se desplazaban en secreto hacia La Güaira.",
    limitation:
      "Es un testimonio contemporáneo mediado por un reportaje; no se localizó un documento colonial que registre de forma independiente la misma secuencia.",
  }),
  samogaWorldCat: source({
    title: "Samogá: enigma y desciframiento",
    author: "Anielka Gelemur-Rendón y Guillermo Rendón García",
    year: 1998,
    type: "catálogo bibliográfico de monografía",
    url: "https://search.worldcat.org/es/title/samoga-enigma-y-desciframiento/oclc/42392223",
    summary:
      "Acredita autoría, editorial universitaria, fecha e ISBN de la monografía dedicada a la interpretación de Samogá.",
    limitation:
      "La ficha bibliográfica no permite revisar el argumento completo; se usa para establecer la existencia de la obra y no para validar todas sus conclusiones.",
  }),
  unisarc2024: source({
    title: "Mitos y huellas de la cultura Umbra",
    author: "UNISARC",
    year: 2024,
    type: "crónica universitaria con testimonio comunitario",
    url: "https://unisarc.edu.co/mitos-y-huellas-de-la-cultura-umbra/",
    summary:
      "Registra la reconstrucción contemporánea de la pezuña de Sausagua y contextualiza el trabajo de Merardo Largo por recuperar lengua y memoria Umbra.",
    limitation:
      "El propio testimonio dice que la historia se perdió y que su origen permanece sin resolver; por eso se conserva como contexto y no como ficha autónoma.",
  }),
  glottologRendon: source({
    title: "La lengua Umbra",
    author: "Guillermo Rendón García",
    year: 2011,
    type: "referencia bibliográfica lingüística",
    url: "https://glottolog.org/resource/reference/id/477658",
    summary:
      "Registra la monografía de 287 páginas dedicada a la documentación y propuesta de clasificación de la lengua Umbra.",
    limitation:
      "La ficha no ofrece acceso íntegro al libro y las propuestas de clasificación de Rendón han recibido revisiones críticas posteriores.",
  }),
  amelicacritica: source({
    title:
      "Comentarios al libro de Guillermo Rendón sobre el descubrimiento de indígenas Quimbaya en Riosucio (Caldas)",
    author: "Luis Javier Caicedo",
    year: 2018,
    type: "artículo académico de revisión crítica",
    url: "https://portal.amelica.org/ameli/journal/619/6194133009/html/",
    summary:
      "Reconoce la evidencia contemporánea aportada por hablantes como Merardo Largo y cuestiona identificaciones históricas demasiado seguras entre Umbra, Kirma y Quimbaya.",
    limitation:
      "Su objeto principal es la discusión historiográfica y lingüística; no documenta por sí solo los detalles narrativos de Tasime o Batero.",
  }),
  mapcartaBatero: source({
    title: "Cerro Batero",
    author: "Mapcarta, con datos de OpenStreetMap",
    type: "referencia geográfica contemporánea",
    url: "https://mapcarta.com/19916092",
    summary:
      "Ubica el cerro Batero en el municipio de Quinchía y ofrece coordenadas aproximadas para situar el escenario del relato.",
    limitation:
      "Una referencia cartográfica moderna solo fija el lugar; no acredita la historicidad de la desaparición de los jeques.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickUmbraSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = umbraSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Umbra desconocida: ${visto}`);
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
