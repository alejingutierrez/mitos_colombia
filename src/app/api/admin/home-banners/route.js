import { NextResponse } from "next/server";
import OpenAI from "openai";
import { put } from "@vercel/blob";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db.js";
import { getHomeBannerDefaults } from "../../../../lib/home-banners.js";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

async function ensureHomeBanners() {
  const defaults = getHomeBannerDefaults();
  if (!defaults.length) {
    return;
  }

  if (isPostgres()) {
    const db = getSqlClient();
    const values = [];
    const placeholders = defaults.map((banner, index) => {
      const offset = index * 9;
      values.push(
        banner.slug,
        banner.title,
        banner.subtitle,
        banner.description,
        banner.cta_label,
        banner.cta_href,
        banner.image_prompt,
        banner.order_index,
        true
      );
      return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, $${offset + 6}, $${offset + 7}, $${offset + 8}, $${offset + 9})`;
    });

    await db.query(
      `INSERT INTO home_banners (
        slug,
        title,
        subtitle,
        description,
        cta_label,
        cta_href,
        image_prompt,
        order_index,
        is_active
      ) VALUES ${placeholders.join(", ")}
      ON CONFLICT (slug) DO NOTHING`,
      values
    );
  } else {
    const db = getSqliteDbWritable();
    const insert = db.prepare(
      `INSERT OR IGNORE INTO home_banners (
        slug,
        title,
        subtitle,
        description,
        cta_label,
        cta_href,
        image_prompt,
        order_index,
        is_active
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );

    const transaction = db.transaction((items) => {
      items.forEach((banner) => {
        insert.run(
          banner.slug,
          banner.title,
          banner.subtitle,
          banner.description,
          banner.cta_label,
          banner.cta_href,
          banner.image_prompt,
          banner.order_index,
          1
        );
      });
    });
    transaction(defaults);
  }
}

async function listHomeBanners() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        slug,
        title,
        subtitle,
        description,
        cta_label,
        cta_href,
        image_prompt,
        image_url,
        order_index,
        is_active
      FROM home_banners
      ORDER BY order_index ASC, id ASC
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  const rows = db.prepare(
    `SELECT
      slug,
      title,
      subtitle,
      description,
      cta_label,
      cta_href,
      image_prompt,
      image_url,
      order_index,
      is_active
    FROM home_banners
    ORDER BY order_index ASC, id ASC`
  ).all();
  return rows;
}

async function countPendingBanners() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT COUNT(*)::int AS count
      FROM home_banners
      WHERE is_active = TRUE AND image_url IS NULL
    `;
    return result.rows?.[0]?.count ?? result[0]?.count ?? 0;
  }

  const db = getSqliteDb();
  const row = db
    .prepare(
      "SELECT COUNT(*) AS count FROM home_banners WHERE is_active = 1 AND image_url IS NULL"
    )
    .get();
  return row?.count || 0;
}

async function updateHomeBannerImage({ slug, imageUrl, prompt }) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE home_banners
      SET image_url = ${imageUrl},
          image_prompt = ${prompt},
          updated_at = NOW()
      WHERE slug = ${slug}
      RETURNING slug, title, image_url
    `;
    if (!result || result.length === 0) {
      throw new Error(`No banner found for slug ${slug}`);
    }
    return result[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `UPDATE home_banners
     SET image_url = ?, image_prompt = ?, updated_at = datetime('now')
     WHERE slug = ?`
  );
  const info = stmt.run(imageUrl, prompt, slug);
  if (info.changes === 0) {
    throw new Error(`No banner found for slug ${slug}`);
  }
  return { slug, image_url: imageUrl };
}

async function updateHomeBannerPrompt({ slug, prompt }) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE home_banners
      SET image_prompt = ${prompt},
          updated_at = NOW()
      WHERE slug = ${slug}
      RETURNING slug, title, image_prompt
    `;
    if (!result || result.length === 0) {
      throw new Error(`No banner found for slug ${slug}`);
    }
    return result[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `UPDATE home_banners
     SET image_prompt = ?, updated_at = datetime('now')
     WHERE slug = ?`
  );
  const info = stmt.run(prompt, slug);
  if (info.changes === 0) {
    throw new Error(`No banner found for slug ${slug}`);
  }
  return { slug, image_prompt: prompt };
}

async function generateBannerImage(prompt, slug) {
  const enhancedPrompt = `Ilustracion horizontal (16:9) de alta calidad editorial, estilo paper quilling + paper cut. Sin texto, sin logos, sin marcas comerciales.

