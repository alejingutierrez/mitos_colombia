# Biblia visual V2 · fidelidad cultural y magia situada

> **Documento histórico.** La auditoría del 2026-09-03 demostró que V2 mejora
> la gramática mítica, pero no construye primero un inventario exhaustivo de
> personajes, criaturas, animales y demás entidades. El proceso vigente es
> `docs/biblia-visual-v3.md`; ningún cierre V2 prueba por sí solo cobertura de
> una Biblia completa.

**Estado:** propuesta operativa V2 en revisión antes de preparar la siguiente comunidad.  
**Generación Wayúu:** bloqueada. Este documento no contiene una propuesta visual
Wayúu ni autoriza una imagen de muestra.

La Biblia visual V2 conserva lo mejor del trabajo Muisca —continuidad,
territorio, materialidad, época, deslindes y trazabilidad de archivos— y añade
una capa que la V1 no convirtió en sistema: la lógica extraordinaria propia de
cada mito.

La regla central es un doble umbral no compensable:

> Una imagen no pasa por ser culturalmente fiel si resulta narrativa y
> mágicamente inerte. Tampoco pasa por ser maravillosa si inventa cultura.

## 1. Qué aprendimos al auditar Muisca

El plan Muisca cubre 41 mitos y declara 130 fichas de Biblia: 58 personajes,
36 paisajes y 36 props. También fija época, territorio, paleta, composición,
referencias, tríptico y secuencia de video. Esa estructura produjo una
continuidad excepcional.

La magia sí existe en varias escenas: la luz que las aves llevan en el pico,
los cuerpos que cambian, el agua que guarda una forma o una huella que permanece.
Sin embargo, vive en el campo libre `escena` o `desc`; no tiene entidad propia
en el contrato. El esquema sólo reconoce tres clases de ficha —personaje,
paisaje y prop— y no tiene campos para fuentes, afirmaciones, incertidumbres,
reglas de magia, transformaciones, intensidad ni revisión cultural.

Además, el preámbulo común pedía «menos fantasía». La intención era evitar
fantasía genérica y acabado digital, pero la frase también podía apagar la
maravilla específica del relato. La V2 la reemplaza por una distinción más
precisa: menos épica intercambiable; más magia propia, material y verificable.

### Diagnóstico

| La V1 sí protege | Lo que quedaba sin proteger |
|---|---|
| identidad de personajes | estados y transformaciones de esa identidad |
| objetos y lugares | fuerzas, fenómenos y reglas imposibles |
| época y materiales | cómo la magia altera materia, luz, escala y movimiento |
| referencias entre imágenes | relación entre evidencia y decisión visual |
| deslindes entre ciclos | límites culturales: consultar, contextualizar o no mostrar |
| calidad técnica | asombro, singularidad y fuerza emocional |

Por eso el problema no se corrige añadiendo palabras como «mágico», «místico»
o «épico» al prompt. Se corrige haciendo que la magia tenga investigación,
modelo, continuidad y QA igual que un personaje.

### Comprobación sobre los trípticos terminados

La lectura de tres trípticos Muisca confirma que no se trata sólo de una
ausencia del esquema:

- **Chiminigagua:** la entrada vuelve visible una regla imposible —el aliento
  de un ave abre la luz dentro de la noche— y es una de las imágenes más
  poderosas del conjunto. En el acto y la huella, el mismo aliento se aproxima
  a estelas blancas o una franja abstracta. Faltó un modelo de fenómeno que
  fijara cómo nace, pesa, ilumina, se desplaza y permanece esa luz.
- **Huitaca:** el mundo cotidiano, la materialidad y la atmósfera son sólidos.
  La transformación, en cambio, puede leerse como una textura localizada en un
  brazo y la huella como un búho bajo la luna. Faltó modelar la continuidad
  mujer → umbral → lechuza y la emoción del cambio; la última imagen es bella,
  pero podría pertenecer a otra historia nocturna.
- **Nemequene:** no necesita un efecto sobrenatural. La distancia entre
  personas, la escala de los ejércitos y las líneas que quedan en la tierra
  sostienen la extrañeza y la tensión. Es la razón para conservar el modo
  `none_attested` y no fabricar magia donde el relato no la documenta.

La V2, por tanto, no aumenta indiscriminadamente el espectáculo. Aumenta la
continuidad del prodigio donde existe y la potencia narrativa donde no existe.

## 2. Qué crea ahora una Biblia

La Biblia deja de ser un inventario de sustantivos y pasa a ser un sistema de
identidades, estados y relaciones.

### Capa A · Anclas del mundo

- personajes;
- criaturas y animales;
- objetos y plantas;
- paisajes;
- arquitectura.

