# QA · producción Wayuu V3 · lote 03

## Alcance

- Mito: `el-indio-kuriruputa`.
- Modelos nuevos: 5.
- Modelos del piloto reutilizados: 4 (`hermanas_kuriruputa__group_grammar`, `tuma_roja__object_sheet`, `rancheria_wayuu__spatial_model`, `territorio_alta_guajira__environment_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTION`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `kuriruputa__identity_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `kuriruputa__state_sheet` | PASS | lote base |
| `nueva_pareja_kuriruputa__identity_sheet` | PASS | lote base |
| `corral_kuriruputa__spatial_model` | PASS | lote base |
| `rebanos__group_grammar` | PASS_WITH_MATERIALITY_WATCH | lote base |

## Corrección aplicada

La primera identidad de Kuriruputá usó camisa marrón mientras sus tres estados fijaron terracota rojizo. La corrección conserva rostro, cabello, pantalón, sandalias, cuerda y la paleta terracota de la secuencia.

La pareja aparece sola y con agencia; el estado herido se expresa con un antebrazo sostenido por tela sin lesión visible; el corral explica acceso y huellas sin personas; el rebaño contiene exactamente tres cabras y dos vacunos.

La versión rechazada permanece en disco y en `selection.json`. El tablero final de 9 modelos está en `output/imagegen/wayuu-v3-production/el-indio-kuriruputa-selected-contact-sheet.jpeg`.

## Criterios verificados

- Continuidad de identidad y vestuario de Kuriruputá.
- Sin herida explícita, ataque, armas o cuerpo vulnerado.
- Mujer adulta autónoma, sin pose de premio o escena romántica.
- Corral full bleed con tubos y uniones de papel, sin infraestructura moderna.
- Cinco animales contables, anatómicos y no fantásticos.
- Sin símbolos, kanas, marcas claniles, texto o soporte exterior visible.
- No hay ingestión ni publicación automática.
