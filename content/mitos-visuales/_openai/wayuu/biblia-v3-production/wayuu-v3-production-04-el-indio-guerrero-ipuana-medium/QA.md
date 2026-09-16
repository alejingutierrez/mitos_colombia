# QA · producción Wayuu V3 · lote 04

## Alcance

- Mito: `el-indio-guerrero-ipuana`.
- Modelos nuevos: 6.
- Modelos del piloto reutilizados: 3 (`cardon_iguaraya__botanical_sheet`, `rancheria_wayuu__spatial_model`, `territorio_alta_guajira__environment_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTION`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `guerrero_ipuana__identity_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `guerrero_ipuana__state_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `hijo_guerrero_ipuana__identity_sheet` | PASS | lote base |
| `hijo_guerrero_ipuana__state_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `majayura_sueno_ipuana__identity_sheet` | PASS | lote base |
| `arco_flechas__object_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |

## Correcciones aplicadas

La identidad inicial del guerrero usó mangas largas mientras la hoja de estados fijaba mangas cortas. La corrección establece una camisa azul carbón lisa, de manga corta y sin ornamentos en todas las apariciones. También elimina destellos que podían leerse como estampado o marca.

El hijo conserva la camisa cruda con un único borde terracota en V; se retiró una banda diagonal inventada. El arco, las tres flechas y el carcaj se reconstruyeron junto con mano, roca y suelo como piezas de papel visibles, con pliegues, espesor, separación entre capas y sombras de contacto.

La majayura onírica aparece como mujer adulta con agencia y gesto de advertencia, sin vulnerabilidad ni erotización. La ausencia del hijo se resuelve mediante huellas, sandalias y arco abandonados, sin cuerpo lesionado ni violencia explícita.

Las cuatro versiones rechazadas permanecen en disco y en `selection.json`. El tablero final de 9 modelos está en `output/imagegen/wayuu-v3-production/el-indio-guerrero-ipuana-selected-contact-sheet.jpeg`.

## Criterios verificados

- Continuidad de rostro, cabello, vestuario y utilería entre identidades y estados.
- Camisas lisas, sin kanas, marcas claniles, emblemas o decoración inventada.
- Presencia onírica adulta, autónoma y no sexualizada.
- Armas documentadas como utilería, sin ataque, heridas o violencia gráfica.
- Lenguaje full bleed de capas físicas de papel con profundidad, oclusión y sombras de contacto.
- Sin bordes de maqueta, cartón soporte, mesa, texto o estudio exterior visible.
- No hay ingestión ni publicación automática.
