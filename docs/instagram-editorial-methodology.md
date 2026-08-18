# Metodología canónica de producción de carruseles

## Propósito y autoridad

Este documento es el manual operativo del sistema de carruseles de **Mitos de
Colombia**. Define qué se produce, cómo se decide, qué se automatiza, qué se
revisa manualmente y cuándo una pieza puede considerarse terminada.

Es la fuente canónica. `docs/instagram-carousels.md` funciona sólo como índice
técnico y `content/instagram/README.md` documenta el historial de publicación.
Si una práctica contradice este documento, se corrige la práctica o se actualiza
esta metodología junto con su prueba correspondiente.

El sistema debe poder reutilizarse para un mito, una comunidad, una región, una
tipología o una serie temática sin perder la identidad visual compartida.

## Resultado y definición de terminado

Cada producción entrega:

- un brief trazable;
- un plan editorial estructurado de 8 a 14 secuencias;
- una composición reproducible mediante semilla;
- entre 8 y 14 PNG de 1080 × 1350 px;
- un `contact-sheet.png` para revisión de conjunto;
- `caption.txt`, `alt-text.txt` y `manifest.json`;
- un ZIP de publicación;
- un registro de uso, sólo después de aprobar o publicar.

Un carrusel está terminado únicamente cuando:

1. el relato se entiende por sí solo y conserva la precisión cultural;
2. todas las imágenes tienen procedencia y función narrativa claras;
3. la composición usa plantillas aprobadas y una sola pieza gráfica por lámina
   tipográfica;
4. no hay cruces, cortes, repeticiones accidentales ni texto ilegible;
5. el QA automático y la revisión humana del contact sheet pasan;
6. el paquete final coincide con la composición aprobada;
7. la aprobación queda registrada en el historial.

Generar archivos o pasar el build no equivale por sí solo a terminar.

## Invariantes del sistema de diseño

### Formato y retícula

- Lienzo: 1080 × 1350 px, proporción 4:5.
- Zona segura: 72 px arriba y a los lados; 96 px abajo.
- Encabezado, sello y folio ocupan carriles propios.
- Títulos, cuerpos, imágenes, mapas y elementos gráficos exponen slots
  geométricos auditables.
- La masa visual puede ser centrada o asimétrica, pero debe sentirse repartida
  de manera deliberada.

### Tipografía

- Títulos: Asimovian mediante `--font-display`.
- Lectura y utilidades: Noto Sans Display mediante `--font-body`.
- Títulos: interlineado base 0.96–1.05 e interletrado base `-0.018em`.
- Párrafos: interlineado 1.40–1.50 e interletrado neutro.
- El microtexto se reserva para marca, coordenadas, crédito y folio; nunca para
  información indispensable del relato.
- El texto pequeño debe centrarse o distribuirse dentro de su zona, no quedar
  flotando junto a un borde sin relación con el resto de la lámina.
- No se sustituyen las fuentes, no se estiran glifos y no se reduce el cuerpo
  para salvar un texto que debió editarse.

### Color y materialidad

- La paleta usa verdes selva, azules de agua, arcillas, noche y dorados mate.
- El dorado funciona como acento, no como fondo dominante automático.
- Papel, fibra, tinta y relieve conectan la familia sin convertir la textura en
  ruido.
- No aparecen tres fondos iguales consecutivos.
- El contraste de lectura debe ser AA como mínimo.

### Marca y continuidad

- Se preservan la firma `MITOS DE COLOMBIA`, comunidad, sello y folio.
- La marca rota entre tratamientos aprobados para no parecer una misma maqueta.
- La continuidad vive en tokens, tipografía, materialidad y ritmo; la variación
  vive en el arco narrativo, la plantilla, el encuadre y la pieza gráfica.

### Diseño del feed y variación gobernada

El sistema se diseña en dos escalas simultáneas: cada carrusel debe funcionar
por sí solo y el conjunto debe conservar ritmo cuando se ve como feed. No existe
un orden canónico único de portada, texto, mapa e imagen.

Para una producción seriada:

