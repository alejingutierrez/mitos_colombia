import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Al principio, el mundo no estaba terminado. Mma, la Tierra, esperaba bajo el cielo. Juyá recorría grandes distancias llevando la lluvia; el Sol y la Luna marcaban el paso de la claridad y la noche.

Cuando Juyá llegó hasta Mma, el agua entró en la tierra seca. Brotaron plantas y se abrieron lugares donde los animales podían alimentarse. Pero todavía no caminaban los Wayuu sobre la península.

Mareiwa buscó un sitio desde el cual ordenar aquella extensión. Separó agua y suelo, abrió espacio para las plantas y llamó a las aves. Pavas, turpiales y palomas comieron frutos y volaron en distintas direcciones. Las semillas que dejaron a su paso se convirtieron en cardones, iguarayas, tunas y arbustos que podían guardar alimento durante el verano.

Después reunió a quienes serían personas. En una versión, los hizo salir de una gran cavidad de la tierra; en otra, modeló sus cuerpos con barro. No todos recibieron la misma forma de vivir. Mareiwa dio la palabra a los Wayuu y enseñó a reconocer parientes, animales y territorios.

Junto a las piedras de Arachí nombró los clanes. A cada grupo le señaló un lugar y una marca. Los animales también quedaron vinculados a esas diferencias, para que los rebaños y las pertenencias pudieran reconocerse sin confusión.

El mundo, sin embargo, no quedó inmóvil. La lluvia podía faltar y el verano prolongarse. Los seres humanos podían olvidar los acuerdos y abrir conflictos. Mareiwa no retiró esas dificultades. Dejó caminos para resolverlas: la palabra entre familias, la memoria de la madre y del tío materno, la compensación por el daño y el cuidado de los bienes comunes.

Cuando cayó la primera noche después de aquel reparto, cada familia encendió un fuego. Desde un cerro podían verse pequeñas luces separadas por una gran distancia. Entre una y otra quedaban arena, monte y caminos todavía sin huellas.

Juyá volvió a desplazarse sobre el cielo. Donde descargó la lluvia, Mma reverdeció. Las semillas esperaron bajo el suelo en los lugares donde no llovió. Así comenzó una vida hecha de alternancias: agua y sequía, movimiento y permanencia, abundancia y cuidado.

Los mayores dicen que el mundo no se recibió acabado. Cada generación debe aprender otra vez a habitarlo.`;

const historia = `No existe una única “creación Wayuu” que reúna sin fisuras todos los nombres y episodios de la ficha anterior. La tradición publicada ofrece ciclos y versiones: Mareiwa como creador o transformador; Juyá como lluvia móvil; Mma como tierra; nacimientos desde una cavidad, modelado en barro, distribución de clanes y alimentos, y relatos de inundación transmitidos por líneas distintas. Finol muestra que Paz Ipuana y Michel Perrin conservaron versiones diferentes incluso para figuras centrales como Maleiwa y los mellizos transformadores.

La edición anterior unía a Kaí, Kashi, estrellas, un caballo blanco convertido en ancestro de los alijuna, barro, mandamientos, un diluvio y una canoa de piedra como si todos pertenecieran a un solo texto. Esa síntesis no estaba atribuida y borraba las fronteras entre versiones. La presente página conserva un relato compuesto, pero señala su naturaleza: enlaza motivos documentados que coinciden en el origen territorial y social, sin presentar cada detalle como una secuencia antigua única.

Mareiwa tampoco equivale de manera sencilla al Dios cristiano. Pineda registró que algunos hablantes ya usaban su nombre para referirse al dios cristiano, mientras otros testimonios lo vinculaban con lluvia, abundancia, plantas y transformación. El contacto misionero forma parte de la historia de esas equivalencias.

La organización social contemporánea ayuda a leer el relato sin congelarla en el pasado. El sistema normativo Wayuu se articula mediante clanes matrilineales, palabra, reparación y compensación. Esos datos no prueban un “código dado una vez por Mareiwa”; muestran cómo origen, parentesco y convivencia siguen siendo preguntas vivas.`;

const versiones = `Una línea publicada por Chaves hace que Mareiwa retire el mar, distribuya plantas mediante aves y, en Arachí, nombre clanes, entregue animales, compañeras, territorios y marcas. Pineda recogió otra explicación de las aves que dispersan semillas por la península. Ambas versiones comparten la relación entre creación y subsistencia, pero difieren en alcance y detalle.

