import {createServer} from 'node:http';
import {SecretsManagerClient, GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {SQSClient, SendMessageCommand} from '@aws-sdk/client-sqs';
import {verifyRuntimeIdentity} from './guard.mjs';
import {createPaymentInbox} from './payment-inbox-core.mjs';
if (process.env.MITOS_RUNTIME !== 'aws') throw Error('Inbox requires AWS identity.');
await verifyRuntimeIdentity();
const SecretId = process.env.MITOS_BOLD_INBOX_SECRET_ARN;
const QueueUrl = process.env.MITOS_PAYMENT_QUEUE_URL;
if (!/^arn:aws:secretsmanager:us-east-1:907264907058:secret:mitos-colombia\/prod\/bold-inbox-[A-Za-z0-9]{6}$/.test(SecretId || '') || QueueUrl !== 'https://sqs.us-east-1.amazonaws.com/907264907058/mitos-colombia-payments') throw Error('Inbox resource ownership mismatch.');
const secrets = new SecretsManagerClient({region:'us-east-1'}), sqs = new SQSClient({region:'us-east-1'});
let cached, expires = 0;
const handle = createPaymentInbox({
 configuration:async () => {
  if (cached && expires > Date.now()) return cached;
  cached = JSON.parse((await secrets.send(new GetSecretValueCommand({SecretId}))).SecretString);
  expires = Date.now() + 15000;
  return cached;
 },
 enqueue:async payload => (await sqs.send(new SendMessageCommand({QueueUrl, MessageBody:JSON.stringify(payload)}))).MessageId
});
const server = createServer(async (request, reply) => {
 const send = (status, body) => {reply.writeHead(status, {'Content-Type':'application/json', 'Cache-Control':'no-store'}); reply.end(JSON.stringify(body));};
 if (request.method === 'GET' && request.url === '/health') return send(200, {ok:true, kind:'payment-inbox', sha:process.env.MITOS_DEPLOYMENT_SHA, digest:process.env.MITOS_IMAGE_DIGEST});
 if (request.method !== 'POST' || request.url !== '/api/tarot/bold/events') return send(404, {error:'not_found'});
 try {
  const chunks = []; let size = 0;
  for await (const chunk of request) {size += chunk.length; if (size > 200000) return send(413, {error:'event_too_large'}); chunks.push(chunk);}
  const result = await handle({method:request.method, path:request.url, bytes:Buffer.concat(chunks), signature:request.headers['x-bold-signature']});
  send(result.statusCode, result.body);
 } catch {if (!reply.headersSent) send(503, {error:'inbox_unavailable'});}
});
server.requestTimeout = 20000; server.headersTimeout = 10000; server.keepAliveTimeout = 5000;
server.listen(3000, '0.0.0.0');
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => server.close(() => process.exit(0)));
