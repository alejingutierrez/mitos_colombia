# Cierre de canal — el clip que va al final de TODOS los videos

Pieza fija de 8,4 s: una mano de papel sostiene un celular de papel donde se ve
**el sitio real** desplazándose, y luego una placa tipográfica sobre el páramo de
papel con el wordmark y la dirección. Invita a leer los mitos completos en
mitosdecolombia.com.

Se produce **una sola vez** y se reusa en todos los videos. Sólo hay que rehacerlo
si cambia el diseño del sitio o la locución.

| | |
|---|---|
| Máster mudo (el que se pega a cada video) | `content/videos/muiscas/cierre/cierre-canal-v1-mudo.mp4` |
| Versión suelta con voz y lecho | `content/videos/muiscas/cierre/cierre-canal-v1.mp4` |
| Voz en un solo archivo | `content/videos/muiscas/cierre/voces-v1/voz-cierre.wav` |
| Duración | 8,42 s (4,00 de la mano + 4,42 de la placa) |
| Costo | 135 cr de Higgsfield (3 clips Seedance de 45, uno descartado) + ~0,6 USD de gpt-image-2 |
| Guion | «Hay cientos de mitos como este esperándote. / Léelos completos en mitos de colombia punto com.» |

---

## La idea técnica, que es lo que hace que funcione

**Ningún modelo de video sabe dibujar una interfaz web legible, y menos hacerla
desplazarse.** Lo que Seedance pinta en la pantalla es una imitación convincente
de lejos y basura de cerca: en la primera tanda el cuerpo del relato decía
«Lasos de Colombia region obseas fiemia». Así que el reparto de trabajo es:

1. **El modelo hace el mundo físico** — la mano, el celular, el papel, la luz, la
   niebla — con la **cámara clavada**. Es la única desviación del carril normal
   (donde cada clip lleva un movimiento de cámara motivado) y está justificada
   abajo.
2. **ffmpeg pone la pantalla de verdad** encima, deformada con el filtro
   `perspective` sobre el cuadrilátero medido del vidrio. El scroll también es
   real: se anima la ventana de recorte sobre una captura de página completa.
3. **El movimiento de cámara se añade en post** (Ken Burns con `zoompan`), ya con
   la pantalla compuesta, donde se controla al píxel.
4. **La tipografía se renderiza con CoreText** en Asimovian, la fuente de títulos
   del sitio (ley 8 del playbook).

Por eso la cámara del modelo tiene que estar quieta: **el cuadrilátero de la
pantalla es fijo**. Medido sobre el clip entregado, el teléfono derivó 1-2 px en
los 120 fotogramas, así que el compuesto calza sin seguimiento.

---

## Los insumos

### 1. Fotos del sitio real, en móvil de verdad

`scripts/videos/capturar-sitio.mjs` (Chrome headless con user-agent de iPhone).
**El user-agent es obligatorio:** sin él el sitio renderiza el layout de
escritorio a 393 px de ancho y el titular se sale del encuadre. Se captura la
página entera (viewport alto de 2600 CSS px × dpr 3 = 1179×7800) para que el
scroll tenga de dónde sacar filas.

- `refs/pantalla-mito.jpg` — la primera pantalla, referencia para gpt-image-2.
- `pantalla/mito-scroll.png` — 1179×5400, la tira por donde corre el scroll.

La página elegida es `/mitos/bachue`: cabecera con el wordmark, la ilustración de
maqueta de papel del mito, el título, el resumen y el arranque del relato. El
recorrido del scroll (0 → 1500 px) va de la cabecera al título del mito y al
«Leer el relato»: literalmente enseña lo que la voz promete.

### 2. Los dos keyframes (`scripts/videos/specs/canal-cierre.mjs`)

- `cierre_a_mano_celular` — mano de papel sosteniendo el celular, pantalla al frente.
- `cierre_b_paisaje` — el celular en reposo sobre la mesa, el páramo de papel
  desplegándose detrás y el **46 % superior de cielo crema vacío** para la
  tipografía. Esa franja vacía se pide en el prompt como composición obligatoria.

La captura del sitio va como **referencia** de gpt-image-2, así que el modelo
pinta un teléfono con la luz, el color y el encuadre correctos aunque su texto
luego quede tapado por el compuesto.

**Dos versiones descartadas del keyframe A, y por qué** (las dos archivadas en
`keyframes/*.v?-*.jpg`):

| | Qué pasó |
|---|---|
| v1 | El pulgar cruzaba el vidrio. Recortarlo del compuesto necesita un matte, y como el pulgar **barría hacia arriba** durante el clip, el matte unión dejaba un hueco por donde asomaba el texto inventado del modelo. El color no separa el pulgar del arte arenoso de la página (ambos dan R−B de 45 a 90), así que tampoco se puede hacer por fotograma. |
| v2 | Pulgar fuera del vidrio, pero la mano salió como una forma de papel plana y ambigua: no se leía como mano. |
| v3 ✅ | Pulgar apoyado en el **marco inferior**, cuatro dedos visibles por detrás, y la mano v1 pasada como segunda referencia para conservar su factura. El prompt del clip además le pide al modelo que **la mano no se mueva en absoluto**: lo que se desplaza es la página. Con el pulgar quieto, el trocito que roza la esquina inferior se recorta con un matte de un solo fotograma, sin hueco posible. |

**Lección general: cuando algo se va a componer encima, el keyframe tiene que
dejar el área despejada.** Sale más barato rehacer la imagen (centavos) que
pelear con un matte de un objeto en movimiento.

### 3. El cuadrilátero de la pantalla (`keyframes/pantalla-quad.json`)

Las cuatro esquinas del vidrio en el espacio final de 1080×1920, en orden
TL, TR, BR, BL. Se miden con `scripts/videos/.tools/esquinas.mjs`, que amplía
cada esquina ×3 con una rejilla de coordenadas encima.

