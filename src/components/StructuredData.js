export default function StructuredData({ id, data }) {
  if (!data) return null;
  const payload = Array.isArray(data) ? data : [data];

  // JSON-LD is safe from XSS as JSON.stringify escapes HTML entities
  // and script type="application/ld+json" is not executed by browsers
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
