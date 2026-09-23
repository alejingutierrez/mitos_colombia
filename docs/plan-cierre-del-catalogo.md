# Plan de implementación · cierre del catálogo

Ejecuta [`spec-cierre-del-catalogo.md`](spec-cierre-del-catalogo.md). El spec
dice **qué** falta y cuándo está cerrado; esto dice **en qué orden se hace,
quién lo hace, qué archivo sale de cada paso y cómo se comprueba**. El
procedimiento de cada ficha no se repite aquí: es la skill
`enriquecimiento-mitos` y el §6.2 de
[`spec-mestizos-y-mixtos.md`](spec-mestizos-y-mixtos.md).

**Quién:** **S** es la sesión principal (kit, cotejo, aplicación en Neon,
commits); **A** son los agentes en paralelo (bibliografía, actas, relatos,
fuentes); **D** es el director (decisiones y visto bueno antes de aplicar).

---

## 0. Reglas de ejecución

1. **Una sola rama de trabajo:** `claude/enriquecimiento-mitos-mestizos-99b035`.
   Desde el 2026-09-22 contiene toda la historia de
   `…-mestizos-mixtos-d94433` (fast-forward). El worktree `d94433` queda
   congelado: nada se edita ahí.
2. **Un commit por paso con nombre** —bibliografía, actas, relatos, fuentes,
   cotejo, publicado—, con el mensaje en el estilo de los ciclos Caribe y
   Bogotá: qué cambió, qué se encontró y qué número se movió.
3. **Nada se escribe en Neon sin tres cosas:** dry-run limpio, una ficha
   completa enseñada a **D** con su sí, y respaldo en
   `artifacts/editorial-backups/` (los scripts lo dejan solos).
4. **Tandas de agentes de 2 a 4 fichas**, con el entregable escrito a disco
   primero. Texto e investigación nunca van por OpenAI.
5. **Al cerrar cada fase se vuelve a medir** con `tablero.mjs` (tarea F1.5) y
   se actualiza [`estado-enriquecimiento.md`](estado-enriquecimiento.md).
6. **Tests:** se comprueba `ℹ fail 0` y el código de salida, nunca un `grep`
   encadenado. Las aserciones viejas se reescriben, nunca se borran.

---

## F0 · Poner la rama al día · S · ½ sesión

El trabajo de Bogotá del 2026-09-22 quedó sin commit en el worktree
`d94433`. **No se copia a mano: se reproduce aquí con el kit**, porque todo
sale de JSON versionados.

| # | tarea | salida | hecho cuando |
|---|---|---|---|
| F0.1 | Las tres correcciones de palabras de aparato en los Relatos: «el cronista» → «el periodista» (Loca Margarita, 4 veces), «derivó hacia el cuento de espantos» → «se volvió cosa de espantos» (Farol) y «se partió el relato» → «se partió la historia» (Mula) | 3 JSON en `content/editorial/bogota-mestizo/reescritura-2026-09-21/` | `importar-texto` dry-run en verde en los dos módulos |
| F0.2 | Se hace con K1 (F1.1), no a mano: el `define` y el `pick` de `bogota-mestizo-memoria` y `-nocturno` | — | cubierto por F1.1 |
| F0.3 | `importar-texto --apply` y `consolidar-fuentes --reemplazar --apply` en los dos módulos bogotanos | `definitions.mjs` y `sources.mjs` de ambos | `cotejar` da 8/8 y 6/6 «coincide» |
| F0.4 | Reescribir las aserciones heredadas de los cuatro tests bogotanos (corpus y sync-preflight de cada módulo) sobre la sustancia nueva | `scripts/editorial/bogota-mestizo-*.test.mjs` | `ℹ fail 0` |
| F0.5 | Auditoría de los dos módulos, cada una en su archivo (K2) | `content/editorial/mestizo/auditoria-fuentes-<fecha>-bogota-mestizo-*.json` | 0 bloqueos en las 14 |

Commit: «Bogotá entra al módulo: 14 relatos, 115 fuentes, cotejo 14/14».

---

## F1 · El kit · S · ½ sesión · antes de cualquier ciclo nuevo

Cada tarea lleva su test en `scripts/editorial/enriquecimiento/*.test.mjs`,
con módulos de prueba en `scripts/editorial/enriquecimiento/fixtures/`. Hoy el
kit no tiene tests propios, y los cuatro fallos que corrige se habrían cazado
con ellos.

