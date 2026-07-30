import bachue from "../myths/bachue.mjs";
import { yaguaMedia } from "./media.mjs";
import { yaguaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Paul S. Powlison reunió relatos Yagua entre 1955 y 1967 como parte de un trabajo lingüístico. Las primeras grabaciones procedieron de Luzmina Silva, Jacinto Acipali, Agripina de Núñez, Rufino Macahuachi y Laureano Mozombite. En 1967 recorrió comunidades desde el Amazonas y sus tributarios hasta el Atacuari, cerca de la frontera con Colombia, y trabajó con veintidós narradores. El volumen de 1993 seleccionó seis ciclos de un archivo cercano a noventa narraciones.

La colección no presenta una voz única. Para cada ciclo Powlison construyó un resumen comparando variantes y, por separado, publicó la traducción libre de una versión atribuida. Ninguna persona narró exactamente todos los episodios del resumen. Esta edición conserva esa diferencia: el Relato sigue una secuencia representativa documentada y Versiones explica los cambios de narrador, combinación y orden.

Jean-Pierre y J. Chaumeil registraron en la década de 1970 nuevas versiones en lengua Yagua, traducidas con un intérprete Yagua bilingüe. Su publicación sobre los mellizos y la lupuna confirma el núcleo del ciclo central, pero invierte en ocasiones cuál hermano transforma, crea o consigue la flauta. Esa discrepancia no es un error que deba corregirse: demuestra que los relatos seguían cambiando al ser contados.

Las fuentes históricas nacieron bajo relaciones desiguales. Powlison trabajó dentro de un proyecto lingüístico misionero; las traducciones etnográficas de la época emplearon palabras como «salvaje», «antropófago», «raza» o «demonio». Cuando una acción violenta pertenece al argumento se narra con claridad, pero esos rótulos no se adoptan como descripción editorial de otros pueblos.

El pueblo Yagua o Ñihamwo vive a ambos lados de las fronteras entre Colombia, Perú y Brasil. En Colombia, Autoridades Tradicionales Indígenas y la investigación de Freddy Ramos Díaz sitúan comunidades y hablantes en Leticia, Puerto Nariño y La Libertad. El material educativo de ACITAM, CODEBA, la Institución Educativa Francisco de Orellana y UNICEF nombra a Ndanu y Mêna como mellizos de origen y relaciona sus poderes con la orientación de los clanes.

Por eso las páginas no tratan la mitología como un resto peruano trasladado a Colombia. Las versiones publicadas proceden sobre todo de Loreto, pero pertenecen a una red territorial y lingüística transfronteriza que continúa viva. Las personas y autoridades Yagua conservan prioridad para corregir nombres, límites y decisiones de publicación.`;

const sharedVersions = `Powlison llamó a estos conjuntos «leyendas» y «ciclos». Un ciclo reúne episodios relacionados que pueden aparecer solos, cambiar de orden o incorporarse a otro relato. La edición conserva seis páginas porque esa es la unidad comparativa que el investigador pudo sostener con numerosas versiones; no convierte cada incidente en un mito autónomo.

La grafía de los nombres varía. Chaumeil transcribe Ndano y Mena; el material educativo colombiano usa Ndanu y Mêna; Powlison traduce sus funciones como Hermano Mayor y Placenta. La página central conserva Ndanu y Mêna en el título y explica las otras formas. En las demás páginas se prefieren nombres descriptivos cuando las versiones no coinciden.

Cinco ciclos se conectan entre sí. Una versión de Luna y Sol continúa con Tortuga y Jaguar; los Mellizos comparten la pérdida de los padres y la venganza; el Huérfano crea a Capillejo como compañero; y los Mellizos de Avispa colocan a Mocayu frente a pruebas semejantes. Calvito permanece más independiente. Esas conexiones se explican sin producir una falsa epopeya completa.

El perfil colombiano del Ministerio de Cultura, basado en planes de vida, resume otro origen desde Nawanchi y el agua Há, además de nombrar a Turuna y Manunjo. Como no publica una narración completa atribuida, esta edición no llena sus vacíos ni la mezcla con los seis ciclos. La registra como una corriente colombiana que merece una futura página solo si aparece una versión pública suficiente.

La ficha heredada incorporaba a Petita, Sairango, Yuané y Asento. Esos personajes circulan en la recreación literaria de Hugo Niño y en notas secundarias sobre Ya-Tuján; no constan como parte de las versiones atribuidas que sostienen estas páginas. También se retiran «pureza racial», inmortalidad de un linaje y acusaciones degradantes contra pueblos vecinos.

Las adaptaciones ordenan escenas y comprimen repeticiones, pero no inventan ceremonias, parentescos, doctrinas, símbolos ni vestuario. Los detalles rituales operativos sobre flautas, curare o prácticas chamánicas permanecen fuera del Relato y de las imágenes.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; selva amazónica de ríos, palmas, lianas y vegetación húmeda construida con capas recortadas digitales de borde limpio, paleta verde profunda, azul de río, rojo achiote y ocre vegetal; acción narrativa legible, personajes humanos como siluetas adultas secundarias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin estética panindígena, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, capas recortadas digitales y quilling selectivo, paisaje amazónico documentado y acción central legible; personajes humanos como siluetas adultas secundarias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin ritual operativo, horror gráfico, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildYaguaEditorialMyth(input) {
  const media = yaguaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = yaguaCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const historia = `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = `${input.versionCore}\n\n${sharedVersions}`;
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
    similitudes: input.similarityCore,
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
FUENTES: Powlison 1993 sostiene la secuencia principal y documenta sus variantes; Chaumeil 1978 y 1994 aportan contraste mitográfico y contexto; seis fuentes contemporáneas sitúan lengua, territorio y continuidad en Colombia y Perú.
FRONTERA EDITORIAL: Petita y Ya-Tuján se distinguen de los relatos orales atribuidos; Nawanchi/Há queda como resumen colombiano contextual hasta contar con una versión pública suficiente.
LENGUAJE: se eliminan pureza racial y rótulos degradantes de traducciones históricas sin borrar la existencia de conflicto en las tramas.
UBICACIÓN: coordenadas aproximadas del Trapecio Amazónico colombiano, no de un sitio sagrado ni de la comunidad de un narrador concreto.
IMÁGENES: pareja propia del ciclo; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/yagua/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
