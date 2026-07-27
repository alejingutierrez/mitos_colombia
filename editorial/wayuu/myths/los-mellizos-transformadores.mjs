import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Manna era hija de Saiñ-Ma, Corazón de la Tierra, y de Mannuuya, Rocío de las Nieblas. Vivía cerca de los morros y del mar en la Alta Guajira.

Simirriúu, uno de los nombres de Juyá, la fecundó mediante una acción que las versiones narran como engaño o encuentro extraordinario. Manna huyó. Atravesó tierras solitarias mientras hablaba con los hijos que llevaba dentro.

Llegó a la casa de Kalamantuunay. La anciana la escondió en una tinaja cuando regresaron sus hijos, hombres-tigre que percibieron un olor extraño. Manna no pudo permanecer oculta.

Los hombres-tigre la mataron y la comieron. Los niños, Tumaju’le y Peeliyuu, sobrevivieron de una manera que el relato describe mediante restos y transformación. Kalamantuunay los encontró y decidió criarlos como nietos, esperando aprovecharse de ellos cuando crecieran.

Los mellizos aprendieron a cazar. Aunque eran pequeños y tenían cuerpos descritos como desproporcionados, superaban a los hombres-tigre por rapidez e ingenio. La paloma Aáner y otras aves les hicieron dudar de la historia que la anciana contaba sobre su origen.

Tumaju’le y Peeliyuu buscaron pruebas. Comprendieron que Kalamantuunay había participado en la muerte de Manna y que sus hijos la habían devorado.

Prepararon una venganza. Engañaron a la anciana, la mataron y cocinaron su cuerpo. Los hombres-tigre comieron sin saber a quién tenían delante. Cuando descubrieron lo ocurrido, persiguieron a los mellizos.

Los niños escaparon mediante transformaciones. Uno se volvió nube para atravesar el peligro. Los perseguidores perdieron su forma y quedaron relacionados con los Wanurü, presencias dañinas que acompañarían el mundo humano.

La victoria no restauró a Manna. Cambió la distribución de seres: dioses, animales, transformadores y fuerzas de muerte quedaron conectados.

En otra versión, uno de los mellizos recibe el nombre de Maleiwa y después crea a los seres humanos. Por eso el ciclo no es una aventura infantil aislada. Explica cómo una generación situada entre dioses y animales hace posible el mundo de las personas.

Tumaju’le y Peeliyuu siguieron recorriendo la península. Transformaron cuerpos, liberaron bienes y establecieron diferencias. Sus acciones no fueron todas benévolas ni todas crueles. El universo que dejaron tampoco quedó dividido en dos bandos simples: junto al creador nacieron fuerzas capaces de destruir.

Los mellizos permanecieron como figuras de paso. No eran todavía humanos comunes, pero acercaron mundos que antes no podían encontrarse.`;

const historia = `Esta página se incorpora porque el ciclo estaba ausente del inventario pese a ocupar un capítulo central de “Mito y cultura guajira”. Finol transcribe dos versiones completas: Ramón Paz Ipuana conserva a Tumaju’le y Peeliyuu; Michel Perrin presenta un ciclo relacionado donde uno de los transformadores es Maleiwa.

Finol identifica al narrador de la versión Paz: Nicanor González, del clan Uliana, nacido en Walerpa’a, Alta Guajira, con cincuenta y cinco años al momento de la grabación. Esa procedencia es más precisa que la disponible para muchas fichas existentes.

El relato contiene fecundación sin consentimiento claro, huida, antropofagia, cuerpos descritos de manera despectiva, matricidio y venganza. La revisión no borra esos elementos, pero evita convertir deformidad física en señal moral y no erotiza a Manna.

Kalamantuunay se relaciona con Chama en glosarios, aunque la versión tiene funciones y familia propias. No fusionamos esta página con “La Chama”: una es ciclo cosmogónico de Manna y los mellizos; la otra desarrolla una relación y una familia en otro relato.

La incorporación no requiere imagen nueva. El diseño público ya ofrece un motivo gráfico cuando image_url es nulo, por lo que se publica sin reutilizar una portada engañosa.

