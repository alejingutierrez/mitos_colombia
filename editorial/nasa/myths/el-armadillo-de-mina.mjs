import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Un hombre estaba en una casa cuando vio una luz que avanzaba por el monte. Brillaba como una lámpara y su resplandor subía hacia el cielo. Al mirar con cuidado reconoció un armadillo de mina.

No era un animal que pudiera atraparse de cualquier modo. Antes de acercarse había que preparar dinero, cincuenta o cien pesos según la narración, y llevar un pañuelo nuevo. Con la plata lista, la persona podía envolver al armadillo y levantarlo. Entonces se volvía liviano.

Después debía colocarlo dentro de un baúl grande y alimentarlo con maíz. Allí el animal se convertía en mina, en oro puro.

Si quien lo encontraba no llevaba dinero preparado, la aparición cambiaba. El armadillo podía verse junto a una quebrada o en el camino, pero no se dejaba tomar. La persona metía la mano debajo, trataba de levantarlo y descubría que no se movía. El mismo cuerpo que con las condiciones correctas era liviano se volvía imposible de alzar.

La historia no dice que el animal deba matarse ni abrirse. Tampoco ofrece una ruta para buscarlo. Su luz permite verlo, pero la visión por sí sola no concede la riqueza.

Dentro de los relatos de Calderas, el baúl recuerda el cajón donde quedó encerrado Chautéh y las cajas que contienen a Santo Tomás. En esos casos el recipiente limita una fuerza peligrosa; aquí guarda una transformación hacia el oro. El maíz, alimento de la labranza, entra en relación con aquello que promete riqueza.

El dinero previo produce una paradoja. Para obtener el oro ya se necesita disponer de plata y de un objeto nuevo. El relato no garantiza que cualquiera pueda convertir la aparición en mina. Distingue entre ver y poseer, entre desear y estar preparado.

Cuando la luz cruza el monte, el armadillo conserva su condición ambigua: animal, señal y riqueza posible. Solo bajo reglas precisas se deja levantar. Sin ellas permanece pegado al camino, visible pero fuera del alcance.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye el relato a Victoriano Piñakué y no registra intérprete en la entrada.",
  sourceDetail:
    "La fuente conserva cantidades monetarias, pañuelo nuevo, baúl, maíz y diferencia entre liviandad e inmovilidad. Estos detalles sitúan el cuento en una economía histórica concreta y desaconsejan convertirlo en una leyenda abstracta de tesoro.",
  editorialDecision:
    "La revisión elimina escenas mineras, túneles y excavaciones que no aparecen en el testimonio. Mantiene el título histórico y explica que “de mina” designa la cualidad extraordinaria del armadillo narrado, no una especie zoológica.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal publica una sola voz. La entrada distingue dos resultados dentro de la misma narración: con dinero y pañuelo el armadillo puede levantarse y transformarse; sin preparación se vuelve imposible de mover. No se registran nombres, lugar exacto ni éxito posterior del padre.",
  relationDetail:
    "El baúl conecta formalmente con Chautéh y Santo Tomás, pero cumple otra función. El oro recuerda el tiempo en que Llíban fue recogido por médicos y el principal llevaba sombrero de oro. Ninguna fuente dice que ambos oros tengan un origen común.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Los relatos de tesoros encantados suelen imponer condiciones que separan la visión de la posesión. El armadillo comparte esa prueba, pero sus reglas son específicas: dinero preparado, pañuelo nuevo, maíz, baúl y cambio de peso. No se reemplaza por el motivo europeo de un cofre enterrado.",
  internalDetail:
    "La candela también pasa de una posesión limitada a un uso posible bajo condiciones de conservación. El origen de las plantas vincula el maíz y las semillas con el sustento, mientras el armadillo usa maíz para producir oro. El contraste pregunta qué alimenta la vida y qué alimenta el deseo de riqueza.",
});

export default defineNasaMyth({
  slug: "el-armadillo-de-mina",
  title: "El armadillo de mina",
  mito,
  historia,
  versiones,
  leccion:
    "Ver una riqueza no basta; toda posesión exige condiciones, medida y responsabilidad.",
  similitudes,
  excerpt:
    "Un armadillo luminoso puede volverse oro, pero solo se deja levantar con dinero preparado, pañuelo nuevo, maíz y un baúl.",
  seoTitle: "El armadillo de mina: relato Nasa",
  seoDescription:
    "Lee el relato Nasa del armadillo luminoso que puede transformarse en oro y las condiciones necesarias para poder levantarlo.",
  focusKeywords: [
    "armadillo de mina",
    "mito Nasa del oro",
    "relatos de Calderas",
    "armadillo luminoso",
    "Victoriano Piñakué",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "armadillo", "riqueza", "misterio", "transformación"],
  researchNotes: `NÚCLEO: única versión de Victoriano Piñakué.
CAUTELA: no inventar mina física, excavación o especie zoológica.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
