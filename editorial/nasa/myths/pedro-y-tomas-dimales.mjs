import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Tomás recibía a su hermano Pedro cada vez que llegaba. Pedro decía que quería ayudar en el trabajo y durante algunos días parecía cumplir bien.

Una vez Tomás le encargó sembrar maíz. Pedro abrió un solo hueco y depositó allí toda la semilla. No repartió los granos por la tierra ni preparó otras hileras. La tarea quedó hecha de una manera que impedía la cosecha esperada.

En otra ocasión debía desyerbar el cultivo. En lugar de cortar las hierbas que crecían alrededor, pasó por la labranza cortando el propio maíz. Su ayuda volvió a destruir aquello que debía cuidar.

Pedro se enojó después con Santo Tomás. Fue a buscarlo y le dijo que parecía una piedra. No era una simple comparación: intentaba convertirlo. Tomás era santo y la palabra no produjo el cambio.

Los hermanos aparecen también en pruebas sobre el paisaje. Tomás propuso sacar un río mientras Pedro corría a detenerlo. Cuando se reencontraron, Pedro había reunido el agua en el mar. En los linderos de la Muralla, Pedro señaló unos peñones sobre una Calderas todavía plana; al indicar el punto, surgió Piedra Alta.

Las escenas no ofrecen una sola explicación para Pedro. Puede ejecutar literalmente una orden hasta volverla inútil, destruir por fingida colaboración, manipular el agua o hacer aparecer una peña. Tomás recibe, confía, duda y finalmente resiste el intento de petrificación.

El ciclo tampoco conserva una división completamente estable entre el hermano bueno y el malo. Otra entrada llama pícaro al propio Santo Tomás, capaz de convertir en piedra a quienes murmuran y de hacer temblar la tierra. Bernal observó que, en algunos relatos, el personaje pícaro era Pedro Dimales y no Tomás.

Por eso la historia de los hermanos funciona como juego de contrastes y desplazamientos. Trabajo y daño, cooperación y competencia, palabra y materia cambian de lugar. La labranza revela que ayudar exige comprender la tarea; el intento fallido de petrificar muestra que ninguna palabra posee poder ilimitado.`;

const historia = composeNasaHistory({
  informants:
    "El episodio de trabajo y petrificación fue narrado por Guillermo Guagás; Marco Antonio Penkue actuó como intérprete.",
  sourceDetail:
    "Bernal señala en la introducción que Pedro puede ocupar el papel de pícaro que otras voces asignan a Santo Tomás. Esa observación explica las tensiones del ciclo sin imponer la moral fija de dos hermanos absolutamente opuestos.",
  editorialDecision:
    "La revisión reúne en el Relato las entradas del mar y Piedra Alta para mostrar el ciclo, pero conserva las páginas individuales por sus topónimos e informantes. No agrega castigos ni reconciliaciones posteriores que la fuente no registra.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "La entrada principal presenta tres trabajos: sembrar toda la semilla en un hueco, cortar el maíz al desyerbar e intentar petrificar a Tomás. Otras entradas desplazan la relación hacia una prueba con el río y una aparición de roca. No se especifica un orden biográfico entre estos episodios.",
  relationDetail:
    "La página de Santo Tomás ofrece otra caracterización: hermano de María, peligroso y finalmente encerrado. Esa figura se conecta con Tomás Dimales por el nombre y por las piedras, pero la edición mantiene la incertidumbre que ya reconoce Bernal.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Los relatos de tricksters de muchas tradiciones juegan con órdenes cumplidas de forma literal hasta producir el resultado contrario. La comparación permite reconocer la lógica de la tarea desviada; no convierte a Pedro en equivalente de un personaje universal ni borra la labranza de maíz y los linderos de Calderas.",
  internalDetail:
    "Chautéh también combina daño, engaño y transformación. Santo Tomás castiga con piedra, mientras Pedro fracasa al intentar petrificarlo. El ciclo del fuego ofrece otro problema de reparto y cuidado: una capacidad útil se vuelve peligrosa cuando se acapara o se maneja sin responsabilidad.",
});

export default defineNasaMyth({
  slug: "pedro-y-tomas-dimales",
  title: "Pedro y Tomás Dimales",
  mito,
  historia,
  versiones,
  leccion:
    "Ayudar exige comprender el trabajo, porque obedecer sin cuidado también puede destruirlo.",
  similitudes,
  excerpt:
    "Pedro ofrece ayudar a Tomás, pero siembra todo el maíz en un hueco, corta el cultivo e intenta convertir a su hermano en piedra.",
  seoTitle: "Pedro y Tomás Dimales: relato Nasa",
  seoDescription:
    "Lee el ciclo Nasa de Pedro y Tomás Dimales: trabajos mal hechos, palabras de piedra y pruebas que transforman el paisaje de Calderas.",
  focusKeywords: [
    "Pedro y Tomás Dimales",
    "mito Nasa de los hermanos",
    "relatos de Calderas",
    "Santo Tomás Nasa",
    "Piedra Alta",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "Pedro", "Tomás", "hermanos", "dualidad"],
  researchNotes: `NÚCLEO: entrada de Guillermo Guagás y relación documentada con mar y Piedra Alta.
CAUTELA: no fijar una oposición moral absoluta que la propia introducción de Bernal matiza.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
