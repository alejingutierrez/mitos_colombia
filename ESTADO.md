# Estado real del proyecto

Última auditoría: **16 de septiembre de 2026**. Este archivo es el índice: dice
dónde está cada cosa y en qué punto va cada comunidad. Si algo de aquí ya no es
cierto, corrígelo aquí primero.

## Qué es esto

Catálogo web de mitos de Colombia (Next.js 15, en producción en
www.mitosdecolombia.com) **y** el taller de producción del material visual y
audiovisual que lo alimenta: biblias visuales, trípticos por mito, keyframes,
guiones y narración.

El sitio es una parte pequeña del repo. La mayoría del peso y del trabajo vivo
está en la producción visual.

## Estado por comunidad

| comunidad | biblia | trípticos | keyframes | guiones+actas | estado |
|---|---|---|---|---|---|
| **muiscas** | 304 fichas | 351 piezas, 41 mitos | 1.282 | **41/41** | corpus de guiones cerrado 2026-09-17 |
| **wayuu** | **V4 · 223 fichas** | **81 piezas, 27 mitos · publicados** | — | **27/27** | biblia y trípticos V4 en producción desde 2026-09-17, pendiente de aprobación artística |
| **nasa-páez** | 110 | 554 | 956 | **26/26** | corpus de guiones cerrado 2026-09-17 |
| **ette-ennaka** (chimila) | 162 | 303 | 271 | **23/23** | corpus de guiones cerrado 2026-09-16 |
| **huitoto** (uitoto) | 7 fichas + 124 de investigación | 250 imágenes | — | — | recién abierta |
| **chamí** (emberá chamí) | **V1 · 191 fichas** | **66 de 66 · las 22 páginas, publicadas 2026-09-18** | — | — | biblia cerrada 2026-09-17, faltan correcciones y consulta | 22 mitos con tríptico propio · ninguna página sin lámina | — | — | etapa 1 abierta 2026-09-17, tanda 01 hecha |

La columna de guiones cuenta **pares acta+guion verificados**: 117 de 117 pasan
`lint-guion` (forma) y `lint-acta` (fidelidad al canon). Esas **cuatro**
comunidades están cerradas contra la base: no queda un solo mito narrable suyo
sin acta ni guion.

**El corpus completo es otra cosa.** `myths` tiene **354 mitos narrables en 38
comunidades**. Con guion hay 117; sin nada, **237** — andoque, chamí, kogui,
huitoto, katíos, u'wa, sikuani, zenú, misak y veinticinco más. La cifra de
cobertura real es 117/354, y el recuento por comunidad se saca así:

    SELECT c.name, count(*) FROM myths m JOIN communities c ON c.id = m.community_id
    WHERE m.mito IS NOT NULL AND length(trim(m.mito)) > 0 GROUP BY 1 ORDER BY 1;

Casi todos los guiones son N=18 (36 cuadros, ≈180 s). Las dos excepciones
declaradas son `veneracion-a-los-soberanos` y `el-trueno`, ambas con N=16: una
es una sola escena continua, la otra son cuatro relatos breves. Estirarlas a
dieciocho bloques habría sido rellenar, y el acta de cada una lo razona.

### La biblia wayúu V4 · 2026-09-17

La V3 quedó **huérfana**: estaba congelada contra un snapshot del 2026-07-29 y el
canon de los 27 mitos se reescribió entero el 2026-09-17. Jaccard medio entre el
texto viejo y el nuevo: **0,142**. Se perdieron 32 nombres propios y entraron 75;
**98 de 431 entidades** quedaron sin apoyo léxico.

Denominador nuevo: **373 entidades, 223 fichas producidas** en cinco capas y
dieciocho tandas, en el orden que fijó el editor —personas, animales, atrezo,
mundo— con `buildFicha()` de `scripts/mitos/art-direction.mjs` y la API de pago
de OpenAI (`gpt-image-2.5-sunburst`, `high`).

