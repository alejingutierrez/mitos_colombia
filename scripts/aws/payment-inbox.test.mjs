import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {createPaymentInbox, verifyInboxSignature} from '../../runtime/payment-inbox-core.mjs';
import {verifyBoldWebhookSignature} from '../../src/lib/bold.js';
import {createSaleEventProcessor} from '../../src/lib/bold-event-core.js';
const config={environment:'production', identityKey:'public-fixture', secretKey:'private-fixture-only', ordersReady:true, webhookReady:true};
const bytes=Buffer.from('{ "id":"synthetic", "type":"SALE_APPROVED", "data":{"text":"Ñ"} }');
const sign=key=>createHmac('sha256', key).update(bytes.toString('base64')).digest('hex');
const request={method:'POST', path:'/api/tarot/bold/events', bytes, signature:sign(config.secretKey)};
test('host inbox preserves bytes and does not acknowledge before SQS confirms', async()=>{
 let captured, release, finished=false;
 const pending=new Promise(resolve=>{release=resolve;});
 const run=createPaymentInbox({configuration:async()=>config, enqueue:async p=>{captured=p;await pending;return 'confirmed';}})(request).then(r=>{finished=true;return r;});
 await new Promise(r=>setImmediate(r)); assert.equal(finished,false); assert.equal(captured.rawBody,bytes.toString()); release();
 assert.deepEqual(await run,{statusCode:200,body:{received:true,queued:true}});
});
test('host inbox rejects invalid signatures, unavailable configuration, malformed or oversized bodies and foreign paths', async()=>{
 let sends=0;const h=c=>createPaymentInbox({configuration:async()=>c,enqueue:async()=>{sends++;return 'id';}});
 assert.equal((await h(config)({...request,signature:'0'.repeat(64)})).statusCode,400);
 assert.equal((await h({...config,webhookReady:false})(request)).statusCode,503);
 assert.equal((await h(config)({...request,bytes:Buffer.from([0xff])})).statusCode,400);
 assert.equal((await h(config)({...request,bytes:Buffer.alloc(200001)})).statusCode,413);
 assert.equal((await h(config)({...request,path:'/api/internal/payments'})).statusCode,404);
 assert.equal(sends,0);
});
test('host inbox retries on failed or missing durable receipt', async()=>{
 for(const enqueue of [async()=>{throw Error('failure');},async()=>undefined]) assert.equal((await createPaymentInbox({configuration:async()=>config,enqueue})(request)).statusCode,503);
});
test('production and sandbox signatures agree with the published Bold verifier',()=>{
 for(const key of [config.secretKey,'']) for(const signature of [sign(key),'0'.repeat(64)]) assert.equal(verifyInboxSignature(bytes.toString(),signature,key),verifyBoldWebhookSignature(bytes.toString(),signature,key));
});
function processor(receipt, applied){let analytics=0;return {run:createSaleEventProcessor({findOrder:async()=>null,fetchPayment:async()=>receipt,normalizeStatus:s=>s==='APPROVED'?'APPROVED':null,applyPayment:async()=>applied,deliverAnalytics:async()=>{analytics++;}}),analytics:()=>analytics};}
const event={data:{metadata:{reference:'synthetic-order'}}}, approved={matched:true,order:{status:'APPROVED'}};
test('approved sandbox receipt persists but emits no production purchase',async()=>{const p=processor({status:'APPROVED'},approved);await p.run(event,{environment:'test',apiKey:'public-fixture'});assert.equal(p.analytics(),0);});
test('production receipt still delivers purchase analytics',async()=>{const p=processor({status:'APPROVED'},approved);await p.run(event,{environment:'production',apiKey:'public-fixture'});assert.equal(p.analytics(),1);});
test('a signed event cannot approve a missing receipt or mismatched amount',async()=>{
 const pending=processor({status:'NO_TRANSACTION_FOUND'},approved);await assert.rejects(pending.run(event,{environment:'test'}),/receipt_not_ready/);
 const mismatch=processor({status:'APPROVED'},{matched:true,reason:'order_amount_mismatch'});await assert.rejects(mismatch.run(event,{environment:'production'}),/amounts/);assert.equal(mismatch.analytics(),0);
});

import {createPurchaseAnalyticsDelivery} from '../../runtime/purchase-tracking.mjs';
import {boldCheckoutSite} from '../../runtime/bold-checkout-site.mjs';
test('both polling and callback analytics delivery refuse sandbox before accessing GA or claiming the order',async()=>{
 const never=()=>{throw Error('Production service must not be reached');};
 const deliver=createPurchaseAnalyticsDelivery({configuration:never,claim:never,send:never,markSent:never,release:never});
 assert.equal(await deliver({status:'APPROVED'},{environment:'test'}),false);
 assert.equal(await deliver({status:'PENDING'},{environment:'production'}),false);
});
test('production purchase lease still deduplicates and releases a failed send for retry',async()=>{
 let sends=0,released=0;const order={status:'APPROVED',reference:'fixture'};
 const common={configuration:()=>({ready:true}),markSent:async()=>{},release:async()=>{released++;}};
 const duplicate=createPurchaseAnalyticsDelivery({...common,claim:async()=>({reason:'already_sent'}),send:async()=>{sends++;}});
 assert.equal(await duplicate(order,{environment:'production'}),true);assert.equal(sends,0);
 const failed=createPurchaseAnalyticsDelivery({...common,claim:async()=>({claimed:true,order}),send:async()=>{throw Error('retry');}});
 await assert.rejects(failed(order,{environment:'production'}),/retry/);assert.equal(released,1);
});
test('only trusted AWS staging with sandbox keys changes the payment return destination',()=>{
 const canonical='https://www.mitosdecolombia.com';
 assert.equal(boldCheckoutSite({environment:'test'},'1',canonical,'aws'),'https://staging.mitosdecolombia.com');
 for(const [environment,marker,runtime] of [['production','1','aws'],['test','0','aws'],['test','1','legacy']])assert.equal(boldCheckoutSite({environment},marker,canonical,runtime),canonical);
});
