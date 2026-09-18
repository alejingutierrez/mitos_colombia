# 04 · Dimensionado de la biblia chamí

Contado sobre **lo publicado**, no sobre el primario: los catorce mitos
narrables tal como están en `myths.mito`, verificados **idénticos** al módulo
`editorial/chami/` (22 de 22, sin deriva).

Inventario auditable en `content/mitos-visuales/chami.v1.inventario.json`.

## El tamaño

| | |
|---|---|
| mitos narrables | **14** |
| entidades detectadas | **147** |
| **fichas a producir** (modelo propio) | **118** |
| cubiertas dentro de otra ficha (`embedded`) | 27 |
| excluidas con razón (`excluded`) | 2 |

Ningún mito queda sin entidad. Las dos exclusiones son **«un hombre negro y
enorme»** —seis palabras sin más datos, cuya ilustración produce un estereotipo
racial— y **el marido ausente** de `la-mujer-y-el-oso`, que nunca entra en
escena.

## Por capa de producción

En el orden que ya funcionó en wayuu: **personas → animales → atrezo → mundo**.

| capa | fichas |
|---|---|
| 1 · personas, fuerzas y colectivos | **36** |
| 2 · animales y criaturas | **24** |
| 3 · atrezo, objetos y plantas | **34** |
| 4 · arquitectura, paisaje y fenómenos | **24** |

A razón de unas doce fichas por tanda —el ritmo de wayuu—, son **unas diez
tandas**.

## Comparación con wayuu, que es lo que permite dimensionar

| | wayuu V4 | chamí V1 |
|---|---|---|
| mitos narrables | 27 | 14 |
| entidades | 373 | 147 |
| fichas | 223 | 118 |
| **fichas por mito** | **8,3** | **8,4** |
| tandas | 18 | ~10 |

**La densidad es la misma.** Yo había dicho antes que el corpus chamí pedía una
biblia «corta y densa» y que no había «373 entidades ni cerca». Lo primero es
verdad a medias y lo segundo confundía dos cosas: la biblia chamí es **la mitad
de grande porque el corpus es la mitad de grande**, no porque cada mito dé
menos. Por mito dan exactamente lo mismo.

## La granularidad es consistente, y se puede demostrar

El reparto va de **29 entidades** en `el-hijo-de-la-nutria` a **4** en
`el-hijo-de-karagabi-y-la-gente-subterranea`: una dispersión de **7,3×**. En
wayuu una dispersión así fue la prueba de que la V3 estaba mal despiezada, de
modo que había que comprobarlo.

Correlación entre número de entidades y largo del texto:

- contra el **texto publicado completo**: **−0,393** — negativa;
- contra la **porción narrativa** del texto: **+0,770**.

La granularidad sigue al relato, no a la página. La dispersión está justificada:
`el-hijo-de-la-nutria` es un ciclo entero —la ballena, el ser acuático, la
matriz de las especies, la luna, el mundo de abajo, la avispa— y el relato 13
cabe en un párrafo.

## Y el hallazgo que salió de medir esto

La correlación negativa con el texto completo no es ruido. Dice algo concreto:

> **Cuanto más corto es el relato, más comentario editorial se le añadió.**

Los catorce textos publicados miden todos entre **1.764 y 2.069 caracteres** —una
banda estrechísima— pero su **porción narrativa** va de **530 a 1.966**, que es
una diferencia de 3,7×. El comentario se usó para emparejar el largo.

En promedio, **el 61 % del texto publicado es relato y el 39 % es comentario
editorial**. En los casos extremos:

| mito | narrativo | del total |
|---|---|---|
| `el-hijo-de-la-nutria` | 1.883 | **100 %** |
| `horchibari` | 1.966 | 100 % |
| `la-mujer-hormiga` | 1.942 | 100 % |
| … | | |
| `la-oscuridad` | 712 | 36 % |
| `hentsera-y-el-agua` | 577 | **29 %** |
| `creacion-embera` | 530 | **27 %** |

Es la misma **plantilla compartida** que ya estaba documentada para
`historia`, `versiones` y `similitudes` en otras comunidades, sólo que aquí
alcanzó también a `mito`, que es el único campo narrable.

**Consecuencia para la producción:** tres mitos —`creacion-embera`,
`hentsera-y-el-agua` y `la-oscuridad`— tienen menos de un tercio de página de
relato. Para un tríptico eso alcanza; para un guion de video, habrá que medirlo
con la regla del acta.

## Los trípticos

| decisión | piezas |
|---|---|
| sólo los **14** narrables | **42** |
| las **22** páginas actuales | 66 |

Hoy las 22 tienen par de imágenes heredado. Las cinco páginas editoriales
—`jinopotabar`, `el-origen-de-los-animales`, `las-transformaciones`,
`el-universo`, `el-origen-del-agua`— **no tienen una narración única que
ilustrar**, y `jinopotabar` es además el mismo relato 2 que
`el-hijo-de-la-nutria`. Recomiendo **42**, y que las cinco editoriales
conserven o reciban una imagen de índice, no un tríptico narrativo.

Eso es decisión tuya, no mía, y es la segunda que está pendiente.

## Lo que este dimensionado da por supuesto

Que se aprueba la **excepción cultural** del paso 3. Sin ella no se genera
nada, y con ella quedan fuera de la biblia las cuatro cosas
`consult_required` —el jaibaná en trabajo, su vestuario y transformación, y la
chicha cantada—, que no están contadas en las 118.

También quedan fuera las **36 afirmaciones o escenas** marcadas
`do_not_visualize` en la matriz de evidencia.
