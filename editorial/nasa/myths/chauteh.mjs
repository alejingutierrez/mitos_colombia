import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Chautéh causaba daños y la gente decidió alejarlo hacia donde sale el sol. Antes de su encierro había hecho a los animales a partir de antiguas personas. Cada especie conservó algo de su vida anterior: el chiguaco había sido sacristán y parecía rezar; el chicao venía de alguien que sabía silbar; la guacharaca repetía la voz de una persona muy habladora; el conejo guardaba la astucia de un mentiroso y daba vueltas para escapar del perro.

Un carpintero sabía fabricar baúles tan grandes que una persona podía acostarse dentro. Le dijo a Chautéh que construiría uno para regalárselo. Trabajó con cuidado, terminó el cajón y lo mostró.

Chautéh quiso comprobar si cabía. Entró para medírselo y la tapa se cerró. El carpintero clavó el baúl para que nunca volviera a abrirse. Desde adentro, Chautéh pidió que lo dejaran salir, pero nadie aceptó.

Pidió entonces dos agujeros para mirar. El carpintero tomó el escoplo. El primer hueco quedó bien; en el segundo, la herramienta se desvió y le dañó un ojo. Chautéh comprendió que quedaría tuerto. Declaró que, mientras él permaneciera encerrado, el carpintero estaría condenado a mirar y abrir palos.

El hombre se transformó en pájaro carpintero. Desde entonces perfora troncos, construye allí sus nidos, pone huevos y cría.

Otro episodio atribuye a Chautéh las piedras de Chaikin. Dos mujeres pasaban cargando caña. Él les pidió que compartieran, pero ellas se negaron. Chautéh las convirtió en las dos piedras que seguían marcando el lugar.

Su paso también aparece en el origen del río Páez: abre un pantano para beber y el agua lo persigue hasta formar un cauce. Los relatos no lo ordenan como una biografía única. Lo muestran como ser transformador, peligroso y vulnerable al engaño. Hace animales, piedras y ríos; a la vez, queda atrapado en una caja y pierde un ojo por la acción de un artesano que después tampoco conserva su forma humana.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye el relato de Chautéh y las piedras de Chaikin a Victoriano Piñakué.",
  sourceDetail:
    "La introducción del artículo afirma que Chautéh y Santo Tomás podían identificarse como un solo ser en algunas voces. Las entradas, sin embargo, conservan nombres y episodios diferentes. Esta edición mantiene la relación en Versiones y no borra la especificidad del baúl, el carpintero y los animales.",
  editorialDecision:
    "La ficha anterior añadía monólogos, emociones y paisajes no documentados. La nueva prosa integra únicamente episodios atribuidos a Chautéh, incorpora Chaikin como relato relacionado y reserva el análisis de transformaciones para las secciones documentales.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal no enumera variantes del encierro, pero publica tres episodios separados con Chautéh: el baúl y los animales, la formación del río Páez y las piedras de Chaikin. El Relato los presenta como ciclo sin afirmar que un narrador los contó en ese orden.",
  relationDetail:
    "La posible identificación con Santo Tomás aparece en la nota introductoria del investigador, no como consenso total. Ambos petrifican y quedan encerrados, aunque Chautéh transforma al carpintero y se relaciona directamente con animales y río.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Ovidio conserva ciclos donde una acción explica rasgos de animales, árboles o piedras. La semejanza está en la transformación como memoria visible; Chautéh pertenece a una geografía de Calderas, a oficios como la carpintería y a relaciones con caña, río y pájaros que no proceden de Roma.",
  internalDetail:
    "Santo Tomás también convierte personas en piedra y es recluido en una caja. La niña serpiente cambia de forma junto a una quebrada. El río Páez y Chaikin muestran que los actos de Chautéh quedan inscritos en el paisaje, mientras el pájaro carpintero conserva el oficio y el castigo de su adversario.",
});

export default defineNasaMyth({
  slug: "chauteh",
  title: "Chautéh",
  mito,
  historia,
  versiones,
  leccion:
    "Toda transformación deja obligaciones, incluso para quien cree haber encerrado el peligro.",
  similitudes,
  excerpt:
    "Chautéh transforma personas en animales y piedras, pero un carpintero lo encierra y termina convertido en pájaro.",
  seoTitle: "Chautéh: transformador de los relatos Nasa",
  seoDescription:
    "Lee el ciclo Nasa de Chautéh: creador de animales, prisionero de un baúl, origen del pájaro carpintero y autor de piedras y ríos.",
  focusKeywords: [
    "Chautéh Nasa",
    "mito de Chautéh",
    "pájaro carpintero Nasa",
    "piedras de Chaikin",
    "relatos de Calderas",
    "mitología Nasa",
  ],
  tags: ["Nasa", "Chautéh", "transformación", "piedras", "engaño"],
  researchNotes: `NÚCLEO: ciclo construido con tres entradas de Victoriano Piñakué.
DECISIÓN: Chaikin se relaciona aquí, pero conserva su página y su trazabilidad.
RELACIÓN: posible identificación Chautéh/Santo Tomás solo como observación de Bernal.
GEOGRAFÍA: Calderas aproximado; Chaikin no se geocodifica sin evidencia adicional.
IMAGEN: se conserva el par publicado y auditado.`,
});
