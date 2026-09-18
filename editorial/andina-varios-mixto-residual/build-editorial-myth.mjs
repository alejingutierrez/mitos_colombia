import bachue from "../myths/bachue.mjs";
import { andinaVariosMixtoResidualMedia } from "./media.mjs";
import { andinaVariosMixtoResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje andino colombiano construido con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; acción legible y proporciones sobrias; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; atmósfera sugerida sin horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "la-mano-peluda":
    "FRONTERA EDITORIAL: separa la mano incorpórea cundiboyacense de la garra del Viejo del Costal; no fecha la creencia como colonial ni conserva pistola de ácido, dimensiones celestes o autorías personales no corroboradas.",
  "el-hojarasquin-del-monte":
    "FRONTERA EDITORIAL: conserva variantes campesinas del guardián forestal, distingue el cuento homónimo de Tío Conejo y elimina a Joaquín Romero y su diario botánico de 1928 no documentado.",
  "esperanza-en-el-oriente":
    "FRONTERA EDITORIAL: presenta una hipótesis comparatista de Mariano Izquierdo Gallo como historia intelectual; orientación funeraria, resurrección y héroes culturales no se funden en una tradición oral panamericana.",
};

const locationBySlug = {
  "la-mano-peluda":
    "UBICACIÓN: coordenadas aproximadas de La Candelaria, Boyacá; no datan el relato ni convierten el convento en origen demostrado.",
  "el-hojarasquin-del-monte":
    "UBICACIÓN: ancla cartográfica editorial en Risaralda por el inventario consultado; la figura circula en más de un departamento y no tiene un único punto de origen probado.",
  "esperanza-en-el-oriente":
    "UBICACIÓN: ancla editorial de publicación en Bogotá; no representa un lugar sagrado, un origen cultural ni el cementerio zenú mencionado por el ensayo.",
};

export function buildAndinaVariosMixtoResidualEditorialMyth(input) {
  const media = andinaVariosMixtoResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = andinaVariosMixtoResidualCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase y límite en editorial/andina-varios-mixto-residual/evidence.mjs.
${boundaryBySlug[input.slug]}
TAXONOMÍA: la URL permanece en Andina > Varios > Mixto para preservar el catálogo; el texto declara la geografía y clase documental reales.
${locationBySlug[input.slug]}
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/andina-varios-mixto-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
