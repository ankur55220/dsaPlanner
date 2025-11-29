export default function Surface({ className = "", children, ...props }) {
  return (
    <div
      className={
        "rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 shadow-sm p-5 " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}
