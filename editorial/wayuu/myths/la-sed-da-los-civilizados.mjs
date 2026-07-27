import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Dos comerciantes alijuna llegaron a Utta con cargas de panela. Habían cruzado caminos secos y confiaban en vender la mercancía antes de regresar.

El sol subió mientras ellos buscaban agua. Preguntaron en una ranchería, pero los recipientes estaban casi vacíos. Las familias guardaban lo necesario para niños, mayores y animales. Nadie podía prometer que el jagüey resistiría hasta la próxima lluvia.

Los viajeros continuaron. Al principio se rieron de la distancia y del calor. Partieron pedazos de panela para recuperar fuerzas, pero el dulce aumentó la sed. Sus lenguas se hicieron pesadas.

Vieron a varias personas Wayuu avanzar por la misma llanura. Caminaban sin prisa, atentos a sombras, plantas y señales del suelo. Los comerciantes creyeron que aquello demostraba que el agua estaba cerca. Aceleraron, se separaron del camino conocido y perdieron de vista a quienes sabían orientarse.

Cuando el sol empezó a caer, uno de los hombres ya no podía sostener la carga. La dejó sobre la arena. El otro intentó ayudarlo, pero también cayó.

Pidieron agua a la extensión vacía. Nadie respondió.

La noche encontró sus cuerpos inmóviles. La historia dice que se convirtieron en piedra junto con la panela que llevaban. Quienes pasaban después reconocían allí dos figuras detenidas por la sed.

Algunas personas contaron el final como prueba de que el Wayuu estaba hecho para resistir y el alijuna no. Otras veían algo menos orgulloso y más preciso: sobrevivir en La Guajira no depende de una esencia, sino de conocer rutas, aceptar límites, escuchar a quienes habitan el territorio y no confundir mercancía con agua.

Las piedras quedaron en Utta. No celebraban la muerte de los forasteros. Recordaban que el desierto castiga la confianza sin conocimiento y que la hospitalidad tampoco puede producir agua donde ya no la hay.

Cuando alguien llevaba panela por ese camino, el relato volvía a contarse. Lo dulce podía sostener un momento, pero no apagar la sed. El valor de una carga cambiaba frente a una vasija de agua.`;

const historia = `Chaves publicó el relato en 1946 con el título “La sed da a los civilizados”. La expresión contrapone “civilizados” e “indios” y pertenece al lenguaje jerárquico del registro. El propio investigador sostenía una agenda de incorporación nacional y religiosa de los pueblos indígenas. No conservamos esa oposición como verdad del relato.

La escena central sí es clara: dos alijuna transportan panela, se desorientan o agotan, mueren de sed y quedan convertidos en piedra cerca de Utta. La fuente interpreta que los Wayuu poseen una resistencia racial superior. Esa explicación esencialista se reemplaza por una lectura territorial: experiencia, rutas, administración del agua, ritmo de marcha y redes de ayuda influyen en la supervivencia.

La escasez hídrica contemporánea de La Guajira no debe naturalizarse como destino mítico. El territorio es árido, pero el acceso al agua también depende de infraestructura, desigualdad, decisiones públicas y cambios ambientales. Las fuentes institucionales aportan contexto sin convertir el mito en estadística actual.

La revisión ajusta además el título visible a “La sed de los forasteros”. Mantiene el slug histórico para preservar enlaces. “Alijuna” se usa como término relacional para una persona no Wayuu, no como insulto. El relato ya no celebra una muerte intercultural: advierte sobre entrar a un territorio sin conocer sus condiciones.

El cambio de título queda documentado para que la corrección editorial no borre la forma con que la historia fue archivada durante décadas.`;

const versiones = `La edición de Chaves y la reedición de Villa Posse pertenecen a la misma línea. No se halló una segunda versión completa con otros informantes. La ficha debe decirlo en vez de sumar fuentes de contexto como si todas confirmaran la petrificación.

El lugar aparece como Utta. En otras narraciones, Utta también es nombre de un cerro, un pájaro y una figura asociada con la palabra y el origen del Pütchipü’üi. No suponemos que todos esos usos identifiquen exactamente el mismo punto o personaje.

La ficha anterior repetía que “los civilizados” no podían adaptarse y que los Wayuu tenían una resistencia natural. Esta revisión conserva el contraste que mueve la acción —forasteros sin conocimiento frente a habitantes experimentados—, pero retira una biología imaginada.

No se fusiona con “Serranías de La Guajira”. En ambos casos la sed deja cuerpos en el paisaje; sin embargo, uno organiza una migración cosmogónica y el otro narra un encuentro posterior con comerciantes, panela y la categoría alijuna. La repetición del motivo permite enlazarlos sin borrar su historicidad diferente.`;

const leccion =
  "Entrar en un territorio exige escuchar a quienes lo conocen y no confundir mercancía con sustento.";

const similitudes = `“Serranías de La Guajira” presenta viajeros cuyos cuerpos se vuelven cerros después del cansancio, el hambre y la sed. Allí la transformación funda una cartografía; en Utta, dos comerciantes quedan como memoria de un encuentro desigual con el ambiente y sus habitantes.

“La India Worunka” y “El incesto” también fijan cuerpos en piedra. La piedra Wayuu no tiene una traducción única: puede conservar un cambio corporal, una relación prohibida, una marcha o una muerte. Comparar las páginas evita reducir toda metamorfosis a castigo.

Las Metamorfosis de Ovidio ofrecen numerosos cuerpos convertidos en roca para hacer perdurable una pérdida o una acción divina. La semejanza formal no prueba influencia. El episodio de Utta incluye panela, comercio, alijuna y conocimiento del agua, elementos de una historia de contacto propia de La Guajira.

El relato también dialoga con cuentos de viajeros que descubren demasiado tarde que el bien más valioso no es el que transportan. Esa comparación ética ayuda a leer la inversión entre azúcar y agua, pero no debe borrar la crítica al vocabulario colonial con que la narración fue publicada.`;

export default defineWayuuMyth({
  slug: "la-sed-da-los-civilizados",
  title: "La sed de los forasteros",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Dos comerciantes alijuna cargan panela, pierden el camino y descubren que ninguna mercancía sustituye el agua ni el conocimiento del territorio.",
  seoTitle: "La sed de los forasteros: relato Wayuu",
  seoDescription:
    "Lee el relato Wayuu de dos comerciantes muertos de sed en Utta, revisado sin la oposición colonial entre indígenas y “civilizados”.",
  focusKeywords: [
    "La sed de los forasteros",
    "mito Wayuu de la sed",
    "Utta",
    "alijuna",
    "petrificación en La Guajira",
    "relatos Wayuu",
  ],
  tags: ["Marelwa", "Wayúu", "castigo", "transformación"],
  sourceKeys: [
    "chaves1946",
    "villa1993",
    "minculturaWayuu",
    "onicWayuu",
    "macuira",
    "regimenMacuira",
    "ovidMetamorphoses",
  ],
  researchNotes: `NÚCLEO: dos alijuna transportan panela, mueren de sed en Utta y se convierten en piedra.

CORRECCIÓN: título y lectura retiran la jerarquía “civilizado/indio” y la explicación racial de la resistencia.

FUENTES: solo Chaves conserva la secuencia; Villa Posse es reedición. Las demás fuentes contextualizan territorio y no prueban la metamorfosis.

IMAGEN: se conserva la portada existente sin regeneración.

GEOGRAFÍA: punto aproximado en la Alta Guajira; Utta tiene varios usos toponímicos y míticos que no deben colapsarse.`,
});
