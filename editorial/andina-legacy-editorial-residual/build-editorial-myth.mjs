import bachue from "../myths/bachue.mjs";
import { andinaLegacyEditorialResidualMedia } from "./media.mjs";
import { andinaLegacyEditorialResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, full illustration de acabado gráfico plano y composición a página completa: ${scene}; paisaje andino colombiano construido únicamente con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; personajes sobrios, gesto contenido y acción legible; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, full illustration de acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, construida únicamente con capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; perspectiva vertical y atmósfera respetuosa sin horror gráfico, texto ni letras; sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "catalina-la-napanga":
    "FRONTERA EDITORIAL: separa el doble homicidio y el proceso documentados en 1591 de la recreación literaria contemporánea; no afirma adulterio, hechizo, poeta mestizo, identidad de ñapanga ni romance como hechos históricos.",
  "el-hada-de-los-canaverales":
    "FRONTERA EDITORIAL: declara que el personaje y la trama son una fábula contemporánea creada por el sitio; las fuentes sostienen solamente caña, agua, humedales, trabajo y conflicto ambiental.",
  "el-silbo-de-quinunchu":
    "FRONTERA EDITORIAL: restituye al Quinunchú documentado por crónicas y estudios territoriales, leídos críticamente; elimina silbo sobrenatural, Dueña del Monte, guaquería mágica y camino encantado sin respaldo.",
};

const locationBySlug = {
  "catalina-la-napanga":
    "UBICACIÓN: coordenadas heredadas en Popayán; señalan el contexto urbano general y no una casa abierta al público ni un lugar autorizado para reconstruir el crimen.",
  "el-hada-de-los-canaverales":
    "UBICACIÓN: coordenadas heredadas en Cali como ancla departamental; la fábula condensa paisaje cañero, acequias y humedales sin atribuir el episodio a una finca o comunidad concreta.",
  "el-silbo-de-quinunchu":
    "UBICACIÓN: coordenadas heredadas en el occidente antioqueño; Guacá y la serranía de Abibe abarcan un territorio histórico que no equivale a un punto exacto ni al valle de Aburrá.",
};

export function buildAndinaLegacyEditorialResidualMyth(input) {
  const media = andinaLegacyEditorialResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath =
    andinaLegacyEditorialResidualCategoryBySlug[input.slug];
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
    ...(input.fuentesAgotadas ? { fuentesAgotadas: input.fuentesAgotadas } : {}),
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
FUENTES: respaldo, clase y límite en editorial/andina-legacy-editorial-residual/evidence.mjs.
${boundaryBySlug[input.slug]}
TAXONOMÍA: la URL se conserva en Andina > departamento > Mestizo; Mestizo es una agrupación editorial y no una comunidad homogénea ni una atribución étnica del relato.
${locationBySlug[input.slug]}
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, full illustration digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/andina-legacy-editorial-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
