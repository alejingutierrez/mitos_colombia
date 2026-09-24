# Descongelado de las biblias V3 · releer el canon reescrito

Encargo compartido de los agentes que reconcilian los 37 corpus reabiertos el
2026-09-24. Tu mensaje te dice **cuáles te tocan**; esto dice qué hacer con
cada uno.

Worktree: `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/produccion-imagenes-biblias-c4a4ea`.
Ejecuta todo desde ahí. **No hagas commits, no generes imágenes, no lances
subagentes y no montes medidores ni scripts propios**: el kit ya mide. Guarda
el plan **después de cada relato**, no al final: un agente que pasa 600 s sin
escribir se muere y pierde lo que no volcó.

## Por qué

Los 42 inventarios se congelaron el 18-19 sep. El cierre del catálogo
(22-23 sep) reescribió después el `mito` de **365 de 461 relatos**: 8.047 de
10.455 frases que anclaban las actas ya no están en el texto, y entran unos 850
nombres propios nuevos. Dibujar las entidades de un texto que ya no existe es
exactamente lo que dejó huérfana la biblia wayúu V3.

`scripts/mitos/descongelar-corpus-biblia.mjs` ya hizo la parte mecánica: huella
nueva en `source_snapshot` (la vieja en `source_snapshot_history`),
`inventory.status: "reconciling"`, y cada relato cambiado con
`extraction.review_status: "pending_reconciliation"` y su nota anterior en
`previous_note`. La lista está en `inventory.reconciliation.rewritten_myths`.

## Qué leer

- el canon vigente: `<sp>/canon-2026-09-24/<id>.canon.md` — los relatos
  cambiados llevan `· REESCRITO` en el título. En los corpus mestizos el relato
  vive en `content` además de `mito`: léelos los dos.
- el dossier: `docs/investigacion/<id>.md`, **tu única fuente** para
  `documented`.
- el plan: `content/mitos-visuales/<id>.v3.json`.

donde `<sp>` es `/private/tmp/claude-501/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-produccion-imagenes-biblias-c4a4ea/4264a657-1045-4751-a98e-a66bc9177221/scratchpad`.

## Qué hacer, relato por relato (sólo los `pending_reconciliation`)

1. **Lee el relato nuevo completo** y haz las siete pasadas contra sus
   `entity_refs` actuales: nombres propios · roles sin nombre · animales y
   criaturas · objetos y plantas · lugares, paisajes y arquitectura · estados y
   transformaciones · diferencias entre variantes.
2. **Lo que el relato nuevo trae y el inventario no**: añádelo. Si merece
   ficha, entidad nueva con la forma completa de las demás del plan (`name`,
   `kind`, `description`, `aliases`, `states`, `evidence_basis`, `sensitivity`,
   `visual_status`, `myth_refs`, `evidence`, `design`, `model_refs: []`,
   `legacy_model_refs: []`). Si no, `embedded` con `covered_by` y
   `coverage_note`, o `excluded` con `exclusion_reason`. **Un nombre de lugar
   que sólo sitúa no es una ficha**: decláralo embebido en su paisaje. Nada
   detectado desaparece en silencio.
3. **Lo que el inventario tiene y el relato ya no**: no lo borres. Si ningún
   relato lo sostiene ya, `visual_status: "excluded"` con
   `exclusion_reason: "no aparece en el canon reescrito del 2026-09-23: <qué
   dice ahora el relato>"`. Si otro relato aún lo sostiene, sólo quita el ref
   de este.
4. **Lo que cambió de forma** —un color, una prenda, una transformación
   nueva, un estado que ahora cambia la silueta—: corrige su `design`. Todo
   rasgo en `documented` sale del relato o del dossier; lo demás va en
   `editorial`, dicho como decisión reversible.
5. **La primaria**: confirma que sigue siéndolo en el relato nuevo.
6. **La nota**: escribe `extraction.note` nueva, **una frase con sustancia de
   ESE relato** que diga qué cambió respecto de `previous_note`. Después
   `review_status: "editorial_approved"`, `reviewed_at: "2026-09-24"`.

Los `entity_refs` se validan en las dos direcciones: todo `myth_refs` de una
entidad tiene que coincidir con los relatos que la citan.

## Además, en todos tus corpus: las personas base

La capa de personas **empieza por la gente de la comunidad**, no por sus
dioses ni por sus colectivos. Así se cerró chamí V1: seis tipos —hombre
adulto, mujer adulta, mujer joven, niño, anciano, anciana— y después las
figuras con nombre. Los tipos fijan la cara, el cuerpo y el vestido que todo
lo demás respeta.

Los planes V3 no los tienen. Añade, por corpus, **seis entidades `personaje`**
con ids `tipo_hombre_adulto`, `tipo_mujer_adulta`, `tipo_mujer_joven`,
`tipo_nino`, `tipo_anciano`, `tipo_anciana`:

- `myth_refs`: los relatos donde esa gente aparece (normalmente los del
  colectivo base del corpus), citados con `role: "secondary"` en cada relato.
- `design.documented`: el vestido, el adorno, la pintura y el pelo **que el
  dossier documenta para ese pueblo en la época del corpus**. Cuando la
  hechura no está documentada, **busca más en el dossier antes de inventar**:
  en chamí, la variante A rellenó el hueco con una camisa cruda y salieron
  figuras que no representaban a nadie. Nunca un patrón real: **el lenguaje
  sí, el ejemplar no**.
- en los corpus sin comunidad (mestizos), los seis tipos son **de la época y
  el territorio dominantes** del corpus, con su oficio y su ropa fechados.
- `evidence_basis` honesto: casi siempre `documented` o `inferred`, nunca
  disfrazado.

Si un corpus no sostiene seis tipos (un solo relato sin gente humana, por
ejemplo), crea los que sí sostiene y declara los que no en
`inventory.declared_absences`.

## Cerrar cada corpus

Cuando no quede ningún `pending_reconciliation`:

1. En `inventory`: `frozen: true`, `status: "approved_frozen"`,
   `approved_at: "2026-09-24"`, y en `inventory.reconciliation`:
   `closed_at: "2026-09-24"` más un `summary` de una línea (añadidas, excluidas
   y rediseñadas).
2. Deriva los contratos, no los escribas a mano:

```bash
node scripts/mitos/build-biblia-models-v3.mjs --plan content/mitos-visuales/<id>.v3.json
npm run --silent mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage inventory
npm run --silent mitos:preflight:biblia -- --plan content/mitos-visuales/<id>.v3.json --stage design
```

**`design` tiene que dar PASS.** El preflight cierra en el primer fallo:
corrige y vuelve a correr.

## Lo que no se toca

`corpus`, `source_snapshot`, `source_snapshot_history`, `research` y
`visual_system`. Tampoco los relatos que no están en `pending_reconciliation`,
salvo para añadirles el ref de un tipo base.

## Las trampas de técnica, que ya se pagaron

1. La técnica abre y cierra el prompt: no infles `visual_system` desde
   `design`.
2. El modelo esculpe por defecto: en las personas nombra **cuerpo** y **cara**
   por separado (rostro de óvalo plano de un solo tono, rasgos recortados
   aparte).
3. El pelaje: pocas piezas planas grandes con el borde en dientes, nunca
   «cada pluma como recorte independiente».

## Informe final

Doce líneas o menos, todos tus corpus juntos: relatos releídos, entidades
añadidas / excluidas / rediseñadas, los seis tipos (una línea con su vestido
documentado por corpus), fichas y láminas finales, y la salida de
`--stage design` de cada uno. Di con honestidad qué quedó flojo.
