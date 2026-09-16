# Biblia Nasa–Paeces: cierre de producción API 02

12 de septiembre de 2026. Producción editorial completa: 60/60 unidades, 26 mitos. Esta selección reemplaza los candidatos de API 01 como referencia de trabajo; el historial anterior se conserva.

## Entregables

17 personajes, 7 entidades/animales, 10 paisajes maestros, 8 variantes, 12 packs de utilería y 6 packs de reparto. Cada unidad puede contener varias vistas o elementos; 60 es el número de unidades de referencia, no el número de objetos representados.

La biblia completa está en `../BIBLIA-NASA.md`. El inventario y las fuentes están en `../inventory.v2.json`; la investigación, en `../DOSSIERS-20260912.md`. `selection.v2.json` contiene imágenes seleccionadas, hashes, estados, fuentes, decisiones y linaje. `review.v1.json` conserva 60 aceptaciones y 16 rechazos. `audit-result.v1.json` conserva el resultado de la verificación offline.

Los originales viven en `output/imagegen/nasa-paeces/biblia/produccion-api-02/` desde la raíz del proyecto. Las hojas de contacto y el atlas son derivados de revisión; sus etiquetas no forman parte de los originales.

## Proceso mejorado

Se congeló el corpus, se agrupó por seis ciclos y se separaron personajes, entidades, estados y escenarios para evitar duplicación. La recopilación de Villa Posse depende de Bernal: no se cuenta como otra voz narrativa independiente. Las fuentes contemporáneas sitúan territorio y material, pero no rellenan silencios de los relatos. Las versiones e informantes se mantienen separados.

Se detectó que las restricciones auxiliares no entraban en el prompt efectivo al usar `--no-augment`. API 02 incorpora todas las reglas de material, identidad, cantidad y exclusión dentro del prompt enviado. Los prompts efectivos y las correcciones se conservan.

Los 52 maestros independientes se produjeron antes de las ocho variantes dependientes. Cada variante utiliza un maestro aceptado. Los rechazos no se reutilizan como referencias futuras; solo se permiten como entrada de su propia reparación. La revisión individual y conjunta corrigió niebla algodonosa, número de orejas/dientes, estados del ojo, color de la serpiente y petrificación, entre otros defectos.

## Concurrencia y rendimiento

Se probaron lotes con concurrencia 3 y después 4. Hubo 76 solicitudes exitosas: 60 candidatos iniciales y 16 correcciones editoriales. Cero errores de API observados y cero reintentos automáticos. Quince unidades necesitaron reparación; una requirió dos pasadas. Primera aceptación: 45/60, 75 %.

Generaciones observadas: 13,1–20,6 s por solicitud. Ediciones observadas: 16,2–23,1 s. Son tiempos reportados por el cliente, no una promesa de rendimiento futuro. Los lotes tienen distinta complejidad: no constituyen un A/B controlado. Cuatro solicitudes simultáneas están probadas para este trabajo; no se verificó el límite máximo de la cuenta ni se propone concurrencia ilimitada.

## Verificación y límites

60 originales seleccionados JPEG medium, 1024×1536, compresión 92, modelo exacto `gpt-image-2.5-sunburst`. Ocho linajes de referencia verificados. Cobertura de reparto y escenario para los 26 mitos; para La madre de la sal el escenario doméstico es opcional de adaptación, no dato narrativo.

Digest del corpus: `967750618150fd26c0087402136d9a0a3c615ffdc8d201612c02155a4fd49533`.

Reproducir verificación desde la raíz: `node content/videos/nasa-paeces/biblia/audit-bible.mjs`. El script es offline: no consume API ni usa credenciales.

La clave se mantiene únicamente en `.env` local, modo 600 e ignorado/no rastreado por Git. No se incluye en prompts, imágenes, manifests ni registros de producción.

Esto es una biblia editorial de producción, no certificación comunitaria ni reconstrucción cartográfica. No se modificó el corpus en la base de datos, no se construyó una app web y no se publicó contenido. Trípticos, keyframes y vídeo corresponden a etapas posteriores.
