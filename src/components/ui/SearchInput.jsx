export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        px-3 py-1.5 rounded-lg text-sm 
        bg-slate-800 text-slate-200 border border-slate-700 
        placeholder:text-slate-500 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
        transition-all
      "
    />
  );
}
