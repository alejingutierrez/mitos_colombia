# Bitácora de corridas del canal

Este archivo es el registro corrida a corrida del canal de video de mitosdecolombia.com: qué se hizo, qué costó, qué se mejoró respecto a la vez anterior, qué falló y dónde quedó cada decisión. El inventario de lo que existe está en `historia-audiovisual.md`, el contrato en `PRODUCCION-END-TO-END.md` y el cómo en `pipeline-v4-mcp.md`; **esto es la memoria de la operación**, no el manual.

**Regla: toda corrida se anota aquí al terminar, la haga quien la haga y aunque no gaste un crédito.** Cuenta como corrida cualquier cosa que produzca o cambie un máster, una tanda de clips, una tanda de voces o lechos, un experimento de método, o un veredicto del usuario. La entrada se escribe en el mismo turno en que se cierra el trabajo —no al día siguiente, no "cuando haya tiempo"— y se commitea junto con el plan, el `jobs.json` y el `import-map.json` de esa corrida. Una corrida sin entrada aquí es trabajo que el proyecto no puede reutilizar.

**Convención de fechas:** hora local de Bogotá. Los documentos del repo escritos en UTC van un día adelante en las corridas de noche (21:56 local = 02:56 UTC del día siguiente); cuando una fecha choque con la de otro doc, manda la local.

---

## Plantilla de entrada (copiar tal cual)

```markdown
## AAAA-MM-DD · <Mito> <vN> · <carril>

**Qué se hizo.** Dos o tres frases: el alcance real de la corrida, no la intención.

**Resultado medido.**
- Clips: N pedidos · N a la primera (N/N) · N regeneraciones reales (comparando `job_id` vigente vs `replaced`)
- Máster: `<archivo>.mp4` · <dur> s · 1080×1920 24 fps
- Sonoridad: I = <x> LUFS · LRA <x> LU · true peak <x> dBFS  (`ffmpeg -i <máster> -af ebur128=peak=true -f null -`)
- Habla: <x> s de <dur> s = <x> %
- Pared: generación <x> min · ensamblaje <x> min
- QC: `scene_score` máx <x> · avisos de `validate-plan --secos`: <n>

**Coste.**
- Higgsfield: <N> cr (<modelo> a <x> cr/clip) · saldo antes <x> → después <x>
- OpenAI (imágenes): USD <x> en <n> llamadas
- ElevenLabs: <n> caracteres de voz (+ <n> de música si se generaron lechos nuevos)

**Qué se mejoró respecto a la corrida anterior.** El cambio concreto y el número que lo prueba. Si no se mejoró nada, decirlo.

**Qué falló y qué se aprendió.** Fallos de operación y de modelo, con la toma o el comando exacto. Una regla por fallo, escrita para que la próxima corrida no la repita.

**Decisiones del usuario.** Literales, con fecha. Si no hubo, escribir "ninguna" — el silencio no es aprobación.

**Pendiente.** Lo que queda abierto, con quién lo desbloquea y qué cuesta.

**Artefactos commiteados.** plan · guion · `jobs.json` · `import-map.json` · `lecho-vN.wav.json` · hojas de QC. (Nunca los `.mp4` ni el `.wav` del lecho: `content/videos/.gitignore`.)
```

---

# Entradas

## 2026-09-16 · Bachué v7 · montaje por selección, sin generación

**Qué se hizo.** Se publicó una **mesa de montaje escena por escena** (artifact `68e85cf2-6d4d-4cf6-97e6-39fe4189d7a6`): una fila por escena con todas las variantes existentes lado a lado —164 tomas comparables repartidas en tres mitos (Bachué 18 escenas × 4 variantes = 72; La aparición 18 × 2 = 36; El Tequendama 19+19+18 = 56)—, con la elección guardada en la base de datos de la propia página. El usuario eligió las 18 tomas de Bachué una por una y con ellas se montó `bachue-final-v7-seleccion.mp4`. **No se generó ni un solo clip.**

**Resultado medido.**
- Clips: 0 generados. 18 tomas elegidas de tres tandas ya existentes: **9 grok (20 ago) · 5 Seedance 2.5 · 4 Gemini Omni Flash 1.1**.
  `c01` gemini · `c02` seedance · `c03` grok · `c04` seedance · `c05` seedance · `c06`–`c12` grok · `c13` gemini · `c14` gemini · `c15` grok · `c16` gemini · `c17` seedance · `c18` seedance.
- Máster: `bachue-final-v7-seleccion.mp4` · **102,458333 s** · 1080×1920 24 fps · 147.780.167 B · h264 CRF 18 + AAC 192k.
- Sonoridad: **I = −16,1 LUFS · LRA 17,1 LU · true peak −1,5 dBFS** (medido).
- Habla: **58,05 s = 56,7 %** del máster, medido con `ffmpeg -i <máster> -af silencedetect=n=-25dB:d=0.2 -f null -` sumando silencios y restando del total. (Es la única cifra de habla reproducible del canal; las de los otros másters se midieron sobre los WAV de voz y no son estrictamente comparables.)
- Entregas: `-social` 96.946.829 B a 7,37 Mb/s · `-preview` 720×1280, 12.710.364 B. Los tres, 2.459 fotogramas exactos.
- Audio: **idéntico al de la v6** — mismo `voces-v4/`, mismo `lecho-v6.wav`, mismos parámetros de mezcla (verificado campo a campo contra `plan-v6.json`). Lo único que cambió fue la imagen.