**Comprobación de sanidad:** la proporción del cuadrilátero de A da 426/918 =
0,464, casi exactamente la de una pantalla de iPhone (0,461). Si la medida se
aleja de eso, está mal tomada.

La detección automática por umbral de oscuridad **no funciona**: las colinas
verde oscuro del fondo entran en el mismo rango que el bisel de cartón y
contaminan la caja. Medir a ojo con la rejilla es más rápido y más fiable.

---

## Los prompts de movimiento (`movimiento-v1-seedance.json`)

Formato de la doctrina v2 (8 párrafos, `@Image 1`, toma continua) con el candado
de quietud **repetido tres veces**: en los beats, en el párrafo de cámara y en la
lista NOT. Con Seedance una sola mención no basta — es multi-shot y con cámara
inquieta por diseño.

La frase que hace el trabajo:

> the four corners of its screen stay in exactly the same pixels of the frame
> from the first to the last frame

Y para el clip A, además:

> THE PAPER HAND IS COMPLETELY STILL: the thumb stays resting on the phone's
> lower paper frame exactly where it is in @Image 1 and never slides, lifts,
> bends or travels

---

## El ensamblaje (`scripts/videos/build-cierre.mjs`)

```bash
node scripts/videos/build-cierre.mjs
```

Hace, en orden: tipografía por CoreText → matte del pulgar desde el propio clip →
compuesto de la pantalla real con `perspective` → Ken Burns con `zoompan` →
corte seco entre los dos planos → sobreimpresos → voz unida → versión con lecho.

**Tres trampas de ffmpeg que costaron tiempo:**

1. **`crop` evalúa `w` y `h` una sola vez.** Un Ken Burns escrito como
   `crop=w='W/z(t)'` falla con «Error when evaluating the expression». El zoom
   por fotograma va con `zoompan`, que sí acepta expresiones con `on`. Se amplía
   a 2× antes para que el salto de un píxel entero de `zoompan` se note la mitad.
2. **Este ffmpeg no trae decodificador de SVG.** Las máscaras se rasterizan con
   sharp (`sharp(svgBuffer, {density: 72})`), no con `ffmpeg -i mask.svg`.
3. **Un solo fotograma de salida necesita `-update 1`**, o ffmpeg responde
   «Cannot write more than one file with the same name».

Y una de sharp: **`composite` se aplica DESPUÉS de `resize` en la cadena**, así
que `sharp(base).composite(x).resize(540)` revienta con «Image to composite must
have same dimensions or smaller». Hay que componer, pasar a buffer y luego
redimensionar.

### La tipografía

Tinta oscura sobre el papel crema, sin sombra: es tinta sobre papel, no un rótulo
sobre una imagen. Colores tomados de los tokens del sitio (`src/app/globals.css`).

| Capa | Fuente | Tamaño | Color | Entra |
|---|---|---|---|---|
| «Léelos completos» | Asimovian | 82 px, tracking −0,03 | `#1c5c3f` (`--jungle-500`) | 2,25 s |
| «Mitos de Colombia» | Asimovian | 104 px, tracking −0,03 | `#1c5c3f` | 4,45 s |
| filete | — | 44×3 px | `#a8702c` | 4,85 s |
| «MITOSDECOLOMBIA.COM» | HelveticaNeue-Medium | 34 px, tracking 0,22 | `#a8702c` | 5,00 s |

El ember del sitio es `#bd8642`, pero sobre papel crema se lee flojo: se oscurece
a `#a8702c`. El renderizador aborta si CoreText no devuelve «Asimovian».

### Sin números que envejezcan

El sitio dice hoy «596 relatos · 6 regiones · 51 comunidades». **Nada de eso se
quema en el clip**: es una pieza que va en todos los videos y el catálogo crece.
Por eso la voz dice «cientos de mitos» y la tipografía sólo lleva el nombre y la
dirección.

---

## Cómo se pega a un video

El cierre es **un bloque más del plan**, no un archivo aparte que se concatena.
Así el lecho del propio video sigue sonando encima y no hay costura de audio:

```jsonc
{
  "n": 20,
  "type": "motion",
  "clip": "../../cierre/cierre-canal-v1-mudo.mp4",
  "duration": 8.42,
  "voice": "../../cierre/voces-v1/voz-cierre.wav"
}
```

El lecho hay que construirlo con la duración total **incluyendo** el cierre
(`build-lecho.mjs --duration <video + 8.42>`).

**Pegar el cierre destapó un bug del ensamblador que llevaba ahí desde el principio.**
`zoompan` con `d=N` emite N fotogramas **por cada fotograma de entrada**, y
`-loop 1 -t duration` ya entrega N: la placa still de 4 s salía de **400 s**
(9.600 fotogramas). Nunca se notó porque la placa siempre iba al final y el
`-t totalDur` del cierre la recortaba. En cuanto hay un bloque DESPUÉS, la placa se
come el resto del video y ese bloque no aparece nunca. Corregido con
`-frames:v ${frames}` al codificar la placa; los másters ya entregados no están
afectados. **Moraleja: un bug latente sólo se ve cuando cambia la forma del
montaje, así que el primer video con cierre hay que verlo entero, no por encima.**

---

## Rehacerlo

1. Si cambió el **diseño del sitio**: `node scripts/videos/capturar-sitio.mjs` y
   volver a ensamblar. Los clips sirven igual — la pantalla es un compuesto.
2. Si cambió la **locución**: editar `guion-cierre-v1.json`, regenerar voces y
   reensamblar. Los clips sirven igual.
3. Si cambian los **clips**: hay que volver a medir el cuadrilátero, porque el
   compuesto depende de él.
