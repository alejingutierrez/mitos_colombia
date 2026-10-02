import { NextResponse } from "next/server";
import OpenAI from "openai";
import { put } from "@vercel/blob";
import { isPostgres, getSqlClient, getSqliteDb, getSqliteDbWritable } from "../../../../../lib/db.js";
import {
  buildBlobFilename,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_PRESETS,
} from "../../../../../lib/image-generation.js";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 minutes max for image generation

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function rewritePromptSafely(originalPrompt) {
  const rewriteResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Eres un experto en reescribir prompts para generación de imágenes. Tu trabajo es tomar un prompt de un mito colombiano y reescribirlo para que sea apropiado y seguro, eliminando cualquier referencia a desnudez, contenido sexual, violencia gráfica o elementos que puedan ser rechazados por sistemas de moderación. Mantén el espíritu cultural y educativo del mito.",
      },
      {
        role: "user",
        content: `Reescribe este prompt de manera segura, apropiada y educativa, manteniendo el contexto cultural pero eliminando cualquier elemento potencialmente problemático:\n\n${originalPrompt}`,
      },
    ],
    temperature: 0.3,
  });

  return rewriteResponse.choices[0].message.content;
}

function isSafetyViolation(error) {
  return (
    error?.message?.includes("safety") ||
    error?.message?.includes("rejected by the safety system") ||
    error?.code === "content_policy_violation"
  );
}

// Basic auth middleware
function checkAuth(request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "admin";

  return username === validUsername && password === validPassword;
}

// Prompt base para imágenes verticales editoriales
const BASE_PROMPTS = {
  myth: "Imagen vertical editorial de mito colombiano como fotografia frontal de una pieza fisica de papel artesanal, con geografia, simbolos culturales y escena principal clara. Sin texto, logos, desnudez ni violencia grafica.",
  community: "Imagen vertical editorial sobre una comunidad o territorio colombiano como trabajo real de paper cut y paper relief fotografiado, con elementos culturales respetuosos y naturaleza local. Sin texto.",
  category: "Imagen vertical editorial de categoria tematica de mitologia colombiana como tableau artesanal de papel, simbolico, tactil y culturalmente situado. Sin texto.",
  region: "Imagen vertical editorial de region colombiana como paisaje fisico construido en capas de papel, con biodiversidad, geografia y cultura visual local. Sin texto."
};

// Generate image using OpenAI and upload to Vercel Blob
async function generateVerticalImage(prompt, slug, entityType, entity = {}, isRetry = false) {
  try {
    console.log(`[IMG-VERTICAL] Generating vertical image for ${slug}...`);

    const enhancedPrompt = buildCraftImagePrompt({
      entity: {
        ...entity,
        type: entityType,
        name: entity.name,
        slug,
        prompt,
      },
      orientation: "vertical",
    });

    console.log(`[IMG-VERTICAL] Enhanced prompt length: ${enhancedPrompt.length} characters`);

    // Generate image with OpenAI
    const response = await openai.images.generate(
      buildImageGenerationParams({ prompt: enhancedPrompt, preset: "vertical" })
    );

    console.log(`[IMG-VERTICAL] OpenAI response received`);

    // Convert base64 to buffer. GPT Image models return b64_json by default.
    const imageBuffer = getImageDataBuffer(response);
    console.log(`[IMG-VERTICAL] Image decoded, size: ${imageBuffer.length} bytes`);

    // Upload to Vercel Blob Storage
    const filename = buildBlobFilename({ preset: "vertical", slug, entityType });
    console.log(`[IMG-VERTICAL] Uploading to Vercel Blob as ${filename}...`);

    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType: IMAGE_PRESETS.vertical.contentType,
    });

    console.log(`[IMG-VERTICAL] Upload successful! URL: ${blob.url}`);
    return blob.url;

  } catch (error) {
    console.error("[IMG-VERTICAL] Error in generateVerticalImage:", error);
    if (isSafetyViolation(error) && !isRetry) {
      try {
        console.log("[IMG-VERTICAL] Safety violation detected. Rewriting prompt...");
        const safePrompt = await rewritePromptSafely(prompt);
        return await generateVerticalImage(safePrompt, slug, entityType, entity, true);
      } catch (rewriteError) {
        console.error("[IMG-VERTICAL] Safety fallback failed:", rewriteError);
        throw rewriteError;
      }
    }
    throw error;
  }
}

