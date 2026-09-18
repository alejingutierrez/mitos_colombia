import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Dos mujeres caminaban por Chaikin llevando caña. Chautéh las vio pasar y pidió que le regalaran una parte.

Las mujeres no compartieron. Continuaron con su carga sin entregarle caña. Chautéh respondió transformándolas en dos piedras. Desde entonces, las piedras de Chaikin conservaban sus formas y recordaban el encuentro.

La fuente no cuenta una discusión prolongada ni dice que las mujeres supieran quién les pedía. Tampoco explica si la caña era para una fiesta, una venta o el consumo de una familia. Toda la acción se concentra en llevar, pedir, negar y petrificar.

El episodio adquiere profundidad dentro del ciclo de Chautéh. En otra historia, él había hecho animales a partir de antiguas personas: un sacristán se volvió chiguaco, un silbador se convirtió en chicao, una persona habladora en guacharaca y un mentiroso en conejo. Un carpintero logró encerrarlo en un baúl, pero al abrirle huecos le dañó un ojo. Chautéh transformó entonces al artesano en pájaro carpintero.

También se le atribuye el nacimiento del río Páez. Al beber de un pantano liberó agua que lo persiguió, copiando sus giros hasta encontrar el Magdalena. Chautéh cambia cuerpos y paisajes, pero sus transformaciones no tienen una sola causa: pueden surgir del oficio, del engaño, de la sed o de una negativa a compartir.

Las piedras de Chaikin se relacionan además con la casa petrificada de Uikuet. Allí un niño harapiento pidió comida durante una fiesta y fue rechazado; el niño era Santo Tomás y convirtió la casa en roca. Bernal observó que algunas voces identificaban a Chautéh con Santo Tomás.

En Chaikin quedan dos figuras, no una peña anónima. La duplicidad conserva a las dos caminantes y su carga compartida. El relato vuelve visible una pregunta sencilla y difícil: qué ocurre cuando un bien que puede repartirse continúa su camino sin reconocer a quien lo solicita.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye este relato a Victoriano Piñakué y no registra intérprete en la entrada.",
  sourceDetail:
    "La fuente ocupa cuatro líneas y nombra a Chautéh, dos mujeres, la caña y Chaikin. Todo desarrollo adicional de esta edición procede de otras entradas explícitas del mismo ciclo y no se presenta como parte perdida del testimonio.",
  editorialDecision:
    "Se conserva la página por su topónimo y por las dos piedras concretas. Al mismo tiempo se enlaza con Chautéh para evitar que el lector la reciba como fragmento aislado o como leyenda genérica de petrificación.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No hay variantes publicadas del episodio. La fuente no especifica palabras, edades, parentesco ni destino de la caña. La edición evita llenar esos vacíos. La relación con Uikuet es comparativa: en una historia se niega caña a Chautéh y en otra comida a Santo Tomás.",
  relationDetail:
    "Bernal registra una posible identificación entre ambos personajes, pero las entradas conservan nombres separados. Chaikin permanece atribuido a Chautéh; la casa de fiesta, a Santo Tomás.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Las Metamorfosis utilizan la piedra para fijar en el paisaje una ruptura de hospitalidad o una acción violenta. Chaikin comparte ese lenguaje de permanencia, pero se articula con caña, dos caminantes y Chautéh dentro de la memoria territorial de Calderas.",
  internalDetail:
    "Uikuet es el paralelo más cercano por la negativa a compartir. Piedra Alta surge de una palabra entre hermanos, mientras la niña serpiente deja fragmentos distribuidos por lugares. El territorio del corpus conserva relaciones sociales como formas visibles y nombradas.",
});

export default defineNasaMyth({
  slug: "las-piedra-de-chaikin",
  title: "Las piedras de Chaikin",
  mito,
  historia,
  versiones,
  leccion:
    "Negarse a compartir puede dejar una memoria más pesada y duradera que la carga.",
  similitudes,
  excerpt:
    "Dos mujeres que llevan caña niegan una parte a Chautéh y quedan convertidas en las dos piedras de Chaikin.",
  seoTitle: "Las piedras de Chaikin: mito Nasa",
  seoDescription:
    "Conoce el breve relato Nasa de las dos mujeres, la caña negada a Chautéh y las piedras que conservaron el encuentro en Chaikin.",
  focusKeywords: [
    "piedras de Chaikin",
    "Chautéh",
    "mito Nasa de piedra",
    "relatos de Calderas",
    "petrificación Nasa",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "Chautéh", "piedras", "transformación", "moralidad"],
  researchNotes: `NÚCLEO: fragmento único de Victoriano Piñakué.
DECISIÓN: conservar página y conectarla al ciclo Chautéh; no inventar detalles.
GEOGRAFÍA: Chaikin sin geocodificación especulativa; mapa en Calderas.
IMAGEN: se conserva el par publicado y auditado.`,
});