Doctrina en [`docs/wayuu-biblia-visual-v4.md`](docs/wayuu-biblia-visual-v4.md),
inventario en `content/mitos-visuales/wayuu.v4.inventario.json`, seis dossiers de
investigación en
[`docs/wayuu-investigacion-2026-09-17/`](docs/wayuu-investigacion-2026-09-17/)
—los primarios no van a git porque el repo es público y tienen derechos: viven
en `output/references/` y su expediente está en `FUENTES.md`—, y
el plan de tandas con las correcciones pendientes en
`content/mitos-visuales/_openai/wayuu/biblia-v4/PLAN-DE-TANDAS.md`.

### Los trípticos wayúu V4, publicados

Los 27 trípticos se rehicieron contra la biblia V4 y **están en producción desde
el 2026-09-17**: 81 piezas, tres por mito, con recibo por mito en
`content/mitos-visuales/production/wayuu-2026-09-17/publication-receipts/`. Cada
recibo trae las URL anteriores: ese bloque es el respaldo para revertir.

Se publicaron con `--preserve-original`, es decir **sin recortar**: los másters
son 3:2, 2:3 y 1:1, y el recorte a 16:9 del pipeline le cortaba la honda y la
cabeza a Mareiwa en `creacion-wayuu`, el ala al cóndor y las manos al hombre que
sale despedido del caballo. La portada ya mide la vertical en vez de imponerle
una proporción (ver el comentario de `mobileArtHeight` en `MythHero.js`), así
que preservar el máster es lo que el sitio espera.

**Falta la pasada de correcciones**, y la primera es ética: hay mochilas con
geometría que se lee como **kanas**, que es justo lo que la prohibición
documentada por el ICANH no permite imitar. Están publicadas. La lista completa
está en `PLAN-DE-TANDAS.md`.

**Dos trampas del prompt, ambas medidas y corregidas.** Un prompt de 6.341
caracteres ahoga la técnica: el piloto salió fotorrealista. Y pedir «cada pluma
es una pieza recortada» produce miles de plumitas ESCULPIDAS: la regla correcta
es la contraria —pocas piezas grandes y planas, borde de tijera, sombra nítida—
y está escrita en `refuerzo-papel-v3.md`.

### La investigación chamí · 2026-09-17

Etapa 0 **cerrada**: los cuatro pasos de la puerta V2, la gramática mítica, una
segunda pasada sobre las fuentes y el expediente visual —catorce documentos,
2.083 líneas— en
[`docs/chami-investigacion-2026-09-17/`](docs/chami-investigacion-2026-09-17/).
**La etapa 1 no se abre** hasta que se apruebe la excepción cultural del paso 3
y se resuelvan los cuatro asuntos `consult_required` —tres son el jaibaná—.
La matriz de evidencia deja **36 afirmaciones o escenas en `do_not_visualize`**.

**Dimensionado** (`content/mitos-visuales/chami.v1.inventario.json`): 147
entidades y **118 fichas** en cuatro capas —36 personas, 24 animales, 34 atrezo,
24 mundo—, unas diez tandas, más **42 trípticos**. Por mito da **8,4 fichas**,
prácticamente lo mismo que wayuu (8,3): la biblia es la mitad de grande porque
el corpus es la mitad de grande, no porque cada mito dé menos.

**Biblia cerrada el 2026-09-17**: **118 fichas** en diez tandas y cuatro capas
—36 personas, 24 animales, 34 atrezo, 24 mundo—, congeladas con hash de prompt e
imagen en `content/mitos-visuales/_openai/chami/biblia-v1/`, más una pasada de
once correcciones. El cierre está en `CIERRE.md`. Antes de generar hubo que
corregir **tres reglas del repo** que contradecían la investigación: la entrada
`Chamí` de `COMMUNITY_CRAFT` (eje cafetero, pechera de chaquira, jagua
genérica), `REGION_CRAFT.Andina` —que le habría metido páramo y geometría
muisca— y la época `prehispanico`, que prohíbe el metal y con él **el hacha de
Karagabí**. Se añadieron `REGION_CRAFT["Cordillera Occidental"]` y
`ERA_REGISTERS.mitico_chami`.

