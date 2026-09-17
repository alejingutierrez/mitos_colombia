# Carril experimental: stop-motion por interpolación de fotogramas (gpt-image-2.5)

> **⚠ ESTADO AL 16 DE SEPTIEMBRE DE 2026 — CARRIL PARADO, Y ESTO ES UN CUADERNO DE LABORATORIO.**
> El único video producido por aquí (Huitaca v1, §12) fue **rechazado por el usuario el 2026-09-12**
> («actualmente se ve desastroso»): un panel adversarial confirmó **20 defectos con 0 refutados**
> (`content/videos/muiscas/videos/huitaca/qc/panel-resultado.json`). El rediseño que salió de ahí
> está en `stopmotion-v2-rediseno.md`, y **también está parado**: las tres versiones de cadencia del
> experimento E4 (`…/huitaca/v2/reel/reel-E4-a2.mp4`, `-a3.mp4`, `-continuo.mp4`, del 12-sep)
> **llevan cuatro días esperando el veredicto del usuario**, y sin esa elección no se produce
> Huitaca v2 aunque las métricas pasen. **Nada de este documento es el carril de producción del
> canal**: el vigente es Seedance 2.5 por Higgsfield, descrito entero en
> `MANUAL-DE-PRODUCCION.md` §3. Este documento sigue valiendo como **medición** (§1-11, §13-15):
> los números son reales, las recetas no están aprobadas.

**Fecha:** 2026-09-12, con anexos de esa misma noche (§13 commiteado a las 22:08, §14 a las 23:00) y
de la madrugada del 13 (§15, 00:01) · **Estado:**
laboratorio; cinco pruebas de método (§5), un video entero rechazado (§12) y tres carriles sucesivos
(v2 §13, v3 §14, v3.2 §15). NO es el carril de producción.
**Alternativa a:** Seedance 2.5 por Higgsfield (45 cr/clip), el estándar vigente del carril v4.

La idea: en vez de darle un keyframe a un modelo de video y confiar en lo que invente,
**dibujar nosotros todos los fotogramas** con la API de imágenes y montarlos como stop-motion.
El control pasa del modelo de video al guion gráfico: cada fotograma es una imagen que se
puede mirar, rechazar y rehacer por 7 centavos.

## 1. La API, medida (no leída)

| Qué | Dato verificado el 2026-09-12 |
|---|---|
| Modelos vivos | `gpt-image-2.5-sunburst` (edición fiel, el que usamos), `gpt-image-2.5-flare` (mitad de latencia), `gpt-image-2`, `gpt-image-1.5`, `1`, `1-mini` |
| Endpoints | sólo `/v1/images/generations` y `/v1/images/edits`. **No** pasa por Responses ni Batch |
| Tamaños | `WIDTHxHEIGHT` libre: múltiplos de 16, lado ≤ 3840, entre 0,65 y 8,29 Mpx. **`1088x1920` es 9:16 nativo** — se acabó el recorte desde 1024×1536 (el carril viejo tira el **15,6 %** del ancho, ver nota) |
| Calidades | `low, medium, high, xhigh, max, auto` |
| `input_fidelity` | **no existe en 2.5** (sí en 1/1.5). El generador viejo lo manda y se cae al reintento: ruido, no error |
| Tarifas | $5/M tokens de texto, **$8/M de imagen de entrada**, **$30/M de imagen de salida** |
| Coste real 1088×1920 `high` | **$0,056** sin referencias · **$0,069** con dos referencias (las referencias son ~⅕ del recibo) |
| Coste 1088×1920 `low` | $0,0044 (sirve para sondas, no para máster) |
| Latencia | 27-35 s por imagen. Con `--concurrencia 6` no hubo un solo 429 |

**Nota sobre el recorte del carril viejo (corregida el 16-sep).** La versión anterior de esta tabla
decía «el 25 % del encuadre»; el número real es **15,6 %**, y sigue vigente porque el generador no
ha cambiado. `scripts/videos/generate-keyframes.mjs:56` emite los verticales a `1024x1536`
(`SIZES.vertical`) y la línea 242 hace `resize(1080, 1920, { fit: "cover", position: "centre" })`:
`cover` escala por el lado largo (×1,25 → 1280×1920) y recorta **200 px de los 1280 de ancho =
15,625 %**, es decir 160 px de los 1024 originales. Son justo los márgenes laterales que la propia
spec pide proteger. El fondo del asunto está en `MANUAL-DE-PRODUCCION.md` §2.6.

**⚠ Y la zona segura del prompt justifica algo que ya no existe.** El prompt que arma ese mismo
script (línea 68) sigue diciendo que el 15 % inferior queda libre «**allí se sobreimprimen
subtítulos**». Los subtítulos quemados se retiraron por decisión del usuario el 2026-09-09
(`burn_subtitles: false` y `write_srt: false` en todos los planes desde esa fecha; el único
`write_srt: true` que queda es `bochica/plan-v4.json`, anterior y superado). La zona segura puede
quedarse —el encuadre vertical la agradece—, pero **la razón escrita es falsa**; corregirla es un
arreglo de código pendiente, no de este documento.

