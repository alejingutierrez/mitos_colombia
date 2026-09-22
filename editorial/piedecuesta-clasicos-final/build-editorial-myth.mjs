import bachue from "../myths/bachue.mjs";
import { piedecuestaClasicosFinalMedia } from "./media.mjs";
import { piedecuestaClasicosFinalCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente completa los trece relatos reunidos en la sección Leyendas para niños y niñas de Piedecuesta de Literatura folclórica. Los ocho primeros fueron revisados en el paquete piedecuesta-vicente-arenas-i. Aquí se revisan cuatro rutas heredadas y se incorpora La Luz del Limonal. Ninguna página se despublica y El Silbón conserva su URL al trasladarse de Varios > Varios > Mixto a Andina > Santander > Mestizo.

La procedencia no es uniforme. El Ánima Coy es un romance de Crónicas y romances, de Vicente Arenas. La Luz del Limonal adapta Estampas de mi tierra. El Silbón y Los Tunjos de la Cantera derivan de Los Tunjos de Oro, trabajo de José del Carmen Rivera premiado en el concurso de Leyenda Popular Santandereana de 1969. El Duende del Salto es una composición híbrida publicada en 2016 a partir de varios autores, monografías, un blog escolar y vivencias del editor.

Las obras y registros respaldan esas cadenas editoriales, no la factualidad de personas, muertes, delitos, transformaciones, riquezas o apariciones. Tampoco autorizan a presentar criaturas literarias como cosmología Guane ni a convertir bienes arqueológicos en tesoros disponibles. Cuando una fuente antigua estigmatiza a una mujer, una condición corporal o una comunidad, la página atribuye el lenguaje y no lo adopta.

Las coordenadas son aproximaciones públicas a San Antonio, El Limonal, Guatiguará, la Loma de la Cantera y la vereda El Duende. No señalan casas, tumbas, cuevas, tesoros, hallazgos arqueológicos, bordes de cascada ni lugares recomendados de exploración.`;

const sharedVersions = `El Ánima Coy conserva el romance de Benedicta Rovira y sus formas variables, sin convertir la acusación poética sobre Rosario en sentencia histórica. La Luz del Limonal mantiene a Luz, Baldomero, la hacienda y el reclutamiento de la versión de Arenas. No absorbe la nueva versión de Valenzuela, cuyos narradores, sacerdote, cronología y fórmula de distancia son distintos.

El Silbón queda limitado al trapiche del Valle de Guatiguará: un silbido que invierte la distancia, un saco de huesos y una voz que pide oraciones. No importa el parricidio, el abuelo, el perro, el látigo ni los castigos de versiones llaneras. Los Tunjos de la Cantera conserva a Silvestre y la criatura dorada como ficción compensatoria; no confunde ese ser con objetos arqueológicos protegidos ni anima a buscarlos.

El Duende del Salto reconoce un paisaje real y una versión literaria moderna llamada Muki. El nombre, el ángel caído, Pedro N. y la caverna pertenecen a esa composición, no a una tradición Guane probada. Comparar motivos no demuestra origen común, identidad cultural, eficacia ritual o hechos sobrenaturales.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje, agua, caminos, arquitectura y cultura material de Piedecuesta representados con capas digitales recortadas, bordes limpios, formas mate y superposición plana sin volumen físico; atmósfera legible, trato digno, sin guaquería ni violencia gráfica; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tensión narrativa sobria, trato digno, sin guaquería, violencia gráfica, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildPiedecuestaClasicosFinalEditorialMyth(input) {
  const media = piedecuestaClasicosFinalMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = piedecuestaClasicosFinalCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase de evidencia y límites en editorial/piedecuesta-clasicos-final/evidence.mjs.
FRONTERA EDITORIAL: no se inventan testigos, diagnósticos, parentescos, delitos, expedientes, identidades, culturas, milagros, apariciones ni atribuciones arqueológicas.
ATRIBUCIÓN: nombres, fechas, diálogos, acusaciones y recuerdos proceden de obras literarias y adaptaciones locales; el contexto territorial no los convierte en hechos comprobados.
UBICACIÓN: coordenadas públicas aproximadas; no identifican casas, tumbas, cuevas, tesoros, hallazgos ni bordes recomendados para exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/piedecuesta-clasicos-final/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
