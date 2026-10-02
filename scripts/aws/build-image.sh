#!/bin/bash
set -euo pipefail
[[ "${GITHUB_SHA:?}" =~ ^[a-f0-9]{40}$ ]] || exit 2
[[ "${AWS_ACCOUNT_ID:?}" = 907264907058 && "${AWS_REGION:?}" = us-east-1 && "${ECR_REPOSITORY:?}" = mitos-colombia ]] || exit 2
registry="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com"
image="$registry/$ECR_REPOSITORY:$GITHUB_SHA"
snapshot=$(node -p 'require("./build-input/receipt.json").sha256')
verified=$(node -p 'String(require("./build-input/receipt.json").sourceVerified===true)')
aws ecr get-login-password | docker login --username AWS --password-stdin "$registry"
trap 'docker logout "$registry" >/dev/null 2>&1 || true; docker rm -f mitos-assets >/dev/null 2>&1 || true' EXIT
new_image=false
# A rerun may resume asset publication after a push. It cannot replace a SHA tag.
if digest=$(aws ecr describe-images --repository-name "$ECR_REPOSITORY" --image-ids imageTag="$GITHUB_SHA" --query 'imageDetails[0].imageDigest' --output text 2> build-input/image-lookup.err); then
  image="$registry/$ECR_REPOSITORY@$digest"
  docker pull "$image"
else
  if ! grep -q ImageNotFoundException build-input/image-lookup.err; then cat build-input/image-lookup.err >&2; exit 1; fi
  docker build --platform linux/arm64 --target prod --build-arg MITOS_DEPLOYMENT_SHA="$GITHUB_SHA" --build-arg MITOS_SNAPSHOT_SHA256="$snapshot" --build-arg MITOS_SOURCE_VERIFIED="$verified" --build-arg NEXT_PUBLIC_GA_ID --build-arg NEXT_PUBLIC_GTM_ID -t "$image" .
  new_image=true
fi
docker image inspect --format '{{json .Config.Labels}}' "$image" > build-input/image-labels.json
node scripts/aws/verify-image.mjs
docker run --rm -i --entrypoint node "$image" --input-type=module < scripts/aws/smoke-image.mjs
if $new_image; then
  docker push "$image"
  digest=$(aws ecr describe-images --repository-name "$ECR_REPOSITORY" --image-ids imageTag="$GITHUB_SHA" --query 'imageDetails[0].imageDigest' --output text)
fi
[[ "$digest" =~ ^sha256:[a-f0-9]{64}$ ]] || exit 3
image="$registry/$ECR_REPOSITORY@$digest"
printf 'digest=%s\n' "$digest" >> "$GITHUB_OUTPUT"
node scripts/aws/scan-image.mjs "$digest"
docker create --name mitos-assets "$image"
docker cp mitos-assets:/app/.next/static build-input/static
docker rm mitos-assets
aws s3 cp build-input/static "s3://mitos-colombia-$AWS_ACCOUNT_ID-media/static/$GITHUB_SHA/_next/static/" --recursive --cache-control 'public,max-age=31536000,immutable' --only-show-errors
for helper in deploy.sh deploy-inbox.sh; do
  aws s3 cp "infra/aws/host/$helper" "s3://$OPERATIONS_BUCKET/ci/$GITHUB_SHA/host/$helper" --only-show-errors
done
node scripts/aws/release-receipt.mjs "$digest" > build-input/release.json
aws s3 cp build-input/release.json "s3://$OPERATIONS_BUCKET/ci/$GITHUB_SHA/release.json" --only-show-errors
