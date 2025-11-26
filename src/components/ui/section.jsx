export function Section({ children, className = "", bg = false }) {
  return (
    <section
      className={`
        w-full
        py-24
        ${bg ? "bg-bg-section rounded-section" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
