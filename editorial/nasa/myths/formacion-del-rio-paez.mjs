import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Chautéh caminaba lejos, quizá por el páramo. Tenía mucha sed y no encontraba agua. En medio del monte descubrió un pantano. Cortó un carrizo, lo clavó en el suelo húmedo y absorbió por él. Brotó tanta agua que pudo beber hasta quedar satisfecho.

Al principio el agua no corría hacia ningún lado. Quedó reunida en el mismo lugar. Chautéh retomó el camino y entonces la corriente comenzó a seguirlo.

El caminante se detuvo para mirar. No entendía por qué el agua no permanecía atrás. Avanzó de nuevo y la vio acercarse. Corrió; el agua corrió también. Subió a un árbol para escapar y el caudal se acumuló a sus pies, formando un charco grande que no se desbordaba mientras él permanecía arriba.

Cuando descendió y siguió caminando, el agua reanudó la persecución. Chautéh aceleró. A veces conseguía dejarla un poco atrás y descansaba hasta que el sonido de la corriente volvía a alcanzarlo.

Para ganar tiempo no corrió en línea recta. Trazó vueltas, cambios y zigzags. El agua copió cada movimiento. Por eso, decía la narración, el río tiene tantas curvas al pasar por La Plata.

La carrera continuó hasta que Chautéh ya no pudo sostenerla. Llegó al río grande, el Magdalena, y allí dejó entrar la corriente. El agua que había nacido de un pantano y de la sed encontró finalmente un cauce mayor.

El río Páez quedó como memoria de aquel recorrido. Su nacimiento no es una orden pronunciada desde lejos, sino una relación corporal: un ser sediento abre el pantano, bebe, camina, huye y, sin querer detenerla, guía el agua. Las curvas no son un adorno del paisaje; conservan los giros de la persecución. El encuentro con el Magdalena marca el momento en que el caudal deja de seguir a una sola persona y pasa a formar parte de una red de ríos.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye “Formación del río Páez” a Victoriano Piñakué.",
  sourceDetail:
    "La historia se concentra en acciones precisas: sed, carrizo, pantano, persecución, zigzag, La Plata y desembocadura en el Magdalena. No identifica un punto único de nacimiento ni ofrece coordenadas; el origen narrativo se mueve con Chautéh.",
  editorialDecision:
    "La edición sustituye una geolocalización demasiado amplia por una referencia aproximada a Calderas y conserva La Plata y el Magdalena como lugares mencionados. No convierte el relato en explicación hidrológica ni atribuye a Chautéh una intención creadora que la fuente no declara.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "El artículo de 1953 publica una sola versión de este episodio. La expresión “seguramente por el páramo” ya aparece como incertidumbre en la fuente y se mantiene como tal. No se añaden nombres para el pantano, el carrizo o el árbol, ni se determina una ruta cartográfica exacta.",
  relationDetail:
    "Chautéh también aparece como transformador de personas y animales y como autor de las piedras de Chaikin. Esos relatos amplían su capacidad de alterar el mundo, pero esta página conserva una particularidad: el río nace de la sed y sigue al personaje antes de alcanzar un cauce mayor.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Las Metamorfosis de Ovidio explican fuentes y ríos mediante acciones de seres que pasan a formar parte del paisaje. Aquí no hay una persona convertida en río: el agua se libera, persigue y aprende un trazado con Chautéh. Esa diferencia evita reducir ambos relatos a una fórmula universal.",
  internalDetail:
    "Juan Tama nace del agua y regresa a una laguna; Llíban llega en una creciente; el Trueno habita aguas capaces de llevarse personas. “Formación del río Páez” pertenece a la misma red acuática, pero concentra su relato en movimiento, cansancio y conexión entre el Páez y el Magdalena.",
});

export default defineNasaMyth({
  slug: "formacion-del-rio-paez",
  title: "Formación del río Páez",
  mito,
  historia,
  versiones,
  leccion:
    "El agua abre caminos propios y convierte cada movimiento humano en responsabilidad territorial.",
  similitudes,
  excerpt:
    "Chautéh libera agua para calmar su sed; la corriente lo persigue, copia sus zigzags y termina uniéndose al Magdalena.",
  seoTitle: "Formación del río Páez: mito Nasa",
  seoDescription:
    "Descubre el relato Nasa del río Páez: Chautéh abre un pantano, huye del agua y dibuja con sus giros el cauce hacia el Magdalena.",
  focusKeywords: [
    "formación del río Páez",
    "mito Nasa del río Páez",
    "Chautéh",
    "relatos de Tierradentro",
    "río Magdalena",
    "mitología Nasa",
  ],
  tags: ["Nasa", "Chautéh", "río", "origen del río", "naturaleza"],
  researchNotes: `NÚCLEO: una sola versión de Victoriano Piñakué.
GEOGRAFÍA: Calderas aproximado; La Plata y Magdalena son lugares del relato, no prueba de una ruta exacta.
CAUTELA: no presentar como explicación científica del río.
IMAGEN: se conserva el par publicado y auditado.`,
});
