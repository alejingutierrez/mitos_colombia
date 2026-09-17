---
name: produccion-mitos
description: Producir el material visual y audiovisual de un corpus de mitos de este repo, en las cuatro etapas y en orden — investigación, biblia visual, trípticos y guiones con keyframes. Úsalo cuando se abra una comunidad nueva, se retome una empezada, se pida una biblia, trípticos, guiones o keyframes, o cuando haya que auditar si lo ya producido cumple. Sirve igual para comunidades indígenas y para corpus sin comunidad (mestizos coloniales y republicanos).
---

# Producción de mitos

Este repo no produce ilustraciones: produce **el registro visual de relatos que
pertenecen a alguien**. Lo que más pesa aquí no es la imagen, es la
investigación y la fidelidad. Una lámina bonita que inventa un tocado es un
daño, no un avance.

Regla que gobierna todo lo demás: **nada detectado puede desaparecer en
silencio**. Si una entidad no se dibuja, se declara por qué —cubierta dentro de
otra ficha, o excluida con razón—. El silencio es el único error que no se
puede auditar después.

## Las cuatro etapas, en orden

```
0. INVESTIGACIÓN   expediente de fuentes + matriz de evidencia + siete pasadas
        ↓          (docs/biblia-visual-v2.md §3, v3 §1-§2)
1. BIBLIA          entidades → contratos de modelo → piloto → tandas → cierre
        ↓          (docs/biblia-visual-v3.md)
2. TRÍPTICOS       entrada 16:9 · acto 9:16 · huella 1:1, uno por mito
        ↓          (docs/mitos-produccion-imagenes.md)
3. GUION+KEYFRAMES N bloques × 2 cuadros, y el video
                   (docs/videos/PRODUCCION-END-TO-END.md)
```

**El orden no es negociable y cada flecha es una compuerta.** No se escribe un
guion sin biblia cerrada, porque la ley 1 dice que el guion se escribe *sobre
las imágenes que ya existen*. No se genera un cuadro sin guion, porque los
cuadros son dos por bloque y el número de bloques sólo se sabe con el texto
escrito.

## Etapa 0 · Investigación

Antes de una sola llamada de imagen. Pasa la **puerta metodológica V2**
(`docs/biblia-visual-v2.md`), que es obligatoria para todo corpus nuevo.

**El canon se lee de Postgres, por slug EXACTO**, y se narra sólo `myths.mito`:

```sql
SELECT id, slug, title, mito FROM myths WHERE slug = $1
```

`historia`, `versiones`, `leccion` y `similitudes` son expediente editorial, no
canon narrable. Si `mito` está vacía, el mito no se narra ni se videa.

⚠ **Nunca uses `slug LIKE`.** Hay slugs que se solapan entre comunidades:
`la-candela` es Nasa y `la-candela-gotze` es Kogui. Un `LIKE` ordenado por
longitud devuelve el kogui. Verifica siempre la comunidad del resultado.
`data/mitos.sqlite` es un snapshot viejo sin columna `mito`: sirve para
inventariar slugs, no para escribir.

**Las siete pasadas.** Cada mito se lee completo y se registra una bitácora con
siete búsquedas independientes, cada una con su propia lectura:

1. entidades con nombre propio
2. roles humanos sin nombre
3. animales y criaturas
4. objetos y plantas
5. lugares, paisajes y **arquitectura**
6. estados, **transformaciones** y formas sucesivas
7. diferencias entre variantes

La bitácora lista además las menciones sin resolver, **incluso cuando la lista
está vacía**. Cada relato necesita al menos una entidad primaria.

**Las dimensiones del research**, todas obligatorias y ninguna deducible de
otra: visual, simbólica, histórica, arquitectónica, de época, de personajes y de
criaturas. La época manda sobre el resto: un relato colonial no se dibuja con
geometría precolombina, y uno precolombino no lleva arquitectura de cal y canto.

**La matriz de evidencia** ata cada decisión visual a una fuente rastreable
(`mito`, `historia`, `versiones`, `research_notes`) con su nivel de certeza. Lo
que no tiene fuente se marca como decisión editorial, no se disfraza de dato.

## Etapa 1 · Biblia

Sigue `docs/biblia-visual-v3.md`. Once categorías de entidad: `personaje`,
`deidad_fuerza`, `criatura`, `animal`, `colectivo`, `objeto`, `planta`,
`arquitectura`, `lugar`, `paisaje`, `fenomeno`.

Cada entidad conserva nombre, alias, categoría, estados, mitos que la usan,
evidencia, certeza, **sensibilidad**, y una decisión visual explícita: modelo
propio, `embedded` (declarando qué ficha la contiene) o `excluded` (con razón).

Compuertas, en orden: congelar corpus → investigar → siete pasadas → normalizar
registro comunitario → congelar denominador → contratos de modelo → **piloto
multicategoría aprobado por el usuario** → tandas congeladas → QA individual y
de continuidad → cierre.

```bash
npm run mitos:preflight:biblia -- --plan <plan.json> --stage research
npm run mitos:preflight:biblia -- --plan <plan.json> --stage design
npm run mitos:preflight:biblia -- --plan <plan.json> --stage generate   # debe dar PASS
```

**Las dos puertas de QA son independientes y ninguna compensa a la otra**:
fidelidad cultural y potencia mítica. Una lámina fiel y muerta no pasa; una
lámina poderosa e inventada, tampoco.