## 2. El sistema, en el orden en que se ejecuta

```bash
P=content/videos/muiscas/lab-stopmotion/planos/b2a.json
D=content/videos/muiscas/lab-stopmotion/huitaca-b2a/claves-high

node scripts/videos/stopmotion/anclas.mjs      --plano $P --dir $D          # A y B
node scripts/videos/stopmotion/claves.mjs      --plano $P --dir $D --niveles 5   # las poses clave
node scripts/videos/stopmotion/escalera.mjs    --plano $P --dir $D --niveles 5 --concurrencia 6
node scripts/videos/stopmotion/estabilizar.mjs --dir $D --out ../claves-estab --umbral 30 --arriba 60
node scripts/videos/stopmotion/qc.mjs          --dir ../claves-estab
node scripts/videos/stopmotion/montar.mjs      --dir ../claves-estab --out clip.mp4 --img-s 6
```

El **plano** (un JSON por toma) separa lo que nunca cambia de lo único que cambia: `estilo`
(la técnica de la casa), `escena` (el decorado, byte a byte igual en todos los fotogramas),
`invariantes` (lo que hay que repetir para que no se mueva) y `poses` (inicio, claves, fin).
Si el bloque de escena cambia una coma entre fotograma y fotograma, el modelo se toma la
licencia de cambiar la luz — y el clip parpadea.

## 3. Lo que la técnica SÍ hace

- **Conserva el plató.** Pedirle "el mismo plano, sólo cambia el gesto" funciona: piedras,
  bohíos, fogones y cielo vuelven a su sitio. Es lo que hace viable todo lo demás.
- **Interpola de verdad entre dos vecinos.** Dadas dos imágenes cercanas, el fotograma
  intermedio es una pose intermedia real, no una mezcla ni un fundido.
- **Sostiene la identidad.** 33 fotogramas después, la cara, el peinado y las franjas de la
  manta son las mismas. Sunburst cumple lo que promete en cadenas de edición.
- **Cuesta lo que dice el recibo.** 33 fotogramas de 5 s = **$2,26**. Un video de 18 planos a
  esta cadencia ≈ **$41**; a 12-13 img/s (65 fotogramas por plano) ≈ **$80**.

## 4. Lo que NO hace (y costó descubrirlo)

