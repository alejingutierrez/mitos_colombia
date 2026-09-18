# Lote 24 · La India Worunka · Biblia visual Wayuu V3

**Corte:** 2026-09-04  
**Estado:** 18/18 modelos del lote seleccionados; cuatro generaciones rechazadas  
**Calidad:** `medium`  
**Generación base:** texto solamente, `gpt-image-2`, cuenta OpenAI configurada en `.env`

## Qué se corrigió antes de generar

La versión editorial anterior reducía el mito a diez modelos y no recuperaba
su sistema completo de personajes, aves, objetos, botánica, comunidad y magia.
La relectura de «La India Worunka» de Milcíades Chaves reconstruyó el inventario
desde la narración atribuida a Juancito Iguarán, con traducción de Roberto
Iguarán. El mito quedó con 34 referencias de entidad y 18 modelos nuevos; otros
modelos territoriales ya aprobados se reutilizan.

La versión de Chaves permite representar sin anatomía explícita:

- Worunka en identidad, embarazo débil, fortalecimiento y forma pétrea;
- la piedra del arroyo y el rojo transferido a Sangre Toro, un carpintero y un
  guacamayo;
- el cambio histórico de dirección en las alianzas, tratado como relación y
  bienes entre familias, nunca como compraventa corporal o ley Wayuu actual;
- los dos viajeros, las matas de frutos rojos y el origen subterráneo de las
  tumas;
- semillas de sustento no identificadas, siembra, cosecha, comunidad y bebida;
- el arroyo aproximado entre Itojoro y Kousopa;
- abundancia, verano prolongado, tumas enterradas y retorno localizado de la
  lluvia.

Se excluyeron de la imagen la anatomía sexual, los procedimientos corporales,
el parto, las costillas dentro de cuerpos, la embriaguez como espectáculo y el
sufrimiento físico por hambre o sed. La magia se tradujo a piedra, pliegues,
transferencia de color, semillas, raíces, subsuelo, agua, sombra y lluvia.

## Límite de variantes

La tesis de Weildler Guerra documenta nombres y desarrollos alternativos como
Borunka, Wootka, Worunka y Walunkáa, además de diferencias de parentesco,
lugares, actores y desenlaces. Esas variantes sirven para entender el campo
narrativo, pero no se fusionan en una figura compuesta. El lote sigue la versión
de Chaves; por eso no incorpora automáticamente padres, gemelos, flechas o
acciones pertenecientes a otras narraciones.

El nombre regional «Sangre Toro» aparece en documentación de Corpoguajira como
`Ramphocelus sp.`. Esa evidencia permite una morfología de tángara roja y negra,
pero no autoriza cerrar especie. El carpintero y el guacamayo también se
mantienen sin especie exacta cuando la fuente narrativa no la fija.

## Los 18 modelos

1. identidad de Worunka;
2. estados de Worunka;
3. identidad de Sangre Toro;
4. identidad del carpintero rojo;
5. identidad del guacamayo rojo;
6. regla de transferencia del color a las aves;
7. piedra de Worunka;
8. transformación corporal abstracta y no violenta;
9. cambio de dirección de las alianzas;
10. dos viajeros de las semillas;
11. matas de frutos rojos;
12. origen subterráneo de las tumas;
13. semillas de sustento sin especie inventada;
14. siembra y cosecha;
15. comunidad de la cosecha;
16. tinaja de la bebida;
17. arroyo de Worunka;
18. sequía prolongada y lluvia estacional.

## Indumentaria: conjuntos completos, no taparrabos

La fuente narrativa no describe cortes individuales. El vestuario se declara
traducción editorial Wayuu reversible, no reconstrucción primordial literal.
Cada conjunto fue escogido desde el repertorio documentado y evaluado por su
silueta completa:

- Worunka usa Wayuushein azul noche larga hasta los tobillos, amplia, lisa y
  con mangas completas, sobre pechera terracota, con waireñas y trenza baja.
  Embarazo y fortalecimiento modifican postura y volumen, no cobertura.
- Los dos viajeros son identidades diferentes: uno usa She'etebe y Wom; el
  otro, Kemiisa índigo, Kotin ocre, Kapateera y waireñas. Cada identidad se
  repite en dos vistas sin convertirse en cuatro viajeros.
