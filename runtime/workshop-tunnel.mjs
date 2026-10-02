// launchd restarts this existing-account SSM tunnel after expiry/disconnect.
import {spawn} from 'node:child_process';
const parameters={host:['mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com'],portNumber:['5432'],localPortNumber:['15433']};
const child=spawn('aws',['ssm','start-session','--target','i-042678e0b71dbefaa','--document-name','AWS-StartPortForwardingSessionToRemoteHost','--parameters',JSON.stringify(parameters),'--profile','colombiaprojects','--region','us-east-1'],{stdio:['pipe','pipe','pipe']});
child.stdout.on('data',data=>{if(data.toString().includes('Waiting for connections'))console.log(new Date().toISOString()+' workshop tunnel ready on 127.0.0.1:15433');});
child.stderr.on('data',()=>{});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('error',()=>{console.error('Workshop tunnel could not start.');process.exitCode=1;});
child.on('exit',code=>{console.log(new Date().toISOString()+' workshop tunnel stopped');process.exitCode=code??1;});
