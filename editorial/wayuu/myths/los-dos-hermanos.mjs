import { defineWayuuMyth } from "../define-editorial-myth.mjs";

const mito = `Una hermana y un hermano practicaban juntos con arco y flecha. Ponían un blanco a distancia y se turnaban. Ella acertaba con mayor frecuencia. Él lo reconocía, aunque en público algunos preferían elogiarlo a él.

La familia cuidaba un rebaño. Un día varios hombres robaron animales y el hermano salió a perseguirlos. La hermana quiso acompañarlo, pero él le pidió quedarse para proteger la casa.

Pasaron las horas. Al anochecer regresaron el perro y la mula sin el joven. La mula llevaba su cuerpo.

La hermana entendió lo ocurrido. Preparó sus armas y siguió las huellas. No buscaba demostrar que podía pelear; buscaba a quienes habían matado a su hermano y se habían llevado los animales.

Llegó al campamento enemigo y esperó. Cuando tuvo una posición favorable, disparó. Su puntería le permitió abatir a varios hombres antes de que supieran de dónde venían las flechas.

La persecución continuó. La hermana no se detuvo al recuperar el ganado. El dolor había cambiado su objetivo: quería que ninguna persona del grupo pudiera responder después. La venganza creció más allá de los responsables inmediatos.

Cuando volvió a la ranchería, llevaba animales y bienes. La familia recibió el cuerpo del hermano y preparó el duelo. Algunos celebraron la habilidad de la joven. Otros miraron el rebaño y preguntaron cuántas nuevas deudas de sangre llegarían con él.

Ella no respondió. Había hecho lo que nadie más se atrevió a hacer, pero la victoria no devolvía a su hermano. La riqueza obtenida pesaba junto a la ausencia.

Durante el velorio, el perro permaneció cerca del chinchorro. La mula descansó después de haber llevado al muerto a casa. La historia recordó su lealtad tanto como las flechas.

Con los días, parientes de ambos lados tuvieron que hablar. Sin mediación, cada muerte podía producir otra. La puntería de la hermana había terminado una persecución, no el conflicto.

Desde entonces, quienes contaban el relato discutían dos verdades al mismo tiempo: una mujer fue la mejor arquera y defendió la memoria de su hermano; su venganza también extendió la violencia hacia personas cuya responsabilidad no estaba clara.`;

const historia = `Chaves atribuye el relato a Ana Isolina Ipuana, transmitido mediante Ana Ofelia Ortiz. La presencia de una informante y una intérprete identificadas no elimina la edición masculina del investigador, pero ayuda a rastrear una cadena distinta de otras piezas del corpus.

La historia combina competencia de tiro, robo de ganado, muerte del hermano, retorno del cuerpo en una mula, venganza de la hermana y adquisición de riqueza. La ficha anterior la llamó un relato simple de “empoderamiento”. Esa etiqueta contemporánea reconoce la capacidad femenina, pero borra el costo de una represalia que, según la versión publicada, alcanza más allá de los autores inmediatos.

El sistema normativo Wayuu aplicado por el Pütchipü’üi busca resolver conflictos mediante palabra, reparación y compensación entre grupos familiares. No insertamos un palabrero dentro de la trama fuente. El diálogo final es una señal editorial que evita presentar la masacre como cierre admirable y conecta el problema con una institución documentada.

La mula y el perro cumplen una función decisiva al devolver el cuerpo. No se interpretan como símbolos universales; son participantes concretos en el reconocimiento de la muerte y el inicio del duelo.

Esta revisión conserva la fuerza de la arquera y, a la vez, pregunta por los límites de la venganza. Admirar su destreza no obliga a celebrar todas sus consecuencias históricas ni sociales posteriores.`;

const versiones = `La edición de 1946 y la reedición de Villa Posse comparten la misma cadena. No se encontró otra versión completa. Se conserva el plural “Los dos hermanos” porque así circula la ficha y porque “hermanos” en español puede incluir a una hermana y un hermano, aunque el título puede ocultar el género de la protagonista.

Algunas síntesis terminan con la mujer rica y victoriosa. La revisión mantiene la adquisición de animales y bienes, pero no la convierte en recompensa moral. En un conflicto entre familias, esos bienes pueden ser también prueba, deuda o causa de otra disputa.

La superioridad de la hermana en el tiro aparece desde el comienzo y prepara el desenlace. No es una habilidad súbita concedida por dolor ni una excepción sobrenatural.

No se fusiona con Kuriruputá. Allí varias hermanas rescatan a un hombre vivo y la familia reconstruye alianzas; aquí el cuerpo regresa muerto y la arquera amplía la represalia. Tampoco se confunde con el sistema normativo contemporáneo: la historia muestra precisamente el riesgo de actuar sin mediación suficiente.`;

const leccion =
  "La capacidad de defender a los propios no vuelve justa toda represalia ni repara por sí sola una pérdida.";

const similitudes = `Kuriruputá ofrece una historia cercana de ganado, ataque y mujeres armadas. Las hermanas intervienen para rescatar y detener la derrota; la arquera de “Los dos hermanos” actúa después de la muerte y cruza el límite entre recuperar y exterminar. El contraste justifica mantener dos páginas.

“El indio guerrero Ipuana” también muestra una espiral en que cada regreso al combate produce una forma más extrema de muerte. Ambas historias pueden leerse junto al sistema de palabra y compensación, no para corregir retroactivamente a los personajes, sino para comprender por qué detener una cadena de venganza exige instituciones.

En epopeyas de otros lugares, una hermana o esposa vengadora suele ser celebrada por adoptar un papel masculino. Aquí no es necesario cambiar su género para reconocer su destreza: ya era la mejor arquera antes del conflicto.

El perro y la mula que devuelven el cuerpo recuerdan relatos donde animales domésticos sostienen la memoria cuando los humanos fallan. La semejanza es funcional y no implica una creencia universal sobre mensajeros de la muerte.`;

export default defineWayuuMyth({
  slug: "los-dos-hermanos",
  title: "Los dos hermanos",
  mito,
  historia,
  versiones,
  leccion,
  similitudes,
  excerpt:
    "Una arquera sigue las huellas de quienes mataron a su hermano, recupera el ganado y descubre que la venganza no termina con el regreso.",
  seoTitle: "Los dos hermanos: la arquera Wayuu",
  seoDescription:
    "Lee el relato Wayuu de la hermana arquera que venga a su hermano, con contexto crítico sobre ganado, duelo, violencia y mediación.",
  focusKeywords: [
    "Los dos hermanos Wayuu",
    "arquera Wayuu",
    "mito de los dos hermanos",
    "venganza Wayuu",
    "Pütchipü’üi",
    "relatos de La Guajira",
  ],
  tags: ["Wayúu", "empoderamiento", "hermana", "héroicos", "venganza"],
  sourceKeys: [
    "chaves1946",
    "villa1993",
    "unescoPalabrero",
    "regimenMacuira",
    "minculturaWayuu",
    "onicWayuu",
  ],
  researchNotes: `CADENA: Ana Isolina Ipuana -> Ana Ofelia Ortiz -> Milcíades Chaves.

NÚCLEO: competencia de arco, robo de ganado, hermano muerto devuelto por mula y perro, venganza de la hermana y bienes recuperados.

CAUTELA: no reducir a “empoderamiento” ni celebrar muertes indiscriminadas; distinguir habilidad, duelo y espiral de represalia.

IMAGEN: se conserva la imagen publicada.

GEOGRAFÍA: punto aproximado en la Alta Guajira; no hay lugar exacto verificable.`,
});
