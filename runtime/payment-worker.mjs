import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand } from '@aws-sdk/client-sqs';
import { verifyRuntimeIdentity } from './guard.mjs';
await verifyRuntimeIdentity();
const client = new SQSClient({ region: process.env.AWS_REGION || 'us-east-1' });
const QueueUrl = process.env.MITOS_PAYMENT_QUEUE_URL;
if (!QueueUrl || !process.env.MITOS_PAYMENT_WORKER_TOKEN) throw new Error('Worker configuration missing.');
let stopping = false;
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => { stopping = true; });
while (!stopping) {
  try {
    const result = await client.send(new ReceiveMessageCommand({ QueueUrl, MaxNumberOfMessages: 1, WaitTimeSeconds: 20, VisibilityTimeout: 120 }));
    for (const message of result.Messages || []) {
      const response = await fetch(process.env.MITOS_PAYMENT_PROCESSOR_URL || 'http://127.0.0.1:3080/api/internal/payments', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-mitos-worker-token': process.env.MITOS_PAYMENT_WORKER_TOKEN },
        body: message.Body, signal: AbortSignal.timeout(60000) });
      if (response.ok && (await response.json()).ok === true) await client.send(new DeleteMessageCommand({ QueueUrl, ReceiptHandle: message.ReceiptHandle }));
      else console.error('Payment message retained for retry', { status: response.status, messageId: message.MessageId });
    }
  } catch (error) { console.error('Payment worker error', { code: error.code || error.name }); await new Promise(r => setTimeout(r, 5000)); }
}
