import bachue from "../myths/bachue.mjs";
import { variosMestizoFinalMedia } from "./media.mjs";
import { variosMestizoFinalCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, full illustration de acabado gráfico plano y composición a página completa: ${scene}; paisaje colombiano construido únicamente con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; personajes sobrios, acción legible y atmósfera respetuosa; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, full illustration de acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, construida únicamente con capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; perspectiva vertical y atmósfera respetuosa sin horror gráfico, texto ni letras; sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "la-viudita":
    "FRONTERA EDITORIAL: restituye el núcleo nariñense y no convierte las variantes de Nuquí, Cali, la Dama Verde o la Viuda Alegre en episodios de una sola mujer histórica.",
  "el-judio-errante":
    "FRONTERA EDITORIAL: identifica una leyenda cristiana antijudía y su recepción tunjana; no la presenta como tradición judía ni equipara a una persona judía real con demonio, culpa colectiva o condena.",
  "el-bus-fantasma":
    "FRONTERA EDITORIAL: diferencia el bus montañoso publicado, la creepypasta G66 y el bus wayuu hacia Jepira; retira a Marcel Laforet y el manuscrito de tinta plateada sin respaldo.",
};

const locationBySlug = {
  "la-viudita":
    "UBICACIÓN: coordenadas en Pasto como ancla urbana general; no señalan una sacristía, casa de enfermos, tumba ni aparición comprobada.",
  "el-judio-errante":
    "UBICACIÓN: coordenadas en Tunja por la recepción alrededor de Santo Domingo; la talla procesional es patrimonio material y el encuentro con el viajero pertenece a la leyenda.",
  "el-bus-fantasma":
    "UBICACIÓN: conserva el ancla nacional heredada porque la ruta reúne un ciclo de carretera sin lugar identificado y una variante bogotana claramente atribuida.",
};

export function buildVariosMestizoFinalMyth(input) {
  const media = variosMestizoFinalMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = variosMestizoFinalCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase y límite en editorial/varios-mestizo-final/evidence.mjs.
${boundaryBySlug[input.slug]}
TAXONOMÍA: Mestizo es una agrupación editorial de circulación y mediación; no atribuye el relato a una comunidad homogénea ni reemplaza la procedencia específica documentada.
${locationBySlug[input.slug]}
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, full illustration digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/varios-mestizo-final/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
