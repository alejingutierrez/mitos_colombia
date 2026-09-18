# QA · producción Wayuu V3 · lote 01

## Alcance

- Mito: `el-hijo-del-condor`.
- Modelos nuevos: 13.
- Modelos del piloto reutilizados para completar la cobertura del mito: 5 (`jose_juan__identity_sheet`, `juramia__identity_sheet`, `cueva_juramia__spatial_model`, `rancheria_wayuu__spatial_model`, `territorio_alta_guajira__environment_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Tamaños: `1024x1024` para identidades; `1536x1024` para estados, grupos y espacios.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `madre_jose_juan__identity_sheet` | PASS | lote base |
| `madre_jose_juan__state_sheet` | PASS | lote base |
| `jose_juan__state_sheet` | PASS | lote base |
| `juramia__state_sheet` | PASS | lote base |
| `jujia__identity_sheet` | PASS | lote base |
| `jujia__state_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `peones_jose_juan__group_grammar` | PASS | lote base |
| `jovenes_alijuna_cueva__group_grammar` | PASS | lote base |
| `hija_jujia__identity_sheet` | PASS_AFTER_CORRECTION | `corrections-01` |
| `serpientes_guardianas__group_grammar` | PASS | lote base |
| `caballo_prueba_jose_juan__identity_sheet` | PASS_WITH_MATERIALITY_WATCH | lote base |
| `roza_jose_juan__spatial_model` | PASS_AFTER_CORRECTION | `corrections-01` |
| `dominio_subterraneo_jujia__spatial_model` | PASS_AFTER_CORRECTION | `corrections-01` |

## Correcciones aplicadas

1. `jujia__state_sheet`: la primera versión cambiaba las dos masas largas de cabello por un moño. La corrección mantiene rostro, cabello, proporción y vestuario entre los dos estados.
2. `hija_jujia__identity_sheet`: la primera versión introducía arquitectura, plataformas, hamacas y vasijas dentro del dominio. La corrección usa únicamente una cueva natural y un sendero.
3. `roza_jose_juan__spatial_model`: la primera versión mezclaba paper craft con tierra, madera y vegetación casi fotográficas. La corrección hace visibles tubos, pliegues, cortes y capas de papel en toda la superficie.
4. `dominio_subterraneo_jujia__spatial_model`: la primera versión parecía una sección de casa de muñecas con arquitectura fantástica. La corrección sitúa la cámara dentro de una cueva natural full bleed.

Los cuatro rechazos permanecen en disco y en `selection.json`; no se sobrescribieron. El tablero final de 18 modelos está en `output/imagegen/wayuu-v3-production/el-hijo-del-condor-selected-contact-sheet.jpeg`.

## Criterios verificados

- Personajes y animales completos, identificables y repetibles.
- Continuidad explícita entre identidad y estados.
- Colectivos con número exacto y sin clones.
- Ninguna violencia o sexualidad explícita.
- Sin kanas, marcas claniles, glifos ni atributos ceremoniales inventados.
- Profundidad física por capas, aire, oclusiones y sombras proyectadas.
- Mundo full bleed; sin base, mesa, cartón soporte ni borde exterior visible.
- Los activos son modelos de Biblia, no keyframes ni escenas finales.
- No hay ingestión ni publicación automática.