**Coste.** 0 créditos de Higgsfield · 0 USD · 0 caracteres de ElevenLabs. Toda la corrida es disco y ffmpeg.

**Qué se mejoró respecto a la corrida anterior.** Se inventó la compuerta humana más fuerte que ha tenido el proyecto: **veredicto por escena con las alternativas a la vista**, en vez de un pulgar arriba o abajo sobre un máster entero. Efecto inmediato: **cuatro tomas de la tanda Gemini, que se había rechazado entera el 11 de septiembre por 517,5 cr, volvieron al aire**, y nueve tomas de grok archivadas cuatro semanas también. El descarte dejó de ser basura y pasó a ser inventario.

**Qué falló y qué se aprendió.**
- **La ley 4 («no se mezclan modelos dentro de un mismo video») quedó rota a propósito.** Hay que reescribirla: lo que sigue prohibido es mezclar modelos *dentro de una tanda de generación* —para poder comparar—; el montaje final sí puede escoger la mejor toma de cada tanda.
- **Mezclar tandas obliga a normalizar tres cosas antes de tocar el plan**: resolución (las nueve de grok venían a 720×1280), duración (cuatro de grok duraban 6,041667 s; Seedance 5,041667; Gemini 5,013) y fps/SAR. Las 18 quedaron en `clips-seleccion/` a `1080,1920,1:1,24/1`, 120 fotogramas, 5,000000 s exactos.
- **`-map 0:v:0` no es paranoia:** los clips de grok traen tres streams (h264, AAC y un **mjpeg como `attached_pic`**); un `-map 0:v` a secas se lleva los dos de vídeo y rompe todo lo que venga detrás.
- **Coste visible del reescalado:** la mitad del metraje es 720p subido a 1080 con lanczos. Lanczos devuelve nitidez aparente, no información, y al lado de una toma Seedance nativa se nota en la textura de papel, que es donde vive la identidad del canal. Regla: **mezclar tandas está permitido; mezclar resoluciones nativas tiene un coste visible.** La opción limpia, cuando haya créditos, es regenerar la toma elegida con el modelo vigente y el mismo keyframe.
- **Punto ciego de esta corrida:** `clips-seleccion/` no tiene `import-map.json` ni hoja de QC. El único rastro es `seleccion-usuario.json`, que sí guarda por toma la tanda, la **ruta absoluta del origen** (en otros worktrees) y el formato original. **Consérvese ese archivo como el equivalente del import-map para montajes por selección**, y no se borren nunca los clips de una tanda descartada: las cuatro carpetas de Bachué (`clips/` de agosto en `myth-mobile-design-c8ea4f`; `clips-v1/` en `higgs-field-gpt2-2k-value-ef422e`; `clips-v4/` y `clips-v5-seedance/` en `elegant-matsumoto-11a141`) son el activo que hizo posible la v7.
- Tampoco quedó log de `validate-plan --secos` previo al ensamblaje. El plan pasa (no trae `xfade` ni `transition_dur`), pero no hay prueba.

**Decisiones del usuario.** Eligió las 18 tomas una por una en la mesa de montaje (16-sep). **No hay veredicto escrito sobre el máster resultante**: no existe `aprobado_video` en `_notas` del plan ni ✅ en la cola §9, que sigue declarando la v6 como entrega.

**Pendiente.**
- Decir cuál es el Bachué bueno, v6 o v7, antes de publicar nada.
- Añadir a la cola §9 la fila de la v7 y de la mesa de montaje.
- Convertir el patrón en herramienta: hoy la mesa se armó a mano para tres mitos.

**Artefactos commiteados** (commit `e8f6e6b3`, 10:11): `plan-v7-seleccion.json` (con un campo `_tanda` por bloque que deja escrito de qué modelo salió cada toma), `seleccion-usuario.json`, `historia-audiovisual.md`. Máster montado 10:10, copiado a `~/Downloads` a las 10:13, byte-idéntico (md5 `0c67606ef851ff2164790635a1b49241`).

---

## 2026-09-12 / 13 · Huitaca v1 y el carril de stop-motion dibujado · sin modelo de video

**Qué se hizo.** Con 32 créditos de saldo se abrió un carril entero sin modelo de video: animar dibujando con `gpt-image-2.5-sunburst` y montar con ffmpeg. Doce pruebas de método en el laboratorio, un video completo (Huitaca v1, 18 planos), un panel adversarial que lo destripó, un rediseño v2 con tres reels de cadencia, un carril v3 de flipbooks y un carril v4 de cadena con ancla. **Cero créditos de Higgsfield en todo el tramo.**

**Resultado medido.**
- Máster: `huitaca-final-v1.mp4` · **98,458333 s** · 18 planos de 5,00 s · 1080×1920 · 47,2 MB (el más liviano del canal).
- Sonoridad: **I = −16,2 LUFS · LRA 13,8 LU · true peak −1,3 dBFS** — dentro de la banda del canal. El video estaba en verde y era inservible.
- `validate-plan`: 0 errores, **6 avisos de aire muerto ignorados**.
- Panel adversarial de **34 agentes**: **20 defectos confirmados, 0 refutados**, con evidencia por fotograma (`videos/huitaca/qc/panel-resultado.json`).
- Laboratorio: 12 clips de 5 s, ledger de **194 llamadas y $15,56**. Progresión medida: bisección pura (irregularidad 3,06×) → claves (1,52×) → plató fijo por mediana (deriva 0,88) → hoja de poses recortada (**deriva 0,00 por construcción**, $0,0133 la pose) → plancha con hojas 2×2 (1,68×, $1,47 el clip).
- Reels de cadencia: `reel-E4-a2` **8,940 s** (a dos, 12 dibujos/s), `reel-E4-a3` **8,940 s** (a tres, 8 dibujos/s), `reel-E4-continuo` **8,917 s** (24 fps interpolados + grano).
- Flipbooks v3 de P13: 16 poses `subidas 0 / bombeo 0`; 36 poses `subidas 3 / bombeo 9` (**rechazada por dos verificadores**); 36b `subidas 0 / bombeo 5` (aprobada técnicamente).
- Cadena con ancla v4: deriva entre vecinos **4,51 → 2,17**, retrocesos **1 → 0**; $3,18 el segundo.

