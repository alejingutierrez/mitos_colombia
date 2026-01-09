# Sistema de Imágenes Verticales (9:16)

Sistema de generación y curaduría de imágenes verticales en formato 9:16 para uso editorial en redes sociales y medios digitales.

## Características

- 🎨 **Generación automática** de imágenes verticales (9:16) usando OpenAI GPT Image
- 📝 **Edición de prompts** individuales y base para cada entidad
- 🔄 **Regeneración** de imágenes con eliminación automática de la versión anterior
- 🗂️ **Curaduría visual** con interfaz de cards paginadas
- 🎯 **Cobertura completa**: Mitos, Comunidades, Categorías y Regiones
- ☁️ **Almacenamiento** en Vercel Blob con URLs persistentes

## Estructura de Base de Datos

### Tabla `vertical_images`

```sql
CREATE TABLE vertical_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_type TEXT NOT NULL,        -- 'myth', 'community', 'category', 'region'
  entity_id INTEGER NOT NULL,       -- ID de la entidad en su tabla respectiva
  entity_name TEXT NOT NULL,        -- Nombre de la entidad
  entity_slug TEXT NOT NULL,        -- Slug para nombres de archivo
  base_prompt TEXT NOT NULL,        -- Prompt base para el tipo de entidad
  custom_prompt TEXT,               -- Prompt específico de la entidad
  image_url TEXT,                   -- URL en Vercel Blob
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

## Configuración Inicial

### 1. Ejecutar Migraciones

```bash
# Crear tabla vertical_images
sqlite3 data/mitos.sqlite < scripts/create-vertical-images.sql

# Agregar campos de imagen a taxonomías
sqlite3 data/mitos.sqlite < scripts/add-image-fields-taxonomy.sql
```

### 2. Popular Prompts de Taxonomía

Este paso genera prompts automáticamente para comunidades, categorías y regiones usando IA:

```bash
node scripts/populate-taxonomy-prompts.js
```

El script:
- Genera prompts culturalmente apropiados para cada entidad
- Usa GPT-4 para crear descripciones detalladas
- Procesa aproximadamente:
  - 6 regiones
  - 42 comunidades
  - 599 categorías

**Nota**: Este proceso puede tomar varios minutos debido al rate limiting de la API.

## Uso del Sistema

### Acceso al Panel de Admin

1. Navega a `/admin/vertical-images`
2. Inicia sesión con las credenciales de admin
3. Verás el dashboard de curaduría

### Generación de Imágenes

#### Opción A: Generación Masiva (API)

```bash
# Generar 10 imágenes (prioriza mitos 70%, comunidades 15%, categorías 10%, regiones 5%)
curl -X POST http://localhost:3000/api/admin/vertical-images/generate \
  -H "Authorization: Basic $(echo -n 'admin:password' | base64)" \
  -H "Content-Type: application/json" \
  -d '{"count": 10}'
