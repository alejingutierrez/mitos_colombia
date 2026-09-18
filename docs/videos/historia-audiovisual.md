# Historia del trabajo audiovisual — inventario completo

**Fecha del inventario:** 16 de septiembre de 2026 · **Alcance:** todo lo que existe en disco del canal de video de mitosdecolombia.com — 9 worktrees de git, el repo principal en `main`, `output/imagegen/` y `~/Downloads` · **Modo:** sólo lectura, cero generación, cero créditos gastados.

**Cómo leer este documento:** la sección 3 es la que sirve para señalar tomas. Cada **tanda** (una carpeta de clips numerados `c01…cNN`) y cada **máster** tienen ruta absoluta, fecha, duración y estado. Para decir "esta no me gusta" basta con nombrar la tanda y el número de toma: *«bachue/clips-v4 c05»*, *«huitaca c10»*, *«el-dorado c09»*.

---

## 1. Resumen en diez líneas

1. Hay **6 másters vigentes de 5 mitos**, todos muiscas: Bachué, El salto del Tequendama (Bochica), La aparición del hombre, El Dorado y Huitaca — más el **cierre de canal** de 8,42 s que va pegado al final de todos.
2. Para llegar ahí se montaron **30 másters distintos de más de 20 s** (79 archivos contando sus hermanos `-social` y `-preview`): 15 de Bachué, 8 de Bochica/Tequendama, 3 de La aparición, 1 de El Dorado, 1 de Huitaca, y 2 montajes de media película del bake-off de agosto. *(Este recuento se cerró antes del montaje de Bachué v7 del 16 de septiembre: con ella son 31 másters, 16 de Bachué — ver §3.1 y §8.)*
3. El archivo en movimiento son **389 .mp4**: 377 dentro del repositorio (375 piezas distintas — sólo el cierre de canal está duplicado entre worktrees) y 12 fuera, en `~/Downloads` (10 copias de entrega byte-idénticas y 2 tomas que no existen en el repo). *(Recuento de la mañana del 16 de septiembre. Contado de nuevo esa tarde: **562 dentro** y 15 fuera. Los 185 nuevos son todos copias de tomas que ya existían, para la mesa de montaje: 164 en `content/videos/muiscas/comparador/`, 18 normalizadas en `bachue/clips-seleccion/` y los 3 archivos de la v7 — §8.)*
4. De esos 377: **203 tomas numeradas** repartidas en **13 tandas de producción**, 19 descargas crudas (los mismos bytes de una tanda antes de renombrar), 79 másters y hermanos, y **76 tomas de prueba** que nunca entraron en un video.
5. Se han probado **siete carriles distintos**: grok por MCP (agosto), la web de Higgsfield con Seedance 2.5 "unlimited" (fin de agosto), Seedance/Kling/Gemini por MCP (septiembre, el estándar vigente), stop-motion dibujado v1/v2/v3/v4 (12-13 de septiembre), y una prueba suelta en ElevenLabs que nadie documentó.
6. Hay **tres rechazos explícitos del usuario** en el archivo: la voz `eleven_v3` (21-31 de agosto), **Bachué v4-gemini** («no me gusta», 517,5 créditos) y **Huitaca v1** («actualmente se ve desastroso», con 20 defectos confirmados por un panel de 34 agentes y 0 refutados).
7. Además hay **dos veredictos por toma** ya escritos y sin resolver: las dos tomas de El Dorado que se desviaron del prompt (c09 y c06) y la elección de cadencia del stop-motion (los tres reels E4), que el propio diseño declara "puerta humana" y nunca se cerró.
8. **Cinco comunidades** tienen trabajo audiovisual: muiscas (5 videos), wayúu (27 guiones + 496 keyframes, 0 videos), nasa-páez (26 mitos + 270 keyframes, 0 videos), chimila (23 mitos + 157 keyframes, 0 videos) y huitoto (sólo biblia, aunque es la única con trípticos publicados en producción).
9. **Nada de video desde el 31 de agosto está fusionado en `origin/main`**, y el repo principal está 45 commits atrás con 387 rutas sin trackear — ahí vive el carril entero de wayúu, nasa y chimila.
10. El último archivo generado **con modelo** es del **13 de septiembre a las 08:57**; después sólo hubo trabajo de sitio (narración, imagen de la ficha interna) hasta el **16 de septiembre**, cuando se montó Bachué v7 con tomas que ya existían — cero créditos, cero llamadas de imagen (§8).

---

## 2. Línea de tiempo

| Tramo | Qué pasó | Dónde quedó |
|---|---|---|
| **19 ago, 23:40** | Nace el canal. Dos pilotos sobre el mismo keyframe b2 de Bachué: `piloto-grok-b2.mp4` (10,04 s) y `piloto-kling-b2.mp4` (5,04 s). Gana grok por precio (1,5 cr/s). | worktree `myth-mobile-design-c8ea4f` |
| **20 ago, 00:40–01:12** | Primera tanda completa: 18 clips grok 720x1280 de Bachué. Sale **Bachué v1** (101,88 s), con voz OpenAI "ash". Coste 160,3 cr + ~6 USD. Impuesto de moderación: ~35 min de reintentos nsfw, 4 keyframes re-escenificados. | ídem |
| **20 ago, 11:42–11:59** | Bake-off de modelos sobre la laguna (kling3 / wan2.7 / seedance-mini) y 4 demos de la capa de SFX. Sale **v2-ash** (98,96 s) con crossfades, título de canal y SFX, a coste cero: mismo metraje. | ídem |
| **20 ago, 19:15–19:47** | Casting editorial: **seis másters completos** de Bachué (mvp-a…f) con seis guiones y voces distintas sobre el mismo metraje. El usuario elige el registro del fogón; queda fijado el guion "fogón-visual-coloquial". | ídem |
| **20 ago, 22:02–22:05** | 18 clips grok de Bochica: la "primera corrida perfecta" del canal, 18/18 sin un rechazo, 143,65 cr, ~35 min. Estrena la doctrina de dirección cinematográfica. | ídem |
| **21 ago, 13:53–14:10** | Llega la voz "Alejandro". A/B de modelo de voz: cuatro másters `-alejandro-v3-old` y `-flash25` de Bachué y Bochica. | ídem |
| **22 ago, 23:36 → 23 ago, 00:43** | El usuario **graba y masteriza su propia voz** (`alejandro_mitos.wav`, 619 MB, dos proyectos de Audacity y cuatro FLAC). Con ese máster se entrena la voz professional nueva. | `~/Downloads`, sin respaldo |
| **22 ago** | Un solo commit (`d9dc5ed0`, 289 archivos) salva la biblioteca de video a git: biblia, keyframes, voces, música, SFX y pipeline. **Es el único commit de video que llegó a `origin/main`.** | `main` |
| **23 ago, 01:13–01:15** | **Bachué final** (98,58 s) y **Bochica final** (90,58 s), los dos primeros másters entregados del canal. | ídem |
| **23 ago, 01:27–01:46** | "El duelo del Tequendama": 30 archivos comparando grok / Kling 4K / Seedance 2.5 / Seedance 2.0, incluidas dos medias películas de 29,46 s. 482,5 cr. Sin veredicto escrito. | ídem |
| **26 ago, 13:58** | Se firma el **cierre visual muisca certificado y aceptado por el usuario**: 41 mitos, 123/123 trípticos, 536 de 620 imágenes de video, **84 escenas renunciadas expresamente**. | `content/videos/muiscas/certificacion/` (repo principal, sin commitear) |
| **31 ago, 17:37–18:23** | Cuatro versiones del plano del salto en Seedance 2.5 1080p. El usuario las juzga una por una: v1, v2 y v3 rechazadas («aún no se ve con suficiente vida»), **v4-doctrina aprobada** («ahora sí me gusta»). Nace la doctrina de movimiento v2. | `myth-mobile-design-c8ea4f/…/bochica/comparacion/` |
| **31 ago, 19:58 → 22:47** | Carril web "unlimited": 19 clips Seedance 1080p de Bochica y **tres rondas de montaje** (r1 con subtítulos → r2 sin subtítulos → r3 sin título). Dos pruebas de título animado en medio. | `higgs-field-gpt2-2k-value-ef422e` |
| **31 ago 23:09 → 1 sep 06:12** | 18 clips de Bachué por la cola del navegador (una toma cada ~29 minutos) → **bachue-final-v1-no-title** (86,42 s), el Bachué más corto. | ídem |
| **1 sep, 03:50** | Se congela un lote de **35 mitos muiscas** listos para video (18 keyframes, voces y prompts cada uno). Estado final: 2 completos, **33 "prepared" que nunca recibieron un solo clip**. | `video-batch-2026-08-31.json` |
| **1 sep, 05:31 → 13:41** | La cola de navegador encola 598 clips, se degrada y el usuario la cancela (`cancelled_by_user`). Sólo sobreviven 2 tomas de `bochica-maestro`. Ahí muere el carril web. | ídem |
| **3–9 sep** | Toda la energía se va a **imagen de otras comunidades** (wayúu, nasa, chimila) en sesiones de Codex, no de Claude. | `output/imagegen/` y `content/videos/<comunidad>/` |
| **9 sep, 01:44** | Dos tomas Seedance 2.5 generadas **en ElevenLabs** desde keyframes wayúu de *La india Worunka*. Ningún doc, commit ni sesión las explica. | `~/Downloads` |
| **9 sep, 22:16 → 23:28** | Arranca el carril v4 por MCP. **La aparición del hombre** se hace dos veces la misma noche: Kling 3.0 (175 cr) y Seedance 2.5 (855 cr). El usuario elige Seedance: «vamos con seedance como estándar». Se descubre que el título nunca había sido Asimovian (caía a Helvetica en silencio). | `elegant-matsumoto-11a141` |
| **11 sep, 19:04–19:16** | **El salto del Tequendama v5**: 19/19 a la primera, cero regeneraciones, 855 cr. El mejor resultado del carril. | ídem |
| **11 sep, 20:00–20:30** | **Bachué con Gemini Omni Flash 1.1** (pedido por el usuario): 13/18 a la primera, 5 regeneraciones, 517,5 cr — y «no me gusta». Catorce minutos después, el remake con Seedance sale 18/18 con los mismos keyframes. | ídem |
| **11 sep, 21:06–21:24** | Se produce el **cierre de canal** (135 cr, uno de los tres clips descartado) y los tres videos entregados se re-ensamblan como `-v6-con-cierre`. | ídem |
| **11 sep, 21:53–21:55** | **El Dorado**: 17 tomas con el presupuesto exacto (765 de 797 cr), piloto de moderación previo de 3 clips, cierre ya incluido. Es el último video hecho con créditos. | ídem |
| **12 sep, 18:59–20:24** | **Laboratorio de stop-motion**: 12 pruebas de 5 s sobre el mismo plano de Huitaca, sin un solo crédito de Higgsfield. | `next-muisca-video-3e07cd` |
| **12 sep, 20:48–20:49** | **Huitaca v1**: primer video entero sin modelo de video, 18 planos, $4,37 de OpenAI. El usuario lo ve en movimiento: «actualmente se ve desastroso». | ídem |
| **12 sep, 21:00–22:06** | Panel adversarial de 34 agentes: **20 defectos confirmados, 0 refutados**, con evidencia por fotograma. Rediseño v2 con 12 decisiones y tres reels de cadencia para que el usuario elija. | ídem |
| **12 sep 22:59 → 13 sep 00:01** | Carril v3 "hoja + redibujado": tres flipbooks del plano P13 (16, 36 y 36 poses). El usuario: «no me gusta este approach, quiero que cambiemos completamente de estrategia». | ídem |
| **13 sep, 00:27–08:23** | Carril v4 "cadena con ancla": cuatro clips de 1 y 4 s comparando el mismo segundo con y sin ancla de decorado. **Aquí se detuvo el trabajo de video.** Sin commitear. | ídem |
| **13 sep, 08:02–08:57** | Tres experimentos de stop-motion de Huitaca fuera del repo de video (v1, v2 y "2s-v2"). El tercero se paró en el cuadro 22 de 24 y nunca se montó. Ningún doc los menciona. | `output/imagegen/` |
| **13–14 sep** | Nasa: 270 keyframes de 26 mitos. Huitoto: biblia de 196 másteres y 21 trípticos **publicados en producción** — el único carril de imagen que llegó al sitio. | repo principal, sin commitear |
| **14–15 sep** | Últimas sesiones: calidad de la imagen horizontal en la ficha interna (PR 66, fusionado). Nada de video. | `myth-internal-image-quality-f935fe` |

