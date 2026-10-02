import {createHash, createHmac, timingSafeEqual} from 'node:crypto';
const sales = new Set(['SALE_APPROVED', 'SALE_REJECTED', 'VOID_APPROVED', 'VOID_REJECTED']);
const response = (statusCode, body) => ({statusCode, body});
export function verifyInboxSignature(rawBody, signature, secret) {
 const received = String(signature || '').trim().slice(0, 128).toLowerCase();
 if (!/^[a-f0-9]{64}$/.test(received)) return false;
 const expected = createHmac('sha256', String(secret ?? '')).update(Buffer.from(rawBody, 'utf8').toString('base64')).digest();
 return timingSafeEqual(expected, Buffer.from(received, 'hex'));
}
// Transport identity is verified before starting the listener. This core never accesses a DB.
export function createPaymentInbox({configuration, enqueue}) {
 return async ({method, path, bytes, signature}) => {
  if (method !== 'POST' || path !== '/api/tarot/bold/events') return response(404, {error:'not_found'});
  if (!Buffer.isBuffer(bytes) || bytes.length > 200000) return response(413, {error:'event_too_large'});
  const rawBody = bytes.toString('utf8');
  if (!Buffer.from(rawBody, 'utf8').equals(bytes)) return response(400, {error:'invalid_body'});
  let config;
  try {config = await configuration();} catch {return response(503, {error:'webhook_not_ready'});}
  if (!['production', 'test'].includes(config?.environment) || !config.identityKey?.trim() || !config.secretKey?.trim() || config.ordersReady !== true || config.webhookReady !== true) return response(503, {error:'webhook_not_ready'});
  if (!verifyInboxSignature(rawBody, signature, config.environment === 'test' ? '' : config.secretKey)) return response(400, {error:'invalid_signature'});
  let event;
  try {event = JSON.parse(rawBody);} catch {return response(400, {error:'invalid_event'});}
  if (!sales.has(String(event?.type || '').toUpperCase())) return response(200, {received:true, handled:false});
  try {
   const id = await enqueue({rawBody, signature, receivedAt:new Date().toISOString(), hash:createHash('sha256').update(bytes).digest('hex')});
   if (!id) throw Error('Missing receipt');
   return response(200, {received:true, queued:true});
  } catch {return response(503, {error:'durable_receipt_failed'});}
 };
}