Estas fichas responden: **¿qué es y qué no puede cambiar entre escenas?**

### Capa B · Magia situada

- fenómenos: una luz, agua, viento, sombra, sueño o voz que obedece una regla
  particular del mito;
- transformaciones: estado ordinario, umbral, estado manifiesto y consecuencia;
- relaciones imposibles: persona-paisaje, vivo-antepasado, animal-humano,
  objeto-fuerza;
- huellas: lo que queda cuando el prodigio termina.

Estas fichas responden: **¿qué ley del mundo cambia aquí y cómo podemos
reconocerla sin recurrir a fantasía genérica?**

### Capa C · Continuidad expresiva

- gestos rituales públicos y documentados;
- lógica de color y luz por estados;
- reglas de escala y movimiento;
- materiales y comportamiento físico de la maqueta;
- variaciones permitidas y prohibidas;
- motivos que pertenecen al relato, nunca símbolos espirituales inventados.

Estas fichas responden: **¿cómo sigue siendo el mismo mundo cuando cambia el
plano, la hora o la intensidad?**

No todos los mitos necesitan todas las clases. La ausencia también se declara.
Si no hay un hecho sobrenatural documentado, el modo es `none_attested`: la
imagen puede ganar extrañeza mediante escala, silencio, espera, clima o tensión,
pero no inventa un prodigio para cumplir una cuota.

## 3. Investigación antes de dirección de arte

La investigación editorial existente sigue siendo la base: cinco fuentes
útiles y distintas cuando sea posible, con voz comunitaria, fuente primaria o
temprana, investigación académica, fuente territorial y comparación directa.
La V2 añade un **dossier visual**; no vuelve a investigar el mito desde cero,
sino que transforma evidencia editorial en decisiones visibles.

### Paso 0 · Congelar el universo

Antes de buscar imágenes o diseñar personajes se congela:

- lista exacta de mitos;
- fecha y origen del corte;
- variantes que se mantienen separadas;
- orden cosmogónico o narrativo de producción;
- elementos compartidos y deslindes entre ciclos.

Una coincidencia de palabras, región o personaje no incorpora otro relato al
corpus. Tampoco autoriza fusionar variantes de transmisión incompatible.

### Paso 1 · Construir el expediente de fuentes

Cada fuente registra:

- id estable;
- función documental;
- autor o institución y título;
- localizador consultable;
- afirmaciones que respalda;
- limitaciones, intermediaciones o dependencia de otras fuentes.

Cinco páginas que copian una misma cadena cuentan como una transmisión, no
como cinco corroboraciones. Si el mínimo no existe, se registra una carencia
documental; no se rellena con resultados débiles.

### Paso 2 · Matriz de evidencia visual

Cada afirmación que pueda alterar una imagen se marca como:

- `documented_core`;
- `variant`;
- `contemporary_memory`;
- `academic_hypothesis`;
- `editorial_interpretation`;
- `uncertain`.

También recibe sensibilidad:

- `public`;
- `contextual`;
- `consult_required`;
- `do_not_visualize`.

Una lectura editorial debe ser explícita y reversible. Una duda nunca puede
volverse canon visual. Un elemento `do_not_visualize` no entra a un modelo ni a
una escena, aunque sea visualmente atractivo.

### Paso 3 · Revisión cultural

La revisión no se reduce a «¿se parece?». Se pregunta por:

- atribución y nombres;
- usos públicos, restringidos o sensibles;
- territorio, cuerpos, objetos, vestuario y arquitectura;
- posibilidad de representar seres, muertos, sueños o prácticas;
- diferencias entre memoria viva y registro histórico;
- estereotipos que una imagen técnicamente correcta todavía puede activar.

El estado puede ser `pending`, `approved` o `documented_exception`. Una
excepción no finge consulta: explica por qué no se obtuvo, limita el alcance y
declara por lo menos dos salvaguardas. Todo asunto marcado
`consult_required` debe quedar resuelto antes de generar.

## 4. Excavación de la magia propia del mito

Cada relato se reduce primero a una **gramática mítica**, no a un resumen:

1. `ordinary_world`: qué ley parece regir antes del prodigio;
2. `extraordinary_fact`: el hecho imposible exacto;
3. `magic_rule`: cuándo, dónde y sobre quién funciona;
4. `limit_or_cost`: qué no puede hacer o qué exige;
5. `transformation`: qué cambia y qué identidad permanece;
6. `trace`: qué queda en el mundo;
7. `emotional_center`: qué experiencia humana vuelve necesario el prodigio.

Después se construye la **firma de magia**:

- traducción material en papel, fibras, barro, agua, sombra u otro material
  documentado;
