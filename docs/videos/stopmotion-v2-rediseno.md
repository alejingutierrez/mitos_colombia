# Carril de stop-motion v2 — rediseño tras Huitaca v1

**Fecha:** 2026-09-12 · **Estado:** E0, E2 y E4 ejecutados la misma noche (resultados en `stopmotion-interpolacion.md` §13); E1, E3 y E5 esperan créditos de Higgsfield · **Sustituye a:** `docs/videos/stopmotion-interpolacion.md` §12 como receta de producción (los §1-11 siguen valiendo como medición).

**Verificado hoy antes de escribir esto (no leído de un doc):**

- `models_explore get kling3_0`: `medias` con roles **`start_image` y `end_image`**, `duration` **3-15 s**, modos `std|pro|4k`, `sound on|off`. El fotograma final existe en el MCP.
- `get_cost` de `kling3_0 pro 9:16 sound off`: **3 s = 5,25 cr · 5 s = 8,75 cr · 7 s = 12,25 cr** → factura **lineal a 1,75 cr/s**. Los clips cortos cuestan lo que duran.
- `balance`: **32 créditos** (plan plus; `unlim` no disponible para esta cuenta).
- Ledger real (`lab-stopmotion/ledger.jsonl`, 194 llamadas, $15,56 en total; Huitaca producción $4,60 en 58 llamadas): 1088×1920 high **$0,042** sin referencia, **$0,054** con una, **$0,068** con dos; hoja 2160×3840 **$0,117** con una referencia, **$0,126** con dos; plancha 2160×1712 $0,106.
- Pausas reales de las 9 voces (`silencedetect −35 dB ≥ 0,18 s`): están en la tabla de montaje de §3.4; son las que fijan los cortes.
- ffmpeg 8.1 local con `select, setpts, fps, noise, zoompan, xfade, lut3d, deflicker, minterpolate`. Sin GPU documentada; no se usa ninguna.

---

## 1. Diagnóstico: qué falló de verdad

1. **El montador recorrió TODO en palíndromo** (`vaiven()` es el único modo de `montar.mjs`/`componer.mjs`): la gota de chicha cae y vuelve a subir (c10, columnas 13-16 sin gota y 17-20 con gota otra vez), la rueda de danza gira y desgira con periodo exacto de 48 fotogramas (c09, MAD lag 48 = 0,28), la marcha repite pierna dos de cada tres pasos (c02), la lechuza parpadea 2 veces por segundo (c17, periodo 24, MAD 0,05). Las hojas se escribieron como ciclos cerrados o acciones de una dirección y se reprodujeron ida y vuelta.
2. **Las hojas de un gesto narrativo se generaron en paralelo desde la misma maestra y sin fotograma final**: la vasija de c13 cae, toca el suelo (f0005-f0007) y a los 2,3 s está otra vez en el aire hasta el corte (f0008-f0015, «todo quieto» dibujado sobre una maestra con la vasija volando); Huitaca en c11 se vuelve bulto de plumas (f0011) y en f0012 está de pie otra vez con la vasija. El clímax se reinicia dos veces.
3. **El compositor pega pegatinas**: escala por caja alfa (la lechuza dobla de tamaño cada medio segundo: 962×1381 → 1072×724 llevados a la misma altura, reescalado 90,7 % en b8a), sombra = rectángulo negro de bordes rectos con el 55 % por encima de los pies y presente bajo un ave en vuelo, contacto sobre una línea horizontal sin oclusores (garras que no agarran el anillo), recorte 5-434× más nítido que el plató (varianza del laplaciano b8a 3324 vs 8), y `plano.luz` vacío en los 18 planos.
4. **Las caminatas patinan porque la traslación es una curva global y la figura es frontal**: c02 avanza 238 px en 5 s mientras las puntas de los pies saltan ±80 px por imagen; c01 avanza 32 px, no cambia de tamaño «alejándose» y mide como foto fija (MAD medio 0,08). El modelo ignoró «perfil tres cuartos» y nadie lo comprobó antes de componer.
5. **Registro y mediana sobre celdas que nunca estuvieron registradas**: en b7a el alineador EMPEORA la deriva (19,6 → 27,9) porque vota sobre la vasija y las plumas; en b5a la mediana de 4 celdas fabrica un plató fantasma y deja pasar el 57 % del cuadro (14 saltos de 11-15 MAD); en b6a cada hoja se dibujó con otra distancia de cámara (escala 1,095 → 1,155); en b6b se tiró media hoja y quedaron 4 diapositivas de 1-1,7 s.
6. **Cuatro texturas de tiempo en un video**: 6 clips pixel-idénticos cada 24 fotogramas (4 dibujos reciclados 5 veces), 3 a ocho (diapositiva), c12 con holds de 24-40, y 3 quietos con zoom continuo del 12 % a 24 fps. La cadencia se eligió plano a plano por coste.
7. **No hay un mundo**: 15 de 18 maestras son render fotorrealista con bokeh; 6 se pidieron sin ninguna referencia y sólo las 3 que recibieron `plaza_fiesta_noche.jpg` se parecen a la biblia; `promptMaestraFigura` omite los invariantes (de ahí la laguna de c16), `promptMaestraCuadro` pega los positivos bajo «NUNCA:»; c08 es pleno día; la lechuza es Tyto, gavilán, búho y paloma en 40 s; las hojas nunca ven las fichas (`refs=[maestra]`).
8. **El relato se ordenó después de fabricar los fotogramas**: `duration: 5` en los 18 bloques con voces de 5,5-7,4 s → los 9 cortes A→B caen a mitad de frase y cada clip B remata con 2-4 s de aire (≈27 s); la transformación se dibujó bajo la línea 6 y la palabra «quedó» llega 6 s después sobre una vasija; las manos tocan el tambor durante «soltaron»; dos quietos seguidos bajo la única cita directa.
9. **El QC dio el visto bueno porque mide magnitud, no orden**: `qc.mjs` calcula deriva e irregularidad, no dirección, monotonía ni periodicidad; el manifiesto se escribió a mano (c12 y c13 figuran como «vaivén» sin serlo); `vista-todos.jpg` se hizo DESPUÉS de montar; nadie vio un clip en movimiento.
10. **Causa raíz común**: el carril heredó la unidad de Seedance (línea = 2 clips × 5 s), generó cada plano aislado y confió al compositor lo que un rodaje de recortes da gratis (contacto, sombra, profundidad). 12 de los 17 defectos confirmados nacen de la cadena hojas-paralelas → vaivén → recorte-sobre-plató → registro/mediana. No se arreglan afinando esa cadena: se arreglan retirándola de donde no puede funcionar.