En los materiales de Paz Ipuana y Perrin aparecen Juyá, Pülowi, Mma, animales-persona y mellizos transformadores dentro de genealogías más complejas. Finol advierte que Paz Ipuana intervino estéticamente sus relatos, mientras Perrin registró textos en wayuunaiki y trabajó con traducciones sucesivas. Ninguna de esas mediaciones vuelve falsa una versión; obliga a nombrarla.

La inundación y la canoa de piedra que ocupaban gran parte de la ficha anterior se conservan como variante documentada por autores del siglo XX, no como cierre necesario de toda cosmogonía Wayuu. Lo mismo ocurre con la creación por barro: aparece en síntesis modernas, pero no debe borrar el nacimiento desde lugares pétreos ni la labor de los transformadores.

Por eso no fusionamos esta página con “Serranías de La Guajira” ni con “Maleiwa”. Aquí se ofrece una puerta de entrada comparada a varios comienzos; las otras páginas desarrollan un relato territorial y una figura divina con sus contradicciones históricas.`;

const leccion =
  "El mundo no llega terminado: vivir en él exige renovar parentescos, acuerdos y cuidados con cada estación.";

const similitudes = `“Serranías de La Guajira” comparte el retiro del mar, la dispersión de frutos y el nombramiento de clanes, pero convierte esos actos en una marcha por lugares concretos. “Maleiwa” reúne relatos sobre el creador y transformador sin pretender que todos describan un solo nacimiento del universo. Las tres páginas pertenecen al mismo campo cosmogónico y se enlazan, aunque mantienen distintas unidades narrativas.

El Popol Vuh también presenta una creación por etapas: seres ensayados, animales, alimentos y generaciones que no alcanzan de inmediato la forma adecuada. La semejanza está en un mundo que se ajusta mediante transformaciones; la diferencia está en las entidades, la materia, la lengua y el paisaje propios del pueblo k’iche’.

Los relatos bíblicos de creación y diluvio influyeron en el vocabulario de misioneros y compiladores de América. Por eso una canoa salvadora o un creador llamado “Dios” no debe aceptarse automáticamente como prueba de un origen cristiano ni, en sentido contrario, como forma prehispánica intacta. La comparación sirve aquí para reconocer posibles traducciones y contactos. El rasgo central de estas versiones Wayuu no es una cronología universal, sino la relación entre lluvia móvil, tierra, clanes y recursos de una península marcada por la sequía.`;

export default defineWayuuMyth({
  slug: "creacion-wayuu",
  title: "Creación Wayuu",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Mareiwa, Juyá y Mma participan en un mundo que nace por etapas: tierra, lluvia, plantas, personas, clanes y acuerdos para convivir.",
  seoTitle: "Creación Wayuu: Mareiwa, Juyá y Mma",
  seoDescription:
    "Conoce versiones de la creación Wayuu: Mareiwa, Juyá, Mma, las plantas del desierto, el origen de los clanes y sus diferencias documentales.",
  focusKeywords: [
    "creación Wayuu",
    "mito de creación Wayuu",
    "Mareiwa",
    "Juyá y Mma",
    "cosmogonía Wayuu",
    "origen de los clanes Wayuu",
  ],
  tags: ["Maleiwa", "Wayúu", "castigo", "creación"],
  sourceKeys: [
    "finol2007",
    "pazIpuana",
    "perrin1980",
    "chaves1946",
    "pineda1950",
    "regimenMacuira",
    "unescoPalabrero",
    "popolVuh",
  ],
  researchNotes: `ESTADO: síntesis editorial explícita de varias líneas documentales; no existe una versión única que reúna todos los episodios de la ficha previa.

NÚCLEO: relación entre lluvia, tierra y vida; acción creadora o transformadora de Mareiwa; distribución de plantas; origen y diferenciación de personas y clanes.

VARIANTES: barro, cavidad pétrea, mellizos transformadores, inundación y canoa pertenecen a versiones distintas. Se retira su falsa continuidad.

DECISIÓN DE FUSIÓN: se mantienen separadas Serranías de La Guajira y Maleiwa porque desarrollan unidades documentales reconocibles.

IMAGEN: se conserva la portada existente; no se generaron imágenes.

GEOGRAFÍA: punto aproximado en la Macuira por su carácter de lugar de origen en memoria Wayuu y fuentes territoriales; la cosmogonía no cabe en una coordenada literal.`,
});
