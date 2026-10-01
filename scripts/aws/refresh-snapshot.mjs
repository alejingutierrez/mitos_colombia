import {execFileSync} from 'node:child_process';
const instance=process.env.INSTANCE_ID;
if(instance!=='i-042678e0b71dbefaa') throw new Error('Owned snapshot host required.');
const aws=args=>JSON.parse(execFileSync('aws',[...args,'--region','us-east-1','--output','json'],{encoding:'utf8'}));
if(aws(['sts','get-caller-identity']).Account!=='907264907058')throw new Error('Account mismatch.');
const id=aws(['ssm','send-command','--document-name','mitos-colombia-snapshot','--instance-ids',instance]).Command.CommandId;
for(let attempt=0;attempt<60;attempt++) {
  await new Promise(r=>setTimeout(r,5000));
  let result;try{result=aws(['ssm','get-command-invocation','--command-id',id,'--instance-id',instance]);}catch{continue;}
  if(['Pending','InProgress','Delayed'].includes(result.Status))continue;
  if(result.Status!=='Success')throw new Error('Public snapshot refresh failed: '+result.Status);
  console.log(JSON.stringify({commandId:id,status:result.Status}));process.exit(0);
}
throw new Error('Snapshot refresh timeout.');
