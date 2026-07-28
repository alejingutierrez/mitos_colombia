import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Los antiguos decían que podían ver a la madre de la sal. Aparecía como una mujer pequeña y anciana. Llevaba el cabello recogido en moños que parecían pelotas de sal. Al verla, reconocían que de ella procedía aquello que daba sabor y fuerza a los alimentos.

La narración publicada no cuenta un viaje para buscarla ni una disputa por su posesión. Su centro es el reconocimiento: las personas ven una figura y saben que están ante la madre de una sustancia necesaria.

En Calderas circulaban otros relatos donde bienes esenciales también tenían rostro de mujer. Una anciana guardaba la candela y entregaba apenas restos que se apagaban antes de llegar a las casas. Cuando una niña tomó un tizón grande, la vieja la persiguió. La llama cayó sobre una paja seca y desde allí pudo repartirse a todos.

Otra voz decía que la dueña del fuego huyó con el último palo encendido y se escondió en un río. El humo permitió encontrarlo. Una tercera versión atribuía la candela a María Santísima, quien la sacó de su cuerpo y pidió a una niña conservarla porque nadie podía vivir sin ella.

También María aparece como origen de las semillas. Las sacaba de su vientre y las entregaba para que las personas pudieran mantenerse. Las plantas quedaban como herencia.

La madre de la sal pertenece a este conjunto sin ser idéntica a la vieja de la candela ni a María. La fuente no las fusiona. Las une una forma de contar: sustancias y alimentos no aparecen como cosas sin relación, sino como dones vinculados a cuerpos, mayores y responsabilidades.

La sal se condensa en los moños de la anciana. El fuego debe conservarse y compartirse. Las semillas pasan del vientre a las manos de quienes siembran. Cada bien sostiene la vida de modo distinto y cada relato advierte, por presencia o conflicto, que aquello de lo que depende la comunidad no surge como propiedad aislada.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye el fragmento sobre la madre de la sal a Justo Muse, con Marco Antonio Penkue como intérprete.",
  sourceDetail:
    "La entrada original tiene tres frases y no ofrece acción adicional. Para no inventar una aventura, esta edición la presenta como parte de un ciclo documentado de sustancias necesarias —sal, candela y semillas—, diferenciando expresamente las figuras.",
  editorialDecision:
    "Se conserva como página propia porque el nombre, la imagen corporal y el informante son únicos. El Relato no afirma culto, santuario, receta ni parentesco con otras ancianas; sitúa el fragmento dentro del corpus para que su brevedad no se rellene con folclor genérico.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal no publica otra versión de la madre de la sal. Solo registra que los antiguos veían a una viejita cuyos moños eran pelotas de sal y la reconocían como madre de esa sustancia. No se documentan nombre propio, lugar, petición ni transformación.",
  relationDetail:
    "La anciana del fuego y María dadora de semillas son paralelos del mismo corpus, no variantes de la madre de la sal. La edición las aproxima por la relación con el sustento y mantiene separados sus nombres, acciones e informantes.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Muchas tradiciones personifican alimentos, minerales o fuerzas de cultivo como madres. La comparación ayuda a reconocer una relación de origen y cuidado, pero no autoriza a importar genealogías externas. Aquí la imagen específica son moños convertidos en sal y una memoria atribuida a los antiguos de Calderas.",
  internalDetail:
    "La candela y el origen de las plantas son los paralelos directos: fuego, semillas y sal sostienen la comida. El armadillo de mina ofrece un contraste, porque el oro solo puede tomarse bajo condiciones y con dinero preparado; el sustento se relaciona con reparto, mientras la riqueza introduce otra prueba.",
});

export default defineNasaMyth({
  slug: "la-madre-de-la-sal",
  title: "La madre de la sal",
  mito,
  historia,
  versiones,
  leccion:
    "Los bienes que sostienen la vida merecen memoria, medida y cuidado compartido.",
  similitudes,
  excerpt:
    "Los antiguos veían una anciana cuyos moños eran pelotas de sal y la reconocían como madre de esa sustancia necesaria.",
  seoTitle: "La madre de la sal: relato Nasa",
  seoDescription:
    "Conoce el relato Nasa de la anciana con moños de sal y su relación con otros bienes de vida narrados en Calderas.",
  focusKeywords: [
    "madre de la sal Nasa",
    "mito Nasa de la sal",
    "relatos de Calderas",
    "Justo Muse",
    "bienes de vida Nasa",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "Madre de la Sal", "anciana", "naturaleza", "sabiduría"],
  researchNotes: `NÚCLEO: fragmento único de Justo Muse.
DECISIÓN: contextualizar con candela y semillas sin fusionar personajes.
CAUTELA: no inventar culto, mina o santuario.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
