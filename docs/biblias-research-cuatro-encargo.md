# Etapa 0 tardía · el expediente de investigación de las cuatro que no lo tuvieron

Worktree: `/Users/alegut/MyApps/Personal/mitos_colombia/.claude/worktrees/biblias-research-generation-fc19c2`.
**No hagas commits y no generes imágenes.**

## Por qué existe este encargo

Los 42 corpus nuevos siguieron el orden correcto: **investigación primero,
biblia después**. Estas cuatro comunidades se hicieron antes de que ese orden
existiera, así que **tienen biblia cerrada y no tienen dossier**:

| comunidad | mitos | su biblia | dónde vive |
|---|---|---|---|
| Nasa – Páez | 26 | 60 fichas, instalada | `content/videos/nasa-paeces/biblia/` |
| Ette Ennaka (Chimila) | 23 | 51 de 54, casi cerrada | `content/videos/chimila/biblia/` |
| Huitoto / Murui-Muina | 22 | 196 fichas, cerrada | `content/videos/huitotos/biblia/` |
| Chamí | 22 en base, **14 relatos primarios** | 118 fichas, V1 cerrada | `/private/tmp/claude-501/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-biblias-research-generation-fc19c2/434ed976-2adb-42ca-91e1-7031c3dbca0b/scratchpad/chami-biblia-v1/` |

Por eso tu encargo tiene **dos mitades y la segunda es la que importa**:

1. **Escribir el dossier** que esa comunidad nunca tuvo, con la misma forma que
   los 42 de `docs/investigacion/`.
2. **Auditar la biblia existente contra él.** Los 42 corpus se construyeron con
   la investigación delante; éstos al revés. Cada vez que el dossier no
   sostenga lo que una ficha ya afirma, **dilo por su nombre**. Ésa es la parte
   que nadie puede hacer después.

## Lo que ya tienes, y es mucho

- **El canon congelado**: `/private/tmp/claude-501/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-biblias-research-generation-fc19c2/434ed976-2adb-42ca-91e1-7031c3dbca0b/scratchpad/canon/<id>.canon.md`, los cuatro campos por
  mito, con su huella. Léelo entero: es la fuente que manda.
- **El módulo editorial** en `editorial/<com>/` — `sources.mjs` trae el
  expediente de fuentes que ya se declaró para el texto.
- **Material de investigación prestado** en `/private/tmp/claude-501/-Users-alegut-MyApps-Personal-mitos-colombia--claude-worktrees-biblias-research-generation-fc19c2/434ed976-2adb-42ca-91e1-7031c3dbca0b/scratchpad/editorial-prestado/<com>/`,
  185 ficheros extraídos de otra rama: auditorías de fuentes, búsquedas
  profundas y contratos de reescritura. **Para chamí incluye las primarias en
  texto completo** — Chaves 1945 (4.256 líneas) y Reichel-Dolmatoff 1953—, que
  valen más que cualquier búsqueda web.
- **Los 42 dossiers** de `docs/investigacion/` como patrón de forma.
- El contrato: `docs/biblias-pendientes-kit.md`.

## El gasto de investigación

**Buscador propio y/o Bedrock. Nunca OpenAI**, que en este proyecto es sólo
para generar la imagen. Si usas búsqueda web, es la herramienta integrada.

## Forma del dossier

`docs/investigacion/<id>.md`, con las secciones de los 42: lo que la
investigación corrige de lo que se habría dibujado sin ella · época ·
histórica · visual · simbólica · arquitectónica · personajes · criaturas ·
expediente de fuentes · matriz de evidencia · revisión cultural · carencias ·
borrador de sistema visual.

**Cada fuente con su localizador consultable**, y cada fila de la matriz con
los enums de la V2: basis `documented_core` / `variant` / `contemporary_memory`
/ `academic_hypothesis` / `editorial_interpretation` / `uncertain`; sensitivity
`public` / `contextual` / `consult_required` / `do_not_visualize`.

**Topes que no se tocan**: ≤4 reglas de paleta y ≤8 prohibiciones en el
borrador de sistema visual. La tanda que los superó salió fotorrealista.

## Las tres trampas de técnica, que ya se pagaron

1. **La técnica abre y cierra el prompt.** No la infles desde el sistema visual.
2. **El modelo esculpe por defecto**: cuerpo y cara se nombran por separado,
   rostro de óvalo plano de un solo tono.
3. **El pelaje es la trampa de los animales**: pocas piezas planas grandes con
   el borde recortado en dientes, nunca pluma por pluma.

Y la que las gobierna: **el lenguaje sí, el ejemplar no.** La forma documentada
de una pieza, jamás un patrón real — esos diseños son identidad y son sustento.

## Verifica

```bash
node scripts/mitos/preflight-research.mjs --research <dir-con-tu-json> --id <id>
```

El dossier en Markdown es el documento; si además emites el bloque `research`
en JSON, pásale la compuerta. Comprueba lo que se puede solo —localizadores,
enums, topes—; que la fuente diga lo que afirmas sigue siendo tuyo.

## Informe final

15 líneas o menos: qué corrige tu investigación de lo que se habría dibujado
sin ella, **cuántas fichas de la biblia existente NO quedan sostenidas por el
dossier y cuáles**, qué quedó restringido y por qué, y las carencias que no
pudiste cerrar. Sé honesto con lo que no encontraste.
