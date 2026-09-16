# Traspaso — dónde quedó la producción

Instantánea histórica del **2026-08-26**, reabierta el **2026-09-03** para
completar los keyframes físicos que habían quedado como omisiones aceptadas. Lo que cambia cada sesión vive aquí; la
doctrina y el procedimiento están en
[`mitos-produccion-imagenes.md`](./mitos-produccion-imagenes.md), que no
caduca.

> **Cierre aceptado y certificado.** El objetivo visual muisca se dio por
> cumplido el 2026-08-26 con el corpus producido. Los 41 trípticos ya están en
> producción mediante una publicación aditiva que preserva los anteriores.
> La evidencia completa está en
> [`certificacion-cierre-imagenes-muiscas-2026-08-26.md`](./certificacion-cierre-imagenes-muiscas-2026-08-26.md).

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
| Biblia declarada en el plan | 130 de 130 | 0 |
| Biblia física (incluye 21 heredadas) | 151 fichas | 0 |
| Trípticos | 123 de 123 | 0 |
| Escenas de video | 536 de 620 | 84 aceptadas fuera del alcance final |
| **Total del cierre aceptado** (sin contar maestro/crop dos veces) | **789 de 873** | **84 aceptadas** |

El inventario físico contiene **1.576 JPG**: 829 maestros y 747 recortes,
más 105 PNG conservados; las **1.681 imágenes** pasan lectura de metadatos.
Esa cifra es deliberadamente mayor que las 789 piezas requeridas
cumplidas porque el disco conserva maestro y crop por separado, además de
material heredado y algunas tomas históricas fuera del plan vigente.

Los 41 mitos tienen el tríptico completo. La capa de video está cerrada en los
primeros treinta y cuatro mitos del orden cosmogónico, desde `chiminigagua`
hasta `la-historia-del-bermejo`; el siguiente pendiente es
`el-bermejo-aspira-a-ser-rey`, que lleva 6 de 15 escenas nuevas físicamente
ingestadas.

## Recuperación de la galería

El 2026-08-23 se revisó el prompt guardado en cada asset y se corrigió el
traspaso anterior. Las tres imágenes válidas no eran
`bermejo_forastero`, `chiguachi_nina` y `fu_dios`, sino:

- `bermejo_forastero` → `2eb78ae0…`
- `chiguachi_nina` → `f21731aa…`
- `funcionario_totuma` → `fcdb7c7f…`

Las tres ya están ingestadas. `fu_dios` había sido rechazado por seguridad; se
ajustó su ficha para vestir una manta completa, se regeneró y se ingestó junto
con `gameza_cacique`. El par tardó cerca de cuatro minutos y comprobó en la
cuenta real que el bundle acepta dos generaciones simultáneas.

Los payloads no se versionan porque se regeneran en un segundo, y regenerarlos
es además lo correcto — el emisor salta lo que ya aterrizó en disco:

```bash
npm run mitos:tanda -- --comunidad muiscas --paso biblia-libre
```

La tanda libre se cerró. De sus últimas 39 salidas se aprobaron 37; se
rechazaron `cojines_roca` por grecas inventadas y `dragon_laguna` por objetos
ajenos alrededor. Ambas se regeneraron con prompts más estrictos y ya están
ingestadas. `altiplano_noche`, que requería la entrada de Chiminigagua como
referencia, también quedó aprobado. La biblia está físicamente cerrada en 151
fichas: 130 declaradas y 21 heredadas.

Después se completaron e ingestaron catorce trípticos nuevos:
`creacion-muiscas`, `el-sol-y-la-luna`, `la-madre-de-los-hombres`, `chia`,
`chibchacum`, `cuchavira`, `huitaca`, `el-dorado` y
`la-cacica-de-guatavita`, `los-cojines-del-zaque`, `hunzahua`,
`el-pozo-de-hunzahua`, `tomagata` e `idacanzas`. En `el-sol-y-la-luna` se rechazó la primera
`entrada` y el primer `acto` por astros adicionales; sólo se conservó la
`huella`, se endurecieron los prompts y se regeneraron las dos escenas
fallidas. En `los-cojines-del-zaque` se descartó el primer `acto` porque el sol
quedó por encima de las piedras; el reintento lo situó dentro de la abertura.
Las ingestas parciales y los reintentos fueron aditivos.

