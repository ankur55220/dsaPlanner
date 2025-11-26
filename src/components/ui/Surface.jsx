export function Surface({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-900 
        rounded-xl 
        shadow-lg 
        p-8 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
