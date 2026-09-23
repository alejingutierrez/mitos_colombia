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

export const yucunaSources = {
  herreraKanuma: source({
    title: "Kanuma: un mito de los Yukuna-Matapí",
    author:
      "Leonor Herrera Ángel; narración Yukuna-Matapí transcrita con colaboración indígena",
    year: 1975,
    type: "registro etnográfico primario en español",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1603",
    summary:
      "Publica el ciclo de Kanumá: el robo del Yuruparí a las primeras mujeres, su recorrido por el Mirití y el retorno de alimentos, frutales y coca.",
    limitation:
      "La antropóloga hizo cambios para facilitar la lectura y el informante declaró que el relato continuaba más allá del fragmento conocido; no se presenta como versión total.",
  }),
  herreraMatapi: source({
    title: "El nacimiento de los Matapí",
    author:
      "Leonor Herrera Ángel; narración Yukuna-Matapí transcrita con colaboración indígena",
    year: 1976,
    type: "registro etnográfico primario con introducción y análisis",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1734",
    summary:
      "Documenta en dos partes el nacimiento Upichiya/Matapí, su vínculo con los Yukuna y una extensa historia de Ka'amarí, Himuri y sus descendientes.",
    limitation:
      "La edición ordena diecisiete secciones de una historia ancestral muy larga; la página web selecciona el origen y declara los episodios que no resume.",
  }),
  herreraYurupari: source({
    title: "Yuruparí y las mujeres",
    author: "Leonor Herrera Ángel",
    year: 1975,
    type: "estudio etnográfico complementario",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1625",
    summary:
      "Analiza el episodio de las primeras mujeres y su relación con el Yuruparí dentro del mismo conjunto Yukuna-Matapí.",
    limitation:
      "La publicación histórica contiene detalles rituales y categorías de género que esta edición no convierte en instrucciones ni normas contemporáneas.",
  }),
  vanDerHammen1992: source({
    title:
      "El manejo del mundo: naturaleza y sociedad entre los Yukuna de la Amazonia colombiana",
    author:
      "María Clara van der Hammen; colaboración principal de Chápune y familias de Puerto Córdoba",
    year: 1992,
    type: "etnografía extensa con fragmentos narrativos atribuidos",
    url: "https://www.tropenboscol.org/app/data/uploads/sites/15/Col-Series-4-1.pdf",
    summary:
      "Distingue ciclos alrededor de Jeechú, Karipulakena, Kawarimi, Kanumá, Kari y Yanama, y explica cómo sus episodios pueden contarse de forma aislada.",
    limitation:
      "La obra usa fragmentos para analizar prácticas y territorio, no transcribe la mitología completa ni autoriza a unir ciclos por semejanza.",
  }),
  fontaine2014: source({
    title: "La nuit pour apprendre: le chamanisme nocturne des Yucuna",
    author:
      "Laurent Fontaine; versiones de Mario Matapí (Píteru) y Milciades Yucuna (Túwemi)",
    year: 2014,
    type: "estudio bilingüe y comparativo de dos versiones",
    url: "https://books.openedition.org/societe-ethnologie/3911",
    summary:
      "Publica secuencias del ciclo de los Karipú Lakena y dos versiones de la obtención de la primera noche, con narradores y diferencias identificados.",
    limitation:
      "Su foco es la noche y el aprendizaje; no ofrece el ciclo entero como una única traducción al español ni permite reproducir conjuros operativos.",
  }),
  fontaine2011: source({
    title:
      "Les cours d’eau dans les incantations chamaniques des Indiens yucuna",
    author: "Laurent Fontaine",
    year: 2011,
    type: "artículo académico con comparación de versiones Yucuna y Matapí",
    url: "https://journals.openedition.org/jsa/11693",
    summary:
      "Contrasta las versiones de Mario Matapí y Milciades Yucuna sobre árboles de agua, ríos, peces y lugares del ciclo Karipú Lakena.",
    limitation:
      "Se cita para variantes y geografía narrativa; las fórmulas de curación y los conocimientos operativos permanecen fuera de las fichas.",
  }),
  jacopin1972: source({
    title: "Habitat et territoire yukuna",
    author: "Pierre-Yves Jacopin",
    year: 1972,
    type: "etnografía territorial con trabajo de campo entre 1969 y 1971",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1972_num_61_1_2115",
    summary:
      "Aporta contexto sobre maloca, territorio y relaciones del Mirití-Paraná sin reducir las categorías Yukuna a equivalentes occidentales.",
    limitation:
      "Es una fuente histórica escrita por un investigador externo y no se usa para completar diálogos o episodios narrativos ausentes.",
  }),
  villaPosse1993: source({
    title: "Mitos y leyendas de Colombia",
    author: "Eugenia Villa Posse, compiladora",
    year: 1993,
    type: "antología documental de fuentes previamente publicadas",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=58546",
    summary:
      "Reproduce en acceso abierto La historia de Kanumá y El nacimiento de los Matapí, con referencias a las publicaciones originales.",
    limitation:
      "No es una versión oral independiente y contiene errores tipográficos de la reproducción; se usa para consulta y control, no para aumentar artificialmente el número de testimonios.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  hildebrandOrigen1975: source({
    title: "Origen del mundo según los Ufaina",
    author: "Martín von Hildebrand",
    year: 1975,
    type: "registro etnográfico primario",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1609",
    summary:
      "Es la obra a la que Herrera remite en la nota donde explica que entre los tanimuka los «mayores» nacieron del tigre, dato con el que interpreta el privilegio de bailar primero que Ka'amari reclama al comienzo del conflicto.",
    limitation:
      "Registro de otro pueblo, los tanimuka o ufaina; se usa como paralelo documentado y para sostener una nota de Herrera, no como versión de este mito.",
  }),
  registroCorpus: source({
    title: "Corpus yucuna de la Collection Pangloss",
    author: "Laurent Fontaine (registro y transcripción), CNRS-LACITO",
    type: "corpus de textos transcritos y grabaciones en línea",
    url: "https://pangloss.cnrs.fr/corpus/Yucuna?lang=en",
    summary:
      "Documenta que los mitos largos del Mirití y La Pedrera siguen narrándose con narrador y fecha —entre ellos un Horacio Matapi en 1970— y registra el término Jupichiya como nombre de uno de los grupos incorporados, la misma raíz que aquí aparece como upichiya.",
    limitation:
      "No contiene una versión del «Nacimiento de la Gente»; se consultaron la ficha del corpus y los resúmenes públicos, en francés e inglés.",
  }),
  fontainelagentivite2013: source({
    title: "De l'agentivité mythique et incantatoire. Le mythe de Kawáirimi chez les Yucuna (Amazonie colombienne)",
    author: "Laurent Fontaine",
    year: 2013,
    type: "artículo académico",
    url: "https://journals.openedition.org/ateliers/9481",
    summary:
      "Compara dos versiones fechadas y atribuidas de un mismo mito yucuna, una de Mario Matapi en 2008 y otra de Horacio Matapi en 1970, y es la referencia que permite verificar que ese nombre circula como narrador en el corpus del Mirití.",
    limitation:
      "Está en francés, trata del ciclo de Kawáirimi y no de este relato, y no establece que el Horacio Matapi de 1970 sea el narrador de 1974.",
  }),

  // ——— Búsqueda profunda 2026-09-22 ———
  yucunaHistoire2015: source({
    title: "Histoire de Ka'marí, l'ancêtre éponyme des Matapí (ou Jupichiya)",
    author: "Mario Matapi (narrador); Laurent Fontaine (transcripción yucuna, traducción francesa y notas)",
    year: 2015,
    type: "transcripción bilingüe yucuna-francés de un relato grabado en La Pedrera, agosto de 2006 (186 páginas)",
    url: "https://web.archive.org/web/20240616040239/http://site.laurentfontaine.free.fr/Transcriptions-yucuna/Recits/Jupichiya_Mario/MATAPI_Mario-KahmarI-eponyme_jupichiya_2006-08.pdf",
    summary:
      "Es una segunda versión matapí íntegra del mismo relato, con narrador, lugar y fecha. Ka'marí nace sin padre conocido de la hermana de unos jaguares-chamanes, con manos y cola de jaguar; un tío evita que lo entierren y le hace los cuidados chamánicos; Yuwinata, en lo alto del Mirití-Paraná, es la tierra natal de los matapí, donde Ka'marí se instala como dueño de maloca y reparte a sus hermanos en clanes. La guerra estalla porque Junimare —cuyo nombre de niño era Jímuya, «paujil», y luego Wepana— deja pasar a sus hombres con las trompas del yuruparí entre las mujeres; siguen generaciones de guerras fratricidas, el carbón de furia que Ka'marí obtiene de su cuñado, su muerte en forma de jaguar a manos de Papukuwá, el poder chamánico que sus hijos rehúsan heredar, y un cierre con la alianza con los kamejeya (yucuna) al recibir la hija de Pichawatá. Fontaine explica en nota que Jupichiya significa en yucuna «gente de hace mucho tiempo».",
    limitation:
      "Está en yucuna y francés, no en español. El sitio personal de Fontaine (site.laurentfontaine.free.fr) está suspendido y responde 403; la copia que se cita es la del Internet Archive, capturada en 2024 (desde esta máquina web.archive.org sólo respondió por http; la URL https reseteó la conexión, comprobar a mano). Difiere de la versión de Horacio Matapi en puntos que la ficha no recoge: el nacimiento no es del canangucho sino de una madre sin varón; el rival se llama Junimare y no Himuri, y la ofensa del yuruparí la cometen los hombres de Junimare, no los de Ka'amari; y el final es la alianza con los yucuna, como en van der Hammen, no la emboscada contra la gente de Kerámoa. Fontaine remite a Matapí, Matapí y Rodríguez 1997 como la otra versión íntegra.",
  }),
  robayoIdeologias2012: source({
    title: "Ideologías lingüísticas y chamanismo entre los indígenas yukuna-matapí",
    author: "Camilo Alberto Robayo, con la colaboración de Uldarico Matapí",
    year: 2012,
    type: "artículo académico (Forma y Función 25-2, Universidad Nacional de Colombia)",
    url: "https://revistas.unal.edu.co/index.php/formayfuncion/article/view/39836",
    summary:
      "Recoge la periodización del propio Uldarico Matapí: una «primera época» de los héroes Karipulakena y una «segunda época» que inaugura el surgimiento de Ka'mari, «el ancestro que inició las generaciones sobre el mundo actual», con quien aparece el lenguaje ordinario. Menciona el origen del grupo como la eclosión de un huevo del que salen los antepasados, y que la lengua upichía/matapí desapareció hace generaciones por asimilación al kamejeya de los yukuna, sus cuñados. Remite a Historia de los upichía (Matapí y Matapí, 1997) y a las aclaraciones de Rodríguez y van der Hammen sobre cómo se transcribió ese libro.",
    limitation:
      "Es un estudio de ideologías lingüísticas, no una versión narrada del nacimiento: sitúa a Ka'mari en la cadena mítica pero no cuenta la disputa del baile ni las guerras. El origen por eclosión de un huevo no coincide con el nacimiento del canangucho de Horacio Matapi; es otra imagen del comienzo, no la misma escena.",
  }),
  huaiHistoria1997: source({
    title: "Historia de los upichía",
    author: "Carlos Matapí (Huai) y Uldarico Matapí (Turupi), con Carlos Alberto Rodríguez; Tropenbos Colombia",
    year: 1997,
    type: "ficha del editor de una historia escrita por autores matapí (serie Colombia de Tropenbos)",
    url: "https://www.tropenboscol.org/resources/history-of-the-upichia/",
    summary:
      "La página del editor describe el libro: la historia de los upichía, hoy matapí, contada por el viejo conocedor Carlos Matapí a su hijo Uldarico, formado para manejar maloca, transcrita y traducida por ellos. Tiene tres partes —origen del mundo y de la maloca, organización social y, al final, la secuencia detallada del gran héroe del grupo, «considerado el principal antepasado»—. Es la versión propia de los matapí que Fontaine y Robayo citan como la otra versión íntegra de la historia de Ka'marí.",
    limitation:
      "Es la ficha del editor, en inglés, con resumen y portada: el libro no está en línea ni en Tropenbos (se probaron las rutas de su serie) ni en ningún repositorio abierto; sólo aparece en Google Books, vetado. No sostiene por sí sola ningún episodio: se cita para declarar que existe una versión escrita por los propios matapí y que la ficha no la pudo leer.",
  }),
  reichelYukuna1994: source({
    title: "Yukuna",
    author: "Elizabeth Reichel",
    year: 1994,
    type: "entrada de enciclopedia (Encyclopedia of World Cultures, vol. VII, reproducida en Encyclopedia.com)",
    url: "https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/yukuna",
    summary:
      "Dice que en el siglo XX los yukuna «adoptaron» a los matapí (upichía), que eran unos 90 en 1989, que antes hablaban una lengua tukano oriental y hoy hablan yukuna, que antiguamente se los consideraba gente común o «esclavos», y que su sitio mítico de origen está en la región alta de los ríos Yapiya y Guacaya.",
    limitation:
      "Es una síntesis de enciclopedia servida por un agregador (Encyclopedia.com reproduce la obra de Gale; el original no está abierto). No narra el mito. Choca con las otras fuentes en dos puntos que conviene anotar y no resolver: sitúa el origen en el alto Yapiya y Guacaya, no en Yuinata (Herrera, Fontaine, van der Hammen), y da el matapí como lengua tukano, cuando Fontaine sostiene que es arawak.",
  }),
  narradorMythe2005: source({
    title: "Mythe de Kanumá (Histoire de Kanumá)",
    author: "Mario Matapi (narrador, La Pedrera, 27 de enero de 2005); Laurent Fontaine (transcripción yucuna, traducción francesa y notas), CNRS-LACITO, Collection Pangloss",
    year: 2005,
    type: "transcripción bilingüe yucuna-francés de un relato grabado (59 páginas, 1.458 enunciados)",
    url: "https://cocoon.huma-num.fr/data/fontaine/masters/YCN_KANUMA.pdf",
    summary:
      "Es el texto íntegro de la versión de Mario Matapi, no sólo su resumen. Tiene los mismos pilares que la de Herrera: las Ñamátuna, que saben el chamanismo y guardan las flautas del yuruparí; Yewari, compañero de Kanumá, que las roba; la huida de las mujeres Mirití abajo mientras Kanumá y Kawáirimi levantan con cantos las piedras que cierran el río, y los chorros que quedaron, Ja'riyé —sagrado, habitado por un anaconda— y Mamurá; Churumi, el martín pescador pequeño, que recibe casabe de una hermana; y la captura de Je'chúmeru, hija de Je'chú (el Cielo), que el narrador llama también Iñaweló, madre de los peces, y Maire'ru, madre de las pirañas. Sigue hasta mucho después: los frutos de la chagra, el chontaduro, y el final en que Kanumá baja con su mujer por el Amazonas a otro mundo, donde todavía se le oye afilar la lanza, «te te te».",
    limitation:
      "Está en yucuna y francés, sin versión española. La ficha del corpus que ya cita el sitio (registroCorpus) es la presentación general; ésta es la transcripción, con DOI 10.24397/pangloss-0000495 y licencia CC BY-NC-ND. Difiere de Herrera en puntos que conviene no fundir: Kanumá vive con las Ñamátuna como su marido, no llega pidiendo dónde vivir; aparece Kawáirimi ayudando a cerrar el río; los chorros tienen otros nombres; y la segunda hermana es hija del Cielo. El nombre Maire'ru confirma la Mairero de van der Hammen.",
  }),
  yucunaMythe2015: source({
    title: "Mythe de Kalapejé, le jeune Kanumá",
    author: "Milciades Yucuna, Túwemi (narrador, La Pedrera, octubre de 2005); Rey Yucuna (transcripción y traducción al español); Laurent Fontaine (corrección, traducción francesa y notas)",
    year: 2015,
    type: "transcripción bilingüe yucuna-francés de un relato grabado (11 páginas)",
    url: "https://web.archive.org/web/20210417201601/http://site.laurentfontaine.free.fr/Transcriptions-yucuna/Recits/Kamejeya_Milciades%26Edilberto/YUCUNA_Milciades-Kanuma-Kalapeje_2005-10.pdf",
    summary:
      "Es la versión kamejeya —de un narrador yucuna, no matapí— del mismo tramo que publicó Herrera. Kalapejé, nombre de niño de Kanumá, llega donde las Ñamatu, unas cuarenta mujeres que no querían hombre, diciendo que no tiene con quién vivir; ellas hacen el yuruparí y le prohíben mirar; él mira y les roba las trompas de los tres hermanos más poderosos, Jarají, Juwipí y Maarepela; ellas le piden varias veces que las devuelva y él niega haberlas visto; se van, y él baja el Mirití-Paraná detrás intentando cerrarles el paso, sin lograrlo. Corrobora desde otro narrador y otro linaje la llegada sin casa, la prohibición de mirar y la negación repetida que la ficha toma de Herrera.",
    limitation:
      "Está en yucuna y francés. El sitio de Fontaine está suspendido (403) y la copia citada es la del Internet Archive de 2021; no está en la colección Pangloss. Aquí quien roba es el propio Kalapejé, no la lagartija Yévari, y el relato termina con la huida de las mujeres, sin el hambre ni el encuentro con las hijas de Je'chú.",
  }),
};

