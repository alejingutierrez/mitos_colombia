import bachue from "../myths/bachue.mjs";
import { kuivaMedia } from "./media.mjs";
import { kuivaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `El corpus comparativo más amplio es Folk Literature of the Cuiva Indians, editado por Johannes Wilbert y Karin Simoneau en 1991. Su índice reúne 177 narraciones obtenidas por Bernard Arcand, Walter Coppens, Isabel Kerr y Francisco Ortiz Gómez. Allí aparecen varias secuencias de Namon o Namun, al menos ocho entradas explícitas de inundación y varias narraciones sobre los primeros Jiwi y la salida de seres humanos desde debajo de la tierra. La cantidad demuestra diversidad, no una versión canónica única.

La historia documental de estas dos páginas es desigual. El relato de creación puede leerse completo en la segunda edición de Mitos de creación, publicada por Idartes en 2015, pero la antología no identifica narrador, fecha ni lugar de registro. Namon y la inundación sí está numerado como relato 28 del corpus de 1991 y atribuido en la tabla de contenidos a la recopilación de Isabel Kerr; el texto consultado en línea es una reproducción secundaria de esa edición.

Kuiva y Cuiva son grafías habituales en bibliografía externa. Wamonae y Wamone aparecen en perfiles comunitarios e institucionales, y algunas personas también se reconocen como Jiwi. El sitio usa «Kuiva (Wamonae)» para conectar la ruta heredada con esa diversidad de nombres, sin afirmar que todos son intercambiables en cada lugar o época.`;

const sharedVersions = `El índice de Wilbert y Simoneau registra una familia narrativa, no un solo texto repetido. Los títulos sobre Namon o Namun describen más de una creación de personas y objetos culturales; las entradas de inundación ocupan varios lugares consecutivos; y otras narraciones anuncian salidas desde debajo de la tierra. Esos títulos permiten reconocer ciclos y variantes, pero no autorizan a completar escenas que no están disponibles.

La caracterización del Ministerio de Cultura agrega una cautela relevante: trabajos citados allí señalaron que ciertas misiones cristianas intervinieron relatos Kuiva para introducir contenidos religiosos o promover la agricultura sedentaria. Esa advertencia no permite decidir automáticamente qué frase es «auténtica» y cuál no. Sí exige atribuir con precisión. Por eso Boupé distribuyendo tierras, enseñando cultivos y organizando la vida aparece como parte de la versión impresa en 2008 y 2015, no como prueba de una doctrina precolonial uniforme.

Las variantes también cambian nombres y grafías: Namon, Namun y Namona figuran en títulos del mismo índice. La revisión conserva el nombre de cada versión consultada y evita fundir todos esos relatos en una biografía continua del personaje.`;

const sharedSimilarities = `Ambas narraciones tratan la formación de vida colectiva después de una ruptura: en una, el cielo se abre y de la sangre endurecida surgen personas; en la otra, el agua cubre la tierra y quienes sobreviven deben volver a reconocer alimento y paisaje. Ese vínculo interno es más seguro que cualquier equivalencia con relatos extranjeros.

Las inundaciones, las balsas, las alturas protectoras y el regreso de los alimentos aparecen en numerosas tradiciones. Compartir un motivo no prueba copia ni identidad. Aquí son específicos la advertencia de Namon, la burla de quienes no le creen, el árbol naxaerabo, el pavo de monte que escarba y los alimentos sime y jojomo. Del mismo modo, en la creación importan la herida del cielo, los fragmentos rojos, Boupé y Daimú.

Los perfiles institucionales relacionan a las comunidades Kuiva/Wamonae con ríos, caños, sabanas inundables y varios ámbitos del mundo. Ese contexto ayuda a leer el agua y el territorio, pero no debe insertarse como diálogo o escena dentro de los relatos. La comparación responsable distingue siempre texto narrativo, contexto etnográfico e interpretación editorial.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; sabanas inundables, caños y bosque de galería de la Orinoquía, identidad Kuiva/Wamonae sobria sin vestuario inventado, sin montañas andinas dominantes, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; segunda escena complementaria del relato Kuiva/Wamonae sin repetir el encuadre horizontal, sin montañas andinas dominantes, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildKuivaEditorialMyth(input) {
  const media = kuivaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = kuivaCategoryBySlug[input.slug];
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
FUENTES: se narra solo aquello respaldado por texto completo; los títulos del índice se usan para registrar ciclos, nunca para reconstruir argumentos.
UBICACIÓN: coordenadas comunitarias aproximadas para el entorno de Caño Mochuelo, no para el lugar exacto donde se narró cada versión.
IMÁGENES: pareja reutilizada por afinidad narrativa; ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