---

## 3. Ficha por mito

> **Convenciones.** *Vigente* = es el máster que hoy vale. *Superada* = la reemplazó otra versión. *Rechazada* = hay un "no" explícito del usuario. *Sin veredicto* = existe el archivo y no consta que nadie dijera nada. Las duraciones y fechas salen de `ffprobe` + `mtime`; las fechas de los documentos van un día adelante porque están escritas en UTC (ver §7).

---

### 3.1 Bachué, la madre de la humanidad

**Dieciséis másters en tres tecnologías** (el 16.º, la v7 del 16 de septiembre, se montó después de cerrar este inventario: ver §8). Los once primeros comparten exactamente el mismo metraje: lo que se estaba buscando en agosto era la voz, no la imagen.

| # | Máster | Fecha | Dur. | Tanda que usa | Estado |
|---|---|---|---|---|---|
| 1 | `bachue-v1.mp4` | 20 ago 01:12 | 101,88 s | `clips/` (grok) | superada |
| 2 | `bachue-v2-ash.mp4` | 20 ago 11:57 | 98,96 s | `clips/` | superada |
| 3 | `bachue-mvp-a.mp4` | 20 ago 19:15 | 98,58 s | `clips/` | archivada — ganó la ronda 1 («lo más colombiano») |
| 4 | `bachue-mvp-b.mp4` | 20 ago 19:17 | 98,58 s | `clips/` | archivada |
| 5 | `bachue-mvp-c.mp4` | 20 ago 19:19 | 98,58 s | `clips/` | archivada |
| 6 | `bachue-mvp-d.mp4` | 20 ago 19:43 | 98,58 s | `clips/` | archivada — ronda 2 sin decisión registrada |
| 7 | `bachue-mvp-e.mp4` | 20 ago 19:45 | 98,58 s | `clips/` | archivada |
| 8 | `bachue-mvp-f.mp4` | 20 ago 19:46 | 98,58 s | `clips/` | archivada |
| 9 | `bachue-alejandro-v3-old.mp4` | 21 ago 13:55 | 98,58 s | `clips/` | rechazada — la voz `eleven_v3` «no se parece a mi voz» |
| 10 | `bachue-flash25.mp4` | 21 ago 14:10 | 98,58 s | `clips/` | superada |
| 11 | `bachue-final.mp4` | 23 ago 01:14 | 98,58 s | `clips/` | superada — *era* el máster oficial de agosto |
| 12 | `bachue-final-v1-no-title.mp4` | 1 sep 06:12 | 86,42 s | `clips-v1/` (Seedance web) | **sin veredicto** — el Bachué más corto; ningún doc lo menciona |
| 13 | `bachue-final-v4-gemini.mp4` | 11 sep 20:16 | 94,00 s | `clips-v4/` (Gemini) | **RECHAZADA** — «no me gusta» |
| 14 | `bachue-final-v5-seedance.mp4` | 11 sep 20:30 | 94,00 s | `clips-v5-seedance/` | superada por la v6 |
| 15 | `bachue-final-v6-con-cierre.mp4` | 11 sep 21:19 | **102,46 s** | `clips-v5-seedance/` + cierre | entregada — **superada por la v7** |
| 16 | `bachue-final-v7-seleccion.mp4` | 16 sep 10:10 | **102,46 s** | `clips-seleccion/` (grok + Seedance + Gemini) + cierre | **VIGENTE** — ver §8 |

Rutas: los 11 primeros en `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/myth-mobile-design-c8ea4f/content/videos/muiscas/videos/bachue/`; el 12 en `…/higgs-field-gpt2-2k-value-ef422e/content/videos/muiscas/videos/bachue/`; los 13-15 en `…/elegant-matsumoto-11a141/content/videos/muiscas/videos/bachue/`; **el 16 en `…/next-muisca-video-3e07cd/content/videos/muiscas/videos/bachue/`** (el único máster **de Bachué** montado desde este worktree; el otro máster que salió de aquí es Huitaca v1, §3.5). Cada uno tiene su `-social` (1080x1920 recomprimido) y su `-preview` (720x1280) salvo los `-alejandro-v3-old`, que se archivaron antes de empaquetarse.

**Tandas de tomas de Bachué**

| Tanda | Ruta | Modelo | Nº | Formato | Coste | Destino |
|---|---|---|---|---|---|---|
| **B-1** | `myth-mobile-design-c8ea4f/…/bachue/clips/` | grok_video (MCP) | 18 (`c01`–`c18`) | 720x1280, con audio, 10 de 5,04 s y **8 de 6,04 s** (`c04, c09, c10, c12, c14, c15, c16, c18`) | 160,3 cr (con piloto) | los 11 másters de agosto |
| **B-2** | `higgs-field-…/…/bachue/clips-v1/` | Seedance 2.5 web unlimited | 18 | 1080x1920 HEVC, con audio, 5,056 s | 0 cr | `bachue-final-v1-no-title` |
| **B-3** | `elegant-matsumoto-…/…/bachue/clips-v4/` | gemini_omni_flash_1_1 | 18 | 1080x1920, con audio, 5,01 s | 517,5 cr | `bachue-final-v4-gemini` (**rechazado**) |
| **B-4** | `elegant-matsumoto-…/…/bachue/clips-v5-seedance/` | seedance_2_5 (MCP) | 18 | 1080x1920, mudas, 5,04 s | 810 cr | v5 y **v6 vigente** |

**Mapa toma → keyframe** (el mismo para B-1, B-3 y B-4; el storyboard no cambió nunca):
`c01` laguna_iguaque_A · `c02` semillas_orilla · `c03` kf_b2_emerge · `c04` salida_agua · `c05` construccion_casa · `c06` fogon_nocturno · `c07` semillas_pareja · `c08` valle_atardecer · `c09` fila_sendero · `c10` pies_arroyo · `c11` ensenanza_semillas · `c12` compartir_agua · `c13` rostro_anciana · `c14` reunion_descendientes · `c15` ascenso_multitud · `c16` entrega_semillas · `c17` entrada_agua · `c18` serpientes.

**Tomas con defecto ya identificado (B-3, las de Gemini)** — verificado en `clips-v4/import-map.json`, donde las cinco tienen un `job_id` distinto al descartado:

| Toma | Qué falló |
|---|---|
| `c01` | la niebla se volvía bolas de algodón literales flotando sobre el agua |
| `c04` | el paisaje cambiaba a mitad del clip a otro lago con cielo azul y pinos |
| `c05` | **devolvió 1920x1080 horizontal** pese a pedir 9:16 — lo cazó el guardián de resolución, no el ojo |
| `c06` | la noche estrellada se volvía día gris |
| `c14` | el fondo gris se volvía lago azul con montañas nevadas |

En B-4 (Seedance) el `import-map` no tiene ni un `replaced`: 18/18 a la primera con exactamente los mismos keyframes. Única incidencia: `c05` dio 429 y se reenvió.

