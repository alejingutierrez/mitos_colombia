import bachue from "../myths/bachue.mjs";
import { koguiMedia } from "./media.mjs";
import { koguiCategoryBySlug } from "./universe.mjs";

const corpusHistory = `La fuente principal es el segundo tomo de Los Kogi, publicado en 1951 a partir del trabajo de campo de Gerardo Reichel-Dolmatoff. El volumen identifica relatores en varias secciones y presenta los textos como versiones situadas, no como un catecismo único. Konrad Theodor Preuss había recogido otros relatos y cantos décadas antes; las coincidencias y diferencias entre ambas obras muestran una tradición con variación, traducción y transmisión.

La revisión usa también fuentes Kággaba contemporáneas para el nombre del pueblo, el territorio y la responsabilidad sobre los espacios sagrados. Esas voces no se pegan retrospectivamente al relato antiguo: permiten explicar que la Sierra, la Ley de Origen y el trabajo de los Mamos siguen vivos, mientras la redacción y muchas categorías de los libros tempranos pertenecen a su época.`;

const corpusHistoryNote = `El sitio conserva el slug y la pertenencia comunitaria heredados para no romper las rutas públicas, pero corrige títulos, expansiones y afirmaciones cuando excedían el registro consultado. La ficha distingue de forma explícita la narración, la interpretación del investigador y el contexto contemporáneo; contar una versión histórica no equivale a revelar conocimiento restringido ni a hablar en nombre de todas las comunidades Kogui.`;

const gauteovanHistory = `La ficha no procede de una transcripción oral identificada. Su base es una compilación titulada Mitos y leyendas, que resume a Karl Theodor Preuss, añade una comparación con los antiguos Muisca y termina equiparando los cerros Kágaba con el Olimpo y México. Esa mediación explica tanto los datos conservables como el vocabulario evolucionista que aquí se retira.

Otras fuentes confirman a Guateovan o Nebulwe como nombre de la Madre y documentan la importancia de las máscaras y del Sol, pero no reproducen el supuesto pacto como un relato continuo. Por eso la página se presenta como historia de recepción de una síntesis antigua. Las devoluciones recientes de máscaras y objetos rituales al pueblo Kogui recuerdan, además, que esos bienes no son adornos disponibles para cualquier ilustración o lectura.`;

const gauteovanHistoryNote = `El sitio conserva el slug para no romper enlaces, pero corrige el título visible y cambia el estatuto de la página: ya no afirma que se trate de una leyenda oral autónoma. Cada elemento queda atribuido a la fuente que lo menciona. Esta precaución permite documentar la circulación editorial de Gauteován sin apropiarse de conocimientos ceremoniales ni presentar una reconstrucción moderna como tradición comunitaria.`;

const corpusVersions = `No hay una sola versión total del universo Kogui. Preuss y Reichel-Dolmatoff registraron nombres, secuencias y explicaciones con grafías distintas; además, los propios textos contienen alternativas y comentarios de más de un narrador. Esta página conserva el episodio que corresponde a su título y señala sus conexiones sin fundirlo con las demás fichas.

La ortografía mantiene una forma legible en castellano y menciona variantes cuando afectan la identificación. Palabras como Magri, Naowa, Kansa María o mama se explican desde la fuente y no se reemplazan por dioses, templos o sacerdotes universales. Las fuentes contemporáneas aportan contexto territorial, no una supuesta versión definitiva.`;

const corpusVersionsNote = `Las diferencias no se ordenan como una escala entre versión correcta y versiones defectuosas. Pueden responder a relatores, lugares, momentos, traducciones o propósitos distintos. Cuando un dato no queda resuelto por el corpus, la página conserva la incertidumbre y evita completarla con literatura comparada, psicología de personajes o detalles visuales inventados.`;

const gauteovanVersions = `La forma Gauteován de la compilación convive con Guateovan, Nebulwe y otras grafías. La ficha antigua del sitio convirtió esa síntesis en una narración exuberante y dio por seguras comparaciones externas. La revisión conserva el nombre visible Gauteován, mantiene el slug histórico y separa lo dicho por la compilación de lo corroborado en otros registros.

La Gran Madre, el Sol, las máscaras y los cerros también aparecen en fuentes Kogui más amplias, pero no siempre unidos por el mismo argumento. Esa diferencia impide mezclar esta página con La creación o El Sol — Mama, y también impide presentarla como la voz actual de todo el pueblo.`;

const gauteovanVersionsNote = `La ausencia de una transcripción continua no se corrige pegando fragmentos de procedencias distintas. El texto visible mantiene una sola línea argumental atribuida a la compilación y usa los demás documentos para verificar nombres o establecer límites. Lo no corroborado permanece como dato de recepción, no como hecho comunitario confirmado.`;

const sharedSimilarities = `Los motivos pueden recordar relatos de otras sociedades: madres primordiales, astros personificados, plantas nacidas de cuerpos, transformaciones en jaguar o alimentos entregados por seres de origen. La comparación es útil solo después de reconocer la secuencia, los nombres, la geografía y la función ritual de esta versión.

Por eso no se aplica el viaje del héroe ni se buscan equivalentes automáticos en Grecia, Roma o Mesoamérica. Dentro del propio archivo, las resonancias más sólidas están entre fichas Kogui: Naowa dialoga con la primera pareja; Kimaku con la creación y los cultivos; Kashindukwe con Núnkasha y Nuánashe; y el Sol con Susabanka, Gotzé y las ofrendas.`;

const sharedSimilaritiesNote = `Comparar no significa afirmar influencia, identidad ni un origen común. La ficha usa las semejanzas para orientar al lector y vuelve enseguida a los rasgos documentados que distinguen el relato.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano sin fotografía: ${scene}; Sierra Nevada de Santa Marta con ríos, bosques y cumbres, identidad Kogui o Kággaba sobria, prendas blancas cuando haya figuras humanas, sin cactus, desierto, pirámides, ruinas genéricas, máscaras inventadas, tocados panindígenas, símbolos aztecas, mayas o muiscas, texto, letras, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano sin fotografía: ${scene}; segunda escena complementaria del relato Kogui o Kággaba, sin repetir el encuadre horizontal, sin cactus, desierto, pirámides, ruinas genéricas, máscaras inventadas, tocados panindígenas, símbolos aztecas, mayas o muiscas, texto, letras, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildKoguiEditorialMyth(input) {
  const media = koguiMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = koguiCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const reception = input.sourceMode === "gauteovan";
  // Cada ficha escribe su propia capa documental; los `…Core` más el bloque
  // compartido son la disposición heredada.
  const historia = input.historia ?? `${input.historyCore}\n\n${
    reception
      ? `${gauteovanHistory}\n\n${gauteovanHistoryNote}`
      : `${corpusHistory}\n\n${corpusHistoryNote}`
  }`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${
    reception
      ? `${gauteovanVersions}\n\n${gauteovanVersionsNote}`
      : `${corpusVersions}\n\n${corpusVersionsNote}`
  }`;
  const similitudes =
    input.similitudes ??
    `${input.similarityCore}\n\n${sharedSimilarities}\n\n${sharedSimilaritiesNote}`;
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
    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),
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
FUENTES: ${reception ? "síntesis secundaria Gauteován, contrastada con fuentes Kogui" : "corpus Kogui de 1951, contrastado con Preuss y voces contemporáneas"}.
IMÁGENES: pareja reutilizada por afinidad narrativa; ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
