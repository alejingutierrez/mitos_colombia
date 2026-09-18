# El Trueno · revisión de maqueta de papel

Se recrearon únicamente B1A y B1B por la observación del usuario: los primeros cuadros parecían ilustración y faltaba una maqueta tridimensional de papel cortado. Los nuevos candidatos están revisados editorialmente y pendientes del criterio del usuario.

## Dirección aplicada

- Construcción antes que textura: dedos de tiras dobladas, ropa hecha de paneles, cantos visibles y huecos reales entre piezas.
- Relieve del escenario: camino en capas gruesas, montañas con caras plegadas, hojas individuales y agua de papel superpuesto.
- Fotografía de miniatura: luz lateral que revela sombras de contacto y profundidad de campo que separa las figuras del fondo.
- Mantener acción y continuidad: una mano y una vara en B1A; dos caminantes con dos varas sobre camino seco en B1B; paleta azul, verde y ocre.

Son imágenes generadas con apariencia de maqueta fotografiada. Se utilizó `image_gen.imagegen`; el modelo exacto y la calidad no fueron expuestos por la herramienta. Dos llamadas, dos PNG originales de 941 × 1672, sin recorte.

## Archivos y trazabilidad

Los archivos `b1a.request.json` y `b1b.request.json` contienen los argumentos exactos guardados antes de cada generación. B1A usa su versión anterior como referencia narrativa. B1B usa el nuevo B1A como referencia de material y el antiguo B1B para composición y vestuario.

`selection.json` registra hashes, referencias y originales sustituidos. La selección de `produccion-01` se mantiene como registro histórico de generación. Los otros doce cuadros conservan sus referencias originales; esta revisión no certifica que toda la secuencia tenga ya el nuevo estilo.

El visor activo incorpora estas dos sustituciones y ofrece enlaces a las versiones anteriores. Para reconstruirlo:

```sh
node content/videos/nasa-paeces/videos/el-trueno/preproduccion-01/tools/render-review.mjs --revision=revision-maqueta-02
```

Salida: `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/index.html`. El informe `verification.json` verifica la selección original y las dos sustituciones por separado.
