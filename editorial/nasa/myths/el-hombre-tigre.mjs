import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Antes, contaban, había gente tigre. Eran personas capaces de volverse como el tigre de monte que atacaba ovejas.

Un grupo salió con escopetas y perro para cazar a uno de esos animales, pero no consiguió encontrarlo. Entonces invitó a un hombre tigre.

El hombre entró al monte llevando una peinilla. Encontró al tigre verdadero y comenzó a jugar con él. Cuando el animal se enfureció, lo enfrentó y lo mató. El hombre tigre tenía más fuerza porque comía sal.

Dejó el cuerpo sobre el camino y llamó a las demás personas para que fueran a recogerlo. Ellas llegaron con armas. El tigre parecía vivo y regresaron por miedo. El cazador tuvo que asegurarles que estaba muerto antes de que aceptaran acercarse.

La narración decía que los hombres tigre vivían lejos, incluso en Cali, y los relacionaba con personas que robaban. Una variante afirmaba que los ladrones se convertían en tigres para ir por vacas a Garzón y Neiva; al regresar a casa recuperaban forma humana.

Otra historia seguía a un cazador solitario en el páramo. Vio a un Pijao encender fuego desde la axila. El hombre llevaba un bastón de oro. El cazador quiso quitárselo y se transformó en tigre.

Persiguió al dueño del bastón durante horas. Cuando llegaron al poblado Pijao, volvió a ser hombre para observar. Los parientes salieron tras él y tuvo que transformarse otra vez para escapar. Regresó al lugar inicial, tomó en una jigra el plátano asado que había quedado y volvió a su casa. Ya como hombre contó a su mujer lo sucedido.

Las versiones no presentan una sola clase de hombre tigre. Puede ser cazador más fuerte que el animal, ladrón que cambia de forma o perseguidor movido por el deseo de un bastón. La transformación sirve para cazar, robar o huir, y la vuelta a la forma humana restablece la vida doméstica sin borrar lo ocurrido en el monte.`;

const historia = composeNasaHistory({
  informants:
    "Bernal no consigna un nombre individual al final de la entrada, pero distingue una narración principal y una “Versión número 1”.",
  sourceDetail:
    "La fuente utiliza “tigre” en el sentido histórico regional aplicado a grandes felinos y a seres humanos transformados. La revisión conserva la palabra sin decidir una especie zoológica ni representar automáticamente un jaguar moderno.",
  editorialDecision:
    "El nuevo texto separa cazador, ladrones y persecución del bastón. La ficha anterior los mezclaba como una sola aventura heroica. También retira la afirmación de que todas las personas de una ciudad o grupo fueran tigres; conserva esa frase como parte de una voz histórica que exige lectura crítica.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "La narración principal presenta a un hombre tigre que mata a un felino. Una variante resume ladrones transformados para robar ganado. El episodio del páramo introduce a un Pijao, fuego corporal, bastón de oro, persecución y plátano asado. No se aclara si el cazador de la última escena es el mismo del inicio.",
  relationDetail:
    "Juan Chiracol nace de una mujer y un tigre, pero no se transforma ni roba ganado. La página conserva esa diferencia. El hombre y el perro flaco trabaja una aparición corporal, no un cambio voluntario de forma.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Ovidio reúne metamorfosis humanas en animales vinculadas con deseo, castigo o poder. Los hombres tigre comparten el cambio de forma, pero lo insertan en caza, sal, ganado, páramo y relaciones históricas de Tierradentro. No constituyen una versión local de un licántropo europeo.",
  internalDetail:
    "Juan Chiracol se relaciona por su padre tigre y por la defensa territorial. Chautéh explica animales como antiguas personas. La niña serpiente cambia de cuerpo de manera irreversible, mientras los hombres tigre alternan formas y regresan a casa.",
});

export default defineNasaMyth({
  slug: "el-hombre-tigre",
  title: "El hombre tigre",
  mito,
  historia,
  versiones,
  leccion:
    "La fuerza sin medida puede proteger, robar o perseguir según el deseo que la conduzca.",
  similitudes,
  excerpt:
    "Cazadores, ladrones y caminantes se vuelven tigres para enfrentar animales, buscar ganado o perseguir un bastón de oro.",
  seoTitle: "El hombre tigre: versiones del relato Nasa",
  seoDescription:
    "Lee las versiones Nasa del hombre tigre: el cazador del monte, los ladrones de ganado y la persecución de un bastón de oro.",
  focusKeywords: [
    "hombre tigre Nasa",
    "mito Nasa del tigre",
    "transformación en tigre",
    "relatos de Calderas",
    "Juan Chiracol",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "hombre tigre", "tigre", "transformación", "misterio"],
  researchNotes: `NÚCLEO: narración principal, variante de ladrones y episodio del páramo.
CAUTELA: “tigre” se conserva como palabra histórica sin fijar especie.
CAUTELA HISTÓRICA: no generalizar las caracterizaciones sobre Pijaos, blancos o Cali.
GEOGRAFÍA: Calderas aproximado; los viajes a Garzón y Neiva pertenecen a la variante.
IMAGEN: se conserva el par publicado y auditado.`,
});
