import bachue from "../myths/bachue.mjs";
import { santanderClassicFolkloreMedia } from "./media.mjs";
import { santanderClassicFolkloreCategoryBySlug } from "./universe.mjs";

const histories = {
  arias: `Juan de Dios Arias publicó Folclor santandereano, tomo II, en Bucaramanga en 1954. Eugenia Villa Posse reprodujo en 1993 el capítulo “Leyendas” dentro de Mitos y leyendas de Colombia, volumen II. De esa cadena proceden La piedra del muerto, El trapiche ardiendo, Lagunas encantadas y Lo que enseñan las cuevas.

Arias no usa un solo método de registro. En La piedra del muerto habla desde su conocimiento de Mogotes. En El trapiche ardiendo reconstruye una velada de infancia y atribuye el relato a don Crisanto. En Lagunas encantadas combina informes de varios municipios con un pasaje de Manuel Ancízar. En Lo que enseñan las cuevas dice que un maestro escribió El Colmenero y luego resume otras consejas. Son capas distintas de memoria, edición y literatura.

La investigación reciente sobre literatura santandereana permite leer la obra como parte de un proyecto regional del siglo XX. Las voces contemporáneas de Cauchos y Vetas muestran que relatos de fogón y lagunas bravas siguen circulando en territorios concretos, pero no deben proyectarse sin prueba sobre todos los relatos de 1954.

La prosa de Arias contiene generalizaciones sobre campesinos e indígenas, moral religiosa, detalles violentos y una mirada que convierte sitios arqueológicos en escenarios de tesoro. Esta revisión atribuye esas capas, reduce el daño gráfico y aplica las reglas actuales de protección patrimonial. Las coordenadas de los ciclos son referencias regionales aproximadas, nunca accesos a cuevas, guacas, lagunas privadas o puntos de extracción.`,
  otero: `Enrique Otero D’Costa publicó Leyendas en 1936 dentro de la Biblioteca Aldeana de Colombia. Eugenia Villa Posse reprodujo Tal para cual y El cacique Salomón en Mitos y leyendas de Colombia, volumen II, y advirtió que Otero elaboraba literariamente materiales de varias regiones, algunos oídos en narraciones campesinas.

La edición no entrega cuadernos de campo ni identifica un narrador oral para estas dos piezas. Sus nombres, diálogos, giros arcaizantes y finales pertenecen por tanto a una obra de autor. El archivo y la trayectoria de Otero explican su interés por historia y folclor, pero no convierten cada escena en transcripción ni cada personaje en persona documentada.

El cacique Salomón reúne una anécdota de Sugamuxi en Sogamoso y otra de Andrés Guatesique en Dubigara, territorio que el texto relaciona con Barichara. La historiografía permite contextualizar a Sugamuxi y los cacicazgos guane; no demuestra el diálogo del río, a Pirinoche, la deuda o la sentencia. Tal para cual se ambienta en San Juan de Girón y el valle del río de Oro; el marco territorial no prueba a Anselmo o Cirilo.

La sátira usa categorías coloniales, castigo corporal y burla de una condición física. La revisión conserva el conflicto jurídico y el pacto, pero no adopta la jerarquía racial, la violencia ni la asociación entre bocio e inteligencia. Las coordenadas son referencias editoriales amplias porque las obras no documentan lugares biográficos visitables.`,
};

const versions = {
  arias: `Las cuatro rutas de Arias permanecen separadas. La piedra del muerto es una leyenda localizada en Mogotes sobre hospitalidad, tormenta y una forma rocosa. El trapiche ardiendo es la escena de Nazario observada desde El Volcán; no incluye La Barbacoa ni La Mancarita, aunque esas historias aparezcan antes y después en el mismo capítulo.

Lagunas encantadas y Lo que enseñan las cuevas son ciclos. Cada párrafo pertenece a un municipio, informante o cadena distinta. La edición puede seleccionar escenas para una lectura clara, pero no convertir Bucaramanga, Socorro, Girón, Bolívar, Mogotes, San Andrés y Los Santos en una sola laguna, ni El Colmenero, Cenicero, Calentana, Biato, Cueva del Indio y Cachalú en una expedición continua.

Arias reconoce variantes, autores imprecisables, percepción óptica, recuerdos infantiles y funciones moralizadoras. Esas observaciones forman parte de la evidencia y evitan publicar castigos, monstruos, apariciones o tesoros como hechos. Los hallazgos arqueológicos mencionados en cuevas se separan de sus guardianes legendarios y quedan sujetos a protección contemporánea.`,
  otero: `Otero conserva dos formas distintas de sátira. El cacique Salomón abre con Sugamuxi y la imagen de un río que siempre corre hacia abajo, luego pasa a Guatesique, Pirinoche y una deuda dividida bajo la lógica racial de la jurisdicción colonial. El título compara la agudeza de ambos con Salomón; no nombra a un tercer cacique.

Tal para cual sigue a Anselmo y Cirilo desde la enfermedad hasta el contrato, la advertencia de la esposa, la mejoría y la negativa a deshacer la escritura. La burla corporal no es necesaria para comprender el acuerdo y se retira. También se evita afirmar salvación, condena o efecto sobrenatural como desenlace cierto.

Ambas piezas se publican como cuentos literarios de 1936 con posibles antecedentes orales no recuperados en este expediente. Los paralelos universales ayudan a leer justicia, culpa y pacto, pero no demuestran una fuente única ni reemplazan el contexto colonial de Santander y Boyacá.`,
};

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje andino santandereano, arquitectura, trabajo y cultura material derivados del expediente, con capas digitales recortadas, bordes limpios, formas mate y superposición plana sin volumen físico; memoria regional legible, trato digno, sin exotización indígena, tesoro espectacular ni violencia gráfica; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; memoria sobria, trato digno, sin exotización indígena, tesoro espectacular, violencia gráfica, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

// Las fichas reescritas entregan el campo entero; si no lo traen, se compone
// como antes. El camino viejo daba un párrafo propio y el resto idéntico para
// toda la comunidad: por eso todas medían lo mismo y se leían igual.
export function buildSantanderClassicFolkloreEditorialMyth(input) {
  const media = santanderClassicFolkloreMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = santanderClassicFolkloreCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
  const sharedHistory = histories[input.sourceTradition];
  const sharedVersions = versions[input.sourceTradition];
  if (!sharedHistory || !sharedVersions) {
    throw new Error(`${input.slug}: tradición editorial desconocida.`);
  }
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
FUENTES: respaldo, clase de evidencia y límites en editorial/santander-folclor-clasico/evidence.mjs.
FRONTERA EDITORIAL: no se inventan informantes, doctrinas, rituales, biografías, rutas de exploración, tesoros, castigos divinos ni continuidades culturales.
ATRIBUCIÓN: los relatos proceden de obras literarias y compilaciones de Enrique Otero D’Costa y Juan de Dios Arias, con sus fechas, voces y limitaciones.
UBICACIÓN: coordenadas públicas aproximadas; los ciclos regionales y cuentos multiterritoriales no representan un acceso exacto ni un lugar recomendado de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/santander-folclor-clasico/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
