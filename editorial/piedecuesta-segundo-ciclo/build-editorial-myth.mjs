import bachue from "../myths/bachue.mjs";
import { piedecuestaSecondCycleMedia } from "./media.mjs";
import { piedecuestaSecondCycleCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente completa los ocho capítulos que faltaban de la reproducción Mitos y leyendas de Piedecuesta y sus veredas. Siete tenían URL heredada y La Bruja Silbona se incorpora porque forma parte explícita del mismo corpus. Ninguna página se despublica. El Gritón conserva su URL y pasa de Andina > Varios > Mestizo a Andina > Santander > Mestizo, ubicación que coinciden en señalar la compilación y el estudio académico.

La reproducción declara tomar los relatos de Leyendas y cuentos de Santander, de Germán Valenzuela Sánchez, y fecha la obra en 2012. Literatura folclórica de Piedecuesta la cita como edición de 2010. La discrepancia queda visible. Los nombres, diálogos, edades, fechas y testimonios son atribuciones del compilador: no se presentan como entrevistas repetidas ni como expedientes históricos independientes.

Luis Rubén Pérez Pinzón clasifica a Diablo de Umpalá como leyenda histórica; Máncara, Cueva del Diablo, nueva Luz del Limonal y Gritón como ecoambientales; y Bruja Silbona y Campana del Diablo como leyendas negras. Cuento fantástico no recibe allí una clasificación individual y se conserva como pieza literaria moderna del corpus, no como tradición oral demostrada.

Las coordenadas son centros públicos aproximados de Piedecuesta, San Francisco, Umpalá, La Urgua, El Limonal o el corredor de Pescadero. No identifican casas privadas, árboles, peñas, cuevas transitables ni lugares recomendados de exploración.`;

const sharedVersions = `Las ocho páginas conservan sus diferencias. La Bruja Silbona es descrita como un gran chulo negro que persigue a Tadeo por calles urbanas; no es una mujer transformada ni El Silbón rural. La Máncara de San Francisco usa la antigua URL la-mancarita, pero recupera su título publicado y permanece separada de Oliva, la Hilandera.

Cuento fantástico no se convierte en testimonio: es una narración sin protagonista nombrado donde una navaja corta de forma maravillosa la corriente. La Campana del Diablo incluye un accidente vial después del sonido, pero la sucesión no prueba castigo sobrenatural. El Diablo de Umpalá tiene explicación humana dentro de la fuente: Félix Rueda atribuye las chispas a las herraduras de su caballo y acepta con humor el apodo.

La Cueva del Diablo no documenta una cavidad que pueda visitarse. El nombre encabeza una experiencia de camino en la que los árboles parecen caer y luego están intactos. La nueva versión de la Luz del Limonal se mantiene como variante de Valenzuela y no absorbe la narración más antigua compilada por Vicente Arenas. El Gritón responde a quien lo imita, mientras El Silbón pide oraciones en otro ciclo. Comparar motivos no demuestra identidad, origen común ni hechos sobrenaturales.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; territorio y cultura material de Piedecuesta representados con capas digitales recortadas, bordes limpios, formas mate y superposición plana sin volumen físico; atmósfera legible y tratamiento digno, sin violencia gráfica; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tensión narrativa sobria, sin violencia gráfica, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildPiedecuestaSecondCycleEditorialMyth(input) {
  const media = piedecuestaSecondCycleMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = piedecuestaSecondCycleCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
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
FUENTES: respaldo, clase de evidencia y límites en editorial/piedecuesta-segundo-ciclo/evidence.mjs.
FRONTERA EDITORIAL: no se inventan testigos, diagnósticos, parentescos, delitos, expedientes, identidades, apariciones ni atribuciones culturales.
ATRIBUCIÓN: nombres, fechas, diálogos y recuerdos proceden de compilaciones locales; el contexto territorial no los convierte en hechos comprobados.
UBICACIÓN: coordenadas públicas aproximadas; no identifican casas, árboles, peñas, cuevas transitables ni sitios recomendados de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/piedecuesta-segundo-ciclo/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
