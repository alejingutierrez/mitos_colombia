import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Los mayores decían que las semillas habían sido entregadas por María Santísima. Ella las sacaba de su vientre y las daba a las personas para que pudieran mantenerse.

Cada semilla llevaba la posibilidad de una planta y de un alimento futuro. Al pasar del cuerpo de María a las manos de quienes cultivaban, se convertía en herencia. No era suficiente recibirla: había que sembrarla, cuidarla y permitir que volviera a producir.

El relato agrega que María dejó toda clase de semillas cuando estuvo con su hermano. Él también deseaba entregar semillas y animales, pero no podía hacerlo. Esa imposibilidad le produjo rabia. La voz registrada solo sugiere, con duda, que quizá Santo Tomás hizo las culebras.

La incertidumbre importa. El cuento no asegura que toda serpiente proceda de Tomás ni explica cómo las produjo. Distingue el don fértil de María del deseo frustrado de su hermano sin convertir la diferencia en una creación completa de plantas buenas y animales malos.

Otros relatos de Calderas muestran qué ocurre después de recibir semillas. Tomás ordena a Pedro sembrar maíz, pero este pone todos los granos en un solo hueco. Cuando debe desyerbar, corta el cultivo. Tener semilla no garantiza alimento si el trabajo no se hace con cuidado.

La candela completa ese mundo de sustento. Una niña obtiene un tizón para quienes carecen de fuego; otra versión dice que María lo entrega porque nadie puede vivir sin él. La madre de la sal aparece con moños de sal. Semillas, fuego y sal forman un conjunto de bienes necesarios, pero cada historia conserva su propia figura y conflicto.

El origen de las plantas no ocurre en una parcela identificada. Es una entrega que funda responsabilidad. Las semillas salen de un cuerpo, entran en la vida comunitaria y se vuelven herencia solo cuando siguen pasando. La abundancia no se mide por guardarlas, sino por la posibilidad de mantener a otros y de asegurar una nueva cosecha.`;

const historia = composeNasaHistory({
  informants:
    "Bernal introduce la entrada como palabra de “los viejos”, pero no consigna un informante individual ni un intérprete en las últimas líneas del artículo.",
  sourceDetail:
    "El fragmento cierra el corpus de Calderas y combina semillas, María Santísima, su hermano y una atribución dudosa sobre las culebras. El “tal vez” de la fuente se conserva para no transformar una hipótesis oral en afirmación.",
  editorialDecision:
    "La revisión contextualiza el fragmento con las entradas de Pedro y Tomás, la candela y la madre de la sal. No inventa especies, una primera siembra ni una lista de cultivos; las referencias agrícolas actuales se reservan para Historia.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No hay variantes enumeradas. La entrada afirma que María entrega las semillas desde su vientre y que su hermano no logra hacer lo mismo. La posible creación de culebras por Santo Tomás aparece como duda del narrador, no como desenlace comprobado.",
  relationDetail:
    "La candela atribuida a María y la madre de la sal forman un ciclo de bienes de vida. Pedro y Tomás muestran el trabajo posterior de sembrar. Las páginas se relacionan sin fundir a todas las figuras femeninas ni convertir sus relatos en una única cosmogonía.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "El Popol Vuh concede al maíz un lugar decisivo en la formación y sustento de los seres humanos. El relato de Calderas comparte la centralidad de las plantas, pero atribuye las semillas a María y las presenta como herencia corporal. Son soluciones narrativas distintas a una pregunta común sobre alimento y continuidad.",
  internalDetail:
    "La candela permite cocinar y reunirse; la sal completa el alimento; el armadillo de mina come maíz para volverse oro. El origen de las plantas coloca primero el mantenimiento de la vida y ayuda a leer la diferencia entre cultivo, riqueza y posesión.",
});

export default defineNasaMyth({
  slug: "origen-de-las-plantas",
  title: "Origen de las plantas",
  mito,
  historia,
  versiones,
  leccion:
    "La semilla se vuelve herencia cuando se cultiva para sostener a quienes siguen.",
  similitudes,
  excerpt:
    "María Santísima entrega semillas desde su vientre para que las personas puedan mantenerse y las plantas queden como herencia.",
  seoTitle: "Origen de las plantas: relato Nasa",
  seoDescription:
    "Lee el relato Nasa sobre María Santísima, las semillas heredadas y la responsabilidad de cultivar aquello que sostiene a la comunidad.",
  focusKeywords: [
    "origen de las plantas Nasa",
    "semillas en mitología Nasa",
    "María Santísima Calderas",
    "relatos de Tierradentro",
    "maíz Nasa",
    "mitos de origen Colombia",
  ],
  tags: ["Nasa", "María Santísima", "creación", "naturaleza", "mito de creación"],
  researchNotes: `NÚCLEO: fragmento final atribuido genéricamente a los viejos.
CAUTELA: conservar “tal vez” sobre las culebras de Santo Tomás.
DECISIÓN: contextualizar con bienes de vida y trabajo agrícola documentado.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
