import bachue from "../myths/bachue.mjs";
import { yukpaMedia } from "./media.mjs";
import { yukpaCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Yukpa nombra a un pueblo de lengua caribe que vive a ambos lados de la serranía del Perijá. No designa una tradición uniforme. Ernst Halbmayer y Anne Goletz comparan materiales Irapa, Iroka y Sokorpa; los nombres de creadores, secuencias y énfasis cambian entre grupos y narradores. Esta revisión mantiene esas diferencias en vez de construir una cosmogonía única.

Halbmayer organiza la mitología publicada en cuatro grandes complejos relacionados: transformaciones del mundo y surgimiento de humanos y animales; gemelos, cielo nocturno y estaciones; plantas cultivadas, con especial importancia del maíz; y relatos sobre blancos y tecnología. Esa clasificación sirve como mapa de investigación, no como permiso para convertir cada mención en una página.

La exposición bilingüe de 2018 ofrece versiones breves de Aponto y los gemelos Yirhwach. Sus autores advierten que una narración oral completa puede durar mucho más que el texto expuesto. La adaptación pública conserva la secuencia disponible y declara sus límites. El artículo de 2025 permite corregir las fichas heredadas sobre Sol, Luna y el diluvio con comparaciones más amplias.

Mé ynetachako ocupa un lugar distinto: fue producido en yukpa y español con comunidades participantes, autorización de mayores y acompañamiento pedagógico. Su condición comunitaria no vuelve idénticas todas las versiones ni todas las prácticas agrícolas, pero le da prioridad para la ficha sobre el maíz.

Las autoridades, narradores y comunidades Yukpa conservan prioridad para corregir grafías, límites de publicación y atribuciones. Las páginas no reproducen instrucciones rituales, materiales mortuorios ni fragmentos sensibles que no sean necesarios para comprender el relato.`;

const sharedVersions = `Los nombres varían entre publicaciones y subgrupos. Aponto puede aparecer dentro de conjuntos más amplios de figuras creadoras; Kopeco también se transcribe Kopecho; el ciclo de los gemelos usa grafías que dependen del registro y la traducción. La revisión conserva en cada ficha la forma usada por su fuente principal y menciona variantes solo cuando ayudan a identificar el relato.

El origen de personas desde Manurhacha tiene versiones que destacan el árbol sangrante y el pájaro carpintero, y otras que describen cómo Aponto trabaja madera, forma articulaciones y provoca risa y movimiento. Se presentan como perspectivas relacionadas, no como pasos obligatorios de una única transcripción.

El relato de los dos Soles coincide en la necesidad de diferenciar claridad y oscuridad, pero cambia detalles del engaño, las brasas y la transformación. El diluvio tampoco tiene una sola causa: algunas versiones hablan de transgresión, otras de una amenaza anunciada por una montaña, un tuwancha o una figura creadora. La supervivencia en cumbres del Perijá y el retiro de las aguas permiten reconocer el ciclo sin imponer una teología única.

La ficha de los gemelos es una ventana condensada de un ciclo extenso de parentesco, jaguares, venganza, ascenso celeste y lluvia. La de Mé sigue el libro comunitario y no mezcla otros dueños de plantas. Comparar motivos no autoriza a trasladar personajes entre páginas.`;

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
  return `Ilustración panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje de la serranía del Perijá expresado con capas recortadas digitales, bordes limpios, formas mate y superposición sin volumen físico, paleta verde montaña, azul noche, ocre maíz y acentos cálidos; personajes humanos como siluetas adultas secundarias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, capas recortadas digitales de borde limpio y quilling dibujado selectivo, formas mate sin volumen físico; personajes humanos como siluetas adultas secundarias sin rasgos étnicos, pintura corporal, tocados, joyas, plumas ni vestuario ceremonial inventado; sin horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildYukpaEditorialMyth(input) {
  const media = yukpaMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = yukpaCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
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
    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),
    ...(input.fuentesAgotadas ? { fuentesAgotadas: input.fuentesAgotadas } : {}),
    historia,
    versiones,
    leccion: input.leccion,
    similitudes: input.similitudes ?? input.similarityCore,
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
FUENTES: se distinguen el libro comunitario bilingüe, las versiones etnográficas atribuidas, los estudios comparativos y los perfiles institucionales; la matriz está en editorial/yukpa/evidence.mjs.
FRONTERA EDITORIAL: no se publican instrucciones rituales, materiales mortuorios ni fragmentos sensibles sin una secuencia pública suficiente.
ATRIBUCIÓN: las diferencias Irapa, Iroka y Sokorpa permanecen visibles; Yukpa no se presenta como una voz única.
UBICACIÓN: coordenadas regionales aproximadas de la serranía del Perijá, no de un sitio sagrado ni de una comunidad concreta.
IMÁGENES: pareja propia; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/yukpa/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