- La comunidad reúne tres mujeres con Wayuushein largas distintas y tres
  hombres con She'etebe, Kotin sobre Kemiisa y Kemiisa con
  Asheinpalajanaa. Los seis tienen tareas, edades aparentes, capas dominantes,
  colores, cargas y calzado distintos.
- La regla de alianzas contiene exactamente seis adultos completamente
  vestidos. Sendero, animales y bultos expresan cambio de dirección y relación
  entre familias sin toque corporal, jerarquía inventada o venta de personas.
- La transformación corporal mantiene a Worunka cubierta y al hombre anónimo
  con Kemiisa, Kotin, Wom y waireñas. Dos costillas externas ya separadas se
  vuelven refuerzos de papel; nunca aparecen bajo piel.

No se añadió pintura facial. La versión no documenta simultáneamente persona,
ocasión, material, función y motivo exactos. La ausencia es una decisión de
evidencia, no una afirmación de que la pintura no exista en la cultura Wayuu.

## QA visual y correcciones

La tanda base produjo 18 archivos. Diecisiete pasaron de forma directa. La
regla climática requirió correcciones porque el conteo y el color de las tumas
forman parte de la continuidad visual con frutos y subsuelo:

- base rechazada: cuatro estados resueltos como franjas con costuras verticales
  y terreno fragmentado;
- `corrections-01` rechazada: siete objetos huecos con lectura de vasijas y
  flora de roseta impropia;
- `corrections-02` rechazada: exactamente seis piedras y terreno continuo,
  pero tumas marfil en vez de coral;
- `corrections-03` rechazada: color coral correcto, pero siete tumas;
- `corrections-04` quedó preparada y no ejecutada: se evaluó una edición
  localizada usando la versión de seis como referencia, pero el entorno no
  autorizó enviar ese archivo local a la API;
- `corrections-05` aprobada: dos grupos visibles de tres, seis tumas
  coral-terracota, un solo relieve continuo, vegetación, sequía, tinaja y
  lluvia localizadas, profundidad física y soporte oculto.

Todas las selecciones conservan volumen 3D por capas, planos a distintas
distancias, mundo full bleed y ningún borde de cartón, base, mesa, pedestal,
estudio o exterior de maqueta visible. El éxito de la API nunca se usó como
equivalente de aprobación.

## Evidencia reproducible

- lote base:
  `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-24-la-india-worunka-medium/jobs.json`;
- correcciones ejecutadas: `corrections-01`, `corrections-02`,
  `corrections-03` y `corrections-05`, cada una con `jobs.json`, prompt y
  salida propios;
- intento no ejecutado: `corrections-04`, marcado
  `prepared_not_executed`;
- decisiones humanas: `selection.decisions.json` del lote base;
- selección con hashes: `selection.json` del lote base;
- tablero de correcciones:
  `output/imagegen/wayuu-v3-production/la-india-worunka-batch24-corrections-review-contact-sheet.jpeg`;
- tablero final:
  `output/imagegen/wayuu-v3-production/la-india-worunka-batch24-selected-contact-sheet.jpeg`;
- manifiesto acumulado:
  `content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`.

Después del lote, la Biblia queda en **378/410 modelos**, **32 pendientes** y
**25/27 mitos completos**. La siguiente compuerta es la reauditoría primaria de
*Serranías de La Guajira* antes de preparar el lote 25.

## Fuentes

- Milcíades Chaves, *Mitos, leyendas y cuentos de la Guajira*, «La India
  Worunka», ICANH:
  https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1
- Weildler Guerra Curvelo, tesis doctoral sobre ontología Wayuu, Universidad de
  los Andes:
  https://repositorio.uniandes.edu.co/server/api/core/bitstreams/1eb4793b-7ba7-45c2-9ee3-1df8a6414968/content
- Corpoguajira, documento técnico con el nombre regional Sangre Toro como
  `Ramphocelus sp.`:
  https://corpoguajira.gov.co/wp/wp-content/uploads/2022/10/3._Documento-tecnico-Nuevo-Espinal-1.pdf
