import { execFileSync } from 'node:child_process';
const files = execFileSync('git',['ls-files','-z'],{encoding:'utf8',maxBuffer:32*1024*1024}).split('\0').filter(Boolean);
// These two existing versioned skill documents contain repository doctrine, not machine permissions.
const repoDoctrine = new Set(['.claude/skills/enriquecimiento-mitos/SKILL.md','.claude/skills/produccion-mitos/SKILL.md']);
const unsafe = files.filter(p => /(^|\/)\.env(\.|$)/.test(p) && !p.endsWith('.env.example') || p.startsWith('.claude/') && p !== '.claude/launch.json' && !repoDoctrine.has(p));
const diff = execFileSync('git',['diff','--cached','--unified=0'],{encoding:'utf8',maxBuffer:32*1024*1024});
if (unsafe.length || /^\+.*(?:AKIA[A-Z0-9]{16}|sk-(?:proj-)?[A-Za-z0-9_-]{24,}|vercel_blob_rw_[A-Za-z0-9_]{20,}|token=["']?[^\s"']{10,})/m.test(diff)) { console.error('Tracked secret check failed; values omitted.'); process.exit(1); }
console.log('Tracked secret checks passed.');
