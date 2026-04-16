// Server component — renders JSON-LD as a static <script> in <head>
// No hydration needed since these are inert data scripts

function normalizeUrl(value) {
  if (!value) return "";
  return String(value).trim().replace(/\/+$/, "");
}

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
  const url = normalizeUrl(siteUrl) || "https://www.mitosdecolombia.com";
  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mitos de Colombia",
          url,
          description:
            "Archivo editorial de mitos colombianos, organizado por región, origen y tema.",
          inLanguage: "es",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${url}/mitos?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: "Mitos de Colombia",
            url,
          },
        }}
      />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mitos de Colombia",
          url,
          logo: `${url}/logo_mitos.png`,
        }}
      />
    </>
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  imageUrl,
  keywords,
  siteUrl,
  datePublished,
  dateModified,
  authorName,
}) {
  const cleanUrl = normalizeUrl(url);
  const cleanSiteUrl = normalizeUrl(siteUrl);
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        ...(imageUrl && { image: imageUrl }),
        ...(cleanUrl && { url: cleanUrl, mainEntityOfPage: cleanUrl }),
        inLanguage: "es",
        ...(datePublished && { datePublished }),
        ...((dateModified || datePublished) && {
          dateModified: dateModified || datePublished,
        }),
        author: {
          "@type": "Organization",
          name: authorName || "Mitos de Colombia",
          ...(cleanSiteUrl && { url: cleanSiteUrl }),
        },
        publisher: {
          "@type": "Organization",
          name: "Mitos de Colombia",
          ...(cleanSiteUrl && { url: cleanSiteUrl }),
          ...(cleanSiteUrl && {
            logo: {
              "@type": "ImageObject",
              url: `${cleanSiteUrl}/logo_mitos.png`,
            },
          }),
        },
        ...(keywords && { keywords }),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }) {
  if (!items?.length) return null;
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          ...(item.url && { item: normalizeUrl(item.url) }),
        })),
      }}
    />
  );
}

export function CollectionPageJsonLd({ name, description, url, items = [] }) {
  const cleanUrl = normalizeUrl(url);
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        ...(description && { description }),
        ...(cleanUrl && { url: cleanUrl }),
        inLanguage: "es",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: items.length,
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: normalizeUrl(item.url),
            name: item.name,
          })),
        },
      }}
    />
  );
}

export default JsonLdScript;
