import bachue from "../myths/bachue.mjs";
import { antioquiaMestizoMedia } from "./media.mjs";
import { antioquiaMestizoCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa diez URL heredadas bajo Andina > Antioquia > Mestizo. Nueve permanecen allí y No hay deuda que no se pague pasa a Caldas porque su acción ocurre en la Villa de Arma histórica. “Mestizo” funciona como categoría editorial amplia para repertorios regionales y obras firmadas; no identifica una comunidad homogénea ni vuelve anónimos los textos de autor conocido.

Arturo Escobar Uribe publicó en 1950 un repertorio fundamental para varias apariciones antioqueñas. Javier Ocampo López y Luis Fernando Solórzano organizaron compilaciones posteriores. Esos libros documentan formas impresas y circulación editorial, pero no prueban por sí solos antigüedad, sobrenaturalidad ni aceptación uniforme. El Patón llega mediante una antología pedagógica tardía; María Centeno combina memoria oral, investigación histórica y adaptación literaria; Otero D’Costa firma No hay deuda que no se pague.

Los estudios, catálogos, documentos municipales y archivos cumplen funciones delimitadas: verifican edición, autoría, localización, contexto colonial o recepción. No convierten una aparición en hecho ni una explicación local en origen único. La matriz registra el tipo y el límite de cada respaldo. Las coordenadas son aproximaciones editoriales a municipios, caminos o paisajes; no señalan domicilios, lugares comprobados de aparición ni destinos recomendados para exploración.`;

const sharedVersions = `Las diferencias se presentan como variantes regionales, adaptaciones literarias o paralelos comparativos, sin fundirlas. La Cabellona antioqueña no recibe como biografía la historia santandereana de la Mechuda. La Dama Verde reúne explicaciones incompatibles y ninguna se adopta como origen comprobado. El Perro Negro de camino no necesita la biografía de Aurora, y la Rodillona no requiere una tragedia con nombres propios.

Las Ilusiones Malas son un motivo plural alimentado por miedo y percepción; no una mujer llamada Matilde. Los Rescoldados conservan una descripción muy breve y no se completa con Justiniano. María la Larga tiene una estructura transportable entre poblaciones, dentro de la cual la memoria de Andes aporta calles y señales propias. María Centeno exige separar a la figura histórica, la tradición oral y una adaptación contemporánea.

Cuando una fuente antigua usa vocabulario colonial o presenta como verdad una creencia atribuida a grupos enteros, la revisión lo identifica como perspectiva del compilador. Cuando un texto tiene autor, se conserva su nombre. Comparar motivos ayuda a leer funciones y formas, pero no demuestra parentesco, difusión directa ni un origen universal.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje andino colombiano específico, capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; composición sobria, proporciones humanas naturales y tratamiento cultural respetuoso; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; atmósfera narrativa sin horror gráfico, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildAntioquiaMestizoEditorialMyth(input) {
  const media = antioquiaMestizoMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = antioquiaMestizoCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase de evidencia y límites en editorial/antioquia-mestizo/evidence.mjs.
FRONTERA EDITORIAL: no se inventan narradores, testigos, rituales, diálogos, antigüedad, causalidad histórica ni atribución étnica para completar una fuente.
ATRIBUCIÓN: cada ficha distingue compilación regional, versión localizada, adaptación literaria, motivo pedagógico y obra firmada.
UBICACIÓN: coordenadas municipales o paisajísticas aproximadas; no indican aparición comprobable, domicilio privado ni sitio recomendado de visita.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/antioquia-mestizo/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