**Coste.** **0 cr de Higgsfield.** OpenAI: $15,56 el laboratorio (194 llamadas) · **$4,37 Huitaca v1** (54 llamadas) · $8,23 el carril v3 de flipbooks · $3,18/s el carril v4 · $0,117 la hoja de lookdev de 4 decorados en una sola llamada · $0,181 el inserto dibujado de P14.

**Qué se mejoró respecto a la corrida anterior.** Se demostró que un video entero del canal se puede montar **sin un solo crédito de Higgsfield** y por menos de cinco dólares. Y se midió, plano a plano, qué técnica de animación dibujada aguanta y cuál no.

**Qué falló y qué se aprendió.** Es la corrida más cara del proyecto en lecciones y la única con un rechazo frontal del usuario.
- **Quince de los 18 clips se montaron en vaivén (palíndromo).** La gota de chicha cae y vuelve a subir (`c10`); la vasija cae, se estrella y vuelve al aire (`c13`); la rueda de danza gira y desgira 2,5 veces con periodo exacto de 48 fotogramas (`c09`); `c17` parpadea 10 veces en 5 s (periodo 24). `c02` repite pierna dos de cada tres pasos y patina 238 px con las puntas saltando ±80 px por imagen. `c16` mete **una laguna al fondo en un mito cuyo deslinde es "ni una gota de agua"**.
- **Por qué el QC dio el visto bueno: mide magnitud, no orden.** Un palíndromo es simétrico y la métrica también, así que una acción y su inversa dan el mismo número. La hoja de un fotograma por plano (`vista-todos.jpg`) se armó **después** de montar, o sea que fue subproducto y no puerta. Y **nadie vio un clip en movimiento**.
- **Las tres reglas que salen de aquí, y no se negocian:** (1) ninguna entrega sin ver el video entero en movimiento — métricas verdes no son una entrega, son un permiso para mirar; (2) la compuerta humana va en **tres puntos**: hoja de contacto de las anclas antes de gastar un crédito, reel corto en movimiento al cambiar de método o cadencia, y el preview entero antes de cerrar; (3) toda métrica nueva tiene que medir **orden** —monotonía hacia el estado final, periodicidad a lag 24 y 48, signo del desplazamiento—: si da el mismo número para una acción y su inversa, no sirve como puerta.
- **El deslinde del mito hay que meterlo en los invariantes que viajan con cada prompt de imagen**, no sólo en el plan editorial y el guion. El arreglo quedó en `huitaca/planos/_comun.json`, en dos líneas —una prohibitiva y una afirmativa, porque prohibir sin dar el reemplazo deja al modelo eligiendo— y con eso el lookdev v2 pasó su compuerta a la primera en los cuatro decorados.
- Tres límites del modelo, medidos: **no traslada la figura**, no sabe qué es "la mitad" de un gesto, y **redibuja el decorado entero en cada fotograma**. La cadencia se decide al montar, no al generar.
- El criterio «el fotograma más parecido entre los anteriores debe ser el vecino inmediato» quedó **retractado**: marcó 4 falsas regresiones sobre redibujos de cuadro completo. Sirve la monotonía contra la pose final, no el argmin.
- **El QC de los buenos no dejó rastro:** Huitaca, el único rechazado, es el único mito con `qc/` y `qc-anim/` en disco. Desde ahora la hoja de contacto se commitea — pero ojo, hoy `content/videos/.gitignore:22` ignora `*.png` y `qc-sheet.mjs` escribe PNG: **la regla no funciona hasta que el script escriba `.jpg` o se añada una excepción al gitignore.**

**Decisiones del usuario.** Sobre Huitaca v1: **«actualmente se ve desastroso»** (12-sep). Sobre el carril v3 de flipbooks: **«no me gusta este approach, quiero que cambiemos completamente de estrategia»** (13-sep).

**Pendiente.**
- **La cadencia (reels E4 a2 / a3 / continuo) sigue sin veredicto.** El propio diseño v2 dice que «sin este visto bueno no se produce el video aunque las métricas pasen»: mientras siga abierta, **Huitaca v2 no arranca**, y Huitaca es el único mito con el máster rechazado y sin reemplazo.
- Las cuatro piezas de `v2/planos-out/P13/v4/` no están commiteadas.
- Las puertas G2–G5 del rediseño v2 dependen de un `qc-clip.mjs` **que no existe**.

---

## 2026-09-11, noche · Bachué v4-gemini (rechazado), Bachué v5, el cierre de canal y El Dorado · Seedance 2.5 por MCP

**Qué se hizo.** Cuatro cosas en menos de dos horas: el bake-off de Gemini sobre los keyframes de Bachué que el usuario pidió (20:00–20:16), el remake con Seedance catorce minutos después (20:30), la producción del **cierre de canal** y el re-ensamblaje de los tres videos entregados como `-v6-con-cierre` (21:06–21:24), y **El Dorado** con el presupuesto exacto (21:53–21:55).

