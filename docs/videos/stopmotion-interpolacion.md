# Carril experimental: stop-motion por interpolación de fotogramas (gpt-image-2.5)

**Fecha:** 2026-09-12 · **Estado:** laboratorio, 3 pruebas hechas, NO es todavía el carril de producción.
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
| Tamaños | `WIDTHxHEIGHT` libre: múltiplos de 16, lado ≤ 3840, entre 0,65 y 8,29 Mpx. **`1088x1920` es 9:16 nativo** — se acabó el recorte desde 1024×1536 (el carril viejo tiraba el 25% del encuadre) |
| Calidades | `low, medium, high, xhigh, max, auto` |
| `input_fidelity` | **no existe en 2.5** (sí en 1/1.5). El generador viejo lo manda y se cae al reintento: ruido, no error |
| Tarifas | $5/M tokens de texto, **$8/M de imagen de entrada**, **$30/M de imagen de salida** |
| Coste real 1088×1920 `high` | **$0,056** sin referencias · **$0,069** con dos referencias (las referencias son ~⅕ del recibo) |
| Coste 1088×1920 `low` | $0,0044 (sirve para sondas, no para máster) |
| Latencia | 27-35 s por imagen. Con `--concurrencia 6` no hubo un solo 429 |

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

## 5. Las tres pruebas (mismo plano, `huitaca-b2a`, 5 s, 1080×1920)

| | Método | Fotogramas | Coste | Irregularidad | Deriva de plató |
|---|---|---|---|---|---|
| **P1** | Bisección pura desde A y B | 33 | $2,19 | 3,06× | 2,06 |
| **P2** | 3 poses clave escritas + bisección | 33 | $2,26 | 1,52× entre claves | 1,63 |
| **P3** | P2 + plató fijo por mediana | 33 | $0 extra | — | **0,88** |

`p3b` es P3 montado a 3 img/s en vez de 6, para comparar el pulso sin gastar un dólar más:
la cadencia se decide al MONTAR, no al generar.

## 6. Lo que falta antes de que esto sea un carril

- **Planos con viaje**: generar la figura con `background: "transparent"` (la API lo admite),
  el plató vacío por separado, y componer el desplazamiento en post con la caja alfa
  normalizada. Es el método real del papel recortado y resolvería el límite 1 de §4.
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
