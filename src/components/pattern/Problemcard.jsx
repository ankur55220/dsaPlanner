import { motion as Motion } from "framer-motion";
import Surface from "../ui/Surface";
import { CheckCircle, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProblemCard({ problem, isSolved, onSolve, onUnsolve }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!problem?.id) return;
    navigate(`/problems/${problem.id}`);
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Surface
        className="relative hover:shadow-lg hover:border-indigo-500/40 transition-all cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="absolute top-3 right-3">
          {isSolved ? (
            <CheckCircle
              className="text-emerald-400 cursor-pointer"
              size={22}
              onClick={(e) => {
                e.stopPropagation();
                onUnsolve();
              }}
            />
          ) : (
            <Circle
              className="text-slate-500 cursor-pointer hover:text-indigo-400"
              size={22}
              onClick={(e) => {
                e.stopPropagation();
                onSolve();
              }}
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white">
            {problem.title}
          </h3>

          <div className="flex items-center gap-3 text-sm">
            <span
              className={`px-2 py-1 rounded-md text-xs ${
                problem.difficulty === "easy"
                  ? "bg-emerald-500/20 text-emerald-300"
                  : problem.difficulty === "medium"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {problem.difficulty}
            </span>

            <span className="text-slate-300">
              {problem.source?.toUpperCase()}
            </span>
          </div>

          {problem.summary && (
            <p className="text-slate-400 text-sm leading-relaxed">
              {problem.summary}
            </p>
          )}
        </div>
      </Surface>
    </Motion.div>
  );
}
