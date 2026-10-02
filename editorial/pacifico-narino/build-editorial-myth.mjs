import bachue from "../myths/bachue.mjs";
import { pacificoNarinoMedia } from "./media.mjs";
import { pacificoNarinoCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente regional no presupone que “Pacífico”, “Nariño” o “Mixto” nombren una sola tradición. Reúne siete URL heredadas que conducen a pueblos, paisajes y memorias diferentes: territorio Pasto en la frontera, Jenoy y el entorno de Galeras, comunidades Quillacingas alrededor de La Cocha, Tumaco y Guapi. Por eso la revisión corrige la atribución de cada ficha antes de describir semejanzas.

Las fuentes cumplen funciones distintas. Los testimonios comunitarios y las investigaciones etnoliterarias sostienen núcleos narrativos; las crónicas regionales muestran circulación; los documentos científicos e institucionales verifican geografía o contexto, pero no se usan para inventar acciones. Cuando un relato llega mediante una publicación escolar, turística o periodística, esa mediación queda declarada.

Las coordenadas son aproximaciones municipales o paisajísticas, nunca lugares comprobados de aparición. La grafía de nombres propios sigue la fuente principal y reconoce variantes. La prioridad editorial regional en cada expediente es conservar URL, separar versiones incompatibles y dejar espacio para que comunidades portadoras corrijan atribución, límites y condiciones de publicación.`;

const sharedVersions = `La transmisión oral no produce un texto único. Un mismo nombre puede reunir secuencias distintas y dos relatos pueden compartir agua, montaña, noche o transformación sin pertenecer al mismo ciclo. Esta revisión no completa silencios con escenas plausibles y no convierte una versión divulgada en doctrina de toda una comunidad.

Las diferencias se mantienen visibles: Embilpud y Embilquer no se funden con un origen moderno de agua y fuego; el desafío de los puentes de Rumichaca se separa del chivo de las aguas termales; las memorias de Guagua Rayo en Jenoy conservan narradores y argumentos propios; Pucara y Tamia no sustituyen las versiones directas del Refugio del Sol; Taita Galeras no absorbe cualquier cuento volcánico.

La Sirena del Arco y el Padre Mera también exigen cautela. La primera circula en versiones breves y ornamentadas; el segundo aparece en memorias contradictorias sobre milagro, autoridad y persecución musical. Cada ficha identifica qué conserva, qué compara y qué deja como duda, sin declarar que una sola adaptación cierre el relato.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje específico del Pacífico sur o los Andes de Nariño documentado para esta ficha, resuelto mediante capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; paleta territorial sobria, proporciones humanas naturales y vestuario cotidiano cuando corresponda; sin exotización, símbolos ceremoniales inventados, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; territorio y personajes tratados con sobriedad, sin caricatura, exotización, símbolos ceremoniales inventados, horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildPacificoNarinoEditorialMyth(input) {
  const media = pacificoNarinoMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = pacificoNarinoCategoryBySlug[input.slug];
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
FUENTES: el respaldo de cada afirmación y sus límites están en editorial/pacifico-narino/evidence.mjs.
FRONTERA EDITORIAL: no se inventan rituales, diálogos, poderes, objetos protectores, genealogías ni moralejas para completar fuentes breves.
ATRIBUCIÓN: la taxonomía diferencia Pastos, Quillacingas, Jenoy, memorias afrocolombianas de Guapi y circulación regional de Tumaco; no se proyecta una versión sobre todo Nariño.
UBICACIÓN: coordenadas municipales o paisajísticas aproximadas; no indican residencia de narradores, aparición comprobable ni sitio de visita.
IMÁGENES: pareja propia pendiente; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/pacifico-narino/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
