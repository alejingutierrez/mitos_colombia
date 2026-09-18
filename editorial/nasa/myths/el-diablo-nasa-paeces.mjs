import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Un padre regresaba a caballo desde Belalcázar acompañado por un compadre. Detrás venía su hijo. El compadre avanzaba más despacio porque llevaba mucha carga.

Al tomar la bajada de El Tablón vieron aparecer un hombre delante de ellos. Cayó una lluvia breve y una nube comenzó a levantarse. El desconocido corrió sobre un caballo negro de cola corta. Vestía una capa o caucho negro.

El padre siguió hasta la quebrada de El Tablón. Allí el jinete había desaparecido. En la quebrada encontró una puerta e intentó abrirla, pero no pudo. Su caballo tuvo que saltar.

Miró alrededor y buscó huellas. No encontró al hombre, al caballo negro ni un rastro que indicara por dónde habían seguido. Entonces pensó que el jinete era el diablo.

El relato no describe cuernos, fuego ni una conversación. La identificación nace de la desaparición, la puerta cerrada, la falta de huellas y la combinación de nube, negro y velocidad.

En los caminos de Calderas circulaban otras apariciones. El hombre flaco se sentaba junto a la ruta, llevaba luz y protegía a un viajero que iba a caer. Una cabeza sola perseguía a quien la golpeaba y se retiraba cuando cantaba el gallo. Animales invisibles rodeaban a un hombre en la oscuridad hasta que una mujer llegaba con bagazo encendido.

La puerta de El Tablón distingue esta historia. Sugiere un paso que el viajero humano no consigue cruzar. El desconocido entra o desaparece; el padre queda fuera, obligado a continuar sin una explicación verificable.

La experiencia se transmite como recuerdo familiar: el narrador había viajado detrás de su padre y vio la persecución. No afirma haber conocido la identidad del jinete. Conserva el razonamiento del adulto ante una ausencia imposible de rastrear: cuando la quebrada no ofrece camino y la puerta no se abre, queda el nombre del diablo para contar lo que escapó a la vista.`;

const historia = composeNasaHistory({
  informants:
    "Bernal registra la historia como testimonio familiar en primera persona, pero no consigna un nombre de informante al final de la entrada.",
  sourceDetail:
    "Belalcázar, la bajada y la quebrada de El Tablón sitúan el trayecto con más precisión que otros cuentos nocturnos. La fuente no autoriza a localizar la puerta ni a afirmar que exista físicamente hoy.",
  editorialDecision:
    "La revisión retira iconografía demoníaca añadida y conserva la inferencia exacta del narrador: “pensó que era el diablo”. No transforma la sospecha en certeza objetiva ni atribuye al jinete intención de secuestrar o castigar.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No se publica otra versión. La secuencia conserva padre, hijo, compadre, carga, lluvia breve, nube, caballo negro, caucho negro, quebrada, puerta y ausencia de huellas. El título editorial nombra al diablo, pero el cuerpo del testimonio lo presenta como conclusión del viajero.",
  relationDetail:
    "La historia de El Tablón se mantiene separada del dalo, donde el diablo sí lleva garabatos en un camino del más allá. Ambos usan el mismo nombre dentro de escenas y voces diferentes.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "En relatos de muchas regiones, un jinete oscuro desaparece en un cruce, una cueva o un curso de agua y deja al testigo sin huellas. El paralelo se limita a esa estructura. El Tablón, la carga del compadre y la puerta en la quebrada anclan esta narración en un trayecto local.",
  internalDetail:
    "El Trueno también puede aparecer como hombre desconocido y convocar una nube; la diferencia es que se queda bajo la lluvia y lleva personas a una laguna. La cabeza y los animales actúan de noche, mientras el hombre flaco protege. El ciclo no ofrece una única categoría de aparición.",
});

export default defineNasaMyth({
  slug: "el-diablo-nasa-paeces",
  title: "El diablo",
  mito,
  historia,
  versiones,
  leccion:
    "Ante lo inexplicable conviene conservar el testimonio sin convertir la sospecha en certeza.",
  similitudes,
  excerpt:
    "Un jinete negro desaparece en la quebrada de El Tablón sin dejar huellas; el viajero concluye que ha visto al diablo.",
  seoTitle: "El diablo de El Tablón: relato Nasa",
  seoDescription:
    "Lee el relato Nasa del jinete negro que desaparece junto a una puerta en la quebrada de El Tablón sin dejar rastro.",
  focusKeywords: [
    "diablo Nasa",
    "diablo de El Tablón",
    "relatos de Calderas",
    "jinete negro Colombia",
    "encuentros sobrenaturales Nasa",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "diablo", "misterio", "encuentros sobrenaturales", "miedo"],
  researchNotes: `NÚCLEO: testimonio familiar sin informante individual consignado.
CAUTELA: la identidad como diablo es inferencia del padre.
GEOGRAFÍA: mapa en Calderas; no se fija la puerta de El Tablón.
IMAGEN: se conserva el par publicado y auditado.`,
});
