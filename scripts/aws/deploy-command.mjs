import { execFileSync } from 'node:child_process';
const sha = process.env.GITHUB_SHA, digest = process.env.RELEASE_DIGEST, instance = process.env.INSTANCE_ID;
if (!/^[a-f0-9]{40}$/.test(sha) || !/^sha256:[a-f0-9]{64}$/.test(digest) || !/^i-[a-f0-9]+$/.test(instance)) throw new Error('Release identity missing.');
const aws = args => JSON.parse(execFileSync('aws',[...args,'--region','us-east-1','--output','json'],{encoding:'utf8'}));
if (aws(['sts','get-caller-identity']).Account !== '907264907058') throw new Error('Account mismatch.');
const id = aws(['ssm','send-command','--document-name','mitos-colombia-release','--instance-ids',instance,'--parameters',JSON.stringify({Sha:[sha],Digest:[digest]})]).Command.CommandId;
for (let attempt=0;attempt<60;attempt++) {
  await new Promise(r=>setTimeout(r,10000));
  let result;
  try { result=aws(['ssm','get-command-invocation','--command-id',id,'--instance-id',instance]); } catch { continue; }
  if (['Pending','InProgress','Delayed'].includes(result.Status)) continue;
  if (result.Status !== 'Success') throw new Error('Owned host deployment failed: ' + result.Status);
  console.log(JSON.stringify({commandId:id,status:result.Status,sha,digest})); process.exit(0);
}
throw new Error('Deployment did not finish within its time limit.');
