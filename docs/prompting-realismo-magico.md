# Prompting narrativo: realismo mágico en lo cotidiano

Versión 2 · 2026-09-05. Deriva de la elección de las opciones 1 y 5 de Arámai
y de la corrección posterior: **la cuadrada es síntesis simbólica, no otra escena**.
El inventario y las causas del retrabajo están en
[Aprendizajes e iteraciones de Arámai](./wayuu-tripticos-v1.6-aprendizajes.md).

## Qué se aprende y qué no se convierte en plantilla

En las dos imágenes elegidas, el mundo cotidiano sigue siendo reconocible.
Lo imposible sucede dentro de algo que pertenece a la vida del relato: una
enramada contiene noche a pleno día; un jagüey refleja otra hora y una ausencia.
La magia altera una relación o revela una consecuencia, en lugar de limitarse
a decorar un paisaje. La contradicción debe poder describirse al mirar la imagen.

Esto no significa poner estrellas, espejos o enramadas en todos los mitos.
El principio es reutilizable; el vehículo concreto debe nacer de cada relato.
Tampoco elimina deidades o criaturas cuando la historia las necesita. La
agencia puede ser corporal o no corporal según evidencia y decisión de arte.

## Secuencia de trabajo

Actualización de memoria visual: antes de elegir el ancla y componer, revisar
imágenes actuales e históricas del mismo mito y registrar qué se rescata y qué
se descarta. Este paso forma parte de la Biblia, no de una galería opcional.
Ver [protocolo de memoria visual](./biblia-memoria-visual-v1.md). Una versión
antigua de producción puede inspirar sin ser evidencia histórica cultural.

1. Congelar el relato que acompañará la imagen. Registrar acciones, sujetos,
   destinatarios, consecuencias y procedencia. La Biblia no reemplaza al texto.
2. Fijar primero la función de la pieza: entrada horizontal y acto vertical
   narran; huella cuadrada condensa simbólicamente. Después fijar acción/emoción
   para una escena, o tesis/motivo/operación para el símbolo. No pedir tres escenas.
3. Elegir un ancla cotidiana pertinente: lugar, objeto, gesto o relación.
4. Definir una sola contradicción imposible visible: qué hace ese ancla que
   no podría hacer normalmente. «Más mágico» o «más místico» no basta.
5. Explicar qué cambia esa contradicción para quienes viven el relato y quién
   conserva la agencia. Una petición no debe convertirse accidentalmente en
   un humano lanzando o controlando poderes.
6. Separar lo narrado de la licencia editorial. Una puesta en escena puede
   alterar luz, tiempo, espacio o materia sin atribuir un nuevo rito, símbolo,
   episodio o apariencia canónica a una comunidad.
7. Diseñar cómo se fabrica el imposible con papel: recortes, oclusiones,
   distancias físicas, transparencias, perforaciones o sombras. Debe compartir
   la materia del mundo que transforma.
8. Precisar función temporal: presente, anticipación o memoria. Al pasar una
   idea de entrada a huella, revisar su sentido; no arrastrar una profecía que
   el desenlace no cuenta.
9. Componer en plano abierto cuando el vínculo entre persona, lugar y prodigio
   necesite distancia. Figuras enteras y pequeñas; rostros mínimos. No ampliar
   cabezas para resolver la emoción ni imponer gigantismo como medida de magia.
10. Inspeccionar la imagen antes de consultar el prompt. Nombrar literalmente
    qué se ve y contrastarlo con su función, la anomalía y sus límites. En la
    cuadrada, verificar la metáfora también a tamaño pequeño; no exigir una
    acción humana. Revisar el conjunto: continuidad material y complementariedad.

La aprobación de una dirección permite desarrollarla. No equivale a aprobar
todas sus salidas, publicar, producir otros mitos ni regenerar la Biblia.

## Contrato ejecutable por escena

El campo `magic_in_the_ordinary` tiene:

| Campo | Qué debe precisar |
|---|---|
| `ordinary_anchor` | Qué elemento cotidiano del relato aloja la magia. |
| `impossible_behavior` | Qué comportamiento imposible adquiere. |
| `narrative_effect` | Qué acción o consecuencia humana expresa. |
| `agency` | Quién actúa, quién recibe y qué no controla el humano. |
| `physical_translation` | Cómo se construye con papel y profundidad. |
| `visible_test` | Qué contradicción concreta debe reconocerse en los píxeles. |
| `event_ids` | Acciones de esta misma escena, con procedencia en el expediente. |
| `provenance` | `narrated_fact` o `editorial_metaphor`. |
| `temporal_role` | `present`, `anticipation` o `memory`. |