- se rota entre seis arquetipos de orden narrativo; el mapa puede aparecer en
  las posiciones 3, 4, 6 o 7 y la imagen horizontal en las posiciones 4 o 5;
- se rota una familia de siete paletas con distinto punto de inicio y salto, de
  modo que dos publicaciones consecutivas no hereden la misma secuencia de
  color;
- el índice del feed forma parte del plan y no depende del azar del render;
- una plantilla usada en la misma posición durante las cuatro publicaciones
  recientes se excluye cuando existe otra alternativa compatible;
- ninguna secuencia completa de plantillas debe repetirse dentro de una misma
  edición;
- una pieza general de comunidad usa una portada reservada para ese rol; las
  portadas de mitos no pueden seleccionarla. En la programación pública se
  ubica después de todos los mitos como cierre y puerta de entrada a la
  colección completa;
- la variedad se comprueba sobre el lote completo, no por impresión visual de
  tres ejemplos.

La variación nunca autoriza a romper fuentes, retícula, materialidad, contraste,
voz editorial ni límites culturales. Cambia el ritmo; permanece el idioma
visual.

## Universos ejecutables

### Plantillas

La biblioteca contiene 85 plantillas aprobadas. De ellas, 40 están marcadas
como `productionReady` y conforman el selector automático actual; el resto
permanece documentado hasta superar su validación nativa:

| Familia | Cantidad | Función |
| --- | ---: | --- |
| Portada | 10 | Entrada e identidad |
| Tipográfica | 30 | Relato, contexto, pausa y cierre |
| Imagen secundaria | 20 | Segunda escena canónica |
| Imagen terciaria | 20 | Escena nueva o clímax |
| Mapa | 5 | Territorio, coordenadas y ruta |

Las fichas tipográficas declaran una capacidad real:

- breve: hasta 32 palabras;
- media: hasta 54 palabras;
- narrativa: hasta 78 palabras.

La capacidad cuenta título y cuerpo. Dos fichas narrativas no van seguidas.

### Iconografía

La biblioteca gráfica contiene 100 PNG transparentes:

| Tipo | Cantidad |
| --- | ---: |
| Glifos | 48 |
| Separadores | 12 |
| Esquinas | 12 |
| Marcos | 8 |
| Ornamentos | 12 |
| Patrones | 8 |

Cada pieza debe tener una ruta de selección automática. El sistema elige entre
las piezas semánticamente pertinentes la menos usada en el historial aprobado.
No fuerza un jaguar, una serpiente o una constelación sólo para aumentar la
cobertura.

Reglas innegociables:

- máximo un elemento gráfico por lámina tipográfica;
- cero elementos decorativos añadidos en portadas, fotografías y mapas;
- ningún símbolo se cruza o superpone con otro;
- ninguna pieza se repite dentro del mismo carrusel;
- un marco, patrón o esquina compite por el mismo cupo que un glifo o separador;
- si la semántica no es clara, se usa un recurso estructural pertinente al
  layout, nunca una acumulación ornamental.

La cobertura se audita con:

```bash
npm run instagram:iconography:coverage
```

El informe separa inventario, rutas automáticas, uso renderizado y uso
publicado. Sólo el historial publicado cuenta como uso público real.

## Arquitectura narrativa

No se divide el texto por longitud. Se identifican movimientos:

1. umbral o gancho;
2. territorio o estado inicial;
3. aparición o incidente;
4. desarrollo;
5. giro;
6. transformación o clímax;
7. significado;
8. cierre.

Guía de longitud:

- 8–9 secuencias: un arco breve;
- 10–11: origen, desarrollo, giro y retorno;
- 12–14: varias transformaciones, versiones o contexto indispensable.

Se agrega una secuencia sólo si aporta un movimiento nuevo. Se elimina si
repite una idea, convierte el relato en eslogan o existe sólo para mostrar una
plantilla.

Todo carrusel mantiene:

- por lo menos cinco fichas de relato; seis si no hay mapa;
- al menos dos fichas medias o narrativas;
- al menos tres fichas medias o narrativas cuando hay 11 o más secuencias;
- una sola idea principal por lámina;
- mapa separado de cualquier imagen por una lámina completa;
- imágenes separadas por al menos tres láminas completas.