| # | tarea | archivos | hecho cuando |
|---|---|---|---|
| F1.1 | **K1.** `abrir-modulo.mjs` aprende el cuarto escondite: reescribe `pick…Sources(input.slug)` a `pick…Sources(input.sourceKeys \|\| input.slug)`, hace que `pick…` acepte una lista, y en el `define` pone el piso en 8 con `sourceKeys` (1 con `fuentesAgotadas`) y en 5 sin ellos. Es idempotente | `abrir-modulo.mjs` | test con un módulo de prueba en la disposición bogotana: después de `--apply`, `records.mjs` resuelve las `sourceKeys` de la ficha |
| F1.2 | **K1.** `comprobar-modulo.mjs` marca `✗` si un ciclo con alguna ficha reescrita todavía llama `pick…Sources(input.slug)` a secas | `comprobar-modulo.mjs` | test rojo antes de F1.1 y verde después |
| F1.3 | **K1, en bloque:** `abrir-modulo --apply` sobre los 26 ciclos pendientes, más los dos bogotanos. Se carga cada `records.mjs` y se corren sus tests | 26 × `define-editorial-myth.mjs` + `sources.mjs` | 28 módulos cargan, y los tests del corpus quedan como estaban (lo heredado no cambia de fuentes) |
| F1.4 | **K2.** `auditar-fuentes.mjs` pone `--modulos` en el nombre del informe | `auditar-fuentes.mjs` | dos auditorías del mismo cajón el mismo día dejan dos archivos |
| F1.5 | **Tablero como comando.** La consulta del spec §8 pasa a `tablero.mjs`: `myths` × `editorial_myths` por slug, `sources_json` + `key_sources_json`, módulo resuelto por slug, carril asignado, actas en el repo y slugs en módulo que no están en Neon. Deja JSON y tabla | `tablero.mjs`, `npm run mitos:enriquecer:tablero` | reproduce las cifras del spec del 2026-09-22 (596 / 431 / 146 / 184 abiertas) |
| F1.6 | **K3.** `aplicar-texto.mjs` imprime el título `antes → después`; `importar-texto.mjs` avisa si el `titulo` trae un nombre propio que ningún nudo del acta ancla | los dos scripts | test: con el acta de la Loca Margarita, «Villaquirá» salta como aviso |
| F1.7 | **K4.** `abrir-modulo.mjs` marca con `// heredada: reescribir tras el cotejo` cada `assert.match` sobre texto en los tests del ciclo | `abrir-modulo.mjs` | los tests de un ciclo recién abierto muestran las marcas |

Commit por tarea. Al final: «El kit aprende el cuarto escondite: 28 módulos
abiertos».

---

## F2 · Las decisiones · S prepara, D decide · ½ sesión

| # | tarea | salida |
|---|---|---|
| F2.1 | Juntar las 13 decisiones del spec §4 en una sola agenda, cada una con sus tres opciones concretas, la recomendada primero y el enlace a su `DECISIONES.md` | `content/editorial/DECISIONES-cierre.md` |
| F2.2 | Para D10 y D13 (fichas en módulo y no en Neon), una línea por slug con lo que el módulo tiene y si hay primario | ídem |
| F2.3 | Sesión con D. Cada respuesta se escribe en el `DECISIONES.md` de su ciclo, pasando de «Abiertas» a «Resueltas» con fecha | los `DECISIONES.md` |
| F2.4 | Lo que no se decida queda **bloqueado y declarado**, y no frena a su ciclo | actas con `nudos: []` |

**Dependencias:** F3 necesita D2-D6. F4 necesita D7-D10. F5 necesita D11. D1,
D12 y D13 pueden esperar hasta F7.

---

## F3 · C1, publicar lo listo · S · ½ sesión · 18 fichas

| # | tarea | hecho cuando |
|---|---|---|
| F3.1 | Aplicar D3, D5 y D6 a los `titulo` y al texto de los JSON bogotanos, reimportar y volver a cotejar | cotejo 14/14 |
| F3.2 | **Enseñar una ficha a D**; con el sí: `aplicar-texto --apply --confirm=mestizo-texto` → `aplicar-fuentes --apply --confirm=mestizo-fuentes`, con `--region=andina --modulos=… --slugs=<las 14>` | respaldos escritos |
| F3.3 | `revalidar` y `verificar --vivo` de las 14 rutas | «todo coincide» |
| F3.4 | Vallenato: incorporar `la-bruja-del-trinche` y `la-sirena-de-hurtado` a `cesar-mestizo-residual` (entrada en el módulo, `sourceKeys`), importar, consolidar, cotejar, auditar y aplicar igual | 2 rutas coinciden y ya no citan Wikipedia, Mapcarta ni Scribd |

