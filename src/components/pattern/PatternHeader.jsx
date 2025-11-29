import { motion } from "framer-motion";
import Surface from "../ui/Surface";
import { Badge } from "../ui/badge"; // from shadcn
import PatternProgressRing from "./PatternProgressRing";

export default function PatternHeader({ pattern }) {
  if (!pattern) return null;

  return (
    <div className="relative mb-10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 blur-2xl opacity-40" />

      {/* Foreground */}
      <Surface className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left: Title + Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h1 className="text-3xl font-bold text-white">{pattern.name}</h1>

            {pattern.category && (
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                {pattern.category}
              </Badge>
            )}

            {pattern.description && (
              <p className="text-slate-300 max-w-2xl">
                {pattern.description}
              </p>
            )}
          </motion.div>

          {/* Right: Progress Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <PatternProgressRing
              solved={pattern.solved_count}
              total={pattern.total_problems}
            />
          </motion.div>

        </div>
      </Surface>
    </div>
  );
}