---

## 2. Decisiones de diseño

| # | Decisión | Número | Por qué |
|---|---|---|---|
| D1 | **El movimiento con contacto lo hace un modelo de video entre DOS fotogramas nuestros.** La API de imágenes fija ESTADOS (mundo, identidad, posición absoluta, fotograma final exacto); Kling 3.0 pro rellena entre A y B (`start_image` + `end_image`). El compositor deja de existir para figuras de cuerpo entero, multitudes, metamorfosis y vuelos. | 7 clips Kling por video de referencia (Huitaca v2), 52,5 cr | Contacto de pies, sombra proyectada, oclusión, profundidad de campo y grano los produce el mismo modelo que los produjo bien en 71/72 clips del estándar; A y B aprobados por humano antes de gastar un crédito cuestan $0,07 cada uno. |
| D2 | **Mover sólo lo que el verbo pide.** Cuatro tipos de plano: `kling` (gesto con contacto), `inserto` (UN objeto o manos, ≤ 2 s de acción, dibujado), `quieto` (cámara escalonada), `planeo` (recorte sin contacto trasladado en post). | Huitaca v2: 7 kling · 3 insertos · 8 quietos · 1 planeo | Ocho planos de v1 estaban animados sin que la frase lo pidiera; la quietud donde la frase la soporta cuesta 0 cr y no puede patinar. Tope duro: **3 insertos dibujados por video** (propuesta 5): si hacen falta más, el carril viejo está volviendo por la puerta de atrás. |
| D3 | **Ley única de tiempo: «a dos»**, 12 imágenes distintas por segundo, cada una sostenida exactamente 2 fotogramas a 24 fps, aplicada en post a TODO: clips Kling, insertos, quietos (cámara escalonada) y cierre. Nada cambia entre un fotograma par y el impar siguiente. | 12 img/s · hold 2 · 60 dibujos distintos por 5 s | A cuatro con 4 estados el ojo cuenta el bucle (periodo 24 medido en 6 clips); a 24 fps el papel parece video. Se ratifica VIENDO (E4): el usuario elige entre 24/12/8 sobre el mismo material a 0 cr antes de fijarla. |
| D4 | **Imágenes distintas por clip**: ≥ 12 por segundo en todo plano en movimiento; ningún fotograma idéntico a otro a lag 24 ni 48 salvo hold declarado; ningún hold > 4 f fuera de una carta de exposición; insertos con ≥ 8 estados para ≤ 2 s de acción + hold de remate escrito. | MAD lag 24/48 > 0,5 · hold ≤ 4 f | Es la negación medida de v1: 4 dibujos × 5 repeticiones, diapositivas a ocho, holds de 1,7 s. |
| D5 | **Ciclos sin vaivén.** Tres modos declarados en el spec: `bucle` (Kling con B = A girada un cuarto de ciclo, o A=B con conteo de ciclos), `oscila` (A y B son los extremos + conteo de idas y vueltas), `una_pasada` (A→B y hold sobre B). `vaiven()` deja de ser el modo por defecto de `montar.mjs`/`componer.mjs`. **En v2 no se dibuja ningún ciclo**: marcha, aleteo, ronda y golpes van a Kling o a quieto. | 0 ciclos dibujados | Todo ciclo dibujado de v1 salió invertido o doblado; el conteo («four wingbeats, ending in the pose of the image») es lo que el modelo de video sí ejecuta. |
| D6 | **Traslación atada a la zancada = nunca en post.** Ninguna figura con contacto se traslada con `componer.mjs`. La caminata es A (figura al 25 % del ancho) → B (al 70 %, otra fase de zancada) y Kling planta los pies. La única traslación en post es el planeo sin contacto (P17), con trayectoria escrita, escala en rampa y sin sombra. | deslizamiento del pie plantado ≤ 4 px/f (sonda humana sobre 48 imágenes) | El patinaje de c02 no es un parámetro mal puesto: es la consecuencia de separar el cuerpo del suelo. |
| D7 | **Integración**: donde todavía se pega (insertos y planeo) se pega poco y corto: una escala por hoja (nunca por caja alfa), ancla declarada en el spec, **sin sombra sintética** (los extremos A y B los dibuja el modelo con su sombra real y el tramo pegado dura ≤ 1,5 s), desenfoque del recorte calibrado por la varianza del laplaciano del plató (≤ 2×), alfa erosionado 1 px. **Emulsión única** al final sobre el video entero: grano nuevo por dibujo (semilla por imagen, antes de duplicar a 24), viñeta suave. | nitidez figura/plató ≤ 2× · grano ±30 % entre planos | Las cinco capas que faltaban (escala, sombra, contacto, nitidez, luz) se eliminan en vez de reconstruirse; lo que queda es medible con sharp. |
| D8 | **El mundo viaja como imagen, nunca sólo como prosa.** Una hoja de LOOKDEV por video (plaza, camino, umbral, techo con luna de papel a la derecha; desde `plaza_fiesta_noche.jpg`) + fichas de producción (Huitaca con su olla gris en 3 vistas; lechuza en 3 vistas + escala junto a una vasija; Bochica con su vara). Entran como referencia en TODAS las A y B. Un solo `bloqueComun()` con bloques IDÉNTICO / NUNCA separados, deslinde («ni una gota de agua»), hora («noche cerrada») y `luz` obligatoria, inyectado en todo prompt (y traducido al prompt de Kling). | 4 imágenes de mundo ($0,5) · máximo 4 refs por llamada | 6 de 18 maestras sin referencia y el prompt de figura sin invariantes explican la laguna, el día y las cuatro aves. |
| D9 | **Compuerta humana barata antes del gasto**: hoja de contacto de todas las A y de los pares A\|B con métricas impresas (MAD de fondo, nitidez), checklist cerrado por imagen (agua / día / nº personas / luna a la derecha / especie / mira a cámara / render-bokeh) respondido por un agente mirando la hoja y aprobado por el usuario. Nada se sube al MCP ni se dibuja una hoja antes. | $1,5-2 por video de anclas · 0 cr | Es el paso más barato del carril y en v1 fue un subproducto posterior al montaje. |
| D10 | **Montaje por la voz, no por el metrónomo**: duración de cada plano derivada de las pausas medidas (`silencedetect`), cortes sólo en pausa entre cláusulas o tras el remate; planos de 1,6 a 7 s; el aire se concentra en los planos que lo soportan (P15, P19); voz07 partida en su pausa para que «quedó» caiga sobre el cambio y «cayó» sobre el impacto; `voice_delay` y `music_gain` por bloque. **Sólo cortes secos** (ley 2). | corte a ≤ 0,15 s de una pausa · fin de voz ≥ 0,6 s antes del fin del bloque | El clímax de v1 tenía imagen sin palabra y palabra sin imagen. |
| D11 | **Un solo modelo de video dentro del carril**: Kling 3.0 pro para todo lo que sea video; sin Seedance como fallback (45 cr) ni Gemini. La mezcla video + dibujo + quieto es la definición del carril, y es la desviación explícita de la ley 4 que este documento pide ratificar; la posterización y la emulsión son lo que hace que lea como UNA técnica. | 1 modelo · 1 cadencia · 1 emulsión | Dos modelos son dos texturas más; ya había cuatro. |
| D12 | **Carta de exposición como contrato** (propuesta 1) para todo lo dibujado: lista `{img, frames}` en el spec; `montar.mjs` se niega sin carta, con hold no declarado > 4 f o con imágenes descartadas; el manifiesto lo escribe el montaje desde la lista real de fotogramas. | holds reales = declarados (MAD = 0 dentro de cada hold) | El manifiesto de v1 mentía porque era prosa. |