// Get all entities (myths, communities, categories, regions) without vertical images
async function getEntitiesForVerticalImages(limit = 20) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();

    const result = await db`
      (
        SELECT
          m.id,
          m.title as name,
          m.slug,
          m.image_prompt as prompt,
          m.excerpt,
          regions.name as region,
          COALESCE(communities.name, '') as community,
          'myth' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM myths m
        JOIN regions ON regions.id = m.region_id
        LEFT JOIN communities ON communities.id = m.community_id
        LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
        WHERE m.image_prompt IS NOT NULL AND vi.image_url IS NULL
        ORDER BY m.id
        LIMIT ${Math.ceil(limit * 0.7)}
      )
      UNION ALL
      (
        SELECT
          c.id,
          c.name,
          c.slug,
          c.image_prompt as prompt,
          NULL as excerpt,
          regions.name as region,
          c.name as community,
          'community' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM communities c
        JOIN regions ON regions.id = c.region_id
        LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
        WHERE c.image_prompt IS NOT NULL AND vi.image_url IS NULL
        ORDER BY c.id
        LIMIT ${Math.ceil(limit * 0.15)}
      )
      UNION ALL
      (
        SELECT
          t.id,
          t.name,
          t.slug,
          t.image_prompt as prompt,
          NULL as excerpt,
          'Varios' as region,
          '' as community,
          'category' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM tags t
        LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
        WHERE t.image_prompt IS NOT NULL AND vi.image_url IS NULL
        ORDER BY t.id
        LIMIT ${Math.ceil(limit * 0.1)}
      )
      UNION ALL
      (
        SELECT
          r.id,
          r.name,
          r.slug,
          r.image_prompt as prompt,
          NULL as excerpt,
          r.name as region,
          '' as community,
          'region' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM regions r
        LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
        WHERE r.image_prompt IS NOT NULL AND vi.image_url IS NULL
        ORDER BY r.id
        LIMIT ${Math.ceil(limit * 0.05)}
      )
      ORDER BY type, id
      LIMIT ${limit}
    `;

    return result.rows || result;
  } else {
    const db = getSqliteDb();
    const items = [];

    // Get myths
    const mythsStmt = db.prepare(`
      SELECT
        m.id,
        m.title as name,
        m.slug,
        m.image_prompt as prompt,
        m.excerpt,
        r.name as region,
        COALESCE(c.name, '') as community,
        'myth' as type,
        vi.id as vertical_image_id,
        vi.image_url as vertical_image_url
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
      WHERE m.image_prompt IS NOT NULL AND vi.image_url IS NULL
      ORDER BY m.id
      LIMIT ?
    `);
    items.push(...mythsStmt.all(Math.ceil(limit * 0.7)));

    // Get communities
    const communitiesStmt = db.prepare(`
      SELECT
        c.id,
        c.name,
        c.slug,
        c.image_prompt as prompt,
        NULL as excerpt,
        r.name as region,
        c.name as community,
        'community' as type,
        vi.id as vertical_image_id,
        vi.image_url as vertical_image_url
      FROM communities c
      JOIN regions r ON r.id = c.region_id
      LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
      WHERE c.image_prompt IS NOT NULL AND vi.image_url IS NULL
      ORDER BY c.id
      LIMIT ?
    `);
    items.push(...communitiesStmt.all(Math.ceil(limit * 0.15)));

    // Get categories
    const categoriesStmt = db.prepare(`
      SELECT
        t.id,
        t.name,
        t.slug,
        t.image_prompt as prompt,
        NULL as excerpt,
        'Varios' as region,
        '' as community,
        'category' as type,
        vi.id as vertical_image_id,
        vi.image_url as vertical_image_url
      FROM tags t
      LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
      WHERE t.image_prompt IS NOT NULL AND vi.image_url IS NULL
      ORDER BY t.id
      LIMIT ?
    `);
    items.push(...categoriesStmt.all(Math.ceil(limit * 0.1)));

    // Get regions
    const regionsStmt = db.prepare(`
      SELECT
        r.id,
        r.name,
        r.slug,
        r.image_prompt as prompt,
        NULL as excerpt,
        r.name as region,
        '' as community,
        'region' as type,
        vi.id as vertical_image_id,
        vi.image_url as vertical_image_url
      FROM regions r
      LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
      WHERE r.image_prompt IS NOT NULL AND vi.image_url IS NULL
      ORDER BY r.id
      LIMIT ?
    `);
    items.push(...regionsStmt.all(Math.ceil(limit * 0.05)));

    return items.slice(0, limit);
  }
}

