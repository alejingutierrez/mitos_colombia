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

export const makaguanSources = {
  mattar2024: source({
    title:
      "La escritura de los mitos y la leyenda Makaguan, según los sabedores del Centro Educativo Indígena Makaguan de Arauquita – Arauca",
    author:
      "Hermes Javier Mattar Jiménez; con Gregorio Flórez, David González, José Darío Cuenza, Arístides Tocaria, Manuel Sánchez y la comunidad educativa de El Vigía",
    year: 2024,
    type: "tesis de maestría y corpus comunitario revisado",
    url: "https://repositorio.unal.edu.co/bitstream/unal/85766/2/18262677.pdf",
    summary:
      "Consolida dos mitos y una leyenda desde versiones de sabedores, diarios de campo, el PEC de El Vigía, talleres escolares y correcciones comunitarias realizadas entre 2005 y 2023.",
    limitation:
      "El tránsito de oralidad a escritura fue mediado por un investigador y por la escuela; el propio trabajo reconoce variantes, correcciones pendientes y el acceso limitado a relatos celosamente custodiados.",
  }),
  unal2024: source({
    title:
      "Los Macahuán en riesgo de desaparecer: estrategias para salvar su cultura y sus relatos",
    author: "Universidad Nacional de Colombia, Periódico UNAL",
    year: 2024,
    type: "divulgación institucional de la investigación",
    url: "https://periodico.unal.edu.co/articulos/los-macahuan-en-riesgo-de-desaparecer-estrategias-para-salvar-su-cultura-y-sus-relatos",
    summary:
      "Identifica los tres relatos trabajados, el papel de los sabedores, la negativa a grabar y el uso de transcripciones manuscritas y dibujos en el Centro Educativo Indígena Makaguan.",
    limitation:
      "Resume la tesis para un público general y no reproduce las versiones completas ni todas las cautelas metodológicas.",
  }),
  icbf2021: source({
    title:
      "Estudio Nacional de la Situación Alimentaria y Nutricional de los Pueblos Indígenas de Colombia: pueblo Makaguán",
    author: "ICBF; elaboración con diagnóstico comunitario Makaguán",
    year: 2021,
    type: "caracterización institucional con participación comunitaria",
    url: "https://www.icbf.gov.co/system/files/libro_macaguan2021_v251121.pdf",
    summary:
      "Distingue al pueblo Makaguán del Hitnü por autorreconocimiento, ubica sus resguardos en Arauca y recoge la importancia del venado y de los mitos de creación.",
    limitation:
      "Su propósito principal es alimentario y nutricional; contextualiza pueblo y territorio, pero no sustituye la fuente narrativa de El Vigía.",
  }),
  mininterior: source({
    title: "Diagnóstico Comunitario Pueblo Makaguan",
    author: "Pueblo Makaguán; Ministerio del Interior",
    type: "diagnóstico para el Plan de Salvaguarda",
    url: "https://www.mininterior.gov.co/direccion-de-asuntos-indigenas-rom-y-minorias/planes-de-salvaguarda/",
    summary:
      "Reúne el diagnóstico comunitario empleado para la salvaguarda del pueblo Makaguán y documenta territorio, población, riesgos y prioridades colectivas.",
    limitation:
      "La página institucional funciona como índice de documentos y puede cambiar sus enlaces; no edita críticamente los tres relatos.",
  }),
  apoyar2014: source({
    title: "Historias tradicionales y cartillas del pueblo Makaguán",
    author:
      "Comunidades de Caño Claro y La Esperanza; APOYAR; Departamento para la Prosperidad Social",
    year: 2014,
    type: "material comunitario de fortalecimiento cultural",
    url: "https://apoyar.org/cartillas-del-pueblo-makaguan/",
    summary:
      "Presenta cinco cartillas elaboradas para fortalecer juegos, historias, artesanías, palabras propias y aprendizajes del pueblo Makaguán.",
    limitation:
      "La página invierte algunos títulos y archivos en su listado; sirve para constatar un proceso comunitario, no para completar escenas ausentes del corpus de El Vigía.",
  }),
  radioNacional2022: source({
    title: "Los Macarieros: sabiduría, paz y cultura indígena en Arauca",
    author:
      "Carolina Díaz; testimonios de Jonathan Campo, Natty Fajardo y autoridades de Los Macarieros",
    year: 2022,
    type: "perfil periodístico con voces comunitarias",
    url: "https://www.radionacional.co/cultura/tradiciones/indigenas-en-colombia-los-macarieros-sabiduria-paz-y-cultura-en-arauca",
    summary:
      "Describe desplazamiento, etnoeducación, conucos, ríos, caza, agua, Sol y la importancia cultural del venado entre comunidades Makaguán de Arauca.",
    limitation:
      "Se concentra en Los Macarieros y usa en algunos pasajes la agrupación Hitnü–Makaguán; no representa todas las comunidades ni transcribe los tres relatos.",
  }),
  jangwapana2026: source({
    title:
      "Autogestión y sostenibilidad rural como proceso de construcción participativa del pueblo indígena Makaguán en Arauca",
    author:
      "Andrés Camilo Méndez Otero, Jemay Mosquera Téllez y Gendler Alexander Jaimes Gauta",
    year: 2026,
    type: "artículo académico participativo",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/view/6505",
    summary:
      "Actualiza el contexto territorial y sociocultural del resguardo El Vigía y sus procesos participativos de autogestión.",
    limitation:
      "No es una recopilación mitológica y se usa solo para contexto contemporáneo, nunca para ampliar las escenas narrativas.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickMakaguanSources(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = makaguanSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Makaguán desconocida: ${visto}`);
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
