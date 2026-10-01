#!/bin/bash
set -euo pipefail
umask 027
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
test ! -e /opt/mitos/cutover-complete || { echo 'Stage-only tool refuses an accepted production host.' >&2; exit 3; }
sha=${1:?};digest=${2:?}
[[ "$sha" =~ ^[a-f0-9]{40}$ && "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || exit 2
work=/var/lib/mitos/qa/releases/$sha
install -d -m 0750 "$work"
aws s3 cp "s3://mitos-colombia-907264907058-operations/ci/$sha/release.json" "$work/release.json" --only-show-errors
jq -e --arg sha "$sha" --arg digest "$digest" '.sha==$sha and .digest==$digest and .sourceVerified==false and .schemaVersion=="002-admin-jobs"' "$work/release.json" >/dev/null
registry=907264907058.dkr.ecr.us-east-1.amazonaws.com
image="$registry/mitos-colombia@$digest"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin "$registry" >/dev/null
trap 'docker logout "$registry" >/dev/null 2>&1 || true' EXIT
docker pull "$image" >/dev/null
docker logout "$registry" >/dev/null
old_port=$(grep -o '127.0.0.1:[0-9]*' /etc/nginx/mitos-upstream.conf | cut -d: -f2)
[[ "$old_port" = 3101 || "$old_port" = 3102 ]] || exit 3
port=3101;if test "$old_port" = 3101;then port=3102;fi
name="mitos-qa-$sha"
install -d -o 1001 -g 1001 /var/lib/mitos/qa-cache /var/lib/mitos/qa-image-cache /var/lib/mitos/qa-locks
test -e /var/lib/mitos/qa-locks/work.lock || install -o 1001 -g 1001 -m 0640 /dev/null /var/lib/mitos/qa-locks/work.lock
exec 8>/var/lib/mitos/qa-locks/work.lock
flock -n 8 || { echo 'An editorial QA task is active.' >&2;exit 4; }
available=$(awk '/MemAvailable:/{print $2}' /proc/meminfo)
(( available >= 900000 )) || { echo 'Insufficient stage candidate memory.' >&2;exit 4; }
if docker inspect "$name" >/dev/null 2>&1;then
 test "$(docker inspect --format '{{.State.Status}}' "$name")" = exited || exit 8
 docker rm "$name" >/dev/null
fi
docker run -d --name "$name" --restart unless-stopped --log-driver local --log-opt max-size=10m --log-opt max-file=3 --memory 768m --memory-swap 768m --cpus 1.5 --pids-limit 160 --init \
 --env-file /opt/mitos/runtime.env -e MITOS_DEPLOYMENT_SHA="$sha" -e MITOS_IMAGE_DIGEST="$digest" -e MITOS_CACHE_DIR=/var/lib/mitos/cache -e NODE_OPTIONS=--max-old-space-size=384 \
 -p "127.0.0.1:$port:3000" -v /var/lib/mitos/qa-cache:/var/lib/mitos/cache -v /var/lib/mitos/qa-image-cache:/app/.next/cache "$image" web >/dev/null
ready=false
for attempt in $(seq 1 30);do
 if curl -fsS --max-time 5 "http://127.0.0.1:$port/api/health/ready" >/dev/null;then ready=true;break;fi
 sleep 2
done
if ! $ready;then docker stop -t 20 "$name" >/dev/null;exit 5;fi
for route in / /mitos /tarot /tarot/comprar /sitemap.xml /robots.txt;do curl -fsS --max-time 20 "http://127.0.0.1:$port$route" >/dev/null;done
cp /etc/nginx/mitos-upstream.conf "$work/previous-upstream.conf"
printf 'upstream mitos_web { server 127.0.0.1:%s; keepalive 16; }\n' "$port" > /etc/nginx/mitos-upstream.conf
switched=false
if nginx -t && systemctl reload nginx;then
 for attempt in $(seq 1 15);do
  if curl -fsS --max-time 5 http://127.0.0.1:3080/api/version | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null;then switched=true;break;fi
  sleep 1
 done
fi
if ! $switched;then
 cp "$work/previous-upstream.conf" /etc/nginx/mitos-upstream.conf
 nginx -t && systemctl reload nginx
 docker stop -t 20 "$name" >/dev/null
 echo 'Stage switch failed; previous upstream restored.' >&2;exit 6
fi
# Staging is operator-only; the public source still uses Vercel/Neon. No payment consumer starts.
old_name=$(docker ps --format '{{.Names}} {{.Ports}}' | awk -v needle="127.0.0.1:$old_port->" 'index($0,needle){print $1}')
if test -n "$old_name";then [[ "$old_name" = mitos-qa-* ]] || exit 7;docker stop -t 30 "$old_name" >/dev/null;fi
if docker inspect mitos-qa-editorial-worker >/dev/null 2>&1;then
 docker stop -t 20 mitos-qa-editorial-worker >/dev/null
 docker rename mitos-qa-editorial-worker "mitos-qa-editorial-worker-before-$sha"
fi
docker run -d --name mitos-qa-editorial-worker --restart unless-stopped --log-driver local --log-opt max-size=10m --log-opt max-file=3 --memory 512m --memory-swap 512m --cpus 0.5 --pids-limit 180 --init \
 --env-file /opt/mitos/runtime.env -e NODE_OPTIONS=--max-old-space-size=96 -e MITOS_PG_POOL_MAX=1 -e MITOS_CACHE_DIR=/var/lib/mitos/cache \
 -v /var/lib/mitos/qa-locks:/var/lib/mitos/locks -v /var/lib/mitos/qa-cache:/var/lib/mitos/cache -v /var/lib/mitos/qa-image-cache:/app/.next/cache "$image" admin-worker >/dev/null
jq -n --arg sha "$sha" --arg digest "$digest" --arg container "$name" --argjson port "$port" '{sha:$sha,digest:$digest,container:$container,port:$port,kind:"stage-only",productionAccepted:false}' > "$work/active.json"
cp "$work/active.json" /var/lib/mitos/qa/active.json
trap - EXIT
cat "$work/active.json"
