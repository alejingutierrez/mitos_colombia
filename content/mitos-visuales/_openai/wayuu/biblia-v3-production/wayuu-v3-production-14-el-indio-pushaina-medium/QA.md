# QA · producción Wayuu V3 · lote 14

## Alcance

- Mito: `el-indio-pushalna` / **El indio Pushaina**.
- Modelos nuevos: 15.
- Modelos aprobados reutilizados: 2.
- Cobertura del mito: 17/17 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Tamaños: diez imágenes `1024x1024` y cinco `1536x1024`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_02`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `pushaina__identity_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `pushaina__state_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `hija_pushaina__identity_sheet` | PASS | lote base |
| `kasap__identity_sheet` | PASS | lote base |
| `presencia_invisible_pushaina__presence_model` | PASS | lote base |
| `culebra_pushaina__identity_sheet` | PASS | lote base |
| `zorro_pushaina__identity_sheet` | PASS | lote base |
| `mapurito_pushaina__identity_sheet` | PASS | lote base |
| `gallinazo_pushaina__identity_sheet` | PASS | lote base |
| `ciempies_pushaina__identity_sheet` | PASS | lote base |
| `anillo_oculto_pushaina__object_sheet` | PASS | lote base |
| `ofrenda_alimento_pushaina__object_sheet` | PASS | lote base |
| `lugar_caida_pushaina__spatial_model` | PASS | lote base |
| `casa_grande_pushaina__spatial_model` | PASS | lote base |
| `cementerios_pushaina__spatial_model` | PASS | lote base |

## Investigación y corrección semántica

La transcripción de Milcíades Chaves registra a Pushiana como jinete de Kasap,
su caída y muerte, el retorno visible, la voz sin cuerpo dentro de la casa, los
pedidos de alimento, la ausencia de tres días, la mención de cementerios, el
hallazgo de un anillo y cinco formas animales. La voz invisible no se convirtió
en un ser auxiliar: sigue siendo el propio Pushaina.

La ficha conserva culebra, zorro, mapurito, gallinazo y ciempiés como formas
separadas. La prueba sexualizada asociada con el ciempiés permanece en el
inventario de investigación, pero está excluida de toda imagen. La muerte se
narra mediante un lugar vacío con huellas y suelo alterado, sin cuerpo, golpe o
sangre.

La compilación de Villa Posse sirve para ubicar y cotejar el texto de Chaves,
pero no se trata como una versión independiente. La casa y los cementerios son
modelos editoriales prudentes: no fijan una arquitectura histórica universal ni
copian un cementerio contemporáneo concreto.

Expediente: `docs/wayuu-lote-14-pushaina-v3.md`.

## Cultura material

- Pushaina lleva kemüsa azul humo de mangas completas sobre wayuco ocre de dos
  paneles estrechos, una sola si'ira en la cintura, waireñas y womu. La kemüsa
  aporta cobertura completa; el wayuco no se presenta como su único traje.
- La versión base se rechazó porque amplió el wayuco hasta convertirlo en una
  falda o panel hasta los tobillos.
- La primera corrección se rechazó porque trasladó la si'ira a dos ligas en los
  muslos. La segunda corrección fija la faja en la cintura natural y deja los
  muslos sin bandas inventadas.
- La hija de Pushaina lleva manta/ashein larga verde trupillo sobre pechera
  arcilla, waireñas y dos trenzas; su adultez es una inferencia editorial
  reversible por su función autónoma de cuidado, no un dato literal de Chaves.
- Ninguna de las dos figuras recibe pintura facial, kanas, marca clanil, joya,
  arma o atributo ritual sin evidencia específica.

## Magia e imaginación verificadas

- una única composición enlaza a Pushaina visible, el vacío material de la voz
  y cinco animales separados, sin híbridos ni metamorfosis anatómica;
- cinco láminas curvas de papel y ondas bajas hacen audible el cuarto vacío sin
  dibujar un fantasma;
- el mapurito conserva anatomía de zorrillo con cola levantada, sin
  demonización, nube de olor o caricatura;
- el gallinazo, el ciempiés, la culebra y el zorro tienen fichas propias para
  que la magia no borre su identidad animal;
- el anillo y el alimento hacen visible el conocimiento y la presencia material
  de Pushaina sin convertirlos en reliquias, altar o banquete;
- casa, sitio de caída y cementerios construyen profundidad narrativa sin
  representar muerte, cadáver, prueba sexualizada o consumo de alcohol.

## Iteraciones rechazadas

- identidad base: el wayuco se volvió un panel ancho de lectura de falda hasta
  los tobillos;
- estados base: el mapurito se volvió una figura semejante a armadillo y el
  wayuco repitió la lectura de falda;
- identidad `corrections-01`: la si'ira se convirtió en dos bandas de muslo y
  aparecieron cactus de lectura saguaro;
- estados `corrections-01`: reaparecieron bandas en los muslos y rosetas de
  lectura agave o aloe.

Todos los intentos rechazados permanecen en disco con causa y SHA-256 en
`selection.json`.

## Criterios generales

- Las quince selecciones son paper craft 3D full bleed con aire, cantos
  internos, oclusiones, escala y sombras físicas.
- No se ve base, cartón soporte, mesa, pedestal, marco o exterior de maqueta.
- No hay cuerpo muerto, herida, sangre, prueba sexualizada, animal atacando,
  alcohol consumido ni ritual inventado.
- No se inventan símbolos para el anillo, la voz, los cementerios, la ropa o
  los animales.
- Generación, QA, selección, ingestión, canon y publicación permanecen estados
  separados.

Tablero final:
`output/imagegen/wayuu-v3-production/el-indio-pushaina-selected-contact-sheet.jpeg`.
