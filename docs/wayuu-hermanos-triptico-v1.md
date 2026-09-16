# Los dos hermanos: lealtad, pérdida y represalia

## Investigación y decisiones previas

La unidad es este mito, no una variante de Kuriruputá. Su relato público completo está congelado en la campaña con SHA-256 `70cf4335b1397da54f1328ef97c76fde97ca7bf6ab1c3ec8ab58906cb49b5a5a`.

Se contrastó con [Chaves, 1946, sección X, pp.317–319](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1). La fuente histórica y la edición no emplean siempre las mismas armas ni el mismo cierre. Se ilustra la edición pública sin cambiarla: la consideración de las consecuencias es lectura editorial, no una transcripción del cierre histórico.

La hermana sigue siendo protagonista capaz; no se presenta la represalia como victoria admirable. La ausencia del hermano no se sustituye por un regreso vivo. La mula y el perro se conservan como participantes concretos; el cuerpo transportado queda fuera de imagen por decisión expresa del usuario.

Se inspeccionaron cuatro identidades de la Biblia y las dos imágenes anteriores del sitio. De estas últimas se rescataron la noche azul, la mujer protagonista, el rebaño y los planos del paisaje. Se descartaron el foco amenazante del rifle, adversarios, encuadres cerrados, cambios de vestuario, ornamentos no sustentados y arquitectura cónica.

## Dirección de las tres piezas

1. Horizontal: el regreso de la mula y el perro ante la hermana; el llanto se vuelve una conexión material a través del patio.
2. Vertical: el ganado recuperado no recompone la ausencia. El patio se desteje entre el corral lleno y el chinchorro vacío, junto a la camisa doblada del hermano.
3. Cuadrada: una sola flecha curvada hacia su propia pluma, sin cerrar el círculo ni representar impacto.

Las operaciones imposibles son metáforas editoriales, no episodios, ritos ni símbolos tradicionales certificados. No hay escenas violentas, cuerpos, daño o sexualidad. El número de animales del corral es reparto visual, no reconstrucción de un censo del relato.

## Método y archivos

Relato y fuente → entidades → Biblia y memoria visual → función por formato → prompts inmutables → generación remota OpenAI → inspección de resultados → corrección sólo del formato fallido → selección con hashes → subida aditiva → verificación pública.

Modo: API OpenAI mediante CLI oficial de imagegen, `gpt-image-2`, sin subir imágenes locales de referencia. Horizontal 1536 × 864 high; vertical 864 × 1536 medium; cuadrada 1024 × 1024 medium.

Plan y contrato: `content/mitos-visuales/wayuu.hermanos.triptico.v1.json`. Prompts y referencias congeladas: `content/mitos-visuales/_openai/wayuu/los-dos-hermanos/wayuu-hermanos-triptych-01/`.

## Resultado e iteraciones verificadas

Publicado y verificado en [Los dos hermanos](https://www.mitosdecolombia.com/mitos/los-dos-hermanos). Cuatro imágenes generadas: horizontal 2, vertical 1, cuadrada 1. Se conservan la primera horizontal descartada y las dos imágenes públicas anteriores. No se cambió el relato.

La primera horizontal cerraba el plano y daba al suelo textura fotográfica. La segunda reduce la figura a aproximadamente un sexto de altura y explicita capas finas de papel en primer término. También elimina la camisa del hermano que pertenecía a la vertical: el contrato compartido había contaminado la escena anterior. Aprendizaje: compartir identidad y vestuario, pero delimitar por escena los objetos que corresponden a momentos distintos.

Límites registrados: el lacrimal de la mula no se distingue anatómicamente a pequeña escala; las viviendas son más densas de lo previsto. La vertical cambia el reparto numérico del ganado, añade un segundo arco apoyado y cruza algunas fibras sobre el vacío, sin cerrarlo ni mostrar violencia. Estos detalles no cambian la función narrativa elegida.

Selección, prompts exactos y auditoría: `content/mitos-visuales/_openai/wayuu/los-dos-hermanos/wayuu-hermanos-final-selection/`. La horizontal procede del paquete `wayuu-hermanos-triptych-02-entrada`; vertical y cuadrada del `wayuu-hermanos-triptych-01`. El conteo usa archivos únicos por SHA-256, no llamadas fallidas ni facturación inferida.

Publicación aditiva: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-04/los-dos-hermanos.json`. Prueba de base, relato, bytes nuevos, imágenes antiguas y archivo histórico remoto: `verification-wave-04.json` en la misma raíz de campaña. Revisión de las tres funciones a 1440 y 390 px: `browser-review-wave-04.json`; sin desbordamiento ni errores de consola, con dos advertencias de CSS precargado de la plantilla existente.

## Imágenes finales

![Entrada horizontal](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-hermanos-triptych-02-entrada/entrada.jpeg)

![Acto vertical](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-hermanos-triptych-01/acto.jpeg)

![Huella simbólica](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-hermanos-triptych-01/huella.jpeg)