---

### 3.2 Bochica — El castigo de Chibchachum / El salto del Tequendama

Es el mismo relato bajo tres nombres de archivo (`bochica`, luego `el-tequendama`). **Ocho másters.**

| # | Máster | Fecha | Dur. | Tanda | Estado |
|---|---|---|---|---|---|
| 1 | `bochica-alejandro-v3-old.mp4` | 21 ago 13:53 | 90,58 s | `clips/` (grok) | rechazada (voz v3) |
| 2 | `bochica-flash25.mp4` | 21 ago 14:08 | 90,58 s | `clips/` | superada |
| 3 | `bochica-final.mp4` | 23 ago 01:13 | 90,58 s | `clips/` | superada |
| 4 | `bochica-final-v4.mp4` (r1) | 31 ago 22:04 | 99,00 s | `clips-v4/` | superada — **con título fino y subtítulos quemados** |
| 5 | `bochica-final-v4-r2.mp4` | 31 ago 22:19 | 99,00 s | `clips-v4/` | superada — **sin subtítulos; el título sale en la fuente de respaldo** (medido: mismos 2.376 fotogramas, PSNR medio 34,2 dB, los fotogramas distintos calcan exactamente las marcas del `.srt`) |
| 6 | `bochica-final-v4-r3-no-title.mp4` | 31 ago 22:47 | 94,58 s | `clips-v4/` | **sin veredicto** — sin título, sin subtítulos, transiciones de 0,45 s |
| 7 | `el-tequendama-final-v5.mp4` | 11 sep 19:16 | 99,00 s | `clips-v5/` | entregada, superada por la v6 |
| 8 | `el-tequendama-final-v6-con-cierre.mp4` | 11 sep 21:22 | **107,46 s** | `clips-v5/` + cierre | **VIGENTE** (el video más largo del canal) |

Los 1-3 en `myth-mobile-design-c8ea4f/…/videos/bochica/`; los 4-6 en `higgs-field-gpt2-2k-value-ef422e/…/videos/bochica/`; los 7-8 en `elegant-matsumoto-11a141/…/videos/bochica/`.

**Tandas de tomas**

| Tanda | Ruta | Modelo | Nº | Formato | Coste | Destino |
|---|---|---|---|---|---|---|
| **T-1** | `myth-mobile-design-…/videos/bochica/clips/` | grok_video | 18 | 720x1280, con audio, 5,04 s | 143,65 cr | másters 1-3 |
| **T-2** | `higgs-field-…/videos/bochica/clips-v4/` (crudos en `descargas/`) | Seedance 2.5 web unlimited | 19 | 1080x1920, mudas, 5,04 s | 0 cr | másters 4-6 |
| **T-3** | `elegant-matsumoto-…/videos/bochica/clips-v5/` | seedance_2_5 (MCP) | 19 | 1080x1920, mudas, 5,04 s | 855 cr | másters 7-8 |

`descargas/` contiene los 19 archivos originales con nombre de Higgsfield (`hf_20260901_005417_…` a `hf_20260901_025220_…`, bajados entre las 19:58 y las 22:01 del 31 de agosto); `clips-v4/` son los mismos bytes renombrados a las 22:02, con la correspondencia exacta en `clips-v4/import-map.json`.

**Mapa toma → keyframe de T-3** (19 tomas): `c01` sabana_cultivos · `c02` mazorca_gotas · `c03` lluvia_valle · `c04` agua_sube · `c05` cenital_inundacion · `c06` cultivos_ahogados · `c07` subida_lomas · `c08` fuego_protegido · `c09` ofrendas · `c10` cerro_ofrenda · `c11` sol_lluvia · `c12` bochica_roca · `c13` vara_alzada · `c14` lanzamiento · `c15` salto_nace · `c16` salto_tequendama · `c17` agua_baja · `c18` siembra · `c19` sabana_arcoiris.

**Avisos anotados en T-3:** `c15`, `c16` y `c17` **se enviaron con un prompt redactado al vuelo** en vez del auditado (error de operación del 11 de septiembre); pasaron el QC y se aceptaron, y `movimiento-v5-seedance.json` guarda el texto enviado junto al que debía usarse. `c06` y `c10` dieron 429 y se reenviaron; `c07` fue interceptada por un preset de la plataforma y se reenvió. Cero regeneraciones por defecto visual: el `import-map` no tiene un solo `replaced`.

---

### 3.3 La aparición de los primeros seres humanos

**Tres másters.** Es el único mito rodado dos veces la misma noche con dos modelos distintos, a propósito, para comparar.

| # | Máster | Fecha | Dur. | Tanda | Estado |
|---|---|---|---|---|---|
| 1 | `la-aparicion-del-hombre-final-v1.mp4` | 9 sep 23:26 | 94,00 s | `clips-v1/` (Kling 3.0 pro) | archivada como comparación |
| 2 | `la-aparicion-del-hombre-final-v1-seedance.mp4` | 9 sep 23:28 | 94,00 s | `clips-v1-seedance/` | **aprobada 11 sep**, superada por la v6 |
| 3 | `la-aparicion-del-hombre-final-v6-con-cierre.mp4` | 11 sep 21:23 | **102,46 s** | `clips-v1-seedance/` + cierre | **VIGENTE** |

Todos en `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/elegant-matsumoto-11a141/content/videos/muiscas/videos/la-aparicion-del-hombre/`.

**Tandas**

| Tanda | Ruta | Modelo | Nº | Coste | Regeneraciones |
|---|---|---|---|---|---|
| **A-1** | `clips-v1/` | kling3_0 **pro**, 8,75 cr/clip | 18, 1080x1920, mudas, 5,04 s | 175 cr | **2** |
| **A-2** | `clips-v1-seedance/` | seedance_2_5 omni_reference 1080p, 45 cr/clip | 18, 1080x1920, mudas, 5,04 s | 855 cr | **1** |

**Tomas rechazadas y rehechas** (verificado en los `import-map.json`; el job descartado queda guardado en el campo `replaced`):

| Tanda | Toma | Motivo |
|---|---|---|
| A-1 (Kling) | `c09` | el personaje se endereza y **mira a cámara** al final (scene_score 0,102) |
| A-1 (Kling) | `c17` | las **mantas se abren como alas** ~3 s — defecto semántico: ninguna métrica lo ve (scene_score 0,022) |
| A-2 (Seedance) | `c15` | **corte interno a primer plano de manos** en el último segundo (scene_score 0,159, el más alto medido del carril) |

Anotado además sin regenerar: en A-2, `c06` y `c11` terminan en primer plano con un push-in más decidido que su gemelo de Kling. Cuatro tomas (`c15`, `c16`, `c17`, `c18`) chocaron con el tope de concurrencia (429) y se reenviaron.

**Mapa toma → keyframe:** 1:1 con `kf-9x16/c01-b1a` … `c18-b9b`; la excepción es `c08`, que usa `kf-9x16/c08-acto.jpg`, la placa del tríptico.

---

### 3.4 El Dorado (la investidura en Guatavita)

**Un solo máster**, y nace ya con el cierre de canal dentro.

| Máster | Fecha | Dur. | Tanda | Estado |
|---|---|---|---|---|
| `el-dorado-final-v1.mp4` | 11 sep 21:55 | **97,46 s** | `clips-v1/` | **VIGENTE** — entregado (hay copia en `~/Downloads` con nombre editorial), pero **sin aprobación registrada** (ver §7) |

Ruta: `…/elegant-matsumoto-11a141/content/videos/muiscas/videos/el-dorado/el-dorado-final-v1.mp4` (+ `-social`, `-preview`).

**Tanda única**

| Tanda | Ruta | Modelo | Nº | Coste |
|---|---|---|---|---|
| **D-1** | `el-dorado/clips-v1/` | seedance_2_5 1080p (MCP), 45 cr/clip | **17** (`c01`–`c17`), 1080x1920, mudas, 5,04 s | 765 cr de un saldo de 797 |

Son 17 y no 18-19 **por presupuesto**: quedaban 32 créditos, así que **ninguna toma de esta tanda tenía repetición posible**. Antes se envió un piloto de moderación de 3 clips (135 cr) con los planos del cuerpo cubierto de oro — `c07` resina sobre la espalda, `c08` soplo de polvo de oro, `c16` el oro se desprende bajo el agua: pasaron 3/3.

**Mapa toma → escena** (los nombres ya son descriptivos): `c01` laguna_antes_del_alba · `c02` sendero_al_alba · `c03` consejo_en_el_cercado · `c04` reparto_del_trabajo · `c05` mayores_y_balsa · `c06` comunidad_en_el_filo · `c07` resina_en_la_espalda · `c08` soplo_de_oro · `c09` mira_sus_brazos · `c10` manos_de_orfebre · `c11` sube_a_la_balsa · `c12` remos_y_circulos · `c13` balsa_en_el_centro · `c14` reflejo_duplicado · `c15` la_primera_ofrenda · `c16` el_oro_se_desprende · `c17` laguna_vacia.

**Dos tomas anotadas como desviadas, a juicio del usuario:**

| Toma | Qué pasó |
|---|---|
| `c09` | el heredero **levanta más las manos** de lo pedido |
| `c06` | **abre más oscuro** que su keyframe |

Se dejaron escritas «por si el usuario quiere rehacerlas» y nunca se resolvieron: no había créditos.

> **Aviso sobre el `import-map` de El Dorado:** 13 tomas figuran con `replaced`, pero **no son regeneraciones**. Verificado: el job descartado tiene el **mismo `job_id`** que el vigente (`c01` → `b55319f0…` en los dos, `c06` → `39ecf02e…`, `c09` → `38bb3762…`). Son re-importaciones causadas por un bug de zsh que escribió nombres de archivo pegados. Esta tanda tuvo **cero regeneraciones reales**.

