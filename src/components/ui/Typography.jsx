export function H1({ children, className = "" }) {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight text-slate-100 ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }) {
  return (
    <h2
      className={`text-2xl font-semibold tracking-tight text-slate-100 ${className}`}
    >
      {children}
    </h2>
  );
}
export function P({ children, className = "" }) {
  return (
    <p className={`text-base leading-relaxed text-text-soft ${className}`}>
      {children}
    </p>
  );
}
export function Muted({ children, className = "" }) {
  return (
    <p className={`text-sm text-text-muted ${className}`}>
      {children}
    </p>
  );
}
