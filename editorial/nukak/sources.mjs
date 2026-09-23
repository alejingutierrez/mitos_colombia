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

export const nukakSources = {
  mahecha2024: source({
    title:
      "Historia y lengua de los Nɨkak: aspectos gramaticales de los nominales",
    author: "Dany Mahecha Rubio",
    year: 2024,
    type: "tesis doctoral lingüística y etnohistórica",
    url: "https://www.lotpublications.nl/Documents/684_fulltext.pdf",
    summary:
      "Distingue el origen Nɨkak del Kakua y publica apartes del relato de Embe sobre Machoroko, Aukurɨbo, la salida desde bak y la dispersión por los ríos Guaviare e Inírida.",
    limitation:
      "La edición conserva únicamente el material ya publicado y no completa conjeturas lingüísticas ni detalles ceremoniales ausentes.",
  }),
  franky2011: source({
    title:
      "Acompañarnos contentos con la familia: unidad, diferencia y conflicto entre los Nükak",
    author: "Carlos Eduardo Franky Calvo",
    year: 2011,
    type: "tesis doctoral etnográfica",
    url: "https://www.tropenbos.org/app/data/uploads/sites/2/CFranky-Tesis-PhD-Nukak-1.pdf",
    summary:
      "Fuente de la versión narrada por Embe y del análisis sobre el nacimiento Nɨkak, los tres mundos, Mauro y la organización de los grupos.",
    limitation:
      "La narración pasa por transcripción y análisis académico; no sustituye las decisiones contemporáneas del pueblo sobre su conocimiento.",
  }),
  gutierrez2016: source({
    title:
      "Los nükak: en marcha por tierras devastadas. Nomadismo y continuidad en la Amazonia colombiana",
    author: "Ruth Gutiérrez Herrera",
    year: 2016,
    type: "monografía etnográfica de acceso abierto",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/123",
    summary:
      "Registra otra versión del origen contada por Kerayi y sitúa la movilidad, los hogares dispersos y la continuidad social Nɨkak.",
    limitation:
      "La ficha editorial no mezcla las diferencias de nombres de esta versión con la secuencia narrada por Embe.",
  }),
  upperRioNegro: source({
    title:
      "Recolectando en el cielo: elementos del manejo Nɨkak del mundo",
    author: "Dany Mahecha y Carlos Franky",
    year: 2013,
    type: "capítulo académico de antropología",
    url: "https://acervo.socioambiental.org/sites/default/files/documents/0AL00059.pdf",
    summary:
      "Describe relaciones Nɨkak con los mundos jéa, yê y bak, el parentesco cósmico y la reproducción de frutos y personas.",
    limitation:
      "Aporta contexto cosmológico, no una segunda transcripción del ciclo de Machoroko.",
  }),
  overview2011: source({
    title:
      "Los Nükak: el último pueblo de tradición nómada contactado oficialmente en Colombia",
    author: "Dany Mahecha Rubio y Carlos Eduardo Franky Calvo",
    year: 2011,
    type: "síntesis etnográfica y de derechos indígenas",
    url: "https://bffrepositorio.unal.edu.co/server/api/core/bitstreams/918b600d-0485-48ff-9160-fd96da90293f/content",
    summary:
      "Síntesis de acceso abierto sobre historia, territorio, organización y transformaciones posteriores al contacto oficial.",
    limitation:
      "Resume un corpus amplio y se usa como contexto; no rellena silencios del relato principal.",
  }),
  minCultura: source({
    title: "El proceso de formar y vivir como Nukak Baka (Gente Buena)",
    author: "Ministerio de las Culturas, las Artes y los Saberes",
    type: "ficha oficial de patrimonio cultural inmaterial",
    url: "https://www.mincultura.gov.co/direcciones/patrimonio-y-memoria/Paginas/servicios-informacion/LRPCI/el-proceso-de-formar-y-vivir-como-nukak-baka-gente-buena.aspx",
    summary:
      "Presenta el proceso vivo de formar personas y grupos Nɨkak baka' y relaciona tradición oral, territorio y manejo del mundo.",
    limitation:
      "Es una ficha de salvaguardia, no un inventario de mitos ni una autorización para publicar conocimientos reservados.",
  }),
  resolution2013: source({
    title: "Resolución 3470 de 2013",
    author: "Ministerio de Cultura de Colombia",
    year: 2013,
    type: "acto administrativo de patrimonio cultural",
    url: "https://normograma.mincultura.gov.co/compilacion/docs/resolucion_mincultura_3470_2013.htm",
    summary:
      "Incluye en la lista representativa el proceso de formar y vivir como Nɨkak baka' y documenta el alcance de su plan especial de salvaguardia.",
    limitation:
      "Define una manifestación patrimonial y sus medidas de salvaguardia; no narra por sí sola el mito de origen.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  herreranukak2016: source({
    title: "Los nükak: en marcha por tierras devastadas. Nomadismo y continuidad en la Amazonia colombiana",
    author: "Ruth Gutiérrez Herrera, Fondo Editorial ICANH, colección Terrenos Etnográficos",
    year: 2016,
    type: "monografía etnográfica",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/123/172/68?inline=1",
    summary:
      "Publica en las pp. 87-95 la segunda versión, narrada por Kerayi, del grupo Wayari muno, la noche del 17 de junio de 2007. Es la que sostiene toda la capa de Versiones: Matchoroco mitad humano y mitad animal, parecido a una mariposa de manos largas; el lago Ké Inbé en las postrimerías del bajo Inírida; la puerta rota con hachas de piedra; Aukeribo como héroe activo que enseña a abrir trochas; Mauro saliendo entre los primeros; y el alarido de Meabu jumat que forma las montañas.",
    limitation:
      "La autora declara que trabajó con traductores —Yorena tradujo y se revisó con Dugupé, Wembe y Kurui— y que sólo usa fragmentos, sin pretender fijar «la» versión. Su ortografía es una tercera, distinta de las de Franky y Mahecha.",
  }),
  colombiaAuto2009: source({
    title: "Auto 004 de 2009, apartado «Situación del pueblo indígena Nukak-Makú»",
    author: "Corte Constitucional de Colombia, magistrado ponente Manuel José Cepeda Espinosa",
    year: 2009,
    type: "providencia judicial",
    url: "https://www.corteconstitucional.gov.co/relatoria/autos/2009/a004-09.htm",
    summary:
      "Es lo que impide escribir esta ficha en pasado etnográfico. Documenta que en el contacto oficial de 1988 llegaron a Calamar cuarenta y tres personas —cuatro hombres, doce mujeres y veintiséis niños— con una epidemia de gripa, que la población cayó después a unas cuatrocientas, y la cadena de éxodos forzados entre 1965 y 2005.",
    limitation:
      "Es un diagnóstico judicial de 2009 sobre desplazamiento forzado y riesgo de exterminio; no habla de mitología ni de tradición oral, y sus cifras son las de ese año.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickNukakSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = nukakSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Nukak desconocida: ${visto}`);
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