**Resultado medido.**
- **Bachué / Gemini Omni Flash 1.1**: 18 clips, **13/18 a la primera**, 5 regeneraciones reales. Máster `bachue-final-v4-gemini.mp4`, 94,00 s. **Rechazado.**
- **Bachué / Seedance 2.5**: 18 clips, **18/18 a la primera, ni un `replaced`**, con exactamente los mismos keyframes. Pared **9,2 min** (01:18:49Z → 01:27:59Z), render por ola 3,2–5,9 min. Máster `bachue-final-v5-seedance.mp4` 94,00 s (I = −16,2 LUFS, pico −1,3 dBFS) y luego `-v6-con-cierre` **102,46 s**.
- **Cierre de canal**: 3 clips Seedance, uno descartado (el pulgar cruzaba el vidrio). `cierre-canal-v1-mudo.mp4` = **8,416667 s = 202 fotogramas** (en los planes se escribe `8.42`). Una sola voz de 8,4167 s con las dos tomas ya colocadas dentro (0,45 s y 4,35 s), 91 caracteres.
- **El Dorado**: **17/17 a la primera**, cero regeneraciones reales. Máster `el-dorado-final-v1.mp4` **97,458333 s**, con el cierre ya dentro. Habla 59,5 s = 61 %. `scene_score` máximo **0,073** — los 17 por debajo del umbral de 0,08.

**Coste.**
- Gemini: **517,5 cr tirados** (405 en los jobs vigentes + 112,5 en las cinco regeneraciones), a 22,5 cr/clip.
- Bachué Seedance: **810 cr** (18 × 45).
- Cierre de canal: **135 cr una sola vez** (3 clips de 45, uno descartado) + ~0,6 USD de imagen. A partir del segundo video su coste marginal es 0 — pero **no es gratis y no debe contarse como tal.**
- El Dorado: **765 cr de un saldo de 797.** Sin un crédito de margen. Los tres planos de riesgo (`c07` resina sobre la espalda, `c08` soplo de polvo de oro, `c16` el oro se desprende bajo el agua) se enviaron primero como piloto de moderación — 135 cr de esos 765 — y pasaron **3/3**.
- Saldo al terminar la noche: **32 cr**. Es el saldo que sigue vigente: no se ha gastado un crédito de Higgsfield desde entonces.

**Qué se mejoró respecto a la corrida anterior.** El guion de El Dorado se escribió **para 17 planos** (8 bloques de 2 clips + 1 de 1), no se recortó uno de 18: la última línea baja a 10 palabras y su `window` a 4,6 s. Y el pudor del canon se usó como **anti-moderación**: figura siempre de espaldas, guayuco descrito en cada prompt, rostro y torso de frente en la lista NOT. Pilotar los tres planos difíciles por 135 cr en vez de uno fácil es lo que convirtió el presupuesto exacto en una tanda limpia.

**Qué falló y qué se aprendió.**
- **Gemini tiene tres defectos medidos, anotados uno a uno en `clips-v4/jobs.json`:** deriva de plano (3 de 18: la noche estrellada se vuelve día gris en `c06`; un fondo gris se vuelve lago con nevados en `c14`; `c04` cambia a otro lago con pinos), desintegración de materia (`c01`, la niebla se vuelve bolas de algodón literales) y **una salida en horizontal 1920×1080 pidiéndole `aspect_ratio:"9:16"`** (`c05`). **Ese clip lo cazó el guardián de resolución de `import-mcp-clips.mjs`, no el ojo: nunca se importa sin él.** La mitad de precio no compensa.
- Ojo con los nombres: `gemini_omni` y `gemini_omni_flash_1_1` son modelos distintos; el primero es 720p máximo y no acepta `start_image`.
- **El cierre va como un bloque más del plan, nunca concatenado aparte**, para que el lecho del video siga sonando por encima y no haya costura de audio. Eso obliga a construir el lecho con la duración **total** (18×5 + 4 + 8,42 = 102,42).
- **El cierre destapó el bug de `zoompan`:** `-loop 1 -t` ya entrega N fotogramas y `zoompan` con `d=N` emite N por cada uno, así que una placa de 4 s salía de 400 s. Nunca se notó mientras la placa iba al final; en cuanto se puso el cierre detrás, la placa se comió el video. El arreglo es el `-frames:v` de `assemble-video.mjs`. **Si un cierre "desaparece", mira el bloque `still` anterior.**
- **Trampa contable de El Dorado:** su `import-map.json` muestra 13 clips con `replaced` y 1.080 cr "reemplazados" **que nunca se gastaron**. Son reimportaciones del mismo `job_id`, causadas por una trampa de zsh (`set -- $var`, que no separa por espacios) en un bucle de descarga. **`replaced` no implica regeneración: hay que comparar `job_id`.**
- El Dorado es también el **incumplimiento vivo del protocolo**: `guion-el-dorado-v1.json` **no tiene campo `aprobado`** y aun así gastó 765 créditos. La ley 0b existe justamente para impedir eso.
- Dos tomas quedaron anotadas como desviadas y sin resolver: `c09` (el heredero levanta más las manos de lo pedido) y `c06` (abre más oscuro que su keyframe). Rehacerlas cuesta 90 cr; no había.

**Decisiones del usuario.** Pidió la tanda de Gemini y la rechazó entera: **«no me gusta»** (11-sep). Ningún veredicto escrito sobre El Dorado: la cola §9 no le pone ✅, `channel-dna` lo llama «EN PRODUCCIÓN» y en `~/Downloads` está la copia de entrega con nombre editorial de las 21:55. **Se entregó; falta el veredicto.**

