# Aplicación de la guía a la segunda prueba de Huitaca

Se leyó completa la Guía de animación por fotogramas con GPT Image 2.5 Sunburst suministrada por el usuario. Esta prueba adapta sus recomendaciones al primer keyframe b1a; no reproduce literalmente la demo del zorro ni atribuye a la guía una receta universal de continuidad.

## Cambios que sí se aplicaron

- Secciones 4 y 10: candidatos revisados antes de generar descendientes, con vuelta al último aceptado. Se conservan cinco rechazos y sus motivos. Las poses se adaptan a lo que efectivamente produjo el modelo.
- Secciones 5 y 9: cambios concretos de apoyo, talón, rodilla y pie; restricciones compatibles. Se retiraron de los prompts los porcentajes y desplazamientos por píxeles que la v1 presentaba como si garantizasen el movimiento.
- Secciones 9 y 13: máscaras locales para editar y composición para conservar las partes fijas. El fondo reconstruido bajo las piernas se genera una sola vez y queda fijo. El contorno se extrae localmente para evitar incorporar las variaciones del suelo de las respuestas crudas.
- Secciones 10 y 13: revisión de cada pose, comparación consecutiva y con la maestra, inspección de la hoja de doce cuadros y verificación de los MP4. Se informa la diferencia entre el estado solicitado y el obtenido.
- Secciones 7 y 11: coordenadas compartidas y recorte fijo; sin recentrar las siluetas, sin vibración añadida, sin interpolación ni fundidos. Doce exposiciones a 12 fps son un segundo real.

## Decisiones propias y límites

Se empleó GPT Image 2.5 Sunburst con calidad high y un recorte de trabajo fijo de 1024×1024. La salida completa conserva 1080×1920. El primer cuadro permanece original.

Extraer transparencia y mover la figura en la misma solicitud cambió su escala y añadió un collar; se rechazó. Los intentos que devolvían los pies al apoyo anterior también se rechazaron. Una edición del cuerpo completo cambió orientación y ropa. El alcance visual final se limita por ello a piernas y parte inferior de la manta: el torso, los brazos y el cabello permanecen quietos. No es una caminata final con avance del cuerpo.

Al principio se usó el original como segunda referencia. Para las ediciones pequeñas de contacto se pasó a una sola imagen, el último cuadro aceptado, manteniendo la comparación visual con el original. Se observaba retorno a las piernas de la referencia inicial. Es una decisión de esta prueba, no una conclusión general sobre Sunburst.

Durante el trabajo se corrigió la composición del recorte de revisión para usar alfa explícito, igual que el plano completo. Las entradas reales anteriores a esa corrección están preservadas en metadata/input-snapshots y relacionadas en el manifiesto. La limpieza final del suelo pertenece al montaje; no se presenta como una capacidad del prompt de mantener cada píxel.

El cuadro 12 adelanta el contacto respecto a la pose en vuelo que se pidió. Los bordes de la manta y la rigidez del torso todavía requieren trabajo para un resultado final. La guía no garantiza coherencia ni precisa umbrales numéricos validados; esta entrega documenta el resultado del experimento.

## Fuentes contrastadas

- Documento aportado: /Users/alegut/Downloads/Guia_Sunburst_Stop_Motion.docx, secciones 4, 5, 7, 9, 10, 11 y 13.
- [OpenAI Image prompting](https://developers.openai.com/api/docs/guides/image-prompting): edición concreta, referencias, comparación y composición cuando una región deba conservarse.
- [Flixly ejemplo secuencial](https://www.flixly.ai/blog/stop-motion-chatgpt-images-2-5): una acción pequeña por exposición, cuadro anterior y revisión antes de exportar.
