export function Grid({ children, cols = 3, className = "" }) {
  return (
    <div
      className={`
        grid gap-12
        ${cols === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
        ${cols === 3 ? "grid-cols-1 md:grid-cols-3" : ""}
        ${cols === 4 ? "grid-cols-1 md:grid-cols-4" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
