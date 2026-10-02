// A durable inbox independent of EC2/RDS: keep receiving while the writer is frozen.
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {SQSClient,SendMessageCommand} from '@aws-sdk/client-sqs';
import {createHash} from 'node:crypto';
import {verifyBoldWebhookSignature} from './bold.mjs';
const account='907264907058';
const saleEvents=new Set(['SALE_APPROVED','SALE_REJECTED','VOID_APPROVED','VOID_REJECTED']);
const response=(statusCode,body)=>({statusCode,headers:{'content-type':'application/json','cache-control':'no-store'},body:JSON.stringify(body)});
export function createIngressHandler({configuration,enqueue}){
 return async function(event,context){
  if(!context?.invokedFunctionArn?.startsWith('arn:aws:lambda:us-east-1:'+account+':function:mitos-colombia-'))return response(503,{error:'identity_mismatch'});
  if(event.requestContext?.http?.method!=='POST'||event.rawPath!=='/bold/events')return response(404,{error:'not_found'});
  if(typeof event.body!=='string'||event.body.length>270000)return response(413,{error:'event_too_large'});
  const bytes=Buffer.from(event.body,event.isBase64Encoded?'base64':'utf8');
  const rawBody=bytes.toString('utf8');
  if(bytes.length>200000||!Buffer.from(rawBody,'utf8').equals(bytes))return response(413,{error:'invalid_body'});
  let config;try{config=await configuration();}catch{return response(503,{error:'webhook_not_ready'});}
  if(!['production','test'].includes(config?.environment)||!config?.identityKey?.trim()||!config?.secretKey?.trim()||config.ordersReady!==true||config.webhookReady!==true)return response(503,{error:'webhook_not_ready'});
  const signature=event.headers?.['x-bold-signature'];
  if(!verifyBoldWebhookSignature(rawBody,signature,config.environment==='test'?'':config.secretKey))return response(400,{error:'invalid_signature'});
  let parsed;try{parsed=JSON.parse(rawBody);}catch{return response(400,{error:'invalid_event'});}
  if(!saleEvents.has(String(parsed?.type||'').toUpperCase()))return response(200,{received:true,handled:false});
  // No order processing and no DB connection. Never acknowledge a failed/ambiguous send.
  try{
   const id=await enqueue({rawBody,signature,receivedAt:new Date().toISOString(),hash:createHash('sha256').update(rawBody).digest('hex')});
   if(!id)throw Error('Receipt missing');
   return response(200,{received:true,queued:true});
  }catch{return response(503,{error:'durable_receipt_failed'});}
 };
}
const region='us-east-1',secrets=new SecretsManagerClient({region}),sqs=new SQSClient({region});
let cached,expires=0;
export const handler=createIngressHandler({
 configuration:async()=>{
  if(cached&&expires>Date.now())return cached;
  const id=process.env.BOLD_SECRET_ARN;
  if(!id?.startsWith('arn:aws:secretsmanager:'+region+':'+account+':secret:mitos-colombia/'))throw Error('Secret ownership mismatch');
  const value=await secrets.send(new GetSecretValueCommand({SecretId:id}));cached=JSON.parse(value.SecretString);expires=Date.now()+15000;return cached;
 },
 enqueue:async payload=>{
  const QueueUrl=process.env.PAYMENT_QUEUE_URL;
  if(!QueueUrl?.startsWith('https://sqs.'+region+'.amazonaws.com/'+account+'/mitos-colombia-'))throw Error('Queue ownership mismatch');
  return (await sqs.send(new SendMessageCommand({QueueUrl,MessageBody:JSON.stringify(payload)}))).MessageId;
 }
});
