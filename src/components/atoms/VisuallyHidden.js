/**
 * Atom · VisuallyHidden
 * Oculta contenido visualmente pero lo mantiene accesible a lectores de pantalla.
 */
export function VisuallyHidden({ as: Tag = "span", children, ...props }) {
  return (
    <Tag className="sr-only" {...props}>
      {children}
    </Tag>
  );
}
