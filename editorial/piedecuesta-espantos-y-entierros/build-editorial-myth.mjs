import bachue from "../myths/bachue.mjs";
import { piedecuestaEspantosMedia } from "./media.mjs";
import { piedecuestaEspantosCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa ocho URL heredadas bajo Andina > Santander > Mestizo. Todas permanecen publicadas y en la misma categoría. “Mestizo” funciona como agrupación editorial de leyendas rurales y urbanas compiladas en español; no convierte a Piedecuesta en una comunidad homogénea ni permite atribuir los relatos a los pueblos indígenas de Santander sin una cadena específica.

La fuente narrativa común es una reproducción titulada Mitos y leyendas de Piedecuesta y sus veredas, que declara tomar los capítulos de Leyendas y cuentos de Santander, de Germán Valenzuela Sánchez. La reproducción fecha el libro en 2012, mientras el estudio Literatura folclórica de Piedecuesta lo cita como edición de 2010. La discrepancia se conserva. Los nombres, diálogos y testimonios se atribuyen al compilador: no se presentan como entrevistas realizadas de nuevo ni como expedientes históricos independientes.

Luis Rubén Pérez Pinzón estudió ese corpus dentro de un proyecto Gen_Ondas-Unab con estudiantes, docentes y familias del Instituto Valle del Río de Oro. Su análisis clasifica Carriazo, Reventón, Pisca y Monedita como leyendas compensatorias; Diabla como identitaria; Galeacer y Lámpara como ecoambientales; e Hilandera como leyenda negra. También advierte que la copia de internet puede mezclar relatos de otras regiones. La clasificación ayuda a leer funciones, pero no demuestra apariciones.

Las coordenadas señalan centros públicos aproximados de Piedecuesta, San Isidro, Blanquiscal, Loma Baja, Villanueva o La Urgua. No identifican domicilios, restos humanos, entierros, cuevas transitables, árboles con tesoros ni rutas recomendadas de exploración.`;

const sharedVersions = `Las versiones se mantienen separadas por relato y por clase de evidencia. La Hilandera no incluye a La Máncara de San Francisco: la primera narra a Oliva en un taller de fique y la segunda es otra leyenda del corpus. La Cueva de la Pisca no presenta una especie fantástica; el Diccionario de americanismos define pisca como hembra del pisco o pavo. Lo maravilloso está en la pava y los polluelos que aparecen junto a un tesoro.

La Diabla Castigadora tampoco es una mujer sobrenatural. El propio relato revela que Rebeca se disfraza de Tenorio y golpea a Maribella; el rumor posterior transforma esa agresión en castigo de una diabla. La página conserva el mecanismo legendario y rechaza que los celos o el “honor” justifiquen violencia. En La Monedita, huesos, llanto, luz y guaca se atribuyen a Alberto Díaz y al rumor familiar; no se inventan causa de muerte, identidad ni culpa.

Doctor Galeacer conserva el caballo negro y la cerca intacta, sin poderes curativos ni dominio del tiempo. El Carriazo conserva a Silvio, Reyes y Carmelo sin convertir a uno en héroe único. El Reventón conserva los huesos entregados por la ventana y el entierro encontrado, no un cofre ofrecido por una entidad. La Lámpara conserva una luz observada bajo la lluvia, sin asignarle alma, víctima o propósito. Comparar motivos no prueba origen común, influencia directa ni hechos sobrenaturales.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje y cultura material de Piedecuesta representados con formas específicas del expediente, capas digitales recortadas de bordes limpios, formas mate y superposición plana sin volumen físico; atmósfera nocturna legible, tratamiento digno y sin violencia gráfica; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; tensión narrativa sobria, sin violencia gráfica, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildPiedecuestaEspantosEditorialMyth(input) {
  const media = piedecuestaEspantosMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = piedecuestaEspantosCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase de evidencia y límites en editorial/piedecuesta-espantos-y-entierros/evidence.mjs.
FRONTERA EDITORIAL: no se inventan testigos, diagnósticos, parentescos, delitos, expedientes, identidades, apariciones ni atribuciones culturales.
ATRIBUCIÓN: nombres, diálogos y recuerdos proceden de compilaciones locales; contexto territorial independiente no los convierte en hechos comprobados.
UBICACIÓN: coordenadas públicas aproximadas; no identifican casas, restos humanos, guacas, cuevas transitables ni sitios recomendados de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/piedecuesta-espantos-y-entierros/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
