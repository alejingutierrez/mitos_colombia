# Lote 19 — Ulepala — Biblia visual Wayuu V3

Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_03`  
Fecha de cierre: 2026-09-04  
Calidad: `medium`  
Modelo: `gpt-image-2`  
Modo: generación desde texto, sin referencias de imagen locales  
Encuadre: inmersivo a sangre, profundidad física por capas, sin soporte, cartón, mesa ni estudio visibles

## Resultado

Ulepala queda completo con 75 de 75 modelos requeridos:

- 67 modelos nuevos seleccionados en este lote;
- ocho modelos previamente aprobados y reutilizados con continuidad: Yolujaa,
  Juyá —presencia y estados—, Mareiwa —presencia y estados—, Jepira, dominio de
  Juyá y costa-mar de La Guajira;
- cero modelos pendientes del mito;
- 28 intentos rechazados y conservados con motivo y SHA-256;
- progreso total de la Biblia: 306/385 modelos, 79 pendientes y 20/27 mitos
  completos.

El cierre de Ulepala completa también *Los dominios de Juyá*: varias entidades
propias de ese espacio sólo quedaron resueltas cuando la reauditoría de Ulepala
separó personas, animales, plantas, objetos, espacios y reglas de transformación.

## Qué se corrigió antes de producir

La auditoría anterior había subdetectado personajes y había tratado el mito
como una secuencia de escenas. El nuevo proceso releyó la narración completa y
congeló primero el denominador. Se distinguieron:

- Ulepala, su compañera muerta, madre, abuela, amigo, mujer del amigo, anciana
  amiga, Maleiwa y Juyá;
- familias, acompañantes de la dote, servidores de Juyá, jóvenes del bosque,
  participantes de la fiesta y comunidad del regreso;
- caballos, mula, asno, rebaños, cardenal, mariposa, puercoespines y las
  metamorfosis animales o vegetales sin convertirlas en criaturas genéricas;
- viviendas, cementerio de tinajas, caverna submarina, mansiones de Jepira,
  estancia y bosque de Juyá, campo de algodón y ruta de regreso;
- ajuar, avíos, herramientas, plantas y reglas visuales de visión, rastro,
  aprendizaje, secreto y transformación.

La versión de Sibotta Sapuana publicada por Ramón Paz Ipuana se mantuvo como
línea narrativa principal. Las variantes de Paz Ipuana y Michel Perrin se
registraron sin mezclarlas silenciosamente. La mediación literaria y los
episodios sensibles se conservaron como información editorial, pero la imagen
no muestra violencia ni sexualidad explícitas.

## Indumentaria y pintura

La fuente nombra `She'ebe`, `Kotsü`, `Molono` y mantolas. La investigación de
indumentaria se cruzó con *Ale'eya*, tomo II, y con fuentes institucionales y
comunitarias para impedir la reducción «hombre Wayuu = taparrabo».

Las fichas humanas exigen una silueta completa y legible:

- capa superior, envolvente sustancial o manta masculina de cuerpo;
- faja, calzado y accesorios como componentes funcionales, no como sustitutos
  del vestido;
- mantas femeninas largas y amplias sobre pechera;
- variación interna real en colectivos por edad, función y ocasión;
- `Kotsü` y `Molono` distribuidos en personas concretas, no usados como adorno
  universal;
- ninguna pintura facial sin persona, ocasión, material, forma y significado
  documentados para la escena.

La regla de QA no se limita a comprobar palabras en el prompt: si la capa
dominante desaparece, se acorta hasta parecer una única prenda inferior o no se
lee de frente, perfil y espalda, la imagen se rechaza.

## Producción y selección

| Ronda | Generadas | Seleccionadas | Función |
|---|---:|---:|---|
| Base | 67 | 45 | Primera cobertura completa del lote |
| Corrección 01 | 22 | 17 | Vestuario, identidad, cantidad y composición |
| Corrección 02 | 5 | 4 | Desvíos residuales de grupo, objeto y estado |
| Corrección 03 | 1 | 1 | Participantes de la fiesta de Maleiwa |
| **Total seleccionado** |  | **67** | Cobertura nueva completa |

La selección final no reemplaza ni borra los intentos fallidos. El manifiesto
guarda para cada modelo el lote de origen, ruta y hash; y para cada rechazo, la
razón exacta, ruta y hash.

## Evidencias reproducibles

- inventario y contratos: `content/mitos-visuales/wayuu.v3.json`;
- direcciones de producción: `editorial/wayuu/ulepala-directions-v3.mjs`;
- manifiesto del lote: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-19-ulepala-medium/selection.json`;
- selección acumulada: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`;
- contacto final: `output/imagegen/wayuu-v3-production/ulepala-selected-contact-sheet.jpeg`;
- protocolo de indumentaria: `docs/wayuu-indumentaria-y-pintura-v3.md`.

## Fuentes principales de esta decisión

1. José Enrique Finol, *Mito y cultura guajira*, incluida la narración de
   Sibotta Sapuana publicada por Ramón Paz Ipuana y el análisis comparativo de
   variantes. https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf
2. Ramón Paz Ipuana, *Ale'eya. Tomo II: Conceptos y descripciones de la cultura
   Wayuu*, pp. 114-119 para el sistema de indumentaria masculina.
   https://kimera.com/data/redlocal/ver_demos/RLWAYUU/VERSION/RECURSOS/CONTENIDO%20WAYUU/CULTURA%20WAYUU/RELATOS/TEXTO/ALE%20EYA%20WAYUU%20Tomo%20II.pdf
3. Ministerio de Cultura de Colombia, *Caracterizaciones de los pueblos
   indígenas de Colombia: Pueblo Wayuu*.
   https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WAY%C3%9AU.pdf
4. Artesanías de Colombia, *Tejeduría del pueblo indígena Wayuu*.
   https://artesaniasdecolombia.com.co/Documentos/Contenido/29783_tejeduria_del_pueblo_indigena_wayuu.pdf

## Próxima compuerta

El lote 20 será Guanuru. Antes de generar se volverán a auditar su narración y
sus variantes, se separarán Guanuru, Yoruja y el pariente muerto, se comprobarán
los cinco modelos reutilizables y se congelará el denominador. En el corte
actual faltan nueve modelos propios; esa cifra es hipótesis de trabajo hasta
cerrar la relectura, no autorización para saltar la investigación.
