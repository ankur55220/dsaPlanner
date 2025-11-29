import { Card } from "../ui/Card";
import { H2, P } from "../ui/Typography";
import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PatternCard({ 
  id, 
  slug,
  title, 
  description, 
  status, 
  solvedCount = 0,
  totalProblems = 10
}) {
  const progress = (solvedCount / totalProblems) * 100;

  return (
    <Link to={`/patterns/${id}`}>
      <Card
        className={cn(
          "group cursor-pointer transition-all duration-300 p-0 overflow-hidden",
          "hover:shadow-lg hover:-translate-y-1"
        )}
      >
        {/* Header Area */}
        <div className="bg-gradient-soft p-6">
          <H2 className="text-xl mb-2">{title}</H2>
          <P className="text-sm">{description}</P>
        </div>

        {/* Progress Area */}
        <div className="px-6 pt-4 flex flex-col gap-2">
          <P className="text-xs font-medium text-text-muted">
            {solvedCount} / {totalProblems} solved
          </P>

          {/* Soft Progress Bar */}
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-light rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex items-center justify-between">
          {/* Status */}
          <span
            className={cn(
              "text-xs font-medium px-3 py-1 rounded-full",
              status === "mastered" && "bg-green-100 text-green-700",
              status === "in-progress" && "bg-amber-100 text-amber-700",
              status === "not-started" && "bg-slate-200 text-slate-600"
            )}
          >
            {status === "not-started"
              ? "Not Started"
              : status === "in-progress"
              ? "In Progress"
              : "Mastered"}
          </span>

          {/* Arrow */}
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
        </div>
      </Card>
    </Link>
  );
}