Dos lecciones de técnica, las dos escritas en `PLAN-DE-TANDAS.md`. **El modelo
esculpe por defecto**: hay que abrir con la técnica y nombrar el cuerpo y la
cara por separado, porque se arreglan en pasos distintos. Y **el pelaje es la
trampa de los animales**: en wayuu el refuerzo pedía «cada pluma como recorte
independiente» y produjo papel maché; aquí la regla va invertida desde la
primera lámina y las 24 fichas de animales salieron a la primera.

**El jaibaná no tiene ficha**, y es deliberado: es el asunto `consult_required`
que la excepción cultural dejó fuera hasta que haya consulta.

Al medirlo apareció otra cosa: los catorce textos publicados miden todos entre
1.764 y 2.069 caracteres, pero **su porción narrativa va de 530 a 1.966**. El
comentario editorial se usó para emparejar el largo, y en
`creacion-embera`, `hentsera-y-el-agua` y `la-oscuridad` **el relato es menos de
un tercio de la página**. Es la plantilla compartida, ahora alcanzando también a
`mito`.

**Las 22 páginas chamí no son 22 mitos narrables.** Son catorce relatos
primarios —los catorce de Reichel-Dolmatoff 1953, uno por página—, cinco
páginas editoriales que no tienen una narración única que ilustrar, dos
mediaciones mestizas de Caldas (una explícitamente cristianizada) y un relato
katío transferido. `jinopotabar` y `el-hijo-de-la-nutria` son **el mismo**
relato 2. El denominador de la biblia sale de los catorce.

Los catorce vienen de **un solo sitio y un solo momento**: Corozal, Río Frío,
Valle del Cauca, 1945; unas 60 personas en cinco casas, migrantes desde
Caldas y Antioquia hacia 1930. **No es el corazón chamí**, que está en
Risaralda. Y **de esos catorce no se conoce el nombre de ningún narrador**.

Dos trampas medidas antes de generar nada. La primera: el mismo PDF del
*Boletín de Arqueología* trae el artículo «Los Chibcha» cuarenta páginas antes,
y su jagua con bija roja **es muisca**; un `grep` sobre el boletín entero la
mezcla con lo chamí. La segunda: el corpus dice **«verde» cero veces** y
«lluvia/nube» una sola; lo que nombra sin parar es **sol/día (66), casa (60) y
agua (53)**. Dibujar selva esmeralda con niebla sería el error del azul wayuu
con otro color.

Y el hallazgo más fuerte, de Vasco con Rosa Elvira: el **chokó**, cántaro de
barro con forma humana que **es un ancestro**, se encierra con la niña en su
iniciación y sale en andas con ella. «El chokó es la primera princesa de la
fiesta; la niña es sólo la segunda.»

### La regla única y el acta

Desde el 2026-09-16 todo guion nace de un **acta de reducción**
(`docs/videos/<com>/actas/acta-<mito>.json`): declara los nudos irrenunciables
con la frase literal del canon que los sostiene, los deslindes, y qué se
descarta y por qué. Sin acta no hay guion.

    node scripts/videos/lint-guion.mjs <guion.json>              # forma
    node scripts/videos/lint-acta.mjs  <acta.json> --guion <g>   # fidelidad
    node scripts/videos/auditar-guiones.mjs                      # todo el repo
    node scripts/videos/auditar-cuadros.mjs                      # 16-36 cuadros

Escribir las actas retroactivas de nasa y muiscas destapó **once citas o
imágenes inventadas** en guiones que llevaban meses pasando el linter de forma
—entre ellas una cita puesta en boca de Bachué y un final entero para
el-hombre-tigre—. El linter mide la forma; el acta mide la fidelidad.

**Ojo con `bochica`.** Son dos mitos distintos y el repo los confundió: `bochica`
es el viajero que enseñó a tejer (guion v1, N=18) y `el-tequendama` es la
inundación de Chibchacum con la vara de oro (v6, N=10). Nunca buscar uno por el
otro.

## Dónde vive cada cosa

El repo tiene un **espejo fuente ↔ binario** y conviene entenderlo antes de
tocar nada:

- `content/` — **la fuente**. Planes, prompts, guiones, selecciones,
  manifiestos, freezes. Ligero. Va a git.