---

## 3. El proceso nuevo, paso a paso

### 3.1 Pasos comunes a todo plano

| Paso | Qué | Herramienta | Coste |
|---|---|---|---|
| 0 | **Guion gráfico y cartas** (`guion-grafico-vN.json`): por plano `tipo`, `escala`, `mirada`, `viaje`, `luz {fuente, altura, color}`, `modo`, `duracion`, texto absoluto de A y de B, `carta` si es dibujado. `cortes-por-voz.mjs` mide las pausas de cada WAV y propone duraciones; un lint rechaza escalas repetidas contiguas, dos quietos seguidos, ejes cruzados y un quieto que lleve el verbo de la frase. | `cortes-por-voz.mjs` (nuevo), lint dentro de `plan-desde-cartas.mjs` (nuevo) | 0 |
| 1 | **Mundo** (una vez por video): hoja de lookdev 2×2 + fichas de producción. | `lookdev.mjs` (nuevo, sobre `img.mjs`) | ≈ $0,5 |
| 2 | **Anclas**: A con refs `[lookdev, ficha personaje, ficha atrezo]` + `bloqueComun()`; B como EDICIÓN de A con refs `[A, fichas]`: «misma fotografía, cambia sólo la pose/posición y lo que arrastra: su sombra, el contacto de los pies, la luz del fogón sobre la manta». Quietos: sólo A. Insertos: A, B y plató. | `anclas-ab.mjs` (nuevo; sustituye a la maestra de `plano.mjs`) | $0,068 por imagen |
| 3 | **Compuerta de mundo**: `contacto.mjs` genera la hoja de contacto de las A y de los pares A\|B con MAD de fondo y ratio de nitidez bajo cada celda; el agente responde el checklist por imagen (Read sobre la hoja) y escribe `contacto.json`; el usuario aprueba → `aprobado_anclas` en el guion gráfico. Una A rechazada se rehace con la vecina aprobada como referencia adicional ($0,07). | `contacto.mjs` (nuevo) | 0 |
| 4 | **Producción por tipo** (3.2). | — | — |
| 5 | **Posterizar + emulsión**: `select='not(mod(n,2))', setpts=N/(12*TB), noise=alls=6:allf=t+u` (grano nuevo por dibujo), `fps=24, setsar=1`; `--trim` y `--hold-tail`; viñeta suave; escribe el manifiesto real del clip (fotogramas, holds, cadencia, MADs). Los quietos y los insertos salen ya a 12 pasos/s y sólo se duplican. | `posterizar.mjs` (nuevo) | 0 |
| 6 | **Plan y ensamblado**: `plan-desde-cartas.mjs` escribe `plan-vN.json` con duraciones, `voice_delay`, `music_gain`, `trim`; `validate-plan.mjs --secos` + regla de pausas; `assemble-video.mjs` con `voice_delay`/`music_gain` por bloque y guardián «a dos» (rechaza clips cuyos fotogramas impares no sean idénticos a los pares). Lecho a la duración total con el cierre. | existentes, modificados | 0 |
| 7 | **QC final humano**: hoja de contacto en orden (un fotograma por plano), tira de 24 f del primer segundo de cada plano, preview a 720p. Se ve ENTERO en movimiento antes de darlo por hecho. | `qc-sheet.mjs` (existente) + `qc-clip.mjs` (nuevo) | 0 |

### 3.2 Por tipo de plano

**`kling` — gesto con contacto, multitud, transformación, vuelo** (`kling-ab.mjs`, nuevo)