**Pendiente.** El veredicto de El Dorado · las dos tomas `c06`/`c09` (90 cr) · recargar créditos: con 32 cr no hay ni un clip Seedance.

---

## 2026-09-11, 19:04–19:16 · El salto del Tequendama v5 · Seedance 2.5 por MCP

**Qué se hizo.** 19 clips de Bochica/el Tequendama con Seedance 2.5 a 1080p, derivando los prompts del `movimiento-v4.json` auditado el 31 de agosto y añadiéndoles **una sola cosa**: el candado de toma continua.

**Resultado medido.**
- Clips: **19/19 a la primera. Cero regeneraciones.** El mejor resultado del carril.
- Pared: **9,5 min** para los 17 clips con sellos (`00:05:05Z → 00:14:36Z`); los dos pilotos (`c12`, `c14`) se lanzaron antes y no quedaron anotados. Render por ola 2,9–4,1 min.
- Máster `el-tequendama-final-v5.mp4` 99,00 s; con cierre, `-v6-con-cierre` **107,458333 s**, el video más largo del canal.
- Sonoridad (documentada en `pipeline-v4-mcp.md`): I = −16,1 LUFS · LRA 11,1 LU · pico −1,4 dBFS.
- Habla: **67 s de 99 s = 68 %**. `validate-plan --secos`: 0 errores, **2 avisos**.
- `scene_score` máximo **0,125**, y era el arranque de un push-in, no un corte.

**Coste.** **855 cr** (19 × 45). Saldo antes ≈ 1.607 cr.

**Qué se mejoró respecto a la corrida anterior.** Dos palancas, las dos de coste cero, y se nota en todo:
1. **El guion pasó de 10-15 palabras por línea a 17-19** (967 caracteres, 10 líneas). La narración saltó del **44 % al 68 %** del metraje y los avisos de aire muerto cayeron de **8 a 2**. Alargar la línea no alarga el video: rellena el hueco que ya estaba pagado, porque la ventana la fijan los clips, no el texto.
2. **El candado de toma continua desde el primer envío**, en dos partes y en dos sitios del prompt: `The whole clip is ONE continuous take from a single camera setup` **en la línea de cámara**, y `no cuts, no close-up inserts, no second shot` **en la NOT-list**. Los 19 prompts salieron del v4 de agosto en minutos, añadiendo sólo eso (el v4 tiene 0/19 candados; el v5, 19/19).
3. Los lechos son los mismos tres de la narración de `el-tequendama` en la web —`14-tormenta-en-la-sabana → 02-tambor-ceremonial → 11-rio-que-baja`— pero **en orden invertido** respecto a la web (`11 → 02 → 14`), porque el video abre con la tormenta y cierra con el río. La consulta `SELECT bed_slugs FROM myth_narrations WHERE myth_slug = …` da la terna; **el orden se decide por acto.**

**Qué falló y qué se aprendió.**
- **Antes de escribir prompts nuevos, mirar si el mito ya tiene un `movimiento-vN` auditado.** Aquí eso ahorró la fase más cara en atención del pipeline (escribir 18-19 prompts mirando cada keyframe son ~55 min) y no falló un solo clip.
- Tres tomas (`c15`, `c16`, `c17`) **se enviaron con un prompt redactado al vuelo** en vez del auditado, por prisa. Pasaron el QC y se aceptaron, pero la regla queda escrita: **el archivo de movimiento refleja lo que se envió, no la intención** — si hay desvío se guarda el texto enviado en `prompt` y el auditado al lado, con el motivo. Así está en `movimiento-v5-seedance.json`.
- `c06` y `c10` rebotaron con 429 y `c07` fue interceptada por un preset. **El 429 rebota request a request, no el lote**: de una llamada de 9 entraron 7. Se reenvía sólo el rebotado, tal cual; es normal, no es un error de operación.
- El preset que hay que declinar es **el exacto que devuelva ese request**, no uno fijo: aquí apareció `DROWN IN MUSIC` (`f1821f84-…`), el único caso en 110 jobs registrados frente a los 109 de `IN THE DARK` (`24bae836-…`).

**Decisiones del usuario.** Entregado el 11-sep; ✅ en la cola §9.

**Pendiente.** Ninguno propio del mito.

---

## 2026-09-09, 22:16–23:28 · La aparición del hombre · el mismo mito dos veces en una noche: Kling 3.0 vs Seedance 2.5

**Qué se hizo.** Arranca el carril v4 por MCP. Se rodó el mismo mito, con los mismos 18 keyframes y el mismo guion, **dos veces la misma noche**, para elegir el modelo estándar del canal con datos y no con opiniones.

**Resultado medido.**
- **Kling 3.0 pro**: 18 clips, **16/18 a la primera (89 %)**, 2 regeneraciones (`c09`, `c17`). Aceptó 17 jobs a la vez sin un solo 429.
- **Seedance 2.5 `omni_reference` 1080p**: 18 clips, **17/18 (94 %)**, 1 regeneración (`c15`). Pared **40 min**, con 4 rebotes de 429 (`c15`–`c18`, con 12 encolados) y una regeneración.
- Los dos clips que Kling falló salieron bien **a la primera con Seedance**, mismo keyframe y mismo beat.
- Másters: `…-final-v1.mp4` (Kling) y `…-final-v1-seedance.mp4`, los dos 94,00 s. Sonoridad del entregado: I = −16,6 LUFS · LRA 17 LU · pico −1,5 dBFS.
- Habla: **41 s de 94 s = 44 %**. `validate-plan`: **8 avisos** de aire muerto. Guion de 9 líneas, 10-15 palabras, 664 caracteres.
- Con cierre, más tarde: `-v6-con-cierre`, **102,458333 s**.

