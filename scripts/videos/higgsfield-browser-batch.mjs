import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

export async function runHiggsfieldBatch({ tab, root, slugs }) {
  const allLog = path.join(root, "content/videos/muiscas/higgsfield-browser-batch-v1.jsonl");
  const log = (entry) => fs.appendFile(
    allLog,
    `${JSON.stringify({ at: new Date().toISOString(), ...entry })}\n`,
  );

  const activeCounts = async () => ({
    processing: await tab.playwright.getByText("Processing", { exact: true }).count(),
    generating: await tab.playwright.getByText("Generating", { exact: true }).count(),
    queued: await tab.playwright.getByText("Queued", { exact: true }).count(),
  });

  const videoSources = async () => {
    const videos = tab.playwright.locator("video");
    const sources = [];
    for (let index = 0; index < await videos.count(); index += 1) {
      const source = await videos.nth(index).getAttribute("src");
      if (source) sources.push(source);
    }
    return sources;
  };

  const latestCloud = async () => (
    (await videoSources()).find((source) => source.includes("cloudfront.net")) || null
  );

  async function removeActiveReference() {
    const cards = tab.playwright.locator(".relative.group.select-none");
    for (let index = 0; index < await cards.count(); index += 1) {
      const card = cards.nth(index);
      if (!await card.locator("img").count()) continue;
      const buttons = card.getByRole("button");
      if (await buttons.count() < 2) continue;
      await buttons.first().click();
      await sleep(500);
      return true;
    }
    return false;
  }

  async function uploadReference(file) {
    await tab.playwright.getByText("Add references", { exact: false }).click();
    await sleep(400);
    const beforeButtons = tab.playwright.getByRole("button", { name: /^Select / });
    const before = new Set();
    for (let index = 0; index < await beforeButtons.count(); index += 1) {
      before.add(await beforeButtons.nth(index).getAttribute("aria-label"));
    }

    const uploadText = tab.playwright.getByText("Upload file", { exact: true });
    const uploadCard = uploadText.locator("..").locator("..").locator("..");
    const chooserPromise = tab.playwright.waitForEvent("filechooser");
    await uploadCard.click();
    const chooser = await chooserPromise;
    await chooser.setFiles(file);

    const started = Date.now();
    while (Date.now() - started < 90_000) {
      const uploading = await tab.playwright.getByText("Uploading...", { exact: true }).count();
      const checking = await tab.playwright.getByText("Checking content...", { exact: true }).count();
      if (!uploading && !checking) break;
      await sleep(750);
    }

    const afterButtons = tab.playwright.getByRole("button", { name: /^Select / });
    let newName = null;
    for (let index = 0; index < await afterButtons.count(); index += 1) {
      const name = await afterButtons.nth(index).getAttribute("aria-label");
      if (name && !before.has(name)) {
        newName = name;
        break;
      }
    }
    if (!newName) throw new Error(`No apareció el asset subido para ${file}`);
    await tab.playwright.getByRole("button", { name: newName }).click();
    await tab.playwright.getByRole("button", { name: "Close assets picker" }).click();
    await sleep(500);
    return newName.replace(/^Select /, "");
  }

  async function submit(shot, uuid) {
    await tab.playwright.getByRole("textbox").first().fill(shot.prompt);
    const elements = tab.playwright.getByRole("checkbox").first().locator("..");
    if ((await elements.textContent()).includes("Off")) await elements.click();

    const unlimited = tab.playwright.getByRole("switch", { name: "Unlimited mode" });
    if ((await unlimited.getAttribute("data-state")) !== "on") await unlimited.click();
    await sleep(250);
    if ((await unlimited.getAttribute("data-state")) !== "on") {
      throw new Error("Unlimited no quedó activo");
    }
    if (!await tab.playwright.locator(`img[src*="${uuid}"]`).count()) {
      throw new Error(`Referencia no seleccionada ${uuid}`);
    }

    const before = await latestCloud();
    const generate = tab.playwright.getByRole("button", { name: /Generate/ }).first();
    const buttonText = (await generate.textContent()).replace(/\s+/g, "");
    if (!buttonText.includes("Unlimited")) throw new Error(`Botón no ilimitado: ${buttonText}`);
    await generate.click();
    await sleep(1_200);
    const counts = await activeCounts();
    if (counts.processing + counts.generating + counts.queued === 0) {
      throw new Error(`La generación no arrancó para la toma ${shot.n}`);
    }
    return before;
  }

  async function waitForOutput(before, shot) {
    let sawActive = false;
    const started = Date.now();
    while (Date.now() - started < 45 * 60_000) {
      const counts = await activeCounts();
      const active = counts.processing + counts.generating + counts.queued;
      if (active > 0) sawActive = true;
      if (sawActive && active === 0) {
        await sleep(2_500);
        let source = await latestCloud();
        if (source && source !== before) return { source, retryable: false };
        await tab.goto("https://higgsfield.ai/ai/video");
        await sleep(3_500);
        source = await latestCloud();
        if (source && source !== before) return { source, retryable: false };
        return { source: null, retryable: true };
      }
      await sleep(10_000);
    }
    throw new Error(`La toma ${shot.n} sigue activa después de 45 minutos; no se reintenta en paralelo`);
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

  const completed = [];
  for (const slug of slugs) {
    const mythDir = path.join(root, "content/videos/muiscas/videos", slug);
    const movement = JSON.parse(await fs.readFile(path.join(mythDir, "movimiento-v1.json"), "utf8"));
    await removeActiveReference();

    for (const shot of movement.shots) {
      const destination = path.join(mythDir, "clips-v1", `c${String(shot.n).padStart(2, "0")}.mp4`);
      try {
        const qa = await probeClip(destination);
        completed.push({ slug, shot: shot.n, resumed: true, qa });
        continue;
      } catch {
        // El clip no existe o no pasó QA: se genera de forma normal.
      }

      const keyframe = path.resolve(mythDir, shot.keyframe);
      const uuid = await uploadReference(keyframe);
      let before = await submit(shot, uuid);
      await log({ event: "submitted", slug, shot: shot.n, uuid, before });
      let output = await waitForOutput(before, shot);
      if (output.retryable) {
        await log({ event: "retry", slug, shot: shot.n, uuid });
        before = await submit(shot, uuid);
        output = await waitForOutput(before, shot);
      }
      if (!output.source) throw new Error(`La toma ${shot.n} de ${slug} falló tras un reintento`);
      const qa = await download(output.source, destination);
      await log({ event: "complete", slug, shot: shot.n, uuid, source: output.source, qa });
      completed.push({ slug, shot: shot.n, resumed: false, qa });
      await removeActiveReference();
    }
    await log({ event: "myth_complete", slug, clips: movement.shots.length });
  }
  return completed;
}