1. A y B aprobados en el paso 3. Para `bucle`: B = A editada un cuarto de ciclo más adelante («la rueda ha girado un cuarto», «las alas a media batida»); se prueba A=B sólo si E5 lo valida. Para `oscila`: A y B son los dos extremos.
2. Subida con `subir-keyframes.mjs` (verificación N×HTTP 200 + `media_confirm`; nunca a mano en zsh).
3. `generate_video_batch`: `{model:"kling3_0", mode:"pro", sound:"off", aspect_ratio:"9:16", duration:<segundos enteros del plano, 3-15>, medias:[{value:A, role:"start_image"},{value:B, role:"end_image"}], declined_preset_id:<el que devuelva>}`. Hasta 7-8 en vuelo (tope medido en El Dorado).
4. Prompt en inglés derivado del spec: prefijo de estilo de la casa + acción con conteo y tiempo («she stops and points to the right in the first two seconds, then holds») + candado de orientación (video 1: «seen in three-quarter profile, head never turning toward the camera») + «ends exactly in the pose and position of the second image» + invariantes de `bloqueComun` traducidos + «ONE continuous locked-off take, no cuts, no close-up inserts, crisp, no motion blur».
5. `import-mcp-clips.mjs` (guardián 1080×1920/24 fps) → `qc-clip.mjs` (G2, G3) → si falla, regeneración con el mismo par y prompt corregido; dos fallos → se rehace el par ($0,14), no se insiste.
6. Envoltura: hold sobre A + clip + hold sobre B hasta la duración del plano (la duración deja de depender del modelo: P13 = 1,0 + 5 + 1,0; P16 = 0,75 + 5 + 0,75).
7. `posterizar.mjs`.

**`inserto` — un objeto rígido o manos, ≤ 2 s de acción, cámara fija** (`inserto.mjs`, nuevo, sobre `hoja-poses.mjs` + `componer.mjs` reducido)

1. A = estado inicial (fotograma completo), B = estado terminal absoluto (fotograma completo, con su sombra y su mancha), plató = B si el objeto ya no está en B (manos que se fueron) o edición de A sin el objeto ($0,054).
2. Una sola hoja 2×2 (celda 1080×1920 nativa) o 3×3 de RECORTES del objeto sobre alfa con refs `[A, B, ficha]` y texto «celda 1 = el estado de A, celda N = un paso antes de B»; una hoja, nunca varias (sin costuras).
3. QC de hoja (G5): variación del tamaño del objeto entre celdas < 3 % (se mide el ancho del objeto en la máscara alfa, no la caja); una celda que retrocede → se regenera la hoja.
4. Composición: UNA escala para toda la hoja, ancla declarada en el spec (`ancla: {x, y}` del punto de contacto o del centro del objeto), sin sombra sintética, desenfoque calibrado, erosión de alfa 1 px, sobre el plató.
5. Secuencia = A (hold de anticipación) → recortes según `carta` (a dos; impacto a uno; espaciado creciente en caídas) → B (hold de remate 24-48 f). `montar.mjs --carta`.
6. Sólo `una_pasada`. Tope 3 por video.

**`quieto` — la frase soporta la quietud** (`montar.mjs --imagen --escalonado`)

- A aprobada; cámara escalonada: `zoompan` renderizado a 12 pasos/s y duplicado a 24, amplitud 4-6 % en todo el plano (v1: 12 % continuo), un solo sentido; P15 con CERO cámara.
- Fuego vivo cuando lo hay: `fondo.mjs` (funciona: zona viva 11,2 %, deriva 0,01) con la regla de rechazo del alineador y los 4 estados recorridos **en orden aleatorio sin repetir vecino** (semilla fija), nunca en vaivén ni en bucle exacto; para P15 el prompt de la plancha conserva a las figuras detenidas y sólo mueve las llamas.
- Nunca dos quietos contiguos; ninguno lleva el verbo de la frase.

**`planeo` — figura sin contacto que cruza el cuadro** (`componer.mjs --trayectoria`)

- Un solo recorte (o dos poses) sobre el plató, trayectoria escrita (x, y, escala por fotograma a 12 pasos/s), sin sombra, desenfoque calibrado. Sólo válido si nada toca el suelo (P17).

### 3.3 Qué cambia en cada script del carril

| Script | Cambio |
|---|---|
| `prompts.mjs` | Un solo `bloqueComun(plano)` con `identico[]`, `nunca[]`, `deslinde`, `hora`, `luz` que ningún prompt puede omitir (test unitario: todo prompt lo contiene); `promptA`, `promptB` (edición con posición absoluta), `promptHojaInserto` (refs A, B, ficha; «celda 1 = A, celda N = antes de B»), `promptKling` (inglés). Se corrigen los dos bugs: invariantes ausentes en la maestra de figura y positivos bajo «NUNCA:». |
| `plano.mjs` | Se retira como orquestador de producción. Lo sustituye `plano-v2.mjs`: lee el guion gráfico y despacha por `tipo`; no genera hojas en paralelo; el track `cuadro` desaparece de producción. |
| `anclas.mjs` → `anclas-ab.mjs` | A con refs de mundo y bloque común; B como edición de A; escribe posiciones absolutas y refs en el ledger. |
| `componer.mjs` | Sin `escala = altoRel*H/bh`; una escala por hoja; ancla declarada; sin sombra; desenfoque por laplaciano; erosión alfa; `--trayectoria`. Sólo lo llaman `inserto.mjs` y el planeo. |
| `montar.mjs` | `vaiven()` deja de ser el defecto; `--carta` obligatoria para dibujados; se niega con hold > 4 f no declarado, < 12 img/s o imágenes descartadas; `--imagen --escalonado` (12 pasos/s, 4-6 %); manifiesto emitido desde la lista real. |
| `qc.mjs` → `qc-clip.mjs` | Regresión (argmin MAD sobre anteriores = vecino), monotonía hacia B, periodicidad a lag 24/48, holds reales, extremos contra A/B, corte interno, banda superior, energía, «a dos», nitidez figura/plató; salida JSON bloqueante. |
| `alinear.mjs` / `estabilizar.mjs` | Sólo dentro de `fondo.mjs`. Regla de rechazo (propuesta 3): se acepta la transformada sólo si el coste baja ≥ 20 % frente a la identidad y no toca el borde del rango; si no, identidad. Prohibidos sobre hojas de figura, objeto o multitud. |
| `fondo.mjs` | Orden aleatorio sin vecinos repetidos; prompt que respeta figuras detenidas cuando las hay. |
| `hoja-poses.mjs`, `plancha.mjs`, `tira.mjs`, `puente.mjs`, `escalera.mjs`, `claves.mjs`, `cadena.mjs`, `medio.mjs` | Quedan en el laboratorio. Ninguno toca un video. |
| `assemble-video.mjs` | `voice_delay` y `music_gain` por bloque; guardián «a dos»; duración por bloque desde el plan generado (no 5 fijos). |
| `validate-plan.mjs` | Regla nueva: cada corte a ≤ 0,15 s de una pausa medida o ≥ 0,4 s tras el fin de la frase; `--secos` sigue. |
| `import-mcp-clips.mjs` | Llama a `qc-clip.mjs` tras el guardián de resolución. |
| Specs (`planos/*.json`) | Nuevo formato: `tipo`, `modo`, `escala`, `mirada`, `viaje`, `luz`, `A`, `B`, `ancla`, `carta`, `duracion`, `refs` obligatorias; `_comun.json` con `identico`/`nunca` separados y `paleta` leída de verdad. |
| Nuevos | `cortes-por-voz.mjs`, `lookdev.mjs`, `anclas-ab.mjs`, `contacto.mjs`, `kling-ab.mjs`, `inserto.mjs`, `posterizar.mjs`, `qc-clip.mjs`, `plan-desde-cartas.mjs`. |

