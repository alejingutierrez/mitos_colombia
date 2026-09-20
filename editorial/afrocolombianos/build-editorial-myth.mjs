import bachue from "../myths/bachue.mjs";
import { afrocolombianMedia } from "./media.mjs";
import { afrocolombianCategoryBySlug } from "./universe.mjs";

const sharedAfroHistory = `Afrocolombianos es una categoría editorial amplia, no el nombre de una comunidad homogénea. Los relatos de este frente proceden de lugares y cadenas de transmisión diferentes: Chocó, Medio Atrato, Tumaco y Buenaventura. La historia de poblaciones negras del Pacífico incluye desplazamientos forzados, resistencias, intercambios con pueblos indígenas, conexiones afroatlánticas y continuidades locales que no pueden reducirse a una sola “mitología africana”.

Las fuentes también cumplen funciones distintas. Jaime Arocha conserva una cadena identificada para Ananse; Willian Valencia reúne versiones orales de Tumaco; Helena Roldán publica la narración de Rosalba Cossio García; una guía territorial ofrece el núcleo breve de la Sierpe; el Centro Nacional de Memoria Histórica registra una evocación comunitaria del Riviel; y Rogerio Velásquez recopiló en 1960 dos cuentos localizados sobre la muerte.

Los expedientes institucionales sobre oralidad, música, viche, río, fiesta y duelo sitúan prácticas contemporáneas, pero no se usan para llenar escenas ausentes. Las comparaciones afroatlánticas o universales ayudan a reconocer motivos sin probar automáticamente una línea de copia. Esta revisión conserva nombres de narradores y lugares cuando están disponibles, declara las mediaciones y deja prioridad a las comunidades portadoras para corregir atribuciones, límites y formas de publicación.`;

const sharedAfroVersions = `La circulación oral produce cambios legítimos y no obliga a escoger una versión única. Ananse comparte una figura diaspórica, pero el campanario chocoano conserva su propia cadena de registro. La Tunda puede adoptar apariencias y funciones diferentes según el lugar; esta página sigue una versión escolar de Tumaco y no la convierte en retrato total. Kijimba tiene una narradora identificada y no se amplía con prácticas mortuorias tomadas de otros contextos.

La Sierpe llega mediante un resumen muy breve: tres cabezas, fiestas patronales y miedo de pescadores. Todo poder adicional permanece como duda. El Riviel circula entre costas y estuarios con nombres, luces, embarcaciones y genealogías variables; la adaptación prioriza la mochita recordada en Buenaventura. Los cuentos de Tutunendo y Munguidó sobre la muerte comparten una pregunta, pero mantienen personajes, objetos y secuencias distintas.

Las diferencias se atribuyen en cada ficha. Una coincidencia —agua, noche, baile, engaño o muerte— nunca autoriza a ensamblar episodios incompatibles ni a declarar que todo el Pacífico cuenta lo mismo.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje del Pacífico colombiano documentado para esta ficha, construido con capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico, paleta de verdes húmedos, azules profundos, tierra oscura y acentos cálidos; figuras humanas adultas con ropa cotidiana sobria cuando corresponda, sin rasgos caricaturescos, exotización, máscaras, tocados, joyas, pintura corporal ni vestuario ceremonial inventado; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, territorio del Pacífico colombiano expresado con capas digitales recortadas de borde limpio, formas mate y quilling dibujado selectivo sin volumen físico; figuras humanas adultas con ropa cotidiana sobria cuando corresponda, sin rasgos caricaturescos, exotización, máscaras, tocados, joyas, pintura corporal ni vestuario ceremonial inventado; sin horror gráfico, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildAfrocolombianEditorialMyth(input) {
  const media = afrocolombianMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = afrocolombianCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);
  const historia = input.historia ?? `${input.historyCore}\n\n${sharedAfroHistory}`;
  const versiones = input.versiones ?? `${input.versionCore}\n\n${sharedAfroVersions}`;
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
FUENTES: cada núcleo conserva su cadena documental y sus límites; la matriz de decisiones está en editorial/afrocolombianos/evidence.mjs.
FRONTERA EDITORIAL: no se inventan rituales, doctrinas, cantos, objetos protectores, poderes, diálogos ni genealogías para llenar fuentes breves.
ATRIBUCIÓN: Afrocolombianos funciona como taxonomía amplia; Chocó, Beté, Tumaco y Buenaventura permanecen diferenciados y ninguna versión se proyecta sobre todo el Pacífico.
UBICACIÓN: coordenadas municipales o regionales aproximadas; nunca indican residencia de narradores, aparición comprobable ni lugar que deba visitarse.
IMÁGENES: pareja propia pendiente; generación OpenAI gpt-image-2 en alta calidad, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/afrocolombianos/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
