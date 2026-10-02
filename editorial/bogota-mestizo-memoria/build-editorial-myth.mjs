import bachue from "../myths/bachue.mjs";
import { bogotaMestizoMemoryMedia } from "./media.mjs";
import { bogotaMestizoMemoryCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa ocho URL heredadas bajo Andina > Bogotá > Mestizo. Siete permanecen en Bogotá y El diablo del Puente del Común pasa a Andina > Varios > Mestizo porque el inmueble y el relato se localizan en Chía, Cundinamarca. “Mestizo” funciona aquí como categoría editorial amplia para memoria urbana, patrimonio, devoción católica y folclor regional; no designa una comunidad homogénea ni una voz colectiva única.

Las fichas reúnen tres clases de material que no se confunden. Antonín, Eduardo Arias Jiménez y Margarita Villaquirá fueron convertidos por la memoria de la ciudad en personajes con apodos hoy estigmatizantes. Las páginas conservan esos nombres históricos para permitir la búsqueda, pero no los usan como diagnóstico ni como licencia para deshumanizar. José Raimundo Russi pertenece a un proceso judicial y político del siglo XIX cuya culpabilidad sigue discutida; su espectro es una reelaboración posterior. El Mono de la Pila, Monserrate y el Puente del Común combinan objetos o lugares comprobables con explicaciones proverbiales, devociones y leyendas.

Las fuentes institucionales y periodísticas no tienen el mismo peso que un archivo temprano, un estudio académico o una ficha patrimonial. Una crónica de 1924 permite acercarse a la voz pública de Margarita, pero también exhibe la mirada espectacular de su época. Los relatos de la Secretaría de Cultura prueban circulación contemporánea, no cada detalle biográfico. Las investigaciones de patrimonio verifican material, ubicación y transformación; no certifican milagros, apariciones ni pactos.

Las coordenadas representan el escenario público aproximado: centro de Bogotá, Plaza de Bolívar, La Candelaria, Monserrate o Puente del Común. No señalan un lugar comprobado de aparición, una historia clínica, un domicilio visitable ni una invitación a entrar en inmuebles privados.`;

const sharedVersions = `Las versiones se conservan como capas identificables. En Antonín y Arias, la narración institucional tardía se distingue de la historia documentada del tranvía y de la recepción artística de los personajes urbanos. En Margarita, la crónica de 1924 no confirma automáticamente la biografía familiar difundida décadas después por perfiles y una miniserie. Ninguna ficha deduce una condición clínica a partir de un apodo.

El Mono de la Pila separa la conducción temprana de agua, la fuente ornamentada posterior, sus traslados y la explicación proverbial sobre las quejas. Russi separa hechos del proceso, veredicto, disputas historiográficas y voz fantasmal. La ficha colectiva de La Candelaria conserva varias presencias sin convertirlas en una entidad única ni volver a narrar por completo el caso Russi.

Monserrate distingue historia del santuario, memoria devocional y supersticiones. Cabello, peso y promesas permanecen atribuidos a quienes creen; el volcán y las presencias muiscas no avanzan por falta de corroboración. En el Puente del Común, Florentino pertenece al pacto legendario y Domingo Esquiaqui a la construcción documentada. Comparar personajes, lugares o pactos ayuda a pensar funciones urbanas y narrativas, pero no demuestra identidad, influencia directa ni hechos sobrenaturales.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; Bogotá o sabana de Cundinamarca representada con arquitectura y paisaje específicos del expediente, capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; composición sobria, proporciones humanas naturales y tratamiento digno de los personajes históricos; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; atmósfera narrativa respetuosa, sin horror gráfico, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildBogotaMestizoMemoryEditorialMyth(input) {
  const media = bogotaMestizoMemoryMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = bogotaMestizoMemoryCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
  // Lo propio manda; el marco compartido sólo actúa donde aún no se ha
  // reescrito. `sharedHistory` son 277 palabras idénticas en las ocho fichas
  // —entre el 83 % y el 85 % de cada `historia`— y además hablan del proyecto
  // («este frente revisa ocho URL heredadas bajo Andina > Bogotá > Mestizo»),
  // que es contabilidad interna y no tiene por qué leerla nadie.
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
    historia,
    versiones,
    leccion: input.leccion,
    similitudes: input.similitudes ?? input.similarityCore,
    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),
    ...(input.fuentesAgotadas ? { fuentesAgotadas: input.fuentesAgotadas } : {}),
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
FUENTES: respaldo, clase de evidencia y límites en editorial/bogota-mestizo-memoria/evidence.mjs.
FRONTERA EDITORIAL: no se inventan historias clínicas, testigos, parentescos, diálogos, milagros, apariciones, culpabilidad, inocencia ni atribuciones culturales.
ATRIBUCIÓN: cada ficha distingue persona histórica, memoria urbana, versión institucional, adaptación artística, patrimonio material y creencia devocional.
UBICACIÓN: coordenadas públicas aproximadas; no indican aparición comprobable, domicilio privado ni sitio recomendado de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/bogota-mestizo-memoria/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
