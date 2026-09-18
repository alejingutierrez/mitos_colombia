# Estado de los keyframes por comunidad

Corte: **2026-09-18**.

Sólo hay **dos comunidades aprobadas**: muiscas y wayúu. Todo lo demás que se
llame «keyframes» en este repo viene de metodologías anteriores y **hay que
rehacerlo** con la doctrina v4.

---

## 1. Resumen

| Comunidad | Mitos | Actas | Guiones | Biblia | Specs v4 | Keyframes v4 | Estado |
|---|---:|---:|---:|---|---:|---:|---|
| **Muiscas** | 41 | 41 | 85 | 302 láminas instaladas | **41** | **1.852** | ✅ **aprobado** |
| **Wayúu** | 27 | 27 | 54 | 237 láminas instaladas (V4) | **27** | **1.652** | ✅ **aprobado** |
| Nasa – Páez | 26 | 26 | 36 | sólo texto, 0 láminas | 0 | 0 | ⛔ rehacer |
| Ette Ennaka (Chimila) | 23 | 23 | 62 | 23 láminas sueltas | 0 | 0 | ⛔ rehacer |
| Huitoto / Murui-Muina | 21 | 18 | 18 | 20 láminas sueltas | 0 | 0 | ⛔ rehacer |
| Chamí | 14 primarios | 0 | 0 | **V1 cerrada, 118 fichas** | 0 | 0 | ⛔ rehacer |

Totales aprobados: **3.504 cuadros · 68 mitos · ~147 min de video** a razón de
10 s por bloque de guion.

> El recuento de mitos sale de la tabla `communities`/`myths` de Neon. Dos
> salvedades: **Chamí figura con 22 en la base, pero el corpus real son 14
> relatos primarios** (Río Frío 1945; ver [[chami-corpus-no-son-22-mitos]]), y
> **Huitoto tiene 21 mitos pero sólo 18 actas** — faltan 3 por decidir.

---

## 2. Qué es «doctrina v4» y por qué invalida lo anterior

Un bloque de guion = **2 escenas = 2 clips de 5 s**. Cada escena son **dos
imágenes**: `<id>-A` (fotograma inicial) y `<id>-B` (fotograma final del mismo
clip). Entre A y B se conserva el **mundo** —personajes, cara, vestuario,
decorado, hora del día— y cambia **todo lo demás**: la cámara se ha desplazado y
la acción ha avanzado.

Tres reglas la sostienen:

1. **`camara:{a,b}` es obligatorio.** `esc()` lanza excepción si falta. Cada
   escena declara dos encuadres con escala, ángulo y posición genuinamente
   distintos. Sin esto el modelo devuelve la misma foto dos veces y el clip no
   tiene movimiento.
2. **`-B` lleva `-A` como referencia**, para heredar el mundo — y el prompt le
   **prohíbe expresamente heredar el encuadre**.
3. **Largo = N bloques → N×4 cuadros → N×10 s.** El video dura lo que el mito
   da, no lo que el molde permite (ver [[regla-largo-del-guion]]).

Lo que hay hoy en nasa y chimila es anterior a esto: son secuencias sueltas, sin
par A→B, sin cámara declarada y sin acta que las gobierne. **No se pueden
reciclar; se regeneran.**

La doctrina **sólo está escrita en las cabeceras de los specs**
(`scripts/videos/specs/_muisca-comun.mjs` y `_wayuu-comun.mjs`). No hay todavía
un documento propio: al abrir la tercera comunidad conviene extraerla ahí.

---

## 3. Lo aprobado

### Muiscas — 41 mitos, 1.852 cuadros
- 41 specs `scripts/videos/specs/muisca-*-escenas.mjs`, 0 rojos en el linter.
- Biblia instalada como referencias en `content/videos/muiscas/biblia/` (302).

**Ojo con el conteo en disco:** hay **1.951** `.jpg` en
`content/videos/muiscas/videos/*/keyframes/`, de los cuales **99 son restos v3**
que se conservan a propósito porque esos mitos ya tienen video producido y sus
ids no chocan con los v4:

```
bachue 17 · bochica 17 · bochica-maestro 16 · el-dorado 32 · la-aparicion-del-hombre 17
```

