# QA · producción Wayuu V3 · lote 09

## Alcance

- Mito: `los-mellizos-transformadores`.
- Modelos nuevos: 16.
- Modelos aprobados reutilizados: 6 (`wanuru__presence_model`, `wanuru__state_sheet`, `mareiwa__presence_model`, `mareiwa__state_sheet`, `serrania_macuira__environment_model`, `territorio_alta_guajira__environment_model`).
- Cobertura del mito: 22/22 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `manna__identity_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `manna__state_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `sain_ma__presence_model` | PASS | lote base |
| `mannuuya__presence_model` | PASS | lote base |
| `juya__presence_model` | PASS | lote base |
| `juya__state_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `kalamantuunay__identity_sheet` | PASS | lote base |
| `kalamantuunay__state_sheet` | PASS | lote base |
| `hombres_tigre__group_grammar` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `tumajule__identity_sheet` | PASS | lote base |
| `tumajule__state_sheet` | PASS | lote base |
| `peeliyuu__identity_sheet` | PASS | lote base |
| `peeliyuu__state_sheet` | PASS | lote base |
| `aaner__identity_sheet` | PASS | lote base |
| `tinaja_manna__object_sheet` | PASS | lote base |
| `costa_mar_guajira__environment_model` | PASS | lote base |

## Investigación aplicada

La dirección se construyó desde las dos versiones del ciclo transcritas por José Enrique Finol a partir de Miguel Ángel Jusayú, Michel Perrin y Ramón Paz Ipuana. La morfología de los mellizos y de los Hombres-Tigre se contrastó además con el análisis de Carrasquero y Finol. El relato fija cuerpos, parentescos, viaje, caza, algodón, tinaja, morros, costa, lluvia y transformaciones, pero no describe el vestuario de sus personajes.

Por ello, la indumentaria se trata como una traducción editorial Wayuu reversible en registro `mythic_indeterminate`, no como reconstrucción prehispánica ni como dato literal del mito. La base material se contrastó con Artesanías de Colombia, la caracterización del Ministerio de Cultura y la etnografía de Virginia Gutiérrez de Pineda.

Fuentes principales:

- [Mito y cultura guajira](https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf), José Enrique Finol.
- [Mito, concepciones del cuerpo y yonna](https://www.joseenriquefinol.com/wp-content/uploads/2020/07/Mito-concepciones-del-cuerpo-y-yonna-1.pdf), Ángela Carrasquero y José Enrique Finol.
- [Tejeduría del pueblo indígena Wayuu](https://artesaniasdecolombia.com.co/Documentos/Contenido/29783_tejeduria_del_pueblo_indigena_wayuu.pdf), Artesanías de Colombia.
- [Caracterización del pueblo Wayuu](https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WAY%C3%9AU.pdf), Ministerio de Cultura.
- [Organización social en la Guajira](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1), Virginia Gutiérrez de Pineda, ICANH.

El expediente aplicado está en `docs/wayuu-lote-09-mellizos-transformadores-v3.md` y la matriz general de indumentaria y pintura en `docs/wayuu-indumentaria-y-pintura-v3.md`.

## Cultura material e indumentaria

- Manna usa manta/ashein índigo larga, lisa, amplia y con mangas sobre pechera ocre, waireñas y womu. Durante el viaje el paipai aparece como cobertura solar mate, irregular y sin motivo; no como pintura ornamental, banda geométrica, máscara o tela facial.
- Kalamantuunay usa manta carbón violáceo de mangas recogidas, pechera arcilla, waireñas y banda cruda. Se omiten pintura, joyas y atributos de bruja porque no tienen función respaldada en esta ficha.
- Tumaju'le y Peeliyuu usan conjuntos infantiles completos: camisa corta, wayuco opaco frontal, si'ira y waireñas. No hay torso desnudo, pintura guerrera ni disfraz de adulto.
- Las dos morfologías humano-dominantes de Hombres-Tigre usan camisa, wayuco frontal, si'ira y waireñas. Las dos animal-dominantes usan paños protectores de hombro y cintura que no deforman plumas, pico, melena, garras o patas.
- Ninguna pieza usa kana, marca clanil, patrón textil o motivo facial inventado.

## Iteraciones rechazadas

- Lote base, Hombres-Tigre: las cuatro morfologías eran correctas, pero los dos cuerpos humano-dominantes llevaban pantalones genéricos. `corrections-01` pasó con wayuco frontal, si'ira y piernas anatómicamente separadas.
- Lote base, Juyá estados: los cultivos reversibles se convirtieron en libros y objetos de catálogo. `corrections-01` pasó con tres plantas enraizadas, pivotes de fibra y loma de papel con sugerencia de boa.
- Lote base, Manna identidad: persona y manta parecían fotografía convencional, no figura de papel en capas.
- Lote base, Manna estados: el paipai se convirtió en un pañuelo que cubría nariz, boca y cuello.
- `corrections-01`, Manna identidad: recuperó el paper craft, pero exageró el embarazo y convirtió el paipai en franja geométrica.
- `corrections-01`, Manna estados: eliminó el pañuelo, pero omitió el paipai obligatorio en el estado de viaje.
- `corrections-02`: ambas fichas de Manna pasan con cuerpo y vestuario de papel, embarazo contenido, continuidad visual y paipai irregular directamente sobre el rostro.

Todas las imágenes rechazadas permanecen en disco y sus hashes se registran en `selection.json`.

## Criterios verificados

- Manna, Kalamantuunay, Tumaju'le, Peeliyuu y las porciones humanas de los Hombres-Tigre llevan conjuntos completos y contextuales, no una única prenda aislada.
- Manna conserva rostro, trenza, manta, pechera y waireñas entre identidad y estados; su memoria vegetal no se convierte en fantasma ni cuerpo violentado.
- Saiñ-Ma, Mannuuya y Juyá permanecen sin anatomía humana y se distinguen por tierra, rocío y lluvia móvil.
- Juyá muestra lluvia y dominio reversible sin libros, palacio, anfitrión humano o efectos digitales.
- Hay exactamente cuatro Hombres-Tigre distintos: humano rayado, humano-puma bermejo, felino-ave con pico y plumas, y humano-felino con melena.
- Los mellizos son niños diferenciados, vestidos y dignos; los estados con arco no muestran ataque, presa, herida o violencia.
- Aáner es una sola paloma silvestre sin afirmar especie exacta ni humanizarla.
- Tinaja y costa se leen por uso, escala y relaciones territoriales, no como reliquia o postal turística.
- Todas las selecciones son paper craft 3D full bleed, con capas, aire, cantos internos y sombras físicas; no hay base, cartón exterior, mesa, marco o estudio visible.
- No hay ingestión, canon, revisión comunitaria o publicación automática implícita.

El tablero final está en `output/imagegen/wayuu-v3-production/los-mellizos-transformadores-selected-contact-sheet.jpeg`.
