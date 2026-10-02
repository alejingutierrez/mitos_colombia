import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { createHash } from 'node:crypto';
const sqs = new SQSClient({ region: process.env.AWS_REGION || 'us-east-1' });
export async function enqueuePayment(rawBody, signature, client = sqs, queueUrl = process.env.MITOS_PAYMENT_QUEUE_URL) {
  if (!queueUrl) throw new Error('Durable payment queue is not configured.');
  if (Buffer.byteLength(rawBody) > 200000) throw new Error('Payment event is too large.');
  const payload = { rawBody, signature, receivedAt: new Date().toISOString(), hash: createHash('sha256').update(rawBody).digest('hex') };
  const result = await client.send(new SendMessageCommand({ QueueUrl: queueUrl, MessageBody: JSON.stringify(payload) }));
  if (!result.MessageId) throw new Error('Queue did not confirm durable receipt.');
  return result.MessageId;
}