Después se cerraron siete trípticos más: `el-origen-del-lago-tota`,
`en-el-principio-fue-el-maiz`, `chaquon`, `el-castigo-de-chaquen`,
`toquecha-y-toquilla`, `meicuchuca` y `nencatacoa`. En
`toquecha-y-toquilla` una entrada enviada no llegó a materializarse y se
relanzó sólo esa pieza. En `nencatacoa` se descartó la primera huella porque
mostraba más de dos pisadas; el reintento dejó exactamente un par. Sólo se
ingestaron las variantes aprobadas.

El inventario también se corrigió para honrar `mito.carpeta`: los trípticos
heredados de `el-tequendama` (`mitos/bochica`) y
`los-dioses-civilizadores` (`mitos/camino-de-bochica`) ya existían y estaban
aprobados, pero `mitos:estado` los contaba como ausentes al mirar sólo el slug.
Los emisores e ingestas resuelven ahora esas carpetas declaradas y evitan
regenerar o reemplazar las seis piezas históricas.

En video se cerraron después `bochica` (16 nuevas),
`los-dioses-civilizadores` (15 nuevas), `el-dorado` (15 nuevas),
`la-cacica-de-guatavita` (16 nuevas), `los-cojines-del-zaque` (14 nuevas),
`hunzahua` (15 nuevas), `el-pozo-de-hunzahua` (15 nuevas), `tomagata`
(15 nuevas) e `idacanzas` (15 nuevas), siempre con control visual de la
secuencia completa e ingesta aditiva. `tomagata` reutiliza `b1a`, `b5a` y
`b9b`; la revisión confirmó sus
rasgos canónicos —cuatro orejas, un ojo ciego y cola larga manchada— antes de
aprobar la secuencia. `idacanzas` reutiliza `b2a`, `b6a` y `b9a`; la secuencia
mantiene la lectura de señales y la preparación material, sin mostrar al
sacerdote dominando el clima. `el-origen-del-lago-tota` reutiliza `b3a`,
`b6a` y `b9b` y añadió 15 escenas. La revisión conjunta de sus 18 planos
descartó tres generaciones: una cuenca con agua prematura, una Siramena con
agua y cabello de escamas y un pase del disco con fondo ambiguamente acuático.
Las tres se regeneraron con continuidad seca explícita y sólo las variantes
aprobadas se ingestaron. `en-el-principio-fue-el-maiz` reutiliza `b5a` y
`b8b` y añadió 16 escenas. La revisión rechazó ocho primeras variantes por
introducir oro o alimento antes de tiempo, grecas, reservas incompatibles con
la escasez, más de cinco marcas o maíz demasiado maduro. Los ocho reintentos
pasaron la secuencia conjunta de 18 planos; únicamente esas variantes se
ingestaron. `chaquon` reutiliza `b1a`, `b4a` y `b9b` y añadió 15 escenas. El
QA rechazó labradores con plumas antes de la fiesta, un corredor junto a
alambre de púas, una panorámica sin corredores, una muesca convertida en hueco
y una ofrenda con plumería incompleta. También hubo un asset que la galería
virtualizada mostró con retraso; se identificó por contenido y hora antes de
asignarlo. Los reintentos corrigieron esos defectos y el contacto final de 18
planos pasó completo sin personificar a Chaquén. Sólo los 15 IDs aprobados se
ingestaron. `el-castigo-de-chaquen` reutiliza `b4a`, `b6b` y `b9b` y añadió
15 escenas. La secuencia conjunta distingue el cuerpo de Chaquén de la línea
impersonal del mito anterior: llega con la vara gris, la transformación nace
sin horror en los pies y termina en dos plantas separadas. El QA comprobó la
confluencia exacta de dos rastros en uno, la ausencia de mecanismos modernos
en el telar, el pastizal inmóvil y la respuesta final de la hierba seca y la
fijiza sin contacto ni efecto mágico. Sólo los 15 IDs aprobados se ingestaron.
`toquecha-y-toquilla` reutiliza `b2a`, `b3b` y `b7a` y añadió 15 escenas.
La secuencia separa los venados de arcilla gris de los animales pardos vivos,
mantiene el lago de Tota ya existente bajo niebla cerrada y termina sin sangre
ni herida en cuadro. El QA verificó el par grande/pequeño, los dos rastros de
pezuña, el arco abandonado y un único venado pequeño en el cierre. La hoja de
contacto de las 15 tomas aprobadas pasó completa y sólo esos IDs se ingestaron.
`meicuchuca` reutiliza `b1a`, `b7a` y `b9b` y añadió 15 escenas. La secuencia
conserva a Meicuchuca, la esposa principal y la joven como tres identidades
separadas, sitúa el relato en el río Funza por debajo del Tequendama y trata la
transformación como una culebra natural sin horror. El QA rechazó variantes que
perdían las dos cenefas verde-ocre de la esposa, confundían su ropa con la manta
lisa de la joven o alteraban el grupo de cinco mujeres. Los reintentos fijaron
el moño, las cenefas, el cabello largo y la transición sobria; la hoja de
contacto final pasó completa y sólo los 15 IDs aprobados se ingestaron.
`nencatacoa` reutiliza `b3a`, `b6a` y `b9b` y añadió 15 escenas. El oso se
mantiene como animal real de papel bajo una manta-capucha, nunca como persona
disfrazada, y la variante de Fo aparece sólo como una zorra parda separada. El
QA rechazó una cuadrilla que mostraba al oso antes de tiempo, variantes con más
de dos cuerdas, una cola ausente o demasiado larga y un madero que adelantaba
la hoguera y las vasijas del bloque nocturno. Los reintentos fijaron las dos
cuerdas, la cola corta de oso y la cronología del trabajo; la hoja de contacto
final pasó completa y sólo los 15 IDs aprobados se ingestaron.
`los-mojas` reutiliza `b2a`, `b7a` y `b9b` y añadió 15 escenas. La secuencia
mantiene al moja como un adolescente de unos quince años con manta blanca lisa
y cuenta el final sin violencia explícita. El QA rechazó una toma que mostraba
los empeines en lugar de las plantas, fondos que adelantaban una ceremonia,
una figura completa donde debían verse sólo manos y objetos, un primer plano
demasiado humano para la técnica de papel y un amanecer con una figura central
dominante. Los reintentos fijaron las dos plantas limpias, el primer plano
facetado, exactamente tres vasijas y seis adultos con el mismo peso visual; la
hoja de contacto final pasó completa y sólo los 15 IDs aprobados se ingestaron.
`nompanem` reutiliza `b2a`, `b5a` y `b9b` y añadió 15 escenas. El QA rechazó
una toma con manos humanas, una lectura ambigua del camino en dos direcciones y
un semicírculo con una figura de borde verde dominante. Los reintentos
recuperaron la técnica de papel, separaron los flujos del camino y dejaron el
centro comunitario vacío sin dirigente identificable. La hoja de contacto final
pasó completa; se ingestaron únicamente los 15 IDs aprobados y se verificaron
15 maestros de 1520×2688 más 15 recortes de 1080×1920.
`nemequene` reutiliza `b1a`, `b6a` y `b9b` y añadió 15 escenas. El QA rechazó
figuras comunes que heredaban la cenefa del zipa, una formación con Nemequene
dominante, un cenital que mostraba cabezas y una escena de campo contaminada por
el mapa del consejo. También hubo un fallo técnico de Higgsfield sin archivo.
Los reintentos separaron autoridad y comunidad, dejaron las varas verticales y
en reposo, limitaron el mapa a cinco manos exactas y trasladaron la duda del zipa
al altiplano abierto. La hoja de contacto final pasó completa; se ingestaron
únicamente los 15 IDs aprobados y se verificaron 15 maestros de 1520×2688 más
15 recortes de 1080×1920.
`fu-el-dios-de-la-torpeza` reutiliza `b2a`, `b5a` y `b8a` y añadió 15 escenas.
La secuencia mantiene a Fu como un hombre humano y sobrio de piel verde gris,
separa el accidente de piedra de la chispa mínima y evita convertir el origen
del tejo en deporte moderno. El QA descartó un primer plano del pie porque
duplicaba a Fu en el fondo; además, un primer intento subacuático terminó como
fallo técnico de Higgsfield sin archivo. Los reintentos dejaron el pie aislado,
la chispa sin llama ni explosión y el aprendizaje final como práctica
comunitaria con piedras planas y círculo en tierra. La hoja de contacto final
pasó completa; se ingestaron únicamente los 15 IDs aprobados y se verificaron
15 maestros de 1520×2688 más 15 recortes de 1080×1920.
`la-competencia` reutiliza `b2a`, `b6a` y `b9b` y añadió 15 escenas. La
secuencia conserva a Sesquilé como corredor delgado y polvoriento, separa la
carrera de cualquier pista o premiación moderna y muestra la pausa para ayudar
y beber como decisiones que cuestan puestos. El QA descartó una primera escena
de los corredores detenidos porque introducía a Tiniacá y la figurilla como
espectadores; un reintento adicional terminó como fallo técnico de Higgsfield
sin archivo. La repetición válida dejó exactamente tres corredores detenidos y
al resto pasándolos, y el cierre usa una cinta tejida flexible, sin corona,
medalla, podio ni meta moderna. La hoja de contacto final pasó completa; se
ingestaron únicamente los 15 IDs aprobados y se verificaron 15 maestros de
1520×2688 más 15 recortes de 1080×1920.
`veneracion-a-los-soberanos` reutiliza `b3a`, `b6a` y `b9b` y añadió 15
escenas. La secuencia mantiene la cámara baja del mensajero y no revela ningún
rostro completo antes del encuentro con el zaque. El QA descartó un guardia de
la puerta que heredó indebidamente la placa de oro y la totuma, y una primera
cuadrilla cuyos palos largos podían leerse como armas; las correcciones dejaron
el cuello del mensajero desnudo y la ayuda compuesta por canastos, fardos y
herramientas cortas. Dos intentos terminaron como fallos técnicos de Higgsfield
sin archivo, y una llegada tardía provocó una toma duplicada que tampoco se
ingestó. La hoja de contacto final pasó completa; se ingestaron únicamente los
15 IDs aprobados y se verificaron 15 maestros de 1520×2688 más 15 recortes de
1080×1920.
`la-herencia` reutiliza `b1a`, `b7a` y `b9b` y añadió 15 escenas. La secuencia
separa el acuerdo sucesorio de cualquier batalla, coronación o boquerón y da a
la hermana el centro de la decisión. El QA descartó una primera escena de
juicio que adelantaba a la hermana y a la madre, una medición fotográfica, un
Tausa que dominaba el corro, un reencuentro cargado con un mapa y dos detalles
de manos que no parecían de papel. Un intento terminó como fallo técnico sin
archivo. Las correcciones dejaron la vara roma, a Tausa escuchando sentado, el
reencuentro en plano corto con sólo tres personas y el cordón único entre dos
grupos. La hoja de contacto final pasó completa; se ingestaron únicamente los
15 IDs aprobados y se verificaron 15 maestros de 1520×2688 más 15 recortes de
1080×1920.
`la-historia-del-bermejo` reutiliza `b1a`, `b7a` y `b9b` y añadió 15 escenas.
La secuencia cuenta cómo el forastero aprende, permanece, cumple la prueba del
tronco y llega a integrarse, sin adelantar la elección del zaque ni convertir a
la hija del cacique en premio. El QA descartó una entrada que introducía el
tronco demasiado pronto, intercambios de regalos con personas o direcciones
equivocadas y dos intentos sin archivo. El detalle del punto de apoyo y el
cierre comunitario activaron después el filtro NSFW por la combinación de
referencias; se aislaron esos dos planos, se describieron con lenguaje material
sobrio y se generaron sin adjuntos. La hoja de contacto final pasó completa;
se ingestaron únicamente los 15 IDs aprobados y se verificaron 15 maestros de
1520×2688 más 15 recortes de 1080×1920.
En `los-cojines-del-zaque` se corrigió la nota del plan: son 17 planos totales,
14 nuevos y 3 reutilizados (`b1a`, `b6a`, `b8a`). `bochica` usa
`carpeta_video: bochica-maestro`; `videos/bochica` sigue perteneciendo a
`el-tequendama`. El emisor y el ingestor respetan ahora `carpeta_video`, así
que no vuelven a mezclar esas dos narraciones.

