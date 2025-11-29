import { Container } from "../ui/container";

export function PageSection({ children, bg = false, className = "" }) {
  return (
    <section
      className={`
        py-24
        ${bg ? "bg-bg-section rounded-section" : ""}
        ${className}
      `}
    >
      <Container>{children}</Container>
    </section>
  );
}
