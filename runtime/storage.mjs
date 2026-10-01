import { randomBytes } from 'node:crypto';
import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

export function storageConfigured(env = process.env) {
  return env.MITOS_STORAGE_BACKEND === 's3' ? Boolean(env.MITOS_MEDIA_BUCKET && env.MITOS_MEDIA_BASE_URL) : Boolean(env.BLOB_READ_WRITE_TOKEN);
}
export function safeObjectKey(value) {
  const key = String(value || '');
  if (!key || key.startsWith('/') || key.split('/').some(p => p === '..' || p === '.') || /[\x00-\x1f\\]/.test(key)) throw new Error('Invalid asset key.');
  return key;
}
export function mediaContentType(key, body, explicit) {
  if (explicit) return explicit;
  if (body?.type) return body.type;
  const ext=String(key).split('.').pop().toLowerCase();
  return ({jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp',avif:'image/avif',svg:'image/svg+xml',mp3:'audio/mpeg',wav:'audio/wav',mp4:'video/mp4',woff:'font/woff',woff2:'font/woff2',ttf:'font/ttf',otf:'font/otf'})[ext] || 'application/octet-stream';
}
export function createS3Storage({ client, bucket, baseUrl }) {
  const base = new URL(baseUrl.endsWith('/') ? baseUrl : baseUrl + '/');
  if (base.protocol !== 'https:') throw new Error('Media URL must use HTTPS.');
  const urlFor = key => new URL(key.split('/').map(encodeURIComponent).join('/'), base).href;
  const keyFor = value => {
    if (!/^https?:/.test(value)) return safeObjectKey(value);
    const url = new URL(value);
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname) || url.search || url.hash) throw new Error('Asset deletion outside the owned media prefix is forbidden.');
    return safeObjectKey(decodeURIComponent(url.pathname.slice(base.pathname.length)));
  };
  return {
    async put(pathname, body, options = {}) {
      if (options.access && options.access !== 'public') throw new Error('Private archives use a separate storage API.');
      let key = safeObjectKey(pathname);
      // Blob adds a suffix unless explicitly disabled. Keep existing consumers immutable.
      if (options.addRandomSuffix !== false) {
        const dot = key.lastIndexOf('.'), slash = key.lastIndexOf('/');
        const cut = dot > slash ? dot : key.length;
        key = key.slice(0, cut) + '-' + randomBytes(8).toString('hex') + key.slice(cut);
      }
      const result = await client.send(new PutObjectCommand({ Bucket: bucket, Key: key, Body: body,
        ContentType: mediaContentType(key, body, options.contentType),
        CacheControl: 'public, max-age=' + Math.max(0, Number(options.cacheControlMaxAge ?? (options.allowOverwrite === true ? 60 : 31536000))) + (options.allowOverwrite === true ? '' : ', immutable'),
        ...(options.allowOverwrite === true ? {} : { IfNoneMatch: '*' }),
        ServerSideEncryption: 'AES256' }));
      return { url: urlFor(key), downloadUrl: urlFor(key), pathname: key, contentType: mediaContentType(key, body, options.contentType),
        versionId: result.VersionId, contentDisposition: 'inline' };
    },
    async del(urls) {
      const keys = (Array.isArray(urls) ? urls : [urls]).map(keyFor);
      // A delete marker preserves earlier S3 versions; no version purge here.
      await Promise.all(keys.map(Key => client.send(new DeleteObjectCommand({ Bucket: bucket, Key }))));
    },
    async list(options = {}) {
      const result = await client.send(new ListObjectsV2Command({ Bucket: bucket,
        Prefix: options.prefix || '', ContinuationToken: options.cursor,
        MaxKeys: Math.min(1000, Math.max(1, options.limit || 1000)) }));
      return { hasMore: Boolean(result.IsTruncated), cursor: result.NextContinuationToken,
        blobs: (result.Contents || []).map(o => ({ pathname: o.Key, url: urlFor(o.Key), downloadUrl: urlFor(o.Key),
          size: o.Size, uploadedAt: o.LastModified })) };
    },
  };
}
let adapter;
async function currentStorage() {
  const backend = process.env.MITOS_STORAGE_BACKEND || (process.env.MITOS_RUNTIME === 'aws' ? 's3' : 'vercel');
  if (backend === 'vercel') {
    if (process.env.MITOS_RUNTIME === 'aws') throw new Error('AWS runtime cannot fall back to Vercel Blob.');
    return import('@vercel/blob');
  }
  if (backend !== 's3') throw new Error('Unknown media backend.');
  if (!adapter) {
    if (!storageConfigured()) throw new Error('S3 media configuration is missing.');
    adapter = createS3Storage({ client: new S3Client({ region: process.env.AWS_REGION || 'us-east-1' }),
      bucket: process.env.MITOS_MEDIA_BUCKET, baseUrl: process.env.MITOS_MEDIA_BASE_URL });
  }
  return adapter;
}
export async function put(...args) { return (await currentStorage()).put(...args); }
export async function del(...args) { return (await currentStorage()).del(...args); }
export async function list(...args) { return (await currentStorage()).list(...args); }
