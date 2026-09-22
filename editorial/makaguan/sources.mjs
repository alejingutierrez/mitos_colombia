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
      "Hermes Javier Mattar Jiménez; con los sabedores del resguardo El Vigía Gregorio Flórez, el capitán David Emiro González, el gobernador Manuel Sánchez Fernández, José Darío Cuenza y Arístides Tocaria",
    year: 2024,
    type: "tesis de maestría de acceso abierto con corpus comunitario",
    url: "https://repositorio.unal.edu.co/bitstream/unal/85766/2/18262677.pdf",
    summary:
      "La fuente que sostiene las tres fichas. Recoge los únicos tres relatos publicados del pueblo —el origen, la gran inundación y el alma— con el nombre y la fecha del sabedor que narró cada uno, a partir de diarios de campo, del PEC de El Vigía de 2005 (ASCATIDAR), de talleres escolares y de las correcciones que la comunidad hizo entre 2005 y 2023.",
    limitation:
      "El tránsito de la oralidad a la escritura lo mediaron un investigador y la escuela, y el propio trabajo reconoce variantes, correcciones pendientes y relatos que la comunidad guarda. El PEC de 2005 se lee aquí sólo a través de esta tesis, que lo transcribe completo; no se consultó el documento original, que no tiene URL propia. Y Tacu y Wachirajua no están corroborados fuera de este corpus: la lengua makaguán está extinta como habla y no hay estudio lingüístico publicado que los respalde.",
  }),
  cartillaHistorias2014: source({
    title: "Historias tradicionales del pueblo Makaguán. Escuela Azul",
    author:
      "Narradores makaguán Gloria Montañez, Edgar Parada, Odilia Rodríguez y Riquelme Parada, del asentamiento Escuela Azul, resguardo Caño Claro; grabación y edición de APOYAR con el Departamento para la Prosperidad Social",
    year: 2014,
    type: "cartilla comunitaria con narradores acreditados",
    url: "https://apoyar.org/wp-content/uploads/2024/09/Cartilla-3-Historias-Escuela-Azul-Noviembre-27-comprimido.pdf",
    summary:
      "El otro corpus makaguán publicado, y el único independiente de la tesis: tres mitos antiguos —la lora, la danta y el ayi-mijo— grabados y transcritos en talleres de 2014 con los narradores nombrados uno por uno. En el del ayi-mijo el marido muerto vuelve a la casa convertido en alma, brujea al niño y la mujer tiene que esconderse: la misma figura que la ficha del alma. ISBN 978-958-58710-4-5.",
    limitation:
      "Es de otro resguardo: Caño Claro, asentamiento Escuela Azul, en Tame, no El Vigía en Arauquita. Sus tres relatos no son los tres de esta colección, así que sirve para mostrar que el pueblo tiene más corpus del que se publica y para cotejar la figura del alma, nunca para completar las escenas de estas fichas. La página que lista las cinco cartillas invierte algunos títulos respecto de los archivos; el enlace va al archivo, no al listado.",
  }),
  menHitnu2022: source({
    title: "Tajumé Hitnü. Mi lengua hitnü",
    author:
      "Wilmer García y Camila Gómez Fonseca, Centro Educativo Indígena Hitnü Las Vegas; Ministerio de Educación Nacional y CERLALC, serie Territorios Narrados",
    year: 2022,
    type: "diccionario bilingüe de autoría comunitaria",
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2022-10/Mi%20lengua%20Hitn%C3%BC_Comunidad%20ind%C3%ADgena%20Hitn%C3%BC.pdf",
    summary:
      "Libro bilingüe español-hitnü del resguardo San José del Lipa, en Arauquita, con la lengua todavía viva y las entradas que nombran a los seres del mundo. Es donde el creador se llama Nakanü. ISBN digital 978-958-785-384-1.",
    limitation:
      "Es hitnü, no makaguán: pueblos vecinos de la misma familia guahibo, con lenguas emparentadas y territorios contiguos en Arauca. Que allí el creador sea Nakanü y aquí Tacu es una variación documentada entre dos pueblos, no un error de una de las dos fuentes, y así se cita. Mattar sitúa San José de Lipa entre los resguardos makaguán de Arauquita y este libro lo da como hitnü; la diferencia queda sin resolver.",
  }),
  amaya2025: source({
    title:
      "Epidemia (romé) de sarampión entre los Hitnü (Arauca, Colombia, 1964): una historia basada en etnografía",
    author:
      "Amaya-Castellanos, Lobo-Guerrero, Langdon, Idrovo y Ortega",
    year: 2025,
    type: "artículo académico de acceso abierto",
    url: "https://doi.org/10.1590/0102-311XES116124",
    summary:
      "Cadernos de Saúde Pública 41(6). Reconstruye desde la etnografía la epidemia de 1964 y el modo hitnü de entender la enfermedad, la muerte y lo que queda de la persona: es el contrapunto vecino de la figura del alma y de Roménu.",
    limitation:
      "Es hitnü, no makaguán, y es un artículo de salud pública, no una recopilación de relatos. La semejanza con Roménu es una lectura nuestra de dos fuentes que no se citan entre sí: ni este artículo ni la tesis de Mattar se relacionan.",
  }),
  unal2024: source({
    title:
      "Los Macahuán en riesgo de desaparecer: estrategias para salvar su cultura y sus relatos",
    author: "Yineth Arango, Unimedios sede Orinoquia, Periódico UNAL",
    year: 2024,
    type: "divulgación institucional de la investigación",
    url: "https://periodico.unal.edu.co/articulos/los-macahuan-en-riesgo-de-desaparecer-estrategias-para-salvar-su-cultura-y-sus-relatos",
    summary:
      "Publicado el 11 de abril de 2024. Cuenta el trabajo de la tesis desde fuera: los tres relatos, el papel de los sabedores, la negativa a que se les grabara y el uso de transcripciones manuscritas y dibujos en el Centro Educativo Indígena Makaguán. Recoge además la voz del gobernador de El Vigía, Víctor Ángel Tocaría Mora.",
    limitation:
      "Es una nota de prensa: no reproduce ninguna versión completa ni las cautelas metodológicas del trabajo. Y agrupa a los macaguán con los «Jitnü o Hitnü» como si fueran un solo pueblo, que es justo la confusión que estas fichas distinguen.",
  }),
  icbf2021: source({
    title:
      "Estudio Nacional de la Situación Alimentaria y Nutricional de los Pueblos Indígenas de Colombia: pueblo Makaguán",
    author:
      "ICBF y Universidad de Antioquia, con diagnóstico comunitario makaguán y las autoridades de Cuiloto y ASOCATA",
    year: 2021,
    type: "caracterización institucional con participación comunitaria",
    url: "https://www.icbf.gov.co/system/files/libro_macaguan2021_v251121.pdf",
    summary:
      "Distingue al pueblo Makaguán del Hitnü por autorreconocimiento, ubica sus resguardos en Arauca y recoge el lugar del venado y de los mitos de creación en la vida de las comunidades.",
    limitation:
      "Su objeto es alimentario y nutricional: sitúa pueblo y territorio, pero no edita ni narra ninguno de los relatos. Es contexto, nunca fuente clave de un mito.",
  }),
  radioNacional2022: source({
    title: "Los Macarieros: sabiduría, paz y cultura indígena en Arauca",
    author:
      "Carolina Díaz, Radio Nacional de Colombia; con testimonios de Jonathan Campo, Natty Fajardo y autoridades de Los Macarieros",
    year: 2022,
    type: "perfil periodístico con voces comunitarias",
    url: "https://www.radionacional.co/cultura/tradiciones/indigenas-en-colombia-los-macarieros-sabiduria-paz-y-cultura-en-arauca",
    summary:
      "Publicado el 9 de agosto de 2022. Describe el desplazamiento desde Bocas del Ele, la etnoeducación, el conuco, la caza, el chikua como oráculo y el venado como figura de respeto entre comunidades makaguán de Arauca.",
    limitation:
      "No transcribe ningún relato y se concentra en la comunidad de Los Macarieros, en Tame. En varios pasajes usa la agrupación Hitnü–Makaguán, así que no sirve para separar a los dos pueblos, que es lo que aquí importa.",
  }),
  jangwapana2026: source({
    title:
      "Autogestión y sostenibilidad rural como proceso de construcción participativa del pueblo indígena Makaguán en Arauca",
    author:
      "Andrés Camilo Méndez Otero, Jemay Mosquera Téllez y Gendler Alexander Jaimes Gauta, Universidad de Pamplona",
    year: 2026,
    type: "artículo académico participativo de acceso abierto",
    url: "https://revistas.unimagdalena.edu.co/index.php/jangwapana/article/view/6505",
    summary:
      "Jangwa Pana 25 (2), publicado el 26 de junio de 2026. Trabaja en el mismo resguardo El Vigía que narró los tres relatos y describe su horticultura de subsistencia, su territorialidad y sus procesos de autogestión.",
    limitation:
      "No es una recopilación mitológica: sólo aporta el estado contemporáneo del resguardo, nunca escenas. El servidor de la revista sirve una cadena de certificados incompleta, de modo que algunos clientes la marcan como insegura aunque el navegador la abra sin problema.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  tiradoPalabras2014: source({
    title: "Palabras propias del pueblo Makaguán. Resguardo Indígena La Esperanza",
    author: "Claudia Giovanna Rivera Tirado, Francisco Alejandro Forero Yanquén y Juan Sebastián Hurtado Holguín (APOYAR), con la comunidad makaguán de La Esperanza; convenio 115 de 2014 DPS–APOYAR",
    year: 2014,
    type: "cartilla comunitaria (glosario de palabras propias)",
    url: "https://apoyar.org/wp-content/uploads/2024/09/Cartilla-1-Palabras-Propias-La-Esperanza-Noviembre-27_compressed.pdf",
    summary:
      "Glosario makaguán levantado con la comunidad de La Esperanza. En la p. 9 registra «Malilua o Malua: según la mitología del pueblo Makaguán así se llamaba el primer hombre de esta etnia»: el único nombre publicado, fuera del corpus de Mattar, para un antepasado del origen makaguán. Trae además samulia (marrano de monte, p. 14 y ss.), una de las presas que cazan los primeros makaguanes en el relato. ISBN 978-958-58710-3-8.",
    limitation:
      "Es de otro resguardo (La Esperanza, en Tame), no de El Vigía. No narra el relato del venado: sólo nombra al primer hombre, y ese nombre no aparece en la versión de El Vigía, que habla de cuatro mujeres y cuatro hombres sin nombre. Constancia de una tradición de origen en otro resguardo, no para completar escenas.",
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