Los checks verifican que la ficha no esté vacía, que tenga procedencia y que
su magia esté ligada a acciones de la misma escena. No certifican belleza,
fidelidad cultural ni cumplimiento visual. La revisión del editor permanece.

## La cuadrada tiene otra gramática

No es un keyframe del final, un recorte de la horizontal ni un paisaje al que
se le quitaron las personas. Debe tener una tesis legible, un motivo dominante,
una operación visual y una relación precisa con el sentido de este mito.
Puede condensar ausencia, transformación, deuda, origen o límite. No convertir
chinchorros, noches o estrellas de Arámai en receta para otros relatos.

En `story_first_v3_symbolic_huella`, entrada y acto declaran
`visual_function: narrative_scene`; huella declara `symbolic_synthesis` y un
`symbolic_contract` con `thesis`, `carrier`, `operation`, `story_connection`,
`visible_test`. La huella usa materialidad y continuidad propias: no arrastra
reparto, indumentaria ni acciones de las otras piezas. La procedencia completa
queda en el expediente; la imagen no necesita escenificar cada evento enlazado.

## Menos iteraciones: decidir antes de generar

1. Escribir tres frases de intención, una por pieza; detectar funciones duplicadas.
2. Verificar identidad, vestuario, relato y licencia en el expediente, sin
   añadir al prompt entidades que no aparecerán en esa pieza.
3. Comparar el prompt final con lo ya elegido. Preservar archivos escogidos;
   no regenerarlos sólo para uniformar una tanda o cambiarles el nombre.
4. Comprobar contradicciones: figura plana/mundo profundo; símbolo/no escena;
   gran plano/personaje pequeño; agencia autónoma/no efecto desde las manos.
5. Generar una propuesta con una hipótesis clara. Explorar varias alternativas
   sólo cuando se necesita elegir dirección; contarlas aparte de las correcciones.
6. Evaluar función → relato → magia → papel/espacio → detalle. No gastar en
   pulir un detalle de una imagen que falla su función.
7. Una corrección aborda una causa prioritaria, conserva invariantes y tiene
   criterio visible. Si dos correcciones repiten la causa, revisar el brief
   antes de otra llamada; no constituye bloqueo cultural ni exige permiso extra.
8. Registrar imágenes únicas, rondas, alternativas, reuso y decisión del usuario.
   Objetivo de trabajo: una salida inicial y, si hace falta, una corrección
   por pieza con dirección estable. Es una meta, no una garantía ni un límite
   que permita declarar aprobada una salida fallida.

## Personajes y profundidad

Se retira la obligación de construir el rostro con cinco a nueve planos de
mejillas, cejas y nariz. Esa instrucción favoreció cabezas facetadas y aspecto
de animación. La base ahora son recortes casi planos, proporciones naturales
según edad, pocas piezas faciales, ojo mínimo, silueta y postura. En un perfil,
la nariz pertenece al contorno. Una ficha frontal sigue pudiendo ser frontal.

Las prendas conservan su silueta cultural completa y pocos dobleces. El
volumen espacial se construye entre planos del mundo, sin exigir un rostro
volumétrico. El suelo, cielo, plantas y prodigio deben compartir el papel.
Se permiten cantos internos; no base, respaldo, marco, mesa ni cartón exterior.

## Integración y alcance real

- `src/lib/narrative-magic.js`: reglas compartidas, contrato y compositor.
- `scripts/mitos/triptych-story-direction.mjs`: perfil versionado
  `story_first_v2_magic_in_the_ordinary`; exige el contrato por escena y
  comprueba que sus eventos pertenezcan a ella. El perfil V1 se conserva.
- `scripts/mitos/prepare-openai-triptych.mjs`: prepara los perfiles versionados,
  congela relato/plan/prompts y persiste el contrato junto al trabajo.
- `scripts/mitos/art-direction.mjs`: técnica de personajes actualizada para
  fichas, trípticos y keyframes; acepta `narrativeMagic`. Cuando existe ese
  contrato específico, no apila las prescripciones mágicas globales antiguas.
- `scripts/mitos/emit-prompts.mjs` y `prepare-openai-keyframes.mjs`: transmiten
  el campo de escena al compositor compartido.
- `src/lib/image-generation.js`: la regla general llega a prompts de mitos,
  no se impone a banners o taxonomías. Un llamador puede enviar un contrato
  específico con `narrativeMagic`.
