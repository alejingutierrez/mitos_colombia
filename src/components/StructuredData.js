// Server component — renders JSON-LD as a static <script> in <head>
// No hydration needed since these are inert data scripts

function JsonLdScript({ data }) {
  if (!data) return null;
  // JSON.stringify is safe for application/ld+json script tags:
  // the browser does not execute these scripts, and JSON.stringify
  // escapes all string content properly
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd({ siteUrl }) {
  const url = siteUrl || "https://www.mitosdecolombia.com";
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Mitos de Colombia",
        url,
        description:
          "Archivo editorial de mitos colombianos, organizado por region, origen y tema.",
        inLanguage: "es",
        publisher: {
          "@type": "Organization",
          name: "Mitos de Colombia",
          url,
        },
      }}
    />
  );
}

export function ArticleJsonLd({ title, description, url, imageUrl, keywords, siteUrl }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        ...(imageUrl && { image: imageUrl }),
        ...(url && { url }),
        inLanguage: "es",
        publisher: {
          "@type": "Organization",
          name: "Mitos de Colombia",
          ...(siteUrl && { url: siteUrl }),
        },
        ...(keywords && { keywords }),
      }}
    />
  );
}

export default JsonLdScript;
