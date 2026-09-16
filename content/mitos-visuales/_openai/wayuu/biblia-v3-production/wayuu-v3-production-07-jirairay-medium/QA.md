# QA · producción Wayuu V3 · lote 07

## Alcance

- Mito: `jirairay`.
- Modelos nuevos: 6.
- Modelos aprobados reutilizados: 4 (`wanuru__presence_model`, `wanuru__state_sheet`, `chinchorro__object_sheet`, `rancheria_wayuu__spatial_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTION`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `jirairay_canto__phenomenon_rule` | PASS | lote base |
| `outsu_jirairay__identity_sheet` | PASS | lote base |
| `paciente_jirairay__identity_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `maraca_outsu__object_sheet` | PASS | lote base |
| `tabaco_ritual__object_sheet` | PASS | lote base |
| `alimentos_ceremonia__object_sheet` | PASS | lote base |

## Investigación y límite de representación

La separación entre canto, outsü, maraca y paciente se contrastó con el relato histórico disponible en [publicaciones del ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1), que registra cánticos acompañados por maraca y negociación con Jirairay. La imagen no transcribe el canto, no reconstruye una secuencia ceremonial y no ofrece instrucciones de uso de tabaco u otros bienes.

## Decisiones y corrección

Jirairay aparece como fenómeno de tensión, pulso y respuesta en fibras y espacio vacío, no como personaje o cuerpo. Wanurü reutiliza la presencia material ya aprobada y permanece sin anatomía.

La outsü es una mujer adulta mayor individual, con maraca baja y sin trance, tocado, pintura, símbolos o estereotipo de hechicera. El paciente conserva cuerpo completo, consciencia y agencia; la enfermedad sólo se sugiere por postura. Su primera imagen se rechazó por introducir un remate arquitectónico dentado en zigzag. La corrección usa una enramada abierta sin decoración.

Maraca, tabaco y bienes se aíslan como objetos. La maraca está cerrada y en reposo; el tabaco no muestra preparación o consumo; los cuatro bienes permanecen tapados para no inventar alimentos, dosis o obligaciones específicas. La versión rechazada permanece en disco y en `selection.json`.

El tablero final de 10 modelos está en `output/imagegen/wayuu-v3-production/jirairay-selected-contact-sheet.jpeg`.

## Criterios verificados

- Jirairay inventariado y representado como fenómeno sonoro, no entidad corporal.
- Outsü individual y no arquetipo panindígena, bruja o médica genérica.
- Paciente adulto, consciente, completo y sin síntomas explícitos o cuerpo vulnerado.
- Wanurü sin demonio, serpiente o anatomía inventada.
- Objetos cerrados, no instructivos y sin ritual reconstruido.
- Sin letras de canto, kanas, marcas claniles, símbolos, texto o cantidades.
- Paper craft full bleed con capas, aire, cantos internos y sombras físicas.
- No hay ingestión ni publicación automática.
