# Reproducción de trípticos Wayúu · dirección enriquecida

7 de septiembre de 2026. El usuario respalda el camino del piloto02 y pide trasladarlo a todos los trípticos Wayúu, mostrando primero el del primer mito. Alcance de referencia: 27 mitos, 81 piezas; se mantiene el mismo conjunto de la campaña anterior, no se amplía el corpus. Esta entrega produce Arámai. Los keyframes quedan pospuestos, sin borrar sus diez imágenes ni su guion.

## Principio para la nueva tanda

**Sencillez de las figuras; riqueza de las relaciones.** La imagen debe mostrar una anomalía concreta dentro de la vida cotidiana y tener profundidad material, acción o consecuencia legible y detalles pertinentes. No volver a porcentajes arbitrarios de vacío ni sustituir el prodigio por estrellas de fondo. Tampoco repetir en todos los mitos las noches, vasijas o chinchorros de Arámai: cada relato debe aportar su propio vehículo mágico.

Antes de cada mito: relato completo y procedencia → inventario de personas/criaturas/objetos/entornos/estados → modelos pertinentes y referentes actuales/históricos → decisión por formato → contrato de magia y tesis simbólica → prompt congelado → generación → inspección visual → selección → publicación sólo como fase separada. La dirección aprobada no certifica cada detalle generado ni sustituye la investigación.

## Arámai: funciones distintas

- Horizontal: petición y escasez, enramada con un territorio nocturno mucho mayor de lo que cabe bajo su techo. High, 1536×864. Escena amplia, foco a la derecha y espacio editorial de menor contraste a la izquierda, sin vaciar todo el mundo.
- Vertical: segunda petición impotente y noche en otros espacios domésticos, con personas vivas acompañándose. Medium, 864×1536. Los umbrales contienen patios profundos, no paneles azules; no conectores ni vectores médicos inventados.
- Cuadrada: peso irreversible de la ausencia en un chinchorro vacío. Medium, 1024×1024. Riqueza dentro de trama, sombra y concavidad; ningún reparto de personajes, edificios ni tercera escena.

Estas noches son licencias visuales, no apariencias tradicionales de Mareiwa/Wanurü ni hechos astronómicos del relato. Se conserva el relato objetivo y su separación de núcleo histórico/ampliación publicada, sin cambiar el texto del sitio. La variante completa y las fuentes quedan congeladas por el preparador existente.

## Lo que se corrige del piloto02

El usuario aprobó el camino creativo, no hizo canon de cada adorno. Conservar vestuario amplio y completo; evitar ornamentos geométricos inventados en vasijas/paredes, rosetas/agaves y cactus genéricos. Cámara ambiental primero, tamaño humano pequeño y rostro casi plano. Trama y separación de capas aportan riqueza sin esculpir caras o inundar de fragmentos el terreno.

## Herramientas y registro

Se utiliza el preparador existente scripts/mitos/prepare-openai-triptych.mjs con plan versionado, contrato narrativo, siete referentes inspeccionados, modelos de Biblia, memoria visual derivada y política high/medium/medium. No se modifica ni debilita su validación. Paquete: content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-17-rich-01. Generación con imagegen vía CLI oficial y API gpt-image-2, cuenta .env ya autorizada, sin subir referencias locales ni fabricar raster local. Cada formato es una generación nueva, no recorte de keyframe.

La biblioteca derivada visual-memory.aramai.json preserva el inventario de Arámai y añade/revisa sólo los referentes vistos. No altera decisiones globales ni borra versiones. Scope conserva los 27 IDs de origen. Aprobación de muestra, estado de reproducción y publicación se registran por separado; no se declara cerrada la campaña con un solo mito.

## Aprendizaje de la primera ejecución

La primera horizontal convirtió al personaje en una figura cercana, aproximadamente 45% de la altura, aunque el prompt pedía 20%. Decir «gran plano general» y detallar simultáneamente gestos, ropa y techo no aseguró la distancia. La corrección parcial rich-02 vincula la cámara a elementos verificables: cubierta completa separada del borde, edificio en distancia media, ningún humano en primer plano y rostro minúsculo sin detalle. Se conserva la misma acción y el mismo prodigio. Es una nueva generación high, no un recorte, y la primera se preserva.

La revisión visual de acto y huella no abre otra generación: sus desviaciones menores se documentan en QA y no se transfieren como canon cultural. Esta ronda comprende tres composiciones iniciales y una corrección horizontal: cuatro llamadas para tres piezas de muestra, no cuatro imágenes finales ni nuevas generaciones de keyframes. Los tiempos del CLI se registran sin inferir tokens o coste que la herramienta no devuelve.
