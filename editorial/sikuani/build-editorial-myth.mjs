import bachue from "../myths/bachue.mjs";
import { sikuaniMedia } from "./media.mjs";
import { sikuaniCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Los siete cuentos breves de esta colección proceden de una cadena documental identificable. Francisco Ortiz los publicó en Literatura oral Sikuani en 1982; Eugenia Villa Posse los reprodujo en Mitos y leyendas de Colombia en 1993. La compilación informa que fueron registrados en sikuani y español y transcritos sin modificación. Pedro Martínez relató tres piezas y Rita Gaitán cuatro, en registros fechados entre 1972 y 1980.

La misma introducción aclara que esas piezas buscaban divulgar modalidades de literatura oral distintas del mito. Por eso el sitio no convierte automáticamente cada cuento en una cosmogonía ni llama «dios» a todo personaje extraordinario. Conserva la sección pública de mitos por continuidad editorial, pero nombra con precisión cuentos, relatos y cantos cuando así lo indican las fuentes.

Sikuani es la denominación privilegiada por la colección y por las voces comunitarias consultadas. Guahíbo aparece en bibliografía histórica y en el nombre heredado de la comunidad; puede funcionar como rótulo amplio, pero no borra autodenominaciones, diferencias locales ni la presencia Sikuani en Colombia y Venezuela.

La revisión conserva en cada expediente la atribución disponible y señala cuándo una fuente es registro oral, compilación, catálogo o contexto institucional. Esa separación permite corregir expansiones heredadas sin fingir una voz comunitaria que el documento no identifica.`;

const sharedVersions = `La amplitud del corpus impide presentar estas diez páginas como canon cerrado. Folk Literature of the Sikuani Indians ocupa 704 páginas y reúne materiales de procedencias y épocas distintas. Su existencia confirma diversidad documental, pero la ficha pública de UCLA no ofrece los textos: ningún argumento se completa a partir de títulos o catálogos.

También hay diferencias entre géneros y mediaciones. Los siete cuentos transcritos por Ortiz tienen narrador y fecha; los ciclos de Kuwei, Kuemi, Kaliwirnae y Tsamani llegan aquí mediante un ensayo etnográfico o registros comunitarios contemporáneos. Esos materiales pueden dialogar, pero no se funden en una cronología única ni se atribuyen unos a otros.

Las variantes cambian grafías y nombres: Kuwei puede aparecer como Kuwai, y Phurnaminali o Furnaminali se asocia con la figura creadora en determinadas fuentes. La revisión conserva las formas de cada documento y explica sus relaciones sin declarar que una escritura invalida a las demás.`;

const sharedSimilarities = `Las comparaciones sirven para reconocer estructuras narrativas, no para imponer parentescos históricos. Animales que hablan, pruebas en el monte, niños abandonados, seres invisibles, árboles que concentran alimentos y ascensos al cielo aparecen en muchas tradiciones. Una coincidencia de motivo no demuestra copia, origen común ni equivalencia religiosa.

En estas páginas importan los detalles propios de cada versión: nombres como Kuwei, Kuemi, Tsamani y Kaliwirnae; el áinawi que auxilia a una mujer; el terecay que sigue el rastro de la danta; una casa Tsorueto cerrada a los insectos; o el pajuil que orienta a dos hermanos. Esos elementos deben permanecer unidos a su relato y a su fuente.

El paisaje llanero y el contexto Sikuani ayudan a leer sabanas, ríos, bosques de galería, alimentos y desplazamientos. No autorizan a añadir trajes, ceremonias, diálogos o explicaciones ecológicas que la narración no ofrece. La metodología separa siempre texto narrativo, información histórica y lectura editorial.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; sabanas, ríos y bosque de galería de los Llanos Orientales, identidad Sikuani sobria sin vestuario inventado, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano: ${scene}; segunda escena complementaria del relato Sikuani sin repetir el encuadre horizontal, sin vestuario inventado, tocados panindígenas, máscaras genéricas, texto ni letras, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildSikuaniEditorialMyth(input) {
  const media = sikuaniMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = sikuaniCategoryBySlug[input.slug];
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
    ...(input.fuentesAgotadas ? { fuentesAgotadas: input.fuentesAgotadas } : {}),
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
FUENTES: la fuente narrativa principal se distingue de los documentos de contexto; la ficha FLACSO y su PDF pertenecen a una sola cadena editorial.
UBICACIÓN: coordenadas comunitarias aproximadas de los Llanos Orientales, no del lugar exacto de cada registro.
IMÁGENES: pareja reutilizada por afinidad narrativa y cumplimiento visual; ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.`,
  };
  return { ...record, content: composeContent(record) };
}