Commit: «Publicado: Bogotá y las vallenatas, verificadas en sus URLs».

---

## F4-F7 · Los ciclos · A + S · la misma plantilla de seis rondas

Cada ciclo nuevo pasa por las mismas rondas. Lo de cada carril va en su
sección, abajo.

| ronda | quién | qué | sale en `content/editorial/<ciclo>/` | puerta |
|---|---|---|---|---|
| R0 | S | preflight (`exportar`), `diagnostico`, `abrir-modulo` (ya hecho en F1.3), comprobar | — | `records.mjs` carga y los tests están en verde |
| R1 | A | bibliografía del ciclo, una sola vez | `busqueda-<fecha>/BIBLIOGRAFIA.md` y `primarias/*.txt` | el reparto real dice qué obra sostiene cada slug |
| R2 | A, 3-4 fichas por agente | actas | `actas-<fecha>/<slug>.json` | `validar-acta` en verde, con las citas cotejadas contra el primario |
| R3 | A, 3-4 fichas por agente | relatos y las cuatro capas | `reescritura-<fecha>/<slug>.json` | `validar-acta --con-relato` e `importar-texto` en dry-run, en verde |
| R4 | A, 2-3 fichas por agente | fuentes, abriendo cada URL | `fuentes-<fecha>/<slug>.json` | ≥ 8 por ficha o `agotado` razonado |
| R5 | S | importar, consolidar, cotejar, auditar, tests | módulo e informe de auditoría | cotejo 100 %, 0 bloqueos, `fail 0`, repetición ≤ 2 % |
| R6 | S + D | una ficha enseñada a D, aplicar, revalidar, `verificar --vivo` | — | «todo coincide» |

Lo que sale de cada ronda y abre una decisión va al `DECISIONES.md` del ciclo
y **no para la ronda**.

### F4 · C2 Santander y Piedecuesta · 38 fichas · 1 sesión

- **R1 ya está hecha** (bibliografía de la ronda 2). Lo que falta es extraer
  a `piedecuesta-santander/primarias/` el texto de Valenzuela Sánchez
  —*Leyendas y cuentos de Santander* (2009) y *Tres leyendas ganadoras* (2004),
  del sitio del autor— y el de Pérez Pinzón (2016). Si es escaneado, el OCR
  detecta el canalón hoja por hoja.
- **R2:** las 17 con registro consultable, más las 3 de D10 si se publican.
- **R3-R4:** las 8 que ya tienen acta, más las 17.
- **Las de Vicente Arenas y las 7 sin rastro** (D9) quedan bloqueadas y
  declaradas con su acta de «sin decidir». Cuentan como resueltas.
- Los módulos son siete (`piedecuesta-*` y `santander-*`): R5 se corre módulo
  por módulo, con `--region` para cada uno.

### F5 · C3 Llano y río · 42 fichas · 1½ sesiones

- **R1 hecha** para las 31. Falta extraer los primarios de Vargas Barón
  (1996) y Baquero Nariño a `orinoquia-amazonas/primarias/`.
- **Antes de R2, el cajón:** D11 decide qué amazónicas se quedan en «mixto».
  Las que vuelven a una comunidad cambian de `community_id` con un script en
  `scripts/`, con respaldo, y su módulo pasa a esa comunidad. **No se crean
  comunidades ni etiquetas.**
- **Las 11 residuales** (huitoto y ticuna) entran en R2 con el resto. Sus
  fuentes actuales en Neon se tratan como propuestas, no como hechas: pasan
  por R4 y por el cotejo.

### F6 · C4 Andina sin empezar · 49 fichas · 1½ sesiones

Tres ciclos de investigación, cada uno con su R1 y el resto de rondas en
paralelo:

| ciclo de investigación | módulos | fichas |
|---|---|---:|
| Antioquia y Caldas | `antioquia-mestizo`, `antioquia-mixto-residual`, `caldas-mestizo` | 21 |
| Tolima | `tolima-mestizo-residual`, `tolima-mixto-residual` | 15 |
| Boyacá y andina-varios | `boyaca-*`, `andina-varios-*` | 13 |

La carpeta de trabajo de cada uno es `content/editorial/<nombre-del-ciclo>/`,
como `piedecuesta-santander/`. En R1 de Boyacá y andina-varios se busca
primero si alguna ficha es muisca mal ubicada o duplicado de Bogotá. Si lo
es, va a decisión antes de escribirle acta.

