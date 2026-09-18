# Keyframes de los 26 mitos Nasa

Campaña iniciada el 13 de septiembre de 2026 por solicitud expresa del usuario.
Alcance congelado: **26 mitos, 270 cuadros**. Se conservan los 14 cuadros de
El Trueno y se produjeron 256 originales para los otros 25 relatos. No sustituye
los trípticos ya publicados ni altera las versiones editoriales de la base.

## Estado y entrega

**Producción completa: 270/270 cuadros y 26/26 secuencias listas para revisión del
usuario.** Se seleccionaron 256 originales nuevos y se conservaron los 14 de El
Trueno. Los 24 candidatos descartados permanecen en el proyecto con su motivo;
no forman parte de las descargas finales.

La revisión individual y de las 26 láminas está registrada. La verificación HTTP
comprobó las 26 secuencias, los 270 PNG originales contra sus SHA-256 y las 27
descargas. El ZIP combinado también se verificó completo por HTTP.

- Galería: http://127.0.0.1:8897/comunidad-nasa/
- Salidas desde la raíz: `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/comunidad-nasa/`.
- [Manifiesto del corpus y material](manifest.json).
- [25 planes y cantidades congelados](preproduction-freeze.json).
- [Validación de originales, fuentes y referencias](verification.json).
- [Revisión visual de las 26 secuencias](sequence-qa.json).
- [Verificación HTTP de la entrega](http-verification.json).
- [Verificación del visor en móvil y escritorio](browser-verification.json).
- [Cierre y alcance de la entrega](closure.json).
- [26 paquetes por mito y ZIP completo, con tamaños y SHA-256](packages.json).
- Descarga completa: http://127.0.0.1:8897/comunidad-nasa/nasa-26-mitos-270-keyframes.zip
  (600.7 MB; 270 PNG, 26 guiones, planes, prompts exactos y solicitudes).
- Cada carpeta `myths/<slug>/` contiene fuente preservada, guion, plan,
  solicitudes exactas, prompts, candidatos y selección con decisiones de QA.

## Proceso

Los guiones seleccionan el núcleo propio de cada mito, separan las variantes
y evitan introducir episodios citados solo como comparación. Su extensión depende
del relato: de cuatro cuadros para la madre de la sal a catorce para las secuencias
más extensas. Dos cuadros por bloque distinguen preparación y consecuencia.
Los tiempos proceden de una lectura estimada y deben ajustarse a la voz grabada.

Se usa **image_gen.imagegen integrado**, una llamada por candidato. No se atribuye
un modelo o nivel de calidad que la herramienta no expone. Los originales se
copian al proyecto antes de seleccionarlos. No se usa API/CLI alternativo.

La referencia principal de cada imagen es el tríptico reconstruido del mismo mito;
la apertura reforzada de El Trueno fija exclusivamente el material. Se añaden entre
cero y dos cuadros anteriores seleccionados según la continuidad que requiere cada
plano, evitando trasladar personajes a los insertos o a los cambios de escena. La ropa, edad, estado y cámara
se declaran por escena. No se usan candidatos rechazados como referencias.
Las correcciones de dirección preservan la fuente y quedan en solicitudes versionadas.

La construcción exige papel cortado y plegado: cantos, solapes, sombras de contacto,
volúmenes de cartulina, agua y nubes de papel. Los encuadres se revisan junto a la
acción, identidad, número de personajes y continuidad; un archivo válido por sí
solo no pasa la revisión visual.

La revisión de `el-hombre-y-el-perro-flaco` conserva una nota menor: la forma de
la luna decorativa varía entre fondos y deberá unificarse si la animación utiliza
continuidad astronómica. Los tiempos de todos los relatos siguen siendo
provisionales hasta grabar la voz.

## Comandos

Desde la raíz del repositorio:

```sh
node content/videos/nasa-paeces/keyframes-comunidad-20260913/workflow.mjs status
node content/videos/nasa-paeces/keyframes-comunidad-20260913/build-delivery.mjs --complete
node content/videos/nasa-paeces/keyframes-comunidad-20260913/package-delivery.mjs
node content/videos/nasa-paeces/keyframes-comunidad-20260913/build-delivery.mjs --complete
node content/videos/nasa-paeces/keyframes-comunidad-20260913/verify-viewer.mjs --complete
```

El segundo comando comprueba fuentes, planes, originales, solicitudes y referencias
antes de reconstruir los visores y las láminas. `--complete` exige 270 seleccionados.
El empaquetado exige además la revisión de las 26 secuencias; comprueba CRC y
cantidad de PNG de cada ZIP. El contenedor de desarrollo se reconstruyó con
`docker-compose up -d --build` y respondió HTTP 200 en el puerto 3003.
La voz, animación, montaje y publicación audiovisual no forman parte de esta campaña.