También sobrevive `muisca-bachue-escenas.mjs` (17 items, spec v3) apuntando al
**mismo `OUT_DIR`** que `muisca-bachue-v4-escenas.mjs` (36 items, el bueno). No
estorba —los ids son distintos— pero cualquier recuento que itere specs por
carpeta contará Bachué dos veces.

### Wayúu — 27 mitos, 1.652 cuadros
- 27 specs `scripts/videos/specs/wayuu-*-escenas.mjs`, 0 rojos, refs verificadas.
- Biblia **V4** instalada en `content/videos/wayuu/biblia/` (237 fichas), vía
  `scripts/videos/instalar-biblia-wayuu.mjs`.
- Los **496 keyframes wayúu anteriores quedaron anulados** y fueron reemplazados
  en su totalidad.

**Mesa de QA:** https://claude.ai/artifact/BbdZr6Y1r98hptuDtJdzvc — se
reconstruye con `node scripts/videos/build-qa-panel.mjs` (un sprite JPG por
mito, celda 336×504 @ q58; el artefacto tope es 512 archivos y 64 MB por
versión, de ahí los sprites).

---

## 4. Lo que falta, comunidad por comunidad

El orden no es negociable: **sin acta no hay guion, y sin biblia no hay spec.**

### Nasa – Páez (26 mitos) — la más avanzada de las pendientes
- ✅ 26 actas de reducción en `docs/videos/nasa-paeces/actas/`.
- ✅ `inventory.v2.json` y `BIBLIA-NASA.md` en `content/videos/nasa-paeces/biblia/`.
- ❌ **La biblia no tiene ni una lámina generada.** Es todo texto.
- ❌ 36 guiones existen, pero contra la metodología vieja.
- ⚠️ Lo que hay en `output/imagegen/nasa-paeces/keyframes/` son **596 PNG de una
  sola tanda** (`el-trueno-produccion-01`), que por dentro cubre 29 mitos con
  280 imágenes más. Metodología anterior: **no sirve**.

**Falta:** normalizar el inventario al formato V4 (con `sensibilidad` y
`nota_visual` por entidad), generar la biblia, instalarla como refs, escribir
26 specs, generar ~1.700 cuadros.

### Ette Ennaka / Chimila (23 mitos)
- ✅ 23 actas en `docs/videos/ette-ennaka/actas/`.
- ✅ `inventory.v1.json` + `BIBLIA-ETTE.md`.
- ⚠️ 23 láminas de biblia en `output/imagegen/chimila/biblia/` — **muy por
  debajo** de las 237 wayúu o las 302 muiscas. Es un piloto, no una biblia.
- ⚠️ 49 keyframes viejos repartidos en 3 tandas `produccion-api-0*`, cubriendo
  23 mitos a razón de 2 por mito. Metodología anterior: **no sirve**.

**Falta:** dimensionar y generar la biblia completa, instalarla, 23 specs,
~1.500 cuadros.

### Huitoto / Murui-Muina (21 mitos)
- ⚠️ **18 actas para 21 mitos** — faltan 3, y hay 3 fichas bloqueadas esperando
  una decisión tuya.
- ⚠️ 20 láminas de biblia. Igual que Chimila: piloto.
- ✅ Existe dirección visual propia: `docs/direccion-huitoto-paper-cut-2026-09-14.md`.
- ❌ 0 keyframes de cualquier tipo.

**Falta:** cerrar las 3 actas que faltan, resolver las fichas bloqueadas,
biblia completa, 21 specs, ~1.400 cuadros.

### Chamí (14 relatos primarios)
- ✅ **Biblia V1 cerrada: 118 fichas** sobre 147 entidades (27 embebidas, 2
  excluidas). Inventario en
  `.claude/worktrees/wayuu-myths-methodology-b88ddd/content/mitos-visuales/chami.v1.inventario.json`.
- ❌ **No hay `docs/videos/chami/`**: cero actas, cero guiones.
- ❌ La biblia **no está instalada como referencias**: no existe
  `content/videos/chami/`. Las 470 imágenes viven en `output/imagegen/chami-v1/`.

**Falta:** todo el carril editorial (14 actas → guiones) y luego instalar la
biblia, 14 specs, ~900 cuadros.

---

## 5. El circuito, tal como quedó probado

