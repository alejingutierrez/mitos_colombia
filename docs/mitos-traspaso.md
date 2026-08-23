# Traspaso — dónde quedó la producción

Instantánea del **2026-08-23**. Lo que cambia cada sesión vive aquí; la
doctrina y el procedimiento están en
[`mitos-produccion-imagenes.md`](./mitos-produccion-imagenes.md), que no
caduca.

> El avance real **no se lee de este archivo** sino del disco:
> ```bash
> npm run mitos:estado -- --comunidad muiscas
> ```
> Lo de abajo es sólo lo que ese comando no puede saber.

## Alcance decidido

**Muiscas completo primero.** Al terminar la comunidad se decide cuál sigue.
El corpus son 596 mitos en 21+ comunidades; muiscas son 41.

## Cómo está el plan

Los **41 mitos muiscas tienen plan editorial escrito** — arco, deslinde,
protagonista, paleta, biblia, tríptico y los 9 bloques de video con sus dos
keyframes cada uno. Son **873 piezas declaradas**. Escribir eso era la parte
que requiere criterio; lo que queda es cola.

Deslindes de ciclo ya resueltos y anotados en el plan como `deslinde_ciclo_*`:
inundación (Tequendama/Chibchacum/Cuchavira), Guatavita (Dorado/cacica/
Meicuchuca), Bochica (maestro/Tequendama/camino/Nompanem/maíz), Hunza
(Hunzahúa/Pozo/Cojines/Tomagata/Goranchacha/Garancheda), linderos (Chaquén
institución vs. castigo) y Bermejo.

## Dónde va la producción

| Capa | Hecho | Falta |
|---|---|---|
| Biblia (personajes + paisajes + props) | 89 fichas | 61 |
| Trípticos | 12 de 123 | 111 |
| Escenas de video | 32 de 620 | 588 |

Un mito completo de los cinco pasos: `la-aparicion-del-hombre` (25 piezas).
`bachue` tiene su tríptico.

## Lo que estaba corriendo al cerrar

Una tanda de **30 fichas** (21 personajes + 9 paisajes) lanzada en la pestaña
de Higgsfield. Faltaban otras **31** (6 paisajes + 25 props).

Los payloads no se versionan porque se regeneran en un segundo, y regenerarlos
es además lo correcto — el emisor salta lo que ya aterrizó en disco:

```bash
npm run mitos:tanda -- --comunidad muiscas --paso biblia-libre
```

Esas 61 juntas **cierran la biblia muisca completa** (89 → 150 fichas). Ése es
el hito que importa: a partir de ahí cada tríptico y cada escena de video se
genera **citando fichas que ya existen** en vez de inventando, que es lo que
hace que el material sea coherente entre mitos.

> **Reemitir siempre justo antes de lanzar.** Entre emitir y lanzar puede
> aterrizar una pieza tardía de la tanda anterior, y si se lanza un payload
> viejo esa pieza se genera dos veces.

## Y después

Con la biblia cerrada, el resto es el bucle de §5 del runbook, mito por mito en
orden cosmogónico: tríptico (paso 4) y 17 escenas de video (paso 5), **ambos
adjuntando fichas como referencia** — que es el único paso que no está
automatizado: el emisor imprime cuáles hay que subir, y se suben a mano.

Quedan ~761 imágenes en muiscas ≈ **76 horas de cola** a 6 min por pieza.

## Estado de git

Nada está commiteado. **146 archivos sin versionar** en el worktree
`claude/myth-image-generation-dab82b`, incluidos los 89 JPG de la biblia y el
plan editorial completo de los 41 mitos.

El usuario pidió no commitear todavía. Conviene revisarlo antes de seguir en
otra sesión: es trabajo real que sólo existe en este worktree.

## Créditos

Balance 65,01 tras los 21 créditos que costó descubrir que el Unlimited no
aplica por MCP. Desde entonces **todo se genera en la web a coste cero**. Si
alguna vez vuelve a bajar, algo está generando por API o el Unlimited se apagó
— ver §12 del runbook.
