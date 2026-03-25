export default function StructuredData({ id, data }) {
  if (!data) return null;
  const payload = Array.isArray(data) ? data : [data];

  // Escape sequences that can break HTML parsing inside script tags
  const json = JSON.stringify(payload)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