## Etapa 2 · Trípticos

Tres escenas distintas del mismo relato, una por formato:

| | | |
|---|---|---|
| `entrada` | 16:9 | el personaje llega a su mundo |
| `acto` | 9:16 | el momento por el que se cuenta |
| `huella` | 1:1 | lo que queda cuando ya no está |

**No se improvisan desde el título ni desde una imagen de otra comunidad**, y
las tres salen de escenas distintas: repetir la misma composición en tres
formatos no es un tríptico.

## Etapa 3 · Guion y keyframes

**Un solo formato de guion para todas las comunidades**, en
`docs/videos/<pueblo>/mvp-guiones/guion-<mito>-vN.json`.

### La regla

- **N bloques**, cada uno de **2 frases** y **17-19 palabras**
- **2 cuadros por bloque** (`bNa`, `bNb`) ⇒ **N×2 keyframes**
- **16 a 36 cuadros por mito** ⇒ vídeos de **80 a 180 s**. Es decir **N entre 8
  y 18**. El largo lo decide lo que el canon sostenga, no una meta.
- **Una sola cita directa**, en el clímax
- `window` = duración real del bloque − `voice_offset` (9,5 con dos clips de 5 s)

La banda de 17-19 palabras no es capricho: escrita como «≤19» autorizó un guion
de 10-15 palabras que dejó la narración en el **44 %** del metraje. Con 17-19
subió al **68 %**.

### Reglas duras del texto

Gancho con giro en el bloque 1 · cada verso abre con el plano que lo acompaña ·
bookend de objeto · última línea con el agua quieta o su equivalente · **máximo
dos nombres propios** · sin moralejas.

El cupo de dos nombres propios cuenta **nombres de persona y de lugar** —es para
no saturar el oído con toponimia—. **No gastan cupo los nombres de especie ni de
materia** (`karau`, `nuti`, `caña maná`, `totumo`): son contenido que el mito
explica, y borrarlos cuesta fidelidad. Aprendido en el-diluvio, donde reducir el
karau y el rabipelado a «uno» y «el otro» dejó sin nombre justo a los dos seres
de los que proceden todos los animales. Registro **fogón-visual-coloquial**:
oralidad cercana y digna («dicen que», «óigame bien»), imágenes sensoriales,
cero slang que abarate.

### Cuando el canon no tiene diálogo

Varios relatos no traen parlamento, y algunos lo niegan expresamente. **No
inventes uno.** Rinde como cita la única voz que el relato sí pone en primera
persona —el habla referida de los mayores, el razonamiento del testigo, el aviso
que circulaba— y **declara la decisión en un campo `nota_cita`** para que pueda
revisarse.

### Verificación

```bash
node scripts/videos/lint-guion.mjs docs/videos/<pueblo>/mvp-guiones/guion-<mito>-vN.json
node scripts/videos/auditar-guiones.mjs --detalle      # el marcador de todo el repo
```

El auditor mide **sólo la versión viva** de cada mito (el `vN` más alto).
`historico/` queda fuera.

### Versionado

`N` es la versión del **guion** y arrastra todo: un cambio de texto obliga a
regenerar voces, movimiento y plan a `vN+1`. **Prohibido mezclar versiones en un
ensamblaje.** Si el mito ya tiene máster entregado, la reescritura no lo rompe
—lo deja en la versión anterior— pero producir la nueva cuesta créditos: dilo
antes, no después.

## Corpus sin comunidad

Los relatos mestizos coloniales y republicanos **no tienen pueblo**, y tratarlos
como si lo tuvieran es el error que hay que evitar: no se les inventa una
iconografía indígena ni se les presta la biblia de un vecino.

Se agrupan por **época y territorio**, que es lo que el archivo sí sabe de
ellos, y su biblia se construye con el mismo proceso cambiando el eje:

- el denominador no es un pueblo sino un **momento histórico y un lugar**
- la arquitectura, el vestuario y los oficios los fija **la época**, con la
  misma matriz de evidencia
- la revisión cultural se sustituye por **revisión histórica**: qué está
  documentado de ese siglo en ese territorio
- la categoría `criatura` suele cargar el peso, porque son corpus de espantos y
  aparecidos más que de deidades

Todo lo demás —siete pasadas, once categorías, dos puertas, trípticos, guion de
16-36 cuadros— es idéntico.

## Lo que nunca se hace

- Generar una imagen sin que `--stage generate` haya dado `PASS`
- Escribir un guion sin inventariar antes las imágenes que existen
- Sobrescribir un `freeze.json` o una carpeta `prepared-NN`: cada preparación va
  a una carpeta nueva
- Copiar la iconografía de una comunidad en otra
- Rellenar hasta 16 cuadros con material prestado: si el canon no da, se dice
- Dejar una entidad detectada sin decisión declarada

## Mapa

| | |
|---|---|
| Doctrina de imagen | `docs/mitos-produccion-imagenes.md` |
| Contrato de biblia | `docs/biblia-visual-v2.md` · `docs/biblia-visual-v3.md` |
| Contrato de video | `docs/videos/PRODUCCION-END-TO-END.md` |
| Verdad operativa de video | `docs/videos/MANUAL-DE-PRODUCCION.md` |
| Estado por comunidad | `ESTADO.md` |
