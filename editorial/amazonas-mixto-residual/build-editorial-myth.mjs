import bachue from "../myths/bachue.mjs";
import { amazonasMixtoResidualMedia } from "./media.mjs";
import { amazonasMixtoResidualCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa doce URL heredadas de la categoría Amazonas Mixto. Esa categoría no representa una comunidad cultural homogénea: reúne transcripciones de Leticia, relatos transfronterizos, reescrituras literarias y tres piezas que la investigación permite relocalizar. Petapeta y Chimuya-e pasan a Ticuna; el relato de La Tía pasa a Ufaina/Tanimuka. Las otras nueve rutas conservan una ubicación editorial mixta y declaran si su referente es Leticia, Vaupés, Perú, Brasil o una circulación panamazónica.

La principal cadena documental para las piezas leticianas parte de la encuesta del Instituto Caro y Cuervo realizada en 1975 y del volumen de María Luisa Rodríguez de Montes publicado en 1981. Esas recopilaciones contienen voces Ticuna, Huitoto y de habitantes hispanohablantes; por eso una presencia en el corpus no basta para adjudicar cada relato a un solo pueblo. Los estudios posteriores ayudan a identificar fragmentos, narradores o mediaciones, pero tampoco convierten una variante en doctrina amazónica general.

Los nombres, escenas y explicaciones que no aparecen en el expediente se eliminan. Una leyenda no se presenta como hecho natural o histórico, y un animal real no hereda las acciones del personaje narrativo. Las coordenadas son aproximaciones editoriales a ciudades, ríos o territorios amplios; no señalan lugares de aparición, viviendas, sitios ceremoniales ni destinos recomendados para exploración.`;

const sharedVersions = `Las variantes se mantienen separadas. Un motivo que circula en Colombia, Perú y Brasil puede cambiar de nombre, apariencia, acción y sentido sin que una versión invalide a las demás. La revisión elige un hilo narrativo identificable para la sección Mito y describe las alternativas aquí; no cose episodios incompatibles para producir una falsa versión completa.

El Chuyachaque breve y el Chuya-Chaqui de Hugo Niño permanecen como rutas relacionadas pero distintas. La Cobra Grande centra la versión de Honorato registrada en Leticia y aparta los relatos del hombre tragado o de José Sangam como variantes. Chimuya-e deja de compartir argumento con Ngutapa. Petapeta deja atrás la canasta de trabajadores mágicos para recuperar la canasta de semillas atribuida por un narrador Ticuna. Yacuruna y Curupira se presentan como recepciones transfronterizas, no como deidades uniformes de toda la Amazonía.

Las comparaciones internacionales se limitan a formas narrativas —metamorfosis, navegación, guardianes, sirenas, serpientes o recursos liberados—. No demuestran préstamo, origen común ni equivalencia religiosa. Las fuentes coloniales, etnográficas y pedagógicas se leen con sus límites de traducción, selección editorial y época.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje amazónico específico según el expediente, capas digitales recortadas de bordes limpios, formas mate, quilling dibujado selectivo y superposición plana sin volumen físico; acción legible, proporciones naturales y tratamiento cultural respetuoso, sin pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; atmósfera narrativa sobria, violencia o coerción solo sugeridas cuando sean indispensables, sin horror gráfico, erotización, caricatura, pintura corporal ni vestuario ceremonial inventado; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildAmazonasMixtoResidualEditorialMyth(input) {
  const media = amazonasMixtoResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = amazonasMixtoResidualCategoryBySlug[input.slug];
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
MATRIZ: respaldo, clase de evidencia y límites en editorial/amazonas-mixto-residual/evidence.mjs.
UNIVERSO: doce URL heredadas, nueve retenidas en Amazonas Mixto, dos transferidas a Ticuna y una a Ufaina/Tanimuka; ninguna alta ni baja.
FRONTERA EDITORIAL: no se inventan narradores, diálogos, rituales, antigüedad, causalidad histórica, hechos sobrenaturales ni atribución étnica para completar fuentes.
UBICACIÓN: coordenada aproximada de ciudad, río o territorio amplio; no identifica un sitio comprobado de aparición, casa, playa, chagra o lugar ceremonial.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/amazonas-mixto-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