### 3.4 Huitaca v2 — guion gráfico con cortes en las pausas medidas

`voice_offset` 0,5 salvo `voice_delay` indicado. Los tiempos de pausa son los de `silencedetect` sobre `voces-v1`. Escalas contiguas siempre distintas (GG·PM·G·CEN·PMc·PD·PMc·PM·G·PD·G·PP·PM·PD·G·PM·GG·CP·GG).

| Bloque · voz | Plano · t (s) | Tipo · Kling | Escala | Qué pasa (A → B) | Corte |
|---|---|---|---|---|---|
| **b1** voz01 6,32 (habla hasta 5,57; pausa 3,23-3,63) | P01 0,0–3,9 | quieto, push-in 4 % | GG | Camino nocturno entre cercas, luna de papel a la derecha, Huitaca lejana DE ESPALDAS parada mirando al poblado; título encima | 3,9 (pausa 3,73-4,13) |
| | P02 3,9–8,0 | **Kling 4 s (7,0 cr)** | PM | Huitaca de perfil caminando L→R con la olla: A al 25 % del ancho, B al 70 % en otra fase de zancada | — |
| **b2** voz02 5,80 (pausas 1,00-1,45 · 2,66-2,88; habla hasta 5,03) | P03 0,0–3,3 | **Kling 3 s (5,25 cr)** + hold B | G | Huitaca de frente al corro (espaldas en primer término), se para y SEÑALA a la derecha; B = brazo extendido | 3,3 (pausa 3,16-3,38) |
| | P04 3,3–7,5 | quieto, push-in 4 % | CENITAL | El corro sentado en semicírculo, las cabezas giradas hacia donde ella señala | — |
| **b3** voz03 7,11 (pausas 1,57-2,01 · 2,70-2,98 · 3,89-4,52; habla hasta 6,14) | P05 0,0–4,7 | **Kling 5 s (8,75 cr)**, trim 4,7 | PMc | Huitaca hablando, la mano abierta baja y la barbilla sube (la única cita directa, con ella en cuadro) | 4,7 (pausa 4,39-5,02) |
| | P06 4,7–8,5 | **inserto** ($0,32) | PD | A ras de suelo: la carga de maíz a un palmo del umbral → B posada, las manos ya fuera; 1,5 s + hold | — |
| **b4** voz04 7,01 (pausas 1,83-2,25 · 4,38-4,77; habla hasta 6,45) | P07 0,0–2,6 | **inserto** ($0,32) | PMc picado | A manos sobre la piel del tambor → B el tambor solo; un golpe a uno, se apartan, salen | 2,6 (pausa 2,33-2,75) |
| | P08 2,6–8,5 | quieto, push-in 4 % | PM | Telar de noche, asiento vacío, la tela a medio hacer | — |
| **b5** voz05 5,53 · `voice_delay` 1,2 (pausa 2,57-3,12 → 4,27-4,82; habla hasta 6,59) | P09 0,0–4,5 | **Kling 5 s (8,75 cr)**, trim 4,5 | G | Plaza llena, la rueda gira un cuarto en sentido horario; B = A girada un cuarto; «their number stays exactly as in the image» | 4,5 |
| | P10 4,5–8,0 | **Kling 3 s (5,25 cr)** + hold B | PD | El cántaro pasa de unas manos a otras y las segundas lo levantan | — |
| **b6** voz06 6,36 (pausas 2,29-2,64 · 4,44-4,88; habla hasta 5,74) | P11 0,0–3,0 | quieto, push-in 5 % | G | Bochica DE ESPALDAS entrando al borde de la plaza, la fiesta al fondo | 3,0 (pausa 2,79-3,14) |
| | P12 3,0–8,0 | quieto, cámara fija | PP | El único primer plano: las dos caras de perfil mirándose; sin parpadeo en v2 | — |
| **b7** voz07 7,20 **partida en la pausa 2,50-3,10**: 07a «Donde había estado la mujer quedó una lechuza» · 07b «la vasija cayó al suelo y la música se detuvo» | P13 0,0–7,0 | **Kling 5 s (8,75 cr)** envuelto 1,0 + 5 + 1,0 | PM | Huitaca sola, Bochica fuera de cuadro. A: plumas asomando en el antebrazo; B: la lechuza de la ficha, PEQUEÑA, sobre la manta caída, la vasija en el aire a media altura. voz07a con `voice_delay` 2,0 → «quedó» sobre el cambio; la lechuza completa queda 2,5 s en silencio | 7,0 |
| | P14 7,0–8,6 | **inserto** ($0,32) | PD | La vasija a un palmo del suelo toca, vuelca, la mancha se abre, una pluma llega; voz07b arranca a 7,5: «cayó» sobre el impacto | 8,6 |
| | P15 8,6–12,5 | quieto, **cero cámara**, fuego vivo | G | La plaza detenida a media danza, sólo las llamas; «y la música se detuvo» cae en 9,5-10,6; `music_gain` −8 dB desde «se detuvo» | — |
| **b8** voz08 7,38 · `voice_delay` 2,0 (pausa 3,91-4,12 → 6,41-6,62; habla hasta 9,16) | P16 0,0–6,5 | **Kling 5 s (8,75 cr)** envuelto 0,75 + 5 + 0,75 | PM bajo | Sobre la hilera de vasijas: A posada con las alas cerradas → B alas abiertas saliendo por la derecha; «Abrió las alas» a 2,5 | 6,5 (pausa 6,41-6,62) |
| | P17 6,5–10,5 | **planeo** (0 cr) | GG | El poblado desde fuera; la lechuza, un recorte pequeño, planea L→R hacia la luna; escala 100 → 70 %, sin sombra | — |
| **b9** voz09 6,50 (pausas 1,86-2,21 · 4,35-4,77; habla hasta 6,18) | P18 0,0–5,0 | quieto, push-in 5 % | CONTRAPICADO | La lechuza en la cumbre del techo contra la luna | 5,0 (pausa 4,85-5,27) |
| | P19 5,0–9,5 | quieto, pull-out 4 % | GG | Bookend de P01: el techo con la lechuza diminuta al centro, la plaza con un fogón a la izquierda, las trojas a la derecha, la luna: el límite hecho encuadre | — |
| Cierre | 8,42 | clip fijo | — | `cierre-canal-v1-mudo.mp4` + su voz (ley 5) | — |