---

### 3.5 Huitaca — el video de stop-motion dibujado

**Un máster**, hecho sin un solo crédito de Higgsfield, y con el diagnóstico por toma más detallado de todo el archivo.

| Máster | Fecha | Dur. | Tanda | Estado |
|---|---|---|---|---|
| `huitaca-final-v1.mp4` | 12 sep 20:49 | **98,46 s** (45,0 MB, el más liviano) | `clips-v1/` | **VIGENTE por defecto y RECHAZADO por el usuario**: «actualmente se ve desastroso» |

Ruta: `…/next-muisca-video-3e07cd/content/videos/muiscas/videos/huitaca/huitaca-final-v1.mp4` (+ `-social`, `-preview`). Coste: 0 cr de Higgsfield y $4,37 de OpenAI en 54 llamadas. **No hay copia de entrega en `~/Downloads`**: es el único de los seis videos terminados que nunca se copió a la carpeta de entregas.

**Tanda única — `huitaca/clips-v1/`**: 18 clips de 5,00 s exactos, 1080x1920, mudos, 0,65–4,0 MB, todos escritos a disco el 12 de septiembre a las 20:48. No hay `jobs.json`: no pasaron por ningún proveedor de video. La técnica de cada toma está en `videos/huitaca/qc/manifiesto.json`:

| Toma | Plano | Vía de animación | Imágenes/s | Hold | Ciclo |
|---|---|---|---|---|---|
| `c01` | b1a | figura, ciclo de 4 poses + traslación en post | 6 | 4 | **vaivén** |
| `c02` | b1b | figura, ciclo de 4 poses + traslación en post | 6 | 4 | **vaivén** |
| `c03` | b2a | figura de **36 poses** (9 hojas 2x2) + 3 puentes + fondo vivo | 6 | 4 | — |
| `c04` | b2b | cuadro completo, ciclo de 4 estados | 6 | 4 | **vaivén** |
| `c05` | b3a | quieto + Ken Burns in | zoom continuo 24 fps | 1 | — |
| `c06` | b3b | quieto + Ken Burns out | zoom continuo 24 fps | 1 | — |
| `c07` | b4a | cuadro completo, ciclo de 4 estados | 6 | 4 | **vaivén** |
| `c08` | b4b | cuadro completo, ciclo de 4 estados | 6 | 4 | **vaivén** |
| `c09` | b5a | cuadro completo, ciclo de 4 estados | 3 | 8 | **vaivén** |
| `c10` | b5b | cuadro completo, ciclo de 4 estados | 6 | 4 | **vaivén** |
| `c11` | b6a | cuadro, **16 estados** (4 hojas) sin ciclo | 3 | 8 | **vaivén** |
| `c12` | b6b | cuadro, 4 estados **de 8** (4 tirados por desregistro) | 3 | 8 | **vaivén** |
| `c13` | b7a | cuadro, **16 estados** (4 hojas) sin ciclo | 3 | 8 | **vaivén** |
| `c14` | b7b | cuadro completo, ciclo de 4 estados | 6 | 4 | **vaivén** |
| `c15` | b8a | figura, ciclo de 4 poses + traslación | 6 | 4 | **vaivén** |
| `c16` | b8b | figura, ciclo de 4 poses + traslación | 6 | 4 | **vaivén** |
| `c17` | b9a | figura, ciclo de 4 poses sin traslación | 6 | 4 | **vaivén** |
| `c18` | b9b | quieto + Ken Burns in | zoom continuo 24 fps | 1 | — |

**Quince de los 18 clips se montaron en vaivén (palíndromo). Ésa es la causa raíz.**

**Defectos confirmados por el panel (20 confirmados, 0 refutados), por toma:**

| Toma | Defecto medido |
|---|---|
| `c02` | la marcha **repite pierna dos de cada tres pasos**; además patina: avanza 238 px en 5 s con las puntas de los pies saltando ±80 px por imagen |
| `c01` | patina de la otra forma: avanza 32 px, no cambia de tamaño «alejándose», mide como foto fija |
| `c07` | el tambor **cojea**: dos golpes por segundo y la subida es la bajada al revés |
| `c08` | el péndulo va **dos veces a la izquierda** cada 6 imágenes; además es **pleno día** dentro de una noche cerrada |
| `c09` | la rueda de danza **gira y desgira** 2,5 veces (periodo exacto de 48 fotogramas); la mediana de 4 celdas de multitud fabrica un plató fantasma y deja pasar el 57 % del cuadro |
| `c10` | **la gota de chicha cae y vuelve a subir** |
| `c11` | el clímax **se reinicia dos veces**: la mujer se vuelve bulto de plumas y al estado siguiente está de pie otra vez; las 4 hojas no se conocen entre sí y la escala crece 5 % de hoja a hoja |
| `c12` | pase de diapositivas con 3 cortes duros (se tiró media hoja) |
| `c13` | **la vasija cae, se estrella y vuelve al aire**; el alineador crea aquí el mayor salto de fondo del video |
| `c15` / `c16` | la lechuza **bate con las plumas al revés** de la dirección y **bombea de tamaño** (casi dobla cada medio segundo); `c16` mete una laguna al fondo en un mito cuyo deslinde es «ni una gota de agua» |
| `c17` | **parpadea 10 veces en 5 s** (2 por segundo) |
| todas | sombra de contacto = rectángulo negro de bordes rectos, presente incluso bajo un ave en vuelo; recorte entre 5 y 434 veces más nítido que el plató; cuatro texturas de tiempo distintas en un mismo video; la lechuza son cuatro aves distintas en 40 s; los 18 cortes caen a mitad de frase |

Hojas de contacto para revisar sin abrir el video: `videos/huitaca/qc/cNN-1s-24fps.jpg` y `cNN-5s-2fps.jpg` (las 18), y `videos/huitaca/qc-anim/` con las hojas de poses por plano (`b1a-poses.png`, `b6a-16.png`, `b7a-16.png`…).

**Lo que vino después de Huitaca v1** (todo en `…/next-muisca-video-3e07cd/content/videos/muiscas/videos/huitaca/v2/`):

| Pieza | Fecha | Dur. | Qué es | Estado |
|---|---|---|---|---|
| `reel/reel-E4-a2.mp4` | 12 sep 22:06 | 8,94 s | cadencia **a dos** (12 dibujos/s) | **decisión pendiente del usuario** |
| `reel/reel-E4-a3.mp4` | 12 sep 22:06 | 8,94 s | cadencia **a tres** (8 dibujos/s) | ídem |
| `reel/reel-E4-continuo.mp4` | 12 sep 22:06 | 8,92 s | 24 fps por interpolación + grano | ídem |
| `reel/cuerpo-{12,a2,a3,continuo}.mp4` | 12 sep | 8,92–9,00 s | los mismos sin audio | material de apoyo |
| `reel/c03-{12,a2,a3,continuo}.mp4` | 12 sep | 3,12–3,25 s | el mejor clip de v1 rehecho en las tres cadencias | referencia |
| `reel/P13B-quieto.mp4`, `P15-quieto.mp4` | 12 sep 22:05 | 2,50 / 3,92 s | planos quietos | prueba |
| `planos-out/P14/P14-inserto.mp4` | 12 sep 22:04 | 2,54 s | inserto dibujado con carta de exposición | prueba ($0,181) |
| `planos-out/P13/flipbook/P13-flipbook.mp4` | 12 sep 22:59 | 5,00 s (4,2 MB) | 16 poses en una hoja 4x4 | superado |
| `planos-out/P13/flipbook-36/P13-flipbook.mp4` | 13 sep 00:00 | 5,00 s (4,1 MB) | 36 poses — **hoja RECHAZADA** por dos verificadores | rechazado |
| `planos-out/P13/flipbook-36b/P13-flipbook.mp4` | 13 sep 00:00 | 5,00 s (5,4 MB) | 36 poses con el reparto corregido | aprobado técnicamente |
| `planos-out/P13/v4/s1-sin-ancla.mp4` | 13 sep 00:27 | 1,00 s | cadena sin ancla de decorado | experimento |
| `planos-out/P13/v4/s1-con-ancla.mp4` | 13 sep 08:22 | 1,00 s | cadena con ancla | experimento |
| `planos-out/P13/v4/s1-con-ancla-lento.mp4` | 13 sep 08:23 | 4,00 s | la misma a cuarto de velocidad | experimento |
| `planos-out/P13/v4/s1-comparacion.mp4` | 13 sep 08:23 | 4,00 s, 1080x960 | **pantalla partida: con y sin ancla** | **último archivo de video del proyecto** |

Las cuatro piezas de `v4/` **no están commiteadas** y no aparecen en ningún documento.

---

### 3.6 Bochica-maestro (el tercer Bochica) — empezado y abandonado

| Pieza | Fecha | Dur. | Estado |
|---|---|---|---|
| `bochica-maestro/clips-v1/c01.mp4` | 1 sep 06:41 | 5,06 s, 13,9 MB | huérfana |
| `bochica-maestro/clips-v1/c02.mp4` | 1 sep 08:25 | 5,06 s, 25,9 MB | huérfana |

Ruta: `…/higgs-field-gpt2-2k-value-ef422e/content/videos/muiscas/videos/bochica-maestro/`. El mito tiene 16 keyframes, `movimiento-v1.json` (23 KB), `plan-v1-no-title.json`, guion de 9 líneas y las voces ya generadas — **todo listo menos 17 de las 19 tomas**. Entre la primera y la segunda toma pasó 1 h 44 min: la cola del navegador se degradó y la producción se detuvo ahí. No hay máster.

