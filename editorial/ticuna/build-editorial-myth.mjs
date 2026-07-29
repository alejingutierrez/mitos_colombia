import bachue from "../myths/bachue.mjs";
import { ticunaMedia } from "./media.mjs";
import { ticunaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `La revisión usa dos cadenas narrativas principales. Abel Antonio Santos Angarita publicó en 2010 una narración del profesor Marcelino Noé, de Puerto Nuevo, y aportes de mayores de Santa Lucía y San Sebastián de los Lagos. Esa fuente sostiene las páginas de Ngutapa, Yoí, Ípi, Wone y Eware. Historias de los abuelos de Moruapü fue preparada para educación bilingüe por agentes Tikuna y atribuye cada relato a una persona y una comunidad: Dolores Noé contó el origen del Sol; Augusto Coello, los de la Luna y el friaje; Remigio Santos, la canoa de Moe.

Los dos libros no constituyen un canon único. Uno articula un largo ciclo de formación del territorio y de los humanos; el otro reúne historias transmitidas por distintos mayores de Amazonas peruano y colombiano. Esta edición mantiene las atribuciones, trata cada narración como versión situada y no inventa una cronología que las obligue a encajar.

Las fichas heredadas necesitaban una corrección profunda. «Creación» narraba a Yuche sin una fuente Tikuna identificable. «El combate del sueño y la palabra» usaba el título de una reelaboración literaria y construía una historia de María y la pelazón sin cadena documental verificable. No se despublican sus URL: se sustituyen por relatos Tikuna públicos, atribuidos y trazables.

El pueblo Tikuna vive hoy a través de Colombia, Perú y Brasil. Las versiones pueden dialogar con fronteras, escuelas y momentos de publicación diferentes. Por eso la página no presenta estas seis historias como inventario exhaustivo ni transforma variaciones de grafía —Tikuna, Ticuna; Yoí, Yo'i; Ípi, Ipi— en errores de los narradores.`;

const sharedVersions = `Las fuentes registran voces, lugares y fechas distintas. Marcelino Noé narró el ciclo territorial en Puerto Nuevo; el mismo artículo integra aportes de otros mayores. La compilación de Moruapü identifica relatos recogidos entre 1993 y 1994 con Dolores Noé, Augusto Coello y Remigio Santos. La atribución se conserva en cada ficha y la prosa del sitio es una paráfrasis, nunca una cita extensa ni una traducción nueva.

También existen variantes dentro de un mismo ciclo. Historias de los abuelos de Moruapü publica dos versiones vinculadas con el Sol y la Luna. Las investigaciones de Goulard y López Garcés muestran que los relatos de Yoí e Ípi circulan en contextos territoriales y nacionales diversos. La página señala esas diferencias sin fusionar personajes ni elegir una versión como medida de autenticidad.

Los títulos en castellano facilitan la navegación, pero no reemplazan los nombres propios documentados. Cuando una grafía cambia entre ediciones se adopta una forma legible y se registra la variación. Los términos culturales no se convierten en definiciones universales y las fuentes contextuales nunca se usan para fabricar episodios.`;

const sharedSimilarities = `Sol y Luna humanos, árboles que comunican planos, aves asociadas con estaciones, peces que se vuelven personas y canoas transformadas aparecen en muchas tradiciones amazónicas. Esos paralelos permiten reconocer motivos narrativos, pero no demuestran que dos pueblos cuenten el mismo mito ni autorizan a trasladar nombres, rituales o imágenes de una comunidad a otra.

El corpus Ticuna se reconoce por combinaciones específicas: Ngutapa y sus rodillas; Yoí e Ípi; Wone convertido en red fluvial; Eware oscurecida por el huito; el achiote que da fuerza al Sol; la wocha y el huito en la historia de la Luna; las grullas del friaje; Moe, Moru y Moruapü. La comparación debe partir de esos detalles y de los narradores identificados.

La selva, el río, la chagra, los árboles, las aves y los peces actúan dentro de relaciones sociales, no como un fondo exótico. Las ilustraciones evitan tocados panindígenas, pintura corporal genérica, objetos ceremoniales inventados y escenas que conviertan el relato en postal turística.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje fluvial y de chagra del territorio Tikuna construido con capas recortadas y espirales de papel digitales, paleta amazónica de verdes, azules de río, achiote, huito y fibras naturales, sin tocados panindígenas, pintura corporal genérica, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa Tikuna claramente distinta del encuadre horizontal, capas recortadas digitales de borde limpio y formas quilling, sin tocados panindígenas, pintura corporal genérica, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildTicunaEditorialMyth(input) {
  const media = ticunaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = ticunaCategoryBySlug[input.slug];
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
FUENTES: ${input.sourceNote}
LÍMITE CULTURAL: se parafrasea material publicado; no se reproducen cantos, fórmulas, instrucciones rituales ni localizaciones sensibles.
UBICACIÓN: coordenadas aproximadas del Trapecio Amazónico colombiano, no del lugar exacto de cada episodio.
IMÁGENES: pareja propia del mito; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/ticuna/provenance.mjs.`,
  };
  return { ...record, content: composeContent(record) };
}
