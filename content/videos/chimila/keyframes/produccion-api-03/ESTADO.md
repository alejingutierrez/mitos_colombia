# Estado de producción · Chimila

Cierre local: 13 de septiembre de 2026. **23/23 mitos y 157/157 maestros seleccionados**, sin cuadros pendientes de generación dentro del plan congelado.

- 149 nuevos seleccionados; 8 anteriores de la Gran Cacica conservados.
- 37 renders nuevos no seleccionados conservados con motivo y trazabilidad. Total: 186 renders CLI exitosos nuevos, no un conteo independiente de peticiones HTTP ni de facturación.
- 149 nuevos cuadros inspeccionados individualmente y 47 hojas de secuencia inspeccionadas para los 22 mitos nuevos.
- Dos cuadros anteriores tienen aprobación histórica del usuario; los otros 155 quedan pendientes de aceptación. No hay certificación cultural comunitaria.
- Maestros JPEG nativos 1024×1536, 2:3, sin recorte. Adaptación 9:16, animación, sonido y publicación de keyframes pendientes.

## Proceso y concurrencia

API OpenAI `gpt-image-2.5-sunburst`, medium, edición con referencias del mismo mito; selección y revisión visual antes de avanzar al siguiente cuadro dependiente. Se trabajó con un máximo de tres mitos simultáneos y orden secuencial dentro de cada mito. Las correcciones puntuales resolvieron duplicados, acción anticipada, objetos y continuidad animal.

Duraciones CLI observadas en los 186 renders: mediana 21 s; percentil 95, 26,8 s; media 29 s. Hubo dos valores largos de 500,5 s y 521,4 s; máximo 521,4 s. La suma de duraciones CLI fue 5.395,1 s y no equivale al tiempo de pared de toda la campaña. Estos datos no prueban un límite de alta concurrencia de la API ni un costo; tampoco instrumentan reintentos HTTP internos.

## Integridad y límites

La auditoría estricta valida 157 maestros, 23 mitos, tamaño, formato, bytes y SHA-256 de imágenes, prompts e insumos; 136 archivos protegidos permanecen intactos: 54 de biblia, 69 de trípticos, 8 maestros anteriores y 5 documentos/datos canónicos. El informe de verificación complementa este control con intermedios, hojas PNG y enlaces de entrega.

La apariencia de maqueta de papel es generada por IA, no fotografía de un objeto artesanal real. Persisten pequeñas variaciones de rostros, cabello y figuras secundarias; algunas barbas en Yunarí no deben interpretarse como rasgo étnico validado. La voz animal de un cuadro de caimán usa tres pequeñas cuñas de papel como recurso editorial, no glifo cultural documentado. Algunas vistas de contexto son puestas en escena editoriales. No se inventaron desenlaces felices para ocultar violencia: los impactos se mantuvieron fuera de campo.

No se cambió ni publicó el sitio web, no se desplegó ni se creó una aplicación. El corte anterior de trípticos API09 permanece documentado por separado. No se recreó Docker porque este trabajo solo produjo imágenes y documentación offline.

[Galería completa](GALERIA-COMPLETA.md) · [Resultado](result.complete.v1.json) · [Verificación de entrega](verification.complete.v1.json) · [Selección](selection.complete.v1.json) · [Revisión](review.complete.v1.json) · [Renders](jobs.complete.v1.json) · [Intermedios](intermediates.v1.json).
