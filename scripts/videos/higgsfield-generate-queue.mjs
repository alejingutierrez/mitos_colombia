import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function probeClip(file) {
  const raw = execFileSync(
    "ffprobe",
    [
      "-v", "error",
      "-show_entries", "stream=codec_name,width,height,r_frame_rate:format=duration,size",
      "-of", "json",
      file,
    ],
    { encoding: "utf8" },
  );
  const probe = JSON.parse(raw);
  const video = probe.streams?.find((stream) => stream.width && stream.height);
  const duration = Number(probe.format?.duration);
  if (!video || video.width !== 1080 || video.height !== 1920 || duration < 4.8 || duration > 5.3) {
    throw new Error(`Clip inválido ${file}: ${raw}`);
  }
  return {
    codec: video.codec_name,
    width: video.width,
    height: video.height,
    fps: video.r_frame_rate,
    duration,
    size: Number(probe.format.size),
  };
}

export async function runHiggsfieldGenerateQueue({
  tab,
  root,
  slugs,
  recover = [],
  maxRuntimeMs = Number.POSITIVE_INFINITY,
}) {
  const startedAt = Date.now();
  const allLog = path.join(root, "content/videos/muiscas/higgsfield-browser-batch-v1.jsonl");
  const log = (entry) => fs.appendFile(
    allLog,
    `${JSON.stringify({ at: new Date().toISOString(), ...entry })}\n`,
  );

  const assetIds = async () => {
    const cards = tab.playwright.locator("[data-asset-id][data-job-status]");
    const ids = new Set();
    for (let index = 0; index < await cards.count(); index += 1) {
      const id = await cards.nth(index).getAttribute("data-asset-id");
      if (id) ids.add(id);
    }
    return ids;
  };

  async function removeActiveReference() {
    const remove = tab.playwright.locator('button[class*="-top-2"][class*="-right-2"]').first();
    if (!await remove.count()) return false;
    await remove.click();
    await sleep(400);
    return true;
  }

  async function pickerAssetIds() {
    const snapshot = await tab.playwright.domSnapshot();
    const ids = new Set();
    const matches = snapshot.matchAll(/button "([0-9a-f-]{36})"/gi);
    for (const match of matches) if (UUID_RE.test(match[1])) ids.add(match[1]);
    return ids;
  }

  async function uploadReference(file) {
    await tab.playwright.locator("button.gen-panel-reference-element-button").first().click();
    const dialog = tab.playwright.getByRole("dialog", { name: "Assets" });
    const picker = await dialog.count() ? dialog : tab.playwright.locator("body");
    const uploads = picker.getByRole("tab", { name: "Uploads", exact: true });
    if (await uploads.count()) await uploads.click();
    await sleep(350);

    const before = await pickerAssetIds();
    let chooser = null;
    let chooserError = null;
    for (let attempt = 0; attempt < 2 && !chooser; attempt += 1) {
      try {
        const chooserPromise = tab.playwright.waitForEvent("filechooser");
        await picker.getByRole("button", { name: "Upload media", exact: true }).click();
        chooser = await chooserPromise;
      } catch (error) {
        chooserError = error;
        await sleep(350);
      }
    }
    if (!chooser) throw chooserError ?? new Error("No abrió el selector de archivos");
    await chooser.setFiles(file);

    let newId = null;
    const uploadStartedAt = Date.now();
    while (Date.now() - uploadStartedAt < 90_000) {
      const after = await pickerAssetIds();
      newId = [...after].find((id) => !before.has(id)) ?? null;
      if (newId) {
        const card = tab.playwright.getByRole("button", { name: newId, exact: true });
        if (!/Checking/i.test(await card.innerText())) break;
      }
      await sleep(750);
    }
    if (!newId) throw new Error(`No apareció el asset subido para ${file}`);

    await tab.playwright.getByRole("button", { name: newId, exact: true }).click();
    await tab.playwright.getByRole("button", { name: "Close assets picker", exact: true }).click();
    await sleep(400);
    return newId;
  }

  async function assertCinemaSettings(referenceId) {
    const expectedButtons = ["Seedance 2.5", "References", "9:16", "1080p", "5s", "High"];
    for (const name of expectedButtons) {
      if (!await tab.playwright.getByRole("button", { name, exact: true }).count()) {
        throw new Error(`Falta la configuración ${name} en Cinema Studio`);
      }
    }
    const unlimited = tab.playwright.getByRole("switch", { name: "Unlimited mode" }).first();
    if ((await unlimited.getAttribute("data-state")) !== "on") {
      await unlimited.click();
      await sleep(600);
    }
    if ((await unlimited.getAttribute("data-state")) !== "on") {
      throw new Error("Unlimited no quedó activo en Cinema Studio");
    }
    if (!await tab.playwright.locator(`img[src*="${referenceId}"]`).count()) {
      throw new Error(`Referencia no seleccionada ${referenceId}`);
    }
  }

  async function submit(task, referenceId) {
    const prompt = tab.playwright.locator('[contenteditable="true"][aria-placeholder*="Describe the video"]');
    await prompt.fill(task.prompt);
    await assertCinemaSettings(referenceId);

    const before = await assetIds();
    const generate = tab.playwright.getByRole("button", { name: /Unlimited/i }).last();
    const buttonText = (await generate.textContent()).replace(/\s+/g, "");
    if (!buttonText.includes("UNLIMITED") && !buttonText.includes("Unlimited")) {
      throw new Error(`Botón no ilimitado: ${buttonText}`);
    }
    await generate.click();

    const submitStartedAt = Date.now();
    while (Date.now() - submitStartedAt < 20_000) {
      const after = await assetIds();
      const added = [...after].find((id) => !before.has(id));
      if (added) return added;
      await sleep(500);
    }
    throw new Error(`No apareció tarjeta de Cinema Studio para ${task.slug} toma ${task.shot}`);
  }

  async function download(source, destination) {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Descarga ${response.status}: ${source}`);
    const part = `${destination}.part`;
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(part, Buffer.from(await response.arrayBuffer()));
    const qa = await probeClip(part);
    await fs.rename(part, destination);
    return qa;
  }

  const tasks = [];
  for (const slug of slugs) {
    const mythDir = path.join(root, "content/videos/muiscas/videos", slug);
    const movement = JSON.parse(await fs.readFile(path.join(mythDir, "movimiento-v1.json"), "utf8"));
    for (const shot of movement.shots) {
      const destination = path.join(mythDir, "clips-v1", `c${String(shot.n).padStart(2, "0")}.mp4`);
      try {
        await probeClip(destination);
      } catch {
        tasks.push({ slug, shot: shot.n, prompt: shot.prompt, keyframe: path.resolve(mythDir, shot.keyframe), destination });
      }
    }
  }

  const recoveredKeys = new Set(recover.map((job) => `${job.slug}#${job.shot}`));
  const queue = tasks.filter((task) => !recoveredKeys.has(`${task.slug}#${task.shot}`));
  const inFlight = new Map();
  for (const job of recover) {
    const task = tasks.find((candidate) => candidate.slug === job.slug && candidate.shot === job.shot);
    if (!task) continue;
    inFlight.set(job.assetId, {
      ...task,
      assetId: job.assetId,
      referenceId: job.referenceId ?? null,
      submittedAt: job.submittedAt ?? new Date().toISOString(),
    });
  }

  let completed = 0;
  while (queue.length || inFlight.size) {
    if (!inFlight.size && queue.length) {
      const task = queue.shift();
      await removeActiveReference();
      const referenceId = await uploadReference(task.keyframe);
      const assetId = await submit(task, referenceId);
      const submittedAt = new Date().toISOString();
      inFlight.set(assetId, { ...task, assetId, referenceId, submittedAt });
      await log({
        event: "submitted_generate",
        slug: task.slug,
        shot: task.shot,
        uuid: referenceId,
        jobAssetId: assetId,
        mode: "unlimited",
        surface: "/generate",
      });
    }

    for (const [assetId, task] of [...inFlight]) {
      const card = tab.playwright.locator(`[data-asset-id="${assetId}"][data-job-status]`).first();
      if (!await card.count()) continue;
      const video = card.locator("video").first();
      let source = await video.count() ? await video.getAttribute("src") : null;
      if (!source && await video.count()) {
        const sourceNode = video.locator("source").first();
        source = await sourceNode.count() ? await sourceNode.getAttribute("src") : null;
      }
      if (!source && (await card.getAttribute("data-job-status")) === "completed") {
        const thumbnail = await card.locator("img").first().getAttribute("src");
        if (thumbnail) {
          const thumbnailUrl = new URL(thumbnail);
          const original = thumbnailUrl.searchParams.get("url") ?? thumbnail;
          const originalUrl = new URL(original);
          originalUrl.hostname = "d8j0ntlcm91z4.cloudfront.net";
          originalUrl.pathname = originalUrl.pathname.replace(/_thumbnail\.webp$/, ".mp4");
          source = originalUrl.toString();
        }
      }
      if (source?.includes("cloudfront.net")) {
        const qa = await download(source, task.destination);
        await log({
          event: "complete_generate",
          slug: task.slug,
          shot: task.shot,
          uuid: task.referenceId,
          jobAssetId: assetId,
          source,
          qa,
        });
        inFlight.delete(assetId);
        completed += 1;
        continue;
      }

      const text = await card.textContent();
      if (/failed|moderation|could not generate/i.test(text)) {
        await log({ event: "job_failed_generate", slug: task.slug, shot: task.shot, jobAssetId: assetId, text: text.slice(0, 500) });
        throw new Error(`Falló ${task.slug} toma ${task.shot}: ${text}`);
      }
      const age = Date.now() - Date.parse(task.submittedAt);
      if (age > 60 * 60_000) {
        await log({ event: "job_timeout_generate", slug: task.slug, shot: task.shot, jobAssetId: assetId, minutes: Math.round(age / 60_000) });
        throw new Error(`${task.slug} toma ${task.shot} sigue activa después de 60 minutos en Cinema Studio`);
      }
    }

    if (Date.now() - startedAt >= maxRuntimeMs) {
      const pending = [...inFlight.values()].map(({ slug, shot, assetId, referenceId, submittedAt }) => ({
        slug,
        shot,
        assetId,
        referenceId,
        submittedAt,
      }));
      await log({
        event: "generate_queue_yield",
        queuedLocally: queue.length,
        inFlight: pending,
        completedThisRun: completed,
      });
      return { completed, queuedLocally: queue.length, inFlight: pending, yielded: true };
    }
    await sleep(10_000);
  }

  await log({ event: "generate_queue_complete", completedThisRun: completed });
  return { completed };
}
