#!/bin/bash
# Quarantined recovery drill: no writer acceptance, public DNS or payment/editorial workers.
set -euo pipefail
umask 027
sha=${1:?};digest=${2:?}
[[ "$sha" =~ ^[a-f0-9]{40}$ && "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || exit 2
test ! -e /opt/mitos/cutover-complete
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
install -d -m 0750 /var/lib/mitos/recovery-stage /opt/mitos
work=/var/lib/mitos/recovery-stage
aws s3 cp "s3://mitos-colombia-907264907058-operations/ci/$sha/release.json" "$work/release.json" --only-show-errors
jq -e --arg sha "$sha" --arg digest "$digest" '.sha==$sha and .digest==$digest and .sourceVerified==false' "$work/release.json" >/dev/null
aws s3 cp s3://mitos-colombia-907264907058-operations/certificates/origin/letsencrypt.tar.gz "$work/certificates.tar.gz" --only-show-errors
# The backup contains only the established origin certificate tree.
if tar -tzf "$work/certificates.tar.gz" | grep -qE '(^/|(^|/)\.\.(/|$))';then exit 3;fi
tar -xzf "$work/certificates.tar.gz" -C /etc
test -s /etc/letsencrypt/live/origin.mitosdecolombia.com/fullchain.pem
openssl x509 -in /etc/letsencrypt/live/origin.mitosdecolombia.com/cert.pem -noout -checkend 86400 >/dev/null
install -m 0600 "$work/runtime.env" /opt/mitos/runtime.env
install -d -o 1001 -g 1001 /var/lib/mitos/qa-cache /var/lib/mitos/qa-image-cache
registry=907264907058.dkr.ecr.us-east-1.amazonaws.com
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin "$registry" >/dev/null
trap 'docker logout "$registry" >/dev/null 2>&1 || true' EXIT
docker pull "$registry/mitos-colombia@$digest" >/dev/null
docker logout "$registry" >/dev/null
docker run -d --name mitos-recovery-stage --restart unless-stopped --memory 768m --memory-swap 768m --cpus 1.5 --pids-limit 160 --init \
 --env-file /opt/mitos/runtime.env -e MITOS_DEPLOYMENT_SHA="$sha" -e MITOS_IMAGE_DIGEST="$digest" -e MITOS_CACHE_DIR=/var/lib/mitos/cache -e NODE_OPTIONS=--max-old-space-size=384 \
 -p 127.0.0.1:3101:3000 -v /var/lib/mitos/qa-cache:/var/lib/mitos/cache -v /var/lib/mitos/qa-image-cache:/app/.next/cache "$registry/mitos-colombia@$digest" web >/dev/null
ready=false
for attempt in $(seq 1 45);do if curl -fsS --max-time 5 http://127.0.0.1:3101/api/health/ready >/dev/null;then ready=true;break;fi;sleep 2;done
$ready
# Render the established header locally from Secrets Manager; never put it in SSM arguments/output.
aws secretsmanager get-secret-value --secret-id mitos-colombia/prod/origin --query SecretString --output text | python3 -c 'import sys,json,pathlib;value=sys.stdin.read().strip();assert len(value)==48 and value.isalnum();p=pathlib.Path("/var/lib/mitos/recovery-stage/nginx.conf.template");s=p.read_text().replace("@ORIGIN_SECRET@",value);dest=pathlib.Path("/etc/nginx/conf.d/mitos.conf");dest.write_text(s);dest.chmod(0o600)'
printf 'upstream mitos_web { server 127.0.0.1:3101; keepalive 16; }\n' > /etc/nginx/mitos-upstream.conf
# The template token placeholder is checked by the operator before this drill.
rm /etc/nginx/conf.d/mitos-maintenance.conf
nginx -t
systemctl reload nginx
for attempt in $(seq 1 15);do if curl -fsS --max-time 5 http://127.0.0.1:3080/api/version | jq -e --arg sha "$sha" '.sha==$sha' >/dev/null;then break;fi;sleep 1;done
for route in / /mitos /tarot /sitemap.xml /robots.txt /api/health/ready;do curl -fsS --max-time 25 "http://127.0.0.1:3080$route" >/dev/null;done
openssl s_client -connect 127.0.0.1:443 -servername origin.mitosdecolombia.com -verify_hostname origin.mitosdecolombia.com -verify_return_error </dev/null > "$work/tls-check.txt" 2>&1
grep -q 'Verify return code: 0 (ok)' "$work/tls-check.txt"
test "$(docker ps --format '{{.Names}}' | wc -l)" = 1
jq -n --arg sha "$sha" --arg digest "$digest" --arg at "$(date -u +%FT%TZ)" '{kind:"quarantined-new-host-recovery",sha:$sha,digest:$digest,at:$at,ready:true,tlsVerified:true,routes:6,workersStarted:false,publicDnsChanged:false,productionAccepted:false}'