Totales: 81,0 s de cuerpo + 8,42 de cierre = **89,4 s**; narración 59,2 s = 73 % del cuerpo; **7 clips Kling = 52,5 cr**; 3 insertos; 8 quietos; 1 planeo; cortes secos en los 19.

---

## 4. Costes por video

| Concepto | Estándar Seedance 2.5 (vigente) | Kling estándar (alternativa) | Stop-motion v1 (Huitaca, medido) | **Stop-motion v2 (este doc)** |
|---|---|---|---|---|
| Créditos Higgsfield | 810 (18 × 45) + 45 por regeneración → **810-855** | 157,5 + 8,75/regen → 157-175 | **0** | **52,5** (7 clips a 1,75 cr/s) + 2 regeneraciones (≈ 14) → **≈ 65-70** |
| USD OpenAI | ~$3,4 si los keyframes son nuevos (El Dorado: 17 × ~$0,2); $0 si existen | igual | **$4,60** (58 llamadas; §12 registra $4,37/54) | Mundo $0,5 · 19 A $1,3 · 10 B $0,7 · 3 insertos (hoja + plató) $0,55 · plancha de fondo $0,12 · regeneración 30 % ≈ $1 → **≈ $4-5** |
| Horas humanas | ≈ 2,5 h (video 1 medido) | ≈ 2,5 h | 9-13 h (30-45 min por plano, 8 perillas por plano sin ver el clip) | **≈ 5-6 h el primero** (guion gráfico y cartas 1,5 · mundo y anclas 1 · compuerta 0,5 · Kling + insertos + quietos 1,5 · posterizar, montar, QC 1,5); ≈ 4 h los siguientes |
| Clips presentables | 17-19 de 18-19 a la primera | 16/18 | 0/18 | por medir en E1-E4 |
| Relación con el estándar | 1× | 0,2× | 0 cr, inutilizable | **≈ 8 % de los créditos de Seedance** |

Notas: el precio en dólares del crédito no consta en el repo, así que las dos columnas no se suman. Con 32 cr de saldo caben los experimentos de §6 (15,75 cr base + regeneración) pero **no el video**: producir Huitaca v2 exige recargar ≈ 70 cr, y esa decisión se toma DESPUÉS de ver el reel de E4, no antes. Si Kling no respeta B en el clímax, el plan B de ese único plano es Seedance con el mismo par (45 cr) y quedaría registrado como excepción a D11.

---

## 5. Puertas de QC automáticas (y qué defecto de v1 habrían atrapado)