---

### 3.7 Cierre de canal (pieza transversal, va al final de todos los videos)

| Pieza | Fecha | Dur. | Notas |
|---|---|---|---|
| `cierre/clips-v1/c01.mp4` | 11 sep 21:06 | 5,04 s | la mano con el celular; hay una **v1 descartada** archivada (el pulgar cruzaba el vidrio) |
| `cierre/clips-v1/c02.mp4` | 11 sep 21:06 | 5,04 s | la placa |
| `cierre/cierre-canal-v1-mudo.mp4` | 11 sep 21:07 | 8,42 s | md5 `9a7a9ef8…` |
| `cierre/cierre-canal-v1.mp4` | 11 sep 21:07 | 8,42 s | md5 `5720a445…` |

**Verificado:** las copias de los dos worktreees (`elegant-matsumoto-11a141` y `next-muisca-video-3e07cd`) y la de `~/Downloads/cierre-de-canal-mitos-de-colombia.mp4` son **el mismo archivo byte a byte**. No hay dos cierres ni deriva entre copias.

Coste: 135 cr (3 clips de 45, **uno descartado**) + ~0,6 USD de imagen. La idea que lo hace funcionar: el modelo dibuja **sólo el mundo físico con la cámara clavada** y ffmpeg compone encima la captura real del sitio con deformación de perspectiva sobre las cuatro esquinas medidas del vidrio; el scroll también es real. Motivo: la primera tanda escribió texto inventado en pantalla («Lasos de Colombia region obseas fiemia»).

---

### 3.8 Los mitos muiscas preparados que nunca recibieron una sola toma

El lote congelado `video-batch-2026-08-31.json` (1 de septiembre, 03:50) tiene **35 entradas**: 2 en `qa_complete` (bachue, bochica) y **33 en `prepared`** — con sus 18 keyframes, voces, prompts de movimiento y plan escritos, y **cero clips generados**:

`bochica-maestro, chaquon, chia, chibchacum, chiminigagua, creacion-muiscas, cuchavira, el-castigo-de-chaquen, el-dorado, el-origen-del-lago-tota, el-pozo-de-hunzahua, el-sol-y-la-luna, en-el-principio-fue-el-maiz, fu-el-dios-de-la-torpeza, huitaca, hunzahua, idacanzas, la-aparicion-del-hombre, la-cacica-de-guatavita, la-competencia, la-herencia, la-historia-del-bermejo, la-madre-de-los-hombres, los-cojines-del-zaque, los-dioses-civilizadores, los-mojas, meicuchuca, nemequene, nencatacoa, nompanem, tomagata, toquecha-y-toquilla, veneracion-a-los-soberanos`

(`el-bermejo-aspira-a-ser-rey` quedó **excluido** del lote con 6 keyframes y motivo `secuencia_incompleta`.) De esos 33, tres se produjeron después por el carril v4 (el-dorado, huitaca, la-aparicion-del-hombre): **quedan 30 mitos muiscas con material listo y sin una sola toma.**

**¿Están completos esos paquetes? Sí — y aun así NO son reutilizables tal cual.** Medido el 16 de septiembre sobre `higgs-field-gpt2-2k-value-ef422e` (y contrastado con el repo principal, que da lo mismo):

- **Completos, cero faltantes.** Los 33 tienen su `movimiento-v1.json`, su `voz-v1.json` y su `plan-v1-no-title.json` en disco, y **los 18 keyframes de cada uno existen** (17 en `los-cojines-del-zaque`): comprobado resolviendo uno por uno los `shots[].keyframe` de los 33 movimientos — **0 rutas rotas**.
- **Lo que parece un agujero y no lo es.** En `keyframes/` faltan entre 1 y 4 archivos maestros `bNa.jpg` por mito (17 keyframes maestros en 9 mitos, 16 en 3, 15 en 20 y 14 en `los-cojines-del-zaque`). No falta nada: son los slots que `bloques.json` declara en `reusadas` y que cubren las placas del **tríptico** del mito. 9 mitos reúsan un slot (el `acto`), 3 reúsan dos y **21 reúsan los tres** (`entrada`, `acto`, `huella`). En el movimiento el slot reusado apunta directo a la placa (`../../mitos/<slug>/acto.crop-9x16.jpg`) o a una copia local `bNa.reuse.crop-9x16.jpg`. Es la misma excepción que en La aparición del hombre puso el `acto` en `c08` (§3.3). **Las 78 placas reusadas existen todas en disco** (78 de 78 comprobadas).
- **El modelo que declaran está muerto.** Los 33 `movimiento-v1.json` dicen `"model": "Seedance 2.5 web unlimited"` — el carril web que murió el 1 de septiembre — y usan el esquema `{myth, shots:[…]}`, incompatible con el `{_notas, modelo, clips:{cNN}}` del carril v4 (comparado contra `el-dorado/movimiento-v1-seedance.json`).
- **Las voces son de una tercera voz, también muerta.** Los 297 archivos de `voces-v1/` son `.mp3`, y los 33 `voz-v1.json` declaran `voice_id bNziytBsHtCSsgcPplG9` en `eleven_flash_v2_5` con `st .5 / sim .8 / speed .97`: ni la voz de agosto del ADN (`2HsKyIMt…`) ni la oficial de hoy (`9EHAKExD4lT2G6hPG74L` en `eleven_multilingual_v2`). Hay que regenerarlas, y en **WAV**.
- **Los guiones son de la doctrina corta.** Las 297 líneas del lote (9 por mito, una por archivo de `voces-v1/`) miden 5-19 palabras, **media 13,2** — justo el registro que dejó al video 1 en 44 % de narración y 8 avisos de aire muerto. La banda vigente es 17-19.
- **Los planes son del carril viejo.** Sin campo `mix` (o sea, modo «canal» con ducking), `music: ../../audio/musica-muisca-andina.mp3` con `music_vol 0.1` en vez de un lecho, y `transition_dur 0.45`.

**Traducción práctica:** de cada paquete sobreviven **los keyframes y el reparto de planos**; el prompt de movimiento hay que reescribirlo al esquema v4, las voces regenerarlas con la voz oficial en WAV, el guion recortarlo a la banda de 17-19 palabras y el plan rehacerlo con `mix: "narracion"` y su lecho. Ningún documento decía esto hasta ahora. ⚠ No está medido cuánto trabajo es: nadie ha escrito ni probado un conversor.

En el repo principal la cifra es todavía mayor: **41 carpetas de mito con keyframes**, 639 keyframes maestros (1.278 archivos contando los `.crop-9x16`), 39 `bloques.json` con el guion visual, y una biblia de 151 fichas.

---

## 4. Otras comunidades

Ninguna tiene un solo `.mp4` en el repositorio. Las cuatro se pararon **justo antes** del paso que convierte keyframes en video. Todo vive en el **repo principal, sin commitear**.

| Comunidad | Qué hay | Fechas | Nº | Estado declarado |
|---|---|---|---|---|
| **Wayúu** | Carril de video completo: 27 mitos con investigación, guion técnico, plan congelado, prompts toma a toma y **496 keyframes canónicos** (`b1a`…`b14b`). ADN de canal propio en **tres versiones** (v1 → v2 tras la queja de que el papercut se diluía → v3 con variación de cámara obligatoria y memoria causal de los dos keyframes anteriores). Doctrina propia en `ANDAMIAJE-VIDEOS.md`. | 7–9 sep | 1.900 archivos | `script_and_keyframe_production_complete_pending_user_approval`. El README lo dice literal: **«Hay 0 videos completos»**. 11 mitos siguen en `complete_pending_user_approval`. |
| **Nasa-Páez** | 26 mitos con **270 keyframes** (256 nuevos + 14 heredados de El Trueno), 24 rechazos conservados con su motivo. El Trueno tiene además preproducción de video propia (14 tomas `b1a`–`b7b`, dos revisiones de maqueta, dos candidatos rechazados archivados). Biblia de 60+ referencias y 26 trípticos publicados. | 9–13 sep | 1.673 archivos | `technical_validation: PASS`, `production_status: ready_for_user_review`. **«Video final: No producido.»** |
| **Chimila / Ette Ennaka** | 23 mitos, **157 maestros seleccionados** de 186 renders, 37 descartes conservados. Biblia de 69 másteres en 7 tandas. 22 trípticos. Archivo de 125 referencias fotográficas reales. | 12–13 sep | 779 archivos | `production_complete_user_review_pending`. **Sólo 2 de 157 cuadros tienen aprobación del usuario.** Los maestros están en 1024x1536 (2:3): la adaptación a 9:16 está pendiente. |
| **Huitoto** | Sólo biblia dentro de `content/videos/` (7 archivos). El trabajo real —196 másteres con 20 congelaciones, 21+1 trípticos— está en `output/imagegen/huitotos/`. | 13–14 sep | 7 archivos aquí | **Es la única comunidad que llegó a producción:** 21 trípticos (63 imágenes) publicados y verificados en el sitio el 14 de septiembre. Sin nada de video. |

**Único video de otra comunidad que existe:** dos tomas Seedance 2.5 generadas **en ElevenLabs** (no en Higgsfield) el 9 de septiembre a la 01:44 y 01:45, 5,04 s, 720x1280, desde los keyframes wayúu `b1a` y `b1b` de *La india Worunka* (verificado por comparación de imagen contra `output/imagegen/wayuu/keyframes/la-india-worunka-*`). Viven sólo en `/Users/alegut/Downloads/ElevenLabs_video_seedance-2-5_Use the attache_2026-09-09T06_44_49.mp4` y `…06_45_27.mp4`. Se generaron 34 minutos después de que esos keyframes salieran del horno y 22 horas antes de que arrancara el carril v4 muisca con Seedance. **Nadie las documentó.**

