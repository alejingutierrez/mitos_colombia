import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Pedro y Tomás Dimales eran hermanos. Pedro era recordado como el malo y Tomás como el bueno, pero vivían juntos y recorrían el territorio en compañía.

En aquel tiempo Calderas era plano. Los hermanos caminaban por los linderos de la Muralla y no había peñas en el camino. Pedro miró hacia un punto del paisaje y le dijo a Tomás que observara los peñones que se habían formado.

Tomás respondió que eso no podía ser cierto. Conocía la región y sabía que allí no había rocas elevadas. Cuando Pedro señaló el lugar, una gran peña se levantó desde el terreno. Esa era Piedra Alta.

La aparición no queda explicada por excavación, derrumbe o crecimiento lento. Se produce entre una afirmación y una mirada: Pedro nombra lo que todavía no existe, Tomás duda y el paisaje responde.

El episodio pertenece a una serie en la que los hermanos alteran el mundo y el trabajo. En una ocasión Tomás hizo salir un río y Pedro corrió para atajarlo; al final había reunido las aguas en el mar. En otra, Pedro quiso ayudar a sembrar y puso toda la semilla de maíz en un solo hueco. Después recibió la tarea de desyerbar y cortó las plantas. Cuando se enojó con Tomás, le dijo que parecía piedra para convertirlo, pero su palabra no tuvo efecto sobre el hermano.

La peña y el intento fallido muestran dos caras del mismo poder. La palabra de Pedro puede levantar Piedra Alta cuando señala un espacio, pero no domina por completo a Tomás. En otras historias del ciclo, Santo Tomás petrifica a quienes murmuran o niegan alimento y termina encerrado para que no acabe con el mundo.

Piedra Alta queda así como una señal visible de la relación entre los hermanos. No es únicamente una roca mencionada al pasar: guarda el momento en que una superficie plana cambió y una afirmación hizo aparecer una forma que Tomás creía imposible.`;

const historia = composeNasaHistory({
  informants:
    "La entrada fue narrada por Vicente Puchi; Bernal no registra intérprete en esas líneas.",
  sourceDetail:
    "El texto de 1953 es deliberadamente breve y sitúa la acción en los linderos de la Muralla. La versión actual no identifica una formación geológica concreta ni traslada automáticamente el topónimo a un mapa moderno.",
  editorialDecision:
    "Para alcanzar una lectura autosuficiente sin inventar, el Relato incorpora episodios documentados de los mismos hermanos y distingue cada escena. Se conserva Piedra Alta como página propia por su topónimo y por la atribución a Vicente Puchi.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No hay variantes numeradas de Piedra Alta. La única secuencia es diálogo, señalamiento y aparición de la peña. El poder de la palabra reaparece en otras entradas: Pedro intenta petrificar a Tomás sin éxito y Santo Tomás convierte personas y una casa en piedra.",
  relationDetail:
    "La nota introductoria de Bernal acerca a Chautéh y Santo Tomás; “Las piedras de Chaikin” atribuye otra petrificación a Chautéh. La repetición del motivo no autoriza a asignar Piedra Alta a Chautéh ni a fusionar todos los lugares.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "En las Metamorfosis, palabras y decisiones divinas fijan cuerpos y emociones en roca. Piedra Alta comparte la petrificación como huella visible, pero no transforma a una persona: hace surgir una forma del suelo durante un intercambio entre hermanos y en un lindero de Calderas.",
  internalDetail:
    "La casa de Uikuet, las mujeres de Chaikin y las víctimas de Santo Tomás también quedan como piedra. Cada episodio conserva una causa distinta —negación de alimento, negativa a compartir caña, murmuración o señalamiento— y juntos forman una memoria moral inscrita en el paisaje.",
});

export default defineNasaMyth({
  slug: "piedra-alta",
  title: "Piedra Alta",
  mito,
  historia,
  versiones,
  leccion:
    "La palabra transforma el territorio y obliga a responder por aquello que hace visible.",
  similitudes,
  excerpt:
    "Pedro señala un peñón imposible y, ante la duda de Tomás, Piedra Alta se levanta sobre la antigua planicie de Calderas.",
  seoTitle: "Piedra Alta: relato Nasa de Calderas",
  seoDescription:
    "Conoce el relato Nasa de Piedra Alta, la peña que surge cuando Pedro Dimales señala un lugar que Tomás creía completamente plano.",
  focusKeywords: [
    "Piedra Alta Nasa",
    "Pedro Dimales",
    "Tomás Dimales",
    "mitos de piedra Colombia",
    "relatos de Calderas",
    "mitología Nasa",
  ],
  tags: ["Nasa", "piedra", "Pedro", "Tomás", "geografía"],
  researchNotes: `NÚCLEO: única versión de Vicente Puchi.
AMPLIACIÓN: solo mediante episodios documentados del ciclo Pedro/Tomás.
GEOGRAFÍA: Calderas aproximado; no se asigna una roca moderna sin verificación.
IMAGEN: se conserva el par publicado y auditado.`,
});