Incluir el ciclo corrige además una desproporción del corpus: hasta ahora existía una ficha de Maleiwa sin la narración que documenta su relación con uno de los transformadores.`;

const versiones = `La versión de Paz Ipuana nombra a Tumaju’le y Peeliyuu, desarrolla extensamente a Manna, Kalamantuunay y los hombres-tigre, y termina vinculando a los perseguidores con Wanurü. Finol advierte la elaboración estética del escritor, pero preserva los datos del narrador.

La versión de Perrin se titula “Maleiwa”. Reduce o transforma participantes y hace que uno de los mellizos sea el demiurgo que luego crea a los hombres. El paso entre mellizos y Maleiwa explica por qué varias fichas antiguas mezclaban creador y transformadores sin distinguir versiones.

Otros repertorios usan Ma’ayüi, Ulápiui, Tumaju’le y Peeliyuu como nombres o sobrenombres. Las ortografías varían y no siempre forman pares idénticos. La página presenta las correspondencias como variantes, no como árbol genealógico definitivo.

“Mareiwa” y “Creación Wayuu” se enlazan con este ciclo, pero no lo absorben. La nueva ficha conserva a Manna y la larga confrontación con Kalamantuunay, ausentes de aquellas síntesis.

La versión de Wolunka con mellizos se trata dentro de “La India Worunka”; compartir protagonistas no vuelve una sola secuencia a todas sus hazañas.`;

const leccion =
  "Transformar el mundo no elimina el daño de origen ni vuelve simple la frontera entre protección y venganza.";

const similitudes = `El Popol Vuh contiene gemelos que enfrentan a seres del inframundo mediante astucia, mueren o cambian de forma y reorganizan el cosmos. El paralelo es fuerte como estructura, pero no existe evidencia de derivación directa y los nombres, parentescos y paisajes son distintos.

Los mellizos de numerosas tradiciones americanas actúan como mediadores entre generaciones divinas y humanas. Comparar el motivo ayuda a reconocer una forma narrativa extendida, no un mito panamericano único.

“Mareiwa” es el vínculo interno principal: la versión Perrin acerca a uno de los transformadores con Maleiwa. La corrección editorial consiste en mantener visibles ambas posibilidades en vez de escoger una identidad oficial.

“La Chama” comparte el nombre Kalamantuunay en algunos glosarios y una familia antropófaga. Esta resonancia puede indicar circulación de personajes entre ciclos, pero las historias publicadas no son intercambiables. “La India Worunka” presenta otra hazaña atribuida a mellizos en versiones distintas, con su propia cadena de transmisión.`;

export default defineWayuuMyth({
  slug: "los-mellizos-transformadores",
  title: "Los mellizos transformadores",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Tumaju’le y Peeliyuu sobreviven a la muerte de Manna, descubren su origen y transforman el mundo tras enfrentar a Kalamantuunay.",
  seoTitle: "Los mellizos transformadores Wayuu",
  seoDescription:
    "Conoce el ciclo Wayuu de Tumaju’le y Peeliyuu: Manna, Kalamantuunay, los hombres-tigre y la relación entre los mellizos y Maleiwa.",
  focusKeywords: [
    "mellizos transformadores Wayuu",
    "Tumaju’le y Peeliyuu",
    "Manna Wayuu",
    "Kalamantuunay",
    "Maleiwa",
    "mitología Wayuu",
  ],
  tags: ["Wayúu", "creación", "sobrenatural", "transformación"],
  sourceKeys: [
    "finol2007",
    "pazIpuana",
    "perrin1980",
    "dictionaryWayuu",
    "minculturaWayuu",
    "onicWayuu",
    "popolVuh",
  ],
  researchNotes: `INCORPORACIÓN: ciclo central ausente del inventario; Finol publica dos versiones completas.

CADENA PRINCIPAL: Nicanor González (Uliana, Walerpa'a) -> Ramón Paz Ipuana -> José Enrique Finol.

NÚCLEO: Manna, huida, Kalamantuunay/hombres-tigre, supervivencia y crianza de mellizos, revelación, venganza, transformaciones y vínculo con Wanurü/Maleiwa.

IMAGEN: nueva página sin image_url; no se generó ni reutilizó una imagen engañosa.

GEOGRAFÍA: punto aproximado en Macuira/Alta Guajira por la procedencia del ciclo; no representa cada lugar sobrenatural.`,
});