**Veredictos del usuario sobre estas comunidades que sí están escritos:**
- Wayúu, Arámai: «El estilo papercut se degrada progresivamente a lo largo de la historia», con la orden de no repetirlo y `decision: retain_aramai_do_not_regenerate` (0 cambios posteriores en ese mito).
- Wayúu, cámara: «no pareciera que haya mucho cambio de cámara, escenarios, y en ese sentido se hace un poco monótono» → «replanteemos y volvemos a hacer, métele más variedad». De ahí nace `la-sed-da-los-civilizados/produccion-camera-v2`, el único mito con producción paralela por cámara y **17 congelaciones de prompts**.
- Nasa: «no parecen hechos en maqueta 3d de papeles, paper cut... están más inclinados al mundo de la ilustración» → se rehicieron los 26 trípticos como maqueta fotografiada.
- Huitoto: «estás usando vestimentas muy modernas cuando los Huitotos y sus mitos son bastante antiguos».

---

## 5. Experimentos y callejones sin salida

| Experimento | Fecha | Piezas | Ruta | Qué se aprendió |
|---|---|---|---|---|
| **Pilotos grok vs kling** | 19 ago | 2 | `myth-mobile-design-…/biblia/piloto-{grok,kling}-b2.mp4` | Gana grok por precio: 1,5 cr/s es el piso de la plataforma. |
| **Bake-off de la laguna** | 20 ago | 3 (+4 demos SFX) | `myth-mobile-design-…/pruebas/` | kling3 es el más fiel pero convierte la niebla en **bolas de algodón**; wan2.7 empuja demasiado la cámara y va a 30 fps; seedance-mini es 67 % más caro. |
| **Demos de ambiente (SFX)** | 20 ago | 4, ~10 s | `pruebas/demo-{video,sin-sfx,con-sfx,sfx-pipeline}.mp4` | La capa de ambiente funciona a `sfx_vol` 0,40-0,45 con música a 0,09. Después se abandonó: en el carril v4 la música son los lechos de las narraciones del sitio. |
| **Casting de voz (6 másters)** | 20 ago | 6 | `bachue-mvp-a…f.mp4` | Gana el registro del fogón. La ronda 2 (abuelo/tía/dúo) **nunca se cerró**: la voz clonada del usuario la volvió irrelevante dos días después. |
| **"El duelo del Tequendama"** | 23 ago | **30** | `myth-mobile-design-…/videos/bochica/comparacion/` | 482,5 cr. Contiene `kling4k-c01…c06` (2160x3840), `sd25-c01…c06` (720x1280), los tres `salto-*` del plano más exigente, dos medias películas de 29,46 s (`bochica-mitad-kling4k`, `bochica-mitad-seedance25`) y siete versiones web de 576x1024. **Sin veredicto escrito**; la conclusión ("Seedance es el estándar") sólo aparece documentada dos semanas después. |
| **Cuatro versiones del salto** | 31 ago | 4 | `comparacion/sd25-1080p-salto{,-v2-animado,-v3-cinematico,-v4-doctrina}.mp4` | **El único experimento con veredicto por toma del usuario:** v1, v2 y v3 rechazadas, v4 aprobada. Causa raíz: Seedance no tiene negativos reales y «The characters only breathe and gesture softly» era una **orden literal de quietud**. |
| **Títulos en movimiento** | 31 ago | 2, 5,00 s | `higgs-field-…/videos/bochica/bochica-title-motion-v1.mp4` y `-v2.mp4` | Se quedaron en prueba: la ronda siguiente (r3) salió sin título. |
| **Cola de navegador unlimited** | 1 sep | 598 clips encolados | `higgsfield-browser-batch-v1.jsonl` (311 líneas) | La cola se degrada a una toma cada 29 min → 1 h 44 min; el usuario la cancela (`cancelled_by_user`). **Muere el carril web.** |
| **Lote congelado de 35 mitos** | 1 sep | 35 entradas | `video-batch-2026-08-31.json` | 33 mitos con todo listo y cero clips. Nadie escribió por qué se abandonó. |
| **Laboratorio de stop-motion** | 12 sep | **12**, 5,00 s | `lab-stopmotion/huitaca-b2a/p1…p8b.mp4` | La progresión medida: bisección pura (irregularidad 3,06×) → claves (1,52×) → plató fijo por mediana (deriva 0,88) → hoja de poses recortada (**deriva 0,00 por construcción**, $0,0133 la pose) → plancha + hojas 2x2 nativas (1,68×, $1,47 el clip). Tres límites del modelo: **no traslada la figura**, no sabe qué es "la mitad" de un gesto, y **redibuja el decorado entero en cada fotograma**. La cadencia se decide al montar, no al generar. Ledger: 194 llamadas, $15,56. |
| **Reel E4 de cadencia** | 12 sep | **13** | `videos/huitaca/v2/reel/` | Tres cadencias sobre el mismo material para que el usuario elija viéndolas. El diseño dice literal: «sin este visto bueno no se produce el video aunque las métricas pasen». **La decisión sigue abierta.** |
| **Anclas A/B (E0/E2)** | 12 sep | 1 mp4 + 5 hojas de contacto | `v2/mundo/`, `v2/planos-out/{P02,P13,P14,P15}/` | Hallazgo que cambió el plan: **la máscara de edición de la API es una pista, no un cerrojo** (MAD 6,21 con máscara vs 6,98 sin ella). La fidelidad del plató se garantiza en post. |
| **Flipbooks v3** | 12-13 sep | 3 | `v2/planos-out/P13/flipbook{,-36,-36b}/` | La hoja es la mejor coreografía del laboratorio, pero **el redibujado hereda la escala de la hoja, no de la maestra**. La primera hoja 6x6 fue rechazada por dos verificadores (12 celdas idénticas al inicio, olla saltando, cara pálida). Gasto del carril: $8,23. Veredicto del usuario: «no me gusta este approach». |
| **Cadena con ancla v4** | 13 sep | 4 | `v2/planos-out/P13/v4/` | Identidad, encuadre, escala y pose clavadas los 24 pasos; **el defecto es que la luz deriva** (del fotograma 9 en adelante el cielo se aclara y el suelo se calienta a naranja). Con ancla: deriva entre vecinos 4,51 → 2,17, retrocesos 1 → 0. $3,18 el segundo. **Aquí se detuvo todo.** |
| **Stop-motion b1a v1** (fuera del repo) | 13 sep 08:09 | 2, 1,00 s | `output/imagegen/huitaca-stopmotion-b1a-2026-09-13-v1/` | 12 exposiciones encadenadas a 864x1536. La deriva del decorado crece de 6,8 % a 21,7 % de píxeles cambiados. Su propio README: «no constituye una animación final aprobada». |
| **Stop-motion b1a v2** (fuera del repo) | 13 sep 08:55 | 3 | `output/imagegen/huitaca-stopmotion-b1a-2026-09-13-v2/` | Máscara local + composición sobre el decorado original: **cero píxeles cambiados fuera de la envolvente** — al precio de que sólo se mueven piernas y bajo de la manta. En el recorte de detalle la figura se lee **fotorrealista, no de papel**. |
| **Stop-motion b1a "2 segundos"** (fuera del repo) | 13 sep 08:57 | **0 mp4** | `output/imagegen/huitaca-stopmotion-b1a-2s-v2/` | Se paró en el **cuadro 22 de 24** (verificado: 22 PNG en `frames/`, 22 en `accepted-crops/`, 26 candidatos, `delivery/` vacía, `status: in_progress`). Su README anuncia dos .mp4 que no existen. Con su `assemble.sh` saldrían 1,83 s. Desde el cuadro 06 se ve una costura rosada de la máscara. |
| **Prueba en ElevenLabs** | 9 sep 01:44 | 2 | `~/Downloads/ElevenLabs_video_seedance-2-5_*` | Único video de una comunidad no muisca. Sin dueño documentado. |

---

## 6. Dónde está cada cosa

**Los .mp4 están en `.gitignore`: viven sólo en el disco de cada worktree y no existen en ningún remoto.**