| Puerta | Qué mide | Umbral | Defecto de v1 que habría parado |
|---|---|---|---|
| **G0 Mundo** (antes de hojas y de créditos) | Hoja de contacto de las A + checklist cerrado por imagen: agua/reflejo, día, luna a la izquierda o fotográfica, bokeh/render, figura mirando a cámara cuando el spec dice perfil, especie del ave (cara blanca en corazón = rechazo), nº de personas ≠ spec, arquitectura ajena | cualquier «sí» bloquea el plano | c08 pleno día; c16 laguna; lechuza Tyto/gavilán/paloma; 15/18 render; luna al otro lado en c16; marcha frontal de c02 |
| **G1 Par A\|B** | MAD del fondo (216×384 gris, fuera de la unión de las cajas del sujeto estimadas por \|A−B\| > 24); ratio de varianza del laplaciano figura/anillo de fondo en A y en B; B en el estado absoluto declarado (checklist) | MAD fondo < 2,0 · nitidez < 3× | b7a «todo quieto» con la vasija en el aire (no había B); b6a hoja 3 de pie otra vez; escala +5 % por hoja |
| **G2 Clip Kling** | MAD(primer fotograma, A) y MAD(último, B); salto máximo entre vecinos (corte interno); banda superior (22 % del cuadro) media y pico; energía media; 1080×1920 / 24 fps (ya existe) | < 6 · < 8 (bucle: MAD(primero, último) < 3) · vecinos ≤ 20 · banda < 1,5 media, < 4 pico · energía ≥ 0,8 | el corte interno de Seedance c15 (video 1); un clip congelado con A=B |
| **G3 Monotonía** (`una_pasada`, transformación, también insertos) | d(t) = MAD(fotograma t, B) no sube más de 2 en ningún tramo de 12 f; para cada fotograma, el más parecido entre los anteriores es el vecino inmediato; centroide del objeto monótono en el eje declarado | 0 regresiones | c13 vasija que vuelve al aire (f0008); c11 f0011→f0012; c12 |
| **G4 Textura de tiempo** (tras posterizar) | MAD a lag 24 y 48 en todo clip con movimiento; holds exactos de 2 (MAD = 0 dentro de cada pareja, > 0 entre parejas) salvo `hold_tail`/carta; ningún hold > 4 f no declarado; ≥ 12 imágenes distintas por segundo; en quietos, incremento de zoom constante entre pasos | lag 24/48 > 0,5 · desviación del paso de zoom < 5 % | c04/c07/c08/c10/c14/c17 (periodo 24 exacto), c09 (48), c09/c11/c13 a ocho, c12 holds 24-40, c05/c06/c18 zoom continuo |
| **G5 Inserto dibujado** | Variación del tamaño del objeto entre celdas (máscara alfa, no caja); orientación y estado absoluto por celda (checklist); carta cumplida (holds reales = declarados); nitidez figura/plató; ribete alfa oscuro; deriva del ancla | < 3 % · ≤ 2× · < 0,5 % de píxeles opacos · ≤ 4 px/f | lechuza que bombea 90,7 %; pegatina 5-434×; ribete 1,9 % 20 % más oscuro; pies ±80 px |
| **G6 Montaje** (lint del plan) | Cada corte a ≤ 0,15 s de una pausa (`silencedetect −35 dB ≥ 0,18 s`) o ≥ 0,4 s tras el fin de la frase; fin de voz ≥ 0,6 s antes del fin del bloque; ninguna acción física más larga que su palabra + 1 s; nunca dos quietos contiguos; escalas distintas contiguas; eje del contraplano = dirección declarada del plano anterior; sólo cortes secos; manifiesto emitido por el montador y coincidente con el plan | binario | metrónomo de 5,0 s (9 cortes a mitad de frase); c05→c06 dos quietos; c02→c03 misma escala; manos tocando durante «soltaron»; c03 señala a la derecha y c04 mira a la izquierda; manifiesto a mano que decía «vaivén» en c12/c13 |
| **G7 Video entero** | Hoja de contacto de un fotograma por plano en orden (`vista-todos` como PUERTA) + tira de 24 f del primer segundo por plano + preview; grano presente en todos los planos; luna en la misma posición y tamaño en todos los exteriores | varianza de alta frecuencia ±30 % entre planos · luna ±10 % | 18 dioramas de 18 maquetistas; c16 luna a la izquierda |
| **Compuerta humana obligatoria** en tres puntos: hoja de contacto de anclas (G0), reel de 15 s de los experimentos (E4), y el preview entero en movimiento (§0b del playbook) | — | — | «Nadie vio el clip en movimiento» |

---

## 6. Plan de experimentos para mañana

Orden: lo primero descarta lo más caro de equivocarse (que Kling no respete el fotograma final en el plano que sostiene el video); todo lo demás depende de eso. Presupuesto: **15,75 cr base + hasta 16,25 de regeneración ≤ 32**; ≈ $2,5 de OpenAI.

| # | Prueba | Plano | Qué se mide | Aprueba si | Coste |
|---|---|---|---|---|---|
| **E0** | Mundo + anclas + compuerta | lookdev, ficha Huitaca+olla, ficha lechuza (3 vistas + escala junto a vasija), ficha Bochica con vara; A y B de P13, P02, P14; hoja de contacto | G0 y G1 sobre los tres pares; el usuario mira la hoja | los tres pares aprobados con MAD de fondo < 2,0 y ninguna casilla en rojo; si un par falla, se rehace por $0,07 antes de seguir | ≈ $1,5 · 0 cr · 40 min |
| **E1** | **Clímax con Kling A→B** (decide el carril) | P13: Huitaca sola PM → lechuza pequeña sobre la manta; 5 s pro, `start_image` + `end_image`, prompt «feathers spread from the arm over the shoulders and hair, she shrinks and folds into the owl, ending exactly as the second image; never a standing bird-woman, no white heart-shaped face» | G2 (MAD primero/A, último/B, corte interno), G3 (d(t) hacia B sin subidas > 2, argmin = vecino en 60 muestras a 12 fps), checklist humano sobre 12 fotogramas (¿híbrido de pie? ¿especie?) | MAD(último, B) < 8 · 0 regresiones · en ningún fotograma una persona con cabeza de ave erguida · la especie es el búho moteado. Si falla sólo el tramo medio: una regeneración con prompt reforzado (8,75); si falla dos veces, el carril v2 se detiene y se reporta | 8,75 cr + $0,14 |
| **E2** | **Inserto dibujado con carta** (¿sobrevive el dibujo?) | P14: A vasija en el aire, B volcada con la mancha, plató = A sin la vasija, una hoja 3×3 de recortes de la vasija con la chicha pegada, carta: caída a dos con espaciado creciente, impacto a uno, rebote, hold 36 f sobre B; posterizado | G5 (tamaño del objeto entre celdas, nitidez, ribete), G3 (centroide y monótono), G4 (holds reales = carta, nada idéntico a lag 24 salvo el hold declarado), manifiesto emitido por `montar.mjs` | escala < 3 % · 0 regresiones · carta cumplida fotograma a fotograma · y en la tira de 24 f el usuario lee «cae y se queda». Si falla, los 3 insertos de Huitaca v2 pasan a Kling de 3 s (5,25 cr cada uno) y el dibujo queda sólo para quietos y planeo | ≈ $0,35 · 0 cr |
| **E3** | **Caminata con contacto** | P02: A Huitaca de perfil L→R al 25 % del ancho, B al 70 % en otra fase de zancada (orientación aprobada en E0); Kling 4 s, candado «head never turning toward the camera» | hoja de contacto a 12 img/s (48 imágenes) leída por el usuario: pies plantados sin deslizar, cara nunca a cámara; G2: banda superior < 1,5, MAD(último, B) < 8; la lectura de `transactions` confirma 7,0 cr (1,75 cr/s con medias) | ningún tramo de 3 imágenes con el pie apoyado deslizando; el fondo no salta; viendo c02 de v1 al lado, el usuario prefiere éste | 7,0 cr + $0,07 |
| **E4** | **Ley de tiempo, viendo** | Los clips de E1-E3 (y c03 de v1, el mejor del carril viejo) en tres versiones: 24 fps continuo, a dos (12 img/s + grano por dibujo), a tres (8 img/s); más P15 quieto con push-in escalonado y fuego de plancha de fondo; montados con voz07 real partida («quedó» / «cayó» / «se detuvo») y lecho, ≈ 15-20 s | G4 en las tres versiones; G6 en el reel (los tres cortes en pausa); el usuario lo ve en movimiento | el usuario elige una cadencia y dice que se lee como maqueta de papel y que «quedó» cae sobre el cambio y «cayó» sobre el impacto. Esa cadencia queda fijada; sin este visto bueno no se produce el video aunque las métricas pasen | 0 cr · $0,12 (plancha de fondo) |
| **E5** (sólo si E1 y E3 pasaron sin regenerar) | Bucle de multitud | P09: A plaza con la rueda, B = A girada un cuarto; 5 s | G2 con cierre (MAD primero/último si se pide A=B), conteo de bailarines en 6 fotogramas (checklist), sentido de giro único (correlación del desplazamiento horizontal de la banda de la danza no cambia de signo) | mismo número de figuras y un solo sentido de giro; el decorado no salta | 8,75 cr + $0,07 |

