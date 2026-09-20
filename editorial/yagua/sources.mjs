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

export const yaguaSources = {
  powlison1993: source({
    title:
      "La mitología yagua: tendencias épicas en una mitología del Nuevo Mundo",
    author: "Paul S. Powlison",
    year: 1993,
    type:
      "colección mitográfica con traducciones libres y comparación de variantes",
    url: "https://peru.sil.org/resources/archives/29670",
    summary:
      "Publica seis ciclos construidos a partir de numerosas versiones Yagua registradas entre 1955 y 1967, con narradores, lugares, episodios y límites editoriales identificados.",
    limitation:
      "El autor trabajó desde un proyecto lingüístico misionero y organizó resúmenes comparativos que ninguna persona narró exactamente de esa forma; la edición distingue esos resúmenes de las traducciones atribuidas.",
  }),
  chaumeil1978: source({
    title: "Los mellizos y la Lupuna. Mitología yagua",
    author: "Jean-Pierre Chaumeil y J. Chaumeil",
    year: 1978,
    type:
      "registro etnográfico de relatos grabados en Yagua y traducidos con un intérprete Yagua",
    url: "https://amazoniaperuana.caaap.org.pe/index.php/amazoniaperuana/article/view/243",
    summary:
      "Publica versiones de A. Sarko sobre los mellizos míticos y el árbol del agua, las contrasta con Powlison y documenta que ambos relatos pueden contarse separados o encadenados.",
    limitation:
      "Su análisis estructural refleja la antropología de la época y reproduce términos coloniales de las traducciones; no se trasladan esos rótulos a la voz narrativa actual.",
  }),
  chaumeil1994: source({
    title: "Los Yagua",
    author: "Jean-Pierre Chaumeil",
    year: 1994,
    type: "monografía etnográfica",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=50069",
    summary:
      "Sitúa territorio, historia, organización social, cultura material y cosmología Yagua, incluida la imagen de la tierra como una lupuna derribada.",
    limitation:
      "Es una síntesis académica traducida y no una voz única de todas las comunidades Yagua ni una fuente para completar episodios ausentes.",
  }),
  unicef2012: source({
    title: "Consejos de nuestros sabedores",
    author:
      "Institución Educativa Francisco de Orellana, CODEBA, ACITAM y UNICEF Colombia",
    year: 2012,
    type: "material educativo comunitario del Trapecio Amazónico",
    url: "https://www.unicef.org/colombia/informes/consejos-de-nuestros-sabedores",
    summary:
      "Recoge principios y consejos de pueblos del Trapecio; la sección Yagua relaciona a los mellizos Ndanu y Mêna con el comienzo de la vida y la orientación de los clanes.",
    limitation:
      "Es un material pedagógico colectivo y resumido; confirma continuidad y sentido actual, pero no permite reconstruir por sí solo una secuencia extensa.",
  }),
  minCulturaColombia: source({
    title: "Ñihamwo (Yagua): la gente roja e hijos de Nawanchi",
    author: "Ministerio de Cultura de Colombia",
    type: "perfil institucional basado en planes de vida del Amazonas",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20%C3%91IHAMWO.pdf",
    summary:
      "Documenta nombres propios, presencia transfronteriza y un resumen colombiano del origen desde Nawanchi y Há, junto con los ciclos de mellizos, Luna y Sol, Jaguar y Tortuga.",
    limitation:
      "Resume materiales secundarios y comunitarios sin publicar las narraciones completas; su cuenta de Nawanchi/Há se conserva como variante contextual y no se fusiona con otros ciclos.",
  }),
  bdpi: source({
    title: "Yagua",
    author: "Base de Datos Oficial de Pueblos Indígenas u Originarios del Perú",
    type: "perfil territorial, histórico y lingüístico oficial",
    url: "https://bdpi.cultura.gob.pe/pueblos/yagua",
    summary:
      "Registra la autodenominación Nihamwo/Yihamwo, la lengua Peba-Yagua y la presencia tradicional en los ríos Amazonas, Putumayo y Ampiyacu.",
    limitation:
      "Es una síntesis institucional actualizable y no se usa como fuente de diálogos, nombres de héroes o detalles narrativos.",
  }),
  ramos2021: source({
    title:
      "El estado actual de la vitalidad de la lengua yagua en el sur del Trapecio Amazónico colombiano",
    author: "Freddy Alexander Ramos Díaz",
    year: 2021,
    type: "tesis sociolingüística con trabajo de campo comunitario",
    url: "https://repositorio.unal.edu.co/handle/unal/81597",
    summary:
      "Estudia usos, actitudes y transmisión de la lengua en la comunidad Yagua de La Libertad y confirma la continuidad colombiana contemporánea del pueblo.",
    limitation:
      "Su objeto principal es la vitalidad lingüística, no la edición de los seis ciclos narrativos.",
  }),
  gobiernoMayor: source({
    title: "Yagua",
    author: "Autoridades Tradicionales Indígenas de Colombia - Gobierno Mayor",
    type: "perfil de organización indígena contemporánea",
    url: "https://www.gobiernomayor.org.co/yagua/",
    summary:
      "Sitúa comunidades Yagua en Leticia y Puerto Nariño y presenta esfuerzos actuales de continuidad territorial, cultural y lingüística.",
    limitation:
      "Es una página panorámica; algunos datos numéricos pueden cambiar y sus generalizaciones cosmológicas no sustituyen testimonios narrativos atribuidos.",
  }),
  minedu2024: source({
    title: "Tatya diyante mïchanu: Historias y relatos 3 - Yagua",
    author: "Ministerio de Educación del Perú",
    year: 2024,
    type: "material educativo contemporáneo en lengua Yagua",
    url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/11254",
    summary:
      "Muestra producción educativa reciente escrita en Yagua y la vigencia de la lengua como medio para relatos dirigidos a la infancia.",
    limitation:
      "No se usa para traducir ni completar los argumentos históricos de Powlison; su función es documentar continuidad lingüística y editorial.",
  }),
  gallego2011: source({
    title:
      "¿Cultura para consumir? Los yagua y el turismo cultural en el Trapecio Amazónico",
    author: "Lina Marcela Gallego Acevedo",
    year: 2011,
    type:
      "etnografía contemporánea en la comunidad Yagua de La Libertad",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/download/927/711/2405",
    summary:
      "Registra que habitantes Yagua de La Libertad asociaban embarcaciones turísticas nocturnas con el chimbilaco o cortacabezas, descrito como figura humana con alas de ave que sobrevuela ríos y quebradas y amenaza a pescadores.",
    limitation:
      "La autora lo define como relato contemporáneo ampliamente regional, no como ciclo ancestral exclusivo del pueblo Yagua. La edición conserva esa frontera y evita representar violencia gráfica.",
  }),
  cure2005: source({
    title:
      "Cuidado te mochan la cabeza: circulación y construcción de un rumor en la frontera amazónica de Colombia, Perú y Brasil",
    author: "Salima Cure Valdivieso",
    year: 2005,
    type:
      "tesis antropológica sobre un rumor contemporáneo transfronterizo",
    url: "https://redcol.minciencias.gov.co/Record/UNACIONAL2_4796137d269143f8705e236e5ad526ea/Details",
    summary:
      "Estudia la circulación de rumores sobre cortacabezas entre pobladores indígenas y mestizos de la triple frontera y su relación con luces, máquinas, extranjeros, extracción y desigualdad.",
    limitation:
      "El corpus reúne interlocutores de varias pertenencias, con énfasis en material Ticuna. Sirve para explicar el rumor regional, no para adjudicar todos sus episodios a los Yagua.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  acevedoCultura2011: source({
    title: "¿Cultura para consumir? Los yagua y el turismo cultural en el Trapecio Amazónico",
    author: "Lina Marcela Gallego Acevedo",
    year: 2011,
    type: "etnografía contemporánea",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/927",
    summary:
      "Documenta la comunidad yagua de La Libertad, en el Trapecio Amazónico colombiano, y su inserción en los circuitos turísticos: sirve para sostener que hay yagua en Colombia hoy y para explicar por qué el material narrativo disponible viene del lado peruano y no de allí.",
    limitation:
      "Su objeto es el turismo cultural y la escenificación de la diferencia, no la mitología: no contiene ninguna versión de este ciclo.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  valdiviesoCuidado2005: source({
    title: "Cuidado te mochan la cabeza. Circulación y construcción de un rumor en la frontera amazónica de Colombia, Perú y Brasil",
    author: "Salima Cure Valdivieso",
    year: 2005,
    type: "tesis de maestría con trabajo de campo",
    url: "https://repositorio.unal.edu.co/items/1a723217-91df-44a2-b7bc-46be3abfc030",
    summary:
      "Aporta casi todo el detalle del relato: las luces de colores que cambian de tamaño y tono, el aparato silencioso con computadores que detecta si la víctima va armada, el rayo que paraliza, los laboratorios que mantienen vivas cabezas y órganos, los disfraces de bufeo, caimán, tigre, pirarucú, pintadillo, venado, vaca marina, boa y águila con aparato para respirar, y el modo de reconocerlos por la conducta del animal. Contiene el episodio del muchacho de trece años que pescaba en el lago del Pan, el dibujo con cara de chimbilaco, tijeras en el pecho y patas de gavilán, y la prohibición familiar de volver a pescar.",
    limitation:
      "La autora advierte que no cita a sus interlocutores por sus nombres reales: todos los nombres son cambiados, de modo que la ficha no puede atribuir el episodio a una persona verificable. La palabra chimbilaco aparece sólo dos veces y siempre como el murciélago al que se parece la máscara, no como nombre del ser.",
  }),
  pribylEvidencias2010: source({
    title: "Evidencias médico antropológicas sobre el origen del Pishtaco",
    author: "Rosario de Pribyl",
    year: 2010,
    type: "artículo de revista arbitrada",
    url: "http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S1726-46342010000100017",
    summary:
      "Sostiene el paralelo andino que la ficha usa en similitudes: el pishtaco o sacagrasa como extractor de grasa de cuerpos indígenas para beneficio del blanco, y la tesis de que su antecedente está en el uso farmacéutico europeo de material humano en los siglos XVI y XVII, es decir, que la figura no tiene origen andino.",
    limitation:
      "Es peruana y andina, no amazónica ni colombiana, y está escrita desde la salud pública y la etnomedicina: no menciona el cortacabezas, el pelacara ni el chimbilaco. El eslabón que une pishtaco, pelacara y cortacabezas lo aporta Cure, no este artículo.",
  }),
  espanolachimbilaco2010: source({
    title: "chimbilaco (entrada del Diccionario de americanismos)",
    author: "Asociación de Academias de la Lengua Española",
    year: 2010,
    type: "entrada de diccionario",
    url: "https://www.asale.org/damer/chimbilaco",
    summary:
      "Registra chimbilaco como palabra viva del español de Colombia y la remite a chimbilá, con marca de área Co:SO. Es lo que permite decir en la ficha que el nombre del ser es, antes que nada, el nombre del murciélago.",
    limitation:
      "Es una remisión de una línea, sin definición propia y sin ninguna acepción sobrenatural; la marca de área apunta a Colombia y no al Amazonas, de modo que no confirma por sí sola el uso amazónico del término.",
  }),
  espanolachimbila2010: source({
    title: "chimbilá (entrada del Diccionario de americanismos)",
    author: "Asociación de Academias de la Lengua Española",
    year: 2010,
    type: "entrada de diccionario",
    url: "https://www.asale.org/damer/chimbil%C3%A1",
    summary:
      "Da la definición a la que remite chimbilaco: sustantivo masculino usado en Colombia para el murciélago, con identificación zoológica de la familia Emballonuridae.",
    limitation:
      "Es una entrada estrictamente léxica: no documenta creencia, relato ni región amazónica, y su acepción zoológica no coincide necesariamente con el murciélago que la gente del río tiene en mente.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickYaguaSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
    "powlison1993",
    "chaumeil1978",
    "chaumeil1994",
    "unicef2012",
    "minCulturaColombia",
    "bdpi",
    "ramos2021",
    "gobiernoMayor",
    "minedu2024",
  ];
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = yaguaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Yagua desconocida: ${visto}`);
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
export function pickChimbilacoSources(...entries) {
  // Antes esta función no recibía nada: devolvía la misma lista a todos los
  // mitos de la comunidad. La lista se conserva como reparto por defecto
  // mientras cada ficha pasa a declarar sus propias claves.
  const entradas = entries.length ? entries : [
    "gallego2011",
    "cure2005",
    "ramos2021",
    "minCulturaColombia",
    "bdpi",
    "gobiernoMayor",
    "chaumeil1994",
  ];
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = yaguaSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente de Chimbilaco desconocida: ${visto}`);
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