## Política de texto y brief

### Brief mínimo

Antes de planear se documenta:

- objetivo de la publicación;
- audiencia;
- mito, comunidad, región o tema;
- tesis editorial en una frase;
- hechos y fuentes disponibles;
- límites culturales y afirmaciones que no deben inventarse;
- dos imágenes canónicas y su procedencia;
- llamado final deseado, si existe;
- restricciones de fecha, serie o campaña.

La plantilla reutilizable está en
`content/instagram/brief-template.md`.

Si falta información, se reduce la afirmación; no se rellena con folclor
genérico.

### Escritura por lámina

- El título abre una idea; el cuerpo la desarrolla y no lo repite.
- Se prefiere una frase concreta a una abstracción promocional.
- El relato distingue tradición oral, fuente histórica e interpretación.
- Las citas requieren fuente verificable y no se inventan para dar tono.
- El cierre deriva del mito. No se usa “comenta y comparte” por defecto.
- La última ficha conserva esa idea o pregunta y reserva su tercio inferior para
  el cierre estándar: “El relato continúa”, la invitación a leer la historia
  completa y `mitosdecolombia.com`. Es parte de la ficha final y nunca una
  secuencia adicional.
- Caption, hashtags y alt text se redactan desde el contenido aprobado, no desde
  una descripción genérica del diseño.

El carrusel debe poder leerse como una historia autónoma, aunque invite a la
lectura larga.

## Política de imágenes y mapas

### Imágenes canónicas

- La imagen vertical abre como portada y conserva al protagonista.
- La imagen horizontal se usa una sola vez, en su proporción 16:9 y de margen a
  margen dentro de la franja visual de la plantilla.
- No se reutiliza un archivo con otro recorte para simular una escena nueva.
- No se amplían miniaturas ni se reemplazan originales por fallbacks de otra
  orientación.
- No se coloca texto generado dentro de la imagen; la tipografía se compone en
  el sistema.

### Tercera imagen

Se genera únicamente cuando existe una escena, detalle o transformación que las
dos imágenes canónicas no muestran. Su brief debe declarar:

- momento narrativo;
- sujeto y acción;
- territorio;
- continuidad material y cromática con las referencias;
- encuadre 4:5;
- diferencia concreta frente a las escenas existentes;
- restricciones culturales;
- exclusiones: texto, logos, marcos, CGI, plástico y fantasía genérica.

La tercera imagen pertenece exclusivamente a ese mito. Se conserva el prompt y
las dos referencias usadas.

### Mapas

- El mapa se usa sólo cuando el territorio cambia la comprensión.
- Usa cartografía real, atribución visible y coordenadas verificadas.
- En el localizador de producción el detalle principal usa zoom 13.
- Pin, topónimo, coordenadas y atribución tienen carriles separados.
- No se aplican filtros que borren caminos, agua o nombres.

## Flujo operativo completo

### 0. Preparar el entorno

Las credenciales viven en `.env` o `.env.local`, nunca en Git.

```bash
npm run instagram:env:copy -- --profile oda-comarca
```

Para una prueba sin proveedor remoto puede usarse `--provider local`, pero una
producción editorial debe declarar en el plan qué proveedor y modelo usó.

### 1. Crear el plan editorial

```bash
npm run instagram:plan -- --slug <slug> --out artifacts/instagram/<slug>/plan-v1.json
```

Opciones relevantes:

- `--provider bedrock|local`;
- `--allow-openai-fallback`, sólo cuando se acepta explícitamente ese fallback;
- `--require-third`, sólo si el brief ya exige una tercera escena;
- `--history <archivo>`, para una historia de publicación alternativa.

El resultado debe revisarse antes de continuar: tesis, orden, hechos, densidad,
uso de activos, alt text, caption y necesidad real de tercera imagen.

### 2. Preparar activos

```bash
npm run instagram:assets -- --plan artifacts/instagram/<slug>/plan-v1.json
```

