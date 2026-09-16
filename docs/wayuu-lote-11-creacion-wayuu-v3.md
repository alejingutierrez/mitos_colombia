# Lote 11 Wayuu V3: La creación Wayuu

Estado: 8/8 modelos nuevos seleccionados después de QA y correcciones; 13 modelos aprobados se reutilizan  
Fecha: 2026-09-03  
Mito: `creacion-wayuu`  
Calidad: `medium`  
Modo: texto sin referencias locales, paper craft 3D full bleed

## Regla editorial central

La creación Wayuu no se reduce a una versión única. El lote mantiene separadas:

- la relación generativa de Mma y Juyá;
- las presencias de Kaí y Kashi en relatos de primeras generaciones;
- la salida de personas desde una cavidad o pozo pétreo;
- el modelado en barro registrado en otra versión;
- la asignación de nombres, grupos, animales y territorios en Arachí;
- los primeros fogones como traza de la noche habitada en la síntesis editorial
  actual del proyecto.

Una imagen de una variante no prueba las otras. Tampoco se visualizan signos,
hierros o marcas claniles: no hay respaldo aprobado para copiarlos ni permiso
para inventarlos.

## Fuentes y alcance

- Milcíades Chaves registra, después del retiro del mar, la dispersión de frutos
  por aves, la creación o salida de personas en una gran cueva o pozo y la
  asignación de nombres, animales y territorios en Arachí.
  https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1
- Virginia Gutiérrez de Pineda registra por separado una versión en la que
  Mareiwa toma barro, modela figuras y luego distribuye territorios. Su
  presencia en el archivo no autoriza a fundir barro y cavidad.
  https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/249/273/1635?inline=1
- El estudio sobre la yonna explica la relación de Juyá y Mma como fuerzas de
  generación de plantas, animales y personas. Se usa para acción y relación,
  no para representar una unión sexual o una tierra antropomorfa.
  https://ve.scielo.org/scielo.php?pid=S1315-95182009000400006&script=sci_arttext
- El estudio de principios culturales y lingüísticos Wayuu recoge a Mma y Juyá
  y menciona a Kashi y Kai entre seres de una primera generación transformados
  en fenómenos naturales. Se usa como variante, no como genealogía única.
  https://ve.scielo.org/scielo.php?pid=S1315-62682006000100009&script=sci_arttext
- El plan ambiental de Corpoguajira identifica `trupillo` como `Prosopis
  juliflora`; la ficha muestra morfología botánica sin convertirla en vegetación
  desértica genérica.
  https://corpoguajira.gov.co/wp/wp-content/uploads/2020/12/Plan-de-Accion-Institucional-2020-2023-La-Sostenibilidad-Ambiental-un-compromiso-de-todos.pdf
- La página pública actual del proyecto conserva la síntesis de familias que
  encienden fuegos separados durante la primera noche. El fogón se etiqueta
  como continuidad editorial reversible, no como evidencia primaria
  independiente.
  https://www.mitosdecolombia.com/mitos/creacion-wayuu

Las fuentes históricas se leen críticamente: preservan relatos y vocabulario,
pero no convierten sus categorías coloniales en interpretación vigente.

## Denominador

El mito requiere 21 modelos. Trece ya están aprobados y se reutilizan:

- `mareiwa__presence_model`
- `mareiwa__state_sheet`
- `juya__presence_model`
- `juya__state_sheet`
- `pava_semillera__identity_sheet`
- `turpial_semillero__identity_sheet`
- `paloma_semillera__identity_sheet`
- `cardon_iguaraya__botanical_sheet`
- `tuna_higo__botanical_sheet`
- `primeros_wayuu__group_grammar`
- `territorio_alta_guajira__environment_model`
- `serrania_macuira__environment_model`
- `costa_mar_guajira__environment_model`

El lote genera exactamente ocho modelos:

| Modelo | Decisión de diseño |
| --- | --- |
| `mma__presence_model` | tierra que recibe, guarda y hace brotar; nunca mujer o cuerpo terrestre |
| `kai_sol__presence_model` | Sol reconocido por recorrido de luz, calor y sombra; nunca dios con rostro |
| `kashi_luna__presence_model` | Luna reconocida por ocultamiento, retorno y sombras; nunca diosa antropomorfa |
| `trupillo__botanical_sheet` | árbol bajo y extendido con hojas menudas y vainas; no acacia africana genérica |
| `arachi__spatial_model` | piedras y senderos sin inscripción, marca, altar ni coordenada inventada |
| `cavidad_origen__spatial_model` | umbral pétreo de una versión; sin personas emergiendo ni anatomía corporal |
| `barro_creacion__object_sheet` | materia maleable de otra versión; sin muñeco, cuerpo ni procedimiento |
| `fogon_primero__object_sheet` | hogar pequeño y luces familiares separadas; no ceremonia reconstruida |

`marcas_claniles` permanece excluido del denominador visual por decisión
explícita del inventario.

## Magia e imaginación

La fidelidad no aplana el mito:

- Mma hace visible la memoria mediante semillas y raíces guardadas dentro de
  estratos que sólo brotan donde reciben agua;
- Kai cruza el territorio como un corredor de calor que cambia materia y
  sombras, sin aura;
- Kashi aparece y desaparece sobre sal, piedra y agua mediante una senda de luz
  interrumpida;
- la cavidad organiza un ascenso de oscuridad a territorio abierto sin mostrar
  un nacimiento corporal;
- Arachí conecta un claro con cuatro destinos por senderos divergentes;
- los fogones convierten la noche en una constelación terrestre de hogares
  separados, sin estrellas gráficas ni iconos.

## QA de salida

- calidad `medium` y generación desde texto;
- cinco imágenes `1536x1024` y tres `1024x1024`;
- full bleed; nunca base, cartón soporte, mesa, pedestal o estudio;
- paper craft 3D inequívoco con aire, oclusiones, cantos internos y sombras;
- ninguna persona, cuerpo o vestuario nuevo: los Primeros Wayuu se reutilizan
  desde el lote 10, donde ya pasaron la compuerta de conjuntos completos y
  variación interna;
- ninguna marca clanil, kana, glifo, petroglifo o símbolo inventado;
- cavidad y barro no aparecen juntos;
- generación, selección, QA, ingestión, canon y publicación permanecen estados
  separados.

## Cierre de producción

Los ocho modelos pasaron QA. Tres se seleccionaron del lote base, cuatro de
`corrections-01` y Arachí de `corrections-03`. Siete iteraciones rechazadas se
conservan con causa y SHA-256: materialidad fotográfica, barro con forma de
recipiente, cavidad con lectura de escalera y vegetación en roseta impropia.

- Cobertura de `creacion-wayuu`: 21/21 modelos.
- Cobertura acumulada: 101/265 modelos y 11/27 mitos completos.
- Selección: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-11-creacion-wayuu-medium/selection.json`.
- QA: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-11-creacion-wayuu-medium/QA.md`.
- Tablero: `output/imagegen/wayuu-v3-production/creacion-wayuu-selected-contact-sheet.jpeg`.