```

#### Opción B: Curaduría Individual (UI)

1. En el panel `/admin/vertical-images`
2. Filtra por tipo de entidad si lo deseas
3. Para cada imagen:
   - **Editar Prompt Base**: Click en "Editar" junto a "Prompt Base"
   - **Editar Prompt Individual**: Click en "Editar" junto a "Prompt Individual"
   - **Regenerar Imagen**: Click en "Regenerar Imagen" (elimina la anterior)

### Filtros Disponibles

- **Todos**: Muestra todas las imágenes verticales
- **Mitos**: Solo imágenes de mitos
- **Comunidades**: Solo imágenes de comunidades indígenas
- **Categorías**: Solo imágenes de categorías/tags
- **Regiones**: Solo imágenes de regiones geográficas

### Paginación

- 20 imágenes por página
- Navegación con botones Anterior/Siguiente
- Indicador de página actual

## API Endpoints

### `GET /api/admin/vertical-images/list`

Lista imágenes verticales con paginación.

**Parámetros:**
- `page` (opcional, default: 1)
- `limit` (opcional, default: 20)
- `entityType` (opcional): 'myth', 'community', 'category', 'region'

**Respuesta:**
```json
{
  "items": [...],
  "total": 150,
  "page": 1,
  "limit": 20,
  "totalPages": 8
}
```

### `POST /api/admin/vertical-images/generate`

Genera nuevas imágenes verticales.

**Body:**
```json
{
  "count": 10
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Generadas 10 de 10 imágenes verticales",
  "generated": [...],
  "total": 10
}
```

### `POST /api/admin/vertical-images/update-prompt`

Actualiza prompts (base o individual).

**Body:**
```json
{
  "id": 123,
  "basePrompt": "Nuevo prompt base...",
  "customPrompt": "Prompt específico..."
}
```

### `POST /api/admin/vertical-images/regenerate`

Regenera una imagen (elimina la anterior).

**Body:**
```json
{
  "id": 123
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Imagen regenerada exitosamente",
  "data": {...}
}
```

### `GET /api/admin/vertical-images/generate`

Obtiene estadísticas de imágenes pendientes.

**Respuesta:**
```json
{
  "total": 647,
  "breakdown": {
    "myths": 500,
    "communities": 42,
    "categories": 99,
    "regions": 6
  }
}
```

## Prompts Base por Tipo

### Mitos
```
Ilustración vertical cinematográfica (9:16) de alta calidad artística para uso editorial.
Estilo místico y atmosférico con iluminación dramática. Paleta de colores rica y vibrante
inspirada en la naturaleza colombiana. Composición vertical que funciona perfectamente
para formato de historia o reel. NO incluir texto, desnudez ni violencia gráfica.
```

### Comunidades
```
Ilustración vertical (9:16) que representa la cultura y tradiciones de una comunidad
indígena colombiana. Elementos culturales auténticos, vestimenta tradicional, y conexión
con la naturaleza. Estilo artístico respetuoso y educativo. Composición vertical para
formato editorial.
```

### Categorías
```
Ilustración vertical conceptual (9:16) que representa una categoría temática de mitología
colombiana. Estilo artístico simbólico y místico. Composición vertical con elementos
icónicos y memorables.
```

### Regiones
```
Paisaje vertical (9:16) que captura la esencia y biodiversidad de una región colombiana.
Elementos naturales característicos, flora y fauna endémica. Estilo fotorrealista con
toques artísticos. Composición vertical dramática.
```

## Especificaciones Técnicas

### Formato de Imagen
- **Dimensiones**: 1024x1536 pixels (9:16)
- **Formato**: PNG
- **Calidad**: High
- **Modelo**: gpt-image-1-mini

### Almacenamiento
- **Servicio**: Vercel Blob Storage
- **Ruta**: `vertical/{entity_type}/{slug}-{timestamp}.png`
- **Acceso**: Público
- **Tipo de contenido**: image/png

### Límites y Tiempos
- **Timeout**: 300 segundos (5 minutos)
- **Límite de generación**: 50 imágenes por solicitud
- **Tiempo estimado**: 1-2 minutos por imagen

## Flujo de Trabajo Recomendado

1. **Inicial**: Popular prompts de taxonomía
   ```bash
   node scripts/populate-taxonomy-prompts.js
   ```

2. **Generación masiva**: Generar imágenes para todas las entidades
   ```bash
   # Generar en batches de 20 para evitar timeouts
   curl -X POST .../generate -d '{"count": 20}'
   ```

3. **Curaduría**: Revisar y ajustar en `/admin/vertical-images`
   - Editar prompts que no generaron buenos resultados
   - Regenerar imágenes que no cumplen con la calidad esperada

4. **Refinamiento**: Iterar sobre prompts individuales
   - Agregar detalles específicos a entidades importantes
   - Ajustar prompts base si hay patrones comunes de mejora

## Casos de Uso

### Redes Sociales
- Instagram Stories
- Instagram Reels
- TikTok
- Facebook Stories
- Pinterest Pins

### Medios Digitales
- Banners verticales para móvil
- Contenido editorial para apps
- Material promocional vertical

### Impresión
- Posters verticales
- Folletos
- Material educativo

## Troubleshooting

### "No hay entidades sin imágenes verticales"
- Ya se generaron todas las imágenes disponibles
- Verifica que las taxonomías tengan `image_prompt` configurado

### Error de timeout
- Reduce el número de imágenes por solicitud
- El límite de 5 minutos puede no ser suficiente para muchas imágenes

### Imagen rechazada por moderación
- El sistema intenta reescribir el prompt automáticamente
- Si persiste, edita el prompt manualmente para hacerlo más seguro

### Base de datos locked
- Asegúrate de que no haya múltiples procesos accediendo a SQLite
- En producción, usa PostgreSQL para evitar este problema

## Próximos Pasos

- [ ] Integración con sitio web (actualmente solo para uso editorial)
- [ ] Sistema de aprobación de imágenes
- [ ] Exportación masiva de imágenes
- [ ] Estadísticas de uso y popularidad
- [ ] Integración con herramientas de diseño
