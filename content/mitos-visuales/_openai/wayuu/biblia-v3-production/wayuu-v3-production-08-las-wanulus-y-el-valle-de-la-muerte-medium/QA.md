# QA · producción Wayuu V3 · lote 08

## Alcance

- Mito: `las-wanulus-y-el-valle-de-la-muerte`.
- Modelos nuevos: 7.
- Modelos aprobados reutilizados: 3 (`wanuru__presence_model`, `wanuru__state_sheet`, `territorio_alta_guajira__environment_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación y correcciones desde texto.
- Estado: `QA_PASS_AFTER_MATERIAL_CULTURE_RESEARCH_AND_CORRECTION`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `hermano_mayor_valle__identity_sheet` | PASS_AFTER_MATERIAL_CULTURE_RESEARCH_AND_CORRECTION_05 | `corrections-05` |
| `hermano_menor_valle__identity_sheet` | PASS_AFTER_MATERIAL_CULTURE_RESEARCH_AND_CORRECTION_04 | `corrections-04` |
| `serpiente_valle__identity_sheet` | PASS | lote base |
| `valle_documentacion_pendiente__environment_model` | PASS | lote base |
| `casa_parcela_valle__spatial_model` | PASS | lote base |
| `rifle_valle__object_sheet` | PASS | lote base |
| `huesos_senales_valle__object_sheet` | PASS | lote base |

## Corrección de indumentaria

Las primeras direcciones cometieron dos errores consecutivos: primero convirtieron el wayuco en una túnica genérica; después confundieron mayor fidelidad con torso descubierto y wayuco como conjunto completo. Ninguna de esas salidas entró al manifiesto.

La investigación ampliada demostró que la indumentaria masculina puede articular camisa, camiseta o camisilla con wayuco/si'ira, además de waireñas, sombrero y bolsas funcionales. El conjunto con camisa de manga larga también aparece en un documento institucional construido con mesas de trabajo Wayuu; una fotografía de 1961 documenta hombres trabajando con prendas incorporadas y continuidad de si'ira, wo'olu y sandalias; una etnografía publicada en 1950 registra camisa o camiseta sin abandono del guayuco.

Fuentes principales:

- [ABC de relacionamiento del pueblo Wayuu y el sector minero-energético](https://repositoriobi.minenergia.gov.co/bitstream/handle/123456789/2846/13.%20ABC%20de%20relacionamiento%20del%20pueblo%20Wayuu%20y%20el%20sector%20minero-energe%CC%81tico.pdf?isAllowed=y&sequence=1).
- [Hombres wayuú trabajando, Brian Moser, 1961](https://babel.banrepcultural.org/digital/collection/p17054coll35/id/181/), Biblioteca Virtual del Banco de la República.
- [Organización social en la Guajira](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/249/273/1635?inline=1), Virginia Gutiérrez de Pineda, edición digital ICANH.
- [Caracterización del pueblo Wayuu](https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WAY%C3%9AU.pdf), Ministerio de Cultura.

El informe completo y la matriz de evidencia están en `docs/wayuu-indumentaria-y-pintura-v3.md`.

### Conjuntos seleccionados

- Hermano mayor, viajero: camisa holgada azul agave de manga larga, wayuco arena como paño frontal angosto, si'ira arcilla, waireñas, womu y pequeña wo'olu monocroma de cintura.
- Hermano menor, cultivador: camisa cruda de manga corta, wayuco carbón azulado como paño frontal angosto, si'ira cruda, waireñas y pequeña wo'olu de cintura. La kapatera se omite durante el trabajo y queda disponible para un estado de viaje.

La pintura facial se omite en estas dos fichas porque la evidencia localizada no permite fijar un motivo masculino preciso para viaje o cultivo. La omisión es contextual, no una negación de la práctica Wayuu.

## Iteraciones rechazadas

- Lote base: ambos hermanos se leían con túnica o ropa genérica y no como conjuntos Wayuu documentados.
- `corrections-01`: se corrigió la pieza inferior, pero se redujo el conjunto al torso descubierto; el mayor además perdió el womu.
- `corrections-02`: el mayor recuperó el womu, pero conservó la reducción a torso descubierto + wayuco.
- `corrections-03`: las camisas y componentes adicionales funcionaron, pero el wayuco se convirtió en una falda envolvente hasta la rodilla.
- `corrections-04`: el hermano menor pasó. El mayor introdujo dos personas al fondo y un zigzag inventado en la wo'olu.
- `corrections-05`: el hermano mayor pasó con sendero vacío y wo'olu monocroma.

Todas las imágenes rechazadas permanecen en disco y sus hashes están en `selection.json`.

## Criterios verificados

- Los dos hermanos son adultos individuales, distintos entre sí y de cuerpo completo.
- Cada personaje viste un conjunto por actividad y registro temporal, no un uniforme étnico genérico.
- Camisas, wayuco, si'ira, waireñas, cabeza y carga se leen como componentes relacionados.
- Ninguna figura usa torso descubierto como atajo de autenticidad.
- No hay pintura facial, kana, marca clanil ni motivo textil inventado.
- La serpiente es un animal natural y no sustituye el modelo de presencia de Wanurü.
- El valle sigue abierto en ubicación e identidad: no se afirma California, Atacama, Sahara ni un sitio colombiano preciso.
- Vivienda, cocina exterior y parcela forman un sistema espacial sin choza redonda, techo cónico o fachada turística.
- Rifle histórico genérico, completo, descargado y sin marca; no fija fabricante o fecha no documentados.
- Un cráneo animal parcial y dos huesos largos, sin restos humanos, sangre, altar o pista deliberada.
- Paper craft full bleed con capas, aire, cantos internos y sombras físicas; sin base, cartón exterior, mesa o estudio.
- No hay ingestión, canon ni publicación automática.

El tablero final está en `output/imagegen/wayuu-v3-production/las-wanulus-y-el-valle-de-la-muerte-selected-contact-sheet.jpeg`.