El comando descarga los maestros canónicos, registra dimensiones y MIME, crea
`media.json` y deja `third-image-prompt.md` listo. Si se aprueba y genera una
tercera escena:

```bash
npm run instagram:assets -- \
  --plan artifacts/instagram/<slug>/plan-v1.json \
  --third /ruta/absoluta/tercera-imagen.png
```

### 3. Componer un borrador reproducible

```bash
npm run instagram:compose -- \
  --plan artifacts/instagram/<slug>/plan-v1.json \
  --assets artifacts/instagram/<slug>/media.json \
  --output artifacts/instagram/<slug>/composition-v1.json \
  --seed <slug>-v1-1
```

No usar `--record` en esta fase. La semilla fija la composición. Para explorar
otra secuencia se cambia sólo la semilla; no se deforma una plantilla para
salvar una selección débil.

El compositor:

- usa únicamente plantillas aprobadas y compatibles con el rol y la densidad;
- no repite plantilla ni pieza gráfica dentro del carrusel;
- evita repeticiones recientes de plantilla;
- rota hacia la pieza gráfica pertinente menos usada;
- conserva máximo un gráfico por lámina tipográfica;
- evita paletas y tratamientos de marca consecutivos;
- respeta capacidad, longitud y separación de imágenes.

### 4. Renderizar

Con la aplicación disponible en la URL indicada:

```bash
npm run instagram:render:editorial -- \
  --slug <slug> \
  --edition v1 \
  --composition artifacts/instagram/<slug>/composition-v1.json \
  --output artifacts/instagram/<slug>/editorial-v1 \
  --base-url http://localhost:3000
```

El render produce los PNG, el contact sheet, caption, alt text, manifest y ZIP.
Nunca se corrige un PNG final de forma aislada: se corrige texto, plantilla,
token o regla de selección y se vuelve a renderizar.

### 5. Ejecutar QA automático

```bash
npm run instagram:qa:editorial -- \
  --plan artifacts/instagram/<slug>/plan-v1.json \
  --composition artifacts/instagram/<slug>/composition-v1.json \
  --slides artifacts/instagram/<slug>/editorial-v1

npm run instagram:test
npm run lint
npm run build
```

El QA valida secuencia, cantidad, familias, paletas, dimensiones, formato,
archivos complementarios, unicidad, límites de texto, fuentes de iconografía y
la política de un solo gráfico.

### Producción por comunidad, región o serie

Para un universo completo se usa el productor masivo, no un bucle manual:

```bash
npm run instagram:produce:community -- \
  --community Muiscas \
  --edition v16 \
  --provider local \
  --base-url http://localhost:3003
```

Antes de planear, el productor consulta el universo una sola vez y guarda una
instantánea completa en `artifacts/instagram/<comunidad>-instagram-<edición>-source-snapshot.json`.
Todos los planes del lote leen esa misma fuente para impedir que una caída de
base de datos o una actualización intermedia cambie el universo a mitad del
trabajo. La instantánea documenta fecha de captura y total exacto.

Si existe `content/instagram/community-briefs/<comunidad>.json`, el productor
crea un carrusel general de comunidad. Ese post cuenta en el paquete publicable,
pero no en el universo de mitos. El brief declara texto, activos, coordenadas y
enlace a la colección; no se sintetiza a partir de frases sueltas de los mitos.
Aunque pueda producirse antes por razones técnicas, se programa después de
todos los mitos como cierre de la serie. `--no-intro` lo omite deliberadamente.

Si el proceso se interrumpe, se conserva la instantánea y se reanuda únicamente
lo que no haya pasado QA:

```bash
npm run instagram:produce:community -- \
  --community Muiscas \
  --edition v16 \
  --provider local \
  --base-url http://localhost:3003 \
  --resume
```

`--refresh-source` crea deliberadamente una nueva instantánea; no debe usarse
para reanudar una edición porque alteraría la población auditada. `--slugs`
permite una prueba acotada. El lote escribe su propio historial de borrador y
nunca modifica `content/instagram/template-history.jsonl`.

