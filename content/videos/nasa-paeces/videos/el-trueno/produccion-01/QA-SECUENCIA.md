# Revisión del piloto El Trueno

13 de septiembre de 2026. 14 keyframes revisados individualmente y en lámina completa. 16 generaciones: 14 seleccionadas, dos versiones rechazadas conservadas. Ninguna imagen rechazada alimentó los cuadros siguientes.

- Fuente: una versión de Martín Kuskue; cierre y apariencia humana declarados como decisiones de adaptación. No se fusionaron episodios de inundación o rapto.
- Continuidad: anciano de capa oscura y sombrero constante; dos autoridades C02 en visita y contacto; C01 separado para los médicos. Las varas no se transfieren al Trueno ni la boleadora a la visita.
- Acción: una boleadora lanzada, dos varas, dos puntos de agua, cuatro pies en tierra. No se añadieron remedios, diagramas rituales, respuesta hablada ni un castigo final.
- Cámara: detalle inicial, escala territorial, lanzamiento en contrapicado, aviso gestual, retirada, cenital corregido, marcha lateral, conjunto de contacto, detalle y pausa humana. B6a sigue mostrando cuerpo entero pese a la intención inicial de plano medio; su escala de figura, mirada y fondo cerrado cumplen la función y se acepta con esa nota.
- Cierre: b7b recibe b5b como referencia de retorno además de los dos cuadros anteriores. Conserva la orilla y el agua, elimina varas, reflejos y ondas de contacto. El cambio es relacional, no otro acontecimiento mágico.
- Material: predominan recortes, plegados y planos de papel. Algunos bordes de niebla y texturas finas heredadas son más suaves; no impiden continuidad en esta selección. No convertir esta aceptación en una certificación cultural.
- Ritmo: 135 palabras; 84 s con pausas provisionales. La revisión futura con voz decidirá si acortar el sendero vacío o la vista de laguna al final. La eficacia de retención no ha sido medida.

## Verificación técnica

La comprobación offline validó 14 originales PNG, dimensiones 940/941 × 1672, proporción cercana a 9:16, sin recortar, línea temporal continua, fuente y plan congelados, prompts y 55 referencias con hashes coincidentes. Informe: `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/verification.json`.

El visor local en `http://127.0.0.1:8897/` se abrió en navegador real. Se comprobó el avance automático de b1a a b1b, pausa, avance manual a b2a, cierre, acceso directo a b7b y botón siguiente desactivado al llegar a 14/14. Lectura a 451 px: `scrollWidth === clientWidth === 451`. Imágenes visibles cargadas; las lejanas usan carga diferida. Consola: cero errores o advertencias capturados en esta prueba. Se vieron también las imágenes originales y la lámina completa fuera del navegador.

Docker se reconstruyó siguiendo AGENTS.md y el servicio `mitos_colombia-web-1` quedó `running`, puerto 3003. La entrega audiovisual usa un visor local independiente en 8897. No hubo despliegue de la app ni publicación audiovisual.

## Reproducción local

Desde la raíz del repo:

```sh
node content/videos/nasa-paeces/videos/el-trueno/preproduccion-01/tools/render-review.mjs
python3 -m http.server 8897 --bind 127.0.0.1 --directory output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01
```

El renderizador es offline: valida, crea miniaturas/lámina y escribe el visor; no genera arte. `record-keyframes.mjs` conserva el registro de solicitudes e ingesta del piloto. Los prompts efectivos por solicitud están en `produccion-01/*.request.json`; el plan y sus prompts base están en `preproduccion-01/`. La primera solicitud fue transcrita exactamente después de su ejecución; las demás se guardaron antes de llamar a la herramienta. Modelo, calidad y precio del generador integrado no están expuestos por su interfaz.
