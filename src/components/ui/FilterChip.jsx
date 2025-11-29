export default function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-lg text-sm transition-all
        ${
          active
            ? "bg-indigo-600 text-white shadow-md"
            : "bg-slate-700 text-slate-300 hover:bg-slate-600"
        }
      `}
    >
      {label}
    </button>
  );
}
