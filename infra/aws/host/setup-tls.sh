#!/bin/bash
set -euo pipefail
umask 077
test "$(aws sts get-caller-identity --query Account --output text)" = 907264907058
if ! test -x /opt/mitos/acme/bin/certbot; then
  dnf install -y python3.12 python3.12-pip
  python3.12 -m venv /opt/mitos/acme
  /opt/mitos/acme/bin/pip install --disable-pip-version-check certbot==5.8.0
fi
chmod 700 /opt/mitos/dns-challenge.sh /opt/mitos/tls-backup.sh
/opt/mitos/acme/bin/certbot certonly --non-interactive --agree-tos --register-unsafely-without-email --manual --preferred-challenges dns --manual-auth-hook /opt/mitos/dns-challenge.sh --manual-cleanup-hook '/opt/mitos/dns-challenge.sh cleanup' --cert-name origin.mitosdecolombia.com -d origin.mitosdecolombia.com
openssl x509 -in /etc/letsencrypt/live/origin.mitosdecolombia.com/fullchain.pem -noout -checkhost origin.mitosdecolombia.com
openssl x509 -in /etc/letsencrypt/live/origin.mitosdecolombia.com/fullchain.pem -noout -checkend 2592000
python3.12 - <<'PY'
import subprocess,json,os
v=json.loads(subprocess.check_output(['aws','secretsmanager','get-secret-value','--secret-id','arn:aws:secretsmanager:us-east-1:907264907058:secret:mitos-colombia/prod/origin-3oQ31L']))['SecretString']
assert len(v)==48 and v.isalnum()
s=open('/opt/mitos/nginx.conf.template').read().replace('@ORIGIN_SECRET@',v)
p='/etc/nginx/conf.d/mitos.conf';fd=os.open(p,os.O_WRONLY|os.O_CREAT|os.O_TRUNC,0o600)
with os.fdopen(fd,'w') as f:f.write(s)
PY
printf 'upstream mitos_web { server 127.0.0.1:3101; keepalive 16; }\n' > /etc/nginx/mitos-upstream.conf
# Existing maintenance listener remains in force until a healthy candidate is present.
# Remove the duplicate loopback maintenance server after successful config validation.
mv /etc/nginx/conf.d/mitos-maintenance.conf /opt/mitos/mitos-maintenance.conf
if ! nginx -t; then mv /opt/mitos/mitos-maintenance.conf /etc/nginx/conf.d/mitos-maintenance.conf; rm /etc/nginx/conf.d/mitos.conf; exit 1; fi
systemctl reload nginx
/opt/mitos/tls-backup.sh
cat > /etc/systemd/system/mitos-certificate-renew.service <<'UNIT'
[Unit]
Description=Renew only the Mitos origin TLS certificate
After=network-online.target
[Service]
Type=oneshot
ExecStart=/opt/mitos/acme/bin/certbot renew --quiet --cert-name origin.mitosdecolombia.com --deploy-hook /opt/mitos/tls-backup.sh
UNIT
cat > /etc/systemd/system/mitos-certificate-renew.timer <<'UNIT'
[Unit]
Description=Check Mitos origin TLS renewal twice daily
[Timer]
OnCalendar=*-*-* 03,15:00:00
RandomizedDelaySec=3600
Persistent=true
[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
systemctl enable --now mitos-certificate-renew.timer
/opt/mitos/acme/bin/certbot renew --dry-run --cert-name origin.mitosdecolombia.com