```
acta de reducción  →  guion  →  inventario V4  →  biblia  →  instalarla como refs
                                                              →  spec v4  →  lint  →  check-refs  →  generar
```

Herramientas, en orden de uso:

| Paso | Comando |
|---|---|
| Ver acta + guion + entidades de un mito | `node scripts/videos/dump-wayuu.mjs <mito>` |
| Validar el acta | `node scripts/videos/lint-acta.mjs <acta.json>` |
| Instalar la biblia como refs | `node scripts/videos/instalar-biblia-wayuu.mjs` (plantilla) |
| Buscar rojos en un spec | `node scripts/videos/lint-spec.mjs <spec.mjs>` |
| Verificar que las refs existen | `node scripts/videos/check-refs.mjs` |
| Generar | `node scripts/videos/generate-keyframes.mjs --spec <f> --only <ids> --concurrency 10` |
| Reconstruir la mesa de QA | `node scripts/videos/seed-wayuu-datos.mjs && node scripts/videos/build-qa-panel.mjs` |

**`check-refs.mjs` antes de encolar, siempre.** El generador aborta ante una ref
rota, pero lo hace después de haber armado la cola; el checker lo caza antes y
no cuesta nada.

Rendimiento observado en la tanda final wayúu: **~24 cuadros/min** con
`--concurrency 10`; los 364 últimos salieron en 28 minutos.

---

## 6. Trampas que ya costaron caro

- **Las fichas de otra comunidad se cuelan por costumbre.** En los specs wayúu
  aparecieron `altiplano_noche`, `copo_algodon` y `plaza_fiesta_noche`, que son
  **muiscas**. Para eso está `check-refs.mjs`.
- **Entidades del inventario que nunca se produjeron como lámina.** El
  inventario las lista, el disco no las tiene: 16 casos en wayúu (`morva`,
  `akuwa`, `parruluwas`, `cana_brava`…). Se sustituyen por la lámina de utilería
  que las cubra.
- **El linter de forma no ve el canon.** Los rojos son riesgo de rechazo, no
  fidelidad. Quien decide es el inventario: Wanurú no tiene cuerpo, el sarampión
  se cuenta por la casa y nunca por la piel, Pushaina no se ve después de
  muerto, la continuidad de La Chama es su mano y no su cara.
- **Falsos positivos conocidos del linter:** el verbo «bebe» leído como «bebé»
  (reescribir «toma»); «mojada/mojado» leído como ropa mojada.
- **El filtro de seguridad bloquea la formulación, no el contenido.** Dos casos
  en 1.652 cuadros wayúu, ambos resueltos reescribiendo: `serranias b11a-B`
  («tumbado», «solo», «boca entreabierta» → sentado contra el tronco, vestido, a
  media distancia) y `dos-hermanos b15a` (la cita literal «mátenme a mí» entre
  hombres armados → «se ofrece en lugar de su hermano, habla de pie y sin
  miedo»). **Cuando un `-A` se rechaza, su `-B` cae con él** porque lo usa de
  referencia.
- **El prompt largo vuelve la imagen fotográfica.** La tanda-01 wayúu salió
  fotorrealista con 6.341 caracteres. Los amarillos del linter (>500) importan.
- **El saldo de OpenAI es por organización.** La clave de este repo es de
  `posiciondigitalsas` (`playground.latam@dentsu.com`), **no** de la cuenta
  personal. Recargar con la otra org seleccionada no desbloquea nada.

---

## 7. Deudas abiertas

- **`mesa.html` vive en `.qa-staging/`, que está en `.gitignore`.** Ya no es
  salida de build sino la interfaz misma, y no está versionada. Moverla a
  `scripts/videos/mesa/` como fuente rastreada.
- **La doctrina v4 no tiene documento propio**; sólo cabeceras de spec.
- **3 actas huitoto sin escribir** y 3 fichas huitoto bloqueadas esperando
  decisión.
- **El inventario V4 wayúu y el de chamí viven en un worktree sin fusionar**
  (`.claude/worktrees/wayuu-myths-methodology-b88ddd/`).
- **Token de Vercel expuesto** en `.claude/settings.local.json.backup-pre-merge`,
  en el historial de git y en `origin/main`. Pendiente de revocación manual.
