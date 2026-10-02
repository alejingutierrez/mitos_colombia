// launchd restarts this existing-account SSM tunnel after expiry/disconnect.
import {spawn} from 'node:child_process';
const parameters={host:['mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com'],portNumber:['5432'],localPortNumber:['15433']};
const child=spawn('aws',['ssm','start-session','--target','i-042678e0b71dbefaa','--document-name','AWS-StartPortForwardingSessionToRemoteHost','--parameters',JSON.stringify(parameters),'--profile','colombiaprojects','--region','us-east-1'],{stdio:['pipe','pipe','pipe']});
let heartbeat;
async function keepConnectionActive(){
  let client;
  try{
    const {Client}=await import('./workshop-postgres.mjs');
    client=new Client();await client.connect();await client.query('SELECT 1');
    console.log(new Date().toISOString()+' workshop TLS heartbeat verified');
  }catch{console.error('Workshop heartbeat unavailable.');}
  finally{if(client)await client.end().catch(()=>{});}
}
child.stdout.on('data',data=>{if(data.toString().includes('Waiting for connections')){
  console.log(new Date().toISOString()+' workshop tunnel ready on 127.0.0.1:15433');
  void keepConnectionActive();heartbeat=setInterval(keepConnectionActive,60000);
}});
child.stderr.on('data',()=>{});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('error',()=>{console.error('Workshop tunnel could not start.');process.exitCode=1;});
child.on('exit',code=>{clearInterval(heartbeat);console.log(new Date().toISOString()+' workshop tunnel stopped');process.exitCode=code??1;});
