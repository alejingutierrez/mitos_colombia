# QA · producción Wayuu V3 · lote 02

## Alcance

- Mito: `aramai`.
- Modelos nuevos: 7.
- Modelos del piloto reutilizados: 3 (`mareiwa__presence_model`, `territorio_alta_guajira__environment_model`, `rancheria_wayuu__spatial_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `aramai__identity_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `aramai__state_sheet` | PASS | lote base |
| `mareiwa__state_sheet` | PASS | lote base |
| `wanuru__presence_model` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `wanuru__state_sheet` | PASS | lote base |
| `epidemia_aramai__phenomenon_rule` | PASS_AFTER_CORRECTION | `corrections-01` |
| `jaguey__spatial_model` | PASS_AFTER_CORRECTION | `corrections-01` |

## Correcciones aplicadas

1. `aramai__identity_sheet`: la base introdujo varias chozas redondas genéricas. La primera corrección eliminó esa arquitectura pero perdió las sandalias presentes en los estados. La segunda conserva personaje, calzado y una única enramada abierta.
2. `wanuru__presence_model`: la base parecía un río negro y podía sugerir una causa hídrica no documentada. La primera corrección tomó textura trenzada o escamada. La segunda usa fragmentos carbón irregulares, aislados y sin cuerpo, patrón o trayectoria.
3. `epidemia_aramai__phenomenon_rule`: la base conectaba rancherías con una franja continua y usaba chozas redondas. La corrección separa tres huellas pálidas sin vector y usa sistemas rectilíneos mínimos.
4. `jaguey__spatial_model`: la base añadía una aldea de chozas redondas. La corrección elimina toda arquitectura y conserva cuenca, borde, sendero, nivel de agua y materialidad de papel.

Las seis versiones rechazadas permanecen en disco y en `selection.json`; no se sobrescribieron. El tablero final de 10 modelos está en `output/imagegen/wayuu-v3-production/aramai-selected-contact-sheet.jpeg`.

## Criterios verificados

- Arámai mantiene rostro, cabello, proporciones, ropa y sandalias entre identidad y estados.
- Mareiwa nunca recibe cuerpo; sus tres estados comparten una firma material ocre.
- Wanurü nunca recibe anatomía, especie, demonización o iconografía cristiana.
- La enfermedad muestra alcance sin pacientes vulnerados ni mecanismo causal inventado.
- El jagüey es una reserva limitada, no oasis ni infraestructura moderna.
- Full bleed y profundidad física por capas; sin soporte exterior visible.
- Sin kanas, marcas claniles, símbolos, texto, violencia o sexualidad explícitas.
- No hay ingestión ni publicación automática.
