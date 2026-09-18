import bachue from "../myths/bachue.mjs";
import { boyacaMestizoResidualMedia } from "./media.mjs";
import { boyacaMestizoResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje boyacense construido con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; acción legible, tono picaresco y proporciones sobrias; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tensión sugerida sin horror gráfico, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildBoyacaMestizoResidualEditorialMyth(input) {
  const media = boyacaMestizoResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = boyacaMestizoResidualCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
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
FUENTES: respaldo, clase y límite en editorial/boyaca-mestizo-residual/evidence.mjs.
FRONTERA EDITORIAL: la edición de Otero es una elaboración literaria de materiales folclóricos; nombres, diálogo, santuario y desenlace no se convierten en hechos coloniales sin archivo independiente.
TAXONOMÍA: la URL permanece en Andina > Boyacá > Mestizo, categoría heredada coherente con una leyenda regional de autor y circulación mestiza.
UBICACIÓN: coordenadas aproximadas de Iza; Buzagá no está identificado aquí como yacimiento, santuario visitable ni lugar recomendado para buscar tesoros.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/boyaca-mestizo-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
