# Lote 22 · Umaralá · Biblia visual Wayúu V3

**Corte:** 2026-09-04  
**Estado:** `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_02`  
**Calidad:** `medium`  
**Generación:** `gpt-image-2`, sólo texto, sin referencias locales  
**Resultado:** 17/17 modelos seleccionados; cobertura del mito 23/23; 15 intentos rechazados conservados.

## Por qué se reabrió el inventario

La extracción anterior trataba a Umaralá principalmente como especialista y
viajero. La lectura completa de la fuente primaria mostró que faltaban
identidades, estados, objetos y relaciones mágicas que no podían quedar
embebidos en una sola escena. También reveló dos errores de atribución: los
imitadores pertenecen al ciclo de Jururiana, y el compañero vestido con cuero
de venado es el mismo hombre de Parashi que después fabrica objetos de maguey y
puede convertirse en venado.

Fuente principal: Milcíades Chaves, *Umaralá*, pp. 321–325 de *Mitos, leyendas
y cuentos de la Guajira*, publicación oficial del ICANH. La fuente se conserva
en el contrato `chaves_umarala_1946` de
`editorial/wayuu/material-culture-v3.mjs`.

La reauditoría añadió 15 entidades detectadas, cinco entidades con modelo
propio y siete contratos visuales al denominador general:

- antes: 356 entidades, 316 requeridas y 388 activos;
- después: 371 entidades, 321 requeridas y 395 activos.

No se representa la muerte de la tía, el entierro, la ceguera ni el desenlace
del servidor. La curación se trata como episodio narrativo histórico y nunca
como evidencia, procedimiento o promesa clínica.

## Qué se modeló

### Identidades y estados humanos

- `umarala__identity_sheet` y `umarala__state_sheet`: continuidad desde John
  Paurala joven hasta Umaralá anciano y viajero.
- `tia_outsu_umarala__identity_sheet` y
  `tia_outsu_umarala__state_sheet`: maestra, cuidadora, cantora, entrega de la
  maraca y presencia de memoria sin fantasma anatómico.
- `paciente_umarala__identity_sheet` y
  `paciente_umarala__state_sheet`: la madre atendida conserva identidad,
  vestido y agencia antes y al amanecer.
- `hombre_parashi_venado__identity_sheet` y
  `hombre_parashi_venado__state_sheet`: viajero, artesano de maguey y venado,
  sin híbrido, caza o piel cruda.
- `servidor_umarala__identity_sheet`: ayudante y testigo con rostro y conjunto
  propios, no uniforme colonial de criado.
- `jururiana__state_sheet`: viaje desde Macuira, tres haces de raíces, lluvia
  localizada y anuncio entre rancherías. Esta selección sustituye de forma
  explícita la hoja anterior del lote 13; el manifiesto conserva fuente, hash y
  causa de la sustitución.

### Presencia, objeto y espacios

- `jumajule_umarala__presence_model`: ayuda reconocible por tensión, dirección,
  oclusión y apertura del espacio; ninguna anatomía sobrenatural inventada.
- `capote_umarala__object_sheet`: prenda flexible mostrada plegada, por el
  frente y por la espalda; no reliquia ni forma rígida.
- `jarara__spatial_model`: serranía, tres viviendas, enramada, corral y rutas de
  visita.
- `maiceo__spatial_model`: bosque xerofítico, tres elevaciones reversibles y
  fogata apagada de tres piedras, sin reconstrucción funeraria.

### Reglas de magia

- `transmision_vida_nombre_umarala__phenomenon_rule`: la magia se lee en el
  peso del chinchorro, la continuidad de una maraca, el paso del capote y la
  distancia de la tía; no en rayos, alma visible o resurrección.
- `curacion_nocturna_umarala__phenomenon_rule`: oferta rechazada, paciente sola
  con exactamente dos botellas, tres pliegues sonoros, huellas equinas y
  amanecer sobrio; nadie administra ron ni toca el cuerpo.
- `partida_occidente_umarala__phenomenon_rule`: tres viajeros montados, un
  servidor a pie, tres mulas, tres elevaciones y una banda física de lamento;
  no portal ni otro mundo visible.

## Indumentaria aplicada

La ropa no se redujo a wayuco o taparrabo. Cada persona recibió un conjunto
completo ligado a su función y al pasaje:

- Umaralá: `Kemiisa` índigo de mangas, `Kotin` o manta masculina larga de
  algodón crudo, base y `si'ira` secundarias, waireñas; maraca sólo en estados
  autorizados.
- Tía: `Wayuushein` ciruela de cuerpo entero sobre pechera arena, capote carbón
  separado y waireñas arcilla.
- Paciente: `Wayuushein` verde oliva liso sobre pechera arcilla y waireñas
  arena.
- Hombre de Parashi: `Kemiisa` arena, prenda cosida de cuero de venado sin
  anatomía animal, manta de lana azul gris, base, `si'ira` y waireñas.
- Servidor: `Kemiisa` arcilla, `Asheinpalajanaa` arena, base carbón, `si'ira`
  índigo y waireñas.
- Jururiana: `Kemiisa` arena, `Kotin` carbón largo, `Wom/Woma` bajo y waireñas.

No se añadió pintura facial: la fuente no fija para estas personas un motivo,
material, función y ocasión exactos. La omisión es una decisión documentada, no
un vacío automático.

## QA y correcciones

La tanda base produjo 17 archivos. Seis pasaron directamente y once volvieron
a `corrections-01`. Cuatro de esas correcciones todavía fallaron y pasaron a
`corrections-02`.

Los 15 descartes se conservaron por estas causas verificables:

- capote con volumen de tienda o ataúd, no prenda vestible;
- agaves, rosetas o cactus ramificado no admitidos por el contrato;
- exceso de cuerdas y transformación semejante a arnés;
- paisaje de Maiceo demasiado fotográfico;
- deriva de edad de la tía;
- ropa rayada, decorada o con lectura de poncho en la curación;
- número ambiguo de piedras en la fogata;
- bulto cubierto con lectura corporal durante la entrega de la maraca.

La versión final conserva volumen 3D, capas a distintas distancias, cantos
internos y sombras físicas sin mostrar cartón, base, mesa o exterior del
montaje.

## Evidencia reproducible

- preparación base:
  `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-22-umarala-medium/jobs.json`;
- revisiones:
  `wayuu-v3-production-22-umarala-medium-corrections-01` y
  `wayuu-v3-production-22-umarala-medium-corrections-02` dentro de la misma
  carpeta de producción;
- decisiones humanas: `selection.decisions.json` del lote base;
- selección con hashes: `selection.json` del lote base;
- hoja de contacto:
  `output/imagegen/wayuu-v3-production/umarala-batch22-selected-contact-sheet.jpeg`;
- manifiesto acumulado:
  `content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`.

Después del lote, la Biblia queda en 343/395 modelos, 52 pendientes y 23/27
mitos completos. La siguiente compuerta es reauditar y congelar *La Chama*
antes de preparar el lote 23.