| Ubicación | Rama / commit | Qué contiene | .mp4 |
|---|---|---|---|
| `/Users/alegut/MyApps/Personal/mitos_colombia` | `main` en `de5cdd4a` (23 ago) | **Repo principal.** Carriles de video de wayuu, nasa-paeces, chimila y huitotos; los 41 mitos muiscas con keyframes; la certificación de cierre; `output/` entero; más de 60 documentos de doctrina por comunidad. | 5 (los stop-motion de `output/imagegen`) |
| `…/.claude/worktrees/myth-mobile-design-c8ea4f` | `claude/muisca-myths-video-mvp-834b41` | **Era grok (agosto).** Bachué y Bochica completos, los 6 MVP de casting, los pilotos, las pruebas de modelo y el duelo del Tequendama. | 105 |
| `…/.claude/worktrees/higgs-field-gpt2-2k-value-ef422e` | `video/bochica` en `ae39522f` | **Era web unlimited (fin de agosto).** Bochica v4 (3 rondas), Bachué v1-no-title, bochica-maestro, el lote congelado de 35 mitos y la bitácora de la cola de navegador. | 72 |
| `…/.claude/worktrees/elegant-matsumoto-11a141` | `claude/muiscas-video-kling-first-161fc1` en `53ed9203` | **Era MCP (9-11 sep), la buena.** Los cuatro videos entregados, el cierre de canal, los `-v6`, el pipeline v4 y la retrospectiva. | **139** |
| `…/.claude/worktrees/next-muisca-video-3e07cd` | `claude/next-muisca-video-3e07cd` en **`6acd5dfa`** (16 sep 10:35) | **Era stop-motion (12-13 sep) + la mesa de montaje (16 sep).** Laboratorio, Huitaca v1 con su QC, el panel adversarial, v2/v3/v4, el inventario mecánico, **Bachué v7** y los documentos nuevos (`MANUAL-DE-PRODUCCION.md`, `BITACORA.md`). El `531d76f6` que decía esta fila es del 13 de septiembre; desde entonces la rama avanzó (`e8f6e6b3` Bachué v7 → `dee51627` cola y ADN → `6acd5dfa` manual y bitácora). | **241** (eran 56: el 16 de septiembre entraron las **164 tomas comparables** de `content/videos/muiscas/comparador/`, las 18 de `clips-seleccion/` y los 3 archivos de la v7) |
| `…/.claude/worktrees/eleven-labs-alejandro-v3-a413c9` | `claude/elevenlabs-myth-narration-8de8a2` | Carril de narración del sitio. Tiene `content/videos/muiscas` con los `.srt` y los planes de agosto, **cero .mp4**. | 0 |
| `…/.claude/worktrees/myth-internal-image-quality-f935fe` | HEAD desprendido `24d0d484` | Calidad de imagen de la ficha interna. | 0 |
| `…/.claude/worktrees/home-redesign-lost-changes-488e39` | `claude/home-redesign-lost-changes-488e39` | Sin `content/videos`. | 0 |
| `…/.claude/worktrees/myth-internal-mobile-design-dba6fe` | `claude/myth-internal-mobile-design-dba6fe` | Sin `content/videos`. | 0 |
| `/private/tmp/aramai-original-release.CJNUId` | `a167f068`, **prunable** | Worktree temporal sobre Arámai que **ya no existe en disco**. Conviene `git worktree prune`. | — |
| `/Users/alegut/Downloads` | — | **Las entregas reales** y dos tomas que no están en el repo. | **15** (eran 12: el 16 de septiembre entraron los 3 archivos de Bachué v7) |

**Qué hay exactamente en `~/Downloads`** (verificado: las **13** copias de entrega son **byte-idénticas** a su máster del worktree — las 10 de agosto y septiembre más las 3 de Bachué v7):

| Archivo | Fecha de copia | Es |
|---|---|---|
| `bachue.mp4` | 20 ago 01:15 | `bachue-v1-preview.mp4` — **la primera entrega del canal** |
| `laapariciondelhombrefinalv1seedancepreview.mp4` | 9 sep 23:42 | preview de la versión Seedance, 14 min después de ensamblarse |
| `la-aparicion-del-hombre-seedance-1080p.mp4` | 10 sep 10:02 | el máster `-v1-seedance` (la aprobación del 11 llegó con el archivo ya un día en la mano) |
| `el-salto-del-tequendama-seedance-1080p.mp4` | 11 sep 19:19 | `el-tequendama-final-v5` |
| `bachue-seedance-1080p.mp4` | 11 sep 20:31 | `bachue-final-v5-seedance` |
| `cierre-de-canal-mitos-de-colombia.mp4` | 11 sep 21:19 | `cierre-canal-v1` |
| `bachue-seedance-1080p-con-cierre.mp4` | 11 sep 21:19 | `bachue-final-v6-con-cierre` |
| `el-salto-del-tequendama-seedance-1080p-con-cierre.mp4` | 11 sep 21:23 | `el-tequendama-final-v6-con-cierre` |
| `la-aparicion-del-hombre-seedance-1080p-con-cierre.mp4` | 11 sep 21:24 | `la-aparicion-del-hombre-final-v6-con-cierre` |
| `el-dorado-seedance-1080p-con-cierre.mp4` | 11 sep 21:55 | `el-dorado-final-v1` |
| `ElevenLabs_video_seedance-2-5_…06_44_49.mp4` | 9 sep 01:45 | toma wayúu `b1a`, **no existe en el repo** |
| `ElevenLabs_video_seedance-2-5_…06_45_27.mp4` | 9 sep 01:45 | toma wayúu `b1b`, **no existe en el repo** |
| `bachue-final-v7-seleccion.mp4` | **16 sep 10:13** | el máster de Bachué v7 (md5 `0c67606e…`, byte-idéntico al del worktree) |
| `bachue-final-v7-seleccion-social.mp4` | 16 sep 10:13 | su `-social` (md5 `8d891eb5…`, byte-idéntico) |
| `bachue-final-v7-seleccion-preview.mp4` | 16 sep 10:13 | su `-preview` (md5 `d85fcdd9…`, byte-idéntico) — **es el primer entregable que conserva el nombre técnico del máster** en vez de un nombre editorial |

(Hay además tres `.mp4` sueltos en `~/Downloads` que no son del proyecto: dos de WhatsApp y `video-REG-2206.mp4`.)

También sueltos en `~/Downloads`: **4,3 GB de la grabación y masterización de la voz del usuario** — medido el 16 de septiembre: `alejandro_mitos.wav` 619 MB, dos proyectos `.aup4` de 1,25 GB cada uno y cuatro FLAC (321 + 296 + 295 + 286 MB) de la cadena de normalización y máster, del 22-23 de agosto; 4.318.995.373 bytes en total. (El «2,5 GB» que decía esta línea sólo contaba los dos proyectos de Audacity.) Es el material fuente de la identidad sonora del canal y **no está respaldado en ninguna parte del proyecto**.

### Advertencia de versionado

- **Lo único de video que llegó a `origin/main`** es el commit `1ffc0c8b` del 22 de agosto (la biblioteca de 78 MB: biblia, keyframes, voces, música, SFX y pipeline).
- Las cuatro ramas de video (`video/bochica`, `claude/video-tests-search-ae3b0e`, `claude/muiscas-video-kling-first-161fc1`, `claude/next-muisca-video-3e07cd`) siguen **sin fusionar**.
- El **repo principal está 45 commits atrás** de `origin/main` y arrastra **387 rutas sin trackear y 44 modificadas**. Sin commitear: `content/videos/wayuu/` (1.900 archivos), `content/videos/nasa-paeces/` (1.673), `content/videos/chimila/` (779), la certificación muisca, los recibos de publicación, ~80 fichas nuevas de la biblia, `docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md` y `output/` entero.
- **Riesgo concreto:** un `git checkout` o un `git pull` mal dado en el repo principal se lleva por delante semanas de trabajo de cuatro comunidades que no existen en ningún remoto.
- **Entorno:** `/usr/bin/git` falla con «You have not agreed to the Xcode license agreements». Todo lo de este informe se hizo con `export DEVELOPER_DIR=/Library/Developer/CommandLineTools` delante. Conviene resolverlo con `sudo xcodebuild -license`.

---

## 7. Huecos y contradicciones

**Decisiones que nunca se tomaron (o no dejaron rastro)**

1. **La cadencia del stop-motion.** Los tres reels E4 existen desde el 12 de septiembre y el propio diseño dice que «la cadencia la elige el usuario viendo los tres reels; hasta entonces no se fija». No consta que se hayan visto.
2. **Las dos tomas desviadas de El Dorado** (`c09` manos demasiado altas, `c06` abre más oscuro). Se anotaron «por si el usuario quiere rehacerlas» y quedaban 32 créditos. Sigue sin respuesta.
3. **Todo el carril web (v3) está sin veredicto.** `bochica-final-v4`, `-v4-r2`, `-v4-r3-no-title` (31 ago), `bachue-final-v1-no-title` (1 sep) y los dos clips de `bochica-maestro` son másters y tomas reales que **ningún documento declara entregados, aprobados ni rechazados**. En particular, no consta cuál de las tres rondas de Bochica v4 era la buena.
4. **El duelo del Tequendama (30 archivos, 23 ago) no tiene conclusión escrita.** Es casi con seguridad el origen de la adopción de Seedance, pero el veredicto aparece documentado dos semanas después.
5. **La ronda 2 del casting de voz** (mvp-d abuelo / mvp-e tía / mvp-f dúo) nunca se cerró.
6. **Por qué se abandonó el lote de 35 mitos.** Existe el archivo congelado y existe el `cancelled_by_user` de la cola, pero ningún commit ni doc explica la decisión.
7. **Quién pidió las dos tomas de ElevenLabs** del 9 de septiembre, con qué intención, y por qué se adjuntó también el keyframe `b2a` sin animarlo.
8. **Si a alguien se le enseñaron** las tres carpetas de `output/imagegen/huitaca-stopmotion-*` del 13 de septiembre y qué dijo. Están armadas como entregables (README, visor `index.html`, hojas de contacto, ZIP) y ningún documento del repo las menciona.

**Donde los documentos no cuadran con el disco**

