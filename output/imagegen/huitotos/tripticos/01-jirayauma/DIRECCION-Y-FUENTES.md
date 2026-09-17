# Jirayauma y la Mujer-Jaguar · tríptico 01

Primera entrega de la serie de trípticos del núcleo documentado de la biblia Huitoto. Tres archivos independientes: Entrada horizontal, Acto vertical y Huella cuadrada. Producidos mediante la API paga de OpenAI, **gpt-image-2.5-sunburst / high en las tres piezas**.

## Lectura narrativa

La adaptación congelada cuenta la huida de Jirayauma después de matar a la madre de su esposa. **La esposa, hija de la Mujer-Jaguar, se transforma y lo persigue**. No confundimos esa perseguidora con la madre. En el camino recibe ayuda de animales y finalmente acuerda con el Caimán cruzar el río: ofrece el banco de su padre para contar historias. Dïïjoma aparece en la adaptación, aunque no se representa en los momentos elegidos.

1. **Entrada — La perseguidora tiene otra sombra.** Selva cálida, cuerpos enteros a distancia, jaguar detrás del cazador. La sombra humana del jaguar es una invención editorial para hacer visible la transformación de la esposa.
2. **Acto — El cruce sobre el Caimán.** Río al anochecer, cauce amplio, Jirayauma sobre el animal, ribera de destino por delante. El traslado extraordinario es el centro de la acción.
3. **Huella — La palabra se vuelve paso.** Un banco vacío cuyo asiento se convierte en un río de papel. Es una metáfora editorial del intercambio, no un episodio literal, un símbolo tradicional documentado o una instrucción ritual.

## Continuidad y materiales

La identidad parte de seis originales propios de la biblia: P01 (Jirayauma), V01 (esposa transformada), A01 (Caimán), O04 (banco), L03 (río), L05 (monte). Las referencias completas se conservan con sus hashes. No se enviaron fotografías privadas del usuario.

La corona verde con plumas laterales cobalto, nariguera pequeña, colgantes, pintura corporal y guayuco estrecho siguen P01. El jaguar conserva anatomía felina completa y rosetas. El tratamiento exagera papel mate grueso, cantos claros, hojas plegadas, piezas levantadas, superposiciones y sombras entre estratos. El mundo ocupa todo el encuadre, sin base o marco de maqueta.

## Fuentes y límites

- Relato de trabajo: `relato-congelado.json`, copia exacta del registro 29 del corpus congelado de la biblia. Es una adaptación editorial; no se presenta como transcripción integral de una única versión oral.
- [Ficha bibliográfica de *La Mujer Jaguar y el Cerbatanero* — Biblioteca Virtual Miguel de Cervantes](https://www.cervantesvirtual.com/obra/la-mujer-jaguar-y-el-cerbatanero-873839/). Consultada el 14 de septiembre de 2026. Documenta edición de 2016, narración de José Octavio García recogida por Fernando Urbina en La Samaritana en 1971 y ocho relatos de la maleta didáctica del Museo del Oro. Esa ficha no sustituye una lectura integral de la edición.
- Selección y contratos de la biblia: `freeze.v3.json` conserva su procedencia y hash. La combinación de adornos, diseños y puesta en escena sigue siendo una propuesta visual editorial sin validación comunitaria.
- No se copiaron ilustraciones del libro ni fotogramas de sus animaciones.

## Trazabilidad técnica

`freeze.v1.json` fija intención, relato, referencias y contratos iniciales. `freeze.v2.json` registra el uso del tamaño `auto` para horizontal y vertical: el CLI sin modificar rechazó los tamaños exactos antes de hacer las dos llamadas. Los prompts siguen pidiendo las proporciones 16:9 y 9:16. Modelo y calidad se mantienen; las dimensiones reales y el cumplimiento se registran al revisar los originales. No se recortan originales para simular cumplimiento.

Esta entrega es local para revisión. Generación, revisión del agente, aprobación del usuario y publicación son estados separados. La serie restante queda planificada, no generada.

## Revisión de esta entrega

Se seleccionan Entrada v2, Acto v2 y Huella v1. Las dos correcciones recuperan la nariguera pale del personaje. El modelo entrega tamaños nativos 1672×941 y 941×1672 (aproximadamente 16:9 y 9:16), más 1024×1024; se conservan sin recorte. Se realizaron cinco imágenes API Sunburst/high, y las dos validaciones fallidas ocurrieron antes de llamadas API. La composición final acerca más las figuras que lo previsto y el Caimán avanza hacia el primer plano izquierdo: diferencias aceptadas en la revisión artística, registradas en `qa.visual.v1.json`. No se ilustra el desembarco.
