import bachue from "../myths/bachue.mjs";
import { caldasMestizoMedia } from "./media.mjs";
import { caldasMestizoCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa nueve URL heredadas bajo Andina > Caldas > Mestizo. Ocho conservan esa ruta territorial y Cuento de ánimas pasa a Santander porque sus dos episodios están situados en Rionegro y vinculados con Girón. “Mestizo” funciona aquí como categoría editorial amplia: no identifica una sola comunidad portadora ni vuelve anónimos los textos que tienen autor.

La fuente narrativa principal cambia según la ficha. Fabio Vélez Correa reunió testimonios, referencias locales y leyendas propias en Mitos, espantos y leyendas de Caldas. Enrique Otero D’Costa escribió ficciones históricas y recreaciones moralizantes. Rodrigo Jiménez Mejía publicó el relato de Clementina. Por eso un libro firmado puede sostener la trama y su circulación, pero no demostrar por sí solo antigüedad, origen étnico ni literalidad histórica.

Los estudios, catálogos y documentos territoriales cumplen funciones delimitadas: verifican autoría, edición, geografía, volcanología, procesos históricos o persistencia de motivos. No prueban apariciones sobrenaturales. Cada límite queda asociado con su evidencia dentro de la matriz. Las coordenadas son aproximaciones editoriales y no señalan viviendas visitables, sitios seguros de aparición ni lugares autorizados para exploración.`;

const sharedVersions = `Las diferencias se ordenan como versiones narrativas, adaptaciones literarias o comparaciones, sin mezclarlas. Una atribución publicada no se vuelve certeza por repetición: el posible origen páez de Cumanday y el supuesto origen africano del Coco se mantienen como hipótesis de sus autores, no como hechos establecidos.

Los relatos infantiles del Coco y el Viejo del Costal comparten una función disciplinaria, pero no son necesariamente el mismo personaje. El Uñón persigue a Rafael Toro; “el aserrador” no nombra al espanto. El Cole-cabuya conserva una descripción regional específica sin convertir la censura social que lo acompaña en una verdad moral. Clementina y Aspasia pertenecen a obras diferentes.

En las ficciones de Otero D’Costa, nombres y acontecimientos históricos crean verosimilitud, pero los diálogos, decisiones íntimas y desenlaces morales pertenecen al relato. Esta revisión conserva esas tramas con autoría visible y evita convertir la literatura en crónica o tradición oral anónima.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje andino colombiano específico, capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; composición sobria, proporciones humanas naturales y tratamiento histórico respetuoso; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; atmósfera narrativa sin horror gráfico, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildCaldasMestizoEditorialMyth(input) {
  const media = caldasMestizoMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = caldasMestizoCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
  const historia = input.historia ?? `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${sharedVersions}`;
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
    similitudes: input.similitudes ?? input.similarityCore,
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
FUENTES: respaldo, clase de evidencia y límites en editorial/caldas-mestizo/evidence.mjs.
FRONTERA EDITORIAL: no se inventan narradores, testigos, rituales, diálogos, antigüedad, causalidad histórica ni atribución étnica para completar una fuente.
ATRIBUCIÓN: cada ficha distingue compilación regional, ficción histórica firmada, relato literario y motivo disciplinario.
UBICACIÓN: coordenadas municipales o paisajísticas aproximadas; no indican aparición comprobable, domicilio privado ni sitio recomendado de visita.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/caldas-mestizo/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
