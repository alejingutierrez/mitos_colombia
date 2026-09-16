# QA · producción Wayuu V3 · lote 05

## Alcance

- Mito: `el-indio-jaichuasay`.
- Modelos nuevos: 5.
- Modelos aprobados reutilizados: 2 (`arco_flechas__object_sheet`, `rancheria_wayuu__spatial_model`).
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; generación desde texto.
- Estado: `QA_PASS_AFTER_CORRECTION`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `jaichuasay__identity_sheet` | PASS | lote base |
| `jaichuasay__state_sheet` | PASS_AFTER_CORRECTION | `corrections-02` |
| `venado_guia_jaichuasay__identity_sheet` | PASS | lote base |
| `serrania_transformacion_jaichuasay__spatial_model` | PASS_AFTER_CORRECTION | `corrections-01` |
| `serrania_macuira__environment_model` | PASS_AFTER_CORRECTION | `corrections-01` |

## Investigación aplicada

La dirección de Macuira contrasta el contrato narrativo con la ficha oficial del [Parque Nacional Natural Macuira](https://www.parquesnacionales.gov.co/nuestros-parques/pnn-macuira/): matorral espinoso, bosque seco, bosque de galería y bosque nublado localizado, con agua superficial y subterránea asociada al mosaico. No se visualizan sitios sagrados, rutas de acceso, pictogramas ni coordenadas del mito.

## Correcciones aplicadas

La primera hoja de estados introdujo una enramada circular genérica y cambió el soporte del hombro por una manta. La primera corrección retiró la arquitectura, pero acortó el cabello y mantuvo una tela larga. La segunda fija dos figuras humanas con la misma cola baja, rostro, camisa oliva, pantalón arena y sandalias; la banda queda limitada al brazo superior, sin lesión visible. El venado conserva anatomía natural y una sola capa ocre en la pata funciona como continuidad material editorial, nunca como marca cultural.

El primer umbral tenía roca estratificada pero suelo y pastos demasiado fotográficos. La corrección construye sendero, roca, ramas y vegetación con hojas, pliegues y cantos de papel visibles.

La primera Macuira exageró la escala montañosa y produjo un río ancho. La corrección usa una serranía baja y compacta, bosque nublado localizado y una cinta de agua estrecha y parcialmente oculta. Todas las primeras versiones permanecen en disco y en `selection.json`.

El tablero final de 7 modelos está en `output/imagegen/wayuu-v3-production/el-indio-jaichuasay-selected-contact-sheet.jpeg`.

## Criterios verificados

- Identidad individual completa antes de representar la metamorfosis.
- Dos cuerpos humanos coherentes y un único venado, sin híbrido o morphing anatómico.
- Herida narrada sin sangre, lesión abierta, cuerpo vulnerado o violencia explícita.
- Venado guía independiente, natural y sin señales mágicas genéricas.
- Umbral territorial tridimensional, full bleed y completamente construido en papel.
- Macuira como ecotono localizado, no selva uniforme, cordillera andina ni oasis genérico.
- Sin bordes de maqueta, cartón soporte, mesa, texto, símbolos o kanas inventados.
- No hay ingestión ni publicación automática.
