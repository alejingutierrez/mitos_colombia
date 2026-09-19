import bachue from "../myths/bachue.mjs";
import { makaguanMedia } from "./media.mjs";
import { makaguanCategoryBySlug } from "./universe.mjs";

const sharedHistory = `La fuente narrativa principal es la tesis de Hermes Javier Mattar Jiménez, publicada por la Universidad Nacional en 2024. El trabajo reunió apuntes del Proyecto Educativo Comunitario de El Vigía, diarios de campo, entrevistas individuales y colectivas, lecturas con estudiantes y nuevas revisiones de miembros de la comunidad. Gregorio Flórez, David González, José Darío Cuenza, Arístides Tocaria y Manuel Sánchez aparecen vinculados con las versiones; los textos no se presentan como invención del investigador.

La recopilación duró aproximadamente trece años y documenta una dificultad decisiva: algunos sabedores no autorizaban grabaciones y el investigador debió transcribir a mano. El paso de oralidad a escritura y dibujo fue revisado en la escuela, pero no elimina la variación. Esta página identifica qué detalle procede del PEC de 2005, de los diarios de 2010-2011 o de la corrección comunitaria de 2023 cuando esa diferencia cambia el relato.

Makaguán es el nombre oficial usado hoy por documentos comunitarios e institucionales. La ruta «makawanes» se conserva por estabilidad, mientras las grafías Makawan, Makaguan, Makaguán y Macahuán se mantienen donde ayudan a reconocer la historia de las fuentes. El pueblo Makaguán y el Hitnü comparten relaciones lingüísticas y territoriales, pero el diagnóstico comunitario advierte que son pueblos distintos por autorreconocimiento.`;

const sharedVersions = `Las tres fichas pertenecen al mismo proceso de El Vigía, pero no tienen el mismo género: Los hijos del venado y La gran inundación se publicaron como mitos; El alma, como leyenda asociada con testimonios y lugares recientes. La revisión respeta esa clasificación en vez de llamar mito a cualquier relato sobrenatural.

Una versión escrita no cierra la tradición oral. La tesis compara el PEC de 2005 con narraciones de 2010 y vuelve a consultar a Manuel Sánchez en 2023. Cuando una variante corrige otra —Tacu por Padre Sol, la presencia de Wachirajua o el samuro en lugar de la paloma— se conserva la procedencia. No se mezclan todos los detalles para fabricar una narración definitiva.

Las diferencias tampoco se ordenan como errores de sabedores. Pueden responder a memoria, comunidad, momento o propósito pedagógico. El sitio elimina adornos literarios y lecturas de Campbell añadidas en el Excel, pero conserva con atribución los elementos difíciles, incluso aquellos que muestran contacto, conflicto o jerarquías coloniales.`;

const sharedSimilarities = `Los motivos tienen resonancias amplias: personas nacidas de animales, inundaciones después de una pérdida, parejas sobrevivientes, aves que reconocen la tierra y presencias ligadas a los muertos. Comparar puede orientar, pero no demuestra que el relato proceda de Grecia, la Biblia, Japón o Europa.

Las conexiones más sólidas están dentro del pequeño corpus Makaguán. Tacu crea la tierra y la gente en Los hijos del venado, y vuelve a intervenir después de la muerte de Wiri. Wachirajua nombra espíritus o almas antes de la humanidad y reaparece, con una variante ortográfica, como nombre de la presencia de El alma. El venado, el perro, el samuro, el cangrejo y las transformaciones muestran relaciones distintas con seres no humanos.

Por eso no se aplican plantillas narrativas universales ni se hacen equivalencias automáticas. Cada similitud debe regresar a nombres, relatores, fechas y lugares de El Vigía para no reemplazar una tradición viva con un esquema externo.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; bosque de galería, esteros y sabanas húmedas de Arauca, identidad Makaguán sobria sin vestuario inventado, sin cactus, desierto, montañas andinas dominantes, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; segunda escena complementaria del relato Makaguán sin repetir el encuadre horizontal, sin cactus, desierto, montañas andinas dominantes, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildMakaguanEditorialMyth(input) {
  const media = makaguanMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = makaguanCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  // Las fichas reescritas entregan el campo entero. `historyCore` y los tres
  // bloques compartidos son el camino viejo: daban un párrafo propio y el
  // resto idéntico para toda la comunidad, que es la razón de que todas
  // midieran lo mismo y se leyeran igual.
  const historia = input.historia ?? `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${sharedVersions}`;
  const similitudes =
    input.similitudes ?? `${input.similarityCore}\n\n${sharedSimilarities}`;
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
FUENTES: corpus comunitario de El Vigía consolidado por la Universidad Nacional, contrastado con documentos comunitarios e institucionales.
IMÁGENES: pareja reutilizada por afinidad narrativa; ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
