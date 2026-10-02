import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ASSETS = new Set(["cover", "secondary", "tertiary"]);

export async function GET(_request, { params }) {
  const { slug, asset } = await params;
  if (
    !/^[a-z0-9-]+$/.test(slug || "") ||
    !ALLOWED_ASSETS.has(asset)
  ) {
    return new Response("Not found", { status: 404 });
  }

  const mythDirectory = path.join(
    process.cwd(),
    "artifacts",
    "instagram",
    slug
  );
  try {
    const media = JSON.parse(
      await fs.readFile(path.join(mythDirectory, "media.json"), "utf8")
    );
    const entry = media.assets?.[asset];
    if (!entry?.file || !entry?.mime) {
      return new Response("Not found", { status: 404 });
    }
    const destination = path.resolve(mythDirectory, entry.file);
    const relative = path.relative(mythDirectory, destination);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      return new Response("Not found", { status: 404 });
    }
    const bytes = await fs.readFile(destination);
    return new Response(bytes, {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": entry.mime,
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
