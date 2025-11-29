export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800 
        shadow-card 
        rounded-xl 
        p-6 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
