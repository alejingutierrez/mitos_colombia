import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Durante una creciente, una niña bajó con el agua. La gente la recogió y un matrimonio asumió su crianza. Tiempo después llegó un sacerdote para celebrar una fiesta y la comunidad se preparó para ir a misa.

La niña quería acompañarlos, pero no tenía vestido. Sus cuidadores salieron sin ella. Impulsada por el deseo de llegar a la celebración, tomó un pañolón viejo y corrió detrás del grupo. Cuando el matrimonio alcanzaba la iglesia, ella llegó a la quebrada Yutuk y allí se transformó en una serpiente.

Su cuerpo era largo como el arco iris y tenía dos orejas semejantes a las de un burro. Se acercó al templo, lo rodeó por completo e introdujo la cabeza por la puerta. Devoró a quienes estaban dentro. Solo dejó salir al matrimonio que la había criado después de que le pidieran esperar. Los dos se marcharon con tristeza.

La serpiente se levantó entonces hacia el cielo para alcanzar a la Virgen. Desde Puelchí salieron dos águilas. Volaron hasta la plaza, mordieron el cuerpo en dos lugares y lo hicieron caer. Un hombre llegó con una mula y trató de despedazar los restos antes de alejarse.

La muerte del gran cuerpo no terminó la amenaza. Aparecieron culebras en distintos lugares. En Ulnengá una de ellas vivía cerca de un chupadero y atacaba a quienes tenían labranzas. Avisaron a un inglés, que llegó con espada. Cortó la cabeza y el rabo, ambos azules. La cabeza voló y cayó en Ulnengá; el rabo terminó en Loto.

El relato conserva una cadena de desplazamientos: la niña viene por el agua, es recibida por una familia, queda excluida por no tener ropa, cruza una quebrada, rodea una iglesia y finalmente se dispersa por el territorio. La transformación no se presenta como simple castigo individual. Deja lugares, olores, colores y nuevas culebras que prolongan el suceso más allá de la fiesta.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye esta narración a Victoriano Piñakué; no registra intérprete en la entrada.",
  sourceDetail:
    "El relato combina creciente, adopción, pobreza, misa, metamorfosis, águilas y topónimos locales. La presencia de iglesia y Virgen muestra una memoria narrativa atravesada por elementos católicos, sin que eso permita clasificarla como simple relato europeo.",
  editorialDecision:
    "La revisión retira adornos añadidos por la ficha anterior y mantiene el orden del testimonio. No convierte a la niña en encarnación del mal ni afirma una moraleja sobre desobediencia: la fuente destaca exclusión, deseo de asistir y transformación territorial.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal publica una sola versión, narrada por Victoriano Piñakué. No se conoce allí el nombre de la niña, del matrimonio ni del inglés. Tampoco se explica por qué la quebrada produce la transformación o por qué las águilas pueden detenerla. Esos silencios se conservan.",
  relationDetail:
    "La entrada se relaciona con “La visita del joven desconocido” por el agua, una joven y un cuerpo extraordinario, y con las petrificaciones de Chautéh y Santo Tomás por la conversión de personas en paisaje. No se fusionan porque sus secuencias y lugares son distintos.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Ovidio reunió relatos donde una persona cambia de forma y deja una huella permanente en el paisaje. La semejanza está en la metamorfosis como explicación territorial; la niña de Yutuk incorpora creciente, misa, desigualdad material, águilas y topónimos que no pertenecen al mundo clásico.",
  internalDetail:
    "En “Formación del río Páez”, el agua persigue a Chautéh y dibuja el cauce; aquí la creciente trae una vida que después se dispersa como culebras. “Las piedras de Chaikin” transforma cuerpos en accidentes visibles. En los tres casos, el territorio conserva memoria de una relación quebrada.",
});

export default defineNasaMyth({
  slug: "la-nina-que-se-volvio-serpiente",
  title: "La niña que se volvió serpiente",
  mito,
  historia,
  versiones,
  leccion:
    "Excluir a quien desea participar puede transformar una herida íntima en peligro colectivo.",
  similitudes,
  excerpt:
    "Una niña llegada con la creciente queda fuera de una fiesta, se vuelve serpiente en Yutuk y deja su huella por el territorio.",
  seoTitle: "La niña que se volvió serpiente: mito Nasa",
  seoDescription:
    "Lee el relato Nasa de la niña llegada por el agua, su transformación en Yutuk y las águilas que enfrentan a la gran serpiente.",
  focusKeywords: [
    "niña serpiente Nasa",
    "mito de Yutuk",
    "serpiente de Tierradentro",
    "relatos Nasa",
    "Victoriano Piñakué",
    "mitología de Calderas",
  ],
  tags: ["Nasa", "serpiente", "transformación", "río", "miedo"],
  researchNotes: `NÚCLEO: una sola versión de Victoriano Piñakué.
CAUTELA: no moralizar como desobediencia ni identificar automáticamente a la niña con una figura externa.
GEOGRAFÍA: se conserva el punto aproximado previo cercano a los topónimos del relato, sin afirmar exactitud.
IMAGEN: se conserva el par publicado y auditado.`,
});