**Coste.** Kling **175 cr** (18 × 8,75 + 2 regeneraciones) · Seedance **855 cr** (18 × 45 + 1 regeneración). **1.030 cr en una noche por un solo mito** — el precio de decidir con evidencia.

**Qué se mejoró respecto a la corrida anterior.** Se abandonó el carril web (cola de navegador, una toma cada 29 minutos) por el MCP: con los keyframes subidos y los prompts escritos, **la generación de un video entero son 10-40 minutos de pared, no una noche**.

**Qué falló y qué se aprendió.** Es la corrida que fijó casi todas las reglas del carril vigente.
- **El título nunca había sido Asimovian.** `sharp` acepta `{text:{fontfile:…}}` y devuelve un PNG perfectamente válido… en Helvetica: el libvips de macOS sólo trae el backend CoreText de Pango, así que **cualquier fuente no instalada en el sistema cae a Helvetica sin un aviso**. Se verificó de dos maneras: cuatro renders con `.woff2` distintos salieron byte-idénticos, y el título del primer máster era Helvetica. Costó **45 minutos de diagnóstico y dos reensamblajes**, y explica retroactivamente la ronda r2 de Bochica v4 del 31 de agosto. Arreglo: `render-text.swift`, 84 líneas que cargan la fuente **por archivo** (`CTFontManagerRegisterFontsForURL`) y devuelven la familia real; el ensamblador **aborta** si no coincide con `title_font_family`. Cada corrida deja la prueba positiva en el log: `[assemble] título en Asimovian (Asimovian-Regular)`.
- **Defectos por modelo, medidos:** Seedance es multi-shot por diseño y mete un plano nuevo dentro del clip (`c15`, corte a primer plano de manos en los últimos 0,9 s, `scene_score` **0,159**, el más alto del carril) — de ahí nace el candado de toma continua, y la regla de no pedirle endpoints de cámara ambiciosos, que convierte en corte. Kling endereza al personaje solo y lo gira a cámara (`c09`, 0,102) y comete errores **semánticos** que ninguna métrica ve: las mantas abiertas leídas como alas puntuaron **0,022** (`c17`). **Ése es el argumento de que la hoja de contacto no se sustituye con números.**
- **El bucle de subida de keyframes a mano falló dos veces** (`c18` del video 1, y los 19 keyframes del video 2 desplazados un puesto): `media_upload` no devuelve `filename` —el único vínculo entre archivo y URL es la posición del array— y los arrays de zsh empiezan en 1. De ahí sale `subir-keyframes.mjs`, que empareja por índice en node, exige N archivos = N URLs y aborta si algún PUT no da 200. **No volver a hacerlo a mano.**
- Se fijaron los tres parámetros que cuestan dinero si se olvidan: `mode:"omni_reference"` (con `t2v` el `start_image` se ignora), `resolution:"1080p"` (el default es 720p) y `generate_audio:false` (el default es `true`). Y `declined_preset_id`, sin el cual el recomendador **intercepta el request y no encola nada**.

**Decisiones del usuario.** **«Vamos con seedance como estándar»** (9-sep): Seedance 2.5 queda como modelo del canal, no por precio sino por desperdicio —un clip rehecho cuesta lo mismo que uno nuevo—, y Kling queda como la alternativa barata (1,75 cr/s lineal: 18 clips por 157,5 cr en vez de 810). El máster Seedance se aprobó el 11-sep.

**Pendiente.** El QC automático propuesto en la retrospectiva (`qc-clips.mjs` con `scene_score` y YDIF, umbral 0,08, estimado en 1 h «antes del video 2») **nunca se construyó**: se midió a mano en los videos 2, 3 y 4 (0,125 · 0,085 · 0,073) y sigue sin script.

---

## 2026-08-31 / 09-01 · El carril web "unlimited" y su final · Seedance 2.5 por el navegador

**Qué se hizo.** Se probó generar sin gastar créditos usando el toggle Unlimited de la web de Higgsfield, con un operador único y una cola de navegador. Salieron 19 clips de Bochica con tres rondas de montaje, 18 clips de Bachué, el lote congelado de 35 mitos preparados, y el final del carril.

**Resultado medido.**
- **31 ago 17:37–18:23**: cuatro versiones del plano del salto en Seedance 1080p, juzgadas una por una por el usuario. v1, v2 y v3 rechazadas; **v4-doctrina aprobada**.
- **31 ago 19:58–22:47**: 19 clips 1080p de Bochica + tres rondas de montaje: r1 con subtítulos quemados y título fino → r2 sin subtítulos y con el título caído a Helvetica → r3 sin título, 94,58 s.
- **31 ago 23:09 → 1 sep 06:12**: 18 clips de Bachué, **una toma cada ~29 minutos** → `bachue-final-v1-no-title.mp4`, 86,42 s, el Bachué más corto.
- **1 sep 03:50**: se congela `video-batch-2026-08-31.json` con **35 entradas**: 2 completas y **33 `prepared`** con sus keyframes, voces, prompts y plan escritos y **cero clips**.
- **1 sep 05:31–13:41**: la cola encola **598 clips**, se degrada a una toma cada 1 h 44 min y el usuario la cancela (`cancelled_by_user`). Sobreviven 2 tomas de `bochica-maestro`. **Ahí muere el carril web.**

