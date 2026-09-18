import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Una anciana poseía la candela cuando las demás personas no podían encenderla por sí mismas. Una niña fue a pedirle tizones. La vieja le entregó apenas unos restos encendidos, tan pequeños que se apagaron antes de llegar a casa.

La niña regresó. Esta vez no encontró a la dueña. Dentro había tizones gruesos ardiendo y tomó uno grande. La anciana descubrió lo ocurrido y salió a perseguirla, tratando de recuperar la llama que guardaba.

Cuando estaba a punto de alcanzarla, la niña arrojó el tizón sobre una paja seca y buena para prender. Las personas que vivían sin fuego llegaron al lugar y tomaron candela. El sitio recibió el nombre de Ipikué, Plan de la Candela.

En esos días se estaba formando el pueblo. Sus habitantes acordaron que, si lograban mantener el fuego, lo llamarían Calderas; si no, Buktá. La llama salió y permaneció, y el nombre fue Calderas.

Otra versión decía que la vieja repartía candela hasta que decidió apagarla y dejar a todos sin ella. Conservó un solo palo encendido y huyó. Las personas la siguieron. Cuando estaban cerca, abandonó el tizón junto al camino y se escondió en un río. El humo permitió encontrar la brasa y desde entonces el fuego no volvió a apagarse. El relato creía que aquella mujer era Pijao.

Una tercera voz situaba la historia durante la llegada de la religión. La anciana sacaba fuego de la axila. Los misioneros dijeron que debía bendecirse. Ella escapó, se cubrió de llamas y terminó arrojándose a un río crecido.

Otra narración decía que una niña sin bienes recibió la visita de María Santísima. María pidió chamizas porque sentía frío, sacó la candela de su cuerpo y enseñó a conservarla. El fuego quedó para todos.

Las versiones no coinciden en quién libera la llama ni en la identidad de la dueña. Comparten la necesidad de conservarla y el paso desde una posesión restringida hacia muchas casas.`;

const historia = composeNasaHistory({
  informants:
    "La narración principal procede de Victoriano Piñakué; las tres variantes fueron atribuidas a Vicenta Tumbo, Juan Petins y Agustín Muse.",
  sourceDetail:
    "Es una de las entradas mejor documentadas del corpus por número de voces. Reúne Ipikué, el nombre de Calderas, una dueña Pijao, la llegada de misioneros y María Santísima. Las diferencias reflejan memoria plural, no etapas obligatorias de una sola historia.",
  editorialDecision:
    "La ficha revisada elimina la mezcla que convertía las cuatro voces en una aventura lineal. Mantiene un Relato continuo para lectura, pero introduce cada versión con marcas claras y no decide cuál sería la más antigua o auténtica.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Victoriano Piñakué cuenta el tizón tomado por una niña y el nombre de Calderas. Vicenta Tumbo presenta a una vieja que retira el fuego y es perseguida. Juan Petins relaciona la huida con misioneros y bendición. Agustín Muse atribuye la entrega a María Santísima y a una niña pobre.",
  relationDetail:
    "Cambian donante, receptora, forma de obtener la llama y relación con el río. Coinciden en que la candela no puede quedar inaccesible y en que debe conservarse. La posible condición Pijao de la anciana se atribuye solo a las voces que la mencionan.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Hesíodo cuenta que el fuego llega a los humanos mediante una disputa por su posesión. El paralelo está en que una capacidad necesaria deja de estar monopolizada y acarrea consecuencias. Calderas añade niñas, mujeres, Ipikué, misioneros, río y una pluralidad de versiones que no pertenecen al mito griego.",
  internalDetail:
    "La madre de la sal y María dadora de semillas vinculan otros bienes de sustento con figuras femeninas. El armadillo de mina contrasta la circulación del fuego con una riqueza que exige dinero preparado. En “Los animales”, una brasa de bagazo protege durante la noche y muestra la candela ya integrada a la vida cotidiana.",
});

export default defineNasaMyth({
  slug: "la-candela",
  title: "La candela",
  mito,
  historia,
  versiones,
  leccion:
    "El fuego sostiene a todos cuando deja de ser privilegio y se conserva responsablemente.",
  similitudes,
  excerpt:
    "Cuatro voces cuentan cómo la candela pasó de una anciana o de María Santísima a las casas y dio nombre a Calderas.",
  seoTitle: "La candela: cuatro versiones del mito Nasa",
  seoDescription:
    "Lee las cuatro versiones Nasa de la candela: la niña del tizón, la dueña perseguida, los misioneros y María Santísima.",
  focusKeywords: [
    "La candela mito Nasa",
    "origen del fuego en Calderas",
    "Ipikué",
    "Vieja Candela",
    "relatos de Tierradentro",
    "mitología Nasa",
  ],
  tags: ["Nasa", "fuego", "Vieja Candela", "María Santísima", "origen"],
  researchNotes: `NÚCLEO: entrada principal y tres variantes explícitas.
FUENTES: Victoriano Piñakué, Vicenta Tumbo, Juan Petins y Agustín Muse.
DECISIÓN: no encadenar las versiones como cronología.
GEOGRAFÍA: se conserva Calderas aproximado; Ipikué no se geocodifica.
IMAGEN: se conserva el par publicado y auditado.`,
});