${prompt}

ESPECIFICACIONES TECNICAS:
- Formato horizontal 16:9 (1792x1024)
- Estilo artesanal, textura de papel visible
- Paleta inspirada en verde selva, azul rio y dorado tierra
- Contenido respetuoso, educativo y familiar`;

  const response = await openai.images.generate({
    model: "gpt-image-1-mini",
    prompt: enhancedPrompt,
    moderation: "low",
    n: 1,
    size: "1792x1024",
    quality: "high",
  });

  const b64Data = response.data?.[0]?.b64_json;

  if (!b64Data) {
    const imageUrl = response.data?.[0]?.url;
    if (imageUrl) {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch image: ${imageResponse.status}`);
      }
      const arrayBuffer = await imageResponse.arrayBuffer();
      const imageBuffer = Buffer.from(arrayBuffer);
      const filename = `banners/home/${slug}-${Date.now()}.png`;
      const blob = await put(filename, imageBuffer, {
        access: "public",
        contentType: "image/png",
      });
      return blob.url;
    }
    throw new Error("No base64 data or URL received from OpenAI");
  }

  const imageBuffer = Buffer.from(b64Data, "base64");
  const filename = `banners/home/${slug}-${Date.now()}.png`;
  const blob = await put(filename, imageBuffer, {
    access: "public",
    contentType: "image/png",
  });
  return blob.url;
}

export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureHomeBanners();
    const banners = await listHomeBanners();
    const pending = await countPendingBanners();
    return NextResponse.json({ banners, pending });
  } catch (error) {
    console.error("[HOME-BANNERS] GET error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load banners" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureHomeBanners();
    const body = await request.json();
    const action = body?.action || "generate";

    if (action === "update-prompt") {
      const slug = body?.slug;
      const prompt = body?.image_prompt;
      if (!slug || !prompt) {
        return NextResponse.json(
          { error: "Missing slug or image_prompt" },
          { status: 400 }
        );
      }
      const updated = await updateHomeBannerPrompt({ slug, prompt });
      return NextResponse.json({ updated });
    }

    const count = Math.max(1, Number(body?.count || 1));
    const slug = body?.slug;
    const customPrompt = body?.image_prompt;

    let targets = [];

    if (slug) {
      const all = await listHomeBanners();
      const banner = all.find((item) => item.slug === slug);
      if (!banner) {
        return NextResponse.json(
          { error: "Banner not found" },
          { status: 404 }
        );
      }
      targets = [banner];
    } else {
      if (isPostgres()) {
        const db = getSqlClient();
        const result = await db`
          SELECT
            slug,
            title,
            subtitle,
            description,
            cta_label,
            cta_href,
            image_prompt,
            image_url,
            order_index,
            is_active
          FROM home_banners
          WHERE is_active = TRUE AND image_url IS NULL
          ORDER BY order_index ASC, id ASC
          LIMIT ${count}
        `;
        targets = result.rows || result;
      } else {
        const db = getSqliteDb();
        targets = db
          .prepare(
            `SELECT
              slug,
              title,
              subtitle,
              description,
              cta_label,
              cta_href,
              image_prompt,
              image_url,
              order_index,
              is_active
            FROM home_banners
            WHERE is_active = 1 AND image_url IS NULL
            ORDER BY order_index ASC, id ASC
            LIMIT ?`
          )
          .all(count);
      }
    }

    if (!targets.length) {
      return NextResponse.json({ generated: [], message: "No pending banners" });
    }

    const generated = [];

    for (const banner of targets) {
      const prompt = customPrompt || banner.image_prompt;
      try {
        const imageUrl = await generateBannerImage(prompt, banner.slug);
        const updated = await updateHomeBannerImage({
          slug: banner.slug,
          imageUrl,
          prompt,
        });
        generated.push({
          slug: banner.slug,
          title: banner.title,
          image_url: imageUrl,
          success: true,
          updated,
        });
      } catch (error) {
        console.error("[HOME-BANNERS] generate error:", error);
        generated.push({
          slug: banner.slug,
          title: banner.title,
          error: error.message || "Generation failed",
          success: false,
        });
      }
    }

    return NextResponse.json({ generated });
  } catch (error) {
    console.error("[HOME-BANNERS] POST error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate banner" },
      { status: 500 }
    );
  }
}
