import bachue from "../myths/bachue.mjs";
import { huitotoResidualMedia } from "./media.mjs";
import { huitotoResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; selva húmeda, río, chagra o maloca únicamente cuando la escena lo requiere, construidos como capas recortadas digitales de bordes limpios, formas mate sin volumen físico, paleta verde profunda, azul de río, ocre vegetal y acentos de achiote; acción legible y respetuosa, personajes humanos como siluetas sobrias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin exotización, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas recortadas digitales de bordes limpios, formas mate sin volumen físico y quilling dibujado selectivo; paisaje amazónico documentado, acción central legible, violencia sugerida sin horror gráfico y figuras humanas sobrias sin pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin exotización, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildHuitotoResidualEditorialMyth(input) {
  const media = huitotoResidualMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = huitotoResidualCategoryBySlug[input.slug];
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
MATRIZ: editorial/huitoto-residual/evidence.mjs distingue núcleo, variante, hipótesis, lectura y duda.
UNIVERSO: la ruta heredada se transfiere de Amazonas > Amazonas > Mixto a la comunidad Huitoto / Murui-Muina; no se crea ni despublica una URL.
LÍMITE CULTURAL: se resume material publicado sin reconstruir fórmulas, dietas, procedimientos, sitios exactos ni conocimiento ceremonial operativo.
UBICACIÓN: coordenada aproximada del ámbito Huitoto del Predio Putumayo; no identifica el cerro Anequi, una cueva, maloca, chagra o lugar ceremonial.
IMÁGENES: pareja propia pendiente de OpenAI gpt-image-2 en calidad alta; dos escenas digitales 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Procedencia futura en editorial/huitoto-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
