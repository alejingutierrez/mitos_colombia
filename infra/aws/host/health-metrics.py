#!/usr/bin/env python3
# Fixed own-host metrics only: no URLs, payloads, secrets, user IDs or job dimensions.
import datetime,json,os,pathlib,subprocess,urllib.request
ACCOUNT='907264907058';REGION='us-east-1'
def call(*args):return subprocess.check_output(args,text=True,timeout=20)
if call('aws','sts','get-caller-identity','--query','Account','--output','text').strip()!=ACCOUNT:raise SystemExit('Account mismatch')
instance=os.environ.get('MITOS_INSTANCE_ID','')
if instance!='i-042678e0b71dbefaa':raise SystemExit('Metrics host mismatch')
mem={p[0].rstrip(':'):int(p[1]) for p in (line.split() for line in pathlib.Path('/proc/meminfo').read_text().splitlines()) if len(p)>1 and p[1].isdigit()}
fs=os.statvfs('/var/lib/mitos')
values={'AvailableMemoryPercent':100*mem['MemAvailable']/mem['MemTotal'],'FreeDiskPercent':100*fs.f_bavail/fs.f_blocks}
try:
 with urllib.request.urlopen('http://127.0.0.1:3080/api/health/ready',timeout=5) as r:values['WebReady']=int(r.status==200 and json.load(r).get('ok') is True)
except Exception:values['WebReady']=0
try:
 date=call('openssl','x509','-in','/etc/letsencrypt/live/origin.mitosdecolombia.com/cert.pem','-noout','-enddate').strip().split('=',1)[1]
 expires=datetime.datetime.strptime(date,'%b %d %H:%M:%S %Y %Z').replace(tzinfo=datetime.timezone.utc)
 values['CertificateDays']=(expires-datetime.datetime.now(datetime.timezone.utc)).total_seconds()/86400
except Exception:values['CertificateDays']=0
accepted=pathlib.Path('/opt/mitos/cutover-complete').exists()
try:
 active=json.loads(pathlib.Path('/var/lib/mitos/active.json' if accepted else '/var/lib/mitos/qa/active.json').read_text())
 names=[active['container'],'mitos-admin-worker','mitos-payment-worker'] if accepted else [active['container'],'mitos-qa-editorial-worker']
 states=json.loads(call('docker','inspect',*names));values['ContainersHealthy']=int(all(x['State']['Running'] and not x['State'].get('OOMKilled') and x['RestartCount']==0 for x in states))
except Exception:values['ContainersHealthy']=0
metrics=[{'MetricName':k,'Value':round(v,3),'Unit':'Percent' if k.endswith('Percent') else 'Count','Dimensions':[{'Name':'InstanceId','Value':instance}]} for k,v in values.items()]
call('aws','cloudwatch','put-metric-data','--region',REGION,'--namespace','Mitos/Runtime','--metric-data',json.dumps(metrics))
print(json.dumps({'kind':'own-host-health','values':values,'productionAccepted':accepted}))
