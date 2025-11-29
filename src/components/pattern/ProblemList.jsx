import ProblemCard from "./Problemcard";
import { motion as Motion } from "framer-motion";
import Section from "../ui/section";

export default function ProblemList({ problems,solved,handleSolve,handleUnsolve }) {
  if (!problems || problems.length === 0) {
    return (
      <Section title="Problems">
        <p className="text-slate-400">No problems found.</p>
      </Section>
    );
  }

  return (
    <Section title="Problems">
      <Motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {problems.map((p) => (
          <ProblemCard
            key={p.id}
            problem={p}
            isSolved={solved.has(p.id)}
            onSolve={() => handleSolve(p.id)}
            onUnsolve={() => handleUnsolve(p.id)}
          />
        ))}
      </Motion.div>
    </Section>
  );
}
