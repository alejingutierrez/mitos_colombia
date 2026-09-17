import bachue from "../myths/bachue.mjs";
import { tolimaMestizoResidualMedia } from "./media.mjs";
import { tolimaMestizoResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje del Tolima construido con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; figuras expresivas pero sobrias, acción legible y atmósfera sugerida sin horror gráfico; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; perspectiva vertical, gesto contenido y ambiente tolimense sin horror gráfico, texto ni letras; sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "la-patasola":
    "FRONTERA EDITORIAL: atribuye a Misael Devia la figura metamórfica, la amputación punitiva y el rechazo a las labores del monte; no presenta esa versión moralizante como origen histórico ni incorpora personajes inventados por la ficha heredada.",
  "la-patasola-mixto":
    "FRONTERA EDITORIAL: conserva el relato atribuido a Ricardo Rocha G. y a Ñor Mica como una pieza publicada por Cesáreo Rocha Castilla; reconoce mediación escrita, lenguaje de época y tensión racial y de clase sin convertir cada fragmento del Excel en un mito independiente.",
  "el-poira":
    "FRONTERA EDITORIAL: Poira es una denominación o faceta del Mohán tolimense en las fuentes consultadas; el rapto no se romantiza y la atribución de cargos religiosos pijao se presenta como interpretación folclórica de mediados del siglo XX, no como dato histórico comunitario probado.",
  "el-sombreron":
    "FRONTERA EDITORIAL: distingue el caminante de gran sombrero del Tolima, el jinete colombiano de otras regiones y el enamorador diminuto guatemalteco; la carta de Alcohólicos Anónimos de 2004 se trata como montaje literario, no como testimonio archivístico.",
};

const locationBySlug = {
  "la-patasola":
    "UBICACIÓN: ancla editorial corregida en Ibagué para representar el corpus tolimense de Misael Devia; la leyenda circula por otras montañas colombianas.",
  "la-patasola-mixto":
    "UBICACIÓN: ancla editorial en Ortega, Tolima, por la geografía asociada en el corpus del proyecto; la quebrada de los Jabalcones del relato fuente no queda georreferenciada como lugar comprobado.",
  "el-poira":
    "UBICACIÓN: ancla editorial en Saldaña, uno de los grandes ríos nombrados por Rocha Castilla; no identifica una cueva o desaparición histórica específica.",
  "el-sombreron":
    "UBICACIÓN: ancla editorial en Lérida por una memoria local del Gran Tolima; otras versiones colombianas se sitúan en Antioquia, Huila, Cundinamarca y Boyacá.",
};

export function buildTolimaMestizoResidualEditorialMyth(input) {
  const media = tolimaMestizoResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = tolimaMestizoResidualCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase y límite en editorial/tolima-mestizo-residual/evidence.mjs.
${boundaryBySlug[input.slug]}
TAXONOMÍA: se preserva la URL y la categoría existente de cada ruta; el expediente diferencia corpus, región comparada y grado de certeza.
${locationBySlug[input.slug]}
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/tolima-mestizo-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
