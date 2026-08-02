import bachue from "../myths/bachue.mjs";
import { andinaVariosMestizoResidualMedia } from "./media.mjs";
import { andinaVariosMestizoResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje andino colombiano construido con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; figuras expresivas pero sobrias, acción legible y atmósfera sugerida sin horror gráfico; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; perspectiva vertical, gesto contenido y ambiente colombiano sin horror gráfico, texto ni letras; sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "el-anima-sola":
    "FRONTERA EDITORIAL: distingue la devoción popular a las almas del purgatorio, la nota literaria de Marquetalia publicada en 2004 y el cuento de Carrasquilla; no declara a Jairo Ocampo, Celestina ni la cadena devocional como hechos históricos comprobados.",
  "la-vieja-colmillona":
    "FRONTERA EDITORIAL: presenta el diario de Agustín Moreno como marco literario del bestiario de 2004, separa a la Colmillona de la Muelona y no autentica hacienda, autor o fechas sin corroboración.",
  "la-nina-de-la-carta":
    "FRONTERA EDITORIAL: el supuesto informe mediúmnico de Itagüí de 1963 permanece atribuido a la edición de 2004; nombres, institución y accidente no se presentan como hechos corroborados y las variantes posteriores no se fusionan.",
  "la-barbacoa-del-muerto":
    "FRONTERA EDITORIAL: diferencia el trance de Anselmo Santamaría, la promesa incumplida a Chiquinquirá y las versiones del Guando; ninguna se convierte en biografía histórica única.",
  "los-meneses":
    "FRONTERA EDITORIAL: Los Meneses son el grupo de muchachos-espíritu; la nota del vagabundo de Anserma es un dispositivo literario de 2004 y no una confesión archivística verificada.",
};

const locationBySlug = {
  "el-anima-sola":
    "UBICACIÓN: coordenadas heredadas cercanas a Marquetalia, Caldas, por el escenario de la nota de 2004; la devoción circula en otros lugares de Colombia.",
  "la-vieja-colmillona":
    "UBICACIÓN: ancla heredada en Aguadas, Caldas, por el escenario editorial; la ficha del libro extiende la circulación a Antioquia, Viejo Caldas, Tolima Grande y Llanos.",
  "la-nina-de-la-carta":
    "UBICACIÓN: ancla heredada próxima a Itagüí y Heliconia; el libro también menciona Armenia y otros caminos de Antioquia y el Eje Cafetero.",
  "la-barbacoa-del-muerto":
    "UBICACIÓN: coordenadas regionales heredadas, no lugar de muerte comprobado; las versiones consultadas circulan entre Antioquia, Viejo Caldas, Tolima y Santander.",
  "los-meneses":
    "UBICACIÓN: ancla heredada en Anserma por el narrador de la nota de 2004; la ficha amplía el motivo a Antioquia, Cundinamarca, Tolima y referencias de Nariño.",
};

export function buildAndinaVariosMestizoResidualEditorialMyth(input) {
  const media = andinaVariosMestizoResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = andinaVariosMestizoResidualCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase y límite en editorial/andina-varios-mestizo-residual/evidence.mjs.
${boundaryBySlug[input.slug]}
TAXONOMÍA: la URL permanece en Andina > Varios > Mestizo para conservar enlaces y clasificación existente; el expediente declara territorio, soporte y grado de certeza.
${locationBySlug[input.slug]}
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/andina-varios-mestizo-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
