# El origen del fuego · tríptico V1

Fecha: 2026-09-06.
Estado: tríptico seleccionado, publicado de forma aditiva y verificado en producción.

## Relato y variantes

Se leyó íntegra la copia pública congelada y el expediente del lote 15.
Se contrastaron en [Finol, Mito y cultura guajira](https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf)
el descanso de Siki (p. 109) y el traslado de dos brasas por Junuunay (pp. 60–62).
Son versiones paralelas: no se representa un robo de Junuunay a Siki.
La prosa pública combina motivos a pesar de distinguir variantes en Historia.
Esta campaña no modifica texto, atribuciones ni geolocalización.

SHA del contenido objetivo: `3f42d4dafc69dc59021c36cfb6024033597d24c0c92f96b50b0ae0db314e819e`.

## Memoria visual e investigación externa

Se inspeccionaron ambas imágenes actualmente públicas:
`output/playwright/wayuu-campaign/fuego-before-0.png` y
`output/playwright/wayuu-campaign/fuego-before-1.png`.
Se aprovechan profundidad de cueva, sombras entre planos y contraste cálido/frío.
Se descartan torso descubierto, cenefas sin fundamento, retratos volumétricos,
deidad monumental barbada con aureola, selva y plantas ornamentales genéricas.

Se localizó la serie contemporánea [Venezuelan Myths, Heymau, 2015](https://heymau.com/works/vochi/),
que incluye Mareiwa y el fuego. La página se leyó, pero la imagen específica devolvió
un error de acceso en la herramienta web. No se declara inspeccionada ni se usa
como referente visual aprobado. La serie reúne pueblos distintos y tampoco sería
canon cultural Wayuu. No se presupone permiso de reproducción. Búsqueda parcial,
no saturación de iconografía histórica. El PNG antiguo adicional sigue sin inspección.

## Biblia y dirección

Se inspeccionaron y verificaron contra SHA los seis modelos utilizados:
Siki identidad/estados, Junuunay identidad, morral/dos brasas,
varitas y Caujaro. Fuente: selección aprobada del lote 15.

- Horizontal: descanso de Siki; una llama horizontal se contiene dentro de la
  trama intacta de su chinchorro. Metáfora de fuego-persona, no incendio.
- Vertical: Junuunay lleva dos brasas en un pequeño morral; capas de noche
  se apartan como materia. Metáfora del fuego que empieza a circular.
- Cuadrada: dos maderas separadas; una guarda una llama plegada dentro de su
  veta intacta. Síntesis simbólica, no tercera escena ni tutorial.

Prendas completas y diferenciadas; rostros reducidos a recortes casi planos.
La simplificación no elimina la profundidad del mundo, construida por distancias,
aire, oclusiones y sombras. Sin cartón exterior, base, marco, violencia o sexualización.

## Producción reproducible

- Plan: `content/mitos-visuales/wayuu.fuego.triptico.v1.json`.
- Paquete: `content/mitos-visuales/_openai/wayuu/el-origen-del-fuego/wayuu-fuego-triptych-01/`.
- Prompts: `prompts/entrada.prompt.txt`, `prompts/acto.prompt.txt`, `prompts/huella.prompt.txt` dentro del paquete.
- Proveedor: OpenAI API, CLI oficial de la habilidad imagegen, modelo `gpt-image-2`.
- Cuenta: `OPENAI_API_KEY` de `.env` ignorado, ya autorizada; sin secretos en expediente.
- Generación desde texto: no se adjuntan ni suben imágenes locales.
- Horizontal: 1536×864, high. Vertical: 864×1536, medium. Cuadrada: 1024×1024, medium.
- Salidas: `output/imagegen/wayuu/triptychs/wayuu-fuego-triptych-01/`.
- Se conservará cada salida y su prompt; generaciones, selección y publicación se contabilizan por separado.

## QA e iteraciones reales

Cinco generaciones: 3 horizontales, 1 vertical, 1 cuadrada. Se conservan
los cinco originales y sus prompts; no se cuentan capturas, preparaciones o
subidas como generaciones. Tiempos CLI: H01 97 s, V01 48 s, S01 47,6 s,
H02 80,8 s, H03 77,3 s. No hay datos de facturación ni request IDs.

H01 tenía encuadre cerrado y suelo poco inequívoco de papel.
H02 abrió el plano, pero introdujo una plataforma debajo del refugio.
H03 elimina ese soporte mediante terreno continuo y arquitectura que continúa
fuera de cuadro. La trama del chinchorro contiene el fuego y oculta parcialmente
las prendas inferiores; no se declara detalle histórico que la imagen no permita
ver. La arquitectura ocupa más que el porcentaje pedido, pero no tapa la acción
con el título. V01 y S01 funcionan desde su primera salida.

Selección final:

- H: `output/imagegen/wayuu/triptychs/wayuu-fuego-triptych-03-entrada/entrada.jpeg`.
- V: `output/imagegen/wayuu/triptychs/wayuu-fuego-triptych-01/acto.jpeg`.
- S: `output/imagegen/wayuu/triptychs/wayuu-fuego-triptych-01/huella.jpeg`.

Planes de corrección: `wayuu.fuego.triptico.v1.1.json` y
`wayuu.fuego.triptico.v1.2.json`, en `content/mitos-visuales/`.
Los prompts H correspondientes están en los paquetes
`wayuu-fuego-triptych-02-entrada` y `wayuu-fuego-triptych-03-entrada`.

Selección y hashes: `content/mitos-visuales/_openai/wayuu/el-origen-del-fuego/wayuu-fuego-final-selection/selection.json`.
Auditoría: `wayuu-fuego-final-selection/iteration-audit.json`.
QA por formato: `content/mitos-visuales/_openai/wayuu/el-origen-del-fuego/QA.md`.
La selección queda congelada como evidencia anterior a publicación; el recibo
es la autoridad del estado publicado.

## Publicación y verificación

Ola 13, mito 321. Tres subidas con nombres nuevos; no recorte ni recomprensión
de originales. Fila vertical antigua 342 preservada, nueva 670. Dos imágenes
públicas anteriores accesibles. Archivo histórico remoto comprobado; contenido
narrativo conserva su SHA y caché purgada.

- Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-13/el-origen-del-fuego.json`.
- Verificación: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-13.json`, passed.
- Navegador: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-13.json`, passed_with_notes.
- Página: https://www.mitosdecolombia.com/mitos/el-origen-del-fuego

Las tres imágenes remotas coinciden byte por byte con la selección. DB e HTML
apuntan a las URLs nuevas. Se cargan las seis instancias a 1440/390 px, sin
desbordamiento horizontal ni errores de consola. Tres advertencias de precarga
CSS quedan registradas. Se inspeccionaron portada de escritorio, portada móvil
y símbolo pequeño: acción y símbolos visibles sin colisión con títulos.

Docker reconstruido y ruta local HTTP 200; 66 pruebas relevantes aprobadas y
`git diff --check` limpio. No commit, push, despliegue de código ni cambio de
secretos. Campaña acumulada: 14/27 mitos, 42 imágenes principales nuevas,
28 imágenes previas preservadas; 13 mitos pendientes.

## Aprendizaje transferido

Un refugio pequeño y completo puede inducir una base de maqueta. Pedir continuidad
entre suelo, postes y arquitectura evitó ese resultado sin cambiar el motivo
del fuego contenido. El aprendizaje está añadido a
`docs/prompting-realismo-magico.md`; no obliga a cortar todas las casas igual.