- Las fichas de ancla V2 con `magic_intensity: absent` siguen sin añadir
  prodigios. Las fichas mágicas pueden declarar el contrato por vista.

Actualización V1.6: el preparador admite los tres perfiles y conserva los
históricos. `src/lib/triptych-functions.js` comparte la función simbólica con
el compositor general de trípticos; el perfil V3 añade contrato verificable y
aislamiento de instrucciones. No se impone a cualquier imagen cuadrada de
Biblia, taxonomías o sitio, ni a keyframes. El inventario reproducible vive en
`scripts/mitos/audit-triptych-iterations.mjs`.

Esto actualiza el código y la documentación locales para nuevas preparaciones.
No reescribe los prompts congelados, no regenera activos anteriores y no
constituye un despliegue de producción. No todos los manifiestos antiguos
contienen todavía contratos nuevos; no se inventan automáticamente para ellos.

## Calidad y entrega

### Aprendizaje de encuadre: Los dos hermanos y Jirairay

Pedir «gran plano general» junto a una descripción detallada del personaje no
basta: ambas horizontales iniciales ampliaron las figuras. Para escenas que
necesitan distancia, comenzar la descripción con geometría concreta: cámara
lejana y ligeramente elevada, fracción de altura de la persona, espacio que
ocupa el conjunto arquitectónico y áreas vacías de primer plano y cielo. En la
corrección de Jirairay, la mujer pasó de aproximadamente 38% a 13% de la altura
al pedir un séptimo y alejar la enramada. Es una observación de esta iteración,
no garantía de obediencia del modelo ni encuadre obligatorio de toda imagen.

La identidad y los objetos exclusivos deben describirse dentro de su escena;
el contrato compartido guarda sólo invariantes realmente compartidas. Esto
evita anticipar objetos de un momento posterior, como ocurrió con la camisa
del hermano en la primera horizontal de Los dos hermanos. No resolver un
encuadre fallido recortando la imagen: corregir sólo esa orientación y guardar
ambos originales y sus prompts.

Horizontal de tríptico: `high`. Vertical, cuadrada, Biblia y keyframes:
`medium`. En el piloto actual: 1536×864, 864×1536 y 1024×1024 respectivamente,
sin convertir recortes de una pieza en sustitutos de las otras dos.

Registrar archivos reales, tamaño, SHA-256, prompt de origen, modo de generación,
reutilización, descartes y decisión editorial. Generación, selección,
aprobación y publicación son estados diferentes. Mostrar siempre las tres
piezas del tríptico, no sólo un montaje o la horizontal.

## Aprendizaje de Jaichuasay: conexiones que hacen visible la magia

Cuando lo imposible depende de una relación espacial —huellas que pertenecen a
un cuerpo distinto, una sombra con otro dueño, dos ausencias que deben contarse—,
el prompt debe concretar origen, recorrido, punto final y zonas vacías. No basta
nombrar los dos elementos ni pedir que estén cerca.

En la primera vertical de Jaichuasay, pezuñas y pisadas humanas aparecieron como
dos caminos paralelos. La corrección mantuvo un solo rastro, lo detuvo en los
talones y dejó vacío el suelo hacia la casa. Así la transformación se vuelve
legible por una conexión, no por una explicación añadida. Esta regla se aplica
cuando la escena lo necesita: no convertir huellas o sombras en una plantilla
obligatoria para todos los mitos.

Revisar primero la imagen sin leer el prompt. Si falla esa conexión, corregir
sólo la orientación afectada y conservar las otras. Registrar el incumplimiento
real, la instrucción que cambió y el número de imágenes efectivamente generadas.

## Aprendizaje de uso público: valle y mellizos

La composición horizontal debe considerar el título real antes de generar.
«Dejar espacio» no basta si la acción cae todavía en la mitad izquierda. Fijar
un área explícita para personaje, transformación y arquitectura, y dejar el
área de texto sin información narrativa indispensable. En la primera
horizontal de los mellizos, la nube atravesó correctamente la pared pero el
niño quedó grande y dentro del área del título: se corrigió sólo el encuadre.
No trasladar esta reserva de portada a la vertical o al símbolo, cuyas funciones
son distintas. Verificar el resultado en la página, no sólo sobre el original.

Para la cuadrada, comprobar la silueta también como forma abstracta: una espiral
abierta puede parecer una C o un logotipo, como ocurrió en el valle. Si la idea
es una cantidad incompleta, una disposición irregular puede comunicarla mejor
que un anillo. Esta es una cautela de lectura, no prohibición general de curvas.