function normalizeOrderedEntities(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => ({
      type: item?.entity_type || item?.entityType,
      id: Number.parseInt(item?.entity_id ?? item?.entityId, 10),
    }))
    .filter((item) => item.type && Number.isFinite(item.id));
}

async function getEntitiesByOrder(orderedEntities) {
  const isPg = isPostgres();
  const grouped = orderedEntities.reduce(
    (acc, item) => {
      if (!acc[item.type]) {
        return acc;
      }
      acc[item.type].push(item.id);
      return acc;
    },
    { myth: [], community: [], category: [], region: [] }
  );

  const rows = [];

  if (isPg) {
    const db = getSqlClient();

    if (grouped.myth.length) {
      const result = await db.query(
        `
        SELECT
          m.id,
          m.title as name,
          m.slug,
          m.image_prompt as prompt,
          m.excerpt,
          r.name as region,
          COALESCE(c.name, '') as community,
          'myth' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM myths m
        JOIN regions r ON r.id = m.region_id
        LEFT JOIN communities c ON c.id = m.community_id
        LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
        WHERE m.id = ANY($1)
      `,
        [grouped.myth]
      );
      rows.push(...result.rows);
    }

    if (grouped.community.length) {
      const result = await db.query(
        `
        SELECT
          c.id,
          c.name,
          c.slug,
          c.image_prompt as prompt,
          NULL as excerpt,
          r.name as region,
          c.name as community,
          'community' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM communities c
        JOIN regions r ON r.id = c.region_id
        LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
        WHERE c.id = ANY($1)
      `,
        [grouped.community]
      );
      rows.push(...result.rows);
    }

    if (grouped.category.length) {
      const result = await db.query(
        `
        SELECT
          t.id,
          t.name,
          t.slug,
          t.image_prompt as prompt,
          NULL as excerpt,
          'Varios' as region,
          '' as community,
          'category' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM tags t
        LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
        WHERE t.id = ANY($1)
      `,
        [grouped.category]
      );
      rows.push(...result.rows);
    }

    if (grouped.region.length) {
      const result = await db.query(
        `
        SELECT
          r.id,
          r.name,
          r.slug,
          r.image_prompt as prompt,
          NULL as excerpt,
          r.name as region,
          '' as community,
          'region' as type,
          vi.id as vertical_image_id,
          vi.image_url as vertical_image_url
        FROM regions r
        LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
        WHERE r.id = ANY($1)
      `,
        [grouped.region]
      );
      rows.push(...result.rows);
    }
  } else {
    const db = getSqliteDb();

    const fetchByIds = (table, nameField, type) => {
      const ids = grouped[type];
      if (!ids.length) return [];
      const placeholders = ids.map(() => "?").join(", ");
      if (type === "myth") {
        return db
          .prepare(
            `
            SELECT
              t.id,
              t.title as name,
              t.slug,
              t.image_prompt as prompt,
              t.excerpt,
              r.name as region,
              COALESCE(c.name, '') as community,
              'myth' as type,
              vi.id as vertical_image_id,
              vi.image_url as vertical_image_url
            FROM myths t
            JOIN regions r ON r.id = t.region_id
            LEFT JOIN communities c ON c.id = t.community_id
            LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = t.id
            WHERE t.id IN (${placeholders})
          `
          )
          .all(...ids);
      }
      if (type === "community") {
        return db
          .prepare(
            `
            SELECT
              t.id,
              t.name,
              t.slug,
              t.image_prompt as prompt,
              NULL as excerpt,
              r.name as region,
              t.name as community,
              'community' as type,
              vi.id as vertical_image_id,
              vi.image_url as vertical_image_url
            FROM communities t
            JOIN regions r ON r.id = t.region_id
            LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = t.id
            WHERE t.id IN (${placeholders})
          `
          )
          .all(...ids);
      }
      return db
        .prepare(
          `
          SELECT
            t.id,
            t.${nameField} as name,
            t.slug,
            t.image_prompt as prompt,
            NULL as excerpt,
            ${type === "region" ? "t.name" : "'Varios'"} as region,
            '' as community,
            '${type}' as type,
            vi.id as vertical_image_id,
            vi.image_url as vertical_image_url
          FROM ${table} t
          LEFT JOIN vertical_images vi ON vi.entity_type = '${type}' AND vi.entity_id = t.id
          WHERE t.id IN (${placeholders})
        `
        )
        .all(...ids);
    };

    rows.push(...fetchByIds("myths", "title", "myth"));
    rows.push(...fetchByIds("communities", "name", "community"));
    rows.push(...fetchByIds("tags", "name", "category"));
    rows.push(...fetchByIds("regions", "name", "region"));
  }

  const rowMap = new Map(rows.map((row) => [`${row.type}-${row.id}`, row]));
  return orderedEntities
    .map((item) => rowMap.get(`${item.type}-${item.id}`))
    .filter(Boolean);
}

