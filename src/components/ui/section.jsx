export default function Section({ title, children }) {
  return (
    <div className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  );
}