Después de que el reporte consolide `qa_passed = universe_total` y `failed = 0`,
se crea el paquete comunitario:

```bash
npm run instagram:package:community -- --community Muiscas --edition v16
```

El paquete incluye ZIP individual por publicación —introducción y mitos—,
manifiesto de lote, SHA-256, distribución de longitudes y un ZIP maestro.
Producido significa QA técnico aprobado; publicar o alimentar el historial
canónico exige todavía la revisión humana y aprobación definidas abajo.

### 6. Revisión humana del contact sheet

Revisar primero el conjunto y después cada PNG a tamaño nativo. Las puertas son:

1. **Narrativa:** el orden se entiende y cada lámina avanza.
2. **Factual/cultural:** no hay invenciones, confusiones de comunidad ni
   símbolos intercambiables.
3. **Imagen:** protagonistas, manos, rostros, horizontes y proporciones están
   bien resueltos; el 16:9 aprovecha el ancho.
4. **Tipografía:** jerarquía, interlineado, interletrado y líneas finales se
   sienten intencionales a tamaño móvil.
5. **Espacio:** los textos pequeños están centrados o repartidos; no existen
   huecos accidentales ni bloques pegados a un borde.
6. **Gráfica:** un solo elemento por lámina, pertinente, sin cruces ni ruido.
7. **Continuidad:** hay ritmo entre fotografía, mapa, relato y cierre sin que
   todas las láminas parezcan la misma plantilla.
8. **Continuación:** la última ficha muestra una sola vez el CTA estándar a
   `mitosdecolombia.com`, con dominio legible, enlace profundo correcto al mito
   y sin competir con la pregunta.
9. **Feed:** portadas adyacentes, órdenes cromáticos y posiciones de mapa e
   imagen producen contraste; no hay una receta de secuencia repetida entre
   publicaciones.

Si una puerta falla, la edición no se aprueba aunque el QA automático pase.

### 7. Aprobar y registrar

Después de aprobar el contact sheet, repetir la composición con la misma
semilla y añadir `--record`:

```bash
npm run instagram:compose -- \
  --plan artifacts/instagram/<slug>/plan-v1.json \
  --assets artifacts/instagram/<slug>/media.json \
  --output artifacts/instagram/<slug>/composition-v1.json \
  --seed <slug>-v1-1 \
  --record
```

El registro es idempotente para la misma combinación de mito, semilla y
plantillas. Guarda plantilla narrativa, plantillas de lámina y piezas gráficas.
El archivo `content/instagram/template-history.jsonl` representa aprobación o
uso público, no experimentos.

Después del registro se vuelve a ejecutar el QA si cambió cualquier entrada.

### 8. Publicar y archivar evidencia

Publicar exactamente los PNG del ZIP aprobado y conservar juntos:

```text
artifacts/instagram/<slug>/
├── plan-v1.json
├── media.json
├── third-image-prompt.md
├── composition-v1.json
├── editorial-v1/
│   ├── 01-cover.png
│   ├── ...
│   ├── contact-sheet.png
│   ├── caption.txt
│   ├── alt-text.txt
│   └── manifest.json
└── <slug>-instagram-editorial-v1.zip
```

No se sobrescribe una edición aprobada con cambios silenciosos. Toda mejora
posterior crea `v2`, `v3`, etc.

#### Puerta de montaje en Meta

El paquete aprobado todavía puede dañarse durante la carga. Una fila en estado
“Programada” no demuestra por sí sola que el carrusel esté bien montado. Antes
de programar cada publicación se debe cumplir este contrato:

1. la carpeta contiene exactamente las láminas numeradas `01` a `09`; el
   `contact-sheet.png` nunca entra en el selector;
2. las nueve rutas se ordenan por su prefijo numérico y se cargan una por una;
   después de cada archivo se espera que el contador de miniaturas aumente
   exactamente en uno antes de continuar. Meta puede ordenar una selección
   múltiple por tiempo de procesamiento y no por el orden recibido;
3. Meta debe mostrar nueve elementos y reportar `1080 x 1350` para los nueve;
4. en **Editar fotos → Ajustar** se selecciona **Vertical 4:5**, se activa
   **Aplicar a todas** y se exige la confirmación “9 fotos recortadas” antes de
   aplicar;
