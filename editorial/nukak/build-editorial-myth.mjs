import bachue from "../myths/bachue.mjs";
import { nukakMedia } from "./media.mjs";
import { nukakCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Carlos Eduardo Franky registró con Embe, mayor y sabedor meu muno, una versión articulada del nacimiento Nɨkak. Dany Mahecha volvió a publicarla en 2024 dentro de una reconstrucción lingüística y etnohistórica que la contrasta con otra versión narrada por Kerayi y publicada por Ruth Gutiérrez en 2016. Las diferencias de nombres entre narradores no se borran ni se convierten en errores: muestran que la tradición tiene perspectivas situadas.

La revisión de 2024 permite corregir una confusión decisiva. Aunque Nɨkak y Kakua hablan lenguas estrechamente relacionadas, sitúan su nacimiento en lugares diferentes y nombran héroes culturales distintos. Los Nɨkak reconocen a Mauro; los Kakua, a Idn Kamni y un trayecto asociado al Río de Leche. La ficha antigua de este sitio trasladaba el segundo conjunto a los Nɨkak, por lo que fue reescrita por completo sin cambiar su URL.

El «nacimiento» narrado no se limita a la aparición biológica de seres humanos. Las investigaciones lo leen como una reorganización de familias y grupos que abren caminos, eligen territorios, siembran y vuelven a formar la vida. Esa dimensión histórica importa porque el pueblo Nɨkak ha sufrido epidemias, desplazamiento forzado y pérdida de acceso a su territorio desde el contacto oficial de 1988.

El proceso de formar Nɨkak baka' continúa vivo y cuenta con medidas de salvaguardia. Por ello esta edición no convierte la narración en curiosidad de un pueblo desaparecido, no presenta la movilidad como simple vagabundeo y no reproduce conocimientos ceremoniales como instrucciones.`;

const sharedVersions = `La versión principal fue narrada por Embe y publicada por Franky en 2011; Mahecha la reproduce y contextualiza en 2024. Gutiérrez publicó otra versión recogida con Kerayi, de los Wayari muno, en la que algunos nombres de personas y grupos que guían la migración cambian. Esta ficha sigue la secuencia de Embe y señala la existencia de esa variante sin fundir ambas listas.

Los episodios de Machoroko, Aukurɨbo y la dispersión pueden contarse juntos o ser recordados por separado cuando una conversación se concentra en el cuerpo, los perseguidores o los ancestros. Aquí permanecen unidos porque las fuentes los presentan como tres momentos de un mismo ciclo: apertura del paso entre mundos, salida y posible retorno, y ocupación de territorios. Separarlos en tres páginas produciría duplicados artificiales.

Las grafías también varían: Nɨkak, Nükak y Nukak, así como yê o yee para este mundo. El título visible usa «Nɨkak» y conserva Machoroko y Aukurɨbo. La categoría mantiene «Nukak Makú» para no romper la navegación heredada, aunque las fuentes contemporáneas prefieren Nɨkak y cuestionan el uso indiscriminado de Makú.`;

const sharedSimilarities = `Relatos sobre personas que emergen desde debajo de la tierra aparecen entre pueblos de la Orinoquía y la Amazonía. También son regionales las memorias de viajes fluviales, separaciones de grupos y ancestros nombrados mediante animales o plantas. Estas semejanzas ayudan a estudiar contactos históricos, pero no autorizan a intercambiar héroes, lugares o pueblos.

La versión Nɨkak se reconoce por su combinación precisa: Machoroko abre la comunicación entre bak y yê; Aukurɨbo sale primero y retorna tras transformarse; los grupos emergen cerca de la confluencia del Guaviare y el Inírida; unos siguen un río y otros el otro; los mayores deciden dónde vivir y siembran semillas traídas desde abajo. El movimiento es parte del nacimiento colectivo, no un decorado genérico de selva.

La ficha anterior confundía esta tradición con la Kakua, que sitúa el origen en el Río de Leche y nombra a Idn Kamni. La similitud lingüística entre ambos pueblos hizo plausible el error, pero la investigación de 2024 lo descarta de forma explícita. Por eso se eliminan la saliva creadora, la serpiente-canoa y el héroe Idn Kamni de esta página; no se reinterpretan como una variante Nɨkak sin evidencia.`;

function composeContent({ mito, historia, versiones, leccion, similitudes }) {
  return [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
}

function horizontalPrompt(scene) {
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; selva y dos grandes ríos como capas recortadas, identidad Nɨkak sobria sin inventar pintura corporal, vestuario ni objetos ceremoniales, sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena complementaria Nɨkak sin repetir el encuadre horizontal, sin inventar pintura corporal, vestuario ni objetos ceremoniales, sin texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildNukakEditorialMyth(input) {
  const media = nukakMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = nukakCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const historia = `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = `${input.versionCore}\n\n${sharedVersions}`;
  const similitudes = `${input.similarityCore}\n\n${sharedSimilarities}`;
  const imagePromptHorizontal = horizontalPrompt(input.sceneHorizontal);
  const imagePromptVertical = verticalPrompt(input.sceneVertical);
  const record = {
    slug: input.slug,
    title: input.title,
    category_path: categoryPath,
    tags: input.tags,
    latitude: media.latitude,
    longitude: media.longitude,
    mito: input.mito,
    historia,
    versiones,
    leccion: input.leccion,
    similitudes,
    excerpt: input.excerpt,
    seo_title: input.seoTitle,
    seo_description: input.seoDescription,
    seo: input.seo,
    methodologySeo: bachue.methodologySeo,
    focus_keyword: input.focusKeywords[0],
    focus_keywords: input.focusKeywords,
    image_prompt: imagePromptHorizontal,
    image_prompt_horizontal: imagePromptHorizontal,
    image_prompt_vertical: imagePromptVertical,
    image_url: media.horizontal,
    vertical_image_url: media.vertical,
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: `${input.researchNotes}
FUENTES: la narración de Embe es el núcleo; las demás obras aportan otra versión, contexto lingüístico, etnográfico y de salvaguardia.
LÍMITE CULTURAL: se resume únicamente material publicado; no se reproducen cantos, fórmulas, procedimientos chamánicos ni localizaciones operativas.
UBICACIÓN: coordenadas aproximadas de la confluencia Guaviare-Inírida, no del lugar exacto de nacimiento.
IMÁGENES: pareja reutilizada de ${media.reusedFrom}; ilustración digital 2D full paper cut y paper quilling a página completa, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
