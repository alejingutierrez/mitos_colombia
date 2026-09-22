import bachue from "../myths/bachue.mjs";
import { caribeMixtoFinalMedia } from "./media.mjs";
import { caribeMixtoFinalCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, full illustration de acabado gráfico plano y composición a página completa: ${scene}; paisaje del Caribe colombiano construido únicamente con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; acción legible, personajes expresivos sin caricatura degradante y atmósfera respetuosa; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, full illustration de acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, construida únicamente con capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; perspectiva vertical, gesto narrativo claro y atmósfera respetuosa sin texto ni letras; sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function boundary(slug) {
  if (slug === "el-hombre-caiman") {
    return "FRONTERA EDITORIAL: leyenda ribereña de Plato compilada y difundida en el siglo XX; no se presenta a Saúl como persona histórica comprobada ni se atribuye el argumento moderno a la cultura Chimila sin una fuente comunitaria directa.";
  }
  return "FRONTERA EDITORIAL: cuento de oraliteratura raizal registrado en San Andrés; conserva su brevedad, humor y ambivalencia sin convertirlo en cosmogonía africana, ceremonia perdida ni fábula universal homogénea.";
}

function location(slug) {
  if (slug === "el-hombre-caiman") {
    return "UBICACIÓN: coordenadas generales de Plato, Magdalena; no identifican una casa, un punto exacto del Caño de las Mujeres ni una aparición comprobada.";
  }
  return "UBICACIÓN: ancla general en San Andrés y, cuando corresponde, en el sector de Sound Bay; Friedemann no atribuyó cada pieza a una coordenada ni a un único narrador publicable.";
}

export function buildCaribeMixtoFinalMyth(input) {
  const media = caribeMixtoFinalMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = caribeMixtoFinalCategoryBySlug[input.slug];
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
    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),
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
FUENTES: respaldo, clase y límite en editorial/caribe-mixto-final/evidence.mjs.
${boundary(input.slug)}
TAXONOMÍA: Mixto se conserva como agrupación técnica para las cinco URL raizales porque el catálogo aún no cuenta con comunidad Raizal; no sustituye ni diluye esa procedencia. El Hombre Caimán pasa a Mestizo por su circulación plateña documentada.
${location(input.slug)}
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, full illustration digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/caribe-mixto-final/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
