// Server component — renders JSON-LD as a static <script> in <head>
// No hydration needed since these are inert data scripts

import {
  BRAND_LOGO_PATH,
  BRAND_LOGO_SIZE,
  SITE_ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "../lib/brand";

function normalizeUrl(value) {
  if (!value) return "";
  return String(value).trim().replace(/\/+$/, "");
}

function normalizeCitationUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString().replace(/\/+$/, "")
      : "";
  } catch {
    return "";
  }
}

function JsonLdScript({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function WebsiteJsonLd({ siteUrl }) {
  const url = normalizeUrl(siteUrl) || "https://www.mitosdecolombia.com";
  const organizationId = `${url}/#organization`;
  const logoUrl = `${url}${BRAND_LOGO_PATH}`;

  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${url}/#website`,
          name: SITE_NAME,
          alternateName: SITE_ALTERNATE_NAMES,
          url,
          description: SITE_DESCRIPTION,
          inLanguage: "es-CO",
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
            "@id": organizationId,
          },
        }}
      />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": organizationId,
          name: SITE_NAME,
          url,
          description: SITE_DESCRIPTION,
          logo: {
            "@type": "ImageObject",
            "@id": `${url}/#logo`,
            url: logoUrl,
            contentUrl: logoUrl,
            width: BRAND_LOGO_SIZE,
            height: BRAND_LOGO_SIZE,
            caption: SITE_NAME,
          },
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
  citations = [],
}) {
  const cleanUrl = normalizeUrl(url);
  const cleanSiteUrl = normalizeUrl(siteUrl);
  const cleanCitations = citations
    .map(normalizeCitationUrl)
    .filter(Boolean)
    .filter((citation, index, all) => all.indexOf(citation) === index);
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
          name: authorName || `Equipo editorial de ${SITE_NAME}`,
          ...(cleanSiteUrl && { url: cleanSiteUrl }),
        },
        reviewedBy: {
          "@type": "Organization",
          name: `Equipo editorial de ${SITE_NAME}`,
          ...(cleanSiteUrl && { url: cleanSiteUrl }),
        },
        isAccessibleForFree: true,
        publisher: {
          "@type": "Organization",
          ...(cleanSiteUrl && { "@id": `${cleanSiteUrl}/#organization` }),
          name: SITE_NAME,
          ...(cleanSiteUrl && { url: cleanSiteUrl }),
          ...(cleanSiteUrl && {
            logo: {
              "@type": "ImageObject",
              "@id": `${cleanSiteUrl}/#logo`,
              url: `${cleanSiteUrl}${BRAND_LOGO_PATH}`,
              contentUrl: `${cleanSiteUrl}${BRAND_LOGO_PATH}`,
              width: BRAND_LOGO_SIZE,
              height: BRAND_LOGO_SIZE,
              caption: SITE_NAME,
            },
          }),
        },
        ...(keywords && { keywords }),
        ...(cleanCitations.length && { citation: cleanCitations }),
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

export function ProductJsonLd({ product, variant, siteUrl }) {
  if (!product || !variant) return null;

  const baseUrl = normalizeUrl(siteUrl) || "https://www.mitosdecolombia.com";
  const pageUrl = `${baseUrl}${variant.path}`;
  const imageUrl =
    product.imageStatus === "final" && product.image
      ? new URL(product.image, `${baseUrl}/`).toString()
      : "";
  const offerReady = Boolean(
    product.checkoutReady &&
      Number.isFinite(product.priceCop) &&
      product.priceCop > 0 &&
      product.sellerReady
  );

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: product.name,
        description: variant.subtitle || product.description,
        sku: product.sku,
        url: pageUrl,
        category: "Baraja editorial ilustrada",
        inLanguage: "es-CO",
        brand: {
          "@type": "Brand",
          name: SITE_NAME,
        },
        ...(imageUrl && { image: [imageUrl] }),
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Número de cartas",
            value: product.composition?.total,
          },
          {
            "@type": "PropertyValue",
            name: "Composición",
            value: `${product.composition?.major} arcanos mayores y ${product.composition?.minor} arcanos menores`,
          },
          {
            "@type": "PropertyValue",
            name: "Idioma",
            value: product.composition?.language,
          },
        ],
        ...(offerReady && {
          offers: {
            "@type": "Offer",
            url: pageUrl,
            priceCurrency: product.currency,
            price: product.priceCop,
            availability:
              product.status === "preorder"
                ? "https://schema.org/PreOrder"
                : "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "Organization",
              name: product.seller.legalName,
              taxID: product.seller.legalId,
              email: product.seller.email,
              telephone: product.seller.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: product.seller.address,
                addressCountry: "CO",
              },
            },
            ...(product.shippingIncluded &&
              product.shippingRegionsReady && {
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingRate: {
                    "@type": "MonetaryAmount",
                    value: 0,
                    currency: product.currency,
                  },
                  shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: "CO",
                    addressRegion: product.shippingRegions,
                  },
                },
              }),
          },
        }),
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