- comportamiento de la luz;
- comportamiento de la escala;
- comportamiento del movimiento;
- dos o más rasgos distintivos;
- curva `entrada → acto → huella`;
- prueba de genericidad: por qué la solución dejaría de funcionar si se
  cambiara el nombre del mito.

La magia debe actuar como verbo: abrir, coser, hundir, duplicar, recordar,
volver, pesar, crecer, borrar. Aura, neblina, chispas, runas, ojos luminosos o
cielo estrellado no cuentan por sí solos. Sólo aparecen si la evidencia o la
regla particular los necesita.

## 5. Cómo se crea un modelo

Un modelo no es una ilustración bonita ni un fotograma adelantado. Es un
contrato de continuidad reutilizable.

Cada modelo declara:

- `kind`: qué tipo de elemento es;
- `layer`: `ancla`, `magia` o `continuidad`;
- `introduced_by` y `used_by`: qué mito fija el canon y cuáles lo heredan;
- `evidence_refs`: afirmaciones de la matriz que lo autorizan;
- `invariants`: rasgos que no cambian;
- `allowed_variations`: cámara, luz o desgaste que sí pueden variar;
- `forbidden_variations`: símbolos, adornos, estados o mezclas que lo rompen;
- `views`: las vistas realmente necesarias, con propósito, estado,
  proporción, intensidad mágica y referencias visuales explícitas.

Los modelos viven una sola vez en la biblioteca comunitaria. Cada mito los
cita mediante `model_refs`; si un personaje reaparece, hereda el mismo id en
vez de crear un doble. Esa continuidad no autoriza reciclar escenas: trípticos
y keyframes siguen perteneciendo a un único mito.

### Paquetes mínimos por tipo

| Tipo | Vista canónica | Segunda vista sólo cuando aporta continuidad |
|---|---|---|
| personaje, criatura, animal | cuerpo completo y rasgos legibles | tres cuartos, perfil o estado transformado |
| objeto, planta | forma, material, escala | uso, apertura, desgaste o estado activo |
| paisaje, arquitectura | geografía y relaciones espaciales | otra luz, clima o estado narrativo |
| fenómeno | regla aislada sobre materia simple | umbral, manifestación o disipación |
| transformación | identidad antes del cambio | umbral, estado manifiesto y huella |
| gesto o relación | sujetos y distancia entre ellos | variación necesaria para la acción |

No se generan tres ángulos por rutina. Cada vista debe resolver una futura
duda de continuidad; si no, añade costo y contradicciones.

### Orden de producción V2

1. anclas documentadas;
2. fenómenos y reglas de magia aislados;
3. transformaciones y relaciones entre anclas;
4. estados de lugar, luz y materia;
5. hoja de contacto de toda la Biblia;
6. revisión cultural y de dirección de arte;
7. congelación de ids y hashes;
8. sólo entonces, trípticos;
9. sólo después del tríptico aprobado, keyframes.

La V1 adelantaba todas las fichas libres para aprovechar la cola. La V2 sólo
permite esa optimización después de diseñar relaciones y estados. Una ficha
puede no llevar imagen de referencia, pero nunca puede estar fuera de contexto.

## 6. Arquitectura del prompt

El prompt V2 se ensambla en este orden:

1. técnica física común;
2. época y territorio;
3. límites culturales;
4. gramática mítica;
5. firma material de la magia;
6. función exacta del modelo;
7. invariantes, variaciones y prohibiciones;
8. vista concreta;
9. paleta;
10. prohibiciones técnicas globales.

La técnica es inmersiva, no una fotografía de la maqueta colocada sobre una
mesa. El cielo, suelo, agua o fondo narrativo continúan hasta los cuatro lados.
El prompt y el preflight prohíben borde exterior, base, cartón crudo o
corrugado, mesa, estudio, ciclorama, marco o vacío ajeno a la escena. Esto no
aplasta la técnica: primer plano, plano medio y fondo deben existir como capas
físicas a distintas distancias, con aire, oclusiones, cantos internos y sombras
proyectadas. La cámara está dentro del diorama y recorta su perímetro; el
soporte exterior nunca queda a la vista.

La frase «menos fantasía» se sustituye por:

> Menos épica genérica, pintura digital y fantasía intercambiable; más objeto
> físico. La magia específica del mito debe seguir siendo visible y material.

El modelo no recibe instrucciones vagas como «hazlo más mágico». Recibe qué
ley cambia, en qué material se manifiesta, cómo se mueve, qué intensidad tiene
y qué atajos genéricos están prohibidos.

## 7. QA: dos puertas, no un promedio

### Puerta cultural · todos deben pasar

