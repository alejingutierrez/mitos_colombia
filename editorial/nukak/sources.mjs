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
};

export function pickNukakSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = nukakSources[key];
    if (!selected) throw new Error(`Fuente Nukak desconocida: ${key}`);
    return selected;
  });
}
