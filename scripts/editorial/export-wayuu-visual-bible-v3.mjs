#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { wayuuVisualBibleV3 } from "../../editorial/wayuu/visual-bible-v3.mjs";

const target = path.resolve("content/mitos-visuales/wayuu.v3.json");
await fs.mkdir(path.dirname(target), { recursive: true });
await fs.writeFile(target, `${JSON.stringify(wayuuVisualBibleV3, null, 2)}\n`, "utf8");
console.log(target);