> **Reemitir siempre justo antes de lanzar.** Entre emitir y lanzar puede
> aterrizar una pieza tardía de la tanda anterior, y si se lanza un payload
> viejo esa pieza se genera dos veces.

## Cierre

No queda una cola obligatoria para declarar cumplido este objetivo. Las 84
escenas de video que no existen se conservan enumeradas como **omisiones
aceptadas**, no como imágenes generadas. Están repartidas entre
`el-bermejo-aspira-a-ser-rey` (9), `campos-eliseos` (15),
`el-hijo-del-sol-goranchacha` (15), `el-primero-de-los-reyes` (15), `popon`
(15) y `pacanchique` (15). Si en el futuro se reabre la producción, el bucle
de §5 del runbook puede continuar de forma aditiva desde ese inventario.

La publicación `cierre-muisca-2026-08-26` dejó 123 imágenes nuevas visibles en
los 41 mitos. Los 123 Blobs nuevos, los 86 URL anteriores no nulos, las 41
filas verticales nuevas y las 41 páginas públicas fueron verificados después
de la escritura. Los recibos antes/después permiten una reversión sin borrar
el historial.

## Estado de git

El certificado fija `main@de5cdd4ac17ca9af2e3e0183b61e56ae015d8ab7` como
punto de origen y registra el árbol de trabajo sucio. El corpus de 2,0 GB, la
biblia, los trípticos, los keyframes, los manifiestos y los recibos están
guardados localmente y checksummed. No se añadieron automáticamente a Git: el
repositorio no tiene Git LFS y hay cambios locales del usuario que este cierre
no debe mezclar ni sobrescribir.

## Cuenta de generación vigente · 2026-09-03

La única cuenta activa para imágenes nuevas es **OpenAI API**, configurada por
`OPENAI_API_KEY` en los archivos locales ignorados. `.env`, `.env.production`
y `.vercel/.env.production.local` quedaron alineados con la misma clave nueva y
permisos `600`; la clave no se registra aquí ni en Git.

La primera llamada a `gpt-image-2` autenticó contra OpenAI pero respondió
`429 credit_balance_exhausted`. Por tanto, el pipeline, los prompts y las
referencias pueden prepararse y validarse, pero la generación queda detenida
hasta añadir saldo API. Una suscripción ChatGPT no aporta saldo a la API.

Higgsfield y su saldo de agosto quedan sólo como procedencia histórica de los
assets existentes; no son la cuenta de generación vigente. El procedimiento
actual está al inicio de `docs/mitos-produccion-imagenes.md`.