// Create or update vertical image record
async function upsertVerticalImage(entityType, entityId, entityName, entitySlug, imageUrl, basePrompt, customPrompt = null) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();

    // Check if exists
    const existing = await db`
      SELECT id FROM vertical_images
      WHERE entity_type = ${entityType} AND entity_id = ${entityId}
    `;

    if (existing.length > 0) {
      // Update
      const result = await db`
        UPDATE vertical_images
        SET
          image_url = ${imageUrl},
          base_prompt = ${basePrompt},
          custom_prompt = ${customPrompt},
          updated_at = NOW()
        WHERE entity_type = ${entityType} AND entity_id = ${entityId}
        RETURNING id
      `;
      return result[0];
    } else {
      // Insert
      const result = await db`
        INSERT INTO vertical_images (
          entity_type, entity_id, entity_name, entity_slug,
          base_prompt, custom_prompt, image_url
        ) VALUES (
          ${entityType}, ${entityId}, ${entityName}, ${entitySlug},
          ${basePrompt}, ${customPrompt}, ${imageUrl}
        )
        RETURNING id
      `;
      return result[0];
    }
  } else {
    const db = getSqliteDbWritable();

    // Check if exists
    const existing = db.prepare(`
      SELECT id FROM vertical_images
      WHERE entity_type = ? AND entity_id = ?
    `).get(entityType, entityId);

    if (existing) {
      // Update
      const stmt = db.prepare(`
        UPDATE vertical_images
        SET
          image_url = ?,
          base_prompt = ?,
          custom_prompt = ?,
          updated_at = datetime('now')
        WHERE entity_type = ? AND entity_id = ?
      `);
      stmt.run(imageUrl, basePrompt, customPrompt, entityType, entityId);
      return { id: existing.id };
    } else {
      // Insert
      const stmt = db.prepare(`
        INSERT INTO vertical_images (
          entity_type, entity_id, entity_name, entity_slug,
          base_prompt, custom_prompt, image_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      const info = stmt.run(entityType, entityId, entityName, entitySlug, basePrompt, customPrompt, imageUrl);
      return { id: info.lastInsertRowid };
    }
  }
}

export async function POST(request) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"'
          }
        }
      );
    }

    const body = await request.json();
    const count = Math.min(Math.max(1, body.count || 1), 50);
    const orderedEntities = normalizeOrderedEntities(body.orderedEntities);

    // Get entities for vertical images
    const entities = orderedEntities.length
      ? await getEntitiesByOrder(orderedEntities)
      : await getEntitiesForVerticalImages(count);

    // Filter only those without vertical images
    const entitiesWithoutImages = entities.filter(e => !e.vertical_image_url);
    const entitiesToGenerate = orderedEntities.length
      ? entitiesWithoutImages.slice(0, count)
      : entitiesWithoutImages;

    if (entitiesToGenerate.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No hay entidades sin imágenes verticales",
        generated: [],
      });
    }

    const results = [];

    // Generate vertical images
    for (const entity of entitiesToGenerate) {
      try {
        console.log(`[GEN-VERTICAL] Starting generation for ${entity.type} ${entity.id}: ${entity.name}`);

        // Build complete prompt
        const basePrompt = BASE_PROMPTS[entity.type] || BASE_PROMPTS.myth;
        const fullPrompt = `${basePrompt}\n\n${entity.prompt}`;

        const imageUrl = await generateVerticalImage(
          fullPrompt,
          entity.slug,
          entity.type,
          entity
        );
        console.log(`[GEN-VERTICAL] Image generated successfully`);

        // Save to database
        await upsertVerticalImage(
          entity.type,
          entity.id,
          entity.name,
          entity.slug,
          imageUrl,
          basePrompt,
          entity.prompt
        );

        results.push({
          id: entity.id,
          name: entity.name,
          slug: entity.slug,
          type: entity.type,
          imageUrl: imageUrl,
          success: true,
        });

        console.log(`[GEN-VERTICAL] ✓ Complete for ${entity.type}: ${entity.name}`);
      } catch (error) {
        console.error(`[GEN-VERTICAL] ✗ Failed for ${entity.name}:`, error);
        results.push({
          id: entity.id,
          name: entity.name,
          slug: entity.slug,
          type: entity.type,
          error: error.message,
          success: false,
        });
      }
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      success: true,
      message: `Generadas ${successCount} de ${count} imágenes verticales`,
      generated: results,
      total: entities.length,
    });

  } catch (error) {
    console.error("Error in generate vertical images API:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate vertical images",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"'
          }
        }
      );
    }

    // Get count of entities without vertical images
    const isPg = isPostgres();
    let counts;

    if (isPg) {
      const db = getSqlClient();
      const result = await db`
        SELECT
          (SELECT COUNT(*) FROM myths m
           LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
           WHERE m.image_prompt IS NOT NULL AND vi.id IS NULL) as myths,
          (SELECT COUNT(*) FROM communities c
           LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
           WHERE c.image_prompt IS NOT NULL AND vi.id IS NULL) as communities,
          (SELECT COUNT(*) FROM tags t
           LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
           WHERE t.image_prompt IS NOT NULL AND vi.id IS NULL) as categories,
          (SELECT COUNT(*) FROM regions r
           LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
           WHERE r.image_prompt IS NOT NULL AND vi.id IS NULL) as regions
      `;
      const row = result.rows?.[0] || result[0];
      counts = {
        myths: parseInt(row.myths || 0),
        communities: parseInt(row.communities || 0),
        categories: parseInt(row.categories || 0),
        regions: parseInt(row.regions || 0),
      };
    } else {
      const db = getSqliteDb();

      const mythsCount = db.prepare(`
        SELECT COUNT(*) as count FROM myths m
        LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
        WHERE m.image_prompt IS NOT NULL AND vi.id IS NULL
      `).get().count;

      const communitiesCount = db.prepare(`
        SELECT COUNT(*) as count FROM communities c
        LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
        WHERE c.image_prompt IS NOT NULL AND vi.id IS NULL
      `).get().count;

      const categoriesCount = db.prepare(`
        SELECT COUNT(*) as count FROM tags t
        LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
        WHERE t.image_prompt IS NOT NULL AND vi.id IS NULL
      `).get().count;

      const regionsCount = db.prepare(`
        SELECT COUNT(*) as count FROM regions r
        LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
        WHERE r.image_prompt IS NOT NULL AND vi.id IS NULL
      `).get().count;

      counts = {
        myths: mythsCount,
        communities: communitiesCount,
        categories: categoriesCount,
        regions: regionsCount,
      };
    }

    const total = counts.myths + counts.communities + counts.categories + counts.regions;

    return NextResponse.json({
      total,
      breakdown: counts,
    });

  } catch (error) {
    console.error("Error getting vertical images count:", error);
    return NextResponse.json(
      { error: error.message || "Failed to get count" },
      { status: 500 }
    );
  }
}
