import bachue from "../myths/bachue.mjs";
import { piedecuestaVicenteArenasIMedia } from "./media.mjs";
import { piedecuestaVicenteArenasICategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa ocho relatos del homenaje infantil a Vicente Arenas Mantilla (1901-1992) incluido en Literatura folclórica: leyendas y relatos legendarios de Piedecuesta. Siete conservan rutas heredadas y La Llorona del Molino se incorpora porque forma parte explícita del mismo ciclo. Ninguna página se despublica.

El estudio adapta materiales atribuidos a Estampas de mi tierra, publicado en 1941, y Crónicas y romances, de 1960. Los catálogos de CiNii y Ediciones UIS respaldan la existencia editorial de esas obras; no convierten personajes, fechas, epidemias, muertes, acusaciones, milagros o apariciones en hechos históricos verificados. Cuando la página nombra a Eumelia, Petra, Elvira, Carlos, Ritornelio u otras personas, mantiene visible la cadena literaria y sus límites.

Luis Rubén Pérez Pinzón clasifica La Sayona del Cementerio como histórica; La Mula Maneada, La Puerta del Perdón y El Pollo de las Ánimas como identitarias; La Llorona del Molino y La Mechuda como ecoambientales; y La Mula del Diablo y El Fantasma de El Horizonte como negras. Estas categorías ayudan a leer funciones del relato, pero no prueban lo sobrenatural ni autorizan estigmas de género, discapacidad o diferencia corporal.

Las coordenadas son aproximaciones públicas al centro de Piedecuesta y a sectores generales como El Horizonte, el antiguo molino, Puente de Plata, Villanueva, La Ladera, la parroquia o el cementerio. No señalan viviendas privadas, tumbas, árboles, canales, reliquias ni lugares recomendados para exploración.`;

const sharedVersions = `Las ocho páginas permanecen separadas. La Mula del Diablo es la tragedia atribuida de Eumelia y el herrero; La Mula Maneada es un romance que liga un rumor a Petra Agudelo sin describir con claridad una transformación corporal. Ninguna absorbe al Diablo de Umpalá, cuya explicación son las herraduras de un caballo.

La Llorona del Molino conserva molino, canal de agua, familia y llanto cuaresmal como adaptación literaria específica. No sustituye a otras Lloronas colombianas. La Mechuda se limita a un bulto, dos alaridos y la huida de Antoninito y Balbino: la fuente no describe una mujer de cabellera desmesurada. El Fantasma de El Horizonte contiene sus propias explicaciones internas, un burro cojo cubierto y una posible broma humana.

La Puerta del Perdón distingue el objeto patrimonial de las curaciones y castigos atribuidos. La Sayona del Cementerio conserva a Elvira y Carlos dentro de una memoria romántica local, no como versión de la castigadora de infieles. El Pollo de las Ánimas es un engaño humano contra Ritornelio y no una aparición. Comparar motivos ayuda a orientar la lectura; no autoriza fusionar rutas, diagnosticar personajes ni presentar acusaciones poéticas como sentencias históricas.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; arquitectura, caminos, agua y cultura material de la Piedecuesta histórica representados con capas digitales recortadas, bordes limpios, formas mate y superposición plana sin volumen físico; atmósfera legible, personajes dignos y sin violencia gráfica; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tensión narrativa sobria, trato digno y sin violencia gráfica, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildPiedecuestaVicenteArenasIEditorialMyth(input) {
  const media = piedecuestaVicenteArenasIMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = piedecuestaVicenteArenasICategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
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
FUENTES: respaldo, clase de evidencia y límites en editorial/piedecuesta-vicente-arenas-i/evidence.mjs.
FRONTERA EDITORIAL: no se inventan testigos, diagnósticos, parentescos, delitos, expedientes, identidades, milagros, apariciones ni atribuciones culturales.
ATRIBUCIÓN: nombres, fechas, diálogos, acusaciones y recuerdos proceden de obras literarias y adaptaciones locales; el contexto territorial no los convierte en hechos comprobados.
UBICACIÓN: coordenadas públicas aproximadas; no identifican casas, tumbas, canales, reliquias ni sitios recomendados de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/piedecuesta-vicente-arenas-i/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