**Coste.** 0 créditos de Higgsfield (ése era el punto) y un coste de reloj inaceptable.

**Qué se mejoró respecto a la corrida anterior.** Se subió de 720×1280 a **1080×1920 nativo**, y de grok a Seedance 2.5: la calidad de imagen del canal da su salto aquí. Y nació la **doctrina de movimiento v2**, con una causa raíz que sigue siendo válida: Seedance **no tiene negativos reales**, así que «The characters only breathe and gesture softly» se leía como una **orden literal de quietud**. Lo que se pide es lo que pasa.

**Qué falló y qué se aprendió.**
- **Gratis no es barato.** Una toma cada 29 minutos, degradándose a 1 h 44, no es un pipeline. El carril v4 por MCP hace lo mismo en 10-15 minutos de pared por video entero.
- **Los 33 paquetes preparados siguen sin usar, y no sirven tal cual**: sus `movimiento-v1.json` declaran `"model": "Seedance 2.5 web unlimited"` con el esquema `{myth, shots:[…]}`, incompatible con el `{modelo, clips:{cNN}}` del carril v4; y sus voces son `.mp3` con una **tercera** voz (`bNziytBsHtCSsgcPplG9` en `eleven_flash_v2_5`). Convertirlos es trabajo mecánico de 0 créditos, y nadie lo ha hecho.
- **Nadie escribió por qué se abandonó el lote.** Existe el archivo congelado y existe el `cancelled_by_user`; la decisión no está en ningún commit.
- Ninguno de los cuatro másters del carril web tiene veredicto escrito. En particular, **no consta cuál de las tres rondas de Bochica v4 era la buena** — hoy sabemos que r2 y r3 arrastraban el título caído a Helvetica sin que nadie lo supiera.

**Decisiones del usuario.** Sobre el plano del salto: v1, v2, v3 **«aún no se ve con suficiente vida»**; v4 **«ahora sí me gusta»** (31-ago). Cancelación de la cola del navegador (1-sep). Sobre los másters del carril: nada.

**Pendiente.** Portar los **30 paquetes** que siguen preparados (33 menos los tres ya producidos) al esquema v4 y relanzar sus voces en WAV con la voz oficial. Hecho eso, cada video siguiente cuesta sólo los créditos de sus clips y ≈ 2,5 h de trabajo.

---

## 2026-08-19 / 23 · El MVP: nace el canal, el casting de voces y los dos primeros másters · grok por MCP

**Qué se hizo.** En cuatro días se levantó el canal entero desde cero: dos pilotos de modelo, la primera tanda de 18 clips, un bake-off de modelos, una capa de SFX, un casting editorial de seis másters completos, un segundo mito, tres modelos de voz y, al final, los dos primeros videos entregados.

**Resultado medido.**
- **19 ago 23:40**: pilotos sobre el mismo keyframe `b2` de Bachué — `piloto-grok-b2.mp4` (10,04 s) y `piloto-kling-b2.mp4` (5,04 s). **Gana grok por precio: 1,5 cr/s es el piso de la plataforma.**
- **20 ago 00:40–01:12**: 18 clips grok 720×1280 de Bachué → **`bachue-v1.mp4`, 101,88 s**, con voz OpenAI `gpt-4o-mini-tts` ("ash"). Ocho de los 18 clips salieron de 6,04 s y no de 5,04.
- **20 ago 11:42–11:59**: bake-off de la laguna (kling3 / wan2.7 / seedance-mini) y 4 demos de SFX → **`bachue-v2-ash.mp4`, 98,96 s**, con crossfades, título y SFX, **a coste cero: mismo metraje**.
- **20 ago 19:15–19:47**: **casting de seis másters completos** (`mvp-a`…`mvp-f`), seis guiones y voces distintas sobre el mismo metraje, 98,58 s cada uno.
- **20 ago 22:02–22:05**: 18 clips grok de Bochica — **18/18 sin un rechazo**, la primera corrida perfecta del canal, ~35 min.
- **23 ago 01:13–01:15**: **`bochica-final.mp4` (90,58 s)** y **`bachue-final.mp4` (98,58 s)**, los dos primeros másters entregados.
- **23 ago 01:27–01:46**: «el duelo del Tequendama», 30 archivos comparando grok / Kling 4K / Seedance 2.5 / Seedance 2.0, con dos medias películas de 29,46 s.

**Coste.** Bachué **160,3 cr** (con piloto) + ~6 USD · Bochica **143,65 cr** · el duelo del Tequendama **482,5 cr** · bake-off y demos, el resto. La voz "ash" se pagó en la cuota de OpenAI.

**Qué se mejoró respecto a la corrida anterior.** No había anterior: aquí se fija todo lo que aún sostiene el canal — el formato 9:16 a 24 fps, la estética de maqueta de papel, los 9 bloques narrativos, el mapeo `bN → c(2N−1), c(2N)`, la doctrina de dirección (el clip A plantea y el B revela; bookend de objeto; el primer plano de rostro reservado a un momento por video) y el ensamblador con su plan JSON.

