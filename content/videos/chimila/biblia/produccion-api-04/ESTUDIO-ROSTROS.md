# Rostros: estudio documental y revisión de ambas tandas

12 de septiembre de 2026. Petición: profundizar los referentes y rehacer caras de las dos tandas existentes. Inventario congelado: 54; producción distinta: 12; faltan 42.

## Alcance

Cuatro maestros contienen humanos: P07 (una identidad en cinco vistas), H01 (cuatro adultos), P01 (una identidad en cinco vistas) y H03 (tres adultos). Son **nueve identidades ficticias**, no nueve retratos documentales. Se rediseñan sus rostros y se rearman las dos selecciones de seis. A09/L01/U07/V01 y A02/L05/U02/V02 se retienen sin nueva generación porque no contienen personas. Los originales y selecciones anteriores permanecen intactos.

## Qué se examinó realmente

Se inspeccionaron individualmente los cuatro maestros actuales y 14 imágenes registradas; dos referentes aportados (U01/U04) y cinco páginas completas de PDF para contexto. No se declara nueva inspección de las 125 imágenes. El [registro de observaciones](facial-study.v1.json) separa ocho referencias con alguna información facial útil de seis que no permiten leer detalles. Algunas de las ocho son sólo parciales y no equivalen a ocho identidades independientes.

V11 páginas PDF73–75 confirman los pies de foto: hombre con arco en Pericú; mujer con niño en Pericú; mujer shamán del Alto Ariguaní. La última no es una imagen de la Gran Cacica. Niños presentes en fotos familiares no son base para adultos. V06-P033 ofrece un contraste contemporáneo femenino útil; cultivos, manos y montajes de tejido no aportan anatomía facial fiable. V05-IMG24 se lee sin dar por verificada la identidad nominal del registro.

Fuentes archivadas: [Etnografía Chimila, archivo ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/241), [ENSANI/ICBF, pueblo Ette](https://www.icbf.gov.co/system/files/libro_ette_enaka_251121.pdf), British Council Colombia V01/V04 y Ministerio de las Culturas V05. El estudio usa los archivos locales completos, no nueva atribución de personas por su apariencia.

## Evidencia → decisiones de dibujo

Las fotos útiles muestran **variación individual**, no una cara única. La mujer histórica P074 tiene más volumen en mejilla/mandíbula que el óvalo de la retratada contemporánea V06-P033. Los hombres tampoco comparten el mismo contorno. Se observan narices de transiciones menos pinzadas, labios con volumen natural y cejas menos gráficas que en varios maestros. Luz, humo, inclinación y contraste afectan la lectura: ojos entrecerrados por sol no se convierten en rasgo hereditario.

El problema de los maestros es una plantilla animada repetida: ojos demasiado abiertos en varios apoyos, cejas altas/gruesas similares, narices estrechas proyectadas, mentones y proporciones idealizados. P07 es menos exagerada, pero aún carece de la variación y madurez buscadas. No basta oscurecer piel o cambiar pelo: se rediseña geometría individual.

- Ojos de proporción adulta, párpados que cubran parte del iris, blanco discreto y sin brillo plástico.
- Cejas naturales y distintas entre personajes, sin usar un arco uniforme como código de pertenencia.
- Variación de óvalo, mejilla, mandíbula, puente/punta nasal y labios; volumen natural sin exagerar nariz o pómulos.
- Madurez y líneas de expresión discretas; los apoyos jóvenes siguen siendo adultos.
- Una identidad nueva coherente entre las cinco vistas de P07 y P01; cuatro identidades diferentes en H01 y tres en H03.

Los diseños específicos y edades de [los prompts](jobs.v1.json) son **elecciones editoriales originales**, no medidas observadas, rasgos universales Ette ni anatomía descrita por los mitos. No se toman las tipologías raciales/antropométricas coloniales de V11 como autoridad actual. Carnaval, pueblos de Sierra y referencias de atribución incierta no se mezclan para fabricar un supuesto fenotipo.

## Invariantes de ejecución

Papel mate y planos finos: no pasar a piel fotográfica. Se preservan cuerpos, posiciones, peinados, encuadres, cantidades, algodón rectangular, largos cortos y cordones. P07 no recibe insignias de autoridad; P01 no se equipara con Yaau. H03 mantiene tres arcos, tres cuerdas y **cero flechas**; equipo de flechas sigue separado en U02.

Se usa la habilidad imagegen en su modo API explícitamente elegido, mediante su CLI oficial, y la comprobación segura de credencial local: .env ignorado, no enlace simbólico, permisos600 y clave usable, sin imprimirla. Modelo exacto gpt-image-2.5-sunburst; high para este ajuste de identidad, JPEG1024×1536, compresión92. Se editan sólo imágenes propias; **cero fotos documentales subidas**. Permisos de fuentes y validación comunitaria siguen abiertos.

Primero se revisa P07, después los otros tres maestros con un tope de tres solicitudes simultáneas. Esto no mide el máximo de concurrencia de la cuenta ni el coste facturado. La galería distinguirá cuatro regeneraciones de ocho retenciones; revisar no suma unidades ni implica aprobación del usuario.
