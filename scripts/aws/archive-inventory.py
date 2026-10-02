from pathlib import Path
import json,os,re,time,sys
if len(sys.argv) != 3: raise SystemExit('Usage: archive-inventory.py MITOS_SOURCE_ROOT PRIVATE_INVENTORY_JSON')
root=Path(sys.argv[1]).resolve()
if json.loads((root/'package.json').read_text()).get('name') != 'mitos-colombia': raise SystemExit('Source project mismatch')
roots=['content','editorial','docs','output','artifacts','public']
allowed={'.json','.jsonl','.md','.txt','.csv','.tsv','.yaml','.yml','.xlsx','.pdf','.jpg','.jpeg','.png','.webp','.svg','.avif','.mp3','.wav','.mp4','.zip','.woff','.woff2','.ttf','.otf','.m4a','.srt','.sha256','.sha256sums','.patch','.mjs','.cjs','.js','.py','.sh','.swift','.html','.css','.evidence','.log','.sqlite','.sqlite-wal'}
secret=re.compile(rb'(AKIA[A-Z0-9]{16}|sk-(?:proj-)?[A-Za-z0-9_-]{24,}|vercel_blob_rw_[A-Za-z0-9_]{20,}|ABSK[A-Za-z0-9_+/=.-]{30,}|(?i:"[^"]*(?:api[_-]?key|secret[_-]?key|password|authorization|access[_-]?token)[^"]*"\s*:\s*"[A-Za-z0-9_+/=.:-]{12,}"))')
items=[];blocked=[];skipped=0
for directory in roots:
 for base,dirs,files in os.walk(root/directory,followlinks=False):
  dirs[:]=[d for d in dirs if d not in ['node_modules','.git','.aws','.vercel'] and not (Path(base)/d).is_symlink()]
  for name in files:
   p=Path(base)/name
   if p.is_symlink() or name.startswith('.env') or p.suffix.lower() not in allowed:skipped+=1;continue
   stat=p.stat()
   if p.suffix.lower() in {'.json','.jsonl','.md','.txt','.csv','.tsv','.yaml','.yml','.svg','.srt','.sha256','.sha256sums','.patch','.mjs','.cjs','.js','.py','.sh','.swift','.html','.css','.evidence','.log','.sqlite','.sqlite-wal'} and secret.search(p.read_bytes()):
    blocked.append(str(p.relative_to(root)));continue
   items.append({'path':str(p.relative_to(root)),'bytes':stat.st_size,'mtimeNs':stat.st_mtime_ns})
receipt={'at':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'kind':'local-archive-preflight','root':str(root),'items':items,'blockedPaths':blocked,'skipped':skipped}
Path(sys.argv[2]).write_text(json.dumps(receipt,indent=2))
print(json.dumps({'files':len(items),'bytes':sum(x['bytes'] for x in items),'blockedPaths':blocked,'skipped':skipped,'roots':{d:{'files':sum(x['path'].startswith(d+'/') for x in items),'bytes':sum(x['bytes'] for x in items if x['path'].startswith(d+'/'))} for d in roots}}))
