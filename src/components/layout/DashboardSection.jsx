export function DashboardSection({ title, children }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
