# QA · producción Wayuu V3 · lote 06

## Alcance

- Mito: `los-dos-hermanos`.
- Modelos nuevos: 7.
- Modelos aprobados reutilizados: 4 (`arco_flechas__object_sheet`, `rebanos__group_grammar`, `rancheria_wayuu__spatial_model`, `territorio_alta_guajira__environment_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTION`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `hermana_arquera__identity_sheet` | PASS | lote base |
| `hermana_arquera__state_sheet` | PASS | lote base |
| `hermano_arquera__identity_sheet` | PASS | lote base |
| `hermano_arquera__state_sheet` | PASS | lote base |
| `perro_hermanos__identity_sheet` | PASS | lote base |
| `mula_hermanos__identity_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `chinchorro__object_sheet` | PASS | lote base |

## Investigación aplicada

La anatomía del chinchorro se contrastó con el [Referencial Nacional de Tejeduría Wayuu de Artesanías de Colombia](https://artesaniasdecolombia.com.co/Documentos/Contenido/50294_capitulo_de_tejidos%2C_chinchorros_y_hamacas_2024.pdf): cuerpo elástico y abierto, cabeceras, cabuyeras e hicos. La selección muestra esas relaciones sin copiar ni inventar kanas, nombres o signos claniles.

## Decisiones y corrección

La hermana queda separada en identidad y cuatro estados: destreza, duelo, persecución y retorno. La venganza no aparece como triunfo; arcos, gestos, distancia y vacío comunican el arco ético sin adversarios, impactos o cuerpos vulnerados.

El hermano tiene identidad propia y una ficha con dos cuerpos vivos más una tercera zona de ausencia. Su muerte se expresa mediante ropa, sandalias, arco y carcaj cuidados junto a un chinchorro vacío, sin cadáver o lesión.

Perro y mula son animales completos, naturales y no antropomorfizados. La primera mula incorporó chozas redondas con techos cónicos; fue rechazada. La corrección conserva animal y albarda vacía en un territorio enteramente natural. La versión descartada permanece en disco y en `selection.json`.

El tablero final de 11 modelos está en `output/imagegen/wayuu-v3-production/los-dos-hermanos-selected-contact-sheet.jpeg`.

## Criterios verificados

- Cuatro identidades separadas antes de narrar duelo, persecución o retorno.
- Continuidad facial, capilar, corporal y de vestuario entre fichas humanas.
- Ninguna herida, cadáver, impacto, ataque o violencia explícita.
- Perro y mula completos, a escala y sin atributos mágicos o humanos.
- Chinchorro vacío con cuerpo, cabeceras y suspensión legibles; sin kanas inventados.
- Paper craft full bleed con capas, cantos, oclusiones y sombras físicas.
- Sin cartón soporte, mesa, borde exterior, texto o arquitectura genérica rechazada.
- No hay ingestión ni publicación automática.