Al terminar el día: `docs/videos/stopmotion-interpolacion.md` §13 con los cuatro resultados y la cadencia elegida; decisión del usuario sobre la recarga (≈ 70 cr) para Huitaca v2.

---

## 7. Qué se descarta explícitamente, y por qué

- **El compositor de recortes como método de producción para figuras con contacto** (`componer.mjs` con escala por caja alfa, sombra sintética, ancla en línea recta): 12 de 17 defectos confirmados nacen ahí, y arreglarlo exige contacto sobre suelo en perspectiva, oclusores, sombra cizallada y desenfoque por profundidad —un departamento de VFX—. Sobrevive reducido para insertos ≤ 2 s y para el planeo sin contacto.
- **El vaivén como modo de ciclo y los ciclos dibujados en general**: todo ciclo de v1 salió invertido o doblado; en v2 los ciclos los ejecuta el modelo de video con conteo, o el plano es quieto.
- **Hojas de cuadro completo + alineador de máscara fija + mediana de 4 celdas** para objetos, manos y multitudes: el alineador empeora (19,6 → 27,9) y la mediana con n = 4 es un fantasma por construcción. `alinear.mjs`/`estabilizar.mjs` quedan sólo dentro de `fondo.mjs`, donde sí funcionan, con regla de rechazo.
- **Hojas en paralelo desde la misma maestra para gestos narrativos** y, en general, **hojas encadenadas de 12-15 por plano** (propuesta 1): lo primero reinicia el gesto en cada hoja; lo segundo apuesta contra lo medido en §6 («encadenar hojas hizo crecer la figura») y contra 0/18, con $28-45 y 10-14 h por video. De la propuesta 1 se rescatan la carta de exposición como contrato y el manifiesto emitido desde la lista real.
- **El stack de post en Python** (OpenCV 5, torch/MPS, RIFE, Depth-Anything, rembg; propuesta 3): nada de eso está instalado ni verificado, la GPU local no está documentada en este contexto y RIFE entre poses de papel a 1/8 s produce morfados. Se rescatan la emulsión única (grano por dibujo con semilla, viñeta), la regla de rechazo del alineador y la idea de biblioteca de fuego/luna de papel (opcional, fase 2).
- **Interpolación local** (`minterpolate`, RIFE) entre poses dibujadas: lo contrario del stop-motion; y la afirmación de que funcionó en c03 no está documentada.
- **Kling en 18-20 clips posterizados** (propuesta 5) y **17-19 clips Kling** (propuesta 2 tal cual): 150-230 cr y el look de papel entero en manos del modelo de video; v2 baja a 7 clips moviendo sólo lo que el verbo pide y deja el resto en dibujo y quietud. De ellas se rescatan la posterización única con grano por imagen, la puerta de monotonía contra B, el MAD de fondo A\|B, el tope de insertos, la puerta 1 en `import-mcp-clips.mjs` y el E4 de elegir la cadencia viendo.
- **Seedance como fallback dentro del carril y Gemini Omni Flash**: dos modelos son dos texturas más (D11); Gemini ya fue rechazado por el usuario en el bake-off de Bachué. Excepción única y registrada: el clímax, si Kling falla dos veces.
- **Sondas de visión de pago no medidas**: la compuerta la pasa un agente mirando la hoja de contacto (como se hizo en esta auditoría) y la aprueba el usuario; automatizarla con un modelo de visión queda como opción a medir, no como dependencia.
- **Ken Burns continuo a 24 fps del 12 %**, **la unidad «línea = 2 clips × 5 s»**, **`duration: 5` fijado antes de medir las voces**, **xfades** (ley 2) y **el manifiesto escrito a mano**.
- **Reutilizar las 18 maestras de v1**: 15 son render, 6 no vieron ninguna referencia y ninguna vio el lookdev; rehacer las 19 A cuesta $1,3 y es la parte barata. Se reutilizan las 9 voces, el guion aprobado y el lecho (reconstruido a 89,4 s).
