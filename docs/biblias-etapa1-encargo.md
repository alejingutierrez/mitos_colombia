# Etapa 1 · cerrar el inventario y los contratos de modelo

Encargo compartido por los catorce agentes que cierran los 42 corpus. Tu
mensaje te dice **cuáles te tocan**; esto dice **qué hacer con cada uno**.

Worktree: `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/biblias-research-generation-fc19c2`.
Ejecuta todo desde ahí. **No hagas commits y no generes imágenes.**

## De dónde vienes

El censo ya dijo **qué** hay que dibujar y con qué decisión. La investigación
ya dijo **con qué evidencia** y **qué no se puede mostrar**. Un script ya cosió
las dos cosas dentro de `content/mitos-visuales/<id>.v3.json`: 3.795 entidades
con categoría, estados, evidencia y decisión visual, y los `entity_refs` de
cada mito validados en las dos direcciones.

Falta exactamente lo que no se puede derivar sin inventarlo. Eso es tuyo.

## Lo que tienes que escribir, por corpus

### 1 · Un bloque `design` por cada entidad `visual_status: "required"`

Hoy están en `"design": null`. Se llenan así:

```json
"design": {
  "silhouette": "una frase que la distingue de cualquier otra ficha de esta biblia",
  "materials": ["…"],
  "palette": "…",
  "scale": "…",
  "continuity": ["…"],
  "documented": ["cada rasgo, con la fuente del dossier que lo sostiene"],
  "editorial": ["cada decisión editorial, dicha como reversible"],
  "states_to_model": []
}
```

**`silhouette` y `documented` son la prueba de que el trabajo se hizo.** Si dos
fichas de la misma biblia se leen intercambiables, no sirven. Cada entidad trae
un campo `census_note` que dice por qué merece ficha: es tu punto de partida,
no tu respuesta.

**Todo lo que pongas en `documented` sale del dossier de esa comunidad**
(`docs/investigacion/<id>.md`), que es tu única fuente. Lo que no tenga fuente
va en `editorial`, dicho como decisión reversible. Una ficha que descansa
entera en `editorial` es legítima **si lo declara**; lo que no se puede es
disfrazar una inferencia de dato.

**`states_to_model`** lleva sólo los estados que el relato muestra y que
**cambian la silueta** — cada uno cuesta una lámina. El campo `states_declared`
de cada entidad trae lo que decidió el censo: respétalo salvo que el dossier lo
contradiga, y si lo contradices, dilo.

### 2 · Una nota de bitácora por mito

`myths.<slug>.extraction.note` está en `null`. Escribe **una frase con
sustancia de ESE relato**: qué separó la lectura y por qué. Si veinte notas se
leen iguales, la extracción no se hizo. Al terminar, pon
`review_status: "editorial_approved"` en cada una.

### 3 · Confirmar la entidad primaria de cada mito

El script propuso una candidata a `primary` —la figura que aparece en menos
mitos, porque es la que ese relato aporta y no hereda— y la marcó con
`role_derivada: "candidata, confirmar"`. El resto de roles salen de la
categoría. **Léelos contra el relato, corrige lo que haga falta y borra el
campo `role_derivada` de todos los refs**: mientras esté, significa que nadie
los miró.

### 4 · Congelar y derivar

En `plan.inventory`: `frozen: true`, `approved_by: "Propietario editorial del
proyecto"`, `approved_at: "2026-09-19"`, `status: "approved_frozen"`.

Después, **los contratos no se escriben a mano**:

```bash
node scripts/mitos/build-biblia-models-v3.mjs --plan content/mitos-visuales/<id>.v3.json
```

Deriva los modelos desde tu `design` y desde el `visual_system` que el plan ya
trae de la investigación.

## Dónde está el canon, que no está en el repo

Un agente cerró dos corpus leyendo las primarias contra las notas del censo
porque no encontró los relatos. **Están en el scratchpad, no en git**, y hay
que leerlos: una primaria se confirma contra el cuerpo del relato.

    <sp>/canon/<id>.canon.md    los 28 corpus indígenas, los cuatro campos
    <sp>/censo/<id>.md          los 14 corpus de páginas mestizas

donde `<sp>` es `/private/tmp/claude-501/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-biblias-research-generation-fc19c2/434ed976-2adb-42ca-91e1-7031c3dbca0b/scratchpad`.

## Lo que no se toca

`corpus`, `source_snapshot`, `research` y `visual_system`. El corpus está
congelado con su huella; la investigación ya pasó su propia compuerta.

En los corpus de páginas (los mestizos), `corpus.required_fields` y
`corpus.fields_note` ya declaran que el relato vive en `content` porque 218 de
las 240 páginas no tienen fila editorial. **No lo cambies.**

## Las tres trampas de técnica, que ya se pagaron

Están en `docs/biblias-pendientes-kit.md` y valen para todo lo que escribas:

1. **La técnica abre y cierra el prompt.** La tanda 01 wayúu salió
   fotorrealista porque el bloque de técnica competía con diez reglas de color
   y veinte prohibiciones. El `visual_system` del plan ya respeta el tope de
   cuatro y ocho: no lo infles desde `design`.
2. **El modelo esculpe por defecto.** Cuerpo y cara se nombran por separado:
   rostro de óvalo plano de un solo tono, rasgos como piezas recortadas aparte.
3. **El pelaje es la trampa de los animales.** «Cada pluma como recorte
   independiente» produjo papel maché. La regla es la inversa: **pocas piezas
   planas grandes con el borde recortado en dientes**.

Y la regla que gobierna todas: **el lenguaje sí, el ejemplar no.** Se usa la
forma documentada de una pieza, jamás un patrón real — esos diseños son
identidad y son sustento.

## Verifica antes de reportar, corpus por corpus

```bash
npm run --silent mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage inventory
npm run --silent mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage design
```

**`design` tiene que dar PASS en todos los tuyos**, y no debes romper los de
nadie más: otras sesiones trabajan en este mismo worktree.

## Informe final

15 líneas o menos, **todos tus corpus juntos**: fichas y láminas finales por
corpus, cuántos estados cobraste, **tres ejemplos de `silhouette` que
demuestren que no son intercambiables**, cuántas fichas descansan
mayoritariamente en `editorial` y cuáles, qué corregiste de las primarias que
propuso el script, y la salida de `--stage design` de cada uno. Sé honesto
sobre lo que quedó flojo.
