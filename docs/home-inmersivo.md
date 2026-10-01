# Home inmersivo · 30 de septiembre de 2026

La dirección parte de las dos referencias elegidas por el usuario: escena de
portada completa, navegación integrada, cinco contactos debajo, papel cálido,
bordes irregulares y continuidad entre comunidades, rutas y territorios. La
primera implementación de cinco columnas con un masthead separado fue descartada.

## Sistema

- Asimovian 400 para títulos; Noto Sans Display para lectura y controles.
  Se conservan las fuentes reales del sitio.
- Papel `#f7f3ea`, verde selva `#103524` / `#1c5c3f`, dorado tierra `#d8aa62`.
  La textura reutiliza el SVG de grano existente, sólo en el fondo del papel.
- Imágenes del archivo y sus variantes existentes. No se genera ni modifica
  ninguna ilustración. Tampoco se usa arte del mockup como contenido publicado.
- `ImageFrame` para obras; `Icon` para acciones; `MotifMask` y los motivos
  existentes para los hilos. Las escenas usan planos sólidos de lectura, sin
  degradados sobre las obras, filtros de brillo o sombras de texto.
- El titular de la portada elige tinta o blanco al leer la luz de su zona.
  Cuando el fondo es irregular, sólo las líneas del texto llevan papel opaco.
  No se impone una zona de cielo ficticia a las imágenes de cada día.
- Bordes de papel hechos con CSS y separaciones finas. Movimiento sólo en
  acciones concretas, con respeto a `prefers-reduced-motion`.

## Componentes y contenido

`HomeCover` muestra una escena y cinco contactos. En escritorio, ambas partes
comparten `100svh`: la escena cede altura a los nombres completos de las
secundarias. La franja usa la misma caja de 1460 px que las cabeceras, fotografías
de altura ajustada a la pantalla y leyendas sobre papel. La selección se indica
con un borde fino y una línea; durante la reproducción esa línea mide los ocho
segundos reales. Los controles se agrupan en una única base de papel.
La puerta del perdón abre
cuando pertenece al sorteo del día; la composición sigue funcionando con las
otras obras. La rotación conserva los ocho segundos y se detiene al interactuar,
al salir de pantalla, al ocultar la pestaña o al pedir movimiento reducido.
El único título sobre el hero es el del mito activo; se retiran el lema general,
la entradilla y el rótulo duplicado. Título y botón se apoyan en la parte inferior;
los controles de escritorio quedan en el extremo opuesto. El contraste automático
lee las líneas reales del título sobre el recorte visible, incluyendo la variante
vertical, y se recalcula al cambiar de obra, de tamaño, al cargar las fuentes y
al terminar la entrada de la imagen. Los percentiles 5 y 95 incluyen ramas y
cercas pequeñas; se exige contraste 4.5 también en el display grande.
La barra lateral tiene una base compacta de papel sólido para conservar contraste
al atravesar imágenes y superficies de cualquier color. En escritorio ancho,
las leyendas y los frisos reservan ese canal para que el índice no tape títulos.
En móvil no hay controles sobre la obra ni
reproducción automática: la franja inferior permite cambiar de portada. El
titular baja a 24 px (20 para nombres largos) y el botón ocupa menos superficie.

`TodayTable` conserva chips, conteos, estados de carga y la consulta real a
`/api/mesa`. Su presentación es un carril de escenas grandes, con desplazamiento
nativo y botones de avance; filtrar o barajar vuelve al inicio del carril.
La mesa sirve 24 relatos, equilibra territorios y motivos, y mantiene las
portadas principales fuera del sorteo para ampliar el descubrimiento.
Los botones se desactivan en los extremos y cuando la selección cabe completa.
Las procedencias comparten línea aunque los títulos tengan distinta longitud.

`CommunityTabs` sirve los paneles en el HTML y ofrece seis comunidades por tanda,
con hasta ocho obras por comunidad. Las referencias forman un carril de escenas
grandes; la primera comunidad dispone del mayor número de obras de la tanda.
Cambiar comunidades repone la selección sin repetir las de la tanda anterior.
«Mestizos y mixtos» es una sección abierta con doce obras y acceso a sus 253
relatos, además de filtros separados de ambas tradiciones.

`RouteBanner`, `RouteCards` y los cinco territorios forman bandas de obras.
Todas las rutas siguen accesibles en el friso y desde su índice. Mapa y temas
comparten una sección; en escritorio los hilos forman dos filas, con motivos
de 40 px, para equilibrar el mapa y mostrar más temas. Los territorios comparten
ancho y márgenes con su cabecera. Comunidades y ruta panorámica comparten ejes
de texto y proporciones. Oráculo y cierre comparten otra sección. El teaser del mapa usa
la obra ya disponible: no suplanta un mapa ilustrado inexistente.

La selección, la fecha de Bogotá, los repartos por territorio, las atribuciones,
las cifras y los enlaces vienen de las consultas existentes. Los nombres y
paisajes inventados por los mockups no sustituyen esos datos.

Los tokens y superficies viven en `home-journey.module.css`, aislados del resto
del sitio. `/design-system/home` usa los mismos datos y componentes que `/`.
El sistema general documenta estas reglas y enlaza esa vista.

## Consistencia del archivo

Los índices de comunidades, categorías y rutas comparten `ArchivePageHeader`
y `VisualIndex`: entrada breve, búsqueda, ordenación, imágenes a 3:2 con calidad
90 y leyendas sobre papel, sin velos. Las comunidades conservan filtros por
territorio; cuando no hay portada usan una ilustración real de sus relatos.
Las categorías conservan su paginación y el índice rastreable de enlaces.

Las internas de comunidad y región sitúan todas las obras antes de la prosa,
con tres columnas amplias. Categorías usa la misma galería y mantiene filtros.
Las rutas conservan movimientos y tesis editorial, con retratos completos y
nombres sobre papel. Las portadas grandes usan el original disponible.

Mapa, páginas editoriales, cabecera y pie comparten el papel, las fuentes,
el contraste y los controles del archivo. El lector individual mantiene su
geometría móvil y disminuye el titular de escritorio, apoyándolo sobre papel.
El tarot reúne las 78 cartas reales, filtros de palos, búsqueda y lectura modal.
