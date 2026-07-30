import bachue from "../myths/bachue.mjs";
import { bogotaMestizoNightMedia } from "./media.mjs";
import { bogotaMestizoNightCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa ocho URL heredadas bajo Andina > Bogotá > Mestizo. Las ocho permanecen publicadas y en la misma categoría. “Mestizo” funciona aquí como una agrupación editorial amplia para leyendas urbanas, literatura popular y memoria de la ciudad; no designa una comunidad homogénea ni una voz colectiva única.

La investigación encontró dos cadenas editoriales decisivas. Mitos y leyendas de Bogotá, de Asdrúbal López Orozco, publicado en 2008, contiene por título El toro en el ascensor, El venado de oro, La monja vidente y el taxista y Los esqueletos caminantes. Cuentos de espantos y otros seres fantásticos del folclor colombiano, editado en 2004, contiene La Bruja del Tranvía, La Mula Herrada y La Monja de las Rosas, pero además advierte que trabaja con “documentos imaginarios” y “material de ficción”. Sus cartas, entrevistas, guiones, fechas y objetos probatorios forman parte del artificio literario.

El Hombre del Farol ocupa otra frontera. La narración de Manuelito Llanos incluye un decreto fechado el 3 de noviembre de 1828 y coincide con fuentes que identifican a Juan Miguel Acevedo como participante de la Conspiración Septembrina y portador del farol. Esa coincidencia no convierte en biografía demostrada todos los detalles sobre Manuelito, Labarcés o Francisca. Del mismo modo, una crónica de Lizeth León encontró una nota de prensa sobre una res que entró a un edificio y corneó a un hombre, pero también documentó décadas, rutas e inmuebles incompatibles.

Las coordenadas representan escenarios públicos aproximados: centro de Bogotá, Las Nieves, La Candelaria, la Quinta de Bolívar o el cerro de Guadalupe. No señalan una aparición comprobada, una funeraria identificada, una morgue visitable ni una invitación a entrar en edificios privados.`;

const sharedVersions = `Las versiones se presentan como capas y no como una narración acumulativa. La Bruja del Tranvía no incorpora a la Bruja del Cortijo: una procede de una carta ficticia publicada en 2004 y la otra de memoria barrial de Engativá. La Monja de las Rosas conserva el guion de una niña, una mujer vestida de negro y un ramo amarillo; no alterna ese personaje con una monja blanca ni transforma una ficción en avistamientos recurrentes.

La Monja y el Taxista mantiene el motivo que viaja entre Bogotá y Tuluá: una religiosa pide un taxi, entra a una funeraria y aparece dentro del ataúd. Conversaciones sobre fútbol, sonrisa del cadáver y prevención nocturna son variaciones identificables. Escándalos eclesiásticos, lotería, placas premiadas y un taxista muerto pertenecen a una fusión posterior y se retiran. La Mula Herrada queda en Las Nieves con don Álvaro Sánchez y su animal; la hija hondureña, el fraile mexicano y Raúl Romero no se presentan como una sola genealogía.

El Venado de Oro conserva al tesoro de Guadalupe y a Diego Barreto, sin una transformación ordenada por el Zipa ni un animal viviente que salte entre cerros. El Toro del Ascensor conserva la inestabilidad de su fecha y edificio en vez de resolverla con falsa precisión. Los Esqueletos Caminantes se atribuyen a una elaboración literaria de 2008: no se usa una alegoría moral para culpar o deshumanizar a personas fallecidas en condición de no identificadas. Comparar motivos ayuda a reconocer su función, pero no prueba hechos sobrenaturales, influencia directa ni un origen único.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; Bogotá representada con arquitectura, paisaje y objetos específicos del expediente, capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; atmósfera nocturna legible, tratamiento digno y sin horror gráfico; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tensión narrativa sobria, sin horror gráfico, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildBogotaMestizoNightEditorialMyth(input) {
  const media = bogotaMestizoNightMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = bogotaMestizoNightCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
  const historia = `${input.historyCore}\n\n${sharedHistory}`;
  const versiones = `${input.versionCore}\n\n${sharedVersions}`;
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
    similitudes: input.similarityCore,
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
FUENTES: respaldo, clase de evidencia y límites en editorial/bogota-mestizo-nocturno/evidence.mjs.
FRONTERA EDITORIAL: no se inventan testigos, diagnósticos, parentescos, diálogos, archivos, juicios, apariciones, culpabilidad ni atribuciones culturales.
ATRIBUCIÓN: cada ficha distingue documento histórico, recreación literaria, rumor urbano, recepción posterior y contexto institucional.
UBICACIÓN: coordenadas públicas aproximadas; no indican aparición comprobable, funeraria, morgue, domicilio privado ni sitio recomendado de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/bogota-mestizo-nocturno/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