## Aprendizaje de Mareiwa: distinguir prodigio de materialidad

Un paisaje hecho de papel no es automáticamente una escena de realismo mágico.
En la primera horizontal de Mareiwa, las bandas azules podían leerse como
oleaje normal aunque el prompt dijera que el mar se retiraba. El resultado
mostraba las consecuencias, pero no hacía perceptible lo imposible.

Cuando el prodigio transforma un elemento que ya tiene capas naturales, definir
qué relación física deja de ser normal: qué se levanta, qué permanece conectado,
qué vacío aparece debajo y qué sombra confirma la separación. En este caso la
corrección pide una lámina de mar levantada y conectada al agua distante, con
aire y tierra seca visibles debajo. Es una traducción editorial de la retirada,
no un nuevo episodio atribuido a la fuente. No convertir esta solución en agua
flotante obligatoria para otros mitos.

## Aprendizaje de Jururiana: modelo compartido no significa escena compartida

Inspeccionar el archivo de la selección vigente, no confiar sólo en el ID del
modelo o en una ficha antigua. Un personaje puede reaparecer en varios mitos
y su ficha de estados más reciente incluir utilería de otro episodio. En
Jururiana, la selección global apuntaba a una corrección del lote Umaralá con
burro y un recorrido diferente. Su identidad sigue siendo útil; esos objetos
no pertenecen automáticamente al tríptico de la gran lluvia.

Anotar por separado identidad que se conserva, estados pertinentes, elementos
que no se trasladan y la fuente narrativa objetivo. Los modelos vacíos de
arquitectura tampoco obligan a producir escenas sin personajes cuando la
versión publicada los sitúa allí: declarar esa puesta en escena y su procedencia.

## Aprendizaje de El origen del fuego: no aislar la arquitectura como objeto

Pedir un refugio pequeño, completo y separado del entorno produjo una base de
maqueta bajo él, aunque el prompt prohibía plataformas. La corrección conservó
la acción, pero hizo continuar pared y cubierta fuera del borde derecho y
exigió un mismo terreno entre primer plano, postes y chinchorro. El resultado
eliminó el soporte. La regla útil es continuidad del mundo, no mostrar siempre
el edificio entero ni cortar todas las construcciones por el mismo borde.

La primera horizontal también confirmó que pedir papel en general no basta
para el suelo: definir láminas amplias, juntas irregulares y sombras pequeñas
ayuda a evitar arena fotográfica. No añadir estas juntas a cada objeto ni
convertirlas en perímetro de exhibición. Dos correcciones de horizontal no
justifican regenerar una vertical o una huella que ya funcionan.

## Aprendizaje de La sed de los forasteros: material, no alimento fotografiado

En el símbolo de panela, pedir superficie granular y bordes de alimento hizo
que la primera salida pareciera comida real. La corrección mantuvo la gota
vacía, pero definió la superficie como una lámina amplia de papel ocre y el
espesor como capas físicas con aire y sombra. Nombrar la técnica no compensa
instrucciones de textura que empujan hacia otra materia.

Cuando dos personajes tienen tocados distintos, una gorra necesita distinguir
visera frontal de ala circular; el término genérico de sombrero no asegura la
continuidad. Las cifras de escala son objetivos del prompt, no mediciones del
resultado: registrar la escala observada y comprobar el área real del título.

## Aprendizaje de Worunka: aislar también el resumen narrativo

La primera vertical de subsuelo incorporó tres aves del episodio horizontal.
Aunque su escena no las pedía, el prompt completo sí las mencionaba en el
resumen del mito y en la continuidad común. Es una causa probable de arrastre,
no una explicación demostrable del funcionamiento interno del modelo.

Para nuevas preparaciones, `escenas[acto].narrative_summary` puede delimitar
el episodio que se representa y `escenas[acto].continuity_contract` puede
limitar sus invariantes. El compositor usa esos campos cuando existen; los
planes antiguos conservan el comportamiento previo. El relato íntegro,
eventos y procedencia permanecen en el expediente y sus snapshots: aislar el
prompt no autoriza a cambiar la historia ni ocultar una omisión narrativa.

Revisar el prompt final completo, no sólo `escena`: nombres, criaturas o
utilería pueden filtrarse desde contexto y continuidad. Dos pruebas nuevas
comprueban el aislamiento y rechazan campos propios vacíos. Esto reduce una
fuente de ambigüedad; no garantiza que el generador omita todos los elementos
no pedidos. La corrección de Worunka se comprueba visualmente antes de elegir.
