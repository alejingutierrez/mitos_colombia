# Biblia visual V3 · proceso dirigido por entidades

**Estado:** contrato operativo vigente desde 2026-09-03.  
**Principio:** primero se demuestra qué debe existir; después se diseña y sólo al final se genera.

La V3 corrige una falla de arquitectura de la V2. Una lista de imágenes planeadas
no puede demostrar que una Biblia está completa, porque el mismo plan decide qué
entra en la lista. El denominador nace ahora de una lectura del corpus y de un
registro exhaustivo de entidades. Los modelos, escenas, trípticos y keyframes son
productos posteriores de ese registro.

> Una regla de magia no sustituye el cuerpo de un personaje. Una escena no
> sustituye la ficha de una criatura. Un placeholder no cuenta como identidad.

## Qué construye la Biblia

La biblioteca admite once categorías: `personaje`, `deidad_fuerza`, `criatura`,
`animal`, `colectivo`, `objeto`, `planta`, `arquitectura`, `lugar`, `paisaje` y
`fenomeno`.

Cada entidad conserva:

- nombre, alias, categoría, descripción y estados;
- mitos que la usan y función en cada relato;
- evidencia rastreable a `mito`, `historia`, `versiones` o `research_notes`;
- nivel de certeza y sensibilidad;
- decisión visual: modelo propio, cobertura dentro de otra ficha o exclusión;
- requisitos de modelo y referencias a activos una vez diseñados.

La cobertura se calcula sobre entidades `required`. `embedded` exige declarar
qué otra ficha la contiene y por qué. `excluded` exige una razón. Nada detectado
puede desaparecer de manera silenciosa.

## Proceso completo y compuertas

### 0. Congelar el corpus

Se fija lista de mitos, origen, fecha de corte y SHA-256 del contenido leído.
El snapshot debe incluir los cuatro campos editoriales. Si cambia, el inventario
queda obsoleto y se vuelve a auditar.

### 1. Investigar y delimitar

Se conserva la investigación de fuentes, variantes, territorio, cultura
material, época, prácticas sensibles y límites de representación. Cada decisión
separa evidencia documentada, variante, inferencia, interpretación editorial e
incertidumbre. La autorización editorial permite producir, pero no convierte
una interpretación en dato cultural.

### 2. Extraer entidades por siete pasadas

Cada mito se lee completo y se registra una bitácora con siete búsquedas
independientes:

1. entidades con nombre propio;
2. roles humanos sin nombre;
3. animales y criaturas;
4. objetos y plantas;
5. lugares, paisajes y arquitectura;
6. estados, transformaciones y formas sucesivas;
7. diferencias entre variantes.

La bitácora lista además menciones sin resolver, incluso cuando la lista es
vacía. Cada relato necesita al menos una entidad primaria.

### 3. Normalizar el registro comunitario

Se reúnen entidades compartidas sin borrar variantes incompatibles. Se evita
crear duplicados por ortografía o por aparición en otro mito, pero tampoco se
fusionan dos identidades porque cumplan una función parecida. Cada referencia
de mito debe tener retorno desde la entidad; la relación se valida en ambas
direcciones.

### 4. Decidir y congelar el denominador

El editor revisa categoría, estados, sensibilidad, elementos embebidos y
exclusiones. La aprobación congela el inventario y las bitácoras de los mitos.
Hasta entonces `design` permanece bloqueado. Esta aprobación no aprueba arte ni
habilita generación.

### 5. Diseñar contratos de modelo

Cada modelo declara una finalidad verificable:

| entidad | modelo base | modelo adicional cuando cambia de estado |
|---|---|---|
| personaje, deidad, criatura, animal | `identity_sheet` | `state_sheet` |
| colectivo | `group_grammar` | según necesidad explícita |
| objeto | `object_sheet` | según uso o transformación |
| planta | `botanical_sheet` | según ciclo documentado |
| arquitectura, lugar | `spatial_model` | según cambio espacial |
| paisaje | `environment_model` | según clima o época |
| fenómeno | `phenomenon_rule` | según fases de la regla |

Un modelo de identidad exige vista `canonical_full_body`. El contrato fija
silueta distintiva, materiales, paleta, escala, marcadores de continuidad,
rasgos documentados y decisiones editoriales reversibles. Las fichas de
relación o magia pueden acompañar, nunca cubrir por sí solas una entidad.

### 6. Aprobar un piloto multicategoría

Antes de producir en serie se genera una selección pequeña que pruebe todas las
categorías presentes, además de:

- legibilidad de identidades y estados;
- coherencia de escala entre personajes, animales y espacios;
- paper craft 3D con capas físicas a distintas distancias;
- profundidad, aire, oclusiones, cantos internos y sombras proyectadas;
- composición inmersiva hasta los cuatro límites;
- ausencia de borde, cartón soporte, base, mesa, estudio o marco visibles;
- potencia mágica específica sin aura, runas o fantasía intercambiable.

El piloto se presenta en hoja de contacto y requiere aprobación explícita.

### 7. Generar por tandas congeladas

Toda la Biblia se produce con `gpt-image-2` en calidad `medium`. Cada tanda fija
IDs de modelo, prompts, salvaguardas, proveedor, versión, tamaño, hashes y
destinos antes de llamar la API. Una corrección crea una tanda nueva; no
sobrescribe evidencia anterior.

La política de otros productos se mantiene separada: sólo la entrada horizontal
de un tríptico usa `high`; vertical, cuadrada y todos los keyframes usan
`medium`. La calidad no cambia el denominador de la Biblia.

### 8. QA individual y de continuidad

Cada activo se evalúa contra evidencia, contrato, identidad, estado, época,
escala, profundidad 3D, full bleed, materialidad, anatomía, estereotipos,
violencia/sexualidad explícita y fantasía genérica. Después se compara con los
otros activos de la misma entidad y con entidades relacionadas. `PASS` técnico
no equivale a canon, ingestión o publicación.

### 9. Cerrar y promover

`complete` sólo pasa cuando todas las entidades requeridas tienen todos sus
modelos reales, el QA individual y de continuidad está aprobado y existe hoja
de contacto final. La fórmula es:

`entidades cubiertas / entidades required del inventario congelado`

Los activos heredados se mantienen en cuarentena hasta que cumplan el contrato
V3. Tener un archivo previo parecido no reduce el denominador.

## Preflight ejecutable

```bash
npm run mitos:build:biblia:wayuu
npm run mitos:build:biblia:wayuu:inventory
npm run mitos:preflight:biblia -- --stage research
npm run mitos:preflight:biblia -- --stage inventory
npm run mitos:preflight:biblia -- --stage design
npm run mitos:test:biblia
```

`inventory` puede pasar con una advertencia mientras espera revisión. `design`
debe bloquearse hasta que el inventario esté congelado. El comando normal de
preparación ejecuta la compuerta `generate`; por lo tanto no puede preparar una
tanda mientras falten diseño o piloto.
