# AGENTS Guide

## Vision del proyecto
Crear un sitio web moderno de contenidos que recopile todos los mitos de Colombia. Debe sentirse actual, elegante y facil de explorar, con un enfoque editorial tipo blog. El sitio debe estar optimizado para SEO, con navegacion intuitiva y performance alta.

## Alcance inicial (fase 0)
- El repo esta vacio; se debe iniciar el proyecto desde cero.
- Definir la estructura base, componentes, estilos y librerias.
- Preparar una arquitectura que luego integre datos desde un Excel con los mitos.

## Encargo para agentes de IA
- Proponer y construir la estructura del proyecto (carpetas, rutas, layouts).
- Diseñar el header, navegacion por categorias y pagina de listado de mitos.
- Definir un sistema de diseno moderno: tipografia, paleta, espaciado, sombras.
- Implementar animaciones sutiles y modernas (page load, hover, reveal).
- Garantizar SEO (metadatos, estructura semantica, Open Graph).
- Proponer librerias actuales (ej: Tailwind, libs de animacion, UI).

## Direccion visual
- Estilo: moderno, limpio, editorial; inspirado en glass design sin excesos.
- Colores: referencia sutil a Colombia (verde selva, azul rios, dorados tierra), sin usar la bandera literal.
- Contenido: tarjetas y layouts tipo revista, con jerarquia clara.
- Ilustraciones futuras: estilo paperquilling / paper cut.

## Estructura de contenidos
- Navegacion por categorias (region, tipo de mito, tematica).
- Busqueda y filtros simples.
- Pagina individual con lectura comoda (TOC, metadata, relacionados).

## Integraciones futuras
- OpenAI para enriquecer contenido y generar imagenes.
- Pipeline para importar mitos desde Excel.

## Entregables esperados
- Layout base y paginas principales (home, categorias, detalle).
- Componentes reutilizables (cards, badges, breadcrumbs, nav).
- Tokens de diseno (variables, escalas tipograficas, colores).
- Documentacion breve de decisiones tecnicas y de diseno.

## Flujo Docker
- Despues de cada ajuste relevante, recrear el contenedor con `docker-compose up -d --build`.

## Vercel + Neon (operacion)
- No se guardan secretos en el repo. Usa `.env` local (ignorado) o variables en Vercel.
- Configura `POSTGRES_URL` (Neon) y opcionalmente `POSTGRES_URL_NON_POOLING`.
- **`npm run db:import:pg` NO es rutina: es un seed DESTRUCTIVO de arranque.** Vacía y reconstruye `myths`, `regions`, `communities`, `tags`, `myth_tags` y `myth_keywords` desde `docs/mitos_seo_actualizados.xlsx` (una foto de enero de 2026, con menos mitos que la base viva) y, por CASCADE, borra tambien los dossiers editoriales (`editorial_myths` + sus tags, keywords y notas de investigacion) y los comentarios. Ademas `vertical_images` y `tarot_cards` guardan ids sin llave foranea: sobreviven al borrado y quedan huerfanas (reasociables por `entity_slug` / `myth_slug`). No hay vuelta atras salvo restaurar un backup.
  - Para ver que se destruiria, sin tocar nada: `source .env && DESTRUCTIVE_IMPORT_DRY_RUN=yes npm run db:import:pg` (solo lecturas; imprime las tablas y sus filas reales).
  - Para ejecutarlo de verdad hay que confirmarlo a mano; el script se niega por defecto y exige la segunda bandera cuando el destino no es local: `source .env && CONFIRM_DESTRUCTIVE_IMPORT=yes CONFIRM_PRODUCTION_WIPE=yes npm run db:import:pg`. Saca backup verificado antes.
  - Para actualizar contenido en produccion NO uses este script: edita por el admin o escribe una migracion puntual.
- Para Vercel CLI, usa `VERCEL_TOKEN` en tu shell y el archivo `.vercel/project.json` para linkear el proyecto.

## Seguridad y secretos
- Nunca versionar `.claude/settings.local.json`: guarda los permisos de una maquina concreta y es donde mas facil se cuela un token. Ya esta en `.gitignore`; `.claude/launch.json` si se versiona porque solo declara el puerto de dev.
- Nunca escribir un token dentro de una regla de allow. En vez de `Bash(vercel --prod --token="...")`, exporta `VERCEL_TOKEN` en tu shell y deja la regla generica: `Bash(vercel --prod:*)`. La CLI de Vercel lee `VERCEL_TOKEN` sola.
- Lo mismo aplica a `OPENAI_API_KEY`, `POSTGRES_URL`, `BOLD_*` y a las llaves de Bedrock: van en `.env` local o en las variables de Vercel, nunca en el repo ni en un comando de ejemplo.
- Chequeo antes de cada push (las tres salidas deben estar vacias, salvo `.claude/launch.json`):

```bash
git ls-files | grep -E '(^|/)\.env' | grep -v '\.env\.example$'
git ls-files .claude/ | grep -v '^\.claude/launch\.json$'
git diff --cached -U0 | grep -nEi 'token=|api[_-]?key|secret|password|AKIA|sk-|vercel_blob_rw_'
```

- Si un secreto ya llego a un commit: primero rotarlo o revocarlo (el valor publicado ya no es confiable) y despues limpiar la historia. El orden inverso no sirve de nada.
