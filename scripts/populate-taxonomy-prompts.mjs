#!/usr/bin/env node

/**
 * Script para popular prompts de imagen en tablas de taxonomía
 * (communities, tags, regions)
 *
 * Uso: node scripts/populate-taxonomy-prompts.js
 */

import Database from "better-sqlite3";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "..", "data", "mitos.sqlite");
const db = new Database(dbPath);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Prompts base para cada tipo
const BASE_PROMPTS = {
  community: "Crea un prompt detallado en español para generar una imagen vertical (9:16) que represente visualmente a la comunidad indígena colombiana llamada '{name}'. La imagen debe capturar la esencia cultural, vestimenta tradicional, prácticas culturales y conexión con su territorio. Estilo artístico, respetuoso y educativo. NO incluir texto, desnudez ni violencia gráfica.",

  category: "Crea un prompt detallado en español para generar una imagen vertical (9:16) que represente el concepto '{name}' en el contexto de la mitología y cultura colombiana. Usa simbolismo, elementos visuales abstractos o concretos que evoquen este concepto. Estilo artístico y místico. NO incluir texto.",

  region: "Crea un prompt detallado en español para generar una imagen vertical (9:16) que capture la esencia natural y biodiversidad de la región {name} de Colombia. Incluye paisajes característicos, flora y fauna endémica, elementos geográficos distintivos. Estilo fotorrealista con toques artísticos. NO incluir texto ni personas."
};

async function generatePromptWithAI(entityType, entityName) {
  const systemPrompt = BASE_PROMPTS[entityType].replace('{name}', entityName);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Eres un experto en crear prompts para generación de imágenes. Tu trabajo es crear prompts descriptivos, detallados y efectivos en español para generar imágenes con DALL-E. Los prompts deben ser culturalmente sensibles y apropiados para contenido educativo."
        },
        {
          role: "user",
          content: systemPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    const prompt = response.choices[0].message.content.trim();
    console.log(`✓ Prompt generado para ${entityName}: ${prompt.substring(0, 100)}...`);
    return prompt;
  } catch (error) {
    console.error(`✗ Error generando prompt para ${entityName}:`, error.message);
    return null;
  }
}

async function populatePrompts(entityType, tableName) {
  console.log(`\n🔄 Procesando ${tableName}...`);

  // Get entities without prompts
  const entities = db.prepare(`
    SELECT id, name, slug
    FROM ${tableName}
    WHERE image_prompt IS NULL
    ORDER BY id
  `).all();

  console.log(`📊 Encontradas ${entities.length} entidades sin prompts en ${tableName}`);

  if (entities.length === 0) {
    console.log(`✓ Todas las entidades en ${tableName} ya tienen prompts`);
    return;
  }

  const updateStmt = db.prepare(`
    UPDATE ${tableName}
    SET image_prompt = ?
    WHERE id = ?
  `);

  let successCount = 0;
  let failCount = 0;

  for (const entity of entities) {
    const prompt = await generatePromptWithAI(entityType, entity.name);

    if (prompt) {
      updateStmt.run(prompt, entity.id);
      successCount++;
    } else {
      failCount++;
    }

    // Rate limiting - pausa pequeña entre requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`✅ ${tableName}: ${successCount} prompts generados, ${failCount} fallos`);
}

async function main() {
  console.log("🚀 Iniciando generación de prompts para taxonomías...\n");

  try {
    // Verificar que OpenAI API key esté configurada
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY no está configurada en las variables de entorno");
    }

    // Procesar cada tipo de entidad
    await populatePrompts("region", "regions");
    await populatePrompts("community", "communities");
    await populatePrompts("category", "tags");

    console.log("\n✅ Proceso completado exitosamente!");

    // Mostrar estadísticas finales
    const stats = {
      regions: db.prepare("SELECT COUNT(*) as count FROM regions WHERE image_prompt IS NOT NULL").get().count,
      communities: db.prepare("SELECT COUNT(*) as count FROM communities WHERE image_prompt IS NOT NULL").get().count,
      tags: db.prepare("SELECT COUNT(*) as count FROM tags WHERE image_prompt IS NOT NULL").get().count,
    };

    console.log("\n📊 Estadísticas finales:");
    console.log(`   Regiones con prompt: ${stats.regions}/6`);
    console.log(`   Comunidades con prompt: ${stats.communities}/42`);
    console.log(`   Categorías con prompt: ${stats.tags}/599`);

  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  } finally {
    db.close();
  }
}

main();
