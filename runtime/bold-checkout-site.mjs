// CloudFront overwrites the stage marker; a sandbox never redirects to the live source DB.
export function boldCheckoutSite(configuration, stageMarker, canonical, runtime) {
 return runtime === 'aws' && configuration?.environment === 'test' && stageMarker === '1'
  ? 'https://staging.mitosdecolombia.com' : canonical;
}