### F7 · C5 cierre y C6 forma sin verificar · 37 fichas · 1 sesión

- **C5 (19):** `caribe-mixto-final`, `varios-*` y las tres del Pacífico sin
  texto. En R1, cada ficha de «varios» dice primero a qué región pertenece.
- **C6 (18):** R2 escribe **actas retroactivas** contra el texto publicado.
  De cada una sale un veredicto: *se sostiene* (cierra con el acta),
  *se reescribe* (entra en R3) o *heredada* (se declara en el acta y en
  `historia`). Los veredictos se enseñan juntos a D antes de reescribir nada.
- Se resuelven D1, D12 y D13.

---

## F8 · C7 comunidades · A + S · 1 sesión · en paralelo desde F1

No comparte módulos ni decisiones con el bloque, así que corre al lado.

| # | tarea | hecho cuando |
|---|---|---|
| F8.1 | **C7b muiscas:** `exportar --comunidad=muiscas`, llevar sus fuentes al módulo `editorial/muisca/`, y `verificar` | 0 deriva. Hasta entonces, prohibido `sync --apply` en muiscas |
| F8.2 | **C7a:** `el-origen-de-las-frutas` contra el primario huitoto del repo, por Fase A completa | la ruta coincide |
| F8.3 | **C7c, tanda 1** (41 fichas): desana, tucano, barasana, ticuna, guahibo-sikuani y motilón-barí. Fase B pura, con la receta de [`receta-fuentes-al-modulo.md`](receta-fuentes-al-modulo.md) | ≥ 8 o `fuentesAgotadas`, cotejo 100 %, aplicado y verificado |
| F8.4 | **C7c, tanda 2** (16): chimila y katíos | ídem |
| F8.5 | **C7c, tanda 3** (27): las 15 comunidades restantes | ídem |

Nada de F8 toca el texto. Si un agente de fuentes encuentra que el texto
contradice la fuente, lo anota para una Fase A aparte y no lo arregla.

---

## Calendario

| sesión | fases | fichas cerradas al terminar (acumulado) |
|---|---|---:|
| 1 | F0 + F1 + F2 (preparación) | 0 |
| 2 | F3 + F8.1 + F8.2 | 18 + 1 |
| 3 | F4 | 56 + 1 |
| 4 | F5 (1.ª mitad) + F8.3 | 77 + 42 |
| 5 | F5 (2.ª mitad) + F6 (Antioquia y Caldas) | 119 + 42 |
| 6 | F6 (Tolima, Boyacá y andina-varios) + F8.4 | 147 + 58 |
| 7 | F7 + F8.5 + tablero final | 184 + 85 |

Las cifras cuentan como cerradas también a las bloqueadas y declaradas. Las
41 muiscas no se suman: ya cumplen, y F8.1 sólo quita la deriva del módulo.

---

## Riesgos y qué hacer

| riesgo | señal | respuesta |
|---|---|---|
| Un primario no se abre (servidor lento, 502, préstamo) | la ronda R1 se alarga | cruzar primero con los `primarias/` ya extraídos; si no aparece, bloquear y declarar la ficha, sin frenar el ciclo |
| Un agente muere sin escribir | nada en disco a los 600 s | relanzar con la mitad de fichas; nunca reintentar el mismo encargo tal cual |
| El reparto no llega al módulo | el cotejo da «0 URLs en común» | revisar los cuatro escondites: pool, constructor, `define` y el mapa por slug |
| Aplicar revierte imágenes | cambia `image_url` en el dry-run | nunca `apply-editorial-myth.mjs` para texto: sólo `aplicar-texto` |
| El título de la pestaña no cambia | `verificar --vivo` coincide en el cuerpo y no en `<title>` | `seo_pages`: `aplicar-texto` lo mantiene, y si falta la fila se crea |
| Una decisión frena un ciclo entero | fichas listas esperando | la regla del spec §4: esa ficha se bloquea y el resto se publica |
| Deriva entre ramas | trabajo sin commit en otro worktree | una sola rama (§0.1) y un commit por paso |

---

## Qué falta después de este plan

Sin decidir y fuera del alcance del plan:

- **Fusionar la rama a `main`.** Va 87 commits por delante. Los datos ya están
  en Neon desde cada F-publicado, pero el kit, los módulos y los specs no
  llegan a `main` hasta el PR. Se propone abrirlo al cerrar F3, con la
  confirmación de D.
- **El worktree `d94433`:** una vez hecho F0, queda sin nada propio y se
  puede retirar. Sólo con el sí de D.
