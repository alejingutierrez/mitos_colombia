import bachue from "../myths/bachue.mjs";
import { pacificoRestanteMedia } from "./media.mjs";
import { pacificoRestanteCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente reúne ocho URL heredadas bajo la etiqueta amplia Pacífico > Mestizo. Esa clasificación editorial no convierte al Pacífico, al Cauca, al Chocó o al Valle del Cauca en una sola comunidad portadora. Incluye una leyenda cívico-religiosa de Cali, dos ficciones literarias contemporáneas de Popayán, un motivo chocoano escasamente documentado, un reporte moderno de Dagua, una leyenda urbana mínima de San Antonio, rumores sobre una construcción reciente de Palmira y un barco fantasma de circulación regional.

Las fuentes cumplen funciones diferentes. Un texto firmado puede sostener una ficción literaria, pero no demostrar tradición oral antigua. Una nota periodística prueba que cierto rumor fue publicado, no que su explicación sobrenatural sea cierta. Los documentos de patrimonio, arqueología, ambiente o territorio ubican escenarios reales sin validar apariciones. Cuando solo existe una descripción narrativa breve, la revisión lo declara y no la alarga mediante testigos, diálogos, curaciones o genealogías inventadas.

Las coordenadas son aproximaciones municipales o marítimas para navegación editorial. No señalan una casa visitable, un lugar seguro de aparición ni un sitio arqueológico autorizado. Cada expediente conserva la URL pública y distingue relato, contexto verificable, interpretación y límites de atribución.`;

const sharedVersions = `No toda diferencia publicada constituye una versión oral independiente. En este lote se separan tres clases: variantes internas del relato, reinterpretaciones literarias firmadas y rumores contemporáneos difundidos por prensa o turismo. La ficha nombra la clase antes de comparar detalles.

El Buziraco de las Tres Cruces admite cambios de fechas, procedencia y forma, pero no autoriza a presentar estereotipos raciales como hechos. El caballo de Babieca y la muerte del Quijote pertenecen a cuentos de Marco Antonio Valencia Calle. La Yesca y la Casa de la Tradición tienen núcleos tan breves que cualquier argumento completo sería una creación nueva. En Dagua, una desaparición resuelta y la atribución comunitaria a un duende no prueban secuestro sobrenatural.

La Pirámide del Chontaduro conserva dos explicaciones recientes incompatibles. El Maravelí comparte el motivo internacional del barco fantasma y el paisaje nocturno con el Riviel, pero no se fusiona con esa canoa ni con su personaje. Las diferencias se muestran como diferencias; los silencios permanecen abiertos.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje colombiano específico y contemporáneo o histórico según el expediente, resuelto con capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; composición sobria, proporciones humanas naturales y sin convertir rumores en espectáculo literal; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tratamiento respetuoso, sin caricatura, estereotipos raciales, horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildPacificoRestanteEditorialMyth(input) {
  const media = pacificoRestanteMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = pacificoRestanteCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase de evidencia y límites en editorial/pacifico-restante/evidence.mjs.
FRONTERA EDITORIAL: no se inventan narradores, testigos, rituales, curaciones, diálogos, poderes, direcciones, antigüedad ni atribución étnica para completar fuentes breves.
ATRIBUCIÓN: “Mestizo” funciona aquí como taxonomía regional residual; cada ficha declara si conserva leyenda cívica, ficción firmada, rumor contemporáneo o motivo regional.
UBICACIÓN: coordenadas municipales o marítimas aproximadas; no indican aparición comprobable, domicilio privado ni sitio recomendado de visita.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/pacifico-restante/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
