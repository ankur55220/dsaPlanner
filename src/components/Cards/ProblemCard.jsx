import { Card } from "../ui/Card";
import { P } from "../ui/Typography";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CircularProgress } from "../ui/circular-progress-bar";

export function ProblemCard({
  id,
  title,
  difficulty,
  status,       // "unsolved", "solved", "review"
  progress = 0, // percentage 0-100
  tags = []
}) {
  return (
    <Link to={`/problems/${id}`}>
      <Card
        className={cn(
          "group cursor-pointer transition-all duration-300 p-0 overflow-hidden",
          "hover:shadow-lg hover:-translate-y-1"
        )}
      >
        <div className="p-6 space-y-4 flex items-start gap-4">
          
          {/* Circular Progress */}
          <div className="flex-shrink-0">
            <div className="relative">
              <CircularProgress progress={progress} size={46} />

              {/* Center Text */}
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-text">
                {progress >= 100 ? "✓" : `${Math.round(progress)}%`}
              </span>
            </div>
          </div>

          {/* Problem Content */}
          <div className="flex-grow space-y-2">
            <P className="font-medium text-lg text-text">{title}</P>

            {/* Difficulty */}
            <span
              className={cn(
                "text-xs font-medium px-2 py-1 rounded-md",
                difficulty === "Easy" && "bg-green-100 text-green-700",
                difficulty === "Medium" && "bg-amber-100 text-amber-700",
                difficulty === "Hard" && "bg-red-100 text-red-700"
              )}
            >
              {difficulty}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-slate-200 text-slate-600 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex justify-between items-center">
          {/* Status */}
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-md",
              status === "unsolved" && "bg-slate-200 text-slate-600",
              status === "solved" && "bg-green-100 text-green-700",
              status === "review" && "bg-purple-100 text-purple-700"
            )}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>

          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary" />
        </div>
      </Card>
    </Link>
  );
}
