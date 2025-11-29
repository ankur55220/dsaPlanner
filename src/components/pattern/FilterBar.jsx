import Surface from "../ui/Surface";
import FilterChip from "../ui/FilterChip";
import { motion as Motion } from "framer-motion";
import SearchInput from "../ui/SearchInput";

export default function FilterBar({ filters, onChange }) {
  return (
    <Surface className="p-4 mb-4">
        <div className="w-full flex items-center mb-3">
          <SearchInput
            value={filters.search}
            onChange={(v) => onChange({ ...filters, search: v })}
            placeholder="Search problems..."
          />
        </div>
      <Motion.div layout className="flex flex-wrap items-center gap-3">
        
        {/* Difficulty */}
        <span className="text-slate-400 text-sm mr-2">Difficulty:</span>
        {["easy", "medium", "hard"].map((d) => (
          <FilterChip
            key={d}
            label={d}
            active={filters.difficulty === d}
            onClick={() =>
              onChange({
                ...filters,
                difficulty: filters.difficulty === d ? null : d,
              })
            }
          />
        ))}

        {/* Divider */}
        <div className="h-6 w-px bg-slate-600 mx-1" />

        {/* Source */}
        <span className="text-slate-400 text-sm mr-2">Source:</span>
        {["lc", "cf", "gfg"].map((s) => (
          <FilterChip
            key={s}
            label={s.toUpperCase()}
            active={filters.source === s}
            onClick={() =>
              onChange({
                ...filters,
                source: filters.source === s ? null : s,
              })
            }
          />
        ))}
      </Motion.div>
    </Surface>
  );
}
