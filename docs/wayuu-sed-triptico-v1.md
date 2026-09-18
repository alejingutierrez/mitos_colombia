# La sed de los forasteros · tríptico V1

Fecha: 2026-09-06.
Estado: publicado y verificado; revisión responsiva aprobada con notas de encuadre.

## Relato y procedencia

Se leyó íntegramente el relato público congelado y el expediente del lote 16.
SHA del contenido: `201aebbdfc08bb25f1f5fbeab2f3ea5a57f1128a82df48e65cc1ae6f0a88bc3f`.

La fuente primaria consultada es [Milciades Chaves, 1946, p. 312](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1),
PDF índice 8: dos comerciantes con panela se detienen por sed y cansancio en
Utta, cerca de Katetamana, y quedan convertidos en piedra. No identifica nombres,
vestuario, embalaje, medio de transporte ni una raza de los personajes.
No se reproduce el esencialismo racial del comentario del recopilador.

El relato público amplía búsqueda de agua, encuentro con habitantes, pérdida
del camino y contraste entre mercancía y agua. Se registra la diferencia; no se
modifica el texto durante la campaña. La fuente visible titula «La sed de los
civilizados», mientras la página mantiene el slug heredado y el título corregido.
No se inventa una segunda línea independiente de transmisión.

## Memoria visual antes del prompt

Se inspeccionaron las dos imágenes públicas en:
`output/playwright/wayuu-campaign/sed-before-0.png` y `sed-before-1.png`.
Se conservan capas de papel y paleta cálida/fría. Se rechazan figura sobrenatural
femenina, rostro en árbol, espirales ornamentales, follaje tropical abundante
y grandes discos solares. No están descritos en el breve registro.

Se buscó iconografía específica de Utta y los comerciantes con panela.
Se identificó [Guajira, memoria visual](https://babel.banrepcultural.org/digital/collection/p17054coll18/id/434/)
como contexto regional ya señalado por la Biblia. No se pudieron inspeccionar
sus imágenes en esta consulta; no se presenta como referente visual examinado
ni como retrato de estos personajes. Consulta parcial, sin afirmar saturación.
El PNG antiguo adicional permanece inventariado sin revisión de píxeles.

## Biblia y tres funciones

Se inspeccionaron los seis modelos aprobados y se verificaron sus hashes:
dos identidades, dos estados, carga de panela y Utta. Se conservan prendas
distintas: camisa ocre/pantalón carbón/sombrero ancho para el primer comerciante;
camisa azul/tirantes/pantalón terracota/gorra para el segundo. No son uniformes
étnicos ni retratos documentales. Se simplifican las caras a recortes casi planos.

- H: dos comerciantes y cargas de panela; los bultos proyectan sombras de
  vasijas inexistentes. La mercancía no puede darles agua.
- V: posturas de descanso; pliegues de prendas continúan en estratos del suelo.
  Petrificación como transformación material, sin dolor, cuerpos dañados o deidad.
- S: una panela con vacío pasante de gota. Símbolo de ausencia, sin escena o agua.

Sombras de vasija, transición por pliegues y gota vacía son recursos editoriales;
no se afirman como objetos ancestrales, ritos o episodios textuales.

## Producción y parámetros

- Plan: `content/mitos-visuales/wayuu.sed.triptico.v1.json`.
- Paquete: `content/mitos-visuales/_openai/wayuu/la-sed-da-los-civilizados/wayuu-sed-triptych-01/`.
- Prompts congelados: `prompts/entrada.prompt.txt`, `prompts/acto.prompt.txt`, `prompts/huella.prompt.txt`.
- OpenAI API, CLI oficial de imagegen, `gpt-image-2`.
- Cuenta autorizada desde `.env` ignorado; no secretos en documentos.
- Texto sin referencias locales adjuntas; no generación local de sustitutos.
- H high 1536×864; V medium 864×1536; S medium 1024×1024; JPEG.
- Salidas: `output/imagegen/wayuu/triptychs/wayuu-sed-triptych-01/`.

## Resultado y aprendizaje

Se generaron **5 imágenes únicas: 2 H, 1 V y 2 S**. H01 se descartó por
escala grande y gorra convertida en sombrero; S01 por textura de alimento
fotografiado. Se conservaron V01 y las correcciones H02/S02. No se cuentan
preparaciones, capturas o subidas como generaciones ni se infiere facturación.

La corrección está en `content/mitos-visuales/wayuu.sed.triptico.v1.1.json` y
el paquete `wayuu-sed-triptych-02-hs`. Los prompts finales se enlazan desde
[la selección](../content/mitos-visuales/_openai/wayuu/la-sed-da-los-civilizados/wayuu-sed-final-selection/selection.json); junto a ella queda `iteration-audit.json`,
con imágenes únicas y hashes de archivo y prompt. El QA está en
`content/mitos-visuales/_openai/wayuu/la-sed-da-los-civilizados/QA.md`.
La selección prepublicación se conserva inmutable; el recibo acredita publicación.

Aprendizajes: describir panela como construcción de hojas mates con cantos,
no grano alimentario; diferenciar visera corta de ala circular; comprobar escala
real y no atribuir cumplimiento exacto a un porcentaje escrito en el prompt.
Las figuras finales son mayores que el octavo solicitado, pero permiten el
plano abierto y espacio de título. La magia procede de sombras imposibles,
continuidad ropa–tierra y ausencia de agua, no de añadir una deidad al relato.

## Publicación y verificación

- Recibo: [ola 14](../content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-14/la-sed-da-los-civilizados.json), mito 330.
- Tres URLs nuevas como principales; archivos anteriores H/V siguen disponibles.
- Fila vertical nueva 671; fila anterior 348 preservada. Archivo histórico remoto verificado.
- Bytes originales conservados; SHA de H/V/S coincide en remoto. Texto intacto.
- Purga de la página y listado confirmada en el recibo.
- [Verificación remota](../content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-14.json): base, tres archivos nuevos,
  dos anteriores, historial vertical, archivo remoto y HTML aprobados.
- [Revisión de navegador](../content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-14.json): seis vistas cargadas en 1440 y 390 px,
  sin desbordamiento horizontal ni errores de consola; cuatro avisos de precarga CSS.
- Título no cubre comerciantes ni transformación. La portada de escritorio
  recorta ligeramente el extremo derecho de una sombra de vasija; original e
  imagen interior conservan la composición. Símbolo reconocible en tamaño pequeño.

La reconstrucción Docker y HTTP local 200 se registraron durante esta producción.
El cierre documental vuelve a ejecutar las 66 pruebas relacionadas y `git diff --check`.
No se hace commit, push ni despliegue de código. La campaña completa continúa.