- `output/` — **la salida**. Los jpeg y png que emite la tanda. 4,9 GB.
  Ignorado por git: se regenera reemitiendo.

| eje | dónde está hoy |
|---|---|
| **biblia** | doctrina en `docs/*-biblia-*.md` · generador en `editorial/<com>/visual-bible-*.mjs` · fichas en `content/videos/<com>/biblia/` · imágenes en `output/imagegen/<com>/biblia/` |
| **keyframes** | `content/videos/<com>/videos/<mito>/keyframes/` · imágenes en `output/imagegen/<com>/keyframes/` |
| **trípticos** | specs wayuu en `content/mitos-visuales/wayuu.*.json` · resto en `content/videos/<com>/tripticos/` · publicados en `content/videos/muiscas/mitos/<mito>/` |
| **prompts** | `content/videos/<com>/videos/<mito>/preproduccion-NN/prepared-NN/prompts/*.txt` — 1.767 archivos, el contrato exacto de cada pieza |
| **guiones** | `content/videos/<com>/videos/<mito>/preproduccion-NN/GUION-TECNICO.md` |
| **doctrina** | `docs/mitos-produccion-imagenes.md` (runbook de imagen) · `docs/videos/proceso-mitos-a-video.md` y `docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md` (runbook de video) |
| **bitácora** | `docs/wayuu-*.md` — 55 documentos de por qué cada imagen wayuu se ve como se ve |

## Texto y fuentes: enriquecimiento editorial

Proceso en [`docs/spec-reescritura-y-fuentes.md`](docs/spec-reescritura-y-fuentes.md)
y skill `enriquecimiento-mitos`; kit en `scripts/editorial/enriquecimiento/`
(`npm run mitos:enriquecer:*`). **El módulo de `editorial/<comunidad>/` es la
verdad; Neon es lo publicado.** Un `UPDATE` suelto contra Neon es deriva.

| comunidad | Fase A (texto) | Fase B (fuentes) | módulo = Neon |
|---|---|---|---|
| **wayuu** | reescrita entera sobre el primario el 2026-09-17 (matrices y dudas en `content/editorial/wayuu/reescritura-2026-09-17/`) | completa, reconciliada y con búsqueda profunda en los 27 (2026-09-17): 8–16 fuentes/mito, promedio 13,2 | sí, verificado en vivo |
| **muiscas** | completa | completa en Neon (2026-09-16); proceso editorial cerrado por el editor | **no**: pendiente técnico de llevar las fuentes de Neon a los módulos, sin reabrir la edición |
| **nasa** | reescrita entera sobre el primario el 2026-09-17 (matrices y dudas en `content/editorial/nasa/reescritura-2026-09-17/`) | completa 2026-09-17: 9–13 fuentes/mito, promedio 10,5 | sí, verificado en vivo |
| **chimila (Ette Ennaka)** | reescrita entera sobre el primario de 1945 el 2026-09-17: se desmontó la plantilla que daba tres párrafos idénticos de Historia, Versiones y Similitudes a las 23 fichas (registro en `content/editorial/chimila/`) | completa 2026-09-17: de 7 URLs entre las 23 a 30 obras y 6–12 fuentes/mito, promedio 8,2 | sí, verificado en vivo en las 23 rutas |
| **huitoto (Murui-Muina)** | reescrita entera sobre los primarios el 2026-09-17: se desmontó la plantilla compartida y el párrafo de descargo que el constructor pegaba dentro de los 22 Relatos; tres fichas se habían publicado desde el índice de un libro, sin su texto (registro en `content/editorial/huitoto/`) | completa 2026-09-17: de 10 obras entre las 21 a 67 y 6–12 fuentes/mito, promedio 9,3; dos URLs rotas en producción reemplazadas y cuatro errores bibliográficos corregidos | sí, verificado en vivo en las 21 rutas |
| **chamí (emberá chamí)** | reescrita entera sobre los dos primarios el 2026-09-18: se desmontaron las plantillas con huecos y se sacó el aparato crítico de trece Relatos (registro en `content/editorial/chami/`) | completa 2026-09-18: de 15 obras entre las 22 a 56 y 7–12 fuentes/mito, promedio 9,7; cinco errores de atribución corregidos contra el registro de origen | sí, verificado en vivo en las 22 rutas |
| **katío (embera eyabida)** | reescrita entera sobre los tres primarios el 2026-09-18: las oraciones repetidas entre fichas bajaron del **43 % al 3 %** (registro en `content/editorial/katio/`) | completa 2026-09-18: de 17 obras entre las 21 a 43 y 6–12 fuentes/mito; corregidas la atribución de Dabeiba, la autoría del texto de 1929 y el desenlace de Costé | sí, verificado en vivo en las 19 rutas |
| **kogui (kággaba)** | reescrita entera sobre el primario el 2026-09-18: el corpus resultó ser de Chaves 1947 y no de quien lo atribuían; **19 de 20 fichas nombran ahora a sus narradores**, antes solo 1 (registro en `content/editorial/kogui/`) | completa 2026-09-18: de 9 obras entre las 20 a 35 y 7–13 fuentes/mito; corregidos «Kansa María», «Aluna», el título de canibalismo y la lectura de «capuchinos» como monos | sí, verificado en vivo en las 20 rutas |
| resto (33 comunidades, 234 mitos) | completa | pendiente | — |

