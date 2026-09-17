import bachue from "../myths/bachue.mjs";
import { tolimaMixtoResidualMedia } from "./media.mjs";
import { tolimaMixtoResidualCategoryBySlug } from "./universe.mjs";

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje del Tolima construido con capas digitales recortadas de bordes limpios, formas mate, color profundo y superposición plana sin volumen físico; acción legible, figuras sobrias y atmósfera sugerida sin horror gráfico; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, capas digitales recortadas de bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; perspectiva vertical, gesto contenido y ambiente tolimense sin horror gráfico, texto ni letras; sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "la-madre-agua":
    "FRONTERA EDITORIAL: el núcleo de Devia es una presencia de las aguas con pies invertidos que atrae a niños; la madre que pierde a su hijo pertenece a versiones posteriores y queda atribuida.",
  "la-candileja":
    "FRONTERA EDITORIAL: la abuela indulgente y las tres llamas se conservan como tradición folclórica mediada; el castigo religioso no se presenta como hecho ni justifica violencia educativa.",
  "la-muelona":
    "FRONTERA EDITORIAL: Devia documenta dentadura, caminos y ataque; La Maga es una biografía posterior, no una mujer colonial históricamente demostrada.",
  "el-cazador":
    "FRONTERA EDITORIAL: el espíritu invisible de Devia se separa del cazador visible de recepciones posteriores y de la carta ficticia publicada en 2004.",
  "el-tunjo":
    "FRONTERA EDITORIAL: el niño de oro del folclor tolimense no se usa para explicar figuras votivas muiscas ni para atribuir arqueología pijao sin evidencia.",
  "el-guango":
    "FRONTERA EDITORIAL: Guango y Guando son grafías de la camilla y del cortejo de Devia; la Barbacoa del Muerto es una ruta comparada, no una segunda copia de esta ficha.",
  "el-silbador":
    "FRONTERA EDITORIAL: el pájaro de tres silbidos del sur del Tolima no es El Silbón parricida; la masacre de 1950 del libro de 2004 es ficción editorial.",
  "brujas-y-duendes":
    "FRONTERA EDITORIAL: Devia agrupa dos repertorios, pero la ficha no acusa a mujeres reales de pactos demoníacos ni medicaliza a quienes sufren perturbaciones domésticas.",
  "la-tarasca":
    "FRONTERA EDITORIAL: carta, mineralogista, museo y esqueleto de 1825 forman el montaje fantástico de 2004; la homónima provenzal es comparación, no origen probado.",
  "el-chenche":
    "FRONTERA EDITORIAL: Servio Cruz, el Teatro Miramar y la cinta hallada pertenecen a un cuento de 2004; la apariencia de Mohán se compara sin inventar una tradición Chenche independiente.",
  "dioses-lares":
    "FRONTERA EDITORIAL: 'dioses lares' es la analogía romana y cristiana de Mariano Izquierdo Gallo en 1956; no es nombre indígena ni voz compartida por Pijao, Coyaima, Natagaima y Lache.",
};

const locationBySlug = {
  "la-madre-agua":
    "UBICACIÓN: ancla editorial aproximada en Ibagué para el corpus tolimense; Devia habla de lagunas, manantiales y ríos sin fijar un punto único.",
  "la-candileja":
    "UBICACIÓN: ancla editorial aproximada en Ibagué; la figura circula por llanos, montes, ríos, quebradas y caminos de más de una región.",
  "la-muelona":
    "UBICACIÓN: ancla editorial aproximada en El Espinal para los caminos cálidos del Tolima; no señala una aparición histórica concreta.",
  "el-cazador":
    "UBICACIÓN: Roncesvalles es el ancla de la reelaboración literaria de 2004; el Río Grande de Devia no queda identificado como coordenada histórica.",
  "el-tunjo":
    "UBICACIÓN: ancla editorial aproximada en Ibagué; el relato menciona caminos, quebradas, ruinas, ríos y casas abandonadas sin un sitio único.",
  "el-guango":
    "UBICACIÓN: ancla editorial aproximada en Ibagué para un repertorio rural del Tolima; puente y río no están identificados.",
  "el-silbador":
    "UBICACIÓN: ancla editorial aproximada en Chaparral por la atribución al sur del Tolima; no georreferencia la casa de Baltasar.",
  "brujas-y-duendes":
    "UBICACIÓN: ancla editorial aproximada en Ibagué para el corpus regional; Devia habla de veredas, casas y lomas sin sitio comprobado.",
  "la-tarasca":
    "UBICACIÓN: ancla editorial aproximada en Ibagué; la carta de 1825 no funciona como registro cartográfico y MODULEMA solo habla de zonas rurales.",
  "el-chenche":
    "UBICACIÓN: ancla aproximada en Coyaima por el territorio Chenche y el río Magdalena; el cuento no prueba el lugar exacto de la escena.",
  "dioses-lares":
    "UBICACIÓN: ancla aproximada en Natagaima para contextualizar el sur del Tolima; el texto de 1956 mezcla además Huila y el territorio Lache de Boyacá.",
};

export function buildTolimaMixtoResidualEditorialMyth(input) {
  const media = tolimaMixtoResidualMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = tolimaMixtoResidualCategoryBySlug[input.slug];
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
    researchNotes: `${input.researchNotes}\nFUENTES: respaldo, clase y límite en editorial/tolima-mixto-residual/evidence.mjs.\n${boundaryBySlug[input.slug]}\nTAXONOMÍA: se preservan la URL y Andina > Tolima > Mixto sin crear categorías ni etiquetas.\n${locationBySlug[input.slug]}\nIMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad futura en editorial/tolima-mixto-residual/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