5. la lista de miniaturas del compositor se compara con la secuencia aprobada
   `01 → 09`, y la vista previa debe mostrar completa la portada, sin corte de
   título, marca ni folio;
6. sólo entonces se carga el caption y se programa. Después se busca la pieza
   por su enlace profundo y se verifican cuenta, copy, fecha y hora;
7. la pieza general de comunidad se programa al final del lote, nunca antes de
   un mito de la misma serie.

La evidencia mínima de una serie es: auditoría de dimensiones del lote,
captura del compositor con las nueve miniaturas ordenadas, confirmación 4:5,
resultado de verificación por publicación y captura de la primera y la última
pieza ya programadas. Si cualquiera de esas comprobaciones falta, el lote sigue
abierto.

## Criterios de rechazo

La pieza vuelve a composición si ocurre cualquiera de estos casos:

- una lámina repite la anterior o no avanza el relato;
- un texto esencial sólo puede leerse ampliando;
- un título y su cuerpo dicen lo mismo;
- una fotografía se recorta contra el protagonista o desperdicia su formato;
- Meta muestra una portada cuadrada, corta título o folio, o no confirma 4:5 en
  las nueve láminas;
- la carga se hizo mediante selección múltiple, no esperó cada miniatura, o la
  secuencia visible no coincide con `01 → 09`;
- un mapa muestra demasiado territorio o no deja claro el punto;
- dos símbolos se cruzan, se superponen o compiten;
- el elemento gráfico no tiene relación con el contenido ni con el layout;
- el texto pequeño queda arrinconado o el espacio se siente accidental;
- una fuente, paleta o tratamiento ajeno rompe la continuidad;
- una afirmación cultural carece de respaldo;
- el historial se registró antes de la aprobación.

## Cómo ampliar el sistema

### Nueva plantilla

1. Definir familia, rol, capacidad, paleta y tratamiento de marca.
2. Reutilizar tokens, slots y componentes existentes.
3. Probarla con texto corto, medio, largo y caracteres reales en español.
4. Verificarla a 1080 × 1350 y dentro de un carrusel completo.
5. Añadir o actualizar pruebas antes de marcarla como aprobada.

### Nueva pieza gráfica

1. Definir ID, tipo, significado, comunidades o temas pertinentes.
2. Dibujarla con el mismo contrato de línea, material y transparencia.
3. Exportar PNG al tamaño maestro del tipo correspondiente.
4. Registrarla en el inventario canónico.
5. Añadir una ruta automática semántica o estructural.
6. Ejecutar build de iconografía, pruebas y auditoría de cobertura.
7. Confirmar en un render que ocupa un solo cupo y no cruza contenido.

```bash
npm run instagram:iconography:build
npm run instagram:test
npm run instagram:iconography:coverage
```

Una pieza registrada sin ruta automática no está integrada. Una pieza con ruta
pero sin uso aprobado todavía no cuenta como publicada.

## Métricas de salud

Se revisan por separado:

- cobertura de inventario: piezas existentes;
- cobertura automática: piezas con una ruta real de selección;
- cobertura renderizada: piezas que ya aparecieron en un contact sheet;
- cobertura publicada: piezas presentes en el historial aprobado;
- repetición reciente de plantillas, paletas y motivos;
- porcentaje de carruseles aprobados sin recomposición;
- errores de QA por categoría.

No se fusionan estas métricas en un único porcentaje: miden problemas distintos.

## Principio de mejora continua

Cada corrección debe entrar en la capa que originó el problema:

- error factual → brief, fuente o plan;
- texto largo → edición o capacidad;
- corte o cruce → retícula o template;
- repetición → selector e historial;
- símbolo irrelevante → taxonomía semántica;
- recurso nunca usado → ruta automática y medición;
- problema recurrente → prueba automatizada.

La meta no es producir una pieza aislada “bonita”, sino conservar un sistema
que aprenda de cada aprobación y produzca variedad con criterio.
