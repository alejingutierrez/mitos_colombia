#!/bin/bash
# Blue/green callbacks on the own host; no runtime DB secret, RDS or application worker.
set -euo pipefail
umask 027
sha=${1:?};digest=${2:?}
[[ "$sha" =~ ^[a-f0-9]{40}$ && "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || exit 2
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
image="907264907058.dkr.ecr.us-east-1.amazonaws.com/mitos-colombia@$digest"
docker image inspect "$image" >/dev/null
conf=/etc/nginx/mitos-inbox-upstream.conf
work=/var/lib/mitos/inbox/$sha
install -d -m 0750 "$work"
name="mitos-payment-inbox-$sha"
port=3090;old_name=''
if test -s /var/lib/mitos/inbox/active.json;then
 old_name=$(jq -r .container /var/lib/mitos/inbox/active.json)
 old_port=$(jq -r .port /var/lib/mitos/inbox/active.json)
 [[ "$old_name" =~ ^mitos-payment-inbox-[a-f0-9]{40}$ && ( "$old_port" = 3090 || "$old_port" = 3091 ) ]] || exit 3
 if test "$old_name" = "$name";then curl -fsS --max-time 5 "http://127.0.0.1:$old_port/health" | jq -e --arg sha "$sha" --arg digest "$digest" '.ok==true and .sha==$sha and .digest==$digest' >/dev/null;exit 0;fi
 if test "$old_port" = 3090;then port=3091;fi
fi
if docker inspect "$name" >/dev/null 2>&1;then
 docker inspect "$name" | jq -e '.[0].State.Running==false' >/dev/null
 docker rm "$name" >/dev/null
fi
test -s "$conf"
cp "$conf" "$work/previous-upstream.conf"
switched=false
cleanup(){ result=$?;if (( result != 0 ));then set +e;if $switched;then cp "$work/previous-upstream.conf" "$conf";nginx -t && systemctl reload nginx;fi;docker stop -t 25 "$name" >/dev/null 2>&1;fi;exit "$result"; }
trap cleanup EXIT
docker run -d --name "$name" --restart unless-stopped --log-driver local --log-opt max-size=10m --log-opt max-file=3 --memory 96m --memory-swap 96m --cpus 0.25 --pids-limit 64 --init --env-file /opt/mitos/runtime.env -e MITOS_DEPLOYMENT_SHA="$sha" -e MITOS_IMAGE_DIGEST="$digest" -e NODE_OPTIONS=--max-old-space-size=48 -p "127.0.0.1:$port:3000" "$image" inbox >/dev/null
ready=false
for attempt in $(seq 1 20);do
 if curl -fsS --max-time 5 "http://127.0.0.1:$port/health" | jq -e --arg sha "$sha" --arg digest "$digest" '.ok==true and .sha==$sha and .digest==$digest' >/dev/null;then ready=true;break;fi
 sleep 1
done
$ready || exit 4
printf 'upstream mitos_inbox { server 127.0.0.1:%s; keepalive 4; }\n' "$port" > "$conf.tmp"
mv "$conf.tmp" "$conf";switched=true
nginx -t;systemctl reload nginx
jq -n --arg sha "$sha" --arg digest "$digest" --arg container "$name" --argjson port "$port" '{sha:$sha,digest:$digest,container:$container,port:$port,kind:"durable-inbox-no-db"}' > "$work/active.json"
cp "$work/active.json" /var/lib/mitos/inbox/active.json
# Let old nginx connections drain before stopping the old listener.
sleep 20
if test -n "$old_name";then docker stop -t 25 "$old_name" >/dev/null;fi
trap - EXIT
cat "$work/active.json"
