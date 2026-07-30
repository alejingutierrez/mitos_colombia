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
};

export function pickYaguaSources() {
  const keys = [
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
  return keys.map((key) => {
    const selected = yaguaSources[key];
    if (!selected) throw new Error(`Fuente Yagua desconocida: ${key}`);
    return selected;
  });
}