- cada decisión significativa apunta a evidencia o se marca como editorial;
- no hay afirmaciones inciertas convertidas en imagen;
- no aparece contenido `do_not_visualize`;
- lo sensible fue resuelto o retirado;
- época, territorio, materiales, cuerpo y objetos son coherentes;
- no hay exotización ni símbolos espirituales inventados.

### Puerta de potencia mítica · todos deben pasar

- el hecho imposible se entiende sin leer el prompt;
- la solución tiene por lo menos dos rasgos exclusivos del mito;
- la magia altera materia, luz, escala o movimiento con una regla consistente;
- se percibe la emoción que organiza la escena;
- la imagen no depende de aura, chispas, niebla o grandilocuencia genéricas;
- entrada, acto y huella tienen intensidades distintas;
- al cambiar el nombre de mito/comunidad, la imagen deja de funcionar.

### Escala de revisión

Se puntúan de 0 a 4: fidelidad, especificidad, asombro, emoción, legibilidad,
materialidad y continuidad. Son criterios diagnósticos, no compensatorios:

- fidelidad cultural: mínimo 3;
- especificidad mítica: mínimo 3;
- asombro: mínimo 3 cuando el modo no es `none_attested`;
- ningún hard fail en las dos puertas.

Una imagen técnicamente impecable puede reprobar por tibia. Una imagen
fascinante puede reprobar por falsa.

## 8. Preflight ejecutable

El contrato vive en `scripts/mitos/biblia-v2.mjs`. El preflight no llama a
OpenAI, no lee claves y no escribe archivos.

```bash
# 1. Expediente y gramática mítica
npm run mitos:preflight:biblia -- --plan <plan.json> --stage research

# 2. Sistema visual e inventario de modelos
npm run mitos:preflight:biblia -- --plan <plan.json> --stage design

# 3. Puerta previa a cualquier API de imagen
npm run mitos:preflight:biblia -- --plan <plan.json> --stage generate
```

`generate` falla si:

- `generation_locked` no es `false`;
- el estado no es `approved`;
- falta revisión cultural o excepción documentada;
- queda un asunto sensible sin resolver;
- una duda alimenta un modelo;
- falta un modelo ancla;
- un mito con magia no tiene modelo de capa `magia`;
- la tanda de Biblia no declara `quality: medium`;
- el encuadre no declara `framing: immersive_full_bleed`;
- el acabado no declara `surface_finish: layered_depth_no_exposed_support`;
- falta aprobación editorial con fecha y alcance.

La aprobación es siempre **por tanda y por IDs de modelo**. Un expediente puede
tener asuntos culturales pendientes y, aun así, permitir una tanda de anclas
públicas si cada asunto declara qué modelos mantiene bloqueados y ninguno entra
en `generation_batch.model_ids`. La excepción no abre el resto de la Biblia:
`approval.model_ids` debe coincidir exactamente con la tanda congelada. Una
consulta pendiente sin alcance explícito sigue bloqueando todo.

Las vistas ancla con intensidad `absent` reciben la realidad ordinaria y el
límite del relato, pero no el bloque completo del prodigio. Esto evita que el
primer paisaje, vivienda o planta quede contaminado con auras y transformaciones
antes de haber fijado el mundo material.

## 9. Estado Wayúu

El corpus editorial actual está congelado en 27 mitos. El dossier reúne 16
fuentes funcionales y el diseño declara 58 modelos: dos por mito —ancla y
magia— más cuatro anclas territoriales compartidas. La primera tanda contiene
únicamente esas cuatro anclas públicas de bajo riesgo; personas, seres,
muertos, prácticas rituales, lugares sensibles y patrones permanecen
bloqueados hasta la revisión correspondiente.

La tanda 04, en `medium`, dejó como candidatas de dirección el territorio de
Alta Guajira y la piichipala con profundidad física por capas. Su Macuira se
retuvo porque los cactus se acercaban demasiado a una silueta saguaro. La tanda
05 corrigió Macuira y fijó correctamente la anatomía de flora, pero esta última
quedó demasiado fotográfica. La tanda 06 intentó usarla sólo como referencia
morfológica, pero el envío del archivo local fue bloqueado por privacidad y no
produjo salida. La tanda operativa es ahora
`wayuu-foundation-07-flora-text-only-medium`, que reconstruye la flora como
maqueta de papel 3D exclusivamente desde descripciones textuales documentadas.
Los lotes 01, 02 y 03 son
pruebas rechazadas, no canon:
el primero derivó a botánica norteamericana; el segundo mostró la base y el
borde físico de la maqueta; el tercero corrigió el marco, pero aplanó demasiado
las distancias entre capas. No se ingieren, publican ni usan como referencia.
La corrección botánica incorpora que la iguaraya es el fruto del cardón
guajiro y no una cuarta planta independiente.