## Lo que está desordenado y ya está decidido arreglar

Auditado el 2026-09-16, pendiente de ejecutar:

1. **Tres vocabularios para lo mismo.** `tripticos` y `triptychs`; `biblia` y
   `bible`; `keyframes` y `keyframes-comunidad-20260913`.
2. **Tres árboles paralelos.** `content/videos/`, `content/mitos-visuales/` y
   `output/imagegen/` guardan las mismas etapas con estructuras distintas.
   Wayuu no usa ninguno de los dos primeros igual que las demás.
3. **`docs/` plano.** 78 archivos, de los que 55 son bitácora wayuu. La
   doctrina reutilizable —23 archivos— queda enterrada debajo.
4. **`output/` mezcla salida con conocimiento.** `output/research/uitoto-*`,
   `output/references/chimila/` y los dos PDF de `output/pdf/` no son salida
   regenerable: son investigación. Su sitio es `content/` o `docs/`.
5. **55 ramas sin fusionar.** Auditadas el 2026-09-16 en
   [`docs/ramas-sin-fusionar-2026-09-16.md`](docs/ramas-sin-fusionar-2026-09-16.md):
   son dos cadenas y 13 duplicados, así que hay 10 decisiones, no 55. La más
   grande es un tronco de 41 commits —los PR #44, #47, #48, #49 y #64— que
   `main` nunca recibió y que fusiona con un solo conflicto. Son también la
   razón de que `.git` pese 6,2 GB con un HEAD de 240 MB: arrastran historia de
   binarios ya borrados.

El destino acordado es un árbol único por comunidad:

```
comunidades/<comunidad>/
  investigacion/  biblia/  mitos/<mito>/{guion,prompts,tripticos,keyframes}/  bitacora/
output/<comunidad>/     ← espejo, sólo binarios, ignorado
docs/                   ← sólo doctrina
```

## Trampas conocidas

- **`git` no arranca en esta máquina**: `/usr/bin/git` exige aceptar la licencia
  de Xcode. Funciona `/Library/Developer/CommandLineTools/usr/bin/git`. Se
  arregla de raíz con `sudo xcodebuild -license`.
- **`vercel --prod` sube el disco, no `main`.** Puede revertir lo que la
  integración de Git ya publicó. Desplegar por Git.
- **Nunca sobrescribir un `freeze.json`.** Cada preparación va a una carpeta
  `prepared-NN` nueva.
- **`artifacts/`** son respaldos de julio y agosto, fuera de git, 1,8 GB. Nadie
  los ha tocado desde el 2026-08-20.

## Comandos que importan

```bash
npm run dev                  # el sitio
npm run mitos:estado         # en qué va la producción de imágenes
npm run mitos:tanda          # emitir una tanda
npm run mitos:test:biblia    # las pruebas del pipeline visual
npm run seo:audit:indexability
```

El runbook completo de producción está en `docs/mitos-produccion-imagenes.md`.
El de video, en `docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md`.