**Qué falló y qué se aprendió.**
- **El impuesto de moderación es real y se paga en la imagen, no en el prompt de movimiento:** ~35 min de reintentos nsfw en la primera tanda y **4 keyframes re-escenificados**. De ahí sale el lint anti-nsfw y la regla de que el filtro reacciona a la **imagen de inicio**.
- **Modelos, medido en el bake-off:** kling3 es el más fiel pero **convierte la niebla en bolas de algodón**; wan2.7 empuja demasiado la cámara y va a 30 fps; seedance-mini es 67 % más caro.
- **La capa de SFX funcionaba** a `sfx_vol` 0,40-0,45 con música a 0,09 — y se abandonó al llegar los lechos de las narraciones del sitio, porque **el ambiente ya viene dentro del lecho** y superponerlo ensucia la separación voz/fondo.
- **Voces, tres rondas y un rechazo:** `seed_audio` de Higgsfield descartado el 19-ago por prosodia «mal hablada» en español; OpenAI `gpt-4o-mini-tts` superado por ritmo (1,7–1,9 palabras/s con dirección de leyenda: lenta, obligaba a bloques largos); y **`eleven_v3` rechazado** porque en un clon profesional genera sin fine-tuning y pierde el timbre.
- **La lección de método del casting:** seis másters completos sobre el **mismo metraje** cuestan 0 créditos y deciden una identidad. Es el mismo principio que veintisiete días después produce la mesa de montaje de la v7.
- **El duelo del Tequendama (30 archivos, 482,5 cr) no tiene conclusión escrita.** Es casi con seguridad el origen de la adopción de Seedance, pero el veredicto sólo aparece documentado dos semanas después. **Una comparación sin veredicto escrito es dinero tirado.**
- La **ronda 2 del casting** (abuelo / tía / dúo) nunca se cerró: la voz clonada del usuario la volvió irrelevante dos días después.

**Decisiones del usuario.** Gana el registro **fogón-visual-coloquial** (20-ago), que sigue siendo el del canal. Rechaza `eleven_v3`: **«no se parece a mi voz»** (máster del 21-ago; el descarte se cierra el 31-ago). Y el 22-23 de agosto **graba y masteriza su propia voz** (`alejandro_mitos.wav`, 619 MB, dos proyectos de Audacity y cuatro FLAC), material con el que se entrena el clon profesional que hoy narra el sitio y los videos.

**Pendiente.** Los **4,3 GB** de esa grabación viven sueltos en `~/Downloads` y **no están respaldados en ninguna parte del proyecto**. Es el origen de la identidad sonora del canal.

**Artefactos.** El commit `1ffc0c8b` (22 ago, «Versionar la biblioteca de video: 78 MB de 3 GB») es **lo único de video que llegó a `origin/main`**. Todo lo posterior sigue sin fusionar.

---

# El hilo de las mejoras

Leído de abajo arriba, el proceso ha mejorado por saltos, y casi todos los saltos fueron gratis:

1. **19-23 ago — Se fija la forma.** 9 bloques, 18 clips de 5 s, 9:16 a 24 fps, maqueta de papel, plan JSON + ensamblador. El casting de seis másters sobre el mismo metraje enseña que **la identidad se decide a coste cero, comparando**.
2. **31 ago — Sube la resolución y nace la doctrina de movimiento.** 720×1280 → **1080×1920 nativo**, y el hallazgo de que Seedance no tiene negativos: lo que se escribe es lo que pasa. Pero el carril gratis cuesta una toma cada 29 minutos y muere solo.
3. **9 sep — Se elige el estándar con evidencia, no con opinión.** Mismo mito, misma noche, dos modelos: Kling 16/18, Seedance 17/18. Gana Seedance por desperdicio, no por precio. Y se descubre que **el título nunca había sido Asimovian**: nace la guardia de fuente que aborta el ensamblaje.
4. **11 sep — El guion se convierte en la palanca principal.** Pasar de 10-15 a **17-19 palabras por línea** lleva la narración del **44 % al 68 %** del metraje y baja los avisos de aire muerto de 8 a 2, sin tocar el modelo ni el ensamblador. Con el candado de toma continua desde el primer envío: **19/19 a la primera**.
5. **11 sep — Se cierra el ciclo del espectador.** El cierre de canal entra como bloque del plan (135 cr una vez, 0 después) y el sonido se unifica con el del sitio: misma voz clonada, mismos lechos, misma mezcla `narracion` (voz −16 LUFS, lecho −34, sin ducking). Cinco másters seguidos caen entre **−16,1 y −16,6 LUFS**.
6. **11 sep — Y se aprende a gastar bien.** El Dorado: 17 planos escritos para 17, piloto de moderación sobre los **tres planos difíciles** en vez de uno fácil, 17/17 con 32 créditos de margen.
7. **12-13 sep — El QC aprende a medir orden, no cantidad.** Huitaca pasa todas las métricas y el usuario lo ve en movimiento: «desastroso». Quince de 18 clips eran palíndromos y ninguna métrica simétrica podía verlos. Sale la regla que ordena todo lo demás: **métricas verdes no son una entrega, son un permiso para mirar**, y la compuerta humana va en tres puntos, no en uno.
8. **16 sep — El descarte se convierte en inventario.** La mesa de montaje escena por escena: el usuario elige toma a toma con las variantes a la vista, y vuelven al aire tomas de una tanda que se había rechazado entera. **El rechazo es de tomas, no de tandas** — y por eso los clips descartados no se borran nunca.

**Lo que sigue sin resolverse, corrida tras corrida:** el veredicto por escrito. Tres másters entregados no tienen aprobación registrada, la cadencia del stop-motion lleva cuatro días esperando tres reels de nueve segundos, y la cola de producción describe seis mitos de un corpus de cuarenta y uno. **La próxima mejora del proceso no es técnica.**
