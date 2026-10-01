// One host, shared tag markers across active/candidate containers. No cache server.
const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');
const { serialize, deserialize } = require('node:v8');
const responseTags = value => String(value?.headers?.['x-next-cache-tags'] || '').split(',').map(t => t.trim()).filter(Boolean);
const hash = value => createHash('sha256').update(String(value)).digest('hex');
module.exports = class FileCache {
  constructor() {
    const root = process.env.MITOS_CACHE_DIR || path.join(/* turbopackIgnore: true */ process.cwd(), '.next', 'mitos-cache');
    this.entries = path.join(/* turbopackIgnore: true */ root, process.env.MITOS_DEPLOYMENT_SHA || 'local');
    this.tags = path.join(/* turbopackIgnore: true */ root, 'tags');
    this.lastSweep = 0;
  }
  async marker(tag) { try { return await fs.readFile(/* turbopackIgnore: true */ path.join(/* turbopackIgnore: true */ this.tags, hash(tag)), 'utf8'); } catch (e) { if(e.code==='ENOENT')return ''; throw e; } }
  async get(key, ctx = {}) {
    try {
      const entry = deserialize(await fs.readFile(/* turbopackIgnore: true */ path.join(/* turbopackIgnore: true */ this.entries, hash(key))));
      for (const tag of new Set([...(entry.tags || []), ...responseTags(entry.value), ...(ctx.tags || []), ...(ctx.softTags || [])])) {
        if ((entry.markers?.[tag] || '') !== await this.marker(tag)) return null;
      }
      return { value: entry.value, lastModified: entry.lastModified };
    } catch (e) { if (e.code !== 'ENOENT') console.error('Cache read failed', { code: e.code || 'invalid_entry' }); return null; }
  }
  async set(key, value, ctx = {}) {
    await fs.mkdir(/* turbopackIgnore: true */ this.entries, { recursive: true });
    const tags = [...new Set([...(ctx.tags || []), ...(ctx.softTags || []), ...(value?.tags || []), ...responseTags(value)])];
    const markers = Object.fromEntries(await Promise.all(tags.map(async t => [t, await this.marker(t)])));
    const dest = path.join(/* turbopackIgnore: true */ this.entries, hash(key)), temp = dest + '.' + randomUUID();
    await fs.writeFile(/* turbopackIgnore: true */ temp, serialize({ value, lastModified: Date.now(), tags, markers }));
    await fs.rename(/* turbopackIgnore: true */ temp, dest);
    if (Date.now() - this.lastSweep > 60000) {
      this.lastSweep = Date.now();
      const limit = Number(process.env.MITOS_CACHE_MAX_BYTES || 512 * 1024 * 1024);
      const files = await fs.readdir(/* turbopackIgnore: true */ this.entries);
      const entries = await Promise.all(files.map(async n => { try { const s=await fs.stat(/* turbopackIgnore: true */ path.join(/* turbopackIgnore: true */ this.entries,n)); return {n,bytes:s.size,time:s.mtimeMs}; } catch { return null; } }));
      const sorted=entries.filter(Boolean).sort((a,b)=>a.time-b.time);
      let bytes=sorted.reduce((sum,e)=>sum+e.bytes,0);
      for(const e of sorted) { if(bytes<=limit)break; await fs.unlink(/* turbopackIgnore: true */ path.join(/* turbopackIgnore: true */ this.entries,e.n)).catch(()=>{}); bytes-=e.bytes; }
    }
  }
  async revalidateTag(tags) {
    await fs.mkdir(/* turbopackIgnore: true */ this.tags, { recursive: true });
    for (const tag of [tags].flat()) {
      const dest=path.join(/* turbopackIgnore: true */ this.tags,hash(tag)),temp=dest+'.'+randomUUID();
      await fs.writeFile(/* turbopackIgnore: true */ temp,randomUUID()); await fs.rename(/* turbopackIgnore: true */ temp,dest);
    }
  }
  resetRequestCache() {}
};