1. **No traslada la figura dentro del plano.** Se le pidió dos veces, con medida explícita
   ("una anchura de hombros más a la izquierda") y con la física dicha ("en la maqueta la
   figura camina sobre el set y el set no se mueve"): devolvió la figura clavada en su sitio.
   Conserva la composición ENTERA, y eso incluye dónde está el personaje.
   **Consecuencia: los planos con viaje —caminatas, marchas, cosas que cruzan el cuadro— no
   salen por aquí.** O se resuelven con recorte alfa y composición en post (§6), o se quedan
   en el carril de Seedance.
2. **No sabe qué es "la mitad" de un gesto.** La bisección pura (A, B y "genera el fotograma
   exactamente intermedio") puso el brazo arriba en el 12% del clip y dejó el 88% restante
   congelado: irregularidad del movimiento **3,06×** el promedio. El modelo no interpola una
   fracción, ejecuta la acción.
   **Solución, y es la de toda la animación: las claves las escribe el animador.** Tres poses
   intermedias descritas a mano ("la mano a la altura de la cintura, el codo despegado, el
   brazo NO llega al pecho") y la bisección sólo rellenando entre claves vecinas.
3. **Cada fotograma se redibuja entero, así que el decorado hierve.** Medido: 1,63 de
   diferencia media de fondo entre fotogramas consecutivos (el umbral de lo invisible está
   sobre 1,5 · 0,3 es ruido de JPEG). Se arregla en post, no en el prompt: mediana de los 33
   fotogramas = plató fijo, y encima sólo la **zona de acción**. Baja a **0,88** con el 19%
   del cuadro vivo, y con `--vida 0.12` el fogón sigue temblando.
4. **La máscara por diferencia fotograma a fotograma no sirve.** El brazo pasaba por delante
   de un muro del mismo tono y la resta no lo veía: el estabilizador le borró el brazo. Hay
   que usar la **unión temporal** (un píxel está vivo si se movió en ALGÚN fotograma) con
   umbral alto y borde engordado.

## 5. Las cinco pruebas (mismo plano, `huitaca-b2a`, 5 s, 1080×1920)

| | Método | Fotogramas | Coste | Irregularidad del movimiento | Deriva de plató |
|---|---|---|---|---|---|
| **P1** | Bisección pura desde A y B | 33 | $2,19 | 3,06× | 2,06 |
| **P2** | 3 poses clave escritas + bisección | 33 | $2,26 | 1,52× | 1,63 |
| **P3** | P2 + plató fijo por mediana | 33 | $0 extra | — | 0,88 |
| **P4** | 4 hojas de 9 poses recortadas + plató fijo | 36 | **$0,53** | 2,81× | **0,00** |
| **P5** | El mismo material de P4, desplazado en el montaje | 36 | $0 extra | igual | **0,00** |

`p3b` es P3 montado a 3 img/s en vez de 6: la cadencia se decide al MONTAR, no al generar.

## 6. Lo que enseñó el caso de Higgsfield / gregschoeninger

Un flujo publicado (Deykhan Ten, VP de Higgsfield) y un prompt de hoja de poses de
gregschoeninger. Lo que dicen, y lo que confirmó o corrigió nuestra medición:

| Ellos | Nosotros |
|---|---|
| **Una imagen MAESTRA manda** sobre identidad, materiales, decorado, cámara y luz | Igual: es lo que sostiene la identidad 36 fotogramas después |
| **Lista de movimientos, uno por línea, de 10 a 36 imágenes** | Confirmado por la vía dura: el modelo no sabe qué es "la mitad" de un gesto, hay que escribirle cada paso |
| **Poses NUMERADAS Y MEDIDAS** ("se inclina unos 5 grados, pivotando sobre la base") | Adoptado: nuestro plan de 36 celdas va en grados y en referencias anatómicas |
| **Anclajes quietos dichos por su nombre** ("el nido de paja y la mesa no se mueven nunca") | Adoptado tal cual como bloque de invariantes |
| **Rejilla a sangre, sin canales, bordes, etiquetas ni números** | Necesario: sin esa frase la hoja sale con marcos y numeritos dibujados |
| **Cadena: cada fotograma editando el anterior** (Flare para ir rápido) | Sirve para gestos cortos; encadenar HOJAS hizo crecer la figura hasta recortarle los pies. Mejor: todas las hojas desde la MISMA maestra, en paralelo (44 s las cuatro) y enlazadas con una nota de continuidad |
| **Montar a 6 fps, sin interpolación** | Coincide con lo que medimos: 6 img/s es la cadencia de trabajo; la decidimos al montar |

Lo que el caso no resuelve y aquí sí: **el decorado**. Sus ejemplos son un huevo en un nido
sobre una mesa; en cuanto el plano tiene plaza, fogones y bohíos, cada celda se redibuja
distinta y el clip salta.

## 7. La hoja de poses, medida

Una llamada de 2160×3840 (el máximo de la API, 8,29 Mpx) con 9 celdas de 720×1280:
**$0,119 la hoja = $0,0133 por pose, 5,2× más barato que fotograma a fotograma**, y 43 s
para nueve poses en vez de nueve esperas de 30 s.

- **Coreografía: la mejor de todas.** Irregularidad 1,29× (la bisección pura: 3,06×). Las
  nueve poses nacen de una sola pasada y el gesto se reparte solo.
- **Registro: el peor de todos.** Deriva de plató 4,85. El modelo redibuja el decorado en
  cada celda: los bohíos cambian de sitio y de tamaño.
- **Alinear no lo arregla.** Se probó con búsqueda de escala y desplazamiento sobre las
  franjas donde no está la figura (`alinear.mjs`): el residuo crece de 3,5 a 12 celda a
  celda. Las celdas no se relacionan por una transformación, son dibujos distintos.

## 8. La salida: hoja RECORTADA sobre plató fijo

Si el problema es el decorado, que el modelo no dibuje decorado. `background: "transparent"`
y las nueve celdas salen con la figura sola sobre alfa limpio. Entonces:

1. **Plató**: una sola imagen, el plano vacío sin la figura ($0,053, una vez por plano).
2. **Poses**: 4 hojas de 9 recortes, todas desde la misma maestra, en paralelo ($0,48).
3. **Composición** (`componer.mjs`): cada recorte se normaliza por su caja alfa —misma altura,
   pies en la misma línea— y se pega sobre el plató con una sombra de contacto. El ancla
   horizontal es el centroide del tercio inferior de la silueta (las piernas): con el centro
   de la caja, al extender el brazo la figura se iría hacia el otro lado.

Resultado: **deriva de plató 0,00 por construcción** —es literalmente la misma imagen de
fondo— y **$0,53 el clip de 5 s**, cuatro veces más barato que la escalera. Y de regalo,
el límite que parecía insalvable: si la figura va suelta, **el desplazamiento lo decide el
montaje**. `p5` es exactamente el mismo material que `p4` cruzando el cuadro.

Lo que queda pendiente en este camino: las costuras entre hojas (los saltos en f8→f9,
f17→f18 y f26→f27 son el doble del movimiento medio, aun con la nota de continuidad) y que
la luz del recorte encaje con la del plató cuando el plano tenga fuego cerca de la figura.

## 9. Lo que falta antes de que esto sea un carril

- **Costuras entre hojas**: solapar una celda entre hoja y hoja, o generar las 36 poses en
  una sola hoja de 6×6 (celdas de 360×640, habría que ver si aguantan el subido a 1080).
- **Cámara en post**: generar a 1440×2560 y hacer el push-in recortando, en vez de pedirle
  movimiento de cámara al modelo.
- **12-13 img/s**: hoy el techo probado son 6,6 (33 fotogramas). Subir un nivel son 65
  fotogramas, ~$4,4 por plano. Falta ver si a 6 img/s el pulso ya es suficiente.
- **Fuego y agua vivos**: la mediana los congela; hoy se recuperan con `--vida`, que es un
  cañón. Mejor: una segunda zona "siempre viva" dibujada a mano por plano.
- **Comparar contra el estándar**: el mismo plano hecho con Seedance 2.5 al lado, para que la
  decisión no sea de fe.

Guion, prompts y fotogramas: `content/videos/muiscas/lab-stopmotion/`.
El libro mayor de gasto real por imagen: `content/videos/muiscas/lab-stopmotion/ledger.jsonl`.

## 10. Las dos etapas: plancha de planificación → hojas de producción (idea del usuario)

La hipótesis: el modelo entiende mejor una acción cuando la ve ENTERA en una imagen, así que
primero se le pide una **plancha de planificación** —las 36 poses en miniatura, figura sola
sobre gris, 9 columnas × 4 filas, $0,106— y después cada hoja de producción copia de ella el
reparto del gesto. Confirmada y medida:

| Ruta (36 fotogramas, 5 s) | Coste | Irregularidad | Deriva | Resolución de celda |
|---|---|---|---|---|
| 4 hojas 3×3, sin plan | $0,53 | 2,81× | 0,00 | 720×1280 subida a 1080 |
| 4 hojas 3×3, guiadas por la plancha | $0,64 | 2,62× | 0,00 | 720×1280 subida |
| + 3 puentes en las costuras | $0,84 | 2,19× | 0,00 | 720×1280 subida |
| **9 hojas 2×2 guiadas + 3 puentes** | **$1,47** | **1,68×** | **0,00** | **1080×1920 NATIVA** |
| 36 fotogramas individuales | ~$2,5 | — | 0,00 | 1088×1920, figura más grande |

Tres cosas que salieron de aquí:

1. **La plancha arregla el reparto dentro de cada hoja.** Con ella, todos los pasos internos
   quedan por debajo de 3,0 y los ÚNICOS saltos que sobreviven son las costuras entre hojas.
   La tira que ve cada hoja se recorta de la plancha (`tira.mjs`): así no hay que fiarse de que
   el modelo cuente celdas en una rejilla ajena.
2. **La costura se repara, no se rehace.** `qc.mjs` dice dónde salta, `puente.mjs` genera el
   fotograma intermedio entre esos dos vecinos por $0,065 y renumera. Tres puentes bajaron la
   irregularidad de 2,62× a 2,19×.
3. **El tamaño de la rejilla es una decisión de CALIDAD, no de coste.** La API da 8,29 Mpx por
   llamada, se repartan como se repartan: una hoja de 2×2 son cuatro celdas de 1080×1920
   NATIVAS —exactamente la resolución de entrega— por $0,031 la pose. La de 3×3 sale a $0,013
   pero cada celda es 720×1280 y hay que subirla: la piel se alisa y el pelo de papel pierde
   los cortes. A tamaño real la diferencia canta (`detalle-3x3-vs-2x2-vs-individual.jpg`).
   El fotograma individual sólo gana porque encuadra a la figura más grande.

**Receta vigente del carril, por plano de 5 s (~$1,5; ≈$26 el video de 18 planos):**

```bash
node scripts/videos/stopmotion/anclas.mjs      --plano $P --dir $D --solo a      # maestra
node scripts/videos/stopmotion/plancha.mjs     --plano $P --master $D/A.jpg --out $D/plancha
node scripts/videos/stopmotion/tira.mjs        --plancha $D/plancha/plancha.png --desde N --hasta N+4 --out tN.png
node scripts/videos/stopmotion/hoja-poses.mjs  --plano $P --master A.jpg --plan tN.png --recorte --filas 2 --cols 2 --desde N --hasta N+4
node scripts/videos/stopmotion/img.mjs         --ref A.jpg --prompt "…mismo plano sin la figura…"   # plató
node scripts/videos/stopmotion/qc.mjs          --dir <compuesto>                                    # dónde salta
node scripts/videos/stopmotion/puente.mjs      --plano $P --dir <recortes> --out <con-puentes> --entre 19,23,31
node scripts/videos/stopmotion/componer.mjs    --plato plato.jpg --recortes <con-puentes> --out <frames>
node scripts/videos/stopmotion/montar.mjs      --dir <frames> --out clip.mp4 --img-s 6
```

## 11. La plancha de FONDO: que el decorado no quede muerto

El plató fijo compra estabilidad (deriva 0,00) al precio de congelarlo todo: los fogones dejan
de temblar y el humo de subir. En una maqueta de papel real el fuego SÍ se anima —se cambian
las llamas recortadas fotograma a fotograma—, así que el decorado necesita su propia plancha.

`fondo.mjs` hace tres cosas, y las tres hacen falta:

1. **Una hoja de N estados del plató vacío**, cambiando ÚNICAMENTE lo que arde, humea o se mece
   (2×2 = 4 estados a 1080×1920 nativos, $0,117).
2. **Registro** contra la primera celda (`alinear.mjs`): el modelo redibuja y desplaza el set.
   Aquí el alineador SÍ funciona —todo el cuadro es decorado y la función de coste tiene señal
   de sobra—, al revés que con la hoja de figura, donde el gesto le arrastraba el registro.
3. **Mediana + zona de acción** (`estabilizar.mjs --vida 0`): el decorado queda congelado píxel
   a píxel y sólo pasa lo que de verdad cambió. Medido aquí: **zona viva 11,2% del cuadro** —las
   dos lumbres, su resplandor sobre el suelo y los hilos de humo— y **deriva 0,01**.

`componer.mjs --plato <carpeta>` recorre esos estados en VAIVÉN (0,1,2,3,2,1…) para que el bucle
no dé un salto al volver al primero.

**Dos trampas que costaron dinero:**

- **El bloque de escena describe a la FIGURA.** Pasárselo a la plancha de fondo hizo que el
  modelo dibujara a la mujer —y en estilo 3D, porque tampoco le pasé el bloque de técnica—.
  El plano ahora tiene un campo `decorado` aparte: set sin personaje, y con "no hay ninguna
  persona en el cuadro" dicho explícitamente.
- **Dos planchas de fondo NO registran entre sí.** Al añadir una segunda tanda de 4 estados, la
  zona viva saltó de 8,6% a 27,3%: la diferencia entre hojas se cuela como movimiento. Si hacen
  falta más estados, tienen que salir de UNA sola llamada (3×3, a costa de resolución) o por
  parches de región. Con 4 estados en vaivén el ciclo es de 1 s a 6 img/s.

**Receta completa y coste por plano de 5 s:**

| Paso | Llamadas | Coste |
|---|---|---|
| Maestra del plano (look lock) | 1 | $0,056 |
| Plancha de planificación (36 poses en miniatura) | 1 | $0,106 |
| 9 hojas 2×2 de figura recortada | 9 | $1,11 |
| Puentes en las costuras | 3 | $0,20 |
| Plató vacío | 1 | $0,053 |
| Plancha de fondo (4 estados) | 1 | $0,117 |
| **Total** | **16** | **$1,64** |

≈**$30 el video de 18 planos**. Resultado del plano de prueba: irregularidad **1,35×**, deriva
de plató **0,01**, celdas nativas de 1080×1920 para figura y decorado.

## 12. Primer video entero por este carril: «Huitaca» (2026-09-12)

98,4 s, 18 planos + cierre de canal, **0 créditos de Higgsfield y $4,37 de OpenAI** (54 llamadas).
Máster: `content/videos/muiscas/videos/huitaca/huitaca-final-v1.mp4`.

**Un guion no son 18 primeros planos de un personaje**, así que el carril necesitó tres vías, y
el orquestador (`plano.mjs`) elige por el campo `track` de cada plano:

| Vía | Cuándo | Cómo | Coste |
|---|---|---|---|
| `figura` | hay un sujeto que se puede aislar | recorte sobre alfa + plató fijo; el desplazamiento lo pone el montaje | $0,21-1,64 |
| `cuadro` | no hay sujeto que aislar (objetos, manos, multitudes) | hojas del fotograma entero + registro + mediana con zona de acción | $0,16-0,53 |
| `quieto` | el plano no tiene movimiento propio | una sola imagen y un Ken Burns en el montaje | $0,04 |

**El hallazgo que abarató todo: el movimiento CÍCLICO no necesita 36 poses.** Unas manos en un
tambor, una rueda de danza, un aleteo o una marcha son ciclos: una sola hoja de 2×2 (4 estados)
recorrida en VAIVÉN llena los 5 s, sale a **$0,16-0,22 el plano** y además no tiene costuras,
porque no hay más de una hoja. Los 36 fotogramas distintos se reservan para los gestos que van
de un sitio a otro y no vuelven.

**Lo que no funcionó, medido plano a plano (`qc.mjs`):**

- **Escena llena + varias hojas = el decorado salta.** Los planos de multitud y los de 4 hojas
  (b5a, b6a, b6b, b7a) se quedan en deriva 2,7-5,5 aunque se suba el umbral y se afine el
  registro: en una escena abarrotada el modelo redibuja todo, y ninguna transformación global
  cuadra dos dibujos distintos. Se mitiga bajando la cadencia a 3 img/s (la mitad de saltos),
  no se arregla. **Los planos de multitud siguen siendo el punto débil del carril.**
- **La identidad se pierde entre planos si no se ata.** Los primeros planos salieron con otra
  Huitaca: hay que pasar SIEMPRE la ficha de la biblia y el fotograma maestro del personaje
  como referencias de cada maestra nueva.
- **El deslinde del mito hay que meterlo en los invariantes.** Sin decirlo, la plaza apareció
  con una laguna al fondo — en un mito cuyo deslinde es «ni una gota de agua».
- **`setsar=1`**: sin él, el camino de Ken Burns deja píxeles 136:135 y el concat del
  ensamblador se niega a juntar los clips. El mecanismo, reproducido: una fuente de 1088 px de
  ancho escalada con `scale=3240:5760` fija SAR 136:135 (= 1088/1080) y DAR 17:30.
  **Aviso que faltaba, y es el que muerde fuera de este carril:** lo aplican los **seis** scripts
  de stop-motion (`montar.mjs:62`, `v2/posterizar.mjs`, `v2/quieto.mjs`, `v2/inserto.mjs`,
  `v3/flipbook.mjs`, `v4/cadena.mjs`) y **`scripts/videos/assemble-video.mjs` no lo aplica en
  ninguna de sus cadenas** (cero ocurrencias de `setsar` en todo el archivo). El ensamblador vive
  de que sus entradas ya lleguen con píxel 1:1; ningún documento lo decía. Quien monte material
  de 1088 px sin pasarlo antes por un script del carril, o quien añada una cadena nueva al
  ensamblador, tiene que poner el `setsar=1` él. Ver `MANUAL-DE-PRODUCCION.md` §5.7.

## 13. Experimentos del rediseño v2 sin Higgsfield: E0, E2 y E4 (2026-09-12, noche)

Ejecutados los tres experimentos que no dependen de créditos de video. Coste: **$1.62** de OpenAI
(0 créditos). E1, E3 y E5 (Kling A→B) quedan para cuando haya saldo. Material en
`content/videos/muiscas/videos/huitaca/v2/` (mundo, planos, planos-out, contacto-E0*.jpg, reel/).

**E0 — Mundo + anclas + compuerta.** La hoja de lookdev (4 decorados en una llamada, $0,117) y las
tres fichas de producción (3 vistas sobre gris, $0,10 cada una) pasaron G0 a la primera: maqueta
sin bokeh, noche cerrada, luna de papel a la derecha en los cuatro decorados, cerros secos, ni una
gota de agua; la lechuza de cara redonda con una vasija de escala; Huitaca con su olla gris en las
tres vistas. Las anclas A/B de P13, P02, P14 y P15 costaron $0,52 la primera tanda, y el panel de
17 verificadores (dos por imagen + un juez de par) encontró lo que las métricas insinuaban:

- **P13 B salió lechuza de campanario** (cara blanca en corazón): mi script recortaba la ficha de la
  lechuza de las referencias de B. Corregido (B ve hasta 3 referencias además de A): la B nueva es
  el búho moteado de la ficha, sobre la manta, con la olla en el aire.
- **P14 cambiaba de encuadre entre A y B** (olla enorme en el aire, pequeña y lejos en el suelo).
  Reescrito el spec con tamaño explícito ("la olla mide un tercio del alto del cuadro") y B como
  "misma cámara, mismo tamaño, justo debajo": resuelto.
- **«B como edición de A» no clava el plató**: en los tres pares el modelo movió bohíos y añadió
  cercas (MAD de fondo 2,6-3,1). Probé la **máscara de edición de la API** y **no es un cerrojo de
  píxeles**: fuera de la máscara A y B difieren igual con ella (6,21) que sin ella (6,98). Es una
  pista. La fidelidad se garantiza en post: `clavar-b.mjs` compone B dentro del rectángulo editable
  y A fuera, con borde difuminado de 48 px → MAD de fondo **0,80 / 0,88 / 0,99**. Trampa de sharp
  que costó una ronda: desenfocar un raw de 1 canal devuelve 3 canales, y leer la máscara sin
  desentrelazar produjo un "fantasma" de la mujer en P13 (la B libre era limpia).
- Pendiente para E1: el orden correcto es **plató vacío primero** y A y B como ediciones del plató,
  para que el fondo inventado detrás de la figura no nazca distinto en A y en B.

**E2 — Inserto dibujado con carta (P14, la olla cae).** Plató = A sin la olla ($0,052); UNA hoja
3×3 de recortes sobre alfa con A y B como referencias, celda 1 = A, celda 9 = B ($0,129). Los
dibujos son buenos (chicha, salpicadura, pluma), pero **G5 falló tal cual**: variación de tamaño
28,5 % (el splash ensancha la máscara) y, sobre todo, el modelo dibujó la caída como una diagonal
global de la hoja y **la posición se reinicia en cada fila** (centroide y: 790 → 936 → 1078 →
1013…); además hornea un **halo cálido en el alfa** que se pega como una mancha. Arreglo en post,
como el plan preveía: alfa endurecido (halo fuera) y el núcleo del objeto (alfa > 200) llevado por
una **trayectoria escrita** (x lineal, y con aceleración, de la celda 1 a la 9). Con la carta
`[f0 12] [f1..f6 ×2] [f7 1] [f8 36]` el inserto de 2,54 s **lee "cae y se queda"**. Segunda trampa
de sharp: `extract` se aplica antes que `extend` dentro de la misma tubería; en dos pasos.

**Fuego de P15.** `fondo.mjs` con mediana falló aquí (zona 32,5 %, deriva 5,4: el modelo movió a la
gente pese al "quietas"). Con la **zona viva dibujada a mano** (`estabilizar.mjs --zona-manual`,
dos rectángulos sobre los fogones): zona 16,1 %, **deriva 0,00**, irregularidad 1,06×.

**E4 — La ley de tiempo, viendo.** Reel de 8,94 s: P13 B quieto con cámara escalonada (2,50) →
inserto P14 (2,54) → P15 quieto con fuego vivo (3,90), con la voz 7 real partida en sus tres pausas
medidas (`silencedetect`: 2,50 / 4,46 / 6,19 s) — «quedó» sobre la lechuza, «cayó» sobre el impacto
(el arranque de voz07b se retrasó 0,5 s para que caiga en el fotograma 24 del inserto), «se detuvo»
con el lecho bajando 8 dB — en tres versiones: **a dos** (12 dibujos/s, pares de fotogramas
idénticos: cambio par→impar 0,02, impar→par 3,48), **a tres** (8/s) y **continuo** (24 fps por
`minterpolate` + grano). Y el mejor clip de v1 (c03) en las tres cadencias, como referencia.
**La cadencia la elige el usuario viendo los tres reels; hasta entonces no se fija.**

**Nuevas herramientas v2** (`scripts/videos/stopmotion/v2/`): `comun.mjs` (bloque común obligatorio
con `assertComun`), `lookdev.mjs`, `anclas-ab.mjs` (con máscara), `clavar-b.mjs`, `contacto.mjs`,
`inserto.mjs`, `quieto.mjs`, `posterizar.mjs`; y `estabilizar.mjs --zona-manual`, `img.mjs --mask`.

## 14. Carril v3 «hoja + redibujado» (guía Sunburst del 13-09) — prueba de 5 s en el clímax

El usuario trajo la guía de animación por fotogramas con GPT Image 2.5 Sunburst y pidió cambiar de
método. El que adoptamos es el del flipbook auditado en la guía: **una hoja de 16 poses distribuye
la acción de la celda 1 a la 16; cada celda se redibuja a resolución completa con dos referencias de
papel distinto** (la maestra manda en identidad, materiales y luz; la celda manda en pose y
colocación, sin adelantar la acción); **el montaje asigna exposición por imagen desde una tabla de
estados** (prompt efectivo, referencias, ajustes, archivo, aprobación). Sobre eso conservamos lo
nuestro: bloque común obligatorio, recortes sobre alfa y plató clavado.

**Prueba: P13, la transformación (A y B aprobados en E0).** `scripts/videos/stopmotion/v3/flipbook.mjs`.
Resultado: `planos-out/P13/flipbook/P13-flipbook.mp4`, 5,00 s, 16 estados, **17 solicitudes, $1.29**,
0 créditos: plató vacío ($0,05) + hoja 4×4 ($0,14) + 16 redibujados (~$0,07 cada uno).

Lo que salió bien, y es la primera vez:

- **La hoja es la mejor coreografía de todo el laboratorio**: 16 celdas, sin líneas de rejilla, masa
  25-34 % por celda y centroide continuo entre filas (122 → 173 → 152): **no hay reinicio por fila**.
  Plumas del antebrazo al hombro y al pelo, ella se pliega, la olla se suelta, la manta cae, la
  lechuza queda posada. La inspección previa al recorte (guía §7) se hace con números y con el ojo.
- **El redibujado entrega resolución completa de verdad**: cara, plumas recortadas una a una, manta
  y olla a 1088×1920, con la identidad de la maestra. Es lo que las hojas de 3×3 y 2×2 no daban.
- **Distancia a la pose final monótona** (37 → 15 → 0) sobre un plató idéntico en los 16 fotogramas.

Lo que falló y cómo se corrigió:

- **Escala y colocación.** El redibujado conserva la colocación de la CELDA, y la celda va a la escala
  de la hoja, no de la maestra: la figura salió más grande y centrada que en A, y la lechuza final
  enorme frente a la de B (salto de 23,9 al cortar). Intenté una transformación global medida entre
  la celda 1 y la maestra; la caja de A contra un plató regenerado sale inflada (escala 0,98: no
  corrige nada). **Solución: el clip es autoconsistente** — se redibuja también la celda 1
  (`coordenadas: "hoja"`), los 16 fotogramas viven en el sistema de la hoja y A/B no entran en la
  secuencia. El primer salto baja de 23,5 a 12,5.
- **La lechuza queda al 60 % de la mujer, no al tercio del spec.** Es una decisión de la HOJA, y una
  escala global no la arregla. Puerta pendiente: medir en la hoja la altura de la celda 16 contra la
  celda 1 antes de redibujar, y regenerar la hoja si no cumple.
- El criterio "el fotograma más parecido entre los anteriores debe ser el vecino" marca 4 regresiones
  que a la vista no lo son: con redibujos de cuadro completo es ruido. La monotonía contra la pose
  final es el criterio que sirve. **Esto retracta media puerta G3 de `stopmotion-v2-rediseno.md` §5**:
  de los tres criterios que allí se piden, el del argmin sobre los anteriores hay que descartarlo y
  queda en pie sólo la monotonía de d(t) hacia B. Lo posterior es esto, y por poco: §5 se commiteó en
  `e7c1283d` el 12-sep 21:43 y esta sección en `95efdc84` la misma noche, a las 23:00 (fechas de
  commit, hora local −05). No fue un día de reflexión: fue hora y cuarto y una prueba nueva.
  (§5 quedó sin actualizar hasta el 16-sep; ahora lo dice.)

**Números del carril v3 por plano de 5 s:** 17 solicitudes ≈ $1,25 y ≈ 5 min de pared; con dos
hojas (32 dibujos, 4 s de acción a 8/s) ≈ $2,4. Un video de 18 planos ≈ **$25-45** y 0 créditos.
Textura de tiempo elegida para la prueba: a tres (8 dibujos/s, 3 fotogramas por dibujo); la
decisión final sigue siendo del usuario sobre los reels de E4.

## 15. v3.2: más fotogramas y el proceso que los aguanta (2026-09-13, madrugada)

Objetivo del usuario: más fotogramas y seguir mejorando el proceso. Resultado:
`planos-out/P13/flipbook-36b/P13-flipbook.mp4` — **36 poses en una sola hoja 6×6, 12 dibujos/s a
dos, 5 s, $2,7, 0 créditos**, y por fin coherente de la primera a la última imagen. Gasto v3 total
$8.23; ledger del proyecto $25.53.

Cinco cambios de proceso, cada uno con la medida que lo motivó:

1. **Rejilla 6×6 en una sola hoja.** 36 poses comparten un solo sistema de coordenadas; la
   resolución la devuelve el redibujado. Centroide continuo entre filas (salto máximo 0,04-0,13).
2. **Puerta de hoja antes de gastar en redibujos**: masa por celda, salto de centroide, líneas
   dibujadas y **altura del componente que apoya** en la última celda frente a la primera (la
   lechuza al tercio). La primera hoja 6×6 fue rechazada por dos verificadores (12 celdas
   idénticas al inicio, transformación apretada, olla saltando, cara pálida en 19-21); la segunda,
   con el reparto que pidieron, mide 0,43 y la metamorfosis ocupa 18 celdas en vez de 12. El
   modelo **adelanta el final aunque se le reparta**: en ambas hojas el último tercio es reposo.
3. **La hoja manda en la geometría, el redibujo pone el detalle.** Con celdas de 360×640 el
   redibujado llena el cuadro (la lechuza salía tan alta como la mujer, 33 de 36 fuera de escala).
   Cada redibujo se reescala y se coloca en la caja de su celda, comparando a ambos lados **el
   componente conexo que apoya** (≥ 3 % del cuadro, el más bajo) — no la caja de todo lo que cambia,
   que la olla flotante inflaba, ni el componente mayor, que a veces era la olla. Luego la hoja
   entera se lleva a las coordenadas de A con un recorte extra de A sobre alfa (anclaje 1,07,
   −97 px, −188 px).
4. **Identidad por tramo.** Con la maestra (la mujer) como identidad de una celda que ya es la
   lechuza, el redibujo **volvía a dibujar a la mujer** (fotogramas 20-22, 28, 31, 35 de la v1). La
   referencia de identidad es la que corresponde al contenido de la celda: A hasta la 18, B de la
   19 a la 36, y el prompt dice "lo que no está en la celda no se dibuja".
5. **QC en tres escalas con la silueta exacta**: como todo va sobre el mismo plató, |fotograma −
   plató| es la silueta; de ahí altura y base por fotograma, distancia a la pose final y salto entre
   vecinos. v2-36: **distancia a la pose final monótona con cero retrocesos** (33 → 0), base 0,97-0,98
   en los 36, salto medio 11,4. Queda ruido en "altura" cuando la olla flota (la métrica une todo lo
   que cambia): pendiente medir sujeto y atrezo por separado.

Lo que sigue pendiente: la olla salta de sitio en el paso 18→19 y la lechuza cambia un poco de
tamaño en 19-36 (ancla por objeto, no sólo por componente que apoya); y para tener más fotogramas
de la metamorfosis misma, **dos hojas encadenadas** (A → estado medio, estado medio → B), cada una
con su puerta, porque una sola hoja siempre regala un tercio al reposo.

