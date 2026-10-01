import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {buildGtmBootstrap,buildDirectGaBootstrap} from '../../src/lib/google-tags.js';
import {trackEvent,getAnalyticsSessionContext} from '../../src/lib/analytics.js';
const context=vm.createContext({});vm.runInContext(await readFile('infra/aws/apex-redirect.js','utf8'),context);
const request=(host,uri='/mitos/el-alma',querystring={})=>({headers:{host:{value:host},'x-mitos-stage':{value:'spoof'}},uri,querystring});
test('canonical redirect keeps escaped campaign values and repeats exactly once per input value',()=>{
  const r=context.handler({request:request('mitosdecolombia.com','/mitos/el-alma',{utm_campaign:{value:'Colombia%20%26%20relatos%2B%2F%23'},v:{value:'uno',multiValue:[{value:'uno'},{value:'dos'}]},empty:{value:''}})});
  assert.equal(r.statusCode,308);
  assert.equal(r.headers.location.value,'https://www.mitosdecolombia.com/mitos/el-alma?utm_campaign=Colombia%20%26%20relatos%2B%2F%23&v=uno&v=dos&empty=');
});
test('www passes RSC requests through and staging marker is overwritten from the viewer host',()=>{
  const prod=request('www.mitosdecolombia.com');prod.headers.rsc={value:'1'};
  assert.equal(context.handler({request:prod}),prod);assert.equal(prod.headers.rsc.value,'1');assert.equal(prod.headers['x-mitos-stage'].value,'0');
  const stage=request('staging.mitosdecolombia.com');context.handler({request:stage});assert.equal(stage.headers['x-mitos-stage'].value,'1');
});
test('literal CRLF is refused instead of becoming a Location header',()=>{
  assert.equal(context.handler({request:request('mitosdecolombia.com','/x\r\ny: z')}).statusCode,400);
});
test('staging does not load GTM/GA or emit client checkout measurement',async()=>{
  for(const code of [buildGtmBootstrap('GTM-P8Z7MCV3'),buildDirectGaBootstrap('G-TSQYRJVCDJ')]) {
    const w={location:{hostname:'staging.mitosdecolombia.com',pathname:'/tarot/comprar'}};
    vm.runInNewContext(code,{window:w,document:{}});assert.equal(w.dataLayer,undefined);
  }
  const previous=globalThis.window;globalThis.window={location:{hostname:'staging.mitosdecolombia.com'}};
  try {trackEvent({action:'begin_checkout'});assert.equal(globalThis.window.dataLayer,undefined);assert.deepEqual(await getAnalyticsSessionContext(),{});}finally{globalThis.window=previous;}
});
test('optimized-image cache varies on format and trusted staging marker, never auth or cookies',async()=>{
 const t=JSON.parse(await readFile('infra/aws/web-cdn.json','utf8'));
 const c=t.Resources.ImageCache.Properties.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin;
 assert.deepEqual(c.HeadersConfig.Headers,['Accept','X-Mitos-Stage']);assert.equal(c.CookiesConfig.CookieBehavior,'none');assert.deepEqual(c.QueryStringsConfig.QueryStrings,['url','w','q']);
 const origin=t.Resources.ImageOrigin.Properties.OriginRequestPolicyConfig;
 assert.deepEqual(origin.HeadersConfig.Headers,['CloudFront-Viewer-Address']);assert.equal(origin.CookiesConfig.CookieBehavior,'none');
 assert.equal(t.Resources.Distribution.Properties.DistributionConfig.CacheBehaviors[0].FunctionAssociations[0].EventType,'viewer-request');
});
test('staging auth origin requires the trusted viewer marker; production rejects a spoofed staging marker',async()=>{
 const {trustedAwsAuthOrigin}=await import('../../runtime/auth-origin.mjs');const env={NEXT_PUBLIC_SITE_URL:'https://www.mitosdecolombia.com'};
 const req=(origin,marker)=>new Request('https://www.mitosdecolombia.com/api/tarot/auth/login',{headers:{origin,'x-mitos-stage':marker}});
 assert.equal(trustedAwsAuthOrigin(req('https://www.mitosdecolombia.com','0'),env),true);
 assert.equal(trustedAwsAuthOrigin(req('https://staging.mitosdecolombia.com','1'),env),true);
 assert.equal(trustedAwsAuthOrigin(req('https://staging.mitosdecolombia.com','0'),env),false);
 assert.equal(trustedAwsAuthOrigin(req('https://evil.example','1'),env),false);
 const r=request('www.mitosdecolombia.com');r.headers['x-mitos-stage'].value='1';context.handler({request:r});assert.equal(r.headers['x-mitos-stage'].value,'0');
});
