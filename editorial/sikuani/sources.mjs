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

export const sikuaniSources = {
  villaPdf: source({
    title: "Mitos y leyendas de Colombia: sección Sikuani",
    author:
      "Eugenia Villa Posse, compiladora; relatos recogidos por Francisco Ortiz",
    year: 1993,
    type: "compilación institucional con transcripción de siete relatos orales",
    url: "https://repositorio.flacsoandes.edu.ec/bitstreams/cd018e42-7671-4893-9b8a-09b7fc2ef352/download",
    summary:
      "Reproduce siete relatos Sikuani narrados por Pedro Martínez y Rita Gaitán, registrados entre 1972 y 1980 y publicados originalmente por Francisco Ortiz.",
    limitation:
      "Es una compilación posterior. La introducción indica que los relatos se registraron en sikuani y español y se transcribieron sin modificación, pero no detalla el proceso de traducción de cada pieza.",
  }),
  villaRecord: source({
    title: "Mitos y leyendas de Colombia: ficha del repositorio FLACSO Andes",
    author: "Eugenia Villa Posse, compiladora; IADAP",
    year: 1993,
    type: "ficha bibliográfica institucional",
    url: "https://repositorio.flacsoandes.edu.ec/items/796b49f5-fff2-4cf8-a8a5-ce5b14b01694/full",
    summary:
      "Confirma autoría editorial, fecha, entidad editora y acceso al volumen que contiene la sección Sikuani.",
    limitation:
      "No constituye una segunda versión oral independiente del PDF enlazado; se incluye para documentar la cadena editorial.",
  }),
  baquero: source({
    title: "La tradición oral de los Guahibos, Llanos Orientales",
    author: "Álvaro Baquero Montoya",
    type: "ensayo etnográfico reproducido en línea",
    url: "https://armonicosdeconciencia.blogspot.com/2010/07/alvaro-baquero-la-tradicion-oral-de-los.html",
    summary:
      "Describe ciclos sobre Kuwei o Phurnaminali, Kuemi, los intentos de creación humana, Kaliwirnae, Tsamani y el rito funerario Itomo.",
    limitation:
      "La copia consultada es una reproducción digital secundaria; se usa con atribución y no como voz única de todas las comunidades Sikuani.",
  }),
  icbfTsamani: source({
    title: "Canto de la familia Tsamani",
    author:
      "Jairo Chipiaje Cavares, intérprete; José Quintero Campo, traductor",
    type: "registro sonoro comunitario publicado por el ICBF",
    url: "https://audiotecadigital.icbf.gov.co/adultos/articulo/304",
    summary:
      "Presenta en sikuani y español el canto sobre Tsamani y sus cinco hermanos, quienes danzan, se vuelven livianos y ocupan un lugar entre las estrellas.",
    limitation:
      "Corresponde a una interpretación de Caño Ovejas, Meta; no debe extenderse automáticamente a todas las variantes regionales.",
  }),
  icbfKaliwirnae: source({
    title: "Kaliwirnae, el árbol de los alimentos",
    author:
      "Carmen Rojas Amaya, narradora; José Quintero Campo, traductor",
    type: "registro oral comunitario publicado por el ICBF",
    url: "https://audiotecadigital.icbf.gov.co/adultos/articulo/332",
    summary:
      "Narra el hallazgo de Kaliwirnae, árbol que contenía los alimentos, y las acciones del mono nocturno, el picure y la lapa.",
    limitation:
      "La narradora declara que cuenta solo una parte de una historia extensa; la ficha conserva ese corte y no inventa el derribo del árbol.",
  }),
  icbfBibliography: source({
    title: "Bibliografía de la Audioteca Digital ICBF",
    author: "Instituto Colombiano de Bienestar Familiar",
    type: "nota metodológica y bibliográfica institucional",
    url: "https://audiotecadigital.icbf.gov.co/Acerca/bibliografia",
    summary:
      "Explica la procedencia editorial de los materiales Sikuani y remite a Entre cantos y llantos: tradición oral sikuani.",
    limitation:
      "Es contexto bibliográfico, no una narración adicional.",
  }),
  icbfEnsani: source({
    title:
      "Pueblo Sikuani: Estudio Nacional de la Situación Alimentaria y Nutricional de los Pueblos Indígenas de Colombia",
    author: "ICBF y comunidades Sikuani participantes",
    type: "caracterización institucional con participación comunitaria",
    url: "https://www.icbf.gov.co/sites/default/files/sikuanicompressed.pdf",
    summary:
      "Aporta contexto territorial, alimentario, histórico y cultural del pueblo Sikuani en la Orinoquía.",
    limitation:
      "Su objeto principal no es recopilar íntegramente cada relato; se usa para contexto y no para completar escenas.",
  }),
  cnmh: source({
    title: "Pedagogías interculturales Sikuani",
    author: "Centro Nacional de Memoria Histórica y organizaciones indígenas",
    type: "material pedagógico institucional y comunitario",
    url: "https://centrodememoriahistorica.gov.co/micrositios/comunidades-etnicas/assets/pdf/pedagogias_interculturales.pdf",
    summary:
      "Sitúa la memoria Sikuani, el territorio, la transmisión intergeneracional y los efectos de la violencia y el despojo.",
    limitation:
      "No es una colección narrativa completa y no sustituye las voces identificadas en las fuentes directas.",
  }),
  ucla: source({
    title: "Folk Literature of the Sikuani Indians",
    author: "Johannes Wilbert y Karin Simoneau, editores",
    year: 1992,
    type: "catálogo académico de un corpus de literatura oral",
    url: "https://www.international.ucla.edu/lai/publications/book/26",
    summary:
      "Documenta un volumen comparativo de 704 páginas dedicado a literatura oral Sikuani y confirma la amplitud del corpus.",
    limitation:
      "La ficha de catálogo no ofrece el texto completo de sus relatos; se usa para reconocer diversidad documental, no para reconstruir argumentos.",
  }),
  onic: source({
    title: "Autoridades Sikuani y Plan de Salvaguarda",
    author: "Organización Nacional Indígena de Colombia",
    year: 2017,
    type: "comunicado de organización indígena",
    url: "https://www.onic.org.co/comunicados-regionales/1975-autoridades-sikuani-conminan-a-gobierno-nacional-a-responder-sobre-su-plan-de-salvaguarda",
    summary:
      "Aporta una voz organizativa contemporánea sobre autoridades, territorio, riesgos colectivos y salvaguarda cultural Sikuani.",
    limitation:
      "No transcribe los relatos y no debe emplearse como fuente de detalles narrativos.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickSikuaniSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = sikuaniSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Sikuani desconocida: ${visto}`);
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
