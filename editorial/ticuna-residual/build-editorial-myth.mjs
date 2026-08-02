import bachue from "../myths/bachue.mjs";
import { ticunaResidualMedia } from "./media.mjs";
import { ticunaResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje del Trapecio Amazónico solo según la escena, construido con capas recortadas digitales de bordes limpios, formas mate sin volumen físico, verde profundo, azul de río, ocres vegetales y acentos de achiote o huito cuando corresponda; acción legible y respetuosa, figuras humanas sobrias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin exotización, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas recortadas digitales de bordes limpios, formas mate sin volumen físico y quilling dibujado selectivo; paisaje amazónico documentado, acción central legible, violencia y contenido sexual solo sugeridos cuando sean indispensables, sin horror gráfico, y figuras humanas sobrias sin pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin exotización, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildTicunaResidualEditorialMyth(input) {
  const media = ticunaResidualMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = ticunaResidualCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
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
    historia: input.historia,
    versiones: input.versiones,
    leccion: input.leccion,
    similitudes: input.similitudes,
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
MATRIZ: editorial/ticuna-residual/evidence.mjs distingue núcleo, variante, memoria contemporánea, hipótesis, lectura y duda.
UNIVERSO: la ruta heredada se transfiere de Amazonas > Amazonas > Mixto a Ticuna; no se crea ni despublica una URL. Las ventanas de variante o ciclo declaran su relación con las seis fichas Ticuna previas.
LÍMITE CULTURAL: se resumen relatos publicados sin reconstruir cantos, fórmulas, procedimientos de pesca, prácticas ceremoniales, pintura corporal ni conocimiento operativo.
UBICACIÓN: coordenada aproximada del Trapecio Amazónico; no identifica la chagra, árbol, quebrada, casa o lugar de narración de un testimonio particular.
IMÁGENES: pareja propia pendiente de OpenAI gpt-image-2 en calidad alta; dos escenas digitales 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Procedencia futura en editorial/ticuna-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
