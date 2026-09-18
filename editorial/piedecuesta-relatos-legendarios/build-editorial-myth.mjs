import bachue from "../myths/bachue.mjs";
import { piedecuestaLegendaryAccountsMedia } from "./media.mjs";
import { piedecuestaLegendaryAccountsCategoryBySlug } from "./universe.mjs";

const sharedHistory = `Este frente revisa las cuatro rutas del sitio que proceden de la primera mitad de la sección Relatos legendarios de Piedecuesta de Literatura folclórica. El Cerro Encantado y La Visita del Libertador remiten a Crónicas y romances, de Vicente Arenas. El Quijote Piedecuestano remite a Estampas de mi tierra. Un Libertador Piedecuestano reproduce una biografía de José María Mantilla publicada por José María Baraya en 1874.

La agrupación editorial de 2016 reúne géneros distintos. Dos textos son romances locales, uno es prosa de ficción histórica y uno es una semblanza militar. La revisión no los uniforma como tradición oral ancestral ni como hechos sobrenaturales. Conserva las URLs y la clasificación territorial del sitio, mientras hace visible la clase de documento en cada ficha.

Los registros bibliográficos respaldan autorías y ediciones. Los estudios históricos aportan contexto sobre Macaregua, Piedecuesta y José María Mantilla. Ninguna de esas fuentes prueba por sí sola a Cantera, Arnefo, Juan de Guarguatí, Celedonio, rituales, etimologías, batallas, banquetes, pasos fantasmales o parentescos atribuidos a Bolívar.

Los textos antiguos contienen lenguaje colonial, racializado, violento y heroico. La página lo atribuye cuando es necesario para analizar la obra, pero no lo adopta como descripción de comunidades negras, indígenas, mujeres o adversarios políticos. Las coordenadas son aproximaciones públicas y no señalan túneles, guacas, casas privadas, campos de batalla o archivos visitables.`;

const sharedVersions = `El Cerro Encantado conserva a Cantera, Bernardino, Arnefo, la huida y la catástrofe como secuencia poética. No convierte la oposición racial del romance en historia demográfica ni presenta el nombre del cerro como etimología comprobada.

El Quijote Piedecuestano conserva el cautiverio de Guarguatí, el traslado hacia Los Santos, la tensión con Celedonio y el homenaje final. Macaregua sí aparece en investigación histórica como cacicazgo Guane; esa coincidencia no valida los Cachimbos, el túnel, las armas, los rituales o el combate inventados por la obra.

La Visita del Libertador mantiene flores, camino, casa, comida, iglesia y memoria de pasos dentro del romance de Arenas. La hipótesis posterior sobre Margarita Camacho permanece separada y atribuida. Un Libertador Piedecuestano, en cambio, se presenta como biografía histórica de Mantilla: no se añaden prodigios y se distinguen hechos, elogios de Baraya e interpolaciones del editor de 2016.

Comparar estas piezas ayuda a reconocer cómo una compilación local mezcla leyenda, romance, ficción histórica y biografía. La semejanza territorial no autoriza a fundir personajes, cronologías, culturas o géneros.`;

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
  return `Ilustración editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje, caminos, arquitectura, vestuario y cultura material de Piedecuesta representados con capas digitales recortadas, bordes limpios, formas mate y superposición plana sin volumen físico; memoria histórica legible y trato digno, sin estereotipos raciales ni violencia gráfica; sin texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Ilustración editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena claramente distinta de la portada, construida con capas digitales recortadas, bordes limpios, formas mate y quilling dibujado selectivo sin volumen físico; memoria sobria, trato digno, sin estereotipos raciales, violencia gráfica, caricatura, texto ni letras, sin fotografía, fibras reales, pliegues reales, grosor de papel, sombras proyectadas, objeto físico, maqueta, diorama, CGI ni render 3D.`;
}

export function buildPiedecuestaLegendaryAccountsEditorialMyth(input) {
  const media = piedecuestaLegendaryAccountsMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath =
    piedecuestaLegendaryAccountsCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase de evidencia y límites en editorial/piedecuesta-relatos-legendarios/evidence.mjs.
FRONTERA EDITORIAL: no se inventan testigos, batallas, parentescos, etimologías, culturas, rituales, itinerarios, apariciones ni archivos.
ATRIBUCIÓN: escenas, fechas, diálogos y juicios proceden de romances, ficción histórica, biografía decimonónica y comentarios editoriales identificados.
UBICACIÓN: coordenadas públicas aproximadas; no identifican túneles, guacas, casas privadas, campos de batalla ni lugares recomendados de exploración.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, ilustración digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, CGI ni render 3D. Trazabilidad en editorial/piedecuesta-relatos-legendarios/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
