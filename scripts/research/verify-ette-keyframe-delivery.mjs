import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const folder = path.resolve(process.argv[2]);
const read = name => JSON.parse(fs.readFileSync(path.join(folder, name), 'utf8'));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const core = JSON.parse(execFileSync(process.execPath, [path.join(import.meta.dirname, 'audit-ette-keyframe-campaign.mjs'), folder, '--require-complete'], { encoding: 'utf8' }));
const selection = read('selection.complete.v1.json');
const jobs = read('jobs.complete.v1.json');
const review = read('review.complete.v1.json');
const intermediates = read('intermediates.v1.json').entries;
const selected = selection.myths.flatMap(m => m.selected);
check(selection.myths.length === 23 && selected.length === 157, 'Aggregate selection count');
check(new Set(selection.myths.map(m => m.myth_id)).size === 23, 'Duplicate myth');
for (const myth of selection.myths) {
  const local = JSON.parse(fs.readFileSync(myth.selection_file, 'utf8')).selected;
  check(JSON.stringify(local.map(e => e.sha256)) === JSON.stringify(myth.selected.map(e => e.sha256)), 'Aggregate/local mismatch: ' + myth.slug);
}
check(intermediates.length === 37 && new Set(intermediates.map(e => e.sha256)).size === 37, 'Intermediate count/uniqueness');
for (const e of intermediates) {
  check(!selected.some(s => s.sha256 === e.sha256), 'Intermediate selected: ' + e.file);
  check(hash(e.file) === e.sha256 && hash(e.prompt_file) === e.prompt_sha256, 'Intermediate digest: ' + e.file);
  check(fs.statSync(e.file).size === e.bytes, 'Intermediate bytes: ' + e.file);
  const metadata = await sharp(e.file).metadata();
  check(metadata.width === 1024 && metadata.height === 1536 && metadata.format === 'jpeg', 'Intermediate format: ' + e.file);
  for (const input of e.inputs) check(hash(input.file) === input.sha256, 'Intermediate input digest: ' + input.file);
}
const newSelected = selection.myths.filter(m => !m.preserved).flatMap(m => m.selected);
const sortedHashes = entries => entries.map(e => e.sha256).sort().join('\n');
check(jobs.selected_renders.length === 149 && sortedHashes(jobs.selected_renders) === sortedHashes(newSelected), 'Selected jobs mismatch');
check(sortedHashes(jobs.unselected_intermediates) === sortedHashes(intermediates), 'Intermediate jobs mismatch');
const durations = [...newSelected, ...intermediates].map(e => e.duration_seconds).sort((a, b) => a - b);
check(durations.length === 186 && durations.every(n => Number.isFinite(n) && n > 0), 'Render durations missing');
check(Math.abs(durations.reduce((a, b) => a + b, 0) - jobs.metrics.aggregate_cli_seconds) < 0.11, 'Duration sum mismatch');
check(durations.at(-1) === jobs.metrics.max_seconds, 'Duration maximum mismatch');
const sheets = selection.myths.flatMap(m => m.review_sheets || []);
check(sheets.length === 47 && new Set(sheets).size === 47, 'Review sheet count');
check(review.new_frames_individually_viewed === 149 && review.new_myth_sequences_contact_sheets_viewed === 22, 'Review ledger counts');
const reviewFiles = [];
for (const file of sheets) {
  const metadata = await sharp(file).metadata();
  check(metadata.format === 'png', 'Review sheet format: ' + file);
  reviewFiles.push({ file, sha256: hash(file), bytes: fs.statSync(file).size, width: metadata.width, height: metadata.height, format: metadata.format });
}
const markdownFiles = ['GALERIA.md', 'GALERIA-COMPLETA.md', 'ESTADO.md', ...selection.myths.filter(m => !m.preserved).map(m => m.slug + '/GALERIA.md')];
let linksChecked = 0;
for (const name of markdownFiles) {
  const file = path.join(folder, name);
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/!?\[[^\]]*\]\(([^\n]+?)\)/g)) {
    let target = match[1].replace(/^<|>$/g, '').split('#')[0];
    if (!target || /^[a-z]+:\/\//i.test(target)) continue;
    target = path.resolve(path.dirname(file), target);
    linksChecked++;
    check(fs.existsSync(target), 'Broken link: ' + name + ' -> ' + target);
  }
}
console.log(JSON.stringify({ schema: 'ette-keyframe-delivery-verification/v1', verified_at: new Date().toISOString(), passed: core.passed && !failures.length, core, aggregate_myths: selection.myths.length, aggregate_selected: selected.length, intermediates_verified: intermediates.length, successful_new_cli_renders: durations.length, review_sheets_verified: reviewFiles.length, markdown_files_verified: markdownFiles.length, links_checked: linksChecked, review_files: reviewFiles, failures }, null, 2));
if (failures.length || !core.passed) process.exitCode = 1;