export const abundanceSources = {
  urbina2010: source({
    title:
      "Las palabras del origen: breve compendio de la mitología de los uitotos",
    author:
      "Fernando Urbina Rangel; relato de Julio Ribera y traducción de Ismael Mendoza",
    year: 2010,
    type: "compendio narrativo con relator, lugar y traductor identificados",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "La metamorfosis de Yiida Buinama incluye el nacimiento de Moniya Amena, Árbol de los frutos o de la abundancia, dentro de una versión Muinane narrada en uitoto.",
    limitation:
      "El capítulo continúa hacia el origen del maguaré. La nueva ficha presenta la ventana del árbol y no la convierte en un ciclo separado sin relación.",
  }),
  idartes2015: source({
    title: "Mitos de creación: El origen de las frutas",
    author: "Selección de Julio Paredes Castro; Libro al Viento, Idartes",
    year: 2015,
    type: "antología pública de tradición oral",
    url: "https://idartesencasa.gov.co/sites/default/files/libros_pdf/LAV044-MitosdeCreaci%C3%B3n-2ed.pdf",
    summary:
      "Publica una versión del Putumayo con Monalla Tirisa, Cullo Buinayma, la hambruna, la hormiga y Monilla Amena.",
    limitation:
      "No identifica al narrador ni el registro original. Se usa como variante secundaria y deja de presentarse como mito Yucuna.",
  }),
  museoNacional: source({
    title: "Moniya Amena, el árbol de la abundancia",
    author:
      "Museo Nacional de Colombia; dramaturgia basada en Fernando Urbina",
    type: "programa museal de divulgación",
    url: "https://www.museonacional.gov.co/sitio/amazonas/actividades.html",
    summary:
      "Identifica Moniya Amena como relato Uitoto sobre los frutos, la selva y el río Amazonas.",
    limitation:
      "Describe una adaptación escénica y no se usa para reconstruir diálogos ni adjudicar una voz comunitaria única.",
  }),
  museoOro2000: source({
    title: "Un relato mítico sobre el origen del maguaré",
    author: "Fernando Urbina Rangel y José Octavio García",
    year: 2000,
    type: "artículo académico con versión narrada y contexto",
    url: "https://publicaciones.banrepcultural.org/index.php/bmo/article/download/4853/5099/9947",
    summary:
      "Explica que el episodio del maguaré pertenece al mito difundido de Moniya Amena y relaciona árbol, plantas, río Amazonas y adquisición del hacha.",
    limitation:
      "Resume otra versión del ciclo y contiene conocimientos ceremoniales que no se trasladan a la página ni a sus imágenes.",
  }),
  banrepAmazonas: source({
    title: "Río Amazonas, mito y leyenda",
    author: "Red Cultural del Banco de la República",
    type: "síntesis institucional comparativa",
    url: "https://enciclopedia.banrepcultural.org/index.php?title=R%C3%ADo_Amazonas%2C_mito_y_leyenda",
    summary:
      "Reconoce Moniya Amena como Árbol de la Vida Huitoto y distingue sus versiones de otros árboles amazónicos.",
    limitation:
      "Es una síntesis panorámica; no se usa para fundir tradiciones Yagua, Quechua y Huitoto.",
  }),
  unad2018: source({
    title:
      "Mito o realidad, la filosofía de la selva: un acercamiento pedagógico al mito Uitoto",
    author: "Juan José Mencía Hernández",
    year: 2018,
    type: "investigación pedagógica y hermenéutica",
    url: "https://repository.unad.edu.co/handle/10596/18085",
    summary:
      "Estudia Moniya Amena y advierte las transformaciones que sufre al pasar del saber narrado a materiales escolares.",
    limitation:
      "Es interpretación académica, no fuente de nuevas escenas; se usa para hacer visible el problema de la transposición didáctica.",
  }),
  bibliotecaNacional: source({
    title: "La leyenda de la ceiba de los huitotos",
    author: "Biblioteca Nacional de Colombia",
    type: "material público para promoción de lectura",
    url: "https://bibliotecanacional.gov.co/es-co/actividades/Publicaciones%20sobre%20las%20Bibliotecas%20P%C3%BAblicas/Documents/ABC%20del%20Bibliotecario.pdf",
    summary:
      "Presenta a Juzi-Moniya Amena como árbol de alimentos y señala la participación de tucán y pájaro carpintero en su caída.",
    limitation:
      "Es una adaptación breve y no reemplaza el relato atribuido de Julio Ribera ni prueba que todas las variantes nombren las mismas especies.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickYucunaSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
    "herreraKanuma",
    "herreraMatapi",
    "herreraYurupari",
    "vanDerHammen1992",
    "fontaine2014",
    "fontaine2011",
    "jacopin1972",
    "villaPosse1993",
  ];
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = yucunaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Yucuna desconocida: ${visto}`);
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

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickAbundanceSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
    "urbina2010",
    "idartes2015",
    "museoNacional",
    "museoOro2000",
    "banrepAmazonas",
    "unad2018",
    "bibliotecaNacional",
  ];
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = abundanceSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Moniya Amena desconocida: ${visto}`);
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