| Contradicción | Qué dice el doc | Qué dice el disco | Resolución |
|---|---|---|---|
| Fechas del 11-12 de septiembre | La cola §9 y `channel-dna` fechan Bachué v5, el cierre, los tres `-v6` y El Dorado el **12 de septiembre** | `mtime` y `git log --date=iso-local` los ponen el **11 de septiembre**, 20:16–21:55 | **Resuelto:** los docs están en UTC (21:56 en Bogotá son las 02:56 UTC del 12). **La fecha buena para ordenar es la local, el 11.** |
| Estado de El Dorado | Tres fuentes decían tres cosas: la cola §9 «ensamblado, con cierre de canal» **sin ✅**; `channel-dna` «EN PRODUCCIÓN»; y su guion **sin campo `aprobado`**, lo que por la ley 0b lo dejaría en borrador | El máster de 97,46 s está completo y **se copió a `~/Downloads` con nombre editorial** el 11 a las 21:55, igual que los tres aprobados | Se entregó. **No consta el veredicto — hay que preguntar.** Las tres fuentes ya dicen lo mismo: la cola §9 lo marca «⚠️ ENSAMBLADO, SIN VISTO BUENO» desde `dee51627` y `channel-dna.video_6.estado` se corrigió igual el 16 de septiembre. Falta sólo el `aprobado` del guion, que sólo puede escribirse tras el veredicto. |
| Bochica v4 r1 vs r2 | Dos fuentes lo dejaron como laguna: «duran lo mismo y se diferencian en 0,5 MB» | Medido: mismos 2.376 fotogramas, mismo audio, `.srt` idéntico, **PSNR medio 34,2 dB**; los fotogramas distintos calcan las marcas del subtítulo | **r2 quita los subtítulos quemados** y, de paso, su título sale en una grotesca pesada en vez de la versalita fina: es la firma exacta de la trampa de la fuente caída a Helvetica. Secuencia real: r1 con subtítulos y título fino → r2 sin subtítulos y con el título caído → r3 sin nada. |
| Cuántos mitos muiscas tienen keyframes | Los docs del worktree dicen 35 (lote congelado) o «3 mitos listos» (pipeline v3) | El repo principal tiene **41 carpetas de mito** con 639 keyframes maestros y 39 `bloques.json` | 41. Las seis que faltaban en el recuento son `campos-eliseos, el-hijo-del-sol-goranchacha, el-primero-de-los-reyes, pacanchique, popon, el-bermejo-aspira-a-ser-rey`. |
| Certificación vs. disco | El cierre del 26 de agosto certificó **536** imágenes de video cumplidas y 84 renunciadas | Hoy hay **639** keyframes en disco | ~100 se generaron **después** del cierre certificado, o la certificación contaba sólo los que pertenecían a un plan. Sin resolver. |
| `channel-dna.json` | Decía en `.voz.VOZ_OFICIAL_CANAL` «Alejandro en `eleven_v3`» y en `.video.modelo` `grok_video`, con `seedance_2_5` entre los descartados | La voz vigente es `alejandro_narracion` en `eleven_multilingual_v2` y el modelo es Seedance 2.5 | **RESUELTO el 16 de septiembre.** `dee51627` reescribió `.video` (Seedance con precios verificados; la sección de grok pasó íntegra a `.video_historico`), `.voz.VOZ_OFICIAL_CANAL` y `.musica.cama_actual`. La pasada posterior corrigió `.formato.clips_nativos` (era «720x1280 (grok)»), el resto de `.voz`, `.sfx` (decía dos archivos: son **cuatro**) y `.musica.volumen_en_mezcla`, y marcó como históricos los bloques de agosto. El ADN ya no envenena; la verdad operativa vive en `MANUAL-DE-PRODUCCION.md`. |
| Los 33 paquetes «prepared» | Parecen incompletos: en `keyframes/` faltan entre 1 y 4 archivos maestros por mito | Medido: **no falta ninguno**. Son los slots que `bloques.json` declara en `reusadas` y que cubre una placa del tríptico (`entrada` / `acto` / `huella`); el `shots[].keyframe` apunta a la placa o a una copia `bNa.reuse.crop-9x16.jpg`. Resueltas las 593 rutas de los 33 movimientos (18 por mito, 17 en `los-cojines-del-zaque`): **0 rotas**; las 78 placas reusadas existen | **No es un agujero.** Lo que sí está mal en esos paquetes es otra cosa: modelo muerto, esquema viejo, voz muerta y guion corto — ver §3.8. |
| Los tres flipbooks de P13 | Una fuente dice que `flipbook-36` pesa 5,4 MB y `flipbook-36b` 4,1 MB | Medido: `flipbook-36` = **4,1 MB**, `flipbook-36b` = **5,4 MB** | Vale el disco. La aprobada es `flipbook-36b`. |
| Rechazos de la campaña nasa | Una fuente cuenta 21 keyframes rechazados | `verification.json` suma **24** | Vale el JSON. |
| `huitaca-stopmotion-b1a-2s-v2` | Su README anuncia 24 exposiciones y dos .mp4 | 22 PNG, `delivery/` vacía, **cero .mp4** | La prueba nunca se montó. Con `assemble.sh` saldrían 1,83 s de los 2 s previstos, sin gastar nada. |

**Lo que este inventario no pudo determinar**

- **Nadie ha visto los videos en movimiento en esta revisión.** Todos los juicios visuales de este documento vienen del QC escrito (el panel de Huitaca, los `import-map`, los `jobs.json`) o de fotogramas sueltos, no de mirar los clips.
- **No hay veredicto del usuario para la mayoría de los másters de agosto.** Sólo se sabe que se le enviaron previews de 720x1280, y en `~/Downloads` sólo sobrevive el de Bachué v1.
- **No se abrieron las sesiones de OpenAI Codex Desktop** (`/Users/alegut/.codex/sessions/2026/09/07-09/`), que son las que produjeron el carril wayúu entero y la certificación del 26 de agosto. Ahí estaría el diálogo real, mito por mito.
- **Los 923 keyframes de wayuu, nasa y chimila no se miraron.** Para señalar cuáles no gustan hay visores ya hechos: `output/imagegen/wayuu/keyframes/<slug>-review-0N/index.html`, `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/comunidad-nasa/index.html` y las láminas `secuencia-N.jpeg` de cada carpeta.
- **No se comparó byte a byte** el árbol `content/videos/muiscas` del repo principal contra el de los cuatro worktrees: los `mtime` de los worktrees son de checkout y no sirven para decidir si algún keyframe difiere entre copias. *(Sí se comparó el **recuento** de keyframes de los 33 paquetes `prepared` entre el repo principal y `higgs-field-gpt2-2k-value-ef422e`: da exactamente lo mismo mito a mito, incluido `chaquon` con 15 en los dos. El contenido de los archivos sigue sin comprobarse por hash.)*
- **Búsqueda de .mp4 limitada** a `/Users/alegut` hasta cuatro niveles, excluyendo `Library`. No se miraron volúmenes externos, iCloud/Drive, la papelera ni las cuentas de YouTube o Instagram.

---

## 8. Bachué v7 — el montaje por selección del usuario (16 de septiembre de 2026)

Con el inventario de este documento se publicó una **mesa de montaje escena por escena**
(artifact `68e85cf2-6d4d-4cf6-97e6-39fe4189d7a6`): una fila por escena, las variantes de cada tanda
lado a lado y la elección guardada en la base de la propia página. El usuario eligió las 18 tomas de
Bachué y con ellas se montó **`bachue-final-v7-seleccion.mp4`** (102,46 s), que pasa a ser el máster
vigente del mito por encima de la v6.

**Reparto elegido: 9 tomas de grok (agosto), 5 de Seedance 2.5 y 4 de Gemini Omni Flash 1.1.**
Es la primera vez que un máster del canal mezcla tandas: hasta ahora cada video salía de una sola.
Y devuelve al aire nueve tomas de agosto que llevaban tres semanas archivadas — incluidas tomas de
la tanda Gemini que se había **rechazado entera** en septiembre, lo que confirma que el rechazo era
de tomas concretas, no del modelo.

| Escena | Tanda elegida | Escena | Tanda elegida | Escena | Tanda elegida |
|---|---|---|---|---|---|
| c01 | gemini | c07 | grok | c13 | gemini |
| c02 | seedance | c08 | grok | c14 | gemini |
| c03 | grok | c09 | grok | c15 | grok |
| c04 | seedance | c10 | grok | c16 | gemini |
| c05 | seedance | c11 | grok | c17 | seedance |
| c06 | grok | c12 | grok | c18 | seedance |

**Lo que hubo que hacer para mezclar tandas:** las nueve tomas de grok venían a **720×1280** y cuatro
de ellas duraban 6,04 s; se reescalaron a 1080×1920 con lanczos y se recortaron a los 5 s del bloque.
El resto del montaje es el de siempre: voces v4, lecho v6 (01-flauta-de-niebla → 09-telar-de-semillas
→ 06-laguna-de-iguaque), mezcla `narracion`, sin subtítulos, título Asimovian y el cierre de canal
como bloque 20. Plan: `content/videos/muiscas/videos/bachue/plan-v7-seleccion.json`; elecciones:
`seleccion-usuario.json`; tomas normalizadas: `clips-seleccion/`.

**Dónde están las tomas que se compararon.** La mesa no salió de la nada: las **164 tomas comparables**
están en disco, en `content/videos/muiscas/comparador/` de este worktree, copiadas el 16 de septiembre a
las 10:02 desde los otros tres worktrees y agrupadas por mito y por tanda — Bachué 72 (`grok`, `web`,
`gemini`, `seedance`, 18 cada una), el Tequendama 56 (`grok` 18, `v4` 19, `seedance` 19) y La aparición 36
(`kling` 18, `seedance` 18) — con su `index.html`, `datos.json` y `meta.json` al lado. La carpeta está en
`.gitignore` (línea 81), así que **no existe en ningún remoto**: si se borra este worktree, la mesa hay que
rearmarla desde los cuatro árboles.

**Entrega y veredicto.** Los tres archivos (máster, `-social` y `-preview`) se copiaron a `~/Downloads` el
**16 de septiembre a las 10:13**, byte-idénticos a los del worktree (md5 del máster `0c67606ef851ff2164790635a1b49241`).
La v7 **está entregada, no sólo montada**. Lo que no hay es veredicto: no existe campo `aprobado_video`
en `plan-v7-seleccion.json` ni nota de visto bueno en ningún commit, así que por la ley de cierre el máster
queda **entregado y sin cerrar**.

**Advertencia de calidad:** la mitad del video viene de material 720p reescalado, así que junto a una
toma Seedance nativa se nota la diferencia de nitidez. Es una decisión editorial del usuario, no un
defecto del montaje.

